                                


MLCamera Events
===============

The MLCamera widget has the following event associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked when widgets are placed inside a FlexContainer, FlexScrollContainer or a FlexForm. When this event is invoked the widget positions, widget dimensions, the hierarchy of the widget and the frame property of the widget is calculated. You must use the frame property in the event callback to modify the widget dimensions and positions, if required.

### Syntax

```

doLayout()
```

### Read/Write

Read + Write

### Remarks

> **_Note:_** The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

This event is used to set the layout properties of child widgets, and its peer widgets before the layout of the child widget is defined.

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

*   iOS, Android

* * *

</details>
<details close markdown="block"><summary>onFailure Event</summary>

* * *

This event sets an event callback that is invoked when an error occurs while using an MLCamera widget.

### Syntax

```

onFailure()
```

### Optional Parameters

source \[widgetref\]

Handle to the widget reference

errorcode \[Number\]

Specifies the error code. The options are:

  
| Error code | Description |
| --- | --- |
| constants.CAMERA\_PREVIEW\_UNAVAILABLE | When the camera preview is not available. |
| constants.CAMERA\_PERMISSION\_DENIED | When the user denies permission to access the device camera. |

### Read/Write

Read + Write

### Example

```

/*Sample code to set onFailure event callback using myMLCamera MLCamera widget in frmMLCamera Form.*/

frmMLCamera.myMLCamera.onFailure=onFailureCallBck;

function onFailureCallBck(camera, errorcode){
      
   //Write your code here.
}
```

### Platform Availability

*   iOS, Android

* * *
</details>

