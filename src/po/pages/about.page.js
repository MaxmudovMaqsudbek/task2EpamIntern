const ThemeComponent = require("../components/about/theme.component");
const GetBrowserTitleComponent = require("../components/about/title.component");
const BasePage = require("./base.page");
class AboutPage extends BasePage {
    constructor(){
        super('/about');
        this.title = new GetBrowserTitleComponent();
        this.theme = new ThemeComponent();
    }

     async getTitle(){
        return await this.title.browserTitle();
    }

    async switchTheme(){
        return await this.theme.switchTheme();
    }

    async class(){
        return await this.theme.initialClass();
    }
}

module.exports = AboutPage;