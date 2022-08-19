// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from '@stencil/core';
import { FlipIconSize } from '../flip-icon.types';

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-like",
})
export class FlipIconLike {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${this.size} ${this.size}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && <Fragment><path d="M5.72387 4.94293L9.27694 1.38986C10.0419 0.62488 11.3284 1.35327 11.066 2.40281L10.4369 4.91927C10.3843 5.12966 10.5434 5.33345 10.7603 5.33345H14C14.7364 5.33345 15.3333 5.93041 15.3333 6.66679V6.86831C15.3333 7.61454 15.1767 8.35247 14.8737 9.03438L13.0186 13.2083C12.8046 13.6898 12.3271 14.0001 11.8002 14.0001H6.66668C5.9303 14.0001 5.33334 13.4032 5.33334 12.6668V5.88574C5.33334 5.53212 5.47382 5.19298 5.72387 4.94293Z" fill="currentColor"/><path d="M4.00001 12.6668V6.66679C4.00001 5.93041 3.40306 5.33345 2.66668 5.33345C1.9303 5.33345 1.33334 5.93041 1.33334 6.66679V12.6668C1.33334 13.4032 1.9303 14.0001 2.66668 14.0001C3.40306 14.0001 4.00001 13.4032 4.00001 12.6668Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M8.58579 7.41427L13.9154 2.08466C15.0629 0.937198 16.9926 2.02979 16.599 3.60409L15.6553 7.37879C15.5764 7.69436 15.8151 8.00006 16.1404 8.00006H21C22.1046 8.00006 23 8.89549 23 10.0001V10.3023C23 11.4217 22.7651 12.5286 22.3105 13.5514L19.5279 19.8123C19.2069 20.5346 18.4906 21.0001 17.7003 21.0001H10C8.89543 21.0001 8 20.1046 8 19.0001V8.82848C8 8.29805 8.21071 7.78934 8.58579 7.41427Z" fill="currentColor"/><path d="M6 19.0001V10.0001C6 8.89549 5.10457 8.00006 4 8.00006C2.89543 8.00006 2 8.89549 2 10.0001V19.0001C2 20.1046 2.89543 21.0001 4 21.0001C5.10457 21.0001 6 20.1046 6 19.0001Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M10.0168 8.64994L16.2346 2.43206C17.5733 1.09336 19.8247 2.36804 19.3655 4.20473L18.2645 8.60855C18.1725 8.97672 18.451 9.33336 18.8305 9.33336H24.5C25.7887 9.33336 26.8333 10.378 26.8333 11.6667V12.0194C26.8333 13.3253 26.5593 14.6166 26.0289 15.81L22.7825 23.1143C22.408 23.957 21.5724 24.5 20.6503 24.5H11.6667C10.378 24.5 9.33334 23.4554 9.33334 22.1667V10.2999C9.33334 9.68102 9.57918 9.08753 10.0168 8.64994Z" fill="currentColor"/><path d="M7.00001 22.1667V11.6667C7.00001 10.378 5.95534 9.33336 4.66668 9.33336C3.37801 9.33336 2.33334 10.378 2.33334 11.6667V22.1667C2.33334 23.4554 3.37801 24.5 4.66668 24.5C5.95534 24.5 7.00001 23.4554 7.00001 22.1667Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
