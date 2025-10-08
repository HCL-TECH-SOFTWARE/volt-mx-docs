                              

ImageGallery Events
-------------------

ImageGallery has the following event associated with it:

* * *


<details close markdown="block"><summary>onSelection Event</summary>

* * *

An event callback that is invoked by the platform when an Image is selected in ImageGallery.

### Syntax

```

onSelection
```

### Read/Write

Read + Write

### Example

```

//The below function is the callback for onSelection event
function onSelCallBck(imgGal)
{
	alert("onSelection call back triggered");
}

//Defining the properties for ImageGallery with onSelection:onSelCallBck
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	selectedIndex:3, 
	spaceBetweenImages: 50,
	**onSelection:onSelCallBck**}

var imgGalLayout = {containerWeight:100}

var imgGalPSP = {itemsPerRow:3};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

### Platform Availability

Available in the IDE.

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function after the _onClick_ callback of the ImageGallery is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

### Syntax

```

postOnclickJS
```

### Read/Write

Read + Write

### Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ]( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action. You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.md script tag otherwise you will not be able to access the objects defined in those modules.

### Example

```

//The below function is the callback for postOnclickJS event.
function postOnclickCallBck(imgGal)
{
	alert("PostOnclick call back triggered");
}

//Defining the properties for ImageGallery with postOnclickJS:postOnclickCallBck
var imgGalBasic = { id: "imgGallery",
	isVisible: true,skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	selectedIndex:3, 
	spaceBetweenImages: 50}

var imgGalLayout = {containerWeight:100}

var imgGalPSP = {itemsPerRow:3, **postOnclickJS:postOnclickCallBck**};
	
//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

### Platform Availability

Available in the IDE.

Available on Server side Mobile Web (Advanced) platform only.

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom javascript function when the ImageGallery is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

### Syntax

```

preOnclickJS
```

### Read/Write

Read + Write

### Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ]( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action. You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.md script tag otherwise you will not be able to access the objects defined in those modules.

### Example

```

//The below function is the callback for preOnclickJS event
function preOnclickCallBck(imgGal)
{
	alert("PreOnclick call back triggered");
}

//Defining the properties for ImageGallery with preOnclickJS:preOnclickCallBck
var imgGalBasic = { id: "imgGallery",
	isVisible: true, 
	skin: "gradroundfocusbtn",
	focusSkin: "gradroundfocusbtn",
	imageWhileDownloading: "ApplicationIcon.png",
	imageWhenFailed: "AppIcon.png",
	selectedIndex:3, 
	spaceBetweenImages: 50}

var imgGalLayout = {containerWeight:100}

var imgGalPSP = {itemsPerRow:3, **preOnclickJS:preOnclickCallBck**};

//Creating the ImageGallery.
var imgGallery = new voltmx.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);
```

### Platform Availability

Available in the IDE.

Available on Server side Mobile Web (BJS and Advanced) platform only.

* * *

</details>