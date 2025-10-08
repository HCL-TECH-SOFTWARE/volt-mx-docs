                                


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

*   Select the **Templates** tab in the Iris IDE.
*   Under the Templates tab, select the **Mobile**/**Tablet** platform drop down.
*   Under the chosen platform, right-click on **Segment** and select **New Template**.  
    A new template is created along with a default flexContainer.  
    Note the default flexContainer's widget ID/name.
*   Dynamically create a flexScrollContainer. Add the default flexContainer created along with the template to this flexScrollContainer.  
    For example: flexScrollContainerID.add(flexConatinerID)
*   You can now assign the flexScrollContainer's widget ID to the contentWidget property.

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

* * *

</details>
<details close markdown="block"><summary>peekHeight Property</summary>

* * *

The height at which a collapsed BottomSheet docks.

### Syntax

```

peekHeight
```

### Constants

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
