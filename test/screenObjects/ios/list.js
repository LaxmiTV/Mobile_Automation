class ListScreen
{
    get createListBtn()
    {
        return $('//*[@name="Create list"]');
    }
    get listNameInput()
    {
       return $('~Tap the button to create your first list');
    }
    get createBtn()
    {
        return $('~Create');
    }

    listFieldName(name)
    {
        return $(`~${name}`);
    }
}

//module.exports = new ListScreen(); //ES5 it is not working
export default new ListScreen(); //ES6