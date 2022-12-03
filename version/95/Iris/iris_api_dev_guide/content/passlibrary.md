                            


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

<b>Syntax</b>

<<PassObject>>.addPassWithCompletionCallback([pass](#pass), [completionCallback](#completionCallback))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| pass \[Object\] - com.voltmx.Pass - Mandatory | The pass being added. |
| completionCallback \[Function\] - Mandatory | The completion callback called after the user. status \[String\] Status of the passes adding task to PassLibrary. One of the below values: VoltMXPKPassLibraryDidAddPasses VoltMXPKPassLibraryShouldReviewPasses VoltMXPKPassLibraryDidCancelAddPasses |

<b>Example</b>

```
passbook1.addPassWithCompletionCallback(pass, completionCallback); 

```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available only on iOS

addPassesWithCompletionCallback
-------------------------------

Presents UI to add multiple passes.

If the status is VoltMXPKPassLibraryShouldReviewPasses in completionCallback, present an instance of com.voltmx.AddPassesViewController with the same pass, to let the user review and add them.

<b>Syntax</b>

<<PassObject>>.addPassesWithCompletionCallback()

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| passes \[Array\] - Mandatory | The pass being added. |
| completionCallback \[Function\] - Mandatory | The completion callback called after the user. status \[String\] Status of the passes adding task to PassLibrary. One of the below values: VoltMXPKPassLibraryDidAddPasses VoltMXPKPassLibraryShouldReviewPasses VoltMXPKPassLibraryDidCancelAddPasses |

<b>Example</b>

```
passbook1.addPassWithCompletionCallback(passes, completionCallback); 

```

<b>Return Values</b>

Number

<b>Platform Availability</b>

Available only on iOS

* * *

containsPass
------------

Returns whether the user’s pass library contains a pass. This method lets you determine that the pass library contains a pass even though your app wouldn’t be able to read or modify the pass.

<b>Syntax</b>

<<PassObject>>.containsPass()

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| pass \[Object\] - com.voltmx.Pass - Mandatory | The pass being queried. |

<b>Example</b>

```
passbook1.addPassWithCompletionCallback(passes, completionCallback); 
...
var passbook1 = passbook1.addPassWithCompletionCallback(passes, completionCallback); 

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Boolean | True if pass is in the PassLibrary. |

<b>Platform Availability</b>

Available only on iOS

* * *

getPassWithTypeIdentifierAndSerialNumber
----------------------------------------

The proximity value gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away.

<b>Syntax</b>

<<PassObject>>.getPassWithTypeIdentifierAndSerialNumber([identifier](#identifier), [serailNumber](#serailNumber))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| identifier \[String\] - Mandatory | The pass’s pass type identifier. |
| serailNumber \[String\] | The pass’s serial number. |

<b>Example</b>

```
passbook1.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber); 
...
var passbook1 = passbook1.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber); 

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| com.voltmx.Pass \[Object\] | The pass with the given pass type identifier and serial number, or nil if there is no such pass or if the app doesn’t have the appropriate entitlement. |

<b>Platform Availability</b>

Available only on iOS

getPasses
---------

Returns the passes in the user’s pass library.

Your app only has access to certain passes, based on its entitlements. Passes that your app doesn’t have access to are not returned. The ordering of the passes is not fixed; calling this method multiple times may return the same passes but in a different order.

<b>Syntax</b>

<<PassObject>>.getPasses()

<b>Example</b>

```
var passbook1 = passbook1.getPasses(); 
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Array | An array of com.voltmx.Pass objects. |

<b>Platform Availability</b>

Available only on iOS

* * *

removePass( )
-------------

Removes the pass from the user’s pass library. This method does nothing if your app doesn’t have the appropriate entitlement. The new pass replaces the existing pass with the same pass type identifier and serial number. If there is no such pass in the user’s pass library, the replacement fails.

<b>Syntax</b>

<<PassObject>>.removePass()

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| identifier \[String\] - Mandatory | The pass’s pass type identifier. |
| serailNumber \[String\] | The pass’s serial number. |

<b>Example</b>

```
passbook1.removePass(identifier, serailNumber); 
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available only on iOS

replacePassWithPass
-------------------

Replaces a pass in the user’s pass library with the given pass.

**Syntax**

<<PassObject>>.replacePassWithPass()

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| pass \[Object\] - Mandatory | The new pass. |

<b>Example</b>

```
passbook1.replacePassWithPass(pass); 
...
var passbook1 = passbook1.replacePassWithPass(pass);  

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Boolean | True if the pass was replaced successfully; otherwise false. |

<b>Platform Availability</b>

Available only on iOS

![](resources/prettify/onload.png)
