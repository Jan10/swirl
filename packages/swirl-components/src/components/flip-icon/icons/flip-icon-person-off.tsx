// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";

export type FlipIconSize = 16 | 24 | 28;

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-person-off",
})
export class FlipIconPersonOff {
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
              d="M6.23708 3.41005C6.71041 2.67672 7.53708 2.19672 8.47042 2.19672C9.94375 2.19672 11.1371 3.39005 11.1371 4.86338C11.1371 5.79672 10.6571 6.62338 9.92375 7.09672L6.23708 3.41005ZM13.8037 10.9767C13.7904 10.2434 13.3837 9.57005 12.7304 9.23005C12.3704 9.04338 11.9771 8.87005 11.5504 8.72338L13.8037 10.9767ZM14.1304 13.19L2.81042 1.87005C2.55042 1.61005 2.13042 1.61005 1.87042 1.87005C1.61042 2.13005 1.61042 2.55005 1.87042 2.81005L7.32375 8.26338C6.11042 8.41672 5.05042 8.79672 4.19042 9.23672C3.53708 9.58338 3.13708 10.27 3.13708 11.01V12.8634H11.9171L13.1837 14.13C13.4437 14.39 13.8637 14.39 14.1237 14.13C14.3904 13.87 14.3904 13.45 14.1304 13.19Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M9.35562 5.11495C10.0656 4.01495 11.3056 3.29495 12.7056 3.29495C14.9156 3.29495 16.7056 5.08495 16.7056 7.29495C16.7056 8.69495 15.9856 9.93495 14.8856 10.645L9.35562 5.11495ZM20.7056 16.465C20.6856 15.365 20.0756 14.355 19.0956 13.845C18.5556 13.565 17.9656 13.305 17.3256 13.085L20.7056 16.465ZM21.1956 19.785L4.21562 2.80495C3.82562 2.41495 3.19562 2.41495 2.80562 2.80495C2.41562 3.19495 2.41562 3.82495 2.80562 4.21495L10.9856 12.395C9.16562 12.625 7.57562 13.195 6.28562 13.855C5.30562 14.375 4.70562 15.405 4.70562 16.515V19.295H17.8756L19.7756 21.195C20.1656 21.5849 20.7956 21.5849 21.1856 21.195C21.5856 20.805 21.5856 20.1749 21.1956 19.785Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M10.9149 5.96752C11.7432 4.68419 13.1899 3.84419 14.8232 3.84419C17.4016 3.84419 19.4899 5.93252 19.4899 8.51086C19.4899 10.1442 18.6499 11.5909 17.3666 12.4192L10.9149 5.96752ZM24.1566 19.2092C24.1332 17.9259 23.4216 16.7475 22.2782 16.1525C21.6482 15.8259 20.9599 15.5225 20.2132 15.2659L24.1566 19.2092ZM24.7282 23.0825L4.91823 3.27252C4.46323 2.81752 3.72823 2.81752 3.27323 3.27252C2.81823 3.72752 2.81823 4.46252 3.27323 4.91752L12.8166 14.4609C10.6932 14.7292 8.83823 15.3942 7.33323 16.1642C6.18989 16.7709 5.48989 17.9725 5.48989 19.2675V22.5109H20.8549L23.0716 24.7275C23.5266 25.1825 24.2616 25.1825 24.7166 24.7275C25.1832 24.2725 25.1832 23.5375 24.7282 23.0825Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
