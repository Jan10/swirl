import { newSpecPage } from "@stencil/core/testing";

import { FlipLightbox } from "./flip-lightbox";

describe("flip-lightbox", () => {
  it("renders its slides and controls", async () => {
    const page = await newSpecPage({
      components: [FlipLightbox],
      html: `
        <flip-lightbox
          close-button-label="Close"
          download-button-label="Download"
          label="Lightbox"
          next-slide-button-label="Next"
          previous-slide-button-label="Previous"
        >
          <flip-file-viewer description="Cute dog in a blaket." file="/sample.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer file="/sample.mp4" type="video/mp4"></flip-file-viewer>
        </flip-lightbox>
      `,
    });

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(page.root).toEqualHtml(`
      <flip-lightbox close-button-label="Close" download-button-label="Download" label="Lightbox" next-slide-button-label="Next" previous-slide-button-label="Previous">
        <mock:shadow-root>
          <section aria-hidden="true" aria-label="Lightbox" aria-modal="true" class="lightbox" id="lightbox" role="dialog" tabindex="-1">
            <div class="lightbox__body" role="document">
              <header class="lightbox__header">
                <button aria-label="Close" class="lightbox__close-button">
                  <flip-icon-close></flip-icon-close>
                </button>
                <button aria-label="Download" class="lightbox__download-button">
                  <flip-icon-download></flip-icon-download>
                </button>
              </header>
              <div aria-roledescription="carousel" class="lightbox__content" role="group">
                <div aria-atomic="false" aria-live="polite" class="lightbox__slides">
                  <slot></slot>
                </div>
              </div>
              <div class="lightbox__controls">
                <button aria-label="Previous" class="lightbox__previous-slide-button" disabled="">
                  <flip-icon-arrow-left></flip-icon-arrow-left>
                </button>
                <button aria-label="Next" class="lightbox__next-slide-button">
                  <flip-icon-arrow-right></flip-icon-arrow-right>
                </button>
              </div>
              <span class="lightbox__pagination">
                <span aria-current="page">1</span> / 2
              </span>
            </div>
          </section>
        </mock:shadow-root>
        <flip-file-viewer active="true" aria-label="undefined" aria-roledescription="slide" description="Cute dog in a blaket." file="/sample.jpg" role="group" type="image/jpeg" style="transform: translate3d(-0%, 0, 0);"></flip-file-viewer>
        <flip-file-viewer active="true" aria-hidden="true" aria-label="undefined" aria-roledescription="slide" file="/sample.mp4\" role=\"group\" type=\"video/mp4\" style=\"transform: translate3d(-0%, 0, 0);\"></flip-file-viewer>
      </flip-lightbox>
    `);
  });

  it("navigates through slides via buttons", async () => {
    const page = await newSpecPage({
      components: [FlipLightbox],
      html: `
        <flip-lightbox label="Lightbox">
          <flip-file-viewer description="Cute dog in a blaket." file="/sample.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer description="Another dog in a blaket." file="/sample-2.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer file="/sample.mp4" type="video/mp4"></flip-file-viewer>
        </flip-lightbox>
      `,
    });

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    const slides = page.rootInstance.slides;

    const previousSlideButton =
      page.root.shadowRoot.querySelector<HTMLButtonElement>(
        '[aria-label="Previous slide"]'
      );

    const nextSlideButton =
      page.root.shadowRoot.querySelector<HTMLButtonElement>(
        '[aria-label="Next slide"]'
      );

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("false");
    expect(page.rootInstance.activeSlideIndex).toBe(0);

    nextSlideButton.click();

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("true");
    expect(page.rootInstance.activeSlideIndex).toBe(1);

    previousSlideButton.click();

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("false");
    expect(page.rootInstance.activeSlideIndex).toBe(0);
  });

  it("navigates through slides via keyboard", async () => {
    const page = await newSpecPage({
      components: [FlipLightbox],
      html: `
        <flip-lightbox label="Lightbox">
          <flip-file-viewer description="Cute dog in a blaket." file="/sample.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer description="Another dog in a blaket." file="/sample-2.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer file="/sample.mp4" type="video/mp4"></flip-file-viewer>
        </flip-lightbox>
      `,
    });

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    const slides = page.rootInstance.slides;

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowRight" }));

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("true");
    expect(page.rootInstance.activeSlideIndex).toBe(1);

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowLeft" }));

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("false");
    expect(page.rootInstance.activeSlideIndex).toBe(0);
  });

  it("navigates through slides via touch", async () => {
    const page = await newSpecPage({
      components: [FlipLightbox],
      html: `
        <flip-lightbox label="Lightbox">
          <flip-file-viewer description="Cute dog in a blaket." file="/sample.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer description="Another dog in a blaket." file="/sample-2.jpg" type="image/jpeg"></flip-file-viewer>
          <flip-file-viewer file="/sample.mp4" type="video/mp4"></flip-file-viewer>
        </flip-lightbox>
      `,
    });

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    const slides = page.rootInstance.slides;

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(
        new Event("touchStart", { touches: [{ clientX: 0 } as Touch] } as any)
      );

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(
        new Event("touchMove", { touches: [{ clientX: -100 } as Touch] } as any)
      );

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(new Event("touchEnd"));

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("true");
    expect(page.rootInstance.activeSlideIndex).toBe(1);

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(
        new Event("touchStart", { touches: [{ clientX: 0 } as Touch] } as any)
      );

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(
        new Event("touchMove", { touches: [{ clientX: 100 } as Touch] } as any)
      );

    page.root.shadowRoot
      .querySelector("#lightbox")
      .dispatchEvent(new Event("touchEnd"));

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(slides[0].getAttribute("active")).toBe("true");
    expect(slides[1].getAttribute("active")).toBe("true");
    expect(slides[2].getAttribute("active")).toBe("false");
    expect(page.rootInstance.activeSlideIndex).toBe(0);
  });
});
