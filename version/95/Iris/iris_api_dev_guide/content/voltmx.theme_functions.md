                            


voltmx.theme Namespace
====================

The voltmx.theme namespace implements the [Theme API](themes.md). It contains the following API elements.

Functions
=========

The voltmx.theme namespace provides the following functions.


<details close markdown="block"><summary>voltmx.theme.createTheme</summary>

* * *

This API enables you to create a theme.

### Syntax
```

voltmx.theme.createTheme([url](#url), [themeIdentifier](#themeIdentifier1), [onsuccesscallback](#onsuccesscallback1), [onerrorcallback](#onerrorcallback1))
```
### Input Parameters

| Parameter | Description |
| --- | --- |
| url \[String\] - Mandatory | Specifies a string (URL) from which the theme is to be downloaded. The theme is represented as a JSON object.> **_Note:_** If the JSON object contains invalid skin attributes, the platforms use the default attributes (platform specific and may vary from platform to platform). |
| themeIdentifier \[String\] - Mandatory | Specifies a flag that indicates if the current theme must be replaced with the same identifier or use the theme only in the current session. |
| onsuccesscallback \[Function\]-Mandatory | Specifies the callback function that needs to be executed in case of success. This callback function is executed after the theme is created. |
| onerrorcallback \[Function\] - Mandatory | Specifies the callback function that needs to be executed in case of error. This callback function has the following signature:onerrorcallback (errorcode,errormessage)_errorcode_ - the error code thrown if there was a problem while creating the theme_errormessage_ - the error message that corresponds to the error code. |

### Example

```

function onsuccesscallback() {
    alert("successfully set the theme to app");
}

function onerrorcallback() {
    alert("Theme is not set to the app");
}

voltmx.theme.createTheme("", "Mytheme", onsuccesscreatecallback, onerrorcreatecallback);
```

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms.

For SPA, Desktop Web, and Mobile Web ensure that the URL mentioned in the createTheme API should point only to a CSS file. The platforms do not support a URL with a._Theme_ file and convert it into a CSS file at run time.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.createThemeFromJSONString</summary>

* * *

This API enables you to create or replace a JSON string theme in the current session.

### Syntax
```

voltmx.theme.createThemeFromJSONString([jsonString](#jsonString_), [themeIdentifier](#themeIdentifier_), [onsuccesscallback](#onsuccesscallback_), [onerrorcallback](#onerrorcallback_))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| jsonString \[String\] - Mandatory | A well-defined theme JSON string with which a theme is created. The theme is represented as a JSON object.You can use the jsonString parameter to set the required skin attributes for various properties that are applicable for Volt MX Iris Widgets. For instance, you can set values for properties that are applicable for several Volt MX Iris Widgets. These properties include background color, font weight, font size, border color, shadow, text shadow, and so on. > **_Note:_** For more information on what properties are applicable for each widget and what values you can specify for each property, refer to the **default.themes** file in the **build-> dist -> Project folder-> assets** path of Volt MX Iris. > **_Note:_** If the JSON object contains invalid skin attributes, the platforms use the default attributes (platform specific and may vary from platform to platform). |
| themeIdentifier \[String\] - Mandatory | Specifies an identifier with which current theme must be created or replace if the theme is already exists and this theme will be available only in the current session.> **_Note:_** The theme will not be created and an error callback is called, if null or undefined or non-string themeIdentifier is provided. |
| onsuccesscallback \[Function\]- Optional | Specifies the callback function that needs to be executed in case of success. This callback function is executed after the theme is created.> **_Note:_** The theme will be created but the successcallback is not called, if null or undefined successcallback is provided. |
| onerrorcallback \[Function\] - Optional | Specifies the callback function that needs to be executed in case of error. This callback function has the following signature:
> onerrorcallback (errorcode,errormessage)_errorcode_ - the error code thrown if there was a problem while creating the theme_errormessage_ - the error message that corresponds to the error code.

 |

As an example, here is a set of values that you can specify for the following applicable properties of a Button widget.

<table style="width: 100%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td style="text-align: center;font-weight: bold;">Property</td><td style="text-align: center;font-weight: bold;">Value</td></tr><tr><td style="text-align: center;">"wtype"</td><td style="text-align: center;">"Button"</td></tr><tr><td style="text-align: center;">"bg_type"</td><td style="text-align: center;">"one"</td></tr><tr><td style="text-align: center;">"background_color"</td><td style="text-align: center;">"ff000000"</td></tr><tr><td style="text-align: center;">"font_weight"</td><td style="text-align: center;">"bold"</td></tr><tr><td style="text-align: center;">"font_size"</td><td style="text-align: center;">120</td></tr><tr><td style="text-align: center;">"font_color"</td><td style="text-align: center;">"314e8900"</td></tr><tr><td style="text-align: center;">"font_name"</td><td style="text-align: center;">"Arial-BoldMT"</td></tr><tr><td style="text-align: center;">"border_color"</td><td style="text-align: center;">"9f9f9f00"</td></tr><tr><td style="text-align: center;">"border_width"</td><td style="text-align: center;">1</td></tr><tr><td style="text-align: center;">"border_style"</td><td style="text-align: center;">"rc"</td></tr><tr><td style="text-align: center;">"shadow"</td><td style="text-align: center;">{"x":0,"y":0,"br":0,"color":"00000000","inner":false}</td></tr><tr><td style="text-align: center;">"text_shadow"</td><td style="text-align: center;">{"x":0,"y":0,"br":0,"color":"00000000"}</td></tr></tbody></table>

### Example

```

