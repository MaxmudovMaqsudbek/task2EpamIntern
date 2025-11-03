const ThemeComponent = require("../components/about/theme.component");
const GetBrowserTitleComponent = require("../components/about/title.component");
const HeaderNavbarMenuComponent = require("../components/common/header-navbarmenu.component");
const BasePage = require("./base.page");
class AboutPage extends BasePage {
    constructor(){
        super('/about');
        this.title = new GetBrowserTitleComponent();
        this.theme = new ThemeComponent();
        this.navMenu = new HeaderNavbarMenuComponent();
    }

     async getTitle(){
        return await this.title.browserTitle();
    }

    async switchTheme(){
        return await this.theme.switchTheme();
    }

    async getInitialclass(){
        return await this.theme.initialClass();
    }

    async getNavMenu(){
        return await this.navMenu.getNavMenu();
    }

    async titleCareers(){
        return await this.navMenu.getTitleCareers();
    }
    async titleInsights(){
        return await this.navMenu.getTitleInsights();
    }

}

module.exports = AboutPage;