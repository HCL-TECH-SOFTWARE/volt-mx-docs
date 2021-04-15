---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                 

You are here: Creating a PDFView Using a Constructor: voltmx.ui.PDFView

PDFView Widget
==============

The PDFView widget is a container that displays the content of the PDF URL in your application.

PDFView is newly added from iOS11 onwards. Before PDFView was ntroduced, the Browser widget was used to render any PDF content. With the addition of the PDFView widget, you can control not only the display but also various things.

The way to load the content of a PDFView widget are as follows:

*   URL: Use this method when the content that is to be loaded in a PDFView widget is susceptible to a lot of changes. You must publish the content to a server, and then load that URL in the Browser widget. A perfect example for this is the Terms and Conditions page. As the terms and conditions of an organization are susceptible to a lot of changes, you need not republish your application whenever there is a change in the terms and conditions.
*   Path: Using the File API, you can get the location details of the PDF document that is saved in the device memory and pass the path as a URL to the PDFView widget.

> **_Note:_** PDFView widget is only supported on iOS platform (from iOS 11).

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

The PDFView widget capabilities can be broadly categorized into the following:

*   [3D Touch](#3d-touch)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [Layout](#layout)
*   [Navigation Features](#navigation-features)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](PDFView_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](PDFView_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](PDFView_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](PDFView_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](PDFView_Methods.html#animate) | Applies an animation to the widget. |

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](PDFView_Methods.html#clone) | When this method is used on a container widget, all the widgets inside the container are cloned. |

 

| Properties | Description |
| --- | --- |
| [url](PDFView_Properties.html#url) | Enables you to load the URL into the widget. |

#### Layout

| Events | Description |
| --- | --- |
| [doLayout](PDFView_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](PDFView_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](PDFView_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](PDFView_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Browser_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [enableZoom](PDFView_Properties.html#enableZoom) | Specifies if Zoom (ability to change the scale of the view area) must be enabled. |
| [height](PDFView_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [left](PDFView_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](PDFView_Properties.html#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](PDFView_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](PDFView_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](PDFView_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](PDFView_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](PDFView_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](PDFView_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](PDFView_Properties.html#zIndex) | Specifies the stack order of a widget. |

#### Navigation Features

| Methods | Description |
| --- | --- |
| [canGoToFirstPage](PDFView_Methods.html#canGoToFirstPage) | Returns a Boolean value indicating whether the user can navigate to the first page of the document. |
| [canGoToLastPage](PDFView_Methods.html#canGoToLastPage) | Returns a Boolean value indicating whether the user can navigate to the last page of the document. |
| [canGoToNextPage](PDFView_Methods.html#canGoToNextPage) | Returns a Boolean value indicating whether the user can navigate to the next page of the document. |
| [canGoToPreviousPage](PDFView_Methods.html#canGoToPreviousPage) | Returns a Boolean value indicating whether the user can navigate to the previous page of the document. |
| [canGoBack](PDFView_Methods.html#canGoBac) | Returns a Boolean value indicating whether the user can navigate to the previous page in the page history. |
| [canGoForward](PDFView_Methods.html#canGoFor) | Returns a Boolean value indicating whether the user can navigate to the next page in the page history. |
| [goToFirstPage](PDFView_Methods.html#goToFirstPage) | Navigates to the first page of the document. |
| [goToLastPage](PDFView_Methods.html#goToLastPage) | Navigates to the last page of the document. |
| [goToNextPage](PDFView_Methods.html#goToNextPage) | Navigates to the next page of the document. |
| [goToPreviousPage](PDFView_Methods.html#goToPreviousPage) | Navigates to the previous page of the document. |
| [goBack](PDFView_Methods.html#goBack) | Navigates back one step in the page history. |
| [goForward](PDFView_Methods.html#goForward) | Navigates forward one step in the page history. |

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Browser_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](PDFView_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](PDFView_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [displayRTL](PDFView_Properties.html#displayRTL) | Helps to retain the content alignment of the widget while applying RTL. The presentation of pages is from right-to-left. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [isPDFLocked](PDFView_Methods.html#isPDFLocked) | A Boolean value indicating whether the document is locked. |
| [isPDFEncrypted](PDFView_Methods.html#isPDFEncrypted) | A Boolean value specifying whether the document is encrypted. |

| Properties | Description |
| --- | --- |
| [displayMode](PDFView_Properties.html#displayMode) | Specify the current display mode of the PDFView. |
| [displayDirection](PDFView_Properties.html#displayDirection) | The layout direction, either vertical or horizontal, for the given display mode. |
| [interpolationQuality](PDFView_Properties.html#interpolationQuality) | The interpolation quality for images drawn into the PDFView context. |
| [displayPageBreak](PDFView_Properties.html#displayPageBreak) | A Boolean value indicating whether the view displays page breaks. |
| [displaysAsBook](PDFView_Properties.html#displayAsBook) | A Boolean value indicating whether the view will display the first page as a book cover |
| [autoScale](PDFView_Properties.html#autoScale) | A Boolean value indicating whether autoscaling is set. |
| [enableZoom](PDFView_Properties.html#enableZoom) | Enable Zoom operations for a PDF View. |
| [opacity](PDFView_Properties.html#opacity) | Specifies the opacity of the widget. |
| [enablePDFThumbnailView](PDFView_Properties.html#enablePDFThumbnailView) | A Boolean value indicating whether ThumbnailView should present along with the PDF. |
| [pdfThumbnailPosition](PDFView_Properties.html#pdfThumbnailPosition) | Set the position of the ThumbnailView. |
| [pdfThumbnailSizeInPercentage](PDFView_Properties.html#pdfThumbnailSizeinPercentage) | Set the ThumbnailView size |
| [thumbnailBackgroundColor](PDFView_Properties.html#thumbnailBackgroundColor) | Set the background color for the ThumbnailView |
| [minScaleFactor](PDFView_Properties.html#minScaleFactor) | The minimum scaling factor for the PDF document. |
| [maxScaleFactor](PDFView_Properties.html#maxScaleFactor) | The maximum scaling factor for the PDF document. |
| [transform](PDFView_Properties.html#transform) | Contains an animation transformation that can be used to animate the widget. |

 

| Events | Description |
| --- | --- |
| [onPageChanged](PDFView_Events.html#onPageChanged) | An event callback that gets invoked by the platform when the user changes the page |
| [onDocumentChanged](PDFView_Events.html#onDocumentChanged) | An event callback that gets invoked by the platform when a new PDF is loaded |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](PDFView_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](PDFView_Methods.html#convertPointToWidget) | Using the convertPointToWidget method, you can modify the co-ordinate system. |
| [removeFromParent](PDFView_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](PDFView_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setVisibility](PDFView_Methods.html#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](PDFView_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [isVisible](PDFView_Properties.html#isVisible) | Controls the visibility of a widget on the form. |
| [id](PDFView_Properties.html#id) | id is a unique identifier of PDFView widget consisting of alpha numeric characters. |
| [info](PDFView_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [parent](PDFView_Properties.html#parent) | Helps you access the parent of the widget. |

PDFView Widget Basics
---------------------

### Creating a PDFView Using a Constructor: voltmx.ui.PDFView

You can dynamically create an instance of the PDFView widget as follows.

{% highlight voltMx %}
var pdftemp = new voltmx.ui.PDFView(basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

{% highlight voltMx %}
var pdfBasic = {
           
               "id": " pdfViewID",
                "isVisible": true,
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "height": "100%",
                "url":   " http://www.africau.edu/images/default/sample.pdf" 
};
var pdfayout = {
    containerHeight: 100
};
var pdfPsp = {};
var pdfViewID = new voltmx.ui.PDFView(pdfBasic, pdfLayout, pdfPsp);
frm1.add(pdfViewID);

{% endhighlight %}

