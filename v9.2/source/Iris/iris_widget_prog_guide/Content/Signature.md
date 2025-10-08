                               

You are here: Creating a Signature Using a Constructor: voltmx.ui.SignatureCapture

SignatureCapture Widget
=======================

A _SignatureCapture_ widget enables you to capture a signature on a form, and save it as an image for easy uploading.

SignatureCapture widget can be used only in Windows platform.

To use a SignatureCapture widget, follow these steps:

1.  From the **Project** explorer, navigate to the Forms of desired channel type.
2.  From the platform selection drop-down, select Windows 8: Native or Windows 8: Web or Desktop: Windows, as required.
3.  In the **Default Library**, click on the search icon. In the search bar, enter **SignatureCapture**.
4.  From the result, drag and drop the **SignatureCapture** widget onto the form in the canvas.

Following are the real-time use cases of SignatureCapture widget:

*   SignatureCapture widget is widely used in uploading signatures while filling job applications.
    
*   To apply for finance to buy a car or a house, you need to fill the loan application, submit the documents of proof, and upload your signature.
    
*   While applying for a Life Insurance policy, you need to upload your signature along with a few documents of proof.
    
*   SignatureCapture widget could be used as a proof of courier delivery.
    

The SignatureCapture widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [3D Touch](#3d-touch)
*   [User Input](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](SignatureCapture_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [anchorPoint](SignatureCapture_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [penWidth](SignatureCapture_Properties.md#penWidth) | Specifies the width of the stroke lines of a signature. You can enter a value between 1-10 inclusive. |
| [bottom](SignatureCapture_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](SignatureCapture_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](SignatureCapture_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](SignatureCapture_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](SignatureCapture_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](SignatureCapture_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](SignatureCapture_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](SignatureCapture_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](SignatureCapture_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](SignatureCapture_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [skin](SignatureCapture_Properties.md#skin) | Specifies a background and pen color skin for SignatureCapture widget. |
| [top](SignatureCapture_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](SignatureCapture_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](RichText_Properties.md#zIndex) | Specifies the stack order of a widget. |

  

#### Animations

| Methods | Description |
| --- | --- |
| [animate](SignatureCapture_Methods.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](SignatureCapture_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clear](SignatureCapture_Methods.md#clear) | Enables you to clear the area where a signature is captured. |
| [clone](SignatureCapture_Methods.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |
| [save](SignatureCapture_Methods.md#save) | Saves the signature as an image and executes onCapture callback. |

  

| Events | Description |
| --- | --- |
| [onCapture](SignatureCapture_Events.md#onCaptur) | Invoked when the user captures the signature and clicks on a button or image where the save method is called. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](SignatureCapture_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](SignatureCapture_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](SignatureCapture_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](SignatureCapture_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onTouchEnd](SignatureCapture_Events.md#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](SignatureCapture_Events.md#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](SignatureCapture_Events.md#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [removeGestureRecognizer](SignatureCapture_Methods.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](SignatureCapture_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](SignatureCapture_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](SignatureCapture_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](SignatureCapture_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](SignatureCapture_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](SignatureCapture_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [accessMode](SignatureCapture_Properties.md#accessMo) | Specifies how the captured image must be stored. |
| [rawBytes](SignatureCapture_Properties.md#rawBytes) | Specifies the rawbytes representing an Image that is returned from SignatureCapture. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](SignatureCapture_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](SignatureCapture_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](SignatureCapture_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](SignatureCapture_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](SignatureCapture_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](SignatureCapture_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [enableCache](SignatureCapture_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](SignatureCapture_Properties.md#id) | A unique identifier of SignatureCapture consisting of alpha numeric characters. |
| [info](SignatureCapture_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](SignatureCapture_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](SignatureCapture_Properties.md#parent) | Helps you access the parent of the widget. |

SignatureCapture Widget Basics
------------------------------

> **_Note:_** This widget is only supported on Windows platform.

### Creating a Signature Using a Constructor: voltmx.ui.SignatureCapture

```
var mysignature = new voltmx.ui.SignatureCapture(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//Defining the properties for a SignatureCapture.
var signatureBasic = {
    id: "signature",
    info: {
        key: "signature"
    },
    skin: "signatureSkin",
    isVisible: true,
    penWidth: 3
};

var signatureLayout = {
    hExpand: false,
    vExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT,
    containerWeight: 100
};

//Creating the SignatureCapture.
var signature = new voltmx.ui.SignatureCapture(signatureBasic, signatureLayout, {});

//signature clear method call.
signature.clear();
```

### Customizing Appearance

You can customize the appearance of the SignatureCapture widget using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   skin: Specify the skin to be applied to the SignatureCapture widget.

### Important Considerations

The following are the important considerations for SignatureCapture:

*   The padding and margin properties are not applicable for this widget.

