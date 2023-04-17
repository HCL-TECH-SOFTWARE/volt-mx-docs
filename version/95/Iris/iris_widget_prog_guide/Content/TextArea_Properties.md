
TextArea Properties
===================

The properties for TextArea widget are:

* * *


<details close markdown="block"><summary>accessibilityConfig Property</summary>

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the VoltMX IrisUser Guide.

<b>Syntax</b>

```

accessibilityConfig
```

<b>Type</b>

Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The accessibilityConfig property is enabled for all the widgets which are supported under the Flex Layout.

> **_Note:_** From VoltMX Iris V9 SP2 GA version, you can provide i18n keys as values to all the attributes used inside the `accessibilityConfig` property. Values provided in the i18n keys take precedence over values provided in `a11yLabel`, `a11yValue`, and `a11yHint` fields.

The accessibilityConfig property is a JavaScript object which can contain the following key-value pairs.

  
| Key | Type | Description | ARIA Equivalent |
| --- | --- | --- | --- |
| a11yIndex | Integer with no floating or decimal number. | This is an optional parameter. Specifies the order in which the widgets are focused on a screen. | For all widgets, this parameter maps to the `aria-index`, `index`, or `taborder` properties. |
| a11yLabel | String | This is an optional parameter. Specifies alternate text to identify the widget. Generally the label should be the text that is displayed on the screen. | For all widgets, this parameter maps to the `aria-labelledby` property of ARIA in HTML. **_Note:_** For the Image widget, this parameter maps to the **alt** attribute of ARIA in HTML. |
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

<b>Example 1</b>

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

<b>Example 2</b>

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

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>activeStateSkin Property</summary>

* * *

Specifies the look and feel of a widget when the widget is in focus.
When the activeStateSkin property is configured for a widget, the activeStateSkin is applied to the widget when a user focuses on the widget (either by using the TAB key, mouse-click, or by using the setActive API programmatically).

<b>Syntax</b>

```

activeStateSkin
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If a widget has the activeStateSkin, focusSkin, and the hoverSkin properties configured, the skins are applied based on the mouse-action performed on the widget:

*   The **focusSkin** is applied on the mouse-down action on the widget.
*   The **hoverSkin** is applied on the mouse-over action on the widget.
*   The **activeStateSkin** is applied on the mouse-release action on the widget.


<b>Example</b> 

Setting the activeStateSkin property on an existing widget

```
//The Active State Skin is a skin created under the Skins tabfrmButton.myButton.activeStateSkin= 'btnActiveStateSkin';
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on the Responsive Web platform

* * *

</details>
<details close markdown="block"><summary>anchorPoint Property</summary>

* * *

Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space.

<b>Syntax</b>

```

anchorPoint
```

<b>Type</b>

JSObject

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The value for this property is a JavaScript dictionary object with the keys "x" and "y". The values for the "x" and "y" keys are floating-point numbers ranging from 0 to 1. All geometric manipulations to the widget occur about the specified point. For example, applying a rotation transform to a widget with the default anchor point causes the widget to rotate around its center.

The default value for this property is center ( {"x":0.5, "y":0.5} ), that represents the center of the widgets bounds rectangle. The behavior is undefined if the values are outside the range zero (0) to one (1).

<b>Example</b>

```
Form1.widget1.anchorPoint = {
    "x": 0.5,
    "y": 0.5
};
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>autoCapitalize Property</summary>

* * *

Specifies the character capitalization behavior.

<b>Syntax</b>

```

autoCapitalize
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is TEXTAREA\_AUTO\_CAPITALIZE\_NONE.

For Desktop Web platform, autoCapitalize property is not supported, use the events [onBeginEditing, onEndEditing, onKeyUp, and onKeyDown, and onDone](TextArea_Events.md) as necessary.

Following are the options available:

*   TEXTAREA\_AUTO\_CAPITALIZE\_NONE: If you leave this option unchanged, no action takes place on the input string.  
    Example:This is sample text.  
    
*   TEXTAREA\_AUTO\_CAPITALIZE\_WORDS: This option changes the first character of all the words to uppercase.  
    Example:This Is Sample Text.  
    
*   TEXTAREA\_AUTO\_CAPITALIZE\_SENTENCES: This option changes the first character of all the sentences to uppercase.  
    Example:This is sample text.  
    
*   TEXTAREA\_AUTO\_CAPITALIZE\_ALL: This option changes all the characters to uppercase. (Not supported on Mobile Web)  
    Example:THIS IS SAMPLE TEXT.

<b>Example</b>

```
/*Defining properties for a TextArea with the 
autoCapitalize:constants.TEXTAREA_AUTO_CAPITALIZE_ALL*/
var tAreaBasic = {
    id: "txtArea",
    text: "Text",
    isVisible: true,
    secureTextEntry: true,
    autoCapitalize: constants.TEXTAREA_AUTO_CAPITALIZE_ALL
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the autoCapitalize of the TextArea
alert("TextArea autoCapitalize ::" + txtArea.autoCapitalize);

//Sample code to set the autoCapitalize property of TextArea widget.

frmTxtArea.myTxtArea.autoCapitalize=constants.TEXTAREA_AUTO_CAPITALIZE_ALL;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms
*   Available on the Desktop Web, SPA

* * *

</details>
<details close markdown="block"><summary>autoCorrect Property</summary>

* * *

This property determines whether auto-correction is enabled or disabled during typing.

<b>Syntax</b>

```

autoCorrect
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

With auto-correction enabled, the text object tracks unknown words and suggests a more suitable replacement candidate to the user, replacing the typed text automatically unless the user explicitly overrides the action.

The default value for this property is false.

*   If set to _true_, the auto correction option is enabled.
*   If set to _false_, the auto correction option is not enabled.

<b>Example</b>

```
//Defining the properties for a TextArea with autoCorrect:true.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    autoCorrect: true
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the autoCorrect property of TextArea widget.

frmTxtArea.myTxtArea.autoCorrect=true;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary id="autoResize">autoResize Property</summary>

* * *

This property supports dynamic resizing of the TextArea widget until it reaches the specified max height. If the text crosses the maximum height threshold, the TextArea widget displays a scroll bar.

> **_Note:_** If you enable the autoResize property, you must set the height property of the TextArea widget to **Preferred**.

<b>Syntax</b>

```

autoResize
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is false.

*   If set to true, the auto resize option is enabled.
*   If set to false, the auto resize option is not enabled.


<b>Limitations</b>
    

*   **Desktop Web**  

    If you set the value of the minHeight, maxHeight, or the height parameter to 0, the value is not respected on the Desktop Web platform as every browser has a default minimum value of its own.


<b>Example</b> 

```
//Sample code to set the autoResize property of the TextArea widget.

frmTxtArea.myTxtArea.autoResize=true;
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>autoSuggestions Property</summary>

* * *

The autoSuggestions property is used to enable or disable suggestions such as spell checker, predictive text and corrections in the application.

<b>Syntax</b>

```

autoSuggestions
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is true.

*   If set to true, the autoSuggestions property is enabled.
*   If set to false, the autoSuggestions property is disabled.

The autoSuggestions property works only when auto suggestion options are enabled in device settings.

This property works only on devices which have Google keyboard. For example, Google Nexus.

<b>Example</b>

This example uses the textBox widget, but the principle remains the same for all widgets that have an autoSuggestions property.

```
//Setting the autoSuggestions property on an existing widget
Form1.textBox1.autoSuggestions = true;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Android

* * *

</details>
<details close markdown="block"><summary>backgroundColor Property</summary>

* * *

Specifies the background color of the widget.

<b>Syntax</b>

```

backgroundColor
```

<b>Type</b>

Color constant or Hexadecimal number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The initial value of backgroundColor has to be specified explicitly. If not, Iris will not deduce the values from the existing skin and this will lead to undefined behavior.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColor property.

```
Form1.btn1.backgroundColor = "ea5075";

```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundColorMultiStepGradient Property</summary>

* * *

Specifies the multi-step gradient color for the background of the widget.

<b>Syntax</b>

```

backgroundColorMultiStepGradient
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

Input Parameters

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

<b>Remarks</b>

*   The default value of the gradientType key is `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColorMultiStepGradient property.

```
Form1.btn1.backgroundColorMultiStepGradient = {
    "gradientType": voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM  
    "angle": 45,
    "colors": ["ea5075", "f1fa70", "eefd04"],
    "colorStops": [0, 90, 100]
};
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundColorTwoStepGradient Property</summary>

* * *

Specifies the two-step gradient color for the background of the widget.

<b>Syntax</b>

```

backgroundColorTwoStepGradient
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

Input Parameters

*   **topColor** \[Constant or Hex\]: Specifies the top color of the two-step gradient. The value of this parameter can be a hexadecimal number that represents a color or a constant that is defined at the theme level.
    
*   **bottomColor** \[Constant or Hex\]:Specifies the bottom color of the two-step gradient. The value of this parameter can be a hexadecimal number that represents a color or a constant that is defined at the theme level.
    
*   **style** \[Constant\]: Specifies the configuration style of the two-step gradient. This parameter can have the following constant values:
    
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT`: Constant for the vertical gradient style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_SPLIT`: Constant for the vertical split style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_GRADIENT`: Constant for the horizontal gradient style.
    *   `voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_SPLIT`: Constant for the horizontal split style.

<b>Remarks</b>

*   The default value of the style key is `voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundColorTwoStepGradient property.

```
Form1.btn1.backgroundColorTwoStepGradient = {  
     "topColor": "ea5075",  
    "bottomColor": "eefd04",  
    "style": voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT  
};
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>backgroundImage Property</summary>

* * *

Sets the image for the background of the widget.

<b>Syntax</b>

```

backgroundImage
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the background property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.
*   The backgroundColor, backgroundColorTwoStepGradient, backgroundColoMultiStepGradient, and backgroundImage properties are mutually exclusive. The property that was set most recently is given higher priority over other properties.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the backgroundImage property.

```
Form1.btn1.backgroundImage = "bgImg.png";
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>blockedUISkin Property-Deprecated</summary>

