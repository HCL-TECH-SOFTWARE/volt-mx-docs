                                


PDFView Properties
==================

The properties for PDFView widget are as follows:

* * *


<details close markdown="block"><summary>accessibilityConfig Property</summary>

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the Volt MX IrisUser Guide.

### Syntax
```

accessibilityConfig
```

### Type

Object

### Read/Write

Read + Write

### Remarks

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

### Android limitations

*   If the results of the concatenation of a11y fields result in an empty string, then `accessibilityConfig` is ignored and the text that is on widget is read out.
*   The soft keypad does not gain accessibility focus during the right/left swipe gesture when the keypad appears.

### SPA/Desktop Web limitations

*   When `accessibilityConfig` property is configured for any widget, the `tabIndex` attribute is added automatically to the `accessibilityConfig` property.
*   The behavior of accessibility depends on the Web browser, Web browser version, Voice Over Assistant, and Voice Over Assistant version.
*   Currently SPA/Desktop web applications support only a few ARIA tags. To achieve more accessibility features, use the attribute a11yARIA. The corresponding tags will be added to the DOM as per these configurations.

### Example 1

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

### Example 2

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

### Platform Availability

*   Available in the IDE
*   iOS, Android, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>autoScale Property</summary>

* * *

This property is used to set the PDF documentation to fit the screen size. Toggles mode whereby the scale factor is automatically changed as the view is resized, or rotated, to maximize the PDF displayed. For continuous modes this is a "fit width" behavior, for non-continuous modes it is a "best fit" behavior.

### Syntax
```

autoScale
```

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

### Example

```

//Sample code to invoke autoScale method for a PDFView widget.

this.view.myPDFView.autoScale = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>bottom Property</summary>

* * *

This property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

The bottom property determines the position of the bottom edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the bottom edge of the parent container. In flow-vertical layout, the value is ignored. In flow-horizontal layout, the value is ignored.

The bottom property is used only if the Height property is not provided.

### Syntax
```

bottom
```

### Type

String

### Read/Write

Read + Write

### Remarks

The property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the bottom property is measured from the top edge of bottom sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and the top of the bottom sibling widget.

### Example

```

//Sample code to set the bottom property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.bottom = "50dp";

frmHome.widgetID.bottom = "10%";

frmHome.widgetID.bottom = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA , and Desktop Web

* * *

</details>
<details close markdown="block"><summary>centerX Property</summary>

* * *

This property determines the center of a widget measured from the left bounds of the parent container.

The centerX property determines the horizontal center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

### Syntax

centerX

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the centerX property is measured from right edge of the left sibling widget.

### Example

```

//Sample code to set the centerX property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerX = "50dp";

frmHome.widgetID.centerX = "10%";

frmHome.widgetID.centerX = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>centerY Property</summary>

* * *

This property determines the center of a widget measured from the top bounds of the parent container.

The centerY property determines the vertical center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-horizontal layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy.

### Syntax
```

centerY
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the centerY property is measured from bottom edge of the top sibling widget.

### Example

```

//Sample code to set the centerY property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerY = "50dp";

frmHome.widgetID.centerY = "10%";

frmHome.widgetID.centerY = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>displayAsBook Property</summary>

* * *

This property is used to configure the first page of the PDF document as a book cover. This is will applicable when the displayMode is PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE or PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE\_CONTINUOUS

### Syntax
```

displayAsBook
```

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

### Example

```

//Sample code to invoke displayASBook method for a PDFView widget.

this.view.myPDFView.displayAsBook = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>displayDirection Property</summary>

* * *

This property is used to configure the displayDirection of the PDFView widget. The following two patterns are available in the display direction for the PDFView widget.

*   constants.PDF\_DISPLAY\_DIRECTION\_VERTICAL: Sets the layout direction as vertical for the given display mode.
*   constants.PDF\_DISPLAY\_DIRECTION\_HORIZONTAL: Sets the layout direction as horizontal for the given display mode.

### Syntax
```

displayDirection
```

### Read/Write

Read + Write

### Remarks

The default value for this property is constants.PDF\_DISPLAY\_DIRECTION\_VERTICAL.

### Example

