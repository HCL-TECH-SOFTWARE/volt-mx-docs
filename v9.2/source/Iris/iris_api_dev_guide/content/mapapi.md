                             

You are here: Map API

Map API
=======

A Map widget displays geographical locations on a map in your application. Using the Map API, you can customize maps with desired content and add more capabilities to the [Map widget](../../../Iris/iris_widget_prog_guide/Content/Map.md). The Map API uses `voltmx.map Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.map.containsLocation](voltmx_map_functions.md#contLoc) | Tests to see whether a specified location is within a circle or polygon on a map or whether it lies along a polyline on a map. |
| [voltmx.map.distanceBetween](voltmx_map_functions.md#distance) | Finds the linear distance between two locations on a map. |
| [voltmx.map.decode](voltmx_map_functions.md#decode) | Enables apps to to decode the encoded polyline points which are provided in search route results. |
| [voltmx.map.searchRoutes](voltmx_map_functions.md#mapSrchR) | Searches for routes between the start and destination locations. |

 

To search for all possible routes between any two points on the map, use the [voltmx.map.searchRoutes](voltmx_map_functions.md#mapSrchR) function. Find the latitude and longitude values of each point in the selected search route by using the [voltmx.map.decode](voltmx_map_functions.md#decode) function. Using this information, you can calculate the distance between the two locations with the [voltmx.map.distanceBetween](voltmx_map_functions.md#distance) function. You can also determine if a specific location falls within a circle or along a polyline on the map using the [voltmx.map.containsLocation](voltmx_map_functions.md#contLoc) function.

Searching Routes
----------------

You can search for routes between the source and destination locations using the [voltmx.map.searchRoutes](voltmx_map_functions.md#mapSrchR) function. Your can also use polylines to display routes on maps and find the distance between a given set of locations.

The route searching capabilities of underlying platforms varies as each platform supports a different set of request parameter configurations. The format of the search results also varies from platform to platform.

Here are the list of request parameters available for all platforms.


<table>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Android</th>
<th>iOS</th>
</tr>
<tr>
<td>origin [JSObject] [Mandatory] [All]</td>
<td>
<p></p>
<p>Source address or latitude/ longitude values for which you want to get the route details. If both lat/lon and address are mentioned, the lat/lon values are considered. Address is supported only in Android & iOS.</p> <p>Ex: searchCriteria = {origin : {lat:17.499467, lon: 78.386760, address= "9225 Bee Cave Rd, Austin, TX 78746"} };</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>destination [JSObject] [Mandatory] [All]</td>
<td>
<p></p>
<p>Destination address or latitude/ longitude values for which you want to get the route details. If both lat/lon and address are mentioned, the lat/lon values are considered. Address is supported only in Android.</p>
<p>Ex: searchCriteria = { destination : {lat:17.499467, lon: 78.386760, address= "9225 Bee Cave Rd, Austin, TX 78746"} };</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>transportMode [String] [Optional] [All]</td>
<td>
<p></p>
<p>Mode of the transport used to calculate the directions. Here are the list of supported modes by platform.</p>
<ul>
<li>Driving – Applies to Android, iOS, and Windows</li>
<li>Walking – Applies to Android, iOS, and Windows</li>
<li>Bicycling – Applies to Android only</li>
<li>Transit – applies to Android only</li>
</ul>
<p>If transportMode is not specified, underlying platforms assumes the default values. Here are the default values assumed by each platform in the absense of mode key.</p>
<ul>
<li>iOS: Any</li>
<li>Android: Driving</li>
<li>Windows: Driving</li>
</ul>
<p>If an unsupported mode is received, platforms fallback on default mode.</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>directionServiceUrl [String] [Mandatory] [Android]</td>
<td>
<p></p>
<p>URL that the Android platform uses to fetch direction details from Google Direction API service. Google offers two URLs (secure/ non-secure) for the direction service. You can use any one of them as required.</p>
<p>Google Direction Service URLs: "https://maps.googleapis.com/maps/api/directions/json"</p>
<p><blockquote><em>Note:</em> If the application is using SSL pinning (Allow Self Signed certificates – Only Bundled), the application must obtain the certificate for the URL and bundle along with the other pinned certificates. You must be cautious about the validity of the bundled certificate as Google certificates have a limited validity period.</blockquote></p>
<!-- <p><blockquote><em>Note:</em> If the application is using SSL pinning (Allow Self Signed certificates – Only Bundled), the application must obtain the certificate for the URL and bundle along with the other pinned certificates. You must be cautious about the validity of the bundled certificate as Google certificates have a limited validity period. This requirement is not applicable from Visualizer V8 SP4 onwards.</blockquote></p> -->
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>waypoints [Array] [Optional] [Android, Win]</td>
<td>
<p></p>
<p>Specifies an array of waypoints. A waypoint is specified as either a latitude/ longitude coordinate or as an address. Number of legs returned in resultant routes depends on the number of waypoints specified. If no waypoint is specified, single leg is returned covering the entire route. Since this property is not supported for iOS, search results always contains single leg for each route for iOS.</p>
<p>For example, searchCriteria = {… waypoints:[{lat:17.495106, lon:78.324235}, {lat:17.495024, lon:78.345263}] …};</p>
<p><blockquote><em>Note:</em> Google Map restriction for Android allows up to 8 waypoints for Google Map free API and 23 waypoints for Google Map for Work in each request. Waypoints are not available for transit directions.</blockquote></p>
<p><blockquote><em>Note:</em> iOS core OS does not have direct support for waypoints. To support, Volt MX iOS platform need to make multiple MapKit API calls internally.</blockquote></p>
<p></p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>alternatives [Boolean] [Optional] [All]</td>
<td>
<p></p>
<p>Boolean flag to indicate whether to search for alternative routes or not. If true, search results may contain more than one route. Searching for alternative routes may increase the response time.</p>
<p>For example, searchCriteria = {… alternatives:true …}</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>avoid [Array] [Optional] [Android,Win]</td>
<td>
<p></p>
<p>Indicates that the calculated route(s) should avoid certain features.</p>
<ul>
<li>tolls, highways, ferries - avoided in iOS and Windows.</li>
<li>tunnels, dirtroad, motorrail - avoided in Windows, but not in Android.</li>
<li>Indoor is avoided in Android, but not in Windows.</li>
</ul>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>departureTime [Number] [Optional] [Android, iOS]</td>
<td>
<p></p>
<p>Desired time of departure in seconds which is calculated since January 1, 1970 UTC. This property is applicable for Android when transportMode is transit.</p>
<p>For example, searchCriteria = {… departureTime : …}</p>
<p><blockquote><em>Note:</em> Both departureTime and arrivalTime should not present search criteria for Android.</blockquote></p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>arrivalTime [Number] [Optional] [Android, iOS]</td>
<td>
<p></p>
<p>Desired time of arrival in seconds which is calculated since January 1, 1970 UTC. This property is applicable for Android when transportMode is transit.</p>
<p>For example, searchCriteria = {… arrivalTime : …}</p>
<p><blockquote><em>Note:</em> Both departureTime and arrivalTime should not present search criteria for Android.</blockquote></p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">Y</td>
</tr>
<tr>
<td>language [String] [Optional] [Android]</td>
<td>
<p></p>
<p>Specifies the language in which you want to return results. If the language is not set, the service will attempt to use the native language of the domain from which the request is sent. A list of latest supported language codes can be found <a href="https://developers.google.com/maps/faq#languagesupport">here</a>.</p>
<p>For example, searchCriteria = {… language = “fr” …}</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>region [String] [Optional] [Android]</td>
<td>
<p></p>
<p>Specify ccTLD country code to get the search results biased to the specified region. For more info about region specifications refer <a href="https://developers.google.com/maps/documentation/directions/overview#RegionBiasing">here</a>.</p>
<p>For example, searchCriteria = {… region : “es” …}</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>transitMode [Array] [Optional] [Android]</td>
<td>
<p></p>
<p>Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions, and only if the request includes an API key or a Google Maps API for Work client ID. The parameter supports the following arguments:</p>
<ul>
<li>bus: indicates that the calculated route should prefer travel by bus.</li>
<li>Subway: indicates that the calculated route should prefer travel by subway.</li>
<li>train: indicates that the calculated route should prefer travel by train.</li>
<li>tram: indicates that the calculated route should prefer travel by tram and light rail.</li>
<li>rail: indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to transit_mode=train|tram|subway.</li>
</ul>
<p>Ex : searchCriteria = {… transitMode : [“bus”,”tram”] …};</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>transitRoutingPreference [Array] [Optional][Android]</td>
<td>
<p></p>
<p>Specifies preferences for transit routes. This parameter may only be specified for transit directions, and only if the request includes an API key or a Google Maps API for Work client ID.</p>
<p>The parameter supports the following arguments:</p>
<ul>
<li>less_walking: indicates that the calculated route should prefer limited amounts of walking.</li>
<li>fewer_transfers : indicates that the calculated route should prefer a limited number of transfers.</li>
<li>routeOptimization [String] [Optional] [Windows] : Route optimization criteria. Here are the supported values.</li>
</ul>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>apiKey [String] [Optional] [Android]</td>
<td>
<p></p>
<p>Google Maps V2 api key that the Google Direction API uses to determine your usage quota and rate limits. If you do not have a key, you can obtain one <a href="https://developers.google.com/maps/documentation/directions/get-api-key">here</a>.</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>clientID [String] [Optional] [Android]</td>
<td>
<p></p>
<p>Use clientID to access the special features of the Google Maps API for Work along with the signature property. More details about acquiring and using clientID can be found <a href="https://developers.google.com/maps/documentation/directions/get-api-key#client-id">here</a>.</p>
<p><blockquote><em>Note:</em> You must mention the apiKey or [clientID + signature], otherwise, the request will fail. apiKey and clientID are mutually exclusive and using both in the same request causes the route search to fail.</blockquote></p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
<tr>
<td>signature [String] [Optional] [Android]</td>
<td>
<p></p>
<p>Use signature to access the special features of the Google Maps API for Work along with clientID property. More details about acquiring and using signature can be found <a href="https://developers.google.com/maps/documentation/directions/get-api-key#client-id">here</a>.</p>
<p></p>
</td>
<td align="center">Y</td>
<td align="center">N</td>
</tr>
</table>

 

Route Search Results
--------------------

Route search results are delivered through the successCallback callback function of the searchRoute function and provided in JSON format. The _routes_ parameter is a JSON array that contains one or more routes depending on the search criteria parameter _alternatives_ which influences the returned results to include alternative routes.

The high level structure of a typical JSON response would be similar to the following example.

```

