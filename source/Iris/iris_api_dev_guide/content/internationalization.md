                            

You are here: Internationalization API

Internationalization API
========================

Internationalization is the process of enhancing an application to support multiple languages across various regions. Internationalization is abbreviated as i18n. The `voltmx.i18n` namespace provides a comprehensive set of functions for developing multilingual applications.

The Internationalization API uses `voltmx.i18n Namespace` and the following API elements.

| Function | Description |
| --- | --- |
| [voltmx.i18n.deleteResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-deleteresourcebundle) | Enables you to delete an existing resource bundle. |
| [voltmx.i18n.getCurrentLocale](voltmx.i18n_functions.md#volt-mx-i18n-getcurrentlocale) | Returns the locale (string) that is currently being used by the application to populate the localized data. |
| [voltmx.i18n.getCurrentDeviceLocale](voltmx.i18n_functions.md#volt-mx-i18n-getcurrentdevicelocale) | Provides you the ability to fetch the current locale of the device. |
| [voltmx.i18n.getLocalizedString](voltmx.i18n_functions.md#volt-mx-i18n-getlocalizedstring) | Returns the localized string that corresponds to the specified i18n Key. |
| [voltmx.i18n.getSupportedLocales](voltmx.i18n_functions.md#volt-mx-i18n-getsupportedlocales) | Retrieves a list of all the locales supported by the device. |
| [voltmx.i18n.isLocaleSupportedByDevice](voltmx.i18n_functions.md#volt-mx-i18n-islocalesupportedbydevice) | Provides you the ability to view whether a locale is supported by a device. |
| [voltmx.i18n.isResourceBundlePresent](voltmx.i18n_functions.md#volt-mx-i18n-isresourcebundlepresent) | Checks if a resource bundle exists for a given locale and returns a boolean value. |
| [voltmx.i18n.setCurrentLocaleAsync](voltmx.i18n_functions.md#volt-mx-i18n-setcurrentlocaleasync) | Provides you the ability to set the specified locale as the current locale of the application. |
| [voltmx.i18n.setDefaultLocaleAsync](voltmx.i18n_functions.md#volt-mx-i18n-setdefaultlocaleasync) | Enables you to set the specified locale as the default locale for the application. |
| [voltmx.i18n.setLocaleLayoutConfig](voltmx.i18n_functions.md#volt-mx-i18n-setlocalelayoutconfig) | Enables you to define the Right-To-Left (RTL) behavior for each locale in an application. |
| [voltmx.i18n.setResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-setresourcebundle) | Enables you to set the specified resource bundle for a given locale. |
| [voltmx.i18n.updateResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-updateresourcebundle) | Enables you to append new key-value pairs to the given resource bundle for a specified locale. |

 

You can find the locales supported by a device. The [voltmx.i18n.getSupportedLocales](voltmx.i18n_functions.md#volt-mx-i18n-getsupportedlocales) function fetches all the locales supported by a device. If you want to check whether a specific locale is supported by a device, use the [voltmx.i18n.isLocaleSupportedByDevice](voltmx.i18n_functions.md#volt-mx-i18n-islocalesupportedbydevice) function

There are two types of locales, device-specific locales and application-specific locales. Use the [voltmx.i18n.getCurrentDeviceLocale](voltmx.i18n_functions.md#volt-mx-i18n-getcurrentdevicelocale) function to find the current locale of a device. Fetch the current locale supported by an application using the [voltmx.i18n.getCurrentLocale](voltmx.i18n_functions.md#volt-mx-i18n-getcurrentlocale) function. If you want to change the locale supported by an application, use the [voltmx.i18n.setCurrentLocaleAsync](voltmx.i18n_functions.md#volt-mx-i18n-setcurrentlocaleasync) function. You can set a default locale for an application by using the [voltmx.i18n.setDefaultLocaleAsync](voltmx.i18n_functions.md#volt-mx-i18n-setdefaultlocaleasync) function. Once a locale is set, configure the layout of your locale, and define the Right-To-Left behavior of the locale by using the [voltmx.i18n.setLocaleLayoutConfig](voltmx.i18n_functions.md#volt-mx-i18n-setlocalelayoutconfig) function.

Every locale comprises of a resource bundle. Check whether the selected locale contains a resource bundle using the [voltmx.i18n.deleteResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-deleteresourcebundle) function. If the locale does not contain a resource bundle, use the [voltmx.i18n.setResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-setresourcebundle) function to set a specific resource bundle for the locale. You can then update the resource bundle with new key-value pairs, by using the [voltmx.i18n.updateResourceBundle](voltmx.i18n_functions.md#volt-mx-i18n-updateresourcebundle) function. To obtain a localized string corresponding to an i18n key, use the [voltmx.i18n.getLocalizedString](voltmx.i18n_functions.md#volt-mx-i18n-getlocalizedstring) function.

Before you get started with using the voltmx.i18n namespace and functions, you should get to know a few things. They are, [Resource bundle](#resource-bundle) and [Implementing i18N](#implementation-details).

> **_Note:_** From V9 SP2 onwards, the i18n database data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.
<!-- > **_Note:_** From V8 SP4 onwards, the i18n database data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms. -->

Resource Bundle
---------------

_Resource bundle_ is a properties file that contains all the i18n Keys and their pair values. The resource bundle is locale specific, that is, you will have one resource bundle per locale. The resource bundle follows the naming convention of **<language\_Country>.properties**. For example,

*   For English locale in United States, the resource bundle will be en\_US.properties.
*   For French locale in Canada, the resource bundle will be fr\_CA.properties.

The resource bundle has a list of key-value pairs that are used as internationalization keys within the application.

Implementation Details
----------------------

The current practice to support _i18n_ for applications is to place the text (i18n keys) in the resource bundles that are loaded into the application. Applications are built to access the resource bundles depending on the selected locale data. For an application to support multiple languages, the application should be designed to select the relevant resource bundle at run-time. The keys in the resource bundles are translated to the required languages at run-time.

An internationalized application has the following benefits:

*   The same application can run on multiple locales.
*   Widget's text is not hard-coded in the application. Instead, the localized keys are retrieved dynamically.
*   Support for new locales does not require recompilation.
*   Region-dependent data such as dates and currencies appear in formats that conform to the end user's region and language.

To view the functionality of the Internationalization API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/InternationalizationAPI)

![](resources/prettify/onload.png)
