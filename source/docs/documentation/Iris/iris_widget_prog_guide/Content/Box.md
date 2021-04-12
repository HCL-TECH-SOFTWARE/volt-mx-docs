---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                

HBox Widget
-----------

An HBox is used to layout widgets in a single horizontal orientation. It can contain any number of widgets. However, due to form size limitations, it is advisable not to place many widgets in a HBox.

You can add the HBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

An HBox provides you with an option to set [](HBox_Properties.html)[basic properties](HBox_Properties.html), for all platforms. You can also call/set Events and Methods on platforms as mentioned in the respective sections.

For information regarding the behavior exhibited by the HBox, [see Box Behavior](Box_Behavior.html).

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](HBox_Properties.html#focusskin) | [containerWeight](HBox_Properties.html#containerweight) | [blockedUISkin](HBox_Properties.html#blockeduiskin) |
| [id](HBox_Properties.html#id) | [gridCell](HBox_Properties.html#gridcell) | [borderCollapse](HBox_Properties.html#bordercollapse) |
| [info](HBox_Properties.html#info) | [layoutMeta](HBox_Properties.html#layoutmeta) | [contextMenu](HBox_Properties.html#contextmenu) |
| [isVisible](HBox_Properties.html#isvisible) | [layoutType](HBox_Properties.html#layouttype) | [hoverSkin](HBox_Properties.html#hoverskin) |
| [orientation](HBox_Properties.html#orientation) | [layoutAlignment](HBox_Properties.html#layoutalignment) | [viewConfig](HBox_Properties.html#viewconfig) |
| [position](HBox_Properties.html#position) | [margin](HBox_Properties.html#margin) |   |
| [skin](HBox_Properties.html#skin) | [marginInPixel](HBox_Properties.html#margininpixel) |   |
|   | [padding](HBox_Properties.html#padding) |   |
|   | [paddingInPixel](HBox_Properties.html#paddinginpixel) |   |
|   | [percent](HBox_Properties.html#percent) |   |
|   | [vExpand](HBox_Properties.html#vexpand) |   |
|   | [widgetAlignment](HBox_Properties.html#widgetalignment) |   |

  
| Events | Methods |
| --- | --- |
| [onClick](Box_Events.html#onclick) | [add](Box_Methods.html#add) |
| [onHover](Box_Events.html#onhover) | [addAt](Box_Methods.html#addat) |
| [onRightClick](Box_Events.html#onrightclick) | [remove](Box_Methods.html#remove) |
| [preOnclickJS](Box_Events.html#preonclickjs) | [removeAt](Box_Methods.html#removeat) |
| [postOnclickJS](Box_Events.html#postonclickjs) | [replaceAt](Box_Methods.html#replaceat) |
|   | [widgets](Box_Methods.html#widgets) |

##### Creating an HBox using a constructor: voltmx.ui.Box

{% highlight voltMx %}
var box1 = new voltmx.ui.Box(basicConf, layoutConf, pspConf)
{% endhighlight %}

*   **basicConf** is an object with configuration properties.
*   **layoutConf** is an object with layout specific configuration properties.
*   **pspConf** is an object with platform specific configuration properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}function boxOnClickEventTest(box)
{
	alert("OnClick event is invoked successfully");
}

//Defining the properties for a box with the ID :"boxIdTest"
var basicConfBox = {id:"boxIdTest", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL, onClick:boxOnClickEventTest};

var layoutConfBox = {containerWeight:80, percent:false, layoutAlignment:constants.BOX_LAYOUT_ALIGN_FROM_LEFT, contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, padding:[10,10,10,10], margin:[0,5,0,5], vExpand:true};

var pspConfBox = {borderCollapse:true, blockedUISkin:"blockUISkin" };

//creating the box.
boxTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, pspConfBox);


{% endhighlight %}

