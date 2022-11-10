import { newSpecPage } from "@stencil/core/testing";

import { FlipAppLayout } from "./flip-app-layout";

(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

describe("flip-app-layout", () => {
  it("renders navigation area if provided", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App">
          <div slot="navigation">Navigation</div>
        </flip-app-layout>
      `,
    });

    const navigationArea = page.root.shadowRoot.querySelector(
      ".app-layout__navigation"
    );

    expect(
      page.root.shadowRoot.children[0].classList.contains(
        "app-layout--has-navigation"
      )
    ).toBeTruthy();

    expect(
      page.root.shadowRoot.querySelector(".app-layout__header")
    ).not.toBeNull();

    expect(navigationArea).not.toBeNull();

    const pageWithoutNavigation = await newSpecPage({
      components: [FlipAppLayout],
      html: `<flip-app-layout app-name="App"></flip-app-layout>`,
    });

    expect(
      pageWithoutNavigation.root.shadowRoot.children[0].classList.contains(
        "app-layout--has-navigation"
      )
    ).toBeFalsy();
  });

  it("renders sidebar area if provided", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App" sidebar-heading="Sidebar">
          <div slot="sidebar">Sidebar</div>
        </flip-app-layout>
      `,
    });

    const sidebarArea = page.root.shadowRoot.querySelector(
      ".app-layout__sidebar"
    );

    const sidebarHeading = sidebarArea.querySelector("flip-heading");

    expect(
      page.root.shadowRoot.children[0].classList.contains(
        "app-layout--has-sidebar"
      )
    ).toBeTruthy();

    expect(sidebarArea).not.toBeNull();
    expect(sidebarHeading.getAttribute("as")).toBe("h3");
    expect(sidebarHeading.getAttribute("text")).toBe("Sidebar");

    const pageWithoutSidebar = await newSpecPage({
      components: [FlipAppLayout],
      html: `<flip-app-layout app-name="App"></flip-app-layout>`,
    });

    expect(
      pageWithoutSidebar.root.shadowRoot.children[0].classList.contains(
        "app-layout--has-sidebar"
      )
    ).toBeFalsy();
  });

  it("renders floating action button", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App" cta-icon="<flip-icon-add></flip-icon-add>" cta-label="CTA"></flip-app-layout>
      `,
    });

    const spy = jest.fn();

    const cta = page.root.shadowRoot.querySelector(".app-layout__floating-cta")
      .children[0] as HTMLFlipButtonElement;

    page.root.addEventListener("ctaClick", spy);

    expect(cta).not.toBeNull();
    expect(cta.getAttribute("icon")).toBe("<flip-icon-add></flip-icon-add>");
    expect(cta.getAttribute("label")).toBe("CTA");

    cta.click();

    expect(spy).toHaveBeenCalled();
  });

  it("renders the app name", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App"></flip-app-layout>
      `,
    });

    const heading = page.root.shadowRoot.querySelector("flip-heading");

    expect(heading.getAttribute("as")).toBe("h1");
    expect(heading.getAttribute("text")).toBe("App");
  });

  it("renders the app bar", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-bar-media="Media" app-name="App" heading="Heading">
          <div slot="app-bar-controls">Controls</div>
          <div slot="navigation">Navigation</div>
        </flip-app-layout>
      `,
    });

    const appBar = page.root.shadowRoot.querySelector(".app-layout__app-bar");
    const appBarMedia = appBar.querySelector(".app-layout__app-bar-media");
    const appBarHeading = appBar.querySelector(".app-layout__app-bar-heading")
      .children[0];

    expect(appBar).not.toBeNull();
    expect(appBarMedia.innerHTML).toBe("Media");
    expect(appBarHeading.getAttribute("as")).toBe("h2");
    expect(appBarHeading.getAttribute("text")).toBe("Heading");
  });

  it("renders the app name inside app bar, if no navigation is provided", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App" heading="Heading"></flip-app-layout>
      `,
    });

    const appBar = page.root.shadowRoot.querySelector(".app-layout__app-bar");
    const appBarHeading = appBar.querySelector("flip-heading");

    expect(appBar).not.toBeNull();
    expect(appBarHeading.getAttribute("as")).toBe("h1");
    expect(appBarHeading.getAttribute("text")).toBe("App");
  });

  it("changes the mobile view", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App" heading="Heading" sidebar-heading="Sidebar" transition-style="none">
          <div slot="navigation">Navigation</div>
          <div slot="content">Content</div>
          <div slot="sidebar">Sidebar</div>
        </flip-app-layout>
      `,
    });

    const container = page.root.shadowRoot.children[0];
    const root = page.root as HTMLFlipAppLayoutElement;
    const spy = jest.fn();

    page.root.addEventListener("mobileViewChange", spy);

    expect(
      container.classList.contains("app-layout--mobile-view-navigation")
    ).toBeTruthy();

    await root.changeMobileView("body");
    await new Promise((resolve) => setTimeout(resolve));
    await page.waitForChanges();

    expect(
      container.classList.contains("app-layout--mobile-view-body")
    ).toBeTruthy();

    await root.changeMobileView("sidebar");
    await new Promise((resolve) => setTimeout(resolve));
    await page.waitForChanges();

    expect(
      container.classList.contains("app-layout--mobile-view-sidebar")
    ).toBeTruthy();

    expect(spy.mock.calls[0][0].detail).toBe("body");
    expect(spy.mock.calls[1][0].detail).toBe("sidebar");
  });

  it("toggles the sidebar", async () => {
    const page = await newSpecPage({
      components: [FlipAppLayout],
      html: `
        <flip-app-layout app-name="App" sidebar-heading="Sidebar">
          <div slot="sidebar">Sidebar</div>
        </flip-app-layout>
      `,
    });

    const container = page.root.shadowRoot.children[0];
    const spy = jest.fn();

    page.root.addEventListener("sidebarToggle", spy);

    expect(
      container.classList.contains("app-layout--sidebar-active")
    ).toBeFalsy();

    await (page.root as HTMLFlipAppLayoutElement).toggleSidebar();
    await page.waitForChanges();

    expect(
      container.classList.contains("app-layout--sidebar-active")
    ).toBeTruthy();

    await (page.root as HTMLFlipAppLayoutElement).toggleSidebar();

    // wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    await page.waitForChanges();

    expect(
      container.classList.contains("app-layout--sidebar-active")
    ).toBeFalsy();

    expect(spy.mock.calls[0][0].detail).toBe(true);
    expect(spy.mock.calls[1][0].detail).toBe(false);
  });
});
