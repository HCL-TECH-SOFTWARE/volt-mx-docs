                            

You are here: ForceTouch API

ForceTouch API
==============

Force Touch API enables your applications to support 3D Touch features on iOS and Android devices. Using the Force Touch API, a device can sense the amount of pressure you apply on the display, and trigger different actions. You need not explicitly open an app to perform an action. For iOS, you can add a list of quick actions and for Android, you can add app shortucts that you want the app to display when you hold and swipe the app on a device's home screen.

The Force Touch API uses `voltmx.forceTouch Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.forcetouch.disableQuickActionItems](voltmx.forcetouch_functions.md#disableQuickActionItems) | Disables pinned shortcuts that were previously enabled. |
| [voltmx.forcetouch.enableQuickActionItems](voltmx.forcetouch_functions.md#enableQuickActionItems) | Enables pinned shortcuts that were previously disabled. |
| [voltmx.forcetouch.getPinnedQuickActionItems](voltmx.forcetouch_functions.md#getPinnedQuickActionItems) | Returns an ID list of all the pinned Quick Action items. |
| [voltmx.forcetouch.getQuickActionItems](voltmx.forcetouch_functions.md#getQuick) | Retrieves an array of dynamic Quick Action items that are set in the app. |
| [voltmx.forcetouch.getStaticQuickActionItems](voltmx.forcetouch_functions.md#getStaticQuick) | Returns an array of immutable or static Quick Action items that are set in the app. |
| [voltmx.forcetouch.removeQuickActionItems](voltmx.forcetouch_functions.md#removeQu) | Removes all the dynamic Quick Action items that are set in the app. |
| [voltmx.forcetouch.removeQuickActionItems](voltmx.forcetouch_functions.md#removeQu2) | Removes the array of specified dynamic Quick Action items. |
| [voltmx.forcetouch.setQuickActionItems](voltmx.forcetouch_functions.md#setQuick) | Sets dynamic Quick Action items in the app. |

 

Quick actions can be static or dynamic. To configure dynamic quick actions that you want the app to display when you hold and swipe the app icon, use the [voltmx.forcetouch.setQuickActionItems](voltmx.forcetouch_functions.md#setQuick) function. These quick actions are visible during run time, that is when you launch an app. Then you can find the list of all the quick actions that are created dynamically by using the [voltmx.forcetouch.getQuickActionItems](voltmx.forcetouch_functions.md#getQuick) function. Futher, find the list of quick actions that are set at compile time in by using the [voltmx.forcetouch.getStaticQuickActionAItems](voltmx.forcetouch_functions.md#getStaticQuick) function. These quick actions are set at build time and are visible when you install or update an app.

The quick actions can be pinned to the app icon by using the [voltmx.forcetouch.enableQuickActionItems](voltmx.forcetouch_functions.md#enableQuickActionItems) function. After you enable the quick actions, you can view the list of all the pinned quick actions by using the [voltmx.forcetouch.getPinnedActionItems](voltmx.forcetouch_functions.md#getPinnedQuickActionItems) function. In case you want to unpin any quick action item, you can disable the pinned shortcut by using the [voltmx.forcetouch.disableQuickActionItems](voltmx.forcetouch_functions.md#disableQuickActionItems). To delete the quick action, use the [voltmx.forcetouch.removeQuickActionItems](voltmx.forcetouch_functions.md#removeQu2) function.

Overview
--------

The ForceTouch API provides functions to support 3D Touch features. Devices that support 3D Touch can sense how much pressure the user applies to the display. The ForceTouch API supports the following features.

*   [Quick Actions](#quick-actions)
*   [App Shortcuts](#application-shortcuts)
*   [Peek and Pop](#peek-and-pop)
*   [Force Properties](#force-properties)

### Quick Actions

Quick Actions enables users to select actions from the home screen with a single touch. Quick Actions can display one line of a title, one line of subtitle, and an optional icon. For example, a user can create a Quick Action to start a message to a contact, or bring up the camera for a selfie.

There are two types of Quick Actions:

*   **Static Quick Actions** - Static Quick Actions must be configured in Volt MX Iris.
*   **Dynamic Quick Actions** - Dynamic Quick Actions are dynamically created using the APIs of the voltmx.forcetouch namespace.

A maximum of four Quick Actions, both dynamic and static, are displayed on the home screen. The static items are displayed first, then the dynamic items.

In addition, each widget supports the following methods for 3D Touch support.

*   \<widget>.registerForPeekAndPop
*   \<widget>.unregisterForPeekAndPop
*   \<widget>.setOnPeek
*   \<widget>.setOnPop
*   \<flexformwidget>.setPreviewActionItems

Here \<widget> is the name of the widget, such as Button or Label, and \<flexformwidget> is the name of the Flex Form widget, such as FlexForm or FlexScrollContainer. For more information about the methods, refer [in Volt MX Iris Widget User Guide](../../../Iris/iris_widget_prog_guide/Content/Overview.md)



For more information about 3D Touch and Quick Actions, see the [Apple documentation](https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/).

#### Handling Quick Actions

Quick actions are processed in a callback function. You can set this callback function in your app by invoking the [voltmx.application.setApplicationInitializationEvents](voltmx.application_functions.md#voltmxapplicationinitialization) function. The `voltmx.application.setApplicationInitializationEvents` function takes one parameter that is a JavaScript object containing key-value pairs. Each of the keys specifies a different callback function, and each of the values are the callback function to set.

The callback function that your app uses to process force touch events is associated with the `appservice` key. The event handler for the `appservice` key is typically referred to as the appservice event handler. When the appservice event handler is invoked, its parameter list receives the launch mode and launch parameters as arguments. With these, your application can identify when a quick action has been invoked by the users and which action was triggered. The appservice event handler's parameter is a JavaScript object that holds key-value pairs. The keys for accessing the launch mode and launch parameters are "launchmode" and "launchparams", respectively.

The following sample code illustrates how an appservice event handler function that processes quick actions might look.

```
function onAppServiceCallback(params) {
    alert("launchoptions: " + JSON.stringify(params));

    // If launch mode = 3 and quickactionitem key present in launchparams
    // denotes quick action item launch.
    if (params.launchmode == 3) {
        var quickActionItem = params.launchparams.quickactionitem;
        if (quickActionItem) {
            if (quickActionItem.id == "firstform") {
                return frmFirst;
            } else if (quickActionItem.id == "mapviewform") {
                return frmSecond;
            } else if (quickActionItem.id == "basket") {
                return frmThird;
            } else if (quickActionItem.id == "AccountDetails") {
                return frmFourth;
            }
        }
    }
}
```

As the sample code shows, your app must retrieve the launch mode to determine whether or not the user triggered a quick action. Once it has done so, it can determine which quick action was triggered and react accordingly.

> **_Note:_** The `appservice` function returns a form handle based on the Quick Action item it receives. Do not invoke the `form.show` method from the `appservice` callback.

#### Quick Actions and Internationalization

To support the internationalization of quick actions, your app must supply some code in the callback function for the `preappinit` event. Your app sets the callback function to the `preappinit` event by calling the [voltmx.application.setApplicationInitializationEvents](voltmx.application_functions.md#voltmxapplicationinitialization) function. You app passes the `voltmx.application.setApplicationInitializationEvents` function a JavaScript object with key-value pairs. The `"preappinit"` key sets the callback function for the `preappinit` event. The following is an example of what your callback function might look like.

```
 preAppInt(){
    var previousLocale = voltmx.store.getItem("applinkLocale")
    var currentLocale = voltmx.i18n.getCurrentLocale();

    if (previousLocale != null && previousLocale != currentLocale) {
        // Update the dynamic shortcuts using api.
        var quicknotificationitems = getApplicationQuickNotificationItems();
        if(quicknotificationitems!=null) {
            voltmx.forcetouch.setQuickActionItems(quicknotificationitems); 
        }                  
    } else {
        voltmx.store.setItem(applinkLocale)
    }
}
```

The example above shows that the callback function for the `preappinit` event can check the local of the user's device and update the locale strings for the quick action shortcuts. In this way, you can internationalize your app.

### Peek and Pop

Apps that support the Peek ForceTouch action can indicate to the user that a preview of app content is available. Pressing on the app's icon then opens the preview, which is termed _peeking_. If the user continues to press, the app navigates to the view shown in the preview. The action of navigating to the view is called a _pop_.

Peek and Pop are implemented through FlexForm widgets. For more information, please refer to the [in Volt MX Iris Widgets Programmer's Guide](../../../Iris/iris_widget_prog_guide/Content/Overview.md).

### Force Properties

Apps can use the extended pressure-sensing capabilities of the iPhone 6s and iPhone 6s Plus display. The set of touch events supported on the widgets are onTouchStart, onTouchMove, onTouchEnd. These events include contextInfo table which includes force key-value pair on devices supporting force touch.

**Example**

```
contextInfo [“force”] : number

