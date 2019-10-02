//TODO: this path won't work for VE
const gotchaBaseUrl = 
  Cypress.config().baseUrl + 
  '/primo_library/libweb/webservices/rest/v1/gotcha/vid/' +
  Cypress.env('vid');

const getAngularServices = (...services) => {
  const getAngular = () => cy.window().its('angular');

  const getInjector = () => 
    cy.get('prm-explore-main')
      .then($e => 
        getAngular()
          .then(angular => 
            angular.element($e).injector()));

  return getInjector()
    .then(injector => 
      Promise.all(services.map(s => 
        injector.get(s))));
}

const getGotchData = (url) => 
  getAngularServices('$http')
    // Using a 1m timeout because the gotcha request is *slow*
    .then({timeout: 60000}, (([$http]) => 
      $http.get(url, {cache: true})));


export default {

  getBasicSearches: () => 
    getGotchData(gotchaBaseUrl + '/tests?area=search&test=basic')
      .then(resp => resp.data.tests.search.basic),

  // the known items response doesn't really include expected record ID, 
  // so it's not terribly useful...
  getKnownItemSearches: () => 
    getGotchData(gotchaBaseUrl + '/tests?area=search&test=knowenItem')
      .then(resp => resp.data.tests.search.knowenItem)
}
