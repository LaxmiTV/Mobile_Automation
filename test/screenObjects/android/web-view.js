class webView
{
    get navIcon()
    {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get fbLink()
    {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Like us on Facebook"]');
    }

    get coverPhoto()
    {
        return $("//img[@alt='No photo description available.']");
    }

   
}

export default new webView();