onTouchStart (source, x, y, contextInfo){
	if(contextInfo){
var force = contextInfo[“force”];
		voltmx.print(“value of force is ” + force)
}
}
```

The predetermined value of force for an average touch is 1.0

### Application Shortcuts

The Application shortcut feature is available on Android from API level 25 and later. Similar to quick actions on iOS, when you long press an app icon in Android, a list of shortcuts appear. Using the app shortcuts, you can directly navigate to a specific page in the app. You can drag a shortcut to the phone launcher.

Android supports two types of Application Shortcuts:

*   Static Shortcuts
*   Dynamic Shortcuts

#### Static Shortcuts

Static shortcut properties need to be declared in an XML file and the values of the properties or attributes for the shortcut XML must be declared in Android Resources. No direct strings are allowed or accepted by Android.

You can create static shortcuts manually by adding the XML files in their respective folders and then updating the manifest entries from IDE.

##### Creating Static Shortcuts Manually

1.  Create an shortcut xml file as shown in the example below, and copy the file in the created directory in XML: \\<application\_resoruce\_dir>\\resources\\mobile\\native\\android location.
2.  Include a meta-data tag to the main launcher activity for the child tag of a manifest file in project settings of IDE.

Example

```
<?xml version="1.0" encoding="utf-8"?>
<shortcuts xmlns:android="http://schemas.android.com/apk/res/android">
<shortcut
android:shortcutId="shortcutid"
android:enabled="true/false"
android:icon="@drawable/icon"
android:shortcutShortLabel="@string/myFirstshortcut"
android:shortcutLongLabel="@string/MY_FIRST_SHORTCUT"
android:shortcutDisabledMessage="@string/shortcut_is_disabled">
<intent
android:action="applicationpackage.appshortcut.formid"
android:targetPackage="applicationpackage"
android:targetClass="applicationpackage.appname" >
<extra android:name="platform" android:value="android" />
<extra android:name="feature” android:value="appshortcut" />
<extra android:name="id” android:value="formidentifier" />
</intent>
</shortcut>
</shortcuts>
```

> **_Note:_** Provide some value for the action tag as some constant followed by "applicationpackage.appshortcut" because this is used as an appshortcut identifier.

An extra attribute is used to get key-value pairs that are sent by the quicknotification Object on AppService callback. You must pass "id" and its corresponding Identifier so that the            program logic becomes easy to understand in order for the correct form to be shown.

**Properties Naming Example**

```
<resources>
<string name="title_activity_shortcut_1">shortcut_1</string>
<string name="myFirstshortcut">myFirstshortcut</string>
<string name="MY_FIRST_SHORTCUT">shortcut1</string>
<string name="shortcut_is_disabled">shortcut is disabled</string>
</resources>
```

**Manifest File Changes**

```
<meta-data android:name="android.app.shortcuts"
android:resource="@xml/shortcutxml_file_name" />
```

##### Shortcut Properties

*   shortcutId: Mandatory. Identifier for the shortcut.
*   Enabled: Default value is true. Set to false if you want to disable for subsequent updates.
*   Icon: Image placed in drawable. If not provided, the default Android icon is placed.
*   shortcutShortcutLabel: Mandatory. Short message displayed on the tile of the shortcut.
*   shortcutLongLabel: Mandatory. Long descriptive message about the shortcut, it is shown if the required space is available.
*   shortcutDisabledMessage: Message that is displayed on the launch of a disabled shortcut, which is pinned.
*   intent tag: Standard method of declaration. Whereas, extra tags can be anything user-defined and is delivered to the application developer via luatable values in the callback.
*   Rank: Arranges items in the shortcut tray on long press of the application.

> **_Note:_** The XML file name should be “shortcut” and the array of shortcut attributes to shortcuts on multiple shortcuts must be declared.

For the application icon, follow these rules: https://commondatastorage.googleapis.com/androiddevelopers/shareables/design/app-shortcuts-design-guidelines.pdf

#### Dynamic Shortcuts

Dynamic shortcuts allow you to dynamically add, update, and reorder the shortcuts to the application.

To learn more about handling an app shortcut, refer [Handling Quick actions](#handling-quick-actions). To learn about internationalization support for app shortcuts, refer [Quick actions and Internationalization](#quick-actions-and-internationalization).

To view the functionality of the ForceTouch API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ForceTouchAPI)

![](resources/prettify/onload.png)
