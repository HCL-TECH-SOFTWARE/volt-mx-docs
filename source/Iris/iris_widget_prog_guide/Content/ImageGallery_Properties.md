                                

ImageGallery - Basic Properties
-------------------------------

The basic properties for ImageGallery widget are:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[accessibilityConfig Property](javascript:void(0);)

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the Volt MX IrisUser Guide.

Syntax

accessibilityConfig

Type

Object

Read/Write

Read + Write

Remarks

*   The accessibilityConfig property is enabled for all the widgets which are supported under the Flex Layout.

> **_Note:_** From Volt MX Iris V9 SP2 GA version, you can provide i18n keys as values to all the attributes used inside the `accessibilityConfig` property. Values provided in the i18n keys take precedence over values provided in `a11yLabel`, `a11yValue`, and `a11yHint` fields.

The accessibilityConfig property is a JavaScript object which can contain the following key-value pairs.

  
| Key | Type | Description | ARIA Equivalent |
| --- | --- | --- | --- |
| a11yIndex | Integer with no floating or decimal number. | This is an optional parameter. Specifies the order in which the widgets are focused on a screen. | For all widgets, this parameter maps to the `aria-index`, `index`, or `taborder` properties. |
| a11yLabel | String | This is an optional parameter. Specifies alternate text to identify the widget. Generally the label should be the text that is displayed on the screen. | For all widgets, this parameter maps to the `aria-labelledby` property of ARIA in HTML. > **_Note:_** For the Image widget, this parameter maps to the **alt** attribute of ARIA in HTML. |
| a11yValue | String | This is an optional parameter. Specifies the descriptive text that explains the action associated with the widget. On the Android platform, the text specified for a11yValue is prefixed to the a11yHint. | This parameter is similar to the a11yLabel parameter. If the a11yValue is defined, the value of a11yValue is appended to the value of a11yLabel. These values are separated by a space. |
| a11yHint | String | This is an optional parameter. Specifies the descriptive text that explains the action associated with the widget. On the Android platform, the text specified for a11yValue is prefixed to the a11yHint. | For all widgets, this parameter maps to the `aria-describedby` property of ARIA in HTML. |
| a11yHidden | Boolean | This is an optional parameter. Specifies if the widget should be ignored by assistive technology. The default option is set to _false_. This option is supported on iOS 5.0 and above, Android 4.1 and above, and SPA | For all widgets, this parameter maps to the `aria-hidden` property of ARIA in HTML. |
| a11yARIA | Object | This is an optional parameter. For each widget, the key and value provided in this object are added as the attribute and value of the HTML tags respectively. Any values provided for attributes such as `aria-labelledby` and `aria-describedby` using this attribute, takes precedence over values given in `a11yLabel` and `a11yHint` fields. When a widget is provided with the following key value pair or attribute using the a11yARIA object, the tabIndex of the widget is automatically appended as zero.`{"role": "main"}``aria-label` | This parameter is only available on the Desktop Web platform. |

Android limitations

*   If the results of the concatenation of a11y fields result in an empty string, then `accessibilityConfig` is ignored and the text that is on widget is read out.
*   The soft keypad does not gain accessibility focus during the right/left swipe gesture when the keypad appears.

SPA/Desktop Web limitations

*   When `accessibilityConfig` property is configured for any widget, the `tabIndex` attribute is added automatically to the `accessibilityConfig` property.
*   The behavior of accessibility depends on the Web browser, Web browser version, Voice Over Assistant, and Voice Over Assistant version.
*   Currently SPA/Desktop web applications support only a few ARIA tags. To achieve more accessibility features, use the attribute a11yARIA. The corresponding tags will be added to the DOM as per these configurations.

Example 1

This example uses the button widget, but the principle remains the same for all widgets that have an accessibilityConfig property.

```
//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the accessibilityConfig Property for button widget.
/*You need to make a corresponding use of the accessibilityConfig property for other applicable widgets.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "Label",
    "a11yValue": "Value",
    "a11yHint": "Hint"    
};
```

Example 2

This example uses the button widget to implement internationalization in `accessibilityConfig` property, but the principle remains the same for all widgets.

```
/*Sample code to implement internationalization in accessibilityConfig property in Native platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": voltmx.i18n.getLocalizedString("key1")     
};  
/*Sample code to implement internationalization in accessibilityConfig property in Desktop Web platform.*/

Form1.myButton.accessibilityConfig = {
    "a11yLabel": "voltmx.i18n.getLocalizedString(\"key3\")"
};
```

