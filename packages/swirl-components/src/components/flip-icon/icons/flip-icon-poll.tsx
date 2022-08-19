// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from '@stencil/core';
import { FlipIconSize } from '../flip-icon.types';

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-poll",
})
export class FlipIconPoll {
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
        {this.size === 16 && <Fragment><path d="M10 8.66667H3.33333C2.98004 8.66772 2.64151 8.80854 2.39169 9.05836C2.14187 9.30818 2.00106 9.6467 2 10V12.6667C2.00106 13.02 2.14187 13.3585 2.39169 13.6083C2.64151 13.8581 2.98004 13.9989 3.33333 14H10C10.3533 13.9989 10.6918 13.8581 10.9416 13.6083C11.1915 13.3585 11.3323 13.02 11.3333 12.6667V10C11.3323 9.6467 11.1915 9.30818 10.9416 9.05836C10.6918 8.80854 10.3533 8.66772 10 8.66667ZM4.66667 12.6667C4.40296 12.6667 4.14517 12.5885 3.92591 12.442C3.70664 12.2955 3.53574 12.0872 3.43483 11.8436C3.33391 11.5999 3.30751 11.3319 3.35895 11.0732C3.4104 10.8146 3.53739 10.577 3.72386 10.3905C3.91033 10.2041 4.1479 10.0771 4.40655 10.0256C4.66519 9.97417 4.93328 10.0006 5.17691 10.1015C5.42055 10.2024 5.62878 10.3733 5.77529 10.5926C5.9218 10.8118 6 11.0696 6 11.3333C5.99894 11.6866 5.85813 12.0252 5.60831 12.275C5.35849 12.5248 5.01996 12.6656 4.66667 12.6667V12.6667ZM12.6667 2H3.33333C2.98004 2.00106 2.64151 2.14187 2.39169 2.39169C2.14187 2.64151 2.00106 2.98004 2 3.33333V6C2.00106 6.3533 2.14187 6.69182 2.39169 6.94164C2.64151 7.19146 2.98004 7.33228 3.33333 7.33333H12.6667C13.02 7.33228 13.3585 7.19146 13.6083 6.94164C13.8581 6.69182 13.9989 6.3533 14 6V3.33333C13.9989 2.98004 13.8581 2.64151 13.6083 2.39169C13.3585 2.14187 13.02 2.00106 12.6667 2V2ZM4.66667 6C4.40296 6 4.14517 5.9218 3.92591 5.77529C3.70664 5.62878 3.53574 5.42055 3.43483 5.17691C3.33391 4.93328 3.30751 4.66519 3.35895 4.40655C3.4104 4.1479 3.53739 3.91033 3.72386 3.72386C3.91033 3.53739 4.1479 3.4104 4.40655 3.35895C4.66519 3.30751 4.93328 3.33391 5.17691 3.43483C5.42055 3.53574 5.62878 3.70664 5.77529 3.92591C5.9218 4.14517 6 4.40296 6 4.66667C5.99894 5.01996 5.85813 5.35849 5.60831 5.60831C5.35849 5.85813 5.01996 5.99894 4.66667 6V6Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M15 13H5C4.47005 13.0016 3.96227 13.2128 3.58753 13.5875C3.2128 13.9623 3.00158 14.4701 3 15V19C3.00158 19.5299 3.2128 20.0377 3.58753 20.4125C3.96227 20.7872 4.47005 20.9984 5 21H15C15.5299 20.9984 16.0377 20.7872 16.4125 20.4125C16.7872 20.0377 16.9984 19.5299 17 19V15C16.9984 14.4701 16.7872 13.9623 16.4125 13.5875C16.0377 13.2128 15.5299 13.0016 15 13ZM7 19C6.60444 19 6.21776 18.8827 5.88886 18.6629C5.55996 18.4432 5.30362 18.1308 5.15224 17.7654C5.00087 17.3999 4.96126 16.9978 5.03843 16.6098C5.1156 16.2219 5.30608 15.8655 5.58579 15.5858C5.86549 15.3061 6.22186 15.1156 6.60982 15.0384C6.99778 14.9613 7.39991 15.0009 7.76537 15.1522C8.13082 15.3036 8.44318 15.56 8.66294 15.8889C8.8827 16.2178 9 16.6044 9 17C8.99842 17.5299 8.7872 18.0377 8.41247 18.4125C8.03773 18.7872 7.52995 18.9984 7 19ZM19 3H5C4.47005 3.00158 3.96227 3.2128 3.58753 3.58753C3.2128 3.96227 3.00158 4.47005 3 5V9C3.00158 9.52995 3.2128 10.0377 3.58753 10.4125C3.96227 10.7872 4.47005 10.9984 5 11H19C19.5299 10.9984 20.0377 10.7872 20.4125 10.4125C20.7872 10.0377 20.9984 9.52995 21 9V5C20.9984 4.47005 20.7872 3.96227 20.4125 3.58753C20.0377 3.2128 19.5299 3.00158 19 3ZM7 9C6.60444 9 6.21776 8.8827 5.88886 8.66294C5.55996 8.44318 5.30362 8.13082 5.15224 7.76537C5.00087 7.39991 4.96126 6.99778 5.03843 6.60982C5.1156 6.22186 5.30608 5.86549 5.58579 5.58579C5.86549 5.30608 6.22186 5.1156 6.60982 5.03843C6.99778 4.96126 7.39991 5.00087 7.76537 5.15224C8.13082 5.30362 8.44318 5.55996 8.66294 5.88886C8.8827 6.21776 9 6.60444 9 7C8.99842 7.52995 8.7872 8.03773 8.41247 8.41247C8.03773 8.7872 7.52995 8.99842 7 9Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M17.5 15.1667H5.83333C5.21506 15.1685 4.62264 15.4149 4.18546 15.8521C3.74827 16.2893 3.50185 16.8817 3.5 17.5V22.1667C3.50185 22.7849 3.74827 23.3774 4.18546 23.8145C4.62264 24.2517 5.21506 24.4982 5.83333 24.5H17.5C18.1183 24.4982 18.7107 24.2517 19.1479 23.8145C19.5851 23.3774 19.8315 22.7849 19.8333 22.1667V17.5C19.8315 16.8817 19.5851 16.2893 19.1479 15.8521C18.7107 15.4149 18.1183 15.1685 17.5 15.1667ZM8.16667 22.1667C7.70518 22.1667 7.25405 22.0298 6.87034 21.7734C6.48662 21.517 6.18755 21.1526 6.01095 20.7263C5.83434 20.2999 5.78814 19.8307 5.87817 19.3781C5.9682 18.9255 6.19043 18.5097 6.51675 18.1834C6.84307 17.8571 7.25883 17.6349 7.71146 17.5448C8.16408 17.4548 8.63323 17.501 9.05959 17.6776C9.48596 17.8542 9.85037 18.1533 10.1068 18.537C10.3632 18.9207 10.5 19.3718 10.5 19.8333C10.4982 20.4516 10.2517 21.044 9.81454 21.4812C9.37736 21.9184 8.78494 22.1648 8.16667 22.1667V22.1667ZM22.1667 3.5H5.83333C5.21506 3.50185 4.62264 3.74827 4.18546 4.18546C3.74827 4.62264 3.50185 5.21506 3.5 5.83333V10.5C3.50185 11.1183 3.74827 11.7107 4.18546 12.1479C4.62264 12.5851 5.21506 12.8315 5.83333 12.8333H22.1667C22.7849 12.8315 23.3774 12.5851 23.8145 12.1479C24.2517 11.7107 24.4982 11.1183 24.5 10.5V5.83333C24.4982 5.21506 24.2517 4.62264 23.8145 4.18546C23.3774 3.74827 22.7849 3.50185 22.1667 3.5V3.5ZM8.16667 10.5C7.70518 10.5 7.25405 10.3632 6.87034 10.1068C6.48662 9.85037 6.18755 9.48596 6.01095 9.05959C5.83434 8.63323 5.78814 8.16408 5.87817 7.71146C5.9682 7.25883 6.19043 6.84307 6.51675 6.51675C6.84307 6.19043 7.25883 5.9682 7.71146 5.87817C8.16408 5.78814 8.63323 5.83434 9.05959 6.01095C9.48596 6.18755 9.85037 6.48662 10.1068 6.87034C10.3632 7.25405 10.5 7.70518 10.5 8.16667C10.4982 8.78494 10.2517 9.37736 9.81454 9.81454C9.37736 10.2517 8.78494 10.4982 8.16667 10.5V10.5Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
