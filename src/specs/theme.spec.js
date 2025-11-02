const { pages } = require('../po');
describe("Toggle between Light and Dark Modes", () => {
  beforeEach(async () => {
        await pages("about").open();
    
    try {
        await pages("about").acceptCookies();
    } catch (e) {}
    
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title && !title.includes('Just a moment');
    }, { timeout: 30000 });
  });

  it("should toggle theme", async () => {
    const toggleButton = await $('.theme-switcher');
    await toggleButton.waitForExist({ timeout: 10000 });
    await toggleButton.scrollIntoView();
    await browser.pause(500);
    
    const body = await $('body');
    const initialClass = await body.getAttribute('class');
    
    await browser.execute((el) => el.click(), toggleButton);
    await browser.pause(2000);
    
    const newClass = await body.getAttribute('class');
    expect(newClass).to.not.equal(initialClass);
});
});