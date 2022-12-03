        

## <a id="label-properties">Label Properties


The basic properties for Label widget are:

* * *

accessibilityConfig Property

* * *

* * *

activeStateSkin Property

* * *

* * *

anchorPoint Property

* * *

* * *

backgroundColor Property

* * *

* * *

backgroundColorMultiStepGradient Property

* * *

* * *

backgroundColorTwoStepGradient Property

* * *

* * *

backgroundImage Property

* * *

* * *

blur Property

* * *

* * *

borderColor Property

* * *

* * *

borderColorGradient Property

* * *

* * *

borderStyle Property

* * *

* * *

borderWidth Property

* * *

* * *

bottom Property

* * *

* * *

breakStrategy Property

* * *

This property is used to improve the structure of the text layout in Label widget. This property specifies how to perform line breaking on paragraphs of the Label text.

You can use [hyphenationFrequency](#hyphenationFrequency) and breakStrategy property to improve the structure of the text in a Label widget.

Syntax

breakStrategy

Type

Number

Read/Write

Read+Write

Remarks

The default value for breakStrategy property is constants.TEXT\_BREAK\_STRATEGY\_SIMPLE HIGH\_QUALITY.

You can specify any of the following values to this property.

*   constants.TEXT\_BREAK\_STRATEGY\_SIMPLE: When the breakStrategy property is set as SIMPLE, the paragraphs in the text undergoes simple line breaking without automatic hyphenation.
*   constants.TEXT\_BREAK\_STRATEGY\_ HIGH\_QUALITY: When the breakStrategy property is set as HIGH\_QUALITY, all the paragraphs in the text undergoes line breaking. This also includes automatic hyphenation. This method improves the text layout structure.  
    While using this method, you will observe a performance impact as performing line breaks and hyphenation will take time.
*   constants.TEXT\_BREAK\_STRATEGY\_BALANCED: When the breakStrategy property is set as BALANCED, the line breaks are chosen in such a way that all lines have the same length. This also includes automatic hyphenation.

Example

```
//Sample code to set the breakStrategy property for a Label widget.
frmLabel.myLabel.breakStrategy=constants.TEXT\_BREAK\_STRATEGY\_SIMPLE HIGH\_QUALITY;
```

Platform Availability

*   Android 6.0 onwards

* * *

centerX Property

* * *

* * *

centerY Property

* * *

* * *

clipView Property

* * *

Defines a shape to clip the widget view.

Syntax

clipView

Type

JSObject

Parameters

shape

A key-value pair represents a shape of the clipping. You can clip a view as follows:

_VIEW\_CLIP\_SHAPE\_RECTANGLE_: The widget view is rectangle. By default, the value is set.

_VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE_: The widget view is rectangle with rounded corners.

_VIEW\_CLIP\_SHAPE\_CIRCLE_: The widget view is circular.

bounds

A key-value pair represents the bounds of the shape to clip a view. Specify the bounds as an array of integers \[left, top, right, bottom\].

boundsInPixel

Defines whether the units of specified bounds should be in pixels or in percentage. The property takes the Boolean value.

_true_: Indicates the specified bounds should be in pixels.

_false_: Indicates the specified bounds should be in percentage.

radius

Specifies the radius of the clipping shape. Represents the corner radius of the rounded rectangular shape when the clipping shape is VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE or represents the radius of a circle when the clipping shape is VIEW\_CLIP\_SHAPE\_CIRCLE.

Read/Write

Read + Write

Remarks

The property enables you to change the shape of a FlexContainer view. Without view clipping, all views are displayed in a regular rectangular shape. With the property, you can change the view shape to circular or rounded rectangle, irrespective of the shape of the background. Supported shapes to clipping a view are rectangle, rounded rectangle, and circle.

The clipView property is applicable only for the widgets added in the Flex Forms.

Example

Setting the clipView property on an existing widget

```
//Sample code to set the clipView property of a Label widget.  
  
frmLabel.MyLabel.clipView = {
    shape: constants.VIEW\_CLIP\_SHAPE\_CIRCLE,
    bounds: \[5, 5, 5, 5\],
    radius: 10
};
```

Setting the clipView property on widget creation

```
//Label Creation.
var Lbl1 = new voltmx.ui.Label({
    "id": "Lbl1",
    "isVisible": true,
    "width": "60%",
    "zIndex": 1,
    "skin": "skin3",
    "clipView": {
        shape: constants.VIEW\_CLIP\_SHAPE\_CIRCLE,
        bounds: \[5, 5, 5, 5\],
        radius: 10
    }
});
```

Platform Availability

*   Android 5.0 and later versions.

* * *

contentAlignment Property

* * *

* * *

cornerRadius Property

* * *

* * *

cursorType Property

* * *

* * *

disabledStateSkinProperties Property

* * *

* * *

enable Property

* * *

* * *

enableCache Property

* * *

* * *

focusStateSkinProperties Property

* * *

* * *

fontColor Property

* * *

* * *

fontFamily Property

* * *

* * *

fontMetrics Property

* * *

The fontMetrics property enables apps to obtain information about the metrics of a Label widget's text.

Syntax

fontMetrics

Type

JavaScript object

Read/Write

Read only

Remarks

The object contained by this property provides the app with the following information.

| Property | Platform Availability |
| --- | --- |
| 
top

 | Android |
| bottom | Android |
| ascent | Android, iOS |
| descent | Android, iOS |
| leading | Android, iOS |
| fontSize | Android, iOS |
| capHeight | iOS |
| xHeight | iOS |
| lineHeight | Android, iOS |

Example

```
var fontMatricesObject = form.label.fontMetrics;
voltmx.print("ascent :" + fontMatricesObject.ascent);
voltmx.print("descent:" + fontMatricesObject.descent);
```

Platform Availability

*   iOS
*   Android

* * *

fontSize Property

* * *

* * *

fontStyle Property

* * *

On the Desktop Web channel, if the value of the fontStyle property is voltmx.skin.FONT\_STYLE\_UNDRELINE, and the value of the [textStyle](#textSyle) property is Strikethrough, the textStyle property is given higher priority.

* * *

fontWeight Property

* * *

* * *

height Property

* * *

It determines the height of the widget and measured along the y-axis.

The height property determines the height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to “preferred”.

Syntax

height

Type

Number, String, and Constant

Read/Write

Read + Write

Remarks

Following are the available measurement options:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

**Example**

Setting the height property on an existing widget

```
/\*Sample code to set the height property for a Label widget by using DP, Percentage and Pixels.\*/
frmLabel.myLabel.height="50dp";

frmLabel.myLabel.height="10%";

frmLabel.myLabel.height="10px";

```

Setting the height property on widget creation

```
//Defining the properties for label with height: "150dp" 
var label1 = new voltmx.ui.Label({
    "id": "&lt;ID for the Widget&gt;",
    "top": "19dp",
    "width": "200dp",
    "height": "150dp",
    "right": "23dp",
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true
});
```

Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

hoverSkin Property

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
//Defining properties for a label with hoverSkin:"hskin".
var lblBasic = {
    id: "label1",
    skin: "lblSkn",
    text: "Hello world",
    isVisible: true
};

var lblLayout = {
    containerWeight: 50,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};

var lblPSP = {
    hoverSkin: "hskin"
};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
//Sample code to set the hoverSkin property for a Label widget.
frmLabel.myLabel.hoverSkin="hSkin";
```

Platform Availability

Available in the IDE.

*   Windows Tablet

* * *

hoverStateSkinProperties Property

* * *

* * *

hyphenationFrequency Property

* * *

This property is used to improve the structure of the text layout in Label widget. This property sets the periodicity of the word breaks to the text in the Label widget.

You can use hyphenationFrequency and [breakStrategy](#breakStrategy) property to improve the structure of the text in a Label widget.

Syntax

hyphenationFrequency

Type

Number

Read/Write

Read+Write

Remarks

The default value of hyphenationFrequency property is constants.TEXT\_HYPHENATION\_FREQUENCY\_NORMAL.

You can specify any of the following values to this property.

*   constants.TEXT\_HYPHENATION\_FREQUENCY\_NONE: When the hyphenationFrequency property is set as NONE, automatic hyphenation is not performed on the text.
*   constants.TEXT\_HYPHENATION\_FREQUENCY\_NORMAL: When the hyphenationFrequency property is set as NORMAL, light hyphenation is performed on the text. You can set this value when you have informal cases such as shorter sentences and chat messages.
*   constants.TEXT\_HYPHENATION\_FREQUENCY\_FULL: When the hyphenationFrequency property is set as FULL, hyphenation is performed on the full text. You can set this value when you must input a large amount of text in a limited space.

Example

```
//Sample code to set the hyphenationFrequency property for a Label widget.
frmLabel.myLabel.hyphenationFrequency=constants.TEXT\_HYPHENATION\_FREQUENCY\_NONE;
```

Platform Availability

*   Android 10.0 onwards

* * *

id Property

* * *

id is the unique identifier of a Label consisting of alpha numeric characters. Every Label should have a unique id within a Form.

Syntax

id

Type

String - \[Mandatory\]

Read/Write

Yes - (Read only)

Example

```
//Defining the properties for a label with id:"label1"
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);

//Reading the id of the label
alert("Label id::" + label1.id);
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

info Property

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
var inf = {
    a: 'hello'
};
widget.info = inf; //works
widget.info.a = 'hello world';
/\*This will not update the widget info a property to Hello world. 
widget.info.a will have old value as hello\*/
```

Example

```
var inf = {
    a: 'hello'
};
widget.info = inf; //works
widget.info.a = 'hello world';
/\*This will not update the widget info a property to Hello world. 
widget.info.a will have old value as hello\*/
Example
//Defining the properties for a label with info property.
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
label1.info = {
    key: "LABEL"
};

//Reading the info of the label.
alert("Label info is ::" + label1.info);
```
```
//Sample code to set info property for a Label widget.

frmLabel.myLabel.info = {
    key: "LABEL"
};

//Reading the info of the Label widget.
voltmx.print("Label widget info:" +frmLabel.myLabel.info);

```

Platform Availability

Not available in the IDE.

Available on all platforms.

* * *

isVisible Property

* * *

This property controls the visibility of a widget on the Form.

Syntax

isVisible

Type

Boolean

Read/Write

Yes - (Read and Write)

Remarks

The default value for this property is true. If set to _false_, the label is not displayed on the Form. If set to _true_, the label is displayed on the Form.

This property is not applicable if the widget is placed in a [Segment](Segment.mdl). When the widget is placed in a Segment, the visibility of the widget is controlled by the [data](Segment_Properties.mdl#data) property of the segment.

Example

```
//Defining the properties for a label with isVisible:true
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);

