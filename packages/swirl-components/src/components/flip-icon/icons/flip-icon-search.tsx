// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";

export type FlipIconSize = 16 | 24 | 28;

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-search",
})
export class FlipIconSearch {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M12.5333 13.6167L8.83333 9.91669C8.5 10.1722 8.11666 10.3778 7.68333 10.5334C7.25 10.6889 6.78889 10.7667 6.3 10.7667C5.06666 10.7667 4.02222 10.336 3.16666 9.47469C2.31111 8.6138 1.88333 7.56669 1.88333 6.33336C1.88333 5.10002 2.31111 4.05269 3.16666 3.19136C4.02222 2.33047 5.06666 1.90002 6.3 1.90002C7.53333 1.90002 8.58066 2.33047 9.442 3.19136C10.3029 4.05269 10.7333 5.10002 10.7333 6.33336C10.7333 6.82225 10.6584 7.28336 10.5087 7.71669C10.3584 8.15002 10.1556 8.5278 9.9 8.85002L13.6167 12.5834C13.75 12.7167 13.8167 12.8862 13.8167 13.092C13.8167 13.2974 13.7444 13.4722 13.6 13.6167C13.4556 13.7611 13.2751 13.8334 13.0587 13.8334C12.8418 13.8334 12.6667 13.7611 12.5333 13.6167ZM6.3 9.23336C7.11111 9.23336 7.8 8.95269 8.36667 8.39136C8.93333 7.83047 9.21666 7.14447 9.21666 6.33336C9.21666 5.52225 8.93333 4.83602 8.36667 4.27469C7.8 3.7138 7.11111 3.43336 6.3 3.43336C5.48889 3.43336 4.80289 3.7138 4.242 4.27469C3.68066 4.83602 3.4 5.52225 3.4 6.33336C3.4 7.14447 3.68066 7.83047 4.242 8.39136C4.80289 8.95269 5.48889 9.23336 6.3 9.23336Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M18.8 20.425L13.25 14.875C12.75 15.2583 12.175 15.5666 11.525 15.8C10.875 16.0333 10.1833 16.15 9.45001 16.15C7.60001 16.15 6.03335 15.504 4.75001 14.212C3.46668 12.9206 2.82501 11.35 2.82501 9.49998C2.82501 7.64998 3.46668 6.07898 4.75001 4.78698C6.03335 3.49564 7.60001 2.84998 9.45001 2.84998C11.3 2.84998 12.871 3.49564 14.163 4.78698C15.4543 6.07898 16.1 7.64998 16.1 9.49998C16.1 10.2333 15.9877 10.925 15.763 11.575C15.5377 12.225 15.2333 12.7916 14.85 13.275L20.425 18.875C20.625 19.075 20.725 19.3293 20.725 19.638C20.725 19.946 20.6167 20.2083 20.4 20.425C20.1833 20.6416 19.9127 20.75 19.588 20.75C19.2627 20.75 19 20.6416 18.8 20.425ZM9.45001 13.85C10.6667 13.85 11.7 13.429 12.55 12.587C13.4 11.7456 13.825 10.7166 13.825 9.49998C13.825 8.28331 13.4 7.25398 12.55 6.41198C11.7 5.57064 10.6667 5.14998 9.45001 5.14998C8.23335 5.14998 7.20435 5.57064 6.36301 6.41198C5.52101 7.25398 5.10001 8.28331 5.10001 9.49998C5.10001 10.7166 5.52101 11.7456 6.36301 12.587C7.20435 13.429 8.23335 13.85 9.45001 13.85Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M21.9333 23.8292L15.4583 17.3542C14.875 17.8014 14.2042 18.1611 13.4458 18.4333C12.6875 18.7056 11.8806 18.8417 11.025 18.8417C8.86667 18.8417 7.03889 18.088 5.54167 16.5807C4.04445 15.0741 3.29584 13.2417 3.29584 11.0833C3.29584 8.92501 4.04445 7.09218 5.54167 5.58485C7.03889 4.07829 8.86667 3.32501 11.025 3.32501C13.1833 3.32501 15.0162 4.07829 16.5235 5.58485C18.0301 7.09218 18.7833 8.92501 18.7833 11.0833C18.7833 11.9389 18.6523 12.7458 18.3902 13.5042C18.1273 14.2625 17.7722 14.9236 17.325 15.4875L23.8292 22.0208C24.0625 22.2542 24.1792 22.5509 24.1792 22.911C24.1792 23.2703 24.0528 23.5764 23.8 23.8292C23.5472 24.082 23.2314 24.2083 22.8527 24.2083C22.4731 24.2083 22.1667 24.082 21.9333 23.8292ZM11.025 16.1583C12.4444 16.1583 13.65 15.6672 14.6417 14.6848C15.6333 13.7033 16.1292 12.5028 16.1292 11.0833C16.1292 9.6639 15.6333 8.46301 14.6417 7.48068C13.65 6.49912 12.4444 6.00835 11.025 6.00835C9.60556 6.00835 8.40506 6.49912 7.4235 7.48068C6.44117 8.46301 5.95 9.6639 5.95 11.0833C5.95 12.5028 6.44117 13.7033 7.4235 14.6848C8.40506 15.6672 9.60556 16.1583 11.025 16.1583Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
