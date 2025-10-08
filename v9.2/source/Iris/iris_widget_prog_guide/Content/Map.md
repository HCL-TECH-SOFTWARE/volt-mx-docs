                                

You are here: Flex Container Support

Map Widget
==========

If you want to display certain geographical locations on a map as part of your application, you should use a Map widget. The Map widget uses native maps such as Google Maps to display the relevant points. Map widgets also have callouts and annotations such as pins and label to display the information related to each coordinate.

Here are some use cases in which you can use a Map widget, instead of calling the Maps app such as Google apps:

*   To display the location of branches and ATMs of banks.
*   To track the transit of a package delivery/flight.
*   To provide the information to a Field Service agent as to where the service needs to be provided.
*   To show a route to an outlet location, such as a restaurant or a gym.

You can also use Map widgets to overlay the map with various shapes such as circle, polyline, and polygon; encode or decode the maps; add pins to the map; and customize information that needs to be displayed for each pin (by using callout). In addition, you can use a Map widget to determine the distance between two geographical coordinates.

A Map widget provides you the capability to display pre-defined locations (latitude and longitude) on an onscreen map. Platforms like iPhone (above 3.0), and Android provide a native map widget that can be displayed as part of the application.

On platforms where a native map widget is not available, the Map widget integrates with Google Maps and displays the static image with zoom and pan controls. You can customize the map view if you do not want to use the default view.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the Map widget see the [Map](../../../Iris/iris_user_guide/Content/Map.md) topic in the Volt MX Iris User Guide.

For a more hands-on approach on the functions of Map widget and features provided by the Map API, import and preview the **Map Feature** sample app by using Volt MX Iris.

