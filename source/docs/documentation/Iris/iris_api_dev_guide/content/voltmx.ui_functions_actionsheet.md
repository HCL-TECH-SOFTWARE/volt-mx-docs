---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


voltmx.ui.ActionSheet Function
============================

The details of the voltmx.ui.ActionSheet function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.html), are as follows.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.ui.ActionSheet](javascript:void(0);) 

* * *

Constructs an `ActionSheet` object that represents an iOS Action Sheet.

Syntax

voltmx.ui.ActionSheet(actionSheetParams)

Input Parameters

_actionSheetParams_

A JavaScript object containing key-value pairs that define the configuration parameters for the Action Sheet. This object must contain the following keys.

| Key | Description |
| --- | --- |
| title | A string that specifies the title for the Action Sheet. |
| message | A string containing the action sheet's message to display to the user. |
| showCompletionCallback | A callback function that is invoked after the display of the action sheet. For details, see the **Remarks** section below. |

Example

{% highlight voltMx %}//Creating the Action Sheet Object
  var actionSheetObject = new voltmx.ui.ActionSheet({
        "title":"VoltMX Basecamp", 
        "message":"Welcome to Volt MX Base Camp! Explore. Learn. Develop. Share.", 
        "showCompletionCallback": function(){
        }
    });
{% endhighlight %}

Return Values

Returns an `ActionSheet` object.

Remarks

The _actionSheetParams_ parameter is an object containing key-value pairs. When your app uses the `showCompletionCallback` key, it specifies a callback function that is automatically invoked after your app displays the action sheet. The callback function must have the following signature.

showCompletionCallback();

In an Action Sheet, only one action item can have the style `constants.ACTION_ITEM_STYLE_CANCEL`.

Platform Availability

iOS

* * *

![](resources/prettify/onload.png)