Platform Availability

*   Available in the IDE
*   iOS, Android, SPA, and Desktop Web

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[anchorPoint Property](javascript:void(0);)

* * *

Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space.

Syntax

anchorPoint

Type

JSObject

Read/Write

Read + Write

Remarks

The value for this property is a JavaScript dictionary object with the keys "x" and "y". The values for the "x" and "y" keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

Example

```
Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
```

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[data Property](javascript:void(0);)

* * *

Represents the JSObject to represent the images to be rendered in ImageGallery. The format of the JSObject consists of an array of two elements:

*   \[0\] is the array of objects with hashes
*   \[1\] is the key's key in the data hash of \[0\]

Example

```
formname.widgetname.data=
  [
  [{"imagekey":"image1.png"},
   {"imagekey":"image2.png"},
   {"imagekey":"imagen.png"}]
];
```

Syntax

data

Type

Array

Read/Write

Yes - (Read and Write)

Platform Availability

Available in the IDE

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[enableCache Property](javascript:void(0);)

* * *

The property enables you to improve the performance of Positional Dimension Animations.

Syntax

enableCache

Type

Boolean

Read/Write

Read + Write

Remarks

The default value for this property is true.

> **_Note:_** When the property is used, application consumes more memory. The usage of the property enables tradeoff between performance and visual quality of the content. Use the property cautiously.

Example

```
Form1.widgetID.enableCache = true;
```

Platform Availability

*   Available in the IDE.
*   Windows

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[focusSkin Property](javascript:void(0);)

* * *

Specifies the look and feel of the widget when in focus.

Syntax

focusSkin

Type

String

Read/Write

Yes - (Read and Write)

Remarks

You must be aware of the following:  
On J2ME non-touch devices, if you do not specify the Focus skin, it is not possible to identify the focus change between the widgets.  
Mobile Web does not support this property, instead browser specific focus will be applied.

Example

```

//Defining the properties for ImageGallery with focusSkin: "gradroundfocusbtn"
var imgGalBasic = { id: "imgGallery",
	isVisible: true,
	skin: "gradroundfocusbtn",
	**focusSkin: "gradroundfocusbtn"**};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});

//Reading the focusSkin of ImageGallery
alert("ImageGallery focusSkin is ::"+imgGallery.focusSkin);
```

Platform Availability

Available in the IDE

Available on all platforms..

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[hoverSkin Property](javascript:void(0);)

* * *

Specifies the look and feel of a widget when the cursor hovers on the widget.

Syntax

hoverSkin

Type

String

Read/Write

Yes - (Read and Write)

Example

```

//Defining the properties for ImageGallery with hoverSkin:"hskin"
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	selectedIndex:3, spaceBetweenImages: 50};

var imgGalLayout = {containerWeight:100};

var imgGalPSP = {**hoverSkin:"hskin"**};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available on Windows Tablet.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[id Property](javascript:void(0);)

* * *

id is a unique identifier of ImageGallery consisting of alpha numeric characters. Every ImageGallery should have a unique id within a Form.

Syntax

id

Type

String - \[Mandatory\]

Read/Write

Yes - (Read only)

Example

```

//Defining the properties for ImageGallery with ID:"imgGallery"
var imgGalBasic = { **id: "imgGallery"**, isVisible: true};

var imgGalLayout = {containerWeight:100};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
	
//Reading the ID of ImageGallery
alert("ImageGallery id is ::"+imgGallery.id);
```

Platform Availability

Available in the IDE

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[imageWhenFailed Property](javascript:void(0);)

* * *

Specifies the image to be displayed when the remote resource is not available. This image is taken from the resources folder.

Syntax

imageWhenFailed

Type

String

Read/Write

No

Example

```
//Defining the properties for ImageGallery with imageWhenFailed: "AppIcon.png".
//Image with the same name should be in resources folder.
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png"};

var imgGalLayout = {containerWeight:100};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
```

Platform Availability

Not available in the IDE.

Available on all platforms except and Windows Desktop platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[imageWhileDownloading Property](javascript:void(0);)

* * *

Specifies the image to be displayed when the remote source is still being downloaded. This image is taken from the resources folder.

Syntax

imageWhileDownloading

Type

String

Read/Write

No

Example

```
//Defining the properties for ImageGallery with imageWhileDownloading: "ApplicationIcon.png". 
//Image with the same name should be in resources folder.
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png"};
	var imgGalLayout = {containerWeight:100};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
