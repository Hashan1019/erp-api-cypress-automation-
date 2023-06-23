import FactoryPage from "../../pageObjects/factoryAPIPO";

describe('ERP - Factory API Test Automation', () => {


  before(() => {

  });

  //get all groups
  it("Verify GetAllFactories API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const factoryPage = new FactoryPage()
    factoryPage.getAllFactoriesAPI()

  });

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})