//Reading the isVisible of the label
alert("Label isVisible::" + label1.isVisible);
```
```
//Sample code to set the isVisible property of a Label widget.  
  
frmLabel.myLabel.isVisible=true;
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

left Property

* * *

* * *

maxHeight Property

* * *

* * *

maxNumberOfLines Property

* * *

Defines the maximum number of lines of text allowed in a Label Widget.

Syntax

maxNumberOfLines

Type

Number

Read/Write

Read + Write

Remarks

If the number of lines of text available in the label are greater than the number of maximum lines defined, the text after the last line displayed is truncated with no ellipses (. . .) by default. You can have the ellipses displayed using the textTruncatePosition property.

If the number of lines of text available in the label are less than the number of maximum lines defined (using the maxNumberOfLines property), the label's height wraps to the number of lines available in the label.

When the property is set to 0 or an invalid value, the maxNumberOfLines property behavior will be unset. That is, Label Widget behaves as if the property is not defined.

Property Behavior in Flex

Suppose a Label Widget is placed in a FlexContainer or a FlexForm. The height of the label is determined either by height constraints (minHeight, height, maxHeight), or by implicit height calculations (centerY, top, and bottom). The height calculated by Label Widget's Flex parameters takes precedence over the maxNumberOfLines property in determining the actual height of the Label Widget.

