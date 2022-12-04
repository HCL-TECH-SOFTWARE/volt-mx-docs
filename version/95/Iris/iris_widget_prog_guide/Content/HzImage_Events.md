                              

HorizontalImageStrip Events
---------------------------

HorizontalImageStrip Widget has the following event associated with it:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onSelection Event](javascript:void(0);)

* * *

An event callback that is invoked by the platform when an Image is selected in HorizontalImageStrip.

Syntax

onSelection

Read/Write

Read + Write

Example

```

function onSelectionCallBack(hIS)
{
	//Write your logic here.
	//Creating Horizontal Image strip with onSelection:onSelectionCalBck
	var hISBasic={id:"hIS",skin:"hISkn", 
		focusSkin:"hISknFocus", 
		isVisible:true,selectedIndex:1, 
		imageWhileDownloading:"img.png",
		imageWhenFailed:"img3.png", 
		spaceBetweenImages:20, 
		data:[[{"imagekey":"image1.png"},{"imagekey":"image2.png"}, "imagekey"], 
		viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW, 
		showArrows:true, 
		showScrollbars:true, 
		onSelection:onSelectionCallBack};
	var hISLayout={padding:[5,5,5,5],
		margin:[5,5,5,5], 
		paddingInPixel:true, 
		marginInPixel:true, 
		referenceWidth:100, 
		referenceHeight:100, 
		imageScaleMode:constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS, 
		containerWeight:100};
	var hISPSP={};
					
	//Creating the Horizontal Image strip.
	var hIS=new voltmx.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);

//Reading onSelection of Horizontal Image strip.
alert("Horizontal Image strip onSelection::"+hIS.onSelection);
```

Platform Availability

Available in the IDE.

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[postOnclickJS Event](javascript:void(0);)

* * *

This event allows the developer to execute custom javascript function after the _onClick_ callback of the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.

Syntax

postOnclickJS

Read/Write

Read + Write

Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ( window, document etc.) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

Example

```

//The below function is the callback function for postOnclickJS event of Horizontal Image strip.
function postOnclickJSCalBck(hIS)
{
	 //Write your logic here.
}
					
//Creating Horizontal Image strip with postOnclickJS:postOnclickJSCalBck
var hISBasic={id:"hIS", 
	skin:"hISkn", 
	focusSkin:"hISknFocus", 
	isVisible:true, 
	selectedIndex:1,
	imageWhileDownloading:"img.png", 
	imageWhenFailed:"img3.png", 
	spaceBetweenImages:20, 
	data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"},"imagekey"], 
	viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW, 
	showArrows:true
	showScrollbars:true};

var hISLayout={padding:[5,5,5,5], 
	margin:[5,5,5,5], 
	paddingInPixel:true, 
	marginInPixel:true, 
	referenceWidth:100,
	referenceHeight:100,
	imageScaleMode:constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
	containerWeight:100};
					
var hISPSP={postOnclickJS:postOnclickJSCalBck};

//Creating the Horizontal Image strip.
var hIS=new voltmx.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);

//Reading postOnclickJS of Horizontal Image strip
alert("Horizontal Image strip postOnclickJS::"+hIS.postOnclickJS);

```

Platform Availability

Available in the IDE.

Available on Server side Mobile Web (Advanced) platform only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[preOnclickJS Event](javascript:void(0);)

* * *

This event allows the developer to execute custom javascript function when the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.

Syntax

preOnclickJS

Read/Write

Read + Write

Remarks

In for the events preOnclickJS and postOnclickJS you cannot access application model or APIs, as these functions are executed in browser whereas the remaining JavaScript modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JavaScript tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

Example

```

//The below function is the callback function for preOnclickJS event of Horizontal Image strip.
function preOnclickJSCalBck(hIS)
{
	 //Write your logic here.
}

//Creating Horizontal Image strip with preOnclickJS:preOnclickJSCalBck
var hISBasic={id:"hIS", 
	skin:"hISkn", 
	focusSkin:"hISknFocus", 
	isVisible:true,selectedIndex:1, 
	imageWhileDownloading:"img.png", 
	imageWhenFailed:"img3.png", 
	spaceBetweenImages:20, 
	data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"], 
	viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW, 
	showArrows:true, 
	showScrollbars:true};
					
var hISLayout={padding:[5,5,5,5], 
	margin:[5,5,5,5], 
	paddingInPixel:true, 
	marginInPixel:true, 
	referenceWidth:100, 
	referenceHeight:100, 
	imageScaleMode:constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
	containerWeight:100};
					
var hISPSP={preOnclickJS:preOnclickJSCalBck};
					
//Creating the Horizontal Image strip.
var hIS=new voltmx.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);

//Reading preOnclickJS of Horizontal Image strip.
alert("Horizontal Image strip preOnclickJS::"+hIS.preOnclickJS);

```

Platform Availability

Available in the IDE.

Available on Server side Mobile Web (BJS and Advanced) platform only.

* * *

