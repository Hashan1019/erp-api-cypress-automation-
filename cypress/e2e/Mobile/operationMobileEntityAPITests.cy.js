import OperationEntityPage from "../../pageObjects/operationEntityAPIPO";

describe('ERP - Mobile API - Factory API Test Automation', () => {


  before(() => {

  });

  //get all groups
  it("Verify getAllOperationEntities API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const operationEntityPage = new OperationEntityPage()
    operationEntityPage.getAllOperationEntityMobAPI()
    
  });


  //get FactoriesByGroupIDAPI
it("Verify getFactoriesByGroupID API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const operationEntityPage = new OperationEntityPage()
  operationEntityPage.getFactoriesByGroupIDMobAPI()

});

//post saveFactory
it("Verify saveFactory API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const operationEntityPage = new OperationEntityPage()
  operationEntityPage.saveFactoryMobAPI()

});

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})