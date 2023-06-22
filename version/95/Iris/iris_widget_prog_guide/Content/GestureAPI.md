                              


Gesture Methods and 3D Touch
============================

A _gesture_ is an action associated with movement of a mouse or a touch screen action. The developers determine how a gesture should be interpreted and the function that must be executed when a gesture is recognized.

Gestures are applicable only on mobile or tablet devices that have touch support.  

> **_Note:_** Currently, Volt MX Iris supports only Tap, Swipe, Longpress, Pan, Rotation, Pinch, and 3D Touch gesture types.  
3D Touch is supported only in iOS 9.0 and later.  
In tablet, longpress is only triggered when it is a touch event and not a mouse event.

The gesture methods are documented as part of each widget:

*   addGestureRecognizer
*   removeGestureRecognizer

In addition, the Gesture API provides the following functions in the voltmx.application namespace. These are documented in the [API Programming Guide.](../../../Iris/iris_api_dev_guide/content/introduction.md)

*   setGestureRecognizerForAllForms
*   removeGestureRecognizerForAllForms

3D Touch
--------

Devices that support 3D Touch can sense how much pressure the user applies to the display. In addition to familiar gestures like Tap and Swipe, developers can add 3D Touch-enabled actions that bring a new dimension of functionality to their apps. Volt MX Iris Widgets support the following 3D Touch features.

> **_Important:_** 3D Touch is available only on devices with iOS 9.0 and later.

### Pressure Sensitivity Touch

On devices that support 3D Touch, developers can take advantage of the pressure sensing capability to provide creative functionality to their apps. Widget events **onTouchEnd**, **onTouchMove**, and **onTouchStart** include the parameter contextInfo that specifies the force of the touch. Developers can use this information in their apps to respond to force pressure.

For more information about using these events, see the [reference section](WidgetReferences.md) of this guide for each widget. For more information about pressure sensitivity touch, see the [Apple documentation](http://www.apple.com/in/iphone-6s/3d-touch/).


<h3 id="enablePe">Peek and Pop</h3>

Peek and Pop are in-app applications of 3D Touch that allow the user to preview content in the app without changing scope, and then take action on that content. As the user applies increasing touch pressure, the app responds to the various pressures by:

1.  Indicating that content preview is available.
2.  Displaying the preview - a Peek - with options to act on it.
3.  Providing optional navigation to the view shown in the preview -- a Pop.

All widgets support Peek and Pop except Popup, Switch, and their containing widgets.

The following methods are provided to enable Peek and Pop on widgets and carry out associated actions.

*   widget.registerForPeekandPop(onPeekCallback, onPopCallback)
*   widget.unregisterForPeekandPop()
*   widget.setOnPeek(onPeekCallback)
*   widget.setOnPop(onPopCallback)
*   formWidget.setPreviewActionItems(previewActions)

For information about using these methods see the [reference section](WidgetReferences.md) of this guide for each widget.

For more information about the Peek and Pop features and how to use them, see the [Apple documentation](http://www.apple.com/in/iphone-6s/3d-touch/).

Additional APIs that support the 3D Touch features are documented in the voltmx.forcetouch namespace in the [API Programming Guide.](../../../Iris/iris_api_dev_guide/content/introduction.md)

Important Considerations
------------------------

*   Single tap matches with the _onClick_ functionality. If a box has an _onClick_ event defined, both gesture event and _onClick_ are triggered.
*   Number of taps is limited to one or two, only single tap or double tap are recognized.
*   Number of fingers is limited to one, only single finger is recognized.

