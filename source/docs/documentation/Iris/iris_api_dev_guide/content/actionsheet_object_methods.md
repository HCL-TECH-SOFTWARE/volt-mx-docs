---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


ActionSheet Object
==================

The ActionSheet object implements Apple's Action Sheets for iOS apps. They are not supported on other platforms. The ActionSheet object comprises of the following elements:

Methods
-------

The `ActionSheet` object contains the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[addAction](javascript:void(0);) 

* * *

Adds an `ActionItem` object to the `ActionSheet` object.

Syntax

addAction(  
    actionItem1)

Input Parameters

| Parameter | Description |
| --- | --- |
| actionItem1 | An `ActionItem` object to add to the Action Sheet. |

 

Example

{% highlight voltMx %}//Creating the Action Item Object
setActionSheet: function() {
    var actionItem = new voltmx.ui.ActionItem({
        "title": "Open Basecamp",
        "style": constants.ACTION_STYLE_DEFAULT,
        "action": function() {
            voltmx.application.openURL("https://basecamp.voltmx.com/s/");
        }
    });
    //Adding action to the Action Sheet object    
    actionSheetObject.addAction(actionItem);
}
{% endhighlight %}

Return Values

None.

Platform Availability

iOS only

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[Dismiss](javascript:void(0);) 

* * *

Dismisses the Action Sheet on the display.

Syntax

dismiss()

Input Parameters

None.

Example

{% highlight voltMx %}actionSheetObject.dismiss();
{% endhighlight %}

Return Values

None.

Platform Availability

iOS only

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setAnchorConfiguration](javascript:void(0);) 

* * *

Sets the anchor configuration information on iPads.

Syntax

setAnchorConfiguration(  
    configParams)

Input Parameters

| Parameter | Description |
| --- | --- |
| configParams | A JavaScript object containing key-value pairs that specify the anchor configuration parameters for the Action Sheet. The following keys are required. <br><br>`direction`: A constant from the [Action Sheet Anchor Direction Constants](constants_namespace.html#ActionSheetAnchorDirection) that specifies the side of the widget that the Action Sheet attaches to. <br><br>`widget`: The widget that the Action Sheet attaches to. |

 

Example

{% highlight voltMx %}var configInfo = {
    "direction": constants.ANCHOR_DIRECTION_LEFT,
    "widget": frmWidgetName
};
myActionSheet.setAnchorConfiguration(configInfo);
{% endhighlight %}

Return Values

None.

Remarks

This method is only used on the iPad.

Platform Availability

iPad only

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[show](javascript:void(0);) 

* * *

Shows the Action Sheet on the display.

Syntax

show();

Example

{% highlight voltMx %}actionSheetObject.show();
{% endhighlight %}

Input Parameters

None.

Return Values

None.

Platform Availability

iOS only

* * *

