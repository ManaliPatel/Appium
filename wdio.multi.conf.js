exports.config = {
    specs: ['./test/specs/**/*.js'],
    suites: {
      createportfolio: ['./test/specs/group_ticket_spec.js',
                        './test/specs/edit_ticket_spec.js',
                        './test/specs/create_ticket_spec.js',
                        './test/specs/create_checklist_spec.js',
                        './test/specs/create_building_spec.js',
                        './test/specs/create_new_portfolio_spec.js'],
      otherfeatures: ['./test/specs/create_ticket_spec.js']
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 2,
    capabilities: {
        iOS: {
            port: 4723,
            desiredCapabilities: {
                platformName: 'iOS',
                platformVersion: '11.2',
                deviceName: 'iPhone 7',
                app: 'Autodesk.minimo'
            }
        },
        browserB: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    sync: true,
    waitforTimeout: 10000,
    reporters: ['spec', 'json'],
    reporterOptions: {
      outputDir: './results'
    },
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    //baseUrl: 'https://staging.autodeskbuildingops.com',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 999999999
    }
}

    // capabilities: [{
    //  browserA: {
    //      desiredCapabilities: {
    //         platformName: 'iOS',
    //         platformVersion: '11.2',
    //         deviceName: 'iPhone 7',
    //         app: 'Autodesk.minimo'
    //      }
    //   }
    //  browserB: {
    //     desiredCapabilities: {
    //        browserName: 'chrome'
    //    }
    //  }
    // }],
    // capabilities: {
    //     browserA: {
    //             platformName: 'iOS',
    //             platformVersion: '11.2',
    //             deviceName: 'iPhone 7',
    //             app: 'Autodesk.minimo',
    //             port: 4723
    //     },
    //     browserB: {
    //             browserName: 'chrome',
    //             port: 4444
    //     }
    // },