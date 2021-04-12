---
layout: "documentation"
category: "iris_widget_prog_guide"
---


You are here: Creating a ReactNativeContainer Using a Constructor: voltmx.ui.ReactNativeContainer

ReactNativeContainer Widget
===========================

ReactNativeContainer is a container widget that helps to display React Native content in your application.

ReactNativeContainer widget can be created only through code.

React Native is a framework that is used to create cross-platform mobile applications. A feature developed in the React Native framework is embedded into the Volt MX Iris form through the React Native Container. This feature is available from V8 SP4 onwards.

**Adding React Native apps:** You can integrate a feature developed in the React Native framework into Volt MX Iris apps, without the need of creating the same in the Volt MX Iris framework.

For more information related to the React Native App Integration to a Volt MX Iris app feature, refer these sections:

*   [Integrate React Native App into a Volt MX IrisApp]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Integrate_React_Native_App_into_VoltMX_App.html)
*   [Communication API for React Native App]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/communication_api_for_react_native.html)

The ReactNativeContainer widget capabilities can be broadly categorized into the following items:

*   [Layout](#layout)
*   [ReactNativeContainer-specific Properties](#reactnativecontainer-specific-properties)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)
*   [Create a ReactNativeContainer Widget](#creating-a-reactnativecontainer-using-a-constructor-voltmxuireactnativecontainer)

Layout
------


| Properties | Description |
| --- | --- |
| [anchorPoint]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [maxHeight]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.html#zIndex) | Specifies the stack order of a widget. |

ReactNativeContainer-specific Properties
----------------------------------------


| Properties | Description |
| --- | --- |
| [nativeModulePackages](ReactNativeContainer_Properties.html#nativeModulePackages) | If the embedded React Native app contains Native modules, then those modules are listed through the nativeModulePackages Property. |
| [reactNativeAppID](ReactNativeContainer_Properties.html#reactNativeAppID) | After you select a project from the ReactNativeProjects folder, the selected project's app name is passed in the reactNativeAppID property. |

Configurations Common To All Widgets
------------------------------------


| Properties | Description |
| --- | --- |
| [id](ReactNativeContainer_Properties.html#id) | A unique identifier of ReactNativeContainer consisting of alpha numeric characters. |
| [info](ReactNativeContainer_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](ReactNativeContainer_Properties.html#isVisibl) | Controls the visibility of a widget on the ReactNativeContainer. |
| [parent](ReactNativeContainer_Properties.html#parent) | Helps you access the parent of the widget. |

ReactNativeContainer Widget Basics
----------------------------------

### Creating a ReactNativeContainer Using a Constructor: voltmx.ui.ReactNativeContainer

Before creating a ReactNativeContainer widget, you must first [integrate a React Native app to a Volt MX Iris app]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Integrate_React_Native_App_into_VoltMX_App.html). You can then create a ReactNativeContainer widget, and embed the React Native app into a form of the Volt MX Iris app through this container widget.

Here is a code example of how to create a ReactNativeContainer widget and then embed the React Native app into a form of the Volt MX Irisapp.

{% highlight voltMx %}//Defining the properties of the ReactNativeContainer widget.  
var basicConfig = {
    "height": "85%",
    "id": "ReactNativeContainer1",
    "isVisible": true,
    "left": "5dp",
    "top": "55dp",
    "width": "100%",
    "reactNativeAppID": "reactNativeSampleApp",
    "zIndex": 1
}
var layoutConfig = {};
var pspConfig = {};
var ReactNativeContainer1 = new voltmx.ui.ReactNativeContainer(basicConfig, layoutConfig, pspConfig);
{% endhighlight %}

Furthermore, you can use some APIs to communicate between the React Native app's JavaScript framework and the Volt MX Iris app's Volt MX Iris framework. For more information about the React Native APIs, click [here]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/communication_api_for_react_native.html).

To gain a more hands-on experience on the React Native Integration process, download and use the [TaskListSample app](https://github.com/voltmx/ReactNativeIntegration_TaskListSample) from [GitHub](https://github.com/).
