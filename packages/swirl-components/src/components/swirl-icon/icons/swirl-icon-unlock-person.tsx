// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-unlock-person",
})
export class SwirlIconUnlockPerson {
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
              d="M3.99733 13.3339V6.66724H11.9973V7.3339C12.464 7.3339 12.9107 7.40057 13.3307 7.52724V6.66724C13.3307 5.9339 12.7307 5.3339 11.9973 5.3339H3.99733C3.264 5.3339 2.664 5.9339 2.664 6.66724V13.3339C2.664 14.0672 3.264 14.6672 3.99733 14.6672H8.17067C7.89067 14.2672 7.67067 13.8139 7.524 13.3339H3.99733ZM9.99733 5.3339H5.99733Z"
              fill="currentColor"
            />
            <path
              d="M11.9973 8.66724C10.1573 8.66724 8.664 10.1606 8.664 12.0006C8.664 13.8406 10.1573 15.3339 11.9973 15.3339C13.8373 15.3339 15.3307 13.8406 15.3307 12.0006C15.3307 10.1606 13.8373 8.66724 11.9973 8.66724ZM11.9973 10.0006C12.5507 10.0006 12.9973 10.4472 12.9973 11.0006C12.9973 11.5539 12.5507 12.0006 11.9973 12.0006C11.444 12.0006 10.9973 11.5539 10.9973 11.0006C10.9973 10.4472 11.444 10.0006 11.9973 10.0006ZM11.9973 14.0006C11.3107 14.0006 10.704 13.6539 10.344 13.1206C10.8307 12.8406 11.3907 12.6672 11.9973 12.6672C12.604 12.6672 13.164 12.8406 13.6507 13.1206C13.2907 13.6539 12.684 14.0006 11.9973 14.0006Z"
              fill="currentColor"
            />
            <path
              d="M11.3307 5.3339V4.00057C11.3307 2.16057 9.83734 0.667236 7.99734 0.667236C6.15734 0.667236 4.664 2.16057 4.664 4.00057H5.99734C5.99734 2.8939 6.89067 2.00057 7.99734 2.00057C9.104 2.00057 9.99734 2.8939 9.99734 4.00057L9.99733 5.3339L11.3307 5.3339Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M5.99597 20.0007V10.0007H17.996V11.0007C18.696 11.0007 19.366 11.1007 19.996 11.2907V10.0007C19.996 8.90073 19.096 8.00073 17.996 8.00073H5.99597C4.89597 8.00073 3.99597 8.90073 3.99597 10.0007V20.0007C3.99597 21.1007 4.89597 22.0007 5.99597 22.0007H12.256C11.836 21.4007 11.506 20.7207 11.286 20.0007H5.99597ZM14.996 8.00073H8.99597Z"
              fill="currentColor"
            />
            <path
              d="M17.996 13.0007C15.236 13.0007 12.996 15.2407 12.996 18.0007C12.996 20.7607 15.236 23.0007 17.996 23.0007C20.756 23.0007 22.996 20.7607 22.996 18.0007C22.996 15.2407 20.756 13.0007 17.996 13.0007ZM17.996 15.0007C18.826 15.0007 19.496 15.6707 19.496 16.5007C19.496 17.3307 18.826 18.0007 17.996 18.0007C17.166 18.0007 16.496 17.3307 16.496 16.5007C16.496 15.6707 17.166 15.0007 17.996 15.0007ZM17.996 21.0007C16.966 21.0007 16.056 20.4807 15.516 19.6807C16.246 19.2607 17.086 19.0007 17.996 19.0007C18.906 19.0007 19.746 19.2607 20.476 19.6807C19.936 20.4807 19.026 21.0007 17.996 21.0007Z"
              fill="currentColor"
            />
            <path
              d="M16.996 8.00073V6.00073C16.996 3.24073 14.756 1.00073 11.996 1.00073C9.23597 1.00073 6.99597 3.24073 6.99597 6.00073H8.99597C8.99597 4.34073 10.336 3.00073 11.996 3.00073C13.656 3.00073 14.996 4.34073 14.996 6.00073L14.996 8.00073L16.996 8.00073Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M6.99532 23.3341V11.6675H20.9953V12.8341C21.812 12.8341 22.5937 12.9508 23.3287 13.1725V11.6675C23.3287 10.3841 22.2787 9.33415 20.9953 9.33415H6.99532C5.71199 9.33415 4.66199 10.3841 4.66199 11.6675V23.3341C4.66199 24.6175 5.71199 25.6675 6.99532 25.6675H14.2987C13.8087 24.9675 13.4237 24.1741 13.167 23.3341H6.99532ZM17.4953 9.33415H10.4953Z"
              fill="currentColor"
            />
            <path
              d="M20.9953 15.1675C17.7753 15.1675 15.162 17.7808 15.162 21.0008C15.162 24.2208 17.7753 26.8341 20.9953 26.8341C24.2153 26.8341 26.8287 24.2208 26.8287 21.0008C26.8287 17.7808 24.2153 15.1675 20.9953 15.1675ZM20.9953 17.5008C21.9637 17.5008 22.7453 18.2825 22.7453 19.2508C22.7453 20.2191 21.9637 21.0008 20.9953 21.0008C20.027 21.0008 19.2453 20.2191 19.2453 19.2508C19.2453 18.2825 20.027 17.5008 20.9953 17.5008ZM20.9953 24.5008C19.7937 24.5008 18.732 23.8941 18.102 22.9608C18.9537 22.4708 19.9337 22.1675 20.9953 22.1675C22.057 22.1675 23.037 22.4708 23.8887 22.9608C23.2587 23.8941 22.197 24.5008 20.9953 24.5008Z"
              fill="currentColor"
            />
            <path
              d="M19.8287 9.33415V7.00081C19.8287 3.78081 17.2153 1.16748 13.9953 1.16748C10.7753 1.16748 8.16199 3.78081 8.16199 7.00081H10.4953C10.4953 5.06415 12.0587 3.50081 13.9953 3.50081C15.932 3.50081 17.4953 5.06415 17.4953 7.00081L17.4953 9.33415L19.8287 9.33415Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
