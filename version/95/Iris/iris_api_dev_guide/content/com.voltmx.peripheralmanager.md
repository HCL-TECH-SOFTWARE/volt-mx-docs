                             


com.voltmx.PeripheralManager
==========================

A Peripheral Manager object is used to manage published services within the local peripheral device’s Generic Attribute Profile (GATT) database and to advertise these services to central devices. If a service is in the database, it is visible and can be accessed by any connected central. If your application does not have the specified Bluetooth-peripheral background mode, the contents of its services become disabled when it is in the background or in a suspended state. Any remote central trying to access the service’s characteristic value or characteristic descriptors receives an error.

Before you call Peripheral Manager methods, the state of the peripheral manager object must be powered ON, as indicated by the _PeripheralManagerStatePoweredOn_. This state indicates that the peripheral device (for example, your iPhone or iPad) supports Bluetooth low energy, and Bluetooth is switched ON and available to use. Peripheral Manager is used for turning iOS device into iBeacon.

The com.voltmx.PeripheralManager class has the following methods:

*   [authorizationStatus( )](#authoriz)
*   [isAdvertising( )](#isAdvert)
*   [startAdvertisingWithMeasuredPower( )](#startAdv)
*   [stopAdvertising( )](#stopAdve)

Here is an example to create a new Peripheral Manager object.

var BeaconRegion1= new com.voltmx.PeripheralManager();

Here is an example to create a PeripheralManager with callbacks:

var peripheralManager = new com.voltmx.PeripheralManager(stateUpdatedCallback,advertisingStatusCallback);

**Input Parameters**

  
| Parameter | Description |
| --- | --- |
| _stateUpdatedCallback_ \[Function\] - Optional | To get updated callback state from the Peripheral Manager _peripheralManagerState_ \[String \] - Can represent one of the following values:  PeripheralManagerStatePoweredOff - Indicates Bluetooth is currently powered off.PeripheralManagerStatePoweredOn - Indicates Bluetooth is currently powered on.PeripheralManagerStateResetting - The connection with the system service was momentarily lost. An update will occur.PeripheralManagerStateUnauthorized - The app is not authorized to use the Bluetooth low energy peripheral or server role.PeripheralManagerStateUnknown - The current state of the peripheral manager is unknown. An update will occur.PeripheralManagerStateUnsupported - The platform does not support the Bluetooth low energy peripheral or server role.function stateUpdatedCallback (peripheralManagerState){} |
| _advertisingStatusCallback_ \[Function\] - Optional | To get the status callback of advertising from the Peripheral Manager. _errorName_ \[String\] - Name of the error if error occurrs, null otherwise._errorInfo_ \[Object\] - Information about the error if error occurs, null otherwise.function advertisingStatusCallback (errorName, errorInfo){} |

**Return Values**

Object - com.voltmx.PeripheralManager

**Platform Availability**

Available only on iOS.

* * *

Methods
-------

The com.voltmx.PeripheralManager class has the following methods:


<details close markdown="block"><summary id="authoriz">authorizationStatus</summary>

The authorization status of an application is managed by the system and determined by several factors. Applications must be clearly authorized to share data using Bluetooth services while in the background state. The system automatically displays a request for user authorization when your app first attempts to use Bluetooth services to share data.

Calling this method does not prompt the user for access. Instead, you can use this method to detect restricted access and simply hide any affected UI features from the user.

**Syntax**

<<PeripheralObject>>.authorizationStatus( )

**Input Parameters**

None

**Example**

```
var authorizationStatus1 = PeripheralManager1.authorizationStatus(); 

```

**Return Values**

String

Returns any one of the following values:

  
| Return Value | Description |
| --- | --- |
| PeripheralManagerAuthorizationStatusDetermined | The user has made a choice regarding whether this application can share data using Bluetooth services while in the background state. |
| PeripheralManagerAuthorizationStatusRestricted | This application is not authorized to share data using Bluetooth services while in the background state. The user cannot change this application's status, possibly due to active restrictions such as parental controls. |
| PeripheralManagerAuthorizationStatusDenied | The user clearly denied this app from sharing data using Bluetooth services while in the background state. |
| PeripheralManagerAuthorizationStatusAuthorized | This application is authorized to share data using Bluetooth services while in the background state. |

**Platform Availability**

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary id="isAdvert">isAdvertising</summary>

To determine if the Peripheral Manager is currently advertising data.

**Syntax**

<<PeripheralObject>>.isAdvertising( )

**Input Parameters**

None

**Example**

```
var isAdvertising1 = PeripheralManager1.isAdvertising();
```

**Return Values**

Boolean

**Platform Availability**

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary id="startAdv">startAdvertisingWithMeasuredPower</summary>

Starts advertising beacon data with Measured Power.

**Syntax**

<<PeripheralObject>>.startAdvertisingWithMeasuredPower()

**Input Parameters**

  
| Parameter | Description |
| --- | --- |
| _beaconRegion_ \[Object\] - com.voltmx.BeaconRegion | A Beacon Region whose data is to be advertised. |
| _measuredPower_ \[Number\] - Optional | The Received Signal Strength Indicator (RSSI) value (measured in decibels) for the device. This value represents the measured strength of the beacon from one meter away and is used during ranging. Specify null to use the default value for the device. |

**Example**

```
PeripheralManager1.startAdvertisingWithMeasuredPower(beaconRegion, measuredPower);

```

**Return Values**

None

**Platform Availability**

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary id="stopAdve">stopAdvertising</summary>

Stops advertising Peripheral Manager data.

**Syntax**

<<PeripheralObject>>.stopAdvertising( )

**Input Parameters**

None

**Example**

```
var stopAdvertising1 = PeripheralManager1.stopAdvertising(); 

```

**Return Values**

None

**Platform Availability**

Available only on iOS.

* * *

</details>

![](resources/prettify/onload.png)
