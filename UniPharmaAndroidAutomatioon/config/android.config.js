const {config} = require('../wdio.conf');

// Appium capabilities
config.capabilities = [
    {
    
          platformName: "Android",
          noReset: false,
          fullReset: true,
          maxInstances: 1,
          platformVersion: "11",
          deviceName: "emulator-5554",
          app: "/Users/sameersingh/Desktop/JumpStart/CodeAPill.apk",
          appPackage: "com.deloitte.hackathon.codeapill",
          automationName: "UiAutomator2"}

          
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
