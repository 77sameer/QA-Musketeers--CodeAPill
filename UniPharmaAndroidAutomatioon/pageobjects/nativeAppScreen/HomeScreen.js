const Page = require('../page');
var log = require('loglevel');

class HomeScreen {

    /**
     * define elements
     */

    get searchTextBox() {
        return $('//android.widget.EditText')
    }
    get mainpage() {
        return $('/hierarchy/android.widget.FrameLayout')
    }
    get addButton() {
        return $('//android.view.View[@text="Add"]')
    }
    get selectMedicin() {
        return $('//android.view.View[4]/android.view.View[1]')
    }
    get startLookingButton() {
        return $('//android.view.View[5]/android.widget.Button')
    }
    get removeButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View[4]')
    }

    /**
     * Method to search medince in home page
     * 
     */

    async searchMedicine(medicne) {

        await (await this.searchTextBox).click()
        await (await this.searchTextBox).setValue(medicne)
        await (await this.mainpage).touchAction({
            action: 'tap',
            x: 1091,
            y: 362
        })
        //Page.back()
    }

    /**
     * Select medicine from most bought list
     * 
     */
    async selectMostBought() {

        await (await this.addButton).click()
    }

    /**
     * Method to verify medicine listed in Medicine Selected section
     * 
     */
    async validateMedicineSelected() {
        expect(await this.selectMedicin).toBeDisplayed()
        console.log("Medicine name is " + await this.selectMedicin.getText());
    }

    /**
     * Clicking This method navigtes user to pharmacy shop  page
     * 
     */
    async clickOnSearch() {
        await (await this.startLookingButton).click()
    }

    /**
     * Method to remove medicine from the selected list
     * 
     */
    async clickRemoveButton() {
        await (await this.removeButton).click()
    }

    async validateMedicineRemoved() {
        expect(await this.selectMedicin).not.toBeDisplayed()
        console.log("Medicine name is removed");
    }




    open() {
        return super.open('');
    }
}


module.exports = new HomeScreen();