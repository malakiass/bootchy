import { BootchyPage } from './app.po';

describe('bootchy App', function() {
  let page: BootchyPage;

  beforeEach(() => {
    page = new BootchyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
