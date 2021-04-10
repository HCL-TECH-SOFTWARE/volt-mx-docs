---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

Popup Methods
-------------

Popup has the following methods associated with it:

* * *

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[add](javascript:void(0);)

* * *

This method is used to add widgets to the Popup. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

Syntax

add(widgets)

Parameters

widgets

Comma separated list of widgets.

Return Values

None

Exceptions

WidgetError

Remarks

Adding a widget to the Popup or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Popup or Box.

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[addAt](javascript:void(0);)

* * *

This method is used to add widgets to the Popup container at the specified index. Widget is prepended if index <0 and appended at the end of the container if the index > size+1. Size is the number of widgets already present in the container. If a new widget is added or removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately. Adding a widget to the Popup or Box hierarchy, which is already a part of the other widget hierarchy, will lead to undefined behaviors. You have to explicitly remove the widget from one hierarchy before adding it to another Popup or Box.

Syntax

addAt(widgetref,index,animation)

Parameters

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

As defined in Animation Configuration. For more information, please see the `AnimationConfiguration` object documentation in the Volt MX Iris [API Developer's Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/introduction.html).

callbacks

A dictionary that represents JavaScript functions that work as animation call backs. For more information, see `AnimationConfiguration` object documentation in the Volt MX Iris [API Developer's Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/introduction.html).

Return Values

None

Exceptions

WidgetError

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[destroy](javascript:void(0);)

* * *

This method is used to destroy any unwanted Popups at any point in time, and allows increasing the application life by reducing the memory usage.

Syntax

destroy()

Parameters

None

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin",isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//destroy method call
**popUp.destroy();**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[dismiss](javascript:void(0);)

* * *

This method is used to dismiss the popup on which this method is called.

Syntax

dismiss()

Parameters

None

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Dismiss method call.
**popUp.dismiss();**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[navigateTo](javascript:void(0);)

* * *

This method is used to navigate from one popup to other popup. The popup on which this method is called remains displayed while the content of the popup changes from current popup to given popup.

> **_Note:_** This method is applicable only when the popupStyle is set as POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

navigateTo(popupinstance,config);

Parameters

popupinstance

Reference to the popup.

config

Optional. For future releases. Not configurable as of now.

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};
  
//Creating the Popup.  
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//NavigateTo method call.
**popUp.navigateTo(popupinstance);**
{% endhighlight %}

Platform Availability

Available on iOS (iPad only) platform

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[remove](javascript:void(0);)

* * *

This method removes a widget from the Popup container. If a new widget is removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

Syntax

remove(widgetref)

Parameters

widgetref

Reference of the name of the widget.

Return Values

The current Popup handle is returned.

Exceptions

WidgetError

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[removeAt](javascript:void(0);)

* * *

This method removes a widget at the given index from the Popup container. If a new widget is removed will reflect immediately from the Popup hierarchy model perspective, however the changes are displayed when the Popup appears. When the widgets are added to the current visible Popup, then the changes will reflect immediately.

> **_Note:_** If the index is not within the limits then _removeAt_ will be silent and doesn't yield any result.

Syntax

removeAt(index)

Parameters

index

Specifies the index of the popup.

Return Values

Reference of the name of the widget to be removed.

Exceptions

WidgetError

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", type:constants.POPUP_TYPE_NATIVE,title:"PopUP", 
skin:"popSkin", isModal:true, transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Removing widget from the popUp at 15th index Position. 
**popUp.removeAt(15);**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[scrollToBeginning](javascript:void(0);)

* * *

This method gives you the control to scroll to the beginning of the Popup.

Syntax

scrollToBeginning()

Parameters

None

Return Values

None

Exceptions

WidgetError

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin",isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//scrollToBeginning method call. 
**popUp.scrollToBeginning();**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[scrollToEnd](javascript:void(0);)

* * *

This method gives you the control to scroll to the end of the Popup.

Synax

scrollToEnd()

Parameters

None

Return Values

None

Exceptions

WidgetError

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//scrollToEnd method call. 
**popUp.scrollToEnd();**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[scrollToWidget](javascript:void(0);)

* * *

This method gives you the control to scroll the widget in the Popup.

Syntax

scrollToWidget(widgetref)

Parameters

widgetref

Reference of the name of the widget.

Return Values

None

Exceptions

WidgetError

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100, padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Scrolling the popUp to the Label lbl. 
**popUp.scrollToWidget(lbl);**
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setContext](javascript:void(0);)

