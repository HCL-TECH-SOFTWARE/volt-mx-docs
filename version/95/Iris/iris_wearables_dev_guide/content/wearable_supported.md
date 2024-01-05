                            


Supported Platforms and Devices
===============================

The following are the supported platforms for wearables using Volt MX Iris:

  
| Platform | Version |
| --- | --- |
| watchOS | 4.0 and above, iOS 9.0 and above Xcode 12.5 and above |
| Android | 4.4W (API 20) and above\* |

\* Notifications only.

<!-- <table style="margin-left: 0;margin-right: auto;" data-mc-conditions="Default.HTML5 Only"><colgroup><col style="width: 37px;"> <col> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>7.0.3</td><td>DC</td><td>&nbsp;</td></tr></tbody></table> -->

Prerequisites
-------------

The next few sections present overviews about how to develop applications for the Apple Watch and receive notifications on Android Wear. These overviews discuss the details of the Wearables application architecture, working with Xcode, creating a user interface (UI) for Apple Watch, setting up notifications on Android Wear, and designing a sample app.

To create a Wearables app:

*   You must install Volt MX Iris 9.2 or later to build a watch app using Volt MX Iris.
*   You need to access Volt MX Foundry Messaging to test notifications.
*   It is a good idea to have the target hardware (an Apple Watch or an Android Wear device) for development and testing.

### Apple Watch Prerequisites

The following describes the supported functionality and limitations of wearables in Volt MX Iris:

*   You can create your user interface and your business logic in Volt MX Iris for Apple Watch apps.
*   When developing an Apple Watch app, you can add forms and apply templates in your app.
*   Your Apple Watch app can use notifications and actions.
*   Apple Watch apps can also apply skins, just as you would with any app you develop in Iris.
*   Only the iOS platform supports background and foreground modes.
*   On iOS, invoking the functions voltmx.notificationsettings.createAction and voltmx.notificationsettings.createCategory multiple times will not overwrite the existing actions and categories.
*   On iOS, invoking the functions voltmx.notificationsettings.registerCategory will remove the earlier registered categories.

### Android Wear Prerequsites

*   As per the Android documentation, the format methods in Android - DateFormat class implement a subset of Unicode UTS #35 patterns. The subset currently supported by the DateFormat class uses the format characters:acdEHhLKkLMmsyz. Up to level 17 of the Android API, only the formatting characters adEhkMmszy are supported.
    
    > **_Note:_** Android - DateFormat class incorrectly implements **k** as if it were **H** for backward compatibility. For more information refer to [http://developer.android.com/reference/android/text/format/DateFormat.html](http://developer.android.com/reference/android/text/format/DateFormat.html) and [http://developer.android.com/reference/java/text/SimpleDateFormat.html](http://developer.android.com/reference/java/text/SimpleDateFormat.html)
    
*   Customization of the notification view is not supported in Android.