```

Platform Availability

Available in the IDE.

Available on all platforms., BlackBerry 10, and Windows Desktop platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[info Property](javascript:void(0);)

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

Syntax

info

Type

JSObject

Read/Write

Yes - (Read and Write)

Remarks

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```
var inf = {a: 'hello'};
	widget.info = inf; //works
	widget.info.a = 'hello world'; 
/*This will not update the widget info a property to Hello world. 
widget.info.a will have old value as hello.*/
```

Example

```

//Defining the properties for ImageGallery with info property.
var imgGalBasic = { id: "imgGallery",isVisible: true};

var imgGalLayout = {containerWeight:100};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
**imgGallery.info = {key:"ImageGal"};**
	
//Reading the info of ImageGallery
alert("ImageGallery info is ::"+imgGallery.info);
```

Platform Availability

Not available in the IDE.

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[isVisible Property](javascript:void(0);)

* * *

This property controls the visibility of a widget on the form.

Syntax

isVisible

Type

Boolean

Read/Write

Yes - (Read and Write)

Remarks

The default value for this property is true. If set to _false,_ the widget is not displayed. If set to _true,_ the widget is displayed.

You can set the visibility of a widget dynamically from code using the setVisibility method.

Example

```

//Defining the properties for ImageGallery with isVisible: true
var imgGalBasic = { id: "imgGallery", **isVisible: true**};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});

//Reading the Visibility of ImageGallery
alert("ImageGallery Visibility is ::"+imgGallery.isVisible);
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[itemsPerRow Property](javascript:void(0);)

* * *

Specifies the number of images to be displayed per row in an ImageGallery at a time.

Syntax

itemsPerRow

Type

Number

Read/Write

No

Example

```

//Defining the properties for ImageGallery with sitemsPerRow:3
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	selectedIndex:3, spaceBetweenImages: 50};
	var imgGalLayout = {containerWeight:100};
	var imgGalPSP = {**itemsPerRow:3**};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available only on Server side Mobile Web (advanced) platform.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[navigationBarPosition Property](javascript:void(0);)

* * *

Specifies the position of the navigation bar for the ImageGallery. The pageview indicator either appears on the top or bottom of the ImageGallery.

Syntax

navigationBarPosition

Type

String

Read/Write

No

Example

```

//Defining the properties for ImageGallery with navigationBarPosition:"Bottom"
var imgGalBasic = { id: "imgGallery", 
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	selectedIndex:3, spaceBetweenImages: 50};

var imgGalLayout = {containerWeight:100};

var imgGalPSP = {itemsPerRow:3, **navigationBarPosition:"Bottom"**};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available only on Server side Mobile Web (advanced) platform.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[noofRowsPerPage Property](javascript:void(0);)

* * *

Specifies the number of rows to be displayed in each page.

Syntax

noofRowsPerPage

Type

Number

Read/Write

Yes - (Read and Write)

Remarks

This property is displayed only when [viewType](#viewType) is set to _IMAGE\_GALLERY\_VIEW\_TYPE\_PAGEVIEW_.

Example

```

//Defining the properties for ImageGallery with noofRowsPerPage:4.
var imgGalBasic={id:"imagegallery1",
	isVisible:true, 
	skin:"imgGalskin",
	focusSkin:"imgGalFSkin",
	text:"Click Here",
	**toolTip:"sample text"**};
	var imgGalLayout={containerWeight:100, 
	padding:[5,5,5,5], 
	margin:[5,5,5,5], 
	hExpand:true, 
	vExpand:false, 
	displayText:true};

var imgGalPSP={viewType: constants.IMAGE_GALLERY_VIEW_TYPE_PAGEVIEW, **viewConfig: {noofRowsPerPage:4**}};

//Creating the ImageGallery.
var imagegallery1 = new voltmx.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available on Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainContentAlignment Property](javascript:void(0);)

* * *

This property is used to retain the content alignment property value, as it was defined.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```
function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

  
| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

Syntax

retainContentAlignment

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

```
//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainContentAlignment property for Button widget.
/*You need to make a corresponding use of the 
retainContentAlignment property for other applicable widgets.*/
var btn = new voltmx.ui.Button({
    "focusSkin": "defBtnFocus",
    "height": "50dp",
    "id": "myButton",
    "isVisible": true,
    "left": "0dp",
    "skin": "defBtnNormal",
    "text": "text always from top left",
    "top": "0dp",
    "width": "260dp",
    "zIndex": 1
}, {
    "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
    "displayText": true,
    "padding": [0, 0, 0, 0],
    "paddingInPixel": false,
    "retainFlexPositionProperties": false,
    "retainContentAlignment": true
}, {});
```

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainFlexPositionProperties Property](javascript:void(0);)

