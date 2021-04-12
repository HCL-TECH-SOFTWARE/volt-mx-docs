---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


AddPassesViewController Object
==============================

The AddPassesViewController object provides a view to add passes to the user’s library of passes.

Here is an example for creating a AddPassesViewController with callbacks:

var AddPassesViewController1 = new com.voltmx.AddPassesViewController(an, statusCallback);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| an \[Array\] - Optional | > **_Note:_** Respects only first pass in the array if the iOS is below 7.0. |
| statusCallback \[Function\] - Optional | callback to get the status of adding passes view controller. _status_ \[String\] - status of the AddPassesViewController. |

Return Values

Object - com.voltmx.AddPassesViewController

Methods
-------

The com.voltmx.AddPassesViewController class has the following methods:

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[dismissAnimated](javascript:void(0);)

* * *

This API is used to dismiss the view of add passes view controller.

Syntax

dismissAnimated(  
    animated)

Input Parameters

  
| Parameter | Description |
| --- | --- |
| animated | Set True to dismiss with animation. |

 

Example

{% highlight voltMx %}AddPassesViewController1.dismissAnimated(animated);
...
var AddPassesViewController1 = AddPassesViewController1.dismissAnimated(animated);
{% endhighlight %}

Return Values

Returns the authentication token of the Pass.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getLocalizedDescription](javascript:void(0);)

* * *

The localized description of the pass’s kind. You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

Syntax

getLocalizedDescription()

Input Parameters

None

Example

{% highlight voltMx %}var AddPassesViewController1 = AddPassesViewController1.getLocalizedDescription();

{% endhighlight %}

Return Values

Returns a string containing the localized description of Pass.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getLocalizedName](javascript:void(0);)

* * *

You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

Syntax

getLocalizedName()

Input Parameters

None

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getLocalizedName();

{% endhighlight %}

Return Values

Returns a string containing the localized description of Pass.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getLocalizedValueForKeyForDeviceLocale](javascript:void(0);)

* * *

Returns the localized value for specified field of the pass.

Syntax

getLocalizedValueForKeyForDeviceLocale()

Input Parameters

  
| Parameter | Description |
| --- | --- |
| key | A string that holds the field's key, as specified in the pass. |

 

Example

{% highlight voltMx %}
AddPassesViewController1.getLocalizedValueForKeyForDeviceLocale(key);
...
var AddPassesViewController1 = AddPassesViewController1.getLocalizedValueForKeyForDeviceLocale(key);

{% endhighlight %}

Return Values

Returns a string that contains the localized value for the pass’s field.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getOrganizationName](javascript:void(0);)

* * *

The name of the organization that created the pass.

Syntax

getOrganizationName()

Input Parameters

None

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getOrganizationName();

{% endhighlight %}

Return Values

Organization name of Pass.

Platform Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getPassTypeIdentifier](javascript:void(0);)

* * *

The pass’s type identifier.

Syntax

getPassTypeIdentifier()

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getPassTypeIdentifier();
               
{% endhighlight %}

Return Values

Returns a string that contains the pass’s type identifier.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getPassURL](javascript:void(0);)

* * *

The URL that opens the pass in the Passbook app.

Syntax

getPassURL()

Input Parameters

None

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getPassURL();

{% endhighlight %}

Return Values

Returns the absolute string of passURL

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getSerialNumber](javascript:void(0);)

* * *

A value that uniquely identifies the pass.

Syntax

getSerialNumber()

Input Parameters

None

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getSerialNumber();

{% endhighlight %}

Return Values

Returns a string that holds the serial number of the Pass.

Platform Availability

Available only on iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getUserInfo](javascript:void(0);)

* * *

Developer-specific custom data.

Syntax

getUserInfo()

Input Parameters

None.

Example

{% highlight voltMx %}
var AddPassesViewController1 = AddPassesViewController1.getUserInfo();
{% endhighlight %}

Return Values

Returns the userInfo dictionary of a Pass.

Platform Availability

Available only on iOS7 and above.

* * *

![](resources/prettify/onload.png)
