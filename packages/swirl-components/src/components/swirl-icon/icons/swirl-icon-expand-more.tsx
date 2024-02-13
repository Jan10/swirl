// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-expand-more",
})
export class SwirlIconExpandMore {
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
              d="M7.99999 10.05C7.89999 10.05 7.80554 10.0334 7.71665 10C7.62777 9.9667 7.54443 9.9167 7.46665 9.85003L4.38332 6.7667C4.23888 6.62225 4.16954 6.44714 4.17532 6.24137C4.18065 6.03603 4.25554 5.86114 4.39999 5.7167C4.54443 5.57225 4.72221 5.50003 4.93332 5.50003C5.14443 5.50003 5.32221 5.57225 5.46665 5.7167L7.99999 8.25003L10.55 5.70003C10.6944 5.55559 10.8695 5.48625 11.0753 5.49203C11.2807 5.49737 11.4555 5.57225 11.6 5.7167C11.7444 5.86114 11.8167 6.03892 11.8167 6.25003C11.8167 6.46114 11.7444 6.63892 11.6 6.78337L8.53332 9.85003C8.45554 9.9167 8.37221 9.9667 8.28332 10C8.19443 10.0334 8.09999 10.05 7.99999 10.05V10.05Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 15.075C11.85 15.075 11.7083 15.05 11.575 15C11.4417 14.95 11.3167 14.875 11.2 14.775L6.57501 10.15C6.35835 9.93338 6.25435 9.67072 6.26301 9.36205C6.27101 9.05405 6.38335 8.79172 6.60001 8.57505C6.81668 8.35838 7.08335 8.25005 7.40001 8.25005C7.71668 8.25005 7.98335 8.35838 8.20001 8.57505L12 12.375L15.825 8.55005C16.0417 8.33338 16.3043 8.22938 16.613 8.23805C16.921 8.24605 17.1833 8.35838 17.4 8.57505C17.6167 8.79172 17.725 9.05838 17.725 9.37505C17.725 9.69172 17.6167 9.95838 17.4 10.175L12.8 14.775C12.6833 14.875 12.5583 14.95 12.425 15C12.2917 15.05 12.15 15.075 12 15.075Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 17.5876C13.825 17.5876 13.6597 17.5584 13.5042 17.5001C13.3486 17.4417 13.2028 17.3542 13.0667 17.2376L7.67083 11.8417C7.41805 11.5889 7.29672 11.2825 7.30683 10.9224C7.31616 10.5631 7.44722 10.257 7.69999 10.0042C7.95277 9.75145 8.26388 9.62506 8.63333 9.62506C9.00277 9.62506 9.31388 9.75145 9.56666 10.0042L14 14.4376L18.4625 9.97506C18.7153 9.72228 19.0217 9.60095 19.3818 9.61106C19.7412 9.62039 20.0472 9.75145 20.3 10.0042C20.5528 10.257 20.6792 10.5681 20.6792 10.9376C20.6792 11.307 20.5528 11.6181 20.3 11.8709L14.9333 17.2376C14.7972 17.3542 14.6514 17.4417 14.4958 17.5001C14.3403 17.5584 14.175 17.5876 14 17.5876V17.5876Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
