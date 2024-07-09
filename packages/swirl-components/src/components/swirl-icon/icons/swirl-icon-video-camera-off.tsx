// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-video-camera-off",
})
export class SwirlIconVideoCameraOff {
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
              d="M12 6.9999L14.1 4.8999C14.2111 4.78879 14.3333 4.76101 14.4667 4.81657C14.6 4.87212 14.6667 4.97768 14.6667 5.13324V10.8666C14.6667 11.0221 14.6 11.1277 14.4667 11.1832C14.3333 11.2388 14.2111 11.211 14.1 11.0999L12 8.9999C12 9.18879 11.9361 9.34713 11.8083 9.4749C11.6806 9.60268 11.5222 9.66657 11.3333 9.66657C11.1445 9.66657 10.9861 9.60268 10.8583 9.4749C10.7306 9.34713 10.6667 9.18879 10.6667 8.9999V3.9999H6.00001C5.77779 3.9999 5.61112 3.93046 5.50001 3.79157C5.3889 3.65268 5.33334 3.4999 5.33334 3.33324C5.33334 3.16657 5.3889 3.01379 5.50001 2.8749C5.61112 2.73601 5.77779 2.66657 6.00001 2.66657H10.6667C11.0333 2.66657 11.3472 2.79712 11.6083 3.05824C11.8695 3.31935 12 3.63324 12 3.9999V6.9999ZM13.2333 15.0999L0.900008 2.76657C0.777786 2.64435 0.716675 2.48879 0.716675 2.2999C0.716675 2.11101 0.777786 1.95546 0.900008 1.83324C1.02223 1.71101 1.17779 1.6499 1.36667 1.6499C1.55556 1.6499 1.71112 1.71101 1.83334 1.83324L14.1667 14.1666C14.2889 14.2888 14.35 14.4443 14.35 14.6332C14.35 14.8221 14.2889 14.9777 14.1667 15.0999C14.0445 15.2221 13.8889 15.2832 13.7 15.2832C13.5111 15.2832 13.3556 15.2221 13.2333 15.0999ZM2.66667 2.66657L4.00001 3.9999H2.66667V11.9999H10.6667V10.6666L12 11.9999C12 12.3666 11.8695 12.6805 11.6083 12.9416C11.3472 13.2027 11.0333 13.3332 10.6667 13.3332H2.66667C2.30001 13.3332 1.98612 13.2027 1.72501 12.9416C1.4639 12.6805 1.33334 12.3666 1.33334 11.9999V3.9999C1.33334 3.63324 1.4639 3.31935 1.72501 3.05824C1.98612 2.79712 2.30001 2.66657 2.66667 2.66657Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M18 10.5001L21.15 7.3501C21.3167 7.18343 21.5 7.14176 21.7 7.2251C21.9 7.30843 22 7.46676 22 7.7001V16.3001C22 16.5334 21.9 16.6918 21.7 16.7751C21.5 16.8584 21.3167 16.8168 21.15 16.6501L18 13.5001C18 13.7834 17.9042 14.0209 17.7125 14.2126C17.5208 14.4043 17.2833 14.5001 17 14.5001C16.7167 14.5001 16.4792 14.4043 16.2875 14.2126C16.0958 14.0209 16 13.7834 16 13.5001V6.0001H9.00001C8.66668 6.0001 8.41668 5.89593 8.25001 5.6876C8.08335 5.47926 8.00001 5.2501 8.00001 5.0001C8.00001 4.7501 8.08335 4.52093 8.25001 4.3126C8.41668 4.10426 8.66668 4.0001 9.00001 4.0001H16C16.55 4.0001 17.0208 4.19593 17.4125 4.5876C17.8042 4.97926 18 5.4501 18 6.0001V10.5001ZM19.85 22.6501L1.35001 4.1501C1.16668 3.96676 1.07501 3.73343 1.07501 3.4501C1.07501 3.16676 1.16668 2.93343 1.35001 2.7501C1.53335 2.56676 1.76668 2.4751 2.05001 2.4751C2.33335 2.4751 2.56668 2.56676 2.75001 2.7501L21.25 21.2501C21.4333 21.4334 21.525 21.6668 21.525 21.9501C21.525 22.2334 21.4333 22.4668 21.25 22.6501C21.0667 22.8334 20.8333 22.9251 20.55 22.9251C20.2667 22.9251 20.0333 22.8334 19.85 22.6501ZM4.00001 4.0001L6.00001 6.0001H4.00001V18.0001H16V16.0001L18 18.0001C18 18.5501 17.8042 19.0209 17.4125 19.4126C17.0208 19.8043 16.55 20.0001 16 20.0001H4.00001C3.45001 20.0001 2.97918 19.8043 2.58751 19.4126C2.19585 19.0209 2.00001 18.5501 2.00001 18.0001V6.0001C2.00001 5.4501 2.19585 4.97926 2.58751 4.5876C2.97918 4.19593 3.45001 4.0001 4.00001 4.0001Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M21 12.2502L24.675 8.5752C24.8694 8.38075 25.0833 8.33214 25.3167 8.42936C25.55 8.52658 25.6667 8.71131 25.6667 8.98353V19.0169C25.6667 19.2891 25.55 19.4738 25.3167 19.571C25.0833 19.6683 24.8694 19.6196 24.675 19.4252L21 15.7502C21 16.0808 20.8882 16.3578 20.6646 16.5814C20.441 16.8051 20.1639 16.9169 19.8333 16.9169C19.5028 16.9169 19.2257 16.8051 19.0021 16.5814C18.7785 16.3578 18.6667 16.0808 18.6667 15.7502V7.0002H10.5C10.1111 7.0002 9.81943 6.87867 9.62498 6.63561C9.43054 6.39256 9.33332 6.1252 9.33332 5.83353C9.33332 5.54186 9.43054 5.2745 9.62498 5.03145C9.81943 4.78839 10.1111 4.66686 10.5 4.66686H18.6667C19.3083 4.66686 19.8576 4.89533 20.3146 5.35228C20.7715 5.80922 21 6.35853 21 7.0002V12.2502ZM23.1583 26.4252L1.57498 4.84186C1.36109 4.62797 1.25415 4.35575 1.25415 4.0252C1.25415 3.69464 1.36109 3.42242 1.57498 3.20853C1.78887 2.99464 2.06109 2.8877 2.39165 2.8877C2.72221 2.8877 2.99443 2.99464 3.20832 3.20853L24.7917 24.7919C25.0055 25.0058 25.1125 25.278 25.1125 25.6085C25.1125 25.9391 25.0055 26.2113 24.7917 26.4252C24.5778 26.6391 24.3055 26.746 23.975 26.746C23.6444 26.746 23.3722 26.6391 23.1583 26.4252ZM4.66665 4.66686L6.99998 7.0002H4.66665V21.0002H18.6667V18.6669L21 21.0002C21 21.6419 20.7715 22.1912 20.3146 22.6481C19.8576 23.1051 19.3083 23.3335 18.6667 23.3335H4.66665C4.02498 23.3335 3.47568 23.1051 3.01873 22.6481C2.56179 22.1912 2.33332 21.6419 2.33332 21.0002V7.0002C2.33332 6.35853 2.56179 5.80922 3.01873 5.35228C3.47568 4.89533 4.02498 4.66686 4.66665 4.66686Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