```

//Sample code to invoke displayDirection method for a PDFView widget.

this.view.myPDFView.displayDirection = constants. PDF_DISPLAY_DIRECTION_VERTICAL;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>displayMode Property</summary>

* * *

This property is used to configure the displayMode of the PDFView widget. The following four patterns are available in the display mode of PDFView.

*   constants.PDF\_DISPLAY\_MODE\_SINGLE\_PAGE : Displays only one page with scrolling support.
*   constants.PDF\_DISPLAY\_MODE\_SINGLE\_PAGE\_CONTINUOUS: Displays the entire PDF document with scroll bar support to scroll between multiple pages.
*   constants.PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE: Displays two pages side by side with scrollbar support.
*   constants.PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE\_CONTINUOUS: Displays the entire PDF document with 2 pages shown side by side.

### Syntax
```

displayMode
```

### Read/Write

Read + Write

### Remarks

The default value for this property is constants.PDF\_DISPLAY\_MODE\_SINGLE\_PAGE\_CONTINUOUS.

### Example

```

//Sample code to invoke displayMode method for a PDFView widget.

this.view.myPDFView.displayMode = constants.PDF_DISPLAY_MODE_SINGLE_PAGE_CONTINUOUS;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>displayPageBreak Property</summary>

* * *

This property is used to configure the spacing between the pages (page break) of the PDFView widget.

### Syntax
```

displayPageBreak
```

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

### Example

```

//Sample code to invoke displayPageBreak method for a PDFView widget.

this.view.myPDFView.displayPageBreak = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>displayRTL Property</summary>

* * *

This property is used to configure RTL support for the PDFView widget. This property orders the pages from right to left when the displayMode is PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE or PDF\_DISPLAY\_MODE\_TWO\_UP\_PAGE\_CONTINUOUS.

### Syntax
```

displayRTL
```

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

### Example

```

//Sample code to invoke displayRTL method for a PDFView widget.

this.view.myPDFView.displayRTL = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>enablePDFThumbnailView Property</summary>

* * *

This property is used to add the PDFThumbnailView to the PDfView widget. PDFThumbnailView is a custom view that contains a set of PDFPage thumbnails that a user can scroll over, interact with, and have these interactions drive view changes on PDFView.

> **_Note:_** When you enable this property, you must pass the pdfThumbnailPosition and pdfThumbnailSizeInPercentage properties along with the respected values.

### Syntax
```

enablePDFThumbnailView
```

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

### Example

```

//Sample code to invoke autoScale method for a PDFView widget.

this.view.myPDFView.enableThumbnailView = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>enableZoom Property</summary>

* * *

This property specifies whether the Zoom (ability to change the scale of the view area) functionality must be enabled.

### Syntax
```

enableZoom
```

### Read/Write

Read + Write

### Remarks

The default value for this property is false.

If set to true, the Zoom feature is enabled.

If set to false, the Zoom feature is disabled.

### Example

```

//Sample code to invoke enableZoom method for a PDFView widget.

this.view.myPDFView.enableZoom = true;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>height Property</summary>

* * *

It determines the height of the widget and measured along the y-axis.

The height property determines the height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to “preferred”.

### Syntax
```

height
```

### Type

Number and String

### Read/Write

Read + Write

### Remarks

Following are the available measurement options:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

### Example

```

//Sample code to set the height property for widgets by using DP, Percentage and Pixels.
frmHome.browser1.height="50dp";

frmHome.browser1. height="10%";

frmHome.browser1. height="10px";
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>id Property</summary>

* * *

id is a unique identifier of PDFView widget consisting of alpha numeric characters. Every PDFView should have a unique id within a Form.

### Syntax
```

id
```

### Type

String

### Read/Write

Read only

### Example

```

//Defining the properties for a PDFView widget
var myPDFView = new voltmx.ui.PDFView({
                                            "displayPageBreak": true,
                                            "displayRTL": false,
                                            "isVisible": true,
                                             "height":"80%",
                                              "url": "https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf",
                                            "id": "myPDFView",
                                            "isVisible": true,
                                            "left": "0dp",
                                            "top": "10%",
                                            "width": "100%",
                                            "zIndex": 1,
                                            "skin": "slPDFView",
                                            "displaysAsBook":false,
                                            "enablePDFThumbnailView":true,
                                            "pdfThumbnailPosition":constants.PDF_THUMBNAIL_POSITION_BOTTOM,
                                            "pdfThumbnailSizeInPercentage":"15%",
                                            "autoScales":true,
                                         "displayDirection":constants.PDF_DISPLAY_DIRECTION_VERTICAL,
                                            "displayMode":constants.PDF_DISPLAY_MODE_SINGLE_PAGE_CONTINUOUS,
                                            "interpolationQuality":constants.PDF_INTERPOLATION_QUALITY_NONE,
                                            "enableZoom":true,
                                            "minScaleFactor":0.5,
                                            "maxScaleFactor":5,
                                            "onPageChanged":controller.pdfOnPageChange
                                            "thumbnailBackgroundColor":"E74C3C00"

                                            }, {}, {});

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

