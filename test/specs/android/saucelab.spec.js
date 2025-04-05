describe("SauceLab Test", ()=>
{
    it("Test case 1", async ()=>
    {
        await $('~test-Username').addValue("standard_user");
        await $('~test-Password').addValue("secret_sauce");
        await $('~test-LOGIN').click();
        driver.pause(3000);
    })
})