_Case 1_:

Let the height calculated by Label Widget's Flex parameters permits 10 lines of text to be visible in the label, the maxNumberOfLines property is set to 5, and the actual text can span to 20 lines. This results in display of Label that can fit 10 lines of text, and the text in the label gets truncated at line 5.

_Case 2_:

The height calculated by label's Flex parameters permits five lines of text to fit in the label. The maxNumberOfLines property is set to 10, and the actual text can span to 20 lines. This results in display of Label that can fit five lines of text, and the text truncation is not seen (the truncation occurs at line 10, which is not in visible region).

Example

Setting the maxNumberOfLines property on an existing widget

```
//Sample code to set the maxNumberOfLines property of a Label widget.   
  
frmLabel.myLabel.maxNumberOfLines = 4;
```

Setting the maxNumberOfLines property on widget creation

```
var sampleLabel = new voltmx.ui.Label({
    "id": "sampleLabel",
    "left": "0dp",
    "height": "20%",
    "top": "5dp",
    "width": "90%",
    "zIndex": 1,
    "backgroundColor": "#2E0854",
    "hoverSkin": "hskin",
    "skin": "lblSkn",
    "text": "Product Description",
    "wrapping": constants.WIDGET\_TEXT\_WORD\_WRAP,
    "maxNumberOfLines": 10,
    "textTruncatePosition": constants.TEXT\_TRUNCATE\_END
});
```

