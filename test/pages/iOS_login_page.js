
class LoginPageiOS {

  alert() {
    iOS.alertAccept()
    iOS.pause(5000)
  }

  get_started() {
    iOS.element("~GET STARTED").click()
    iOS.pause(5000)
  }

  enter_email(email) {
    var textInput = `~Work email`;
    iOS
      .element(textInput)
      .click()
      .keys(email+"\n");
  }

  enter_auth() {
    var textInput = `~CODE`;
    iOS.element(textInput).waitForExist(5000);
    iOS
      .element(textInput)
      .click()
      .keys("111111");
  }

  timeout_alert() {
    setTimeout(function() {
      iOS.alertAccept()
    }, 10000);
  }
}

module.exports = new LoginPageiOS();
