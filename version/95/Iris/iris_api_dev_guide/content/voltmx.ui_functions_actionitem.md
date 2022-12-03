                             


voltmx.ui.ActionItem Function
===========================

The details of the voltmx.ui.ActionItem function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.md), are as follows.

Constructs an `ActionItem` object for use in an [ActionSheet object](actionsheet_object_methods.md#actionsheet-object).

Syntax

new voltmx.ui.ActionItem(actionItemParams)

Input Parameters

_actionItemParams_

A JavaScript object containing key-value pairs that define the configuration parameters for the action item. This object must contain the following keys.

| Constant | Description |
| --- | --- |
| title | A string that specifies the title for the action item. |
| style | A value from the [](constants_namespace.md#ActionItemStyles)[Action Item Style Constants](constants_namespace.md#ActionItemStyles) that selects the style of the action item. |
| actionCallback | A JavaScript function that handles user selections from the action item. For more information, see **Remarks** below. |

Example

```
//Creating the Action Item Object
  setActionSheet: function(){
    var actionItem = new voltmx.ui.ActionItem({
    "title": "Open Basecamp",
    "style": constants.ACTION_STYLE_DEFAULT,
    "action": function(){
     voltmx.application.openURL("https://basecamp.voltmx.com/s/");
    }
```

Return Values

Returns an `ActionItem` object that can be added to an Action Sheet.

Remarks

The `actionCallback` function, which is passed into this function through the _actionSheetParams_ parameter, must have the following prototype.

actionItemCallback(actionSheetObject, actionItem1);

where actionSheetObject is a handle to the `ActionSheet` object that the `ActionItem` object is associated with, and _actionItem1_ is a handle to the `ActionItem` object that the user selected.

Platform Availability

iOS

![](resources/prettify/onload.png)