* * *

Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.

<b>Syntax</b>

```

blockedUISkin
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   For the skin to be available in the list, you must add a skin for Blocked UI under Widget Skins.
*   The default value for this property is None (No skin is applied).
*   To specify a skin, select a skin from the list.

<b>Example</b>

```
//Defining the properties for a TextArea with blockedUISkin:"blockedUISkin".
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    blockedUISkin: "blockedUISkin"
};

/*Creating the TextArea.var txtArea = new voltmx.ui.TextArea2(tAreaBasic,
tAreaLayout, tAreaPSP);*/

//Reading the blockedUISkin of the TextArea.
alert("TextArea blockedUISkin ::" + txtArea.blockedUISkin);
//Sample code to set the blockedUISkin property of TextArea widget.

frmTxtArea.myTxtArea.blockedUISkin="blockUISkin";
```

<b>Platform Availability</b>

*   Available in the IDE
*   SPA

* * *

</details>
<details close markdown="block"><summary>borderColor Property</summary>

* * *

Specifies the border color of the widget.

<b>Syntax</b>

```

borderColor
```

<b>Type</b>

Color constant or Hexadecimal number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the borderColor property.

```
Form1.btn1.borderColor = "ea5075";
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>borderColorGradient Property</summary>

* * *

Specifies the multi-step gradient color for the border of the widget.

<b>Syntax</b>

```

borderColorGradient
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

Input Parameters

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

<b>Remarks</b>

*   The default value of the gradientType key is `voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP`.
*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the borderColorGradient property.

```
Form1.btn1.borderColorGradient = {
    "gradientType": voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM  
    "angle": 45,
    "colors": ["ea5075", "f1fa70", "eefd04"],
    "colorStops": [0, 90, 100]
};
```

<b>Platform Availability</b>

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>borderStyle Property</summary>

* * *

Specifies the border style for the widget.

<b>Syntax</b>

```

borderStyle
```

<b>Type</b>

Constant

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property can have the following constant values:
    
    *   **voltmx.skin.BORDER\_STYLE\_PLAIN**: Constant for the plain border style.
    *   **voltmx.skin.BORDER\_STYLE\_ROUNDED\_CORNER**: Constant for the rounded corner style.
    *   **voltmx.skin.BORDER\_STYLE\_COMPLETE\_ROUNDED\_CORNER**: Constant for the complete rounded corner style.
    *   **voltmx.skin.BORDER\_STYLE\_CUSTOM**: Constant for the custom border style.
*   The cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER\_STYLE\_CUSTOM.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the borderStyle property.

```
Form1.btn1.borderStyle = voltmx.skin.BORDER_STYLE_PLAIN;
```

<b>Platform Availability</b>

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>borderWidth Property</summary>

* * *

Specifies the width of the border for the widget in pixels.

<b>Syntax</b>

```

borderWidth
```

<b>Type</b>

Number or JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   The default unit for the value of this property is pixels.
*   The Desktop Web platform supports both Number and JSON Object (with the top, bottom, right, and left keys) values for the borderWidth parameter. The Android and iOS platforms support only Number values for the borderWidth parameter.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the borderWidth property.

```
 Form1.btn1.borderWidth = 2;
```

<b>Platform Availability</b>

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

<b>Syntax</b>

```

bottom
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The property determines the bottom edge of the widget and is measured from the bottom bounds of the parent container.

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the bottom property is measured from the top edge of bottom sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and the top of the bottom sibling widget.

<b>Example</b>

```
//Sample code to set the bottom property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.bottom = "50dp";

frmHome.widgetID.bottom = "10%";

frmHome.widgetID.bottom = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA , and Desktop Web

* * *

</details>
<details close markdown="block"><summary>centerX Property</summary>

* * *

This property determines the center of a widget measured from the left bounds of the parent container.

The centerX property determines the horizontal center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

<b>Syntax</b>

```

centerX
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the centerX property is measured from right edge of the left sibling widget.

<b>Example</b>

```
//Sample code to set the centerX property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerX = "50dp";

frmHome.widgetID.centerX = "10%";

frmHome.widgetID.centerX = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>centerY Property</summary>

* * *

This property determines the center of a widget measured from the top bounds of the parent container.

The centerY property determines the vertical center of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-horizontal layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy.

<b>Syntax</b>

```

centerY
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the centerY property is measured from bottom edge of the top sibling widget.

<b>Example</b>

```
//Sample code to set the centerY property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.centerY = "50dp";

frmHome.widgetID.centerY = "10%";

frmHome.widgetID.centerY = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>closeButtonText Property</summary>

* * *

Specifies the text to replace the "_Done_" button that appears in the Keypad (opens when you select a textbox).

<b>Syntax</b>

```

closeButtonText
```

<b>Type</b>

String

<b>Remarks</b>

The default value for this property is Done (The text on the close button is "Done").

If you want to change the text for the close button, enter the text of your choice. For example, if you want to change the text from Done to Go, enter Go in the property field. The following image illustrates the Keypad when the text in the property is changed to _Go_:

![](Resources/Images/keypadcustom.png)

<b>Example</b>

```
//Defining the properties for a TextArea with closeButtonText:"done"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    closeButtonText: "Done"
};


//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the closeButtonText property of TextArea widget.

frmTxtArea.myTxtArea.closeButtonText="Done";
```

<b>Platform Availability</b>

Available in the IDE

Available only on iPhone

* * *

</details>
<details close markdown="block"><summary>contentAlignment Property</summary>

* * *

This property specifies the alignment of the text on the widget with respect to its boundaries.

<b>Syntax</b>

```

contentAlignment
```

<b>Type</b>

Number

<b>Read/Write</b>

Read+Write

<b>Remarks</b>

The default value for the property is _CONTENT\_ALIGN\_CENTER_.

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

<b>Limitations</b>

Desktop Web/ SPA platforms do not support _contentAlignment_ property in Camera widget, ComboBox widget and ListBox widget.

<b>Example</b>

```
/*Sample code to set the contentAlignment property of the widgetID Button widget in frmHome Form.*/  
  
frmHome.widgetID.contentAlignment=constants.CONTENT_ALIGN_TOP_LEFT;  

```

<b>Platform Availability</b>

*   Available in IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>cornerRadius Property</summary>

* * *

Specifies the radius of the border for the widget.

<b>Syntax</b>

```

cornerRadius
```

<b>Type</b>

Number or JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER\_STYLE\_CUSTOM.
*   For a Responsive Web app, a corner radius of value zero applies a plain border, and a corner radius value greater than zero applies a rounded border.
*   The Android and Desktop Web platforms support both Number and JSON Object (with the top, bottom, right, and left keys) values for the cornerRadius parameter. The iOS platform supports only Number values for the cornerRadius parameter.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the border property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the cornerRadius property.

```
 Form1.btn1.cornerRadius = 60;
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>cursorType Property</summary>

* * *

In Desktop Web applications, when you hover the mouse over any widget, a mouse pointer appears. Using the cursorType property in Iris, you can specify the type of the mouse pointer.

<b>Syntax</b>

```

cursorType
```

<b>Type</b>

String.

You must provide valid CSS cursor value such as wait, grab, help, etc. to the cursorType property.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

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

<b>Example</b>

```
 //This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the required changes in the example while using other widgets.*/
  
frmButton.myButton.cursorType = "wait";

```

<b>Platform Availability</b>

*   Available in IDE
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>disabledStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked.

<b>Syntax</b>

```

disabledStateSkinProperties
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the disabledSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

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

<b>Platform Availability</b>

*   Android

* * *

* * *

</details>
<details close markdown="block"><summary>enable Property</summary>

* * *

The `enable` property is used to control the actionability of the widgets. In a scenario where you want to display a widget but not invoke any action on the widget, configure the `enable` property to false to achieve it.

This is a constructor level property and applicable for all widgets in VoltMX Iris.

<b>Syntax</b>

```

enable
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value of this property is true.

When `enable` property is configured to true, the action associated with a widget can be invoked by the user in the application.

When `enable` property is configured to false, the action associated with a widget cannot be invoked by the user in the application.

<b>Example</b>

```
//This is a generic property and is applicable for many widgets.  
  
/*The example provided is for the Button widget. Make the changes required in the example while using other widgets.*/
  
frmButton.myBtn.enable= true;
```

<b>Platform Availability</b>

*   Android, iOS, Windows, SPA, and Desktop web

 

* * *

</details>
<details close markdown="block"><summary>enableCache Property</summary>

* * *

The property enables you to improve the performance of Positional Dimension Animations.

<b>Syntax</b>

```

enableCache
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is true.

> **_Note:_** When the property is used, application consumes more memory. The usage of the property enables tradeoff between performance and visual quality of the content. Use the property cautiously.

<b>Example</b>

```
Form1.widgetID.enableCache = true;
```

<b>Platform Availability</b>

*   Available in the IDE.
*   Windows

* * *

</details>
<details close markdown="block"><summary>enableHapticFeedback Property</summary>

* * *

Allows you to enable or disable haptic feedback on the TextArea widget.

> **_Note:_** Haptic feedback is provided on the Copy, Cut, and Paste options.

<b>Syntax</b>

```

