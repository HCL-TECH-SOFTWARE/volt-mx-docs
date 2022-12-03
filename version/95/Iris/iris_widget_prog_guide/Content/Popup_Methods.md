                                

Popup Methods
-------------

Popup has the following methods associated with it:

* * *

* * *


<details close markdown="block"><summary>add</summary>

* * *

This method is used to add widgets to the Popup. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

<b>Syntax</b>

```

add(widgets)
```

<b>Parameters</b>

widgets

Comma separated list of widgets.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Remarks</b>

Adding a widget to the Popup or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Popup or Box.

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Adding a label and a button widgets to the popUp. 
//Here label and button widgets should be created already and made accessible. 
**popUp.add(lbl,btn);**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>addAt</summary>

* * *

This method is used to add widgets to the Popup container at the specified index. Widget is prepended if index <0 and appended at the end of the container if the index > size+1. Size is the number of widgets already present in the container. If a new widget is added or removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately. Adding a widget to the Popup or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Popup or Box.

<b>Syntax</b>

```

addAt(widgetref,index,animation)
```

<b>Parameters</b>

widgetref

Reference of the name of the widget.

index

Index number at which the widget is to be added.

animation

Optional. This parameter is used to associate an animation at given operation.

The animation parameter has three parameters:

definition

An object defined using voltmx.ui.createAnimation() API. Refer to voltmx.ui.createAnimation in the Volt MX API programmers Guide for more details.

