// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from '@stencil/core';
import { FlipIconSize } from '../flip-icon.types';

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-add",
})
export class FlipIconAdd {
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
        {this.size === 16 && <Fragment><path d="M8 12.7666C7.78889 12.7666 7.60845 12.6915 7.45867 12.5413C7.30845 12.3915 7.23334 12.2111 7.23334 11.9999V8.76661H4C3.78889 8.76661 3.60845 8.6915 3.45867 8.54128C3.30845 8.3915 3.23334 8.21105 3.23334 7.99994C3.23334 7.78883 3.30845 7.60839 3.45867 7.45861C3.60845 7.30839 3.78889 7.23328 4 7.23328H7.23334V3.99994C7.23334 3.78883 7.30845 3.60817 7.45867 3.45794C7.60845 3.30817 7.78889 3.23328 8 3.23328C8.21112 3.23328 8.39156 3.30817 8.54134 3.45794C8.69156 3.60817 8.76667 3.78883 8.76667 3.99994V7.23328H12C12.2111 7.23328 12.3916 7.30839 12.5413 7.45861C12.6916 7.60839 12.7667 7.78883 12.7667 7.99994C12.7667 8.21105 12.6916 8.3915 12.5413 8.54128C12.3916 8.6915 12.2111 8.76661 12 8.76661H8.76667V11.9999C8.76667 12.2111 8.69156 12.3915 8.54134 12.5413C8.39156 12.6915 8.21112 12.7666 8 12.7666V12.7666Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M12 19.15C11.6833 19.15 11.4127 19.0373 11.188 18.812C10.9627 18.5873 10.85 18.3166 10.85 18V13.15H6.00001C5.68334 13.15 5.41267 13.0373 5.18801 12.812C4.96267 12.5873 4.85001 12.3166 4.85001 12C4.85001 11.6833 4.96267 11.4126 5.18801 11.188C5.41267 10.9626 5.68334 10.85 6.00001 10.85H10.85V5.99998C10.85 5.68331 10.9627 5.41231 11.188 5.18698C11.4127 4.96231 11.6833 4.84998 12 4.84998C12.3167 4.84998 12.5873 4.96231 12.812 5.18698C13.0373 5.41231 13.15 5.68331 13.15 5.99998V10.85H18C18.3167 10.85 18.5873 10.9626 18.812 11.188C19.0373 11.4126 19.15 11.6833 19.15 12C19.15 12.3166 19.0373 12.5873 18.812 12.812C18.5873 13.0373 18.3167 13.15 18 13.15H13.15V18C13.15 18.3166 13.0373 18.5873 12.812 18.812C12.5873 19.0373 12.3167 19.15 12 19.15Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M14 22.3417C13.6305 22.3417 13.3148 22.2102 13.0527 21.9473C12.7898 21.6852 12.6583 21.3694 12.6583 21V15.3417H6.99999C6.63055 15.3417 6.31477 15.2102 6.05266 14.9473C5.78977 14.6852 5.65833 14.3694 5.65833 14C5.65833 13.6305 5.78977 13.3148 6.05266 13.0527C6.31477 12.7898 6.63055 12.6583 6.99999 12.6583H12.6583V6.99999C12.6583 6.63055 12.7898 6.31438 13.0527 6.05149C13.3148 5.78938 13.6305 5.65833 14 5.65833C14.3694 5.65833 14.6852 5.78938 14.9473 6.05149C15.2102 6.31438 15.3417 6.63055 15.3417 6.99999V12.6583H21C21.3694 12.6583 21.6852 12.7898 21.9473 13.0527C22.2102 13.3148 22.3417 13.6305 22.3417 14C22.3417 14.3694 22.2102 14.6852 21.9473 14.9473C21.6852 15.2102 21.3694 15.3417 21 15.3417H15.3417V21C15.3417 21.3694 15.2102 21.6852 14.9473 21.9473C14.6852 22.2102 14.3694 22.3417 14 22.3417V22.3417Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
