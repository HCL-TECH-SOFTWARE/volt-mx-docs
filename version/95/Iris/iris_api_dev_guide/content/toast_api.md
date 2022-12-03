                            

You are here: Toast API

Toast API
=========

A Toast is a small feedback message that appears for a short time on the screen. Toasts can be used to display informative messages, and they are non-interactive.

The Toast API uses the `voltmx.ui Namespace` and the following API elements.

[voltmx.ui Namespace](voltmx.ui_functions_toast.md)

  
| Function | Description |
| --- | --- |
| [voltmx.ui.Toast](voltmx.ui_functions_toast.md#Toast) | Creates a Toast object. |

 

[Toast Object](toast_properties.md)

| Method | Description |
| --- | --- |
| [show](toast_properties.md#Show) | Displays the toast message on screen. |

 

| Property | Description |
| --- | --- |
| [alignConfig](toast_properties.md#alignConfig) | Sets the alignment of the toast. |
| [data](toast_properties.md#data) | Provides the information that you want to display in the toast. |
| [isVisible](toast_properties.md#isVisible) | Configures the visibility of a toast. |
| [template](toast_properties.md#template) | Holds a FlexContainer that is used as the template for the custom toast. |
| [widgetDataMap](toast_properties.md#widgetDataMap) | Maps the information between widget IDs and keys in the data. |

 

Using the [voltmx.ui.Toast](voltmx.ui_functions_toast.md#Toast) function, you can create a toast object, define the text message that you want to display, and the duration of the toast on the screen.

```
var toast = new voltmx.ui.Toast({"text": "This is the toast's text.",   
"duration": constants.TOAST_LENGTH_SHORT});  
toast.show();
```

Use the [](toast_properties.md#alignConfig)[alignConfig](toast_properties.md#alignConfig) property to set the alignment of the toast object. You can check the visibility of the toast using the [isVisible](toast_properties.md#isVisible) property. To set the text to be displayed on the toast for different widgets, use the [data](toast_properties.md#data) property. Further, you can customize the toast using the [template](toast_properties.md#template) property. If you do not set a template, a default text style is applied to the toast. Configure the [widgetDataMap](toast_properties.md#widgetDataMap) property to update the toast each time there is a change in data. After you configure the properties of the toast, invoke the [Toast.show](toast_properties.md#Show) function to display the toast on the screen.

> **_Important:_** The Toast API is only available for the Android platform.

### Toast Templates

You can use templates to customize the appearance of toasts. To set a template for a toast, assign a FlexContainer widget to the toast object's [template](toast_properties.md#template) property. You can only use the following widgets in the template.

*   Label widget
*   Link widget
*   RichText widget
*   Button widget
*   Image widget

> **_Important:_** Usage of widgets other than those that are mentioned earlier, would result in undefined behavior.  
An image widget with a dynamic URL and widget animations are not supported.

To view the functionality of the Toast API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__238x36.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ToastAPI)

![](resources/prettify/onload.png)
