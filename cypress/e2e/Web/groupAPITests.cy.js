import GroupPage from "../../pageObjects/groupAPIPO";

describe('ERP - Group API Test Automation', () => {


  before(() => {

  });

  //get all groups
  it("Verify getAllGroups API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const groupPage = new GroupPage()
    groupPage.getAllGroupAPI()

  });

//get all active groups
it("Verify getAllActiveGroups API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.getAllActiveGroupAPI()

});

//get GroupByIdAPI
it("Verify getGroupByID API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.getGroupByIdAPI()

});

//post saveGroup
it("Verify saveGroup API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.saveGroupAPI()

});


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})