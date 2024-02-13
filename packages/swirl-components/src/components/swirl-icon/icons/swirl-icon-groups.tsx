// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-groups",
})
export class SwirlIconGroups {
  @Prop() color?: SwirlIconColor;
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const styles = {
      color: Boolean(this.color) ? `var(--s-icon-${this.color})` : undefined,
    };

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        aria-hidden="true"
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        style={styles}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M0.666667 12C0.477778 12 0.319556 11.936 0.192 11.808C0.064 11.6804 0 11.5222 0 11.3333V10.95C0 10.4611 0.244444 10.0693 0.733333 9.77467C1.22222 9.48044 1.86667 9.33333 2.66667 9.33333C2.81111 9.33333 2.94733 9.33889 3.07533 9.35C3.20289 9.36111 3.32778 9.37778 3.45 9.4C3.29444 9.62222 3.18044 9.86111 3.108 10.1167C3.036 10.3722 3 10.6444 3 10.9333V12H0.666667ZM4.66667 12C4.47778 12 4.31933 11.936 4.19133 11.808C4.06378 11.6804 4 11.5222 4 11.3333V10.9333C4 10.2111 4.36956 9.62489 5.10867 9.17467C5.84733 8.72489 6.81111 8.5 8 8.5C9.2 8.5 10.1667 8.72489 10.9 9.17467C11.6333 9.62489 12 10.2111 12 10.9333V11.3333C12 11.5222 11.936 11.6804 11.808 11.808C11.6804 11.936 11.5222 12 11.3333 12H4.66667ZM13 12V10.9333C13 10.6444 12.9611 10.3722 12.8833 10.1167C12.8056 9.86111 12.6944 9.62222 12.55 9.4C12.6722 9.37778 12.7973 9.36111 12.9253 9.35C13.0529 9.33889 13.1889 9.33333 13.3333 9.33333C14.1333 9.33333 14.7778 9.48044 15.2667 9.77467C15.7556 10.0693 16 10.4611 16 10.95V11.3333C16 11.5222 15.936 11.6804 15.808 11.808C15.6804 11.936 15.5222 12 15.3333 12H13ZM8 9.83333C7.36667 9.83333 6.8 9.91933 6.3 10.0913C5.8 10.2638 5.50556 10.4556 5.41667 10.6667H10.5833C10.4833 10.4444 10.1862 10.25 9.692 10.0833C9.19733 9.91667 8.63333 9.83333 8 9.83333ZM2.66667 8.66667C2.3 8.66667 1.98622 8.536 1.72533 8.27467C1.464 8.01378 1.33333 7.7 1.33333 7.33333C1.33333 6.96667 1.464 6.65267 1.72533 6.39133C1.98622 6.13044 2.3 6 2.66667 6C3.03333 6 3.34711 6.13044 3.608 6.39133C3.86933 6.65267 4 6.96667 4 7.33333C4 7.7 3.86933 8.01378 3.608 8.27467C3.34711 8.536 3.03333 8.66667 2.66667 8.66667ZM13.3333 8.66667C12.9667 8.66667 12.6527 8.536 12.3913 8.27467C12.1304 8.01378 12 7.7 12 7.33333C12 6.96667 12.1304 6.65267 12.3913 6.39133C12.6527 6.13044 12.9667 6 13.3333 6C13.7 6 14.014 6.13044 14.2753 6.39133C14.5362 6.65267 14.6667 6.96667 14.6667 7.33333C14.6667 7.7 14.5362 8.01378 14.2753 8.27467C14.014 8.536 13.7 8.66667 13.3333 8.66667ZM8 8C7.44444 8 6.97222 7.80556 6.58333 7.41667C6.19444 7.02778 6 6.55556 6 6C6 5.44444 6.19444 4.97222 6.58333 4.58333C6.97222 4.19444 7.44444 4 8 4C8.55556 4 9.02778 4.19444 9.41667 4.58333C9.80556 4.97222 10 5.44444 10 6C10 6.55556 9.80556 7.02778 9.41667 7.41667C9.02778 7.80556 8.55556 8 8 8ZM8 5.33333C7.81111 5.33333 7.65289 5.39711 7.52533 5.52467C7.39733 5.65267 7.33333 5.81111 7.33333 6C7.33333 6.18889 7.39733 6.34711 7.52533 6.47467C7.65289 6.60267 7.81111 6.66667 8 6.66667C8.18889 6.66667 8.34733 6.60267 8.47533 6.47467C8.60289 6.34711 8.66667 6.18889 8.66667 6C8.66667 5.81111 8.60289 5.65267 8.47533 5.52467C8.34733 5.39711 8.18889 5.33333 8 5.33333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M1 18C0.716667 18 0.479333 17.904 0.288 17.712C0.096 17.5207 0 17.2833 0 17V16.425C0 15.6917 0.366667 15.104 1.1 14.662C1.83333 14.2207 2.8 14 4 14C4.21667 14 4.421 14.0083 4.613 14.025C4.80433 14.0417 4.99167 14.0667 5.175 14.1C4.94167 14.4333 4.77067 14.7917 4.662 15.175C4.554 15.5583 4.5 15.9667 4.5 16.4V18H1ZM7 18C6.71667 18 6.479 17.904 6.287 17.712C6.09567 17.5207 6 17.2833 6 17V16.4C6 15.3167 6.55433 14.4373 7.663 13.762C8.771 13.0873 10.2167 12.75 12 12.75C13.8 12.75 15.25 13.0873 16.35 13.762C17.45 14.4373 18 15.3167 18 16.4V17C18 17.2833 17.904 17.5207 17.712 17.712C17.5207 17.904 17.2833 18 17 18H7ZM19.5 18V16.4C19.5 15.9667 19.4417 15.5583 19.325 15.175C19.2083 14.7917 19.0417 14.4333 18.825 14.1C19.0083 14.0667 19.196 14.0417 19.388 14.025C19.5793 14.0083 19.7833 14 20 14C21.2 14 22.1667 14.2207 22.9 14.662C23.6333 15.104 24 15.6917 24 16.425V17C24 17.2833 23.904 17.5207 23.712 17.712C23.5207 17.904 23.2833 18 23 18H19.5ZM12 14.75C11.05 14.75 10.2 14.879 9.45 15.137C8.7 15.3957 8.25833 15.6833 8.125 16H15.875C15.725 15.6667 15.2793 15.375 14.538 15.125C13.796 14.875 12.95 14.75 12 14.75ZM4 13C3.45 13 2.97933 12.804 2.588 12.412C2.196 12.0207 2 11.55 2 11C2 10.45 2.196 9.979 2.588 9.587C2.97933 9.19567 3.45 9 4 9C4.55 9 5.02067 9.19567 5.412 9.587C5.804 9.979 6 10.45 6 11C6 11.55 5.804 12.0207 5.412 12.412C5.02067 12.804 4.55 13 4 13ZM20 13C19.45 13 18.979 12.804 18.587 12.412C18.1957 12.0207 18 11.55 18 11C18 10.45 18.1957 9.979 18.587 9.587C18.979 9.19567 19.45 9 20 9C20.55 9 21.021 9.19567 21.413 9.587C21.8043 9.979 22 10.45 22 11C22 11.55 21.8043 12.0207 21.413 12.412C21.021 12.804 20.55 13 20 13ZM12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9C9 8.16667 9.29167 7.45833 9.875 6.875C10.4583 6.29167 11.1667 6 12 6C12.8333 6 13.5417 6.29167 14.125 6.875C14.7083 7.45833 15 8.16667 15 9C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12ZM12 8C11.7167 8 11.4793 8.09567 11.288 8.287C11.096 8.479 11 8.71667 11 9C11 9.28333 11.096 9.52067 11.288 9.712C11.4793 9.904 11.7167 10 12 10C12.2833 10 12.521 9.904 12.713 9.712C12.9043 9.52067 13 9.28333 13 9C13 8.71667 12.9043 8.479 12.713 8.287C12.521 8.09567 12.2833 8 12 8Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M1.16667 21C0.836111 21 0.559222 20.888 0.336 20.664C0.112 20.4408 0 20.1639 0 19.8333V19.1625C0 18.3069 0.427778 17.6213 1.28333 17.1057C2.13889 16.5908 3.26667 16.3333 4.66667 16.3333C4.91944 16.3333 5.15783 16.3431 5.38183 16.3625C5.60506 16.3819 5.82361 16.4111 6.0375 16.45C5.76528 16.8389 5.56578 17.2569 5.439 17.7042C5.313 18.1514 5.25 18.6278 5.25 19.1333V21H1.16667ZM8.16667 21C7.83611 21 7.55883 20.888 7.33483 20.664C7.11161 20.4408 7 20.1639 7 19.8333V19.1333C7 17.8694 7.64672 16.8436 8.94017 16.0557C10.2328 15.2686 11.9194 14.875 14 14.875C16.1 14.875 17.7917 15.2686 19.075 16.0557C20.3583 16.8436 21 17.8694 21 19.1333V19.8333C21 20.1639 20.888 20.4408 20.664 20.664C20.4408 20.888 20.1639 21 19.8333 21H8.16667ZM22.75 21V19.1333C22.75 18.6278 22.6819 18.1514 22.5458 17.7042C22.4097 17.2569 22.2153 16.8389 21.9625 16.45C22.1764 16.4111 22.3953 16.3819 22.6193 16.3625C22.8426 16.3431 23.0806 16.3333 23.3333 16.3333C24.7333 16.3333 25.8611 16.5908 26.7167 17.1057C27.5722 17.6213 28 18.3069 28 19.1625V19.8333C28 20.1639 27.888 20.4408 27.664 20.664C27.4408 20.888 27.1639 21 26.8333 21H22.75ZM14 17.2083C12.8917 17.2083 11.9 17.3588 11.025 17.6598C10.15 17.9616 9.63472 18.2972 9.47917 18.6667H18.5208C18.3458 18.2778 17.8259 17.9375 16.961 17.6458C16.0953 17.3542 15.1083 17.2083 14 17.2083ZM4.66667 15.1667C4.025 15.1667 3.47589 14.938 3.01933 14.4807C2.562 14.0241 2.33333 13.475 2.33333 12.8333C2.33333 12.1917 2.562 11.6422 3.01933 11.1848C3.47589 10.7283 4.025 10.5 4.66667 10.5C5.30833 10.5 5.85744 10.7283 6.314 11.1848C6.77133 11.6422 7 12.1917 7 12.8333C7 13.475 6.77133 14.0241 6.314 14.4807C5.85744 14.938 5.30833 15.1667 4.66667 15.1667ZM23.3333 15.1667C22.6917 15.1667 22.1422 14.938 21.6848 14.4807C21.2283 14.0241 21 13.475 21 12.8333C21 12.1917 21.2283 11.6422 21.6848 11.1848C22.1422 10.7283 22.6917 10.5 23.3333 10.5C23.975 10.5 24.5245 10.7283 24.9818 11.1848C25.4384 11.6422 25.6667 12.1917 25.6667 12.8333C25.6667 13.475 25.4384 14.0241 24.9818 14.4807C24.5245 14.938 23.975 15.1667 23.3333 15.1667ZM14 14C13.0278 14 12.2014 13.6597 11.5208 12.9792C10.8403 12.2986 10.5 11.4722 10.5 10.5C10.5 9.52778 10.8403 8.70139 11.5208 8.02083C12.2014 7.34028 13.0278 7 14 7C14.9722 7 15.7986 7.34028 16.4792 8.02083C17.1597 8.70139 17.5 9.52778 17.5 10.5C17.5 11.4722 17.1597 12.2986 16.4792 12.9792C15.7986 13.6597 14.9722 14 14 14ZM14 9.33333C13.6694 9.33333 13.3926 9.44494 13.1693 9.66817C12.9453 9.89217 12.8333 10.1694 12.8333 10.5C12.8333 10.8306 12.9453 11.1074 13.1693 11.3307C13.3926 11.5547 13.6694 11.6667 14 11.6667C14.3306 11.6667 14.6078 11.5547 14.8318 11.3307C15.0551 11.1074 15.1667 10.8306 15.1667 10.5C15.1667 10.1694 15.0551 9.89217 14.8318 9.66817C14.6078 9.44494 14.3306 9.33333 14 9.33333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
