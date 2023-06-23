import operationEntityData from "../fixtures/operationEntityData.json";


class OperationEntity {

  // web api
  getAllOperationEntityWebAPI() {
    cy.commonEncryptyDecryptGet(operationEntityData.getAllFACWebUrl)
  }


  getFactoriesByGroupIDWebAPI() {
    cy.commonEncryptyDecryptGetByQueryString(operationEntityData.getFactoriesByGroupIDMobileUrl, operationEntityData.queryStringOperationEntityID);
  }
 

  saveFactoryWebAPI() {
    cy.commonEncryptyDecryptPost(operationEntityData.postSaveFactoryMobileUrl, {

      operationEntityID: operationEntityData.operationEntityID,
      operationEntityCode: operationEntityData.operationEntityCode,
      operationEntityName: operationEntityData.operationEntityName,
      operationEntityLocation: operationEntityData.operationEntityLocation,
      enityTypeID: operationEntityData.enityTypeID,
      groupID: operationEntityData.groupID,
      isErpEnabled: operationEntityData.isErpEnabled,
      isActive: operationEntityData.isActive,
      createdBy: operationEntityData.createdBy,
      createdDate: operationEntityData.createdDate,
      modifiedBy: operationEntityData.modifiedBy,
      modifiedDate: operationEntityData.modifiedDate
  
    }).then(response => {
      console.log('response', response);
    });
  }

  // mobile api
  getAllOperationEntityMobAPI() {
    cy.commonEncryptyDecryptGet(operationEntityData.getAllOperationEntitiesMobileUrl)
  }


  getFactoriesByGroupIDMobAPI() {
    cy.commonEncryptyDecryptGetByQueryString(operationEntityData.getFactoriesByGroupIDMobileUrl, operationEntityData.queryStringOperationEntityID);
  }
 

  saveFactoryMobAPI() {
    cy.commonEncryptyDecryptPost(operationEntityData.postSaveFactoryMobileUrl, {

      operationEntityID: operationEntityData.operationEntityID,
      operationEntityCode: operationEntityData.operationEntityCode,
      operationEntityName: operationEntityData.operationEntityName,
      operationEntityLocation: operationEntityData.operationEntityLocation,
      enityTypeID: operationEntityData.enityTypeID,
      groupID: operationEntityData.groupID,
      isErpEnabled: operationEntityData.isErpEnabled,
      isActive: operationEntityData.isActive,
      createdBy: operationEntityData.createdBy,
      createdDate: operationEntityData.createdDate,
      modifiedBy: operationEntityData.modifiedBy,
      modifiedDate: operationEntityData.modifiedDate
  
    }).then(response => {
      console.log('response', response);
    });
  }

}
export default OperationEntity;