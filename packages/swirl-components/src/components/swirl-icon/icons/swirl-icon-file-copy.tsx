// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-file-copy",
})
export class SwirlIconFileCopy {
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
              d="M12.6667 12.6667H5.33334C4.96667 12.6667 4.65278 12.5362 4.39167 12.2751C4.13056 12.014 4 11.7001 4 11.3334V2.00008C4 1.63341 4.13056 1.31953 4.39167 1.05841C4.65278 0.797304 4.96667 0.666748 5.33334 0.666748H9.45C9.62778 0.666748 9.79723 0.700081 9.95834 0.766748C10.1194 0.833415 10.2611 0.927859 10.3833 1.05008L13.6167 4.28341C13.7389 4.40564 13.8333 4.5473 13.9 4.70841C13.9667 4.86953 14 5.03897 14 5.21675V11.3334C14 11.7001 13.8694 12.014 13.6083 12.2751C13.3472 12.5362 13.0333 12.6667 12.6667 12.6667ZM9.33334 2.00008H5.33334V11.3334H12.6667V5.33341H10C9.81111 5.33341 9.65278 5.26953 9.525 5.14175C9.39723 5.01397 9.33334 4.85564 9.33334 4.66675V2.00008ZM2.66667 15.3334C2.3 15.3334 1.98611 15.2029 1.725 14.9417C1.46389 14.6806 1.33334 14.3667 1.33334 14.0001V5.33341C1.33334 5.14453 1.39722 4.98619 1.525 4.85841C1.65278 4.73064 1.81111 4.66675 2 4.66675C2.18889 4.66675 2.34722 4.73064 2.475 4.85841C2.60278 4.98619 2.66667 5.14453 2.66667 5.33341V14.0001H9.33334C9.52223 14.0001 9.68056 14.064 9.80834 14.1917C9.93611 14.3195 10 14.4779 10 14.6667C10 14.8556 9.93611 15.014 9.80834 15.1417C9.68056 15.2695 9.52223 15.3334 9.33334 15.3334H2.66667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M19 19H8C7.45 19 6.97917 18.8042 6.5875 18.4125C6.19583 18.0208 6 17.55 6 17V3C6 2.45 6.19583 1.97917 6.5875 1.5875C6.97917 1.19583 7.45 1 8 1H14.175C14.4417 1 14.6958 1.05 14.9375 1.15C15.1792 1.25 15.3917 1.39167 15.575 1.575L20.425 6.425C20.6083 6.60833 20.75 6.82083 20.85 7.0625C20.95 7.30417 21 7.55833 21 7.825V17C21 17.55 20.8042 18.0208 20.4125 18.4125C20.0208 18.8042 19.55 19 19 19ZM14 3H8V17H19V8H15C14.7167 8 14.4792 7.90417 14.2875 7.7125C14.0958 7.52083 14 7.28333 14 7V3ZM4 23C3.45 23 2.97917 22.8042 2.5875 22.4125C2.19583 22.0208 2 21.55 2 21V8C2 7.71667 2.09583 7.47917 2.2875 7.2875C2.47917 7.09583 2.71667 7 3 7C3.28333 7 3.52083 7.09583 3.7125 7.2875C3.90417 7.47917 4 7.71667 4 8V21H14C14.2833 21 14.5208 21.0958 14.7125 21.2875C14.9042 21.4792 15 21.7167 15 22C15 22.2833 14.9042 22.5208 14.7125 22.7125C14.5208 22.9042 14.2833 23 14 23H4Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M22.1667 22.1667H9.33334C8.69167 22.1667 8.14236 21.9383 7.68542 21.4813C7.22847 21.0244 7 20.4751 7 19.8334V3.50008C7 2.85841 7.22847 2.30911 7.68542 1.85216C8.14236 1.39522 8.69167 1.16675 9.33334 1.16675H16.5375C16.8486 1.16675 17.1451 1.22508 17.4271 1.34175C17.709 1.45841 17.9569 1.62369 18.1708 1.83758L23.8292 7.49591C24.0431 7.7098 24.2083 7.95772 24.325 8.23966C24.4417 8.52161 24.5 8.81814 24.5 9.12925V19.8334C24.5 20.4751 24.2715 21.0244 23.8146 21.4813C23.3576 21.9383 22.8083 22.1667 22.1667 22.1667ZM16.3333 3.50008H9.33334V19.8334H22.1667V9.33341H17.5C17.1694 9.33341 16.8924 9.22161 16.6688 8.998C16.4451 8.77439 16.3333 8.4973 16.3333 8.16675V3.50008ZM4.66667 26.8334C4.025 26.8334 3.4757 26.6049 3.01875 26.148C2.56181 25.6911 2.33334 25.1417 2.33334 24.5001V9.33341C2.33334 9.00286 2.44514 8.72578 2.66875 8.50216C2.89236 8.27855 3.16945 8.16675 3.5 8.16675C3.83056 8.16675 4.10764 8.27855 4.33125 8.50216C4.55486 8.72578 4.66667 9.00286 4.66667 9.33341V24.5001H16.3333C16.6639 24.5001 16.941 24.6119 17.1646 24.8355C17.3882 25.0591 17.5 25.3362 17.5 25.6667C17.5 25.9973 17.3882 26.2744 17.1646 26.498C16.941 26.7216 16.6639 26.8334 16.3333 26.8334H4.66667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
