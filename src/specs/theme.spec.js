const { pages } = require('../po');
describe("Toggle between Light and Dark Modes", () => {
  beforeEach(async () => {
        await pages("about").open();
    
    try {
        await pages("about").acceptCookies();
    } catch (e) {}
  });

  it("should toggle theme", async () => {
    const toggleButton = await pages('about').switchTheme();
    toggleButton.scrollIntoView();
    const initialClass = await pages('about').class();
    await browser.execute((el) => el.click(), toggleButton);
    expect(await pages('about').class()).to.not.equal(initialClass);
});
});