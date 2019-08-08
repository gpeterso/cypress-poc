import urls from '../support/urls';

describe('Search Test', () => {
  it('works', () => {
    cy.visit(urls.searchPage);
  });
});