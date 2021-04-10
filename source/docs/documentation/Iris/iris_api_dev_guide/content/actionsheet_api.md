---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             

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
| [voltmx.ui.ActionItem](voltmx.ui_functions_actionitem.html) | Constructs an ActionItem object for use in an ActionSheet object. |
| [voltmx.ui.ActionSheet](voltmx.ui_functions_actionsheet.html) | Constructs an ActionSheet object that represents an iOS Action Sheet. |

 

*   [ActionItem Object](actionitem_object.html)

| Property | Description |
| --- | --- |
| [enable](actionitem_properties.html#enable) | Enables or disables the ActionItem object. |

 

*   [ActionSheet Object](actionsheet_object_methods.html)

| Method | Description |
| --- | --- |
| [addAction](actionsheet_object_methods.html#addAction) | Adds an ActionItem object to the ActionSheet object. |
| [Dismiss](actionsheet_object_methods.html#Dismiss) | Dismisses the Action Sheet on display. |
| [setAnchorConfiguration](actionsheet_object_methods.html#setAnchorConfiguration) | Sets the anchor configuration information on iPads. |
| [show](actionsheet_object_methods.html#Show) | Shows the Action Sheet on the display. |

 

To create an **ActionSheet** object, use the [voltmx.ui.ActionSheet](voltmx.ui_functions_actionsheet.html) function. Then add an item to the Action Sheet, create an **ActionItem** object by invoking the [voltmx.ui.ActionItem](voltmx.ui_functions_actionitem.html) function. After you add an action item, the action sheet can be displayed by using the [show](actionsheet_object_methods.html#Show) method. Each **ActionItem** object has a callback function that is automatically invoked whenever the user taps the Action Sheet choice represented by the **ActionItem**. The callback function processes the user's input as needed.

To view the functionality of the Action Sheet API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/KonyDocs/Sampleapps/tree/master/ActionSheetAPI)

![](resources/prettify/onload.png)
