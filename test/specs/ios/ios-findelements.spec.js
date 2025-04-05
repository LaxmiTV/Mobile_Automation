describe('iOS Finding Element Tests', () => {

    it('finding elements',async () => {
        await $('~Alert Views').click();

        await $('~Simple').click();

        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('Find element by predicate string', async ()=>
    {
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })
    it('Find element by predicate string', async ()=>
    {
        const alertText = 'name == "Alert Views"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('Scroll Test', async ()=>
    {
        //simple
       // await driver.execute('mobile: scroll', {direction : "down"})

       //complex
       await $('~Picker View').click();
       const redPicker = await $('~Red color component value');
       const bluePicker = await $('~Blue color component value');

       await driver.execute('mobile:scroll', {element:redPicker.elementId, direction : "down"});
       await driver.execute('mobile:scroll', {element:bluePicker.elementId, direction : "up"})

    })

    it.only('Scroll Test', async ()=>
        {
            //simple
           // await driver.execute('mobile: scroll', {direction : "down"})
    
           //complex
           await $('~Picker View').click();
           const redPicker = await $('~Red color component value');
           const greenPicker = await $('~Green color component value');
           const bluePicker = await $('~Blue color component value');
    

           //puple value 125,0,125
           await redPicker.addValue(125);
           await greenPicker.addValue(0);
           await bluePicker.addValue(125);

           await driver.pause(3000);

    
        })
     
});
