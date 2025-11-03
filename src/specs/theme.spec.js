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
    const initialClass = await pages('about').getInitialclass();
    await browser.execute((el) => el.click(), toggleButton);
    expect(await pages('about').getInitialclass()).to.not.equal(initialClass);
});
});