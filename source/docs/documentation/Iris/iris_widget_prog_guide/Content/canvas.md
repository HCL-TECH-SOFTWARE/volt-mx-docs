---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                 

You are here: [Canvas Widget](#canvas-widget) > [Canvas Widget Basics](#top) > Create a Canvas Widget

Canvas Widget
=============

The Canvas widget behaves as a drawing board that allows you to draw shapes such as circles, polygons, lines, etc. on your app. Currently, Canvas widget can be used to draw only lines.

The Canvas widget can be created only by using code.

Some real-world scenarios where you can use a Canvas widget are as follows:

*   To use as a line separator when a list of items is mentioned.
*   To display more than one focal point on a web-page, use dashed/ dotted lines to divide the page.
*   To highlight a feature newly introduced in an app such as coupons, and updates.

The Canvas widget capabilities can be broadly categorized into the following:

*   [3D Touch](#3d-touch)
*   [Layout](#layout)
*   [Shapes Configuration](#shapes-configuration)
*   [UI Appearance](#ui-appearance)
*   [User Input Handling](#user-input-handling)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

3D Touch
--------

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](canvas_Method.html#registerForPeekandPop) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](canvas_Method.html#setOnPeek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](canvas_Method.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](canvas_Method.html#unregisterForPeekandPop) | Unregisters a widget from 3D Touch peek and pop gestures. |

Layout
------

 

| Events | Description |
| --- | --- |
| [doLayout](Canvas_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [bottom](canvas_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](canvas_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](canvas_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](canvas_Properties.html#height) | It determines the height of the widget and measured along the y-axis. |
| [left](canvas_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](canvas_Properties.html#maxHeight) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](canvas_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](canvas_Properties.html#minHeight) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](canvas_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](canvas_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](canvas_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](canvas_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](canvas_Properties.html#zIndex) | Specifies the stack order of a widget. |

Shapes Configuration
--------------------

| Properties | Description |
| --- | --- |
| [shapesData](canvas_Properties.html#shapesData) | Specifies the configuration for the shapes drawn in Canvas widget. |

 

| Methods | Description |
| --- | --- |
| [addShapes](canvas_Method.html#addShapes) | This method helps you to add shapes to the Canvas widget. |
| [clear](canvas_Method.html#clear) | This method clears all the shapes drawn inside the Canvas widget. |
| [removeShapes](canvas_Method.html#removeShapes) | This method deletes specific shapes drawn inside the Canvas widget. |
| [updateShapes](canvas_Method.html#updateShapes) | This method helps you to update the positional parameters of the shapes inside the Canvas widget. |

UI Appearance
-------------

| Properties | Description |
| --- | --- |
| [opacity](canvas_Properties.html#opacity) | Specifies the opacity of the widget. |
| [skin](canvas_Properties.html#skin) | Specifies the look and feel of Canvas widget. |

 

User Input Handling
-------------------

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Canvas_Events.html#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](Canvas_Events.html#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](Canvas_Events.html#onTouchMove) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](Canvas_Events.html#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](canvas_Method.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](canvas_Method.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](canvas_Method.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

Configurations Common To All Widgets
------------------------------------

| Methods | Description |
| --- | --- |
| [clone](canvas_Method.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [convertPointFromWidget](canvas_Method.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](canvas_Method.html#convertPointToWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [removeFromParent](canvas_Method.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setVisibility](canvas_Method.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [cursorType](canvas_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [id](canvas_Properties.html#id) | id is a unique identifier of the widget consisting of alpha numeric characters. |
| [isVisible](canvas_Properties.html#isVisible) | Controls the visibility of the widget on the form. |
| [info](canvas_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [parent](canvas_Properties.html#parent) | Helps you access the parent of the widget. |

Canvas Widget Basics
--------------------

The Canvas widget enables you to draw shapes like lines (in any orientation), circles, rectangle, etc. in your application. Canvas widget draws the shapes inside its view bounds, by using the shape configurations provided in the _shapesData_ property.

### Creating a Canvas Widget Using the Constructor: voltmx.ui.Canvas

{% highlight voltMx %}
var myCanvas = new voltmx.ui.Canvas(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

Example

{% highlight voltMx %}// Defining properties for a Canvas widget with the id:canvasWidgetRef
var basicConf = {
    "height": "200px",
    "id": "canvasWidgetRef",
    "isVisible": true,
    "left": "10%",
    "skin": "skinCanvas",
    "top": "10%",
    "width": "200px",
    "zIndex": 1,
    //Adding the configuration of the shape with shapeid:shape1. 
    "shapesData": [{
        "shapeid": "shape1",
        "shapeType": voltmx.canvas.SHAPE_TYPE_LINE,
        "lineStyle": voltmx.canvas.LINE_STYLE_DOTTED,
        "lineStyleConfig": ["1px", "1px"],
        "thickness": "2px",
        "points": [
            ["10px", "10px"],
            ["100px", "10px"]
        ],
        strokeColor: "ff000000",
    }]
};
var layoutConf = {};
var pspConf = {};

//Creating the Canvas widget
var canvas = new voltmx.ui.Canvas(basicConf, layoutConf, pspConf);
{% endhighlight %}

