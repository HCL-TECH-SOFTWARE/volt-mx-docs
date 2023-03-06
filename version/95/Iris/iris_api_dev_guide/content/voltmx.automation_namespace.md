                             


## <a id="voltmxautomation-namespace"></a> voltmx.automation Namespace


The voltmx.automation Namespace consists of the following API groups.

Widget APIs
-----------

**Widget Path**

Widget ID from root element (form, and master, etc.). Comma-separated strings from root to widget represented in an array. It is applicable for almost all widget APIs.

> **_Note:_** When you build an app in Test Mode, if the app contains components (with contract), the programmatic names of the properties must be unique. Ensure that the properties do not have the same name as that of any child widgets in the component or the parent FlexContainer widget. If a property and a widget (child or parent) have the same name, the property will not be honored. 

<br>

> **_Note:_** Whenever a Segment row is a part of Widget path, it refers to the top level flex. This flex ID should not be provided in the subsequent path.

<b>Syntax</b>

```

<widgetpath> [array of strings];
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

The voltmx.automation Namespace comprises the following Widget APIs.

<details close markdown="block"><summary id="actionSheetclick">voltmx.automation.actionSheet.click</summary> 

* * *

Triggers the click event on the provided action item, if it is visible. If the action item is not available, this API returns the No matching actionItem found message.

<b>Syntax</b>

```

voltmx.automation.actionSheet.click("actionItemTitle");
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| actionItemTitle [string] [Mandatory] | The name of the actionSheet item.|

 

<b>Example</b>

```
voltmx.automation.actionSheet.click("actionItemTitle");
```

<b>Return Values</b>

None

<b>Remarks</b>

Support for the record and playback features for this API is available from the V9 Service Pack 2 Fixpack 16 version of Volt MX Iris.

<b>Platform Availability</b>

*   iOS


* * *
</details>
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
<details close markdown="block"><summary>voltmx.automation.navigationBar.click</summary>

* * *

Triggers the click event on the barButton item of the navigation bar, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.navigationBar.click("barButtonId");
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| barButtonId [string] [Mandatory] | The ID of the BarButtonItem.|


<b>Return Values</b>

None

<b>Example</b>

```

voltmx.automation.navigationBar.click("barButtonId");

```

<b>Remarks</b>

Support for the record and playback features for this API is available from the V9 Service Pack 2 Fixpack 16 version of Volt MX Iris.

<b>Platform Availability</b>

*   iOS

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

## <a id="low-level-touch-and-gesture-apis"></a> Low-level Touch and Gesture APIs


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

<details close markdown="block"><summary id="gesture.swipe">voltmx.automation.gesture.swipe</summary>

* * *

Use this API to automate the Swipe gesture on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.gesture.swipe([<widgetpath>], <gestureInfo>);
```

<b>Parameters</b>

<table>
<tr>
<th>Parameters</th>
<th>Description</th>
</tr>
<tr>
<td>widgetpath [array of strings] [Mandatory]</td>
<td>Widget ID from root element (such as form, master, etc.). It is an array of comma-separated strings from root to widget.</td>
</tr>
<tr>
<td>gestureInfo [object] [Mandatory]</td>
<td>
<p>A JSON object that contains the following key-value pairs:</p>
<ul>
<li><b>point</b> [X co-ordinate, Y co-ordinate]: The coordinates at which the gesture must be applied.</li>
<li>
<b>swipeDirection</b> [Integer]: The direction in which the swipe gesture must be applied. You can provide the following values for the swipeDirection key:
<ul>
<li>1 → Right to left</li>
<li>2 → Left to right</li>
<li>3 → Bottom to top</li>
<li>4 → Top to bottom</li>
</ul>
</li>
<li><b>fingers</b> [Number]: The number of fingers to be used for the gesture.</li>
</ul>
</td>
</tr>
</table>


<b>Return Values</b>

None
 

<b>Example</b>

```
voltmx.automation.gesture.swipe(["Home Page", "appMenuOption2"], {
   “point”:[30,1],
  “swipeDirection”: 2, 
  “fingers”:1
});
```



<b>Platform Availability</b>

*   Android
*   iOS


* * *
</details>

<details close markdown="block"><summary id="gesture.tap">voltmx.automation.gesture.tap</summary>

* * *

Use this API to automate the Tap gesture on the specified widget, if it is visible and enabled.

<b>Syntax</b>

```

