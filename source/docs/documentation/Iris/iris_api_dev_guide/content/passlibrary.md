---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


PassLibrary Object
==================

The PassLibrary Object represents the library of passes. It provides an interface to the user’s library of passes.

Here is an example for creating a PassLibrary with callbacks:

var passLibrary1 = new com.voltmx.PassLibrary();

**Return Value**

Object - com.voltmx.PassLibrary

* * *

Methods
=======

The com.voltmx.PassLibrary class contains the following methods.

addPassWithCompletionCallback
-----------------------------

Presents UI to add pass.

If the status is VoltMXPKPassLibraryShouldReviewPasses in completionCallback, present an instance of com.voltmx.AddPassesViewController with the same pass, to let the user review and add them.

Syntax

<<PassObject>>.addPassWithCompletionCallback([pass](#pass), [completionCallback](#completionCallback))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| pass \[Object\] - com.voltmx.Pass - Mandatory | The pass being added. |
| completionCallback \[Function\] - Mandatory | The completion callback called after the user. status \[String\] Status of the passes adding task to PassLibrary. One of the below values: VoltMXPKPassLibraryDidAddPasses VoltMXPKPassLibraryShouldReviewPasses VoltMXPKPassLibraryDidCancelAddPasses |

Example

{% highlight voltMx %}passbook1.addPassWithCompletionCallback(pass, completionCallback); 

{% endhighlight %}

Return Values

None

Platform Availability

Available only on iOS

addPassesWithCompletionCallback
-------------------------------

Presents UI to add multiple passes.

If the status is VoltMXPKPassLibraryShouldReviewPasses in completionCallback, present an instance of com.voltmx.AddPassesViewController with the same pass, to let the user review and add them.

Syntax

<<PassObject>>.addPassesWithCompletionCallback()

Input Parameters

  
| Parameter | Description |
| --- | --- |
| passes \[Array\] - Mandatory | The pass being added. |
| completionCallback \[Function\] - Mandatory | The completion callback called after the user. status \[String\] Status of the passes adding task to PassLibrary. One of the below values: VoltMXPKPassLibraryDidAddPasses VoltMXPKPassLibraryShouldReviewPasses VoltMXPKPassLibraryDidCancelAddPasses |

Example

{% highlight voltMx %}passbook1.addPassWithCompletionCallback(passes, completionCallback); 

{% endhighlight %}

Return Values

Number

Platform Availability

Available only on iOS

* * *

containsPass
------------

Returns whether the user’s pass library contains a pass. This method lets you determine that the pass library contains a pass even though your app wouldn’t be able to read or modify the pass.

Syntax

<<PassObject>>.containsPass()

Input Parameters

  
| Parameter | Description |
| --- | --- |
| pass \[Object\] - com.voltmx.Pass - Mandatory | The pass being queried. |

 

Example

{% highlight voltMx %}passbook1.addPassWithCompletionCallback(passes, completionCallback); 
...
var passbook1 = passbook1.addPassWithCompletionCallback(passes, completionCallback); 

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| Boolean | True if pass is in the PassLibrary. |

 

Platform Availability

Available only on iOS

* * *

getPassWithTypeIdentifierAndSerialNumber
----------------------------------------

The proximity value gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away.

Syntax

<<PassObject>>.getPassWithTypeIdentifierAndSerialNumber([identifier](#identifier), [serailNumber](#serailNumber))

Input Parameters

| Parameter | Description |
| --- | --- |
| identifier \[String\] - Mandatory | The pass’s pass type identifier. |
| serailNumber \[String\] | The pass’s serial number. |

 

Example

{% highlight voltMx %}passbook1.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber); 
...
var passbook1 = passbook1.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber); 

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| com.voltmx.Pass \[Object\] | The pass with the given pass type identifier and serial number, or nil if there is no such pass or if the app doesn’t have the appropriate entitlement. |

 

Platform Availability

Available only on iOS

getPasses
---------

Returns the passes in the user’s pass library.

Your app only has access to certain passes, based on its entitlements. Passes that your app doesn’t have access to are not returned. The ordering of the passes is not fixed; calling this method multiple times may return the same passes but in a different order.

Syntax

<<PassObject>>.getPasses()

Example

{% highlight voltMx %}var passbook1 = passbook1.getPasses(); 
{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| Array | An array of com.voltmx.Pass objects. |

 

Platform Availability

Available only on iOS

* * *

removePass( )
-------------

Removes the pass from the user’s pass library. This method does nothing if your app doesn’t have the appropriate entitlement. The new pass replaces the existing pass with the same pass type identifier and serial number. If there is no such pass in the user’s pass library, the replacement fails.

Syntax

<<PassObject>>.removePass()

Input Parameters

| Parameter | Description |
| --- | --- |
| identifier \[String\] - Mandatory | The pass’s pass type identifier. |
| serailNumber \[String\] | The pass’s serial number. |

 

Example

{% highlight voltMx %}passbook1.removePass(identifier, serailNumber); 
{% endhighlight %}

Return Values

None

Platform Availability

Available only on iOS

replacePassWithPass
-------------------

Replaces a pass in the user’s pass library with the given pass.

**Syntax**

<<PassObject>>.replacePassWithPass()

Input Parameters

| Parameter | Description |
| --- | --- |
| pass \[Object\] - Mandatory | The new pass. |

 

Example

{% highlight voltMx %}passbook1.replacePassWithPass(pass); 
...
var passbook1 = passbook1.replacePassWithPass(pass);  

{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| Boolean | True if the pass was replaced successfully; otherwise false. |

 

Platform Availability

Available only on iOS

![](resources/prettify/onload.png)
