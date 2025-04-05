describe('Android Native feature Test', () =>
{
    //jump to any perticular screen directly
    //following test case skips app>alertDialog directly jump to alert dialog
    it('Accessing activity directly', async ()=>
    {
        //io.appium.android.apis --> current package
        // .app.AlertDialogSamples --> current activity
        // you need to erite currentpackage.currentActivity ie io.appium.android.apis.app.AlertDialogSamples
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples');
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working on alerts', async () =>
    {
        //access the activity to jump to that screen
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples');

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        console.log("Alert Text ---->"+ await driver.getAlertText());
        //accept the alert
        // await driver.acceptAlert();

        //dismiss the alert
        //await driver.dismissAlert();

        // click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        // Assertion 
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })


    //Shilpa unable to click
    it('Vertical scrolling', async () =>
    {
        await $('~App').click();
        await $('~Activity').click();

        //this may not be stable if element gets moved
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
       await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();

     
    })

    it('Horizontal Scrolling', async () =>
    {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

       // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(5,1)');
                //or
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       //backward
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

    })

    it.only('Scrolling Exercise', async ()=>
    {
        //Views/Date Widgets/1. Dialog
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.DateWidgets1');

        console.log("Current Date-->"+ await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText());

        const dateBeforeSelecting= await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        //click on change date
        await $('~change the date').click();

        //scroll horizontally to right
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //Select 10th fromn that calendar
        await $('//android.view.View[@text="10"]').click();

        //click on Ok 
        await $('//*[@resource-id="android:id/button1"]').click();

        const dateAfterSelecting = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        await expect(dateBeforeSelecting).not.toEqual(dateAfterSelecting);

        await driver.pause(3000);
    })

})