
NativeContainer Events
======================

The NativeContainer Widget has the following events associated with it:

> **_Note:_** Do not remove the layout/view (passed as parameter in the callbacks) from its parent. If the layout/view is removed, unexpected behavior results.

> **_Note:_** Unexpected behaviors may result if you modify any property of the layout returned from the callbacks.

* * *

<details close markdown="block"><summary>onCleanup Event</summary>

* * *

Using the onCleanup event, you can clear the views/widgets created using the onCreated event, when the form is being hidden (that is, when the form transition happens from one form to another).

### Syntax

```

onCleanup ()
```

### Parameters

NativeContainer View to which children are added.

### Read/Write

Read + Write

### Remarks

You are supposed to clear/clean up all the native widgets/views created in the callback. If not cleaned up properly, all views/widgets will reside in memory resulting into memory and performance consequences.

If required, you can re-create the widgets in the onCreated callback.

The value of the native layout view becomes null when the onCleanup event is executed.

### Example

```

//Sample code to set the onCleanup event callback to a NativeContainer widget.

frmNativeC.myNativeC.onCleanup=nativeCleanUp;
function nativeCleanUp(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onCreated Event</summary>

* * *

The onCreated callback event helps you create and add native widgets/views to the NativeContainer Widget, which is passed as a parameter to the callback.

### Syntax

```

onCreated ()
```

### Parameters

NativeContainer View to which children can be added.

### Read/Write

Read + Write

### Remarks

The widgets added to the NativeContainer are shown on the screen as children elements to the NativeContainer along with other Volt MX Iris widgets placed in the form. The callback event will be called after the pre-show, when the actual form is about to show.

Only native views/widgets should be added to the native layout view. You should not add any Volt MX Iris widgets to the NativeContainer.

### Example

```

//Sample code to set the onCreated event callback to a NativeContainer widget.

frmNativeC.myNativeC.onCreated=createdCallbackCheck;
function createdCallbackCheck(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onDidMoveToParentViewController Event</summary>

* * *

The callback event is invoked after the view controller is added or removed from the view controller container.

### Syntax

```

onDidMoveToParentViewController ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onDidMoveToParentViewController event callback to a NativeContainer widget.

frmNativeC.myNativeC.onDidMoveToParentViewController=moveParentView;
function moveParentView(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onLayoutSubviews Event</summary>

* * *

Using the callback, you can lay out all subviews.

### Syntax

```

onLayoutSubviews ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onLayoutSubviews event callback to a NativeContainer widget.

frmNativeC.myNativeC.onLayoutSubviews=layoutSubviewsCallback;
function layoutSubviewsCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onOrientationChange Event</summary>

* * *

The event allows you to change the orientation of the form from portrait to landscape and vice versa.

### Syntax

```

onOrientationChange ()
```

### Parameters

Constants.DEVICE\_ORIENTATION\_PORTRAIT

On the device the form is always displayed such that the horizontal sides are shorter than vertical sides.

Constants.DEVICE\_ORIENTATION\_LandSCAPE

On the device the form is always turned sideways so that the height of the screen becomes the width.

### Read/Write

Read + Write

### Example

```

//Sample code to set the onOrientationChange event callback to a NativeContainer widget.

frmNativeC.myNativeC.onOrientationChange=orientationChangeCallback;
function orientationChangeCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>onViewDidAppear Event</summary>

* * *

The callback event is invoked when the native layout view appears.

### Syntax

```

onViewDidAppear ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onViewDidAppear event callback to a NativeContainer widget.

frmNativeC.myNativeC.onViewDidAppear=viewDidAppearCallback;
function viewDidAppearCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onViewDidDisappear Event</summary>

* * *

The callback event is invoked when the native layout view disappears.

### Syntax

```

onViewDidDisappear ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onViewDidDisappear event callback to a NativeContainer widget.

frmNativeC.myNativeC.onViewDidDisappear=viewDidDisappearCallback;
function viewDidDisappearCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onViewDidLoad Event</summary>

* * *

The callback event is invoked after the view is loaded.

### Syntax

```

onViewDidLoad ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onViewDidLoad event callback to a NativeContainer widget.

frmNativeC.myNativeC.onViewDidLoad=viewDidLoadCallback;
function viewDidLoadCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onViewWillAppear Event</summary>

* * *

The callback event is invoked when the native layout view is about to appear on the screen.

### Syntax

```

onViewWillAppear ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onViewWillAppear event callback to a NativeContainer widget.

frmNativeC.myNativeC.onViewWillAppear=viewWillAppearCallback;
function viewWillAppearCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onViewWillDisppear Event</summary>

* * *

The callback is invoked when the actual view is about to disappear.

### Syntax

```

onViewWillDisppear ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onViewWillDisappear event callback to a NativeContainer widget.

frmNativeC.myNativeC.onViewWillDisappear=viewWillDisappearCallback;
function viewWillDisappearCallback(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *

</details>
<details close markdown="block"><summary>onWillMoveToParentViewController Event</summary>

* * *

The callback event is invoked just before the view controller is added or removed from the view controller container.

### Syntax

```

onWillMoveToParentViewController ()
```

### Parameters

None

### Read/Write

Read + Write

### Example

```

//Sample code to set the onWillMoveToParentViewController event callback to a NativeContainer widget.

frmNativeC.myNativeC.onWillMoveToParentViewController=moveParentView;
function moveParentView(eventobject){
  //Write your logic here.
 }
```

### Platform Availability

*   Available in the IDE
*   iOS

* * *
</details>