enableHapticFeedback
```

<b>Type</b>

Boolean.  
If the enableHapticFeedback property is not specified, haptic feedback is not enabled on the TextArea widget.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   iOS
    
    *   The Haptic Feedback feature is available on iPhone 7 devices and later. These devices have Taptic Engine hardware and users can enable/disable Haptics from Device Settings-> Sounds & Haptics-> System Haptics.
        
*   Android
    *   Users can enable the Vibrate on touch feature from Settings-> Sound & notification-> Other sounds.
        

Limitations and Behavior

*   For iOS, haptic feedback is not supported for keyboard. Users can enable the haptic feedback functionality by configuring the TextArea widget\`s **onTextChange** event with the **performHapticFeedback** API. **selectAll**, **LookUp**, and **Share** do not support haptic feedback.
    
*   For Windows, haptic feedback is not available on keyboard.
    
*   This property is not applicable for Android. For Android, Native OS provides haptic feedback for keyboard. To disable haptic for keyboard, users can disable haptics from the device settings.
*   Haptic Feedback is supported on Windows devices with OS build version 10.0.16299.0 or later.

<b>Example</b>

```
//Setting the enableHapticFeedback property on widget creation
var tAreaBasic = {
    "enableHapticFeedback": true,
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};
var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};
var tAreaPSP = {};

//Creating the TextArea
var txtArea = new voltmx.ui.TextArea2 (tAreaBasic, tAreaLayout, tAreaPSP);

//Setting the enableHapticFeedback property on an existing widget
Form1.textarea1.enableHapticFeedback = true;
//Sample code to set the enableHapticFeedback property of TextArea widget.

frmTxtArea.myTxtArea.enableHapticFeedback=true;
```

<b>Platform Availability</b>

*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary>focusSkin Property</summary>

* * *

Specifies the look and feel of the widget when in focus.

<b>Syntax</b>

```

focusSkin
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   Mobile Web does not support this property, instead browser specific focus will be applied.

<b>Example</b>

```
//Defining properties for a TextArea with the focusSkin:"txtFSkin".
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};


//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the focusSkin property of TextArea widget.

frmTxtArea.myTxtArea.focusSkin="txtFSkin";
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms except and SPA (Android) platforms

* * *

</details>
<details close markdown="block"><summary>focusStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is in focus.

<b>Syntax</b>

```

focusStateSkinProperties
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the focusSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

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

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

* * *

</details>
<details close markdown="block"><summary>fontColor Property</summary>

* * *

Specifies the font color of the widget.

<b>Syntax</b>

```

fontColor
```

<b>Type</b>

Color constant or Hexadecimal number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the fontColor property.

```
Form1.btn1.fontColor = "ea5075";
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>fontFamily Property</summary>

* * *

Specifies the font family for the font of the widget.

<b>Syntax</b>

```

fontFamily
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the fontFamily property.

```
 Form1.btn1.fontFamily = "Serif";
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>fontSize Property</summary>

* * *

Specifies the font size for the widget in percentage (%) units.

<b>Syntax</b>

```

fontSize
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the fontSize property.

```
 Form1.btn1.fontSize = 150;
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>fontStyle Property</summary>

* * *

Specifies the font style for the widget.

<b>Syntax</b>

```

fontStyle
```

<b>Type</b>

Constant

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property can have the following constant values:
    
    *   **voltmx.skin.FONT\_STYLE\_NONE**: Constant for the normal font style.
    *   **voltmx.skin.FONT\_STYLE\_ITALIC**: Constant for the italic font style.
    *   **voltmx.skin.FONT\_STYLE\_UNDERLINE**: Constant for the underline font style.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the fontStyle property.

```
Form1.btn1.fontStyle = voltmx.skin.FONT_STYLE_NONE;
```

<b>Platform Availability</b>

*   Android
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>fontWeight Property</summary>

* * *

Specifies the weight for the font of the widget.

<b>Syntax</b>

```

fontWeight
```

<b>Type</b>

Constant

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property can have the following constant values:
    
    *   **voltmx.skin.FONT\_WEIGHT\_NORMAL**: Constant for the normal font weight.
    *   **voltmx.skin.FONT\_WEIGHT\_BOLD**: Constant for the bold font weight.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the fonts property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the fontWeight property.

```
Form1.btn1.fontWeight = voltmx.skin.FONT_WEIGHT_NORMAL;
```

<b>Platform Availability</b>

*   Android
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>height Property</summary>

* * *

It determines the height of the widget and measured along the y-axis.

The height property determines the height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the height may be derived from either the widget or container’s contents by setting the height to “preferred”.

<b>Syntax</b>

```

height
```

<b>Type</b>

Number, String, and Constant

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Following are the available measurement options:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

<b>Example</b>

Setting the height property on an existing widget

```
/*Sample code to set the height property for a TextArea widget by using DP, Percentage and Pixels.*/
frmTxtArea.myTxtArea.height="50dp";

frmTxtArea.myTxtArea.height="10%";

frmTxtArea.myTxtArea.height="10px";
Setting the height property on widget creation

//Defining the properties for textarea with height: "150dp" 
var textarea1 = new voltmx.ui.Textarea({
    "id": "&lt;ID for the Widget",
    "top": "19dp",
    "width": "200dp",
    "height": "150dp",
    "right": "23dp",
    "zIndex": 1,
    "isVisible": true,
    "clipBounds": true
});

```

<b>Platform Availability</b>

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

<b>Syntax</b>

```

hoverSkin
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Defining the properties for a TextArea with hoverSkin:"hskin"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    hoverSkin: "hskin"
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the hoverSkin property of TextArea widget.

frmTxtArea.myTxtArea.hoverSkin="hskin";
```

<b>Platform Availability</b>

*   Available in the IDE
*   Windows

* * *

</details>
<details close markdown="block"><summary>hoverStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget.

<b>Syntax</b>

```

hoverStateSkinProperties
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the hoverSkin property of the configured skin.

<b>Example</b>

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

<b>Platform Availability</b>

*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

* * *

</details>
<details close markdown="block"><summary>id Property</summary>

* * *

A unique identifier of TextArea consisting of alpha numeric characters. Every TextArea should have a unique id within a Form.

<b>Syntax</b>

```

id
```

<b>Type</b>

String

<b>Read/Write</b>

Read only

<b>Example</b>

```
//Defining properties for a TextArea with the id:"txtArea"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the id of the TextArea		
alert("TextArea Id ::" + txtArea.id);
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget.

<b>Syntax</b>

```

info
```

<b>Type</b>

JSObject

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This will help in avoiding the globals to most part of the programming.

This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```
var inf = {
    a: 'hello'
};
widget.info = inf; //works

widget.info.a = 'hello world';
/*This will not update the widget info a property to Hello world. 
widget.info.a will have old value as hello.*/
```

<b>Example</b>

```
//Defining properties for a TextArea with the info property.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
txtArea.info = {
    key: "text of textarea"
};

//Reading the info of the TextArea		
alert("TextArea info is ::" + txtArea.info);
//Sample code to set the info property for a TextArea widget.
frmTxtArea.myTxtArea.info={
    key: "text of textarea"
};
//Reading info of the TextArea widget.
alert("TextArea widget info is ::" +frmTxtArea.myTxtArea.info);

```

<b>Platform Availability</b>

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>inputAccessoryViewType Property</summary>

* * *

While building iPhone applications that support or provide text input, it is necessary to create some extra buttons (or other controls) beyond the ones provided by the default keyboard interface. VoltMX Iris by default, adds the Previous, Next, and Done buttons to the applicable input controls. These buttons allow specific operations needed by your application, such as moving to the next or previous text field, making the keyboard disappear and so on. The area above the keyboard is known as Input Accessory View.

<b>Syntax</b>

```

inputAccessoryViewType
```

<b>Type</b>

Number

<b>Read/Write</b>

Yes

<b>Remarks</b>

The default value for this property is TEXTAREA\_INPUTACCESSORYVIEW\_DEFAULT.

This property, allows you to specify the type of accessory view that will be shown for all the input controls for **TextArea** widget.

> **_Note:_** For iOS, a header with 'Prev' and Next' buttons is added to the keypad by default. You can turn off this header at three levels: application-level, form-level, and widget-level.

To know more about how to set inputAccessoryViewType property at application-level and form-level, you can refer the [inputAccessoryViewType](FlexForm_Properties.md#inputAcc) property under Flexform widget.

To turn on/off the header at widget-level, assign any of the following constants to inputAccessoryViewType property. You must specify each constant with the ‘constants.xx’ prefix.

*   TEXTAREA\_INPUTACCESSORYVIEW\_NONE: Use this option if you do not want to specify the toolbar. This option should be used carefully, as setting this option for widgets like calendar leaves the user with no option to select and drop-down a wheel calendar.
*   TEXTAREA\_INPUTACCESSORYVIEW\_DEFAULT:Specifies that the toolbar that is defined in the Application level settings. To set the Application level settings, right-click on the project and navigate to **Properties> Native App>iPhone/iPad.**  
    
*   TEXTAREA\_INPUTACCESSORYVIEW\_NEXTPREV: Specifies the navigation options as Next, Previous, and Done for a form.

*   TEXTAREA\_INPUTACCESSORYVIEW\_CANCEL: Specifies that the input accessory view has a Cancel button. This option does not trigger any events.

<b>Example</b>

```
//Defining the property inputAccessoryViewType in the constructor level
	var tAreaBasic = {id:"txtArea", 
	skin:"txtSkin", 
	focusSkin:"txtFSkin",text:"Text", 
	maxTextLength:20, 
	isVisible:true, 
	secureTextEntry:true};

var tAreaLayout = {padding:[5,5,5,5], 
	hExpand:true, 
	widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};

