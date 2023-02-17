FlexContainer Properties
========================

The properties for FlexContainer widget are as follows.

* * *


<details close markdown="block"><summary>accessibilityConfig Property</summary>

* * *

Enables you to control accessibility behavior and alternative text for the widget.

For more information on using accessibility features in your app, see the [Accessibility](../../../Iris/app_design_dev/Content/Accessibility_Overview.md) appendix in the Volt MX IrisUser Guide.

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

<b>Android limitations</b>

*   If the results of the concatenation of a11y fields result in an empty string, then `accessibilityConfig` is ignored and the text that is on widget is read out.
*   The soft keypad does not gain accessibility focus during the right/left swipe gesture when the keypad appears.

<b>SPA/Desktop Web limitations</b>

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
<details close markdown="block"><summary>a11yNavigationMode</summary> 

* * *

The property helps to specify the type of navigation order that should be used in the FlexContainer.

<b>Syntax</b>

```

a11yNavigationMode
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

You can define any one of the following values to the property:

*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_NATIVE: Native accessibility navigation. Applies the platform's default accessibility navigation order. This is the default value for the property.
*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_PARENT: Applies a custom navigation for widgets based on the a11yIndices set to the child widgets.
*   constants.ACCESSIBILITY\_NAVIGATION\_MODE\_DEFAULT: Derives the property value from its immediate parent going all the way to form level.

<b>Example</b>

```
//Sample code to set the a11yNavigationMode property to a FlexContainer widget.

myForm.myFlexContainer.accessibilityConfig = {
    "a11yNavigationMode": constants.ACCESSIBILITY_NAVIGATION_PARENT   
};
```

<b>Availability</b>

iOS

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
<details close markdown="block"><summary>autogrowMode Property (Deprecated)</summary>

* * *

This property is enables you to grow the height of the FlexContainer when child widgets or content is added on the FlexContainer. The options are:

The autogrowMode property is used to set the height of a widget dynamically based on the derived height of the widget’s content, or from the child widget’s contents. The options are:

*   voltmx.flex.AUTOGROW\_NONE (value is 0)
*   voltmx.flex.AUTOGROW\_HEIGHT (value is 1)

<b>Syntax</b>

```

autogrowMode
```

<b>Type</b>

Number

<b>Read/Write</b>

Read only

<b>Remarks</b>

> **_Note:_** If you want to configure this property in Volt MX Iris, configure the height property of FlexContainer as preferred, then Volt MX Iris generates the autogrowMode property as voltmx.flex.AUTOGROW\_HEIGHT.

The default value for this property is voltmx.flex.AUTOGROW\_NONE.

> **_Note:_** If one or all the child widgets height or other properties such as centerY, top, bottom, minHeight or maxHeight are used in determining the height given in percentage (%), then the autogrowMode property will not work for the FlexContainer and its height fallback to default configuration value.

<b>Rules and priorities of autogrowMode property</b>

*   The autogrowMode property is ignored if the height of the widget is computable either through explicit value or implicit calculation.
    
*   If the autogrowMode property is configured as voltmx.flex.AUTOGROW\_HEIGHT, then preferredSize (based on content or child widgets ) is computed, and min/max constraints are applied.
*   If the autogrowMode property is configured as voltmx.flex.AUTOGROW\_NONE, the default value is applied with min/max constraints.
*   The height of a FlexContainer widget will not grow dynamically if the height of any widget changes because of the change in widget's skin state (such as from normal to focus).
*   If a widgets top value is given in negative values, then the widget is clipped in case of Free Form and overlapped on the previous widget in case of Flow Vertical.
*   The autogrowMode property is not supported for a FlexContainer widget that is placed inside an HBox or a VBox.
*   For example, a FlexContainer (flexA) has a FlexContainer (flexB), which is not set to grow dynamically, whose clipBounds is set to false. The children of flexB that are out of the bounds of flexB do not have any effect on the height of flexA. Only the heights of direct children of flexA will decide the height of flexA.
*   In templates, FlexContainer will grow only in SegmentedUI Table View only. In all other views, autogrowMode property is not supported.
*   The autogrowMode property for a FlexContainer is not supported in the Tab Widget.
*   In the Windows platform, the autogrowMode property of a SegmentedUI is not supported inside a FlexContainer.
*   The autogrowMode property of a SegmentedUI with a large number of rows leads to performance and memory issues.
*   Excessive usage of auto grow flex containers inside a form will impact the performance of the application.
*   Rendering of widgets with preferred height or preferred width will take more time in mobile and tablet browsers compared to desktop browsers.
*   When animating the height property of the child widget of a FlexContainer in iOS, Windows, and SPA platforms, after the animation is complete, then parent containers height increases based on the value provided in 100th step when fillMode is configured as voltmx.anim.FILL\_MODE\_FORWARDS.
*   When animating the height property of the child widget of a FlexContainer in the Android platform, the parent container's height grows along with the child widget's height.

<b>When to Use</b>

Case1: If the height of the FlexContainer is dependent on the heights of the child widgets that are added.

Case2: If you are using the FlexContainer in a SegmentedUI template, where each row of the SegmentedUI row height is dependent on the child widgets content. Configure the height property of the FlexContainer as preferred, then Volt MX Iris generates the autogrowMode property as voltmx.flex.AUTOGROW\_HEIGHT.

<b>Example</b>

```
//Sample code to set the autogrowMode property of a FlexContainer widget.
//Here, flexcontainer1 FlexContainer retains the height given in the height Property.
frmHome.flexcontainer1.autogrowMode=voltmx.flex.AUTOGROW_NONE;

