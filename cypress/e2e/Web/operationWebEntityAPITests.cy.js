import OperationEntityPage from "../../pageObjects/operationEntityAPIPO";

describe('ERP - Web API - Factory API Test Automation', () => {


  before(() => {

  });

  //get all OperationEntities
  it("WEB - Verify getAllOperationEntities API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const operationEntityPage = new OperationEntityPage()
    operationEntityPage.getAllOperationEntityWebAPI()
    
  });

  //get FactoriesByGroupIDAPI
it("WEB - Verify getFactoriesByGroupID API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const operationEntityPage = new OperationEntityPage()
  operationEntityPage.getFactoriesByGroupIDWebAPI()

});

//post saveFactory
it("Verify saveFactory API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const operationEntityPage = new OperationEntityPage()
  operationEntityPage.saveFactoryWebAPI()

});

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})