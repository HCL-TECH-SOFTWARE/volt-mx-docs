                             

You are here: Action Sheet API for iOS

Action Sheet API for iOS
========================

Action sheet is a pop-up menu that consists of a list of options for a user to complete an action. It can also be used for notification dialog boxes or alert boxes. The Action Sheet API provides support for Apple's Action Sheets on iOS apps.

The process of implementing an Action Sheet involves two steps:

*   Creating an **ActionSheet** object.
    
*   Adding an item to the Action Sheet by creating an **ActionItem** object.
    

The Action Sheet API for iOS uses `voltmx.ui Namespace` and the following API elements.

| Function | Description |
| --- | --- |
| [voltmx.ui.ActionItem](voltmx.ui_functions_actionitem.md) | Constructs an ActionItem object for use in an ActionSheet object. |
| [voltmx.ui.ActionSheet](voltmx.ui_functions_actionsheet.md) | Constructs an ActionSheet object that represents an iOS Action Sheet. |

 

*   [ActionItem Object](actionitem_object.md)

| Property | Description |
| --- | --- |
| [enable](actionitem_properties.md#enable) | Enables or disables the ActionItem object. |

 

*   [ActionSheet Object](actionsheet_object_methods.md)

| Method | Description |
| --- | --- |
| [addAction](actionsheet_object_methods.md#addAction) | Adds an ActionItem object to the ActionSheet object. |
| [Dismiss](actionsheet_object_methods.md#Dismiss) | Dismisses the Action Sheet on display. |
| [setAnchorConfiguration](actionsheet_object_methods.md#setAnchorConfiguration) | Sets the anchor configuration information on iPads. |
| [show](actionsheet_object_methods.md#Show) | Shows the Action Sheet on the display. |

 

To create an **ActionSheet** object, use the [voltmx.ui.ActionSheet](voltmx.ui_functions_actionsheet.md) function. Then add an item to the Action Sheet, create an **ActionItem** object by invoking the [voltmx.ui.ActionItem](voltmx.ui_functions_actionitem.md) function. After you add an action item, the action sheet can be displayed by using the [show](actionsheet_object_methods.md#Show) method. Each **ActionItem** object has a callback function that is automatically invoked whenever the user taps the Action Sheet choice represented by the **ActionItem**. The callback function processes the user's input as needed.

To view the functionality of the Action Sheet API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ActionSheetAPI)

![](resources/prettify/onload.png)
