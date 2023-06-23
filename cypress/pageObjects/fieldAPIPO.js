import groupData from "../fixtures/groupData.json";
import fieldData from "../fixtures/fieldData.json";


class FieldPage {

  getAllFieldsAPI() {
    cy.commonEncryptyDecryptGet(fieldData.getAllFieldsUrl)
  }

}
export default FieldPage;