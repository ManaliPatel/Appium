"use strict"
var expect = require('chai').expect;
var assert = require('assert');
var mod = require('../config/modules.js')

describe('user logs', function () {
  it('loads existing portfolio', function () {
    mod.iOSDashboardPage.swipe_down()
    var tile = `~all contacts`
    iOS.element(tile).click()
    iOS.element('~Add').click()
    iOS.element('~Create a New Contact').click();

    var ele = iOS.element("//XCUIElementTypeTextField[@value=\"Email (required)\"]")
    ele.waitForVisible(10000)
    ele.setValue("newuser1@bim360ops.com")
    iOS.element('~Done').click()

    var lastUpdated = iOS.element("~Last Updated Now");
    var waitLastUpdated = lastUpdated.waitForVisible(10000)

    if (waitLastUpdated)
      assert(true)
    else
      assert(false)

    iOS.element("~Search").waitForVisible(10000)
    iOS.element("~Search").setValue("newuser")

    var user = `~newuser1@bim360ops.com`;
    var element = iOS.element(user).waitForVisible(10000)

    if (element)
      assert(true)
    else
      assert(false)
    });
});
