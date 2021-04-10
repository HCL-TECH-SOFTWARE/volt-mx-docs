---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

HorizontalImageStrip Widget
---------------------------

_HorizontalImageStrip_ also called as _Hz Image Strip_ displays a list of images which are aligned side-by-side in the horizontal direction. You can scroll through the Hz Image Strip to view the next or previous set of images.

This section provides the following documentation on this Widget.

##### [Overviews](#overviews)

##### [Events](HzImage_Events.html)

##### [Methods](HzImage_Methods.html)

##### [Properties](Image_Properties.html)

The HorizontalImageStrip widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Animations](#animations)
*   [Data Management](#data-management)
*   [User Input Handling](#gestures)
*   [3D Touch](#3d-touch)
*   [State Configurations](#state-configurations)
*   [UI Appearance](#ui-appearance)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [anchorPoint](HzImage_Properties.html#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |

  

#### Animations

| Methods | Description |
| --- | --- |
| [animate](HzImage_Methods.html#animate_Method) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](HzImage_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [addAll](HzImage_Methods.html#addAll) | Allows you to add new images to the HorizontalImageStrip. |
| [addDataAt](HzImage_Methods.html#addDataA) | Allows you to add/insert a new image at a given index. |
| [removeAll](HzImage_Methods.html#removeAl) | Removes all the images in the HorizontalImageStrip. |
| [removeAt](HzImage_Methods.html#removeAt) | Removes the image at the given index in the HorizontalImageStrip. |
| [setData](HzImage_Methods.html#setData) | Allows you to set new images to the Hz Image Strip. |
| [setDataAt](HzImage_Methods.html#setDataA) | Allows you to set new images to the Hz Image Strip. |

  

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](HzImage_Methods.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](HzImage_Methods.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](HzImage_Methods.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](HzImage_Methods.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### Gestures

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](HzImage_Methods.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](HzImage_Methods.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. Syntax |
| [setGestureRecognizer](HzImage_Methods.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [hoverSkin](HzImage_Properties.html#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [skin](HzImage_Properties.html#skin) | Specifies the look and feel of the HorizontalImageStrip when not in focus. |
| [spaceBetweenImages](HzImage_Properties.html#spaceBet) | Specifies the space between the images in the horizontal image strip. |
| [viewConfig](HzImage_Properties.html#viewConf) | Specifies the view configuration properties for various view types in the horizontal image strip. |
| [viewType](HzImage_Properties.html#viewType) | Specifies the view type of Horizontal Image Strip. |

#### State Configurations

| Events | Description |
| --- | --- |
| [onSelection](HzImage_Events.html#onSelect) | An event callback that is invoked by the platform when an Image is selected in HorizontalImageStrip. |

 

| Properties | Description |
| --- | --- |
| [selectedIndex](HzImage_Properties.html#selected) | Indicates the currently selected row in the HorizontalImageStrip. |
| [selectedItem](HzImage_Properties.html#selected2) | Returns the selected data object (input array) corresponding to the selected image of the HorizontalImageStrip. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](HzImage_Methods.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](HzImage_Methods.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Properties | Description |
| --- | --- |
| [arrowConfig](HzImage_Properties.html#arrowCon) | Specifies the configurable arrow properties of the HorizontalImageStrip. |
| [showArrows](HzImage_Properties.html#showArro) | Specifies the arrow images must be displayed on the left and right edges of the HorizontalImageStrip. |
| [showScrollbars](HzImage_Properties.html#showScro) | Specifies if the scrollbars must be visible all the time. |
| [toolTip](HzImage_Properties.html#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |

#### Configurations Common To All Widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](HzImage_Methods.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](HzImage_Methods.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](HzImage_Methods.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](HzImage_Methods.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](HzImage_Methods.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](HzImage_Methods.html#setVisibility) | Sets the visibility of the widget. |

| Properties | Description |
| --- | --- |
| [accessibilityConfig](#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [data](HzImage_Properties.html#data) | Specifies the JSObject which represents the images to be rendered in horizontal image strip. |
| [enableCache](HzImage_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [info](HzImage_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](HzImage_Properties.html#isVisible) | Controls the visibility of a widget on the form. |

| Events | Description |
| --- | --- |
| [postOnclickJS](HzImage_Events.html#postOncl) | Allows the developer to execute custom javascript function after the onClick callback of the HorizontalImageStrip is invoked. |
| [preOnclickJS](HzImage_Events.html#preOncli) | Allows the developer to execute custom javascript function when the HorizontalImageStrip is invoked. |

### Overviews

#### Creating an HorzontalImgStrip using a constructor: voltmx.ui.HorzontalImageStrip2

var HorizontalImgStrip = new voltmx.ui.HorizontalImageStrip2 (basicConf, layoutConf, pspConf)

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

{% highlight voltMx %}function onSelectionCallBack(hIS)
{
	//Write your logic here.
}

//Defining the properties for Image strip with onSelection:onSelectionCalBck
var hISBasic=
    {
      id:"hIS",
      skin:"hISkn",
      focusSkin:"hISknFocus",
      isVisible:true,
      selectedIndex:1,
      imageWhileDownloading:"img.png",
      imageWhenFailed:"img3.png",
      spaceBetweenImages:20,
      data:
      [
        [
          {"imagekey":"image1.png"},
          {"imagekey":"image2.png"},
          "imagekey"
        ]
      ], 
      viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW,
      showArrows:true,
      showScrollbars:true,
      onSelection:onSelectionCallBack
    };

var hISLayout=
    {
      padding:[5,5,5,5],
      margin:[5,5,5,5],
      paddingInPixel:true,
      marginInPixel:true,
      referenceWidth:100, 
      referenceHeight:100, 
      imageScaleMode:constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS, 
      containerWeight:100
    };

var hISPSP={};

//Creating the Horizontal Image strip.
var hIS=new voltmx.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);

//Reading onSelection of Horizontal Image strip.
alert("Horizontal Image strip onSelection::"+hIS.onSelection);
{% endhighlight %}

For backward compatibility with support for all deprecated properties and behaviors, use the constructor **voltmx.ui.HorzontalImageStrip** .

{% highlight voltMx %}
var HorizontalImg1 = new voltmx.ui.HorizontalImageStrip (basicConf, layoutConf, pspConf)
{% endhighlight %}

#### Customizing Appearance

You can customize the appearance of the Hz Image Strip using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around a widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   [skin](HzImage_Properties.html#skin): Specify the skin to be applied to the images in the Hz Image Strip.
*   [focusSkin](HzImage_Properties.html#focusSki): Specify the skin to be applied to the individual image in the Hz Image Strip when in focus.

#### Important Considerations:

The following are the important considerations of an Hz Image Strip:

*   For a good user experience, you must add images of the same width and height.
*   You can scroll through one or more images at a time (platform dependent).

*   If you reach the end of an image strip and if there are additional images, a network call is placed to get the additional images.
*   In Android platform, images are displayed from the middle of the widget.
*   For Symbian, HzImageStrip always uses an image size of 64x64 pixels.
*   The Hz Image Strip occupies 100% of the screen width.
*   Ensure that the image name does not exceed 12 characters (including the extension). If the image name exceeds 12 characters, the IDE does not allow you to select the image.

