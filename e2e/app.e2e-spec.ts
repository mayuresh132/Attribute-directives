import { AtributeDirectivePage } from './app.po';

describe('atribute-directive App', () => {
  let page: AtributeDirectivePage;

  beforeEach(() => {
    page = new AtributeDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
