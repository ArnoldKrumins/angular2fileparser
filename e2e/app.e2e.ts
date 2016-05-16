import { Angular2fileparserPage } from './app.po';

describe('angular2fileparser App', function() {
  let page: Angular2fileparserPage;

  beforeEach(() => {
    page = new Angular2fileparserPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2fileparser works!');
  });
});
