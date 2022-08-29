                             


Notification Settings
=====================

> **_Note:_** Notification setting APIs work on the following OS versions.  
  
       •   iOS8 and above  
  
       •   Android 4.1 and above  

You can send actionable notifications using the notification setting APIs. User notifications can have additional custom actions. Two actions can be displayed on the lock screen, in a banner, and in the Notification Center. In alerts, notifications can display up to four actions when a user taps the Options button. To use notification actions in your app, you need to register the actions, schedule a local notification or a remote notification, and handle the action chosen by the user.

Following are the types of notifications:

*   Alert or Banner: Based on the preferences a user sets in the devices, a notification is shown using either an alert view or a banner. Both the alert and banner should contain the message of the notification.
*   Sound: A predefined or a custom sound is played when the notification is fired. In most cases, users will not look at the device all the time, so any notifications could be easily overlooked.
*   Badge: A badge number can also be shown in the app’s icon when a new notification is fired. The badge number must be increased by one with a new notification, and then decreased when the notification is handled. iOS automatically shows and hides the badge, depending on whether there is a value other than zero to display.

Actions, Categories, Settings, and Badges
-----------------------------------------

**Actions**: Specifies the actions that any user can perform to interact with the notification message. Actions are presented as buttons and defined by the voltmx.notificationsettings.createAction API.

**Categories**: Specifies a group of actions into a category. They categories are defined by the voltmx.notificationsettings.createCategory API.

**Settings**: The settings must be registered by the application, and they contain all the categories and notification types that we create. These settings are defined by the voltmx.notificationsettings.registerCategory API.

Badges: Notification badges (also known as notification dots) appear on a launcher icon when the associated app has an active notification. Users can long-press the app icon to reveal the notifications (alongside any app shortcuts). These dots appear by default in launcher apps that support them, and there is nothing that your app needs to do. However, there might be situations in which you don't want the to notification dot to appear or you want to control exactly which notifications to appear there, so you can disable them on a per-channel basis. These settings are defined by the voltmx.notificationsettings.registerCategory.setShowBadge API.

Following are the notification settings APIs:

*   [voltmx.notificationsettings.createAction](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createaction)
*   [voltmx.notificationsettings.createCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-createcategory)
*   [voltmx.notificationsettings.registerCategory](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-registercategory)
*   [voltmx.notificationsettings.setShowBadge](voltmx.notificationssettings_functions.md#volt-mx-notificationsettings-setshowbadge)
    

![](resources/prettify/onload.png)
