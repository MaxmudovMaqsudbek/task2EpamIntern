const BaseComponent = require("./base.component");

class CookieBannerComponent  extends BaseComponent {
    constructor(){
        super('button#onetrust-accept-btn-handler');
    }

    async acceptAllCookies(){
        await this.rootEl.waitForDisplayed({ timeout: 5000 });
        await this.rootEl.click();
        //await browser.pause(ANIMATION_DELAY);
    }
}

module.exports = CookieBannerComponent ;