const HomePage = require('./home.page');
/**
 * 
 * @param  name {'homepage' | 'careerspage'} 
 * @returns {HomePage | CareersPage}
 */
function pages(name){
    const item = {
        about: new HomePage(),
    }
    return item[name.toLowerCase()];
}

module.exports = {
    HomePage,
    pages
}