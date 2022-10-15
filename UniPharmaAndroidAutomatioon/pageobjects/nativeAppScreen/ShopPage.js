const Page = require('../page');
var log = require('loglevel');


class ShopPage {

    /**
     * define elements
     */
    get shopPage() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]')
    }
    get orderButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]')
    }
    get pharmaName() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]')
    }
    get pharmaRating() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[4]')
    }
    get distance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]')
    }

    /**
     * Method to verify page title of pharmacy shop listing page
     * 
     */
    async verifyShopResultPageTitle() {
        expect(await this.shopPage).toBeDisplayed();
        console.log("Page title is" + await this.shopPage.getText())

    }

    /**
     * Method to verify pharmacy details such as name, distance and rating
     * 
     */
    async verifyPharmaDetails() {
        expect(await this.pharmaName).toBeDisplayed();
        expect(await this.distance).toBeDisplayed();
        expect(await this.pharmaRating).toBeDisplayed();
        console.log("Name" + await this.pharmaName.getText())
        console.log("Distance" + await this.distance.getText())
        console.log("Rating" + await this.pharmaRating.getText())

    }

    /**
     * Method to verify order button
     * 
     */
    async verifyOrderButton() {
        expect(await this.orderButton).toBeDisplayed();
        console.log("Order button text is" + await this.orderButton.getText())

    }


    async backButton() {

        Page.back();

    }
}

module.exports = new ShopPage();