var tAreaPSP ={
  "inputAccessoryViewType":constants.TEXTAREA_INPUTACCESSORYVIEWTYPE_DEFAULT
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2 (tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the inputAccessoryViewType of the TextArea		
voltmx.print("The value of input Accessory View Type property is:"+txtArea.inputAccessoryViewType);
//Defining the property inputAccessoryViewType outside the constructor

Form1.textArea1.inputAccessoryViewType=constants.TEXTAREA_INPUTACCESSORYVIEWTYPE_DEFAULT;
//Sample code to set the inputAccessoryViewType property of TextArea widget.

frmTArea.myTxtArea.inputAccessoryViewType=constants.TEXTAREA_INPUTACCESSORYVIEWTYPE_DEFAULT;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>isReadOnly Property - Deprecated</summary>

* * *

This property allows you to specify whether text in the TextArea Widget should be read only or can be edited.

<b>Syntax</b>

```

isReadOnly
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>  

The default value for this property is false.

*   If set to true, the text in the TextArea Widget will be read only.
*   If set to false, the text in the TextArea Widget can be edited.  

<b>Example</b>

```
/* Defining the properties for a Textarea with the
isReadOnly:constants.TEXTAREA_KEYBOARD_LABEL_SEARCH*/
var txtBasic = {
    id: "textArea1",
    isVisible: true,
    "isReadOnly": true
};

var txtLayout = {
    padding: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true
};

var txtPSP = {};

//Creating the TextArea.
var textArea1 = new voltmx.ui.TextArea2(txtBasic, txtLayout, txtPSP);

//Reading the isReadOnly of the Textarea
alert("Textarea isReadOnly ::" + textArea1.isReadOnly);
```

<b>Platform Availability</b>

*   This property is available on Windows Desktop

* * *

</details>
<details close markdown="block"><summary>isSelectable Property</summary>

* * *

isSelectable property allows you to select the content inside a TextArea widget.

<b>Syntax</b>

```

isSelectable
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is true.

*   If set to _true_, the text in the TextArea Widget can be selected.
*   If set to _false_, the text in the TextArea Widget cannot be selected.

<b>Example</b>

```
myForm.myTextArea.isSelectable = false;  

```

<b>Platform Availability</b>

*   Not available from IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>isSensitiveText Property</summary>

* * *

This property secures the text entered in the TextArea and TextBox widgets. This property helps you to control the lifetime of the user entered text in the application runtime memory.

> **_Note:_** In Android platform, when you enable the `isSensitiveText` property, the text property of TextArea and TextBox widget returns an instance of the [RawBytes](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md) object. The RawBytes data type internally holds the text as a character array. The instance of the Rawbytes object must be cleared using the [clear](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md#clear) API once the text read from the widget is not required.

<b>Syntax</b>

```

isSensitiveText
```

<b>Type</b>

Boolean

The default value of this property is false.

<b>Read/ Write</b>

Read Only (Constructor- level property only)

<b>Remarks</b>

*   When you enable the `isSensitiveText` property,
    
    *   The user entered text is cleared automatically in the TextBox and TextArea widgets, when the user navigates to another Form or when the widget is removed through code. You must assign the entered text to another variable if you want to use the text later in the code.
    *   You must set the JavaScript text references to null, to clear the text from the memory, once the text is no longer required.
    
    *   Once the text is cleared, the string content in the memory will be removed in the next Garbage Collection cycle.
    *   In Android platform, you can use either the [readAsText](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md#readAsText) method or the text property to access the user entered text.  

*   In Android platform, when the TextBox or TextArea widget is placed inside a Segment widget, if you want to access the user entered text even after the widget is destroyed, use any of the following methods on the retrieved RawBytes object:  

    *   Use the [clone](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md#clone) API of the RawBytes object to create another RawBytes object. You can pass this cloned object into other APIs as required.  

    *   Use either the [readAsText](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md#readAsText) method or the text property.  

*   When the `isSensitiveText` property is disabled, the entered text may be retained in the application runtime memory till the Form containing the TextBox or TextArea widget is destroyed.

Following image shows the field corresponding to `isSensitiveText` property in Iris.

![](Resources/Images/SensitiveText_357x34.png)

<b>Example</b>

```
//This property is applicable for TextBox and TextArea widgets.

/*This example demonstrates how to use isSensitiveText property by using myTxtBox TextBox widget in frmTextBox FlexForm. You need to use isSensitiveText property for TextArea widget use voltmx.ui.TextArea2 API in a similar manner.*/

//Defining the properties for a Textbox with text:"Sample Text".
var myTxtBox = new voltmx.ui.TextBox2({
  id: "myTxtBox",
  skin: "txtSkin",
  focusSkin: "txtFSkin",
  text: "Sample Text",
  maxTextLength: 20,
  isVisible: true,
  isSensitiveText: true
}, {
  padding: [5, 5, 5, 5],
  margin: [5, 5, 5, 5],
  containerWeight: 100,
  hExpand: true,
  widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
} {});
frmTxtBox.add(myTxtBox);

//Reading the text from the myTxtArea TextArea widget.
var textContent = frmTxtBox.myTxtBox.text;
var textAsString;

if (voltmx.type(textContent) == "voltmx.types.RawBytes") {
  //Using the readAsText method of the RawBytes object. //Call this method only if you must process the String in JavaScript.
  textAsString = textContent.readAsText();

  //Perform the required JS String manipulations on textAsString.

}
/*In Android platform, use the clear method of the Rawbytes object to remove the text references in the native Android RawBytes object.*/
if (voltmx.type(textContent) == "voltmx.types.RawBytes") {
  textContent.clear();
}   
/*You must set the JavaScript text references to null, to enable them to be Garbage Collected and cleared from memory*/
textContent = null;  
textAsString = null;
```

<b>Platform Availability</b>

*   Available in IDE
*   Android, iOS, and Desktop Web

 

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the form.

<b>Syntax</b>

```

isVisible
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is true.

*   If set to _false,_ the widget is not displayed.
*   If set to _true,_ the widget is displayed.

<b>Example</b>

```
//Defining properties for a TextArea with the isVisible:true.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the isVisible of the TextArea		
alert("TextArea isVisible ::" + txtArea.isVisible);
//Sample code to set the isVisible property of TextArea widget.

frmTxtArea.myTxtArea.isVisible=true;
```

> **_Note:_** You can set the visibility of a widget dynamically from code using the setVisibility method.

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>keyboardActionLabel Property</summary>

* * *

Specifies if the text to be displayed in action key of the keyboard.

<b>Syntax</b>

```

keyboardActionLabel
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is TEXTBOX\_KEYBOARD\_LABEL\_DONE.

The following are the available options:

*   TEXTBOX\_KEYBOARD\_LABEL\_DONE
*   TEXTBOX\_KEYBOARD\_LABEL\_GO
*   TEXTBOX\_KEYBOARD\_LABEL\_SEARCH
*   TEXTBOX\_KEYBOARD\_LABEL\_NEXT
*   TEXTBOX\_KEYBOARD\_LABEL\_SEND
*   TEXTBOX\_KEYBOARD\_LABEL\_GOOGLE
*   TEXTBOX\_KEYBOARD\_LABEL\_JOIN
*   TEXTBOX\_KEYBOARD\_LABEL\_ROUTE
*   TEXTBOX\_KEYBOARD\_LABEL\_YAHOO
*   TEXTBOX\_KEYBOARD\_LABEL\_CALLs

The following images illustrate the Keyboard label as _Done_ preserve">var var _Search_ respectively:

![](Resources/Images/tb-dnelbl_267x208.png)

![](Resources/Images/tb-srchlabel_260x202.png)

<b>Example</b>

```
/*Defining the properties for a TextArea with 
keyboardActionLabel:constants.TEXTAREA_KEYBOARD_LABEL_SEND.*/
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    keyboardActionLabel: constants.TEXTAREA_KEYBOARD_LABEL_SEND
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the keyboardActionLabel of the TextArea.		
alert("TextArea keyboardActionLabel ::" + txtArea.keyboardActionLabel);
//Sample code to set the keyboardActionLabel property of TextArea widget.

frmTxtArea.myTxtArea.keyboardActionLabel=constants.TEXTAREA_KEYBOARD_LABEL_SEND;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>keyboardAppearance Property</summary>

* * *

Allows you to set the on screen keyboard to a dark or light color scheme.

<b>Syntax</b>

```

keyboardAppearance
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Possible values are:

*   constants.TEXTBOX\_KEYBOARD\_COLOR\_LIGHT(Default)
*   constants.TEXTBOX\_KEYBOARD\_COLOR\_DARK

<b>Example</b>

```
//Sample code to set the keyboardAppearance property of TextArea widget.

frmTxtArea.myTxtArea.keyboardAppearance=constants.TEXTBOX_KEYBOARD_COLOR_DARK;
```

<b>Availability</b>

Available in the IDE

*   iOS

* * *

</details>
<details close markdown="block"><summary id="keyBoardStyle">keyBoardStyle Property</summary>

* * *

When you interact with a TextArea widget, a keyboard is displayed.

<b>Syntax</b>

```

keyBoardStyle
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

You can use this property to select the type of keyboard that you want to display.

Keys on the keyboard style may vary from platform to platform.

On Desktop Web platform, `keyBoardStyle` property is not supported, use the events [onBeginEditing](TextArea_Events.md#onBeginE), [onEndEditing](TextArea_Events.md#onEndEdi), [onKeyUp](TextArea_Events.md#onKeyUp), [onKeyDown](TextArea_Events.md#onKeyDow), and [onDone](TextArea_Events.md#onDone) as necessary.

iPad device does not support constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DECIMAL.

The following are the available keyboard types when you select [textInputMode](#textInputmode) as constants.TEXTAREA\_INPUT\_MODE\_NUMERIC.

*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DEFAULT: Specifies the default numeric keyboard.  
    ![](Resources/Images/keyty-n_p_206x137.png)
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DECIMAL: Specifies the keyboard to enter decimals.  
    ![](Resources/Images/ipstyle_decimal_205x135.png)
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_NUMBER\_PAD: Specifies the keyboard to enter numbers.  
    ![](Resources/Images/keyty-phn_205x135.png)
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_PHONE\_PAD: Specifies the keyboard to enter phone numbers. (Not supported in Windows platform)  
    ![](Resources/Images/keyty-num_205x134.png)
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_SIGNED\_NUMBER: Specifies the keyboard to enter negative numbers( for example -345). This option is applicable to Android platform only.
*    constants.TEXTAREA\_KEY\_BOARD\_STYLE\_SIGNED\_DECIMAL\_NUMBER: Specifies the keyboard to enter negative decimal numbers (for example -345.87). This option is applicable to Android platform only.
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DEFAULT: Specifies the default numeric keyboard.

The following are the available keyboard types when the value is [textInputMode](#textInputmode) set as constants.TEXTAREA\_INPUT\_MODE\_DATETIME. These options are applicable only for Android platform.

*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DATETIME
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_DATE
*   constants.TEXTAREA\_KEY\_BOARD\_STYLE\_TIME

<b>Example</b>

```
//Defining properties for a TextArea with the keyBoardStyle to accept URL address.
var tAreaBasic = {
    id: "txtArea",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    keyBoardStyle: constants.TEXTAREA_KEY_BOARD_STYLE_URL
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the keyBoardStyle of the TextArea		
alert("TextArea keyBoardStyle ::" + txtArea.keyBoardStyle);
//Sample code to set the keyBoardStyle property of TextArea widget.

frmTxtArea.myTxtArea.keyBoardStyle=constants.TEXTAREA_KEY_BOARD_STYLE_URL;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms except SPA and Desktop Web platforms.

* * *

</details>
<details close markdown="block"><summary>left Property</summary>

* * *

This property determines the lower left corner edge of the widget and is measured from the left bounds of the parent container.

The left property determines the position of the left edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, the distance is measured from the left edge of the parent container. In flow-horizontal layout, the distance is measured from the right edge of the previous sibling widget in the hierarchy.

<b>Syntax</b>

```

left
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the left property is measured from right edge of the left sibling widget.

<b>Example</b>

```
//Sample code to set the left property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.left = "50dp";

frmHome.widgetID.left = "10%";

frmHome.widgetID.left = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxHeight Property</summary>

* * *

This property specifies the maximum height of the widget and is applicable only when the height property is not specified.

The maxHeight property determines the maximum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxHeight value overrides the preferred, or “autogrow” height, if the maxHeight is less than the derived content height of the widget.

<b>Syntax</b>

```

maxHeight
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set the maxHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxHeight = "50dp";

frmHome.widgetID.maxHeight = "10%";

frmHome.widgetID.maxHeight = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxWidth Property</summary>

* * *

This property specifies the maximum width of the widget and is applicable only when the width property is not specified.

The Width property determines the maximum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The maxWidth value overrides the preferred, or “autogrow” width, if the maxWidth is less than the derived content width of the widget.

<b>Syntax</b>

```

maxWidth
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set the maxWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.maxWidth = "50dp";

frmHome.widgetID.maxWidth = "10%";

frmHome.widgetID.maxWidth = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>maxTextLength Property</summary>

* * *

Specifies the maximum number of characters that the text field can accept.

<b>Syntax</b>

```

maxTextLength
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is empty.

If you specify a number for this property, the number of input characters cannot exceed the specified number.

<b>Example</b>

```
//Defining properties for a TextArea with the maxTextLength:20.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the maxTextLength of the TextArea		
alert("TextArea maxTextLength ::" + txtArea.maxTextLength);
//Sample code to set the maxTextLength property of TextArea widget.

frmTxtArea.myTxtArea.maxTextLength=20;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms. platforms

* * *

</details>
<details close markdown="block"><summary>minHeight Property</summary>

* * *

This property specifies the minimum height of the widget and is applicable only when the height property is not specified.

The minHeight property determines the minimum height of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minHeight value overrides the preferred, or “autogrow” height, if the minHeight is larger than the derived content height of the widget.

<b>Syntax</b>

```

minHeight
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Sample code to set the minHeight property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minHeight = "50dp";

frmHome.widgetID.minHeight = "10%";

frmHome.widgetID.minHeight = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>minWidth Property</summary>

* * *

This property specifies the minimum width of the widget and is applicable only when the width property is not specified.

The minWidth property determines the minimum width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. The minWidth value overrides the preferred, or “autogrow” width, if the minWidth is larger than the derived content width of the widget.

<b>Syntax</b>

```

minWidth
```

<b>Type</b>

Number

<b>Read/Write</b>

Read only

<b>Example</b>

```
//Sample code to set the minWidth property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.minWidth = "50dp";

frmHome.widgetID.minWidth = "10%";

frmHome.widgetID.minWidth = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>numberOfVisibleLines Property</summary>

* * *

Number of lines to be displayed at a given time in the view port of the TextArea.

<b>Syntax</b>

```

numberOfVisibleLines
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This essentially decides the height of the text area.

In Android platform, you cannot fix the height of the TextArea to any value. The form by default is a vertical scroll container, if you restrict the height of TextArea, you will not be able to scroll the content, because of double scrolling issue. For example,  
If the numberOfVisibleLines property is set to 10, then the height of the TextArea will be at least 10 lines tall. As you enter text more than 10 lines, TextArea height expands accordingly.

<b>Example</b>

```
//Defining properties for a TextArea with numberOfVisibleLines:5
var tAreaBasic = {
    id: "txtArea",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    numberOfVisibleLines: 5
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the numberOfVisibleLines of the TextArea		
alert("TextArea numberOfVisibleLines ::" + txtArea.numberOfVisibleLines);
//Sample code to set the numberOfVisibleLines property of TextArea widget.

frmTxtArea.myTxtArea.numberOfVisibleLines=5;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>opacity Property</summary>

* * *

Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.

Specifies the opacity of the widget. Valid opacity values range from 0.0 (transparent), to 1.0 (opaque). Values set to less than zero will default to zero. Values more than 1.0 will default to 1. Interaction events set on a transparent widget will still be fired. To disable the events, also set the “isVisible” property to “false”.

<b>Syntax</b>

```

opacity
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

> **_Note:_** This property has more priority compared to the values coming from the configured skin.

<b>Example</b>

```
//Sample code to make the widget transparent by using the opacity property.
frmHome.widgetID.opacity = 0;

//Sample code to make the widget opaque by using the opacity property.
frmHome.widgetID.opacity = 1;
```

<b>Platform Availability</b>

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

<b>Syntax</b>

```

padding
```

<b>Type</b>

Array of numbers

<b>Read/Write</b>

Read+Write

<b>Limitations</b>

*   Desktop Web/ SPA platforms do not support _padding_ property in Image widget, Slider widget and Switch widget.
*   If no skin is applied to a Button, then Padding is not supported on iPhone. This is due to iOS Safari browser limitation. If you want the padding to be applied, apply a skin to the button and then apply padding

<b>Example</b>

```
//Sample code to set the padding property for widgetID Button widget in frmHome Form.
frmHome.widgetID.padding= [2,2,2,2];
```

<b>Platform Availability</b>

*   Available in IDE
*   Android, iOS, Desktop Web and SPA

* * *

</details>
<details close markdown="block"><summary>paddingInPixel Property</summary>

* * *

This property specifies whether the padding property is to be applied in pixels or in percentage.

<b>Syntax</b>

```

paddingInPixel
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read Only

<b>Remarks</b>

The default value of this property is _false_.

If the value of this property is _true,_ the padding are applied in pixels.

If the value of this property is _false,_ the padding are applied as set in [padding](#padding) property.

<b>Limitations</b>

Desktop Web/ SPA platforms do not support _paddingInPixel_ property in Image widget, Slider widget and Switch widget.

<b>Example</b>

```
//Sample code to read paddingInPixel property for widgetID Button widget in frmHome form.

voltmx.print("PaddingInPixel property value is:"+fromHome.widgetID.paddingInPixel);
```

<b>Platform Availability</b>

*   iOS, Android, Desktop Web and SPA.

* * *

</details>
<details close markdown="block"><summary>parent Property</summary>

* * *

Helps you access the parent of the widget. If the widget is not part of the widget hierarchy, the parent property returns null.

<b>Syntax</b>

```

parent
```

<b>Read/Write</b>

Read only

<b>Remarks</b>

> **_Note:_** The property works for all the widgets inside a FlexForm, FlexContainer or FlexScrollContainer.

<b>Example</b>

```
function func() {

    voltmx.print("The parent of the widget" + JSON.stringify(Form1.widgetID.parent));

}
```

<b>Platform Availability</b>

*   Not available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>pasteboardType Property</summary>

* * *

This property enables an application to share data within the application or with another application using system-wide or application-specific pasteboard.

<b>Syntax</b>

```

pasteboardType
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Typically, an object in the application writes data to a pasteboard when the user requests a copy or cut operation on a selection in the user interface. Another object in the same or different application then reads that data from the pasteboard and presents it to the user at a new location; this usually happens when the user requests a paste operation.

You can only paste the text to a textbox with the same pasteboard type as that of the source textbox. For example, if you set the pasteboardType as TEXTAREA\_PASTE\_BOARD\_TYPE\_APP\_LEVEL\_PERSISTENT, you can paste the text only to another textbox whose pasteboard type is set to applevelpersistent.

The different pasteboard types are:

TEXTAREA\_PASTE\_BOARD\_TYPE\_DEFAULT: If you select this option, the value selected in the application properties gets applied.

TEXTAREA\_PASTE\_BOARD\_TYPE\_SYSTEM\_LEVEL: This is the default selection and if this option is unchanged, the text copied from a TextArea can be pasted in TextArea (with the pasteboard type set as systemlevel) across different applications on the device. Even if you exit the source application, the copied text persists in the memory and can be pasted across applications or within the same application.

TEXTAREA\_PASTE\_BOARD\_TYPE\_APP\_LEVEL\_PERSISTENT: If you select this option , the text copied from a TextArea can be pasted in TextArea (with the pasteboard type set as applevel) within the same application. Even if you close the application, the copied text persists in the memory and can be copied to another TextArea whose pasteboard type is applevel, when you restart that application.

TEXTAREA\_PASTE\_BOARD\_TYPE\_APP\_LEVEL\_NON\_PERSISTENT: If you select this option , the text copied from a TextArea can be pasted in TextArea (with the pasteboard type set as applevelnonpersistent) within the same application. This text is not retained in the memory when you close the application.

TEXTAREA\_PASTE\_BOARD\_TYPE\_NO\_PASTE\_BOARD: Select this option, if you want to disable the content to be copied from a TextArea.

<b>Example</b>

```
/*Defining the properties for a TextArea with 
pasteboardType:constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL*/
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};


var tAreaPSP = {
    pasteboardType: constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the pasteboardType of the TextArea.	
alert("TextArea pasteboardType ::" + txtArea.pasteboardType);
//Sample code to set the pasteboardType property of TextArea widget.

frmTxtArea.myTxtArea.pasteboardType=constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>placeholder Property</summary>

* * *

The placeholder attribute specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format).

<b>Syntax</b>

```

placeholder
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The hint is displayed in the input field when it is empty, and disappears when the field gets focus.

For example, for the Username field, you can enter the placeholder text as _Enter User ID or Email Address_. The user then clicks on the TextArea widget and enters the Username.

You must be aware of the following:  
\- If you specify text both in the [text](#text) property and the **placeholder** property, the text entered in the [text](#text) property is displayed when rendered. If the user deletes the text, the placeholder text is displayed.  
\- If you programmatically set an empty string for the [text](#text) property, the placeholder text is displayed.

<b>Example</b>

```
//Defining properties for a TextArea with placeholder:"Enter text".
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    placeholder: "Enter text"
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the placeholder of the TextArea		
alert("TextArea placeholder ::" + txtArea.placeholder);
//Sample code to set the placeholder property of TextArea widget.

frmTxtArea.myTxtArea.placeholder="Enter Text";
```

> **_Note:_** You can set the placeholder text from the code only on iPhone, Android, and Mobile Web Advanced platforms.

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>placeholderSkin Property</summary>

* * *

Specifies the skin to be applied to the placeholder text in the TextArea widget.

<b>Syntax</b>

```

placeholderSkin
```

<b>Type</b>

String

<b>Remarks</b>

Only the font color skin attribute is applicable.

The following image illustrates the placeholder text with a placeholder color applied:

![](Resources/Images/tb-placeholdercolor.png)

<b>Example</b>

```
//Defining the properties for a TextArea with placeholderSkin:"placeholderSkin"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    placeholder: "Enter text"
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    placeholderSkin: "placeholderSkin"
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the placeholderSkin property of TextArea widget.

frmTxtArea.myTxtArea.placeholderSkin="pSkin";
```

> **_Note:_** You cannot specify an image as a skin for a placeholder as of now.

> **_Note:_** Android and Windows support change in font color only.

<b>Platform Availability</b>

*   Available in the IDE
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>pressedStateSkinProperties Property</summary>

* * *

Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked.

<b>Syntax</b>

```

pressedStateSkinProperties
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   This property does not have a default value.
*   This property has more priority than (and overrides) the pressedSkin property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

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

<b>Platform Availability</b>

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

<b>Syntax</b>

```

retainContentAlignment
```

<b>Type</b>

Boolean

<b>Read/Write</b>

No (only during widget-construction time)

<b>Example</b>

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

<b>Platform Availability</b>

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

<b>Syntax</b>

```

retainFlexPositionProperties
```

<b>Type</b>

Boolean

<b>Read/Write</b>

No (only during widget-construction time)

<b>Example</b>

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

<b>Platform Availability</b>

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

<b>Syntax</b>

```

retainFlowHorizontalAlignment
```

<b>Type</b>

Boolean

<b>Read/Write</b>

No (only during widget-construction time)

<b>Example</b>

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

<b>Platform Availability</b>

*   Available in IDE
*   Windows, iOS, Android, and SPA

* * *

</details>
<details close markdown="block"><summary>restrictCharactersSet Property</summary>

* * *

This property restricts users from entering a set of input characters from the soft keyboard in the TextArea widget.

<b>Syntax</b>

```

restrictCharactersSet
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
Form1.textArea1.restrictCharactersSet =  "~#^|$%&*!";
```

<b>Platform Availability</b>

*   Available in the IDE
*   Android
*   iOS
*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>right Property</summary>

* * *

This property determines the lower right corner of the widget and is measured from the right bounds of the parent container.

The right property determines the position of the right edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the left edge of the parent container. In flow-vertical layout, value is ignored. In flow-horizontal layout, the value is ignored.

The right property is used only if the width property is not provided.

<b>Syntax</b>

```

right
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If the layoutType is set as voltmx.flex.FLOW\_HORIZONTAL, the right property is measured from left edge of the right sibling widget. The horizontal space between two widgets is measured from right of the left sibling widget and left of the right sibling widget.

<b>Example</b>

```
//Sample code to set the right property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.right = "50dp";

frmHome.widgetID.right = "10%";

frmHome.widgetID.right = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>secureTextEntry Property</summary>

* * *

Specifies whether the text entered by the user will be secured using a mask character, such as asterisk or dot.

<b>Syntax</b>

```

secureTextEntry
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is false.

*   If set to _true_, the text in the TextArea will be masked.
*   If set to _false_, the text in the TextArea will be displayed as clear text.

This is typically set to _true_ for a password field.

<b>Example</b>

Setting the secureTextEntry on widget creation

```
//Defining the properties for a Textbox with secureTextEntry:true.
var txtBasic = {
    id: "textBox1",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    placeholder: "enter text"
};
var txtLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};
var txtPSP = {};
//Creating the Textbox.
var textBox1 = new voltmx.ui.TextArea2(txtBasic, txtLayout, txtPSP);
//Sample code to set the secureTextEntry property of TextArea widget.

frmTxtArea.myTxtArea.secureTextEntry=true;

//Sample code to read the secureTextEntry property of a TextArea widget.
alert("The value of the secureTextEntry is:"+frmTxtArea.myTxtArea.secureTextEntry);

```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms except Desktop Web

* * *

</details>

<details close markdown="block"><summary id="setImportantForAutoFill">setImportantForAutofill Property</summary>

* * *

The `setImportantForAutoFill` property is used to set preference to a TextArea widget to show the suggestions automatically when the user enters a value.  

Consider a FlexForm with multiple TextBox and Text Area widgets that have enabled the auto-fill feature and uses an auto-fill service to provide the suggestions. In this scenario, if a TextArea widget has enabled the `setImportantForAutoFill` property, it is provided the suggestions before other widgets by the auto-fill service.

> **_Note:_** If the `setImportantForAutoFill` property is not enabled for any of the widgets in the form, the importance of the widgets is decided by the platform during run-time.

<b>Syntax</b>

```

setImportantForAutofill
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value of `setImportantForAutofill` property is constants.TEXT_IMPORTANT_FOR_AUTOFILL_AUTO.  

You can specify any of the following values to this property.


*   __constants.TEXT_IMPORTANT_FOR_AUTOFILL_AUTO__: When the `setImportantForAutoFill` property is set as this value, the platform decides the importance of the TextArea widget automatically.  

*   __constants.TEXT_IMPORTANT_FOR_AUTOFILL_NO__: When the `setImportantForAutoFill` property is set as this value for a TextArea widget, the widget is not considered for auto-fill feature.  

*   __constants.TEXT_IMPORTANT_FOR_AUTOFILL_YES__: When the `setImportantForAutoFill` property is set as this value for a TextArea widget, the widget is considered for auto-fill feature.  



<b>Example</b> 

```
/*Sample code to set the setImportantForAutofill property of TextArea widget.*/

frmTxtBox.myTxtArea.setImportantForAutofill=constants.TEXT_IMPORTANT_FOR_AUTOFILL_AUTO;
```

<b>Platform Availability</b>

*   Android


* * *

</details>
<details close markdown="block"><summary>shadowColor Property</summary>

* * *

Specifies the color for the shadow of the widget.

<b>Syntax</b>

```

shadowColor
```

<b>Type</b>

Color constant or Hexadecimal number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the shadowColor property.

```
Form1.btn1.shadowColor = "ea5075";
```

<b>Platform Availability</b>

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>shadowDepth Property</summary>

* * *

Defines the depth of the shadow effect applied to the TextArea Widget.

<b>Syntax</b>

```

shadowDepth
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The depth of the shadow should be specified in DP (Device Independent Pixels) units. The higher the value of shadowDepth, the appearance of the TextArea Widget is elevated from the screen and the casted shadow becomes soft.

<b>Example</b>

```
//Sample code to set the shadowDepth property of TextArea widget.

frmTxtArea.myTxtArea.shadowDepth=10;
Setting the shadowDepth property on widget creation

//TextArea Creation.
var TxtAr1 = new voltmx.ui.TextArea({
    "id": "TxtAr1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "skin": "skin3",
    "shadowDepth": 10,
    "shadowType": constants.VIEW_BOUNDS_SHADOW
});
```

<b>Platform Availability</b>

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary>shadowOffset Property</summary>

* * *

This property specifies the current coordinates of the shadow region in the widget.

<b>Syntax</b>

```

shadowOffset
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the shadowOffset property.

```
Form1.btn1.shadowOffset= {
    "x": "3",
    "y": "27"
};
```

<b>Platform Availability</b>

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>shadowRadius Property</summary>

* * *

Specifies the radius for the blur value of the shadow.

<b>Syntax</b>

```

shadowRadius
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The default value of the shadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the shadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the shadowRadius property.

```
 Form1.btn1.shadowRadius = 6;
```

<b>Platform Availability</b>

*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>shadowType Property</summary>

* * *

Sets a type of the shadow effect to apply to the TextArea Widget.

<b>Syntax</b>

```

shadowType
```  

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The property specifies a shape to the widget's shadow that is cast. You can apply any one of the following shadow types:

_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular bounds.

_PADDED\_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular padded bounds.

_BACKGROUND\_SHADOW_: Shadow matches the widget's background. This is the default value.

<b>Example</b>  

Setting the shadowType property on an existing widget

```
//Sample code to set the shadowType property of TextArea widget.

frmTxtArea.myTxtArea.shadowType=constants.VIEW_BOUNDS_SHADOW;
Setting the shadowType property on widget creation

//TextArea Creation.
var TxtAr1 = new voltmx.ui.TextArea({
    "id": "TxtAr1",
    "isVisible": true,
    "width": "80%",
    "zIndex": 1,
    "skin": "skin3",
    "shadowDepth": 10,
    "shadowType": constants.VIEW_BOUNDS_SHADOW
});
```

<b>Platform Availability</b>

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary>showCloseButton Property</summary>

* * *

Specifies if the "_Done_" button that appears in the keypad (opens when you select text box) must be visible or not.

<b>Syntax</b>

```

showCloseButton
```

<b>Type</b>

Boolean

<b>Example</b>

```
//Defining the properties for a TextArea with showCloseButton:true.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    showCloseButton: true
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the showCloseButton property of TextArea widget.

frmTxtArea.myTxtArea.showCloseButton=true;
```

<b>Remarks</b>

The default value for this property is true.

*   If set to _false_, the "_Done_" button is not visible on the textbox.
*   If set to _true_, the "_Done_" button is visible on the textbox.

You can customize the "_Done_" button using [keyboardActionLabel](#keyboard)

The following image illustrates the Keypad when the property is set to _true_:

![](Resources/Images/keypadreqd.png)

The following image illustrates the Keypad when the property is set to _false_:

![](Resources/Images/keypadntreqd.png)

<b>Platform Availability</b>

*   Available in the IDE
*   Available on iPhone only

* * *

</details>
<details close markdown="block"><summary>showProgressIndicator Property</summary>

* * *

Specifies if there must be an indication to the user that the widget content is being loaded.

<b>Syntax</b>

```

showProgressIndicator
```

<b>Type</b>

Boolean

<b>Remarks</b>

You can use this property typically for forms that require network calls during post show.

The default value for this property is true.

*   If set to _false_ the progress indicator is not displayed.
*   If set to _true_ the progress indicator is displayed.

The following image illustrates the progress indicator on iPhone:

![](Resources/Images/Need_Loading_Indicator_During_Post_Show.png)

<b>Example</b>

```
//Defining the properties for a TextArea with showProgressIndicator:true.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    showProgressIndicator: true
};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the showProgressIndicator property of TextArea widget.

frmTxtArea.myTxtArea.showProgressIndicator=true;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iPhone
*   iPad

* * *

</details>
<details close markdown="block"><summary>skin Property</summary>

* * *

Specifies the look and feel of the widget when not in focus.

<b>Syntax</b>

```

skin
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Example</b>

```
//Defining properties for a TextArea with the skin:"txtSkin"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the skin of the TextArea		
alert("TextArea skin ::" + txtArea.skin);
//Sample code to set the skin property of TextArea widget.

frmTxtArea.myTxtArea.skin="txtSkin";
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>smartDashes Property</summary>

* * *

(missing or bad snippet)

* * *

</details>
<details close markdown="block"><summary>smartInsertDelete Property</summary>

* * *

When you copy and paste a text inside a TextBox or a TextArea widget, you can use this property to add a space after the text.

<b>Syntax</b>

```

smartInsertDelete
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

You can assign any of the following constants to the `smartInsertDelete` property.

*   constants.SMART\_INSERT\_DELETE\_TYPE\_DEFAULT: When you use this constant, the spaces after the text are selectively added. It is not added for keyboard types such as email address and password.
*   constants.SMART\_INSERT\_DELETE\_TYPE\_NO: When you use this constant, no space is added after the text.
*   constants.SMART\_INSERT\_DELETE\_TYPE\_YES: When you use this constant, the space is added after the text.

<b>Example</b>

```
//This property is applicable for TextBox and TextArea widgets.

/*This example demonstrates how to use smartInsertDelete property by using myTxtBox TextBox widget in frmTextBox FlexForm. You need to use smartInsertDelete property for TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.smartInsertDelete = constants.SMART_INSERT_DELETE_TYPE_NO;

```

<b>Platform Availability</b>

*   iOS 11 and onwards.
    

 

* * *

</details>
<details close markdown="block"><summary>smartQuotes Property</summary>

* * *

This property is used to enable or disable the curly quotes, ie,**“ ‘ ’ ”** inside the text of a TextBox or a TextArea widget.

<b>Syntax</b>

```

smartQuotes
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

You can assign any of the following constants to the `smartQuotes` property.

*   constants.SMART\_QUOTES\_TYPE\_DEFAULT: When you use this constant, the curly quotes are selectively enabled. These quotes will be disabled for keyboard types such as email address and password.
*   constants.SMART\_QUOTES\_TYPE\_NO: When you use this constant, the curly quotes is disabled.
*   constants.SMART\_QUOTES\_TYPE\_YES: When you use this constant, the curly quotes is enabled for all keyboard types.

<b>Example</b>

```
//This property is applicable for TextBox and TextArea widgets.
/*This example demonstrates how to use smartQuotes property by using myTxtBox TextBox widget in frmTextBox FlexForm. You need to use smartQuotes property for TextArea widget in a similar manner.*/

frmTextBox.myTxtBox.smartQuotes = constants.SMART_QUOTES_TYPE_NO;

```

<b>Platform Availability</b>

*   iOS 11 and onwards.
    

 

* * *

</details>
<details close markdown="block"><summary>text Property</summary>

* * *

Specifies a general or descriptive text for the TextArea widget.

<b>Syntax</b>

```

text
```

<b>Type</b>

String

> **_Note:_** From V9 SP1 onwards, when you enable the [isSensitiveText](#isSensitiveText) property,

1.  In Android platform, the text property returns an instance of the [RawBytes](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md) object. Then you can use the [readAsText](../../../Iris/iris_api_dev_guide/content/voltmx.io.file_functions.md#readAsText) API on the RawBytes object to retrieve the actual string in JavaScript to process the string. However, ensure that you set the JavaScript variable as null after the string operations are done.
2.  You must set the JavaScript text references to null after the text is no longer required. This will enable the Garbage Collection to delete the text references from the memory. This is valid for all platforms.
3.  In Android platform, you must also use the [clear](../../../Iris/iris_api_dev_guide/content/voltmx.types_objects_rawbytes.md#clear) API of the Rawbytes object, to clear the text reference in the Native Android RawBytes object

<b>Read/ Write</b>

Read + Write

<b>Example 1</b>

```
//Defining properties for a TextArea with the text:"Text"
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the text of the TextArea		
alert("TextArea text ::" + txtArea.text);
//Sample code to set the text property of TextArea widget.

frmTxtArea.myTxtArea.text="Enter Username";
```

<b>Example 2</b>

```
/*Sample code to read and clear the text property in when the isSensitiveText property is set as true.*/

//Reading the text from the myTxtArea TextArea widget.
var textContent = frmTxtArea.myTxtArea.text;
var textAsString;

if (voltmx.type(textContent) == "voltmx.types.RawBytes") {
 //Using the readAsText method of the RawBytes object. 
//Call this method only if you must process the String in JavaScript.
 textAsString = textContent.readAsText();

 //Perform the required JS String manipulations on textAsString.
 
}
/*In Android platform, use the clear method of the Rawbytes object to remove the text references in the native Android RawBytes object.*/
if (voltmx.type(textContent) == "voltmx.types.RawBytes") {
 textContent.clear();
}
/*You must set the JavaScript text references to null, to enable them to be Garbage Collected and cleared from memory*/
textContent = null;
textAsString = null;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>textCopyable Property</summary>

* * *

The textCopyable property is used to enable or disable the cut, copy and, paste of the text present in the TextArea2 widget.

<b>Syntax</b>

```

textCopyable
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Default value</b>

True

<b>Example</b>

```
//Sample code to set the textcopyable property of TextBox2 widget.  
  
this.view.textarea.textCopyable = true;  

```

<b>Platform Availability</b>

*   Android
*   Desktop Web
*   Mobile Web

* * *

</details>
<details close markdown="block"><summary>textInputMode Property</summary>

* * *

This property helps you to specify the type of input characters a user can enter into the TextArea widget.

<b>Syntax</b>

```

textInputMode
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

You can use this property to restrict the input characters to only numbers or a combination of alphabets, numbers, and special characters.

The default value for this property is constants.TEXTAREA\_INPUT\_MODE\_ANY.

Following are the available options:

*   constants.TEXTAREA\_INPUT\_MODE\_ANY: When you assign this value to the `textInputMode` property, you can provide letters, numbers, special characters, or a combination of all the three as the input to the TextArea widget.
*   constants.TEXTAREA\_INPUT\_MODE\_NUMERIC: When you assign this value to the `textInputMode` property, you can provide only numbers as the input to the TextArea widget.
*   constants.TEXTAREA\_INPUT\_MODE\_DATETIME : When you assign this value to the `textInputMode` property, you can provide date and time as the input to the TextArea widget. This is applicable for Android platform only.

The values of [keyBoardStyle](#keyBoardStyle) property are dependent on these modes.

In Android platform, multiple lines for a textbox is displayed only when textInputMode property is set to constants.TEXTAREA\_INPUT\_MODE\_ANY. When the option is set to constants.TEXTAREA\_INPUT\_MODE\_NUMERIC the text is shown as single line.

<b>Example</b>

```
/*Defining properties for a TextArea with the 
textInputMode:constants.TEXTAREA_INPUT_MODE_NUMERIC*/
var tAreaBasic = {
    id: "txtArea",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    textInputMode: constants.TEXTAREA_INPUT_MODE_NUMERIC
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {};

//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the textInputMode of the TextArea		
alert("TextArea textInputMode ::" + txtArea.textInputMode);
//Sample code to set the textInputMode property of TextArea widget.

frmTxtArea.myTxtArea.textInputMode=constants.TEXTAREA_INPUT_MODE_NUMERIC;
```

<b>Platform Availability</b>

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>textShadowColor Property</summary>

* * *

Specifies the color for the text shadow of the widget.

<b>Syntax</b>

```

textShadowColor
```

<b>Type</b>

Color constant or Hexadecimal number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.
*   When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).  
    For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.
*   A color constant is a String that is defined at the theme level. Ensure that you append the **$** symbol at the beginning of the color constant.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowColor property.

```
Form1.btn1.textShadowColor = "ea5075";
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>textShadowOffset Property</summary>

* * *

This property specifies the current coordinates of the text shadow region in the widget.

<b>Syntax</b>

```

textShadowOffset
```

<b>Type</b>

JSON Object

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The JSON Object contains the X-coordinate and Y-coordinates for the offset in the following format:
    
    `{x: value in pixels, y: value in pixels}`
    
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowOffset property.

```
Form1.btn1.textShadowOffset = {
    "x": "2",
    "y": "24"
};
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

* * *

</details>
<details close markdown="block"><summary>textShadowRadius Property</summary>

* * *

Specifies the radius for the blur value of the text shadow.

<b>Syntax</b>

```

textShadowRadius
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The default value of the textShadowRadius property for a Responsive Web app is 0.
*   The default unit for the value of this property is pixels.
*   This property does not have a default value.
*   This property has more priority than (and overrides) the textShadow property of the configured skin. Even if there is no skin configured for the widget, this property updates the skin.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have the textShadowRadius property.

```
 Form1.btn1.textShadowRadius = 6;
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Desktop Web (Not available on Desktop Web Legacy SDK)

 

* * *

</details>
<details close markdown="block"><summary>toolTip Property</summary>

* * *

Specifies the hint text when the cursor hovers over a widget, without clicking it.

<b>Syntax</b>

```

toolTip
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The text entered in the tooltip appears as a small box when the cursor hovers over a widget.

<b>Example</b>

```
//Defining the properties for a TextArea with toolTip:sample text
var tAreaBasic = {
    id: "textarea1",
    isVisible: true,
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Click Here"
};

var tAreaLayout = {
    containerWeight: 100,
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    hExpand: true,
    vExpand: false,
    displayText: true
};

var tAreaPSP = {
    toolTip: "sample text"
};

//Creating the TextArea.
var textarea1 = new voltmx.ui.TextArea(tAreaBasic, tAreaLayout, tAreaPSP);
//Sample code to set the toolTip property of TextArea widget.

frmTxtArea.myTxtArea.toolTip="Sample text";
```

<b>Platform Availability</b>

*   Available in the IDE
*   Windows

* * *

</details>
<details close markdown="block"><summary>top Property</summary>

* * *

This property determines the top edge of the widget and measured from the top bounds of the parent container.

The top property determines the position of the top edge of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. In freeform layout, the distance is measured from the top edge of the parent container. In flow-vertical layout, the distance is measured from the bottom edge of the previous sibling widget in the hierarchy. In flow-horizontal layout, the distance is measured from the left edge of the parent container.

<b>Syntax</b>

```

top
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If the layoutType is set as voltmx.flex.FLOW\_VERTICAL, the top property is measured from the bottom edge of the top sibling widget. The vertical space between two widgets is measured from bottom of the top sibling widget and top of the bottom sibling widget.

<b>Example</b>

```
//Sample code to set the top property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.top = "50dp";

frmHome.widgetID.top = "10%";

frmHome.widgetID.top = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>transform Property</summary>

* * *

Contains an animation transformation that can be used to animate the widget.

<b>Syntax</b>

```

transform
```

<b>Type</b>

JSObject

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

This property is set to the identify transform by default. Any transformations applied to the widget occur relative to the widget's anchor point. The transformation contained in this property must be created using the [voltmx.ui.makeAffineTransform](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#makeAffi) function.

<b>Example</b>

This example uses the button widget, but the principle remains the same for all widgets that have a transform property.

```
//Animation sample
var newTransform = voltmx.ui.makeAffineTransform();
newTransform.translate3D(223, 12, 56);

//translates by 223 xAxis,12 in yAxis,56 in zAxis
widget.transform = newTransform;
```

<b>Platform Availability</b>

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>widgetSwipeMove Property</summary>

* * *

This property is used to enable and configure left or right swipe actions for a widget. The widgetSwipeMove Property can be used for all widgets . The most common use case is for implementing swipe action for individual rows in Segment.

<b>Syntax</b>

```

widgetSwipeMove
```

<b>Type</b>

String

<b>Read/Write</b>

Read + Write

<b>Input Parameters</b>

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 111px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 93px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 184px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Default Value</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translate</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">true</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter. When the value of this parameter is set as true, the widget moves along with the swipe in the same direction.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Xboundaries</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the boundaries of the swipe in the X-axis.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">swipeLeft/swipeRight</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it is used to define the configuration of the widget while swiping to the left/ right. Each <i>swipeLeft</i> or <i>swipeRight</i>parameter is an array of configuration attributes containing <i>translateRange</i> , <i>callback</i> , <i>translatePos</i> , and <i>translate</i>. This JS&nbsp;Object defines the behavior of the widget during the swipe action.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translateRange</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the sub-boundaries for the action when the swipe action ends.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translatePos</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Previous position of the widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it determines the final translation position to be applied to the widget when the widget swipe reaches the <i>translateRange</i> value.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">callback</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">null</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This is an optional parameter and it defines the callback which needs to be triggered when the finger swipe reaches the sub boundary defined in <i>translateRange</i>. The attributes inside this parameter are described in the following table.</td></tr></tbody></table>

The following table consists of the parameters of the _callback_ parameter:

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 111px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 93px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter consists of the widget handle or ID of the widget on which the swipe action has been performed.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">context</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is applicable only for widgets inside the Segment with row templates. Each context parameter consists of <i>rowIndex</i>, <i>sectionIndex</i> and <i>widgetref</i></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">rowIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the row index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">sectionIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the section index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetref</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This parameter stores the handle of the Segment containing the swiped widget.</td></tr></tbody></table>

<b>Remarks</b>

*   For a Segment, the **widgetSwipeMove** Property is configured while setting the data of the Segment.

> **_Note:_** It is not recommended to assign the widgetSwipeMove property on a top Flex container of the segment template widget.

Limitations

*   When a translation animation is applied to the same widget that has **widgetSwipeMove** already configured, the action which has been performed last takes precedence. For example, if you have set a translation animation on a FlexContainer and then set the _widgetSwipeMove_ property, the actions set in _widgetSwipeMove_ take precedence over the translation animation.
*   The state of the swipe transition of the widget is not retained.
*   In a Segment, the _widgetSwipeMove_ Property must be configured for the rows so that they reset to the previous position.

*   If the widgetSwipeMove property is configured on a top level Flex container of a segment template, the onRowClick event will not be triggered. - Applicable on iOS, Android, and SPA.
*   Android limitation: On Android devices, when the user lifts their finger, the transition occurs immediately.

<b>Example</b>

Following is a code snippet for a mail app. Here we have used a Segment for listing the mail and the _widgetSwipeMove_ Property has been configured for the _SwipeFlex_ FlexContainer.

```
//This is a generic property that is applicable for various widgets.  
//Here, we have shown how to use the widetSwipeMove property for Button widget.
/*You need to make a corresponding use of the 
widgetSwipeMove property for other applicable widgets.*/  
//<b>Example</b> of a swipe move configuration.  
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

<b>Platform Availability</b>

*   iOS, SPA

* * *

</details>
<details close markdown="block"><summary>width Property</summary>

* * *

This property determines the width of the widget and is measured along the x-axis.

The width property determines the width of the widget’s bounding box. The value may be set using DP (Device Independent Pixels), Percentage, or Pixels. For supported widgets, the width may be derived from either the widget or container’s contents by setting the width to “preferred”.

<b>Syntax</b>

```

width
```

<b>Type</b>

Number, String, and Constant

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Following are the options that can be used as units of width:

*   %: Specifies the values in percentage relative to the parent dimensions.
*   px: Specifies the values in terms of device hardware pixels.
*   dp: Specifies the values in terms of device independent pixels.
*   default: Specifies the default value of the widget.
*   voltmx.flex.USE\_PREFERED\_SIZE: When this option is specified, the layout uses preferred width of the widget as width and preferred size of the widget is determined by the widget and may varies between platforms.

<b>Example</b>

```
//Sample code to set the width property for widgets by using DP, Percentage and Pixels.
frmHome.widgetID.width = "50dp";

frmHome.widgetID.width = "10%";

frmHome.widgetID.width = "10px";
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>wrapText Property</summary>

* * *

This property allows you to specify whether text in the TextArea Widget should be wrapped or not.

<b>Syntax</b>

```

wrapText
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>  

The default value for this property is false.

*   If set to true, the text in the TextArea Widget will get wrapped.
*   If set to false,  the text will be in the same line.

<b>Example</b>

```
// Defining the properties for a Textarea with the
// wrapText:constants.TEXTAREA_KEYBOARD_LABEL_SEARCH
var txtBasic = {
    id: "textArea1",
    isVisible: true,
    "wrapText": true
};

var txtLayout = {
    padding: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true
};

var txtPSP = {};

//Creating the TextArea.
var textArea1 = new voltmx.ui.TextArea2(txtBasic, txtLayout, txtPSP);

//Reading the wrapText of the TextArea
alert("Textarea wrapText ::" + textArea1.wrapText);
//Sample code to set the wrapText property of TextArea widget.

frmTxtArea.myTxtArea.wrapText=true;
```

<b>Platform Availability</b>

*   This property is available on Windows Desktop

* * *

</details>
<details close markdown="block"><summary>zIndex Property</summary>

* * *

This property specifies the stack order of a widget. A widget with a higher zIndex is always in front of a widget with a lower zIndex.

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the VoltMX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

<b>Syntax</b>

```

zIndex
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

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

<b>Example</b>

```
//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

