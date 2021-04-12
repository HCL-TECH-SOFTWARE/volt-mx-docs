---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Deprecated/Unsupported APIs

Unsupported APIs
================

The following list of APIs are not supported from Volt MX Iris V9:

*   Streaming API
*   Application API
    *   Support for the **voltmx.application.openURL** has been deprecated for the iPhone platform.
*   Automation API - Support for the following Automation APIs is removed:
    *   voltmx.automation.appmenu.click 
    *   voltmx.automation.browser.click
    *   voltmx.automation.camera.capture
    *   voltmx.automation.combobox.selectItem
    *   voltmx.automation.cordovabrowser.click
    *   voltmx.automation.datagrid.click
    *   voltmx.automation.horizontalimagestrip.click
    *   voltmx.automation.imagegallery.click
    *   voltmx.automation.link.click
    *   voltmx.automation.map.click
    *   voltmx.automation.map.clickOnPin
    *   voltmx.automation.map.clickOnPinCallout
    *   voltmx.automation.pickerview.selectItem
    *   voltmx.automation.richtext.click
    *   voltmx.automation.segmentedui.scrollToBottom
    *   voltmx.automation.segmentedui.scrollToTop
    *   voltmx.automation.widget.scroll
    *   voltmx.automation.widget.canScroll
    *   voltmx.automation.widget.getWidgetProperty
    *   voltmx.automation.widget.getProperty

Backward Compatibility Support
------------------------------

The APIs in this section are supported only for backward compatibility. This section lists all the deprecated APIs:

Standard Volt MX APIs - Support for the following Generic APIs is provided for backward compatibility:

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setAppHeaders](javascript:void(0);)

This API allows you to set header at the application level with the given input values.

Syntax

voltmx.application.setAppHeaders([headerlist](#headerlist))

Input Parameters

headerlist \[Array\] - Mandatory

Specifies the list of attributes for the header

Return Values

None.

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setAppFooters](javascript:void(0);)

This API allows you to set footer at the application level with the given input values.

> **_Note:_** This API is deprecated and only works for backward compatibility.

Syntax

voltmx.application.setAppFooters([footerlist](#footerlist))

Input Parameters

footerlist \[Array\] - Mandatory

Specifies the list of attributes for the footer

Return Values

None.

Implementation Details

To access the footer elements, use the following syntax:

app.footers.hboxID.widgetID

Platform Availability

Available on all Platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.appReset](javascript:void(0);)

This API is used to reset the application. When this method is called, the data which was loaded during transactionaldataload event of forms is cleared (reset).

> **_Note:_** This API is deprecated and only works for backward compatibility.

Syntax

voltmx.application.appReset()

Input Parameters

None

Return Values

None.

Platform Availability

Available on all platforms.

Example

{% highlight voltMx %}voltmx.application.appReset(); Resets the application data.
{% endhighlight %}

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[readfrombase64](javascript:void(0);)

This API provides you the ability to read rawbytes from a base 64 encoded string.

Syntax

readfrombase64()

Input Parameters

The following table explains the input parameters for this API:

  
| Parameter/Type | Required | Description |
| --- | --- | --- |
| base64String \[String\] | yes | The base64 encoded string from which you want to read the rawbytes |
|  |  |  |

Return Values

The following are the return values for this API:

  
| Value/Type | Interpretation of return value | Remarks |
| --- | --- | --- |
| myrawbytes \[JSObject\] | The rawbytes of the specified base64 encoded string |  |
| nil | _nil_ is returned if the input is not a base64 encoded string |  |

Platform Availability

Android, Windows, and SPA.

Example

\-- Converts the base64String to rawbytes.

local myrawbytes = readfrombase64(base64String)

\-- The rawbytes extracted from the readfrombase64 API are passed to the crypto.decrypt API.

local decryptedstring = crypto.decrypt("aes",aeskey,myrawbytes);

![](resources/prettify/onload.png)
