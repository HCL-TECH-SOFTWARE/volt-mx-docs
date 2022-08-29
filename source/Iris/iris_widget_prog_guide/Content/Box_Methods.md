                               

HBox Methods
------------

HBox widget has the following methods associated with it:

* * *

*   [add](#add)
*   [addAt](#addat)
*   [remove](#remove)
*   [removeAt](#removeat)
*   [replaceAt](#replaceat)
*   [widgets](#widgets)

### add

This method is used to add widgets to the box container. When the widgets are added to the current visible form, then the changes will reflect immediately. Adding a widget to the Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Box.

Syntax

add ()

Parameters

None

Return Values

None

Exceptions

WidgetError

Example

```

//Defining the properties for a Box properties.
var basicConfBox = {id:"boxAddMethodTest",
	isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxAddMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Adding label. button, box, label, and button widgets should be created already and accessible as well.
**boxAddMethodTest.add(lbl,btn);**
```

Platform Availability

Available on all platforms

### addAt

This method is used to add widgets to the Box container at the specified index. Widget is prepended if index <0 and appended at the end of the container if the index > size+1. Size is the number of widgets already present in the container. If a new widget is added or removed will reflect immediately from the Box hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible form, then the changes will reflect immediately. Adding a widget to the Form or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Form or Box.

Syntax

addAt (widgetref, index, animationConfig)

> **_Note:_** The parameter animationConfig is supported only on iOS (version 5.0 and above) and android (version 3.0 and above) platforms.

Parameters

widgetref - Mandatory

Reference of the widget to be added

index \[Number\] - Mandatory

Index number at which the widget is to be added.

animationConfig \[JSObject\] - Optional

Specifies the animation configuration object. Following are the parameters of the JSObject:

> > > **_Note:_** A non dictionary object or passing a null to animationConfig is ignored and will be treated as widget without any animation. Passing an empty dictionary will make the API assume the defaults for each of the supported key in the animation configuration.

animEffect - Optional

Specifies the animation effect. Following are the available options of animation effect:

> > *   constants.ANIMATION\_EFFECT\_EXPand: Specifies the widget must expand gradually by increasing the height of the widget.
> > *   constants.ANIMATION\_EFFECT\_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.
> > *   constants.ANIMATION\_EFFECT\_NONE: This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.

animDuration - Optional

Specifies the duration of the animation effect in seconds. The default value is 1 second. The negative values are ignored and defaulted to 1 second.

animDelay - Optional

Specifies the delay of the animation effect in seconds. The default value is 0 second. The negative values are ignored and defaulted to 0 second.

animCurve - Optional

Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve:

> > *   constants.ANIMATION\_CURVE\_EASEIN: Specifies the animation effect to start slow in the beginning.
> > *   constants.ANIMATION\_CURVE\_EASEOUT: Specifies the animation effect to slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_EASEINOUT: Specifies the animation effect to start slow and slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_LINEAR: This is the default value. Specifies the animation effect to continue with the same speed from start to end.
> 
> ![](Resources/Images/bezier_479x107.png)

animCallBacks - Optional

It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events:

> > *   **animStarted**: Invoked at the beginning of the animation without any parameters. Following is the signature of event: function animStarted()
> > *   **animEnded**: Invoked at the end of the animation without any parameters. Following is the signature of the event: function animEnded()
> > 
> > > **_Note:_** Passing an invalid type other than the above events lead to run time exceptions/ crashes.

Return Values

None

Exceptions

WidgetError

Example

```

//Defining animation configuration.
var withAnimConfig=
{
	"animEffect":constants.ANIMATION_EFFECT_EXPand,	
	"animDuration":1.5,	
	"animDelay":0.4,	
	"animCurve":constants.ANIMATION_CURVE_LINEAR,
	"animCallBacks":{"animStarted":startCallBackFunc,
		"animEnded":endCallBackFunc
	}
}

//Defining the properties for a Box properties.
var basicConfBox = {id:"boxAddAtMethodTest",
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxAddAtMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Adding label to the box at 15th index Position.
//Label should be created already and accessible as well.
boxAddAtMethodTest.addAt(lbl,15, withAnimConfig);
```

Platform Availability

Available on all platforms

### remove

This method removes a widget from the Box container. If a new widget is removed will reflect immediately from the Box hierarchy model perspective, however the changes are displayed when the Box appears. When the widgets are added to the current visible Box, then the changes will reflect immediately.

Syntax

remove (widgetref)

Parameters

widgetref - Mandatory

Reference of the widget to be removed.

Return Values

The current Form handle is returned.

Exceptions

WidgetError

Example

```

//Defining the properties for a Box properties.
var basicConfBox = {id:"boxRemoveMethodTest",
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxRemoveMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Removing label widget from the box .Here label should be created already and added inside the box.
**boxRemoveMethodTest.remove(lbl);**
```

Platform Availability

Available on all platforms

### removeAt

This method removes a widget at the given index from the Box container. If a new widget is removed will reflect immediately from the Box hierarchy model perspective, however the changes are displayed when the Box appears. When the widgets are added to the current visible Box, then the changes will reflect immediately.

> **_Note:_** If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

Syntax

removeAt (index, animationConfig)

> **_Note:_** The parameter animationConfig is supported only on iOS ( version 5.0 and above) and android (version 3.0 and above) platforms.

Parameters

index \[Number\] - Mandatory

Index number at which the widget is to be removed.

animationConfig \[JSObject\] - Optional

Specifies the animation configuration object. Following are the parameters of the JSObject:

> > > **_Note:_** A non dictionary object or passing a null to animationConfig is ignored and will be treated as widget without any animation. Passing an empty dictionary will make the API assume the defaults for each of the supported key in the animation configuration.

animEffect - Optional

Specifies the animation effect. Following are the available options of animation effect:

> > *   constants.ANIMATION\_EFFECT\_COLLAPSE: Specifies the widget must collapse gradually by decreasing the height of the widget.
> > *   constants.ANIMATION\_EFFECT\_FADE: Specifies the widget must disappear gradually by increasing the transparency of the widget.
> > *   constants.ANIMATION\_EFFECT\_NONE: This is the default option. Specifies animation should not be applied to the widget. However the layout animations are applied on the Form. The animation events are not triggered when this option is set.

animDuration - Optional

Specifies the duration of the animation effect in seconds. The default value is 1 second. The negative values are ignored and defaulted to 1 second.

animDelay - Optional

Specifies the delay of the animation effect in seconds. The default value is 0 second. The negative values are ignored and defaulted to 0 second.

animCurve - Optional

Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve:

> > *   constants.ANIMATION\_CURVE\_EASEIN: Specifies the animation effect to start slow in the beginning.
> > *   constants.ANIMATION\_CURVE\_EASEOUT: Specifies the animation effect to slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_EASEINOUT: Specifies the animation effect to start slow and slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_LINEAR: This is the default value. Specifies the animation effect to continue with the same speed from start to end.
> 
> ![](Resources/Images/bezier_479x107.png)

animCallBacks - Optional

It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events:

> > *   **animStarted**: Invoked at the beginning of the animation without any parameters. Following is the signature of the event.  
> > ```
function animStarted()
> > ```
> > *   **animEnded**: Invoked at the end of the animation without any parameters. Following is the signature of the event.  
> > ```
function animEnded()
> > ```
> > 
> > > **_Note:_** Passing an invalid type other than the above events lead to run time exceptions/ crashes.

Return Values

Reference of the name of the widget to be removed.

Exceptions

WidgetError

Example

```

//Defining animation configuration.
var withAnimConfig1=
{
	"animEffect":constants.ANIMATION_EFFECT_COLLAPSE,	
	"animDuration":1,	
	"animDelay":0,	
	"animCurve":constants.ANIMATION_CURVE_LINEAR,
}

//Defining the properties for a Box properties.
var basicConfBox = {id:"boxRemoveAtMethodTest",
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxRemoveAtMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Removing label from the box at 15th index Position. Label should be created and added at 15th index position of the box.
boxRemoveAtMethodTest.removeAt(15, withAnimConfig1);
```

Platform Availability

Available on all platforms

### replaceAt

This method replaces a widget with another widget in the HBox. If a widget is replaced from the HBox, will reflect immediately from the HBox hierarchy model perspective; however the changes are displayed when the HBox appears.

> **_Note:_** Post this operation widget that was replaced will get garbage collected unless you hold explicitly a reference to the replaced widget.

Syntax

replaceAt(widgetref, index, animationConfig)

Parameters

widgetref - Mandatory

Reference of the name of the widget.

index \[Number\] - Mandatory

Specifies the position in number format. Following are the rules applicable for index:

> *   If the _index < 0_, then first widget in the container gets replaced.
> *   If the _index > size -1_, then the last widget in the container widget gets replaced. The term _size_ refers to the number of widgets present in the container widget.

animationConfig\[JSObject\] - Optional

Specifies the animation configuration object. Following are the parameters of the JSObject:

> > > **_Note:_** A non dictionary object or passing a null to animationConfig is ignored and will be treated as widget without any animation. Passing an empty dictionary will make the API assume the defaults for each of the supported key in the animation configuration.

animEffect - Optional

Specifies the animation effect. Following are the available options of animation effect:

> > *   constants.ANIMATION\_EFFECT\_FLIP\_RIGHT: Specifies the widget must flip from right to left.
> > *   constants.ANIMATION\_EFFECT\_FLIP\_LEFT: Specifies the widget must flip from left to right.
> > *   constants.ANIMATION\_EFFECT\_NONE: This is the default option. Specifies animation should not be applied to the widget. However the layout animations are applied on the Form. The animation events are not triggered when this option is set.

animDuration - Optional

Specifies the duration of the animation effect in seconds. The default value is 1 second. The negative values are ignored and defaulted to 1 second.

animDelay - Optional

Specifies the delay of the animation effect in seconds. The default value is 0 second. The negative values are ignored and defaulted to 0 second.

animCurve - Optional

Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve:

> > *   constants.ANIMATION\_CURVE\_EASEIN: Specifies the animation effect to start slow in the beginning.
> > *   constants.ANIMATION\_CURVE\_EASEOUT: Specifies the animation effect to slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_EASEINOUT: Specifies the animation effect to start slow and slowdown towards the end.
> > *   constants.ANIMATION\_CURVE\_LINEAR: This is the default value. Specifies the animation effect to continue with the same speed from start to end.
> 
> ![](Resources/Images/bezier_479x107.png)

animCallBacks - Optional

It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events:

> > *   **animStarted**: Invoked at the beginning of the animation without any parameters. Following is the signature of the event:  
> > ```
function animStarted()
> > ```
> > *   **animEnded**: Invoked at the end of the animation without any parameters. Following is the signature of the event:  
> > ```
function animEnded()
> > ```
> > 
> > > **_Note:_** Passing an invalid type other than the above events lead to run time exceptions/ crashes.

Return Values

Reference of the name of the widget to be removed.

Exceptions

WidgetError

Example

```

//Defining animation configuration.
var withAnimConfig2=
{
	"animEffect":constants.ANIMATION_EFFECT_FLIP_RIGHT,	
	"animDuration":2,	
	"animDelay":3,	
	"animCurve":constants.ANIMATION_CURVE_LINEAR,
	"animCallBacks":{
		"animStarted":startCallBackFunc,
		"animEnded":endCallBackFunc
	}
}

//Defining the properties for a Box properties.
var basicConfBox = {id:"boxRemoveAtMethodTest",
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxRemoveAtMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Replacing label from the box at 15th index Position. Here label should be created and added at 15th index position of the box.
boxRemoveAtMethodTest.removeAt(lbl,15,withAnimConfig2);
```

Platform Availability

*   iOS
*   android

### widgets

This method returns an array of the widget references which are direct children of Box.

Syntax

widgets ()

Parameters

None

Return Values

This method returns _Read only_ array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Box hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.

Exceptions

WidgetError

Example

```

//Defining the properties for a Box properties.
var wigArr = new Array();

var basicConfBox = {id:"boxWidgetsMethodTest",
	isVisible:true, 
	orientation:constants.BOX_LAYOUT_VERTICAL,
	skin:"gradroundbox"};

var layoutConfBox = {containerWeight:100};

//Creating the Box.
var boxWidgetsMethodTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, {});

//Collecting all the widgets of the box into array and displaying the references.
wigArr = boxWidgetsMethodTest.widgets();
alert("Widgets are::"+wigArr);
```

Platform Availability

Available on all platforms

