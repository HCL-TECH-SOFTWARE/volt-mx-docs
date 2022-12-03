                             


com.voltmx.Beacon
===============

You cannot create Beacon objects directly. Beacon objects are created by native platforms only.

The Beacon object provides the following API elements.

Methods
-------

The Beacon class has the following methods.


<details close markdown="block"><summary>getAccuracy</summary>

* * *

The accuracy of the proximity value, measured in meters from the beacon.

### Syntax

```

getAccuracy()
```

### Input Parameters

None.

**Example**

```
var beacon1 = new com.voltmx.Beacon();
var accuracy1 = beacon1.getAccuracy();
```

### Return Values

Returns a number that specifies the accuracy of the proximity value.

### Remarks

Indicates the one sigma horizontal accuracy in meters. Use this property to differentiate between beacons with the same proximity value. Do not use it to identify a precise location for the beacon. Accuracy values may fluctuate due to RF interference.

A negative value in this property signifies that the actual accuracy could not be determined. For more information, see [Apple Documentation](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLBeacon_class/Reference/Reference.md#//apple_ref/occ/instp/CLBeacon/accuracy).

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getMajor</summary>

* * *

The most significant value in the beacon. A major value, which is a number that can be used to group related beacons that have the same proximity UUID.

### Syntax

```

getMajor()
```

### Input Parameters

None.

**Example**

```

var beacon1 = new com.voltmx.Beacon();
var major1 = beacon1.getMajor();
```

### Return Values

Returns a number containing the most significant value in the beacon.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getMinor</summary>

* * *

The least significant value in the beacon. A minor value, which is a number that differentiates beacons with the same proximity UUID and major value.

### Syntax

```

getMinor()
```

### Input Parameters

None.

### Example

```

var beacon1 = new com.voltmx.Beacon();
var minor1 = beacon1.getMinor();
```

### Return Values

Returns a number that specifies the least significant value in the beacon.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getProximity</summary>

* * *

The proximity value gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away.

### Syntax

```

getProximity()
```

### Input Parameters

None

**Example**

```

var beacon1 = new com.voltmx.Beacon();
var proximity1 = beacon1.getProximity(); 
```

### Return Values

Returns a string that can be any of the following values.

*   BeaconProximityUnknown - The proximity of the beacon could not be determined.
*   BeaconProximityImmediate - The beacon is in the user’s immediate vicinity.
*   BeaconProximityNear - The beacon is relatively close to the user.
*   BeaconProximityFar - The beacon is far away.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getProximityUUIDString</summary>

* * *

The proximity UUID (string representation) of the beacon.

### Syntax

```

getProximityUUIDString()
```

### Input Parameters

None.

**Example**

```

var beacon1 = new com.voltmx.Beacon();
var proximityUUIDString1 = beacon1.getProximityUUIDString();
```

### Return Values

String

Returns a string that holds the proximity UUID of the beacon.

### Remarks

A proximity UUID (universally unique identifier), which is a 128-bit value that uniquely identifies one or more beacons as a certain type or from a certain organization.

### Platform Availability

Available only on iOS

* * *

</details>
<details close markdown="block"><summary>getrssi</summary>

* * *

The received signal strength of the beacon, measured in decibels.

### Syntax

```

getrssi()
```

### Input Parameters

None.

**Example**

```

var beacon1 = new com.voltmx.Beacon();
var rssi1 = beacon1.getrssi();
```

### Return Values

Returns a number containing the signal strength in decibels.

### Remarks

The value returned by this method is the average RSSI value of the samples received since the range of the beacon was last reported to your app.

### Platform Availability

Available only on iOS

* * *

![](resources/prettify/onload.png)
</details>