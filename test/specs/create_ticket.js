"use strict"

var assert = require('assert');
var mod = require('../config/modules.js')

describe('new ticket', function () {
  before(function () {
    //mod.iOSLoginPage.alert()
    // mod.iOSLoginPage.get_started()
    // mod.iOSLoginPage.enter_email("dorian@bim360ops.com")
    // mod.iOSLoginPage.enter_auth()
    // iOS.pause(5000)
    // mod.iOSLoginPage.alert()
    // mod.iOSLoginPage.timeout_alert()

    // var tile = `~all open`;
    // iOS.element(tile).waitForVisible(10000)

    browserB.url('https://wen.bim360ops.com');
    browserB.pause(2000);
    browserB.setValue('.email-input', 'leopold@bim360ops.com');
    browserB.click('.login-button ');
    browserB.pause(3000);
    browserB.setValue('.login-box__input', '111111');
    browserB.waitForVisible('.login-button',10000);
    browserB.click('.login-button ');
    browserB.waitForVisible('.dashboard__panel--settings',10000);

    browserB.url("https://demo.wen.bim360ops.com/buildings?building_id=70564b65-009e-4c8d-8bdc-7a2f2352ddd9");
    browserB.pause(5000)
  });

  it('create ticket', function () {
    browserB.click('.current-slide .dashboard__panel--add-ticket');
    browserB.waitForVisible('.new-item',5000);
    browserB.waitForVisible('textarea[placeholder="Add description (required)"]', 3000);
    browserB.setValue('textarea[placeholder="Add description (required)"]', 'manali test');
    browserB.setValue('input[placeholder="Add"]', 'dorian@bim360ops.com');
    browserB.keys("Enter");
    browserB.pause(2000);
    browserB.click('.action-button .action-button--submit');
    iOS.debug()
    browserB.pause(50000);

    });
});
