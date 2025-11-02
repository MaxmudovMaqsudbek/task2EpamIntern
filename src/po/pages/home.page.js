const CookieBannerComponent = require("../components/common/cookie-banner.component");
const BasePage = require("./base.page");
class HomePage extends BasePage {
    constructor(){
        super('/');
        this.cookieBanner = new CookieBannerComponent();
    }    

    async acceptCookies() {
        await this.cookieBanner.acceptAllCookies();
    }
}

module.exports = HomePage;