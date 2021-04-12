---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

VBox Widget
-----------

> **_Important:_** You cannot create new VBox(deprecated) forms, but you can import VBox forms from your previous projects into your latest projects and continue to work with them seamlessly. When you create a new template in a project in Volt MX Iris from V8 SP2 onwards, the top-level FlexContainer automatically is created along with your template. You can delete the FlexContainer and add a VBox(deprecated) form if needed.

A VBox is used to layout widgets in a single vertical orientation. It can contain any number of widgets. However, due to form size limitations, it is advisable not to place many widgets in a VBox.

You can add the VBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

A VBox provides you with an option to set [basic properties](VBox_Properties.html), [layout properties](VBox_Properties.html) for all platforms and properties for [specific platforms](VBox_Properties.html). You can also call/set Events and Methods on platforms as mentioned in the respective sections.

For information regarding the behavior exhibited by the VBox, [see VBox Behavior](VBox_Behavior.html).

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](VBox_Properties.html#focusSki) | [containerWeight](VBox_Properties.html#containe) | [blockedUISkin](VBox_Properties.html#blockedU) |
| [id](VBox_Properties.html#id) | [gridCell](VBox_Properties.html#gridCell) | [borderCollapse](VBox_Properties.html#borderCo) |
| [info](VBox_Properties.html#info) | [layoutMeta](VBox_Properties.html#layoutMe) | [contextMenu](VBox_Properties.html#contextM) |
| [isVisible](VBox_Properties.html#isVisibl) | [layoutType](VBox_Properties.html#layoutType) | [hoverSkin](VBox_Properties.html#hoverSkin) |
| [orientation](VBox_Properties.html#orientat) | [layoutAlignment](VBox_Properties.html#layoutAl) | [viewConfig](VBox_Properties.html#viewConfig) |
| [skin](VBox_Properties.html#skin) | [margin](VBox_Properties.html#margin) |   |
|  | [marginInPixel](VBox_Properties.html#marginIn) |   |
|   | [padding](VBox_Properties.html#padding) |   |
|   | [paddingInPixel](VBox_Properties.html#paddingI) |   |
|   | [widgetAlignment](VBox_Properties.html#widgetAl) |   |

  
| Events | Methods | Deprecated |
| --- | --- | --- |
| [onClick](Box_Events.html#onclick) | [add](Box_Methods.html#add) |  |
| [onHover](VBox_Events.html#onhover) | [addAt](Box_Methods.html#addat) |  |
| [onRightClick](VBox_Events.html#onrightclick) | [remove](Box_Methods.html#remove) |  |
| [preOnclickJS](Box_Events.html#preonclickjs) | [removeAt](Box_Methods.html#removeat) |  |
| [postOnclickJS](Box_Events.html#postonclickjs) | [replaceAt](VBox_Methods.html#replaceat) |  |
|   | [widgets](Box_Methods.html#widgets) |   |

### Overviews

#### Creating a VBox using a constructor: voltmx.ui.Box

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
var basicConfBox = {id:"boxIdTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, onClick:boxOnClickEventTest};

var layoutConfBox = {containerWeight:80, percent:false, layoutAlignment:constants.BOX_LAYOUT_ALIGN_FROM_LEFT, contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, padding:[10,10,10,10], margin:[0,5,0,5]};

var pspConfBox = {borderCollapse:true, blockedUISkin:"blockUISkin" };

//Creating the box.
boxTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, pspConfBox);


{% endhighlight %}

