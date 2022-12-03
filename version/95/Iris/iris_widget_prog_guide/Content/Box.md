                                

HBox Widget
-----------

An HBox is used to layout widgets in a single horizontal orientation. It can contain any number of widgets. However, due to form size limitations, it is advisable not to place many widgets in a HBox.

You can add the HBox Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

An HBox provides you with an option to set [](HBox_Properties.md)[basic properties](HBox_Properties.md), for all platforms. You can also call/set Events and Methods on platforms as mentioned in the respective sections.

For information regarding the behavior exhibited by the HBox, [see Box Behavior](Box_Behavior.md).

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](HBox_Properties.md#focusskin) | [containerWeight](HBox_Properties.md#containerweight) | [blockedUISkin](HBox_Properties.md#blockeduiskin) |
| [id](HBox_Properties.md#id) | [gridCell](HBox_Properties.md#gridcell) | [borderCollapse](HBox_Properties.md#bordercollapse) |
| [info](HBox_Properties.md#info) | [layoutMeta](HBox_Properties.md#layoutmeta) | [contextMenu](HBox_Properties.md#contextmenu) |
| [isVisible](HBox_Properties.md#isvisible) | [layoutType](HBox_Properties.md#layouttype) | [hoverSkin](HBox_Properties.md#hoverskin) |
| [orientation](HBox_Properties.md#orientation) | [layoutAlignment](HBox_Properties.md#layoutalignment) | [viewConfig](HBox_Properties.md#viewconfig) |
| [position](HBox_Properties.md#position) | [margin](HBox_Properties.md#margin) |   |
| [skin](HBox_Properties.md#skin) | [marginInPixel](HBox_Properties.md#margininpixel) |   |
|   | [padding](HBox_Properties.md#padding) |   |
|   | [paddingInPixel](HBox_Properties.md#paddinginpixel) |   |
|   | [percent](HBox_Properties.md#percent) |   |
|   | [vExpand](HBox_Properties.md#vexpand) |   |
|   | [widgetAlignment](HBox_Properties.md#widgetalignment) |   |

  
| Events | Methods |
| --- | --- |
| [onClick](Box_Events.md#onclick) | [add](Box_Methods.md#add) |
| [onHover](Box_Events.md#onhover) | [addAt](Box_Methods.md#addat) |
| [onRightClick](Box_Events.md#onrightclick) | [remove](Box_Methods.md#remove) |
| [preOnclickJS](Box_Events.md#preonclickjs) | [removeAt](Box_Methods.md#removeat) |
| [postOnclickJS](Box_Events.md#postonclickjs) | [replaceAt](Box_Methods.md#replaceat) |
|   | [widgets](Box_Methods.md#widgets) |

##### Creating an HBox using a constructor: voltmx.ui.Box

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
var basicConfBox = {id:"boxIdTest", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL, onClick:boxOnClickEventTest};

var layoutConfBox = {containerWeight:80, percent:false, layoutAlignment:constants.BOX_LAYOUT_ALIGN_FROM_LEFT, contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, padding:[10,10,10,10], margin:[0,5,0,5], vExpand:true};

var pspConfBox = {borderCollapse:true, blockedUISkin:"blockUISkin" };

//creating the box.
boxTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, pspConfBox);


```