Platform Availability

*   Android
*   iOS
*   Windows

* * *

maxWidth Property

* * *

* * *

minHeight Property

* * *

* * *

minWidth Property

* * *

* * *

newUnderlineBehaviour Property

* * *

This property is used to underline the text in a Label widget. When you enable this property, the text inside the Label widget is underlined.

Syntax

newUnderlineBehaviour

Type

Boolean

The default value of this property is false.

Read/Write

Read + Write

Example

```
//Sample code to enable the newUnderlineBehaviour property of a Label widget.   
  
frmLabel.myLabel.newUnderlineBehaviour= true;
```

Platform Availability

*   iOS

* * *

opacity Property

* * *

* * *

padding Property

* * *

* * *

paddingInPixel Property

* * *

* * *

parent Property

* * *

* * *

pasteboardType Property

* * *

This property enables an application to share data within the application or with another application using system-wide or application-specific pasteboards. Typically, an object in the application writes data to a pasteboard when the user requests a copy or cut operation on a selection in the user interface. Another object in the same or different application then reads that data from the pasteboard and presents it to the user at a new location; this usually happens when the user requests a paste operation.

Syntax

pasteboardType

Type

Number

Read/Write

Yes - (Read and Write)

Remarks

The different pasteboard types are:

*   constants.PASTE\_BOARD\_TYPE\_DEFAULT: If you select this option, the value selected in the application properties gets applied.
*   constants.PASTE\_BOARD\_TYPE\_SYSTEM\_LEVEL: This is the default selection and if this option is unchanged, the text copied from a Label can be pasted across different applications on the device. Even if you exit the source application, the copied text persists in the memory and can be pasted across applications or within the same application.
*   constants.PASTE\_BOARD\_TYPE\_APP\_LEVEL\_PERSISTENT: If you select this option , the text copied from a Label can be pasted in TextArea or TextBox (with the pasteboard type set as applevel) within the same application. Even if you close the application, the copied text persists in the memory and can be copied to another TextArea whose pasteboard type is applevel, when you restart that application.
*   constants.PASTE\_BOARD\_TYPE\_APP\_LEVEL\_NON\_PERSISTENT: If you select this option, the text copied from a Label can be pasted in TextArea or TextBox within the same application. This text is not retained in the memory when you close the application.

Example

