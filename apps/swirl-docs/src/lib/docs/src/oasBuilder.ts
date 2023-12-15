import oasToHar from "@readme/oas-to-har";
import {
  SupportedTargets,
  oasToSnippet,
  supportedLanguages,
} from "@readme/oas-to-snippet";
import { Request } from "har-format";
import Oas, { Operation } from "oas";
import {
  HttpMethods,
  OASDocument,
  PathsObject,
  SchemaObject,
} from "oas/dist/rmoas.types";
import { CodePreviewSelectOptions } from "src/components/CodePreview/types";
import { EndpointMapper } from "./EndpointMapper";
import {
  ApiDocumentation,
  ApiEndpoint,
  Endpoint,
  Operations,
} from "./docs.model";

interface IOASBuilder {
  title: string;
  path: string;
  description: string;
  paths: PathsObject;
  operations: Operations;
  tags: string[];
}

type EndpointWithDetails = Endpoint & {
  description: string;
  isDeprecated: boolean;
  parameters: Array<{
    label: string;
    properties: Array<{
      type: string;
      name: string;
      description: string;
      required: boolean;
    }>;
    requiredProperties: SchemaObject["required"];
  }>;
  request: {
    snippets: Record<SupportedTargets, string>;
    request: Request;
  };
  responseExamples: CodePreviewSelectOptions;
};

const OAS = (Oas as any).default || Oas;
const OASToHar = (oasToHar as any).default || oasToHar;

export default class OASBuilder implements IOASBuilder {
  private static X_FLIP_API_NAME = "x-flip-api-name";
  private static X_FLIP_RESOURCE_NAME = "x-flip-resource-name";
  private static X_FLIP_INTERNAL = "x-flip-internal";

  private _oasDocument: OASDocument = {} as OASDocument;
  private _oas: Oas = new OAS({} as OASDocument);
  private endpointMapper = new EndpointMapper();

  public title: string = "";
  public shortDescription: string = "";
  public path: string = "";
  public description: string = "";
  public paths: PathsObject = {};
  public operations: Operations = {};
  public endpoints: Endpoint[] = [];
  public detailedEndpoints: EndpointWithDetails[] = [];
  public tags: string[] = [];

  public apiDocumentations: Array<ApiDocumentation> = [];

  constructor(oasDocument: OASDocument) {
    this.initializeProperties(oasDocument);
  }

  private initializeProperties(oasDocument: OASDocument) {
    this._oasDocument = oasDocument;
    this._oas = new OAS(oasDocument);
  }

  private createParameters(
    parametersAsJsonSchema: ReturnType<
      Endpoint["operation"]["getParametersAsJSONSchema"]
    >
  ): EndpointWithDetails["parameters"] {
    return parametersAsJsonSchema.map((schemaWrapper) => {
      const requiredParams = schemaWrapper.schema.required || [];
      const allProperties = schemaWrapper.schema.properties || {};
      const paramLabel = schemaWrapper.label || "";

      if (typeof allProperties === "object" && Array.isArray(requiredParams)) {
        const propertyKeys = Object.keys(allProperties);
        const properties = propertyKeys.map((propertyKey) => {
          const isRequired = Boolean(requiredParams.includes(propertyKey));
          const property = allProperties[propertyKey] as SchemaObject;
          return {
            type: property.type as string,
            name: propertyKey,
            description: property.description || "",
            required: isRequired,
          };
        });

        return {
          label: paramLabel,
          properties: properties,
          requiredProperties: requiredParams,
        };
      }

      return {
        label: paramLabel,
        properties: [],
        requiredProperties: requiredParams,
      };
    });
  }

  public setDetailedEndpoints() {
    this.endpoints.forEach((apiEndpoint) => {
      const requestPreview = this.generateRequest(apiEndpoint.operation);
      const parameterSchemas =
        apiEndpoint.operation.getParametersAsJSONSchema() || [];

      const parameters: EndpointWithDetails["parameters"] =
        this.createParameters(parameterSchemas);

      this.detailedEndpoints.push({
        ...apiEndpoint,
        description: apiEndpoint.operation.getDescription(),
        isDeprecated: apiEndpoint.operation.isDeprecated(),
        request: {
          ...requestPreview,
        },
        responseExamples: this.generateResponseExamples(apiEndpoint.operation),
        parameters: parameters,
      });
    });

    return this;
  }

  public async dereference() {
    await this._oas.dereference().then(() => console.log("Dereferenced!"));
    return this;
  }

  public get oas() {
    return this._oas;
  }

  public get oasDocument() {
    return this._oasDocument;
  }

