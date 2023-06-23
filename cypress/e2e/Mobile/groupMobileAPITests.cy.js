import GroupPage from "../../pageObjects/groupAPIPO";

describe('ERP - Mobile API - Group API Test Automation', () => {


  before(() => {

  });

  //get all groups
  it("Verify getAllGroups API", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const groupPage = new GroupPage()
    groupPage.getAllGroupMobAPI()

  });

//get all active groups
it("Verify getAllActiveGroups API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.getAllActiveGroupMobAPI()

});

//get GroupByIdAPI
it("Verify getGroupByID API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.getGroupByIDMobAPI()

});

//post saveGroup
it("Verify saveGroup API", () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  const groupPage = new GroupPage()
  groupPage.saveGroupMobAPI()

});


  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
})