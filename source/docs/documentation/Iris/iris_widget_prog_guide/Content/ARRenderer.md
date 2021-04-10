---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                 


ARRenderer Widget
=================

ARRenderer widget helps you to add virtual objects to a real- live video. ARRenderer widget helps you add Augmented Reality capabilities to your application.

Augmented reality helps in the following use cases:

*   Virtual meetings
*   Virtual designing
*   In healthcare, to view the body of the patient and perform medical procedures

> **_Note:_** ARRenderer widget is supported on iPhone X and later versions iOS mobile devcies.  
In Android devices you must use the _[getOpenGlESVersion]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.os_functions.html#getOpenGIES)_ API to check if your device supports augmented reality.

Widgets are normally added to your application by using Volt MX Iris, but they can also be added through code. For general information on using widgets in Volt MX Iris, refer [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

> **_Note:_** To enable the ARRenderer widget in Android platform, you must enable the `arEnabled` property in the `androidbuild.properties` file. For more information about how to add a parameter in `androidbuild.properties` file, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#add-android-properties-to-androidbuild-properties-file).

The ARRenderer widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Capturing Features](#capturing-features)
*   [Storage Capabilities](#storage-capabilities)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](ARRenderer_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [bottom](ARRenderer_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](ARRenderer_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](ARRenderer_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](ARRenderer_Properties.html#contentAlignment) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](ARRenderer_Properties.html#height) | It determines the height of the widget and measured along the y-axis. |
| [left](ARRenderer_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](ARRenderer_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](ARRenderer_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](ARRenderer_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](ARRenderer_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](ARRenderer_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](ARRenderer_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](ARRenderer_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](ARRenderer_Properties.html#zIndex) | Specifies the stack order of a widget. |

  

#### Capturing Features

| Methods | Description |
| --- | --- |
| [add](ARRenderer_Methods.html#add) | Used to add the model of an object to the area scanned using the ARRenderer widget. |
| [remove](ARRenderer_Methods.html#remove) | Used to removed model of an object to the area scanned using the ARRenderer widget. |
| [startARImageDetection](ARRenderer_Methods.html#startARImageDetection) | Initiates the AR Image Detection and overlay the Image or Video using the ARRenderer widget. |
| [startRendering](ARRenderer_Methods.html#startRendering) | Initiates the Augmented Reality session using the ARRenderer widget. |
| [stopRendering](ARRenderer_Methods.html#stopRendering) | Stops the Augmented Reality session using the ARRenderer widget. |
| [stopARImageDetection](ARRenderer_Methods.html#stopARImageDetection) | Stops the AR Image Detection and rendering using the ARRenderer widget. |

 

| Properties | Description |
| --- | --- |
| [activatesCoachingOverlayAutomatically](ARRenderer_Properties.html#activatesCoachingOverlayAutomatically) | Provides a GUI to move the device camera, whenever SDK requires tracking information. |
| [debugOptions](ARRenderer_Properties.html#debugOptions) | Shows the area that has been already scanned on the device screen |
| [overlay](ARRenderer_Properties.html#overlay) | Sets a container for the UI controls that needs to be rendered on top of a scene |
| [sceneConfig](ARRenderer_Properties.html#sceneConfig) | Sets the method of scanning an area |

 

#### Storage Capabilities

| Methods | Description |
| --- | --- |
| [clearExperience](ARRenderer_Methods.html#clearExperience) | Used to delete the saved AR session in iOS 13 and later. |
| [hostCloudAnchor](ARRenderer_Methods.html#hostCloudAnchor) | Used to add or save the model of the object and host the anchor points on the Cloud for Android platform. |
| [loadExperience](ARRenderer_Methods.html#loadExperience) | used to retrieve the AR world mapping data from the local device storage in iOS 13 and later. |
| [resolveCloudAnchor](ARRenderer_Methods.html#resolveCloudAnchor) | Used to retrieve the anchor points of the model from the Cloud for Android platform. |
| [saveExperience](ARRenderer_Methods.html#saveExperience) | Used to save the mapping data object (AR world) in the device local storage in iOS 13 and later. |

 

| Properties | Description |
| --- | --- |
| [canSaveExperienceCallback](ARRenderer_Properties.html#canSaveExperienceCallback) | Used to determine when the session can be saved in iOS 13 and later. |
| [enableCloudAnchors](ARRenderer_Properties.html#enableCloudAnchors) | Used to manage the Cloud Anchor in Android platform. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](ARRenderer_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](ARRenderer_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [removeFromParent](ARRenderer_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](ARRenderer_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](ARRenderer_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](ARRenderer_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](ARRenderer_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [id](MLCamera_Properties.html#id) | id is a unique identifier of the Camera Widget consisting of alphanumeric characters. |
| [info](MLCamera_Properties.html#info) | A custom JSObject with the key-value pairs that a developer can use to store the context with the widget. |
| [isVisible](MLCamera_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](MLCamera_Properties.html#parent) | Helps you access the parent of the widget. |

 

ARRenderer Widget Basics
------------------------

ARRenderer widget is used implement Augment Reality in your application.

To implement a simple augmented reality in your application, follow these steps.

1.  Create an instance of ARRenderer widget using the constructor: [voltmx.ui.ARRenderer](#creating-an-arrenderer-widget-using-the-constructor-volt-mx-ui-arrenderer). In this constructor you can provide the scene configurations and the model configurations while creating the widget instance. You can also add an overlay with UI (such as buttons) in the widget.
2.  After the widget has been created, use [startRendering](ARRenderer_Methods.html#startRendering) method to open the ARRenderer widget instance on the device camera.
3.  Once the widget has started rendering, when the user touches the screen to add the model, you can use the touch events to get the x and y coordinates. After you get the x and y coordinates, use the [addGestureRecognizer](ARRenderer_Methods.html#addGestureRecognizer) method to add the model to the scene.
4.  Using the overlay specified in the first point, the user can stop the camera. To stop the ARRenderer widget from capturing use the [stopRendering](ARRenderer_Methods.html#stopRendering) method.

> **_Note:_** ARRenderer widget is not supported for SPA and Desktop Web platform.

### Creating an ARRenderer widget Using the Constructor: voltmx.ui.ARRenderer

{% highlight voltMx %}
var myscene = new voltmx.ui.ARRenderer(arBasic, arLayout, arPsp);
{% endhighlight %}

*   **arBasic** is an object with basic properties.
*   **arLayout** is an object with layout properties.
*   **arPsp** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}//Sample code for creating an ARRenderer widget. 

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
{% endhighlight %}
