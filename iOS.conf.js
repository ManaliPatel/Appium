exports.config = {

    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
      login_contact: [  './test/specs/login_dashboard.js',
                        './test/specs/create_contact.js'
                     ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,
    capabilities:{
      iOS: {
          port: 4723,
          desiredCapabilities: {
          platformName: 'iOS',
          platformVersion: '12.1',
          deviceName: 'iPhone 7',
          //app: '/Users/patelman/Desktop/minimoapp/Apps/Minimo\ release-12522150-47DE-4DC0-8F82-BD1572FA4535.ipa'
          //browserName: 'safari'
          app: '/Users/patelman/Library/Developer/Xcode/DerivedData/Minimo-fgszgpasogiwslhfpnodtunumipq/Build/Products/Debug-iphonesimulator/minimo_sim.app'
        }
      }
    },

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,

    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 100000000000,
    connectionRetryTimeout: 99999999999,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 999999999
    },
}