[![](Resources/Images/Download_Button_10_230x35.png)](https://marketplace.hclvoltmx.com/items/voltmx-map-feature-app) 

The Map widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [Gestures](#user-input-handling)
*   [3D Touch](#3d-touch)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](Map_Events.md#doLayout) | This event is invoked for every widget when the widget position and dimensions are computed. |

  
| Properties | Description |
| --- | --- |
| [anchor](Map_Properties.md#anchor) | Specifies the anchor position of a map's pin image. |
| [anchorPoint](Map_Properties.md#anchorPo) | Specifies the anchor position of a map's pin image. |
| [bottom](Map_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [calloutWidth](Map_Properties.md#calloutW) | Specifies the width of the callout on the map. |
| [containerHeight](Map_Properties.md#containe3) | Specifies the available height of the container in terms of percentage. |
| [containerHeightReference](Map_Properties.md#containe2) | Enabled when you set the containerHeight. |
| [centerX](Map_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Map_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](Map_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](Map_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [mapWidth](Map_Properties.md#mapWidth) | Specifies the width of the map. |
| [maxHeight](Map_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Map_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Map_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Map_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](Map_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](Map_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Map_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Map_Properties.md#zIndex) | Specifies the stack order of a widget. |

#### Animations

  
| Methods | Description |
| --- | --- |
| [animate](ListBox_Method.md#animate) | Applies an animation to the widget. |

  
| Properties | Description |
| --- | --- |
| [transform](ListBox_Basic_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |

#### Data Management

  
| Methods | Description |
| --- | --- |
| [clone](Map_Methods.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [clear](Map_Methods.md#clear) | Used to clear all the data associated with a map widget, including locationData and polylines. |
| [dismissCallout](Map_Methods.md#dismissC) | Used to dismiss the custom callout for a given location. |
| [updatePin](Map_Methods.md#updatePin) | Updates a single pin on the map. |
| [updatePins](Map_Methods.md#updatePins) | Updates several pins on the map. |

  
| Properties | Description |
| --- | --- |
| [locationData](Map_Properties.md#location) | Helps you specify the data of the location highlighted on the Map Widget. |
| [widgetDataMapForCallout](Map_Properties.md#widgetDa) | Specifies the mapping between the widget identifiers and data identifiers. |

#### 3D Touch

  
| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Map_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Map_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Map_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Map_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

  
| Events | Description |
| --- | --- |
| [onClick](Map_Events.md#onClick) | An event callback is invoked by the platform when the user performs a click action on the map and location data with "latitude" and "longitude" are passed to the callback. |
| [onPinClick](Map_Events.md#onPinCli) | An event callback that is invoked by the platform when a map pin is clicked, passing the selected locationdata to the callback. |
| [onScrollWidgetPosition](Map_Events.md#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onSelection](Map_Events.md#onSelect) | An event callback that is invoked by the platform when the user clicks on a callout of the Map. |

  
| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Map_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Map_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Map_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

| Properties | Description |
| --- | --- |
| [autoCenterPinOnClick](../../../Iris/iris_widget_prog_guide/Content/Map_Properties.md#autoCenterPinOnClick) | Controls the placement of the pins of the Map widget to the center, when it is clicked. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [calloutTemplate](Map_Properties.md#calloutT) | Accepts a reference to a Box Widget which represents a UI template for a custom callout. |
| [margin](Map_Properties.md#margin) | Defines the space around a widget. |
| [marginInPixel](Map_Properties.md#marginIn) | Indicates if the margin is to be applied in pixels or in percentage. |
| [mode](Map_Properties.md#mode) | Specifies the view mode to view the map. |
| [navControlsImageConfig](Map_Properties.md#navContr) | The images required to configure the zoom (in and out) and navigation ( left, right, top, and bottom) controls on the static map view. |
| [retainMapPositionOnRestore](Map_Properties.md#retainMapPositionOnRestore) | This flag indicates whether to retain mapPosition or bounds on map restore. |
| [screenLevelWidget](Map_Properties.md#screenLe) | Specifies whether the widget should occupy the whole container excluding space for headers and footers, if any. |
| [showCurrentLocation](Map_Properties.md#showCurr) | Indicates the current location on a map as a pin, circle, or none. |
| [zoomLevel](Map_Properties.md#zoomLeve) | Sets the zoom level for the current map view. |

 

| Methods | Description |
| --- | --- |
| [addCircle](Map_Methods.md#addCircl) | Used to add a circle to the map widget with the given location data. |
| [addPin](Map_Methods.md#addPin) | Adds or appends a single pin to the map. |
| [addPins](Map_Methods.md#addPins) | Adds or appends multiple pins to the map. |
| [addPolygon](Map_Methods.md#addPolyg) | Used to add a polygon to the map widget with the given location data. |
| [addPolyline](Map_Methods.md#addPolyl) | Used to add a polyline to the map widget with the given location data. |
| [fitToBounds](Map_Methods.md#fitToBounds) | Helps to fit the given locationdata on to the map. |
| [getBounds](Map_Methods.md#getBound) | Returns the currently visible map boundaries as an object. |
| [navigateTo](Map_Methods.md#navigate) | This helps to navigate from one index to other index in the given list of locations shown on the map view. |
| [navigateToLocation](Map_Methods.md#navigate2) | Allows you to navigate programmatically to the specified location. |
| [removeCircle](Map_Methods.md#removeCi) | Used to remove a Circle from the map. |
| [removePolygon](Map_Methods.md#removeP1) | Used to remove a polygon from the map. |
| [removePin](Map_Methods.md#removePin) | Removes a single pin from the map. |
| [removePins](Map_Methods.md#removePins) | Removes several pins from the map. |
| [removePolyline](Map_Methods.md#removePo) | Used to remove a polyline from the map. |
| [setBounds](Map_Methods.md#setBounds) | Helps to fit the map to the provided center, zoom, viewingAngle, and orientation values at one go. |
| [setCalloutVisibility](Map_Methods.md#setCalloutVisibility) | Can show or hide callouts. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Map_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Map_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Map_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](Map_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](Map_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [cursorType](Map_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableToolBar](../../../Iris/iris_widget_prog_guide/Content/Map_Properties.md#enableToolBar) | Helps you to either enable or disable toolbar of a Map widget. |
| [provider](Map_Properties.md#provider) | Specifies the map data provider. |
| [defaultPinImage](Map_Properties.md#defaultP) | The default map pin image used to indicate a location on map. |
| [imageSourceType](Map_Properties.md#imageSou) | Specifies the source of the image for pins on the map. |

| Events | Description |
| --- | --- |
| [onMapLoaded](Map_Events.md#onMapLoaded) | This event is sent when the map rendering is complete. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Map_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Map_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [enable](Map_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [removeFromParent](Map_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Map_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Map_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Map_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [enableCache](Map_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [parent](Map_Properties.md#parent) | Helps you access the parent of the widget. |
| [isVisible](Map_Properties.md#isVisibl) | The isVisible property controls the visibility of a widget on the form. |

Map Widget Basics
-----------------

With the Map widget, your app can display a specific location, overlay it with circles, polygons, and polylines, and add highly customizable pins. With these capabilities, you app can, for instance, show the user a circular or rectangular area in which the app will search for certain types of businesses.

In addition, your app can search for possible routes between a source and a destination location and show them on the map by drawing a polyline.

> **_Note:_** On Android platform, Map widget does not work in Popup.

### Flex Container Support

When designing and developing your app, you can place a Map widget inside a flex container such as a FlexForm, a FlexContainer, or a FlexScrollContainer. You can also apply flex templates to Map widgets to aid in customizing their appearance. However, flex templates cannot be applied to Map widgets that are placed inside a box container such as an HBox or VBox. Flex templates can only be used on Map widgets that you have placed inside a flex container. In addition, you can use flex containers and flex templates for your pin callouts.

When used within a flex container, callouts behave in ways that are different from most widgets. For example, the Map widget does not use the flex container positional properties for callouts because it always displays callouts at the pin location. Because the Map widget itself is not derived from a flex container, the implicit calculations that normally occur with flex dimensional parameters are not performed with a Map widget's callouts. If the callout does not have an explicit width and height specified, the flex container default width and height are applied. When you apply callout templates to callounts in the Map widget, the Map widget ignores the **calloutWidth** property entirely.

Since a Flex container has the width and height properties, the calloutWidth property of a Map is ignored when using a Flex callout template.

Positional parameters of Flex containers are not respected since callouts are always displayed at the pin location rather than positions specified. Implicit calculations of flex dimensional values are not supported as its parent (the Map widget) is not a Flex container. If the widget does not have explicit width and height specified, Flex container default width and height are applicable.

### Mapping Services

The Map widget renders a map using the mapping service provided by the platform. The following table shows the list of platforms and the available mapping services:

| Platform | Mapping Service |
| --- | --- |
| iOS | iOS Native Framework Map |
| Android | Google Maps |
| Windows | Bing Maps |
| Mobile Web (advanced) | Google Static Maps, Native maps of the device, and interactive maps (Java script) |

  
To generate and configure Android Google Map APIs [click here](../../../Iris/iris_user_guide/Content/Generating_Map_Keys.md).

### Creating a Map Using a Constructor: voltmx.ui.Map

```

var mymap = new voltmx.ui.Map(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

### Map Examples

#### Example 1: Creating a Map Dynamically

```
//The below function is the callback function for onPinClick event.
function onPinClickCallBck(map) {
    alert("onPinClick event triggered");
}

//Defining the map properties
var mapBasicConf = {
    id: "map1",
    provider: constants.MAP_PROVIDER_GOOGLE,
    mapKey: "0z5UtaSPUYj42f5qX0VAwmDGLX39Qxgbtcra0TA", //Provide your own Google map key.
    defaultPinImage: "kmpin.png",
    isVisible: true,
    onPinClick: onPinClickCallBck
};

var mapLayoutConf = {
    margin: [20, 40, 50, 20],
    containerWeight: 100,
    widgetAlignment: constants.WIDGET_ALIGN_BOTTOM_LEFT,
    padding: [10, 10, 10, 10],
    hExpand: false,
    vExpand: false
};

var mapPSPConf = {
    mode: constants.MAP_VIEW_MODE_HYBRID,
    showCurrentLocation: constants.MAP_VIEW_SHOW_CURRENT_LOCATION_AS_PIN
};
//Creating the map with the properties defined above.
var map = new voltmx.ui.Map(mapBasicConf, mapLayoutConf, mapPSPConf);
```

#### Example 2: Using Flex Containers in Maps

```
var lbl1 = new voltmx.ui.Label({
    "height": "26dp",
    "id": "lbl1",
    "left": "1dp",
    "top": "85dp",
    "width": "100dp",
    "zIndex": 1….
}, {….
}, {….
});

flexTemp1 = new voltmx.ui.FlexContainer({
    "bottom": "50dp",
    "clipBounds": true,
    "id": "flexTemp1",
    "isVisible": true,
    "layoutType": voltmx.flex.FREE_FORM,
    "left": "0dp",
    "Location": "[0,0]",
    "right": "200dp",
    "skin": "flexskin1",
    "top": "0dp",
    "zIndex": 1
}, {
    "padding": [0, 0, 0, 0]
}, {});;

flexTemp1.add(lbl1);
mapWidget.calloutTemplate = flexTemp1;
frmMap1.map1.widgetDataMapForCallout = {
    "lbl1": "lbl1"
};
frmMap1.map1.locationData = [{
    lat: "17.377513",
    lon: "78.475895",
    name: "HCL",
    desc: "Hyderabad,Telangana",
    showCallout: true,
    calloutData: {
        lbl1: "HCL"
    }
}]		

```

### Managing Map Pins

The following example shows how to add, delete and update map pins.

```
/******************************************************************
 *	Name    : mapPins
 *	Author  : HCL
 *	Purpose : To add pins corresponding to location data.
 *******************************************************************/
function mapPins() {
    frmMapNew.MainMap.locationData = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "HCL(new)",
        desc: "Phoenix infocity, Gachibowli"
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "HCL",
        desc: "HCL",
        image: "pin.png",
        meta: {
            color: "red",
            label: "A"
        }
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "House",
        desc: "Madhapur, Hyderabad, Andhra Pradesh",
        image: "pin.png",
        meta: {
            color: "yellow",
            label: "B"
        }
    }, ];

    //   frmMapNew.MainMap.addPin(pin1);
}

// Creating Pins 
pin1 = {
    id: "id1", // id is mandatory for every pin
    lat: "17.4947934",
    lon: "78.3996441",
    name: "KPHB",
    image: "defaultImage.png",
    focusImage: ”focusImage.png ",  //focus image will be shown while map pin selected
	desc: "Kukatpally ",
	showCallout : true,
	meta: {
		color: "green ",
		label: "A "
	}
};
  
pin2 = {
	id : "id2 ", // id is mandatory for every pin
	lat : "17.3616 ",
	lon : "78.4747 ",
	name : "Charminar ",
	image : "defaultImage.png ",
	focusImage:"focusImage.png", //focus image will be shown while map pin selected
    desc: "In Hyderabad",
    showCallout: true,
    meta: {
        color: "green",
        label: "B"
    }
};

pin3 = {
    id: "id3", // id is mandatory for every pin
    lat: "17.2543",
    lon: "78.6808",
    name: "Ramoji",
    image: "defaultImage.png",
    focusImage: ”focusImage.png ",  //focus image will be shown while map pin selected
	desc : "Film City in Hyderabad ",
	showCallout : true,
	meta: {
		color: "green ",
		label: "C "
	} 
};
/******************************************************************
*	Name    : addPin
*	Author  : HCL
*	Purpose : To Dynamically add pin to the Map widget.
*******************************************************************/
function addPin ()
{
	frmMapNew.MainMap.addPin(pin1);
}

/******************************************************************
*	Name    : addPins
*	Author  : HCL
*	Purpose : To Dynamically add pins to the Map widget.
*******************************************************************/
function addPins()
{ 
	frmMapNew.MainMap.addPins([pin2,pin3]);
}

/******************************************************************
*	Name    : deletePin
*	Author  : HCL
*	Purpose : To Dynamically delete pin from the Map widget.
*******************************************************************/
function deletePin()
{
	frmMapNew.MainMap.removePin(pin1);
}

/******************************************************************
*	Name    : deletePins
*	Author  : HCL
*	Purpose : To Dynamically delete pins from the Map widget.
*******************************************************************/
function deletePins()
{
	frmMapNew.MainMap.removePins([pin2,pin3]);
}

/******************************************************************
*	Name    : updatePin
*	Author  : HCL
*	Purpose : To Dynamically update pin of a Map widget.
*******************************************************************/
function updatePin()
{
	pinTemp = {
		id : "id1 ",  // id is mandatory for every pin
		name : "Kukatpally Housing Board ",
	};
	frmMapNew.MainMap.updatePin(pinTemp);
	frmMapNew.lblUpdate.text = "
    updated the name of added pin ";
}

/******************************************************************
*	Name    : updatePins
*	Author  : HCL
*	Purpose : To Dynamically update pins of a Map widget.
*******************************************************************/

function updatePins()
{
	pinTemp = {
		id : "id1 ",  // id is mandatory for every pin
		name : "Kukatpally Housing Board ",
	};
  
	pinTemp1 = {
		id : "id2 ",  // id is mandatory for every pin
		name : "Four Minarets ",
	};
	frmMapNew.MainMap.updatePins([pinTemp,pinTemp1]);
	frmMapNew.lblUpdate.text = "updated the names of Pins ";
}
```

### Important Considerations

If there are multiple pins at the same location, click events will behave in the following way:

*   iOS: Click events will be sent to the topmost pin and callout.
*   Android:  Click events will be sent to the bottommost pin and callout.

> **_Note:_** Preview of map widget is not supported on SPA and Desktop Web platforms.

**Android Limitations**

On Android, if your app creates a Map widget V1 programmatically, follow either of the procedures below:

**Procedure1:**

1.  From the Applications View, right-click on the project and select **Properties**.
2.  Select **Native App** tab and select **Android**.
3.  Under **Manifest Properties**, select **Tags** tab.
4.  Add the below line of code in **Child tag entries under <application> tag:**.

```
<uses-library Android:name="com.google.Android.maps"></uses-library>
```

**Procedure2:** (works only with Volt MX Iris IDE plugin version IDE GA-V5.0.10 )

1.  From the Applications View, right-click on the project and select **Properties**.
2.  Under **Application** tab, add map key in **Android map widget key** textbox.

On Android if you want to use the Map widget V2, follow the below steps:

1.  From the Applications View, right-click on the project and select **Properties**.
2.  Navigate to the **Properties->Application** tab. In the **Map Widget** section, add the key generated above in the **Android map widget key 2** field.
    
    ![](Resources/Images/AddWidgetAndroid.png)
    

[Click here to read more about Generating and Configuring Map API Keys.](../../../Iris/iris_user_guide/Content/Generating_Map_Keys.md)

If you have downloaded Google Play Services v13 in Android SDK manager, follow either of the options below:

To support Android v2.2 and above devices, do the following:

1.  Download Google Play services for Froyo from the Android SDK manager. The Google Play services for Froyo will be available for download only after checking Obsolete option in Android SDK manager.
2.  Rename the folder "google\_play\_services\_froyo" to "google\_play\_services", in the Android SDK path: ..\\Android-sdk-windows\\extras\\google\\.

To use the latest Google Play libraries (Rev 13 and above which support only Android v2.3 and above devices), do the following:

1.  In Volt MX Iris, On the **Project** menu, click **Settings**.
2.  Click the **Native** tab, and then click the **Android** sub-tab.
3.  Scroll down in the dialog box, and under **Manifest Properties**, click the **Tags** tab.
4.  In the Child tag entries under <application> tag text box, add the following tag:
    
    <meta-data Android:name="com.google.Android.gms.version" Android:value="@integer/google\_play\_services\_version" />.
    

> **_Note:_** Google Map V2 does not work on emulator. On Android devices it works only with Android Version 2.2 and above. It requires [OpenGL ES version 2](https://developers.google.com/maps/documentation/android/start#requiring_opengl_es_version_2) to load.

> **_Note:_** On Android platform, Multiple Map Widgets in a single form is not supported for Google Map V1. It is supported for Google Map V2.

> **_Note:_** Clickable/Interactive widgets inside a Map callout template will become non-clickable when Android Map V2 version is used. This the limitation of native Android Map V2 callout. As callouts are displayed as static image snapshot of callout template and only the entire callout is clickable. Map onSelection callback is invoked when a callout is clicked.

### Customizing Map Pin Images

The Map widget provides you with the ability to set the map pin image from different possible sources. The map pin image takes the name of the pin image that is bundled with the application. This feature allows the developer to set the pin image from different sources. If the platforms fail to extract the image out of source, then default pin image is used. You can set the pin image from the following sources.

*   **A bundled image**. If you have bundled an image with the app, you can set the pin image source to the name of the bundled image to display it.
*   **An image in the file system**. Images in the file system of the device or app can be used for the pin image. You must provide the full path name to the image. Note that Android allows only PNG images.
*   **A Base64 String**. You can provide an image that is stored in a base64 encoded format. Apps must decode the image from the base64 string to create a pin icon and set it as the pin image.
*   **An Image object.** The Map widget lets you provide your bitmaps as Image widgets.

> **_Note:_** Windows, Desktop Web, and SPA support only bundled images.

### Searching Routes

Your app can search for routes between the source and destination locations using the [voltmx.map.searchRoutes](../../../Iris/iris_api_dev_guide/content/mapapi.md) function, which is documented in the [API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).