```
//Defining properties for a label with pasteboardType:constants.PASTE\_BOARD\_TYPE\_SYSTEM\_LEVEL.
var lblBasic = {
    id: "label1",
    skin: "lblSkn",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 50,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {
    pasteboardType: constants.PASTE\_BOARD\_TYPE\_SYSTEM\_LEVEL
};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
//Sample code to set the pasteboardType property of a Label widget.  
  
frmLabel.myLabel.pasteboardType=constants.PASTE\_BOARD\_TYPE\_SYSTEM\_LEVEL;
```

Platform Availability

Available in the IDE.

*   iPhone
*   iPad

* * *

pressedStateSkinProperties Property

* * *

* * *

renderAsAnchor Property

* * *

Most of the Mobile Web browsers do not offer a very good user experience when the entire segment is made clickable. To offer an acceptable user experience, one of the labels in a segment is made clickable and the _onClick_ event for the segment is bound to a label.

Syntax

renderAsAnchor

Type

Boolean

Read/Write

No

Remarks

The default value for this property is false. This property is typically set to true when the segment _onClick_ is bound to a label.

This property is available only when the Label Widget is placed in a Segment.

If set to _true,_ the Label is made a clickable element in the Segment. If set to _false,_ the Label is not a clickable element in the Segment.

Example

```
//Defining properties for a label with renderAsAnchor:true.
var lblBasic = {
    id: "label1",
    skin: "lblSkn",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 50,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {
    renderAsAnchor: true
};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
//Sample code to set the renderAsAnchor property of a Label widget.
frmLabel.myLabel.renderAsAnchor=true;

```

Platform Availability

Available in the IDE.

*   Server side Mobile Web (basic)
*   Server side Mobile Web (BJS)

* * *

retainContentAlignment Property

* * *

* * *

retainFlexPositionProperties Property

* * *

* * *

retainFlowHorizontalAlignment Property

* * *

* * *

right Property

* * *

* * *

<a name="shadowColor">shadowColor Property

* * *

Specifies the color for the shadow of the widget.

Syntax

shadowColor

Type

Color constant or Hexadecimal number

Read/Write

Read + Write

Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
      
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   On the Android platform, if the clipBounds property and the rounded corner is enabled for the Label widget, the shadowColor appears beyond the rounded corner area.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowColor property.

```
Form1.btn1.shadowColor = "ea5075";
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

shadowDepth Property

* * *

Defines the depth of the shadow effect applied to the Label Widget.

Syntax

shadowDepth

Type

Number

Read/Write

Read + Write

Remarks

The depth of the shadow should be specified in DP (Device Independent Pixels) units. The higher the value of shadowDepth, the appearance of the Label Widget is elevated from the screen and the casted shadow becomes soft.

Example

Setting the shadowDepth property on an existing widget

```
//Sample code to set the shadowDepth property of a Label widget.

frmLabel.myLabel.shadowDepth = 10;

```

Example

Setting the shadowDepth property on widget creation

```
//Label Creation.
var Lbl1 = new voltmx.ui.Label({
    "id": "Lbl1",
    "isVisible": true,
    "width": "60%",
    "zIndex": 1,
    "skin": "skin3",
    "shadowDepth": 10,
    "shadowType": constants.VIEW\_BOUNDS\_SHADOW
});
```

Platform Availability

*   Android 5.0 and later versions.

* * *

shadowOffset Property

* * *

This property specifies the current coordinates of the shadow region in the widget.

Syntax

shadowOffset

Type

JSON Object

Read/Write

Read + Write

Remarks

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowOffset property.

```
Form1.btn1.shadowOffset= {
    "x": "3",
    "y": "27"
};
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

shadowRadius Property* * *

Specifies the radius for the blur value of the shadow.

Syntax

shadowRadius

**Type**

Number

Read/Write

Read + Write

Remarks

*   The default value of the shadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowRadius property.

```
 Form1.btn1.shadowRadius = 6;
```

Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * * shadowType Property

* * *

Sets a type of the shadow effect to apply to the Label Widget.

Syntax

shadowType

Type

Number

Read/Write

Read + Write

Remarks

The property specifies a shape for the widget's shadow that is cast. You can apply any one of the following shadow types:

