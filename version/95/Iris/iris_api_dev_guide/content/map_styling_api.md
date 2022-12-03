                            

You are here: Map Styling API

Map Styling API
===============

The Map Styling API helps to provide various custom styling options for maps. By using these style options, you can customize the presentation of the standard Google map styles, thereby changing the visual display of features such as roads, businesses, parks, and other points of interest.

This feature is applicable for Android platform only and is available on Volt MX Irisfrom V9.2 onwards.
<!-- This feature is applicable for Android platform only and is available on Volt MX Irisfrom V8.2 onwards. -->

Create custom Map style
-----------------------

The Map Styling API enables you to load custom map styles in JSON format by using the LoadRawResourceStyle method. To create a custom map style, follow these steps:

1\. Create a custom style raw resource JSON file [here](https://mapstyle.withgoogle.com/).

2\. Import the JSON files to assets in Volt MX Iris(mobile/native/Android/raw).

Functions
---------


<details close markdown="block"><summary>LoadRawResourceStyle</summary>

* * *

### Syntax

```

mapObject.loadRawResourceStyle(rawJsonFile,stylingCallback)
```

### Input Parameters
  
| Parameter | Description |
| --- | --- |
| rawJsonFile | Name of the file added in the raw folder of native Android. |
| stylingCallback | Callback to be invoked. |

### Example

```

var mapObject = new voltmx.ui.Map({}, {}, {});
mapObject.loadRawResourceStyle("style", stylingCallback);

function stylingCallback(booleanFlag, resource) {
    if (booleanFlag == true)

        voltmx.print("Styling is successful-" + resource);
    else
        voltmx.print("Styling failed-" + resource);
}
```

> **_Note:_** This API returns true if the style is successfully parsed, and false if any problems are detected with MapStyleOptions. Such problems include unparsable styling JSON, unrecognized feature type, unrecognized element type or invalid styler keys, or the provided resource file is not found. If the return value is false, the current style is left unchanged.

### Return Values

| Return Value | Description |
| --- | --- |
| Boolean | true/false. Indicates whether the styling is successful or not. |
| String | Name of the resource file (JSON) passed to the API. |

### Clearing the Custom Styling

Provide the resource file as null to clear the applied custom styling.

```

mapObject.loadRawResourceStyle(null,stylingCallback);
```

### IDE/CodeGen requirements

None.

### Platform Availability

Android.

* * *

![](resources/prettify/onload.png)
