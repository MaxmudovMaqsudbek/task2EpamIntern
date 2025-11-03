const BaseComponent = require("./base.component");

class HeaderNavbarMenuComponent  extends BaseComponent {
    constructor(){
        super('.header');
    }

    async getNavMenu() {
        return await this.rootEl.$('.top-navigation-ui-23')
    }    
    
    async getTitleInsights() {
        const insightsLink = await this.rootEl.$("a[href='/insights']");    
        await browser.execute((el) => el.click(), insightsLink);
        return await browser.getTitle();
    }

    async getTitleCareers() {
        const careersLink = await this.rootEl.$("a[href='/careers']");    
        await browser.execute((el) => el.click(), careersLink);
        return await browser.getTitle();
    }
}

module.exports = HeaderNavbarMenuComponent;