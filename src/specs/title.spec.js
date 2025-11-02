const { pages } = require('../po');
describe("Verify Home page title", () => {

  beforeEach(async () => {
        await pages("about").open();
    
    try {
        await pages("about").acceptCookies();
    } catch (e) {}
    
    
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title && !title.includes('Just a moment') && title.includes('EPAM');
    }, { timeout: 30000 });
  });

  it("should have the correct page title", async () => {
    const title = await browser.getTitle();
    expect(title).to.include('EPAM');
  });
});