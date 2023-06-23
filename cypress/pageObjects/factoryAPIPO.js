import groupData from "../fixtures/groupData.json";
import factoryData from "../fixtures/factoryData.json";


class FactoryPage {

  getAllFactoriesAPI() {
    cy.commonEncryptyDecryptGet(factoryData.getAllFactoriesUrl)
  }
 
}
export default FactoryPage;