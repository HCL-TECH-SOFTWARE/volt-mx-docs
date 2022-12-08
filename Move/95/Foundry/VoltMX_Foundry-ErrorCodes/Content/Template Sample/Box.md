   

HBox
----

An _(HBox)_ is used to layout widgets in a single horizontal orientation. It can contain any number of widgets. However, due to form size limitations, it is advisable not to place many widgets in a HBox.

An HBox provides you with an option to set [](Box_Basic_Properties.md)[basic properties](Box_Basic_Properties.md), [layout properties](Box_Layout_Properties.md) for all platforms and properties for specific platforms. You can also call/set Events and Methods on platforms as mentioned in the respective sections.

For information regarding the behavior exhibited by the HBox, [see Box Behavior](Box_Behavior.md).

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](Box_Basic_Properties.md#focusSki) | [containerWeight](Box_Layout_Properties.md#containe) | blockedUISkin |
| [id](Box_Basic_Properties.md#id) | [gridCell](Box_Layout_Properties.md#gridCell) | borderCollapse |
| [info](Box_Basic_Properties.md#info) | [layoutMeta](Box_Layout_Properties.md#layoutMe) | contextMenu |
| [isVisible](Box_Basic_Properties.md#isVisibl) | [layoutType](Box_Layout_Properties.md#layoutType) | contextMenu (Desktop Web only) |
| [orientation](Box_Basic_Properties.md#orientat) | [layoutAlignment](Box_Layout_Properties.md#layoutAl) | hoverSkin |
| [position](Box_Basic_Properties.md#position) | [margin](Box_Layout_Properties.md#margin) | viewConfig |
| [skin](Box_Basic_Properties.md#skin) | [marginInPixel](Box_Layout_Properties.md#marginIn) |   |
|   | [padding](Box_Layout_Properties.md#padding) |   |
|   | [paddingInPixel](Box_Layout_Properties.md#paddingI) |   |
|   | [percent](Box_Layout_Properties.md#percent) |   |
|   | [vExpand](Box_Layout_Properties.md#vExpand) |   |
|   | [widgetAlignment](Box_Layout_Properties.md#widgetAl) |   |

  
| Events | Methods | Deprecated |
| --- | --- | --- |
| [onClick](Box_Events.md#onClick]() | [add](../123Box_Methods.md#add(widg) |  |
| [onRightClick](Box_Events.md#onRightC) | [addAt](../123Box_Methods.md#addAt(wi) |  |
| [preOnclickJS](Box_Events.md#preOncli) | [remove](../123Box_Methods.md#remove(w) |  |
| [postOnclickJS](Box_Events.md#postOncl) | [removeAt](../123Box_Methods.md#removeAt) |  |
|  | [widgets](../123Box_Methods.md#widgets() |  |

##### Creating an HBox using a constructor: voltmx.ui.Box

```
var box1 = new voltmx.ui.Box(basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with configuration properties.
*   **layoutConf** is an object with layout specific configuration properties.
*   **pspConf** is an object with platform specific configuration properties.

The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

JavaScript Example

```
function boxOnClickEventTest(box)
{
	alert("OnClick event is invoked successfully");
}

//Defining the properties for a box with the ID :"boxIdTest"
var basicConfBox = {id : "boxIdTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL, onClick:boxOnClickEventTest};
var layoutConfBox = {containerWeight:80, percent:false, layoutAlignment:constants.BOX\_LAYOUT\_ALIGN\_FROM\_LEFT, contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, padding:\[10,10,10,10\], margin:\[0,5,0,5\], vExpand:true};
var pspConfBox = {borderCollapse:true, blockedUISkin:"blockUISkin" };

//creating the box.
boxTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, pspConfBox);


```
