// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-image",
})
export class SwirlIconImage {
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
              d="M4.66667 11.3333H11.3333C11.4667 11.3333 11.5667 11.2722 11.6333 11.15C11.7 11.0278 11.6889 10.9111 11.6 10.8L9.76667 8.35C9.7 8.26111 9.61111 8.21667 9.5 8.21667C9.38889 8.21667 9.3 8.26111 9.23333 8.35L7.5 10.6667L6.26667 9.01667C6.2 8.92778 6.11111 8.88333 6 8.88333C5.88889 8.88333 5.8 8.92778 5.73333 9.01667L4.4 10.8C4.31111 10.9111 4.3 11.0278 4.36667 11.15C4.43333 11.2722 4.53333 11.3333 4.66667 11.3333ZM3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M7 17H17C17.2 17 17.35 16.9083 17.45 16.725C17.55 16.5417 17.5333 16.3667 17.4 16.2L14.65 12.525C14.55 12.3917 14.4167 12.325 14.25 12.325C14.0833 12.325 13.95 12.3917 13.85 12.525L11.25 16L9.4 13.525C9.3 13.3917 9.16667 13.325 9 13.325C8.83333 13.325 8.7 13.3917 8.6 13.525L6.6 16.2C6.46667 16.3667 6.45 16.5417 6.55 16.725C6.65 16.9083 6.8 17 7 17ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H19V5H5V19Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M8.16667 19.8333H19.8333C20.0667 19.8333 20.2417 19.7264 20.3583 19.5125C20.475 19.2986 20.4556 19.0944 20.3 18.9L17.0917 14.6125C16.975 14.4569 16.8194 14.3792 16.625 14.3792C16.4306 14.3792 16.275 14.4569 16.1583 14.6125L13.125 18.6667L10.9667 15.7792C10.85 15.6236 10.6944 15.5458 10.5 15.5458C10.3056 15.5458 10.15 15.6236 10.0333 15.7792L7.7 18.9C7.54444 19.0944 7.525 19.2986 7.64167 19.5125C7.75833 19.7264 7.93333 19.8333 8.16667 19.8333ZM5.83333 24.5C5.19167 24.5 4.64217 24.2717 4.18483 23.8152C3.72828 23.3578 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72828 4.64217 4.18483 4.18483C4.64217 3.72828 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3578 3.72828 23.8152 4.18483C24.2717 4.64217 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2717 23.3578 23.8152 23.8152C23.3578 24.2717 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
