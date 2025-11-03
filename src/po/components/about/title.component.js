const BaseComponent = require("../common/base.component");

class GetBrowserTitleComponent  extends BaseComponent {
    constructor(){
        super('');
    }

    async browserTitle (){
        return await browser.getTitle();
    }
}

module.exports = GetBrowserTitleComponent;