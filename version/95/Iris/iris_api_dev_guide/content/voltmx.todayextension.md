                             


voltmx.todayExtension Namespace
=============================

The voltmx.todayExtension Namespace provides support for the iOS Today extension, which is a type of iOS app extension.

The Today extensions in Today view are called widgets. Widgets give users quick access to information that is important at the current moment. For example, users open the Today view to check items such as current stock prices or that day's weather forecast. For more information on Today extensions and how you can use them, refer the relevant [Apple developer documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Today.md#//apple_ref/doc/uid/TP40014214-CH11-SW1).

You can add a Today extension to your app in the same way that you add any other type of iOS app extension. For more information on how to add iOS app extensions, refer [App Extension API for iOS](../../../Iris/iris_api_dev_guide/content/app-extension-ios.md).

Before your app can use the Today extension, your app must set the callback functions that provide the Today extension with its functionality. The app does this by invoking the [voltmx.todayExtension.setExtensionsCallbacks](#setExtensionsCallbacks) function.

The voltmx.todayExtension Namespace contains the following API elements.

Properties
----------

The voltmx.todayExtension Namespace contains the following property.

<details close markdown="block"><summary>voltmx.todayExtension.view</summary>

* * *

Stores the current extension view.

### Syntax

```

voltmx.todayExtension.view;
```

**Example**

```

//Sample code  
var myView = voltmx.todayExtension.view;
myView.addSubView(button);
```

### Type

UIView

### Read/Write

Read only

### Platform Availability

*   iOS

Functions
---------

The voltmx.todayExtension Namespace contains the following function.

</details>
<details close markdown="block"><summary>voltmx.todayExtension.setExtensionsCallbacks</summary>

* * *

Sets a Today extension with callbacks for app extension state changes.

### Syntax

```

voltmx.todayExtension.setExtensionsCallbacks(  
    callbackEvents);
```

### Input Parameters

callbackEvents

Contains an object with key-value pairs where the key specifies the extension state and the value is a callback function. The possible keys of this parameter are as follows.  

| Key | Description |
| --- | --- |
| loadView | Loads a view that the controller manages. |
| viewDidLoad | The view's controller was loaded into the memory. |
| viewDidAppear | A view was just displayed. |
| viewWillAppear | A view is about to be displayed. |
| viewDidDisappear | A view was just removed from the view hierarchy. |
| viewWillDisappear | A view is about to be removed from the view hierarchy. |
| widgetPerformUpdate | The system calls this key at opportune times for the widget to update its state; both when the Notification Center is visible as well as when the Notification Center is in the background. |
| widgetActiveDisplayModeDidChangeWithMaximumSize | Called when the active display mode changes. It has the following arguments: displayMode. It can take two values: NCWidgetDisplayModeCompact and NCWidgetDisplayModeExpanded. NSValue. It contains one value: CGSizeValue. |

**Example**

```
//Sample Code 
function loadViewSample() {
    //native bindings code
}

function viewDidLoadSample() {
    //native bindings code
}

function viewWillAppearSample() {
    //native bindings code
}

function viewDidAppearSample() {
    //native bindings code
}

function viewWillDisappearSample() {
    //native bindings code
}

function viewDidDisappearSample() {
    //native bindings code
}

function widgetPerformUpdateSample() {
    //native bindings code
    return NCUpdateResult;
}

function widgetActiveDisplayModeDidChangeWithMaximumSizeSample(var vardisplayMode,
    var maxsize) {
    var preferredContentSize;
    if (activeDisplayMode == NCWidgetDisplayModeCompact) {
        preferredContentSize = {
            width: maxsize.CGSizeValue.width,
            height: 300
        };
    } else {
        preferredContentSize = {
            width: maxsize.CGSizeValue.width,
            height: 800
        };
    }
    return preferredContentSize;
}
//Setting Extensions Callbacks: Example 1voltmx. todayExtension.setExtensionsCallbacks(
{
    "loadView": loadViewSample,
    "viewDidLoad": viewDidLoadSample,
    "viewWillAppear": viewWillAppearSample,
    "viewDidAppear": viewDidAppearSample,
    "viewWillDisappear": viewWillDisappearSample,
    "viewDidDisappear": viewDidDisappearSample,
    "widgetPerformUpdate": widgetPerformUpdateSample,
    "widgetActiveDisplayModeDidChangeWithMaximumSize": widgetActiveDisplayModeDidChangeWithMaximumSizeSample
}); //Setting Extensions Callbacks: Example 2var callbackEvents={
viewDidLoad: function() {
    var myView = voltmx.todayExtension.view;
    myView.addSubView(button);
}
};
voltmx.todayExtension.setExtensionsCallbacks(callbackEvents);
//end of code
```

### Return Values

None

### Platform Availability

*   iOS

![](resources/prettify/onload.png)
</details>