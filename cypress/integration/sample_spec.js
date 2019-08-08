import urls from '../support/urls';

describe('Search Test', () => {
  it('works', () => {
    cy.visit(urls.searchPage);
    cy.get('#searchBar').type('test{enter}');
    cy.get('div.results-container').children().should('have.length.greaterThan', 0);
  });
});