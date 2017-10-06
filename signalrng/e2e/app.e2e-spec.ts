import { SignalrngPage } from './app.po';

describe('signalrng App', () => {
  let page: SignalrngPage;

  beforeEach(() => {
    page = new SignalrngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sngr works!');
  });
});
