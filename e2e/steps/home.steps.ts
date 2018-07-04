import { expect } from 'chai';
import { HomePage } from './home.po';
import { browser, by, element } from 'protractor';

const { Given, When, Then, Before } = require('cucumber');

let home: HomePage;

Before(() => {
        home = new HomePage();
    });

When(/^I open the page$/, async () => {
    await browser.get('http://localhost:4200');
});

Then(/^I see the title "(.*?)"$/, (expectedTitle: String) => {
    return home.getTitle().then( text => expect(text).to.equal(expectedTitle));
});
