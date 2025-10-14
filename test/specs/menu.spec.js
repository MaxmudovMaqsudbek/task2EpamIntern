describe("Verify the global navigation menu across all pages", () => {
  const pages = [
    { name: "Home", url: "https://www.epam.com/" },
    { name: "Insights", url: "https://www.epam.com/insights" },
    { name: "Services", url: "https://www.epam.com/services" },
    { name: "Industries", url: "https://www.epam.com/industries" },
    { name: "About", url: "https://www.epam.com/about" },
    { name: "Careers", url: "https://www.epam.com/careers" },
  ];

  
  async function loadPage(url) {
    await browser.url(url);
    
    try {
      const acceptBtn = await $('button#onetrust-accept-btn-handler');
      await acceptBtn.waitForDisplayed({ timeout: 3000 });
      await acceptBtn.click();
      await browser.pause(500);
    } catch (e) {}
    
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title && !title.includes('Just a moment') && title.length > 5;
    }, { 
      timeout: 30000,
      interval: 1000
    });
  }

  for (const page of pages) {
    it(`should display navigation menu on ${page.name} page`, async () => {
      await loadPage(page.url);
      await browser.pause(2000);

      const navMenu = await $("header .top-navigation-ui-23, header nav");
      await navMenu.waitForDisplayed({ timeout: 10000 });
      
      const isVisible = await navMenu.isDisplayed();
      expect(isVisible).toBe(true);
    });
  }

  it("should navigate to Insights page", async () => {
    await loadPage("https://www.epam.com/");
    await browser.pause(2000);
    
    const insightsLink = await $("a[href='/insights']");
    await insightsLink.waitForExist({ timeout: 10000 });
    
    await browser.execute((el) => el.click(), insightsLink);
    
    await browser.waitUntil(async () => {
      const url = await browser.getUrl();
      return url.includes('/insights');
    }, { timeout: 15000 });

    const title = await browser.getTitle();
    expect(title).toMatch(/Insights/i);
});
});