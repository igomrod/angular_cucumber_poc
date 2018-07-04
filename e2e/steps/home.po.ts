import { browser, by, element, until } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getTitle() {
        return element(by.css('app-root h1')).getText();
    }
}
