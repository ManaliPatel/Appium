"use strict"
var expect = require('chai').expect;
var assert = require('assert');
var mod = require('../config/modules.js')

describe('user logs', function () {
  it('loads existing portfolio', function () {
    browserB.url("http://google.com")
    mod.iOSLoginPage.alert()
    //mod.iOSLoginPage.alert()
    mod.iOSLoginPage.get_started()
    mod.iOSLoginPage.enter_email("dorian@bim360ops.com")
    mod.iOSLoginPage.enter_auth()
    mod.iOSLoginPage.timeout_alert()

    var tile = `~all open`;
    var element = iOS.element(tile).waitForVisible(10000)

    if (element)
      assert(true)
    else
      assert(false)

    });
});