//Here, flexcontainer1 FlexContainer uses the child widget content to determine its height.
frmHome.flexcontainer1.autogrowMode=voltmx.flex.AUTOGROW_HEIGHT;
```

<b>Platform Availability</b>

Not available in the IDE.

*   iOS
*   Android / Android Tablet
*   Windows
*   SPA

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

<b>Input Parameters</b>

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

<b>Input Parameters</b>

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
<details close markdown="block"><summary>blur Property</summary>

* * *

You can enable or disable a blur-effect for a widget(for example, a FlexContainer) by making use of a constructor-level property, called **blur**. The **blur** property accepts a dictionary that contains the following keys: enabled, value and style. You must specify an appropriate value for the dictionary keys, otherwise the property will not be valid.

<b>Syntax</b>

```

blur
```

**<b>Input Parameters</b>**

*   _enabled_: Accepts a Boolean value that basically decides whether to enable or disable the blur-effect for the widget. This is a mandatory attribute.
*   _value_: Level of the blur-effect that needs to be set for the widget. It should ideally be between 0 to 100. If the level is set as 0 no blur is set, even when the enabled property is set as true. This is a mandatory attribute. Even when the _enabled_ attribute is set as false, you need to specify a numerical value to this attribute.
    
*   _style_: Specifies the style in which the blur property can be applied to a widget. This is an optional parameter specific to iOS. The default value of this parameter is constants.BLUR\_EFFECT\_LIGHT. You can specify any of the following values to this parameter:  
    *   constants.BLUR\_EFFECT\_NONE
    *   constants.BLUR\_EFFECT\_EXTRALIGHT
        
    *   constants.BLUR\_EFFECT\_LIGHT (default)
    *   constants.BLUR\_EFFECT\_DARK
        
    *   constants.BLUR\_EFFECT\_REGULAR
        
    *   constants.BLUR\_EFFECT\_PROMINENT
        

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   If you set _enabled_ as true, the blur-effect for the widget is enabled.
*   If you set _enabled_ as false, the blur-effect for the widget is disabled.
*   If you specify _value_ as less than 0, the value is taken as 0.
    
*   If you specify _value_ as greater than 100, the value is taken as 100.

<b>Limitations</b>

*   For Android:
    *   If a FlexContainer or a FlexScrollContainer contains a Map widget, the blur-effect is not applied to the map.
        
    *   If a FlexContainer or a FlexScrollContainer contains a Browser or Video widget, the blur-effect is applied but does not get updated. For example, when the video starts playing, the new rendered frame does not get displayed with the blur-effect.
        
    *   Even if you apply 100% blur for widgets that display any text( such as Label or Calendar widgets), the text on these widgets is not blurred. This is a Native Android limitation. To generate the blur effect for the text, apply a skin with darker background to the Label or Calendar widget. This is true even when the widgets are placed in a FlexContainer with blur effect and the widgets do not have a skin.
    *   Blur effect will not work on widgets added inside BOX containers.

<b>Example 1</b>

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

<b>Example 2</b>

To dynamically set the blur-effect for any widget, such as a FlexContainer in iOS, use the following code.

```
Form1.widget1.blur = {
    "enabled": true,
    "value": 60,
    "style": constants.BLUR_EFFECT_DARK
};
```

<b>Platform Availability</b>

*   Android, iOS, Windows, SPA , and Desktop web

 

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

<b>Input Parameters</b>

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
<details close markdown="block"><summary>clipBounds Property</summary>

* * *

This property specifies whether to clip the child widgets when they go out of boundaries.

The clipBounds property specifies whether the container’s bounding box will “clip” the child widgets of the container. If set to false, all of the child widgets will be visible, even if outside of the parent container’s visible area.

<b>Syntax</b>

```

