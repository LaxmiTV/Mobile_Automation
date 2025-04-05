import path from 'path'
import {config} from './wdio.shared.conf.js'

    // ====================
    // Runner Configuration
    // ====================

config.port = 4723;

 
    // ==================
    // Specify Test Files
    // ==================

config.specs = [

    // path.join(process.cwd(),'./test/specs/**/android-findElements.spec.js')
     path.join(process.cwd(),'./test/specs/android/saucelab.spec.js')
    ];

 // ============
    // Capabilities
 // ============

config.capabilities = [
    {
            'appium:platformName':'Android',
            'appium:platformVersion':'16.0',
            'appium:deviceName':'emulator-5554',
          //  'appium:deviceName':'emulator-5556',
            'appium:automationName':'UIAutomator2',
            //'appium:app':path.join(process.cwd(),'app/android/ajio.apk'),
            //'appium:app':path.join(process.cwd(),'app/android/ApiDemos-debug.apk'),
          // 'appium:app':path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'),
         'appium:app':path.join(process.cwd(),'app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'),
          
           'appium:autoGrantPermissions':true,
            //for saucelab
            "appium:appWaitActivity": "*",   
    
    }
]
config.services = ['appium'];

export {config} ;
