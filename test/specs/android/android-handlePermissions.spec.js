describe('Handling permissions Test', () =>
{
    it.only('Adding a note', async () =>
    {
        //added  'appium:autoGrantPermissions':true in capablities
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
       
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();

        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Text"]').click();

        
        await driver.pause(3000);
    })
})