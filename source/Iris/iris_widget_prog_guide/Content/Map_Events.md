                               


Map Events
==========

The Map widget does not support touch events.

Map has the following events associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

### Syntax
```

doLayout()
```

### Read/Write

Read + Write

### Remarks

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

### Example

```

//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;


function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}
```

### Platform Availability

*   iOS
*   Android
*   Windows
*   SPA

* * *

</details>
<details close markdown="block"><summary>onBoundsChanged Event</summary>

* * *

This event is sent when ever there is a change in the content of the map.

### Syntax
```

onBoundsChanged()
```

### Parameters

mapWidget

(Optional) Object. The widget that contains the map.

_boundaryLocations_

(Optional) Dictionary. See the remarks section below for the definition of this object.

### Read/Write

Read + Write

### Remarks

boundaryLocations is a dictionary which contains these elements:

*   center : a dictionary of latitude and longitude which marks the center of the map bounds.
*   northEast : a dictionary of latitude and longitude for the northeast boundary
*   southWest : a dictionary of latitude and longitude for the southWest boundary
*   latspan : a number. Signifies the difference in latitude between the two boundaries.
*   lonspan : a number. Signifies the difference in longitude between the two boundaries.

navitagateTo should not be called within the body of this callback function. this will result in unwanted behavior in all platforms.

### Example

```

function mapBoundsChange(mapWidget, dict) {
    voltmx.print("north east boundary lat" + dict.northEast[0] + "lon" + dict.northEast[1]);
    voltmx.print("south west boundary lat" + dict.southWest[0] + "lon" + dict.southWest[1]);
}
frmMap.myMap.onBoundsChanged = mapBoundsChange;
```

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the map and location data with "latitude" and "longitude" are passed to the callback.

### Syntax
```

onClick()
```

### Parameters

mapwidgetid

Optional. Handle to the widget instance.

locationData

Optional. Specifies the location data of a single location following the data format of the "locationData" property on the map widget. It should support both hash and array format.

### Read/Write

Read + Write

### Remarks

This event is not raised if the user clicks on map pin and callout.

On SPA Windows platform, the onClick event gets fired three times because of google map issue with Windows mobile platform.

### Example

```

//Sample code to set a callback to the onClick event of a Map widget.

frmMap.myMap.onClick=onClickCallback;

function onClickCallback(map, location) {
    //write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>onPinClick Event</summary>

* * *

An event callback that is invoked by the platform when a map pin is clicked, passing the selected _locationdata_ to the callback.

### Syntax
```

onPinClick()
```

### Parameters

mapwidgetid

Optional. Handle to the widget instance.

locationData

Optional. Specifies the location data of a single location following the data format of the "locationData" property on the map widget. It should support both hash and array format.

### Read/Write

Read + Write

### Remarks

Alerts should not be used for onPinClick event.

### Example

```

//Sample code to set a callback to the onPinClick event of a Map widget.

frmMap.myMap.onPinClick=onPinClickCallback;

function onPinClickCallback(mapid, locationdata) {
    //write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

</details>
<details close markdown="block"><summary>onMapLoaded Event</summary>

* * *

This event is sent when the map rendering is complete.

### Syntax
```

onMapLoaded ()
```

### Parameters

mapWidget

(Optional) Object. The widget that contains the map.

### Read/Write

Read + Write

### Remarks

1.  You should call the fitToBounds and setBounds methods for onMapLoaded callback.
2.  If you call both fitToBounds and setBounds (fitToBounds, setBounds) before navigating to the form that contains the map, the fitToBounds method takes precedence.

### Example

```

function mapReady(mapWidget) {
    voltmx.print("map is ready with all the data");
}
map.onMapLoaded = mapReady;
```

None

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

### Syntax
```

onScrollWidgetPosition()
```

### Read/Write

Read + Write

### Example

```

var LabelWdg = new voltmx.ui.Label(basicConf, layoutConf, pspConf);
form.add(LabelWdg);
LabelWdg.onScrollWidgetPosition = onScrollWidgetPositionCallBack;

function onScrollWidgetPositionCallBack(wdg, screenX, screenY, frameX, frameY) { //wdg : Widget that is registered for onScrollWidgetPosition.
    /*screenX : Position of widget with respect to 
the screen's X - coordinates (after downsizing the navigation bar and status bar).*/
    /*screenY : Position of widget with respect to the screen's Y - 
coordinates (after downsizing the navigation bar and status bar).*/
    //frameX : Position of widget with respect to parent container's X- coordinates.
    //frameY : Position of widget with respect to parent container's Y- coordinates.
}
```

### Platform Availability

*   Not Accessible from IDE
*   Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onSelection Event</summary>

* * *

An event callback that is invoked by the platform when the user clicks on a callout of the Map.

### Syntax
```

onSelection()
```

### Parameters

mapwidget

Optional. Handle to the widget instance.

locationData

Optional. Specifies the location data of a single location following the data format of the "locationData" property on the map widget. It should support both hash and array format.

### Read/Write

Read + Write

### Remarks

On Desktop Web and SPA platforms, onSelection event is fired only for default infoWindow.

### Example

```

//Sample code to set a callback to the onSelection event of a Map widget.

frmMap.myMap.onSelection=onSelectionCallback;

function onSelectionCallback(mapid, locationdata) {
    //write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms

* * *

