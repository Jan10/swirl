// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-voice",
})
export class SwirlIconVoice {
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
              d="M12.75 10.0833C12.6278 9.96106 12.5639 9.80551 12.5584 9.61662C12.5528 9.42773 12.6111 9.25551 12.7334 9.09995C13.0778 8.67773 13.3472 8.20273 13.5417 7.67495C13.7361 7.14717 13.8334 6.58884 13.8334 5.99995C13.8334 5.42217 13.7361 4.87217 13.5417 4.34995C13.3472 3.82773 13.0778 3.35551 12.7334 2.93328C12.6111 2.77773 12.55 2.60551 12.55 2.41662C12.55 2.22773 12.6167 2.06662 12.75 1.93328C12.9056 1.77773 13.0917 1.69995 13.3084 1.69995C13.525 1.69995 13.7 1.77773 13.8334 1.93328C14.3 2.49995 14.6667 3.12773 14.9334 3.81662C15.2 4.50551 15.3334 5.23328 15.3334 5.99995C15.3334 6.76662 15.2 7.4944 14.9334 8.18328C14.6667 8.87217 14.3 9.49995 13.8334 10.0666C13.7 10.2222 13.525 10.3027 13.3084 10.3083C13.0917 10.3138 12.9056 10.2388 12.75 10.0833ZM10.6 7.93328C10.4778 7.81106 10.4084 7.65273 10.3917 7.45828C10.375 7.26384 10.4222 7.07217 10.5334 6.88328C10.6111 6.74995 10.6695 6.60828 10.7084 6.45828C10.7472 6.30828 10.7667 6.15551 10.7667 5.99995C10.7667 5.8444 10.7472 5.69162 10.7084 5.54162C10.6695 5.39162 10.6111 5.24995 10.5334 5.11662C10.4222 4.92773 10.375 4.73606 10.3917 4.54162C10.4084 4.34717 10.4778 4.18884 10.6 4.06662C10.7556 3.91106 10.9445 3.83606 11.1667 3.84162C11.3889 3.84717 11.5611 3.93328 11.6834 4.09995C11.8722 4.37773 12.0222 4.67495 12.1334 4.99162C12.2445 5.30828 12.3 5.6444 12.3 5.99995C12.3 6.35551 12.2445 6.69162 12.1334 7.00828C12.0222 7.32495 11.8722 7.62217 11.6834 7.89995C11.5611 8.06662 11.3889 8.15273 11.1667 8.15828C10.9445 8.16384 10.7556 8.08884 10.6 7.93328ZM6.00002 8.66662C5.26669 8.66662 4.63891 8.40551 4.11669 7.88328C3.59446 7.36106 3.33335 6.73328 3.33335 5.99995C3.33335 5.26662 3.59446 4.63884 4.11669 4.11662C4.63891 3.5944 5.26669 3.33328 6.00002 3.33328C6.73335 3.33328 7.36113 3.5944 7.88335 4.11662C8.40558 4.63884 8.66669 5.26662 8.66669 5.99995C8.66669 6.73328 8.40558 7.36106 7.88335 7.88328C7.36113 8.40551 6.73335 8.66662 6.00002 8.66662ZM1.33335 14C1.14446 14 0.986131 13.9361 0.858354 13.8083C0.730576 13.6805 0.666687 13.5222 0.666687 13.3333V12.1333C0.666687 11.7666 0.761131 11.4222 0.95002 11.1C1.13891 10.7777 1.40002 10.5333 1.73335 10.3666C2.30002 10.0777 2.93891 9.83328 3.65002 9.63328C4.36113 9.43328 5.14446 9.33328 6.00002 9.33328C6.85558 9.33328 7.63891 9.43328 8.35002 9.63328C9.06113 9.83328 9.70002 10.0777 10.2667 10.3666C10.6 10.5333 10.8611 10.7777 11.05 11.1C11.2389 11.4222 11.3334 11.7666 11.3334 12.1333V13.3333C11.3334 13.5222 11.2695 13.6805 11.1417 13.8083C11.0139 13.9361 10.8556 14 10.6667 14H1.33335ZM2.00002 12.6666H10V12.1333C10 12.0111 9.96947 11.9 9.90835 11.8C9.84724 11.7 9.76669 11.6222 9.66669 11.5666C9.26669 11.3666 8.7528 11.1666 8.12502 10.9666C7.49724 10.7666 6.78891 10.6666 6.00002 10.6666C5.21113 10.6666 4.5028 10.7666 3.87502 10.9666C3.24724 11.1666 2.73335 11.3666 2.33335 11.5666C2.23335 11.6222 2.1528 11.7 2.09169 11.8C2.03058 11.9 2.00002 12.0111 2.00002 12.1333V12.6666ZM6.00002 7.33328C6.36669 7.33328 6.68058 7.20273 6.94169 6.94162C7.2028 6.68051 7.33335 6.36662 7.33335 5.99995C7.33335 5.63328 7.2028 5.3194 6.94169 5.05828C6.68058 4.79717 6.36669 4.66662 6.00002 4.66662C5.63335 4.66662 5.31947 4.79717 5.05835 5.05828C4.79724 5.3194 4.66669 5.63328 4.66669 5.99995C4.66669 6.36662 4.79724 6.68051 5.05835 6.94162C5.31947 7.20273 5.63335 7.33328 6.00002 7.33328Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M19.125 15.125C18.9417 14.9417 18.8458 14.7084 18.8375 14.425C18.8292 14.1417 18.9167 13.8834 19.1 13.65C19.6167 13.0167 20.0208 12.3042 20.3125 11.5125C20.6042 10.7209 20.75 9.88338 20.75 9.00005C20.75 8.13338 20.6042 7.30838 20.3125 6.52505C20.0208 5.74172 19.6167 5.03338 19.1 4.40005C18.9167 4.16672 18.825 3.90838 18.825 3.62505C18.825 3.34172 18.925 3.10005 19.125 2.90005C19.3583 2.66672 19.6375 2.55005 19.9625 2.55005C20.2875 2.55005 20.55 2.66672 20.75 2.90005C21.45 3.75005 22 4.69172 22.4 5.72505C22.8 6.75838 23 7.85005 23 9.00005C23 10.15 22.8 11.2417 22.4 12.275C22 13.3084 21.45 14.25 20.75 15.1C20.55 15.3334 20.2875 15.4542 19.9625 15.4625C19.6375 15.4709 19.3583 15.3584 19.125 15.125ZM15.9 11.9C15.7167 11.7167 15.6125 11.4792 15.5875 11.1875C15.5625 10.8959 15.6333 10.6084 15.8 10.325C15.9167 10.125 16.0042 9.91255 16.0625 9.68755C16.1208 9.46255 16.15 9.23338 16.15 9.00005C16.15 8.76672 16.1208 8.53755 16.0625 8.31255C16.0042 8.08755 15.9167 7.87505 15.8 7.67505C15.6333 7.39172 15.5625 7.10422 15.5875 6.81255C15.6125 6.52088 15.7167 6.28338 15.9 6.10005C16.1333 5.86672 16.4167 5.75422 16.75 5.76255C17.0833 5.77088 17.3417 5.90005 17.525 6.15005C17.8083 6.56672 18.0333 7.01255 18.2 7.48755C18.3667 7.96255 18.45 8.46672 18.45 9.00005C18.45 9.53338 18.3667 10.0375 18.2 10.5125C18.0333 10.9875 17.8083 11.4334 17.525 11.85C17.3417 12.1 17.0833 12.2292 16.75 12.2375C16.4167 12.2459 16.1333 12.1334 15.9 11.9ZM9 13C7.9 13 6.95833 12.6084 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00005C5 7.90005 5.39167 6.95838 6.175 6.17505C6.95833 5.39172 7.9 5.00005 9 5.00005C10.1 5.00005 11.0417 5.39172 11.825 6.17505C12.6083 6.95838 13 7.90005 13 9.00005C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6084 10.1 13 9 13ZM2 21C1.71667 21 1.47917 20.9042 1.2875 20.7125C1.09583 20.5209 1 20.2834 1 20V18.2C1 17.65 1.14167 17.1334 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1334 17 17.65 17 18.2V20C17 20.2834 16.9042 20.5209 16.7125 20.7125C16.5208 20.9042 16.2833 21 16 21H2ZM3 19H15V18.2C15 18.0167 14.9542 17.85 14.8625 17.7C14.7708 17.55 14.65 17.4334 14.5 17.35C13.9 17.05 13.1292 16.75 12.1875 16.45C11.2458 16.15 10.1833 16 9 16C7.81667 16 6.75417 16.15 5.8125 16.45C4.87083 16.75 4.1 17.05 3.5 17.35C3.35 17.4334 3.22917 17.55 3.1375 17.7C3.04583 17.85 3 18.0167 3 18.2V19ZM9 11C9.55 11 10.0208 10.8042 10.4125 10.4125C10.8042 10.0209 11 9.55005 11 9.00005C11 8.45005 10.8042 7.97922 10.4125 7.58755C10.0208 7.19588 9.55 7.00005 9 7.00005C8.45 7.00005 7.97917 7.19588 7.5875 7.58755C7.19583 7.97922 7 8.45005 7 9.00005C7 9.55005 7.19583 10.0209 7.5875 10.4125C7.97917 10.8042 8.45 11 9 11Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M22.3125 17.6459C22.0986 17.432 21.9868 17.1598 21.9771 16.8293C21.9673 16.4987 22.0694 16.1973 22.2833 15.9251C22.8861 15.1862 23.3576 14.355 23.6979 13.4313C24.0382 12.5077 24.2083 11.5307 24.2083 10.5001C24.2083 9.48899 24.0382 8.52649 23.6979 7.6126C23.3576 6.69871 22.8861 5.87232 22.2833 5.13343C22.0694 4.86121 21.9625 4.55982 21.9625 4.22926C21.9625 3.89871 22.0792 3.61676 22.3125 3.38343C22.5847 3.11121 22.9104 2.9751 23.2896 2.9751C23.6687 2.9751 23.975 3.11121 24.2083 3.38343C25.025 4.3751 25.6667 5.47371 26.1333 6.67926C26.6 7.88482 26.8333 9.15843 26.8333 10.5001C26.8333 11.8418 26.6 13.1154 26.1333 14.3209C25.6667 15.5265 25.025 16.6251 24.2083 17.6168C23.975 17.889 23.6687 18.03 23.2896 18.0397C22.9104 18.0494 22.5847 17.9182 22.3125 17.6459ZM18.55 13.8834C18.3361 13.6695 18.2146 13.3925 18.1854 13.0522C18.1562 12.7119 18.2389 12.3765 18.4333 12.0459C18.5694 11.8126 18.6715 11.5647 18.7396 11.3022C18.8076 11.0397 18.8417 10.7723 18.8417 10.5001C18.8417 10.2279 18.8076 9.96052 18.7396 9.69802C18.6715 9.43552 18.5694 9.1876 18.4333 8.95426C18.2389 8.62371 18.1562 8.28829 18.1854 7.94801C18.2146 7.60774 18.3361 7.33065 18.55 7.11676C18.8222 6.84454 19.1528 6.71329 19.5417 6.72301C19.9305 6.73274 20.2319 6.88343 20.4458 7.1751C20.7764 7.66121 21.0389 8.18135 21.2333 8.73551C21.4278 9.28968 21.525 9.87788 21.525 10.5001C21.525 11.1223 21.4278 11.7105 21.2333 12.2647C21.0389 12.8188 20.7764 13.339 20.4458 13.8251C20.2319 14.1168 19.9305 14.2675 19.5417 14.2772C19.1528 14.2869 18.8222 14.1557 18.55 13.8834ZM10.5 15.1668C9.21666 15.1668 8.11805 14.7098 7.20416 13.7959C6.29027 12.882 5.83332 11.7834 5.83332 10.5001C5.83332 9.21677 6.29027 8.11815 7.20416 7.20426C8.11805 6.29038 9.21666 5.83343 10.5 5.83343C11.7833 5.83343 12.8819 6.29038 13.7958 7.20426C14.7097 8.11815 15.1667 9.21677 15.1667 10.5001C15.1667 11.7834 14.7097 12.882 13.7958 13.7959C12.8819 14.7098 11.7833 15.1668 10.5 15.1668ZM2.33332 24.5001C2.00277 24.5001 1.72568 24.3883 1.50207 24.1647C1.27846 23.9411 1.16666 23.664 1.16666 23.3334V21.2334C1.16666 20.5918 1.33193 19.989 1.66249 19.4251C1.99305 18.8612 2.44999 18.4334 3.03332 18.1418C4.02499 17.6362 5.14305 17.2084 6.38749 16.8584C7.63193 16.5084 9.00277 16.3334 10.5 16.3334C11.9972 16.3334 13.368 16.5084 14.6125 16.8584C15.8569 17.2084 16.975 17.6362 17.9667 18.1418C18.55 18.4334 19.0069 18.8612 19.3375 19.4251C19.668 19.989 19.8333 20.5918 19.8333 21.2334V23.3334C19.8333 23.664 19.7215 23.9411 19.4979 24.1647C19.2743 24.3883 18.9972 24.5001 18.6667 24.5001H2.33332ZM3.49999 22.1668H17.5V21.2334C17.5 21.0195 17.4465 20.8251 17.3396 20.6501C17.2326 20.4751 17.0917 20.339 16.9167 20.2418C16.2167 19.8918 15.3174 19.5418 14.2187 19.1918C13.1201 18.8418 11.8805 18.6668 10.5 18.6668C9.11943 18.6668 7.87985 18.8418 6.78124 19.1918C5.68263 19.5418 4.78332 19.8918 4.08332 20.2418C3.90832 20.339 3.76735 20.4751 3.66041 20.6501C3.55346 20.8251 3.49999 21.0195 3.49999 21.2334V22.1668ZM10.5 12.8334C11.1417 12.8334 11.691 12.605 12.1479 12.148C12.6049 11.6911 12.8333 11.1418 12.8333 10.5001C12.8333 9.85843 12.6049 9.30913 12.1479 8.85218C11.691 8.39524 11.1417 8.16677 10.5 8.16677C9.85832 8.16677 9.30902 8.39524 8.85207 8.85218C8.39513 9.30913 8.16666 9.85843 8.16666 10.5001C8.16666 11.1418 8.39513 11.6911 8.85207 12.148C9.30902 12.605 9.85832 12.8334 10.5 12.8334Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
