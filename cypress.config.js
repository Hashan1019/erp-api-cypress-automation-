const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
//const registerCustomPanelCommand = require('./cypress/plugins/custom-panel');


module.exports = defineConfig({

  env: {
    //mobileServiceUrl: 'http://20.198.233.3:5080/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'allure:attach': (attachment) => {
          return Promise.resolve(null);
        },
      });
     // registerCustomPanelCommand();
      allureWriter(on, config);
      return config;

    },
  },
});
