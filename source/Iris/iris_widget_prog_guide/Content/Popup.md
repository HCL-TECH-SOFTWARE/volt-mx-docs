                               

Popup Widget
------------

Popup is a visual component that displays content on top of existing content, within the bounds of the application window.

> **_Note:_** To achieve the same look and feel of a Popup widget, use Flexcontainer widget with higher [zIndex](FlexContainer_Properties.md#zIndex) value and set the value of [isModalContainer](FlexContainer_Properties.md#isModalContainer) property to true. For more information, please refer [FlexContainer](FlexContainer.md#flexcontainer-widget) widget section.

This section provides the following documentation on this Widget.

##### [Overviews](#popup-overviews)

##### [Events](Popup_Events.md)

##### [Methods](Popup_Methods.md)

##### [Properties](Popup_Properties.md)

### Popup Overviews

Generally a popup is displayed in the center of the screen on top of the Form from which you have invoked the popup. It does not span the entire screen width.Popups allow you to partition UI design into smaller parts.

Popup provides you with an option to set Basic Properties, Layout Properties, Platform Specific Properties, Events and Methods.

#### Creating a Popup using a constructor: voltmx.ui.popup

```

var popup = new voltmx.ui.Popup(basicConf, layoutConf, pspConf)
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```

//Defining properties for a Popup.
var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", headers:[box1,box2], Footers:[box3,box4], isModal:true, transparencyBehindThePopup:80};

var popLayout ={containerWeight:100,padding:[5,5,5,5]};

var popPSP ={footerOverlap:true, captureGPS:true, windowSoftInputMode:constants.POPUP_ADJUST_RESIZE};

//Creating the popup.
var popUp=new voltmx.ui.Popup(popBasic, popLayout, popPSP);

//Reading the transparencyBehindThePopup of the popUp
alert("PopUp transparencyBehindThePopup ::"+PopUp.transparencyBehindThePopup );


```

> **_Note:_** Before you place a widget in a Popup that exceeds the Popup width, ensure that you set the Popup width manually using the [containerWeight](Popup_Properties.md#containe) property for a Popup. IDE representation for continerWeight is Size (Width). For example if you select the [viewType](Calendar_Properties.md#viewType) property as CALENDAR\_VIEW\_TYPE\_ GRID\_ONSCREEN for a calendar placed within a Popup, ensure you set the Popup width to a minimum of 90% otherwise the Calendar does not appear completely within the popup.

> **_Note:_** Display orientation (LandSCAPE, PORTRAIT) of the popup always follows the orientation of the current form and also the on orientation change event gets called only on the current form and there is no orientation change event at the popup level.

For information about how you can add a Popup to an Application, see the Section _Adding Popups to an Application_ in the _VoltMX Iris User Guide_.

#### Behavior

A Popup goes through the following states:

1.  Creation (Adding a popup to an application)
2.  Initialization
3.  Destroy (using [destroy](Popup_Methods.md#destroy))

After a Popup is created, you can initialize the Popup using one of the following:

*   [show](Popup_Methods.md#show)
*   Accessing one of the popup widgets

```

//For example, if you want to access an HBox with ID _HBox1_ which is in a Popup whose ID is _pop1_, enter the following:  
  
local var = pop1.HBox1.id  
alert ("HBox id is :");  
alert (var);
```