voltmx.automation.gesture.tap([<widgetpath>], <gestureInfo>);
```

<b>Parameters</b>

<table>
<tr>
<th>Parameters</th>
<th>Description</th>
</tr>
<tr>
<td>widgetpath [array of strings] [Mandatory]</td>
<td>Widget ID from root element (such as form, master, etc.). It is an array of comma-separated strings from root to widget.</td>
</tr>
<tr>
<td>gestureInfo [object] [Mandatory]</td>
<td>
<p>A JSON object that contains the following key-value pairs:</p>
<ul>
<li><b>point</b> [X co-ordinate, Y co-ordinate]: The coordinates at which the gesture must be applied.</li>
<li><b>taps</b> [Number]: The number of taps for the gesture to be applied.</li>
<li><b>fingers</b> [Number]: The number of fingers to be used for the gesture.</li>
</ul>
</td>
</tr>
</table>


<b>Return Values</b>

None
 

<b>Example</b>

```
voltmx.automation.gesture.tap(["Home Page", "appMenuOption2"], {
“point”:[30,1],
“taps”: 2,
“fingers”:1
});
```



<b>Platform Availability</b>

*   Android
*   iOS


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
<details close markdown="block"><summary id="isLoadingScreenVisible">voltmx.automation.playback.isLoadingScreenVisible</summary>

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
<details close markdown="block"><summary id="waitForLoadingScreenToDismiss">voltmx.automation.playback.waitForLoadingScreenToDismiss</summary>

* * *

This API blocks user action until the loading screen is dismissed (or disappears). This is an awaitable API.

<b>Syntax</b>

```
voltmx.automation.playback.waitForLoadingScreenToDismiss(<timeout in ms>);
```

<b>Input Parameters</b>

  
| Parameters | Description |
| --- | --- |
| timeout \[number\] | It is an optional parameter. The timeout parameter must be specified in milliseconds. If the timeout is not specified, the API waits until the loading screen disappears. |

 

<b>Example</b>

```
await voltmx.automation.playback.waitForLoadingScreenToDismiss("amountSpentLabel");
```

<b>Return Values</b>

Boolean

Returns true if the loading screen has disappeared or the loading screen has not been rendered.

Returns false when the timeout is reached.

<b>Platform Availability</b>

*   Android
*   iOS
*   SPA
*   ResponsiveWeb

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

<details close markdown="block"><summary>voltmx.automation.takeScreenshotAndCompare</summary>

* * *

This API allows the framework to capture a screenshot and send it to the Volt MX Automator tool along with a filename for the screenshot. The API then waits for the Automator tool to compare the screenshot with the baseline image and returns the result. This is an awaitable API.

<b>Syntax</b>

```

voltmx.automation.takeScreenshotAndCompare(screenshotFilename, options);
```

<b>Input Parameters</b>

  
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>screenshotFilename [String] [Mandatory]</td>
<td>The file name for the screenshot. Volt MX Iris saves the screenshot for a particular platform (and channel) in the respective folder with this file name.</td>
</tr>
<tr>
<td>options [JSON Object] [Mandatory]</td>
<td>
<p>The configuration details used to capture and compare the screenshot. A JSON Object that contains the following key-value pairs:</p>
<ul>
<li><b>threshold</b>[Number]: The threshold value used to compare the images. The value must be a number between 0 and 100 in percentage (for example, if you provide the value as 20, the threshold is 20%). The default value of this parameter is 0.</li>
<li><b>screenshotType</b>: The type of screenshot to be captured. The supported values for this parameter are fullscreen and widget.
<li><b>widgetpath</b>[array of strings]: The path of the widget (Widget ID) from the root element (for example, form or master) represented in an array of comma-separated strings. You must provide the value for this parameter in case of widget-level screenshots. If you do not specify this parameter, Volt MX Iris captures the screenshot of the entire current screen.</li>
</ul>
</td>
</tr>
</table>

 

<b>Example</b>

```
var options = {
    threshold = 1000,
    screenshotType = widget,
    widgetpath = ["frmHomeLogin", "btnLogin"]
}
voltmx.automation.takeScreenshotAndCompare("TestScreen", options);
```

<b>Return Values</b>

Boolean

* Returns true if both the images match.
* Returns false if the images do not match or if the images are not available.

<b>Platform Availability</b>

*   Android
*   iOS
*   Responsive Web

* * *
</details>



## <a id="cross-app-testing-apis"></a> Cross App Testing APIs


From the V9 Service Pack 2 Fixpack 16 release, Volt MX Iris introduces support for the following APIs for cross-app testing:

<details close markdown="block"><summary id ="getParentInfo">voltmx.automation.getParentInfo</summary>

* * *

This API returns a JSON Object (dictionary) that contains the details of the application that launched the current app.

<b>Syntax</b>

```

