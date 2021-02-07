# Appium

testEnv=qa ./node_modules/.bin/wdio iOS.conf.js --spec ./test/specs/firsttest.js
testEnv=qa ./node_modules/.bin/wdio wdio.multi.conf.js --spec ./test/specs/sample_appium_ios_web/webToiOS.js

./node_modules/.bin/wdio iOS.conf.js --suite login_contact
