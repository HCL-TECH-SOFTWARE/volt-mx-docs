                                

You are here: BottomSheet Widget

BottomSheet Widget
==================

A bottom sheet is a window that slides up from the bottom edge of the screen. It is used to reveal additional content and options to users. If required, users can show and dismiss the BottomSheet widget.

This widget is available for the iOS and Android platforms only and can be created only through code. The following Gradle Entry needs to be made in order to access the BottomSheet widget.

```
dependencies {
   implementation 'com.google.android.material:material:1.0.0'
}  

```

Following are the key use cases of Bottom Sheet widget:

*   To provide visually richer options menu. For example: when we want to share an image through an application, a BottomSheet widget can be used to show the various applications that can be used for sharing.
    
*   To display more data or information. For example: In a map widget, when we click on a pin, you can use a BottomSheet widget to display more information about the location.
    
*   Can be used instead of dialog boxes. For example: while exiting an app, a BottomSheet can be used to ask for confirmation.
    

The BottomSheet widget capabilities can be broadly categorized into the following:

*   [Bottom Sheet State](#bottomsheet-state)
*   [Miscellaneous](#miscellaneous)

#### BottomSheet State

  
| Properties | Description |
| --- | --- |
| [skipCollapsed](BottomSheet_Properties.md#skipCollapsed) | If this property is set to true, a BottomSheet directly goes from an Expanded state to a Dismissed one in Android platform. |

 

| Methods | Description |
| --- | --- |
| [setState](BottomSheet_Methods.md#setState) | Sets the state of a BottomSheet widget as Expanded or Collapsed in Android platform. |
| [setDetentIdentifier](BottomSheet_Methods.md#setDetentIdentifier) | Used to set or change selected detent in iOS platform. |

 

| Events | Description |
| --- | --- |
| [onCollapsed](BottomSheet_Events.md#onCollapsed) | Called when you need to collapse a BottomSheet from its peek height. |
| [onExpanded](BottomSheet_Events.md#onExpanded) | Called when a BottomSheet reaches its fully expanded state. |
| [onDraggingStarted](BottomSheet_Events.md#onDraggingStarted) | Called when you need to start dragging a BottomSheet to an Expanded or Collapsed state in Android platform. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [backgroundTransparency](BottomSheet_Properties.md#backgroundTransparency) | Indicates to users that the UI control is currently restricted for a BottomSheet until it is dismissed, i.e., dragged down completely in Android platform. |
| [contentWidget](BottomSheet_Properties.md#contentWidget) | Sets the template of a BottomSheet. |
| [peekHeight](BottomSheet_Properties.md#peekHeight) | The height at which a collapsed BottomSheet docks in Android platform. |
| [detents](BottomSheet_Properties.md#detents) | Array of different height at which collapsed BottomSheet docks in iOS platform. |
| [selectedDetentIdentifier](BottomSheet_Properties.md#selectedDetentIdentifier) | Default height that the user set programmatically to show BottomSheet in iOS platform.|
| [prefersGrabberVisible](BottomSheet_Properties.md#prefersGrabberVisible) |	A Boolean value that determines whether the sheet shows a grabber at the top in iOS platform. |
| [preferredCornerRadius](BottomSheet_Properties.md#preferredCornerRadius) | The corner radius that the sheet attempts to present with in iOS platform. |
| [prefersEdgeAttachedInCompactHeight](BottomSheet_Properties.md#prefersEdgeAttachedInCompactHeight) | A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class in iOS platform.|
| [widthFollowsPreferredContentSizeWhenEdgeAttached](BottomSheet_Properties.md#widthFollowsPreferredContentSizeWhenEdgeAttached) | A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size when edge attached in iOS platform. |
| [largestUndimmedDetentIdentifier](BottomSheet_Properties.md#largestUndimmedDetentIdentifier) | The largest detent that doesn’t dim the view underneath the sheet in iOS platform.|


 

| Methods | Description |
| --- | --- |
| [destroy](BottomSheet_Methods.md#destroy) | Ensures that the garbage collection process of a BottomSheet occurs, and the data of the BottomSheet is wiped out. |
| [dismiss](BottomSheet_Methods.md#dismiss) | Dismisses a BottomSheet widget for users. |
| [show](BottomSheet_Methods.md#show) | Displays a BottomSheet widget for users. |

 

| Events | Description |
| --- | --- |
| [onDismiss](BottomSheet_Events.md#onDismiss) | Called when you need to dismiss a BottomSheet from the screen. |
| [onShow](BottomSheet_Events.md#onShow) | Called when you need a BottomSheet to be displayed on the screen. |
| [onSettled](BottomSheet_Events.md#onSettled) | Called when a BottomSheet is at peek height, is expanded, or is dismissed in Android platform. |
| [onSliding](BottomSheet_Events.md#onSliding) | Called when a BottomSheet slides in/out of view in Android platform. |
| [didChangeSelectedDetentIdentifier](BottomSheet_Events.md#didChangeSelectedDetentIdentifier) | This event is called when detent value changes for BottomSheet in iOS platform. |

