const ActionHelper = require('./../utility/actionHelpers');
class Page {
  
     async open (path) {
       
        return browser.url('https://bxltqa.biolifeplasma.com/');
    }
    async maximize()  {
      await browser.maximizeWindow();
  }

    pause(){
      ActionHelper.pause(15);
    }
swtichTONative()
{
  ActionHelper.switchToNativeContext();
}
    launchApp() {
      ActionHelper.launchApp();
      ActionHelper.switchToNativeContext();
      ActionHelper.pause(2);

  }
    hideKeyboard() {
      ActionHelper.hideKeyboard();
    }

    tap(element) {
      ActionHelper.tap(element);
    }

    back(){
      ActionHelper.back();
    }
    xpathForTextValue (textToReplace) {
      return $('//*[contains(text(), "'+textToReplace+'")]');
      // return $(`'td=${textToReplace}'`)
   }
}
module.exports = new Page();