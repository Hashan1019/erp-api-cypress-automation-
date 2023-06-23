import groupData from "../fixtures/groupData.json";
import fieldData from "../fixtures/fieldData.json";


class FieldPage {

// web api
  getAllFieldsWebAPI() {
    cy.commonEncryptyDecryptGet(fieldData.getAllFieldsMobileUrl)
  }


  // mobile api
  getAllFieldsMobAPI() {
    cy.commonEncryptyDecryptGet(fieldData.getAllFieldsMobileUrl)
  }
}
export default FieldPage;