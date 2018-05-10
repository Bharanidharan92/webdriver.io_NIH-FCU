/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
  
    const url = (type === 'url') ? page : browser.options.baseUrl + page;
    browser.timeouts('implicit', 10000); 
    browser.url(url);
    browser.windowHandleMaximize();
    browser.timeouts('implicit', 10000);  
    // browser.setValue('#ctl00_ContentPlaceHolder1_txtUsername','b_murugesan');
    // browser.setValue('//input[@id="ctl00_ContentPlaceHolder1_txtPassword"]','allizwell@24');
   // browser.setValue('#ctl00_ContentPlaceHolder1_txtPassword','allizwell@24');
    // browser.timeouts('implicit', 10000);  
    // browser.waitForVisible('#ctl00_ContentPlaceHolder1_txtPassword');
    // var wE_login = browser.element('//input[@name="ctl00$ContentPlaceHolder1$btnLogin"]')
    // wE_login.click();
    // browser.waitForVisible('//span[text()="Sign Out"]',10000)
    
    // it('should demonstrate the close command', function () {    
    //     var title = browser.getTitle()
    //     console.log(title) // outputs: "Google"
    
    //     browser.close()
    // })
};
