                            


voltmx.gms Namespace
==================

The voltmx.gms Namespace contains the following API elements:

[Constants](#constants)

[Functions](#functions)

Constants
---------

The voltmx.gms namespace provides the following constants:

### Dialog Status Callback

  
| Constant | Description |
| --- | --- |
| GMS\_UPDATE\_REQUEST\_ACCEPTED | The user has accepted the Google Play Services update request. |
| GMS\_UPDATE\_REQUEST\_CANCELLED | The user has canceled the Google Play Services update request. |
| GMS\_UPDATE\_REQUEST\_NOT\_SHOWN | The Update dialog box does not appear as the API is invoked in the background without displaying the UI. |

### Request Status Callback

  
| Constant | Description |
| --- | --- |
| GMS\_UPDATE\_REQUIRED | Security Crypto Provider patching is not done as Google Play Services requires and update or is disabled on the device. |
| SECURITY\_PROVIDER\_UPDATE\_NOT\_POSSIBLE | Security Crypto Provider patching can not be done as Google Play Services is not available on the device or an unresolvable error was encountered during patching. |
| GMS\_UPDATE\_INPROGRESS | Security Crypto Provider patching is not done as an update to Google Play Services is being installed on the device. When the Google Play Services update is in progress, the dialog box is not displayed, and Security Crypto Provider patching is skipped in silent mode. |
| SECURITY\_PROVIDER\_UPDATE\_SUCCESS | Security Crypto Provider patching is successful. |
| GMS\_LIBRARY\_MISSING | Security Crypto Provider patching is not done as the GMS (Google Mobile Services/Google Play Services) Library is not bundled with the application (during the build process). To bundle the GMS Library with the app, follow the steps mentioned [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#security-provider-patching). |

### Hints StatusCodes

  
| Constant | Description |
| --- | --- |
| HINT\_RETRIEVAL\_SUCCESSFUL | Represents the successful retrieval of credentials from the hint. |
| HINT\_RETRIEVAL\_CANCELLED | Represents that the user has dismissed the hint picker dialog and the hint retrieval is in the canceled state. |
| NO\_HINTS\_AVAILABLE | Represents the state where no hints are available. For example, when no email account or phone number is associated with the device. |
| PLAYSERVICES\_AUTH\_LIBRARY\_MISSING | Returned when the required Google Play Services Library is not implemented. |
| GMS\_LIBRARY\_MISSING | Returned when the GMS (Google Mobile Services) library is not implemented. |
| GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE | Returned when the Google Play Services are missing. Use the GMSErrorCode key to retrieve the Native Error Code associated with the Google Play Services Error. |

Functions
---------

The voltmx.gms namespace provides the following functions:


<details close markdown="block"><summary>voltmx.gms.requestHint</summary> 

* * *

The requestHintAPI displays a list of email addresses and phone numbers that are registered with a device as hints to the user (based on the values of the hintTypes parameter). Users can then select and retrieve a hint from the available hints displayed in the list.

In situations where users need to fill input text fields with email address or phone number (such as in a Sign-in or Sign-up forms, or sms verification), this API helps users retrieve appropriate hint texts relevant to the input field. These user hints help speed up the on-boarding or verification process for an app.

<b>Syntax</b>

```

voltmx.gms.requestHint({  
"callback" : callback,  
"hintTypes" : \[voltmx.gms.HINT\_TYPE\_EMAIL,voltmx.gms.HINT\_TYPE\_PHONE\_NUMBER\],  
"showCancelButton" : false  
});
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| callback \[Function\] - Mandatory | A callback function that is executed after the API call is complete. This function contains a result info object with the following keys: **statusCode** - A [StatusCode](#hints-statuscodes) constant. **GMSErrorCode** - The error raised by the underlying Google Mobile Services. The value for this key is set only when the statusCode returned is `voltmx.gms.GOOGLE_PLAY_SERVICES_UNAVAILABLE`. **selectedHint**\- Contains the following information about the hint that is selected by the user. **id** - \[String\]: Typically, the id is an email address, user name, or phone number. The id may also be an encoded unique identifier for a federated identity account. > **_Note:_** Phone number identifiers are normalized to the E.164 standard. **userFullName** - \[String\]: The display name of the id, if available. Typically, the display name will be the name of the user or some other string that the user can easily recognize and distinguish from other accounts that they may have. **userFirstName** - \[String\]: First name of the user **userLastName** - \[String\]: Family name or surname of the user **profilePictureURI** - \[String\]: The URL to an image of the user, if available.
> **_Note:_** The value for this key is set only when the statusCode returned is `voltmx.gms.HINT_RETRIEVAL_SUCCESSFUL`. These values are available only when the native code returns it.

 |
| hintTypes - Mandatory | Specifies the types of the hint to be retrieved in an Array. The hint type must be specified using the following constants: **voltmx.gms.HINT\_TYPE\_EMAIL**: When hints must be requested for the email address field. **voltmx.gms.HINT\_TYPE\_PHONE\_NUMBER**: When hints must be requested for the phone number field. In a situation where the user might be indecisive about the type of field, both the constants can be passed in the form of an array to populate both email address and phone number hints. |
| showCancelButton - Optional | Specifies if a cancel button must be displayed for the hint dialog. By default, the value of this parameter is set to **true**. |

 

<b>Example</b>

```
signupForm1(){
    voltmx.gms.requestCredentialHints({
      "callback" : this.callback.bind(this),
       "hintTypes" : [voltmx.gms.HINT_TYPE_EMAIL,voltmx.gms.HINT_TYPE_PHONE_NUMBER],
      "showCancelButton" : false
      })
  }, 
  callback(info) {
        if (result.statusCode == voltmx.gms.HINT_RETRIEVAL_SUCCESSFUL) {
          this.view.tbEmail.text = info.selectedHint.id;
          this.view.tbUserName.text = info.selectedHint.userFullName;
          this.view.tbFirstName.text = info.selectedHint.userFirstName;
          this.view.tbLastName.text = info.selectedHint.userLastName;
          }
  }
```

<b>Return Value</b>

List of hints

<b>Remarks</b>

Ensure that you add the `supportGooglePlayAuthLib=true` entry in the **androidbuild.properties** file.

<b>Platform Availability</b>

Android
</details>

### Attestation API


<details close markdown="block"><summary>voltmx.gms.safetynet.attest</summary>

* * *

This API provides attestation results for the device.

An attestation result states whether the device on which the API is invoked matches the profile of a device that has passed the Android compatibility test.

When you request a compatibility check, you must provide a **nonce**, which is a random token generated in a cryptographically secure manner. You can obtain a nonce by generating it within your app, each time you make a compatibility check request. As a more secure option, you can obtain a nonce from your own server, using a secure connection.

A nonce used with an attestation request must be at least 16 bytes in length. After you make a request, the response includes your nonce, so that you can verify it against the one that you sent. Ensure that you use a nonce value once, for a single request. Use a different nonce for any subsequent attestation requests.

The result is returned through the success or failure callbacks.

<b>Syntax</b>

```

voltmx.gms.safetynet.attest(apikey, nonce, successCallback, failureCallback);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| apiKey \[String\] | An Android API key obtained from the Google developer console. |
| nonce \[String\] | A cryptographic nonce used for anti-replay and tracking of requests. |
| successCallback \[Function\] | The callback function that must be executed when communication with the service is successful. This callback is invoked with an argument in string format that is a cryptographically-signed attestation. This parameter does not indicate if the device has passed SafetyNet attestation. |
| failureCallback \[Function\] | The callback function that must be executed when the API call fails. The signature of the callback function is failureCallback(errorCode,errormessage), where the errorCode parameter is a [SafetyNetStatusCodes](https://developers.google.com/android/reference/com/google/android/gms/safetynet/SafetyNetStatusCodes) constant, and errorMessage parameter is a string containing the reason for the failure. |

 

<b>Example</b>

```
var uuid = voltmx.os.createUUID();  
var timestamp = new Date().getTime();  
var nonce = uuid + timestamp; // generating nonce at client. However generating at server is best practice.  
var apiKey = “google_api_key”; // check reference links to know how to get the API key.  
voltmx.gms.safetynet.attest(apiKey, nonce, successCallback, failureCallback);  
function successCallback(result){  
}  
function failureCallback(errorCode,errormessage){  
}

```

<b>Return Value</b>

None.

<b>Remarks</b>

None.

<b>Platform Availability</b>

*   Android
</details>
* * *

### Verify Apps API


<details close markdown="block"><summary>voltmx.gms.safetynet.isVerifyAppsEnabled</summary>

* * *

This API allows your app to determine whether the user has enrolled for the [Verify Apps](https://support.google.com/accounts/answer/2812853) feature.

The result is returned through the result callback.

<b>Syntax</b>

```

voltmx.gms.safetynet.isVerifyAppsEnabled(successCallback, failureCallback);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| successCallback \[Function\] | The callback function that must be executed after the execution of the API call is complete. The function contains information whether the Verify Apps feature is enabled or not. This callback is invoked with an argument in boolean format, where the value true means that this feature is enabled. If the value is false, the feature is not enabled. |
| failureCallback \[Function\] | The callback function that must be executed when the API call fails. The signature of the callback function is failureCallback(errorCode,errormessage), where the errorCode parameter is a [SafetyNetStatusCodes](https://developers.google.com/android/reference/com/google/android/gms/safetynet/SafetyNetStatusCodes) constant, and errorMessage parameter is a string containing the reason for the failure. |

 

<b>Example</b>

```
function isVerifyAppsEnabled() {  
    voltmx.gms.safetynet.isVerifyAppsEnabled(successCallback, failureCallback);  
}  
function successCallback(result) {  
    alert("isVerifyAppsEnabled API result is " + result); // Perform the appropriate action based on the result.  
}  
function failureCallback(errorCode, errorMessage) {  
alert("isVerifyAppsEnabled API failed with errorCode" + errorCode + " and errorMessage " + errorMessage);  
}

```

<b>Return Values</b>

None.

<b>Remarks</b>

None.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.gms.safetynet.enableVerifyApps</summary>

* * *

The API allows your app to invoke a dialog box requesting that the user enable the [Verify Apps](https://support.google.com/accounts/answer/2812853) feature.

The result is returned through the result callback.

<b>Syntax</b>

```

voltmx.gms.safetynet.enableVerifyApps(successCallback, failureCallback);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| successCallback \[Function\] | The callback function that must be executed after the execution of the API call is complete. The function contains information about all the actions that the user has performed related to the Verify Apps feature, including whether they have given consent to enable it. This callback is invoked with an argument in boolean format, where the value true means that this feature is enabled. If the value is false, the feature is not enabled. |
| failureCallback \[Function\] | The callback function that must be executed when the API call fails. The signature of the callback function is failureCallback(errorCode,errormessage), where the errorCode parameter is a [SafetyNetStatusCodes](https://developers.google.com/android/reference/com/google/android/gms/safetynet/SafetyNetStatusCodes) constant, and errorMessage parameter is a string containing the reason for the failure. |

 

<b>Example</b>

```
voltmx.gms.safetynet.enableVerifyApps(successCallback, failureCallback);  
function successCallback (result) {  
    alert("enableVerifyApps API result is " + result); // Perform the appropriate action based on the result.  
}  
function failureCallback(errorCode, errorMessage) {
alert(" enableVerifyApps API failed with errorCode " + errorCode + " and errorMessage " + errorMessage);  
}
```

<b>Return Values</b>

None.

<b>Remarks</b>

None.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.gms.safetynet.listHarmfulApps</summary>

* * *

This API identifies a list of installed apps that are known to be potentially harmful to the device. The list includes categories for the identified apps so that your app can take appropriate action.

The result is returned through the success or failure callbacks.

<b>Syntax</b>

```

voltmx.gms.safetynet.listHarmfulApps(successCallback, failureCallback);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| successCallback \[Function\] | The callback function that must be executed when the API call is successful. The signature of the callback function is successCallback(resultInfo), where, **resultInfo** contains an array of jsobjects, where each jsobject contains the following information: **apkCategory** \[String\]: Message about the potentially harmful app category defined in [VerifyAppsConstants](https://developers.google.com/android/reference/com/google/android/gms/safetynet/VerifyAppsConstants). **apkPackageName** \[String\]: The package name of the potentially harmful app. **apkSha256** \[String\]: The SHA-256 of the potentially harmful APK file. |
| failureCallback \[Function\] | The callback function that must be executed when the API call fails. The signature of the callback function is failureCallback(errorCode,errormessage), where the errorCode parameter is a [SafetyNetStatusCodes](https://developers.google.com/android/reference/com/google/android/gms/safetynet/SafetyNetStatusCodes) constant, and errorMessage parameter is a string containing the reason for the failure. |

 

<b>Example</b>

```
voltmx.gms.safetynet.listHarmfulApps(successCallback, failureCallback);  
function successCallback(result) {  
    var apps = "";  
    if (result != null) {  
        for (var index in result) {  
            apps = apps + "\n\nApp Details\n";  
            apps = apps + "apkPackageName " + result[index].apkPackageName + "\n";  
            apps = apps + "apkSha256 " + result[index].apkSha256 + "\n";  
            apps = apps + "apkCategoryMessage " + result[index].apkCategory;  
        }  
    }  
    if (apps === "") {  
        alert("no harmful apps found in the device");  
    } else {  
       alert("harmful apps found in the device \n" + apps); // do Appropritate action based on the result.  
    }  
}  
function failureCallback(errorCode, errorMessage) {  
alert("listHarmfulApps API failed with errorCode " + errorCode + " and errorMessage " + errorMessage);
}

```

<b>Return Values</b>

None.

<b>Remarks</b>

None.

<b>Platform Availability</b>

*   Android
</details>
* * *

### Security Provider APIs

> **_Note:_** Ensure that you include the GMS base library dependency in the app by adding the `supportGooglePlayBaseLib = true` entry in the androidbuild.properties file of the project. If you do not add this dependency, the security provider APIs return the `GMS_LIBARAY_MISSING` constant in the request callback.


<details close markdown="block"><summary>voltmx.gms.getSecurityProvidersList</summary> 

* * *

The getSecurityProvidersList API returns a list of names all the providers that were installed during the life cycle of the app. In the list that is returned, the precedence order of the providers is preserved such that the first entry in the list is the default provider.

In case of successful provider patching, the first entry in the list must include a new provider from the GMS, GmsCore\_OpenSSL.

<b>Syntax</b>

```

voltmx.gms.getSecurityProvidersList();
```

<b>Input Parameters</b>

None

 

<b>Example</b>

```
var providerList = voltmx.gms.getSecurityProvidersList();  
voltmx.print("array values ::" + providerList);  
if (providerList.includes("GmsCore_OpenSSL")) {  
    voltmx.print("PROVIDER UPDATED");  
} else {  
    voltmx.print(" PROVIDER UPDATE required");  
}
```

<b>Return Value</b>

List of provider names

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.installSecurityProvider</summary> 

* * *

The installSecurityProvider API tries to install the security provider from Google Play Services into the application's process synchronously, and sets the provider as the default security provider.

If the value of the `showUpdateDialog` parameter is set to **true**, an appropriate Google Play Services Update or Error Resolution dialog box is displayed to the user, if required (when the value of the `statusCode` is set to GMS\_UPDATE\_REQUIRED). When the user performs an action in the dialog box, the updateDialogListener callback is triggered with the appropriate statusCode value (from the [Dialog Status Callback Constants](#dialog-status-callback)).

Even if the user selects **Accept** in the Google Play Services Update or Error Resolution dialog box (with the status code GMS\_REQUEST\_ACCEPTED), it does not imply that the installation of the security provider is successful. Users must download (or update to) the latest version of Google Play Services from the Google Play Store, and then invoke this API to install the security provider in the application process.

<b>Syntax</b>

```

voltmx.gms.installSecurityProvider(requestConfig);
```

<b>Input Parameters</b>

**requestConfig** - A mandatory parameter that is a JSON Object and contains the following fields.

  
| Parameter | Description |
| --- | --- |
| showUpdateDialog \[Boolean\] - Optional | Set the value of this parameter to **true** to automatically display the Google Play Services update or Error Resolution dialog box. If you invoke this API when the app is running in the background (or there is no UI), the dialog box does not appear. The default value of this parameter is **false**. |
| statusCallback \[Function\] - Mandatory | A callback function that provides the status of the provider update. The statusCallback function is a JSON Object that has the following keys: **statusCode**: A constant that specifies the status of installation, either success or failure. For the list of possible constants, refer [Request Status Callback Constants](#request-status-callback). **gmsErrorCode**: The error code returned by native GMS library. This parameter is set when the [statusCode](#statusCode) is set to `GMS_UPDATE_REQUIRED`. **showUpdateDialog**: The value of the [showUpdateDialog](#showUpdateDialog) parameter that is passed when the API is invoked. This information helps in deciding if a GMS Update or Error resolution dialog box is already displayed when the [statusCode](#statusCode) is set to `GMS_UPDATE_REQUIRED`. |
| updateDialogListener \[Function\] - Optional | A callback function that provides the status of the user action on the Google Play Services update or Error Resolution dialog box. The updateDialogListener function is a JSON Object that has the following keys: **statusCode**: A constant that specifies the status of the user action. For the list of possible constants, refer [Request Status Callback Constants](#request-status-callback). **gmsErrorCode**: The error code returned by native GMS library that is used to display the GMS Update or Error Resolution dialog box. This parameter is set when the [statusCode](#statusCode1) is set to `GMS_UPDATE_REQUEST_CANCELLED` or `GMS_UPDATE_REQUEST_NOT_SHOWN`. |

 

<b>Example</b>

```
function providersync() {
    var updateRequestParms = {
        "showUpdateDialog": true,
        "updateDialogListener": requestDialogCallback,
        "statusCallback": statusCallback
    }
    voltmx.gms.installSecurityProvider(updateRequestParms);

}
function statusCallback(status) {
    var statusCode = status.statusCode;
    var gmsCode = status.gmsErrorCode;
    var updateDialogListener = status.showUpdateDialog;
    voltmx.print("statusCode :" + statusCode);
    voltmx.print("gmsCode :" + gmsCode);
    voltmx.print("updateDialogListener requested :" + updateDialogListener);
    if (statusCode == voltmx.gms.SECURITY_PROVIDER_UPDATE_SUCCESS) {
        isUpdated = true;
        voltmx.print("update successful");
    } else if (statusCode == voltmx.gms.GMS_UPDATE_REQUIRED) {
        voltmx.print("update required");
    } else if (statusCode == voltmx.gms.GMS_UPDATE_IN_PROGRESS) {
        voltmx.print("update in progress");
    }
}
function requestDialogCallback(status) {
    var statusCode = status.statusCode;
    voltmx.print("statusCode :" + statusCode);
    if (statusCode == voltmx.gms.GMS_REQUEST_ACCEPTED) {
        voltmx.print("update request accepted ");
    } else if (statusCode == voltmx.gms.GMS_REQUEST_CANCELLED) {
        voltmx.print("update request cancelled");
    }
}

```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.installSecurityProviderAsync</summary> 

* * *

The installSecurityProviderAsync API tries to install the security provider from Google Play Services into the application's process asynchronously, by replacing the current security provider.

<b>Syntax</b>

```

voltmx.gms.installSecurityProviderAsync(requestConfig);
```

<b>Input Parameters</b>

**requestConfig** - A mandatory parameter that is a JSON Object and contains the following fields.

  
| Parameter | Description |
| --- | --- |
| showUpdateDialog \[Boolean\] - Optional | Displays the status of the Google Play Services update. Set the value of this parameter to **true** to automatically display the Google Play Services update or Error Resolution dialog box. The default value of this parameter is **false**. |
| statusCallback \[Function\] - Mandatory | A callback function that provides the status of the provider update. The statusCallback function is a JSON Object that has the following keys: **statusCode**: A constant that specifies the status of installation, either success or failure. For the list of possible constants, refer [Request Status Callback Constants](#request-status-callback). **gmsErrorCode**: The error code returned by native GMS library. This parameter is set when the [statusCode](#statusCode) is set to `GMS_UPDATE_REQUIRED`. **showUpdateDialog**: The value of the [showUpdateDialog](#showUpdateDialog) parameter that is passed when the API is invoked. This information helps in deciding if a GMS Update or Error resolution dialog box is already displayed when the [statusCode](#statusCode) is set to `GMS_UPDATE_REQUIRED`. |
| updateDialogListener \[Function\] - Optional | A callback function that provides the status of the user action on the Google Play Services update or Error Resolution dialog box. The updateDialogListener function is a JSON Object that has the following keys: **statusCode**: A constant that specifies the status of the user action. For the list of possible constants, refer [Request Status Callback Constants](#request-status-callback). **gmsErrorCode**: The error code returned by native GMS library that is used to display the GMS Update or Error Resolution dialog box. This parameter is set when the [statusCode](#statusCode1) is set to `GMS_UPDATE_REQUEST_CANCELLED` or `GMS_UPDATE_REQUEST_NOT_SHOWN`. |

 

<b>Example</b>

```
function providerAsync() {
    var updateRequestParms = {
        "showUpdateDialog": true,
        "updateDialogListener": requestDialogCallbackAsync,
        "statusCallback": statusCallbackAsync
    }
    voltmx.gms.installSecurityProviderAsync(updateRequestParms);
}
function statusCallbackAsync(status) {
    var statusCode = status.statusCode;
    var gmsCode = status.gmsErrorCode;
    var updateDialogListener = status.showUpdateDialog;
    voltmx.print("statusCode :" + statusCode);
    voltmx.print("gmsCode :" + gmsCode);
    voltmx.print("updateDialogListener requested :" + updateDialogListener);
    if (statusCode == voltmx.gms.SECURITY_PROVIDER_UPDATE_SUCCESS) {
        isUpdated = true;
        voltmx.print("update successful");
    } else if (statusCode == voltmx.gms.GMS_UPDATE_REQUIRED) {
        voltmx.print("update required");
    } else if (statusCode == voltmx.gms.GMS_UPDATE_IN_PROGRESS) {
        voltmx.print("update in progress");
    }
}
function requestDialogCallbackAsync(status) {
    var statusCode = status.statusCode;
    voltmx.print("statusCode :" + statusCode);
    if (statusCode == voltmx.gms.GMS_REQUEST_ACCEPTED) {
        voltmx.print("update request accepted ");
    } else if (statusCode == voltmx.gms.GMS_REQUEST_CANCELLED) {
        voltmx.print("update request cancelled");
    }
}
```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android
</details>

#### Error Codes

  
| Code | Description |
| --- | --- |
| 100 | The number of parameters is invalid. |
| 101 | The parameter type is invalid. |

### Google Play Services Update and Error Handling APIs

> **_Note:_** Before you use these APIs, ensure that you add the `com.google.android.gms:play-services-base` entry in the build.gradle file of the project. You can use the voltmx.gms.isBaseLibraryAvailable API to check if the entry is already available in the build.gradle file.


<details close markdown="block"><summary>voltmx.gms.getStatusString</summary> 

* * *

The getStatusString API returns the statusCode (that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API) in a human-readable string format.

The string that is returned can be used to display customized notifications (by using the voltmx.gms.showCustomErrorNotification) and custom dialogs boxes (by using the voltmx.gms.raiseGooglePlayErrorResolutionIntent).

<b>Syntax</b>

```

voltmx.gms.getStatusString(statusCode);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| statusCode \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |

 

<b>Example</b>

```
function checkGMSAvailabiltity() {
    var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    //This check is to ensure googleplayservices is available and uptodate in device.
    if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
        // call any google api which needs above prior checkings..
    } else {
        if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
            var errorString = voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus);
            // this errorString can be used in showing custom notification or dialogs.
        } else {
            voltmx.print("google play services are not available in device");
        }
    }
}
```

<b>Return Value</b>

String

A message that describes the statusCode that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API in a readable format.

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.isBaseLibraryAvailable</summary> 

* * *

The isBaseLibraryAvailable API checks if the base client library is integrated with the application.

<b>Syntax</b>

```

voltmx.gms.isBaseLibraryAvailable();
```

<b>Input Parameters</b>

None

 

<b>Example</b>

```
var isBaseLibAvailable = voltmx.gms.isBaseLibraryAvailable();
if (isBaseLibAvailable) // This check is to ensure google play base client library is available
{

    var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    // Based on this googlePlayServicesAvailabilityStatus, user may proceed with gms feature 
    api calling or call resolution api to make google play services available.

} else {
    voltmx.print("Base Client Library is not integrated with the application");
}
```

<b>Return Value</b>

Boolean

The API returns true if the base library is integrated with the app. If the base library is not integrated, the API returns false.

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.isGooglePlayServicesAvailable</summary> 

* * *

The isGooglePlayServicesAvailable API checks if Google Play Services is installed and enabled on the device. The API also checks if the version of Google Play Services that is installed is not older than the one that is required for the app (based on the value of the minApkVersion parameter). If the value of the minApkVersion parameter is not valid, the voltmx.gms.isGooglePlayServicesAvailable API gets invoked without an argument.

<b>Syntax</b>

```

voltmx.gms.isGooglePlayServicesAvailable();  
or  
voltmx.gms.isGooglePlayServicesAvailable(minApkVersion);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| minApkVersion \[Number\] | The version of the Google Play Services library that is declared in the android:versionCode attribute of the AndroidManifest.xml. |

 

<b>Example</b>

```
var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();

//This check is to ensure googleplayservices is available and uptodate in device.
if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
    // call any google api which needs above prior checkings..
} else {
    // proceed with resolution api
}
```

<b>Example 2</b> 

```
var versionCode = 203965037; // google play services apk version code
var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable(versionCode);

//This check is to ensure googleplayservices is available and uptodate in device.
if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
    // call any google api which needs above prior checkings..
} else {
    // proceed with resolution api
}
```

<b>Return Value</b>

Number

This API returns the status code that indicates whether there was an error. The API can return any of the following values of the [ConnectionResult](https://developers.google.com/android/reference/com/google/android/gms/common/ConnectionResult) class:

*   SUCCESS
*   SERVICE\_MISSING
*   SERVICE\_UPDATING
*   SERVICE\_VERSION\_UPDATE\_REQUIRED
*   SERVICE\_DISABLED
*   SERVICE\_INVALID

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.isUserResolvableError</summary> 

* * *

The isUserResolvableError API determines whether an error can be resolved through a user action such as, on a dialog box or a notification.

<b>Syntax</b>

```

voltmx.gms.isUserResolvableError(statusCode);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| statusCode \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |

 

<b>Example</b>

```
var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();

//This check is to ensure googleplayservices is available and uptodate in device.
if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
    // call any google api which needs above prior checkings..
} else {
    if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
        // call resolution api
    } else {
        voltmx.print("google play services are not available in device");
    }
}
```

<b>Return Value</b>

Boolean

The API returns true if the error can be resolved by using the Resolution APIs (such as voltmx.gms.showResolutionDialog, voltmx.gms.showErrorNotification, and so on). If the error cannot be resolved, the API returns false.

If the API returns true, you can invoke the voltmx.gms.showResolutionDialog API to display a dialog box.

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.makeGooglePlayServicesAvailable</summary> 

* * *

The makeGooglePlayServicesAvailable API displays a dialog box to address any errors based on the value of the statusCode parameter.

The dialog box displays a localized message about the error, and upon confirmation from the user (by tapping on the dialog box) directs them to the Google Play Store if the Google Play Services is out of date or missing. Users are directed to the system settings if Google Play Services is disabled on the device.

This API attempts to make Google Play Services available on the device. If Google Play Services is already available on the device, the resultCallback may be triggered immediately.

If it is necessary to display a UI to complete this request, (for example, while directing the user to the Google Play Store) the Volt MX Main Activity must be used to display the UI.

> **_Note:_** You must not invoke this API when the app is running in the background.

<b>Syntax</b>

```

voltmx.gms.makeGooglePlayServicesAvailable(resulCallback);
```

<b>Input Parameters</b>

**resultCallback \[Function\]**: A callback function that is executed when a user actions performed and the API call is complete. The resultCallback function is a JSON Object that has the following keys:

  
| Parameter | Description |
| --- | --- |
| **statusCode** \[Number\] | A statusCode constant. This parameter can have the following values:voltmx.gms.RESOLUTION\_DIALOG\_ACCEPTED: The statusCode returned when the API is successfully executed, and the user navigates away from the error screen.voltmx.gms.RESOLUTION\_DIALOG\_FAILED: The statusCode returned when the invocation of the API fails due to invalid statusCodes.voltmx.gms.GMS\_LIBRARY\_MISSING: The statusCode returned when the GMS library is not linked to the app.voltmx.gms.API\_NOT\_SUPPORTED\_IN\_BACKGROUND: The statusCode returned when the app is running in the background, and the API is invoked. |
| **requestCode** \[Number\] | The mapping of the responses that occur when the same result callback is used for multiple requests. |
| **resultCode** \[Number\] | A value that is provided by the system based on the user action that is performed. |
| **statusMessage** \[String\] | This message to be displayed if the invocation of the API fails. |

 

<b>Example</b>

```
function makeGMSAvailabile() {
    //This check is to ensure googleplayservices is available and uptodate in device.
    voltmx.gms.makeGooglePlayServicesAvailable(resulCallback)
}

function resulCallback(result) {
    if (result.statusCode == voltmx.gms.MAKE_RESOLUTION_CALL_SUCCESS) {
        var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
        // Cross checking if resolution is done
        if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
            // call any google api which needs above prior checkings..
        }
    }
}
```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.raiseGooglePlayErrorResolutionIntent</summary> 

* * *

The raiseGooglePlayErrorResolutionIntent API is used to address the statusCode that is returned from [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) if it can be resolved by the user.

When a user taps the notification, they are directed to the Google Play Store if the Google Play Services is out of date or missing. Users are directed to the system settings if Google Play Services is disabled on the device

This API has been introduced to handle background tasks that cannot (or must not) display dialog boxes.

If it is necessary to display a UI to complete this request, (for example, while directing the user to the Google Play Store) the Volt MX Main Activity must be used to display the UI.

Developers can use this API to display a user-defined UI instead of the system dialogs that appears when the with voltmx.gms.showResolutionDialog API is triggered.

This api is not allowed in app background state.

<b>Syntax</b>

```

voltmx.gms.raiseGooglePlayErrorResolutionIntent(statusCode, requestCode, resultCallback);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| statusCode \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |
| requestCode \[Number\] | The mapping of the responses that occur when the same result callback is used for multiple requests. |
| resultCallback \[Function\] | A callback function that is executed when a user actions performed and the API call is complete. The resultCallback function is a JSON Object that has the following keys: **statusCode** \[Number\]: A statusCode constant. This parameter can have the following values:voltmx.gms.RAISE\_INTENT\_SUCCESS: The statusCode returned when the API is successfully executed, and the user navigates away from the error screen.voltmx.gms.RAISE\_INTENT\_FAILED: The statusCode returned when the invocation of the API fails due to invalid statusCodes.voltmx.gms.GMS\_LIBRARY\_MISSING: The statusCode returned when the GMS library is not linked to the app.voltmx.gms.API\_NOT\_SUPPORTED\_IN\_BACKGROUND: The statusCode returned when the app is running in the background, and the API is invoked. **requestCode** \[Number\]: The value of the [requestCode](#requestCode) parameter that is passed during the invocation of the API. **resultCode** \[Number\]: A value that is provided by the system based on the user action that is performed. **statusMessage** \[String\]: This message to be displayed if the invocation of the API fails. |

 

<b>Example</b>

```
function checkGMSAvailabiltity() {
    googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    //This check is to ensure googleplayservices is available and uptodate in device.
    if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
        // call any google api which needs above prior checkings..
    } else {
        if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
            var errorString = voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus);
            // this errorString can be used in showing custom notification or dialogs.
            // Assume u have code for custom dialog(i.e customPopup) with button named "Take Action". 
            This button has onclick callback event named "onActionClick".
            customPopup.isVisible = true;
        } else {
            voltmx.print("google play services are not available in device");
        }
    }
}

function onActionClick() {
    customPopup.isVisible = false;
    voltmx.gms.raiseGooglePlayErrorResolutionIntent(googlePlayServicesAvailabilityStatus, requestCode, resultCallback)
}

function resulCallback(result) {
    if (result.statusCode == voltmx.gms.voltmx.gms.RAISE_INTENT_SUCCESS) {
        checkGMSAvailabiltity();
        / / / Cross checking
        if resolution is done and proceed with api calls.
    }
}
```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.showCustomErrorNotification</summary> 

* * *

The showCustomErrorNotification API displays a customized notification to address the statusCode that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API, if it can be resolved by the user.

When a user taps the notification, they are directed to the Google Play Store if the Google Play Services is out of date or missing. Users are directed to the system settings if Google Play Services is disabled on the device

This API has been introduced to handle background tasks that cannot (or must not) display dialog boxes.

<b>Syntax</b>

```

voltmx.gms.showCustomErrorNotification(statusCode, channelId, notificationId, priority, title, text);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| **statusCode** \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |
| **channelId** \[Number\] | A unique ID that must be set for a channel. The channelId must be unique for each pakage. |
| **notificationId** \[Number\] | A unique identifier for a notification in the app. |
| **priority \[Number\]** | The priority for the notification. |
| **title \[String\]** | The text to be displayed in the first line or heading of the notification. |
| **text \[String\]** | The text to be displayed in the second line of the notification. |

 

<b>Example</b>

```
function checkGMSAvailabiltity() {
    var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    //This check is to ensure googleplayservices is available and uptodate in device.
    if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
        // call any google api which needs above prior checkings..
    } else {
        if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
            var errorString = voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus);
            // this errorString can be used in showing custom notification or dialogs.
            var isCallSuccesful = voltmx.gms.showCustomErrorNotification(googlePlayServicesAvailabilityStatus, channedId, notificationId, priority, errorString, text)
            if (isCallSuccesful) {}
        } else {
            voltmx.print("google play services are not available in device");
        }
    }
}
```

<b>Return Value</b>

Boolean

The API returns true if the API is successfully invoked. The API returns false if the invocation of the API fails.

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.showErrorNotification</summary> 

* * *

The showErrorNotification API displays a system notification to address the statusCode that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API, if it can be resolved by the user.

When a user taps the notification, they are directed to the Google Play Store if the Google Play Services is out of date or missing. Users are directed to the system settings if Google Play Services is disabled on the device

This API has been introduced to handle background tasks that cannot (or must not) display dialog boxes.

<b>Syntax</b>

```

voltmx.gms.showErrorNotification(statusCode);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| statusCode \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |

 

<b>Example</b>

```
function checkGMSAvailabiltity() {
    var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    //This check is to ensure googleplayservices is available and uptodate in device.
    if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
        // call any google api which needs above prior checkings..
    } else {
        if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
            var isCallSuccesful = voltmx.gms.showErrorNotification(googlePlayServicesAvailabilityStatus);
            if (isCallSuccesful) {}
        } else {
            voltmx.print("google play services are not available in device");
        }
    }
}
```

<b>Return Value</b>

Boolean

The API returns true if the API is successfully invoked. The API returns false if the invocation of the API fails.

<b>Platform Availability</b>

Android

</details>
<details close markdown="block"><summary>voltmx.gms.showResolutionDialog</summary> 

* * *

The showResolutionDialog API displays a dialog box to address any errors based on the value of the statusCode parameter.

The dialog box displays a localized message about the error, and upon confirmation from the user (by tapping on the dialog box) directs them to the Google Play Store if the Google Play Services is out of date or missing. Users are directed to the system settings if Google Play Services is disabled on the device.

<b>Syntax</b>

voltmx.gms.showResolutionDialog(statusCode, requestCode, resultCallback);

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| statusCode \[Number\] | The statusCode value that is returned by the [voltmx.gms.isGooglePlayServicesAvailable](#isGooglePlayServicesAvailable) API. |
| requestCode \[Number\] | The mapping of the responses that occur when the same result callback is used for multiple requests. |
| resultCallback \[Function\] | A callback function that is executed when a user actions performed and the API call is complete. The resultCallback function is a JSON Object that has the following keys: **statusCode** \[Number\]: A statusCode constant. This parameter can have the following values:voltmx.gms.RESOLUTION\_DIALOG\_ACCEPTED: The statusCode returned when the API is successfully executed, and the user navigates away from the error screen.voltmx.gms.RESOLUTION\_DIALOG\_CANCELLED: The statusCode returned when the dialog box is dismissed by the user.voltmx.gms.RESOLUTION\_DIALOG\_FAILED: The statusCode returned when the invocation of the API fails due to invalid statusCodes.voltmx.gms.GMS\_LIBRARY\_MISSING: The statusCode returned when the GMS library is not linked to the app.voltmx.gms.API\_NOT\_SUPPORTED\_IN\_BACKGROUND: The statusCode returned when the app is running in the background, and the API is invoked. **requestCode** \[Number\]: The value of the [requestCode](#requestCode) parameter that is passed during the invocation of the API. **resultCode** \[Number\]: A value that is provided by the system based on the user action that is performed. |

 

<b>Example</b>

```
function checkGMSAvailabiltity() {
    var googlePlayServicesAvailabilityStatus = voltmx.gms.isGooglePlayServicesAvailable();
    //This check is to ensure googleplayservices is available and uptodate in device.
    if (voltmx.gms.getStatusString(googlePlayServicesAvailabilityStatus) == "SUCCESS") {
        // call any google api which needs above prior checkings..
    } else {
        if (voltmx.gms.isUserResolvableError(googlePlayServicesAvailabilityStatus)) {
            var requestCode = 101;
            voltmx.gms.showResolutionDialog(googlePlayServicesAvailabilityStatus, requestCode, resulCallback)
        } else {
            voltmx.print("google play services are not available in device");
        }
    }
}

function resulCallback() {
    if (result.statusCode == voltmx.gms.voltmx.gms.RESOLUTION_DIALOG_ACCEPTED) {
        checkGMSAvailabiltity();
        / / / Cross checking
        if resolution is done and proceed with api calls.
    }
}
```

<b>Return Value</b>

None

<b>Platform Availability</b>

Android

</details>

![](resources/prettify/onload.png)
