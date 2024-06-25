                                  


ListBox Properties
==================

The basic properties for ListBox widget are:

* * *


<details close markdown="block"><summary>accessibilityConfig Property</summary>

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the VoltMX IrisUser Guide.

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

> **_Note:_** From VoltMX Iris V9 SP2 GA version, you can provide i18n keys as values to all the attributes used inside the `accessibilityConfig` property. Values provided in the i18n keys take precedence over values provided in `a11yLabel`, `a11yValue`, and `a11yHint` fields.

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
<details close markdown="block"><summary>anchorPoint Property</summary>

* * *

Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space.

### Syntax

```

anchorPoint
```

### Type

JSObject

### Read/Write

Read + Write

### Remarks

The value for this property is a JavaScript dictionary object with the keys "x" and "y". The values for the "x" and "y" keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

### Example

```
Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>applySkinsToPopup Property</summary>

* * *

Specifies if the _[skin](Widget_Common_Properties.md#Normal)_ preserve">var var _[focusSkin](Widget_Common_Properties.md#Focus)_ properties specified for the ListBox must be applied to the popup that appears when you click on the ListBox.

### Syntax

```

applySkinsToPopup
```

### Type

Boolean

### Read/Write

No

### Remarks

The default value for the property is false.

*   If set to _true,_ the skin is applied to the popup.
*   If set to _false,_ the skin is not applied to the popup.

### Example

```
//Sample code to set the applySkinsToPopup property of a ListBox widget.
frmList.myList.applySkinsToPopup= true;
```

### Platform Availability

*   Available in the IDE
*   Available on Android/Android Tablet.

* * *

</details>
<details close markdown="block"><summary>backgroundColor Property</summary>

* * *

Specifies the background color of the widget.

### Syntax

```

backgroundColor
```

### Type

Color constant or Hexadecimal number

### Read/Write

Read + Write

### Remarks

*   The initial value of backgroundColor has to be specified explicitly. If not, Iris will not deduce the values from the existing skin and this will lead to undefined behavior.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColor property.

```
Form1.btn1.backgroundColor = "ea5075";

```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundColorMultiStepGradient Property</summary>

* * *

Specifies the multi-step gradient color for the background of the widget.

### Syntax

```

