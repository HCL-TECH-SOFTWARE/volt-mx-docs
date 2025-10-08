                               

Link Widget
===========

Link widget allows you to define a hyperlink that you can interact with (select and click) and navigate to an external location or a location within the application.

You can add the Link Widget only to the VBox form. This widget will be available in the Widgets palette when the VBox form is selected in the app canvas.

The Link widget capabilities can be broadly categorized into the following:

*   [User Input Handling](#gestures)
*   [Data Management](#data-management)
*   [UI Appearance](#ui-appearance)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

Data Management
---------------

| Properties | Description |
| --- | --- |
| [externalURL](Link_Properties.md#external) | Specifies that the URL must be opened directly from the web site without having to contact the Volt MX Server. |
| [submitURL](Link_Properties.md#submitUR) | Specifies the URL to which the current Form data should be submitted, without contacting Volt MX Server. |
| [text](Link_Properties.md#text) | Specifies the URL to which the current Form data should be submitted, without contacting Volt MX Server. |

  

Gestures
--------

| Events | Description |
| --- | --- |
| [onClick](Link_Events.md#onClick() | An event callback that is invoked by the platform when the user performs a click action on the link. |
| [onScrollWidgetPosition](Link_Events.md#onScrollWidgetPosition) | An event callback is invoked by the platform when the widget location position gets changed on scrolling. |

UI Appearance
-------------

| Properties | Description |
| --- | --- |
| [backgroundColor](Link_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [blockedUISkin](Link_Properties.md#blockedU) | Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed. |
| [contentAlignment](Link_Properties.md#contentA) | Specifies the alignment of the text on the Link with respect to its boundaries. |
| [focusSkin](Link_Properties.md#focusSkin) | Specifies the look and feel of the Link when in focus. |
| [glowEffect](Link_Properties.md#glowEffe) | Specifies if there must be glow effect when you touch the link. |
| [hExpand](Link_Properties.md#hExpand) | Specifies if the widget should occupy all the width available to it. |
| [hoverSkin](Link_Properties.md#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [margin](Link_Properties.md#margin) | Defines the space around a widget. |
| [marginInPixel](Link_Properties.md#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [padding](Link_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Link_Properties.md#paddingI) | Indicates if the padding is to be applied in pixels or in percentage. |
| [showProgressIndicator](Link_Properties.md#showProg) | Specifies if the progress indicator must be displayed when the link is clicked. |
| [widgetAlignment](Link_Properties.md#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

Miscellaneous
-------------

| Properties | Description |
| --- | --- |
| [contextMenu](Link_Properties.md#contextM) | A context menu is a menu that appears upon clicking a widget. |
| [toolTip](Link_Properties.md#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

 

Configurations Common To All Widgets
------------------------------------

| Events | Description |
| --- | --- |
| [preOnclickJS](Link_Events.md#preOncli) | Allows the developer to execute custom javascript function before the onClick callback of the Link is invoked. |
| [postOnclickJS](Link_Events.md#postOncl) | Allows the developer to execute custom javascript function after the onClick callback of the Link is invoked. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Link_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enableCache](Link_Properties.md#enableCa) | Eproperty enables you to improve the performance of Positional Dimension Animations. |
| [id](Link_Properties.md#id) | id is a unique identifier of Line consisting of alpha numeric characters. |
| [info](Link_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](Link_Properties.md#isVisible) | Controls the visibility of a widget on the form. |

Link Widget Basics
------------------

### Creating a Link Using a Constructor: voltmx.ui.Link

```

var myLink = new voltmx.ui.Link(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

```
//Defining properties for a link widget.
var linkBasic = {
    id: "link1",
    skin: "linkSkin",
    focusSkin: "linkFSkin",
    text: "Click here",
    isVisible: true
};

var linkLayout = {
    containerWeight: 100,
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    paddingInPixel: true,
    marginInPixel: true,
    hExpand: true,
    vExpand: true
};

var linkPSP = {
    blockedUISkin: "blkSkin"
};

//Creating the link.
var link1 = new voltmx.ui.Link(linkBasic, linkLayout, linkPSP);

//Reading blockedUISkin of Link.
alert("Link blockedUISkin::" + link1.blockedUISkin);
```

### Customizing Appearance

You can customize the appearance of the Link widget using the following properties:

*   [widgetAlignment](Link_Layout_Properties.md#widgetalignment): Specifies the alignment of the widget.
*   [margin](Link_Layout_Properties.md#margin): Defines the space around a widget.
*   [padding](Link_Layout_Properties.md#padding): Defines the space between the content of the widget and the widget boundaries.
*   [skin](Link_Properties.md#skin): Specifies the skin.
*   [focusSkin](Link_Properties.md#focusSkin): Specifies the focus skin.

### Important Considerations

Link widget has the following considerations:

*   If you do not specify a skin, the default skin is applied to the link (link appears in blue font and is underlined).
*   If you do not specify a focusSkin, the default focus skin is applied to the link (link appears in black font and is underlined).
*   If you specify a skin or focusSkin without an underline, when rendered, the link will appear without an underline on the platform.

