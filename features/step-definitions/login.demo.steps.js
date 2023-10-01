const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is on login page$/, async() => {
    await browser.url('https://www.saucedemo.com/');
});

When(/^user enters (.*) and (.*)$/, async(username, password) => {
	await $('#user-name').setValue(username)
    await $('#password').setValue(password)
});


When(/^clicks on login button$/, async() => {
    await $('#login-button').click()
});

Then(/^user is navigated to the page with (.*)$/, async(url) => {
	await expect(browser).toHaveUrl(url)
});

