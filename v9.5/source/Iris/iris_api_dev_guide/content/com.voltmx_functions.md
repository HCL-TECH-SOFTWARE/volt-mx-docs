                            

Functions
=========

The com.voltmx namespace contains the following functions.


<details close markdown="block"><summary>com.voltmx.AddPassesViewController Function</summary> 

* * *

Creates an [AddPassesViewController](addpassesviewcontroller.md) object.

### Syntax

```

com.voltmx.AddPassesViewController(  
    passbookArray,  
    statusCallback)
```

### Parameters

_passbookArray_

An optional array of passbooks. Uses only first passbook in the array if the operating system is iOS below 7.0.

_statusCallback_

Optional callback function that get the status of the AddPassesViewController object that must have the following signature.

statusCallbackFunctionName(status);

where _status_ is a string that contains the status of the AddPassesViewController object

### Return Values

Returns a AddPassesViewController object.

**Example**

```

var AddPassesViewController1 = new com.voltmx.AddPassesViewController(an, statusCallback);
```

* * *

</details>
<details close markdown="block"><summary>com.voltmx.BeaconManager Function</summary>

* * *

Allocates and initializes a [BeaconManager](beacon_manager.md) object.

### Syntax

```

com.voltmx.BeaconManager(  
    monitoringCallback,  
    rangingCallback,  
    errorCallback)
```

### Parameters

_monitoringCallback_

An optional callback function that gets beacon region updates from BeaconManager: For details, see the **Remarks** below.

_rangingCallback_

An optional callback function that gets ranging updates from BeaconManager: For details, see the **Remarks** below.

_errorCallback_

An optional callback function that gets error updates from BeaconManager: For details, see the **Remarks** below.

### Return Values

Returns a BeaconManager object.

### Remarks

The _monitoringCallback_ parameter is optional. If you do provide a callback for this parameter, the callback must have the following signature,

function monitoringCallback(beaconRegion, beaconRegionState);

where the parameters to the callback are as follows.

_beaconRegion_

A com.voltmx.BeaconRegion object containing information about the region that was entered or exited.

_beaconRegionState_

A string that contains one of the following.

| Constant | Description |
| --- | --- |
| BeaconRegionStateUnknown | It is unknown whether the device is inside or outside of the region. |
| BeaconRegionStateInside | The device is inside the given region. |
| BeaconRegionStateOutside | The device is outside of the given region. |

The _rangingCallback_ parameter is also optional. If you provide a callback for this parameter, the callback must have the following signature.

`function rangingCallback(beaconRegion, beacons);`

where the parameters to the callback are as follows.

_beaconRegion_

A [BeaconRegion](com.voltmx.beaconregion.md) object containing the beacon region.

_beacons_

An array of Beacon objects representing the beacons currently in range (in the order of closest first). Your app can use the information in these objects to determine the range of each beacon and its identifying information.

The _rangingCallback_ parameter is optional. If you provide a callback for this parameter, the callback must have the following signature.

`function errorCallback(beaconManagerError, errorName, errorDictionary, beaconRegion);`

where the parameters to the callback are as follows.

_beaconManagerError_

A string containing one of the following values.

| Constant | Description |
| --- | --- |
| BeaconManagerMonitoringError | An error has occurred while trying to monitor a given region |
| BeaconManagerRangingError | The region object is invalid or it contains invalid data. |
| BeaconManagerFailedError | The beacon manager was unable to retrieve a location value. |

_errorName_

A string containing the name of the error.

_errorDictionary_

A dictionary containing the error information.

_beaconRegion_

A [BeconRegion](com.voltmx.beaconregion.md) object that specifies the region where the error occurred.

**Example**

```

var aBeaconManager = new com.voltmx.BeaconManager(monitoringCallback, rangingCallback, errorCallback);`
```

### Availability

iOS only.

* * *

</details>
<details close markdown="block"><summary>com.voltmx.BeaconRegion Function</summary> 

* * *

Creates a [BeaconRegion](com.voltmx.beaconregion.md) object.

### Syntax

```

com.voltmx.BeaconRegion(  
    proximityUUID,  
    major,  
    minor,  
    identifier1)
```

### Parameters

_proximityUUID_

A string that contains the identifier that specifies your beacons.

_major_

A number that contains groups related sets of beacons.

_minor_

An optional parameter that contains a number that your app can use to specify subgroups of the _major_ parameter.

_identifier_

A string containing a unique identifier for the [BeaconRegion](com.voltmx.beaconregion.md) object. This value must not be null.

### Return Values

Returns a [BeaconRegion](com.voltmx.beaconregion.md) object.

### Remarks

You usually generate only one UUID for your beacons but can generate more as needed and pass them through the _proximityUUID_ parameter. You can generate UUIDs using the uuidgen command-line tool, which is widely available on the internet, or by using an online UUID generator..

When you are grouping related sets of beacons, you typically do so by location. For example, a bank can assign the same _major_ value for all beacons on the same floor. The bank could also use the optional _minor_ parameter to further subdivide the beacons on that floor into specific subgroups on the floor.

The _identifier_ parameter enables you to specify a unique name for each [BeaconRegion](com.voltmx.beaconregion.md) object. Therefore, your app can use this identifier to differentiate regions within your application.

**Example**

```

var BeaconRegion1 = new com.voltmx.BeaconRegion(UUIDString1, major1, minor1, identifier1)
```

### Availability

Available only on iOS.

* * *

![](resources/prettify/onload.png)
</details>