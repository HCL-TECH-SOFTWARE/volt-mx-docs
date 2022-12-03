                              

ObjectSelector3D Events
-----------------------

ObjectSelector3D has the following event associated with it:

* * *


<details close markdown="block"><summary>onSelectionDone Event</summary>

* * *

An event callback that is invoked by the platform when an Image is selected in ObjectSelector3D .

### Syntax

```

onSelectionDone
```

### Read/Write

Yes - (Read and Write)

### Example

```

//The below function is the callback function for onSelectionDoneCalBck event
function onSelectionDoneCalBck(objThreeD)
{
	/*Write your logic here*/
}

//Defining the properties for ObjectSelector3D with onSelectionDone:onSelectionDoneCalBck
var objBasic = {id:"objThreeD", 
	skin:"ObjSkin", 
	focusSkin:"ObjFSkin", 
	text:"Seat reservation", 
	isVisible:true, 
	**onSelectionDone:onSelectionDoneCalBck**};

var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, 
	padding:[5,5,5,5], margin:[5,5,5,5], 
	contentAlignment:constants.CONTENT_ALIGN_CENTER, 
	containerWeight:70, 
	paddingInPixel:true, 
	marginInPixel:true, 
	hExpand:false, 
	vExpand:false};

//Creating the ObjectSelector3D.
var objThreeD =new voltmx.ui.ObjectSelector3D(objBasic, objLayout,{}) ;
```

### Accessible from IDE

Yes

### Platform Availability

Available on Windows Phone platform only.

* * *

