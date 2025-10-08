                               


Toolbar Properties
==================

* * *


<details close markdown="block"><summary>barButtonItems Property</summary>

* * *

This property contains an array of BarButtonItem objects.

### Syntax

```

barButtonItems
```

### Type

Array of objects.

### Read/Write

Read + Write

### Remarks

This property contains an array of BarButtonItem objects.

### Example

```

/*Sample code to set the leftBarButtonItems and rightBarButtonItems property method of a ToolBar widget.*/

var btns = [item0, item1];
var btns1 = [item2];
frmToolBar.myToolbar.leftBarButtonItems = btns;
frmToolBar.myToolbar.rightBarButtonItems = btns1;
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>barStyle Property</summary>

* * *

This property determines the toolbar bar appearance

### Syntax

```

barStyle
```

### Type

Constant

### Read/Write

Read + Write

### Remarks

The toolbar bar style can be one of the following: 

*   constants.BAR\_STYLE\_DEAFULT
*   constants.BAR\_STYLE\_BLACK

### Example

```

//Sample code to set the barStyle property of a ToolBar widget.

frmToolBar.myToolbar.barStyle=constants.BAR_STYLE_DEAFULT;
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>barTintColor Property</summary>

* * *

This property determines the tint color of the toolbar bar background.

### Syntax
```

barTintColor
```

### Type

String

### Read/Write

Read + Write

### Remarks

This property determines the tint color of the toolbar bar background. It is specified as a string that contains a hex value.

### Remarks

```

//Sample code to set the barTintColor property of a ToolBar widget.

var item1 = new voltmx.ui.BarButtonItem({
    // All items must be created in the same manner.
    type: constants.BAR_BUTTON_SYSTEM_ITEM,
    style: constants.BAR_ITEM_STYLE_PLAIN,
    enabled: true,
    action: onClick,
    metaData: {
        systemItem: constants.SYSTEM_ITEM_REPLY
    }
});
item1.barTintColor = "FF0000";
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>isToolBarBottomAttached Property</summary>

* * *

This property determines if the toolbar is docked to the bottom of the form.

### Syntax
```

isToolBarBottomAttached
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

If True, the toolbar is docked to the bottom of the form. Width and Height properties are disabled in this case.

### Remarks

```

//Sample code to set the isToolBarBoottomAttached property of a ToolBar widget.

var item1 = new voltmx.ui.BarButtonItem({
    // All items must be created in the same manner.
    type: constants.BAR_BUTTON_SYSTEM_ITEM,
    style: constants.BAR_ITEM_STYLE_PLAIN,
    enabled: true,
    action: onClick,
    metaData: {
        systemItem: constants.SYSTEM_ITEM_REPLY
    }
});
item1.isToolBarBoottomAttached=true;
```

### Platform Availability

*   iOS

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
<details close markdown="block"><summary>tintColor Property</summary>

* * *

This property determines the tint color to apply to the toolbar items and bar button items. - hex string

### Syntax
```

tintColor
```

### Type

String

### Read/Write

Read + Write

### Remarks

The hex value is a 6 digit string. For example, red would be FF0000, green 00FF00, blue 0000FF, white FFFFFF, and black 000000.

### Example

```

//Sample code to set the tintColor property of a ToolBar widget.
frmToolbar.myToolbar.tintColor="FFFFFF00";
```

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>translucent Property</summary>

* * *

This property indicates if the toolbar is translucent.

### Syntax
```

translucent
```

### Type

Boolean

### Read/Write

Read + Write

### Remarks

This property is a boolean value indicating whether the toolbar bar is translucent.

### Example

```

//Sample code to set the translucent property of a ToolBar widget.
frmToolbar.myToolbar.translucent=true;
```

### Platform Availability

*   iOS

* * *

