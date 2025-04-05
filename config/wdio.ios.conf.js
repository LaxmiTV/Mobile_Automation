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
        path.join(process.cwd(),'./test/specs/ios/ios-todoList.spec.js')
    ];

 // ============
    // Capabilities
 // ============

config.capabilities = [
    {
        'appium:platformName':'ios',
        'appium:platformVersion':'18.3',
        'appium:deviceName':'iPhone 16 Pro',
        'appium:automationName':'XCUITest',
        // 'appium:app':path.join(process.cwd(),'./app/ios/UIKitCatalog.app'),
        'appium:app':path.join(process.cwd(),'./app/ios/MVCTodo.app'),   
    }
]

export { config };