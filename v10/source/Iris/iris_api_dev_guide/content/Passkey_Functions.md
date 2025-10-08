# Passkey Functions



## Passkey functions in voltmx.credentialmanager Namespace

| Passkey API | Description| 
| ------------- |-------------|
| [voltmx.os.hasPasskeySupport](#pks)   | Check if the current device supports passkeys. |
| [voltmx.credentialmanager.createPasskeyRegistrationRequest](#pks1)   | Registers a passkey on the device during user registration.<br>```Note: Attestation Options request should be sent as part of params. Attestation Results are returned as part of success callback.```|
| [voltmx.credentialmanager.createPasskeySigninRequest](#pks2)   | Uses a passkey on the device during user SignIn.<br>```Note: Assertion Options request should be sent as part of params. Assertion Results are returned as part of success callback.```|
| [voltmx.credentialmanager.registerPasskey](#pks3)   | Registers a passkey on the device during user registration.<br>```Note: Network calls to Relying-Party for Attestation Options or Attestation Results are handled by this API.```|
| [voltmx.credentialmanager.signinWithPasskey](#pks4)   | Uses a passkey on the device during user SignIn.<br>```Note: Network calls to Relying-Party for Assertion Options or Assertion Results are handled by this API.```|

VoltMX provides two categories of APIs to support **Passkey-based authentication** workflows:

## Requests Passkey APIs

These APIs help construct the necessary Passkey request payloads. The network operations (e.g., attestation and assertion exchanges with the Relying Party) are handled by VoltMX IRIS developers.

#### APIs

* [voltmx.credentialmanager.createPasskeyRegistrationRequest](#pks1)
* [voltmx.credentialmanager.createPasskeySigninRequest](#pks2)

#### Remarks

* IRIS developers make the network calls to the Relying Party.
* The **Attestation/Assertion Options** response is sent to the on-device Credential Manager.
* After the credential is created or asserted, the **Attestation/Assertion Result** is returned to IRIS for submission to the Relying Party.

## End-to-End Passkey APIs


These APIs abstract the full Passkey flow, including all related network operations. The Credential Manager framework handles both the construction and submission of the Passkey requests.

#### APIs

* [voltmx.credentialmanager.registerPasskey](#pks3)
* [voltmx.credentialmanager.signinWithPasskey](#pks4)

#### Remarks

* IRIS developers provide the required configuration and endpoint information.
* The framework makes the necessary network calls to the Relying Party.
* The final **result** (success/failure and credential data) is returned to IRIS for application handling.

>**Note**: Currently in iOS, attestation/assertion results from native Authentication Manager returns raw data. We construct the js object as per WebAuthn specification. In the End-to-End flow, we send this object to the Relying-Party. In Requests flow, we return this object to callback.

#### Passkey Functions


<details close markdown="block"><summary id="pks">voltmx.os.hasPasskeySupport</summary>


This checks if passkey is supported on the device or not

#### Syntax

voltmx.os.hasPasskeySupport( )

#### Input parameters

None

#### Return Values

Boolean – True, if Passkey is supported. False, if not.

#### Example

```
function checkPasskeySupport() {
    
    let isSupported = voltmx.os.hasPasskeySupport();
    
    if (isSupported) {
        // Call Passkey related APIs
    } else {
        alert("Passkeys are not supported on this device.");
    }
}
```
#### Example in SPA

```
function checkPasskeySupport() {
  voltmx.os.hasPasskeySupport().then(supported => {
        alert("Supports Passkey:" + "\n" + supported);
    }).catch(error => {
        alert("Passkey not supported!");
    });
}
```

#### Platform Availability

iOS, Android, SPA

</details>

<details close markdown="block"><summary id="pks1">voltmx.credentialmanager.createPasskeyRegistrationRequest</summary>


This method accepts a Attestation Options Response from a Relying-Party and creates a passkey on device. On success, Attestation Result from on-device credential manager will be sent back to success callback.

#### Syntax

voltmx.credentialmanager.createPasskeyRegistrationRequest(response attestationOptionsResponse, success callback, failure callback)

#### Input Parameters



| Parameter  | Description |
| ------------- |-------------|
| attestationOptionsResponse| Mandatory.<br>This is received from the Relying-Party. This is passed to Credential Manager| 
| successCallback | Mandatory |
| failureCallback  | Mandatory|

**Return Values:**

None

**Example:**

```
let jsonBody = {
        "userName": username,
        "displayName": "Pawskey Request User",
        "authenticatorSelection": {}
    };


// get AttestationOptions response from Relying-Party 
var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, fetchAttestationOptionsURL);
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Accept", "application/json");
    httpclient.onReadyStateChange = getRegistrationChallengeCallback;
    httpclient.send(jsonBody);


function getRegistrationChallengeCallback(res) {
    if (res.readyState == 4) {
       var attestationOptionsResponse = res.response;
       // make createPasskeyRegistrationRequest call
voltmx.credentialmanager.createPasskeyRegistrationRequest(attestationOptionsResponse, successCallback, failureCallback);
}
}

```

**Remarks:**

* Get attestationOptionsResponse from Relying-Party. 

#### Platform Availability

* iOS, Android, SPA

</details>


<details close markdown="block"><summary id="pks2">voltmx.credentialmanager.createPasskeySigninRequest</summary>


This method accepts a Assertion Options Response from a Relying-Party and uses a passkey on device for sign in validation. On success, Assertion Result from on-device credential manager will be sent back to success callback.

#### Syntax

voltmx.credentialmanager.createPasskeySigninRequest(response assertionOptionsResponse, success callback, failure callback)

#### Input Parameters


| Parameter   | Description |
| ------------- |-------------|
| assertionOptionsResponse| Mandatory.<br>This is received from the Relying-Party. This is passed to Credential Manager.| Mandatory| 
| successCallback | Mandatory |
| failureCallback  | Mandatory| 
| autofill  | Optional (only Android/SPA).<br>Type – BOOL Optional 4th argument. Send true for the credential manager to consider it as an autofill sign in request. |
| autofillWidget  | Optional (only Android).<br>Type - TextBox Widget|  


**Return Values:**

None

**Remarks:**

To enable autofill on Android, setting the `"autofill"` option to true is required. In addition, you must also provide the `"autofillWidget"` parameter. Currently, only the TextBox widget is supported, so you should pass the relevant TextBox widget object as the value.

**Example:**

```


let jsonBody = {
        "userName": username,
        "displayName": "Passkey Request User"
    };


// get AssertionOptions response from Relying-Party 
var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, fetchAssertionOptionsURL);
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Accept", "application/json");
    httpclient.onReadyStateChange = getSigninChallengeCallback;
    httpclient.send(jsonBody);


function getSigninChallengeCallback(res) {
    if (res.readyState == 4) {
        var assertionOptionsResponse = res.response;
 // make createPasskeySigninRequest call
voltmx.credentialmanager.createPasskeySigninRequest(assertionOptionsResponse, successCallback, failureCallback);
    }
}

```

#### Example with Autofill

```
// Add optional 4th Parameter true. This an AutoFill request
voltmx.credentialmanager.createPasskeySigninRequest(assertionOptionsResponse, successCallback, failureCallback, true);


// For Android we have to pass additional parameters (“autofillWidget”)
voltmx.credentialmanager.createPasskeySigninRequest(assertionOptionsResponse, successCallback, failureCallback, true, LoginForm.usernameTextBox);


```

**Remarks:**

* Get assertionOptionsResponse from Relying-Party. 

#### Platform Availability

* iOS, Android, SPA

</details>


<details close markdown="block"><summary id="pks3">voltmx.credentialmanager.registerPasskey</summary>


This method accepts a Passkey registration object and will make the necessary calls for creating passkey on device. Server response from the AttestationResults response will be sent back to callback.

**Syntax:**

`voltmx.credentialmanager.registerPasskey(passkeyRegistrationObject)`

#### Input Parameters

passkeyRegistrationObject:

A JSON object containing a key-value pair. 

| Key   | Description |
| ------------- |-------------|
| attestationOptions  | Mandatory.<br> url, headers, body are mandatory |
| attestationResults| Mandatory.<br>url, headers are mandatory. AttestationOptionsResponse will be the body for attestationResults. This is handled by framework.|
| onSuccess| Mandatory|
| onFailure| Mandatory|

**Remarks:**

* The body for attestationResults is received from Credential Manager. This is attached in the request and sent to the relying-party. This is automatically done from the framework side. 

**Return Values:**

None

**Example:**

```
var passkeyRegistrationObject = {
        "attestationOptions": {
            "url": fetchAttestationOptionsURL,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": {
                "userName": username,
                "displayName": "Passkey End2End User",
                "attestation": "direct",
                "authenticatorSelection": {
                    "userVerification": "preferred"
                }
            }
        },
        "attestationResults": {
            "url": sendAttestationResultsURL,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        },
        "onSuccess": registrationSuccessCallback,
        "onFailure": registartionFailureCallback
    };


// make registerPasskey call with passkeyRegistrationObject
voltmx.credentialmanager.registerPasskey(passkeyRegistrationObject);

```

#### Platform Availability

* iOS, Android, SPA

</details>

<details close markdown="block"><summary id="pks4">voltmx.credentialmanager.signinWithPasskey</summary>


This method accepts a Passkey sign in object and will make the necessary calls for using a passkey on device. Server response from the AssertionResults response will be sent back to callback.

**Syntax:**

`voltmx.credentialmanager.signinWithPasskey(passkeySigninObject)`

#### Input Parameters

passkeySigninObject:

A JSON object containing a key-value pair. 


| Key   | Description |
| ------------- |-------------|
| assertionOptions | Mandatory.<br>url, headers, body are mandatory. |
| assertionResults | Mandatory.<br>url, headers are mandatory. AssertionOptionsResponse will be the body for AssertionResults. This is handled by framework.|
| onSuccess| Mandatory|
| onFailure| Mandatory|
| autofill| Optional.<br> Type – BOOL. Optional key in passkeySigninObject. Set true for the credential manager to consider it as Sign In with passkey using autofill.|
| autofillWidget| Optional.<br> Type - TextBox Widget. Supported only for android|

**Remarks:**

* The body for `assertionResults` is received from Credential Manager. This is attached in the request and sent to the relying-party. This is automatically done from the framework side. 

* To enable autofill on Android, setting the `"autofill"` option to true is required. In addition, you must also provide the `"autofillWidget"` parameter. Currently, only the TextBox widget is supported, so you should pass the relevant TextBox widget object as the value.

**Return Values:**

None

**Example:**

```
var passkeySigninObject = {
        "assertionOptions": {
            "url": fetchAssertionOptionsURL,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": {
                "userName": username,
                "displayName": "Passkey End2End User",
            }
        },
        "assertionResults": {
            "url": sendAssertionResultsURL,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        },
        "onSuccess": signInSuccessCallback,
        "onFailure": signInFailureCallback
    };


// make signinWithPasskey call with passkeySigninObject
voltmx.credentialmanager.signinWithPasskey(passkeySigninObject);

```

#### Example with Autofill

>**Note:** You need to add an optional autofill Boolean parameter in you Passkey SignIn API and set it to `true` like below.


```
// Set textbox textContentType to username
frmHome.txtUsername.textContentType = constants.TEXTBOX_TEXT_CONTENT_TYPE_USERNAME;


// End-to-End SignIn Flow:
// add new key-value, autofill: true to passkeySignInObj
var passkeySignInObj = {
    "assertionOptions": {
        "url": fetchAssertionOptionsURL,
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body": {
            "userName": lastSignedInUserName,
            "displayName": "Passkey End2End AutoFill User",
        }
    },
    "assertionResults": {
        "url": signInSendAssertionResultsURL,
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    },
    "autofill": true, 
    "autofillWidget":  LoginForm.usernameTextBox,
    "onSuccess": successCallback,
    "onFailure": failureCallback
};


voltmx.credentialmanager.signinWithPasskey(passkeySignInObj);


// autofillWidet is respected and used only for android.


```

#### Platform Availability

* iOS, Android, SPA

</details>



## Credential Manager Errors

These errors are thrown by the on-device credential manager. These can also be accessed as IRIS constants. Use voltmx.credentialmanager.(Constant_Value). See below.



| CONSTANT | Error Code|Platform |
| ------------- |-------------|-------------|
| UNKNOWN_ERROR  | 2000 |iOS, Android, SPA |
| USER_CANCELLED | 2001 |iOS, Android, SPA |
| INTERRUPTED_ERROR | 2002 |iOS, Android |
| REQUEST_FAILED | 2003 |iOS, SPA |
| INVALID_RESPONSE | 2004 |iOS |
| REQUEST_NOT_HANDLED | 2005 |iOS |
| PUBLICKEY_DOM_ERROR | 2008 |Android|
| NOCREDENTIAL_ERROR| 2009 |Android, SPA|

**Example:**

`voltmx.credentialmanager.UNKNOWN_ERROR`

In addition to the error code, these errors will also contain an error message describing the cause of failure, if available. This message will come from on-device Credential Manager.

## Passkey Errors

Since Passkey End-to-End APIs (registerPasskey, signinWithPasskey) handle both the network communication with the Relying Party and interaction with the on-device Credential Manager, a dedicated set of Passkey-specific error codes is provided.
These error codes help developers quickly identify and resolve issues that may arise during registration or sign-in flows.



|Error Code |Error Message|Platform |
| ------------- |-------------|-------------|
| 3001  | AttestationOptions network URL response is either null or invalid JSON |iOS, Android, SPA |
| 3002  | AssertionOptions network URL response is either null or invalid JSON |iOS, Android, SPA |
| 3003  |Null or invalid data received from Credential Manager |iOS |
| 3004  | Register new Passkey failed |iOS |
| 3005  | Sign in with Passkey failed. No matching Passkey found |iOS |