clipBounds
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is true.

> **_Note:_** In Windows platform, setting the clipBounds property to false on FlexContainer with Free form layout may not work if FlexContainer has border width. It automatically clips.

This property does not have any effect on the following scrollable widgets:

*   FlexScrollContainer
*   Map
*   SegmentedUI
*   Browser

<b>Example</b>

```
//Sample code to set the clipBounds property of a FlexContainer widget.
//Here, the clipBounds property is used to clip the child widgets.
frmHome.flexcontainer1.clipBounds = true;

//Here, the clipBounds property shows the child widgets outside the container's bounds.
frmHome.flexcontainer1.clipBounds = false;

```

<b>Platform Availability</b>

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>clipView Property</summary>

* * *

Defines a shape to clip the widget view.

<b>Syntax</b>

```

clipView ()
```

<b>Type</b>

JSObject

<b>Parameters</b>

**shape**

Optional. A key-value pair represents a shape of the clipping. You can clip a view as follows:

_VIEW\_CLIP\_SHAPE\_RECTANGLE_: The widget view is rectangle. By default, the value is set.

_VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE_: The widget view is rectangle with rounded corners.

_VIEW\_CLIP\_SHAPE\_CIRCLE_: The widget view is circular.

**bounds**

Optional. A key-value pair represents the bounds of the shape to clip a view. Specify the bounds as an array of integers \[left, top, right, bottom\].

**boundsInPixel**

Optional. Defines whether the units of specified bounds should be in pixels or in percentage. The property takes the Boolean value.

_true_: Indicates the specified bounds should be in pixels.

_false_: Indicates the specified bounds should be in percentage.

**radius**

Optional. Specifies the radius of the clipping shape. Represents the corner radius of the rounded rectangular shape when the clipping shape is VIEW\_CLIP\_SHAPE\_ROUNDED\_RECTANGLE or represents the radius of a circle when the clipping shape is VIEW\_CLIP\_SHAPE\_CIRCLE.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The property enables you to change the shape of a FlexContainer view. Without view clipping, all views are displayed in a regular rectangular shape. With the property, you can change the view shape to circular or rounded rectangle, irrespective of the shape of the background. Supported shapes to clipping a view are rectangle, rounded rectangle, and circle.

The clipView property is applicable only for the widgets added in the Flex Forms.

<b>Example</b>

```
//Sample code to set clipView property of a FlexContainer widget.
myForm.myFlexContainer.clipView = {
 "shape": constants.VIEW_CLIP_SHAPE_CIRCLE,
 "bounds": [5, 5, 5, 5],
 "boundsInPixel": true,
 "radius": 10
};
```

<b>Platform Availability</b>

*   Android 5.0 and later versions.

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

To add the `cursorType` property using Volt MX Iris in a Desktop Web application, follow these steps.

1.  In Volt MX Iris, open the Desktop Web application. From the **Project** explorer, expand **Responsive Web/ Desktop**\> **Forms** and select the form to which you need to make the changes.
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

This is a constructor level property and applicable for all widgets in Volt MX Iris.

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

Allows you to enable or disable haptic feedback on the FlexContainer widget.

<b>Syntax</b>

```

enableHapticFeedback
```

<b>Type</b>

Boolean.  
If the enableHapticFeedback property is not specified, haptic feedback is not enabled on the FlexContainer widget.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

*   The enableHapticFeedback property is supported for FlexContainer widgets only when the onClick callback event is defined.
*   iOS
    
    *   The Haptic Feedback feature is available on iPhone 7 devices and later. These devices have Taptic Engine hardware and users can enable/disable Haptics from Device Settings-> Sounds & Haptics-> System Haptics.
        
