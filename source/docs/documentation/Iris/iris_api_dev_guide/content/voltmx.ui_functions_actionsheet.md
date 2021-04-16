---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


voltmx.ui.ActionSheet Function
============================

The details of the voltmx.ui.ActionSheet function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.html), are as follows.


<details close markdown="block"><summary>voltmx.ui.ActionSheet</summary> 

* * *

Constructs an `ActionSheet` object that represents an iOS Action Sheet.

### Syntax

{% highlight VoltMx %}
voltmx.ui.ActionSheet(actionSheetParams)
{% endhighlight %}

### Input Parameters

**_actionSheetParams_**

A JavaScript object containing key-value pairs that define the configuration parameters for the Action Sheet. This object must contain the following keys.

| Key | Description |
| --- | --- |
| title | A string that specifies the title for the Action Sheet. |
| message | A string containing the action sheet's message to display to the user. |
| showCompletionCallback | A callback function that is invoked after the display of the action sheet. For details, see the **Remarks** section below. |

### Example

{% highlight VoltMx %}
//Creating the Action Sheet Object
  var actionSheetObject = new voltmx.ui.ActionSheet({
        "title":"VoltMX Basecamp", 
        "message":"Welcome to VoltMX Base Camp! Explore. Learn. Develop. Share.", 
        "showCompletionCallback": function(){
        }
    });
{% endhighlight %}

### Return Values

Returns an `ActionSheet` object.

### Remarks

The _actionSheetParams_ parameter is an object containing key-value pairs. When your app uses the `showCompletionCallback` key, it specifies a callback function that is automatically invoked after your app displays the action sheet. The callback function must have the following signature.

{% highlight VoltMx %}
showCompletionCallback();
{% endhighlight %}

In an Action Sheet, only one action item can have the style `constants.ACTION_ITEM_STYLE_CANCEL`.

### Platform Availability

iOS

* * *

![](resources/prettify/onload.png)