* * *

Specifies the popup that must be displayed for the context and also helps you to position the popup on the screen. The popup can be positioned relative to a widget on the screen and _setcontext_ enables you to do that.

The context contains information regarding the _widget_ for which the popup must be shown and also the _anchoring_ of the popup on the widget (left, right, center, top, or bottom).

Additionally for the iPhone platform, you can choose to specify the _sizetoanchorwidth_, a boolean property. If you set the value to true, the popup width is made equal to the width of the anchor. If the value is _false_ (default value), the popup takes the width allocated in the popup properties.

Syntax

setContext(context)

Parameters

context

Set of key value pairs providing information about the widget and the anchoring used to position the popup on the screen.

> Following are the key value pairs of this JSObject:

> sizetoanchorwidth \[Boolean\] - Mandatory (applicable on iPhone)

> Specifies if the width of the popup has to be the same as that of the widget relative to which it has been anchored.

> anchor \[String\] - Mandatory

> It is a set of flags that are used to anchor the popup with respect to the dimensions of the widget. Possible values are (_"top", "bottom", "right", "left"_). Additionally native popupover style (POPUP\_TYPE\_NATIVE\_STYLE) on iPad supports "any". When you set this property, the popup is anchored to the best possible position around another widget.

> widget (widgetref) - Mandatory

> Reference to an existing widget with respect to which the Popup has to be anchored (Pass the Formid if the popup is to be positioned with respect to a Form. This Form is assumed to be the form on which the popup will be overlaid).

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setTitleBarLeftSideButtonSkin](javascript:void(0);)

* * *

This method enables you to set the properties for a left-side button of a titlebar.

> **_Note:_** The setTitleBarLeftSideButtonSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

setTitleBarLeftSideButtonSkin(text,skin,callback);

Parameters

text

Specifies the text of the title bar left side button.

skin

Specifies the skin of the button. It supports fontColor, fontSize, and Image properties.

callback

An event callback is invoked by the platform when the user performs a click action.

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setTitleBarRightSideButtonSkin](javascript:void(0);)

* * *

This method enables you to set the properties for a right-side button of a titlebar.

> **_Note:_** The setTitleBarRightSideButtonSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

setTitleBarRightSideButtonSkin(title,image,handler);

Parameters

text

Specifies the text of the title bar right side button.

skin

Specifies the skin of the button. It supports fontColor, fontSize, and Image properties.

callback

An event callback is invoked by the platform when the user performs a click action.

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setTitleBarSkin](javascript:void(0);)

* * *

This method enables you to set the skin for a titlebar of a popup.

> **_Note:_** The setTitleBarSkin method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

setTitleBarSkin()

Parameters

skin

Reference to the skin.

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[showTitleBar](javascript:void(0);)

* * *

This method gives you the control to show a titlebar within a popup.

> **_Note:_** The showTitleBar method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

showTitleBar()

Parameters

None

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[hideTitleBar](javascript:void(0);)

* * *

This method gives you the control to hide a titlebar within a popup.

> **_Note:_** The hideTitleBar method is supported only for IPAD when the popupStyle is set to POPUP\_TYPE\_NATIVE\_STYLE.

Syntax

hideTitleBar()

Parameters

None

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[show](javascript:void(0);)

* * *

Displays the popup on to the screen.

Syntax

show()

Parameters

None

Return Values

None

Exceptions

None

Example

{% highlight voltMx %}
//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, 
transparencyBehindThePopup:100};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={};

//Creating the Popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//show method call
**popUp.show();**
{% endhighlight %}

Platform Availability

This method is available on iPhone/iPad, and Windows Desktop platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[widgets](javascript:void(0);)

* * *

Returns an array of the widget references which are direct children of the popup.

Syntax

widgets()

Parameters

None

Return Values

This method returns _Read only_ array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Form hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.

Exceptions

WidgetError

Example

{% highlight voltMx %}
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
{% endhighlight %}

Platform Availability

Available on all platforms

* * *

