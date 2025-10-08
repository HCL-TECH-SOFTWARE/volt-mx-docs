                           

You are here: Volt MX JavaScript APIs

Volt MX  JavaScript APIs
=======================

Volt MX  Platform provides APIs that you can use to enable push notifications for an application on a device and also an API to deregister from the push notifications service.

The following are the APIs for push notifications:

1.  [voltmx.push.setCallbacks](#volt-mx-push-setcallbacks)
2.  [push.register](#volt-mx-push-register)
3.  [push.deRegister](#volt-mx-push-deregister)

> **_Note:_** The following are the generic error codes for Push Notification APIs.

  
| Error Codes | Error Message |
| --- | --- |
| 1400 | Invalid number of arguments. |
| 1401 | Illegal arguments. |
| 1402 | Unable to connect to push service - PNS service is not available. |
| 1406 | Platform-specific issue. Full details are available in the error message. For example, received payload but payload is in incorrect format. |

voltmx.push.setCallbacks
----------------------

When an application on a device (iPhone, Android, or Windows Phone 7) registers or deregisters for push notifications, or if the device receives a notification, the device executes the function of your choice. You can specify the functions to be executed for Push Notification in an Object for this API.

### Signature

**JavaScript**: _voltmx.push.setCallbacks([Object](#JS))_

**Lua**: **push.setcallbacks(**[Object](#JS)**)**

### Input Parameters

Object \[Object\] - Mandatory

A Hash table has the following key-value pairs:

*   **onsuccessfulregistration** \[Function\] - Mandatory: Specifies the function to be executed when the Push Notifications registration is successful.
*   **onfailureregistration** \[Function\] - Mandatory: Specifies the function to be executed when the Push Notifications registration fails.
*   **onlinenotification**\[Function\] - Mandatory for iPhone, Android, and Windows. Specifies the function to be executed when the device receives a message when the application is running.  
    The message types for which this function is executed varies.  
    The message type on various platforms are as follows:  
    **iPhone:** Sounds, Alerts, or Badges, **Windows Phone 7:** raw or toast.  
    
*   **offlinenotification** \[Function\] - Mandatory for iPhone, Android, and Windows. Specifies the function to be executed when the device receives a message when the application is not running.  
    The message types for which this function is executed varies.  
    The message type on iPhone is as follows:  
    **iPhone:** Sounds, Alerts, or Badges
*   **onsuccessfulderegistration** \[Function\] - Mandatory. Specifies the function to be executed when the Push Notification deregistration is successful.
*   **onfailurederegistration** \[Function\] - Mandatory for Android and Windows. Optional for iPhone. Specifies the function to be executed when the Push Notification deregistration is a failure.

### Return Values

None

### Exceptions

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1404 - Deregistration failed - Unable to close channel or PNS internal error while deregistration (thrown by push.deregister() API during an onfailurederegistration callback).

### API Usage

You must call this API after the application is launched as this API will not be explicitly called by the user.

### Implementation Details

The following are the implementation details of this API:

Based on the status of the registration or deregistration attempt (success or failure) and the state of the application on the device (active or inactive) when the Push Notifications arrive, use the following snippet to call the associated functions:

```
            
            object = {onsuccessfulregistration:onsuccess , onfailureregistration:onfailure , onlinenotification:onlineCallback ,offlinenotification:offlineCallback, onsuccessfulderegistration:onderegsuccess , onfailurederegistration:onderegfailure };
voltmx.push.setCallbacks(object);

```

onsuccessfulregistration

If the registration for Push Notifications is successful, this callback is executed by the underlying platform.

The callback takes string as the parameter.

The following code snippet is an example of the _onsuccessfulregistration_ callback:

```
            
            function onsuccess(identifier)
{
voltmx.print("Registered SUCCESSFULLY :"+identifier);
//Send the identifier to the Push Notifications Sender.
}
```

onfailureregistration

If the registration for Push Notifications is a failure, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

The following code snippet is an example of the _onfailureregistration_ callback:

```
function onfailure(errortable)  
{  
voltmx.print("Registration Failed");  
  
voltmx.print(errortable["errorcode"]+errortable["errormessage"]);  
}
```

onlinenotification

If the device receives a message when the application is running, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

The following code snippet is an example of the _onlinenotification_ callback:

```
function onlineNotification(payload)  
{  
//payload is an Object that contains a set of key-value pairs provided by the respective Push Notification Server  
  
}
```

offlinenotification

If the device receives a message when the application is _not_ running, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

The following code snippet is an example of the _offlinenotification_ callback:

```
function offlineNotification(payload)  
{  
//payload is an Object that contains a set of key-value pairs provided by the respective Push Notification Server  
}  

```

onsuccessfulderegistration

If the deregistration for Push Notifications is successful, this callback is executed by the underlying platform.

The callback takes string as the parameter.

The following code snippet is an example of the _onsuccessfulderegistration_ callback:

```
function onderegsuccess()  
{  
voltmx.print("Deregistered Successfully :");  
}  

```

onfailurederegistration

If the deregistration for Push Notifications is a failure, this callback is executed by the underlying platform.

The callback takes an Object as the parameter.

> **_Note:_** This function is not applicable on iPhone platform.

The following code snippet is an example of the _onfailurederegistration_ callback:

```
function onderegfailure(errortable)  
{  
voltmx.print("Deregistration Failed");  
voltmx.print("Message : " +errortable ["errorcode"]+errortable  
["errormessage"],null,"info",null,"Info");  
}  

```

### JavaScript Example

```
            
            function regSuccessAndroidCallback(regId)
{
	voltmx.print("** JavaScript regSuccessCallback() called **");
	voltmx.print(regId);
}


function regFailureAndroidCallback(errormsg)
{
	voltmx.print("* JavaScript regFailureCallback() called *");
	voltmx.print(errormsg["failurereason"]);
	voltmx.print(errormsg["description"]);
}

function onlinePushNotificationAndroidCallback(msg)
{
	voltmx.print("* JavaScript onlinePushNotificationCallback() called *");
	voltmx.print(msg);
	voltmx.print(msg["message"]);
}

function offlinePushNotificationAndroidCallback(msg)
{
	voltmx.print("* JavaScript offlinePushNotificationCallback() called *");
	voltmx.print(msg);
}

function unregSuccessAndroidCallback()
{
	voltmx.print("* JavaScript unregSuccessCallback() called *");
}

function unregFailureAndroidCallback(errormsg)
{
	voltmx.print("* JavaScript unregFailureCallback() called *");
	voltmx.print(errormsg["errorcode"]);
	voltmx.print(errormsg["errormessage"]);
}



function callbackAndroidSetCallbacks()
{
  voltmx.push.setCallbacks({onsuccessfulregistration: regSuccessAndroidCallback, 
onfailureregistration: regFailureAndroidCallback, onlinenotification: 
onlinePushNotificationAndroidCallback, offlinenotification: 
offlinePushNotificationAndroidCallback, onsuccessfulderegistration: 
unregSuccessAndroidCallback, onfailurederegistration: 
unregFailureAndroidCallback});
}
```

### Platform Availability

*   iPhone
*   Windows
*   Android
*   iPad

voltmx.push.register
------------------

This API allows you to register the application and the mobile device for Push Notifications. This API takes an Object as a parameter (the values in the table differ across platforms).  
  
If the registration is successful, the platform invokes the _onsuccessfulregistration_ function. If the registration is a failure, the platform invokes the _onfailureregistration_ function.

### Signature

**JavaScript**: **voltmx.push.register(configObject)(**[iPhone](#iPhone)**/**[Android](#Android)**/**[BB](#BB)**/**[Windows](#Windows)**)**

**Lua**: **push.register(configObject)(**[iPhone](#iPhone)**/**[Android](#Android)**/**[BB](#BB)**/**[Windows](#Windows)**)**

### Input Parameters

configObject \[Array\] - Mandatory (iPhone)

The Array for iPhone must contain **any** or **all** of the following:

*   0 - Specifies the Notification type as Badge.
*   1 - Specifies the Notification type as Sound.
*   2 - Specifies the Notification type as Alert.

configObject \[Object\] - Mandatory (Android)

A Hash table for Android must contain the following key value pairs:

*   **senderid** - Specifies the project ID of the account registered to use GCM.  
    The projectID is the ID for a created API project. For registering projectID for Push Notifications, see [http://developer.android.com/guide/google/gcm/gs.html#create-proj](http://developer.android.com/guide/google/gcm/gs.html#create-proj)  
    

configObject \[Object\]- Optional (Windows)

Windows Phone does not require any input parameters. However, you can specify the following Optional key value pairs in the Object:  

*   **remoteimageurls** (Optional) - Specifies an array of remote images to be displayed for a _Tile_ message. The sender can specify the image to be displayed on the Tile notification by specifying the image URL.
*   **enableraw** (Optional): This is a Boolean parameter and it specifies if the device must receive raw messages or not. The default value is _true_ (you can receive raw messages). If you do not want the device to receive raw messages, set the value to _false_.
*   **enabletile** (Optional): This is a Boolean parameter and it specifies if the device must receive tile messages or not. The default value is _true_ (you can receive tile messages). If you do not want the device to receive tile messages, set the value to _false_.
*   **enabletoast** (Optional): This is a Boolean parameter and it specifies if the device must receive toast messages or not. The default value is _true_ (you can receive toast messages). If you do not want the device to receive toast messages, set the value to _false_.

### Return Values

None

### Exceptions

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1402 - Unable to connect to push service - Push Notification Service (PNS) is not available.
*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1405 - Duplicate Registration (thrown by push.register() API during an onfailureregistration callback).
*   1406 - Platform Specific issue. Complete details are available in the error message. JavaScript Example: Received payload but payload is in incorrect format etc.
*   An error is thrown if input type is invalid or does not follow the expected structure.
    *   102-Invalid input error

### API Usage

You must use this API to register the application and the device for Push Notifications with the Push Notifications service provider.

### JavaScript Example

The following are the examples for this API on various platforms:

Android

The following code snippet uses the _senderid_ to register for Push Notifications:

```
            
            
            //The following code snippet uses the senderid to register for Push 
Notifications:
              
var config = {senderid:"4815162342"};  
voltmx.push.register(config);
```

iPhone

The following code snippet uses the _notification types_ to register for Push Notifications:

```
            
            //The following code snippet uses the notification types to register for 
Push Notifications:
var config=[0,1,2];
voltmx.push.register(config);

```

Windows Phone

The following code snippet uses the _remoteimageurls_ as the key and the link specifies the images to be displayed in the tile notification as the value:

```
 
            var config={remoteimageurls:["http://www.thisisfanzoo.com/blog/samples/
logo2.png", "http://www.yahoo.com/samples/logo3.png"],enableraw:true,enabletile
:false, enabletoast:false};
voltmx.push.register(config);   

```

> **_Note:_** Only network URL's are allowed. MPNS allows only images from trusted domains (registered to MPNS) to be displayed to avoid image policies. There is no such restriction on local images.

### Platform Availability

*   iPhone
*   Android
*   Windows
*   iPad

voltmx.push.deRegister
--------------------

This API allows an application on a device to deregister from Push Notifications. This API takes an empty Object as the parameter.  
  
If the deregistration is successful, the platform invokes the _onsuccessfulderegistration_ function. If the deregistration is a failure, the platform invokes the _onfailurederegistration_ function.

### Signature

_JavaScript_: **voltmx.push.deRegister([emptyObject](#emptyJSObject))**

**Lua: _push.deregister(_**[emptyObject](#emptyJSObject)**)**

### Input Parameters

emptyObject \[Object\]- Mandatory

Is an empty Object.

### Return Values

None

### Exceptions

The following error codes are applicable to onfailureregistration and onfailurederegistration functions:

*   1402 - Unable to connect to push service - Push Notification Service (PNS) is not available.
*   1403 - Registration failed by PNS - Account related or device restrictions (thrown by push.register() API during an onfailureregistration callback).
*   1404 - Deregistration failed - Unable to close channel or PNS internal error while deregistration (throw by push.deregister() API during an onfailureregistration callback).
    
*   1405 - Duplicate Registration (thrown by push.register() API during an onfailureregistration callback).
*   1406 - Platform Specific issue. Complete details are available in the error message. JavaScript Example: Received payload but payload is in incorrect format etc.
*   An error is thrown if input type is invalid or does not follow the expected structure.
    *   102-Invalid input error

### API Usage

You must use this API to deregister the application and the device from the Push Notifications service.

### JavaScript Example

To deregister from Push Notifications, use the following code snippet:

```

            var myhash = new Hash();
voltmx.push.deRegister(myhash);
```

### Platform Availability

*   iPhone
*   Android
*   Windows
*   iPad

Important Considerations for Android
------------------------------------

The following are the important considerations you must be aware for Android platform:

*   Before you build the application for Android, in the Project Properties of the application, navigate to _Native App_ -> _Android_ tab, and select the _GCM_ under the _Push Notification_ section. Selecting this option will copy the required Push Notification libraries into the application during build time.”
*   For C2DM to GCM conversion refer, [http://developer.android.com/guide/google/gcm/c2dm.html](http://developer.android.com/guide/google/gcm/c2dm.html)
    
*   Google may occasionally refresh the Registration ID. Hence, you must design the application to update the third-party Application server with the new ID.  
      
    
    *    If the Volt MX Android platform receives a new registration ID, the following takes place:  
        *   If the application is running in the foreground or the background - onsuccessfulregistration function is called.
        *   If the application is not running - a status bar notification is displayed. If you select the notification, the application is launched and onsuccessfulregistration function is called.
    
    *   If the Volt MX Android platform receives a new Push Notification message, the following takes place:
        *   If the application is running in the foreground - onlinenotification function is called.
        *   If the application is running in the background - status bar notification is displayed. If you select the notification, the application is brought to the foreground and its onlinenotification function is called.
        *   If the application is not running - status bar notification is displayed. If you select the notification, the application is launched and offlinenotification function is called.
*   The status bar notification is displayed by the platform with the default settings.  
    The default settings are in the pushconfig.xmlfile (available after the application built) in `"workspace\temp<App-Name>\build\luaandroid\dist<App_Name>\res\values`" location.  
      
    You can override and configure the notification parameters like title, vibrate & sound by placing the pushconfig.xml in the `"``workspace/<App-name>/resources/mobile/native/android/values``"` directory (located under your project workspace folder).

> **_Note:_** `pushconfig.xml` is applicable for Android platform.

For more information on `pushconfig.xml` refer [VoltMX Studio User Guide](../../../Iris/iris_user_guide/Content/Custom_GCM.md).

Reference Links
---------------

You can get detailed information regarding the implementation of Push Notifications on various platforms, by visiting the following links:

**Android**

[http://code.google.com/android/c2dm](http://code.google.com/android/c2dm/)

**iPhone**[  
](http://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008194-CH1-SW1)

[http://developer.apple.com/library/ios/documentation/NetworkingInternet  
/Conceptual/RemoteNotificationsPG/Introduction/Introduction.html#//apple\_ref/doc/uid/TP40008194-CH1-SW1](http://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008194-CH1-SW1)

**Windows Phone**:

[http://msdn.microsoft.com/en-us/library/ff402537(VS.92).aspx](http://msdn.microsoft.com/en-us/library/ff402537(VS.92).aspx)
