---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


com.voltmx.BeaconManager
======================

BeaconManager is for managing iBeacons in iOS. Your app creates a BeaconManager object by calling the [com.voltmx.BeaconManager](com.voltmx_functions.html#BeaconManager) constructor function.

The BeaconManager object contains the following methods.

Methods
-------

The com.voltmx.BeaconManager class has the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[authorizationStatus](javascript:void(0);) 

* * *

This method helps you know the authorization status of the location services for the application.

Syntax

authorizationStatus();

Input Parameters

None.

Example

{% highlight voltMx %}var authorizationStatus1 = aBeaconManager.authorizationStatus(); 

{% endhighlight %}

Return Values

Returns one of the following strings.

| Constant | Description |
| --- | --- |
| BeaconManagerAuthorizationStatusNotDetermined | The user has not made a choice regarding whether this application can use location services. |
| BeaconManagerAuthorizationStatusRestricted | This application is not authorized to use location services. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place |
| BeaconManagerAuthorizationStatusDenied | The user explicitly denied the use of location services for this application or location services are currently disabled in Settings. |
| BeaconManagerAuthorizationStatusAuthorized | This application is authorized to use location services. |

Remarks

The authorization status of a given application is managed by the system and determined by several factors. Applications must be explicitly authorized to use location services by the user, and location services must currently be enabled for the system. A request for user authorization is displayed automatically when your application first attempts to use location services.

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getMonitoredRegions](javascript:void(0);) 

* * *

This API gets the Beacon Regions that are currently being monitored. You cannot add regions to this property directly. Instead, you must register regions by calling the [startMonitoringForRegion](#startMon) method.

Syntax

getMonitoredRegions();

Input Parameters

None.

Example

{% highlight voltMx %}
var monitoredRegions = aBeaconManager.getMonitoredRegions(); 			
{% endhighlight %}

Return Values

Returns an array containing all of the [BeaconRegion](com.voltmx.beaconregion.html) objects that are being monitored by the [BeaconManager](beacon_manager.html).

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getRangedRegions](javascript:void(0);) 

* * *

Gets the the [BeaconRegion](com.voltmx.beaconregion.html) objects that are currently being ranged.

Syntax

getRangedRegions();

Input Parameters

None

Example

{% highlight voltMx %}
var rangedRegions1 = aBeaconManager.getRangedRegions(); 
{% endhighlight %}

Return Values

Returns an array containing all of the [BeaconRegion](com.voltmx.beaconregion.html) objects that are being ranged by the [BeaconManager](beacon_manager.html).

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[isMonitoringAvailableForBeaconRegions](javascript:void(0);) 

* * *

Determine whether monitoring is available for the beacon regions.

Syntax

isMonitoringAvailableForBeaconRegions();

Input Parameters

None.

Example

{% highlight voltMx %}
var isMonitoringAvailableForBeaconRegions1 = aBeaconManager.isMonitoringAvailableForBeaconRegions();
{% endhighlight %}

Return Values

Returns `True` if monitoring is available for the beacon regions, or `false` if it is not.

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[isRangingAvailableForBeaconRegions](javascript:void(0);) 

* * *

Determine whether ranging is available for the beacon regions.

Syntax

isRangingAvailableForBeaconRegions();

Input Parameters

None.

Example

{% highlight voltMx %}
var isRangingAvailableForBeaconRegions1 = aBeaconManager.isRangingAvailableForBeaconRegions();
{% endhighlight %}

Return Values

Returns `True` if ranging is available for the beacon regions, or `false` if it is not.

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[requestStateForRegion](javascript:void(0);) 

* * *

Determine the state of the current device relative to the beacon region.

Syntax

requestStateForRegion(  
    beaconRegion);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The beacon region whose state is queried. |

Example

{% highlight voltMx %}
aBeaconManager.requestStateForRegion(beaconRegion); 

{% endhighlight %}

Return Values

None.

Remarks

This method performs the request asynchronously and delivers the results through the _monitoringCallback_ function that your app sets by calling [setMonitoringStartedForRegionCallback](#setMonit).

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setAuthorizationStatusChangedCallback](javascript:void(0);) 

* * *

Sets the callback function that retrieves the authorization status changes.

Syntax

