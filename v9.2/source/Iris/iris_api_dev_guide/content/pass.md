                            


Pass Object
===========

A Pass Object represents a Pass in iOS.

Here is an example for creating a Pass with callbacks:

var pass1 = new com.voltmx.Pass();

<b>Return Values</b>

Object - com.voltmx.Pass

* * *

Methods
=======

The com.voltmx.Pass class contains the following methods.

getAuthenticationToken( )
-------------------------

The token used to authenticate with the web service.

<b>Syntax</b>

<<PassObject>>.getAuthenticationToken()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getAuthenticationToken();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | The authentication token of Pass |

<b>Platform Availability</b>

Available only on iOS

getLocalizedDescription( )
--------------------------

The localized description of the pass’s kind. You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

<b>Syntax</b>

<<PassObject>>.getLocalizedDescription()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getLocalizedDescription();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | localized description of Pass. |

<b>Platform Availability</b>

Available only on iOS

getLocalizedName( )
-------------------

You can use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view.

<b>Syntax</b>

<<PassObject>>.getLocalizedName()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getLocalizedName();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | localized description of Pass. |

<b>Platform Availability</b>

Available only on iOS

* * *

getLocalizedValueForKeyForDeviceLocale( )
-----------------------------------------

Returns the localized value for specified field of the pass.

<b>Syntax</b>

<<PassObject>>.getLocalizedValueForKeyForDeviceLocale()

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| key \[String\] - Mandatory | The field's key, as specified in the pass. |

<b>Example</b>

```

pass1.getLocalizedValueForKeyForDeviceLocale(key);
...
var pass1 = pass1.getLocalizedValueForKeyForDeviceLocale(key);

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | The localized value for the pass’s field. |

<b>Platform Availability</b>

Available only on iOS

* * *

getOrganizationName( )
----------------------

The name of the organization that created the pass.

<b>Syntax</b>

<<PassObject>>.getOrganizationName()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getOrganizationName();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | organization name of Pass. |

<b>Platform Availability</b>

Available only on iOS

getPassTypeIdentifier( )
------------------------

The pass’s type identifier.

<b>Syntax</b>

<<PassObject>>.getPassTypeIdentifier()

<b>Example</b>

```

var pass1 = pass1.getPassTypeIdentifier();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | The pass’s type identifier. |

<b>Platform Availability</b>

Available only on iOS

* * *

getPassURL( )
-------------

The URL that opens the pass in the Passbook app.

<b>Syntax</b>

<<PassObject>>.getPassURL()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getPassURL();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | absolute string of passURL |

<b>Platform Availability</b>

Available only on iOS

getSerialNumber( )
------------------

A value that uniquely identifies the pass.

<b>Syntax</b>

<<PassObject>>.getSerialNumber()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getSerialNumber();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | The serial number of Pass. |

<b>Platform Availability</b>

Available only on iOS

getUserInfo( )
--------------

Developer-specific custom data.

Only available in iOS7 and above.

<b>Syntax</b>

<<PassObject>>.getUserInfo()

<b>Input Parameters</b>

None

<b>Example</b>

```

var pass1 = pass1.getUserInfo();

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| String | userInfo dictionary of Pass. |

<b>Platform Availability</b>

Available only on iOS

![](resources/prettify/onload.png)
