---
layout: "documentation"
category: "iris_api_dev_guide"
---

AddPassesViewController Object
==============================

The AddPassesViewController object provides a view to add passes to the user’s library of passes.

Here is an example for creating a AddPassesViewController with callbacks:

var AddPassesViewController1 = new com.voltmx.AddPassesViewController(an, statusCallback);

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| an \[Array\] - Optional | > **_Note:_** Respects only first pass in the array if the iOS is below 7.0. |
| statusCallback \[Function\] - Optional | callback to get the status of adding passes view controller. _status_ \[String\] - status of the AddPassesViewController. |

### Return Values

Object - com.voltmx.AddPassesViewController

Methods
-------

The com.voltmx.AddPassesViewController class has the following methods:


<details close markdown="block"><summary>dismissAnimated</summary>

* * *

This API is used to dismiss the view of add passes view controller.

### Syntax

{% highlight VoltMx %}
dismissAnimated(  
    animated)
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| animated | Set True to dismiss with animation. |

### Example

{% highlight VoltMx %}
AddPassesViewController1.dismissAnimated(animated);
...
var AddPassesViewController1 = AddPassesViewController1.dismissAnimated(animated);
{% endhighlight %}

### Return Values

Returns the authentication token of the Pass.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getLocalizedDescription</summary>

* * *

The localized description of the pass’s kind. You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

### Syntax

{% highlight VoltMx %}
getLocalizedDescription()
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getLocalizedDescription();

{% endhighlight %}

### Return Values

Returns a string containing the localized description of Pass.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getLocalizedName</summary>

* * *

You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

### Syntax

{% highlight VoltMx %}
getLocalizedName()
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getLocalizedName();

{% endhighlight %}

### Return Values

Returns a string containing the localized description of Pass.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getLocalizedValueForKeyForDeviceLocale</summary>

* * *

Returns the localized value for specified field of the pass.

### Syntax

{% highlight VoltMx %}
getLocalizedValueForKeyForDeviceLocale()
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| key | A string that holds the field's key, as specified in the pass. |

### Example

{% highlight VoltMx %}
AddPassesViewController1.getLocalizedValueForKeyForDeviceLocale(key);
...
var AddPassesViewController1 = AddPassesViewController1.getLocalizedValueForKeyForDeviceLocale(key);

{% endhighlight %}

### Return Values

Returns a string that contains the localized value for the pass’s field.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getOrganizationName</summary>

* * *

The name of the organization that created the pass.

### Syntax

{% highlight VoltMx %}
getOrganizationName()
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getOrganizationName();

{% endhighlight %}

### Return Values

Organization name of Pass.

### Platform Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>getPassTypeIdentifier</summary>

* * *

The pass’s type identifier.

### Syntax

{% highlight VoltMx %}
getPassTypeIdentifier()
{% endhighlight %}

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getPassTypeIdentifier();
               
{% endhighlight %}

### Return Values

Returns a string that contains the pass’s type identifier.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getPassURL</summary>

* * *

The URL that opens the pass in the Passbook app.

### Syntax

{% highlight VoltMx %}
getPassURL()
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getPassURL();

{% endhighlight %}

### Return Values

Returns the absolute string of passURL

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getSerialNumber</summary>

* * *

A value that uniquely identifies the pass.

### Syntax

{% highlight VoltMx %}
getSerialNumber()
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getSerialNumber();

{% endhighlight %}

### Return Values

Returns a string that holds the serial number of the Pass.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getUserInfo</summary>

* * *

Developer-specific custom data.

### Syntax

{% highlight VoltMx %}
getUserInfo()
{% endhighlight %}

### Input Parameters

None.

### Example

{% highlight VoltMx %}
var AddPassesViewController1 = AddPassesViewController1.getUserInfo();
{% endhighlight %}

### Return Values

Returns the userInfo dictionary of a Pass.

### Platform Availability

Available only on iOS7 and above.

* * *
</details>

![](resources/prettify/onload.png)
