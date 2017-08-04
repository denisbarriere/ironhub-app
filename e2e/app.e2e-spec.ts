import { IronhubAppPage } from './app.po';

describe('ironhub-app App', () => {
  let page: IronhubAppPage;

  beforeEach(() => {
    page = new IronhubAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
