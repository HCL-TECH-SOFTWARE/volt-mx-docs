                             

You are here: Application Settings API

Application Settings API
========================

The Application Settings API enables you to retrieve and update certain settings of an application. Using the application settings functions, you can read the values that you have set for an application and write new values. For instance, you can choose to define different views for widgets and configure themes.

> **_Important:_** The functions in this API are currently only applicable on iPhone platform.

The Application Settings API uses `voltmx.application.settings Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.application.settings.read](voltmx_application__settings_functions.md#settings) | Enables your app to read the configuration values associated with specified keys. |
| [voltmx.application.settings.write](voltmx_application__settings_functions.md#settings2) | Enables your app to write the configuration values associated with specified keys. |

 

To know the current settings of the application, use the [voltmx.application.settings.read](voltmx_application__settings_functions.md#settings) function. This function will provide information about the various app settings and their values. For example, you can read the settings such as themes and widget views. If you want to modify these settings, use the [voltmx.application.settings.write](voltmx_application__settings_functions.md#settings2) function. This function will enable you to replace the existing values of the app settings with the new values.

To view the functionality of the Application Settings API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ApplicationSettingsAPI)

![](resources/prettify/onload.png)