_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular bounds.

_PADDED\_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular padded bounds.

_BACKGROUND\_SHADOW_: Shadow matches the widget's background. This is the default value.

Example

Setting the shadowType property on an existing widget

```
//Sample code to set the shadowType property of a Label widget.
frmLabel.myLabel.shadowType = constants.VIEW\_BOUNDS\_SHADOW;

```

Setting the shadowType property on widget creation

```
//Label Creation.
var Lbl1 = new voltmx.ui.FlexContainer({
    "id": "Lbl1",
    "isVisible": true,
    "width": "60%",
    "zIndex": 1,
    "skin": "skin3",
    "shadowDepth": 10,
    "shadowType": constants.VIEW\_BOUNDS\_SHADOW
});
```

Platform Availability

*   Android 5.0 and later versions.

* * *

skin Property

* * *

Specifies the look and feel of the Label widget when not in focus.

Syntax

skin

Type

String

Read/Write

Yes - (Read and Write)

Example

```
//Defining the properties for a label with skin:"labelSkin"
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);

//Reading the skin of the label
alert("Label skin::" + label1.skin);
```
```
//Sample code to set the skin property of a Label widget.  
  
frmLabel.myLabel.skin="lblSkin";
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

text Property

* * *

Specifies a general or descriptive text for a Label widget.

Syntax

text

Type

String

Read/Write

Yes - (Read and Write)

Example

```
//Defining the properties for a label with text:"Hello world"
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);

//Reading the text of the label.
alert("Label text::" + label1.text);
```
```
//Sample code to set the text property of a Label widget.  
  
frmLabel.myLabel.text="Hello world";
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

textCopyable Property

* * *

This property enables you to copy a text from a Label widget when the widget is enabled state.

Syntax

textCopyable

Type

Boolean

Read/Write

Yes - (Read and Write)

Remarks

This property is not applicable if the widget is in disabled state.

In iOS platform, partial text cannot be copied.

In SPA platform, textCopyable property is supported in the following OS versions:  
  
       •    iOS 6 and above  
  
       •    Android 2.3 and above  
  

The default value for this property is false. If set to _true,_ the text of Label can be copied to other widgets. If set to _false,_ the text of the Label cannot be copied to other widgets.

Example

```
//Defining properties for a label with textCopyable:true.
var lblBasic = {
    id: "label1",
    skin: "lblSkn",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 50,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {
    textCopyable: true
};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
//Sample code to set the textCopyable property of a Label widget.  
  
frmLabel.myLabel.textCopyable=true;
```

Platform Availability

Available in the IDE.

*   iOS
*   Android (version 3.0 and above)
*   SPA (iOS and Android)

* * *

textShadowColor Property

* * *

* * *

textShadowOffset Property

* * *

* * *

textShadowRadius Property

* * *

* * *

textStyle Property

* * *

The textStyle property enables apps to get and set values that control the appearance of the Label widget's text.

Syntax

textStyle

Type

JavaScript object containing key/value pairs.

Read/Write

Read + Write

Remarks

The following table consists of the keys that can be applied to this property. This table also lists whether any change in these keys will be reflected on the canvas.

   
| Property | Platform Availability | Description | Reflected on Canvas |
| --- | --- | --- | --- |
| 
lineSpacing

 | Android, iOS, SPA, Desktop Web | 

A numeric value that controls the space between the lines regardless of the font that is used. This value is set in terms of device-independent pixels (DP).

On the iOS platform, you can only provide positive values for the lineSpacing property. As the Native iOS platform does not support negative values for line spacing, ensure that you do not provide negative values for the lineSpacing property.

 | No |
