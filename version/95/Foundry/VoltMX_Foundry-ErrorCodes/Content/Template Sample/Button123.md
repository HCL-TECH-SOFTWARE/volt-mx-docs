   

Button
------

A button is a control that you can use to provide input to an application or trigger an event. For example, navigating to a form, interacting with a dialog box, or confirming an action.

A button can display either a text with a background color, text with a background image, or just an image.

Button provides you with an option to set Basic Properties, Layout Properties, Platform Specific Properties, and Events.

  
| Basic Properties | Layout Properties | Platform Specific Properties |
| --- | --- | --- |
| [focusSkin](Button_Basic_Properties.md#focusSki) | [containerWeight](Button_Layout_Properties.md#containe) | [blockedUISkin](Button_Platform_Specific_Properties.md#blockedU) |
| [id](Button_Basic_Properties.md#id) | [contentAlignment](Button_Layout_Properties.md#contentA) | [contextMenu](Button_Platform_Specific_Properties.md#Context) |
| [info](Button_Basic_Properties.md#info) | [displayText](Button_Layout_Properties.md#displayT) | [externalURL](Button_Platform_Specific_Properties.md#External) |
| [isVisible](Button_Basic_Properties.md#isVisibl) | [hExpand](Button_Layout_Properties.md#hExpand) | [glowEffect](Button_Platform_Specific_Properties.md#glowEffe) |
| [rawBytes](Button_Basic_Properties.md#rawbytes) | [margin](Button_Layout_Properties.md#margin) | [hoverSkin](Button_Platform_Specific_Properties.md#hoverSkin) |
| [skin](Button_Basic_Properties.md#skin) | [marginInPixel](Button_Layout_Properties.md#marginIn) | [pressedSkin](Button_Platform_Specific_Properties.md#pressedS) |
| [text](Button_Basic_Properties.md#text) | [padding](Button_Layout_Properties.md#padding) | [showProgressIndicator](Button_Platform_Specific_Properties.md#showProg) |
|  | [paddingInPixel](Button_Layout_Properties.md#paddingI) | [submitURL](Button_Platform_Specific_Properties.md#submitUR) |
|  | [vExpand](Button_Layout_Properties.md#vExpand) | [toolTip](Button_Platform_Specific_Properties.md#toolTip) |
|  | [widgetAlignment](Button_Layout_Properties.md#widgetAl) |  |

 
| Events | Deprecated |
| --- | --- |
| [onClick](Button_Events.md#onClick]() | [focusimage](Button_Deprecated_Properties.md#focusima) |
| [preOnclickJS](Button_Events.md#preOncli) | image |
| [postOnclickJS](Button_Events.md#postOncl) | normalimage |

##### Creating a Button using a constructor: voltmx.ui.Button

```
var button1 = new voltmx.ui.Button(basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

JavaScript Example

```
//The below function is the callback function for onClick event call.
function onClickCallBack()
{
    //Write your logic here.
}

//Defining the button with onClick:onClickCallBck.
var btnBasic ={id:"Onbutton", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here", onClick:onClickCallBck};
var btnLayout ={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP ={pressedSkin:"presSkin", externalURL: http://www.voltmxsolutions.com, submitURL:http://www.voltmxsolutions.com, glowEffect:true };

//Creating the button.
var Onbutton = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

##### Widget Appearance on Platforms

The appearance of the button widget on various platforms is as follows:

 
| Platform | Appearance |
| --- | --- |
| iPhone | ![](../Resources/Images/buttonip.png) |
| Android | ![](../Resources/Images/buttonand.png) |
| BlackBerry | ![](../Resources/Images/buttonbb.png) |
| Windows Phone | ![](../Resources/Images/buttonwin.png) |
| Mobile Web (Advanced) | ![](../Resources/Images/buttontca.png) |
| Mobile Web (BJS) | ![](../Resources/Images/buttonbjs.png) |

##### Adding a Button Widget from IDE

Follow the below steps to add a button widget:

1.  From the IDE, drag and drop the button widget onto a form (occupies the complete available width). Or, based on your requirements, you can choose to perform any of the following options:

> 1.  If you want to resize the button in the horizontal direction, place an HBox on the Form and drag and drop the button inside the HBox and resize accordingly ](you can also choose to place multiple buttons in the Box). Now apply [hExpand](Box_Layout_Properties.md#hExpand) property to expand the button in horizontal direction.
> 2.  If you want to resize the button in the vertical direction, place an HBox on the Form and place a VBox inside the HBox; and drag-and-drop the button inside the VBox and resize accordingly ](you can also choose to place multiple buttons in the VBox). Now apply [vExpand](Box_Layout_Properties.md#vExpand) property to expand the button in vertical direction.

1.  Use the [text](Button_Basic_Properties.md#text) property and specify the text to be displayed on the button.
2.  Define an [onClick](Button_Events.md#onClick() event.

Customizing Appearance

You can customize the appearance of the button by using the following properties:

*   [widgetAlignment](Button_Layout_Properties.md#widgetAl): Specifies the alignment of the widget.
*   [margin](Button_Layout_Properties.md#margin): Defines the space around a widget.
*   [padding](Button_Layout_Properties.md#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](Button_Basic_Properties.md#skin): Specifies the skin.
*   [focusSkin](Button_Basic_Properties.md#focusSki): Specifies the focus skin.
*   [hExpand](Button_Layout_Properties.md#hExpand): Expand the button horizontally.
*   [vExpand](Button_Layout_Properties.md#vExpand): Expand the button vertically.

##### Important Considerations

Button has the following considerations:

*   You can specify a background image for a Button. You can set the image from the Button skin for both normal and focus skins.

![Set a background image for a Button](../Resources/Images/Button-background Image.png)

*   To avoid jumping effect or to avoid overlap of neighboring widgets, you must ensure that the image for normal and focus skins are of the same size.
