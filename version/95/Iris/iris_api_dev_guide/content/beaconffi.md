                             

You are here: Beacon API

Beacon API
==========

The Beacon API helps you work with iBeacons. iBeacons are devices that transmit signals using Bluetooth low-energy wireless technology, and allow you to create and monitor beacons that advertise certain identifying information. Beacon Region is a region defined by a device’s proximity to Bluetooth Beacons.

The Beacon API uses the `com.voltmx.Beacon` and the `com.voltmx.BeaconManager` Namespaces and the following API elements

### com.voltmx.Beacon Methods

  
| Method | Description |
| --- | --- |
| [getAccuracy](beaconmethods.md#getAccur) | The accuracy of the proximity value, measured in meters from the beacon. |
| [getMajor](beaconmethods.md#getMajor) | The most significant value in the beacon. A major value, which is a number that can be used to group related beacons that have the same proximity UUID. |
| [getMinor](beaconmethods.md#getMinor) | The least significant value in the beacon. A minor value, which is a number that differentiates beacons with the same proximity UUID and major value. |
| [getProximity](beaconmethods.md#getProxi) | The proximity value gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away. |
| [getProximityUUIDString](beaconmethods.md#getProxi2) | The proximity UUID (string representation) of the beacon. |
| [getrssi](beaconmethods.md#getrssi) | The received signal strength of the beacon, measured in decibels. |

### com.voltmx.BeaconManager Methods

  
| Method | Description |
| --- | --- |
| [authorizationStatus](beaconmanager_methods.md#authoriz) | Helps you know the authorization status of the location services for the application. |
| [getMonitoredRegions](beaconmanager_methods.md#getMonit2) | Gets the Beacon Regions that are currently being monitored. |
| [getRangedRegions](beaconmanager_methods.md#getRange) | Gets the the BeaconRegion objects that are currently being ranged. |
| [isMonitoringAvailableForBeaconRegions](beaconmanager_methods.md#isMonitor) | Determine whether monitoring is available for the beacon regions. |
| [isRangingAvailableForBeaconRegions](beaconmanager_methods.md#isRangin) | Determine whether ranging is available for the beacon regions. |
| [requestStateForRegion](beaconmanager_methods.md#requestS) | Determine the state of the current device relative to the beacon region. |
| [setAuthorizationStatusChangedCallback](beaconmanager_methods.md#setAutho) | Sets the callback function that retrieves the authorization status changes. |
| [setMonitoringStartedForRegionCallback](beaconmanager_methods.md#setMonit) | Sets the monitoring started for region callback. |
| [startMonitoringBeaconRegion](beaconmanager_methods.md#startMon) | Start monitoring for the specified Beacon Region. |
| [startRangingBeaconsInRegion](beaconmanager_methods.md#startRan) | Starts ranging beacons in a specified beacon region. |
| [`stopMonitoringBeaconsRegion`](beaconmanager_methods.md#stopMonitoringBeaconsRegion) | Stops monitoring a specified beacon region. |
| [stopRangingBeaconsInRegion](beaconmanager_methods.md#stopRang) | Stop ranging beacons in a specified Beacon Region. |

Prerequisites
-------------

To use Beacon FFI APIs, you need iOS 7 or later, Bluetooth turned on, and a compatible iOS device:

*   Xcode 5.0 or later
*   iPhone 4s or later
*   iPad (3rd generation) or later
*   iPad mini or later
*   iPod touch (5th generation) or later

The following classes are available in Beacon FFI:

*   [com.voltmx.Beacon](beaconmethods.md)
*   [com.voltmx.BeaconManager](beaconmanager_methods.md)
*   [com.voltmx.BeaconRegion](com.voltmx.beaconregion.md)
*   [com.voltmx.PeripheralManager](com.voltmx.peripheralmanager.md)

How-to Sections
---------------

This overview provides the how-tos that demonstrate the use of the Beacon API in the following topics.

*   [Determining the Availability of Region Monitoring](#determining-the-availability-of-region-monitoring)
*   [Monitoring Beacon Regions](#monitoring-beacon-regions)
*   [Handling Boundary-Crossing Events](#handling-boundary-crossing-events)
*   [Determining the Proximity of a Beacon Using Ranging](#determining-the-proximity-of-a-beacon-using-ranging)
*   [Turning an iOS Device Into an iBeacon](#turning-an-ios-device-into-an-ibeacon)

<h2>Determining the Availability of Region Monitoring</h2>
<p>Before monitoring a Beacon Region on a device, the developer should check for the availability of the region monitoring and the authorization status.To determine the availability, follow these steps:</p>
<ol>
<li>
<p>Check the availability of the <a href="com.voltmx.beaconregion.html">Beacon Region</a> Monitoring.</p>
<p>The <a href="beaconmanager_methods.html#isMonitor">isMonitoringAvailableForBeaconRegions</a> method helps determine whether a device supports Beacon Region Monitoring. If the method returns false, the application cannot use Beacon Region Monitoring. If the method returns true, the developer must check the authorization status of the Beacon Region Monitoring.</p>
<pre><code style="display:block; background-color:#eee;">if (beaconManager.isMonitoringAvailableForBeaconRegions()) {
voltmx.print("Monitoring is available");
// Check for authorization status
}</code></pre>
</li>
<li>
<p>Check the <a href="com.voltmx.beaconregion.html">Beacon Region</a> Monitoring Authorization Status.</p>
<p>The <a href="beaconmanager_methods.html#authoriz">authorizationStatus</a> method of <a href="beacon_manager.html#beaconmanager-object">BeaconManager</a> object determines whether the application is currently authorized to use iOS location services for monitoring the beacons. If the authorization status is <code>BeaconManagerAuthorizationStatusAuthorized</code>, the application will receive boundary-crossing notifications for any region it is monitoring. If the authorization status is any other value, the application does not receive those notifications.</p>
<p>If the application is not authorized to use Beacon Region Monitoring, it can still register Beacon Regions for later use. If the user grants authorization to the application, monitoring for those regions will begin and will generate subsequent boundary-crossing notifications.</p>
<pre><code style="display:block; background-color:#eee;">if (beaconManager.authorizationStatus() == "BeaconManagerAuthorizationStatusAuthorized") {
        voltmx.print("Authorized to use location services");
}</code></pre>
<p>You can use <a href="beacon_manager.html#beaconmanager-object">BeaconManager’s</a> authorizationStatusChanged callback to detect changes in authorization status to the application.</p>
<p>Refer to the <a href="https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html">Apple’s Location and Maps Programming Guide</a> for more information.</p>
</li>
</ol>
<h2>Monitoring Beacon Regions</h2>
<p>When a Beacon Region is monitored, respective callbacks are fired when the device crosses the boundary of the region. You can define a <a href="beacon_manager.html">Beacon Region</a> using the BeaconRegion class with proximityUUID, major, minor and identifier methods. The identifier is required and provides a way to refer to a particular beacon in your code. To register a Beacon Region for monitoring, call the <a href="beaconmanager_methods.html#startMon">startMonitoringBeaconRegion</a> method of the <a href="beacon_manager.html#beaconmanager-object">BeaconManager</a> object.</p>
<p>To monitoring Beacon Regions, follow these steps:</p>
<ol>
<li>
<p>Create a <a href="com.voltmx.beaconregion.html">Beacon Region</a> object with beacon identifying information.</p>
<pre><code style="display:block; background-color:#eee;">var aBeaconRegion = new com.voltmx.BeaconRegion(aProximityUUID, aMajor, aMinor, anIdentifier);</code></pre>
</li>
<li>
<p>Create a Beacon Manager object with event callback functions.</p>
<pre><code style="display:block; background-color:#eee;">function monitoringCallback(beaconRegion, state) {}
    
    function rangingCallback(beaconRegion, beacons) {}
    
    function errorCallback(beaconManagerError, errorName, errorDictionary, beaconRegion) {}
    var aBeaconManager = new com.voltmx.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
</code></pre>
</li>
<li>
<p>Start monitoring the beacon region by calling the <a href="beaconmanager_methods.html#startMon">startMonitoringBeaconRegion</a> method of the BeaconManager object.</p>
<pre><code style="display:block; background-color:#eee;">aBeaconManager.startMonitoringBeaconRegion(aBeaconRegion);</code></pre>
</li>
</ol>
<h2>Handling Boundary-Crossing Events</h2>
<p>If the device enters or exits a Beacon Region, you will be notified through the <code>monitoringCallback</code> of BeaconManager object. A developer can postpone these notifications until the user turns on the device’s display by calling setNotifyEntryStateOnDisplay with true.</p>
<p>To handle boundary-crossing events, follow these steps:</p>
<ol>
<li>
<p>Define a monitoring callback.</p>
<p>A monitoring callback should accept two arguments, <a href="com.voltmx.beaconregion.html">BeaconRegion</a> object and Device State, of the Beacon Region. The monitoring callback is called on detection of any boundary-crossing event.</p>
<pre><code style="display:block; background-color:#eee;">function monitoringCallback(beaconRegion, beaconRegionState) {
    ...
}</code></pre>
</li>
<li>
<p>Handle events.</p>
<p>If the device enters a Beacon Region, <code>beaconRegionState</code> will be <code>BeaconRegionStateInside.</code></p>
<p>If the device exits a Beacon Region, <code>beaconRegionState</code> will be <code>BeaconRegionStateOutside.</code></p>
<pre><code style="display:block; background-color:#eee;">function monitoringCallback(beaconRegion, beaconRegionState) {
        if (beaconRegionState == "BeaconRegionStateInside") {
            // Device is inside the beacon region -- start ranging beacons
        }
}</code></pre>
</li>
</ol>
<h2>Determining the Proximity of a Beacon Using Ranging</h2>
<p>A <a href="com.voltmx.beaconregion.html">Beacon Region</a> can be ranged to determine the proximity of the beacon from the device using the <code>startRangingBeaconsRegion</code> method of the <a href="beacon_manager.html">BeaconManager</a> object.</p>
<p>You should call the <a href="beaconmanager_methods.html#isRangin">isRangingAvailableForBeaconRegions</a> method of the <a href="beacon_manager.html">BeaconManager</a> before attempting to range beacons.</p>
<p>Whenever the beacons come within range or go out of range, the <a href="beacon_manager.html">BeaconManager</a> object will notify you through rangingCallback with an array of <a href="beacon.html">Beacon</a> objects. The beacon objects are detected in the order of closest to farthest. Use the <a href="beaconmethods.html#getProxi">getProximity</a> property to determine relative distance of the beacon to the device. Determine the beacon identifying information using other properties of the beacon object.</p>
<p>To determine proximity, follow these steps:</p>
<ol>
<li>
<p>Determining the availability of beacon ranging.</p>
<p>The <a href="beaconmanager_methods.html#isRangin">isRangingAvailableForBeaconRegions</a> method determines whether the current device supports beacon region ranging. If the method returns false, the application cannot use beacon region ranging.</p>
</li>
<li>
<p>Define ranging callback for notifications.</p>
<p>Ranging callback should accept two arguments, a <a href="com.voltmx.beaconregion.html">beaconRegion</a> and array beacons, which are in range.</p>
<pre><code style="display:block; background-color:#eee;">function rangingCallback(beaconRegion, beacons) {
        // Determine the proximity of beacons to the device.
}</code></pre>
</li>
<li>
<p>Ranging beacons in a region.</p>
<p>To start ranging beacons in a beacon region, use <code>startRangingBeaconsInRegion</code> method to start ranging updates for beacons in that region.</p>
<pre><code style="display:block; background-color:#eee;">var aBeaconRegion = new com.voltmx.BeaconRegion(aProximityUUID, aMajor, aMinor, anIdentifier);
    var aBeaconManager = new com.voltmx.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    aBeaconManager.startRangingBeaconsInRegion(aBeaconRegion);</code></pre>
</li>
<li>
<p>Determine proximity and other properties.</p>
<p>In the <code>rangingCallback</code>, the developer can determine the relative distance of the beacon from the device.</p>
<pre><code style="display:block; background-color:#eee;">function rangingCallback(beaconRegion, beacons) {
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
}</code></pre>
</li>
</ol>
<h2>Turning an iOS Device Into an iBeacon</h2>
<p>Any iOS device that supports sharing data using Bluetooth low energy can be used as an iBeacon. Because the application you write must run in the foreground, iBeacon support on iOS devices is intended for testing purposes and for applications that always run in the foreground, such as point-of-sale apps. For other types of iBeacon implementations, you need to acquire dedicated beacon hardware from third-party manufacturers.</p>
<p>To turn an iOS device into an iBeacon, follow these steps:</p>
<ol>
<li>
<p>Create a <a href="com.voltmx.peripheralmanager.html">Beacon Region</a> object.</p>
<p>To use your iOS device as a beacon, you first generate a 128-bit UUID that will be your Beacon Region’s proximity UUID. Open Terminal(in Mac OS) and type uuidgen on the command line. You receive a unique 128-bit value in an ASCII string that is punctuated by hyphens, as in this example.</p>
<pre><code style="display:block;background-color:#eee;">$ uuidgen
    
    FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45
</code></pre>
<p>Next, create a Beacon Region with the UUID you generated for the beacon’s proximity UUID, defining the major and minor values as needed. Be sure to also use a unique string identifier for the new region. This code shows how to create a new Beacon Region using the example UUID above.</p>
<pre><code style="display:block; background-color:#eee;">var proximityUUID = "FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45";
var major = 10;
var minor = 12;
var identifier = "KonyBeaconSample";
var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);</code></pre>
</li>
<li>
<p>Advertise the beacon information using the <a href="com.voltmx.peripheralmanager.html">peripheral manager</a>.</p>
<p>Now that you have created a Beacon Region, you need to advertise your beacon’s proximity UUID (and any major or minor value you specified) using the com.kony.PeripheralManager object.</p>
<pre><code style="display:block; background-color:#eee;">var peripheralManager = new com.kony.PeripheralManager(stateUpdatedCallback, advertisingStatusCallback);

peripheralManager.startAdvertisingWithMeasuredPower(beaconRegion, null);</code></pre>
</li>
</ol>

<!-- ![](resources/prettify/onload.png) -->