*   Android
    *   Users can enable the Vibrate on touch feature from Settings-> Sound & notification-> Other sounds.
        
*   Windows
    *   Haptic Feedback is supported on Windows devices with OS build version 10.0.15063.0 or later.

<b>Example</b>

```
//Sample code to set the enableHapticFeedback property of a FlexContainer widget.
frmFlexContainer.myFlexContainer.enableHapticFeedback=true;
```

<b>Platform Availability</b>

*   Android
    
*   iOS
*   Windows

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
<details close markdown="block"><summary>frame Property</summary>

* * *

The frame property reflects the calculated flex layout properties derived at application runtime. If a widget’s calculated position, width, or height has been manipulated at runtime, the frame property will reflect the final derived value. The frame property is a JSObject with the keys (x, y, width, height) measured in default system units.

<b>Syntax</b>

```

frame
```

<b>Type</b>

JSObject

<b>Read/Write</b>

Read only

<b>Remarks</b>

The frame values are correct when you app is processing the doLayout event. Accessing the frame property in the postShow event handler is not suggested as the layout cycles are still being calculated and the frame values might not be up to date.

<b>Example</b>

Getting the frame property on an existing widget

```

//Getting the derived width of an existing widget
var flexcontainerWidth = frmHome.flexcontainer1.frame.width;

//Getting the derived height of an existing widget
var flexcontainerWidth = frmHome.flexcontainer1.frame.height;

//Getting the derived left position of an existing widget
var flexcontainerLeft = frmHome.flexcontainer1.frame.x;

//Getting the derived top position of an existing widget
var flexcontainerTop = frmHome.flexcontainer1.frame.y;

//Getting all the derived frame properties of an existing widget
var flexcontainerFrame = frmHome.flexcontainer1.frame;

```

<b>Platform Availability</b>

Not available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

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

```
/*Sample code to set the height property for a FlexContainer widget by using DP, Percentage and Pixels.*/
frmFlexContainer.myFlexContainer.height="50dp";

frmFlexContainer.myFlexContainer. height="10%";

frmFlexContainer.myFlexContainer. height="10px";

```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS
*   Android
*   Windows
*   SPA

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

id is a unique identifier of FlexContainer consisting of alpha numeric characters. Every FlexContainer should have a unique id within an application.

<b>Syntax</b>

```

id
```

<b>Type</b>

String - \[Mandatory\]

<b>Read/Write</b>

Read only

<b>Example</b>

```
//Defining properties for FlexContainer on a FlexForm
function addWidgetstestfrm() {
    var flexContainer1 = new voltmx.ui.FlexContainer({
        "id": "flexContainer1",
        "top": "19dp",
        "left": "43dp",
        "width": "304dp",
        "height": "251dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": voltmx.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    flexContainer1.setDefaultUnit(voltmx.flex.DP);
    flexContainer1.add();
    testfrm.add(
        flexContainer1);
}

function testfrmGlobals() {
    var MenuId = [];
    testfrm = new voltmx.ui.Form2({
        "id": "testfrm",
        "width": "50dp",
        "height": "30dp",
        "zIndex": 1,
        "zoomScale": 22,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": voltmx.flex.FREE_FORM,
        "addWidgets": addWidgetstestfrm
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": true

    });
    testfrm.setDefaultUnit(voltmx.flex.PX);
}
```

<b>Platform Availability</b>

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>info Property</summary>

* * *

A custom JSObject with the key value pairs that a developer can use to store the context with the widget. This will help in avoiding the globals to most part of the programming.

<b>Syntax</b>

```

info
```

<b>Type</b>

JSObject

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

> **_Note:_** This is a **non-Constructor** property. You cannot set this property through widget constructor. But you can read and write data to it.

Info property can hold any JSObject. After assigning the JSObject to info property, the JSObject should not be modified. For example,

```
var inf = {
    a: "hello"
};
widget.info = inf; //works
widget.info.a = "hello world";
//This will not update the widget info a property to hello world. 
//widget.info.a will have old value as hello.
```

<b>Example</b>

```
//Sample code to set info property for a FlexContainer widget.

frmFlexContainer.myFlexContainer.info = {
    key: "FlexContainerName"
};

//Reading the info of the FlexContainer widget.
voltmx.print("FlexContainer widget info ::" +frmFlexContainer.myFlexContainer.info);
```

<b>Platform Availability</b>

