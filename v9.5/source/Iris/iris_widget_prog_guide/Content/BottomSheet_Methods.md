                               


BottomSheet Methods
===================

The namespace for the BottomSheet widget is **mBottomSheetObject**. It contains the following methods:

* * *

<details close markdown="block"><summary>destroy Method</summary>

* * *

Ensures that the garbage collection process of a BottomSheet occurs, and the data of the BottomSheet is wiped out. So, the next time a BottomSheet is displayed, a new instance of the BottomSheet is created.

### Syntax

destroy()

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Destroying a widget using destroy method.
testForm.mBottomSheetObject.destroy();
```

**Platform Availability**

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>dismiss Method</summary>

* * *

Dismisses a BottomSheet widget for users.

### Syntax

dismiss()

**Example**

```
var mBottomSheetObject= new voltmx.ui.BottomSheet({});
//Dismissing a widget using dismiss method.
testForm.mBottomSheetObject.dismiss();
```

**Platform Availability**

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>setDetentIdentifier Method</summary>

* * *

Used to set or change selected detent.

### Syntax

setDetentIdentifier()

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Showing a widget using show method.
testForm.mBottomSheetObject. setDetentIdentifier (300);
```

**Platform Availability**

*   iOS

* * *

</details>
<details close markdown="block"><summary>setState Method</summary>

* * *

Sets the state of a BottomSheet widget as Expanded or Collapsed.

### Syntax

setState()

**Constants**

*   BOTTOM\_SHEET\_STATE\_EXPANDED
*   BOTTOM\_SHEET\_STATE\_COLLAPSED

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Collapsing a bottomSheet widget using setState method.
mBottomSheetObject.setState(constants.BOTTOM_SHEET_STATE_COLLAPSED);
```

**Platform Availability**

*   Android

* * *

</details>
<details close markdown="block"><summary>show Method</summary>

* * *

Displays a BottomSheet widget for users.

### Syntax

show()

**Example**

```
var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Showing a widget using show method.
testForm.mBottomSheetObject.show();
```

**Platform Availability**

*   Android
*   iOS

