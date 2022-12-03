                                

You are here: BottomSheet Widget

BottomSheet Widget
==================

A bottom sheet is a window that slides up from the bottom edge of the screen. It is used to reveal additional content and options to users. If required, users can show and dismiss the BottomSheet widget.

This widget is available for the Android platform only and can be created only through code. The following Gradle Entry needs to be made in order to access the BottomSheet widget.

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
| [skipCollapsed](BottomSheet_Properties.md#skipCollapsed) | If this property is set to true, a BottomSheet directly goes from an Expanded state to a Dismissed one. |

 

| Methods | Description |
| --- | --- |
| [setState](BottomSheet_Methods.md#setState) | Sets the state of a BottomSheet widget as Expanded or Collapsed. |

 

| Events | Description |
| --- | --- |
| [onCollapsed](BottomSheet_Events.md#onCollapsed) | Called when you need to collapse a BottomSheet from its peek height. |
| [onExpanded](BottomSheet_Events.md#onExpanded) | Called when a BottomSheet reaches its fully expanded state. |
| [onDraggingStarted](BottomSheet_Events.md#onDraggingStarted) | Called when you need to start dragging a BottomSheet to an Expanded or Collapsed state. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [backgroundTransparency](BottomSheet_Properties.md#backgroundTransparency) | Indicates to users that the UI control is currently restricted for a BottomSheet until it is dismissed, i.e., dragged down completely. |
| [contentWidget](BottomSheet_Properties.md#contentWidget) | Sets the template of a BottomSheet. |
| [peekHeight](BottomSheet_Properties.md#peekHeight) | The height at which a collapsed BottomSheet docks. |

 

| Methods | Description |
| --- | --- |
| [destroy](BottomSheet_Methods.md#destroy) | Ensures that the garbage collection process of a BottomSheet occurs, and the data of the BottomSheet is wiped out. |
| [dismiss](BottomSheet_Methods.md#dismiss) | Dismisses a BottomSheet widget for users. |
| [show](BottomSheet_Methods.md#show) | Displays a BottomSheet widget for users. |

 

| Events | Description |
| --- | --- |
| [onDismiss](BottomSheet_Events.md#onDismiss) | Called when you need to dismiss a BottomSheet from the screen. |
| [onShow](BottomSheet_Events.md#onShow) | Called when you need a BottomSheet to be displayed on the screen. |
| [onSettled](BottomSheet_Events.md#onSettled) | Called when a BottomSheet is at peek height, is expanded, or is dismissed. |
| [onSliding](BottomSheet_Events.md#onSliding) | Called when a BottomSheet slides in/out of view. |