Not available in the IDE.

*   iOS, Android, Windows, SPA

* * *

</details>
<details close markdown="block"><summary>isMaster Property</summary> 

* * *

Specifies whether the container is a master container.

<b>Syntax</b>

```

isMaster
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read Only after initialization.

<b>Remarks</b>

If the `isMaster` property is true, the current widget is a master container and all of the rules and limitations of master containers apply to it. For more information, please see [Masters](Masters.md) in the Overviews section of this guide, as well as [Using Masters](../../../Iris/iris_widget_prog_guide/Content/Masters.md?Highlight=Masters) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

Your app can set the `isMaster` property in this container's constructor. After that, this property is read-only.

<b>Example</b>

```

var isMasterContainer = flexContainer1.isMaster;
```

* * *

</details>
<details close markdown="block"><summary>isModalContainer Property</summary> 

* * *

When you use the FlexContainer as a popup, this property helps to prevent user interaction beyond the edges of the FlexContainer.

<b>Syntax</b>

```

isModalContainer
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

A modal window is a child window that requires user interaction before the control goes to the parent window. When a child window opens from a parent window (such as a popup), to make the parent window non-interactive , set the isModalContainer property as true.

The default value of this property is false.

> **_Note:_** If ModalContainer property is set to true in any of the FlexContainer widget, the Z Index value of that container and all of its parent containers should be set to **Custom**.

<b>Example</b>

```

Form1.FlexPopup.isModalContainer = true;
```

<b>Platform Availability</b>

*   Available in IDE
*   iOS
*   Android
*   Windows
*   SPA
*   Desktop web

* * *

</details>
<details close markdown="block"><summary>isVisible Property</summary>

* * *

This property controls the visibility of a widget on the FlexContainer.

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

<b>Example</b>

```
//Sample code to set isVisible property for a FlexContainer widget.
frmFlexContainer.myFlexContainer.isVisible=true;
```

<b>Platform Availability</b>

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>layoutType Property</summary>

* * *

Specifies if the arrangement of the widgets either in free form or horizontal or vertical direction.

<b>Syntax</b>

```

layoutType
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The default value for this property is voltmx.flex.FREE\_FORM.

> **_Note:_** This property can only be set during widget construction.

The available options are:

*   `voltmx.flex.FREE_FORM`: The calculations for free form layout type are:  
    *   left is measured from the left bounds of the parent, right is measured from the right bounds of the parent and centerX measured from the left bounds of the parent.
    *   top is measured from the top bounds of the parent, bottom is measured from the bottom bounds of the parent and centerY measured from the bop bounds of the parent.
    *   For x-axis values are width, left, right, centerX in case of % units are relative to parent's width.
    *   For y-axis values are height, top, bottom, centerY in case of % units are relative to parent's height.
*   `voltmx.flex.FLOW_HORIZONTAL`: The calculations for horizontal layout type are:  
    *   left is measured from right edge of the left sibling widget and right is measured from the left edge of the right sibling widget.
    *   horizontal space between two widgets is right of the left sibling widget + left of the right sibling widget.
    *   order of the widgets appearing in the flow is the order in which the widgets are added.
    *   top and bottom properties are measured from the boundaries of the parent.
*   `voltmx.flex.FLOW_VERTICAL`: The calculations for vertical layout type are:  
      
    *   top is measured from bottom edge of the top sibling widget and bottom is measured from the top edge of bottom sibling widget.
    *   vertical space between two widgets is bottom of the top sibling widget + top of the bottom sibling widget.
    *   order of the widgets appearing in the flow is the order in which the widgets are added.
    *   left and right properties are measured from the boundaries of the parent.
*   `voltmx.flex.RESPONSIVE_GRID`: When you assign the value of the layoutType property as `voltmx.flex.RESPONSIVE_GRID`, you can assign different layouts for different breakpoints. Here are the some of the things to consider when you assign the Responsive Grid layout.  
    *   Widgets are aligned from left to right with the span and offset values provided in the Look tab of the Properties panel.
    *   You can only provide FlexContainer widget as the direct child after assigning this value to the parent.
    *   The FlexContainer cell respects height, minHeight, maxHeight property only.
    *   If the width of a child widget exceeds the width of the container widget, the next child widget is wrapped and placed in the next row.

<b>Example</b>

```
//Sample code to set layoutType property for a FlexContainer widget.
frmFlexContainer.myFlexContainer.layoutType=voltmx.flex.FREE_FORM;
```

<b>Platform Availability</b>

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

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
<details close markdown="block"><summary>responsiveConfig Property</summary>

* * *

This property is used to make different layouts for different breakpoints in FlexContainer widgets. You can assign the width and space between FlexContainers for each breakpoint as per your requirement.

For more information about the Simple Responsive design, click [here](../../../Iris/iris_user_guide/Content/Responsive_Design.md).

<b>Syntax</b>

```

