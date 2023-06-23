import FieldPage from "../../pageObjects/fieldAPIPO";

describe('ERP - Mobile API - Fields API Test Automation', () => {


  before(() => {

  });

  //get all field
  it("Verify GetAllFields API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const fieldPage = new FieldPage()
    fieldPage.getAllFieldsMobAPI()

  });


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})