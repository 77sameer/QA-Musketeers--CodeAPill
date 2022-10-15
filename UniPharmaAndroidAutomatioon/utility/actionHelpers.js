class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {

        browser.url(urlToLaunch)
    }

    static launchApp() {
        driver.launchApp();
        console.log("Application Launced");
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }
    static hideKeyboard() {
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
    }
    static tap(element) {
        const actions = driver.actions({
            async: true
        });
        // Performs mouse move action onto the element
        actions({
            bridge: true
        }).move({
            origin: element
        }).perform();
    }
    static back() {
        driver.back();
    }

    static maximize() {
        browser.maximizeWindow()

    }


}

module.exports = ActionHelper;