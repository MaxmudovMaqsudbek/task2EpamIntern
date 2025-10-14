describe("Verify Home page title", () => {

  beforeEach(async () => {
    await browser.url("https://www.epam.com/");
    
    try {
      const acceptBtn = await $('button#onetrust-accept-btn-handler');
      await acceptBtn.waitForDisplayed({ timeout: 5000 });
      await acceptBtn.click();
    } catch (e) {}
    
    
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title && !title.includes('Just a moment') && title.includes('EPAM');
    }, { timeout: 30000 });
  });

  it("should have the correct page title", async () => {
    const title = await browser.getTitle();
    expect(title).toContain('EPAM');
  });
});