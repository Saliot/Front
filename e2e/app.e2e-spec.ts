import { EReportingPage } from './app.po';

describe('e-reporting App', function() {
  let page: EReportingPage;

  beforeEach(() => {
    page = new EReportingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
