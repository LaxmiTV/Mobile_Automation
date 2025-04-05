//const ListScreen = require("../../screenObjects/ios/list.js") //ES5 not working
import ListScreen from "../../screenObjects/ios/list"
describe('To do List Test cases', ()=>
{
    it('Create todo list', async ()=>
    {
       await ListScreen.createListBtn.click();

        await ListScreen.listNameInput.setValue("Today's List");

        await ListScreen.createBtn.click();

        await expect(ListScreen.listFieldName("Today's List")).toBeExisting();
        await driver.pause(5000);
    })
})