                          

Customize FCM Service
=====================

Volt MX Iris for Android development allows you to customize the native Google Firebase Cloud Messaging (FCM) service and push message status notification to meet your application requirement. Otherwise, the default settings of Volt MX Iris take effect.

Integrate FCM
-------------

You must create a project in Google Firebase console and download the google-services.json file provided by Firebase.

You must create FCM folders in the following locations:

For Mobile: ProjectLocation\\resources\\mobile\\native\\android\\fcm

For Table: ProjectLocation\\resources\\tablet\\native\\androidtab\\fcm

Integrate pushconfig.xml
------------------------

The `pushconfig.xml` file is pre-bundled in the Android application structure in Volt MX Iris. This `pushconfig.xml` file is available once the application is built in Volt MX Iris.

To locate and integrate the `pushconfig.xml` into the application, do the following:

1.  Build your application for the Android platform. Once the build is complete, the Build Generation Status dialog appears.
2.  Click **OK**. The dialog closes.
3.  Open the build folder. To open the build folder, press **Ctrl + Alt + T**, or click the **Open Resource location** drop-down and select **Open Build Folder**.
4.  Navigate to `build\luaandroid\dist\<App_Name>\res\values`.
5.  Select and copy the `pushconfig.xml` file.
6.  Click **Open Resource location** drop-down and select **Open Resource location**.
7.  Paste the file in the following location:
    
    `resources/mobile/native/android/values` (create this folder structure if it does not exist).
    
