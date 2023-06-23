import FieldPage from "../../pageObjects/fieldAPIPO";

describe('ERP - Fields API Test Automation', () => {


  before(() => {

  });

  //get all field
  it("Verify GetAllFields API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const fieldPage = new FieldPage()
    fieldPage.getAllFieldsAPI()

  });


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})