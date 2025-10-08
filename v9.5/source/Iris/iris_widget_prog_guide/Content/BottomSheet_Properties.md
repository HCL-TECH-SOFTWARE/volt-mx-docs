                                


BottomSheet Properties
======================

The BottomSheet widget contains the following properties:

* * *

<details close markdown="block"><summary>backgroundTransparency Property</summary>

* * *

Indicates to users that the UI control is currently restricted for a BottomSheet until it is dismissed, i.e., dragged down completely.

### Syntax

```
backgroundTransparency
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollTemplate /*This is a template*/ ,
    "peekHeight": constants.BOTTOM_SHEET_PEEK_HEIGHT_AUTO,
    "skipCollapsed": false,
    "onCollapsed": onCollapsedEmptycallback,
    "onExpanded": onExpandCallback,
    "onDraggingStarted": onDraggingCallback,
    "onSettled": onSettlingCallback,
    "onDismiss": onDismissCallback,
    "onSliding": onSlideCallback,
    "onShow": onShowCallback,
    "backgroundTransparency": 40,

});
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>contentWidget Property</summary>

* * *

Sets the template of a BottomSheet.

For creating the template, follow these steps:

1.   Select the **Templates** tab in the Iris IDE.
2.   Under the Templates tab, select the **Mobile**/**Tablet** platform drop down.
3.   Under the chosen platform, right-click on **Segment** and select **New Template**.  
     A new template is created along with a default flexContainer.  
     Note the default flexContainer's widget ID/name.
4.   Dynamically create a flexScrollContainer. Add the default flexContainer created along with the template to this flexScrollContainer.  
     For example: flexScrollContainerID.add(flexConatinerID)
     You can now assign the flexScrollContainer's widget ID to the contentWidget property.

You must set the contentWidget property to a valid widget template.

### Syntax

```
contentWidget
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    "peekHeight": constants.BOTTOM_SHEET_PEEK_HEIGHT_AUTO,
    "skipCollapsed": false,
    "onCollapsed": onCollapsedEmptycallback,
    "onExpanded": onExpandCallback,
    "onDraggingStarted": onDraggingCallback,
    "onSettled": onSettlingCallback,
    "onDismiss": onDismissCallback,
    "onSliding": onSlideCallback,
    "onShow": onShowCallback,
    "backgroundTransparency": 40,

});
```

**Platform Availability**

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>detents Property</summary>

* * *
Sets the height of a BottomSheet.

Array of different detents; for example, `[300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE]`. The default value is an array that contains the value medium. This array must contain at least one element. When you set this value, specify detents in order from smallest to largest height.

System provided detents are `constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM` and `constants.BOTTOM_SHEET_DETENT_TYPE_LARGE`. 

Custom detents are available; e.g., 200, 300.

### Syntax

```
detents 
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>largestUndimmedDetentIdentifier Property</summary>

* * *

The largest detent that doesn’t dim the view underneath the sheet.

### Syntax

```
largestUndimmedDetentIdentifier
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>peekHeight Property</summary>

* * *

The height at which a collapsed BottomSheet docks.

### Syntax

```
peekHeight
```

**Constants**

*   BOTTOM\_SHEET\_PEEK\_HEIGHT\_AUTO

**Example**

```
//Sample code to set peekHeight property to a BottomSheet widget.  
frmBottomSheet.myBottomSheet.peekHeight = constants.BOTTOM_SHEET_PEEK_HEIGHT_AUTO;  
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>preferredCornerRadius Property</summary> 

* * *

The corner radius that the sheet attempts to present with.

### Syntax

```
preferredCornerRadius
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

* iOS

* * *

</details>
<details close markdown="block"><summary>prefersEdgeAttachedInCompactHeight Property</summary>

* * *

A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.

### Syntax

```
prefersEdgeAttachedInCompactHeight
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>prefersGrabberVisible Property</summary>

* * *

A Boolean value that determines whether the sheet shows a grabber at the top.

### Syntax

```
prefersGrabberVisible
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>selectedDetentIdentifier Property</summary>

* * *

Default height that the user set programmatically to show BottomSheet in iOS platform
To set detents (constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM or constants.BOTTOM_SHEET_DETENT_TYPE_LARGE or custom), The default value is nil, which means the sheet displays at the smallest detent you specify in detents.

### Syntax

```
selectedDetentIdentifier 
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>skipCollapsed Property</summary>

* * *

If this property is set to true, a BottomSheet directly goes from an Expanded state to a Dismissed one. The BottomSheet, however, does not reach the Collapsed state.

### Syntax

```
skipCollapsed
```
**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    "peekHeight": constants.BOTTOM_SHEET_PEEK_HEIGHT_AUTO,
    "skipCollapsed": false,
    "onCollapsed": onCollapsedEmptycallback,
    "onExpanded": onExpandCallback,
    "onDraggingStarted": onDraggingCallback,
    "onSettled": onSettlingCallback,
    "onDismiss": onDismissCallback,
    "onSliding": onSlideCallback,
    "onShow": onShowCallback,
    "backgroundTransparency": 40,

});
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>widthFollowsPreferredContentSizeWhenEdgeAttached Property</summary>

A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size when edge attached. If `isEdgeAttachedInCompactHeight` is true, then only `shouldWidthFollowsContentSize` will have an effect.

### Syntax

```
widthFollowsPreferredContentSizeWhenEdgeAttached
```

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({
    "contentWidget": FlexScrollContainer0cf099f76793441 /*This is a template*/ ,
    " detents": [300, constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM, constants.BOTTOM_SHEET_DETENT_TYPE_LARGE],
     "selectedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_MEDIUM,
      "prefersGrabberVisible": true,
      "preferredCornerRadius": 20
      "prefersEdgeAttachedInCompactHeight": true,
      "widthFollowsPreferredContentSizeWhenEdgeAttached": true,
      "largestUndimmedDetentIdentifier": constants.BOTTOM_SHEET_DETENT_TYPE_NONE,
       "onShow": onShowCallback,
       "onDismiss": onDismissCallback,
        "didChangeSelectedDetentIdentifier": didChangeSelectedDetentIdentifier,});
```

**Platform Availability**

*   iOS
</details>