8.  Open the `pushconfig.xml` and [modify](#modify-the-pushconfig-xml-file) values to override the default behavior.

The following table describes the icon names used in this topic:

  
| Icon | Name |
| --- | --- |
| ![](Resources/Images/OpenResouceLocation.png) | _**Open Resource Location** icon_ |

You can modify or customize push notification in two ways:

1.  By [modifying pushconfig.xml file](#modify-the-pushconfig-xml-file) - Used for modifying only a defined set of options.
2.  By [](#customize-konyfcmservice)[customizing KonyFCMService class](#Modifyin2)\-Used for modifying the way messages appear and other advance options.

Modify the pushconfig.xml File
------------------------------

The default behavior of the FCM notification message can be customized by modifying the `pushconfig.xml` file. The `pushconfig.xml` file contains key value pairs that allow applications to configure individual keys to override the default behavior.

The registration allows the application to receive the registration ID. The intent can be sent at any time. Google may periodically refresh the receiver ID. An application receiving this intent with a registration\_id parameter must ensure that the third-party application server (for example, VPNS) receives the registration ID. The application may do so by saving the registration ID and sending it to the server. If the network is down or there are errors, the application should resend the registration ID when the network is up again or the next time it starts. An application should keep track of its registration status and attempt to register again if the process is not completed. If the new registration ID arrives while the app is not running, a notification appears on the status bar.

A couple of keys in `pushconfig.xml` are provided to customize the notification.

The table below shows a list of key value pairs, each with a brief description.

  
| Notification ID | Default Value | Description |
| --- | --- | --- |
| notify\_new\_regid | true | Enable or disable new registration ID notifications. If disabled, new registration IDs are not issued to the application when it is offline. |
| notify\_new\_regid\_icon | icon (.png file) | Specify icon resource without extension. For example, logo for logo.png. The default is icon.png |
| notify\_new\_regid\_title | ID | Text to show for new registration ID notification as title. Since a new registration ID event does not contain any payload, an application can show some meaningful text to the user. |
| notify\_new\_regid\_desc |   | Text displays new registration ID notification. |
| notify\_new\_regid\_sound | false | Enable or disable sound for new registration ID notification. |
| notify\_new\_regid\_vibrate | false | Enable or disable vibrate for new registration ID notification. |
| notify\_new\_regid\_lights | false | Provides option to clear unread new registration ID notification. |
| notify\_push\_msg | true | Enable or disable new push message notifications. If false, no status bar notification is shown when application is running in background. |
| notify\_push\_msg\_notifications\_count | 1 | By default, only latest push message notification is kept in the status bar. Use this option to control the number of messages to be stored. The maximum limit allowed in Android is 50. > **_Note:_** After exceeding the storage limit, older messages are replaced with newer messages. However, sometimes older notifications are replaced with newer messages even before it reaches the specified count (this happens when the app is closed by Android system) |
| notify\_push\_msg\_icon | icon | Specify icon resource without extension. For example, logo for logo.png. The default is icon.png. |
| notify\_push\_msg\_default\_title | new push message | Title is used for new push message notifications if "title\_from\_payload" is set to false. |
| notify\_push\_msg\_title\_from\_payload | true | Indicates whether to pick notification title from the push message. If true, _notify\_push\_msg\_title\_keys_ is used to pick the notification title. |
| notify\_push\_msg\_title\_keys |   | Key to be used to pick the notification title. Keys separated by a comma (,) can be provided, and the first available key in a payload is used as a notification title. |
| notify\_push\_msg\_default\_desc |   | Used to provide new push message notifications description only when _desc\_from\_payload_ is set to false. |
| notify\_push\_msg\_desc\_from\_payload | true | Indicates whether to pick notification description from push message. if true, _notify\_push\_msg\_desc\_keys_ is used to pick the notification description. |
| notify\_push\_msg\_desc\_keys |   | Used to pick the notification description. Keys separated by a comma (,) can be provided, and the first available key in a payload is used as a notification description. |
| notify\_push\_msg\_sound | true | Enable or disable sound for push message notification. |
| notify\_push\_msg\_vibrate | true | Enable or disable vibrate for push message notification. |
| notify\_push\_msg\_lights | true | Enable or disable lights for push message notification. |
| notify\_push\_msg\_clear | true | Indicates that the user must take action to clear the push message notification. Setting the value to _false_ clears the push message notification without user intervention. |
| notify\_push\_msg\_channel\_title | Remote Notifications | This key provides the title to be used for a push notification channel. If this key is used, you cannot provide an empty value to it. |
| notify\_push\_msg\_channel\_desc | All remote notifications will be displayed under this category | This key provides the description to be used for a push notification channel. If this key is used, you cannot provide an empty value to it. |
| use\_same\_channel\_details\_for\_local\_notifications | false | When the value of this key is provided as true, a common channel is used for remote and local push notifications. |

Customize KonyFCMService
------------------------

If you need to customize FCM apart from what is provided in the `pushconfig.xml` file, you can replace the platform default FCM broadcast receiver with the custom FCM Service. The custom FCM service inherits from the default Volt MX FCM Service receiver _KonyFCMService_ class that is available in `voltmx-push-notifications-apis.jar`. Provide a fully qualified class name in Volt MX Iris by going to `Properties->NativeApp->Android->Push Notification`.

Customizing the KonyFCMService class allows you to:

*   Create a multi-line notification in the status bar.
*   Know the arrival of a push message immediately even when the application is in the background.
*   Handle an offline push messages when the application is in the background.

Here is an example of a custom FCM Service:

```
Custom KonyFCMService

package com.voltmx.push.custom;

import com.konylabs.fcm.KonyFCMService;
public class CustomKonyFCMService extends KonyFCMService {

    //This method is called for new push message arrival when app is not running in   
    // foreground. (Note: this will not be called is if GCM v3.0 payload is enabled)

    @
    Override public void showPushMessageNotification(Context context, Map & lt; String, String & gt; data) {
        //custom implementation goes here


        String pkgName = context.getPackageName();
        long when = System.currentTimeMillis();
        //pick desired icon as notification icon
        int icon = context.getResources().getIdentifier("icon",
            "drawable", pkgName);
        String[] bigViewLines = new String[6];
        String key = null;
        String desc = null;
        String randomKey = null;
        //taking some random key from payload bundle
        Set & lt;
        String & gt;
        keySet = data.keySet();
        if (keySet != null & amp; & amp; keySet.isEmpty() == false) {
            Iterator & lt;
            String & gt;
            it = keySet.iterator();
            int i = 0;
            while (it.hasNext() & amp; & amp; i & lt; 6) {
                key = it.next();
                desc = data.get(randomKey);
                bigViewLines[i] = key + " : " + desc;
                ++i;
            }
        }

        /* Using utility method 'createNotificationPendingIntent()'
                                   to get the notification pending intent. This utility method
                                   creates the pending intent as expected by the Volt MX Iris Android
                                   platform
                                */
        PendingIntent contentIntent = createNotificationPendingIntent(context,
            data, 0);


        /* Creation of BIG-VIEW notification  */
        NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(this);

        if (VoltMXMain.mSDKVersion & gt; = 26) {

            NotificationManager mNotificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            String channelId = "channel id";
            String channelName = "channel name";
            String channelDescription = "channel description";
            if (mNotificationManager.getNotificationChannel(channelId) == null) {
                NotificationChannel channel = new NotificationChannel(channelId,
                    channelName,
                    NotificationManager.IMPORTANCE_DEFAULT);
                channel.setDescription(
                    channelDescription);
                mNotificationManager.createNotificationChannel(channel);
            }
            mBuilder.setChannelId(channelId);

        }

        mBuilder.setContentTitle("New push Message");
        mBuilder.setContentText("You've received new push message.");
        mBuilder.setTicker("New Push Message Alert!");
        mBuilder.setSmallIcon(R.drawable.icon);
        Bitmap icon_2 = BitmapFactory.decodeResource(this.getResources(),
            R.drawable.icon);
        mBuilder.setLargeIcon(icon_2);
        /*
                                Increase notification number every time a new notification
                                arrives
                                */
        mBuilder.setNumber(5);
        /* Add Big View Specific Configuration */
        NotificationCompat.InboxStyle inboxStyle =
            new NotificationCompat.InboxStyle();
        // Sets a title for the Inbox style big view
        inboxStyle.setBigContentTitle("Push Message Details:");
        // Moves events into the big view
        for (int i = 0; i & lt; bigViewLines.length; i++) {
            inboxStyle.addLine(bigViewLines[i]);
        }
        inboxStyle.setSummaryText("Click to Launch");
        mBuilder.setStyle(inboxStyle);
        mBuilder.setContentIntent(contentIntent);
        mBuilder.addAction(R.drawable.marker, "Launch",
            contentIntent);
        mBuilder.addAction(R.drawable.cancel, "Cancel",
            contentIntent);
        NotificationManager mNotificationManager = (NotificationManager)
        getSystemService(Context.NOTIFICATION_SERVICE);

        /*
                                notificationID allows you to update the notification later on.
                                */
        mNotificationManager.notify(1, mBuilder.build());

    }

}
```
