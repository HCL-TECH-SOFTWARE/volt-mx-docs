                             

You are here: Notification APIs

Notifications
=============

Notifications are the means to keep the users informed about relevant events in your app such as a calendar event and a news update.

Notifications are of two types:

*   [Local Notifications](local_notifications.md): These notifications are scheduled in the app locally and delivered to the same device. Example, calendar event.
*   [Push Notifications](push_notifications.md): These notifications are sent from a remote server to the device on which the app is installed. For example, if you have installed a news app in your device, you will receive timely news updates for that app.

For more information on notification settings, refer [Notification Settings](notificationsettings.md).

The Notifications API comprises of the following Namespaces and functions:

[voltmx.localnotifications Namespace](voltmx.localnotifications_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.localnotifications.cancel](voltmx.localnotifications_functions.md#voltmx.loc3) | Cancels the specified notifications. |
| [voltmx.localnotifications.create](voltmx.localnotifications_functions.md#voltmx.loc2) | Creates a local notification. |
| [voltmx.localnotifications.getNotifications](voltmx.localnotifications_functions.md#getNotifications) | Retrieves the pending local notifications. |
| [voltmx.localnotifications.setCallbacks](voltmx.localnotifications_functions.md#voltmx.loc) | Associates online and offline callbacks for local notifications. |

[voltmx.push Namespace](voltmx.push_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.push.deRegister](voltmx.push_functions.md#volt-mx-push-deregister) | Allows an application on a device to deregister from Push Notifications. |
| [voltmx.push.register](voltmx.push_functions.md#volt-mx-push-register) | Allows you to register the application and the mobile device for Push Notifications. |
| [voltmx.push.setCallbacks](voltmx.push_functions.md#volt-mx-push-setcallbacks) | You can specify the functions to be executed for Push Notification in an Object for this API. |

[voltmx.notificationsettings Namespace](voltmx.notificationssettings_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.notificationsettings.createAction](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createaction) | Creates an action that can be used with category. |
| [voltmx.notificationsettings.createCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createcategory) | Creates a category with a group of created actions. |
| [voltmx.notificationsettings.registerCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-registercategory) | Registers the created category with the application. |
| [voltmx.notificationsettings.pickTitleAndDescriptionFromPushPayload](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-picktitleanddescriptionfrompushpayload) | The Title and Description details of the payload are considered when the value is set to true. |
| [voltmx.notificationsettings.setShowBadge](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-setshowbadge) | Enables or disables notification badges for push or local notifications that are only supported by Volt MX Iris Framework. |

 

The Notifications API enables you to set local notifications, register for push notifications and configure various notification settings.

To design a local notification, use the [voltmx.localnotifications.create](voltmx.localnotifications_functions.md#voltmx.loc2) function. Use the [voltmx.localnotifications.setCallbacks](voltmx.localnotifications_functions.md#voltmx.loc) function to configure callbacks depending on the type of the notification that is triggered. If you want to see pending notifications, use the [voltmx.localnotifications.getNotifications](voltmx.localnotifications_functions.md#getNotifications) function. To cancel a local notification, use the [voltmx.localnotifications.cancel](voltmx.localnotifications_functions.md#voltmx.loc3) function.

To enroll an application on your device for Push Notifications, use the [voltmx.push.register](voltmx.push_functions.md#volt-mx-push-register) function. Then configure the callbacks by using the [voltmx.push.setCallbacks](voltmx.push_functions.md#volt-mx-push-setcallbacks) function. If you want to stop receiving push notifications for an application use the [voltmx.push.deRegister](voltmx.push_functions.md#volt-mx-push-deregister) function.

You can also configure various notification settings. Create an actions on the notification interface such as accept or decline a calendar event by using the [voltmx.notificationsettings.createAction](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createaction) function. Then give a unique ID to the group of actions created by using the [voltmx.notificationsettings.createCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createcategory) function. Register the created category with the application by using the [voltmx.notificationsettings.registerCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-registercategory) function. You can also display a badge on the push or local notifications by using the [voltmx.notificationsettings.setShowBadge](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-setshowbadge) function.

