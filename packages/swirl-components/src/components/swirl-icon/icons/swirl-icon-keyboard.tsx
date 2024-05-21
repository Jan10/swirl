// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-keyboard",
})
export class SwirlIconKeyboard {
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
              d="M2.66665 12.6668C2.29998 12.6668 1.98609 12.5363 1.72498 12.2752C1.46387 12.0141 1.33331 11.7002 1.33331 11.3335V4.66683C1.33331 4.30016 1.46387 3.98627 1.72498 3.72516C1.98609 3.46405 2.29998 3.3335 2.66665 3.3335H13.3333C13.7 3.3335 14.0139 3.46405 14.275 3.72516C14.5361 3.98627 14.6666 4.30016 14.6666 4.66683V11.3335C14.6666 11.7002 14.5361 12.0141 14.275 12.2752C14.0139 12.5363 13.7 12.6668 13.3333 12.6668H2.66665ZM2.66665 11.3335H13.3333V4.66683H2.66665V11.3335ZM5.99998 10.6668H9.99998C10.1889 10.6668 10.3472 10.6029 10.475 10.4752C10.6028 10.3474 10.6666 10.1891 10.6666 10.0002C10.6666 9.81127 10.6028 9.65294 10.475 9.52516C10.3472 9.39738 10.1889 9.3335 9.99998 9.3335H5.99998C5.81109 9.3335 5.65276 9.39738 5.52498 9.52516C5.3972 9.65294 5.33331 9.81127 5.33331 10.0002C5.33331 10.1891 5.3972 10.3474 5.52498 10.4752C5.65276 10.6029 5.81109 10.6668 5.99998 10.6668ZM3.99998 6.66683C4.18887 6.66683 4.3472 6.60294 4.47498 6.47516C4.60276 6.34738 4.66665 6.18905 4.66665 6.00016C4.66665 5.81127 4.60276 5.65294 4.47498 5.52516C4.3472 5.39738 4.18887 5.3335 3.99998 5.3335C3.81109 5.3335 3.65276 5.39738 3.52498 5.52516C3.3972 5.65294 3.33331 5.81127 3.33331 6.00016C3.33331 6.18905 3.3972 6.34738 3.52498 6.47516C3.65276 6.60294 3.81109 6.66683 3.99998 6.66683ZM5.99998 6.66683C6.18887 6.66683 6.3472 6.60294 6.47498 6.47516C6.60276 6.34738 6.66665 6.18905 6.66665 6.00016C6.66665 5.81127 6.60276 5.65294 6.47498 5.52516C6.3472 5.39738 6.18887 5.3335 5.99998 5.3335C5.81109 5.3335 5.65276 5.39738 5.52498 5.52516C5.3972 5.65294 5.33331 5.81127 5.33331 6.00016C5.33331 6.18905 5.3972 6.34738 5.52498 6.47516C5.65276 6.60294 5.81109 6.66683 5.99998 6.66683ZM7.99998 6.66683C8.18887 6.66683 8.3472 6.60294 8.47498 6.47516C8.60276 6.34738 8.66665 6.18905 8.66665 6.00016C8.66665 5.81127 8.60276 5.65294 8.47498 5.52516C8.3472 5.39738 8.18887 5.3335 7.99998 5.3335C7.81109 5.3335 7.65276 5.39738 7.52498 5.52516C7.3972 5.65294 7.33331 5.81127 7.33331 6.00016C7.33331 6.18905 7.3972 6.34738 7.52498 6.47516C7.65276 6.60294 7.81109 6.66683 7.99998 6.66683ZM9.99998 6.66683C10.1889 6.66683 10.3472 6.60294 10.475 6.47516C10.6028 6.34738 10.6666 6.18905 10.6666 6.00016C10.6666 5.81127 10.6028 5.65294 10.475 5.52516C10.3472 5.39738 10.1889 5.3335 9.99998 5.3335C9.81109 5.3335 9.65276 5.39738 9.52498 5.52516C9.3972 5.65294 9.33331 5.81127 9.33331 6.00016C9.33331 6.18905 9.3972 6.34738 9.52498 6.47516C9.65276 6.60294 9.81109 6.66683 9.99998 6.66683ZM12 6.66683C12.1889 6.66683 12.3472 6.60294 12.475 6.47516C12.6028 6.34738 12.6666 6.18905 12.6666 6.00016C12.6666 5.81127 12.6028 5.65294 12.475 5.52516C12.3472 5.39738 12.1889 5.3335 12 5.3335C11.8111 5.3335 11.6528 5.39738 11.525 5.52516C11.3972 5.65294 11.3333 5.81127 11.3333 6.00016C11.3333 6.18905 11.3972 6.34738 11.525 6.47516C11.6528 6.60294 11.8111 6.66683 12 6.66683ZM3.99998 8.66683C4.18887 8.66683 4.3472 8.60294 4.47498 8.47516C4.60276 8.34738 4.66665 8.18905 4.66665 8.00016C4.66665 7.81127 4.60276 7.65294 4.47498 7.52516C4.3472 7.39738 4.18887 7.3335 3.99998 7.3335C3.81109 7.3335 3.65276 7.39738 3.52498 7.52516C3.3972 7.65294 3.33331 7.81127 3.33331 8.00016C3.33331 8.18905 3.3972 8.34738 3.52498 8.47516C3.65276 8.60294 3.81109 8.66683 3.99998 8.66683ZM5.99998 8.66683C6.18887 8.66683 6.3472 8.60294 6.47498 8.47516C6.60276 8.34738 6.66665 8.18905 6.66665 8.00016C6.66665 7.81127 6.60276 7.65294 6.47498 7.52516C6.3472 7.39738 6.18887 7.3335 5.99998 7.3335C5.81109 7.3335 5.65276 7.39738 5.52498 7.52516C5.3972 7.65294 5.33331 7.81127 5.33331 8.00016C5.33331 8.18905 5.3972 8.34738 5.52498 8.47516C5.65276 8.60294 5.81109 8.66683 5.99998 8.66683ZM7.99998 8.66683C8.18887 8.66683 8.3472 8.60294 8.47498 8.47516C8.60276 8.34738 8.66665 8.18905 8.66665 8.00016C8.66665 7.81127 8.60276 7.65294 8.47498 7.52516C8.3472 7.39738 8.18887 7.3335 7.99998 7.3335C7.81109 7.3335 7.65276 7.39738 7.52498 7.52516C7.3972 7.65294 7.33331 7.81127 7.33331 8.00016C7.33331 8.18905 7.3972 8.34738 7.52498 8.47516C7.65276 8.60294 7.81109 8.66683 7.99998 8.66683ZM9.99998 8.66683C10.1889 8.66683 10.3472 8.60294 10.475 8.47516C10.6028 8.34738 10.6666 8.18905 10.6666 8.00016C10.6666 7.81127 10.6028 7.65294 10.475 7.52516C10.3472 7.39738 10.1889 7.3335 9.99998 7.3335C9.81109 7.3335 9.65276 7.39738 9.52498 7.52516C9.3972 7.65294 9.33331 7.81127 9.33331 8.00016C9.33331 8.18905 9.3972 8.34738 9.52498 8.47516C9.65276 8.60294 9.81109 8.66683 9.99998 8.66683ZM12 8.66683C12.1889 8.66683 12.3472 8.60294 12.475 8.47516C12.6028 8.34738 12.6666 8.18905 12.6666 8.00016C12.6666 7.81127 12.6028 7.65294 12.475 7.52516C12.3472 7.39738 12.1889 7.3335 12 7.3335C11.8111 7.3335 11.6528 7.39738 11.525 7.52516C11.3972 7.65294 11.3333 7.81127 11.3333 8.00016C11.3333 8.18905 11.3972 8.34738 11.525 8.47516C11.6528 8.60294 11.8111 8.66683 12 8.66683Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M4 19C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H4ZM4 17H20V7H4V17ZM9 16H15C15.2833 16 15.5208 15.9042 15.7125 15.7125C15.9042 15.5208 16 15.2833 16 15C16 14.7167 15.9042 14.4792 15.7125 14.2875C15.5208 14.0958 15.2833 14 15 14H9C8.71667 14 8.47917 14.0958 8.2875 14.2875C8.09583 14.4792 8 14.7167 8 15C8 15.2833 8.09583 15.5208 8.2875 15.7125C8.47917 15.9042 8.71667 16 9 16ZM6 10C6.28333 10 6.52083 9.90417 6.7125 9.7125C6.90417 9.52083 7 9.28333 7 9C7 8.71667 6.90417 8.47917 6.7125 8.2875C6.52083 8.09583 6.28333 8 6 8C5.71667 8 5.47917 8.09583 5.2875 8.2875C5.09583 8.47917 5 8.71667 5 9C5 9.28333 5.09583 9.52083 5.2875 9.7125C5.47917 9.90417 5.71667 10 6 10ZM9 10C9.28333 10 9.52083 9.90417 9.7125 9.7125C9.90417 9.52083 10 9.28333 10 9C10 8.71667 9.90417 8.47917 9.7125 8.2875C9.52083 8.09583 9.28333 8 9 8C8.71667 8 8.47917 8.09583 8.2875 8.2875C8.09583 8.47917 8 8.71667 8 9C8 9.28333 8.09583 9.52083 8.2875 9.7125C8.47917 9.90417 8.71667 10 9 10ZM12 10C12.2833 10 12.5208 9.90417 12.7125 9.7125C12.9042 9.52083 13 9.28333 13 9C13 8.71667 12.9042 8.47917 12.7125 8.2875C12.5208 8.09583 12.2833 8 12 8C11.7167 8 11.4792 8.09583 11.2875 8.2875C11.0958 8.47917 11 8.71667 11 9C11 9.28333 11.0958 9.52083 11.2875 9.7125C11.4792 9.90417 11.7167 10 12 10ZM15 10C15.2833 10 15.5208 9.90417 15.7125 9.7125C15.9042 9.52083 16 9.28333 16 9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8C14.7167 8 14.4792 8.09583 14.2875 8.2875C14.0958 8.47917 14 8.71667 14 9C14 9.28333 14.0958 9.52083 14.2875 9.7125C14.4792 9.90417 14.7167 10 15 10ZM18 10C18.2833 10 18.5208 9.90417 18.7125 9.7125C18.9042 9.52083 19 9.28333 19 9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8C17.7167 8 17.4792 8.09583 17.2875 8.2875C17.0958 8.47917 17 8.71667 17 9C17 9.28333 17.0958 9.52083 17.2875 9.7125C17.4792 9.90417 17.7167 10 18 10ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM9 13C9.28333 13 9.52083 12.9042 9.7125 12.7125C9.90417 12.5208 10 12.2833 10 12C10 11.7167 9.90417 11.4792 9.7125 11.2875C9.52083 11.0958 9.28333 11 9 11C8.71667 11 8.47917 11.0958 8.2875 11.2875C8.09583 11.4792 8 11.7167 8 12C8 12.2833 8.09583 12.5208 8.2875 12.7125C8.47917 12.9042 8.71667 13 9 13ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM15 13C15.2833 13 15.5208 12.9042 15.7125 12.7125C15.9042 12.5208 16 12.2833 16 12C16 11.7167 15.9042 11.4792 15.7125 11.2875C15.5208 11.0958 15.2833 11 15 11C14.7167 11 14.4792 11.0958 14.2875 11.2875C14.0958 11.4792 14 11.7167 14 12C14 12.2833 14.0958 12.5208 14.2875 12.7125C14.4792 12.9042 14.7167 13 15 13ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M4.66665 22.1668C4.02498 22.1668 3.47567 21.9384 3.01873 21.4814C2.56179 21.0245 2.33331 20.4752 2.33331 19.8335V8.16683C2.33331 7.52516 2.56179 6.97586 3.01873 6.51891C3.47567 6.06197 4.02498 5.8335 4.66665 5.8335H23.3333C23.975 5.8335 24.5243 6.06197 24.9812 6.51891C25.4382 6.97586 25.6666 7.52516 25.6666 8.16683V19.8335C25.6666 20.4752 25.4382 21.0245 24.9812 21.4814C24.5243 21.9384 23.975 22.1668 23.3333 22.1668H4.66665ZM4.66665 19.8335H23.3333V8.16683H4.66665V19.8335ZM10.5 18.6668H17.5C17.8305 18.6668 18.1076 18.555 18.3312 18.3314C18.5548 18.1078 18.6666 17.8307 18.6666 17.5002C18.6666 17.1696 18.5548 16.8925 18.3312 16.6689C18.1076 16.4453 17.8305 16.3335 17.5 16.3335H10.5C10.1694 16.3335 9.89234 16.4453 9.66873 16.6689C9.44512 16.8925 9.33331 17.1696 9.33331 17.5002C9.33331 17.8307 9.44512 18.1078 9.66873 18.3314C9.89234 18.555 10.1694 18.6668 10.5 18.6668ZM6.99998 11.6668C7.33054 11.6668 7.60762 11.555 7.83123 11.3314C8.05484 11.1078 8.16665 10.8307 8.16665 10.5002C8.16665 10.1696 8.05484 9.89252 7.83123 9.66891C7.60762 9.4453 7.33054 9.3335 6.99998 9.3335C6.66942 9.3335 6.39234 9.4453 6.16873 9.66891C5.94512 9.89252 5.83331 10.1696 5.83331 10.5002C5.83331 10.8307 5.94512 11.1078 6.16873 11.3314C6.39234 11.555 6.66942 11.6668 6.99998 11.6668ZM10.5 11.6668C10.8305 11.6668 11.1076 11.555 11.3312 11.3314C11.5548 11.1078 11.6666 10.8307 11.6666 10.5002C11.6666 10.1696 11.5548 9.89252 11.3312 9.66891C11.1076 9.4453 10.8305 9.3335 10.5 9.3335C10.1694 9.3335 9.89234 9.4453 9.66873 9.66891C9.44512 9.89252 9.33331 10.1696 9.33331 10.5002C9.33331 10.8307 9.44512 11.1078 9.66873 11.3314C9.89234 11.555 10.1694 11.6668 10.5 11.6668ZM14 11.6668C14.3305 11.6668 14.6076 11.555 14.8312 11.3314C15.0548 11.1078 15.1666 10.8307 15.1666 10.5002C15.1666 10.1696 15.0548 9.89252 14.8312 9.66891C14.6076 9.4453 14.3305 9.3335 14 9.3335C13.6694 9.3335 13.3923 9.4453 13.1687 9.66891C12.9451 9.89252 12.8333 10.1696 12.8333 10.5002C12.8333 10.8307 12.9451 11.1078 13.1687 11.3314C13.3923 11.555 13.6694 11.6668 14 11.6668ZM17.5 11.6668C17.8305 11.6668 18.1076 11.555 18.3312 11.3314C18.5548 11.1078 18.6666 10.8307 18.6666 10.5002C18.6666 10.1696 18.5548 9.89252 18.3312 9.66891C18.1076 9.4453 17.8305 9.3335 17.5 9.3335C17.1694 9.3335 16.8923 9.4453 16.6687 9.66891C16.4451 9.89252 16.3333 10.1696 16.3333 10.5002C16.3333 10.8307 16.4451 11.1078 16.6687 11.3314C16.8923 11.555 17.1694 11.6668 17.5 11.6668ZM21 11.6668C21.3305 11.6668 21.6076 11.555 21.8312 11.3314C22.0548 11.1078 22.1666 10.8307 22.1666 10.5002C22.1666 10.1696 22.0548 9.89252 21.8312 9.66891C21.6076 9.4453 21.3305 9.3335 21 9.3335C20.6694 9.3335 20.3923 9.4453 20.1687 9.66891C19.9451 9.89252 19.8333 10.1696 19.8333 10.5002C19.8333 10.8307 19.9451 11.1078 20.1687 11.3314C20.3923 11.555 20.6694 11.6668 21 11.6668ZM6.99998 15.1668C7.33054 15.1668 7.60762 15.055 7.83123 14.8314C8.05484 14.6078 8.16665 14.3307 8.16665 14.0002C8.16665 13.6696 8.05484 13.3925 7.83123 13.1689C7.60762 12.9453 7.33054 12.8335 6.99998 12.8335C6.66942 12.8335 6.39234 12.9453 6.16873 13.1689C5.94512 13.3925 5.83331 13.6696 5.83331 14.0002C5.83331 14.3307 5.94512 14.6078 6.16873 14.8314C6.39234 15.055 6.66942 15.1668 6.99998 15.1668ZM10.5 15.1668C10.8305 15.1668 11.1076 15.055 11.3312 14.8314C11.5548 14.6078 11.6666 14.3307 11.6666 14.0002C11.6666 13.6696 11.5548 13.3925 11.3312 13.1689C11.1076 12.9453 10.8305 12.8335 10.5 12.8335C10.1694 12.8335 9.89234 12.9453 9.66873 13.1689C9.44512 13.3925 9.33331 13.6696 9.33331 14.0002C9.33331 14.3307 9.44512 14.6078 9.66873 14.8314C9.89234 15.055 10.1694 15.1668 10.5 15.1668ZM14 15.1668C14.3305 15.1668 14.6076 15.055 14.8312 14.8314C15.0548 14.6078 15.1666 14.3307 15.1666 14.0002C15.1666 13.6696 15.0548 13.3925 14.8312 13.1689C14.6076 12.9453 14.3305 12.8335 14 12.8335C13.6694 12.8335 13.3923 12.9453 13.1687 13.1689C12.9451 13.3925 12.8333 13.6696 12.8333 14.0002C12.8333 14.3307 12.9451 14.6078 13.1687 14.8314C13.3923 15.055 13.6694 15.1668 14 15.1668ZM17.5 15.1668C17.8305 15.1668 18.1076 15.055 18.3312 14.8314C18.5548 14.6078 18.6666 14.3307 18.6666 14.0002C18.6666 13.6696 18.5548 13.3925 18.3312 13.1689C18.1076 12.9453 17.8305 12.8335 17.5 12.8335C17.1694 12.8335 16.8923 12.9453 16.6687 13.1689C16.4451 13.3925 16.3333 13.6696 16.3333 14.0002C16.3333 14.3307 16.4451 14.6078 16.6687 14.8314C16.8923 15.055 17.1694 15.1668 17.5 15.1668ZM21 15.1668C21.3305 15.1668 21.6076 15.055 21.8312 14.8314C22.0548 14.6078 22.1666 14.3307 22.1666 14.0002C22.1666 13.6696 22.0548 13.3925 21.8312 13.1689C21.6076 12.9453 21.3305 12.8335 21 12.8335C20.6694 12.8335 20.3923 12.9453 20.1687 13.1689C19.9451 13.3925 19.8333 13.6696 19.8333 14.0002C19.8333 14.3307 19.9451 14.6078 20.1687 14.8314C20.3923 15.055 20.6694 15.1668 21 15.1668Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