  public setApiDocumentations() {
    const apiDocumentations: {
      [apiName: string]: {
        id: string;
        resources: {
          [resourceName: string]: {
            id: string;
            endpoints: { [endpointName: string]: ApiEndpoint };
          };
        };
      };
    } = {};

    Object.entries(this._oas.api.paths ?? {}).forEach(
      ([path, pathItemObject]) => {
        if (!pathItemObject) {
          return;
        }

        Object.keys(pathItemObject)
          .filter((method) => method !== "parameters")
          .forEach((pathItemObject) => {
            const operation = this._oas.operation(
              path,
              pathItemObject as HttpMethods
            );

            const isInternal = operation.getExtension(
              OASBuilder.X_FLIP_INTERNAL
            );

            if (
              isInternal &&
              process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE !== "staging"
            ) {
              return;
            }

            const apiName = operation.getExtension(
              OASBuilder.X_FLIP_API_NAME
            ) as string;

            if (!apiName) {
              return;
            }

            const resourceName = operation.getExtension(
              OASBuilder.X_FLIP_RESOURCE_NAME
            ) as string;

            if (!resourceName) {
              return;
            }

            const endpoint = {
              ...this.endpointMapper.mapEndpoint(operation, this),
              method: pathItemObject as HttpMethods,
            };

            const endpoints = {
              ...(apiDocumentations[apiName]?.resources?.[resourceName]
                ?.endpoints || {}),
              [operation.getOperationId()]: endpoint,
            };

            const resources = {
              ...apiDocumentations[apiName]?.resources,
              [resourceName]: {
                id: resourceName,
                endpoints,
              },
            };

            apiDocumentations[apiName] = {
              id: apiName,
              resources,
            };
          });
      }
    );

    this.apiDocumentations = Object.entries(apiDocumentations)
      .map(([apiName, api]) => {
        return {
          id: api.id,
          title: this.getDisplayNameFromExtension(apiName),
          resources: Object.entries(api.resources).map(
            ([resourceName, resource]) => ({
              id: resource.id,
              title: this.getDisplayNameFromExtension(resourceName),
              shortDescription: "",
              endpoints: Object.values(resource.endpoints),
            })
          ),
        };
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    return this;
  }

  private getDisplayNameFromExtension(extension: string) {
    return extension
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  public setDescription() {
    this.description = this._oas.api.info.description || "";
    return this;
  }

  public setEndpoints() {
    this.paths = this._oas.api.paths || {};
    return this;
  }

  public setTitleAndPath() {
    this.title = this._oas.api.info.title;
    this.shortDescription =
      this._oas.api.info.description?.split("# Changelog")[0] || "";
    this.path = this.title.toLowerCase().replaceAll(" ", "-");
    return this;
  }

  public setOperations() {
    if (Object.keys(this.paths).length === 0) {
      this.paths = this._oas.api.paths || {};
    }

    for (const path in this.paths) {
      const operationInPaths = this.paths[path];

      const methods = Object.keys(operationInPaths ?? {}).filter(
        (method) => method !== "parameters" && method !== "description"
      ) as HttpMethods[];

      methods.forEach((operation) => {
        const oasOperation = this._oas.operation(path, operation);
        if (!this.operations[operation]) {
          this.operations[operation] = [];
        }
        this.operations[operation]?.push({
          title:
            oasOperation.getSummary() ||
            oasOperation
              .getOperationId()
              .replaceAll("-", " ")
              .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize first letter of each word
          path: `/${this.path}#${oasOperation.getOperationId()}`.replaceAll(
            ".",
            ""
          ),
          operation: oasOperation,
        });
      });
    }

    for (const operation in this.operations) {
      const endpoints = this.operations[operation as HttpMethods];

      endpoints?.forEach((endpoint) => {
        this.endpoints.push(endpoint);
      });
    }

    return this;
  }

  public setTags() {
    this.tags = this._oas.getTags();
    return this;
  }

  public generateRequest(operation: Operation): {
    snippets: EndpointWithDetails["request"]["snippets"];
    request: EndpointWithDetails["request"]["request"];
  } {
    const har = OASToHar(this.oas, operation);
    const harRequest = har.log.entries[0].request;
    const body = operation.getRequestBodyExamples()[0]?.examples[0]?.value;

    const allLanguages = Object.keys(supportedLanguages) as SupportedTargets[];
    const allLanguageSnippets = allLanguages.map((language) => [
      language,
      String(
        oasToSnippet(
          this.oas,
          operation,
          {
            body,
          },
          {},
          language
        ).code
      ),
    ]);

    return {
      snippets: Object.fromEntries(allLanguageSnippets) as Record<
        SupportedTargets,
        string
      >,
      request: {
        ...harRequest,
        url: operation.path,
      },
    };
  }

  public generateResponseExamples(operation: Operation) {
    const responseExamplesList = operation.getResponseExamples();
    const responseExamples = responseExamplesList.reduce(
      (acc: CodePreviewSelectOptions, example) => {
        const firstMediaTypeCode = Object.values(
          example.mediaTypes
        )[0] as Array<unknown>;

        if (firstMediaTypeCode) {
          acc[example.status] = JSON.stringify(
            // @ts-ignore
            firstMediaTypeCode[0].value,
            null,
            2
          );
        }

        return acc;
      },
      {}
    );

    return responseExamples;
  }
}

function computeValue<V>(
  record: Record<string, V> | undefined,
  key: string,
  callback: (v?: V) => V
) {
  const value = callback(record?.[key]);
  if (record) record[key] = value;
  return record || { [key]: value };
}
