const {pages} = require('../po');

describe("Verify language translation feature", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await pages("about").open();

    try {
      await pages("about").acceptCookies();
    } catch (e) {
          
        }
  });

  it("should open language selector and display available languages", async () => {
    const langButton = await $("button.location-selector__button");
    await langButton.waitForExist({ timeout: 5000 });

    
    await browser.execute(el => el.click(), langButton);

    const dropdown = await $("div.location-selector-ui ul.location-selector__list");
    await dropdown.waitForDisplayed({ timeout: 5000 });

    const items = await $$("ul.location-selector__list li.location-selector__item");
    expect(items.length).to.be.greaterThan(0);
  });
  
  it("should contain 'Polska (Polski)' in the language list", async () => {
    const langButton = await $("button.location-selector__button");
    await langButton.waitForExist({ timeout: 5000 });
    await langButton.click();

    await $("ul.location-selector__list").waitForExist({ timeout: 5000 });
    const items = await $$("ul.location-selector__list li.location-selector__item a");
    const languages = [];
    for (const item of items) {
      languages.push(await item.getText());
    }

    console.log("Languages found:", languages);
    const hasPolish = languages.some(lang => lang.includes('Polska (Polski)'));
    await expect(hasPolish).to.be.true;
  });

  it("should change language to Deutsch and update page", async () => {
    const langButton = await $("button.location-selector__button");
    await langButton.waitForExist({ timeout: 5000 });

    await browser.execute(el => el.click(), langButton);
    const deutschLink = await $('a.location-selector__link[href="https://www.epam.de"]');
    await deutschLink.waitForClickable({ timeout: 5000 });
    await deutschLink.click();
    const url = await browser.getUrl();
    url.should.include("epam.de");
  });
});
