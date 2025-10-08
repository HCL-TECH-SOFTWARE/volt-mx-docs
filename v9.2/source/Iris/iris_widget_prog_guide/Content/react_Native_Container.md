

You are here: Creating a ReactNativeContainer Using a Constructor: voltmx.ui.ReactNativeContainer

ReactNativeContainer Widget
===========================

ReactNativeContainer is a container widget that helps to display React Native content in your application.

ReactNativeContainer widget can be created only through code.

React Native is a framework that is used to create cross-platform mobile applications. A feature developed in the React Native framework is embedded into the Volt MX Iris form through the React Native Container. This feature is available from V8 SP4 onwards.

**Adding React Native apps:** You can integrate a feature developed in the React Native framework into Volt MX Iris apps, without the need of creating the same in the Volt MX Iris framework.

For more information related to the React Native App Integration to a Volt MX Iris app feature, refer these sections:

*   [Integrate React Native App into a Volt MX IrisApp](../../../Iris/iris_user_guide/Content/Integrate_React_Native_App_into_VoltMX_App.md)
*   [Communication API for React Native App](../../../Iris/iris_api_dev_guide/content/communication_api_for_react_native.md)

The ReactNativeContainer widget capabilities can be broadly categorized into the following items:

*   [Layout](#layout)
*   [ReactNativeContainer-specific Properties](#reactnativecontainer-specific-properties)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)
*   [Create a ReactNativeContainer Widget](#creating-a-reactnativecontainer-using-a-constructor-voltmxuireactnativecontainer)

Layout
------


| Properties | Description |
| --- | --- |
| [anchorPoint](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [maxHeight](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](../../../Iris/iris_widget_prog_guide/Content/ReactNativeContainer_Properties.md#zIndex) | Specifies the stack order of a widget. |

ReactNativeContainer-specific Properties
----------------------------------------


| Properties | Description |
| --- | --- |
| [nativeModulePackages](ReactNativeContainer_Properties.md#nativeModulePackages) | If the embedded React Native app contains Native modules, then those modules are listed through the nativeModulePackages Property. |
| [reactNativeAppID](ReactNativeContainer_Properties.md#reactNativeAppID) | After you select a project from the ReactNativeProjects folder, the selected project's app name is passed in the reactNativeAppID property. |

Configurations Common To All Widgets
------------------------------------


| Properties | Description |
| --- | --- |
| [id](ReactNativeContainer_Properties.md#id) | A unique identifier of ReactNativeContainer consisting of alpha numeric characters. |
| [info](ReactNativeContainer_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](ReactNativeContainer_Properties.md#isVisibl) | Controls the visibility of a widget on the ReactNativeContainer. |
| [parent](ReactNativeContainer_Properties.md#parent) | Helps you access the parent of the widget. |

ReactNativeContainer Widget Basics
----------------------------------

### Creating a ReactNativeContainer Using a Constructor: voltmx.ui.ReactNativeContainer

Before creating a ReactNativeContainer widget, you must first [integrate a React Native app to a Volt MX Iris app](../../../Iris/iris_user_guide/Content/Integrate_React_Native_App_into_VoltMX_App.md). You can then create a ReactNativeContainer widget, and embed the React Native app into a form of the Volt MX Iris app through this container widget.

Here is a code example of how to create a ReactNativeContainer widget and then embed the React Native app into a form of the Volt MX Irisapp.

```
//Defining the properties of the ReactNativeContainer widget.  
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
```

Furthermore, you can use some APIs to communicate between the React Native app's JavaScript framework and the Volt MX Iris app's Volt MX Iris framework. For more information about the React Native APIs, click [here](../../../Iris/iris_api_dev_guide/content/communication_api_for_react_native.md).

To gain a more hands-on experience on the React Native Integration process, download and use the [TaskListSample app](https://github.com/voltmx/ReactNativeIntegration_TaskListSample) from [GitHub](https://github.com/).
