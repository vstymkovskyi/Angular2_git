import { AuthProjectPage } from './app.po';

describe('auth-project App', () => {
  let page: AuthProjectPage;

  beforeEach(() => {
    page = new AuthProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
