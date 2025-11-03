const BaseComponent = require("../common/base.component");

class LanguageComponent extends BaseComponent {
  constructor() {
    super("button.location-selector__button");
  }

  async openLanguageSelector() {
    const btn = await this.rootEl;
    await browser.execute(el => el.click(), btn);
    await $("ul.location-selector__list").waitForDisplayed({ timeout: 1000 });
 }

  async listItems() {
    await this.openLanguageSelector();
    const items = await $$("ul.location-selector__list li.location-selector__item");
    return items;
 }

 async listItemsText() {
    const items = await this.listItems();
    const texts = [];
    for (const it of items){
        texts.push(await it.getText());
    }
    return texts
 }

  async hasThisLanguage(name){
    const texts = await this.listItemsText();
    return texts.some(t=>t.includes(name));
  }

  async checkDeutschUrl(){
    await this.openLanguageSelector();
    const deutschLink = await $('a.location-selector__link[href="https://www.epam.de"]');
    await deutschLink.waitForClickable();
    await deutschLink.click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes('epam.de'), { timeout: 5000 });
    return await browser.getUrl();
  }
}

module.exports = LanguageComponent;
