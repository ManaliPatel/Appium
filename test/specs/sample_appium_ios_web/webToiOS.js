"use strict"

var expect = require('chai').expect;
var assert = require('assert');

describe('user logs in', function () {
  it('creates new portfolio', function () {
      iOS.element("~GET STARTED").click()
      iOS.pause(5000)
      iOS.element("//XCUIElementTypeTextField[@value=\"Work email\"]").setValue("leopold@bim360ops.com")
      iOS.element("//XCUIElementTypeButton[@name=\"Done\"]").click()
      iOS.pause(2000)
      iOS.element("//XCUIElementTypeTextField[@value=\"CODE\"]").setValue("111111")
      iOS.pause(3000)
      iOS.alertDismiss()
      browserB.url("http://google.com")
      browserB.setValue('input[title="Search"]',"hello Manali")
      browserB.keys("Enter")
      browserB.pause(4000)
    });
});



// iOS.element("//XCUIElementTypeStaticText[@value=\"all open\"]").click()