setAuthorizationStatusChangedCallback(  
    statusChangedCallbackFunction);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| statusChangedCallback | A callback function that retrieves changes in the authorization status. For details, see the **Remarks** section below. |

Example

{% highlight voltMx %}
aBeaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChanged);
{% endhighlight %}

Return Values

None

Remarks

This method sets a callback function that is invoked whenever the authorization status changes. It enables your app to retrieve status change updates asynchronously whenever they occur. The callback must have the following signature.

function authorizationStatusChanged(Status);

where the callback's _Status_ parameter is a string that contains one of the following values.

| Constant | Description |
| --- | --- |
| BeaconManagerAuthorizationStatusAuthorized | This application is authorized to use location services. |
| BeaconManagerAuthorizationStatusDenied | The user explicitly denied the use of location services for this application or location services are currently disabled in Settings. |
| BeaconManagerAuthorizationStatusNotDetermined | The user has not made a choice regarding whether this application can use location services. |
| BeaconManagerAuthorizationStatusRestricted | This application is not authorized to use location services. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place. |

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setMonitoringStartedForRegionCallback](javascript:void(0);) 

* * *

Sets the monitoring started for region callback.

Syntax

setMonitoringStartedForRegionCallback(  
    regionMonitoringCallback);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| regionMonitoringCallback | A callback function that is invoked when a monitoring starts in an new beacon region. For details, see **Remarks** below. |

Example

{% highlight voltMx %}
aBeaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback); 

{% endhighlight %}

Return Values

None

Remarks

This method sets a callback that informs the app that a new region is being monitored. The callback must have the following signature.

function monitoringStartedForRegionCallback(beaconRegion);

where the callback's _beaconRegion_ parameter is a [BeaconRegion](com.voltmx.beaconregion.html) object that contains the beacon region in which monitoring has started.

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[startMonitoringBeaconRegion](javascript:void(0);) 

* * *

Start monitoring for the specified Beacon Region.

Syntax

startMonitoringBeaconRegion(  
    beaconRegion);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | A [BeaconRegion](com.voltmx.beaconregion.html) object that contains the beacon region to monitor. |

Example

{% highlight voltMx %}
aBeaconManager.startMonitoringBeaconRegion(beaconRegion);
{% endhighlight %}

Return Values

None

Remarks

Your app must call this method once for each region it needs to monitor. If an existing region with the same identifier is already being monitored by the application, the old region is replaced by the new one. Region events are delivered through the _monitoringCallback_ function that your app sets by calling [setMonitoringStartedForRegionCallback](#setMonit)..

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[startRangingBeaconsInRegion](javascript:void(0);) 

* * *

Starts ranging beacons in a specified beacon region.

Syntax

startRangingBeaconsInRegion(  
    beaconRegion);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | A [BeaconRegion](com.voltmx.beaconregion.html) object to use for ranging. |

Example

{% highlight voltMx %}
aBeaconManager.startRangingBeaconsInRegion(beaconRegion); 
{% endhighlight %}

Return Values

None.

Remarks

Your app calls this function once the region monitored state is "`BeaconRegionStateInside`".

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[stopMonitoringBeaconsRegion](javascript:void(0);) 

* * *

Stops monitoring a specified beacon region.

Syntax

stopMonitoringBeaconRegion(  
    beaconRegion);

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The [BeaconRegion](com.voltmx.beaconregion.html) to stop monitoring. |

Example

{% highlight voltMx %}
aBeaconManager.stopMonitoringBeaconsRegion(beaconRegion); 
{% endhighlight %}

Return Values

None

Availability

Available only on iOS.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[stopRangingBeaconsInRegion](javascript:void(0);) 

* * *

Stop ranging beacons in a specified Beacon Region.

Syntax

stopRangingBeaconsInRegion();

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The [BeaconRegion](com.voltmx.beaconregion.html) to stop ranging. |

Example

{% highlight voltMx %}
aBeaconManager.stopRangingBeaconsInRegion(beaconRegion);
{% endhighlight %}

Return Values

None.

Remarks

If the specified region object is not currently being monitored, this method has no effect. When you call this method, the beacon attributes should be the same object that you registered.

Availability

Available only on iOS.

* * *

![](resources/prettify/onload.png)
