const CookieBannerComponent = require("../components/common/cookie-banner.component");

class BasePage {
    constructor(url){
        this.url = url;        
        this.cookieBanner = new CookieBannerComponent();
    }
    
    open(){
        return browser.url(this.url);
    }

    async acceptCookies() {
        await this.cookieBanner.acceptAllCookies();
    }
}

module.exports = BasePage;