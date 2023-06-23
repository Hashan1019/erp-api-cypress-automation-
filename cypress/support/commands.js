import CryptoJS from 'crypto-js';
import groupData from "../fixtures/groupData.json";


//log response body
Cypress.Commands.add('logResponseBody', (response) => {
  cy.task('allure:attach', JSON.stringify(response), { name: 'Decrypted Response', type: 'application/json' });
});

//log success response 
Cypress.Commands.add('successLogResponseDetails', (status, statusCode, data, message) => {
  cy.log('Success API');
  cy.log("Status Code:", status);
  cy.log("Status :", statusCode);
  cy.log("Data:", JSON.stringify(data));
  cy.log("Message:", message);
});

//log failed response 
Cypress.Commands.add('errorLogResponseDetails', (status, statusCode, data, message) => {
  cy.fail('Received an error! Here is the error details,' + ' Status = ' + '' + status + ',' + ' Status Code = ' + statusCode + ',' + ' Data = ' + data + ',' + ' Message = ' + message);
});


Cypress.Commands.add('displayDecryptedResponse', (response) => {
  cy.get('body').then(($body) => {
    const $responseContainer = Cypress.$('<pre>')
      .text(response)
      .css({
        padding: '10px',
        background: '#f0f0f0',
        border: '1px solid #ccc',
        'white-space': 'pre-wrap',
      });

    $body.append($responseContainer);
  });
  cy.log('Decrypted API Response:');
  cy.log(response);
});

//AES Encrypt function
Cypress.Commands.add('aesEncryption', (queryString) => {
  const key = 'rkv3ebsuGZM8a/x/bXAdmz++b1FIj97x0ui90orQdHM=';
  const iv = 'f/JWlbtLPA/ux7ypiZc3oQ==';

  const encrypted = CryptoJS.AES.encrypt(
    queryString,
    CryptoJS.enc.Base64.parse(key),
    { iv: CryptoJS.enc.Base64.parse(iv) }
  );
  console.log('encryptedToString', encrypted.toString())
  return encrypted.toString();
});


//AES Decrypt function
Cypress.Commands.add('aesDecryption', (cipherText) => {
  const key = 'rkv3ebsuGZM8a/x/bXAdmz++b1FIj97x0ui90orQdHM=';
  const iv = 'f/JWlbtLPA/ux7ypiZc3oQ==';

  return new Cypress.Promise((resolve, reject) => {
    let cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    let decrypted = CryptoJS.AES.decrypt(
      cipherParams,
      CryptoJS.enc.Base64.parse(key),
      {
        iv: CryptoJS.enc.Base64.parse(iv)
      }
    );
    resolve(decrypted.toString(CryptoJS.enc.Utf8));
  });
});


//AES Encrypt Descrypt get function
Cypress.Commands.add('commonEncryptyDecryptGet', (url) => {
  //onst serviceUrl = Cypress.env('mobileServiceUrl');

  cy.api("GET", url).then((response) => {
    expect(response.status).to.eq(200);
    cy.log(response.status);
    if (response.status === 200) {
      const decryptedResponse = cy.aesDecryption(response.body).then((decryptedResponse) => {
        cy.log('decrypted Response', decryptedResponse);
        const parsedResponse = JSON.parse(decryptedResponse);
        expect(parsedResponse.data).to.be.an('array');

        if (parsedResponse.statusCode == 'Success' && parsedResponse.data != null) {
          cy.logResponseBody(parsedResponse);
          cy.successLogResponseDetails(response.status, parsedResponse.statusCode, parsedResponse.data, parsedResponse.message)
         
        }
        else {
          cy.errorLogResponseDetails(parsedResponse.statusCode, response.status, parsedResponse.data, parsedResponse.message);
        }

      });
    } else {
      throw new Error('API request failed');
      cy.log(response.status);
    }
  });
});

