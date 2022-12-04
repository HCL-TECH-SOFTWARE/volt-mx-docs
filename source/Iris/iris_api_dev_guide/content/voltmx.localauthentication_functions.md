                            


voltmx.localAuthentication Namespace
==================================

The voltmx.localAuthentication namespace provides the functions to authenticate, get the status of the authentication, and cancel authentication.

> **_Note:_** Applicable for iOS: For information about how to enable the Face ID feature in your VoltMX Iris application, click [here](../../../Iris/iris_user_guide/Content/Support_for_iPhoneX.md). For information about how to detect whether a device supports either the Touch ID or Face ID feature or the Iris authentication, refer the [getBiometryType](#biometryofDevice) API.

> **_Important:_** If you have used the Local authentication API in your VoltMX Iris projects, before moving your project to the V9.2 release, ensure that you read the [Local Authentication Migration guidelines](https://support.hcltechsw.com/community?id=community_question&sys_id=3994d4151b58e8142518542f0a4bcb66&view_source=searchResult) article.
<!-- > **_Important:_** If you have used the Local authentication API in your VoltMX Iris V8 projects, before moving your project to the V9 release, ensure that you read the [Local Authentication Migration guidelines](https://basecamp.voltmx.com/s/feed/0D52K00004LZUWw) article on the Base Camp. -->

This namespace contains the following API elements.

Functions
---------

The voltmx.localAuthentication namespace provides the following functions.


<details close markdown="block"><summary>voltmx.localAuthentication.authenticate</summary>

* * *

The API is used to authenticate the user with configurable system UI.

> **_Note:_** Call the `voltmx.localAuthentication.authenticate` API only if the `[voltmx.localAuthentication.getStatusForAuthenticationMode](#getStatusForAuthenticationMode)` API returns the success status code (5000).

<b>Syntax</b>

```

voltmx.localAuthentication.authenticate(  
    authenticationMode,  
    statusCallback,  
    configMap);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| authenticationMode | Specifies the biometric authentication mode for which the status is requested. The data type is constant. For the authentication modes, see [Authentication Modes](#authentication-modes). |
| statusCallBack (status, message) | A callback conveys the status of the authentication with appropriate status and message. The default value is **nil**. For status code, see the [Status Codes](#status-codes) section. |
| configMap | Specifies the configuration dictionary for the system authentication UI. The configMap parameter uses keys listed in the table below. **promptMessage:** Message to be displayed on the screen. This key is used to set title in the System UI, applicable for both the iOS and the Android platforms. This is a mandatory key. **fallbackTitle:** Allows you to edit the default text, "Enter Password" on the native pop-up, which is displayed when user authentication fails using Touch ID or Face ID. This is applicable only for the iOS platform. This is a mandatory key. **policy**: Use this key to set the local authentication policy. This is applicable only for the iOS platform. The value of this key is set to `constants.LOCAL_AUTHENTICATION_POLICY_DEV_OWNER_AUTH_WITH_BIOMETRICS`, by default. This is an optional key. Depending on the type of local authentication policy, the policy key can have the following values:constants.LOCAL\_AUTHENTICATION\_POLICY\_DEV\_OWNER\_AUTH\_WITH\_BIOMETRICSconstants.LOCAL\_AUTHENTICATION\_POLICY\_DEV\_OWNER\_AUTH **subTitle:** Use this key to set a subtitle in the System UI. This is an optional key applicable only for the Android platform. **deviceCredentialAllowed**: Use this key to enable device credentials in the System UI. This is an optional key applicable only for the Android platform. The default value is false. > **_Note:_** When you set the deviceCredentialAllowed key, the negativeButtonText property is ignored, and the cancelAuthentication() API does not cancel an authentication in progress. This property allows the user to authenticate even with the device credentials (PIN/PASSWORD, PATTERN) which the user registered in the device settings. **confirmationRequired**: After a user has been authenticated successfully, use this key to enable the Confirmation button. This key acts as a hint to the system to request for a confirmation from the user after a biometric authentication. For example, the Face and Iris authentication are passive implicit modalities that do not require a user action to be performed for execution. > **_Note:_** As this key acts as a hint to the system, the system may choose to ignore this flag. If the system chooses to ignore this flag, it will require confirmation, by default. For example, if you disable implicit authentication in the settings, or if it does not apply to a modality (e.g. Fingerprint), the System may choose to ignore this key. A typical use case for not requiring confirmation would be low-risk transactions, such as re-authenticating a recently authenticated application. Likewise, A typical use case for requiring confirmation would be for authorizing a purchase. This is an optional key applicable only for devices running on Android Q and later versions. **negativeButtonText**: Use this key to set the text for the negative button in the System UI. The default value for this key is **Negative Button**. This is an optional key applicable only for the Android platform. The negative button typically works as a Cancel button, but can be used as an alternate method to request authentication. For example, it can be used to request for a back up password. This key can be used to implement custom authentication. > **_Note:_** When you select the negative button, the callback of the authenticate() API returns the 5003 error code. > **_Note:_** When you set the deviceCredentialsAllowed key, the negativeButtonText property is ignored, |

<b>Example</b>

```
function statusCB(status, message) {    
    if (status == 5000)    {       
        voltmx.ui.Alert({  
            message: "AUTHENTICATION SUCCESSFULL",  
            alertType: constants.ALERT_TYPE_INFO,  
            yesLabel: "Close"  
        }, {});     
    }    
    else    {       
        var messg = status + message;     
        voltmx.ui.Alert({  
            message: messg,  
            alertType: constants.ALERT_TYPE_INFO,  
            yesLabel: "Close"  
        }, {});    
    }  
}  
function authUsingTouchID() {  
    var configMap = {  
        "promptMessage": "PLEASE AUTHENTICATE USING YOUR TOUCH ID",  
        "fallbackTitle": "Please enter your Password"  
        "description": "Description",  
        "policy": constants.LOCAL_AUTHENTICATION_POLICY_DEV_OWNER_AUTH_WITH_BIOMETRICS,  
        "subTitle": "sub title",  
        "deviceCredentialAllowed": true,  
        "confirmationRequired": true,  
        "negativeButtonText": "Negative"  
    };    
    voltmx.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_BIOMETRICS, statusCB, configMap);  
}
```

> **_Note:_** The **fallbackTitle** and **policy** keys are only available for the iOS platform. The **subTitle**, **deviceCredentialAllowed**, **confirmationRequired**, and **negativeButtonText** keys are only available for the Android platform.

<b>Return Values</b>

No

<b>Remarks</b>

> **_Note:_** For iOS devices, depending on the type of biometric authentication available, the promptMessage is either **PLEASE AUTHENTICATE USING YOUR TOUCH ID** or **PLEASE AUTHENTICATE USING YOUR FACE ID**. You can know the type of biometric authentication available using the getBiometyType API.

> **_Note:_** If you assign an empty string, “ ” to the fallbackTitle key, the Enter Password button will be hidden. If the fallbackTitle key is not defined in the configMap parameter, the default (Enter Password) value is displayed.

<b>Platform Availability</b>

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.localAuthentication.checkFeatureAvailability</summary>

* * *

The checkFeatureAvailability API provides information about the availability of local authentication-related system features in the device.

This API only indicates whether the device supports the specified feature. It does not indicate whether the feature is enabled or if the corresponding authentication data is registered with the device.

<b>Syntax</b>

```

voltmx.localAuthentication.checkFeatureAvailability();
```

<b>Input Parameters</b>

One or more values of **face**, **fingerprint**, **iris** as a list.

<b>Example</b>

> ```
var result = voltmx.localAuthentication.checkFeatureAvailability(["face", "fingerprint", "iris"]);  
> if (result.fingerprint == voltmx.localAuthentication.FEATURE_AVAILABLE) {  
>     alert("Fingerprint system feature is present in the device");  
> }
> ```

<b>Return Values</b>

A key-value pair in a JS object. The key is any of the **face**, **fingerprint**, or **iris** values. The value is any of the following constants:

>   
> | Return Value | Description |
> | --- | --- |
> | voltmx.localAuthentication.FEATURE\_AVAILABLE | The API returns this constant when the device supports the specified system feature. |
> | voltmx.localAuthentication.FEATURE\_NOT\_AVAILABLE | The API returns this constant when the device does not support the specified system feature. |
> | voltmx.localAuthentication.FEATURE\_UNKNOWN | The API returns this constant if the specified feature is unsupported on the device, The API can detect support for the **face** and **iris** features in devices that run on Android 10 (API level 29), and later versions. Support to detect the **fingerprint** feature is present in Android 6 (and later) devices. |

 

<b>Remarks</b>

This API behaves in accordance to the native Android `packageManager.hasSystemFeature()` API.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.localAuthentication.getBiometryType</summary>

* * *

This API differentiates whether a device supports either the Touch ID or Face ID feature. The voltmx.localAuthentication.getBiometryType API is available from iOS 11.

<b>Syntax</b>

```

voltmx.localAuthentication.getBiometryType();
```

<b>Example</b>

```
function getBiometryTypeOfDevice() {
    var promptMessage = "Sign in with ";
    switch (voltmx.localAuthentication.getBiometryType()) {
        case constants.BIOMETRY_TYPE_NONE:
            // Handle the case if the device doesn't support any biometryType
            break;
        case constants.BIOMETRY_TYPE_TOUCHID:
            promptMessage += "TouchID";
            break;
        case constants.BIOMETRY_TYPE_FACEID:
            promptMessage += "FaceID";
            break;
        case constants.BIOMETRY_TYPE_UNDEFINED:
            // Handle the case if the device is not a iOS11 device or later
            break;
    }
}
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| constants.BIOMETRY\_TYPE\_NONE | If there is no biometric authentication in the device. |
| constants.BIOMETRY\_TYPE\_TOUCHID | If the device supports Touch ID authentication. |
| constants.BIOMETRY\_TYPE\_FACEID | If the device supports Face ID authentication. |
| constants.BIOMETRY\_TYPE\_UNDEFINED | If this API is called on the device with OS earlier than iOS11. |

 

<b>Remarks</b>

Face ID is the new biometric authentication that Apple has introduced with iPhoneX. This API will help to customize the prompt message in voltmx.localAuthentication.authenticate. Depending on the type of authentication available, the prompt message is **Sign in with FaceID** or **Sign in with TouchID**.

<b>Platform Availability</b>

*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.localAuthentication.cancelAuthentication</summary>

* * *

The API cancels the current authentication process.

> **_Note:_** This API won't work if the **[deviceCredentialAllowed](#deviceCredentialAllowed)** key in the [authenticate()](#authenticate) is set to true.

<b>Syntax</b>

```

voltmx.localAuthentication.cancelAuthentication();
```

<b>Example</b>

```
var cancelButton = voltmx.ui.Button({
    onClick: btnOnClick
});
function btnOnClick() {
    voltmx.localAuthentication.cancelAuthentication()
}
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| status | The 5004 status code is returned indicating the authentication is canceled. |

 

<b>Remarks</b>

The API is available only for the Android platform.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.localAuthentication.getStatusForAuthenticationMode</summary>

* * *

The API returns the usability status of the authentication.

> **_Note:_** For information about how to detect whether a device supports either the Touch ID or Face ID biometrics, refer the [getBiometryType](#biometryofDevice) API.

<b>Syntax</b>

```

voltmx.localAuthentication.getStatusForAuthenticationMode(  
    authenticationMode);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| authenticationMode | Specifies the authentication mode for which the status is requested. The data type is constant. For the authentication modes, see [Authentication Modes](#authentication-modes). |

 

<b>Example</b>

```
function isAuthUsingTouchSupported() {    
    var status = voltmx.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);    
    if (status == 5000)    {     
        voltmx.ui.Alert({  
            message: "AUTHENTICATION BY TOUCHID SUPPORTED",  
            alertType: constants.ALERT_TYPE_INFO,  
            yesLabel: "Close"  
        }, {});     
    }    
    else    {       
        var msg = "TOUCHID AUTHENTICATION RETURNED THE STATUS ::" + status;     
        voltmx.ui.Alert({  
            message: status,  
            alertType: constants.ALERT_TYPE_INFO,  
            yesLabel: "Close"  
        }, {});     
    }  
}
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| status | A status code is returned indicating the usability status of authentication. For status codes, see the [Status Codes](#status-codes) section. |

<b>Remarks</b>

Using the API, you can verify whether local authentication is supported on the device.

Even when the `getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_BIOMETRICS)` API returns a **5005** status code (biometrics not set on the device), you can display a System Authentication prompt with either PIN, PATTERN, or PASSWORD by following these steps:

> 1.  Check if device credentials are configured for the device by invoking the `getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_DEVICE_CREDENTIALS)` API.
> 2.  If the credentials are configured, invoke the `[authenticate](#authenticate)` API with the `deviceCredentialAllowed` parameter set to **True**.

<b>Platform Availability</b>

*   iOS
*   Android

* * *

Authentication Modes
--------------------

Following are the supported constants for authentication mode.

*   **constants.LOCAL\_AUTHENTICATION\_MODE\_TOUCH\_ID**  
    The same constant can be used for any biometric authentication mode, i.e. Fingerprint(TouchID), FaceID, and Iris.
    
    > **_Note:_** In case of Android, you can use the constant **constants.LOCAL\_AUTHENTICATION\_MODE\_BIOMETRICS** in place of the constant **constants.LOCAL\_AUTHENTICATION\_MODE\_TOUCH\_ID**. The Biometric constant would support any biometric authentication mode.
    
*   **constants.LOCAL\_AUTHENTICATION\_MODE\_DEVICE\_CREDENTIALS**  
    This constant determines whether the device has either PIN, PATTERN, or PASSWORD configured as the authentication mode.
    
    > **_Note:_** This constant is only available for the `getStatusForAuthenticationMode` API on the **Android** platform.
    
    When the `getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_DEVICE_CREDENTIALS)` API is invoked on a device, it returns one of the following status codes:
    
    *   **5000**: Indicates that a passcode (either PIN, PATTERN, or PASSWORD) is set on the device.
    *   **5005**: Indicates that the passcode is not set on the device.

Status Codes
------------

The following table provides a list of status codes and their descriptions.

  
| Status Codes | Description |
| --- | --- |
| 5000 | No Error |
| 5001 | Authentication is not successful because a user fails to provide valid credentials. |
| 5002 | Authentication is canceled by a user. The following are the examples for different OS. In case of IOS, when a user taps **Cancel** in the dialog box. In case of Android, when a user presses the device back button while the system UI is displayed. |
| 5003 | Authentication is canceled. iOS: Authentication is canceled because the user tapped the fallback button (Enter Password). Android: Authentication is canceled because the user tapped the negative button. |
| 5004 | Authentication is canceled by system. |
| 5005 | Authentication does not start because the passcode is not set on the device. |
| 5006 | Authentication does not start because biometrics are not available on the device. |
| 5007 | Authentication does not start because biometrics are not enrolled on the device. |
| 5008 | Authentication does not start because the target device's OS does not support local authentication with biometrics. |
| 5009 | Authentication was not successful because there were too many failed user attempts for authentication, and the feature has now been locked. In case of Android, this occurs after 5 failed attempts, and lasts for 30 seconds. |
| 5010 | Error state returned when the current request has been running too long. Applicable only for Android platform. |
| 5011 | The operation was cancelled because 5009 occurred too many times. Authentication is disabled until the user unlocks with strong authentication (PIN/Pattern/Password). Applicable only for Android platform. |

> **_Note:_**  
**Applicable for the Android OS and Devices**  
  
Android supports fingerprint, Face ID, and Iris modes of biometric authentication. Availability of the authentication is subject to the support provided by the device. Fingerprint is supported from Android 6 onwards. Face ID and Iris modes are supported from Android 10 onwards.  
  
To support different modes of authentication, a developer need not make any changes to the API configuration. If the device supports multiple biometrics, the developer can specify a default or preferred method in device settings and the API invocation would launch the user preferred authentication flow.  
  
There is no way to know the biometric modes supported by the device. Only the device user knows the biometric authentication supported by the device.

</details>

![](resources/prettify/onload.png)
