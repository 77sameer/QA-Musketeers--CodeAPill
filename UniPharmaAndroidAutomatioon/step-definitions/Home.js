const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber');

const homeScreen = require('../pageobjects/nativeAppScreen/HomeScreen');
const Page = require('../pageobjects/page');

Given(/^User launch the app$/, async () => {
    
  await Page.launchApp()

 });

Then(/^Donor enter \"([^\"]*)\" new email$/, async (email) => {
  await accountSettingScreen.enterNewEmail(email);
});

Then(/^Donor enter confirmation \"([^\"]*)\" as new email$/, async (email) => {
  await accountSettingScreen.enterConfirmNewEmail(email);
});

When(/^User search for \"([^\"]*)\" medicine$/, async (medicine) => {
  await homeScreen.searchMedicine(medicine);
});
Then(/^User add most bought item$/, async () => {
  await homeScreen.selectMostBought();
});

Then(/^Medicine displayed in Selected Medicine Section$/, async () => {
  await homeScreen.validateMedicineSelected();
});

When(/^User click start looking for them button$/, async () => {
  await homeScreen.clickOnSearch();
});

When(/^User click on remmove button$/, async () => {
  await homeScreen.clickRemoveButton();
});

Then(/^Medicine removed from Selected Medicine Section$/, async () => {
  await homeScreen.validateMedicineRemoved();
});