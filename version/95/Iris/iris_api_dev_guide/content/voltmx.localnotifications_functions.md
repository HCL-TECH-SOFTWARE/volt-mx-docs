                            


voltmx.localnotifications Namespace
=================================

The `voltmx.localnotifications` namespace provides your app the ability to create and receive local, on-device notifications that do not rely on off-device information coming across a network. The voltmx.localnotifications namespace contains the following API elements.

Functions
---------

The voltmx.localnotifications namespace contains the following functions.


<details close markdown="block"><summary>voltmx.localnotifications.cancel</summary>

* * *

Cancels the specified notifications.

<b>Syntax</b>

`voltmx.localnotifications.cancel(notificationId)`

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| notificationId | An array of notification IDs that selects the notifications to cancel. |

<b>Example</b>

```
/*************************************************************************************
* Function:cancelLocalnotifications()
* Description: function is used to cancel local notifications.
* Author: VoltMX
*************************************************************************************/
function cancelLocalnotifications(){
    notificationIdArray = [];
    notificationIdArray.push("01");
    voltmx.localnotifications.cancel(notificationIdArray);
 }
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available on iOS and Android platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.localnotifications.create</summary>

* * *

Creates a local notification.  

<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings to get the notifications.<br> 
        <code> &lt;uses-permission android:name="android.permission.POST_NOTIFICATIONS"/&gt;</code>
        </li>
    </ul>
</blockquote>


<b>Syntax</b>

```
voltmx.localnotifications.create(  
    notificationId,  
    datetime,  
    message,  
    title,  
    categoryId,  
    pspConfig)
```

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| notificationId | A string that specifies a unique ID for the notification. |
| datetime | A string that specifies the date and time when the notification must be triggered. Must follow the [unicode date, time, and Timezone](http://unicode.org/reports/tr35/tr35-6.html#Date_Format_Patterns) pattern. |
| message | A string that specifies the message for the notification. |
| title | A string that specifies the title for the notification. |
| categoryId | A string that specifies the category ID to associate this local notification with, or null in case no actions are to be displayed. |
| pspConfig | An optional JavaScript object containing key-value pairs that set the platform-specific options. Used on iOS platform only. The following keys are supported. badge: An optional number that displays the number of notifications on the app icon. sound: An optional string that specifies the sound to play. For more information, see the **Remarks** section below. |

<b>Example</b>

```
/*************************************************************************************
* Function:createLocalnotification()
* Description: Creates local notifications.
* Author: VoltMX
*************************************************************************************/
function createLocalnotification(){ 
    var notificationId = "01";
    var date = "05 jan 2017 16:42:00 +0530";
    var format = "dd MMM yyyy HH:mm:ss Z";
    var message = "Local notification Received";
    var title = "Title";
    var categoryId ="calendar";
  
    voltmx.localnotifications.create({
        "id": notificationId,
        "dateTime": {
            "date": date,
            "format": format
        },
        "message": message,
        "title": title,
        "categoryId": categoryId,
        "pspConfig":{
            "badge":1,
            "sound": voltmx.localnotifications.DEFAULT_SOUND
        }

    });
  
}	
```

<b>Return Values</b>

None

<b>Remarks</b>

To play a sound when a notification arrives, your app must specify the sound using the "sound" key in the JavaScript object contained in the _pspConfig_ parameter. Your app must assign a sound file from the app's main bundle. If the sound file is not available or the provided file name is incorrect, it will play a default sound from the system (`voltmx.localnotifications.DEFAULT_SOUND`). To know the see file formats, [click here](https://developer.apple.com/library/ios/documentation/MusicAudio/Conceptual/CoreAudioOverview/SupportedAudioFormatsMacOSX/SupportedAudioFormatsMacOSX.md)

<b>Platform Availability</b>

Available on

*   iOS (The [voltmx.notificationsettings.registerCategory](voltmx.notificationssettings_functions.md#voltmx-notificationsettings-registercategory) API must be called before the create API for it to work)
*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.localnotifications.getNotifications</summary> 

* * *

Retrieves the pending local notifications.

<b>Syntax</b>

`voltmx.localnotifications.getNotifications(notificationObjects)`

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| notificationObjects | An optional array of notification objects if there are pending notifications, or an empty array if there are not. This parameter is only used on iOS. |

<b>Example</b>

```
// iOS Example. The callback function is not used on Android.
function callback(arrayOfNotificationObjects)
{
    // Your logic
    if(arrayOfNotificationObjects.length == 0)
    {
        voltmx.print("No pending notifications");;    
    }
}

voltmx.localnotifications.getNotifications(callback);
				
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

Available on iOS and Android platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.localnotifications.setCallbacks</summary>

* * *

Associates online and offline callbacks for local notifications.

<b>Syntax</b>

`voltmx.localnotifications.setCallbacks(onlinenotification,offlinenotification)`

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| onlinenotification | A callback function that is invoked when the online notification is triggered. For more information, see the **Remarks** section below. |
| offlineNotification | A callback function that is invoked when the offline notification is triggered. For more information, see the **Remarks** section below. |

<b>Example</b>

```
/*************************************************************************************
* Function:localNotCallBacks()
* Description: Initializes local notifications.
* Author: VoltMX
*************************************************************************************/
function localNotCallBacks() {
    try {
        voltmx.localnotifications.setCallbacks({
            "offlinenotification": offlinenotification,
            "onlinenotification": onlinenotification
    });
    } catch (err) {
        voltmx.print("Error Code " + err.errorCode + " Message " + err.message);
    }
}

/* Notification callback handlers. These are invoked automatically when their respective notifications are fired. */
function offlinenotification(notificationobject, actionid ){
    alert("offline notification callback inkvoked");
    alert("notification object is :"+JSON.stringify(notificationobject) +" action id is "+actionid);
}

function onlinenotification(notificationobject,actionid){
    alert("onlinenotification notification callback inkvoked");
    alert("notification object is :"+JSON.stringify(notificationobject)+" action id is "+actionid);
}	
```

<b>Return Values</b>

None

<b>Remarks</b>

The callbacks that this function sets are invoked when notifications are raised by the underlying system. The online notification callback is involved when the application is running. The offline callbacks are invoked when the application is not running. This function should be called inside the `post app init` event handler when your app starts.

The callback function in the _onlinenotification_ parameter must have the following signature.

`onlineNotificationCallback(actionID,notificationObject);`

where _actionId_ is a unique ID for the action, and _notificationobject_ is a JavaScript object that contains platform-specific notification information.

The callback function in the _offlinenotification_ parameter must have the following signature.

`offlineNotificationCallback(actionID,notificationObject);`

where _actionId_ is a unique ID for the action, and _notificationobject_ is a JavaScript object that contains platform-specific notification information.

<b>Platform Availability</b>

Available on iOS and Android platforms.

* * *

</details>

![](resources/prettify/onload.png)