function testCreateThemeFromJSONString() {
    function onsuccesscallback() {
        voltmx.print("Successfully created theme.");
    }

    function onerrorcallback(errorcode, errormessage) {
        voltmx.print("Unable to create theme.");
    }

    var jsonString = '{"metadata":{"currTheme":"MyTheme1", "themeState":"0"},
     "sknLbl1": {"background_color": "11111164", "bg_type": "one", 
     "border_color": "42424216", "border_style": "plain", 
     "border_type": 0, "border_width": 0, 
     "font_color": "33000016", "font_name": "iphoneSystem", 
     "font_size": 200, "font_style": "normal", 
     "font_weight": "normal", "isDefaultSkin": false, "wType": "Label"}}';
    voltmx.theme.createThemeFromJSONString(jsonString, "MyTheme1", onsuccesscallback, onerrorcallback);
}
```

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.deleteTheme</summary>

* * *

This API allows you to delete a specified theme in the application programmatically.

> **_Important:_**  

*   On all Platforms, pre-bundled themes in the application cannot be deleted, but only the themes created through createTheme API, which are in memory, can be deleted.
*   On Windows Platforms, only the themes created using the createTheme API can be deleted. Pre-bundled themes and currently used theme cannot be deleted.

### Syntax
```

voltmx.theme.deleteTheme([themeidentifier](#themeidentifier3), [onsuccesscallback](#onsuccesscallback3), [onerrorcallback](#onerrorcallback3))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| themeidentifier \[String\] - Mandatory | Specifies a string that denotes the theme ID. The specified theme will be deleted from the application. |
| onsuccesscallback \[Function\] - Mandatory | Specifies the callback function that needs to be executed in case of success. This callback function is executed after the theme is deleted. |
| onerrorcallback \[Function\] - Mandatory | Specifies the callback function that needs to be executed in case of error. This callback function has the following signature:onerrorcallback (errorcode,errormessage)_errorcode_ - the error code thrown if there was a problem while creating the theme_errormessage_ - the error message that corresponds to the error code. |

### Example

```

voltmx.theme.deleteTheme ("green");
```

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms except Server side Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.getAllThemes</summary>

* * *

This API returns all the themes available in the application.

### Syntax
```

voltmx.theme.getAllThemes()
```

### Input Parameters

None

### Example

```

var themes = voltmx.theme.getAllThemes();
alert("No Of themes are " + themes.length);
```

### Return Values
  
| Return Value | Description |
| --- | --- |
| JavaScript: Array | Returns an array with a list of all theme Identifiers available in the application. |

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.getCurrentTheme</summary>

* * *

This API returns the current theme that is applied to the application.

## Syntax
```

voltmx.theme.getCurrentTheme()
```

### Input Parameters

None

### Example

```

var crntTheme = voltmx.theme.getCurrentTheme();
alert("current theme is:" + crntTheme+" And the type is " + typeof(crntTheme));
```

### Return Values

| Return Value | Description |
| --- | --- |
| themeID\[String\] | Returns the identifier of the current theme that is applied to the application |

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.getCurrentThemeData</summary>

* * *

This API returns the meta data of the current theme in the application.

### Syntax
```

voltmx.theme.getCurrentThemeData()
```

### Input Parameters

None

### Example

```

function onsuccesscallback() {
    voltmx.theme.setCurrentTheme("MyTheme1", onsuccesscallbacktheme1, onerrorcallbacktheme1);
    voltmx.print(voltmx.theme.getCurrentThemeData());
}

function onerrorcallback(errorcode, errormessage) {
    voltmx.print("Unable to create theme.");
}

function fun_createTheme_and_set() {
    var jsonString = '{"metadata":{"currTheme":"MyTheme1", "themeState":"0"},
      "sknLbl1": {"background_color": "11111164", "bg_type": "one", 
      "border_color": "42424216", "border_style": "plain", 
      "border_type": 0, "border_width": 0, 
      "font_color": "33000016", "font_name": "iphoneSystem", 
      "font_size": 200, "font_style": "normal", 
      "font_weight": "normal", "isDefaultSkin": false, "wType": "Label"}}';
    voltmx.theme.createThemeFromJSONString(jsonString, "MyTheme1", onsuccesscallback, onerrorcallback);
}
```

### Return Values

| Return Value | Description |
| --- | --- |
| metadata \[Object\] | Returns an object that contains the metadata of the current theme in the application. In each theme, you can store the metadata (additional key, values) relevant for the theme by using the standard "metadata" key and the same can be read programmatically by using voltmx.theme.getCurrentThemeData API. |

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms except SPA and Mobile Web.

For SPA, Desktop Web, and Mobile Web, this API will always return null. As theme files are converted into CSS, the platforms cannot have custom structures/variables in CSS files as browsers will fail to parse them.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.isThemePresent</summary>

* * *

This API allows you to check the existence of specific theme in the application.

### Syntax
```

voltmx.theme.isThemePresent([themeidentifier](#themeidentifier2))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| themeidentifier \[String\] - Mandatory | Specifies a string that represents a theme. |

### Example

```

var isThemePresent = voltmx.theme.isThemePresent("green");
alert("IS theme present ? True/False: " + isThemePresent);
```

### Return Values

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | Returns the status of the execution of this API.
> _true_ - if the specified theme is present in the application._false_ - if the specified theme does not exist in the application.

 |

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.setCurrentTheme</summary>

* * *

This API allows you to apply a specified theme to the application at runtime.

### Syntax
```

voltmx.theme.setCurrentTheme ([themeidentifier](#themeidentifier), [onsuccesscallback](#onsuccesscallback), [onerrorcallback](#onerrorcallback))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| themeidentifier \[String\] - Mandatory | Specifies a string that denotes the theme ID. The specified theme is applied to the application. |
| onsuccesscallback \[Function\] - Mandatory | Specifies the callback function that needs to be executed in case of success. This callback function is executed after applying the specified theme. |
| onerrorcallback \[Function\] - Mandatory | Specifies the callback function that needs to be executed in case of error. This callback function has the following parameters:_errorcode_ - the error code thrown if there was a problem while applying the specified theme_errormessage_ - the error message that corresponds to the error code.This callback function is executed if there is an error while applying the specified theme. |

### Example

```

function onsuccesscallback() {
    alert("successfully set the theme to app");
}

function onerrorcallback(1900, "Skin Error") {
    alert("Skin does not exist");
}
voltmx.theme.setCurrentTheme("red", onsuccesscallback, onerrorcallback);
```

### Exceptions

*   1900- SkinError. This error occurs when there is an error related to skin.
*   Error - This error is thrown when there is a generic error.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.theme.setSkinsProperties</summary>

* * *

<p>This API allows you to modify the skin properties of a Skin Object at run time. All the widgets that use the specified skins are rendered with the modified values of the skin properties.</p>
<p>You can also modify the properties for multiple skin objects.</p>
<h3>Syntax</h3>
<pre><code style="display:block;background-color:#eee;">voltmx.theme.setSkinsProperties({“skinName”: propertiesObject},...);</code></pre>
<h3>Input Parameters</h3>
<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>skinName [String]</td>
    <td>
      <p>A string that specifies the name of the skin for which the properties are to be changed. The skin must already be present in the current theme, and must be defined.</p>
      <blockquote>
        <em><b>Note:</b></em> If the specified skin is not present in the current theme, the skin properties will not be updated.
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>propertiesObject [JSON Object]</td>
    <td>
      A JSON Object with key-value pair attributes. The keys are the names of pre-defined properties of the Skin. You can set the key-value pair attributes for the following Skin properties:
      <ul>
        <li>
          <a href="#Background">background</a>
        </li>
        <li>
          <a href="#Border">border</a>
        </li>
        <li>
          <a href="#Fonts">fonts</a>
        </li>
        <li>
          <a href="#Shadow">shadow</a>
        </li>
        <li>
          <a href="#TextShadow">textShadow</a>
        </li>
      </ul>
    </td>
  </tr>
</table>
<h3 id="Background">background [JSON Object]</h3>
<p>The Background parameter contains the key-value pair attributes of the properties related to the background of the Skin. The background parameter is a JSON object that contains the following keys:</p>
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>backgroundType [Constant]</td>
    <td>
      <p>Specifies the type of background (either singe color, two-step gradient, multi-step gradient, or image) to be applied. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.BACKGROUND_TYPE_SINGLE_COLOR : Constant for single background color.</li>
        <li>voltmx.skin.BACKGROUND_TYPE_TWO_STEP_GRADIENT: Constant for two-step gradient.</li>
        <li>voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT: Constant for multi-step gradient.</li>
        <li>voltmx.skin.BACKGROUND_TYPE_IMAGE: Constant for the background image.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em> If you do not specify a value for this parameter, the background property of the specified skin is not updated.
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>backgroundColor [Constant or Hex]</td>
    <td>
      <p>Specifies the color (single color) for the background. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>backgroundColorTwoStepGradient [JSON Object]</td>
    <td>
      <p>A JSON Object that specifies the two-step gradient color for the background. The backgroundColorTwoStepGradient object contains the following keys:</p>
      <p><b>topColor</b> [Constant or Hex]: Specifies the top color of the two-step gradient. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <p><b>bottomColor</b> [Constant or Hex]: Specifies the bottom color of the two-step gradient. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
      <p><b>style</b> [Constant]: Specifies the configuration style of the two-step gradient. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT: Constant for the vertical gradient style.</li>
        <li>voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_SPLIT: Constant for the vertical split style.</li>
        <li>voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_GRADIENT: Constant for the horizontal gradient style. This constant is only available on the Desktop Web channel.</li>
        <li>voltmx.skin.TWO_STEP_GRADIENT_STYLE_HORIZONTAL_SPLIT: Constant for the horizontal split style. This constant is only available on the Desktop Web channel.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>The default value of the style key is voltmx.skin.TWO_STEP_GRADIENT_STYLE_VERTICAL_GRADIENT.</li>
          <li>If you do not provide values (or provide invalid values) for the <b>topColor</b> and <b>bottomColor</b> attributes, the backgroundColorTwoStepGradient property of the specified skin is not updated.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>backgroundColorMultiStepGradient [JSON Object]</td>
    <td>
      <p>A JSON Object that specifies the multi-step gradient color for the background. The backgroundColorMultiStepGradient object contains the following keys:</p>
      <p><b>gradientType</b> [Constant]: Specifies the configuration type of the gradient. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP: Constant for the gradient type toTop.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_RIGHT: Constant for the gradient type toRight.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_BOTTOM: Constant for the gradient type toBottom.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_LEFT: Constant for the gradient type toLeft.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM: Constant for the gradient type custom. For the custom gradient type, you must specify the angle by using the angle property.</li>
      </ul>
      <p><b>angle</b> [Number]: Specifies the angle for the gradient in degrees, counted counter-clockwise. This property is only applicable for the custom gradient type.</p>
      <p><b>colors</b> [Array]: Specifies the colors for the multi-step gradient. This parameter contains an array of hexadecimal numbers that represent the colors or constants defined at the theme level.</p>
      <p><b>colorStops</b> [Array]: Specifies the color stops for the multi-step gradient. Color Stops are the locations of the reference colors on the gradient, from 0 (the start of the gradient) to 100 (the final value of the gradient). This parameter contains an array of numbers that represent the color stops.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>The default value of the gradientType key is voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP.</li>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
          <li>If you do not provide values (or provide invalid values) for the <b>color</b> and <b>colorStops</b> attributes, the backgroundColorMultiStepGradient property of the specified skin is not updated.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>backgroundImage [String]</td>
    <td>Sets the specified image as the background.</td>
  </tr>
</table>
<h3 id="Border">border [JSON Object]</h3>
<p>The Border parameter contains the key-value pair attributes of the properties related to the border of the Skin. The border parameter is a JSON object that contains the following keys:</p>
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>borderType [Constant]</td>
    <td>
      <p>Specifies the type of border (either singe color or multi-step gradient) to be applied. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.BORDER_TYPE_SINGLE_COLOR : Constant for single border color.</li>
        <li>voltmx.skin.BORDER_TYPE_MULTI_STEP_GRADIENT: Constant for multi-step gradient.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em> The voltmx.skin.BORDER_TYPE_MULTI_STEP_GRADIENT constant is only available on the Android and iOS channels.
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>borderColor [Constant or Hex]</td>
    <td>
      <p>Specifies the color (single color) for the border. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>borderColorGradient [JSON Object]</td>
    <td>
      <p>A JSON Object that specifies the multi-step gradient color for the background. The backgroundColorMultiStepGradient object contains the following keys:</p>
      <p><b>gradientType</b> [Constant]: Specifies the configuration type of the gradient. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP: Constant for the gradient type toTop.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_RIGHT: Constant for the gradient type toRight.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_BOTTOM: Constant for the gradient type toBottom.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_LEFT: Constant for the gradient type toLeft.</li>
        <li>voltmx.skin.MULTI_STEP_GRADIENT_TYPE_CUSTOM: Constant for the gradient type custom. For the custom gradient type, you must specify the angle by using the angle property.</li>
      </ul>
      <p><b>angle</b> [Number]: Specifies the angle for the gradient in degrees, counted counter-clockwise. This property is only applicable for the custom gradient type.</p>
      <p><b>colors</b> [Array]: Specifies the colors for the multi-step gradient. This parameter contains an array of hexadecimal numbers that represent the colors or constants defined at the theme level.</p>
      <p><b>colorStops</b> [Array]: Specifies the color stops for the multi-step gradient. Color Stops are the locations of the reference colors on the gradient, from 0 (the start of the gradient) to 100 (the final value of the gradient). This parameter contains an array of numbers that represent the color stops.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>This property is only available on the Android and iOS platforms.</li>
          <li>The default value of the gradientType key is voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP.</li>
          <li>If you do not provide values (or provide invalid values) for the <b>color</b> and <b>colorStops</b> attributes, the backgroundColorMultiStepGradient property of the specified skin is not updated.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>borderWidth [JSON Object or Number]</td>
    <td>
      <p>Specifies the width of the border.</p>
      <blockquote>
        <em><b>Note:</b></em> The Desktop Web platform supports both Number and JSON Object (with the top, bottom, right, and left keys) values for the borderWidth parameter. The Android and iOS platforms support only Number values for the borderWidth parameter.
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>borderStyle [Constant]</td>
    <td>
      <p>Specifies the border style of the border for the widget. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.BORDER_STYLE_PLAIN: Constant for the plain border style.</li>
        <li>voltmx.skin.BORDER_STYLE_ROUNDED_CORNER: Constant for the rounded corner style.</li>
        <li>voltmx.skin.BORDER_STYLE_COMPLETE_ROUNDED_CORNER: Constant for the complete rounded corner style.</li>
        <li>voltmx.skin.BORDER_STYLE_CUSTOM: Constant for the custom border style.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>For Android and iOS apps, the cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER_STYLE_CUSTOM. For Desktop Web apps, the cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER_STYLE_ROUNDED_CORNER.</li>
          <li>The borderStyle parameter is only available on the Android and iOS platforms.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>cornerRadius [JSON Object or Number]</td>
    <td>
      <p>Specifies the radius of the border.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>For Android and iOS apps, the cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER_STYLE_CUSTOM. For Desktop Web apps, the cornerRadius property is only applicable when the borderStyle is voltmx.skin.BORDER_STYLE_ROUNDED_CORNER.</li>
          <li>The Android and Desktop Web platforms support both Number and JSON Object (with the top, bottom, right, and left keys) values for the cornerRadius parameter. The iOS platform supports only Number values for the cornerRadius parameter.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
</table>
<h3 id="Fonts">fonts [JSON Object]</h3>
<p>The Fonts parameter contains the key-value pair attributes of the properties related to the fonts of the Skin. The fonts parameter is a JSON object that contains the following keys:</p>
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>fontColor [Constant or Hex]</td>
    <td>
      <p>Specifies the color for the font. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>fontSize [Number]</td>
    <td>Specifies the font size in percentage (%) units.</td>
  </tr>
  <tr>
    <td>fontFamily [String]</td>
    <td>Specifies the font family for the font. You must specify the font family based on the platform being used.</td>
  </tr>
  <tr>
    <td>fontStyle [Constant]</td>
    <td>
      <p>Specifies the font style. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.FONT_STYLE_NONE: Constant for the normal font style.</li>
        <li>voltmx.skin.FONT_STYLE_ITALIC: Constant for the italic font style.</li>
        <li>voltmx.skin.FONT_STYLE_UNDERLINE: Constant for the underline font style.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em> The fontStyle parameter is only available on the Android and Desktop Web platforms.
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>fontWeight [Constant]</td>
    <td>
      <p>Specifies the weight of the font. This parameter can have the following constant values:</p>
      <ul>
        <li>voltmx.skin.FONT_WEIGHT_NORMAL: Constant for the normal font weight.</li>
        <li>voltmx.skin.skin.FONT_WEIGHT_BOLD: Constant for the bold font weight.</li>
      </ul>
      <blockquote>
        <em><b>Note:</b></em> The fontWeight parameter is only available on the Android and Desktop Web platforms.
      </blockquote>
    </td>
  </tr>
</table>
<h3 id="Shadow">shadow [JSON Object]</h3>
<p>The Shadow parameter contains the key-value pair attributes of the properties related to the shadow of the Skin. The shadow parameter is a JSON object that contains the following keys:</p>
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>shadowRadius [Number]</td>
    <td>Specifies the blur value for the shadow in pixels.</td>
  </tr>
  <tr>
    <td>shadowColor [Constant or Hex]</td>
    <td>
      <p>Specifies the color for the shadow. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>If you do not provide a value (or provide an invalid value) for the <b>shadowColor</b> attribute, the shadow property of the specified skin is not updated.</li>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>shadowOffset [JSON Object]</td>
    <td>
      <p>A JSON Object that specifies the offset value for the shadow. The JSON Object contains the X-coordinate and Y-coordinates for the offset.</p>
      <p>The values for the X and Y coordinates must be provided in the following format: <code>{x: Number value in px, y: Number value in px}</code></p>
    </td>
  </tr>
</table>
<blockquote>
  <em><b>Note:</b></em> On the Android platform, for the child widgets of a Form, the shadow appears only when the clipBounds property is disabled for the parent Form.
</blockquote>
<h3 id="TextShadow">textShadow [JSON Object]</h3>
<p>The Text Shadow parameter contains the key-value pair attributes of the properties related to the text shadow of the Skin. The textshadow parameter is a JSON object that contains the following keys:</p>
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>textShadowRadius [Number]</td>
    <td>Specifies the blur value for the text shadow in pixels.</td>
  </tr>
  <tr>
    <td>textShadowColor [Constant or Hex]</td>
    <td>
      <p>Specifies the color for the text shadow. The value of this parameter can be a hexadecimal number (in String format) that represents a color or a color constant that is defined at the theme level.</p>
      <blockquote>
        <em><b>Note:</b></em>
        <ul>
          <li>If you do not provide a value (or provide an invalid value) for the <b>textShadowColor</b> attribute, the textShadow property of the specified skin is not updated.</li>
          <li>Colors can be specified using a 6 digit or an 8-digit hex value with alpha position. For example, ffff65 or ffffff00.</li>
          <li>When the 4-byte color format (RGBA) string is used, an alpha (A) value of 65 specifies that the color is transparent. If the value is 00, the color is opaque. The Alpha value is in percentage and must be given in the hexadecimal value for the color (100% in hexadecimal value is 65).<br>
          For example, red complete opaque is FF000000. Red complete transparent is FF000065. The values 0x and # are not allowed in the string.</li>
          <li>A color constant is a String that is defined at the theme level. Ensure that you append the <b>$</b> symbol at the beginning of the color constant.</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td>textShadowOffset [JSON Object]</td>
    <td>
      <p>A JSON Object that specifies the offset value for the shadow. The JSON Object contains the X-coordinate and Y-coordinates for the offset.</p>
      <p>The values for the X and Y coordinates must be provided in the following format: <code>{x: Number value in px, y: Number value in px}</code></p>
    </td>
  </tr>
</table>
<h3>Example 1</h3>
<pre><code style="display:block;background-color:#eee;">var skinPropertiesObj = {  
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
    shadow: {  
        shadowRadius: 2,  
        shadowColor: "ea5075",  
        shadowOffset: {  
            x: 4,  
            y: 25  
        }  
    }  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }  
voltmx.theme.setSkinsProperties({“blueSkinWithBorder”:skinPropertiesObj});</code></pre>
<h3>Example 2</h3>
<pre><code style="display:block;background-color:#eee;">var skinPropertiesObj1 = {  
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
        borderWidth: 3  
    },  
    fonts: {  
        fontColor: "ea5075",  
        fontFamily: "Serif",  
        fontSize: '100',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_NORMAL  
    },  
    shadow: {  
        shadowRadius: 2,  
        shadowColor: "ea5075",  
        shadowOffset: {  
            x: 4,  
            y: 25  
        }  
    }  
    textShadow: {  
        textShadowRadius: 5,  
        textShadowColor: "ea5075",  
        textShadowOffset: {  
            x: 20,  
            y: 4  
        }  
    }  
  
var skinPropertiesObj2 = {  
    background: {  
        backgroundType: voltmx.skin.BACKGROUND_TYPE_MULTI_STEP_GRADIENT,  
        backgroundColorMultiStepGradient : {  
            gradientType: voltmx.skin.MULTI_STEP_GRADIENT_TYPE_TO_TOP,  
            colors: ["fd0404", "f1fa70", "ea5075"],  
            colorStops: [0, 30, 90]  
        },  
    },  
    border: {  
        borderType: voltmx.skin.BORDER_TYPE_SINGLE_COLOR,  
        borderColor: "f1fa70",  
        borderStyle: voltmx.skin.BORDER_STYLE_PLAIN,  
        borderWidth: 5  
    },  
    fonts: {  
        fontColor: "fd0404",  
        fontFamily: "Helvetica",  
        fontSize: '80',  
        fontStyle: voltmx.skin.FONT_STYLE_NONE,  
        fontWeight: voltmx.skin.FONT_WEIGHT_BOLD  
    },  
    shadow: {  
        shadowRadius: 5,  
        shadowColor: "fd0404",  
        shadowOffset: {  
            x: 14,  
            y: 2  
        }  
    }  
    textShadow: {  
        textShadowRadius: 2,  
        textShadowColor: "fd0404",  
        textShadowOffset: {  
            x: 2,  
            y: 24  
        }  
    }  
voltmx.theme.setSkinsProperties({“blueSkinWithBorder”:skinPropertiesObj1, "redSkinWithBorder":skinPropertiesObj2});</code></pre>
<h3>Return Values</h3>
<p>None</p>
<h3>Remarks</h3>
<ul>
  <li>Ensure that you provide appropriate values for all the properties and keys. If you provide invalid values, the properties will not be updated.</li>
  <li>Using this API affects the performance of the app.</li>
  <li>When you invoke this API in an Android or iOS app, the Form is refreshed for the changes to reflect on the canvas.</li>
</ul>
<h3>Platform Availability</h3>
<ul>
  <li>Android</li>
  <li>iOS</li>
  <li>Desktop Web (Not available on Desktop Web Legacy SDK)</li>
</ul>
</details>