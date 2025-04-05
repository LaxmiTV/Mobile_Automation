import dotenv from 'dotenv';
dotenv.config();

import path from 'path'
import {config} from './wdio.shared.conf.js'

//==========
//browserstack creds
//==============

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.specs = [

    path.join(process.cwd(),'./test/specs/**/colorNote/addNote.spec.js')
    ];

 // ============
    // Capabilities
 // ============

config.capabilities = [
    {
            'platformName':'Android',
            'appium:platformVersion':'13.0',
            'appium:deviceName':'Samsung Galaxy S23 Ultra',
            'appium:automationName':'UIAutomator2',
            'appium:app':'bs://6449cf4a282ec4ad21edd5350325585ca82ae97b',
            'appium:autoGrantPermissions':'true'
    }
]

 // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];
export {config} ;
