# Android 13 Behavioral Changes

In this document, we will explain the various Android 13 (API Level 33) behavioral changes that are observed when apps run on Android 13 devices.

## Runtime Permissions for Notifications

With the Android 13 release, Google has introduced a runtime permission for notifications. The OS handles the notification access based on the TargetSDK level of the installed app as follows:

*   For a new app that is installed on the device:
    *   If the TargetSDK API Level of the app is 32 (or lower), the OS displays the runtime permission dialog box when the app is relaunched and triggers a notification (the app creates its first notification channel).
    *   If the TargetSDK API Level of the app is 33, you must add the `android.permission.POST_NOTIFICATIONS` permission in the app's Manifest file. The app must display the runtime prompt to the user to grant the permission as the permission has a high protection level (dangerous).

        <span class="autonumber"><span>**<span style="color: #293276;" class="mcFormatColor">NOTE:</span> **</span></span>For apps that do not have this permission granted by the user, the OS silently drops notifications for the app.

*   For an existing app that is already installed on the device:
    *   If the TargetSDK API Level of the app is 32 (or lower), the OS temporarily grants the app with permission to display notifications until the user explicitly selects an option in the dialog box. The user can modify the permission in the System Settings to stop the temporary approval for permission.
    *   If the TargetSDK API Level of the app is 33, the OS temporarily grants the app with permission to display notifications until the user launches an activity in the app. The app must also have an existing notification channel, and the user must not have explicitly disabled the app's notifications.

The runtime permission notification dialog box contains the **Allow** and **Don't Allow** options. If a user selects **Allow**, the app displays the notifications through any channel and shows notifications related to foreground services. If the user swipes the notification away, the app can only display notifications if the OS grants a temporary access to the app to send notifications. If the user selects Don't Allow, the app cannot display notifications through any channel except for a few specific roles. To enable notifications again, the user must manually enable notifications through the System Settings. However, if the app still does not display notifications, the user must uninstall the app and reinstall it after the TargetSDK version of the app has been updated. After the app is installed, the runtime permission request appears with the Allow and Don't Allow options. The user must enable notifications to receive notifications.  

## Foreground Service Task Manager

In Android 13 devices, users can stop foreground services from the Foreground Services (FGS) Task Manager in the notification drawer. The Foreground Services Task Manager displays a list of apps that are currently running a foreground service (called active apps) with a **Stop** button next to each app. When a user taps the Stop button next to an app, the entire app stops (including the running foreground service).

### Dismiss Foreground Service Notifications

In Android 13 devices, users can swipe foreground service (FGS) notifications away, by default. If the foreground services of an app have been running for more than 20 hours in a 24-hour window, the OS displays an interactive notification to the user through the Foreground Services Task Manager. However, if the foreground service is of the `FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK` or `FOREGROUND_SERVICE_TYPE_LOCATION` types, the OS does not display the foreground service notification.