### Syntax
```

info
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```

var inf = {a: 'hello'};
widget.info = inf; //works
widget.info.a = 'hello world'; //This will not update the widget info a property to Hello world. 
//widget.info.a will have old value as hello.
```

### Example

```

//Sample code to set info property for a PDFView widget

this.view.myPDFView.info = {
    key: "zoom of pdfview"
};

//Reading the info of the Browser widget.
voltmx.print("PDFView info ::" + this.view.myPDFView.info);

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>interpolationQuality Property</summary>

* * *

This property is used to configure the interpolation quality for images drawn into the PDFView context. You can set the following 3 quality levels on the PDFView widget.

*   constants.PDF\_INTERPOLATION\_QUALITY\_NONE
*   constants.PDF\_INTERPOLATION\_QUALITY\_LOW
*   constants.PDF\_INTERPOLATION\_QUALITY\_HIGH

### Syntax

interpolationQuality

### Read/Write

Read + Write

### Remarks

The default value for this property is NONE.

### Example

```

//Sample code to invoke interpolationQuality method for a PDFView widget.

this.view.myPDFView.interpolationQuality = constants.PDF_INTERPOLATION_QUALITY_NONE;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the form.

### Syntax
```

isVisible
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

If set to _false,_ the widget is not displayed.

If set to _true,_ the widget is displayed.

You can also set the visibility of a widget dynamically from code using the setVisibility method.

### Example

```

//Sample code to set isVisible property for a PDFView widget
frmBrowser.myPDFView.isVisible=true;
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>left Property</summary>

* * *

This property determines the lower left corner edge of the widget and is measured from the left bounds of the parent container.

The left property determines the position of the left edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

### Syntax
```

left
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the left property is measured from right edge of the left sibling widget.

### Example

```

//Sample code to set the left property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.left = "50dp";

frmHome.widgetID.left = "10%";

frmHome.widgetID.left = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxHeight Property</summary>

* * *

This property specifies the maximum height of the widget and is applicable only when the height property is not specified.

The maxHeight property determines the maximum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxHeight value overrides the preferred, or “autogrow” height, if the maxHeight is less than the derived content height of the widget.

### Syntax
```

maxHeight
```

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the maxHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxHeight = "50dp";

frmHome.widgetID.maxHeight = "10%";

frmHome.widgetID.maxHeight = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxScaleFactor Property</summary>

* * *

This property is used to set the maximum scaling factors for the PDF document. Assigning these values will implicitly turn off autoScales, and allows scaleFactor to vary between these min / max scale factors.

### Syntax
```

maxScaleFactor
```

### Read/Write

Read + Write

### Example

```

//Sample code to invoke maxScaleFactor method for a PDFView widget.

this.view.myPDFView.maxScaleFactor = 5;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>maxWidth Property</summary>

* * *

This property specifies the maximum width of the widget and is applicable only when the width property is not specified.

The Width property determines the maximum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxWidth value overrides the preferred, or “autogrow” width, if the maxWidth is less than the derived content width of the widget.

### Syntax
```

maxWidth
```

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the maxWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxWidth = "50dp";

frmHome.widgetID.maxWidth = "10%";

frmHome.widgetID.maxWidth = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>minHeight Property</summary>

* * *

This property specifies the minimum height of the widget and is applicable only when the height property is not specified.

The minHeight property determines the minimum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minHeight value overrides the preferred, or “autogrow” height, if the minHeight is larger than the derived content height of the widget.

### Syntax
```

minHeight
```

### Type

Number

### Read/Write

Read + Write

### Example

```

//Sample code to set the minHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minHeight = "50dp";

frmHome.widgetID.minHeight = "10%";

frmHome.widgetID.minHeight = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>minScaleFactor Property</summary>

* * *

This property is used to set the minimum scaling factors for the PDF document. Assigning these values will implicitly turn off autoScales, and allows scaleFactor to vary between these min / max scale factors.

### Syntax
```

minScaleFactor
```

### Read/Write

Read + Write

### Example

```

