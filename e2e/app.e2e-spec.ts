import { InspiniaPage } from './app.po';

describe('inspinia App', () => {
  let page: InspiniaPage;

  beforeEach(() => {
    page = new InspiniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome in Inspinia Angular 4 Starter Project');
  });
});
