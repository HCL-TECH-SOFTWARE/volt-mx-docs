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


<details close markdown="block"><summary>authorizationStatus</summary> 

* * *

This method helps you know the authorization status of the location services for the application.

### Syntax

{% highlight VoltMx %}
authorizationStatus();
{% endhighlight %}

### Input Parameters

None.

### Example

{% highlight VoltMx %}
var authorizationStatus1 = aBeaconManager.authorizationStatus(); 

{% endhighlight %}

### Return Values

Returns one of the following strings.

| Constant | Description |
| --- | --- |
| BeaconManagerAuthorizationStatusNotDetermined | The user has not made a choice regarding whether this application can use location services. |
| BeaconManagerAuthorizationStatusRestricted | This application is not authorized to use location services. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place |
| BeaconManagerAuthorizationStatusDenied | The user explicitly denied the use of location services for this application or location services are currently disabled in Settings. |
| BeaconManagerAuthorizationStatusAuthorized | This application is authorized to use location services. |

### Remarks

The authorization status of a given application is managed by the system and determined by several factors. Applications must be explicitly authorized to use location services by the user, and location services must currently be enabled for the system. A request for user authorization is displayed automatically when your application first attempts to use location services.

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>getMonitoredRegions</summary> 

* * *

This API gets the Beacon Regions that are currently being monitored. You cannot add regions to this property directly. Instead, you must register regions by calling the [startMonitoringForRegion](#startMon) method.

### Syntax

{% highlight VoltMx %}
getMonitoredRegions();
{% endhighlight %}

### Input Parameters

None.

### Example

{% highlight VoltMx %}
var monitoredRegions = aBeaconManager.getMonitoredRegions(); 			
{% endhighlight %}

### Return Values

Returns an array containing all of the [BeaconRegion](com.voltmx.beaconregion.html) objects that are being monitored by the [BeaconManager](beacon_manager.html).

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>getRangedRegions</summary> 

* * *

Gets the the [BeaconRegion](com.voltmx.beaconregion.html) objects that are currently being ranged.

### Syntax

{% highlight VoltMx %}
getRangedRegions();
{% endhighlight %}

### Input Parameters

None

### Example

{% highlight VoltMx %}
var rangedRegions1 = aBeaconManager.getRangedRegions(); 
{% endhighlight %}

### Return Values

Returns an array containing all of the [BeaconRegion](com.voltmx.beaconregion.html) objects that are being ranged by the [BeaconManager](beacon_manager.html).

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>isMonitoringAvailableForBeaconRegions</summary> 

* * *

Determine whether monitoring is available for the beacon regions.

### Syntax

{% highlight VoltMx %}
isMonitoringAvailableForBeaconRegions();
{% endhighlight %}

### Input Parameters

None.

### Example

{% highlight VoltMx %}
var isMonitoringAvailableForBeaconRegions1 = aBeaconManager.isMonitoringAvailableForBeaconRegions();
{% endhighlight %}

### Return Values

Returns `True` if monitoring is available for the beacon regions, or `false` if it is not.

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>isRangingAvailableForBeaconRegions</summary> 

* * *

Determine whether ranging is available for the beacon regions.

### Syntax

{% highlight VoltMx %}
isRangingAvailableForBeaconRegions();
{% endhighlight %}

### Input Parameters

None.

### Example

{% highlight VoltMx %}
var isRangingAvailableForBeaconRegions1 = aBeaconManager.isRangingAvailableForBeaconRegions();
{% endhighlight %}

### Return Values

Returns `True` if ranging is available for the beacon regions, or `false` if it is not.

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>requestStateForRegion</summary> 

* * *

Determine the state of the current device relative to the beacon region.

### Syntax

{% highlight VoltMx %}
requestStateForRegion(  
    beaconRegion);
{% endhighlight %}

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The beacon region whose state is queried. |

### Example

{% highlight VoltMx %}
aBeaconManager.requestStateForRegion(beaconRegion); 

{% endhighlight %}

### Return Values

None.

### Remarks

This method performs the request asynchronously and delivers the results through the _monitoringCallback_ function that your app sets by calling [setMonitoringStartedForRegionCallback](#setMonit).

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>setAuthorizationStatusChangedCallback</summary> 

* * *

Sets the callback function that retrieves the authorization status changes.

### Syntax

{% highlight VoltMx %}
setAuthorizationStatusChangedCallback(  
    statusChangedCallbackFunction);
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| statusChangedCallback | A callback function that retrieves changes in the authorization status. For details, see the **Remarks** section below. |

### Example

{% highlight voltMx %}
aBeaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChanged);
{% endhighlight %}

### Return Values

None

### Remarks

This method sets a callback function that is invoked whenever the authorization status changes. It enables your app to retrieve status change updates asynchronously whenever they occur. The callback must have the following signature.

function authorizationStatusChanged(Status);

where the callback's _Status_ parameter is a string that contains one of the following values.

| Constant | Description |
| --- | --- |
| BeaconManagerAuthorizationStatusAuthorized | This application is authorized to use location services. |
| BeaconManagerAuthorizationStatusDenied | The user explicitly denied the use of location services for this application or location services are currently disabled in Settings. |
| BeaconManagerAuthorizationStatusNotDetermined | The user has not made a choice regarding whether this application can use location services. |
| BeaconManagerAuthorizationStatusRestricted | This application is not authorized to use location services. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place. |

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary id="setMonit">setMonitoringStartedForRegionCallback</summary> 

* * *

Sets the monitoring started for region callback.

### Syntax

{% highlight VoltMx %}
setMonitoringStartedForRegionCallback(  
    regionMonitoringCallback);
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| regionMonitoringCallback | A callback function that is invoked when a monitoring starts in an new beacon region. For details, see **Remarks** below. |

### Example

{% highlight VoltMx %}
aBeaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback); 

