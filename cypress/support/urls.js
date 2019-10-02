export default {
  searchPage: `/primo-explore/search?vid=${Cypress.env('vid')}`,
  searchPageWithPcAvailability: `/primo-explore/search?vid=${Cypress.env('vid')}&pcAvailability=true`
}