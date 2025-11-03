const { pages } = require('../po');
describe("Verify Home page title", () => {

  beforeEach(async () => {
          await pages("about").open();
    
    try {
          await pages("about").acceptCookies();
    } catch (e) {}
  });

  it("should have the correct page title", async () => {
    expect(await pages('about').getTitle()).to.include('EPAM');
  });
});