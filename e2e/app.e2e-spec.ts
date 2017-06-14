import { GupshupPage } from './app.po';

describe('gupshup App', () => {
  let page: GupshupPage;

  beforeEach(() => {
    page = new GupshupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
