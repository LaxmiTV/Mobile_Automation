import addNoteScreen from "../../../screenObjects/android/addNote-screen";
import webViewNav from "../../../screenObjects/android/web-view";

describe("web view test case", ()=>
{
    it('Open FB from colour note', async () =>
    {
          await addNoteScreen.skipBtn.click();

          await  webViewNav.navIcon.click();

          await webViewNav.fbLink.click();
        /* 
            this will fail because we are in native app context , 
            so we have to switch to web context before doing any operation

            await expect(webViewNav.coverPhoto).toBeExisting();
        */

        //get current context

        console.log(await driver.getContext()); //native app
        //get all the contexts
        console.log(await driver.getContexts()); //[ 'NATIVE_APP', 'WEBVIEW_chrome' ]
        //switch to webview chrome context

        await driver.switchContext('WEBVIEW_chrome');
          
        await expect(webViewNav.coverPhoto).toBeExisting();
        
        // switch back to native app context again means switch back to application again
        await driver.switchContext('NATIVE_APP'); // this will just switch the context we need to go back , so use back()

        await driver.back();

         
    })
})