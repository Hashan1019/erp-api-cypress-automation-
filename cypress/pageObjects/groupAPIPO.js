
import groupData from "../fixtures/groupData.json";


class GroupPage {

  getAllGroupAPI() {
    cy.commonEncryptyDecryptGet(groupData.getAllGroupsUrl)
  }

  getAllActiveGroupAPI() {
    cy.commonEncryptyDecryptGet(groupData.getAllActiveGroupUrl)
  }

  getGroupByIdAPI() {
    cy.commonEncryptyDecryptGetByQueryString(groupData.getGroupByIdUrl, groupData.queryStringGroupID);
  }

  saveGroupAPI() {
    cy.commonEncryptyDecryptPost(groupData.postSaveGroupUrl, {
      //groupID: 0,
      groupCode: groupData.groupCode,
      groupName: groupData.groupName,
      isActive: groupData.isActive,
      createdBy: groupData.createdBy,
      createdDate: groupData.createdDate,
      modifiedBy: groupData.modifiedBy,
      modifiedDate: groupData.modifiedDate,
    }).then(response => {
      console.log('response', response);
    });
  }


}
export default GroupPage;