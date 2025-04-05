describe('Android Elemnts Test Cases', ()=>
 {
    xit('Finding Elements by accessibility', async ()=>
    {
        //Finding Elements by  accesibility ID
        const optionApp = await $('~App');

        //Click Element
        await optionApp.click();

        //Assertion
       const actionBar = await $('~Action Bar');
       await expect(actionBar).toBeExisting();

    //    await driver.pause(7000);
        
    })

    xit('Find Elements by class', async ()=>
    {
        const className = await $('android.widget.TextView');
        
        console.log("****"+await className.getText());

       await expect(className).toHaveText('API Demos');
    })

    xit('Find Elements by Xpath', async () =>
    {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        
        // xpath with resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //xpath with text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by Text
        const textAssertion = await $('//android.widget.TextView'); //since it is class selector // are optional
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    }) 

    xit('Find element by UIAutomator', async () => {
        // Define the UI Automator selector
        const selector = 'new UiSelector().textContains("Animation").className("android.widget.TextView")';
        await $(`android=${selector}`).click(); //or Note: return type muct be a android
       // await $('android=new UiSelector().textContains("Animation").className("android.widget.TextView")').click(); //above two lines you can write like this also

    });

    xit('Find multiple elements', async ()=>
    {
        const expectedList = ['API Demos',
            "Access'ibility"
            ,'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text']
        const actualList = [];
        
        const textList = await $$('android.widget.TextView');
        for(const text of textList)
        {
            actualList.push(await text.getText());
        }
       
        await expect(expectedList).toEqual(actualList);
    })

    it.only('End to End view' ,async ()=>
    {
        
        //click on views
        await $('//android.widget.TextView[@resource-id="android:id/text1" and @content-desc="Views"]').click();
        
        //click on Auto complete
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();

        //click on screen top
        await $('~1. Screen Top').click();

        //enter the input
        await $('android.widget.AutoCompleteTextView').setValue("India");

        //click on give me focus button
        await $('//android.widget.Button[@content-desc="Give me Focus"]').click();

        await driver.pause(3000);
    })
    
});