| letterSpacing | Android, iOS, SPA, Desktop Web | A numeric value that controls the space between the individual letters in the Label widget's text string. This value is set in terms of device-independent pixels (DP). A positive value increases the letter spacing, and a negative value decreases it. | Yes |
| strikeThrough | Android, iOS, SPA, Desktop Web | A Boolean value specifying whether the text is printed with a strikethrough line. The default is false. | Yes |
| strikeThroughStyle | iOS | A constant that controls the style of the strikethrough line. If the strikeThrough property is false, this value is ignored. The strikeThroughStyle property must be passed as an array of arguments. The strikeThroughStyle constants are presented in the table below. | Yes but not for all constants. |
| baseLine | iOS | A floating point value indicating the offset of characters from the baseline. The default value is 0. A positive value raises the characters higher above the baseline and a negative value decreases the spacing. | Yes |
| minLineHeight | iOS | A numeric value that restricts the minimum line height. | No |
| maxLineHeight | iOS | A numeric value that restricts the maximum line height. | No |

In iOS apps, if the strikeThrough property is true, then your app should specify a value for the strikeThroughStyle property from among the following.

  
| Constant | Description | Reflected on Canvas |
| --- | --- | --- |
| 
TEXTSTYLE\_STRIKETHROUGH\_STYLE\_THICK

 | Use a thick solid line for the strikethrough. | Yes |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_DOUBLE | Use a doubled line for the strikethrough. | Yes |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_PATTERN\_DOT | Use a dotted pattern for the strikethrough. | Yes |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_PATTERN\_DASH | 

Use a dashed pattern for the strikethrough.

 | Yes |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_PATTERN\_DASHDOT | Use a combination of dashes and dots for the strikethrough. | Yes |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_PATTERN\_DASHDOTDOT | Use a dotted line for the strikethrough. | No |
| TEXTSTYLE\_STRIKETHROUGH\_STYLE\_BY\_WORD | Use strikethrough for the words only and do not strike through the spaces. | No |

For all other attributes apart from the ones mentioned above, changes made to the textStyle property will not reflect in the Iris canvas. But the changes will be reflected on the device.

Example

```
//Writing values to the textStyle property.
form.label.textStyle = {
    "lineSpacing": 10,
    "letterSpacing": 10,
    "strikeThrough": true,
    "strikeThroughStyle": TEXTSTYLE\_STRIKETHROUGH\_STYLE\_THICK,
    "baseline": 0.5
};

//Reading values from the textStyle property.
var textStyleInfo = form.label.textStyle;
```

Platform Availability

*   iOS, Android, SPA, and Desktop Web

* * *

textTruncatePosition Property

* * *

Enables the appearance of ellipses at a particular position (start, middle, and end of the line) if the text gets truncated due to the maxNumberOfLines property.

Syntax

textTruncatePosition

Type

Number

Read/Write

Read + Write

Remarks

The property is respected only when the maxNumberOfLines property is defined for a Label Widget.

You can set any one of the following values:

_constants.TEXT\_TRUNCATE\_NONE_: No ellipses appear. This is the default value.

_constants.TEXT\_TRUNCATE\_START_: The ellipses appear at the beginning of the line. Respected only in iOS.

_constants.TEXT\_TRUNCATE\_MIDDLE_: The ellipses appear in the middle of the line. Respected only in iOS.

_constants.TEXT\_TRUNCATE\_END_: The ellipses appear at the end of the line.

Limitations

*   Android

If you define the property value as either constants.TEXT\_TRUNCATE\_START or constants.TEXT\_TRUNCATE\_MIDDLE, the behavior is the same as constants.TEXT\_TRUNCATE\_END.

When you place a Label Widget in a FlexForm, and apply the textTruncatePosition property, the ellipses appear at the end of last line defined by the maxNumberofLines Property.

