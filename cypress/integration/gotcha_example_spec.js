import urls from '../support/urls';
import {searchElements} from '../support/primo_elements';
import gotcha from '../support/gotcha';

const searchFor = function(query) {
  return cy.get(searchElements.searchBar)
    .type(query + '{enter}')
    .blur();
}

describe('Gotcha Example', () => {
  let testData; 

  before(() => {
    // the gotcha API assumes that all PCI results will be returned 
    // (not just full text)
    cy.visit(urls.searchPageWithPcAvailability);
    gotcha.getBasicSearches()
      .then(searches => testData = searches);
  });

  it('should work with basic search data', () => {
    const query = testData[0].queryTerm;
    const expectedResults = Number.parseInt(testData[0].expected, 10);
    searchFor(query);
    cy.get('span.results-count').then($span => {
      const results = Number.parseInt($span.text().replace(/,/g, ""), 10);
      expect(results).to.equal(expectedResults);
    })
  });

});