//Sample code to invoke minScaleFactor method for a PDFView widget.

this.view.myPDFView.minScaleFactor = 0.5;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>minWidth Property</summary>

* * *

This property specifies the minimum width of the widget and is applicable only when the width property is not specified.

The minWidth property determines the minimum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minWidth value overrides the preferred, or “autogrow” width, if the minWidth is larger than the derived content width of the widget.

### Syntax
```

minWidth
```

### Type

Number

### Read/Write

Read only

### Example

```

//Sample code to set the minWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minWidth = "50dp";

frmHome.widgetID.minWidth = "10%";

frmHome.widgetID.minWidth = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>opacity Property</summary>

* * *

Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.

Specifies the opacity of the widget. Valid opacity values range from 0.0 (transparent), to 1.0 (opaque). Values set to less than zero will default to zero. Values more than 1.0 will default to 1. Interaction events set on a transparent widget will still be fired. To disable the events, also set the “isVisible” property to “false”.

### Syntax
```

opacity
```

### Type

Number

### Read/Write

Read + Write

### Remarks

> **_Note:_** This property has more priority compared to the values coming from the configured skin.

### Example

```

//Sample code to make the widget transparent by using the opacity property.
frmHome.widgetID.opacity = 0;

//Sample code to make the widget opaque by using the opacity property.
frmHome.widgetID.opacity = 1;
```

### Platform Availability

*   Not available in the IDE.
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>parent Property</summary>

* * *

Helps you access the parent of the widget. If the widget is not part of the widget hierarchy, the parent property returns null.

### Syntax
```

parent
```

### Read/Write

Read only

### Remarks

> **_Note:_** The property works for all the widgets inside a FlexForm, FlexContainer or FlexScrollContainer.

### Example

```

function func() {

    voltmx.print("The parent of the widget" + JSON.stringify(Form1.widgetID.parent));

}
```

### Platform Availability

*   Not available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>pdfThumbnailPosition Property</summary>

* * *

This property is used to set the position of the PDFThumbnailView for the PDfView. The following four patterns are available in the position of PDFThumbnailView.

*   constants.PDF\_THUMBNAIL\_POSITION\_BOTTOM: Set the PDFThumbnailView at the bottom of the PDFView.
*   constants.PDF\_THUMBNAIL\_POSITION\_TOP: Set the PDFThumbnailView at the top of the PDFView.
*   constants.PDF\_THUMBNAIL\_POSITION\_LEFT: Set the PDFThumbnailView at the left side of the PDFView.
*   constants.PDF\_THUMBNAIL\_POSITION\_RIGHT: Set the PDFThumbnailView at the right side of the PDFView.

> **_Note:_** The Bottom and Top positions will be displayed the PDFThumbnailView in the horizontal direction. The Left and Right positions will be displayed the PDFThumbnailView in the vertical direction.

### Syntax
```

pdfThumbnailPosition
```

### Read/Write

Read + Write

### Example

```

//Sample code to invoke pdfThumbnailPosition method for a PDFView widget.
this.view.myPDFView.pdfThumbnailPoistion = constants. PDF_THUMBNAIL_POSITION_BOTTOM;
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>pdfThumbnailSizeInPercentage Property</summary>

* * *

This property is used to set the size of the PDFThumbnailView in percentage with respect to the height or width of the PDFView widget.

> **_Note:_** When you provide the PDFThumbnailView position as Bottom or Top, the size of the PDFThumbnailView is calculated based on the height of the PDFView widget. When you provide the PDFThumbnailView position as Left or Right, the size of the PDFThumbnailView is calculated based on the width of the PDFView widget.

### Syntax
```

pdfThumbnailSizeInPercentage
```

### Read/Write

Read + Write

### Example

```

//Sample code to invoke pdfThumbnailSizeInPercentage method for a PDFView widget.

this.view.myPDFView.pdfThumbnailSizeInPercentage = “15%”;

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>right Property</summary>

* * *

This property determines the lower right corner of the widget and is measured from the right bounds of the parent container.

The right property determines the position of the right edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, value is ignored. In flow-horizontal layout, the value is ignored.

The right property is used only if the width property is not provided.

### Syntax
```

right
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the right property is measured from left edge of the right sibling widget. The horizontal space between two widgets is measured from right of the left sibling widget and left of the right sibling widget.

### Example