* * *

This property is used to retain flex positional property values as they were defined. The flex positional properties are left, right, and padding.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```
function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

  
| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

Syntax

retainFlexPositionProperties

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

```
//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainFlexPositionProperties property for Button widget.
/*You need to make a corresponding use of the 
retainFlexPositionProperties property for other applicable widgets.*/
var btn = new voltmx.ui.Button({
    "focusSkin": "defBtnFocus",
    "height": "50dp",
    "id": "myButton",
    "isVisible": true,
    "left": "0dp",
    "skin": "defBtnNormal",
    "text": "always left",
    "top": "0dp",
    "width": "260dp",
    "zIndex": 1
}, {
    "contentAlignment": constants.CONTENT_ALIGN_CENTER,
    "displayText": true,
    "padding": [0, 0, 0, 0],
    "paddingInPixel": false,
    "retainFlexPositionProperties": true,
    "retainContentAlignment": false
}, {});
```

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[retainFlowHorizontalAlignment Property](javascript:void(0);)

* * *

This property is used to convert Flow Horizontal Left to Flow Horizontal Right.

> **_Note:_** Locale-level configurations take priority when invalid values are given to this property, or if it is not defined.

The mirroring widget layout properties should be defined as follows.

```
function getIsFlexPositionalShouldMirror(widgetRetainFlexPositionPropertiesValue) {
    return (isI18nLayoutConfigEnabled &&
    localeLayoutConfig[defaultLocale]
    ["mirrorFlexPositionalProperties"] == true &&
    !widgetRetainFlexPositionPropertiesValue);
}
```

The following table illustrates how widgets consider Local flag and Widget flag values.

  
| Properties | Local Flag Value | Widget Flag Value | Action |
| --- | --- | --- | --- |
| Mirror/retain FlexPositionProperties | true | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | true | false | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | true | not specified | Use Mirror FlexPositionProperties since locale-level Mirror is true. |
| Mirror/retain FlexPositionProperties | false | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | false | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | false | not specified | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | true | Use the designed layout from widget for all locales. Widget layout overrides everything else. |
| Mirror/retain FlexPositionProperties | not specified | false | Use the Design/Model-specific default layout. |
| Mirror/retain FlexPositionProperties | not specified | not specified | Use the Design/Model-specific default layout. |

Syntax

retainFlowHorizontalAlignment

Type

Boolean

Read/Write

No (only during widget-construction time)

Example

```
//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the retainFlowHorizontalAlignment property for Button widget.
/*You need to make a corresponding use of the 
retainFlowHorizontalAlignment property for other applicable widgets. */
var btn = new voltmx.ui.Button({
 "focusSkin": "defBtnFocus",
 "height": "50dp",
 "id": "myButton",
 "isVisible": true,
 "left": "0dp",
 "skin": "defBtnNormal",
 "text": "always left",
 "top": "0dp",
 "width": "260dp",
 "zIndex": 1
}, {
 "contentAlignment": constants.CONTENT_ALIGN_CENTER,
 "displayText": true,
 "padding": [0, 0, 0, 0],
 "paddingInPixel": false,
 "retainFlexPositionProperties": true,
 "retainContentAlignment": false,
 "retainFlowHorizontalAlignment ": false
}, {});
```

Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[selectedIndex Property](javascript:void(0);)

* * *

Indicates the currently selected image in the ImageGallery. The index is with respect to the order in which data is set with [data](#data) property. Programmatically setting the _selectedIndex_ will not make any visible differences in the row, however it will bring the row at the index into the view able area on the screen. Setting it to _null/nil_ clears the selection state.

Syntax

selectedIndex

Type

Number

Read/Write

Yes - (Read and Write)

Remarks

On Windows Phone platform, you cannot write data to this property.

If data contains the sections then the _selectedIndex_ indicates the selected row index within the section.

Example

```

//Defining the properties for ImageGallery with selectedIndex:3 (setSelectedIndex)
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	**selectedIndex:3**};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});

//getSelectedIndex
alert("Selected Index:"+imgGallery.selectedIndex);
```

Platform Availability

Not available in the IDE.

Available on all platforms..

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[selectedItem Property](javascript:void(0);)

* * *

Returns the selected data object (input array) corresponding to the selected image of the ImageGallery. If no image is selected, _null/nil_ is returned.

Syntax

selectedItem

Type

JSObject

Read/Write

Read only

Example

```

