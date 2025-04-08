// import { join } from 'path';
// import { remote } from 'webdriverio';
import addNoteScreen from "../../../screenObjects/android/addNote-screen";
import webViewNav from "../../../screenObjects/android/web-view";
import mockingImp from "../../../screenObjects/android/mockingSO";
//const browserMob = require('browsermob-proxy-client').Proxy;



import browserMob from 'browsermob-proxy-client';
// Ensure that Proxy is used correctly, based on how the library exports it
const Proxy = browserMob.Proxy; // Check if Proxy is accessible
proxy = new Proxy({ host: 'localhost', port: 9090 }); 

//let driver; // Make sure the driver is initialized

describe("Mocking Test Case", () => {

    // it.beforeAll(async () => {
    //     // Start the Proxy
        
    //     const proxyData = await proxy.start();
    //     const proxyPort = proxyData.port;
    //     await proxy.startHar(proxyPort, {
    //       captureHeaders: true,
    //       captureContent: true,
    //       captureCookies: true
    //     });
    //   });
    
      // it.afterAll(async () => {
      //   // Cleanup after tests
      //   await driver.deleteSession();
      //   await proxy.stop(); // Ensure the proxy is stopped after tests
      // });

  it('Open FB from color note and capture network traffic', async () => {
    // Interact with the app and perform your steps
    console.log("Hii... Sowmya");
    const proxyData = await proxy.start();
    const proxyPort = proxyData.port;
    await proxy.startHar(proxyPort, {
      captureHeaders: true,
      captureContent: true,
      captureCookies: true
    });
    await addNoteScreen.skipBtn.click();
    await webViewNav.navIcon.click();
    await mockingImp.settingsLink.click();

    // Wait for the network requests to complete
    await driver.pause(5000); // or use waitUntil for specific elements if needed

    // Step 5: Get and print HAR (network) data
    const har = await proxy.getHar();
    console.log("Hii... Mani" +JSON.stringify(har.log.entries, null, 2));


    await driver.deleteSession();
    await proxy.stop();
  });
});
