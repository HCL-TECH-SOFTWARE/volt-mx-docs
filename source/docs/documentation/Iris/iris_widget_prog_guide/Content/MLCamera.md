---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                 

You are here: Creating an MLCamera widget Using the Constructor: voltmx.ui.MLCamera

MLCamera Widget
===============

Image Recognition is a part of machine learning in which you can scan and classify real-world objects.

From Volt MX Iris 9.0 version onwards, you can implement the image recognition capabilities in your application using MLCamera widget and Image Classification APIs. For more information on [Image Classification APIs]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/imageclassificationapi.html#image-classification-api), refer Volt MX Iris API guide.

MLCamera widget uses Machine Learning models to provide you with the information related to the object. MLCamera widget opens a camera preview to scan the objects and classifies it based on the Machine Learning Models.

> **_Note:_** You cannot add an overlay to an MLCamera widget. To add overlay to MLCamera widget, place the MLCamera widget in a FlexContainer widget. If you want to view widgets when the camera is open, add widgets into this FlexContainer widget with a higher zIndex value.

Widgets are normally added to your application by using Volt MX Iris, but they can also be added through code. For general information on using widgets in Volt MX Iris, refer [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

> **_Note:_** To enable the MLCamera widget in Android platform, you must enable the `useMLImageClassifier` property in the `androidbuild.properties` file. For more information about how to add a parameter in `androidbuild.properties` file, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#add-android-properties-to-androidbuild-properties-file).

The MLCamera widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Capturing Features](#capturing-features)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](MLCamera_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [bottom](MLCamera_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](MLCamera_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](MLCamera_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](MLCamera_Properties.html#height) | It determines the height of the widget and measured along the y-axis. |
| [left](MLCamera_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](MLCamera_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](MLCamera_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](MLCamera_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](MLCamera_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](MLCamera_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](MLCamera_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](MLCamera_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](MLCamera_Properties.html#zIndex) | Specifies the stack order of a widget. |

  

#### Capturing Features

| Events | Description |
| --- | --- |
| [onFailure](MLCamera_Events.html#onFailur) | Invoked when an error occurs while using a MLCamera widget. |

 

| Methods | Description |
| --- | --- |
| [setImageClassifier](MLCamera_Methods.html#setImageClassifier) | This method is used to set the imageClassifier object to the MLCamera widget. |
| [startDetection](MLCamera_Methods.html#startDetection) | This method is used to scan the frames when the MLCamera widget is opened. |
| [stopDetection](MLCamera_Methods.html#stopDetection) | This method is used to stop the scanning of the frames when the MLCamera widget is opened. |

 

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](MLCamera_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](MLCamera_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [removeFromParent](MLCamera_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setVisibility](MLCamera_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [id](MLCamera_Properties.html#id) | id is a unique identifier of the Camera Widget consisting of alphanumeric characters. |
| [info](MLCamera_Properties.html#info) | A custom JSObject with the key-value pairs that a developer can use to store the context with the widget. |
| [isVisible](MLCamera_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](MLCamera_Properties.html#parent) | Helps you access the parent of the widget. |

 

MLCamera Widget Basics
----------------------

An MLCamera widget and an imageClassifier Object uses camera preview to scan and classify objects continuously. Here are the steps that you must follow to classify objects using the MLCamera widget.

1.  Create an MLCamera widget using the constructor [voltmx.ui.MLCamera](#creating-an-mlcamera-widget-using-the-constructor-volt-mx-ui-mlcamera).
2.  Create an ImageClassifier Object using the [voltmx.ml.imageClassifier]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/voltmx.ml_namespace_functions.html) API.
3.  Set the imageClassifer Object to MLCamera widget using the [setImageClassifier](MLCamera_Methods.html#setImageClassifier) method of MLCamera widget.
4.  After that use the [startDetection](MLCamera_Methods.html#startDetection) method of MLCamera widget to enable the classification of camera preview frames.

> **_Note:_** MLCamera widget is not supported for SPA and Desktop Web platform.

### Creating an MLCamera widget Using the Constructor: voltmx.ui.MLCamera

{% highlight voltMx %}
var mlCamera = new voltmx.ui.MLCamera(mlCamBasic, mlCamLayout, mlCamPsp);
{% endhighlight %}

*   **mlCamBasic** is an object with basic properties.
*   **mlCamLayout** is an object with layout properties.
*   **mlCamPsp** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}//Sample code for creating an MLCamera widget. 
var mlCamBasic = {

 "height": "85%",
 "id": "mlCamera",
 "isVisible": true,
 "left": "5dp",
 "top": "55dp",
 "width": "100%",
 "zIndex": 1
}
var mlCamLayout = {};

var mlCamPsp = {};

var mlCamera = new voltmx.ui.MLCamera(mlCamBasic, mlCamLayout, mlCamPsp);
{% endhighlight %}
