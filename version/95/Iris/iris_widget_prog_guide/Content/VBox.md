                               

VBox Widget
-----------

> **_Important:_** You cannot create new VBox(deprecated) forms, but you can import VBox forms from your previous projects into your latest projects and continue to work with them seamlessly. When you create a new template in a project in Volt MX Iris from V8 SP2 onwards, the top-level FlexContainer automatically is created along with your template. You can delete the FlexContainer and add a VBox(deprecated) form if needed.

A VBox is used to layout widgets in a single vertical orientation. It can contain any number of widgets. However, due to form size limitations, it is advisable not to place many widgets in a VBox.

You can add the VBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

A VBox provides you with an option to set [basic properties](VBox_Properties.md), [layout properties](VBox_Properties.md) for all platforms and properties for [specific platforms](VBox_Properties.md). You can also call/set Events and Methods on platforms as mentioned in the respective sections.

For information regarding the behavior exhibited by the VBox, [see VBox Behavior](VBox_Behavior.md).

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](VBox_Properties.md#focusSki) | [containerWeight](VBox_Properties.md#containe) | [blockedUISkin](VBox_Properties.md#blockedU) |
| [id](VBox_Properties.md#id) | [gridCell](VBox_Properties.md#gridCell) | [borderCollapse](VBox_Properties.md#borderCo) |
| [info](VBox_Properties.md#info) | [layoutMeta](VBox_Properties.md#layoutMe) | [contextMenu](VBox_Properties.md#contextM) |
| [isVisible](VBox_Properties.md#isVisibl) | [layoutType](VBox_Properties.md#layoutType) | [hoverSkin](VBox_Properties.md#hoverSkin) |
| [orientation](VBox_Properties.md#orientat) | [layoutAlignment](VBox_Properties.md#layoutAl) | [viewConfig](VBox_Properties.md#viewConfig) |
| [skin](VBox_Properties.md#skin) | [margin](VBox_Properties.md#margin) |   |
|  | [marginInPixel](VBox_Properties.md#marginIn) |   |
|   | [padding](VBox_Properties.md#padding) |   |
|   | [paddingInPixel](VBox_Properties.md#paddingI) |   |
|   | [widgetAlignment](VBox_Properties.md#widgetAl) |   |

  
| Events | Methods | Deprecated |
| --- | --- | --- |
| [onClick](Box_Events.md#onclick) | [add](Box_Methods.md#add) |  |
| [onHover](VBox_Events.md#onhover) | [addAt](Box_Methods.md#addat) |  |
| [onRightClick](VBox_Events.md#onrightclick) | [remove](Box_Methods.md#remove) |  |
| [preOnclickJS](Box_Events.md#preonclickjs) | [removeAt](Box_Methods.md#removeat) |  |
| [postOnclickJS](Box_Events.md#postonclickjs) | [replaceAt](VBox_Methods.md#replaceat) |  |
|   | [widgets](Box_Methods.md#widgets) |   |

### Overviews

#### Creating a VBox using a constructor: voltmx.ui.Box

```

var box1 = new voltmx.ui.Box(basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with configuration properties.
*   **layoutConf** is an object with layout specific configuration properties.
*   **pspConf** is an object with platform specific configuration properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
function boxOnClickEventTest(box)
{
	alert("OnClick event is invoked successfully");
}

//Defining the properties for a box with the ID :"boxIdTest"
var basicConfBox = {id:"boxIdTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, onClick:boxOnClickEventTest};

var layoutConfBox = {containerWeight:80, percent:false, layoutAlignment:constants.BOX_LAYOUT_ALIGN_FROM_LEFT, contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, padding:[10,10,10,10], margin:[0,5,0,5]};

var pspConfBox = {borderCollapse:true, blockedUISkin:"blockUISkin" };

//Creating the box.
boxTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, pspConfBox);


```

