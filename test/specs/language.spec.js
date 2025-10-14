describe("Verify language translation feature", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("https://www.epam.com/", { waitUntil: "domcontentloaded", timeout: 90000 });

    const acceptBtn = await $("button#onetrust-accept-btn-handler");
    if (await acceptBtn.isDisplayed()) await acceptBtn.click();

    await browser.waitUntil(async () => (await browser.getTitle()).includes("EPAM"), {
      timeout: 40000,
    });
  });

  it("should open language selector and display available languages", async () => {
    const langButton = await $("button.location-selector__button");
    await langButton.waitForExist({ timeout: 30000 });

    // JS click (more reliable than .click() due to animation)
    await browser.execute(el => el.click(), langButton);

    const dropdown = await $("div.location-selector-ui ul.location-selector__list");
    await dropdown.waitForDisplayed({ timeout: 15000 });

    const items = await $$("ul.location-selector__list li.location-selector__item");
    expect(items.length).toBeGreaterThan(0);
  });

  it("should change language to Deutsch and update page", async () => {
    const langButton = await $("button.location-selector__button");
    await langButton.waitForExist({ timeout: 30000 });

    await browser.execute(el => el.click(), langButton);
    await browser.pause(1000); // wait for panel animation

    const deutschLink = await $('a.location-selector__link[href="https://www.epam.de"]');
    await deutschLink.waitForClickable({ timeout: 20000 });
    await deutschLink.click();

    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("epam.de"),
      { timeout: 35000, interval: 1000 }
    );

    const url = await browser.getUrl();
    expect(url).toContain("epam.de");
  });
});