config

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the Volt MX Iris [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the Volt MX Iris [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Adding label to the popUp at 15th index Position. 
//Label should be created already and made accessible . 
**popUp.addAt(lbl,15);**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>destroy</summary>

* * *

This method is used to destroy any unwanted Popups at any point in time, and allows increasing the application life by reducing the memory usage.

<b>Syntax</b>

```

destroy()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin",isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//destroy method call
**popUp.destroy();**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>dismiss</summary>

* * *

This method is used to dismiss the popup on which this method is called.

<b>Syntax</b>

```

dismiss()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Dismiss method call.
**popUp.dismiss();**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>navigateTo</summary>

* * *

This method is used to navigate from one popup to other popup. The popup on which this method is called remains displayed while the content of the popup changes from current popup to given popup.

> **_Note:_** This method is applicable only when the popupStyle is set as POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

navigateTo(popupinstance,config);
```

<b>Parameters</b>

popupinstance

Reference to the popup.

config

Optional. For future releases. Not configurable as of now.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.  
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//NavigateTo method call.
**popUp.navigateTo(popupinstance);**
```

<b>Platform Availability</b>

Available on iOS (iPad only) platform

* * *

</details>
<details close markdown="block"><summary>remove</summary>

* * *

This method removes a widget from the Popup container. If a new widget is removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

<b>Syntax</b>

```

remove(widgetref)
```

<b>Parameters</b>

widgetref

Reference of the name of the widget.

<b>Return Values</b>

The current Popup handle is returned.

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Removing label ,button widgets to the popUp. 
//Here label and button widgets should be created and added to the popUp. 
**popUp.remove(lbl,btn);**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>removeAt</summary>

* * *

This method removes a widget at the given index from the Popup container. If a new widget is removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

> **_Note:_** If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

<b>Syntax</b>

```

removeAt(index)
```

<b>Parameters</b>

index

Specifies the index of the popup.

<b>Return Values</b>

Reference of the name of the widget to be removed.

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", type:constants.POPUP_TYPE_NATIVE,title:"PopUP", 
skin:"popSkin", isModal:true, transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Removing widget from the popUp at 15th index Position. 
**popUp.removeAt(15);**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>scrollToBeginning</summary>

* * *

This method gives you the control to scroll to the beginning of the Popup.

<b>Syntax</b>

```

scrollToBeginning()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin",isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//scrollToBeginning method call. 
**popUp.scrollToBeginning();**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>scrollToEnd</summary>

* * *

This method gives you the control to scroll to the end of the Popup.

<b>Synax</b>

```

scrollToEnd()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//scrollToEnd method call. 
**popUp.scrollToEnd();**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>scrollToWidget</summary>

* * *

This method gives you the control to scroll the widget in the Popup.

<b>Syntax</b>

```

scrollToWidget(widgetref)
```


<b>Parameters</b>

widgetref

Reference of the name of the widget.

<b>Return Values</b>

None

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Scrolling the popUp to the Label lbl. 
**popUp.scrollToWidget(lbl);**
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>setContext</summary>

* * *

Specifies the popup that must be displayed for the context and also helps you to position the popup on the screen. The popup can be positioned relative to a widget on the screen and _setcontext_ enables you to do that.

The context contains information regarding the _widget_ for which the popup must be shown and also the _anchoring_ of the popup on the widget (left, right, center, top, or bottom).

Additionally for the iPhone platform, you can choose to specify the _sizetoanchorwidth_, a boolean property. If you set the value to true, the popup width is made equal to the width of the anchor. If the value is _false_ (default value), the popup takes the width allocated in the popup properties.

<b>Syntax</b>

```

setContext(context)
```

<b>Parameters</b>

context

Set of key value pairs providing information about the widget and the anchoring used to position the popup on the screen.

> Following are the key value pairs of this JSObject:

> sizetoanchorwidth \[Boolean\] - Mandatory (applicable on iPhone)

> Specifies if the width of the popup has to be the same as that of the widget relative to which it has been anchored.

> anchor \[String\] - Mandatory

> It is a set of flags that are used to anchor the popup with respect to the dimensions of the widget. Possible values are (_"top", "bottom", "right", "left"_). Additionally native popupover style (POPUP\_TYPE\_NATIVE\_STYLE) on iPad supports "any". When you set this property, the popup is anchored to the best possible position around another widget.

> widget (widgetref) - Mandatory

> Reference to an existing widget with respect to which the Popup has to be anchored (Pass the Formid if the popup is to be positioned with respect to a Form. This Form is assumed to be the form on which the popup will be overlaid).

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		
  
//setContext method call
**popUp.setContext(context1);**
```

<b>Platform Availability</b>

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>setTitleBarLeftSideButtonSkin</summary>

* * *

This method enables you to set the properties for a left-side button of a titlebar.

> **_Note:_** The setTitleBarLeftSideButtonSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

setTitleBarLeftSideButtonSkin(text,skin,callback);
```


<b>Parameters</b>

text

Specifies the text of the title bar left side button.

skin

Specifies the skin of the button. It supports fontColor, fontSize, and Image properties.

callback

An event callback is invoked by the platform when the user performs a click action.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		
  
//setTitleBarLeftSideButtonSkin method call
**popUp.setTitleBarLeftSideButtonSkin(title, image, handler);**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>setTitleBarRightSideButtonSkin</summary>

* * *

This method enables you to set the properties for a right-side button of a titlebar.

> **_Note:_** The setTitleBarRightSideButtonSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

setTitleBarRightSideButtonSkin(title,image,handler);
```


<b>Parameters</b>

text

Specifies the text of the title bar right side button.

skin

Specifies the skin of the button. It supports fontColor, fontSize, and Image properties.

callback

An event callback is invoked by the platform when the user performs a click action.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		

//setTitleBarRightSideButtonSkin method call
**popUp.setTitleBarRightSideButtonSkin(title, image, handler);**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>setTitleBarSkin</summary>

* * *

This method enables you to set the skin for a titlebar of a popup.

> **_Note:_** The setTitleBarSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

setTitleBarSkin()
```

<b>Parameters</b>

skin

Reference to the skin.

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		

//setTitleBarSkin method call
**popUp.setTitleBarSkin(skin);**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>showTitleBar</summary>

* * *

This method gives you the control to show a titlebar within a popup.

> **_Note:_** The showTitleBar method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

showTitleBar()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};  
  
//Creating the Popup.  
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);  
  
//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		
  
//showTitleBar method call
**popUp.showTitleBar();**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>hideTitleBar</summary>

* * *

This method gives you the control to hide a titlebar within a popup.

> **_Note:_** The hideTitleBar method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

<b>Syntax</b>

```

hideTitleBar()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};  
  
//Creating the Popup.  
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);  
  
//Defining the context Object
var context1={"widget":frmApis.label22,"anchor":"bottom","sizetoanchorwidth":false};		
  
//hideTitleBar method call
**popUp.hideTitleBar();**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad.

* * *

</details>
<details close markdown="block"><summary>show</summary>

* * *

Displays the popup on to the screen.

<b>Syntax</b>

```

show()
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Exceptions</b>

None

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//show method call
**popUp.show();**
```

<b>Platform Availability</b>

This method is available on iPhone/iPad, and Windows Desktop platforms.

* * *

</details>
<details close markdown="block"><summary>widgets</summary>

* * *

Returns an array of the widget references which are direct children of the popup.

<b>Syntax</b>

```

widgets()
```

<b>Parameters</b>

None

<b>Return Values</b>

This method returns _Read only_ array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Form hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.

<b>Exceptions</b>

WidgetError

<b>Example</b>

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Collecting all the widgets of the PopUp into array and displaying the references.
**wigArr = popUp.widgets();**	
alert("Widgets are::"+wigArr);
```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>

