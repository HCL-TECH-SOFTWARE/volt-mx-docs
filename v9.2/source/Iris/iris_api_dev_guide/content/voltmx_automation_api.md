                              

You are here: Automation API

Automation API
==============

Volt MX  Iris Automation Framework
---------------------------------------

Volt MX  Iris Automation Framework provides you a more convenient way to test your application across various platforms. The framework follows the Write Once, Run Anywhere methodology, so that different automation efforts put for each platform for the same application can be reused. JavaScript is used for Volt MX Iris Automation, and you do not need to have expertise on any other native language to use it. It is currently supported on iOS, Android, Windows, and DesktopWeb, SPA platforms.

### JavaScript Testing Framework – Jasmine

Jasmine is a behavior-driven development framework for testing JavaScript code. The framework does not depend on any other JavaScript frameworks. Furthermore, the framework has a clear and obvious syntax, thus enabling you to easily write tests.

**Sample Code**

Consider a scenario of a login page. Following is the test case written in JavaScript to verify if the username is Linda.

```

describe("Sample 1", function() {
    it("test case1", async
        function() {
            var username = voltmx.automation.widget.getWidgetProperty(["LoginPage", "loginBox", "userName"], "text");

            expect(username).toEqual("Linda"); // assertion for username value
        });
});
          

```

Volt MX  Iris Automation APIs: Supported Items
---------------------------------------------------

Volt MX  Iris Supports automation for both MVC and non-MVC projects. Automation API supports the following widgets:

*   All views of all widgets
    
*   Platform-specific widgets
    
*   Masters and User widgets (components)
    
*   Deprecated widgets - Box, Form, ScrollBox, etc.

In addition, Automation API supports the following items:

*   Low-level actions on all supported widgets
    
*   Touch
    
*   Scroll
    
*   Hardware buttons
    
*   Back button
    
*   Menu button
    
*   Text entry
    
*   Camera capture
    
*   Map and browser interaction
    

Volt MX  Iris Automation API consists of the voltmx.automation Namespace and its following inherent API groups:

*   Widget APIs
*   Low-level Touch and Gesture APIs
*   Miscellaneous Automation APIs
*   Existing Volt MX Iris APIs

The Volt MX Iris Automation API uses the `voltmx.Automation` namespace and the following API elements:

  
| Methods | Description |
| --- | --- |
| [`voltmx.automation.alert.click`](voltmx.automation_namespace.md#alert.click)` | Clicks the provided button, if visible, for the Alert. If multiple alerts are simultaneously shown, this API clicks the most recent alert displayed on the screen. |
| [voltmx.automation.box.click](voltmx.automation_namespace.md#box.click) | Triggers the Box click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.button.click](voltmx.automation_namespace.md#button.click) | Triggers the Button click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.calendar.selectDate](voltmx.automation_namespace.md#calendar.selectDate) | Triggers the Calendar click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.checkboxgroup.click](voltmx.automation_namespace.md#checkboxgroup.click) | Triggers the CheckBoxGroup click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.flexcontainer.click](voltmx.automation_namespace.md#flexcontainer.click) | Triggers the FlexContainer click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.radiobuttongroup.click](voltmx.automation_namespace.md#radiobuttongroup.click) | Triggers the RadioButtonGroup click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.segmentedui.click](voltmx.automation_namespace.md#segmentedui.getItem) | Triggers the SegmentedUI click event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.segmentedui.pull](voltmx.automation_namespace.md#segmentedui.pull) | Triggers the onPull event on the SegmentedUI, if it is set. |
| [voltmx.automation.segmentedui.push](voltmx.automation_namespace.md#segmentedui.push) | Triggers the onPush event on the SegmentedUI, if it is set. |
| [voltmx.automation.segmentedui.scrollToRow](voltmx.automation_namespace.md#segmentedui.scrollToRow) | Triggers the segment to scroll to the row specified by the index of the specified widget, if it is visible and enabled. |
| [voltmx.automation.segmentedui.scrollToWidget](voltmx.automation_namespace.md#ScrollToWidget) | Scrolls to ensure that the widget appears in view. It is an awaitable API. |
| [voltmx.automation.slider.slide](voltmx.automation_namespace.md#slider.slide) | Triggers the Slider slide event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.switch.toggle](voltmx.automation_namespace.md#switch.toggle) | Toggles the Switch between ON/OFF on the specified widget, if it is visible and enabled. |
| [voltmx.automation.tabpane.click](voltmx.automation_namespace.md#tabpane.click) | Clicks the tab with the specified tabID on the TabPane widget, if it is visible and enabled. |
| [voltmx.automation.textbox.enterText](voltmx.automation_namespace.md#textbox.enterText) | Enters the specified text into the TextBox, if it is visible and enabled. |
| [voltmx.automation.textarea.enterText](voltmx.automation_namespace.md#textarea.enterText) | Enters the specified text into the TextArea, if it is visible and enabled. |
| [voltmx.automation.widget.touch](voltmx.automation_namespace.md#widget.touch) | Triggers the touch event on the specified widget, if it is visible and enabled. |
| [voltmx.automation.playback.wait](voltmx.automation_namespace.md#playback.wait) | Introduces a delay time in the playback as specified. It is an awaitable API. |
| [voltmx.automation.playback.waitFor](voltmx.automation_namespace.md#playback.waitFor) | Waits for the widget to load completely. It is an awaitable API. |
| [voltmx.automation.device.deviceBack](voltmx.automation_namespace.md#device.deviceBack) | Invokes the back action of the device. It is an awaitable API. |
| [voltmx.automation.capture](voltmx.automation_namespace.md#capture) | Takes a screenshot of the widget passed. If the widget does not pass, the screenshot captures the entire screen. |

 ![](resources/prettify/onload.png)
