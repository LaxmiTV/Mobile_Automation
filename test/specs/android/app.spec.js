async function detectAppType(driver) {
    
    const contexts = await driver.getContexts(); // Get available contexts
    console.log('Available contexts:', contexts);
    if (contexts.length > 1 && contexts.find(ctx => ctx.includes('WEBVIEW'))) {
        console.log('This is likely a HYBRID app. sowmya ');
    } else {
        console.log('This is likely a NATIVE app. sowmya ');
    }
}
// Call the function somewhere after driver is initialized
detectAppType(driver);