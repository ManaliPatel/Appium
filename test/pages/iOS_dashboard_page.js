
class DashboardPageiOS {
  swipe_right(){
    iOS.pause(10000)
    var element = iOS.element('//XCUIElementTypeWindow');
    iOS.execute('mobile: scroll', {element: element.value.ELEMENT, 'direction': 'right' })
  }

  swipe_down(){
    var element = iOS.element('//XCUIElementTypeWindow');
    iOS.execute('mobile: scroll', {element: element.value.ELEMENT, 'direction': 'down' })
  }
}

module.exports = new DashboardPageiOS();