For Android, the textTruncatePosition property will not be respected when the [textCopyable](#textCopy) property is set to true because s the Label widget content becomes scrollable to select the full text or a portion of text.

*   iOS

When you place a Label Widget in a FlexForm, and the Label's height is determined by the Label's Flex parameters, the ellipses appear at the end of last appearing line in the Label.

Due to native limitation, when you define both textTruncatePosition and [wrapping](#wrapping) properties to a Label Widget, the property defined last will overwrite the behavior set by another property.

Due to native behavior, when you set the textTruncatePosition property with a valid value (other than the default value), the widget wraps across word boundary ([WIDGET\_TEXT\_WORD\_WRAP](#Word-Wrap)).

*   Windows

If you define the property value as either constants.TEXT\_TRUNCATE\_START or constants.TEXT\_TRUNCATE\_MIDDLE, the behavior is the same as the behavior of constants. TEXT\_TRUNCATE\_END.

When you place a Label Widget in a FlexForm, and the label's height is determined by the label's Flex parameters, the ellipses appear at the end of last visible line in the label.

Example

Setting the textTruncatePosition property on an existing widget

```
//Sample code to set the textTruncatePosition property of a Label widget.   
  
frmlabel.myLabel.textTruncatePosition = constants.TEXT\_TRUNCATE\_END;
```

Setting the textTruncatePosition property on widget creation

```
var sampleLabel = new voltmx.ui.Label({
    "id": "sampleLabel",
    "left": "0dp",
    "height": "20%",
    "top": "5dp",
    "width": "90%",
    "zIndex": 1,
    "backgroundColor": "#2E0854",
    "hoverSkin": "hskin",
    "skin": "lblSkn",
    "text": "User Name",
    "wrapping": constants.WIDGET\_TEXT\_WORD\_WRAP,
    "maxNumberOfLines": 10,
    "textTruncatePosition": constants.TEXT\_TRUNCATE\_END
});
```

Platform Availability

*   Android
*   iOS
*   Windows

* * *

top Property

* * *

* * *

toolTip Property

* * *

Specifies the hint text when the cursor hovers over a widget, without clicking it. The text entered in the tooltip appears as a small box when the cursor hovers over a widget.

Syntax

toolTip

Type

String

Read/Write

Yes - (Read and Write)

Example

```
//Defining the properties for a label with toolTip:sample text
var lblBasic = {
    id: "label1",
    skin: "labelSkin",
    text: "Hello world",
    isVisible: true,
    toolTip: "sample text"
};
var lblLayout = {
    containerWeight: 100,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {};

//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
 //Sample code to set the toolTip property of a Label widget.  
  
frmLabel.myLabel.toolTip="sample text";
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

transform Property

* * *

* * *

widgetSwipeMove Property

* * *

* * *

width Property

* * *

* * *

wrapping Property

* * *

When the content of the label reaches the boundaries, it starts wrapping.

Syntax

wrapping

Type

String

Read/Write

No

Remarks

The default value for this property is WIDGET\_TEXT\_WORD\_WRAP.

While wrapping, two strategies can be applied:

*   Word Wrapping: Wrap or clip the string only at word boundaries.
*   Character Wrapping: Wrap or clip the string at the closest character boundary.

The available options are:

*   WIDGET\_TEXT\_WORD\_WRAP: Specifies if the complete word must be moved to the next line when you reach the right margin. This is the default wrapping property.
*   WIDGET\_TEXT\_CHAR\_WRAP: Specifies if the characters in a word must be moved to the next line when you reach the right margin.

The following image illustrates the character wrapping property:

![](Resources/Images/CharacterWrapping.png)

Example

```
//Defining properties for a label with wrapping:constants.WIDGET\_TEXT\_WORD\_WRAP.
var lblBasic = {
    id: "label1",
    skin: "lblSkn",
    text: "Hello world",
    isVisible: true
};
var lblLayout = {
    containerWeight: 50,
    padding: \[5, 5, 5, 5\],
    margin: \[5, 5, 5, 5\],
    hExpand: true,
    vExpand: false
};
var lblPSP = {
    wrapping: constants.WIDGET\_TEXT\_WORD\_WRAP
};
//Creating the label.
var label1 = new voltmx.ui.Label(lblBasic, lblLayout, lblPSP);
```
```
 //Sample code to set the wrapping property of a Label widget.  
  
frmLabel.myLabel.wrapping=constants.WIDGET\_TEXT\_WORD\_WRAP;
```

Platform Availability

Available in the IDE.

*   iPhone
*   iPad

* * *

zIndex Property

* * *

* * *