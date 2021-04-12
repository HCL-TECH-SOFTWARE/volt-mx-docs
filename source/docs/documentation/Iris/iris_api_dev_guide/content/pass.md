---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Pass Object
===========

A Pass Object represents a Pass in iOS.

Here is an example for creating a Pass with callbacks:

var pass1 = new com.voltmx.Pass();

### Return Values

Object - com.voltmx.Pass

* * *

Methods
=======

The com.voltmx.Pass class contains the following methods.

getAuthenticationToken( )
-------------------------

The token used to authenticate with the web service.

Syntax

<<PassObject>>.getAuthenticationToken()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getAuthenticationToken();

{% endhighlight %}

Return Values

  
| Return Value | Description |
| --- | --- |
| String | The authentication token of Pass |

 

Platform Availability

Available only on iOS

getLocalizedDescription( )
--------------------------

The localized description of the pass’s kind. You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

Syntax

<<PassObject>>.getLocalizedDescription()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getLocalizedDescription();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | localized description of Pass. |

 

Platform Availability

Available only on iOS

getLocalizedName( )
-------------------

You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

Syntax

<<PassObject>>.getLocalizedName()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getLocalizedName();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | localized description of Pass. |

 

Platform Availability

Available only on iOS

* * *

getLocalizedValueForKeyForDeviceLocale( )
-----------------------------------------

Returns the localized value for specified field of the pass.

Syntax

<<PassObject>>.getLocalizedValueForKeyForDeviceLocale()

Input Parameters

| Parameter | Description |
| --- | --- |
| key \[String\] - Mandatory | The field's key, as specified in the pass. |

 

Example

{% highlight voltMx %}
pass1.getLocalizedValueForKeyForDeviceLocale(key);
...
var pass1 = pass1.getLocalizedValueForKeyForDeviceLocale(key);

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | The localized value for the pass’s field. |

 

Platform Availability

Available only on iOS

* * *

getOrganizationName( )
----------------------

The name of the organization that created the pass.

Syntax

<<PassObject>>.getOrganizationName()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getOrganizationName();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | organization name of Pass. |

 

Platform Availability

Available only on iOS

getPassTypeIdentifier( )
------------------------

The pass’s type identifier.

Syntax

<<PassObject>>.getPassTypeIdentifier()

Example

{% highlight voltMx %}
var pass1 = pass1.getPassTypeIdentifier();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | The pass’s type identifier. |

 

Platform Availability

Available only on iOS

* * *

getPassURL( )
-------------

The URL that opens the pass in the Passbook app.

Syntax

<<PassObject>>.getPassURL()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getPassURL();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | absolute string of passURL |

 

Platform Availability

Available only on iOS

getSerialNumber( )
------------------

A value that uniquely identifies the pass.

Syntax

<<PassObject>>.getSerialNumber()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getSerialNumber();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | The serial number of Pass. |

 

Platform Availability

Available only on iOS

getUserInfo( )
--------------

Developer-specific custom data.

Only available in iOS7 and above.

Syntax

<<PassObject>>.getUserInfo()

Input Parameters

None

Example

{% highlight voltMx %}
var pass1 = pass1.getUserInfo();

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| String | userInfo dictionary of Pass. |

 

Platform Availability

Available only on iOS

![](resources/prettify/onload.png)