```

//Sample code to set the right property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.right = "50dp";

frmHome.widgetID.right = "10%";

frmHome.widgetID.right = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>skin Property</summary>

* * *

This property specifies the look and feel of the PDFView widget when it is not in focus. You can set the background color, the color of the border, and the width of the border.

### Syntax
```

skin
```

### Read/Write

Read + Write

### Example

```

//Sample code to define the skin property for Button widget.
this.view.myPDFView.skin="pdfSkin";

```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>thumbnailBackgroundColor Property</summary>

* * *

This property is used to set the background color for the PDFthumbnailView.

### Syntax
```

thumbnailBackgroundColor
```

### Type

JSObject

### Read/Write

Read + Write

### Example

```

//Sample code to invoke thumbnailBackgroundColor property for a PDFView widget.
this.view.myPDFView.thumbnailBackgroundColor="0000ff00";
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>top Property</summary>

* * *

This property determines the top edge of the widget and measured from the top bounds of the parent container.

The top property determines the position of the top edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy. In flow-horizontal layout, the distance is measured from the left edge of the parent container.

### Syntax
```

top
```

### Type

String

### Read/Write

Read + Write

### Remarks

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the top property is measured from the bottom edge of the top sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and top of the bottom sibling widget.

### Example

```

//Sample code to set the top property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.top = "50dp";

frmHome.widgetID.top = "10%";

frmHome.widgetID.top = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>transform Property</summary>

* * *

Contains an animation transformation that can be used to animate the widget.

### Syntax
```

transform
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the widget's anchor point. The transformation contained in this property must be created using the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#makeAffi) function.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have a transform property.

```

//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>url Property</summary>

* * *

This property is used to configure the URL and load a resource file in a PDFView widget.

### Syntax
```

url
```

### Type

String

### Read/Write

Read + Write

### Remarks

The default value for this property is blank.

This property is mandatory for loading the pdf documentation inside a PDFView.

Example

```

//Sample code to invoke url method for a PDFView widget.

this.view.myPDFView.url = “https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf”;
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>width Property</summary>

* * *

This property determines the width of the widget and is measured along the x-axis.

The width property determines the width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the width may be derived from either the widget or container’s contents by setting the width to “preferred”.

### Syntax
```

width
```

### Type

Number, String, and Constant

### Read/Write

Read + Write

### Remarks

Following are the options that can be used as units of width:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred width of the widget as width and preferred size of the widget is determined by the widget and may varies between platforms.

### Example

```

//Sample code to set the width property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.width = "50dp";

frmHome.widgetID.width = "10%";

frmHome.widgetID.width = "10px";
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>zIndex Property</summary>

* * *

This property specifies the stack order of a widget. A widget with a higher zIndex is always in front of a widget with a lower zIndex.

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the Volt MX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

### Syntax
```

zIndex
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The default value for this property is 1.

> **_Note:_** Modifying the zIndex does not modify the order of the widgets inside the FlexContainer. If zIndex is same for group of overlapping widgets then widget order decides the order of overlapping. The last added widget is displayed on top.

From Volt MX Iris V9 SP2 FP7, developers can configure the Z Index value for a Responsive Web app as **Auto** or **Custom**. When the selected Z Index value is **Auto**, the default Z Index value of 1 is applied. When the selected Z Index value is **Custom**, developers can specify a desired numeric value.

Prior to the V9 SP2 FP7 release, the default value for the Z Index was **1**. When developers imported any third-party libraries with the Z index set as **Auto**, content overflow was disabled as the value of Auto is less than 1.

> **_Note:_** The Z Index value Auto is supported only when the Enable JS Library mode is configured as unchecked.

For existing components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Custom** with **1** as the value.

For new components, the value of the Z Index is configured as **1** for the Native channel. For the Responsive Web channel, the Z Index will be set as **Auto** or **1** based on the project level settings.

> **_Note:_** If ModalContainer property is set to true in any of the FlexContainer widget, the Z Index value of that container and all of its parent containers should be set to **Custom**.

**voltmx.flex.ZINDEX\_AUTO** : Constant to configure the Z Index value as **auto** programmatically.

```

//Sample code to set the ZIndex value to Auto  
 var flx = new voltmx.ui.FlexContainer({ 
  "id": "flx"
  "zIndex": voltmx.flex.ZINDEX_AUTO
});

```
```

//Sample code to set the ZIndex value to Auto
flx.zIndex = voltmx.flex.ZINDEX\_AUTO;

```

### Example

```

//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

