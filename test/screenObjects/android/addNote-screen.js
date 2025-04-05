class AddNoteScreen{
    get skipBtn(){
        return $("//*[@text='SKIP']");
     }
     get addNoteTxt(){
        return $("//*[@text='Add note']");
     }
     get addBtn(){
        return  $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/main_btn1']");
     }
     get textOption(){
        return $("//*[@text='Text']");
     }
     get textEditingField(){
        return $("//*[@text='Editing']");
     }
     get addTitle(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']")
     }
     get addNote(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']")
     }
     async saveNote(){
        await driver.back();
        await driver.back();
     }
     get editBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']")
     }
     get viewNote(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']")
     }
    }
    //module.exports=new AddNoteScreen();//for ES5
     export default new AddNoteScreen();//for ES6