// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-terminal",
})
export class SwirlIconTerminal {
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M2.66665 13.3333C2.29998 13.3333 1.98609 13.2027 1.72498 12.9416C1.46387 12.6805 1.33331 12.3666 1.33331 12V3.99996C1.33331 3.63329 1.46387 3.3194 1.72498 3.05829C1.98609 2.79718 2.29998 2.66663 2.66665 2.66663H13.3333C13.7 2.66663 14.0139 2.79718 14.275 3.05829C14.5361 3.3194 14.6666 3.63329 14.6666 3.99996V12C14.6666 12.3666 14.5361 12.6805 14.275 12.9416C14.0139 13.2027 13.7 13.3333 13.3333 13.3333H2.66665ZM2.66665 12H13.3333V5.33329H2.66665V12ZM5.78331 8.66663L4.51665 7.39996C4.38331 7.26663 4.31942 7.11107 4.32498 6.93329C4.33054 6.75552 4.39998 6.59996 4.53331 6.46663C4.66665 6.3444 4.8222 6.28051 4.99998 6.27496C5.17776 6.2694 5.33331 6.33329 5.46665 6.46663L7.19998 8.19996C7.33331 8.33329 7.39998 8.48885 7.39998 8.66663C7.39998 8.8444 7.33331 8.99996 7.19998 9.13329L5.46665 10.8666C5.34442 10.9888 5.19165 11.0527 5.00831 11.0583C4.82498 11.0638 4.66665 11 4.53331 10.8666C4.41109 10.7444 4.34998 10.5888 4.34998 10.4C4.34998 10.2111 4.41109 10.0555 4.53331 9.93329L5.78331 8.66663ZM8.66665 11.3333C8.47776 11.3333 8.31942 11.2694 8.19165 11.1416C8.06387 11.0138 7.99998 10.8555 7.99998 10.6666C7.99998 10.4777 8.06387 10.3194 8.19165 10.1916C8.31942 10.0638 8.47776 9.99996 8.66665 9.99996H11.3333C11.5222 9.99996 11.6805 10.0638 11.8083 10.1916C11.9361 10.3194 12 10.4777 12 10.6666C12 10.8555 11.9361 11.0138 11.8083 11.1416C11.6805 11.2694 11.5222 11.3333 11.3333 11.3333H8.66665Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H4V18ZM8.675 13L6.775 11.1C6.575 10.9 6.47917 10.6667 6.4875 10.4C6.49583 10.1333 6.6 9.9 6.8 9.7C7 9.51667 7.23333 9.42083 7.5 9.4125C7.76667 9.40417 8 9.5 8.2 9.7L10.8 12.3C11 12.5 11.1 12.7333 11.1 13C11.1 13.2667 11 13.5 10.8 13.7L8.2 16.3C8.01667 16.4833 7.7875 16.5792 7.5125 16.5875C7.2375 16.5958 7 16.5 6.8 16.3C6.61667 16.1167 6.525 15.8833 6.525 15.6C6.525 15.3167 6.61667 15.0833 6.8 14.9L8.675 13ZM13 17C12.7167 17 12.4792 16.9042 12.2875 16.7125C12.0958 16.5208 12 16.2833 12 16C12 15.7167 12.0958 15.4792 12.2875 15.2875C12.4792 15.0958 12.7167 15 13 15H17C17.2833 15 17.5208 15.0958 17.7125 15.2875C17.9042 15.4792 18 15.7167 18 16C18 16.2833 17.9042 16.5208 17.7125 16.7125C17.5208 16.9042 17.2833 17 17 17H13Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M4.66665 23.3333C4.02498 23.3333 3.47567 23.1048 3.01873 22.6479C2.56179 22.1909 2.33331 21.6416 2.33331 21V6.99996C2.33331 6.35829 2.56179 5.80899 3.01873 5.35204C3.47567 4.8951 4.02498 4.66663 4.66665 4.66663H23.3333C23.975 4.66663 24.5243 4.8951 24.9812 5.35204C25.4382 5.80899 25.6666 6.35829 25.6666 6.99996V21C25.6666 21.6416 25.4382 22.1909 24.9812 22.6479C24.5243 23.1048 23.975 23.3333 23.3333 23.3333H4.66665ZM4.66665 21H23.3333V9.33329H4.66665V21ZM10.1208 15.1666L7.90415 12.95C7.67081 12.7166 7.55901 12.4444 7.56873 12.1333C7.57845 11.8222 7.69998 11.55 7.93331 11.3166C8.16665 11.1027 8.43887 10.9909 8.74998 10.9812C9.06109 10.9715 9.33331 11.0833 9.56665 11.3166L12.6 14.35C12.8333 14.5833 12.95 14.8555 12.95 15.1666C12.95 15.4777 12.8333 15.75 12.6 15.9833L9.56665 19.0166C9.35276 19.2305 9.0854 19.3423 8.76456 19.352C8.44373 19.3618 8.16665 19.25 7.93331 19.0166C7.71942 18.8027 7.61248 18.5305 7.61248 18.2C7.61248 17.8694 7.71942 17.5972 7.93331 17.3833L10.1208 15.1666ZM15.1666 19.8333C14.8361 19.8333 14.559 19.7215 14.3354 19.4979C14.1118 19.2743 14 18.9972 14 18.6666C14 18.3361 14.1118 18.059 14.3354 17.8354C14.559 17.6118 14.8361 17.5 15.1666 17.5H19.8333C20.1639 17.5 20.441 17.6118 20.6646 17.8354C20.8882 18.059 21 18.3361 21 18.6666C21 18.9972 20.8882 19.2743 20.6646 19.4979C20.441 19.7215 20.1639 19.8333 19.8333 19.8333H15.1666Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
