                            


voltmx.push Namespace
===================

The voltmx.push namespace provides the following API elements.

Functions
---------

The voltmx.push namespace contains the following functions.

voltmx.push.deRegister
--------------------

This API allows an application on a device to deregister from Push Notifications. This API takes an empty object as the parameter.  
  
If the deregistration is successful, the platform invokes the _onsuccessfulderegistration_ function. If the deregistration is a failure, the platform invokes the _onfailurederegistration_ function.

**Syntax**

voltmx.push.deRegister([emptyObject](#emptyJSObject))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| emptyObject \[Object\]- Mandatory | Is an empty Object. |

**Example**

To deregister from Push Notifications, use the following code snippet:

```
/**
 * Name		:	deRegisterMyPush
 * Author	:	VoltMX
 * Purpose	:	This function helps to de-register from push notifications.
 **/
function deRegisterMyPush() {
    var myhash = new Hash();
    voltmx.push.deRegister(myhash);
}
```

**Return Values**

None

**Exceptions**

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1402 - Unable to connect to push service - PNS service is not available
*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1404 - Deregistration failed - Unable to close channel or PNS internal error while deregistration (thrown by push.deregister() API during an onfailurederegistration callback).
*   1405 - Duplicate Registration - Actual registration details should be provided? (thrown by voltmx. push.register() API during an onfailureregistration callback)
*   1406 - Platform-specific issue. Full details are available in the errormessage. For example, received payload but payload is in incorrect format.
*   An error is thrown if input type is invalid or does not follow the expected structure.
    *   102-Invalid input error

**API Usage**

You must use this API to deregister the application and the device from the Push Notifications service.

**Platform Availability**

*   Android
*   iOS
*   Windows
*   Desktop Web

voltmx.push.register
------------------

This API allows you to register the application and the mobile device for Push Notifications. This API takes an object as a parameter (the values in the table differ across platforms).  
  
If the registration is successful, the platform invokes the _onsuccessfulregistration_ function. If the registration is a failure, the platform invokes the _onfailureregistration_ function. 



<blockquote>
    <em><b>Note: </b></em> 
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings to get the notifications. <br> 
        <code> &lt;uses-permission android:name="android.permission.POST_NOTIFICATIONS"/&gt;</code>
        </li>
    </ul>
</blockquote>


**Syntax**

voltmx.push.register(configObject)([iOS](#iPhone)/[Android](#Android)/[Desktop Web](#DesktopWeb)/[Windows](#Windows))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| configObject \[Array\] - Mandatory (iOS) | The Array for iOS must contain **any** or **all** of the following: 0 - Specifies the Notification type as Badge. 1 - Specifies the Notification type as Sound. 2 - Specifies the Notification type as Alert. |
| configObject \[Object\] - Mandatory (Android) | A Hash table for Android must contain the following key value pairs: **senderid** - Specifies the project ID of the account registered to use FCM. The projectID is the ID for a created API project. For more information on FCM , refer [here](https://firebase.google.com/docs/cloud-messaging/).[](http://developer.android.com/guide/google/gcm/gs.html#create-proj) |
| configObject \[Object\] - Mandatory (Desktop Web) | A Hash table for Desktop Web must contain the following key value pairs: **senderid** - Specifies the sender ID of the registered FCM application. For more information on FCM, click [here](https://firebase.google.com/docs/cloud-messaging/js/client). **publicKey** - This is the value that is generated under the key-pair tab for the registered FCM application. |
| configObject \[Object\]- Mandatory (Windows) | The Array for Windows must contain the following key value pairs: **enableraw**: This is a Boolean parameter and it specifies if the device must receive raw messages or not. The default value is _true_ (you can receive raw messages). If you do not want the device to receive raw messages, set the value to _false_. **enabletile**: This is a Boolean parameter and it specifies if the device must receive tile messages or not. The default value is _true_ (you can receive tile messages). If you do not want the device to receive tile messages, set the value to _false_. **enabletoast**: This is a Boolean parameter and it specifies if the device must receive toast messages or not. The default value is _true_ (you can receive toast messages). If you do not want the device to receive toast messages, set the value to _false_. Use the fully qualified domain name (FQDN) as the service name. For authenticated notifications, the FQDN must match the registered certificate's subject name (the CN attribute). For example, www.contoso.com. |

 

**Example**

The following are the examples of this API on various platforms:

Android

The following code snippet uses the _senderid_ to register for Push Notifications:

```
/**
 * Name		:	registerMyAndroidPush
 * Author	:	VoltMX
 * Purpose	:	This function registers the senderID on the Google cloud.
 **/

function registerMyAndroidPush() {
    var config = {
        senderid: "4815162342"
    };
    voltmx.push.register(config);
}	
```

iOS

The following code snippet uses the _notification types_ to register for Push Notifications:

```
/**
 * Name		:	registeriPhonePush
 * Author	:	VoltMX
 * Purpose	:	This function register the senderID on the Google cloud.
 **/
function registeriPhonePush() {
    var config = [0, 1, 2];
    voltmx.push.register(config);
}
```

Desktop Web

```
/**		
 * Name		:	registerDesktopWebPush
 * Author	:	VoltMX
 * Purpose	:	This function registers the senderID on the Google cloud.
 **/
function registerDesktopWebPush() {
    var configRegister = {
        messagingSenderId: "88888888888",
        publicKey: "BKf0xO2plAvCNtblOcgeTeyMleGcOnhetKe3Birx4aqhR-Wh3-D8Px7kPYa1YyMBIECg_tKz7droMbGNjFwyUMw"
    };
    voltmx.push.register(configRegister);
}
```

Windows

```
/**		
 * Name		:	registerWindowsPush
 * Author	:	VoltMX
 * Purpose	:	This function registers the senderID on the Google cloud.
 **/

function registerWindowsPush() {
    var config = {
        enableraw: true,
        enabletile: true,
        enabletoast: true,
    };
    voltmx.push.register(config);
}	
```

> **_Note:_** Only network URLs are allowed. MPNS allows only images from trusted domains (registered to MPNS) to be displayed to avoid image policies. There is no such restriction on local images.

Exceptions

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1402 - Unable to connect to push service - PNS service is not available
*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1405 - Duplicate Registration - Actual registration details should be provided? (thrown by voltmx. push.register() API during an onfailureregistration callback)
*   1406 - Platform-specific issue. Full details are available in the errormessage. For example, received payload but payload is in incorrect format.
*   An error is thrown if input type is invalid or does not follow the expected structure.
    *   102-Invalid input error

**API Usage**

You must use this API to register the application and the device for Push Notifications with the Push Notifications service provider.

**Platform Availability**

*   Android
*   iOS
*   Windows
*   Desktop Web

* * *

<h2 id=cb1>voltmx.push.setCallbacks</h2>


When an application on a device registers or deregisters for Push Notifications, or if the device receives a notification, the device executes the function of your choice.  
You can specify the functions to be executed for Push Notification in an object of the voltmx.push.setCallbacks API.

**Syntax**

voltmx.push.setCallbacks(Object)

**Input Parameters**

Object \[Object\] - Mandatory

A Hash table has the following key-value pairs:

| Key | Description |
| --- | --- |
| onsuccessfulregistration \[Function\] - Mandatory | Specifies the function to be executed when the Push Notifications registration is successful. |
| onfailureregistration \[Function\] - Mandatory | Specifies the function to be executed when the Push Notifications registration fails. |
| onlinenotification\[Function\] | Mandatory for iOS, Android, and Windows. Specifies the function to be executed when the device receives a message when the application is running.The message types for which this function is executed varies. The message type on various platforms are as follows:**iOS:** Sounds, Alerts, or Badges; **Windows:** raw or toast. |
| offlinenotification \[Function\] | Mandatory for iOS, Android, and Windows. Specifies the function to be executed when the device receives a message when the application is not running.The message types for which this function is executed varies. The message type for iOS is as follows:**iOS:** Sounds, Alerts, or Badges |
| onsuccessfulderegistration \[Function\] - Mandatory | Specifies the function to be executed when the Push Notification deregistration is successful. |
| onfailurederegistration \[Function\] | Mandatory for Android, and Windows. Optional for iOS. Specifies the function to be executed when the Push Notification deregistration is a failure. |
| offlinecallback \[Function\] - Mandatory. | Specifies the function to be executed when an action is invoked. payloadactionId \[String\] - A unique id to identify the action. |

**Example**

```
/**
 * Name		:	regSuccessAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This function is the callback for the successful registration of the device to the FCM server. It returns the callerID.
 **/

function regSuccessAndroidCallback(regId) {
    voltmx.print("** JavaScript regSuccessCallback() called **");
    voltmx.print(regId);
}

/**
 * Name		:	regFailureAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This function is the callback for the registration failure to the FCM server.
 **/

function regFailureAndroidCallback(errormsg) {
    voltmx.print("* JavaScript regFailureCallback() called *");
    voltmx.print(errormsg.failurereason);
voltmx.print(errormsg.description);
}
  
/**
 * Name		:	onlinePushNotificationAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This function is the callback for the registration failure to the FCM server.
 **/  
  
function onlinePushNotificationAndroidCallback(msg) {
    voltmx.print("* JavaScript onlinePushNotificationCallback() called *");
    voltmx.print(msg);
    voltmx.print(msg.message);
}

/**
 * Name		:	offlinePushNotificationAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This function is the callback for the received push msg event while offline.
 **/

function offlinePushNotificationAndroidCallback(msg) {
    voltmx.print("* JavaScript offlinePushNotificationCallback() called *");
    voltmx.print(msg);
}

/**
 * Name		:	unregSuccessAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This is the callback for the successful unregistration from the FCM server.
 **/

function unregSuccessAndroidCallback() {
    voltmx.print("* JavaScript unregSuccessCallback() called *");
}

/**
 * Name		:	unregFailureAndroidCallback
 * Author	:	VoltMX
 * Purpose	:	This is the callback for the unsuccessful deregistration from the FCM server.
 **/

function unregFailureAndroidCallback(errormsg) {
    voltmx.print("* JavaScript unregFailureCallback() called *");
    voltmx.print(errormsg.errorcode);
    voltmx.print(errormsg.errormessage);
}


/**
 * Name		:	callbackAndroidSetCallbacks
 * Author	:	VoltMX
 * Purpose	:	This function sets the callback for registration, deregistration, and pushnotification events.
 **/

function callbackAndroidSetCallbacks() {
    voltmx.push.setCallbacks({
        onsuccessfulregistration: regSuccessAndroidCallback,
        onfailureregistration: regFailureAndroidCallback,
        onlinenotification: onlinePushNotificationAndroidCallback,
        offlinenotification: offlinePushNotificationAndroidCallback,
        onsuccessfulderegistration: unregSuccessAndroidCallback,
        onfailurederegistration: unregFailureAndroidCallback
    });
}
```

**Properties**

The voltmx.push.setCallbacks API contains the following property:

defaultRemoteNotificationCallbackBehaviour

This property is used to trigger online and offline notification callbacks based on whether your application is in the background, foreground, or is in an unused (dead) state. The default value of this property is false, and it is available only for the iOS platform.

The following table illustrates when online and offline notification callbacks are triggered depending on the value of the `defaultRemoteNotificationCallbackBehaviour` property.

| **Application Status** | **When defaultRemoteNotificationCallbackBehaviour is true/yes** | **When defaultRemoteNotificationCallbackBehaviour is false/no** |
| --- | --- | --- |
| When the application is in the foreground | Online notification callback is triggered | Online notification callback is triggered |
| When the application is in the background | Online notification callback is triggered | Offline notification callback is triggered |
| When the application is unused (dead state) | Offline notification callback is triggered | Offline notification callback is triggered |

 

**Return Values**

None

**Exceptions**

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1404 - Deregistration failed - Unable to close channel or PNS internal error while deregistration (thrown by push.deregister() API during an onfailurederegistration callback).

**API Usage**

You must call this API after the application is launched as this API will not be explicitly called by the user.

**Implementation Details**

The following are the implementation details of this API:

Based on the status of the registration or deregistration attempt (success or failure) and the state of the application on the device (active or inactive) when the Push Notifications arrive, use the following snippet to call the associated functions:

```
object = {
    onsuccessfulregistration: onsuccess,
    onfailureregistration: onfailure,
    onlinenotification: onlineCallback,
    offlinenotification: offineCallback,
    onsuccessfulderegistration: onderegsuccess,
    onfailurederegistration: onderegfailure
};
voltmx.push.setCallbacks(object);

```

onsuccessfulregistration

If the registration for Push Notifications is successful, this callback is executed by the underlying platform.

The callback takes string as the parameter.

The following code snippet is an example of the _onsuccessfulregistration_ callback.

```
function onsuccess(identifier) {
    voltmx.print("Registered SUCCESSFULLY :" + identifier);
    //Send the identifier to the Push Notifications Sender.
}
```

> **_Note:_** If there are spaces in the identifier (device token), you must replace the spaces with an empty string to successfully communicate with the APNS Server.

onfailureregistration

If the registration for Push Notifications is a failure, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

The following code snippet is an example of the _onfailureregistration_ callback:

```
function onfailure(errortable) {
    voltmx.print("Registration Failed");

    voltmx.print(errortable.errorcode + errortable.errormessage);
}
```

onlinenotification

If the device receives a message when the application is running, this callback is executed by the underlying platform.

This callback can be used for silent push notifications, as described in the overview [Silent Push Notifications](push_notifications.md#silent-push-notifications). With silent push notifications, your app can perform operations in the background, such as downloading data from across the Internet, and not interrupt users by displaying notifications about the download.

The callback takes an Object as the parameter.

The following code snippet is an example of the _onlinenotification_ callback:

```
function onlineNotification(payload) {
    /*payload is an Object that contains a set of key-value pairs provided by the respective Push Notification Server*/
}
```

offlinenotification

If the device receives a message when the application is _not_ running, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

The following code snippet is an example of the _offlinenotification_ callback:

```
function offlineNotification(payload) {
    /*payload is an Object that contains a set of key-value pairs provided by the respective Push Notification Server*/
}  

```

onsuccessfulderegistration

If the deregistration for Push Notifications is successful, this callback is executed by the underlying platform.

The callback takes string as the parameter.

The following code snippet is an example of the _onsuccessfulderegistration_ callback:

```
function onderegsuccess() {
    voltmx.print("Deregistered Successfully :");
}  

```

onfailurederegistration

If the deregistration for Push Notifications is a failure, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

> **_Note:_** This function is not applicable on iOS platform.

The following code snippet is an example of the _onfailurederegistration_ callback:

```
function onderegfailure(errortable) {
    voltmx.print("Deregistration Failed");
    voltmx.ui.Alert("Message : " + errortable["errorcode"] + errortable["errormessage"], null, "info", null, , "Info");
}  

```

### Callback

#### permissionStatusCallback

Specifies the permission status of the resource authorization.

**Syntax**

permissionStatusCallback(response)

**Parameters**

| Parameter | Description |
| --- | --- |
| response | A dictionary that contains the authorization status of the requested resource. This argument contains the following key: **status \[Constant\]**Resource status constant that indicates the status of the resource authorization. The possible values for status are as follows:voltmx.application.PERMISSION\_GRANTEDvoltmx.application.PERMISSION\_DENIED |

**Registering the Callback in voltmx.push.setCallbacks API**

VoltMX.push.setCallbacks({authorizationCallback:permissionStatusCallback, : : : : : : : : });

**Example**

```
function permissionStatusCallback(response) {
    if (response.status == voltmx.application.PERMISSION_GRANTED) {
        //PERMISSION_GRANTED Logic
    } else if (response.status == voltmx.application.PERMISSION_DENIED) {
        //User-defined PERMISSION_DENIED Logic
    }
}
```

> **_Note:_** This callback is called when you invoke the voltmx.push.register(notificationtypes) API.

**Platform Availability**

*   Android
*   iOS
*   Windows
*   Desktop Web

![](resources/prettify/onload.png)
