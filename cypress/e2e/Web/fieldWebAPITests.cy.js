import FieldPage from "../../pageObjects/fieldAPIPO";

describe('ERP - Web API - Fields API Test Automation', () => {


  before(() => {

  });

  //get all field
  it("WEB - Verify GetAllFields API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const fieldPage = new FieldPage()
    fieldPage.getAllFieldsWebAPI()

  });


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})