voltmx.automation.getParentInfo();
```

<b>Return Values</b>  
  
  A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |appName [String]|The name of the parent application.|
  |windowRef [Object]|A window reference object of the parent application.|
  |queryParams [JSON Object]|A JSON Object that contains all the queryParams that are passed while launching the current application. The return value is null if no params are passed.|
  
  
<b>Platform Availability</b>

*   Responsive Web

* * *
</details>


<details close markdown="block"><summary id="launchApp">voltmx.automation.launchApp</summary>

* * *

This API is used to launch a new app from the current app .Each time you invoke this API with a proper URL, a new window is launched with the specified URL.

This API retrieves the following keys from the `IntegrationTests.json` file:


The **Application URL** to be launched is derived from the **URL** key.

The **testresources URL** is derived from **protocol** and **ScriptURL** keys.

These keys are associated with the **appName** and are appended to the query parameters as the **parentApp** parameter, which is the name of the current application.


<b>Syntax</b>

```

voltmx.automation.launchApp(options);
```

<b>Input Parameters</b>  
  
  A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |appName [String] - Mandatory|The name of the application to be launched.|
  |queryParams [JSON Object] - Optional|A JSON Object that contains a list of all the parameters to be sent in the queryParams that are passed to the application being launched. The JSON Object contains the following key that can be passed along with other custom keys: <br> . <b>testPlan</b> [Optional]: The Test Plan that is to be used by the app after it is launched. If this parameter is not specified, the API uses the testPlan.js file for execution.|


<b>Example</b>

```
var options = {
    "appName": "AppTwo",
    "queryParams": {
        "testPlan": "signUpPlan"
    }
}
var targetWindow = voltmx.automation.launchApp(options);
```

<b>Return Values</b> 

A WindowProxy (window reference) object which is a reference to the newly opened window.

If the specified window is not opened, the API returns a Null value.

  
<b>Platform Availability</b>

*   Responsive Web

* * *
</details>


<details close markdown="block"><summary id ="sendEvent">voltmx.automation.sendEvent</summary>

* * *

This API is used to send a message to another app that is associated with the current app. By using this API, you can resume the second application from the first and vice versa.


<b>Syntax</b>

```

voltmx.automation.sendEvent(options);
```

<b>Input Parameters</b>  
  
  _options_ - A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |windowRef [Object]|A window reference object returned from the [launchApp](#launchApp) API.|
  |eventName [String]|The name of the event for which the API must wait. The event name can be any user-defined string.|
  |appName [String]|The name of the app to which the event must be sent.|
  |data|The data that needs to be sent to the other app. The data can be of any datatype.|

<b>Example</b>

```
var options = {
    "windowRef": targetWindow,
    "eventName": 'emailid',
    "appName": "AppTwo",
    "data": {
        "email": "test@test.com"
    }
}
voltmx.automation.sendEvent(options);
```

<b>Return Values</b> 

Boolean

Returns true if the app is already launched and the message is posted.

Returns false if the recipient app is not launched and open.

  
<b>Platform Availability</b>

*   Responsive Web

* * *
</details>


<details close markdown="block"><summary id="sendEventToParent">voltmx.automation.sendEventToParent</summary>

* * *

This API is used to send a message to the parent app that is associated with the current app. By using this API, you can resume the application that launched the current application.


<b>Syntax</b>

```

