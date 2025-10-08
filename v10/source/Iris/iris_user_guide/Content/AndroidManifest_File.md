                         


The Android Manifest File
=========================

When you build an Android app by using Volt MX Iris, an `AndroidManifest.xml` file is created in the app's corresponding `dist` folder. The file is located at _WorkspaceName>/temp/<AppName>/build/luaandroid/dist_. The manifest file provides essential information about your app to the Android operating system, and Google Play store.

The Android manifest file helps to declare the permissions that an app must have to access data from other apps. The Android manifest file also specifies the app’s package name that helps the Android SDK while building the app. The Android manifest file provides information such as activities, services, broadcast receivers, and content providers of an android application.

With Volt MX Iris, you can define the following options in the `AndroidManifest.xml` file:

*   Supported screen sizes
*   Supported SDK versions: minimum, target, and maximum
*   Ability to send Push Notifications
*   Various permissions for the application

To modify the `Android Manifest.xml` file from Iris, follow these steps:

1.  From the Project Explorer, click **Project Settings**. The **Project Settings** window appears.
2.  Click the **Native** tab.
3.  Click the **Android** sub-tab, and then scroll down to the **Manifest Properties & Gradle Entries** section.
4.  Configure the Permissions, Tags, and Deeplink URL scheme tabs. More information on how to

