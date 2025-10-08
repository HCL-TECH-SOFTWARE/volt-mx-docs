
BottomSheet Events
==================

The BottomSheet widget contains the following events:

* * *

<details close markdown="block"><summary>didChangeSelectedDetentIdentifier Event</summary>

* * *

This event is called when detent value changes for BottomSheet.

### Syntax

```
didChangeSelectedDetentIdentifier
```

**Example**

```
//Sample code to set didChangeSelectedDetentIdentifier event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.didChangeSelectedDetentIdentifier = didChangeSelectedDetentIdentifier;

function didChangeSelectedDetentIdentifier ()
{
    //Write your logic here
}
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>onCollapsed Event</summary>

* * *

This event is called when you need to collapse a BottomSheet from its peek height.

### Syntax

```
onCollapsed
```

**Example**

```
//Sample code to set onCollapsed event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onCollapsed=onCollapseCallBack;

function onCollapseCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>onDismiss Event</summary>

* * *

This event is called when you need to dismiss a BottomSheet from the screen.

### Syntax

```
onDismiss
```

**Example**

```
//Sample code to set onDismiss event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onDismiss=onDismissCallBack;

function onDismissCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>onDraggingStarted Event</summary>

* * *

This event is called when you need to start dragging a BottomSheet to an Expanded or Collapsed state.

### Syntax

```
onDraggingStarted
```

**Example**

```
//Sample code to set onDraggingStarted event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onDraggingStarted=onDraggingStartedCallBack;

function onDraggingStartedCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>onExpanded Event</summary>

* * *

This event is called when a BottomSheet reaches its fully expanded state.

### Syntax

```
onExpanded
```

**Example**

```
//Sample code to set onExpanded event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onExpanded=onExpandCallBack;

function onExpandCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>onSettled Event</summary>

* * *

This event is called when a BottomSheet is at peek height, is expanded, or is dismissed.

### Syntax

```
onSettled
```

**Example**

```
//Sample code to set onSettled event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onSettled=onSettledCallBack;

function onSettledCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>onShow Event</summary>

* * *

This event is called when you need a BottomSheet to be displayed on the screen.

### Syntax

```
onShow
```

**Example**

```
//Sample code to set onShow event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onShow=onShowCallBack;

function onShowCallBack()
{
	//Write your logic here
}
```

**Platform Availability**

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>onSliding Event</summary>

* * *

This event is called when a BottomSheet slides in/out of view.

### Syntax

```
onSliding
```

**Example**

```
//Sample code to set onSliding event callback for a BottomSheet widget.

frmBottomSheet.myBottomSheet.onSliding=onSlidingCallBack;

function onSlidingCallBack(offset)
{
	//Write your logic here
}
```

**Platform Availability**

*   Android

</details>

