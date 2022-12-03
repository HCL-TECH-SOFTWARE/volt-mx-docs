                              

Menuitem Events
===============

Menuitem widget has the following event associated with it:

* * *


<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the Menuitem.

### Syntax

```

onClick()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the onClick event callback to a MenuItem widget.
frmMenuI.myMenuI.onClick=onClickCallback;
function onClickCallBack(widgetModel, itemIndex, itemData) {
 //Write your logic here.
 }
```

### Platform Availability

* Available in the IDE
* Android
* BlackBerry
* BlackBerry 10
* J2ME

* * *
</details>