//AES Encrypt Descrypt get by query string function
Cypress.Commands.add('commonEncryptyDecryptGetByQueryString', (url, queryString) => {
  //const serviceUrl = Cypress.env('serviceUrl'); // Replace with the actual service URL
  const header = {
    "Content-type": "application/json; charset=utf-8",
    'Access-Control-Allow-Methods': '*',
    'Accept-Language': 'en-US'
  };

  let originURL;

  if (queryString != null) {
    cy.aesEncryption(queryString).then(encryptedQueryString => {
      console.log('get encryptedQueryString', encryptedQueryString)
      originURL = url + "?" + encryptedQueryString;
      console.log('get originURL', originURL)

      return cy.api({
        method: 'GET',
        //url: 'http://20.198.233.3:5080/api/Group/GetGroupById?uGov7tnsX35Ul1WdEnlp==',
        url: originURL,
        headers: header
      }).then(response => {
        console.log('get response status', response.statusText)
        if (response.statusText === 'Token Time Exceed') {
          console.log('get Token', originURL)
          window.logout.logout();
        } else {
          if (response.status >= 200 && response.status < 300) {
            const decryptedResponse = cy.aesDecryption(response.body).then((decryptedResponse) => {
              const parsedResponse = JSON.parse(decryptedResponse);
              cy.log('get Encrypted URL', originURL)
              if (parsedResponse.statusCode == 'Success' && parsedResponse.data != null) {
                cy.logResponseBody(parsedResponse);
                cy.successLogResponseDetails(response.status, parsedResponse.statusCode, parsedResponse.data, parsedResponse.message)
               
              }
              else {
                cy.errorLogResponseDetails(parsedResponse.statusCode, response.status, parsedResponse.data, parsedResponse.message);
              }
            });
          } else {
            return response.statusText;
          }
        }
      });
    });
  } else {
    originURL = url;
  }
});



//AES Encrypt Descrypt post function
Cypress.Commands.add('commonEncryptyDecryptPost', (url, requestBody) => {
  //const serviceUrl = Cypress.env('serviceUrl');
  cy.aesEncryption(JSON.stringify(requestBody)).then(encryptedResult => {
    cy.log('post encryptedResult', encryptedResult)
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        'Access-Control-Allow-Methods': '*',
        'Accept-Language': 'en-US'
      }
    };

    let originURL;
    originURL = url;
    return cy.api({
      method: 'POST',
      url: originURL,
      body: encryptedResult,
      headers: options.headers
    }).then(response => {
      console.log('post responsestatus', response.statusText)
      if (response.statusText === 'Token Time Exceed') {
        window.logout.logout();
      } else {
        if (response.status >= 200 && response.status < 300) {
          const decryptedResponse = cy.aesDecryption(response.body).then((decryptedResponse) => {
            const parsedResponse = JSON.parse(decryptedResponse);

            if (parsedResponse.statusCode == 'Success') {
              cy.logResponseBody(parsedResponse);
              cy.successLogResponseDetails(response.status, parsedResponse.statusCode, parsedResponse.data, parsedResponse.message)
             
            }
            else {
              cy.errorLogResponseDetails(parsedResponse.statusCode, response.status, parsedResponse.data, parsedResponse.message);
            }
          })
        } else {
          cy.errorLogResponseDetails(parsedResponse.statusCode, response.status, parsedResponse.message);
          return response.statusText;

        }
      }
    });
  })
});


//AES Encrypt Descrypt post by query string function
Cypress.Commands.add('commonEncryptyDecryptPostByQueryString', (url, queryString) => {
 // const serviceUrl = Cypress.env('serviceUrl'); // Replace with the actual service URL
  const header = {
    "Content-type": "application/json; charset=utf-8",
    'Access-Control-Allow-Methods': '*',
    'Accept-Language': 'en-US'
  };

  let originURL;

  if (queryString != null) {
    cy.aesEncryption(queryString).then(encryptedQueryString => {
      console.log('get encryptedQueryString', encryptedQueryString)
      originURL = url + "?" + encryptedQueryString;
      console.log('get originURL', originURL)

      return cy.api({
        method: 'GET',
        //url: 'http://20.198.233.3:5080/api/Group/GetGroupById?uGov7tnsX35Ul1WdEnlp==',
        url: originURL,
        headers: header
      }).then(response => {
        console.log('get response status', response.statusText)
        if (response.statusText === 'Token Time Exceed') {
          console.log('get Token', originURL)
          window.logout.logout();
        } else {
          if (response.status >= 200 && response.status < 300) {
            const decryptedResponse = cy.aesDecryption(response.body).then((decryptedResponse) => {
              const parsedResponse = JSON.parse(decryptedResponse);
              cy.log('get Encrypted URL', originURL)
              if (parsedResponse.statusCode == 'Success') {
                cy.logResponseBody(parsedResponse);
                cy.successLogResponseDetails(response.status, parsedResponse.statusCode, parsedResponse.data, parsedResponse.message)
               
              }
              else {
                cy.errorLogResponseDetails(parsedResponse.statusCode, response.status, parsedResponse.data, parsedResponse.message);
              }
            });
          } else {
            return response.statusText;
          }
        }
      });
    });
  } else {
    originURL = url;
  }
});