voltmx.automation.sendEventToParent(options);;
```

<b>Input Parameters</b>  
  
  _options_ - A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |eventName [String]|The name of the event for which the API must wait. The event name can be any user-defined string.|
  |data|The data that needs to be sent to the other app. The data can be of any datatype.|


<b>Example</b>

```
var options = {     
  "eventName": 'emailid',
    "data": {
        "email": "test@test.com"
    }
}
voltmx.automation.sendEventToParent(options);
```

<b>Return Values</b> 

Boolean

Returns true if the app is already launched and the message is posted.

Returns false if the recipient app is not launched and open.

  
<b>Platform Availability</b>

*   Responsive Web

* * *
</details>


<details close markdown="block"><summary id="waitForEvent">voltmx.automation.waitForEvent</summary>

* * *

This API waits for the instructions from the other app that this API is used for. This API waits indefinitely to receive the instruction (with the same eventName) from the other app to resume execution.


<b>Syntax</b>

```

voltmx.automation.waitForEvent(options);
```

<b>Input Parameters</b>  
  
  _options_ - A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |maxWait[number]|It is an optional parameter. The maximum time in milliseconds for which the API must wait for the specified event to occur.|
  |eventName [String]|The name of the event for which the API must wait. The event name can be any user-defined string.|


<b>Example</b>

```
var options = {
maxWait : 2000,
eventName : "resume"
}
voltmx.automation.waitForEvent(options);
```

<b>Return Values</b> 

A JSON Object with the following key-value pairs:

* **eventReceived**: A boolean value that indicates if the event is received in time or not.
* **data**: A data object that is sent from the second app.

  
<b>Platform Availability</b>

*   Responsive Web

* * *
</details>


<details close markdown="block"><summary id="sendMessage">voltmx.automation.webSocket.sendMessage</summary>

* * *

This API is used to send messages to other client apps that are connected to the same WebSocket Server.


<b>Syntax</b>

```

voltmx.automation.webSocket.sendMessage(options);
```

<b>Input Parameters</b>  
  
  _options_ - A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |eventName [String]|The name of the event that must be executed in App Factory.|
  |data [String/Number/Object]|Additional data that must be passed in the message.|
  |to [String] - Optional|The Selenium client receiver of the non-voltmx app that uses the same WebSocket for communication.<br>The default value of this parameter is the clientID of the app from App Factory.<br>To send a message to a client app that is not on App Factory, set the value of this parameter as the clientID of the app.|


<b>Example</b>

```
voltmx.automation.webSocket.sendMessage ({
  "eventName": "<authenticate>",
 "data":string/number/object,
 "to": "<seleniumClientId/AppiumClientId>"
 }
);
```

  
<b>Platform Availability</b>

*  Android
*  iOS
*  Responsive Web

* * *
</details>

<details close markdown="block"><summary id="waitForMessage">voltmx.automation.webSocket.waitForMessage</summary>

* * *

This API waits until the specified event is received. This is an awaitable API.


<b>Syntax</b>

```

