// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-groups-filled",
})
export class SwirlIconGroupsFilled {
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
              d="M6.30638 7.87161C5.34343 8.2738 4.66671 9.22454 4.66671 10.3333V11.6667C4.66671 12.403 5.26366 13 6.00004 13H10C10.7364 13 11.3334 12.403 11.3334 11.6667V10.3333C11.3334 9.22454 10.6567 8.2738 9.6937 7.87161C9.37761 7.73958 9.03067 7.66667 8.66671 7.66667H7.33337C6.96941 7.66667 6.62247 7.73958 6.30638 7.87161ZM6.57652 6.40484C6.78698 6.61808 7.045 6.78427 7.33337 6.8862C7.54189 6.9599 7.76628 7 8.00004 7C8.2338 7 8.45819 6.9599 8.66671 6.8862C8.95508 6.78427 9.21311 6.61808 9.42357 6.40484C9.78002 6.04367 10 5.54753 10 5C10 3.89543 9.10461 3 8.00004 3C6.89547 3 6.00004 3.89543 6.00004 5C6.00004 5.54753 6.22006 6.04367 6.57652 6.40484Z"
              fill="currentColor"
            />
            <path
              d="M14.6667 11C14.6667 11.5523 14.219 12 13.6667 12H12.3334V10.3807C12.3334 9.49666 11.9822 8.64881 11.3571 8.02369L11.3334 8H12.6667C13.7713 8 14.6667 8.89543 14.6667 10V11Z"
              fill="currentColor"
            />
            <path
              d="M10.8334 5.83333C10.8334 6.47767 11.3557 7 12 7C12.6444 7 13.1667 6.47767 13.1667 5.83333C13.1667 5.189 12.6444 4.66667 12 4.66667C11.3557 4.66667 10.8334 5.189 10.8334 5.83333Z"
              fill="currentColor"
            />
            <path
              d="M1.33337 11C1.33337 11.5523 1.78109 12 2.33337 12H3.66671V10.3807C3.66671 9.49666 4.0179 8.64881 4.64302 8.02369L4.66671 8H3.33337C2.2288 8 1.33337 8.89543 1.33337 10V11Z"
              fill="currentColor"
            />
            <path
              d="M2.83337 5.83333C2.83337 6.47767 3.35571 7 4.00004 7C4.64437 7 5.16671 6.47767 5.16671 5.83333C5.16671 5.189 4.64437 4.66667 4.00004 4.66667C3.35571 4.66667 2.83337 5.189 2.83337 5.83333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M9.45951 11.8074C8.01508 12.4107 7 13.8368 7 15.5V17.5C7 18.6046 7.89543 19.5 9 19.5H15C16.1046 19.5 17 18.6046 17 17.5V15.5C17 13.8368 15.9849 12.4107 14.5405 11.8074C14.0664 11.6094 13.5459 11.5 13 11.5H11C10.4541 11.5 9.93365 11.6094 9.45951 11.8074ZM9.86471 9.60726C10.1804 9.92712 10.5674 10.1764 11 10.3293C11.3128 10.4398 11.6494 10.5 12 10.5C12.3506 10.5 12.6872 10.4398 13 10.3293C13.4326 10.1764 13.8196 9.92712 14.1353 9.60726C14.67 9.06551 15 8.3213 15 7.5C15 5.84315 13.6569 4.5 12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 8.3213 9.33003 9.06551 9.86471 9.60726Z"
              fill="currentColor"
            />
            <path
              d="M22 16.5C22 17.3284 21.3284 18 20.5 18H18.5V15.5711C18.5 14.245 17.9732 12.9732 17.0355 12.0355L17 12H19C20.6569 12 22 13.3431 22 15V16.5Z"
              fill="currentColor"
            />
            <path
              d="M16.25 8.75C16.25 9.7165 17.0335 10.5 18 10.5C18.9665 10.5 19.75 9.7165 19.75 8.75C19.75 7.7835 18.9665 7 18 7C17.0335 7 16.25 7.7835 16.25 8.75Z"
              fill="currentColor"
            />
            <path
              d="M2 16.5C2 17.3284 2.67157 18 3.5 18H5.5V15.5711C5.5 14.245 6.02678 12.9732 6.96447 12.0355L7 12H5C3.34315 12 2 13.3431 2 15V16.5Z"
              fill="currentColor"
            />
            <path
              d="M4.25 8.75C4.25 9.7165 5.0335 10.5 6 10.5C6.9665 10.5 7.75 9.7165 7.75 8.75C7.75 7.7835 6.9665 7 6 7C5.0335 7 4.25 7.7835 4.25 8.75Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M11.0361 13.7753C9.35096 14.4792 8.16671 16.1429 8.16671 18.0833V20.4167C8.16671 21.7053 9.21138 22.75 10.5 22.75H17.5C18.7887 22.75 19.8334 21.7053 19.8334 20.4167V18.0833C19.8334 16.1429 18.6491 14.4792 16.9639 13.7753C16.4108 13.5443 15.8036 13.4167 15.1667 13.4167H12.8334C12.1964 13.4167 11.5893 13.5443 11.0361 13.7753ZM11.5089 11.2085C11.8772 11.5816 12.3287 11.8725 12.8334 12.0508C13.1983 12.1798 13.591 12.25 14 12.25C14.4091 12.25 14.8018 12.1798 15.1667 12.0508C15.6714 11.8725 16.1229 11.5816 16.4912 11.2085C17.115 10.5764 17.5 9.70818 17.5 8.75C17.5 6.817 15.933 5.25 14 5.25C12.067 5.25 10.5 6.817 10.5 8.75C10.5 9.70818 10.8851 10.5764 11.5089 11.2085Z"
              fill="currentColor"
            />
            <path
              d="M25.6667 19.25C25.6667 20.2165 24.8832 21 23.9167 21H21.5834V18.1662C21.5834 16.6191 20.9688 15.1354 19.8748 14.0415L19.8334 14H22.1667C24.0997 14 25.6667 15.567 25.6667 17.5V19.25Z"
              fill="currentColor"
            />
            <path
              d="M18.9584 10.2083C18.9584 11.3359 19.8725 12.25 21 12.25C22.1276 12.25 23.0417 11.3359 23.0417 10.2083C23.0417 9.08075 22.1276 8.16667 21 8.16667C19.8725 8.16667 18.9584 9.08075 18.9584 10.2083Z"
              fill="currentColor"
            />
            <path
              d="M2.33337 19.25C2.33337 20.2165 3.11688 21 4.08337 21H6.41671V18.1662C6.41671 16.6191 7.03129 15.1354 8.12525 14.0415L8.16671 14H5.83337C3.90038 14 2.33337 15.567 2.33337 17.5V19.25Z"
              fill="currentColor"
            />
            <path
              d="M4.95837 10.2083C4.95837 11.3359 5.87246 12.25 7.00004 12.25C8.12762 12.25 9.04171 11.3359 9.04171 10.2083C9.04171 9.08075 8.12762 8.16667 7.00004 8.16667C5.87246 8.16667 4.95837 9.08075 4.95837 10.2083Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
