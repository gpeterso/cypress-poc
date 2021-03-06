import urls from '../support/urls';
import {searchElements} from '../support/primo_elements';

const searchFor = function(query) {
  return cy.get(searchElements.searchBar)
    .type(query + '{enter}')
    .blur();
}

describe('Basic Search', () => {
  beforeEach(() => {
    cy.visit(urls.searchPage);
  });

  it('returns results', () => {
    searchFor('test');
    cy.get(searchElements.resultsContainer)
      .children()
      .should('have.length.greaterThan', 0);
  });
});