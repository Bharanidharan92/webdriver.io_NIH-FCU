import checkIfElementExists from '../lib/checkIfElementExists';

it('should demonstrate the close command', function () {
   browser.setValue('#ctl00_ContentPlaceHolder1_txtUsername','b_murugesan');
    browser.setValue('//input[@id="ctl00_ContentPlaceHolder1_txtPassword"]','allizwell@24');
    browser.timeouts('implicit', 10000);  
    browser.waitForVisible('#ctl00_ContentPlaceHolder1_txtPassword');
    var wE_login = browser.element('//input[@name="ctl00$ContentPlaceHolder1$btnLogin"]')
    wE_login.click();
    browser.waitForVisible('//span[text()="Sign Out"]',10000)

})