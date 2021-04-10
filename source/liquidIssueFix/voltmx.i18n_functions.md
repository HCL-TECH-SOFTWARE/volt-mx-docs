---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.i18n Namespace
===================

The voltmx,i18n Namespace, which forms the [Internationalization API](internationalization.html), provides the following API elements.

> **_Note:_** From V8 SP4 onwards, the i18n database data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.

Functions
---------

The voltmx.i18n namespace, which is used for internationalization, provides the following functions.

voltmx.i18n.deleteResourceBundle
------------------------------

This API allows you to delete an existing resource bundle. If a resource bundle does not exist, the API will return without performing any operation. Only resource bundles which are newly created using the _setResourceBundle_ API will be deleted. The bundle which are created by IDE, cannot be deleted, but they can only be updated.

**Syntax**

voltmx.i18n.deleteResourceBundle([locale](#locale12))

**Input Parameters**

  
| Parameter | Description |
| --- | --- |
| locale \[String\] - Mandatory | Specifies the locale for which the resource bundle needs to be deleted. |

 

**Example**

{% highlight voltMx %}//To delete the resource bundle  
deleteResourceBundle: function() {
    voltmx.i18n.deleteResourceBundle("de\_DE");
    alert(" Resources bundle has been deleted.");
},
{% endhighlight %}

**Return Values**

None

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms.

voltmx.i18n.getCurrentLocale
--------------------------

This API returns the locale (string) that is currently being used by the application to populate the localized data. This locale might be different than the system locale. The locale follows the format _language\_Country_.For example, `en_US`. `Country` is not mandatory.

**Use Cases**

You can use this API to know the current locale of the application before:

*   changing the locale.
*   deleting the resource bundle of the locale.

**Syntax**

voltmx.i18n.getCurrentLocale()

**Example**

{% highlight voltMx %}//To get the Locale name that is set on your app   
getCurrentLocale:functio(){
var currentLocales = voltmx.i18n.getCurrentLocale();
alert("CurrentLocale :" + currentLocales);
},
{% endhighlight %}

**Input Parameters**

None.

**Return Values**

| Return Value | Description |
| --- | --- |
| Current locale \[String\] | The current locale that is being used by the application is returned. |

 

**Exceptions**

1300 - i18n error or Locale not supported error

**Implementation Details**

The current locale of the application is identified using the following rules:

| **Device Locale** | **Locales Supported by the application** | **Default Locale** | **Locale returned by _getCurrentLocale_ API** |
| --- | --- | --- | --- |
| en\_GB | en\_US, zh\_TW | en\_TW | _en\_TW_ (Since the device locale is not supported by the application, the API falls back to default locale) |
| en\_US | en\_US, en , zh\_TW | en\_TW | _en\_US_ (Since the device locale is supported by the application, the API returns it as the current locale) |
| en\_US | en, zh\_TW | en\_TW | _en_ (Since the device locale is supported by the application, the API falls back to the country) |

  
This API follows the rules given below to identify the current locale:

1.  **When the device locale is not supported by the application:**
    
    For example, if the
    

> *   application supports _fr\_GR_, _nl\_NL_.
> *   default locale is (set from IDE) _nl\_NL_.
> *   device locale is _en\_GB._

The _voltmx.i18n.getCurrentLocale()_ API returns _nl\_NL_.

1.  **When the device locale supports just the language part and not the region part**
    
    For example,
    

> *   application supports _fr\_GR_, _en\_US_, _en\_GB_, _nl\_NL_.
> *   default locale is (set from IDE) _nl\_NL_.
> *   device locale is _en._.

> > **_Note:_** On iPhone and Android, the device settings mandate that a region must also be associated with a language.

The _voltmx.i18n.getCurrentLocale()_ API picks up the first locale that matches the language. In this example, the API returns _en\_US_ as it is the first locale that matches the language as specified in the device system settings.

1.  **When appropriate fonts are not installed on the device for a given locale**
    
    For example,
    

> *   application supports _fr\_FR_ and _nl\_NL_

> *   default locale is (set from IDE) _nl\_NL_

> *   device locale is _en\_GB._

The _voltmx.i18n.getCurrentLocale()_ API returns _nl\_NL_. If the device does not have Dutch fonts installed, the application UI displays junk characters.

**Platform Availability**

Available on all platforms.

voltmx.i18n.getCurrentDeviceLocale
--------------------------------

This API provides you the ability to fetch the current locale of the device.

**Syntax**

voltmx.i18n.getCurrentDeviceLocale()

**Example**

{% highlight voltMx %}//To get the current device locale  
getCurrentDeviceLocale:function(){
    var locale = voltmx.i18n.getCurrentDeviceLocale();
    alert("current device locale is " + locale);
},
{% endhighlight %}

**Input Parameters**

None

**Return Values**

| Return Value | Description |
| --- | --- |
| listOfLocales \[Table\] | A table with the following key-value pairs is returned:languagecountryname For example, `local myLocaleDetails = voltmx.i18n.getCurrentDeviceLocale()`Where myLocaleDetails={language="en", country="US", name="English US"} |

 

> **_Note:_** In iOS platform this API returns a string value.

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on iOS, Android, and Windows.

voltmx.i18n.getLocalizedString
----------------------------

This API returns the localized string that corresponds to the specified i18n Key.

**Syntax**

voltmx.i18n.getLocalizedString([i18nkey](#i18nkey))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| i18nkey \[String\]- Mandatory | Specifies the internationalization key for which the localized string needs to be returned. |

 

**Example**

{% highlight voltMx %}//To get the localized string that corresponds to the specified i18n Key.  
getLocalizedString: function() {
    var currentLocale = voltmx.i18n.getLocalizedString("Hello");
    alert(" LocalizedString Method called :" + currentLocale);
},
{% endhighlight %}

**Return Values**

| Return Value | Description |
| --- | --- |
| Localizedstring \[String\] | Returns the localized string corresponding to the key value. |

 

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms.

voltmx.i18n.getSupportedLocales
-----------------------------

This API retrieves a list of all the locales supported by the device.

**Syntax**

voltmx.i18n.getSupportedLocales()

**Example**

{% highlight voltMx %}//To get all the locales supported by the device  
 getSupportedLocale: function() {
    var supportedLocales = voltmx.i18n.getSupportedLocales();
    alert("Supported Locales :" + JSON.stringify(supportedLocales));
},
{% endhighlight %}

**Input Parameters**

None

**Return Values**

| Return Value | Description |
| --- | --- |
| listOfLocales \[Table\] | A table with the following key-value pairs is returned:languagecountryname > **_Note:_** In Windows platform, Country and Name are not supported. For example, `local list = voltmx.i18n.getSupportedLocales()` |

{% highlight voltMx %}Where list={ {language:"en", country:"US", name:"English US"},{language:"en", country:"UK", name:"English UK"} }
{% endhighlight %}

**Exceptions**

1300 - i18n error or Locale not supported error

Platform Availability

Available on all platforms except Server Side Mobile Web, Desktop Web and SPA. \*SPA and Desktop Web returns only current locale instead of all locales supported by the browser.

voltmx.i18n.isLocaleSupportedByDevice
-----------------------------------

This API provides you the ability to view whether a locale is supported by a device.

Syntax

voltmx.i18n.isLocaleSupportedByDevice([locale](#localess))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| locale \[String\] - Mandatory | Specifies the locale that must be verified if it is supported by the device.locale must be in one of the following formats:language\_countryCodelanguageFor example, `voltmx.i18n.isLocaleSupportedByDevice("en_US")`
> voltmx.i18n.isLocaleSupportedByDevice("fr")

 |

**Example**

{% highlight voltMx %}//To check whether the specified locale is supported by the device or not.  
Checkthelocale: function() {
    var a = this.view.txtbx.text;
    if (voltmx.i18n.isLocaleSupportedByDevice("a") === true) {
        alert("This locale is supported");
    } else {
        alert("This Locale is not supported");
    }
},
{% endhighlight %}

**Return Values**

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | Indicates the status if the specified locale is supported by the device._true_ - if the specified locale is supported by the device._false_ - if the specified locale is not supported by the device. |

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms except SPA and Desktop Web.

voltmx.i18n.isResourceBundlePresent
---------------------------------

This API checks if a resource bundle exists for a given locale and returns a boolean value.

**Syntax**

voltmx.i18n.isResourceBundlePresent ([locale](#locale1))

**Input Parameters**

| Paramater | Description |
| --- | --- |
| locale \[String\] - Mandatory | Specifies the locale for which the resource bundle is checked. |

 

**Example**

{% highlight voltMx %}  isResourceBundlePresent: function() {
    try {
        var exists = voltmx.i18n.isResourceBundlePresent("en\_GB");
        alert("English resource bundle is present " + exists);
    } catch (i18nError) {
        alert("Exception While getting isResourceBundlePresent : " + i18nError);
    }
},
{% endhighlight %}

**Return Values**

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the resource bundle exists for the given locale._false_ - if no resource bundle exists for the given locale. |

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms except SPA and Desktop Web.

voltmx.i18n.setDefaultLocaleAsync
-------------------------------

Every application that has support for internationalization needs a locale to be set as a default locale. This API allows you to set the specified locale as the default locale for the application. You can also set the default locale from the IDE. However, this API allows you to perform that task dynamically.

**Use Cases**

You must set the resource bundle for a given locale to have internationalization support for that locale.

**Syntax**

voltmx.i18n.setDefaultLocaleAsync([localename](#localename), [onsuccesscallback](#onsuccesscallback), [onfailurecallback](#onfailurecallback), [info](#info1))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| localename \[String\] - Mandatory | Specifies the locale that must be set as the default locale of the application. |
| onsuccesscallback \[Function\] - Mandatory | onsuccess callback is called by the platform after successfully setting the specified locale as default.
> onsucess(oldlocalename, newlocalename){ \\\\code }

 |
| onfailurecallback \[Function\] - Mandatory | onfailure callback will be called by the platform if the locale is not set successfully.

> onfailure (errCode, errMsg){ \\\\code }

 |
| info \[Object\] - Optional | A JavaScript object consisting of key value pairs. If info parameter is specified, it is passed to the callback function as a last parameter. If the info parameter is not specified, the callback function receives the info as null/nil. "Info" is basically a user data where in the application developers will pass it to the async API's and the platform returns this info object to the corresponding async callback.This parameter is helpful for developers to remember the context when the methods are called in asynchronous fashion.Developers can define any custom keys and values within the info Object based on the needs. These are not predefined keys with values. |

**Example**

{% highlight voltMx %}//To set the default locale for your app.   
  setDefaultLocaleAsync: function(){
    voltmx.i18n.setDefaultLocaleAsync("fr\_FR", this.onsuccesscallback, this.onfailurecallback);
  },
{% endhighlight %}

**Return Values**

None

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms.

voltmx.i18n.setCurrentLocaleAsync
-------------------------------

This API provides you the ability to set the specified locale as the current locale of the application. If the locale is not supported by the device, junk characters are displayed on the screen for the locale specific string.

**Use Cases**

You must set the resource bundle for a given locale to have internationalization support for that locale.

**Syntax**

voltmx.i18n.setCurrentLocaleAsync([localename](#localename5), [onsuccesscallback](#onsuccesscallback5), [onfailurecallback](#onfailurecallback5), [info](#info))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| localename \[String\] - Mandatory | Specifies the locale that must be set as the default locale of the application. |
| onsuccesscallback \[Function\] - Mandatory | onsuccess callback will be called by the platform after a locale is set successfully as the current locale.onsucess(oldlocalename, newlocalename){ \\\\code } |
| onfailurecallback \[Function\] - Mandatory | onfailure callback will be called by the platform if the locale is not set successfully.onfailure (errCode, errMsg){ \\\\code } |
| info \[Object\] - Optional | A JavaScript object consisting of key value pairs. If info parameter is specified, it is passed to the callback function as a last parameter. If the info parameter is not specified, the callback function receives the info as null/nil. "Info" is basically a user data where in the application developers will pass it to the async API's and the platform returns this info object to the corresponding async callback.This parameter is helpful for developers to remember the context when the methods are called in asynchronous fashion.Developers can define any custom keys and values within the info Object based on the needs. These are not predefined keys with values. |

**Example**

{% highlight voltMx %}/\*By using this function, you set a locale based on your input that you select from the 
  list box widget.\*/
setlocaleListbox: function() {
    if (this.view.lstbx.selectedKey == "lb1") {
        voltmx.i18n.setCurrentLocaleAsync("en\_GB", this.onsuccesscallback, this.onfailurecallback);
    } else if (this.view.lstbx.selectedKey == "lb2") {
        voltmx.i18n.setCurrentLocaleAsync("es\_AR", this.onsuccesscallback, this.onfailurecallback);
    } else if (this.view.lstbx.selectedKey == "lb3") {
        voltmx.i18n.setCurrentLocaleAsync("fr\_FR", this.onsuccesscallback, this.onfailurecallback);
    }
},
{% endhighlight %}

**Return Values**

None

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms.

voltmx.i18n.setLocaleLayoutConfig
-------------------------------

This API helps you to define the Right-To-Left (RTL) behavior for each locale in an application.

> **_Note:_** When the application calls the voltmx.i18n.setDefaultLocaleAsync API, Volt MX Iris Framework loads forms with the corresponding Locale.The forms that were loaded previously must be destroyed in application code to see the effect of the RTL/LTR feature for that particular form.

**Syntax**

voltmx.i18n.setLocaleLayoutConfig({ "<locale\_key1>" :  
{"mirrorFlexPositionProperties", "mirrorContentAlignment", "mirrorFlowHorizontalAlignment":}

**Input Parameters**

| Parameter | Description |
| --- | --- |
| mirrorFlexPositionProperties \[Boolean\] - Mandatory | This property reverses the layout properties for left and right alignment. At run time the framework iterates through all the widgets in any given form and if the layout is set to RTL(mirrorFlexPositionProperties = true), the following actions are performed:For any widget for which the values for **Left** and **Width** are set but **Right** is empty, the Left value is then replaced with the Right value; and the Left value becomes Null.For any widget for which the values for **Right** and **Width** are set but **Left** is empty, the Right value is then replaced with the Left value; and the Right value becomes Null.For any widget that has both **Right** and **Left** values set, the values are swapped between the two.For any widget for which **Padding** has a **Left** value, the Left value is then replaced with the Right value.For any widget for which **Padding** has a **Right** value, the Right value is then replaced with the Left value. |
| mirrorContentAlignment \[Boolean\] - Mandatory | This property reverses the content alignment from right to left. At run time the framework iterates through all the widgets in any given form and if the layout is set to RTL(mirrorContentAlignment = true), the following actions are performed: For any widget for which Content Alignment is set as **Left**, the content alignment is changed to **Right**.For any widget for which Content Alignment is set as **Right**, the content alignment is changed to **Left**. |
| mirrorFlowHorizontalAlignment \[Boolean\] - Mandatory | This property converts the flow horizontal alignment of a FlexContainer from left to right. Volt MX Iris Framework internally applies the **NOT** operator on the **reverseLayoutDirection** Property of horizontal FlexContainer to change the alignment. |

 

**Example**

{% highlight voltMx %}voltmx.i18n.setLocaleLayoutConfig({
    "<locale\_key1>": {
        "mirrorFlexPositionProperties": true / false,
        "mirrorContentAlignment": true / false,
        "mirrorFlowHorizontalAlignment": true / false,
    },
    "<locale\_key2>": {
        "mirrorFlexPositionProperties": true / false,
        "mirrorContentAlignment": true / false,
        "mirrorFlowHorizontalAlignment": true / false,
    },
});
{% endhighlight %} 

**Platform Availability**

*   iOS
*   Android
*   Windows
*   SPA

**Limitations**

*   For Windows, if you use the **isI18nLayoutConfigEnabled** key and the **voltmx.application.setApplicationLayout** API together in a single application, the application does not function as expected.

voltmx.i18n.setResourceBundle
---------------------------

This API allows you to set the specified resource bundle for a given locale. If the specified locale has a resource bundle already set, it is overridden with the given resource bundle.

If no resource bundle has been set previously, this API will create a new resource bundle.

**Use Cases**

You must set the resource bundle for a given locale to have internationalization support for that locale.

**Syntax**

voltmx.i18n.setResourceBundle([inputtable](#inputtable), [locale](#locale))

**Input Parameters**

| Paramater | Description |
| --- | --- |
| inputtable \[Table\] - Mandatory | Specifies the resource bundle that needs to be set for the given locale. |
| locale \[String\] - Mandatory | Specifies the locale for which the resource bundle needs to be set. |

 

**Example**

{% highlight voltMx %}//To set a resource bundle for the key "Hello"
  setResourceBundle: function(){    
    voltmx.i18n.setResourceBundle({
      Hello: "Hallo Welt",
    }, "de\_DE");
    voltmx.i18n.setCurrentLocaleAsync("de\_DE",this.onsuccesscallback, this.onfailurecallback);  
  },
{% endhighlight %}

**Return Values**

None

**Exceptions**

1300 - i18n error or Locale not supported error, Locale not supported.

**Platform Availability**

Available on all platforms.

voltmx.i18n.updateResourceBundle
------------------------------

This API allows you to append new key-value pairs to the given resource bundle for a specified locale. The key-value pairs you provide will be appended at the end of the resource bundle.

If no resource bundle exists for the specified locale, a new resource bundle is created.

**Syntax**

voltmx.i18n.updateResourceBundle([inputtable](#inputtable1), [locale](#getcurre))

**Input Parameters**

| Paramater | Description |
| --- | --- |
| inputtable \[Table\] - Mandatory | Specifies the resource bundle that needs to be set for the given locale. |
| locale \[String\] - Mandatory | Specifies the locale for which the resource bundle needs to be set. |

 

**Example**

{% highlight voltMx %}//To update the resource bundle with a different text  
  updateResourceBundle: function(){
 voltmx.i18n.updateResourceBundle({
           Hello: "Hallo Leute",
        }, "de\_DE");
  voltmx.i18n.setCurrentLocaleAsync("de\_DE",this.onsuccesscallback1, this.onfailurecallback);
},
{% endhighlight %}

**Return Values**

None

**Exceptions**

1300 - i18n error or Locale not supported error

**Platform Availability**

Available on all platforms.

Deprecated Functions
====================

The following APIs have been deprecated from 5.0 onwards and are only supported for backward compatibility.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.i18n.setCurrentLocale](javascript:void(0);)

This API provides you the ability to set the specified locale as the current locale of the application. If the locale is not supported by the device, junk characters will be displayed on the screen for the locale specific string.

Syntax

voltmx.i18n.setCurrentLocale([locale](#locale14))

Input Parameters

locale \[String\] - Mandatory

Specifies the locale that must be set as the current locale of the application

Return Values

errorcode \[Number\]

A number that denotes the error.

*   0 - Locale is successfully applied
*   100 - The supplied locale is not available in the device.
*   101 - The supplied locale is not available in application

Error Codes

*   100 - if the locale is not supported by device
*   101 - if the locale is supported by device but not by the application

Implementation Details

This section explains how this API is implemented. This API:

*   sets the appropriate display language and region for displaying content and images in the application
*   sets the specified locale as the input locale (keyboard and calendar display) if the specified locale is available - on Android
*   displays junk characters for the locale specific string if the specified locale is not supported by the device
*   does not re-initialize the widgets that have already loaded the i18n content. For example, assume that an application has 2 forms frmA and frmB.
    *   _frmA_ is the startup form and loads the content using _i18n.getlocalizedstring_ API. The current locale for the device is _en\_US_ and English text is populated on the form.
    *   _onclick_ event of the button on this form invokes _i18n.setcurrentlocale("fr\_FR")_
    *   Invoking this API at this stage will not cause the widgets to reload the data for _frmA_ widgets from _fr\_FR_ resource bundle.

Platform Availability

*   Android

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.i18n.setDefaultLocale](javascript:void(0);)

Every application that has support for internationalization needs a locale to be set as a default locale. This API allows you to set the specified locale as the default locale for the application. You can also set the default locale from the IDE. However, this API allows you to perform that task programmatically.

Syntax

voltmx.i18n.setDefaultLocale([locale](#locale2))

Input Parameters

locale \[String\] - Mandatory

Specifies the locale that needs to be set as default locale for the application

Return Values

None.

Error Codes

*   100 - if the locale is not supported by device
*   101 - if the locale is supported by device but not by the application

Implementation Details

This API is invoked in the background when the code is generated for an application to set the default locale.

Platform Availability

Available on all platforms except J2ME.

![](resources/prettify/onload.png)
