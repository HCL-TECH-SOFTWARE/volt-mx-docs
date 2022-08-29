                             


voltmx.automation Namespace
=========================

The voltmx.automation Namespace consists of the following API groups.

Widget APIs
-----------

**Widget Path**

Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. It is applicable for almost all widget APIs.

> **_Note:_** When you build an app in Test Mode, if the app contains components (with contract), the programmatic names of the properties must be unique. Ensure that the properties do not have the same name as that of any child widgets in the component or the parent FlexContainer widget. If a property and a widget (child or parent) have the same name, the property will not be honored.

> **_Note:_** Whenever a Segment row is a part of Widget path, it refers to the top level flex. This flex ID should not be provided in the subsequent path.

<b>Syntax</b>

```

<widgetpath> \[array of strings\];
```

<b>Mandatory/Optional</b>

Mandatory

<b>Example</b>

*   Each string denotes the widget ID in the hierarchy.
    

```
voltmx.automation.button.click(["frmHomeLogin", "btnLogin"]);

//Here, ["frmHomeLogin","btnLogin"]is the widget path.

```

*   The widget path string can consist of an array indexer for SegmentedUI widget to denote the corresponding row.
    

```
voltmx.automation.button.click(["frmHomeLogin", "segUi1[0,2]", "btnLogin"]);
voltmx.automation.button.click(["frmHomeLogin", "segUi1[2]", "btnLogin"]);
```

*   The widget path string can be a date for a Calendar cell template.

```
voltmx.automation.button.click(["frmHomeLogin", "calendar11[05,05,2016]", "btnLogin"]);
```

*   The widget path string can be the friendly name of a form.

```
voltmx.automation.button.click(["Login Page", "userwidget1", "btnLogin"]);
```

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

The voltmx.automation Namespace comprises of the following Widget APIs.


<details close markdown="block"><summary>voltmx.automation.alert.click</summary> 

* * *

Clicks the provided button, if visible, for the Alert. If multiple alerts are simultaneously shown, this API clicks the most recent alert displayed on the screen.

<b>Syntax</b>

```

voltmx.automation.alert.click(<buttonIndex>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| buttonIndex \[0 or 1\] \[Optional\] | Alert widget supports two buttons. This APIs triggers the click on the YES label if the index is 0, and it triggers the click on the NO label if the index is 1. If the [alert type](voltmx.ui_functions_alert.md#alertType) is **information**, this API triggers the click on the OK label if the index is 0. If you do not pass any buttonIndex, the API triggers the click on the NO label for confirmation alerts and the OK label for information alerts. |

 

<b>Example</b>

```
voltmx.automation.alert.click(0);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows

<b>Remarks</b>

