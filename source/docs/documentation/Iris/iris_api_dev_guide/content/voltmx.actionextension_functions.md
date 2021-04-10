---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


voltmx.actionExtension Namespace
==============================

The voltmx.actionExtension Namespace provides support for the iOS Action extension, which is a kind of iOS app extension.

An Action extension helps users view or update content originating in a host app. For example, an Action extension might help users edit an image in a document that they're viewing in a document editor. For more information about what Action extensions are and what you can use them for, please see the [Apple developer documentation](https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/Action.html).

You add an Action extension to your app in the same way that you add any other type of iOS app extension. For more details, refer [App Extension API for iOS](app-extension-ios.html).

Before your Action extension can be used, your app must set the callback functions that provide the Action extension with its functionality. It does this by invoking the [voltmx.actionExtension.setExtensionsCallbacks](#setExtensionsCallbacks) function.

The voltmx.actionExtension Namespace contains the following API elements.

Properties
----------

The voltmx.actionExtensions Namespace provides the following properties.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.actionExtensions.view](javascript:void(0);)

* * *

Holds the current extension view.

Syntax

voltmx.actionExtensions.view;

Example

{% highlight voltMx %}//Sample code  
var myView = voltmx.actionExtensions.view;
myView.addSubView(button);
{% endhighlight %}

Type

UIView

Read/Write

Read only.

Platform Availability

iOS.

Functions
---------

The voltmx.actionExtension namespace contains the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.actionExtension.setExtensionsCallbacks](javascript:void(0);)

* * *

Sets an Action Extension with callbacks for app extension state changes.

Syntax

voltmx.actionExtension.setExtensionsCallbacks(callbacks)

Input Parameters

callbacks

Contains an object with key-value pairs where the key specifies the extension state and the value is a callback function. The following are the possible keys.

> | Key | Description |
> | --- | --- |
> | beginRequestWithExtensionContext | The user has selected the action. |
> | loadView | Loads a view that the controller manages. |
> | viewDidAppear | A view was just displayed. |
> | viewDidDisappear | A view just removed from the view hierarchy. |
> | viewDidLoad | The view's controller was loaded into memory. |
> | viewWillAppear | A view is about to be displayed. |
> | viewWillDisappear | A view is about to be removed from the view hierarchy. |
> 
>   

Example: beginRequestWithExtensionContext

{% highlight voltMx %}function beginRequestWithExtensionContext(var ExtensionContext) {
    // Native bindings code
}
voltmx.actionExtension.setExtensionsCallbacks({
    "beginRequestWithExtensionContext": beginRequestWithExtensionContext
});
{% endhighlight %}

Example: loadView

{% highlight voltMx %}function loadView() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "loadView": loadView
});
{% endhighlight %}

Example: viewDidAppear

{% highlight voltMx %}function viewDidAppear() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "viewDidAppear": viewDidAppear
});
{% endhighlight %}

Example: viewDidLoad

{% highlight voltMx %}function viewDidLoad() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "viewDidLoad": viewDidLoad
});
{% endhighlight %}

Example: viewDidDisappear

{% highlight voltMx %}function viewDidDisappear() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "viewDidDisappear": viewDidDisappear
});
{% endhighlight %}

Example: viewWillAppear

{% highlight voltMx %}function viewWillAppear() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "viewWillAppear": viewWillAppear
});
{% endhighlight %}

Example: viewWillDisappear

{% highlight voltMx %}function viewWillDisappear() {
    // Native Function API code
}

voltmx.actionExtension.setExtensionsCallbacks({
    "viewWillDisappear": viewWillDisappear
});
{% endhighlight %}

Return Values

None.

Platform Availability

iOS only

* * *

![](resources/prettify/onload.png)
