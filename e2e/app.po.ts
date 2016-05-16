export class Angular2fileparserPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2fileparser-app h1')).getText();
  }
}
