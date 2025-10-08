                               


PDFView Events
==============

The PDFView widget has the following events associated with it:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[doLayout Event](javascript:void(0);)

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

Syntax

doLayout()

Read/Write

Read + Write

Remarks

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

Example

```
//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;

function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}			
```

Platform Availability

*   iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onDocumentChanged Event](javascript:void(0);)

* * *

This event is invoked by the platform when a new document is loaded into the PDFView.

Syntax

onDocumentChanged ()

Read/Write

Read + Write

Example

```
//Sample code to invoke onDocumentChanged event for a PDFView widget.
pdfOnDocumentChange: function()
{
var result = this.view.myPDFView.getDocumentHistory();
alert(JOSN.stringify(result);
}

this.view.myPDFView.onPageChanged=this. pdfOnDocumentChange ();

```

Platform Availability

*   iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onPageChanged Event](javascript:void(0);)

* * *

This event is invoked by the platform when the page changes or when the user navigates to the previous or next page of the document.

Syntax

onPageChanged ()

Read/Write

Read + Write

Example

```
//Sample code to invoke onPageChanged event for a PDFView widget.
pdfOnPageChange: function()
{
this.view.lblPageIndex.text=this.view.myPDFView.getCurrentPageIndex()+”/”+this.view.myPDFView.getPageCount();
}

this.view.myPDFView.onPageChanged=this.pdfonPageChange();

```

Platform Availability

*   iOS

* * *

