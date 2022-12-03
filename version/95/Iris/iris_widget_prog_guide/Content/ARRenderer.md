                                 


ARRenderer Widget
=================

ARRenderer widget helps you to add virtual objects to a real- live video. ARRenderer widget helps you add Augmented Reality capabilities to your application.

Augmented reality helps in the following use cases:

*   Virtual meetings
*   Virtual designing
*   In healthcare, to view the body of the patient and perform medical procedures

> **_Note:_** ARRenderer widget is supported on iPhone X and later versions iOS mobile devcies.  
In Android devices you must use the _[getOpenGlESVersion](../../../Iris/iris_api_dev_guide/content/voltmx.os_functions.md#getOpenGIES)_ API to check if your device supports augmented reality.

Widgets are normally added to your application by using Volt MX Iris, but they can also be added through code. For general information on using widgets in Volt MX Iris, refer [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

> **_Note:_** To enable the ARRenderer widget in Android platform, you must enable the `arEnabled` property in the `androidbuild.properties` file. For more information about how to add a parameter in `androidbuild.properties` file, click [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#add-android-properties-to-androidbuild-properties-file).

The ARRenderer widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Capturing Features](#capturing-features)
*   [Storage Capabilities](#storage-capabilities)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](ARRenderer_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [bottom](ARRenderer_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](ARRenderer_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](ARRenderer_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](ARRenderer_Properties.md#contentAlignment) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](ARRenderer_Properties.md#height) | It determines the height of the widget and measured along the y-axis. |
| [left](ARRenderer_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](ARRenderer_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](ARRenderer_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](ARRenderer_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](ARRenderer_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](ARRenderer_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](ARRenderer_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](ARRenderer_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](ARRenderer_Properties.md#zIndex) | Specifies the stack order of a widget. |

  

#### Capturing Features

| Methods | Description |
| --- | --- |
| [add](ARRenderer_Methods.md#add) | Used to add the model of an object to the area scanned using the ARRenderer widget. |
| [remove](ARRenderer_Methods.md#remove) | Used to removed model of an object to the area scanned using the ARRenderer widget. |
| [startARImageDetection](ARRenderer_Methods.md#startARImageDetection) | Initiates the AR Image Detection and overlay the Image or Video using the ARRenderer widget. |
| [startRendering](ARRenderer_Methods.md#startRendering) | Initiates the Augmented Reality session using the ARRenderer widget. |
| [stopRendering](ARRenderer_Methods.md#stopRendering) | Stops the Augmented Reality session using the ARRenderer widget. |
| [stopARImageDetection](ARRenderer_Methods.md#stopARImageDetection) | Stops the AR Image Detection and rendering using the ARRenderer widget. |

 

| Properties | Description |
| --- | --- |
| [activatesCoachingOverlayAutomatically](ARRenderer_Properties.md#activatesCoachingOverlayAutomatically) | Provides a GUI to move the device camera, whenever SDK requires tracking information. |
| [debugOptions](ARRenderer_Properties.md#debugOptions) | Shows the area that has been already scanned on the device screen |
| [overlay](ARRenderer_Properties.md#overlay) | Sets a container for the UI controls that needs to be rendered on top of a scene |
| [sceneConfig](ARRenderer_Properties.md#sceneConfig) | Sets the method of scanning an area |

 

#### Storage Capabilities

| Methods | Description |
| --- | --- |
| [clearExperience](ARRenderer_Methods.md#clearExperience) | Used to delete the saved AR session in iOS 13 and later. |
| [hostCloudAnchor](ARRenderer_Methods.md#hostCloudAnchor) | Used to add or save the model of the object and host the anchor points on the Cloud for Android platform. |
| [loadExperience](ARRenderer_Methods.md#loadExperience) | used to retrieve the AR world mapping data from the local device storage in iOS 13 and later. |
| [resolveCloudAnchor](ARRenderer_Methods.md#resolveCloudAnchor) | Used to retrieve the anchor points of the model from the Cloud for Android platform. |
| [saveExperience](ARRenderer_Methods.md#saveExperience) | Used to save the mapping data object (AR world) in the device local storage in iOS 13 and later. |

 

| Properties | Description |
| --- | --- |
| [canSaveExperienceCallback](ARRenderer_Properties.md#canSaveExperienceCallback) | Used to determine when the session can be saved in iOS 13 and later. |
| [enableCloudAnchors](ARRenderer_Properties.md#enableCloudAnchors) | Used to manage the Cloud Anchor in Android platform. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](ARRenderer_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](ARRenderer_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [removeFromParent](ARRenderer_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](ARRenderer_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](ARRenderer_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](ARRenderer_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](ARRenderer_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [id](MLCamera_Properties.md#id) | id is a unique identifier of the Camera Widget consisting of alphanumeric characters. |
| [info](MLCamera_Properties.md#info) | A custom JSObject with the key-value pairs that a developer can use to store the context with the widget. |
| [isVisible](MLCamera_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](MLCamera_Properties.md#parent) | Helps you access the parent of the widget. |

 

ARRenderer Widget Basics
------------------------

ARRenderer widget is used implement Augment Reality in your application.

To implement a simple augmented reality in your application, follow these steps.

1.  Create an instance of ARRenderer widget using the constructor: [voltmx.ui.ARRenderer](#creating-an-arrenderer-widget-using-the-constructor-volt-mx-ui-arrenderer). In this constructor you can provide the scene configurations and the model configurations while creating the widget instance. You can also add an overlay with UI (such as buttons) in the widget.
2.  After the widget has been created, use [startRendering](ARRenderer_Methods.md#startRendering) method to open the ARRenderer widget instance on the device camera.
3.  Once the widget has started rendering, when the user touches the screen to add the model, you can use the touch events to get the x and y coordinates. After you get the x and y coordinates, use the [addGestureRecognizer](ARRenderer_Methods.md#addGestureRecognizer) method to add the model to the scene.
4.  Using the overlay specified in the first point, the user can stop the camera. To stop the ARRenderer widget from capturing use the [stopRendering](ARRenderer_Methods.md#stopRendering) method.

> **_Note:_** ARRenderer widget is not supported for SPA and Desktop Web platform.

### Creating an ARRenderer widget Using the Constructor: voltmx.ui.ARRenderer

```

var myscene = new voltmx.ui.ARRenderer(arBasic, arLayout, arPsp);
```

*   **arBasic** is an object with basic properties.
*   **arLayout** is an object with layout properties.
*   **arPsp** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//Sample code for creating an ARRenderer widget. 

var myscene = new voltmx.ui.ARRenderer({
 "placeholderText": "Please wait while the camera loads..",
 "placeholderSkin": "mpiSknlblItemName",
 "height": "100%",
 "id": "arscene",
 "isVisible": true,
 "left": "0%",
 "top": "0%",
 "width": "100%",
 "zIndex": 1
}, {
 "contentAlignment": constants.CONTENT_ALIGN_CENTER,
 "displayText": true,
 "padding": [0, 0, 0, 0],
 "paddingInPixel": false
}, {
});
```
