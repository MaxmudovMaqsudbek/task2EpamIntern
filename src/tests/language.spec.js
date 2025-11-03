const { expect } = require('chai');
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
   expect((await pages('about').listLanguageItems()).length).to.be.greaterThan(0);
  });
  
  it("should contain 'Polska (Polski)' in the language list", async () => {
    expect(await pages('about').hasPolishLanguage()).to.be.true;
  });

  it("should change language to Deutsch and update page", async () => {
    expect(await pages('about').checkDeutschLanguage()).to.include("epam.de")
  });
});
