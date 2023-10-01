const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^User is located on the main page of saucedemo website$/, async() => {
    await browser.url('https://www.saucedemo.com/');
});

When(/^User click “Login” button$/, async() => {
    await $('#login-button').click()
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async() => {
    await expect($('[data-test="error"]')).toHaveTextContaining('Epic sadface: Username is required')
});
