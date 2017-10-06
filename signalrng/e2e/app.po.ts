import { browser, element, by } from 'protractor';

export class SignalrngPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sngr-root h1')).getText();
  }
}
