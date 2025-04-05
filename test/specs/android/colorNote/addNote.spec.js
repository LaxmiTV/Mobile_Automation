import addNoteScreen from "../../../screenObjects/android/addNote-screen";
describe('color note',async()=>{
    it('Add note',async()=>{
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
        await addNoteScreen.addBtn.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditingField).toBeDisplayed();
        //we can use setVAlue() also,can be used when we need to clear first and enter values
        await addNoteScreen.addTitle.addValue("List");
        await addNoteScreen.addNote.addValue("Task1\nTask2\nTask3");
        await addNoteScreen.saveNote();
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("Task1\nTask2\nTask3")
    })
   
})
