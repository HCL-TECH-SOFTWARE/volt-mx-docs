                            


Properties
==========

The Local Notifications API contains the following properties:


<details close markdown="block"><summary>backgroundColor</summary> 

* * *

An optional String value (for example, ffffff for white) that fires a notification with the provided background color for the notification icon.

### Syntax

backgroundColor

### Type

String

### Remarks

*   You can configure the background color of the notification icon at the app level in localnotificationconfig.xml and pushconfig.xml.  
    
*   <table style="width: 100%;"><colgroup><col style="width: 371px;"> <col style="width: 50px;"> <col></colgroup><tbody><tr><td>notify_local_msg_background_color</td><td>empty</td><td>Notification icon background color for local message notification.</td></tr><tr><td>notify_push_msg_background_color</td><td>empty</td><td>Notification icon background color for push message notification.</td></tr></tbody></table>
    

### Example

```

pspconfig:{
“backgroundColor” :  “ffffff”
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>priority</summary> 

* * *

An optional constant integer value that fires a notification with the specified priority.

### Syntax

priority

### Type

int

### Supported Values

*   constants.NOTIFICATION\_PRIORITY\_MIN: This is the lowest notification priority. For this priority value, the notifications may not be shown to the user, except for special circumstances such as detailed notification logs.
*   constants.NOTIFICATION\_PRIORITY\_MAX: This is the highest notification priority. This priority value should be used for your application's most important notifications that require the user's prompt attention or input.
*   constants.NOTIFICATION\_PRIORITY\_LOW: This is a lower notification priority. This priority value should be used for those notifications that are comparatively less important. The UI may choose to display these items in a smaller font or at a different position in the list, as compared to your app's PRIORITY\_DEFAULT notifications.
*   constants.NOTIFICATION\_PRIORITY\_HIGH: This is a higher notification priority. This priority value should be used for more important notifications or alerts. The UI may choose to show these items in a larger font or at a different position in notification lists, as compared to your app's PRIORITY\_DEFAULT notifications.
*   constants.NOTIFICATION\_PRIORITY\_DEFAULT: This is the default notification priority. If your application does not prioritize its own notifications, use this value for all notifications. This priority value is available from Android O and later. The priority is applied to the Notification Channel. The priority of an existing channel is changed only if the new priority is lower than the current value and the user has not altered any settings on this channel.  
    You can configure the priority of notifications at the app level in localnotificationconfig.xml and pushconfig.xml.  
    
*   <table style="width: 100%;"><colgroup><col style="width: 371px;"> <col style="width: 50px;"> <col></colgroup><tbody><tr><td>notify_local_msg_priority</td><td>empty</td><td>Priority for local message notification.</td></tr><tr><td>notify_push_msg_priority</td><td>empty</td><td>Priority for push message notification.</td></tr></tbody></table>
    

### Example

```

pspconfig:{
“priority” :  constants.NOTIFICATION_PRIORITY_DEFAULT
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>repeats</summary> 

* * *

An optional Boolean value that displays a notification repeatedly after a specific time interval. You must use the **repeats** function along with a **timeInterval** value.

### Syntax

repeats

### Type

Boolean

### Remarks

*   You can only set **repeats** to true if **timeInterval** is equal to or greater than 60 seconds.
    
*   If **repeats** is set to true, the notification gets repeated multiple times.
    
*   If **repeats** is set to false, the notification is fired just once.
    
*   By default, the value of **repeats** is false.
    

### Example

Repeat a notification after every 300 seconds.

```

pspconfig:{
“timeInterval”: 300
“repeats”: true
}
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>timeInterval</summary> 

* * *

An optional constant integer value that fires a notification at a time relative to the current time.

### Syntax

timeInterval

### Type

int

### Remarks

*   You should always specify the timeInterval value in seconds.
*   If values for both timeInterval and dateTime are provided, timeInterval is given higher precedence.

### Example

Fire a notification in the next 300 seconds.

```

pspconfig:{
“timeInterval”: 300
}
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>vibrate</summary> 

* * *

An optional Boolean value that fires a notification with or without the vibration of the device.

### Syntax

vibrate

### Type

Boolean

### Example

```

pspconfig:{
“vibrate”: ”true”
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>visibility</summary> 

* * *

An optional constant integer value that fires a notification with the given visibility.

### Syntax

visibility

### Type

int

### Supported Values

*   constants.NOTIFICATION\_VISIBILITY\_PRIVATE: This notification visibility value does not reveal any part of the notification on the secure lock-screen of a user's device.
*   constants.NOTIFICATION\_VISIBILITY\_PUBLIC: This notification visibility value displays the entire notification on all the lock-screens of a user's device.
*   constants.NOTIFICATION\_VISIBILITY\_SECRET: This notification visibility value displays the notification on all lock-screens of a user's device, but conceals sensitive or private information on secure lock-screens.
*   You can configure the visibility of notifications at the app level in localnotificationconfig.xml and pushconfig.xml.  
    
*   <table style="width: 100%;"><colgroup><col style="width: 371px;"> <col style="width: 50px;"> <col></colgroup><tbody><tr><td>notify_local_msg_visibility</td><td>empty</td><td>Visibility for local message notification.</td></tr><tr><td>notify_push_msg_visibility</td><td>empty</td><td>Visibility for push message notification.</td></tr></tbody></table>

### Example

```

pspconfig:{
“visibility” :  constants.NOTIFICATION_VISIBILITY_PRIVATE 
}
```

### Platform Availability

*   Android

* * *

![](resources/prettify/onload.png)
</details>