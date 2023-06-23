
import groupData from "../fixtures/groupData.json";


class GroupPage {

// web api
  getAllGroupWebAPI() {
    cy.commonEncryptyDecryptGet(groupData.getAllGroupsWebUrl)
  }

  getGroupDetailsByIDWebAPI() {
    cy.commonEncryptyDecryptGetByQueryString(groupData.getGroupDetailsByIdWebUrl, groupData.queryStringGroupID);
  }

  saveGroupWebAPI() {
    cy.commonEncryptyDecryptPost(groupData.postSaveGroupWebUrl, {
      groupID: 0,
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

// mobile api
getAllGroupMobAPI() {
  cy.commonEncryptyDecryptGet(groupData.getAllGroupsMobileUrl)
}

getAllActiveGroupMobAPI() {
  cy.commonEncryptyDecryptGet(groupData.getAllActiveGroupMobileUrl)
}

getGroupByIDMobAPI() {
  cy.commonEncryptyDecryptGetByQueryString(groupData.getGroupByIdMobileUrl, groupData.queryStringGroupID);
}

saveGroupMobAPI() {
  cy.commonEncryptyDecryptPost(groupData.postSaveGroupMobileUrl, {
    groupID: 0,
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