const BaseComponent = require("../common/base.component");

class ThemeComponent  extends BaseComponent {
    constructor(){
        super('body');
    }
    async switchTheme(){
        return await this.rootEl.$(".theme-switcher");;
    }

    async initialClass(){
        return this.rootEl.getAttribute('class');
    }
}

module.exports = ThemeComponent;