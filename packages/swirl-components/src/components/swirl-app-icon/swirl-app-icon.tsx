import { Component, h, Host, Prop, State } from "@stencil/core";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "swirl-app-icon.css",
  tag: "swirl-app-icon",
})
export class SwirlAppIcon {
  @Prop() icon?: string;
  @Prop() src?: string;

  @State() imageAvailable: boolean | undefined;

  private setImageAvailable = () => {
    this.imageAvailable = true;
  };

  private setImageUnavailable = () => {
    this.imageAvailable = false;
  };

  render() {
    const showImage =
      Boolean(this.src) &&
      (this.imageAvailable || this.imageAvailable === undefined);

    const showIcon = !showImage && Boolean(this.icon);
    const showFallbackIcon = !showImage && !showIcon;

    const className = classnames("app-icon", {
      "app-icon--has-icon": showIcon || showFallbackIcon,
    });

    return (
      <Host>
        <span class={className}>
          {showImage && (
            <img
              alt=""
              height="256"
              onError={this.setImageUnavailable}
              onLoad={this.setImageAvailable}
              src={this.src}
              width="256"
            />
          )}
          {showIcon && (
            <span class="app-icon__icon" innerHTML={this.icon}></span>
          )}
        </span>
      </Host>
    );
  }
}
