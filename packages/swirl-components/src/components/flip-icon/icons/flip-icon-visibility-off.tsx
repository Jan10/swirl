// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";

export type FlipIconSize = 16 | 24 | 28;

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-visibility-off",
})
export class FlipIconVisibilityOff {
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
              d="M7.99999 4.31339C9.83999 4.31339 11.3333 5.80672 11.3333 7.64672C11.3333 7.98672 11.2667 8.31339 11.1733 8.62006L13.2133 10.6601C14.14 9.84006 14.8733 8.81339 15.3333 7.64006C14.18 4.72006 11.3333 2.64672 7.99999 2.64672C7.15332 2.64672 6.33999 2.78006 5.57332 3.02672L7.01999 4.47339C7.33332 4.38006 7.65999 4.31339 7.99999 4.31339ZM1.80666 2.08672C1.54666 2.34672 1.54666 2.76672 1.80666 3.02672L3.11999 4.34006C2.03999 5.20006 1.17999 6.33339 0.666656 7.64672C1.81999 10.5734 4.66666 12.6467 7.99999 12.6467C9.01332 12.6467 9.97999 12.4467 10.8733 12.1001L12.6867 13.9134C12.9467 14.1734 13.3667 14.1734 13.6267 13.9134C13.8867 13.6534 13.8867 13.2334 13.6267 12.9734L2.75332 2.08672C2.49332 1.82672 2.06666 1.82672 1.80666 2.08672ZM7.99999 10.9801C6.15999 10.9801 4.66666 9.48672 4.66666 7.64672C4.66666 7.13339 4.78666 6.64672 4.99332 6.22006L6.03999 7.26672C6.01999 7.38672 5.99999 7.51339 5.99999 7.64672C5.99999 8.75339 6.89332 9.64672 7.99999 9.64672C8.13332 9.64672 8.25332 9.62672 8.37999 9.60006L9.42666 10.6467C8.99332 10.8601 8.51332 10.9801 7.99999 10.9801ZM9.97999 7.42672C9.87999 6.49339 9.14666 5.76672 8.21999 5.66672L9.97999 7.42672Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M12 6.47002C14.76 6.47002 17 8.71002 17 11.47C17 11.98 16.9 12.47 16.76 12.93L19.82 15.99C21.21 14.76 22.31 13.22 23 11.46C21.27 7.08002 17 3.97002 12 3.97002C10.73 3.97002 9.51 4.17002 8.36 4.54002L10.53 6.71002C11 6.57002 11.49 6.47002 12 6.47002ZM2.71 3.13002C2.32 3.52002 2.32 4.15002 2.71 4.54002L4.68 6.51002C3.06 7.80002 1.77 9.50002 1 11.47C2.73 15.86 7 18.97 12 18.97C13.52 18.97 14.97 18.67 16.31 18.15L19.03 20.87C19.42 21.26 20.05 21.26 20.44 20.87C20.83 20.48 20.83 19.85 20.44 19.46L4.13 3.13002C3.74 2.74002 3.1 2.74002 2.71 3.13002ZM12 16.47C9.24 16.47 7 14.23 7 11.47C7 10.7 7.18 9.97002 7.49 9.33002L9.06 10.9C9.03 11.08 9 11.27 9 11.47C9 13.13 10.34 14.47 12 14.47C12.2 14.47 12.38 14.44 12.57 14.4L14.14 15.97C13.49 16.29 12.77 16.47 12 16.47ZM14.97 11.14C14.82 9.74002 13.72 8.65002 12.33 8.50002L14.97 11.14Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 7.54834C17.22 7.54834 19.8333 10.1617 19.8333 13.3817C19.8333 13.9767 19.7167 14.5483 19.5533 15.085L23.1233 18.655C24.745 17.22 26.0283 15.4233 26.8333 13.37C24.815 8.26001 19.8333 4.63167 14 4.63167C12.5183 4.63167 11.095 4.86501 9.75332 5.29667L12.285 7.82834C12.8333 7.66501 13.405 7.54834 14 7.54834ZM3.16166 3.65167C2.70666 4.10667 2.70666 4.84167 3.16166 5.29667L5.45999 7.59501C3.56999 9.10001 2.06499 11.0833 1.16666 13.3817C3.18499 18.5033 8.16666 22.1317 14 22.1317C15.7733 22.1317 17.465 21.7817 19.0283 21.175L22.2017 24.3483C22.6567 24.8033 23.3917 24.8033 23.8467 24.3483C24.3017 23.8933 24.3017 23.1583 23.8467 22.7033L4.81832 3.65167C4.36332 3.19667 3.61666 3.19667 3.16166 3.65167ZM14 19.215C10.78 19.215 8.16666 16.6017 8.16666 13.3817C8.16666 12.4833 8.37666 11.6317 8.73832 10.885L10.57 12.7167C10.535 12.9267 10.5 13.1483 10.5 13.3817C10.5 15.3183 12.0633 16.8817 14 16.8817C14.2333 16.8817 14.4433 16.8467 14.665 16.8L16.4967 18.6317C15.7383 19.005 14.8983 19.215 14 19.215ZM17.465 12.9967C17.29 11.3633 16.0067 10.0917 14.385 9.91667L17.465 12.9967Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