responsiveConfig
```

<b>Type</b>

JSON object.

The following table shows the attributes that can be assigned to the `responsiveConfig` property.

  
| Attributes | Type | Key/ Value Pairs | Description |
| --- | --- | --- | --- |
| span | JSON Object | In Mobile and Tablet platforms, the keys are: `portrait` and `landscape`. In Desktop Web platform, breakpoints assigned to the form are the keys. You can assign the numbers from 0 to 12 to the keys. The default value is 12. | `span` is the twelve points in which the width of a FlexContainer is divided. If you provide any value greater than 12, it will be treated as 12. If you provide any value less than zero, it will be treated as 0. If no value is assigned to a particular breakpoint, the `span` value assigned to the previous breakpoint is considered. If no value is provided for this key, then default value is applied to all the breakpoints. |
| offset | JSON Object | In Mobile and Tablet platforms, the keys are: `portrait` and `landscape`. In Desktop Web platform, breakpoints assigned to the form are the keys. You can assign the numbers from 0 to 12 to the keys. The default value is 0. | `offset` is the twelve point space between FlexContainers is divided. If you provide any value greater than 12, it will be treated as 12. If you provide any value less than zero, it will be treated as 0. If no value is assigned to a particular breakpoint, the `offset` value assigned to the previous breakpoint is considered. If no value is provided for this key, then default value is applied to all the breakpoints. |

<b>Read/Write</b>

No- Constructor level property

<b>Example 1</b>

```
/*Sample code to set the responsiveConfig property to a FlexContainer widget in Desktop Web platform.*/
var myFlex = new voltmx.ui.FlexContainer({
 "responsiveConfig": {
  "span": {
   "640": 6,
   "768": 4,
   "1200": 3,
   "1366": 2
  },
  "offset": {
   "640": 0,
   "768": 1,
   "1366": 2
  },
 },
 "height": "100%",
 "id": "myFlex",
 "layoutType": voltmx.flex.FLOW_HORIZONTAL
}, {}, {});
```

<b>Example 2</b>

```
/*Sample code to set the responsiveConfig property to a FlexContainer widget in Mobile and Tablet platforms.*/
var myFlex = new voltmx.ui.FlexContainer({
 "responsiveConfig": {
  "span": {
   "portrait": 6,
   "landscape": 3
  },
  "offset": {
   "portrait": 0,
   "landscape": 0
  },
 },
 "height": "100%",
 "id": "myFlex",
 "layoutType": voltmx.flex.FLOW_HORIZONTAL
}, {}, {});
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

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
<details close markdown="block"><summary>reverseLayoutDirection Property</summary>

* * *