routes = [ {
        legs : [ {
            steps: [ {    		
                     }
		    	     …. //other speps
                   ]	
                 }
                 …. //other legs
               ]
            }
            ….. //additional alternative routes
         ];
			
```

> **_Note:_** In Android, the availability of certain platform specific keys in search results depend on the search criteria. Please refer the [Google Direction API](https://developers.google.com/maps/documentation/directions/intro) documentation for detailed information on when certain keys are included in search result.

### Routes

Search results are returned as JSON arrays with one or more routes that indicate possible directions that are available between the source and the destination locations. Each route contains the following information.

*   **startLocation \[JSObject\]:** Starting location for the route. It may be different from the source location given in search criteria.
*   **endLocation \[JSObject\]:** Ending location for the route. It may be different from the destination location given in search criteria.
*   **distance \[Number\]:** Total distance of the route in meters.
*   **duration \[Number\]:** Total duration of the route in seconds
*   **legs \[Array\]:** An array of legs which constitute the route. A separate leg will be present for each waypoint or destination specified. If the search criteria does not contain any waypoints, only one leg will be returned. iOS platform does not support waypoints, so it always returns single leg covering the total route.

Each leg contains a startLocation, endLocation, distance, duration, and steps. An array of steps constitute the leg. A step is the most atomic unit of a direction's route, containing a single step describing a specific, single instruction on the journey.

To know more about a step, refer [here](#steps).

Apart from the common properties, platforms can also provide additional information in each route.

Android :

*   **durationInTraffic \[ Number \]**Indicates the total duration of this leg, taking into account current traffic conditions. Availability of this key is based on certain condition. For more information, refer [here](https://developers.google.com/maps/documentation/directions/intro#Legs).
*   **arrivalTime \[String\]**: Contains the estimated time of arrival for this leg.
*   **departureTime \[String\]** : Contains the estimated time of departure for this leg.
*   **startAddress \[String\]** : Contains the human-readable address (typically a street address) reflecting the start\_location of this leg.
*   **endAddress \[String\]** : Contains the human-readable address (typically a street address) reflecting the end\_location of this leg.

Windows:

None.

*   **polylinePoints \[Array\]:** An Array of Lat/Lon values that can be used to draw path that follows the road closely. Developers can use addPolyline() api to draw the path.

### Steps

Each step contains the following information

*   **startLocation \[JSObject\]**: Starting location for the step.
*   **endLocation \[JSObject\]**: Ending location for the step.
*   **distance \[Number\]** : Total distance of the step in meters.
*   **instruction \[String\]**: Instruction for step to present turn-by-turn direction hint
*   **transportMode \[String\]** : Mode of the transport.

Apart from common properties, platforms can also provide additional information in each step.

Android:

*   **duration \[Number\]**: Total duration of the step in seconds
*   **encodedPolylinePoints\[String\]** : Contains an encoded polyline representation of the step. This polyline is an approximate (smoothed) path of the step. More details about encoded polyline can be found [here](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Developers need to decode the encoded polyline using voltmx.map.decode() utility function to get the series of lat/lon values which can be used to draw a smooth polyline using addPolyline() function.

iOS:

*   **notice \[ String \]** : Additional localized legal or warning notice related to this step (e.g. "Do not cross tracks when lights flash")

### Platform Specific properties

Apart from common properties, platforms can also provide additional information in each route.

#### iOS

*   **name \[String\]:** Localized description of the route's significant feature. For example, "US-101"
*   **advisoryNotices \[NSArray\]:** Localized notices of route conditions as NSStrings. For example, "Avoid during winter storms"

#### Android

*   **copyrights \[ String \]:** Contains the copyrights text to be displayed for this route. You must handle and display this information yourself.
*   **warnings \[Array\]:** Contains an array of warnings to be displayed when showing these directions. You must handle and display these warnings yourself.

Windows :

*   **HasBlockedRoads \[bool \]:** Gets a value that indicates the route has been modified from the "best" route to avoid blocked roads.
*   **IsTrafficBased \[bool\]:** Gets a value indicating whether the MapRoute is based on traffic.

### Limitations

#### Android

Applications which use the apiKey parameter in their search criteria must enable the Directions API in the Google Developer Console. The usage quota for the Google Directions API is counted against the apiKey.  

Google's usage limits are as follows:

*   Free: 2,500 directions requests per 24 hour period, Up to 8 waypoints allowed in each request and 2 requests per second. Waypoints are not available for transit directions.
*   Paid: 100,000 directions requests per 24 hour period.

#### iOS

iOS does not support directions in all countries. For a list of countries where directions are available, please refer [here](http://www.apple.com/in/ios/feature-availability/).  

To view the functionality of the Map API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/MapAPI)

![](resources/prettify/onload.png)