While using Jasmine Test Automation on the Adaptive Web or Responsive Web platforms, you can use the [spyon](https://jasmine.github.io/api/3.1/global.md#spyOn) API that is provided by Jasmine to gain more control over the alerts.

For Example, you can use the `var spy = spyOn(window, '<method>').and.returnValue(<value>);` code snippet to always return the value that you specify.

The value of <method> and <value >depend on the [type of alert](voltmx.ui_functions_alert.md#alertType).  

*   For **information** and **error** alerts, replace `<method>` with `alert`, and replace the `<value>` parameter with `true`.  
    
*   For **confirmation** alerts, replace `<method>` with `confirm`, and replace the `<value>` parameter with either `true` or `false`.

<b>Example</b>

> ```
if("testcase", async
>     function() {
>         var spy = spyOn(window, 'confirm').and.returnValue(true);
>         voltmx.automation.button.click(["Form", "btn"]);
>         expect(spy).toBe(true);
>     });
> ```

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.box.click</summary>

* * *

Triggers the Box click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.box.click (<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```
voltmx.automation.box.click(["frmHomeLogin","boxId"]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and Responsive Web

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.button.click</summary>

* * *

Triggers the Button click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.button.click (<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```

voltmx.automation.button.click(["frmHomeLogin","btnLogin"]);
voltmx.automation.button.click(["frmHomeLogin","segUi1[0,2]", "btnLogin"]);
voltmx.automation.button.click(["frmHomeLogin","segUi1[2]", "btnLogin"]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.calendar.selectDate</summary>

* * *

Triggers the Calendar click event on the specified widget, if it is visible and enabled.

> **_Note:_** Supported view type is pop-up grid

<b>Syntax</b>

```

voltmx.automation.calendar.selectDate (<widgetpath>, <newDate>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| newDate \[array\] \[Mandatory\] | Array representation of a date in mm/dd/yyyy format as \[mm, dd, yyyy\] co-ordinate. This format is irrespective of the calendar format. |

 

<b>Example</b>

```

voltmx.automation.calendar.selectDate(["frmHomeLogin","calenderId"], [12,15,2017]);
```

<b>Return Values</b>

None

> **_Note:_** Automation is supported only for the Calendar default view.

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.checkboxgroup.click</summary>

* * *

Triggers the CheckBoxGroup click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.checkboxgroup.click (<widgetpath>, <chkBoxKey>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| chkBoxKey \[array/integer\] \[Mandatory\] | CheckBoxGroup item that is to be clicked. > **_Note:_** The value of the chkBoxKey must be an Integer for the Table viewType. For all other viewTypes, the value of the chkBoxKey must be an array. |

 

<b>Example</b>

```

voltmx.automation.checkboxgroup.click(["frmHomeLogin","checkboxgroupId"], "checkBoxKey");
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.flexcontainer.click</summary>

* * *

Triggers the FlexContainer click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.flexcontainer.click (<widgetpath>);
```


<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```
voltmx.automation.flexcontainer.click(["frmHomeLogin","flexContainerId"]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.listbox.selectItem</summary>

* * *

Triggers the ListBox click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.listbox.selectItem(<widgetpath>, <key>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| key \[string/integer\] \[Mandatory\] | Indicates the key in the ListBox for which item is to be clicked. > **_Note:_** The value of the key must be an Integer for the Table viewType. For all other viewTypes, the value of the key must be a string. |

 

<b>Return Values</b>

None

<b>Example</b>

```

voltmx.automation.listbox.selectItem(["frmHomeLogin","listbox"], "key1");

```

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.radiobuttongroup.click</summary>

* * *

Triggers the RadioButtonGroup click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.radiobuttongroup.click(<widgetpath>, <key>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| key \[string/integer\] \[Mandatory\] | Radiobutton key that needs to be clicked. > **_Note:_** The value of the key must be an Integer for the Table viewType. For all other viewTypes, the value of the key must be a string. |

 

<b>Example</b>

```
voltmx.automation.radiobuttongroup.click(["frmHomeLogin","rdBtnId"], "rdBtnkey");
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.segmentedui.click</summary>

* * *

Triggers the SegmentedUI click event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.segmentedui.click(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```
voltmx.automation.segmentedui.click(["frmHomeLogin","segmentedUIId[0,2]"]);
```

<b>Return Values</b>

None

> **_Note:_** Automation is supported only for the Segment table view.

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.segmentedui.pull</summary>

* * *

Triggers the onPull event on the SegmentedUI, if it is set.

<b>Syntax</b>

```

voltmx.automation.segmentedui.pull(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

<b>Example</b>

```
voltmx.automation.segmentedui.pull(["frmHomeLogin","segmentedUIId"]);

```

<b>Return Values</b>

None

> **_Note:_** Automation is supported only for the Segment table view.

<b>Platform Availability</b>

*   Android
*   iOS
*   ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.segmentedui.push</summary>

* * *

Triggers the onPush event on the SegmentedUI, if it is set.

<b>Syntax</b>

```

voltmx.automation.segmentedui.push(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

<b>Example</b>

```
voltmx.automation.segmentedui.push(["frmHomeLogin"," segmentedUIId "]);
```

<b>Return Values</b>

None

> **_Note:_** Automation is supported only for the Segment table view.

<b>Platform Availability</b>

*   Android
*   iOS
*   ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.segmentedui.scrollToRow</summary>

* * *

Triggers the segment to scroll to the row specified by the index of the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.segmentedui.scrollToRow(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```
voltmx.automation.segmentedui.scrollToRow(["frmHomeLogin"," segmentedUIId[12]"]);
voltmx.automation.segmentedui.scrollToRow(["frmHomeLogin"," segmentedUIId[1,3]"]);

```

<b>Return Values</b>

None

> **_Note:_** Automation is supported only for the Segment table view.

Remarks

The voltmx.automation.segmentedui.scrollToRow API does not work on the section header of the Segment.

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.scrollToWidget</summary>

* * *

Scrolls to ensure that the widget appears in view. It is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.scrollToWidget(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

 

<b>Example</b>

```
await voltmx.automation.scrollToWidget(["frmHomeLogin","btnLogin"]);

```

<b>Return Values</b>

None

> **_Note:_** If segment is a part of widgetpath, then it scrolls only to the segment.

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.slider.slide</summary>

* * *

Triggers the Slider slide event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.slider.slide(<widgetpath>, <newValue>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| newValue \[number\] \[Mandatory\] | New slider value within a minimum and maximum range. |

 

<b>Example</b>

```
voltmx.automation.slider.slide(["frmHomeLogin","sliderId"], 25);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.switch.toggle</summary>

* * *

Toggles the Switch between ON/OFF on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.switch.toggle(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |

<b>Example</b>

```
voltmx.automation.switch.toggle(["frmHomeLogin","switchId"]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.tabpane.click</summary>

* * *

Clicks the tab with the specified tabID on the TabPane widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.tabpane.click(<widgetpath>, <tabID>);
```

<b>Input Parameter</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| tabID \[string\] \[Mandatory\] | The tabID name. |

 

<b>Example</b>

```
voltmx.automation.tabpane.click(["frmHomeLogin","tabpaneId"], ”tabId”);
```

> **_Note:_** Automation is supported only for the TabPane default view.

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.textbox.enterText</summary>

* * *

Enters the specified text into the TextBox, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.textbox.enterText(<widgetpath>, <newText>, <Array of objects with options to raise an event>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| newText \[string\] \[Mandatory\] | New text to be set to the TextBox. Specify null to clear the text. |
| Array of Objects \[array of objects\] \[Optional\] | An array of JSON Objects where each object contains options that can be specified as part of the KeyboardEvent Object, such as key, keyCode, [Event Modifier Initializers](https://www.w3.org/TR/uievents#event-modifier-initializers). > **_Note:_** This parameter is only available on the Responsive Web platform. |

 

<b>Example</b>

```
voltmx.automation.textbox.enterText(["frmHomeLogin","textbox"], “sampleText”, [{ modifierCapsLock: true,
        key: 'A'
    }, {
        modifierCapsLock: true,
        key: 'B'
    }, {
        modifierCapsLock: false,
        key: 'c'
    }, {
        modifierCapsLock: false,
        key: 'f'
    }, {
        modifierCapsLock: false,
        key: 'd'
    }, {
        modifierCapsLock: true,
        key: 'E'
    }, {
        modifierCapsLock: false,
        keyCode: 13
    } // For enter key
]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA
*   Responsive Web

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.textarea.enterText</summary>

* * *

Enters the specified text into the TextArea, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.textarea.enterText(<widgetpath>, <newText>, <Array of objects with options to raise an event>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| newText \[string\] \[Mandatory\] | New text to be set to the TextArea. Specify null to clear the text. |
| Array of Objects \[array of objects\] \[Optional\] | An array of JSON Objects where each object contains options that can be specified as part of the KeyboardEvent Object, such as key, keyCode, [Event Modifier Initializers](https://www.w3.org/TR/uievents#event-modifier-initializers). > **_Note:_** This parameter is only available on the Responsive Web platform. |

 

<b>Example</b>

```
voltmx.automation.textarea.enterText(["frmHomeLogin","textAreaId"], "sample", [{
        modifierCapsLock: true,
        key: 'A'
    }, {
        modifierCapsLock: true,
        key: 'B'
    }, {
        modifierCapsLock: false,
        key: 'c'
    }, {
        modifierCapsLock: false,
        key: 'f'
    }, {
        modifierCapsLock: false,
        key: 'd'
    }, {
        modifierCapsLock: true,
        key: 'E'
    }, {
        modifierCapsLock: false,
        keyCode: 13
 } // For enter key
]);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA
*   Responsive Web

* * *
</details>

Low-level Touch and Gesture APIs
--------------------------------

The voltmx.automation Namespace comprises of the following Low-level Touch and Gesture APIs.

<details close markdown="block"><summary>voltmx.automation.widget.touch</summary>

* * *

Triggers the touch event on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.widget.touch(<widgetpath>, <startPoint>, <movePoints>, <endpoint>, <Object with options for raising an event>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| startPoint \[array\] \[Mandatory\] | Represents the start point as \[x, y\] co-ordinates. Alternatively, this can be assigned a null value. |
| movePoints \[array\] \[Mandatory\] | Represents an array of interim points such as \[\[x1, y1\], \[x2, y2\]…\[xn, yn\]\]. Alternatively, this can be assigned a null value. |
| endpoint \[array\] \[Mandatory\] | Represents the end point as \[x, y\] co-ordinates. Alternatively, this can be assigned a null value. |
| Array of Objects \[array of objects\] \[Optional\] | An array of JSON Objects where each object contains options that can be specified as part of the KeyboardEvent Object, such as [Event Modifier Initializers](https://www.w3.org/TR/uievents#event-modifier-initializers). > **_Note:_** This parameter is only available on the Responsive Web platform. |

 

<b>Example</b>

```
voltmx.automation.widget.touch(["Home Page", "appMenuOption2"], [1, 1], [
    [30, 1],
    [50, 1],
    [60, 1],
] 
  [100,1]
  {modifierCapsLock: true}
  );
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA
*   Responsive Web

* * *
</details>

Miscellaneous Automation APIs
-----------------------------

The voltmx.automation Namespace comprises of the following miscellaneous Automation APIs.

<details close markdown="block"><summary>voltmx.automation.getCurrentForm</summary>

* * *

Returns the name of the current Form.

<b>Syntax</b>

```

voltmx.automation.getCurrentForm();
```

<b>Input Parameters</b>

None

 

<b>Example</b>

```
voltmx.automation.getCurrentForm();
```

<b>Return Values</b>

String - Returns the Form ID of the current Form.

<b>Platform Availability</b>

*   Android
*   iOS
*   SPA
*   Responsive Web

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.getWidgetsByFilter</summary>

* * *

Retrieves the paths of the child widgets of the container widget, based on the filters applied.

<b>Syntax</b>

```

voltmx.automation.getWidgetsByFilter(ContainerWidgetPath, Filters, SearchableWidgets);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| containerWidgetPath\[Array\] | This is a mandatory parameter. This parameter specifies the path of the container widget for which the search and filter criteria must be applied. The ContainerWidgetPath parameter only accepts the paths of container widgets such as Form and FlexContainer and FlexScrollContainer widgets. > **_Note:_** Volt MX Iris does not provide support to apply search filters for the child widgets of group widgets (such as Segment, ListBox, TabPane, and Components). However, you can search for the properties of the group widgets. |
| filters \[Array\] | This is a mandatory parameter. This parameter contains an array of search conditions. If you provide multiple filters, only the widget paths that satisfy all the filters are returned. The array for the Filters parameter must contain the following information: **property** \[String\]: Specifies the widget property for which the search criteria applies. **value** \[Object\]: Specifies the value of the widget property for which the search criteria applies. The JSON Object can have a String, Number, or Boolean value. **caseSensitive** \[Boolean\]: Specifies if the search criteria for the property parameter must consider the case of the string. The default value for this key is **true**. This is an optional parameter and is only applicable if the type of the value parameter is String. **searchCriteria** \[Constant\]: Specifies the criteria for searching the value of a property. This is an optional parameter and can have the following constant values for supported criteria:voltmx.automation.SEARCH\_CRITERIA\_EQUALvoltmx.automation.SEARCH\_CRITERIA\_CONTAINSvoltmx.automation.SEARCH\_CRITERIA\_STARTSWITHvoltmx.automation.SEARCH\_CRITERIA\_ENDSWITHvoltmx.automation.SEARCH\_CRITERIA\_GREATERvoltmx.automation.SEARCH\_CRITERIA\_GREATER\_EQUALvoltmx.automation.SEARCH\_CRITERIA\_LESSERvoltmx.automation.SEARCH\_CRITERIA\_LESSER\_EQUAL> **_Note:_** The default value for this parameter is voltmx.automation.SEARCH\_CRITERIA\_EQUAL. |
| searchableWidgets \[Array of Constants\] | This is an optional parameter. This parameter contains an array of constants that specify the widgets to be searched. The array for the searchableWidgets parameter can contain the following widget constants: voltmx.automation.widget.BUTTON voltmx.automation.widget.CALENDAR voltmx.automation.widget.CHECKBOXGROUP voltmx.automation.widget.FLEXCONTAINER voltmx.automation.widget.FLEXSCROLLCONTAINER voltmx.automation.widget.LABEL voltmx.automation.widget.LISTBOX voltmx.automation.widget.RADIOBUTTONGROUP voltmx.automation.widget.SEGMENTEDUI voltmx.automation.widget.SLIDER voltmx.automation.widget.SWITCH voltmx.automation.widget.TABPANE voltmx.automation.widget.TEXTAREA voltmx.automation.widget.TEXTBOX |

 

<b>Example</b> 1

```
widgetList= voltmx.automation.getWidgetsByFilter(
  [“form1”],
  [
    {
      property: “text”,
      value: “Buttontext”,
      caseSensitive: false,
      searchCriteria: voltmx.automation.SEARCH_CRITERIA_CONTAINS
    }
  ],
  [voltmx.automation.widget.BUTTON]
  );

voltmx.automation.button.click(widgetList[0]);
```

<b>Example</b> 2

```
widgetList= voltmx.automation.getWidgetsByFilter(
  [“form1”, “flex1”],
  [
    {
      property: “text”,
      value: “Buttontext”, 
      caseSensitive: false, 
      searchCriteria: voltmx.automation.SEARCH_CRITERIA_STARTSWITH
    },
    {
      property: “isVisible”, 
      value: true, 
      searchCriteria: voltmx.automation.SEARCH_CRITERIA_EQUAL
    },
    {
      property : "zIndex",
      value : 2, 
      searchCriteria :voltmx.automation.SEARCH_CRITERIA_GREATER_EQUAL
    }
  ],
  [
    voltmx.automation.widget.BUTTON,
    voltmx.automation.widget.LABEL,
    voltmx.automation.widget.TEXTBOX
  ]
);

voltmx.automation.waitFor(widgetList[0]);
```

<b>Return Values</b>

Array of widget paths (in an array format) that satisfy the search criteria.

For Example, `[ [“Form1”, “bnt1”], [“Form2”, “btn2”] ]`

<b>Platform Availability</b>

*   Android
*   iOS
*   SPA
*   Responsive Web

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.playback.isLoadingScreenVisible</summary>

* * *

Returns the status of visibility of the loading screen.

<b>Syntax</b>

```

voltmx.automation.playback.isLoadingScreenVisible();
```

<b>Input Parameters</b>

None

 

<b>Example</b>

```
await voltmx.automation.playback.isLoadingScreenVisible();
```

<b>Return Values</b>

Boolean

Returns true if the loading screen is visible on the screen.

Returns false if the loading screen is not visible on the screen.

<b>Platform Availability</b>

*   Android
*   iOS
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.playback.wait</summary>

* * *

Introduces a delay time in the playback as specified. It is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.playback.wait(<delayTime>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| delayTime \[number\] \[Mandatory\] | Time delay in millisecond. |

 

<b>Example</b>

```
await voltmx.automation.playback.wait(2000);
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.playback.waitFor</summary>

* * *

Waits for the widget to load completely. It is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.playback.waitFor(<widgetpath> , <timeout in ms>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| timeout \[number\] | It is an optional parameter. The timeout parameter must be specified in milliseconds. If the timeout is not specified, the API waits until the widget appears. |

 

<b>Example</b>

```
await voltmx.automation.playback.waitFor(["Home Page", "amountSpentLabel"]);
```

<b>Return Values</b>

Boolean

Returns true if the widget is found within the timeout period.

Returns false if the wdget is not found within the timeout period.

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.playback.waitForLoadingScreenToBeDismissed</summary>

* * *

Waits for the loading screen to be dismissed or disappear. It is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.playback.waitForLoadingScreenToBeDismissed(<timeout in ms>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| timeout \[number\] | It is an optional parameter. The timeout parameter must be specified in milliseconds. If the timeout is not specified, the API waits until the widget appears. |

 

<b>Example</b>

```
await voltmx.automation.playback.waitForLoadingScreenToBeDismissed("amountSpentLabel");
```

<b>Return Values</b>

Boolean

Returns true if there is no loading screen or the loading screen has disappeared.

Returns false if the loading screen is visible on the screen.

<b>Platform Availability</b>

*   Android
*   iOS
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.widget.getWidgetProperty</summary>

* * *

Returns the particular Volt MX-defined property on the specified widget.

<b>Syntax</b>

```

voltmx.automation.widget.getWidgetProperty(<widgetpath>, <propertyName>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. |
| propertyName \[string\] \[Mandatory\] | Widget property name. |

 

<b>Example</b>

```
var labelText = voltmx.automation.widget.getWidgetProperty (["Home Page", "amountSpentLabel"], "text");
```

<b>Return Values</b>

The value of the property specified for the widget

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.device.deviceBack</summary>

* * *

Invokes the back action of the device. It is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.device.deviceBack();
```

<b>Input Parameters</b>

None

<b>Example</b>

```
await voltmx.automation.device.deviceBack();
```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows
*   SPA and ResponsiveWeb

* * *

</details>
<details close markdown="block"><summary>voltmx.automation.capture</summary>

* * *

The api takes a screenshot of the widget passed. If the widget does not pass, the screenshot captures the entire screen.

<b>Syntax</b>

```

voltmx.automation.capture(<widgetpath>);
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| widgetpath \[array of strings\] \[Mandatory\] | Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. If you do not specify this parameter, the screenshot of the entire current screen is taken. |

 

<b>Example</b>

```
voltmx.automation.capture(["frmHomeLogin","btnLogin"]);
voltmx.automation.capture();

```

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android
*   iOS
*   Windows

* * *
</details>

Existing Volt MX Iris APIs
--------------------------------

You can use the following existing Volt MX Iris APIs for Automation. The respective Syntax and usage remain the same.

*   [voltmx.print](voltmx_functions.md#print)
    
*   [voltmx.os.deviceInfo](voltmx.os_functions.md#deviceInfo)

![](resources/prettify/onload.png)