{% endhighlight %}

### Return Values

None

### Remarks

This method sets a callback that informs the app that a new region is being monitored. The callback must have the following signature.

function monitoringStartedForRegionCallback(beaconRegion);

where the callback's _beaconRegion_ parameter is a [BeaconRegion](com.voltmx.beaconregion.html) object that contains the beacon region in which monitoring has started.

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary id="startMon">startMonitoringBeaconRegion</summary> 

* * *

Start monitoring for the specified Beacon Region.

### Syntax

{% highlight VoltMx %}
startMonitoringBeaconRegion(  
    beaconRegion);
{% endhighlight %}

Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | A [BeaconRegion](com.voltmx.beaconregion.html) object that contains the beacon region to monitor. |

### Example

{% highlight voltMx %}
aBeaconManager.startMonitoringBeaconRegion(beaconRegion);
{% endhighlight %}

### Return Values

None

### Remarks

Your app must call this method once for each region it needs to monitor. If an existing region with the same identifier is already being monitored by the application, the old region is replaced by the new one. Region events are delivered through the _monitoringCallback_ function that your app sets by calling [setMonitoringStartedForRegionCallback](#setMonit)..

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>startRangingBeaconsInRegion</summary> 

* * *

Starts ranging beacons in a specified beacon region.

### Syntax

{% highlight VoltMx %}
startRangingBeaconsInRegion(  
    beaconRegion);
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | A [BeaconRegion](com.voltmx.beaconregion.html) object to use for ranging. |

### Example

{% highlight voltMx %}
aBeaconManager.startRangingBeaconsInRegion(beaconRegion); 
{% endhighlight %}

### Return Values

None.

### Remarks

Your app calls this function once the region monitored state is "`BeaconRegionStateInside`".

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>stopMonitoringBeaconsRegion</summary> 

* * *

Stops monitoring a specified beacon region.

### Syntax

{% highlight VoltMx %}
stopMonitoringBeaconRegion(  
    beaconRegion);
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The [BeaconRegion](com.voltmx.beaconregion.html) to stop monitoring. |

### Example

{% highlight VoltMx %}
aBeaconManager.stopMonitoringBeaconsRegion(beaconRegion); 
{% endhighlight %}

### Return Values

None

### Availability

Available only on iOS.

* * *

</details>
<details close markdown="block"><summary>stopRangingBeaconsInRegion</summary> 

* * *

Stop ranging beacons in a specified Beacon Region.

### Syntax

{% highlight VoltMx %}
stopRangingBeaconsInRegion();
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| beaconRegion | The [BeaconRegion](com.voltmx.beaconregion.html) to stop ranging. |

### Example

{% highlight VoltMx %}
aBeaconManager.stopRangingBeaconsInRegion(beaconRegion);
{% endhighlight %}

### Return Values

None.

### Remarks

If the specified region object is not currently being monitored, this method has no effect. When you call this method, the beacon attributes should be the same object that you registered.

### Availability

Available only on iOS.

* * *
</details>

![](resources/prettify/onload.png)
