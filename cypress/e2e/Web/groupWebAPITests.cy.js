import GroupPage from "../../pageObjects/groupAPIPO";

describe('ERP - Web API - Group API Test Automation', () => {


  before(() => {

  });

  //get all groups
  it("WEB - Verify getAllGroups API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const groupPage = new GroupPage()
    groupPage.getAllGroupWebAPI()

  });

//get GroupByIdAPI
it("WEB - Verify getGroupDetailsByID API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.getGroupDetailsByIDWebAPI()

});

//post saveGroup
it("WEB - Verify saveGroup API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.saveGroupWebAPI()

});


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})