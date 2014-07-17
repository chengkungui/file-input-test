// An example configuration file.
exports.config = {

//  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/*.js'],

  baseUrl: 'http://localhost:3000',


  onPrepare: function(){
      browser.driver.manage().window().setSize(1920, 1080);
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
