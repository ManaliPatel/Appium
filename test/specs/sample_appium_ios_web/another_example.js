"use strict"

// to run ./node_modules/.bin/wdio wdio.conf.js --suite createportfolio

var expect = require('chai').expect;
var assert = require('assert');

describe('user logs in', function () {
  it('creates new portfolio', function () {
      $("~GET STARTED").click()
      browser.pause(5000)
      //browser.debug()
      $("//XCUIElementTypeTextField[@value=\"Work email\"]").setValue("leopold@bim360ops.com")
      $("//XCUIElementTypeButton[@name=\"Next\"]").click()
      browser.pause(2000)
      $("//XCUIElementTypeTextField[@value=\"CODE\"]").setValue("111111")
      browser.pause(3000)
      browser.alertDismiss()
    });
});