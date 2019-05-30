var webdriverio = require('webdriverio');

var client = webdriverio.remote({
    port: 4723,
    logLevel: 'verbose',
    desiredCapabilities: {
        platformName: 'iOS',
        platformVersion: '11.2',
        deviceName: 'iPhone 7',
        app: 'Autodesk.minimo',
        browserName: 'safari'
    }
});

client
    .init()
    .pause(2000)
    .element("~GET STARTED").click()
    .pause(5000)
    .element("//XCUIElementTypeTextField[@value=\"Work email\"]").setValue("leopold@bim360ops.com")
    //.element("//XCUIElementTypeApplication[@name=\"BIM 360 Ops\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField").setValue("leopold@bim360ops.com")
    //.setValue('leopold@bim360ops.com'),
    .pause(5000)
    .element("//XCUIElementTypeButton[@name=\"Next\"]").click()
//    .element("Next").click()
    .pause(5000)
    .element("//XCUIElementTypeApplication[@name=\"BIM 360 Ops\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField/XCUIElementTypeTextField").setValue("111111")
 //   .element("//XCUIElementTypeButton[@value=\"CODE\"]").setValue("111111")
    .pause(10000)
    .element("~Allow")
    .click()
    .pause(5000)
    .end().catch(function (e) {
        console.error(e.stack);
        return client.end();
    });