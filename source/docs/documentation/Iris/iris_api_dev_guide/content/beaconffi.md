---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             

You are here: Beacon API

Beacon API
==========

The Beacon API helps you work with iBeacons. iBeacons are devices that transmit signals using Bluetooth low-energy wireless technology, and allow you to create and monitor beacons that advertise certain identifying information. Beacon Region is a region defined by a device’s proximity to Bluetooth Beacons.

The Beacon API uses the `com.voltmx.Beacon` and the `com.voltmx.BeaconManager` Namespaces and the following API elements

### com.voltmx.Beacon Methods

  
| Method | Description |
| --- | --- |
| [getAccuracy](beaconmethods.html#getAccur) | The accuracy of the proximity value, measured in meters from the beacon. |
| [getMajor](beaconmethods.html#getMajor) | The most significant value in the beacon. A major value, which is a number that can be used to group related beacons that have the same proximity UUID. |
| [getMinor](beaconmethods.html#getMinor) | The least significant value in the beacon. A minor value, which is a number that differentiates beacons with the same proximity UUID and major value. |
| [getProximity](beaconmethods.html#getProxi) | The proximity value gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away. |
| [getProximityUUIDString](beaconmethods.html#getProxi2) | The proximity UUID (string representation) of the beacon. |
| [getrssi](beaconmethods.html#getrssi) | The received signal strength of the beacon, measured in decibels. |

### com.voltmx.BeaconManager Methods

  
| Method | Description |
| --- | --- |
| [authorizationStatus](beaconmanager_methods.html#authoriz) | Helps you know the authorization status of the location services for the application. |
| [getMonitoredRegions](beaconmanager_methods.html#getMonit2) | Gets the Beacon Regions that are currently being monitored. |
| [getRangedRegions](beaconmanager_methods.html#getRange) | Gets the the BeaconRegion objects that are currently being ranged. |
| [isMonitoringAvailableForBeaconRegions](beaconmanager_methods.html#isMonitor) | Determine whether monitoring is available for the beacon regions. |
| [isRangingAvailableForBeaconRegions](beaconmanager_methods.html#isRangin) | Determine whether ranging is available for the beacon regions. |
| [requestStateForRegion](beaconmanager_methods.html#requestS) | Determine the state of the current device relative to the beacon region. |
| [setAuthorizationStatusChangedCallback](beaconmanager_methods.html#setAutho) | Sets the callback function that retrieves the authorization status changes. |
| [setMonitoringStartedForRegionCallback](beaconmanager_methods.html#setMonit) | Sets the monitoring started for region callback. |
| [startMonitoringBeaconRegion](beaconmanager_methods.html#startMon) | Start monitoring for the specified Beacon Region. |
| [startRangingBeaconsInRegion](beaconmanager_methods.html#startRan) | Starts ranging beacons in a specified beacon region. |
| [`stopMonitoringBeaconsRegion`](beaconmanager_methods.html#stopMonitoringBeaconsRegion) | Stops monitoring a specified beacon region. |
| [stopRangingBeaconsInRegion](beaconmanager_methods.html#stopRang) | Stop ranging beacons in a specified Beacon Region. |

Prerequisites
-------------

To use Beacon FFI APIs, you need iOS 7 or later, Bluetooth turned on, and a compatible iOS device:

*   Xcode 5.0 or later
*   iPhone 4s or later
*   iPad (3rd generation) or later
*   iPad mini or later
*   iPod touch (5th generation) or later

The following classes are available in Beacon FFI:

*   [com.voltmx.Beacon](beaconmethods.html)
*   [com.voltmx.BeaconManager](beaconmanager_methods.html)
*   [com.voltmx.BeaconRegion](com.voltmx.beaconregion.html)
*   [com.voltmx.PeripheralManager](com.voltmx.peripheralmanager.html)

How-to Sections
---------------

This overview provides the how-tos that demonstrate the use of the Beacon API in the following topics.

*   [Determining the Availability of Region Monitoring](#determining-the-availability-of-region-monitoring)
*   [Monitoring Beacon Regions](#monitoring-beacon-regions)
*   [Handling Boundary-Crossing Events](#handling-boundary-crossing-events)
*   [Determining the Proximity of a Beacon Using Ranging](#determining-the-proximity-of-a-beacon-using-ranging)
*   [Turning an iOS Device Into an iBeacon](#turning-an-ios-device-into-an-ibeacon)

Determining the Availability of Region Monitoring
-------------------------------------------------

Before monitoring a Beacon Region on a device, the developer should check for the availability of the region monitoring and the authorization status.To determine the availability, follow these steps:

1.  Check the availability of the [Beacon Region](com.voltmx.beaconregion.html) Monitoring.
    
    The [isMonitoringAvailableForBeaconRegions](beaconmanager_methods.html#isMonitor) method helps determine whether a device supports Beacon Region Monitoring. If the method returns false, the application cannot use Beacon Region Monitoring. If the method returns true, the developer must check the authorization status of the Beacon Region Monitoring.
    
    {% highlight voltMx %}if (beaconManager.isMonitoringAvailableForBeaconRegions()) {
         voltmx.print("Monitoring is available");
         // Check for authorization status
    }
    {% endhighlight %}
2.  Check the [Beacon Region](com.voltmx.beaconregion.html) Monitoring Authorization Status.
    
    The [authorizationStatus](beaconmanager_methods.html#authoriz) method of [BeaconManager](beacon_manager.html#beaconmanager-object) object determines whether the application is currently authorized to use iOS location services for monitoring the beacons. If the authorization status is `BeaconManagerAuthorizationStatusAuthorized`, the application will receive boundary-crossing notifications for any region it is monitoring. If the authorization status is any other value, the application does not receive those notifications.
    
    If the application is not authorized to use Beacon Region Monitoring, it can still register Beacon Regions for later use. If the user grants authorization to the application, monitoring for those regions will begin and will generate subsequent boundary-crossing notifications.
    
    {% highlight voltMx %}if (beaconManager.authorizationStatus() == "BeaconManagerAuthorizationStatusAuthorized") {
        voltmx.print("Authorized to use location services");
    }
    {% endhighlight %}
    
    You can use [BeaconManager](beacon_manager.html#beaconmanager-object)’s `authorizationStatusChanged` callback to detect changes in authorization status to the application.
    
    Refer to the [Apple’s Location and Maps Programming Guide](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html) for more information.
    

Monitoring Beacon Regions
-------------------------

When a Beacon Region is monitored, respective callbacks are fired when the device crosses the boundary of the region. You can define a Beacon Region using the [BeaconRegion](beacon_manager.html) class with proximityUUID, major, minor and identifier methods. The identifier is required and provides a way to refer to a particular beacon in your code. To register a Beacon Region for monitoring, call the [startMonitoringBeaconRegion](beaconmanager_methods.html#startMon) method of the [BeaconManager](beacon_manager.html#beaconmanager-object) object.

To monitoring Beacon Regions, follow these steps:

1.  Create a [Beacon Region](com.voltmx.beaconregion.html) object with beacon identifying information.
    
    {% highlight voltMx %}var aBeaconRegion = new com.voltmx.BeaconRegion(aProximityUUID, aMajor, aMinor, anIdentifier);
    {% endhighlight %}
2.  Create a Beacon Manager object with event callback functions.
    
    {% highlight voltMx %}function monitoringCallback(beaconRegion, state) {}
    
    function rangingCallback(beaconRegion, beacons) {}
    
    function errorCallback(beaconManagerError, errorName, errorDictionary, beaconRegion) {}
    var aBeaconManager = new com.voltmx.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    {% endhighlight %}
3.  Start monitoring the beacon region by calling the [startMonitoringBeaconRegion](beaconmanager_methods.html#startMon) method of the BeaconManager object.
    
    {% highlight voltMx %}aBeaconManager.startMonitoringBeaconRegion(aBeaconRegion);
    {% endhighlight %}

Handling Boundary-Crossing Events
---------------------------------

If the device enters or exits a Beacon Region, you will be notified through the `monitoringCallback` of BeaconManager object. A developer can postpone these notifications until the user turns on the device’s display by calling setNotifyEntryStateOnDisplay with true.

To handle boundary-crossing events, follow these steps:

1.  Define a monitoring callback.
    
    A monitoring callback should accept two arguments, [BeaconRegion](com.voltmx.beaconregion.html) object and Device State, of the Beacon Region. The monitoring callback is called on detection of any boundary-crossing event.
    
    {% highlight voltMx %}function monitoringCallback(beaconRegion, beaconRegionState) {
    ...
    }
    {% endhighlight %}
2.  Handle events.
    
    If the device enters a Beacon Region, `beaconRegionState` will be `BeaconRegionStateInside`.
    
    If the device exits a Beacon Region, `beaconRegionState` will be `BeaconRegionStateOutside`.
    
    {% highlight voltMx %}function monitoringCallback(beaconRegion, beaconRegionState) {
        if (beaconRegionState == "BeaconRegionStateInside") {
            // Device is inside the beacon region -- start ranging beacons
        }
    }
    {% endhighlight %}

Determining the Proximity of a Beacon Using Ranging
---------------------------------------------------

A [Beacon Region](com.voltmx.beaconregion.html) can be ranged to determine the proximity of the beacon from the device using the `startRangingBeaconsRegion` method of the [BeaconManager](beacon_manager.html) object.

You should call the [isRangingAvailableForBeaconRegions](beaconmanager_methods.html#isRangin) method of the [BeaconManager](beacon_manager.html) before attempting to range beacons.

Whenever the beacons come within range or go out of range, the [BeaconManager](beacon_manager.html) object will notify you through rangingCallback with an array of [Beacon](beacon.html) objects. The beacon objects are detected in the order of closest to farthest. Use the [getProximity](beaconmethods.html#getProxi) property to determine relative distance of the beacon to the device. Determine the beacon identifying information using other properties of the beacon object.

To determine proximity, follow these steps:

1.  Determining the availability of beacon ranging.
    
    The [isRangingAvailableForBeaconRegions](beaconmanager_methods.html#isRangin) method determines whether the current device supports beacon region ranging. If the method returns false, the application cannot use beacon region ranging.
    
2.  Define ranging callback for notifications.
    
    Ranging callback should accept two arguments, a [beaconRegion](com.voltmx.beaconregion.html) and array beacons, which are in range.
    
    {% highlight voltMx %}function rangingCallback(beaconRegion, beacons) {
        // Determine the proximity of beacons to the device.
    }
    {% endhighlight %}
3.  Ranging beacons in a region.
    
    To start ranging beacons in a beacon region, use `startRangingBeaconsInRegion` method to start ranging updates for beacons in that region.
    
    {% highlight voltMx %}var aBeaconRegion = new com.voltmx.BeaconRegion(aProximityUUID, aMajor, aMinor, anIdentifier);
    var aBeaconManager = new com.voltmx.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    aBeaconManager.startRangingBeaconsInRegion(aBeaconRegion);
    {% endhighlight %}
4.  Determine proximity and other properties.
    
    In the `rangingCallback`, the developer can determine the relative distance of the beacon from the device.
    
    {% highlight voltMx %}function rangingCallback(beaconRegion, beacons) {
        for (var beacon in beacons) {
            if (beacon.getProximity() == "BeaconProximityImmediate") {
                // Immediate
            } else if (beacon.getProximity() == "BeaconProximityNear") {
                // Near
            } else { 
              // beacon.getProximity() == "BeaconProximityFar"
                // Far
            }
        }
      }
    
    {% endhighlight %}

Turning an iOS Device Into an iBeacon
-------------------------------------

Any iOS device that supports sharing data using Bluetooth low energy can be used as an iBeacon. Because the application you write must run in the foreground, iBeacon support on iOS devices is intended for testing purposes and for applications that always run in the foreground, such as point-of-sale apps. For other types of iBeacon implementations, you need to acquire dedicated beacon hardware from third-party manufacturers.

To turn an iOS device into an iBeacon, follow these steps:

1.  Create a [Beacon Region](com.voltmx.beaconregion.html) object.
    
    To use your iOS device as a beacon, you first generate a 128-bit UUID that will be your Beacon Region’s proximity UUID. Open Terminal(in Mac OS) and type uuidgen on the command line. You receive a unique 128-bit value in an ASCII string that is punctuated by hyphens, as in this example.
    
    {% highlight voltMx %}$ uuidgen
    
    
    FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45
    {% endhighlight %}
    
    Next, create a Beacon Region with the UUID you generated for the beacon’s proximity UUID, defining the major and minor values as needed. Be sure to also use a unique string identifier for the new region. This code shows how to create a new Beacon Region using the example UUID above.
    
    {% highlight voltMx %}var proximityUUID = "FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45";
    var major = 10;
    var minor = 12;
    var identifier = "VoltMXBeaconSample";
    var beaconRegion = new com.voltmx.BeaconRegion(proximityUUID, major, minor, identifier);
    {% endhighlight %}
2.  Advertise the beacon information using the [peripheral manager](com.voltmx.peripheralmanager.html).
    
    Now that you have created a Beacon Region, you need to advertise your beacon’s proximity UUID (and any major or minor value you specified) using the com.voltmx.PeripheralManager object.
    
    {% highlight voltMx %}var peripheralManager = new com.voltmx.PeripheralManager(stateUpdatedCallback, advertisingStatusCallback);
    
    peripheralManager.startAdvertisingWithMeasuredPower(beaconRegion, null);
    {% endhighlight %}

![](resources/prettify/onload.png)
