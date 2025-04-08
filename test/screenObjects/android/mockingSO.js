class MockiingImplementation
{
    get settingsLink()
    {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Settings"]');
    }
}
export default new MockiingImplementation();