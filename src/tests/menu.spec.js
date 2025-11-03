const { pages } = require('../po');
describe("Verify the global navigation menu across all pages", () => {
  const pagesOfWebsite = [
    { name: "Home", url: "https://www.epam.com/" },
    { name: "Insights", url: "https://www.epam.com/insights" },
    { name: "Services", url: "https://www.epam.com/services" },
    { name: "Industries", url: "https://www.epam.com/industries" },
    { name: "About", url: "https://www.epam.com/about" },
    { name: "Careers", url: "https://www.epam.com/careers" },
  ];

  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await pages("about").open();

    try {
      await pages("about").acceptCookies();
    } catch (e) {
          
        }
  });

  for (const page of pagesOfWebsite) {
    it(`should display navigation menu on ${page.name} page`, async () => {
      const nav = await pages('about').getNavMenu();
      const visible = await nav.isDisplayed();
      expect(visible).to.be.true;
    });
  }

  it("should navigate to Insights page", async () => {
    expect(await pages("about").titleInsights()).to.match(/Insights/i);
  });

  it("should navigate to Careers page", async () => {
    expect(await pages("about").titleCareers()).to.match(/Careers/i);
  });
  
});