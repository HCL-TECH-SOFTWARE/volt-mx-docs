                            


Toast Object
============

The toast object contains a collection of methods and properties. You can configure various properties of the toast and invoke the show method to display the toast in your app.

Methods
-------

The Toast object provides the show method.


<details close markdown="block"><summary>show</summary> 

* * *

When you invoke the show method, the toast message is displayed on the screen.

<b>Syntax</b>

```
show();
```

<b>Example</b>

```
voltmx.ui.Toast({
    "text": "Hello World.",
    "duration": constants.TOAST_LENGTH_SHORT
});
toast.show();
```

<b>Parameters</b>

None

<b>Return Values</b>

None

<b>Platform Availability</b>

*   Android

* * *

</details>


Properties
----------

The Toast object provides the following properties.


<details close markdown="block"><summary>alignConfig</summary> 

* * *

Using the alignConfig property, you can configure the alignment of the toast message on the screen.

<b>Syntax</b>

```
alignConfig
```

<b>Example</b>

```
var offset = { 
    gravity: constant.TOAST_POS_MIDDLE_CENTER, 
    x: "100",
    y: "200"
};
myToast.alignConfig = offset;
```

<b>Type</b>

The alignConfig proeprty is a JavaScript object which contains key-value pairs to set the alignment of the toast. The following keys are supported.

| Constant | Description |
| --- | --- |
| gravity | Specifies the anchor point for the toast. The value for this key must be a member of the [Toast Position Constants](constants_namespace.md#ToastPosition). The default value for this key is `constants.TOAST_POS_MIDDLE_CENTER`. |
| x | Sets the x position of the toast relative to the middle center of the device's screen. The value of this key is only used when the `gravity` key is set to `constants.TOAST_POS_MIDDLE_CENTER`. |
| y | Sets the y position of the toast relative to the middle center of the device's screen. The value of this key is only used when the `gravity` key is set to `constants.TOAST_POS_MIDDLE_CENTER`. |

 

<b>Read/Write</b>

Read + Write

<b>Platform Availability</b>

*   Android

> **_Note:_** In apps that run on Android 11 (or later) devices and use TargetSDK API level 30 (and later), the alignConfig property does not work for Toast messages that are posted from the background.

* * *

</details>
<details close markdown="block"><summary>data</summary> 

* * *

Using the data property, you can provide the information that you want to display in the toast.

<b>Syntax</b>

```
data
```

<b>Example</b>

```
myToast.template = Tempflex;
myToast.widgetDataMap = { //specifying the data item IDs and the widgets in a template
    "Tempflex": "TempFlex", 
    "img1": "img1",
    "lbl1": "Lbl1"
};
myToast.data = { //specifying the data item IDs and the data values directly
    "img1": "header.png",
    "lbl1": "Label Custom Toast"
};
```

<b>Type</b>

A JavaScript object that contains key-value pairs consisting of the IDs of each widget and the values for the individual widgets.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

There are two ways in which you can initialize the object in the `data` property. The first way is to specify the widget IDs and the data values directly. The second is to specify the widget IDs including the widgets in a template. These are demonstrated in the **Example** provided below.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>isVisible</summary> 

* * *

Using the isVisible property, you can configure the visibility of a toast.

<b>Syntax</b>

```
isVisible
```

<b>Example</b>

```
myToast.isVisible = true;
```

Type

Boolean

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

If you set the value of this property to `true`, the toast is displayed after the invocation of the **show** method.

If you set the value of this property to `false`, the toast is not displayed even after the invocation of the **show** method.

<b>Platform Availability</b>

*   Android

* * *

</details>
<details close markdown="block"><summary>template</summary> 

* * *

Using the template property, you can set a FlexContainer widget as the template for a toast.

<b>Syntax</b>

```
template
```

<b>Example</b>

```
myToast.template = Tempflex;
myToast.widgetDataMap = {
    "Tempflex": "Tempflex",
    "img1": "img1",
    "lbl1": "lbl1"
};
myToast.data = {
    "img1": "header.png",
    "lbl1": "Label Custom Toast"
};
```

Type

A JavaScript object.

<b>Read/Write</b>

Read+Write

<b>Remarks</b>

If you do not set a template, it uses the default appearance for the toast. Only the following widgets can be used in the template of the toast.

*   Label widget
*   Link widget
*   RichText widget
*   Button widget
*   Image widget

> **_Note:_** An Image widget with a dynamic URL is not supported. Widget animations are also not supported.

<b>Platform Availability</b>

*   Android

> **_Note:_** In apps that run on Android 11 (or later) devices and use TargetSDK API level 30 (and later), Toast messages that use custom templates and are posted from the background are blocked by the OS.

* * *

</details>
<details close markdown="block"><summary>widgetDataMap</summary> 

* * *

Using the widgetDataMap property, you can map information between the widget IDs and keys in the data.

<b>Syntax</b>

```
widgetDataMap
```

<b>Example</b>

```
myToast.template = Tempflex;
myToast.widgetDataMap = {
    "Tempflex": "Tempflex",
    "img1": "img1",
    "lbl1": "lbl1"
};
myToast.data = {
    "img1": "header.png",
    "lbl1": "Label Custom Toast"
};
```

Type

A JavaScript object that contains key-value pairs consisting of the IDs of each data-item and keys.

<b>Read/Write</b>

Read + Write

<b>Remarks</b>

Using this property you can create a mapping between widget IDs and specific items in your app's data. Ensure that the widgetDataMap property accommodates all widget IDs, including widgets referred to in dynamic templates.

After your app provides the data mapping, it updates the data in the toast whenever the data changes.

<b>Platform Availability</b>

*   Android

* * *
</details>

![](resources/prettify/onload.png)
