const { Given, When, Then } = require('@cucumber/cucumber');

const shopPage = require('../pageobjects/nativeAppScreen/ShopPage');
const homeScreen = require('../pageobjects/nativeAppScreen/HomeScreen');
const Page = require('../pageobjects/page');




  Then(/^User navigate to shop results page$/, async ()  => {
    await shopPage.verifyShopResultPageTitle();
  });

  Then(/^Pharmacy name, distance and rating is displayed$/, async ()  => {
    await shopPage.verifyPharmaDetails();
  });

  Then(/^Order button is displayed$/, async ()  => {
    await shopPage.verifyOrderButton();
  });


 Then(/^Donor click on Back button$/, async () => {
   await profileScreen.backButton()
   
  });

  