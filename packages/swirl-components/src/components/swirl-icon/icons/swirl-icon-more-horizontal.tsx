// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-more-horizontal",
})
export class SwirlIconMoreHorizontal {
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
              d="M3.88334 9.39998C3.49445 9.39998 3.164 9.26109 2.892 8.98331C2.61956 8.70553 2.48334 8.37775 2.48334 7.99998C2.48334 7.61109 2.61956 7.28042 2.892 7.00798C3.164 6.73598 3.49445 6.59998 3.88334 6.59998C4.26112 6.59998 4.58623 6.73598 4.85867 7.00798C5.13067 7.28042 5.26667 7.61109 5.26667 7.99998C5.26667 8.37775 5.13067 8.70553 4.85867 8.98331C4.58623 9.26109 4.26112 9.39998 3.88334 9.39998ZM8 9.39998C7.62223 9.39998 7.29445 9.26109 7.01667 8.98331C6.73889 8.70553 6.6 8.37775 6.6 7.99998C6.6 7.61109 6.73889 7.28042 7.01667 7.00798C7.29445 6.73598 7.62223 6.59998 8 6.59998C8.38889 6.59998 8.71956 6.73598 8.992 7.00798C9.264 7.28042 9.4 7.61109 9.4 7.99998C9.4 8.37775 9.264 8.70553 8.992 8.98331C8.71956 9.26109 8.38889 9.39998 8 9.39998ZM12.1167 9.39998C11.7389 9.39998 11.4138 9.26109 11.1413 8.98331C10.8693 8.70553 10.7333 8.37775 10.7333 7.99998C10.7333 7.61109 10.8693 7.28042 11.1413 7.00798C11.4138 6.73598 11.7389 6.59998 12.1167 6.59998C12.5056 6.59998 12.8362 6.73598 13.1087 7.00798C13.3807 7.28042 13.5167 7.61109 13.5167 7.99998C13.5167 8.37775 13.3807 8.70553 13.1087 8.98331C12.8362 9.26109 12.5056 9.39998 12.1167 9.39998Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M5.82501 14.1C5.24167 14.1 4.74601 13.8917 4.33801 13.475C3.92934 13.0584 3.72501 12.5667 3.72501 12C3.72501 11.4167 3.92934 10.9207 4.33801 10.512C4.74601 10.104 5.24167 9.90002 5.82501 9.90002C6.39167 9.90002 6.87934 10.104 7.28801 10.512C7.69601 10.9207 7.90001 11.4167 7.90001 12C7.90001 12.5667 7.69601 13.0584 7.28801 13.475C6.87934 13.8917 6.39167 14.1 5.82501 14.1ZM12 14.1C11.4333 14.1 10.9417 13.8917 10.525 13.475C10.1083 13.0584 9.90001 12.5667 9.90001 12C9.90001 11.4167 10.1083 10.9207 10.525 10.512C10.9417 10.104 11.4333 9.90002 12 9.90002C12.5833 9.90002 13.0793 10.104 13.488 10.512C13.896 10.9207 14.1 11.4167 14.1 12C14.1 12.5667 13.896 13.0584 13.488 13.475C13.0793 13.8917 12.5833 14.1 12 14.1ZM18.175 14.1C17.6083 14.1 17.1207 13.8917 16.712 13.475C16.304 13.0584 16.1 12.5667 16.1 12C16.1 11.4167 16.304 10.9207 16.712 10.512C17.1207 10.104 17.6083 9.90002 18.175 9.90002C18.7583 9.90002 19.2543 10.104 19.663 10.512C20.071 10.9207 20.275 11.4167 20.275 12C20.275 12.5667 20.071 13.0584 19.663 13.475C19.2543 13.8917 18.7583 14.1 18.175 14.1Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M6.79583 16.45C6.11527 16.45 5.53699 16.2069 5.06099 15.7208C4.58421 15.2347 4.34583 14.6611 4.34583 14C4.34583 13.3194 4.58421 12.7408 5.06099 12.264C5.53699 11.788 6.11527 11.55 6.79583 11.55C7.45694 11.55 8.02588 11.788 8.50266 12.264C8.97866 12.7408 9.21666 13.3194 9.21666 14C9.21666 14.6611 8.97866 15.2347 8.50266 15.7208C8.02588 16.2069 7.45694 16.45 6.79583 16.45ZM14 16.45C13.3389 16.45 12.7653 16.2069 12.2792 15.7208C11.793 15.2347 11.55 14.6611 11.55 14C11.55 13.3194 11.793 12.7408 12.2792 12.264C12.7653 11.788 13.3389 11.55 14 11.55C14.6805 11.55 15.2592 11.788 15.736 12.264C16.212 12.7408 16.45 13.3194 16.45 14C16.45 14.6611 16.212 15.2347 15.736 15.7208C15.2592 16.2069 14.6805 16.45 14 16.45ZM21.2042 16.45C20.543 16.45 19.9741 16.2069 19.4973 15.7208C19.0213 15.2347 18.7833 14.6611 18.7833 14C18.7833 13.3194 19.0213 12.7408 19.4973 12.264C19.9741 11.788 20.543 11.55 21.2042 11.55C21.8847 11.55 22.4634 11.788 22.9402 12.264C23.4162 12.7408 23.6542 13.3194 23.6542 14C23.6542 14.6611 23.4162 15.2347 22.9402 15.7208C22.4634 16.2069 21.8847 16.45 21.2042 16.45Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
