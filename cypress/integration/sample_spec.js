Cypress.env({
  "searchPage": `/primo-explore/search?vid=${Cypress.env('vid')}`
})

const urls = {
  searchPage: `/primo-explore/search?vid=${Cypress.env('vid')}`
};

describe('Search Test', () => {
  it('works', () => {
    cy.visit(urls.searchPage);
  });
});