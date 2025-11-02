const BasePage = require("./base.page");
class AboutPage extends BasePage {
    constructor(){
        super('/about');
    }    
}

module.exports = AboutPage;