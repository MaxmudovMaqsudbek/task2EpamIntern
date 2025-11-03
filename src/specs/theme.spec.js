const { pages } = require('../po');
describe("Toggle between Light and Dark Modes", () => {
  beforeEach(async () => {
        await pages("about").open();
    
    try {
        await pages("about").acceptCookies();
    } catch (e) {}
  });

  it("should toggle theme", async () => {
    const initialClass = await pages('about').getInitialClass();
    const newClass = await pages('about').switchTheme();
    expect(newClass).to.not.equal(initialClass);
});
});