to configure manifest properties such as [Permissions](#permissions), [Tags](#tags),and [Deeplink URL](#deeplink-url-scheme) in the Android Manifest file. [Here](#android-manifest-example) is an example of a basic Android Manifest file generated with default permissions.

Permissions
-----------

An app must have certain permissions to access data from the other apps. By default, Volt MX Iris enables and disables certain permissions in the `AndroidManifest.xml` file. When you build an application, an `AndroidManifest.xml` file is automatically generated for the app. This manifest file will contain permissions based on how you have configured those permissions. If you have not specified any permissions explicitly, default permissions would apply.

For more information on the `AndroidManifest.xml` file, refer [App Manifest](http://developer.android.com/guide/topics/manifest/manifest-intro.html) on the Android Developer site.

The following permissions are set to true and added by default:

*   ACCESS\_NETWORK\_STATE
*   INTERNET
*   READ\_PHONE\_STATE

These permissions are set to false by default. You can add the permissions according to the requirements.

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">ACCESS_COARSE_LOCATION</td><td class="TableStyle-Basic-BodyE-Column1-Body1">ACCESS_FINE_LOCATION</td><td class="TableStyle-Basic-BodyD-Column1-Body1">ACCESS_LOCATION_EXTRA_COMMANDS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">ACCESS_MOCK_LOCATION</td><td class="TableStyle-Basic-BodyE-Column1-Body1">ACCESS_SURFACE_FLINGER</td><td class="TableStyle-Basic-BodyD-Column1-Body1">ACCESS_WIFI_STATE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">ACCOUNT_MANAGER</td><td class="TableStyle-Basic-BodyE-Column1-Body1">AUTHENTICATE_ACCOUNTS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BATTERY_STATS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">BIND_APPWIDGET</td><td class="TableStyle-Basic-BodyE-Column1-Body1">BIND_DEVICE_ADMIN</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BIND_INPUT_METHOD</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">BIND_REMOTEVIEWS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">BIND_WALLPAPER</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BLUETOOTH</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">BLUETOOTH_ADMIN</td><td class="TableStyle-Basic-BodyE-Column1-Body1">BRICK</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BROADCAST_PACKAGE_REMOVED</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">BROADCAST_STICKY</td><td class="TableStyle-Basic-BodyE-Column1-Body1">BROADCAST_WAP_PUSH</td><td class="TableStyle-Basic-BodyD-Column1-Body1">CALL_PHONE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">CALL_PRIVILEGED</td><td class="TableStyle-Basic-BodyE-Column1-Body1">CAMERA</td><td class="TableStyle-Basic-BodyD-Column1-Body1">CHANGE_COMPONENT_ENABLED_STATE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">CHANGE_CONFIGURATION</td><td class="TableStyle-Basic-BodyE-Column1-Body1">CHANGE_NETWORK_STATE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">CHANGE_WIFI_MULTICAST_STATE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">CHANGE_WIFI_STATE</td><td class="TableStyle-Basic-BodyE-Column1-Body1">CLEAR_APP_CACHE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">CLEAR_APP_USER_DATA</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">CONTROL_LOCATION_UPDATES</td><td class="TableStyle-Basic-BodyE-Column1-Body1">DELETE_CACHE_FILES</td><td class="TableStyle-Basic-BodyD-Column1-Body1">DELETE_PACKAGES</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">DEVICE_POWER</td><td class="TableStyle-Basic-BodyE-Column1-Body1">DIAGNOSTIC</td><td class="TableStyle-Basic-BodyD-Column1-Body1">DISABLE_KEYGUARD</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">DUMP</td><td class="TableStyle-Basic-BodyE-Column1-Body1">EXPAND_STATUS_BAR</td><td class="TableStyle-Basic-BodyD-Column1-Body1">FACTORY_TEST</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">FLASHLIGHT</td><td class="TableStyle-Basic-BodyE-Column1-Body1">FORCE_BACK</td><td class="TableStyle-Basic-BodyD-Column1-Body1">GET_ACCOUNTS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">GET_PACKAGE_SIZE</td><td class="TableStyle-Basic-BodyE-Column1-Body1">GET_TASKS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">GLOBAL_SEARCH</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">HARDWARE_TEST</td><td class="TableStyle-Basic-BodyE-Column1-Body1">INJECT_EVENTS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">INSTALL_LOCATION_PROVIDER</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">INSTALL_PACKAGES</td><td class="TableStyle-Basic-BodyE-Column1-Body1">INTERNAL_SYSTEM_WINDOW</td><td class="TableStyle-Basic-BodyD-Column1-Body1">KILL_BACKGROUND_PROCESSES</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">MANAGE_ACCOUNTS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">MANAGE_APP_TOKENS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">MASTER_CLEAR</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">MODIFY_AUDIO_SETTINGS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">MODIFY_PHONE_STATE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">MOUNT_FORMAT_FILESYSTEMS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">MOUNT_UNMOUNT_FILESYSTEMS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NFC</td><td class="TableStyle-Basic-BodyD-Column1-Body1">PERSISTENT_ACTIVITY</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">PROCESS_OUTGOING_CALLS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_CALENDAR</td><td class="TableStyle-Basic-BodyD-Column1-Body1">READ_CONTACTS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_FRAME_BUFFER</td><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_HISTORY_BOOKMARKS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">READ_INPUT_STATE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_LOGS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_SMS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">READ_SYNC_SETTINGS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">READ_SYNC_STATS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">REBOOT</td><td class="TableStyle-Basic-BodyD-Column1-Body1">RECEIVE_BOOT_COMPLETED</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">RECEIVE_MMS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">RECEIVE_SMS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">RECEIVE_WAP_PUSH</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">RECORD_AUDIO</td><td class="TableStyle-Basic-BodyE-Column1-Body1">REORDER_TASKS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">RESTART_PACKAGES</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SEND_SMS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_ACTIVITY_WATCHER</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SET_ALARM</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_ALWAYS_FINISH</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_ANIMATION_SCALE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SET_DEBUG_APP</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_ORIENTATION</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_PREFERRED_APPLICATIONS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SET_PROCESS_LIMIT</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_TIME</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_TIME_ZONE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SET_WALLPAPER</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SET_WALLPAPER_HINTS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SIGNAL_PERSISTENT_PROCESSES</td><td class="TableStyle-Basic-BodyD-Column1-Body1">STATUS_BAR</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SUBSCRIBED_FEEDS_READ</td><td class="TableStyle-Basic-BodyE-Column1-Body1">SUBSCRIBED_FEEDS_WRITE</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SYSTEM_ALERT_WINDOW</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">UPDATE_DEVICE_STATS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">USE_CREDENTIALS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">USE_SIP</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">VIBRATE</td><td class="TableStyle-Basic-BodyE-Column1-Body1">WAKE_LOCK</td><td class="TableStyle-Basic-BodyD-Column1-Body1">WRITE_APN_SETTINGS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">WRITE_CALENDAR</td><td class="TableStyle-Basic-BodyE-Column1-Body1">WRITE_CONTACTS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">WRITE_EXTERNAL_STORAGE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">WRITE_GSERVICES</td><td class="TableStyle-Basic-BodyE-Column1-Body1">WRITE_HISTORY_BOOKMARKS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">WRITE_SECURE_SETTINGS</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">WRITE_SETTINGS</td><td class="TableStyle-Basic-BodyB-Column1-Body1">WRITE_SMS</td><td class="TableStyle-Basic-BodyA-Column1-Body1">WRITE_SYNC_SETTINGS</td></tr></tbody></table>

### Set Android Manifest Permissions

You can modify the permissions in the `AndroidManifest.xml` file based on the requirements of the application.

To set the permissions in the Android Manifest file, follow these steps:

1.  In Volt MX Iris, from the Project Explorer, click **Project Settings**. The **Project Settings** window appears.
2.  Click the **Native** tab.
3.  Click the **Android** sub-tab and then scroll down to the **Manifest Properties & Gradle Entries** section.
4.  To enable permissions, select the permissions from the left pane and click **Add >**.  
    For example, If you need to save images to an external storage device such as USB drive or SD card, add the WRITE\_EXTERNAL\_STORAGE setting.

    > **_Note:_** To select multiple permissions, hold the **Ctrl** key and click the permissions. To select continuously listed permissions, hold the **Shift** key and click the permissions.

5.  To disable permissions, select the permissions from the right pane and click **< Remove**.
6.  Click **Finish**.  
    When you build the app, Volt MX Iris generates the manifest file with the permissions that you specified.
    
    *   If the app lists _normal_ permissions in its manifest (permissions that don't pose risk to the user's privacy or the device's operation), the system automatically grants those permissions to the app.
    *   If the app lists _dangerous_ permissions in its manifest (permissions that could potentially affect the user's privacy or the device's normal operation), the app must explicitly request those permissions.

For more information on requesting runtime permissions, refer [Runtime Permissions](../../../Iris/iris_api_dev_guide/content/runtime_permissions.md).

For more information on the list of dangerous permissions, refer [Dangerous Permissions List](https://developer.android.com/guide/topics/permissions/overview#dangerous-permission-groups).

Tags
----

Apart from the permissions, you can also configure tags such as application and activity. Following is a list of the manifest tags that can be configured from Iris:

*   Child Tag entries under <manifest> tag
*   Child Tag entries under <application> tag
    
*   Application Tag Attributes (ex: android:name=”string”)
    
*   Manifest Tag Attributes
    
*   Child Tag Entries under Main Launcher <activity> tag
    
*   Main Launcher <activity> Tag Attributes
    

For example, manifest attributes can be modified in the Android manifest file as follows.

```
<manifest xmlns: android = "http://schemas.android.com/apk/res/android"  
xmlns: tools = "http://schemas.android.com/tools"
package = "com.orgname.Sample"
android: versionCode = "1"
android: versionName = "1.0.0" //Manifest attributes>

```

For more information on Android Manifest tags and their attributes, refer [Manifest Elements](https://developer.android.com/guide/topics/manifest/manifest-element)

Deeplink URL Scheme
-------------------

You can use the URL Scheme tab for [Deeplinking](AppServiceEvent.md). The values for Scheme/ port/ path/host/pathprefix/path pattern specified under the Deeplink URL tab can be used to deep-link to a particular URL directly.

For example, if a scheme is defined as https and a host is defined as www.example.com, the following entry will be added to the `Android manifest.xml` file under intent-filter tag of default activity.

```
<intent-filter> <data android: scheme = "https"
android: host = "www.example.com"/> </intent-filter>

```

Android Manifest Example
------------------------

The following is a basic `AndroidManifest.xml` file that is generated with default permissions.

```
<? xml version = "1.0"
encoding = "utf-8" ?>
//Manifest attributes

< manifest
xmlns: android = "http://schemas.android.com/apk/res/android"
xmlns: tools = "http://schemas.android.com/tools"
package = "com.orgname.Sample"
android: versionCode = "1"
android: versionName = "1.0.0" >
//Application attributes are added here  

< application
android: name = "com.konylabs.android.KonyApplication"
android: icon = "@drawable/Sample_icon"
android: label = "@string/app_name"
tools: remove = "supportsRtl"
tools: replace = "icon" >
//Activity attributes are added here  

< activity
android: name = ".Sample"
android: configChanges = "locale|keyboardHidden|orientation|screenSize|screenLayout"
android: label = "@string/app_name"
android: launchMode = "singleTask"
android: screenOrientation = "sensor"
android: theme = "@style/Theme.AppCompat.NoActionBar"
android: windowSoftInputMode = "adjustResize" > < intent - filter > < action android: name = "android.intent.action.MAIN" / > < category android: name = "android.intent.category.LAUNCHER" / > < /intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEARCH" / > < category android: name = "android.intent.category.DEFAULT" / > < /intent-filter>
            <meta-data
                android:name="android.app.searchable"
                android:resource="@xml/searchable
" /> //Deeplink text is added here
//Add Child Tag Entries under Main Launcher here if required 
    
        </activity>
        <meta-data
            android:name="
android.app.default_searchable "
            android:value=".VoltMXMain " />
        <provider
            android:name="
com.orgname.Sample.SampleSearchSuggestionProvider "
            android:authorities="
com.orgname.Sample.SampleSuggestionProvider " />
    </application>
    //supported screens
    <supports-screens
        android:anyDensity="
true "
        android:largeScreens="
true "
        android:normalScreens="
true "
        android:smallScreens="
true "
        android:xlargeScreens="
true " />
	//These are the default permissions set as true
    // Add permissions here
    
    <uses-permission android:name="
android.permission.READ_PHONE_STATE " />
    <uses-permission android:name="
android.permission.ACCESS_NETWORK_STATE " />
    <uses-permission android:name="
android.permission.INTERNET " />
	
	//Add the Manifest child tags here if required


</manifest>

```
