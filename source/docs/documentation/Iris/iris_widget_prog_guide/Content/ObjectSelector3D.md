---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

ObjectSelector3D Widget
-----------------------

The ObjectSelector3D widget can be used for allowing the user to select homogeneous objects arranged on a two-dimensional grid. It provides the user with a three-dimensional graphical view of the objects which makes it more attractive than regular two-dimensional images.

This section provides the following documentation on this Widget.

##### [Overviews](#objectselector3d-overviews)

##### [Events](ObjectSelector3D_Events.html)

##### [Methods](ObjectSelector3D_Methods.html)

##### [Properties](ObjectSelector3D_Basic_Properties.html)

The ObjectSelector3D widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Data Management](#data-management)
*   [User Input Handling](#user-input-handling)
*   [3D Touch](#3d-touch)
*   [UI Appearance](#ui-appearance)
*   [State Configurations](#state-configurations)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [hExpand](ObjectSelector3D_Basic_Properties.html#hExpand) | Specifies if the widget should occupy all the width available to it. |
| [vExpand](ObjectSelector3D_Basic_Properties.html#vExpand) | Specifies if the widget has to occupy all the vertical space available to it. |

  

#### Data Management

| Methods | Description |
| --- | --- |
| [clearAllData](ObjectSelector3D_Methods.html#clearAll) | Allows you to clear all the data set on the widget. |
| [setMapData](ObjectSelector3D_Methods.html#setMapDa) | Allows you to define the map of objects which will be presented to the user for selecting the items. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](ObjectSelector3D_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](ObjectSelector3D_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](ObjectSelector3D_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](ObjectSelector3D_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [contentAlignment](ObjectSelector3D_Basic_Properties.html#contentA) | Specifies the alignment of the text on the ObjectSelector3D with respect to its boundaries. |
| [margin](ObjectSelector3D_Basic_Properties.html#margin) | Defines the space around a widget. |
| [marginInPixel](ObjectSelector3D_Basic_Properties.html#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [padding](ObjectSelector3D_Basic_Properties.html#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](ObjectSelector3D_Basic_Properties.html#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [widgetAlignment](ObjectSelector3D_Basic_Properties.html#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

#### User Input Handling

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](ObjectSelector3D_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](ObjectSelector3D_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](ObjectSelector3D_Methods.html#removeGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### State Configurations

| Methods | Description |
| --- | --- |
| [getSelectedCells](ObjectSelector3D_Methods.html#getSelec) | Allows you to retrieve the cells that are currently selected in the widget. |
| [setSelectedCells](ObjectSelector3D_Methods.html#setSelec) | Allows you to identify the cells that are initially selected in the map. |
| [setRequiredSelectionsCount](ObjectSelector3D_Methods.html#setRequi) | Allows you to define the number of objects the user must select for the selection process to be considered complete. |

 

| Events | Description |
| --- | --- |
| [onSelectionDone](ObjectSelector3D_Events.html#onSelect) | An event callback that is invoked by the platform when an Image is selected in ObjectSelector3D. |

 

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [addModel](ObjectSelector3D_Methods.html#addModel) | Allows you to add a new model to the widget's working set of models. |
| [defineSpecialModels](ObjectSelector3D_Methods.html#defineSp) | Allows you to define the models to the widget. |
| [getBadge](ObjectSelector3D_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](ObjectSelector3D_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |
| [setCameraProperties](ObjectSelector3D_Methods.html#setCamer) | Allows you to set the properties of the camera while in walk-through mode. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](ObjectSelector3D_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](ObjectSelector3D_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](ObjectSelector3D_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](ObjectSelector3D_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](ObjectSelector3D_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](ObjectSelector3D_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [enableCache](ObjectSelector3D_Basic_Properties.html#enableCa) | The property enables you to improve the performance of Positional Dimension Animations. |
| [id](ObjectSelector3D_Basic_Properties.html#id) | id is a unique identifier of ObjectSelector3D consisting of alpha numeric characters. |
| [info](ObjectSelector3D_Basic_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](ObjectSelector3D_Basic_Properties.html#isVisibl) | Controls the visibility of a widget on the form. |

### ObjectSelector3D Overviews

It has two modes, a selection mode and a walk-through mode.The _selection mode_ provides you with a top view of the grid of 3D objects and allows the user to tap on objects to select/unselect them. At any time, the user can hold down on a selected object and the widget will go into walk-through mode.

In _walk-through mode_, the user is shown a simulation of how it would appear if the user were to start from a starting point and walk (on foot) up to the selected object.

> **_Note:_** To use the ObjectSelector3D widget, you must load the 3D models. For more information about loading the models, see _VoltMX Iris User Guide_.

#### Creating a ObjectSelector3D using a constructor: voltmx.ui.ObjectSelector3D

{% highlight voltMx %}
var myOS3D = new voltmx.ui.ObjectSelector3D (basicConf, layoutConf, pspConf)
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

{% highlight voltMx %}
//The below function is the callback function for onSelectionDoneCalBck event
function onSelectionDoneCalBck(objThreeD)
{
	/*Write your logic here*/
}

//Defining the properties for ObjectSelector3D with onSelectionDone:onSelectionDoneCalBck
var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true, onSelectionDone:onSelectionDoneCalBck};

var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};

//Creating the ObjectSelector3D.
var objThreeD =new voltmx.ui.ObjectSelector3D(objBasic, objLayout, {}) ;
{% endhighlight %}

#### Customizing Appearance

You can customize the appearance of the ObjectSelector3D using the following properties:

*   [widgetAlignment](ListBox_Basic_Properties.html#widgetAl): Specifies the alignment of the widget.
*   [margin](ListBox_Basic_Properties.html#margin): Defines the space around a widget.
*   [padding](ListBox_Basic_Properties.html#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](ObjectSelector3D_Basic_Properties.html#skin): Specify the skin to be applied to the ObjectSelector3D widget.
*   [focusSkin](ObjectSelector3D_Basic_Properties.html#focusSki): Specify the skin to be applied to the ObjectSelector3D when in focus.

#### Important Considerations

On Windows Phone platform, you must ensure the following:

*   This widget cannot be used without the models being loaded in the project.
*   For performance reasons, the models being used must be specifically designed for real-time rendering.
*   This widget is only useful where objects must be selected out of a homogeneous set (i.e., all the objects must be the same kind. For example, seats in a bus.)