//Defining the properties for ImageGallery with selectedIndex:3 (setSelectedIndex)
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	selectedIndex:3};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});

//getSelectedItem
**alert("selected Item:"+imgGallery.selectedItem);** 
```

Platform Availability

Not available in the IDE

Available on all platforms..

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[skin Property](javascript:void(0);)

* * *

Specifies the look and feel of the ImageGallery when not in focus.

Syntax

skin

Type

String

Read/Write

Yes - (Read and Write)

Example

```

//Defining the properties for ImageGallery with skin: "gradroundfocusbtn"
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	**skin: "gradroundfocusbtn"**};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
	
//Reading the skin of ImageGallery
alert("ImageGallery skin is ::"+imgGallery.skin);
```

Platform Availability

Available in the IDE

Available on all platforms..

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[spaceBetweenImages Property](javascript:void(0);)

* * *

Specifies the space between the images in the ImageGallery.

Syntax

spaceBetweenImages

Type

Number

Read/Write

No

Example

```

//Defining the properties for ImageGallery with spaceBetweenImages: 50
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	selectedIndex:3, **spaceBetweenImages: 50**};

var imgGalLayout = {containerWeight:100};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,{});
```

Platform Availability

Available in the IDE.

Available on all platforms., and Windows Phone platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[transform Property](javascript:void(0);)

* * *

Contains an animation transformation that can be used to animate the widget.

Syntax

transform

Type

JSObject

Read/Write

Read + Write

Remarks

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the widget's anchor point. The transformation contained in this property must be created using the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#makeAffi) function.

Example

This example uses the button widget, but the principle remains the same for all widgets that have a transform property.

```
//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
```

Platform Availability

*   iOS, Android, Windows, and SPA

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[viewType Property](javascript:void(0);)

* * *

Specifies the appearance of the Image Gallery as Default view or Page view.

Syntax

viewType

Type

Number

Read/Write

Yes - (Read and Write)

Remarks

The default value for this property is IMAGE\_GALLERY\_VIEW\_TYPE\_DEFAULT.

You can select one of the following available views:

*   _IMAGE\_GALLERY\_VIEW\_TYPE\_DEFAULT_ - This is the default selection and if this option is unchanged, the appearance of the image gallery remains unchanged.
*   _IMAGE\_GALLERY\_VIEW\_TYPE\_PAGEVIEW_ - The images appears as a pageview. When this option is selected, the [noofRowsPerPage](#viewConf) is displayed.

Example

```

//Defining the properties for ImageGallery with viewType:IMAGE_GALLERY_VIEW_TYPE_DEFAULT.
var imgGalBasic={id:"imagegallery1",
	isVisible:true, 
	skin:"imgGalskin",
	focusSkin:"imgGalFSkin",
	text:"Click Here",
	toolTip:"sample text"};

var imgGalLayout={containerWeight:100, 
	padding:[5,5,5,5], 
	margin:[5,5,5,5], 
	hExpand:true, 
	vExpand:false, 
	displayText:true};

var imgGalPSP={**viewType: constants.IMAGE_GALLERY_VIEW_TYPE_DEFAULT** };
	
//Creating the ImageGallery.
var imagegallery1 = new voltmx.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available on Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[viewConfig Property](javascript:void(0);)

* * *

Specifies the view configuration parameters when the [viewType](#viewType) is set as IMAGE\_GALLERY\_VIEW\_TYPE\_PAGEVIEW for Desktop Web platform.

Syntax

viewConfig

Type

JSObject

Read/Write

Yes - (Read and Write)

Example

```

//Defining the properties for ImageGallery with viewConfig:noofRowsPerPage.
var imgGalBasic={id:"imagegallery1",
	isVisible:true, 
	skin:"imgGalskin",
	focusSkin:"imgGalFSkin",
	text:"Click Here",
	toolTip:"sample text"};

var imgGalLayout={containerWeight:100, 
	padding:[5,5,5,5], 
	margin:[5,5,5,5], 
	hExpand:true, 
	vExpand:false, 
	displayText:true};

var imgGalPSP={viewType: constants.IMAGE_GALLERY_VIEW_TYPE_PAGEVIEW,  
 **viewConfig: {noofRowsPerPage: 5**} };

//Creating the ImageGallery.
var imagegallery1 = new voltmx.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);
```

Platform Availability

Available in the IDE.

This property is available on Desktop Web.

* * *

