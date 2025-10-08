                             


voltmx.notificationContentExtension Namespace
===========================================

The voltmx.notificationContentExtension Namespace enables you to add support for Notification Content app extensions in your iOS app. With Notification Content app extensions, your app can display a custom user interface for its notifications. For more information about what Notification Content app extensions are and what you can use them for, refer the [Apple developer documentation](https://developer.apple.com/reference/usernotificationsui/unnotificationcontentextension).

You can add a Notification Content extension to your app in the same way that you add any other type of iOS app extension. For more details, refer [App Extension for iOS](app-extension-ios.md).

Before your Notification Content extension can be used, your app must set the callback functions that provide the Notification Content app extension with its functionality. It does this by invoking the [voltmx.notificationContentExtension.setExtensionsCallbacks](#setExtensionsCallbacks) function.

Properties
----------

The voltmx.notificationContentExtension Namespace contains the following properties.


<details close markdown="block"><summary>voltmx.notificationContentExtension .view</summary> 

* * *

Holds the current extension view.

### Syntax

voltmx.notificationContentExtension.view;

### Example

```

//Sample code  
var myView = voltmx.notificationContentExtension.view;
myView.addSubView(button);
```

### Type

UIView

### Read/Write

Read only.

### Platform Availability

iOS.

Functions
---------

The voltmx.notificationContentExtension Namespace provides the following function.

</details>
<details close markdown="block"><summary>voltmx.notificationContentExtension.setExtensionsCallbacks</summary>

* * *

Sets a notification content extension with various states as callback events.

### Syntax
```

voltmx.notificationContentExtension.setExtensionsCallbacks(  
    callbacks);
```

### Input Parameters

_callbacks_

Contains an object with key-value pairs where the key specifies the extension state and the value is a callback function. The following are the possible keys.

| Key | Description |
| --- | --- |
| didReceiveNotification | The app received a notification. |
| didReceiveNotificationResponse | The user tapped one of the notification's actions. |
| loadView | Loads a view that the controller manages. |
| viewDidAppear | A view was just displayed. |
| viewDidDisappear | A view just removed from the view hierarchy. |
| viewDidLoad | The controller has loaded its view hierarchy into memory. |
| viewWillAppear | A view is about to be displayed. |
| viewWillDisappear | A view is about to be removed from the view hierarchy. |

Example: didReceiveNotification

```
function didReceiveNotification() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "didReceiveNotification": didReceiveNotification
});

```

Example: didReceiveNotificationResponse

```
function didReceiveNotificationResponse() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "didReceiveNotificationResponse": didReceiveNotificationResponse
});
```

Example: loadView

```
function loadView() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "loadView": loadView
});
```

Example: viewDidAppear

```
function viewDidAppear() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "viewDidAppear": viewDidAppear
});
```

Example : viewDidLoad

```
function viewDidLoad() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "viewDidLoad": viewDidLoad
});

```

Example: viewWillAppear

```
function viewWillAppear() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "viewWillAppear": viewWillAppear
});
```

Example: viewDidDisappear

```
function viewDidDisappear() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "viewDidDisappear": viewDidDisappear
});
```

Example: viewWillDisappear

```
function viewWillDisappear() {
    // Native Function API code
}

voltmx.notificationContentExtension.setExtensionsCallbacks({
    "viewWillDisappear": viewWillDisappear
});
```

### Return Values

None.

### Platform Availability

iOS.

![](resources/prettify/onload.png)
</details>