The _reverseLayoutDirection_ property specifies the stacking order of the child widgets of FlexContainer. It is not applicable when the value of the [layout<b>Type</b>](#layoutTy) Property is _voltmx.flex.FREE\_FORM_.

The default value of the property is false.

<b>Syntax</b>

```

reverseLayoutDirection
```

<b>Type</b>

Boolean

<b>Read / Write</b>

Read + Write

<b>Remarks</b>

1.  If the value of _reverseLayoutDirection_ property is set as false:
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_HORIZONTAL, the child widgets are stacked from left to right.
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_VERTICAL, the child widgets are stacked from top to bottom.
2.  If the value of _reverseLayoutDirection_ property is set as true:
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_HORIZONTAL, the child widgets are stacked from right to left.
    *   When the value of _layoutType_ property is, voltmx.flex.FLOW\_VERTICAL, the child widgets are stacked from bottom to top.

<b>Limitations</b>

*   When the value of _reverseLayoutDirection_ property is true, the frame values of the child widgets are calculated with respect to the [left](FlexScrollContainer_Properties.md#left) property of FlexContainer. The frame values given for different features of FlexContainer widget, such as animation, must reflect this change.

<b>Example</b>

You can change the flow layout direction of a FlexContainer with ID as "flexContainer1" in form "myForm" during run time by entering the following code.

```
//Sample code to enable reverseLayoutDirection property for a FlexContainer widget. myForm.myFlexContainer.reverseLayoutDirection = true;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, Desktop Web, and SPA

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
<details close markdown="block"><summary>rippleBackground Property</summary>

* * *

Defines the ripple background for a FlexContainer Widget.

<b>Syntax</b>

```

rippleBackground
```

<b>Type</b>

JSObject

<b>Parameters</b>

**rippleColor**

Optional. Defines the color for the ripples.

You can define the ripple color in the RGBA format, where the R, G, and B range from 00 to ff, and the A (transparency) ranges from 00 (zero percent) to 64 (100 percent). Or, you can define the rippleColor as a key-value pair for each view state. The keys allowed are normal and pressed.

**contentLayers**

Optional. Array of two JS Objects. Each JS Object contains following key-value pairs to define a layer for ripple background. You can define the background for the ripple as a skin or as a background color.

<b>background</b>

Defines the background for the ripples. You can define the color in the RGBA format, where the R, G, and B range from 00 to ff, and the A (transparency) ranges from 00 (zero percent) to 64 (100 percent). Or, you can specify a skin as the background.

<b>backgroundType</b>

Defines the type of a background. You can define:

_RIPPLE\_CONTENT\_LAYER\_COLOR_: Background as color in the RGBA format.

_RIPPLE\_CONTENT\_LAYER\_SKIN_: Background as a skin.

<b>Mask</b>

Defines the bounds for the ripple animation. The property takes the Boolean value and by default is set to false.

<b>padding</b>

Defines the space around the ripple background. Specify an array of four integers \[left, top, right, bottom\]

<b>paddingInPixel</b>

Defines whether the units of specified padding values should be in pixels or in percentage. The property takes the Boolean value.

_true_: Indicates the specified padding values should be in pixels.

_false_: Indicates the specified padding values should be in percentage.

**paddingMode**

Optional. Defines how layer padding should affect the bounds of subsequent layers. You can define:

_RIPPLE\_PADDING\_MODE\_NEST_: Nests each layer inside padding of the previous layer.

_RIPPLE\_PADDING\_MODE\_STACK_: Stacks each layer on top of the previous layer. This is the default value.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If you set rippleBackground, skin, and focusSkin properties to the FlexContainer Widget through a constructor, the rippleBackground property takes the priority. Later, if you modify or set the skin properties such as skin, focusSkin, pressedSkin, and disabledSkins dynamically, the skin properties take priority.

<b>Example</b>

```
//Sample code to set the rippleBackground property for a FlexContainer widget. 
myForm.myFlexContainer.rippleBackground = {
 rippleColor: "ffff0000",
 contentLayers: [{
  background: "ffffff00",
  backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
  mask: false,
  padding: [10, 10, 10, 10]
 }, {
  background: btnSkin,
  backgroundType: constants.RIPPLE_CONTENT_LAYER_SKIN,
  mask: true
 }],
 paddingMode: constants.PADDING_MODE_NEST
};
```

<b>Platform Availability</b>

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary id="shadowColor">shadowColor Property</summary>

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

Defines the depth of the shadow effect applied to the FlexContainer Widget.

<b>Syntax</b>

```

shadowDepth
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The depth of the shadow should be specified in DP (Device Independent Pixels) units. The higher the value of shadowDepth, the appearance of the FlexContainer Widget is elevated from the screen and the casted shadow becomes soft.

<b>Example</b>

```
//Sample code to set shadowDepth property for a FlexContainer widget.   
  
myForm.myFlexContainer.shadowDepth=10;
```

<b>Platform Availability</b>

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary id="shadowOffset">shadowOffset Property</summary>

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
<details close markdown="block"><summary id="shadowradius-property">shadowRadius Property</summary>

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

Sets a type of the shadow effect to apply to the FlexContainer Widget.

<b>Syntax</b>

```

shadowType
```

<b>Type</b>

Number

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

The property specifies a shape for the widget's shadow that is cast. You can apply any one of the following shadow types:

_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular bounds.

_PADDED\_VIEW\_BOUNDS\_SHADOW_: Shadow matches the widget's rectangular padded bounds.

_BACKGROUND\_SHADOW_: Shadow matches the widget's background. This is the default value.

<b>Example</b>

```
//Sample code to set the shadowType property for a FlexContainer widget.   
  
myForm.myFlexContainer.shadowType = constants.VIEW_BOUNDS_SHADOW; 

```


<b>Platform Availability</b>

*   Android 5.0 and later versions.

* * *

</details>
<details close markdown="block"><summary id="shouldGroup">shouldGroup Property</summary>

* * *

This property enables the grouping of elements within a FlexContainer widget, to mitigate redundancy while invoking multiple elements that have the same context.

<b>Syntax</b>

```

shouldGroup
```

<b>Type</b>

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Ensure that Accessibility Config is enabled for the app, before you use the shouldGroup property.

<b>Example</b>

```
//Sample code to enable the shouldGroup property for a FlexContainer widget.  var flxPagesHdr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "180dp",
                "id": "flxPagesHdr",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-1dp",
                "isModalContainer": false,
                "skin": "slFbox0jdc689d7cdb74a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100,
                "shouldGroup" : true
            }, {
                "paddingInPixel": false
            }, {});

```


<b>Platform Availability</b>

*   Available in the IDE
*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>skin Property</summary>

* * *

This property specifies a background skin for FlexContainer widget.

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
//Sample code to set skin property for a FlexContainer widget.   
  
myForm.myFlexContainer.skin="sknred"; 

```

<b>Platform Availability</b>

Available in the IDE.

*   iOS
*   Android
*   Windows
*   SPA

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

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 80px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 80px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 184px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 300px;"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Default Value</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translate</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">true</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter. When the value of this parameter is set as true, the widget moves along with the swipe in the same direction.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Xboundaries</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the boundaries of the swipe in the X-axis.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">swipeLeft/swipeRight</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it is used to define the configuration of the widget while swiping to the left/ right. Each <i>swipeLeft</i> or <i>swipeRight</i>parameter is an array of configuration attributes containing <i>translateRange</i> , <i>callback</i> , <i>translatePos</i> , and <i>translate</i>. This JS&nbsp;Object defines the behavior of the widget during the swipe action.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translateRange</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size of the current widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it defines the sub-boundaries for the action when the swipe action ends.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">translatePos</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Array</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Previous position of the widget</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is an optional parameter and it determines the final translation position to be applied to the widget when the widget swipe reaches the <i>translateRange</i> value.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">callback</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">null</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This is an optional parameter and it defines the callback which needs to be triggered when the finger swipe reaches the sub boundary defined in <i>translateRange</i>. The attributes inside this parameter are described in the following table.</td></tr></tbody></table>

The following table consists of the parameters of the _callback_ parameter:

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 111px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 93px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="text-align: center;">Parameter Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="text-align: center;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">&nbsp;</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter consists of the widget handle or ID of the widget on which the swipe action has been performed.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">context</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">JS Object</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This is applicable only for widgets inside the Segment with row templates. Each context parameter consists of <i>rowIndex</i>, <i>sectionIndex</i> and <i>widgetref</i></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">rowIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the row index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">sectionIndex</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Number</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">This parameter stores the section index of the Segment containing the swiped widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetref</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">widgetHandle</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">This parameter stores the handle of the Segment containing the swiped widget.</td></tr></tbody></table>

<b>Remarks</b>

*   For a Segment, the **widgetSwipeMove** Property is configured while setting the data of the Segment.

> **_Note:_** It is not recommended to assign the widgetSwipeMove property on a top Flex container of the segment template widget.

<b>Limitations</b>

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

<b>Platform Availability</b>

*   Android, iOS, and SPA

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
<details close markdown="block"><summary>zIndex Property</summary>

This property specifies the stack order of a widget. A widget with a higher zIndex is always in front of a widget with a lower zIndex.

The zIndex property is used to set the stack, or layer order of a widget. Widgets with higher values will appear “over”, or “on top of” widgets with lower values. Widgets layered over other widgets will override any interaction events tied to widgets beneath. Modifying the zIndex does not modify the order of the widgets in the Volt MX Iris hierarchy, inside of a flexContainer or form. The zIndex property accepts only positive values.

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

<b>Example</b>

```
//Sample code to set the zIndex property for widgets.  
frmHome.widgetID.zIndex = 300;
```

<b>Platform Availability</b>

*   Available in the IDE
*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