backgroundColorMultiStepGradient
```

### Type

JSON Object

### Read/Write

Read + Write

### Input Parameters

*   **gradientType** \[Constant\]: Specifies the configuration type of the gradient. This parameter can have the following constant values:
    
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`: Constant for the gradient type toTop.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_RIGHT`: Constant for the gradient type toRight.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_BOTTOM`: Constant for the gradient type toBottom.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_LEFT`: Constant for the gradient type toLeft.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM`: Constant for the gradient type custom.  
        For the custom gradient type, you must specify the angle by using the [angle](#angle) property.
*   **angle** \[Number\]: Specifies the angle for the gradient in degrees, counted counter-clockwise. This property is only applicable for the custom gradient type.
*   **colors** \[Array\]: Specifies the colors for the multi-step gradient. Colors is an array of color hex values that indicate the reference color values of the gradient. This parameter contains an array of hexadecimal numbers that represent the colors or constants defined at the theme level.
*   **colorStops** \[Array\]: Specifies the color stops for the multi-step gradient. Color Stops are the locations of the reference colors on the gradient, from 0 (the start of the gradient) to 100 (the final value of the gradient). This parameter contains an array of numbers that represent the color stops.

### Remarks

*   The default value of the gradientType key is `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColorMultiStepGradient property.

```
Form1.btn1.backgroundColorMultiStepGradient = {
    "gradientType": voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM  
    "angle": 45,
    "colors": ["ea5075", "f1fa70", "eefd04"],
    "colorStops": [0, 90, 100]
};
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundColorTwoStepGradient Property</summary>

* * *

Specifies the two-step gradient color for the background of the widget.

### Syntax

```

backgroundColorTwoStepGradient
```

### Type

JSON Object

### Read/Write

Read + Write

### Input Parameters

*   **topColor** \[Constant or Hex\]: Specifies the top color of the two-step gradient. The value of this parameter can be a hexadecimal number that represents a color or a constant that is defined at the theme level.
    
*   **bottomColor** \[Constant or Hex\]:Specifies the bottom color of the two-step gradient. The value of this parameter can be a hexadecimal number that represents a color or a constant that is defined at the theme level.
    
*   **style** \[Constant\]: Specifies the configuration style of the two-step gradient. This parameter can have the following constant values:
    
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT`: Constant for the vertical gradient style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_SPLIT`: Constant for the vertical split style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_GRADIENT`: Constant for the horizontal gradient style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_SPLIT`: Constant for the horizontal split style.

### Remarks

*   The default value of the style key is `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColorTwoStepGradient property.

```
Form1.btn1.backgroundColorTwoStepGradient = {  
     "topColor": "ea5075",  
    "bottomColor": "eefd04",  
    "style": voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT  
};
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundImage Property</summary>

* * *

Sets the image for the background of the widget.

### Syntax

```

backgroundImage
```

### Type

String

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundImage property.

```
Form1.btn1.backgroundImage = "bgImg.png";
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>blur Property</summary>

* * *

You can enable or disable a blur-effect for a widget(for example, a FlexContainer) by making use of a constructor-level property, called **blur**. The **blur** property accepts a dictionary that contains the following keys: enabled, value and style. You must specify an appropriate value for the dictionary keys, otherwise the property will not be valid.

### Syntax

```

blur
```

### Input Parameters

*   _enabled_: Accepts a Boolean value that basically decides whether to enable or disable the blur-effect for the widget. This is a mandatory attribute.
*   _value_: Level of the blur-effect that needs to be set for the widget. It should ideally be between 0 to 100. If the level is set as 0 no blur is set, even when the enabled property is set as true. This is a mandatory attribute. Even when the _enabled_ attribute is set as false, you need to specify a numerical value to this attribute.
    
*   _style_: Specifies the style in which the blur property can be applied to a widget. This is an optional parameter specific to iOS. The default value of this parameter is constants.BLUR\_EFFECT\_LIGHT. You can specify any of the following values to this parameter:  
    *   constants.BLUR\_EFFECT\_NONE
    *   constants.BLUR\_EFFECT\_EXTRALIGHT
        
    *   constants.BLUR\_EFFECT\_LIGHT (default)
    *   constants.BLUR\_EFFECT\_DARK
        
    *   constants.BLUR\_EFFECT\_REGULAR
        
    *   constants.BLUR\_EFFECT\_PROMINENT
        

### Read/Write

Read + Write

### Remarks

*   If you set _enabled_ as true, the blur-effect for the widget is enabled.
*   If you set _enabled_ as false, the blur-effect for the widget is disabled.
*   If you specify _value_ as less than 0, the value is taken as 0.
    
*   If you specify _value_ as greater than 100, the value is taken as 100.

### Limitations

*   For Android:
    *   If a FlexContainer or a FlexScrollContainer contains a Map widget, the blur-effect is not applied to the map.
        
    *   If a FlexContainer or a FlexScrollContainer contains a Browser or Video widget, the blur-effect is applied but does not get updated. For example, when the video starts playing, the new rendered frame does not get displayed with the blur-effect.
        
    *   Even if you apply 100% blur for widgets that display any text( such as Label or Calendar widgets), the text on these widgets is not blurred. This is a Native Android limitation. To generate the blur effect for the text, apply a skin with darker background to the Label or Calendar widget. This is true even when the widgets are placed in a FlexContainer with blur effect and the widgets do not have a skin.
    *   Blur effect will not work on widgets added inside BOX containers.

### Example 1

To dynamically set the blur-effect for any widget, such as a FlexContainer, use the following code.

```
//This is a generic property that is applicable for various widgets.
//Here, we have shown how to use the blur property for FlexContainer widget.
/*You need to make a corresponding use of the 
blur property for other applicable widgets.*/

Form1.myFlexContainer.blur = {
    "enabled": true,
    "value": 60
};

```

### Example 2

To dynamically set the blur-effect for any widget, such as a FlexContainer in iOS, use the following code.

```
Form1.widget1.blur = {
    "enabled": true,
    "value": 60,
    "style": constants.BLUR_EFFECT_DARK
};
```

### Platform Availability

*   Android, iOS, Windows, SPA , and Desktop web

 

* * *

</details>
<details close markdown="block"><summary>borderColor Property</summary>

* * *

Specifies the border color of the widget.

### Syntax

```

borderColor
```

### Type

Color constant or Hexadecimal number

### Read/Write

Read + Write

### Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the borderColor property.

```
Form1.btn1.borderColor = "ea5075";
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>borderColorGradient Property</summary>

* * *

Specifies the multi-step gradient color for the border of the widget.

### Syntax

```

borderColorGradient
```

### Type

JSON Object

### Read/Write

Read + Write

### Input Parameters

*   **gradientType** \[Constant\]: Specifies the configuration type of the gradient. This parameter can have the following constant values:
    
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`: Constant for the gradient type toTop.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_RIGHT`: Constant for the gradient type toRight.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_BOTTOM`: Constant for the gradient type toBottom.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_LEFT`: Constant for the gradient type toLeft.
    *   `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM`: Constant for the gradient type custom.  
        For the custom gradient type, you must specify the angle by using the [angle](#angle) property.
*   **angle** \[Number\]: Specifies the angle for the gradient in degrees, counted counter-clockwise. This property is only applicable for the custom gradient type.
*   **colors** \[Array\]: Specifies the colors for the multi-step gradient. Colors is an array of color hex values that indicate the reference color values of the gradient. This parameter contains an array of hexadecimal numbers that represent the colors or constants defined at the theme level.
*   **colorStops** \[Array\]: Specifies the color stops for the multi-step gradient. Color Stops are the locations of the reference colors on the gradient, from 0 (the start of the gradient) to 100 (the final value of the gradient). This parameter contains an array of numbers that represent the color stops.

### Remarks

*   The default value of the gradientType key is `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the borderColorGradient property.

```
Form1.btn1.borderColorGradient = {
    "gradientType": voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM  
    "angle": 45,
    "colors": ["ea5075", "f1fa70", "eefd04"],
    "colorStops": [0, 90, 100]
};
```

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>borderStyle Property</summary>

* * *

Specifies the border style for the widget.

### Syntax

```

borderStyle
```

### Type

Constant

### Read/Write

Read + Write

### Remarks

*   This property can have the following constant values:
    
    *   **voltmx.skin.BORDER\_STYLE\_PLAIN**: Constant for the plain border style.
    *   **voltmx.skin.BORDER\_STYLE\_ROUNDED\_CORNER**: Constant for the rounded corner style.
    *   **voltmx.skin.BORDER\_STYLE\_COMPLETE\_ROUNDED\_CORNER**: Constant for the complete rounded corner style.
    *   **voltmx.skin.BORDER\_STYLE\_CUSTOM**: Constant for the custom border style.
*   The cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER\_STYLE\_CUSTOM.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the borderStyle property.

```
Form1.btn1.borderStyle = voltmx.skin.BORDER_STYLE_PLAIN;
```

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>borderWidth Property</summary>

* * *

Specifies the width of the border for the widget in pixels.

### Syntax

```

borderWidth
```

### Type

Number or JSON Object

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   The default unit for the value of this property is pixels.
*   The Desktop Web platform supports both Number and JSON Object (with the top, bottom, right, and left keys) values for the borderWidth parameter. The Android and iOS platforms support only Number values for the borderWidth parameter.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the borderWidth property.

```
 Form1.btn1.borderWidth = 2;
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

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

```

centerX
```

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
<details close markdown="block"><summary>containerWeight Property</summary>

* * *

Specifies percentage of width to be allocated by its parent widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100 percent of weight except when placed in _voltmx.ui.ScrollBox_.

### Syntax

```

containerWeight
```

### Type

Number

### Read/Write

Read + Write

### Example

```
//Sample code to set the containerWeight property of a ListBox widget.
frmList.myList.containerWeight= 100;
```

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>contentAlignment Property</summary>

* * *

Specifies the alignment of the text for a ListBox with respect to its boundaries.

### Syntax

```

contentAlignment
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The default value for the property is CONTENT\_ALIGN\_CENTER.

This property is applicable only when the view is set as wheel type.

The following are the available options:

*   constants.CONTENT\_ALIGN\_TOP\_LEFT
*   constants.CONTENT\_ALIGN\_TOP\_CENTER
*   constants.CONTENT\_ALIGN\_TOP\_RIGHT
*   constants.CONTENT\_ALIGN\_MIDDLE\_LEFT
*   constants.CONTENT\_ALIGN\_CENTER
*   constants.CONTENT\_ALIGN\_MIDDLE\_RIGHT
*   constants.CONTENT\_ALIGN\_BOTTOM\_LEFT
*   constants.CONTENT\_ALIGN\_BOTTOM\_CENTER
*   constants.CONTENT\_ALIGN\_BOTTOM\_RIGHT

### Example

```
//Sample code to set the contentAlignment property of a ListBox widget.
frmList.myList.contentAlignment= constants.CONTENT_ALIGN_TOP_LEFT;
```

### Platform Availability

*   Available in the IDE
*   iOS, Android, and Windows

* * *

</details>
<details close markdown="block"><summary>cornerRadius Property</summary>

* * *

Specifies the radius of the border for the widget.

### Syntax

```

cornerRadius
```

### Type

Number or JSON Object

### Read/Write

Read + Write

### Remarks

*   The cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER\_STYLE\_CUSTOM.
*   For a Responsive Web app, a corner radius of value zero applies a plain border, and a corner radius value greater than zero applies a rounded border.
*   The Android and Desktop Web platforms support both Number and JSON Object (with the top, bottom, right, and left keys) values for the cornerRadius parameter. The iOS platform supports only Number values for the cornerRadius parameter.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the cornerRadius property.

```
 Form1.btn1.cornerRadius = 60;
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>cursorType Property</summary>

* * *

In Desktop Web applications, when you hover the mouse over any widget, a mouse pointer appears. Using the cursorType property in Iris, you can specify the type of the mouse pointer.

### Syntax

```

cursorType
```

### Type

String.

You must provide valid CSS cursor value such as wait, grab, help, etc. to the cursorType property.

### Read/Write

Read + Write

### Remarks

To add the `cursorType` property using VoltMX Iris in a Desktop Web application, follow these steps.

1.  In VoltMX Iris, open the Desktop Web application. From the **Project** explorer, expand **Responsive Web/ Desktop**\> **Forms** and select the form to which you need to make the changes.
2.  On the canvas, select the widget for which you want to specify the cursor type. For example, button.
3.  From the **Properties** panel, navigate to the **Skin** tab > **Hover Skin** tab.  
    You will find that the details of the hover skin is not enabled here.
4.  Check the **Enable** option to add a hover skin to your widget.  
    The details and configurations of the hover skin is enabled.
5.  Under the **General** section, for the Platform option, click the ellipsis icon.  
    The **Fork Skin** window appears.
6.  In the **Fork Skin** window, for **Desktop**, check under **HTML5 SPA**.
7.  Click **Ok**. You have successfully forked your hover skin for Desktop Web application.  
    You can see that the **Cursor Type** property has been added under the **General** section.
8.  Select a value from the drop-down list to set the **Cursor Type** for the widget.

### Example

```
 //This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the required changes in the example while using other widgets.*/
  
frmButton.myButton.cursorType = "wait";

```

### Platform Availability

*   Available in IDE
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>disabledKeys Property</summary>

* * *

This property is used to specify the array of keys of the list items to be shown in a disabled state. If the [itemDisabledSkin](#itemDisabledSkin) does not have any value the disabled items is displayed with a blurred or dim gray background.

> **_Note:_** The `disabledKeys` property is applicable only for the New CSS library mode. This property will not work in the legacy JS library mode.

### Syntax

```

disabledKeys
```

### Type

Array of Strings.

### Read/Write

Read +Write

### Remarks

*   The [onSelection](ListBox_Events.md#onSelect) event is not triggered when you click on any disabled item.
*   The [itemHoverSkin](#itemHoverSkin) property is not applied to the disabled item.
*   If you set the `disabledKeys` property as null, it will remove all the list items in the disabled state.

The following table shows the skin priority for the various combinations of skins and disabledKeys property.

  
| [item NormalSkin](#itemNormalSkin) | [item DisabledSkin](#itemDisabledSkin) | [item HoverSkin](#itemHoverSkin) | disabledKeys | Skin for disabled items | Skin for enabled items |
| --- | --- | --- | --- | --- | --- |
| ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/RedX_24x24.png) | ![](Resources/Images/RedX_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | Default skin with grey font color. | itemNormalSkin |
| ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/RedX_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | itemDisabledSkin | itemNormalSkin |
| ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | itemDisabledSkin | itemNormalSkin and itemHoverSkin while hovering |
| ![](Resources/Images/RedX_24x24.png) | ![](Resources/Images/RedX_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | Default skin with grey font color. | itemHoverSkin while hovering |

### Example

```
//Sample code to set the disabledKeys property of a ListBox widget.
frmList.myList.disabledKeys= ["key2", "key3"];
```

### Platform Availability

*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>disabledStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked.

### Syntax

```

disabledStateSkinProperties
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the disabledSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the disabledStateSkinProperties property.

```
Form1.btn1.disabledStateSkinProperties= {  
     background: {  
        backgroundType: voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT,  
        backgroundColorMultiStepGradient : {  
            gradientType: voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP,  
            colors: ["ea5075", "f1fa70", "eefd04"],  
            colorStops: [0, 90, 100]  
        },  
    },  
    border: {  
        borderType: voltmx.skin.BORDER_TYPE_SINGLE_COLOR,  
        borderColor: "ea5075",  
        borderStyle: voltmx.skin.BORDER_STYLE_PLAIN,  
        borderWidth: 50  
    },  
    fonts: {  
        fontColor: "ea5075",  
        fontFamily: "Serif",  
        fontSize: '100',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_NORMAL  
    },  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }
```

### Platform Availability

*   Android

* * *

* * *

</details>
<details close markdown="block"><summary>dropDownImage Property</summary>

* * *

Specifies the image to be used for the drop-down box indicator (inverted triangle by default).

### Syntax

```

dropDownImage
```

### Type

String / image Object

### Read/Write

No

### Remarks

The image you specify is used to depict the drop-down box. If you do not specify an image, the drop-down box displays the default image (inverted triangle).

You can create an image Object by using voltmx.image Namespace functions.

For the iOS platform, the drop down image should be 20px \* 33px for non retina devices and for retina devices the image size should be 40px \* 66px.

The following figure illustrates the default drop-down box indicator:

![Figure Depicting Default Indicator](Resources/Images/Default_Indicator__Combo-box_.png)


### Platform Availability

Available in the IDE

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>enable Property</summary>

* * *

The `enable` property is used to control the actionability of the widgets. In a scenario where you want to display a widget but not invoke any action on the widget, configure the `enable` property to false to achieve it.

This is a constructor level property and applicable for all widgets in VoltMX Iris.

### Syntax

```

enable
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value of this property is true.

When `enable` property is configured to true, the action associated with a widget can be invoked by the user in the application.

When `enable` property is configured to false, the action associated with a widget cannot be invoked by the user in the application.

### Example

```
//This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the changes required in the example while using other widgets.*/
  
frmButton.myBtn.enable= true;
```

### Platform Availability

*   Android, iOS, Windows, SPA, and Desktop web

 

* * *

</details>
<details close markdown="block"><summary>enableCache Property</summary>

* * *

The property enables you to improve the performance of Positional Dimension Animations.

### Syntax

```

enableCache
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

The default value for this property is true.

> **_Note:_** When the property is used, application consumes more memory. The usage of the property enables tradeoff between performance and visual quality of the content. Use the property cautiously.

### Example

```
Form1.widgetID.enableCache = true;
```

### Platform Availability

*   Available in the IDE.
*   Windows

* * *

</details>
<details close markdown="block"><summary>enableHapticFeedback Property</summary>

* * *

Allows you to enable or disable haptic feedback on the ListBox widget.

### Syntax

```

enableHapticFeedback
```

### Type

Boolean.  
If the enableHapticFeedback property is not specified, haptic feedback is not enabled on the ListBox widget.

### Read/Write

Read + Write

### Remarks

*   The enableHapticFeedback property is supported for ListBox widgets only when the onClick callback event is defined.
*   iOS
    
    *   The Haptic Feedback feature is available on iPhone 7 devices and later. These devices have Taptic Engine hardware and users can enable/disable Haptics from Device Settings-> Sounds & Haptics-> System Haptics.
        
*   Windows
    *   Haptic Feedback is supported on Windows devices with OS build version 10.0.15063.0 or later.
*   Android
    *   Users can enable the Vibrate on touch feature from Settings-> Sound & notification-> Other sounds.
        

### Limitations and Behavior

*   The haptic feedback feature is provided on the Options context menu for ListBox widget.
    

### Example

```
//Sample code to set the enableHapticFeedback property of a ListBox widget.  
  
frmList.myList.enableHapticFeedback =true;
```

### Platform Availability

*   Android
    
*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary>expandListItemToParentWidth Property</summary>

* * *

This property is used to set the width of the row items to its parent width.  From VoltMX Iris V9 GA release, you can use this property when you observe that the width of the row content is less than the parent width. This behavior is observed in Android devices such as Google Pixel and Samsung S10.

When the list item width is less than the width of the dialog as shown in the following image, set this property to true to make the width the same as the parent width.

![](Resources/Images/ListBox_Width_205x111.png)

### Syntax

```

expandListItemToParentWidth
```

### Type

Boolean.  

### Read/Write

Read + Write

### Remarks

The default value of this property is false.

*   If you set _expandListItemToParentWidth_ as true, the row items of the ListBox widget occupies the parent width.
*   If you set _expandListItemToParentWidth_ as false, the width of the row items of the ListBox widget is set as per the native platform.

### Example

```
//Sample code to set the expandListItemToParentWidth property for a ListBox widget.  
  
frmList.myList.expandListItemToParentWidth=true;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>focusSkin Property</summary>

* * *

Specifies the look and feel of the ListBox when in focus.

### Syntax

```

focusSkin
```

### Type

String

### Read/Write

Read + Write

### Remarks

You must be aware of the following:

Mobile Web does not support this property. For Advanced Mobile Web platforms, a platform specific progress indicator is displayed. For other Mobile Web platforms (Basic and BJS), the screen is refreshed.

In the Desktop Web platform, Chrome browser does not support if the properties defined in font tab are different for [skin](#skin) and focusSkin.

### Example

```
//Sample code to set the focusSkin property of a ListBox widget.  
  
frmList.myList.focusSkin="listFSkin";
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>focusStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is in focus.

### Syntax

```

focusStateSkinProperties
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the focusSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the focusStateSkinProperties property.

```
 Form1.btn1.focusStateSkinProperties = {  
     background: {  
        backgroundType: voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT,  
        backgroundColorMultiStepGradient : {  
            gradientType: voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP,  
            colors: ["ea5075", "f1fa70", "eefd04"],  
            colorStops: [0, 90, 100]  
        }  
    },  
    border: {  
        borderType: voltmx.skin.BORDER_TYPE_SINGLE_COLOR,  
        borderColor: "ea5075",  
        borderStyle: voltmx.skin.BORDER_STYLE_PLAIN,  
        borderWidth: 5  
    },  
    fonts: {  
        fontColor: "ea5075",  
        fontFamily: "Serif",  
        fontSize: '100',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_NORMAL  
    },  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

* * *

</details>
<details close markdown="block"><summary>fontColor Property</summary>

* * *

Specifies the font color of the widget.

### Syntax

```

fontColor
```

### Type

Color constant or Hexadecimal number

### Read/Write

Read + Write

### Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the fontColor property.

```
Form1.btn1.fontColor = "ea5075";
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>fontFamily Property</summary>

* * *

Specifies the font family for the font of the widget.

### Syntax

```

fontFamily
```

### Type

String

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the fontFamily property.

```
 Form1.btn1.fontFamily = "Serif";
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>fontSize Property</summary>

* * *

Specifies the font size for the widget in percentage (%) units.

### Syntax

```

fontSize
```

### Type

Number

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the fontSize property.

```
 Form1.btn1.fontSize = 150;
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>fontStyle Property</summary>

* * *

Specifies the font style for the widget.

### Syntax

```

fontStyle
```

### Type

Constant

### Read/Write

Read + Write

### Remarks

*   This property can have the following constant values:
    
    *   **voltmx.skin.FONT\_STYLE\_NONE**: Constant for the normal font style.
    *   **voltmx.skin.FONT\_STYLE\_ITALIC**: Constant for the italic font style.
    *   **voltmx.skin.FONT\_STYLE\_UNDERLINE**: Constant for the underline font style.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the fontStyle property.

```
Form1.btn1.fontStyle = voltmx.skin.FONT_STYLE_NONE;
```

### Platform Availability

*   Android
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>fontWeight Property</summary>

* * *

Specifies the weight for the font of the widget.

### Syntax

```

fontWeight
```

### Type

Constant

### Read/Write

Read + Write

### Remarks

*   This property can have the following constant values:
    
    *   **voltmx.skin.FONT\_WEIGHT\_NORMAL**: Constant for the normal font weight.
    *   **voltmx.skin.FONT\_WEIGHT\_BOLD**: Constant for the bold font weight.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the fontWeight property.

```
Form1.btn1.fontWeight = voltmx.skin.FONT_WEIGHT_NORMAL;
```

### Platform Availability

*   Android
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>groupCells Property</summary>

* * *

Specifies if all the rows in the ListBox should be grouped using a rounded corner background and border.

### Syntax

```

groupCells
```

### Type

Boolean

### Read/Write

No

### Remarks

The default value for the property is false.

*   If set to _true_, the cells will have a rounded border.
*   If set to _false_, the cells will not have rounded border.

For the iOS platform, this property is applicable only when [viewType](#viewType) is set as LISTBOX\_VIEW\_TYPE\_TABLEVIEW.

### Example

```
//Sample code to set the groupCells property of a ListBox widget.  
  
frmList.myList.groupCells=true;
```

### Platform Availability

*   Available in the IDE
*   iPad
*   iPhone

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

Number, String, and Constant

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
/*Sample code to set the height property for a ListBox widget by using DP, Percentage and Pixels.*/
frmList.myList.height="50dp";

frmList.myList.height="10%";

frmList.myList.height="10px";

```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>hoverSkin Property</summary>

* * *

Specifies the look and feel of a widget when the cursor hovers on the widget.

### Syntax

```

hoverSkin
```

### Type

String

### Read/Write

Read + Write

### Example

```
//Sample code to set the hoverSkin property of a ListBox widget.  
  
frmList.myList.hoverSkin="hSkin";
```

### Platform Availability

*   Available in the IDE
*   Windows

* * *

</details>
<details close markdown="block"><summary>hoverStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget.

### Syntax

```

hoverStateSkinProperties
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the hoverSkin property of the configured skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the hoverStateSkinProperties property.

```
 Form1.btn1.hoverStateSkinProperties = {  
     background: {  
        backgroundType: voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT,  
        backgroundColorMultiStepGradient : {  
            gradientType: voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP,  
            colors: ["ea5075", "f1fa70", "eefd04"],  
            colorStops: [0, 90, 100]  
        }  
    },  
    border: {  
        borderType: voltmx.skin.BORDER_TYPE_SINGLE_COLOR,  
        borderColor: "ea5075",  
        borderStyle: voltmx.skin.BORDER_STYLE_PLAIN,  
        borderWidth: 5  
    },  
    fonts: {  
        fontColor: "ea5075",  
        fontFamily: "Serif",  
        fontSize: '100',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_NORMAL  
    },  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }
```

### Platform Availability

*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

* * *

</details>
<details close markdown="block"><summary>hExpand Property</summary>

* * *

Specifies if the widget should occupy all the width available to it.

### Syntax

```

hExpand
```

### Type

Boolean

### Read/Write

No

### Remarks

The default value for the property is true.

*   If set to _false,_ the widget occupies the preferred width. The preferred width of a widget is the sum of its contents width, padding and margin.
*   If set to _true,_ the widget ensures that the entire width available to it is occupied.

![Widget when the Expand horizontal is set to true ](Resources/Images/Expand_Horizontal.png)

Mobile Web does not support the Expand property. This is because a widget in a Mobile Web cannot expand or contract based on the neighboring widget (default behavior of a widget in a Mobile Web).

### Example

```
//Sample code to set the hExpand property of a ListBox widget.  
  
frmList.myList.hExpand =true;
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms except and SPA

* * *

</details>
<details close markdown="block"><summary>id Property</summary>

* * *

id is a unique identifier of ListBox consisting of alpha numeric characters. Every ListBox should have a unique id within a Form.

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
//Defining the properties for Listbox with the id:"listbx"
var listBasic = {
    id: "listbx",
    isVisible: true,
    masterData: [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"]
    ],
    skin: "listSkin",
    focusSkin: "listFSkin"
};

var listLayout = {
    widgetAlignment: constants.WIDGET_ALIGN_CENTER,
    padding: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    containerWeight: 40,
    hExpand: false
};

var listPSP = {};

//Creating the Listbox	
var listbx = new voltmx.ui.ListBox(listBasic, listLayout, listPSP);

//Reading the id of the listbox		
alert("listbox Id ::" + listbx.id);
```

  
### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

> **_Note:_** This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```
var inf = {
    a: 'hello'
};
widget.info = inf; //works
widget.info.a = 'hello world'; //This will not update the widget.info property to Hello world. widget.info.a will have old value as hello.
```

### Syntax

```

info
```

### Type

JSObject

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set info property for a ListBox widget.

frmList.myList.info = {
    key: "listboxitems"
};

//Reading the info of the ListBox widget.
voltmx.print("Map widget info:" +frmList.myList.info);

```

### Accessible from IDE

No

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>inputAccessoryViewType Property</summary>

* * *

While building iPhone applications that support or provide text input, it is necessary to create some extra buttons (or other controls) beyond the ones provided by the default keyboard interface. VoltMX Iris by default, adds the Previous, Next, and Done buttons to the applicable input controls. These buttons allow specific operations needed by your application, such as moving to the next or previous text field, making the keyboard disappear and so on. The area above the keyboard is known as Input Accessory View.

### Syntax

```

inputAccessoryViewType
```

### Type

Number

### Read/Write

Yes

### Remarks

The default value for this property is LISTBOX\_INPUTACCESSORYVIEW\_DEFAULT.

This property, allows you to specify the type of accessory view that will be shown for all the input controls for **Listbox** widget.

> **_Note:_** For iOS, a header with 'Prev' and Next' buttons is added to the keypad by default. You can turn off this header at three levels: application-level, form-level, and widget-level.

To know more about how to set inputAccessoryViewType property at application-level and form-level, you can refer the [inputAccessoryViewType](FlexForm_Properties.md#inputAcc) property under Flexform widget.

To turn on/off the header at widget-level, assign any of the following constants to inputAccessoryViewType property. You must specify each constant with the ‘constants.xx’ prefix.

*   LISTBOX\_INPUTACCESSORYVIEW\_NONE: Use this option if you do not want to specify the toolbar. This option should be used carefully, as setting this option for widgets like calendar leaves the user with no option to select and drop-down a wheel calendar.
*   LISTBOX\_INPUTACCESSORYVIEW\_DEFAULT: Specifies that the toolbar that is defined in the Application level settings. To set the Application level settings, right-click on the project and navigate to **Properties> Native App>iPhone/iPad.**  
    
*   LISTBOX\_INPUTACCESSORYVIEW\_NEXTPREV: Specifies the navigation options as Next, Previous, and Done for a form.

*   LISTBOX\_INPUTACCESSORYVIEW\_CANCEL: Specifies that the input accessory view has a Cancel button. This option does not trigger any events.

### Example

```
//Sample code to set inputAccessoryViewType property for a ListBox widget.

frmList.myList.inputAccessoryViewType= constants.LISTBOX_INPUTACCESSORYVIEWTYPE_DEFAULT;
```

### Platform Availability

*   Available in the IDE
*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the form.

**Default:** _true_

If set to _false,_ the widget is not displayed.

If set to _true,_ the widget is displayed.

### Syntax

```

isVisible
```

### Type

Boolean

### Read/Write

Yes - (Read and Write)

### Remarks

You can also set the visibility of a widget dynamically from code using the setVisibility method.

### Example

```
//Sample code to set isVisible property for a ListBox widget.

frmList.myList.isVisible= true;
```

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>itemDisabledSkin Property</summary>

* * *

This property is used to set the skin for the disabled list items mentioned in the [disabledKeys](#disabledKeys) property. If you have not provided any value to the `disabledKeys` property, then even if you have set a value to the `itemDisabledSkin` property, no list item will be displayed with that skin.

Refer the table [here](#disabledtable) to know the combinations of skins and `disabledKeys` and the priority in which they are displayed.

You can assign value to the `itemDisabledSkin` property when the value of [viewType](#viewType) property is `LISTBOX_VIEW_TYPE_EDITVIEW` or `LISTBOX_VIEW_TYPE_LISTVIEW`.

> **_Note:_** The `itemDisabledSkin` property is applicable only for the New CSS library mode. This property will not work in the legacy JS library mode.

### Syntax

```

itemDisabledSkin
```

### Type

String

The default skin of the disabled list item displays the text of the item in grey font color.

### Read/Write

Read + Write

### Limitations

*   You cannot assign border and background image to the `itemDisabledSkin` when the value of `viewType` property is `LISTBOX_VIEW_TYPE_LISTVIEW`. This is a native browser limitation.

### Example

```
//Sample code to set the itemDisabledSkin property of a ListBox widget.
frmList.myList.itemDisabledSkin= "mydDisabledSkinValue";
```

### Platform Availability

*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>itemHoverSkin Property</summary>

* * *

This property is used to set the skin that is displayed when the mouse cursor moves around the the enabled list items inside the ListBox widget. itemHoverSkin property is not assigned to the list items set in the [disabledKeys](#disabledKeys) property.

Refer the table [here](#disabledtable) to know the combinations of skins and `disabledKeys` and the priority in which they are displayed.

You can assign value to the `itemHoverSkin` property when the value of [viewType](#viewType) property is `LISTBOX_VIEW_TYPE_EDITVIEW.`

> **_Note:_** The `itemHoverSkin` property is applicable only for the New CSS library mode. This property will not work in the legacy JS library mode.

### Syntax

```

itemHoverSkin
```

### Type

String

### Read/Write

Read+Write

### Remarks

*   When both [hoverSkin](#hoverSkin) and `itemHoverSkin` are applied to the ListBox widget, then `itemHoverSkin` takes priority. This means that instead of `hoverSkin`, `itemHoverSkin` is applied to all the enabled list items.

### Example

```
//Sample code to set the itemHoverSkin property of a ListBox widget.
frmList.myList.itemHoverSkin= "myhoverSkinValue";
```

### Platform Availability

*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>itemNormalSkin Property</summary>

* * *

This property is used to set the skin for the enabled list items inside a ListBox widget. itemNormalSkin property is not assigned to the list items set in the [disabledKeys](#disabledKeys) property.

Refer the table [here](#disabledtable) to know the combinations of skins and `disabledKeys` and the priority in which they are displayed.

You can assign value to the `itemNormalSkin` property when the value of [viewType](#viewType) property is `LISTBOX_VIEW_TYPE_EDITVIEW` or `LISTBOX_VIEW_TYPE_LISTVIEW`.

> **_Note:_** The `itemNormalSkin` property is applicable only for the New CSS library mode. This property will not work in the legacy JS library mode.

### Syntax

```

itemNormalSkin
```

### Type

String

### Read/Write

Read + Write

### Limitations

*   You cannot assign border and background image to the `itemNormalSkin` when the value of `viewType` property is `LISTBOX_VIEW_TYPE_LISTVIEW`. This is a native browser limitation.

### Example

```
//Sample code to set the itemNormalSkin property of a ListBox widget.
frmList.myList.itemNormalSkin = "myNormalSkinValue3";
```

### Platform Availability

*   Desktop Web

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
<details close markdown="block"><summary>lockTextScroll Property</summary>

* * *

This property allows you to enable/disable the horizontal scrolling for the selected item in the ListBox Widget.

### Syntax

```

lockTextScroll
```

### Type

Boolean

### Read/Write

Yes - (Read and Write)

### Remarks

**Default:**_false_

If set to _true,_ the scrolling for the selected item is disabled

If set to _false,_ the scrolling for the selected item is enabled

### Example

```
//Sample code to set lockTextScroll property for a ListBox widget.

frmList.myList.lockTextScroll = true;                            
```

### Accessible from IDE

No

### Platform Availability

Windows

* * *

</details>
<details close markdown="block"><summary>masterData Property</summary>

* * *

Specifies the set of values that must be displayed for the user to make a selection from the available choices.

### Syntax

```

masterData
```

### Type

Array

### Read/Write

Yes (Read and Write)

### Remarks

**Default:** _User Defined_ (You must specify the key and the display value)

To specify the set of values, click the Ellipsis (![](Resources/Images/ellipsis_button.png)) button against the property to open the MasterData for ListBox window.

In the Master Data window, you can specify the _Key_, _Display Value_, _i18N Key_, and the Accessibility Config.  
  
You can use the _Selected_ column to specify the choice to be shown as selected when rendered. You can do this by selecting _true_ against the choice that you wish to show as selected.

Select the _Use as test data in preview mode_ option if you want to see the data you enter in the Master Data when you Quick Preview. (For more information on Quick Preview, see the _VoltMX Iris User Guide_.

If the key or the display value is _null/nil_, the value will not be listed as one of the available choices.

The accessibilityConfigObject is optional and the object should contain the keys as defined in the accessibilityConfig property.

//Format of the masterData property \[ \["key1","value1",accessibilityConfigObject\], \["key2","value2",accessibilityConfigObject\], \["keyn","valuen",accessibilityConfigObject\] \]

### Example

```
//Sample code to set masterData property for a ListBox widget.  
  
//Format of the masterData property with accessibility Object

var dataAccessibility=[
    ["key1", "value1", accessibilityConfigObject],
    ["key2", "value2", accessibilityConfigObject],
    ["keyn", "valuen", accessibilityConfigObject]
];  
frmList.myList.masterData=dataAccessibility;  
//Format of the masterData property without accessibility Object
var dataList = [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
];
frmList.myList.masterData= dataList;
```

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>masterDataMap Property</summary>

* * *

Specifies the set of values from which you can make selections.You must specify a key and a value in a master data map.

### Syntax

```

masterDataMap
```

### Type

Array

### Read/Write

Yes - (Read and Write)

### Remarks

This is a **non-Constructor property**. You cannot set this property through widget constructor. But you can always read and write data to it.

This property is applicable only if the [masterData](#masterDa) is not set. You must use either the [masterData](#masterDa) or the masterDataMap to set data for the CheckBox.

You must specify a key, value, and the accessibilityConfig in a master data map.

The accessibilityConfig is the standard key expected in each items data array. It is optional and the object should contain the keys as defined in the accessibilityConfig property.

If the key or the value is _null/nil_, the value will not be listed as one of the available choices.

### Example

```
//Sample code to set masterDataMap property for a ListBox widget.  
  
//Format of the masterDataMap property without accessibility Object
var list = [
    [{
        "mykey": "key1",
        "myvalue": "value1"
    }, {
        "mykey": "key2",
        "myvalue": "value2"
    }, {
        "mykey": "key3",
        "myvalue": "value3"
    }], "mykey", "myvalue"
];  
frmList.myList.masterDataMap=list;  
//Format of the masterDataMap property with accessibility Object
var listAccessibility =[
    [{
        "mykey": "key1",
        "myvalue": "value1",
        "accessibilityConfig": acObject
    }, {
        "mykey": "key2",
        "myvalue": "value2",
        "accessibilityConfig": acObject
    }, {
        "mykey": "key3",
        "myvalue": "value3",
        "accessibilityConfig": acObject
    }],
    "mykey", "myvalue"
];
frmList.myList.masterDataMap= listAccessibility;
```

### Accessible from IDE

No

### Platform Availability

Available on all platforms.

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
<details close markdown="block"><summary>multiSelect Property</summary>

* * *

Specifies if the widget allows multiple values to be selected from the drop down list.

**Default:** false

If set to true, an additional property [multiSelectRows](#multiSel2) is displayed.

### Syntax

```

multiSelect
```

### Type

Boolean

### Read/Write

No

### Example

```
//Sample code to set multiSelect property for a ListBox widget.  
  
frmList.myList.multiSelect=true;
```

### Accessible from IDE

Yes

### Platform Availability

This property is available on Desktop Web

* * *

</details>
<details close markdown="block"><summary>multiSelectRows Property</summary>

* * *

Specifies the number of visible rows in the ListBox. A ListBox in Desktop Web can grow to any length. This property is used to restrict the number of rows visible in a ListBox.

> **_Note:_** This property is displayed only when the [multiSelect](#multiSel) is set to _true_.

**Default:**

none

### Syntax

```

multiSelectRows
```

### Type

Number

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set multiSelectRows property for a ListBox widget.  
  
frmList.myList.multiSelectRows=5;
```

### Accessible from IDE

Yes

### Platform Availability

This property is available on Desktop Web

* * *

</details>
<details close markdown="block"><summary>nativeListFieldSkin Property</summary>

* * *

Specifies the skin that is applied to each item in the native popup that appears when you click on the ListBox.

### Syntax

```

nativeListFieldSkin
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set nativeListFieldSkin property for a ListBox widget.  
  
frmList.myList.nativeListFieldSkin="nativeListNormalSkin";
```

  
### Accessible from IDE

Yes

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>nativeListFieldFocusSkin Property</summary>

* * *

Specifies the skin that is applied to a focused item in the native popup that appears when you click on the ListBox.

### Syntax

```

nativeListFieldFocusSkin
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set nativeListFieldFocusSkin property for a ListBox widget.  
  
frmList.myList.nativeListFieldFocusSkin="nativeListFSkin";
```

  
### Accessible from IDE

Yes

### Platform Availability

*   Android

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
<details close markdown="block"><summary>padding Property</summary>

* * *

This property defines the space between the content of the widget and the widget boundaries. You can use this option to define the top, left, right, and bottom distance between the widget content and the widget boundary.

When you are defining the padding (for any platform) the _first_ time, the value that you enter in the padding field (top, left, right, or bottom) is auto-populated across all the platforms.

The following image illustrates a widget with a defined padding:

![](Resources/Images/Padding.png)

### Syntax

```

padding
```

### Type

Array of Numbers

### Read/Write

Yes - (Read and Write)

### Remarks

Due to Browser restrictions, you cannot apply Padding for a [ListBox](ListBox.md) on Mobile Web platform.

If no skin is applied to a Button, then Padding is not supported on iPhone. This is due to iOS Safari browser limitation. If you want the padding to be applied, apply a skin to the button and then apply padding.

### Example

```
//Sample code to set padding property for a ListBox widget.  
  
frmList.myList.padding=[10, 10, 10, 0];
```

### Platform Availability

*   Available in IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>paddingInPixel Property</summary>

* * *

Indicates if the padding is to be applied in pixels or in percentage.

**Default:** _false_

If set to _true,_ the padding is applied in pixels.

If set to _false,_ the padding is applied as set in [padding](#padding) property.

> **_Note:_** This property can be set to _true_ or _false_ only for iPhone, iPad, and Android. On other platforms this property does not give any results even when set to _true_.

> **_Note:_** For backward compatibility on older projects, this property is will be made _true_ for iPhone, iPad, and Android and for other platforms it will be _false_.

### Syntax

```

paddingInPixel
```

### Type

Boolean

### Read/Write

Read only

### Example

```
//Sample code to set paddingInPixel property for a ListBox widget.  
  
frmList.myList.paddingInPixel =true;
```

### Platform Availability

*   Available on all platforms.

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
<details close markdown="block"><summary>placeholder Property</summary>

* * *

Specifies the temporary or substitute text (a hint provided as a word or phrase) that must be displayed on the ListBox until the actual selection is made. If you do not specify the placeholder text, the first option in the list is shown as the selected value.

If placeholder is set then by default (without user selecting any option) selectedKey and selectedKeyValue properties will return **null/nil**.

If placeholder is not set then by default the first entry should be shown as selected and selectedKey and selectedKeyValue properties will return the first options key-value pair.

### Syntax

```

placeholder
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set placeholder property for a ListBox widget.  
  
frmList.myList.placeholder="Please select a value";
```

### Accessible from IDE

Yes

### Platform Availability

*   iPad
*   iPhone
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>placeholderSkin Property</summary>

* * *

This property reads the font color set in the skin and ignores the other attributes.Android does not support setting a background color for a placeholder.

### Syntax

```

placeholderSkin
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set placeholderSkin property for a ListBox widget.  
  
frmList.myList.placeholderSkin="plcHolderSkn";
```

### Accessible from IDE

Yes

### Platform Availability

This property is available on Android/Android Tablet platform only.

* * *

</details>
<details close markdown="block"><summary>popupIcon Property</summary>

* * *

Specifies the icon that appears in the title area of the popup (on the top left side of the popup). For the popup to appear, you have to expand or click the Listbox.

### Syntax

```

popupIcon
```

### Type

String / image Object

### Read/Write

No

### Remarks

**Default:** empty

You can create an image Object by using voltmx.image Namespace functions.

The figure below depicts how a Popup Icon in a List Box looks:

> ![](Resources/Images/listbox_popup_icon_189x227.png)

### Example

Using a local resource for the popup icon:

```
/*Sample code to set the popupIcon property of a ListBox widget where icon.png is an image file in the resources folder.*/
frmList.myList.popupIcon="icon.png";
```

Using an image object (voltmx.image) for the popup icon:

```
/*Sample code to set the popupIcon property of a ListBox widget where local.png is an image file in the resources folder.*/  
  
var imgObjRef = voltmx.image.createImage("local.png");  
frmList.myList.popupIcon=imgObjRef;
```

### Accessible from IDE

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>popupTitle Property</summary>

* * *

Specifies the Title text to be displayed for the Listbox.

**Default:**_Please Select_ (This is the default text that will appear as the title of the Listbox)

![](Resources/Images/Title_text_Listbox.png)

### Syntax

```

popupTitle
```

### Type

String

### Read/Write

No

### Example

```
//Sample code to set the popupTitle property of a ListBox widget.  
  
frmList.myList.popupTitle="List of items";
```

### Accessible from IDE

Yes

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>popupTitleBackgroundColor Property</summary>

* * *

The property helps you change the background color of the ListBox title.

You can specify the color in the RGBA hex format. The format could be 0xRGBA or RGBA. The RGBA format followed is the standard RGBA format and is not the same as the RGBA color code generated by VoltMX Iris IDE for skins.

For example, the formats, 0xFF0000FF and FF0000FF are valid for red.

### Syntax

```

popupTitleBackgroundColor
```

### Type

String

### Read/Write

Read + Write

### Example

```
//Sample code to set the popupTitleBackgroundColor property of a ListBox widget.
frmList.myList.popupTitleBackgroundColor = "ff0000ff";
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>pressedStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked.

### Syntax

```

pressedStateSkinProperties
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   This property does not have a default value.
*   This property has more priority than (and overrides) the pressedSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the pressedStateSkinProperties property.

```
Form1.btn1.pressedStateSkinProperties = {  
     background: {  
        backgroundType: voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT,  
        backgroundColorMultiStepGradient : {  
            gradientType: voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP,  
            colors: ["ea5075", "f1fa70", "eefd04"],  
            colorStops: [0, 90, 100]  
        }  
    },  
    border: {  
        borderType: voltmx.skin.BORDER_TYPE_SINGLE_COLOR,  
        borderColor: "ea5075",  
        borderStyle: voltmx.skin.BORDER_STYLE_PLAIN,  
        borderWidth: 5  
    },  
    fonts: {  
        fontColor: "ea5075",  
        fontFamily: "Serif",  
        fontSize: '100',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_NORMAL  
    },  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }
```

### Platform Availability

*   Android

* * *

* * *

</details>
<details close markdown="block"><summary>retainContentAlignment Property</summary>

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

### Syntax

```

retainContentAlignment
```

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

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

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>retainFlexPositionProperties Property</summary>

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

### Syntax

```

retainFlexPositionProperties
```

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

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

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>retainFlowHorizontalAlignment Property</summary>

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

### Syntax

```

retainFlowHorizontalAlignment
```

### Type

Boolean

### Read/Write

No (only during widget-construction time)

### Example

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

### Platform Availability

*   Available in IDE
*   Windows, iOS, Android, and SPA

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
<details close markdown="block"><summary>selectedKey Property</summary>

* * *

Represents the key that is shown as selected.

If you do not select a value, the return value is _null/nil_.

### Syntax

```

selectedKey
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the selectedKey property of a ListBox widget.  
  
frmList.myList.masterData = [
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
];
frmList.myList.selectedKey = "key1";
```

### Accessible from IDE

No

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>selectedKeys Property</summary>

* * *

Returns the keys from the data representing the selected keys.

If you set the selectedkeys to _null/nil_, the selection is cleared.

### Syntax

```

selectedKeys
```

### Type

Array

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the selectedKeys property of a ListBox widget.  
  
frmList.myList.masterData = [
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
];
frmList.myList.selectedKeys = ["key1", "key2"];
```

### Accessible from IDE

No

### Platform Availability

Available on Desktop Web platform only

* * *

</details>
<details close markdown="block"><summary>selectedKeyValue Property</summary>

* * *

Returns the array of selected key-value pair.

If you do not select a value, the return value is _null/nil_.

### Syntax

```

selectedKeyValue
```

### Type

Array

### Read/Write

Yes - (Read only)

### Example

```
//Sample code to read the selectedKeyValue property of a ListBox widget.  
  
frmList.myList.masterData = [
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
];
frmList.myList.selectedKey = "key1";  
	
alert("The selected key value of the listbox is::"+frmList.myList.selectedKeyValue);  

```

### Accessible from IDE

No

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>selectedKeyValues Property</summary>

* * *

Returns the array of selected key-value pair from the data representing the selected key and value.

If you do not select a value, the return value is _null/nil_.

### Syntax

```

selectedKeyValues
```

### Type

Array

### Read/Write

Yes - (Read only)

### Example

```
//Sample code to read the selectedKeyValues property of a ListBox widget.  
  
frmList.myList.masterData = [
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
];
frmList.myList.selectedKeys = ["key1", "key2"];  
	
alert("The selected key value of the listbox is::"+frmList.myList.selectedKeyValues);  

```

### Accessible from IDE

No

### Platform Availability

Available on Desktop Web platform only

* * *

</details>
<details close markdown="block"><summary>shadowColor Property</summary>

* * *

Specifies the color for the shadow of the widget.

### Syntax

```

shadowColor
```

### Type

Color constant or Hexadecimal number

### Read/Write

Read + Write

### Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowColor property.

```
Form1.btn1.shadowColor = "ea5075";
```

### Platform Availability

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>shadowDepth Property</summary>

* * *

Defines the depth of the shadow effect applied to the ListBox Widget.

### Syntax

```

shadowDepth
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The depth of the shadow should be specified in DP (Device Independent Pixels) units. The higher the value of shadowDepth, the appearance of the ListBox Widget is elevated from the screen and the casted shadow becomes soft.

### Example

```
 //Sample code to set the shadowDepth property of a ListBox widget.
frmList.myList.shadowDepth = 10;
```

### Platform Availability

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary>shadowOffset Property</summary>

* * *

This property specifies the current coordinates of the shadow region in the widget.

### Syntax

```

shadowOffset
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowOffset property.

```
Form1.btn1.shadowOffset= {
    "x": "3",
    "y": "27"
};
```

### Platform Availability

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>shadowRadius Property</summary>

* * *

Specifies the radius for the blur value of the shadow.

### Syntax

```

shadowRadius
```

### Type

Number

### Read/Write

Read + Write

### Remarks

*   The default value of the shadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the shadowRadius property.

```
 Form1.btn1.shadowRadius = 6;
```

### Platform Availability

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>shadowType Property</summary>

* * *

Sets a type of the shadow effect to apply to the ListBox Widget.

### Syntax

```

shadowType
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The property specifies a shape to the widget's shadow that is cast. You can apply any one of the following shadow types:

_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular bounds.

_PADDED\_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular padded bounds.

_BACKGROUND\_SHADOW_: Shadow matches the widget's background. This is the default value.

### Example

```
//Sample code to set shadowType property of a ListBox widget.
frmList.myList.shadowType = constants.VIEW_BOUNDS_SHADOW;
```

### Platform Availability

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary>showAppMenu Property</summary>

* * *

This property provides you to show or hide the app menu when the dialog is open.

**Default:**_true_

When this property is set to true, the app menu is visible.

When this property is set to false, the app menu is hidden.

### Syntax

```

showAppMenu
```

### Type

Boolean

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the showAppMenu property of a ListBox widget.
frmList.myList.showAppMenu=true;
```

### Accessible from IDE

No

### Platform Availability

Windows platform

* * *

</details>
<details close markdown="block"><summary>singleLineText Property</summary>

* * *

When the [singleLineText](#singleLi) property is set to 'true', this property controls the position of the ellipses (...), in the selected option text.

**Default:**_False_

### Syntax

```

singleLineText
```


### Type

Boolean

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the singleLineText property of a ListBox widget.
frmList.myList.singleLineText=true;
```

### Accessible from IDE

No

### Platform Availability

*   Android/Android tablet
*   Windows

### Remarks

*   For Windows: If you set the value of the singleLineText property as 'true', the textTruncatePosition, singleLineTextInPopup, and textTruncatePositionInPopup properties are not considered. So, if the length of the text in the ListBox is more than the available space, the selected options text and the popup options text are displayed in a truncated manner, i.e., in a single line with ellipses (...). The position of the ellipses is always at the end of the text line.

* * *

</details>
<details close markdown="block"><summary>singleLineTextInPopup Property</summary>

* * *

When thIS property is set to true, this property controls the position of the ellipses (...), in the popup options text.

**Default:**_False_

### Syntax

```

singleLineTextInPopup
```

### Type

Boolean

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the singleLineTextInPopup property of a ListBox widget.
frmList.myList.singleLineTextInPopup=true;
```

### Accessible from IDE

No

### Platform Availability

This property is available on Android/Android Tablet platform

* * *

</details>
<details close markdown="block"><summary>skin Property</summary>

* * *

Specifies a background skin for ListBox widget.

> **_Note:_** For Desktop Web platform, Chrome browser does not support if the properties defined in font tab are different for skin and [focusSkin](#focusSki).

> **_Note:_** For iOS platform, only background color is supported.

### Syntax

```

skin
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the skin property of a ListBox widget.
frmList.myList.skin="listSkin";
```

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>textShadowColor Property</summary>

* * *

Specifies the color for the text shadow of the widget.

### Syntax

```

textShadowColor
```

### Type

Color constant or Hexadecimal number

### Read/Write

Read + Write

### Remarks

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowColor property.

```
Form1.btn1.textShadowColor = "ea5075";
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>textShadowOffset Property</summary>

* * *

This property specifies the current coordinates of the text shadow region in the widget.

### Syntax

```

textShadowOffset
```

### Type

JSON Object

### Read/Write

Read + Write

### Remarks

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowOffset property.

```
Form1.btn1.textShadowOffset = {
    "x": "2",
    "y": "24"
};
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>textShadowRadius Property</summary>

* * *

Specifies the radius for the blur value of the text shadow.

### Syntax

```

textShadowRadius
```

### Type

Number

### Read/Write

Read + Write

### Remarks

*   The default value of the textShadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

### Example

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowRadius property.

```
 Form1.btn1.textShadowRadius = 6;
```

### Platform Availability

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>textTruncatePosition Property</summary>

* * *

If the length of the text is more than the available space, the selected options text and the popup options text are displayed in a truncated manner, in a single line with ellipses (...). The position of the ellipses is controlled by the textTruncatePosition property. The default ellipses position is at the end of the line if textTruncatePosition property is not set.

### Syntax

```

textTruncatePosition
```

### Type

Number

### Read/Write

Yes - (Read and Write)

### Remarks

The options are:

constants.TEXT\_TRUNCATE\_START

constants.TEXT\_TRUNCATE\_MIDDLE

constants.TEXT\_TRUNCATE\_END

constants.TEXT\_TRUNCATE\_NONE (This value is applicable only for iOS.)

**Default Value:**

*   For Android: constants.TEXT\_TRUNCATE\_END
*   For iOS: constants.TEXT\_TRUNCATE\_MIDDLE

### Example

```
//Sample code to set the textTruncatePosition property of a ListBox widget.
frmList.myList.textTruncatePosition= constants.TEXT_TRUNCATE_MIDDLE;
```

### Accessible from IDE

No

### Platform Availability

*   Android/Android tablet
*   iOS

* * *

</details>
<details close markdown="block"><summary>textTruncatePositionInPopup Property</summary>

* * *

If the length of the text is more than the space available, the popup options text will be displayed truncated, in a single line with (...) ellipses. The position of the ellipses is controlled by textTruncatePositionInPopup property. The default ellipses position is at the end of the line if textTruncatePositionInPopup property is not set.

### Syntax

```

textTruncatePositionInPopup
```

### Type

Number

### Read/Write

Yes - (Read and Write)

### Remarks

The options are:

constants.TEXT\_TRUNCATE\_START

constants.TEXT\_TRUNCATE\_MIDDLE

constants.TEXT\_TRUNCATE\_END


**Default:**constants.TEXT\_TRUNCATE\_END

### Accessible from IDE

No

### Platform Availability

This property is available on Android/Android Tablet platform

### Example

```
//Sample code to set the textTruncatePositionInPopup property of a ListBox widget.
frmList.myList.textTruncatePositionInPopup= constants.TEXT_TRUNCATE_MIDDLE;
```

### Accessible from IDE

No

### Platform Availability

This property is available on Android/Android Tablet platform

* * *

</details>
<details close markdown="block"><summary>tickedImage Property</summary>

* * *

Specifies the image to be displayed when you make a selection.

### Syntax

```

tickedImage
```

### Type

String / image Object

### Read/Write

No

### Remarks

> **_Note:_** If you specify a ticked Image, ensure that you also specify an [unTickedimage](#unticked). If not specified, the behavior will be undefined.

> **_Note:_** You can create an image Object by using voltmx.image Namespace functions.

### Example

Using a string to define a local resource for the image:

```
 /*Sample code to set the tickedImage property of a ListBox widget where tickImg.png is an image file in the resources folder.*/
frmList.myList.tickedImage="tickImg.png";

```

Using an image object (voltmx.image) to define the image:

```
 /*Sample code to set the tickedImage property of a ListBox widget where local.png is an image file in the resources folder.*/
var imgObjRef = voltmx.image.createImage("local.png");
frmList.myList.tickedImage=imgObjRef;

```

### Platform Availability

### Accessible from IDE

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>titleAlignment Property</summary>

* * *

The property helps you align the title of the ListBox Widget.

### Syntax

```

titleAlignment
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The following are the possible values that you can specify for the property.

*   LISTBOX\_TITLE\_ALIGN\_LEFT - Aligns the title to left. This is the default value.
*   LISTBOX\_TITLE\_ALIGN\_CENTER - Aligns the Title to center.
*   LISTBOX\_TITLE\_ALIGN\_RIGHT - Aligns the Title to right.

> **_Note:_** If you specify any value other than the preceding values, the default value is set.

### Example

```
//Sample code to set the titleAlignment property of a Listbox widget.
frmList.myList.titleAlignment = constants.LISTBOX_TITLE_ALIGN_RIGHT;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>titleIconAlignment Property</summary>

* * *

The property helps you align the title icon of the ListBox Widget.

### Syntax

```

titleIconAlignment
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The following are the possible values that you can specify for the property.

*   LISTBOX\_TITLE\_ICON\_ALIGN\_LEFT - Aligns the Title icon to the left. This is the default value.
*   LISTBOX\_TITLE\_ICON\_ALIGN\_RIGHT - Aligns the Title icon to the right.

> **_Note:_** If you specify any value other than the preceding values, the default value is set.

### Example

```
//Sample code to set the titleIconAlignment property of a ListBox widget.
frmList.myList.titleIconAlignment = constants.LISTBOX_TITLE_ICON_ALIGN_RIGHT;
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>toolTip Property</summary>

* * *

Specifies the hint text when the cursor hovers over a widget, without clicking it. The text entered in the tooltip appears as a small box when the cursor hovers over a widget.

### Syntax

```

toolTip
```

### Type

String

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the toolTip property of a ListBox widget.
frmList.myList.toolTip= "sample text";
```

### Accessible from IDE

Yes

### Platform Availability

*   Windows

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
<details close markdown="block"><summary>unTickedImage Property</summary>

* * *

Specifies the image to be displayed when a selection is cleared.

### Syntax

```

unTickedImage
```

### Type

String / image Object

### Read/Write

No

### Remarks

> **_Note:_** If you specify an unTickedImage, ensure that you also specify a [tickedImage](#tickedIm). If not specified, the behavior will be undefined.

> **_Note:_** You can create an image Object by using voltmx.image Namespace functions.

### Example

Defining the image using a local resource:

```
 /*Sample code to set the untickedImage property of a ListBox widget where untickImg.png is an image file in the resources folder.*/
frmList.myList.untickedImage="untickImg.png";

```

Defining the image using an image object (voltmx.image):

```
 /*Sample code to set the untickedImage property of a ListBox widget where local.png is an image file in the resources folder.*/
var imgObjRef = voltmx.image.createImage("local.png");
frmList.myList.untickedImage=imgObjRef;

```

### Platform Availability

### Accessible from IDE

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>vExpand Property</summary>

* * *

Specifies if the widget has to occupy all the vertical space available to it.

### Syntax

```

vExpand
```

### Type

Boolean

### Read/Write

No

### Remarks

Mobile Web does not support the Expand property. This is because a widget in a Mobile Web cannot expand or contract based on the neighboring widget (default behavior of a widget in a Mobile Web).

**Default:**_false_

*   If set to _true,_ the widget occupies the entire available height.
*   If set to _false,_ the widget occupies the preferred height.

![Widget when the Expand vertical is set to true ](Resources/Images/Expand_Vertical.png)

### Example

```
//Sample code to set the vExpand property of a ListBox widget.
frmList.myList.vExpand=true;
```

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>viewConfig Property</summary>

* * *

Specifies the view configuration for different viewtypes.

### Syntax

```

viewConfig
```

### Type

JSObject

### Read/Write

Yes - (Read and Write)

### Remarks

You can set the configuration for toggle view.

**toggleViewConfig**: The property to configure the properties of LISTBOX\_VIEW\_TYPE\_TOGGLEVIEW.

**viewStyle**: Accepts the view style. This property is not supported in iOS7 and above versions. Following are the available options:

LISTBOX\_TOGGLE\_VIEW\_STYLE\_PLAIN

LISTBOX\_TOGGLE\_VIEW\_STYLE\_BORDERED

LISTBOX\_TOGGLE\_VIEW\_STYLE\_BAR

**equalSegments**: Specifies the boolean value which indicates if the segments must be equal.

**enableTint**: Specifies the boolean value to enable tintColor property. When this property is set to true, tintColor property is displayed.

**tintColor**: Specifies the tint color in RGB format. The default color is blue.

### Example

```
//Sample code to set the viewConfig property of a ListBox widget.
frmList.myList.viewConfig = {
 toggleViewConfig: {
  equalSegments: true
 }
};
```

### Accessible from IDE

Yes

### Platform Availability

*   iPad
*   iPhone

* * *

</details>
<details close markdown="block"><summary>viewType Property</summary>

* * *

Specifies the view type of the ListBox.

### Syntax

```

viewType
```

### Type

Number

Read/Write

Yes - (Read and Write)

### Remarks

**Default:** LISTBOX\_VIEW\_TYPE\_LISTVIEW

Following are the available options on various platforms:

LISTBOX\_VIEW\_TYPE\_LISTVIEW (applicable on all platforms)

LISTBOX\_VIEW\_TYPE\_TABLEVIEW (applicable on iPhone and iPad platforms)

LISTBOX\_VIEW\_TYPE\_TOGGLEVIEW (applicable on iPhone and iPad platforms)

LISTBOX\_VIEW\_TYPE\_ONSCREENWHEEL (applicable on iPhone and iPad platforms)

LISTBOX\_VIEW\_TYPE\_SPINNER (applicable on Android/Android Tablet only)

LISTBOX\_VIEW\_TYPE\_EDITVIEW (applicable on Desktop Web only)

For toggleView you can further select the View Style as plain, bordered, or bar.

The following images illustrate the modes:

_listView_

If you select the listView and do not specify a selection in the [masterData](#masterDa), the default behavior of the platform is to select the first entry on the list.

![Figure illustrating List View](Resources/Images/List_View_or_Drop_down_view.png)

_tableView_

![Figure Depicting Table View](Resources/Images/Table_View_-_Combo_Box.png)

_toggleView_

![Toggle View - Plain](Resources/Images/ToggleView-_Plain.png)

![Toggle View - Bordered](Resources/Images/ToggleView-_Bordered.png)

![Toggle View - Bar](Resources/Images/ToggleView-_Bar.png)

_onscreenwheel_

![on screen wheel](Resources/Images/On_Screen_Wheel_View.png)

_spinner_

![](Resources/Images/And-Spinner_View.png)

The below image illustrate the nextprevtoolbar set to a listbox. The highlighted toolbar is achieved on setting the Mode as _onscreenwheel_ to the List Box and Input Accessory View Type as _nextprevtoolbar_ to the Form.

![](Resources/Images/nextprevtoolbarwheelmode.png)

For editview viewType

*   Users can use this viewType to change the colour of a drop-down item on hover, which is not possible with the select attribute provided by.html for list. You can customize drop-down items to a great extent and use this to cater to the needs of users with respect to drop-down type widgets in a better manner. This is applicable only for Desktop Web.
*   Assumptions:
    *   The ListBox widget has to be dynamically created in order to use the editview viewType, which is defined as a platform-specific property (pspconfig) for this widget.
        
    *   You can update masterData, selectedKey, editableAreaSkin, viewtType, and autoSuggest.
        
*   Limitations:
    *   The editview viewType is available only in Desktop Web.
        
    *   The editview viewType supports only single select, so there is no option of selectedKeys.
        

### Example (for editview)

```
//Sample code to set the viewType property of a ListBox widget as editview.  
//This is applicable only for Desktop Web platform.
frmList.myList.viewType = constants.LISTBOX_VIEW_TYPE_EDITVIEW;
```

### Example (for changing the color of a drop-down item on hover)

```
div[name="SelectOptionList"]:hover
{
  background-color:" #800000" !important;
    color: "#FFFFFF";
} //Creating a custom CSS of background color (Maroon)

```

### Example (for viewType)

```
//Sample code to set the viewType property of a ListBox widget as LISTBOX_VIEW_TYPE_SPINNER.  
frmList.myList.viewType = constants.LISTBOX_VIEW_TYPE_SPINNER;
```

### Accessible from IDE

Yes

### Platform Availability

*   iPad
*   iPhone
*   Android/Android Tablet ( only Spinner view is available for the platform)

* * *

</details>
<details close markdown="block"><summary>wheelBackgroundColor Property</summary>

* * *

Specifies the background color for the wheel that is displayed when you click the ListBox. This property is applicable only when you set the viewType as LISTBOX\_VIEW\_TYPE\_ONSCREENWHEEL.

### Syntax

```

wheelBackgroundColor
```

### Type

JSObject

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the wheelBackgroundColor property of a ListBox widget.  
frmList.myList.wheelBackgroundColor="0000ff00";
```

### Accessible from IDE

No

### Platform Availability

*   iPad
*   iPhone

* * *

</details>
<details close markdown="block"><summary>widgetAlignment Property</summary>

* * *

Indicates how a widget is to be anchored with respect to its parent. Each of these below options have a horizontal alignment attribute and a vertical alignment attribute. For example, WIDGET\_ALIGN\_TOP\_LEFT specifies the vertical alignment as TOP and horizontal alignment as LEFT.

Default: WIDGET\_ALIGN\_CENTER

The available options are:

*   WIDGET\_ALIGN\_TOP\_LEFT
*   WIDGET\_ALIGN\_TOP\_CENTER
*   WIDGET\_ALIGN\_TOP\_RIGHT
*   WIDGET\_ALIGN\_MIDDLE\_LEFT
*   WIDGET\_ALIGN\_CENTER
*   WIDGET\_ALIGN\_MIDDLE\_RIGHT
*   WIDGET\_ALIGN\_BOTTOM\_LEFT
*   WIDGET\_ALIGN\_BOTTOM\_CENTER
*   WIDGET\_ALIGN\_BOTTOM\_RIGHT

### Syntax

```

widgetAlignment
```

### Type

Number

### Read/Write

No

### Example

```
//Sample code to set the widgetAlignment property of a ListBox widget.  
frmList.myList.widgetAlignment=constants.WIDGET_ALIGN_CENTER;
```

### Accessible from IDE

Yes

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>widgetSwipeMove Property</summary>

* * *

This property is used to enable and configure left or right swipe actions for a widget. The widgetSwipeMove Property can be used for all widgets . The most common use case is for implementing swipe action for individual rows in Segment.

### Syntax

```

widgetSwipeMove
```

### Type

String

### Read/Write

Read + Write

Input Parameters

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 111px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 93px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 184px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Default Value</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translate</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">true</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter. When the value of this parameter is set as true, the widget moves along with the swipe in the same direction.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Xboundaries</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the boundaries of the swipe in the X-axis.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">swipeLeft/swipeRight</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it is used to define the configuration of the widget while swiping to the left/ right. Each <i>swipeLeft</i> or <i>swipeRight</i>parameter is an array of configuration attributes containing <i>translateRange</i> , <i>callback</i> , <i>translatePos</i> , and <i>translate</i>. This JS&nbsp;Object defines the behavior of the widget during the swipe action.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translateRange</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the sub-boundaries for the action when the swipe action ends.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translatePos</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Previous position of the widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it determines the final translation position to be applied to the widget when the widget swipe reaches the <i>translateRange</i> value.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">callback</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">null</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This is an optional parameter and it defines the callback which needs to be triggered when the finger swipe reaches the sub boundary defined in <i>translateRange</i>. The attributes inside this parameter are described in the following table.</td></tr></tbody></table>

The following table consists of the parameters of the _callback_ parameter:

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 111px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 93px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter consists of the widget handle or ID of the widget on which the swipe action has been performed.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">context</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is applicable only for widgets inside the Segment with row templates. Each context parameter consists of <i>rowIndex</i>, <i>sectionIndex</i> and <i>widgetref</i></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">rowIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the row index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">sectionIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the section index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetref</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This parameter stores the handle of the Segment containing the swiped widget.</td></tr></tbody></table>

### Remarks

*   For a Segment, the **widgetSwipeMove** Property is configured while setting the data of the Segment.

> **_Note:_** It is not recommended to assign the widgetSwipeMove property on a top Flex container of the segment template widget.

Limitations

*   When a translation animation is applied to the same widget that has **widgetSwipeMove** already configured, the action which has been performed last takes precedence. For example, if you have set a translation animation on a FlexContainer and then set the _widgetSwipeMove_ property, the actions set in _widgetSwipeMove_ take precedence over the translation animation.
*   The state of the swipe transition of the widget is not retained.
*   In a Segment, the _widgetSwipeMove_ Property must be configured for the rows so that they reset to the previous position.

*   If the widgetSwipeMove property is configured on a top level Flex container of a segment template, the onRowClick event will not be triggered. - Applicable on iOS, Android, and SPA.
*   Android limitation: On Android devices, when the user lifts their finger, the transition occurs immediately.

### Example

Following is a code snippet for a mail app. Here we have used a Segment for listing the mail and the _widgetSwipeMove_ Property has been configured for the _SwipeFlex_ FlexContainer.

```
//This is a generic property that is applicable for various widgets.  
//Here, we have shown how to use the widetSwipeMove property for Button widget.
/*You need to make a corresponding use of the 
widgetSwipeMove property for other applicable widgets.*/  
//Example of a swipe move configuration.  
var swipeMoveConfig = {
 "translate": true,
 "Xboundaries": ["-60%", "60%"],
 "swipeLeft": [{
  "translateRange": ["-60%", "0%"],
  "callback": null,
  "translatePos": "-60%",
  "translate": true
 }, {
  "translateRange": ["0%", "60%"],
  "callback": null,
  "translatePos": "0%",
  "translate": true
 }],
 "swipeRight": [{
  "translateRange": ["-60%", "0%"],
  "callback": null,
  "translatePos": "0%",
  "translate": true
 }, {
  "translateRange": ["0%", "60%"],
  "callback": this.onCallback1,
  "translatePos": "60%",
  "translate": true
 }]
};  
  
this.view.myButton.widgetSwipeMove=swipeMoveConfig;  

```

### Platform Availability

*   iOS, SPA

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

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the VoltMX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

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

From VoltMX Iris V9 SP2 FP7, developers can configure the Z Index value for a Responsive Web app as **Auto** or **Custom**. When the selected Z Index value is **Auto**, the default Z Index value of 1 is applied. When the selected Z Index value is **Custom**, developers can specify a desired numeric value.

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

