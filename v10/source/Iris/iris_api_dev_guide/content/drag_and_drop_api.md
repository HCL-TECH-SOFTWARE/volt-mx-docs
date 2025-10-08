                             

You are here: Accelerometer APIs

Drag and Drop API
=================

Using the Drag and Drop API, you can enable the option to drag images, text, and files from one application to another. To drag and drop the files between two applications, ensure that both the applications are open using the app switcher or the Split-View multitasking window.

> **_Important:_** The Drag and Drop API is applicable to ipad only. The feature is introduced in iOS 11.

 

The Drag and Drop API contains the `voltmx.dragdrop Namespace` and the following API elements.

| Function | Description |
| --- | --- |
| [voltmx.dragdrop.DragInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.DragInteraction) | Creates a new DragInteraction object and attaches the DragInteraction object to a widget. |
| [voltmx.dragdrop.DropInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.DropInteraction) | Creates a new DropInteraction object and attaches it to a widget. |
| [voltmx.dragdrop.removeDragInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.removeDragInteraction) | Detaches the DragInteraction object from the widget. |
| [voltmx.dragdrop.removeDropInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.removeDropInteraction) | Detaches the DropInteraction object from the widget. |

 

To enable the drag feature on a widget in an application, create a **dragInteraction** object and attach the object to the widget by using the [voltmx.dragdrop.DragInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.DragInteraction) function. You can enable the drop feature foe a widget by using the [voltmx.dragdrop.DropInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.DropInteraction) function. If you want to remove the Drag and Drop functionalities from the widget, use the [voltmx.dragdrop.removeDragInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.removeDragInteraction) and [voltmx.dragdrop.removeDropInteraction](voltmx.dragdrop_functions.md#voltmx.dragdrop.removeDropInteraction) functions.

To view the functionality of the Drag and Drop API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/DragandDropAPI)

![](resources/prettify/onload.png)
