const AboutPage = require('./about.page');
/**
 * 
 * @param  name {'homepage' | 'careerspage'} 
 * @returns {AboutPage | CareersPage}
 */
function pages(name){
    const item = {
        about: new AboutPage(),
    }
    return item[name.toLowerCase()];
}

module.exports = {
    AboutPage,
    pages
}