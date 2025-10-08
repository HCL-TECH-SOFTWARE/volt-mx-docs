                              

MenuContainer Events
====================

MenuContainer widget has the following events associated with it:

<details close markdown="block"><summary>onClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a click action on the MenuContainer.

### Syntax

```

onClick()
```

### Parameters

* menuContainer \[widgetref\]- Mandatory

   Optional. Reference to the menuContainer widget that raised the event.

* selectedMenuIndex \[Number\]- Mandatory

   Optional. Specifies the index of the selected menu.

* selectedMenuItem \[Number\]- Mandatory

   Optional. Specifies the item of the selected menu.

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the onClick event callback to a MenuContainer widget.

frmMenuC.myMenuC.onClick=onClickCallback;
function onClickCallBack(widgetModel, itemIndex, itemData) {
  //itemIndex is an array
  //itemData is an object
   //Assuming the template has a label widget with an id "label2".

  if (itemData.label2 == "One") {
   frmOne.show();
  } else if (itemData.label2 == "Two") {
   frmTwo.show();
  }
 }
```

### Accessible from IDE

Yes

### Platform Availability

Available on Desktop Web platform only

* * *

</details>
<details close markdown="block"><summary>onRightClick Event</summary>

* * *

An event callback is invoked by the platform when the user performs a right-click action on the MenuContainer.

### Syntax

```

onRightClick()
```

### Parameters

* menuContainer \[widgetref\]- Mandatory

   Optional. Reference to the menuContainer widget that raised the event.

* selectedMenuIndex \[Number\]- Mandatory

   Optional. Specifies the index of the selected menu.

* selectedMenuItem \[Number\]- Mandatory

   Optional. Specifies the item of the selected menu.

### Read/Write

Yes - (Read and Write)

### Example

```
//Sample code to set the onRightClick event callback to a MenuContainer widget.

frmMenuC.myMenuC.onRightClick=onRightClickCallback;
function onRightClickCallBack(widgetModel, itemIndex, itemData) {
  //itemIndex is an array
  //itemData is an object
   //Assuming the template has a label widget with an id "label2".

  if (itemData.label2 == "One") {
   frmOne.show();
  } else if (itemData.label2 == "Two") {
   frmTwo.show();
  }
 }
```

### Accessible from IDE

Yes

### Platform Availability

Available on Desktop Web platform only

* * *

</details>