                            

NativeFunction APIs
===================

Introduction
------------

The Native Function API is a module that contains APIs for a piece of native functionality. The primary purpose of this feature is to facilitate the native functions individually rather than packaging in the upcoming product versions or in the plug-ins. These modules are delivered as zip files, which can be imported directly into Volt MX Iristo enable the functionality and use it, instead of waiting for the next version of the product or plug-in for the functionality.

The Native Function APIs wrap the native APIs into JavaScript functions. You can then use these JavaScript functions in your Volt MX Irisapplication to execute the functionality of the native API through your JavaScript code.

To use these APIs, you need to follow certain guidelines. For the iOS platform guidelines, see [iOS Guidelines](guidelines_ios.md) and for the Android platform, see [Android Guidelines](guidelines_android.md).

> **_Note:_** As Native Function APIs are dependent on the underlying SDK versions, make sure that the appropriate Native Function APIs are imported to the Volt MX Iris. Otherwise build errors may occur because of the compatibility issues.

> **_Note:_** The Native Function APIs do not work in the DEBUG mode. They work only in the RELEASE mode.

This section covers the following topics.

*   **[iOS Guidelines for using the Native Function API](guidelines_ios.md)**
*   **[Android Guidelines for using the Native Function API](guidelines_android.md)**
*   **[Importing the Native Function API](importing_ssm.md)**
*   **[Enabling the Native Function APIs in Volt MX Iris Classic](enabling_native_function_apis.md)**
*   **[iOS API](ios_api.md)**
*   **[Android API](android_api.md)**

![](resources/prettify/onload.png)
