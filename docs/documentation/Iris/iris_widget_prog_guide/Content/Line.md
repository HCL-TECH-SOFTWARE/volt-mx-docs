layout: documentation---
category: iris_widget_prog_guide
---

Line Widget
-----------

The Line widget allows you to draw a horizontal or a vertical line on a Form. It is used as a separator between widgets for a better visual experience.

The Line widget capabilities can be broadly categorized into the following:

*   [UI Appearance](#Layout)
*   [Gestures](#Gestures)
*   [Miscellaneous](#Miscellaneous)
*   [Configurations Common To All Widgets](#Configurations)

 

#### Gestures

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Line_Events.htm#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |

 

#### UI Appearance

| Properties | Description |
| --- | --- |
| [skin](Line_Properties.htm#skin) | Specifies the look and feel of the Line when not in focus. |

 

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [toolTip](Line_Properties.htm#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

 

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Line_Properties.htm#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enableCache](Line_Properties.htm#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](Line_Properties.htm#id) | id is a unique identifier of Line consisting of alpha numeric characters. |
| [isVisible](Line_Properties.htm#isVisible) | Controls the visibility of the line widget on the form. |
| [info](Line_Properties.htm#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |

### Line Widget Basics

You can add the Line Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

#### Creating a Line Using a Constructor: hcl.ui.Line

{% highlight voltMx %}​​​​​
var myline = new hcl.ui.Line(basicConf, layoutConf, pspConf);​
{% endhighlight %}​​​​​

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

{% highlight voltMx %}​​​​​//Defining the properties for a Line with id:"line".
var lineBasicConf = {
    id: "line1",
    skin: "gradlblskin",
    isVisible: true
};

var lineLayoutConf = {
    margin: \[0, 0, 0, 0\],
    padding: \[3, 3, 3, 3\],
    thickness: 25
};

var linePSPConf = {};

//Creating the Line.
var line1 = new hcl.ui.Line(lineBasicConf, lineLayoutConf, linePSPConf);

//Reading the id property of Line widget.
alert("Line id ::"+line1.id);​
{% endhighlight %}​​​​​

#### When do I use a Line Widget?

You can use a Line widget to indicate a separator between two widgets which are placed side-by-side or placed one below the other.

#### Behavior of a Line Widget

*   Orientation of a line can be horizontal or vertical. The orientation of the line depends on the widget it is placed in.

#### Customizing Appearance

You can customize the appearance of the Line widget using the following properties:

*   [margin](Line_Properties.htm#margin): Defines the space around a widget.
*   [thickness](Line_Properties.htm#thickness): Defines the thickness of the line in pixels.

![](Resources/prettify/onLoad.png)