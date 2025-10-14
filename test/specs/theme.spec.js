describe("Toggle between Light and Dark Modes", () => {
  beforeEach(async () => {
    await browser.url("https://www.epam.com/");
    
    try {
      const acceptBtn = await $('button#onetrust-accept-btn-handler');
      await acceptBtn.waitForDisplayed({ timeout: 5000 });
      await acceptBtn.click();
      await browser.pause(1000);
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
    expect(newClass).not.toEqual(initialClass);
});
});