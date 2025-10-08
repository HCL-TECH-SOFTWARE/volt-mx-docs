                         


Android 9 Behavioral Changes
============================

In this document, we will explain the various Android 9 (version Pie and API Level 28) behavioral changes that are observed when apps use Android targetSDK version 28 and run on Android 9.0 devices.

Network Security
----------------

Android Pie recommends using secure **https** connections henceforth. Network connections with scheme as **http** do not work on apps targeting Android Pie.

HTTP connections will fail with the following exception message: **Cleartext HTTP traffic to \* not permitted**

Consequently, you must migrate all **http** URLs to **https** URLs used in Volt MX Iris Android application.

If your app needs to enable cleartext for **specific domains**, you must explicitly set **cleartextTrafficPermitted** to **true** for those domains in your app's [Network Security Configuration](Public_Key_Pinning.md#android-network-security-configuration).

For example, if you want to permit clear text traffic to google.com and its sub-domains, use the following network\_security\_config.xml.

```
<?xml version = "1.0" encoding = "utf-8"?>  
<network-security-config>   
 <domain-config cleartextTrafficPermitted = "true">   
 <domain includeSubdomains = "true">  
 google.com </domain>
</domain-config> </network-security-config>						

```

For more information, click [here](https://developer.android.com/training/articles/security-config).

Restrictions on the Use of non-SDK Interfaces
---------------------------------------------

For apps running on Android 9 (API level 28), Android introduces new restrictions on the use of non-SDK interfaces, whether directly, via reflection, or via JNI. For more information on these restrictions, click [here](https://developer.android.com/about/versions/pie/restrictions-non-sdk-interfaces).

For more information on the types of SDK interfaces and their descriptions, click [here](https://android.googlesource.com/platform/frameworks/base/+/pie-release/config).

*   **whitelist**: The SDK provided methods that can be used in the application.
    
*   **light-greylist**: When the application uses non-SDK methods or fields that are still accessible, this log is printed in Debug mode: **Accessing hidden …(light grey list)**.  
    No log is printed in Release mode.
    
*   **blacklist**: The usage of these APIs or fields are restricted regardless of the target SDK. The platform will behave as if the interface is absent.
    
    *   Android Framework will throw **NoSuchMethodError** or **NoSuchFieldException** whenever the app tries to use blacklisted methods.  
        When the app tries to list or enumerate blacklisted fields or methods of a particular class, they will not be listed.
        
*   **dark-greylist**: For apps whose target SDK is earlier than API level 28, the use of a dark greylist interface is permitted.  
    For apps whose target SDK is API level 28 or later, the same behavior is observed as in the case of blacklist.
    
    > **_Note:_** You must build a app that can be debugged, and then run your tests for the app. A logcat warning is printed of the form **Accessing hidden field|method...** for every use of non-SDK interfaces, including that are denied.  
    
    > **_Important:_** You must not use the hidden interfaces that are listed in darklist and blacklist via NFI or FFI. If any of these interfaces are used, the application may crash.
