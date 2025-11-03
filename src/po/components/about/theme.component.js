const BaseComponent = require("../common/base.component");

class ThemeComponent  extends BaseComponent {
    constructor(){
        super('body');
    }
    async themeSwitcher(){
        return await this.rootEl.$(".theme-switcher");;
    }

    async initialClass(){
        return await this.rootEl.getAttribute('class');
    }

    async toggleTheme(){
        const el = await this.themeSwitcher();
        await el.waitForExist({ timeout: 5000 });
        await el.scrollIntoView({ block: 'center', inline: 'center' });
        //await el.waitForDisplayed({ timeout: 10000 });
        await browser.execute(elem => elem.click(), el);
        return await this.initialClass();
    }

}

module.exports = ThemeComponent;