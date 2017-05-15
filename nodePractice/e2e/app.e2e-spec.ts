import { NodePracticePage } from './app.po';

describe('node-practice App', function() {
  let page: NodePracticePage;

  beforeEach(() => {
    page = new NodePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
