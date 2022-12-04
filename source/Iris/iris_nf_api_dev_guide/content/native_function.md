                            

Native Function API Developer's Guide:Introducing the Native Function API

Native Function APIs
====================

Introduction
------------

Most developers use Iris and Volt MX APIs to rapidly build cross platform, omni-channel applications. These APIs cover most of the functionality needed by applications, and allow them to be built for all platforms from one code base.

Occasionally you may need to access new or obscure device features before those features are available in the cross platform APIs. In this case you use the Native Function APIs to access native iOS and Android APIs from within your JavaScript code. You lose platform independence, but get access to specialized functionality not available in more generic ways.

Understanding the Native Function APIs
--------------------------------------

Native Function APIs are JavaScript wrappers for Objective C and Android native APIs. They are generated from the source APIs, which means that they can be updated and released quickly when the target API changes. This gives you the flexibility to update your apps quickly. This also means that you can do almost anything using JavaScript in Volt MX Iris by using native APIs.

For more information click the required link to view:

*   [VoltMX Iris Native API - iOS](native_function_apis_for_ios.md)
*   [VoltMX Iris Native API - Android](native_function_apis_for_android.md)

For information on the functionality that these APIs wrap you should refer to the API documentation provided by Apple and Google. Links to these source topics are provided in the Native Function API reference, and can also be found in the links below.

*   [Apple iOS APIs](https://developer.apple.com/library/ios/documentation/Miscellaneous/Conceptual/iPhoneOSTechOverview/Introduction/Introduction.md#//apple_ref/doc/uid/TP40007898-CH1-SW1)
*   [Android API](https://developers.google.com/android/reference/packages)

Using the Native Function APIs
------------------------------

To use the Native Function APIs in Iris, you need to add iOS and Android native function frameworks and packages to your project. To do this see [Add or Import Native Function APIs](../../../Iris/iris_user_guide/Content/AddOrImportNativeFunctionAPIs.md) in the Iris User Guide. Once the appropriate frameworks and packages have been added, you can begin invoking the APIs from your JavaScript code.

For a more hands-on approach on how Native Function APIs are implemented, import and understand the implementation of the [Barcode Scanner NFI app](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083650) by using Volt MX Iris.

In general, you need to follow these steps to build applications that use the Native Function APIs:

*   Create a new project in Volt MX Iris.
*   Add user interface elements as needed to your project.
*   Create Third-party Native Bindings - Please contact the Support team to get more info on how to generate Native bindings.
*   Add the appropriate frameworks to your project. See: [Add or Import Native Function APIs](../../../Iris/iris_user_guide/Content/AddOrImportNativeFunctionAPIs.md)
*   Add a JavaScript module to hold your code.
*   In that file, import the classes you wish to use. See: Accessing classes.
*   Instantiate the class (Not needed for static methods).
*   Use the methods associated with the class.
*   Build your application.
*   Run your application on a device or in a device emulator. (Not in the Iris Preview Application).

For more detail, see:

*   [Native API for iOS Quick Start](ios_quickstart.md)
*   [Native API for Android Quick Start](android_quickstart.md)
*   [Common tasks for iOS](common_tasks_for_ios.md)
*   [Common tasks for Android](common_tasks_for_android.md)
