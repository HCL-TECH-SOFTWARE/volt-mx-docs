                             


BeaconRegion Object
===================

A `BeaconRegion` object defines the type of region based on the device’s proximity to a Bluetooth beacon. A Beacon Region monitors for devices whose identifying information matches the information the user provides. If a device appears in range, the region triggers the delivery of an appropriate notification.

Example
-------

```
var proximityUUID = "FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45";
var major = 10;
var minor = 12; 
var identifier = "VoltMXBeaconSample";
var beaconRegion = new com.voltmx.BeaconRegion(proximityUUID, major, minor, identifier);
```![](resources/prettify/onload.png)