voltmx.automation.webSocket.waitForMessage(options);
```

<b>Input Parameters</b>  
  
  _options_ - A JSON Object that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |eventName [String] - Mandatory|The event that needs to be executed.<br>The API internally waits until it receives a message from the Selenium client with the same eventName.|
  |maxWait [Number] - Optional|The maximum amount of time (in milliseconds) that the API must wait for the event to be received.|



<b>Example</b>

```
await voltmx.automation.webSocket.waitForMessage(
{
 "eventName" : "executionDone"
 }
);
```

  
<b>Platform Availability</b>

*  Android
*  iOS
*  Responsive Web

* * *
</details>



## <a name="pom"></a> Page Object Model APIs

From the V9 Service Pack 5 release, Volt MX Iris introduces support for the following APIs to support the Page Object Model approach in Jasmine Test Automation:

<details close markdown="block"><summary id="getPageObjects">voltmx.automation.pageObjectModel.getPageObjects</summary>

* * *

Use this API to retrieve and return the Page Objects for a specified Page.


<b>Syntax</b>

```
voltmx.automation.pageObjectModel.getPageObjects();
```

<b>Input Parameters</b>  
  
An array of JavaScript Objects that contains the following keys:
  
  |Parameters|Description|
  | --- | --- |
  |appName [String] [Mandatory]|The name of the app or project that the Page Object Model belongs to.|
  |id [String] [Mandatory]|The name of the Form, Template, or Component for which the Page Object Model is to be retrieved.|
  |type [Constant] [Optional]|It is an optional parameter. The type of Page for which the Page Objects are to be retrieved.<br>The type parameter can have the following values:<br> **.** ***voltmx.automation.pageObjectModel.TYPE_FORM*** [Constant]: Retrieve Page Objects for Forms.<br> **.** ***voltmx.automation.pageObjectModel.TYPE_COMPONENT*** [Constant]: Retrieve Page Objects for Components.<br> **.** ***voltmx.automation.pageObjectModel.TYPE_TEMPLATE*** [Constant]: Retrieve Page Objects for Templates.|


<b>Example 1</b>

```
var pageobjects = voltmx.automation.pageObjectModel.getPageObjects([
    {"appName" : "App1",  "id": "Form1", "type" : voltmx.automation.pageObjectModel.TYPE_FORM},
    {"appName" : "App1", "id": "comp.jasmineComp.comp1.comp1", "type" : voltmx.automation.pageObjectModel.TYPE_COMPONENT},
    {"appName" : "App1",  "id": "segRowTemplate1", "type" : voltmx.automation.pageObjectModel.TYPE_TEMPLATE}
]);
```

<b>Example 2</b>

```
var [form1_pom, form2_pom] = voltmx.automation.pageObjectModel.getPageObjects([
	{"appName" : "App1",  "id": "Form1"},
	{"appName" : "App1",  "id": "Form2"}
]);
```

<b>Return Values</b>

An array of Page Objects for the specified Pages in the JavaScript Object format. The order of the Page Objects returned and the size of the array returned is the same as the input array.

The API returns a Null value if a Page Object is not found for the specified Page.


<b>Remarks</b>

Use this API in a Test Case that uses Page Objects.

Here is a sample Test Case that uses the voltmx.automation.pageObjectModel.getPageObjects API to retrieve Page Object Models:

```
it("testCase1", async function () {
    var _pageobjects = voltmx.automation.pageObjectModel.getPageObjects([
 
        { "appName": "App1", "id": "Form1", "type": voltmx.automation.pageObjectModel.TYPE_FORM },
 
        { "appName": "App1", "id": "comp.jasmineComp.comp1.comp1", "type": voltmx.automation.pageObjectModel.TYPE_COMPONENT },
 
        { "appName": "App1", "id": "segRowTemplate1", "type": voltmx.automation.pageObjectModel.TYPE_TEMPLATE }
    ]);
    var Form1_pom = _pageobjects[0];
    var comp1_pom = _pageobjects[1];
    var template1_pom = _pageobjects[2];
 
    await voltmx.automation.playback.waitFor([Form1_pom._path, Form1_pom.Button1]);
    voltmx.automation.button.click([Form1_pom._path, Form1_pom.Button1]); //Form
 
    voltmx.automation.button.click([Form1_pom._path, Form1_pom.comp1Id, comp1_pom.BtnInComponent]); //Component
 
    voltmx.automation.button.click([Form1_pom._path, template1_pom.BtnInTemplate]); //Template	
});
]);
```

<b>Platform Availability</b>

*  Android
*  iOS
*  Responsive Web

* * *
</details>


Existing Volt MX Iris APIs
--------------------------------

You can use the following existing Volt MX Iris APIs for Automation. The respective Syntax and usage remain the same.

*   [voltmx.print](voltmx_functions.md#print)
    
*   [voltmx.os.deviceInfo](voltmx.os_functions.md#deviceInfo)

![](resources/prettify/onload.png)
