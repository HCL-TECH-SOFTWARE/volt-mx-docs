

You are here: Creating a RichText Using a Constructor: voltmx.ui.RichText

RichText Widget
===============

A RichText widget displays a user defined HTML string. It is capable of displaying text, links and images.

Following are a few real-time examples of RichText widget:

*   You can display subscript or superscript using the RichText widget. For instance, when you want to write display percentages, you must use superscripts.

*   You can use RichText widget for links.


Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the RichText widget see the [](../../../Iris/iris_user_guide/Content/Button.md)[RichText](../../../Iris/iris_user_guide/Content/RichText.md) topic in the Volt MX Iris User Guide.

This widget supports drag and drop of text for iOS 11 on iPad.

The RichText widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3dtouch)
*   [User Input Handling](#gestures)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout


| Events | Description |
| --- | --- |
| [doLayout](RichText_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |


| Properties | Description |
| --- | --- |
| [anchorPoint](RichText_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](RichText_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](RichText_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](RichText_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](RichText_Properties.md#contentAlignment) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](RichText_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](RichText_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](RichText_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](RichText_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](RichText_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](RichText_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](RichText_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](RichText_Properties.md#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](RichText_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](RichText_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](RichText_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](RichText_Properties.md#zIndex) | Specifies the stack order of a widget. |

#### Animations


| Methods | Description |
| --- | --- |
| [animate](RichText_Method.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](RichText_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](RichText_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](RichText_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

 

| Properties | Description |
| --- | --- |
| [appendsHTTPForHyperLinks](RichText_Properties.md#appendsHTTPForHyperLinks) | Enables you to add HTTP to the hyperlinks in the text of the RichText widget. |
| [breakStrategy](RichText_Properties.md#breakStrategy) | Specifies the method to perform line breaks on paragraphs of text in RichText widget. |
| [hyphenationFrequency](RichText_Properties.md#hyphenationFrequency) | Sets the periodicity in which words break in a text in RichText widget. |
| [text](RichText_Properties.md#text) | Specifies a general or descriptive text for the RichText widget. |
| [toolTip](RichText_Properties.md#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](RichText_Method.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](RichText_Method.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](RichText_Method.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](RichText_Method.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### Gestures

| Events | Description |
| --- | --- |
| [onClick](RichText_Events.md#onClick) | Invoked by the platform when the user performs a click action on the portion of the text only where a link is defined. |
| [onScrollWidgetPosition](RichText_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |
| [onTouchEnd](RichText_Events.md#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](RichText_Events.md#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](RichText_Events.md#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](RichText_Method.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](RichText_Method.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](RichText_Method.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](RichText_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](RichText_Properties.md#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](RichText_Properties.md#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](RichText_Properties.md#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](RichText_Properties.md#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](RichText_Properties.md#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](RichText_Properties.md#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](RichText_Properties.md#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](RichText_Properties.md#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](RichText_Properties.md#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](RichText_Properties.md#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](RichText_Properties.md#fontColor) | Specifies the font color of the widget. |
| [fontFamily](RichText_Properties.md#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](RichText_Properties.md#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](RichText_Properties.md#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](RichText_Properties.md#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](RichText_Properties.md#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](RichText_Properties.md#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](RichText_Properties.md#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](RichText_Properties.md#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](RichText_Properties.md#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](RichText_Properties.md#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](RichText_Properties.md#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](RichText_Properties.md#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [clipView](RichText_Properties.md#clipView) | Defines a shape to clip the widget view. |
| [hoverSkin](RichText_Properties.md#hoverSki) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [linkFocusSkin](RichText_Properties.md#linkFocu) | Specifies the skin that must be applied to the link when focused. |
| [linkSkin](RichText_Properties.md#linkSkin) | Specifies the skin that must be applied to the link in the RichText widget. |
| [opacity](RichText_Properties.md#opacity) | Specifies the opacity of the widget. |
| [shadowDepth](RichText_Properties.md#shadowDepth) | Defines the depth of the shadow effect applied to the RichText Widget. |
| [shadowType](RichText_Properties.md#shadowType) | Sets a type of the shadow effect to apply to the RichText Widget. |
| [skin](RichText_Properties.md#skin) | Specifies the look and feel of the RichText when not in focus. |
| [superScriptSkin](RichText_Properties.md#superScr) | Specifies the skin to be applied to superscripts in the RichText widget. |
| [telephoneLinkSkin](RichText_Properties.md#telephon) | Specifies the skin to be applied to the telephone links in the RichText widget. |
| [wrapping](RichText_Properties.md#wrapping) | When the content of the RichText reaches the boundaries, it starts wrapping. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](RichText_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](RichText_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](RichText_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](RichText_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |

 

| Methods | Description |
| --- | --- |
| [getBadge](RichText_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](RichText_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

#### Configurations Common To All Widgets

| Events | Description |
| --- | --- |
| [postOnclickJS](RichText_Events.md#postOncl) | Allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. |
| [preOnclickJS](RichText_Events.md#preOncli) | Allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](RichText_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](RichText_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](RichText_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](RichText_Properties.md#id) | id is a unique identifier of RichText consisting of alpha numeric characters. |
| [info](RichText_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](RichText_Properties.md#isVisible) | Controls the visibility of a widget on the form. |
| [parent](RichText_Properties.md#parent) | Helps you access the parent of the widget. |

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](RichText_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](RichText_Method.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](RichText_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](RichText_Method.md#setBadge) | Specifies the widget that must be enabled or disabled. |
| [setFocus](RichText_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](RichText_Method.md#setVisibility) | Use this method to set the visibility of the widget. |

RichText Widget Basics
----------------------

Use the Rich Text widget to display well formatted text using HTML formatting tags.

RichText widget is used to display non-editable and well formatted text on the Form. HTML formatting tags are used in RichText widget to display text with styles (bold, underlined etc.), links, and images.

You can use a RichText widget to show a read-only view of a well formatted text and to display text with different formatting styles.  

For example, you can use the RichText widget in the "Contact Us" Form of an Application. You can use the widget's text styles (bold, italics etc.) to display the contact information, URL's telephone numbers instead of using multiple widgets like Label, Phone, and Link widgets on the Form.

### Creating a RichText Using a Constructor: voltmx.ui.RichText

```
var RichText1 = new voltmx.ui.RichText(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//The below function is the callback function for onClick event of RichText widget.
function onClickCalBck(richText) {
    //Write your logic here
}

//Defining properties for a RichText with onClick:onClickCalBck
var rTextBasic = {
    id: "rText",
    skin: "rTextSkin",
    linkSkin: "lnkSkin",
    text: "Sample text",
    isVisible: true,
    onClick: onClickCalBck
};

var rTextLayout = {
    containerWeight: 100,
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    paddingInPixel: true,
    marginInPixel: true,
    hExpand: true,
    vExpand: false
};

var rTextPSP = {};

//Creating the RichText.
var rText = new voltmx.ui.RichText(rTextBasic, rTextLayout, rTextPSP);
```

### Supported HTML formatting tags

The intended use of Rich Text is to display well formatted text using the following HTML formatting tags:

| Tags | Description |
| --- | --- |
| &lt;b\> Text &lt;/b\> | Displays **Text** in Bold. |
| &lt;i\> Text &lt;/i\> | Displays _Text_ in italics. |
| &lt;u\> Text &lt;/u\> | Displays <u>Text</u> underlined. |
| &lt;a href=""\> &lt;/a\> | This tag is used to display a link. It supports optional href attribute.<br/> **_Note:_** The skin attribute of the &lt;a\> tag, does not change the skin of the link inside the RichText widget. You must use the [linkSkin](RichText_Properties.md#linkSkin) Property to change the skin of the text given inside the &lt;a\> tag. |
| &lt;img src="" \> &lt;/img\> | This tag is used to display an image and supports src attribute. The path for the image can be local or url based.<br/> **_Note:_** Specify the absolute path of an image for MobileWeb platforms. |
| &lt;sub\>Subscript&lt;/sub\> | Displays text as <sub>Subscript</sub>. |
| &lt;sup\>Superscript&lt;/sup\> | Displays text as <sup>Superscript</sup>. |
| &lt;label style="color:#rgbhexformat"\> &lt;/label\> | Displays the text in the color specified. To display a red colored text, enter the following:<br/><code>&lt;label style="color:#FF0000"\>This is a red colored text&lt;/label\></code> |
| &lt;br/\> | Inserts a line break. |
| &lt;tel number=""\>&lt;/tel\> | Displays a telephone number on Native Applications. |
| &lt;a href="tel:"\>&lt;/a\> | Displays a telephone number on Mobile Web platforms. |
| **_Note:_** If you need to apply multiple formats on the same text, the tags given in the above table can be nested. For example:  For example: &lt;b\>&lt;i\>&lt;u\>BoldItalicandUnderlined&lt;/u\>&lt;/i\>&lt;/b\>. ||

### Customizing Appearance

You can customize the appearance of the RichText widget using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around a widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   [skin](RichText_Properties.md#skin): Specifies the skin.

### Important Considerations

The RichText widget has the following considerations:

*   **All Platforms**: If you specify a skin for the RichText widget, all the font level settings ](color style, or size etc.) is applied to the complete content in RichText widget. You can use the label style .md formatting tag](#supported.md-formatting-tags) to override the text color specified at the skin level.
*   The onclick attribute of the `<a href>` tag does not invoke in native applications. The onclick attribute is respected only on browser-based applications(such as Mobile Web, SPA, etc). For example, in the code below, when you click **Click here** , the javascript confirm function does not invoke on a native application. The function invokes only in Mobile Web and SPA applications.  

    <a href="#" onclick=confirm("Do you want to proceed")>Click here</a>



*   **iPhone**: <img> [HTML formatting tag](#supported.md-formatting-tags) is not supported. While integrating custom fonts, the name of the font file should match its PostScript name. You have to determine the PostScript name using some tool (in Mac you can install the font to find the PostScript name) and make sure that you name the font file as the <postscriptname>.ttf. For example, if the PostScript font file name is "DBOzoneX-BoldItalic", then the font name during integration should be "DBOzoneX-BoldItalic.ttf". OpenType fonts (OTF) are also supported.
