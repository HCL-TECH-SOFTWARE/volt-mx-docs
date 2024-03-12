                                 

You are here: Creating a Camera Using a Constructor: voltmx.ui.Camera

Camera Widget
=============

Camera widget allows you to capture pictures and videos using native Camera or using customized Camera (overlay Camera).

Some real-world scenarios when you can use Camera widget are as follows:

*   Capturing the profile photo of a user
*   Capturing the image of a cheque in a banking app
*   Capturing video /claims for Insurance claims
*   To maintain a visual record of your inventory

The key features of the Camera widget are as follows:

**Compression:** You can compress the image captured from the Camera widget to a manageable size. This image can then be either stored in the device or in a server.

**RawBytes and base64:** You can store the images captured from the Camera widget by using base64 string and raw bytes. These strings can then be assigned to an Image widget to view it in the application or be stored in a server for later use.

**Back and Front Camera Compatibility:** You can utilize both the front and back cameras of a mobile device by using a Camera widget.

**Overlay:** Overlay is a transparent form that is assigned to a Camera widget for customizing the camera screen.

**Video Capturing:** The Camera widget also has the capability to capture videos. You can change the mode of the camera to Video, and then capture the required video.

**Responsive Web Support**
--------------------------

Camera widget is supported in Responsive Web/ Desktop Web platforms from Volt MX Iris V8 SP4 FP 20 onwards. Camera widget for Responsive Web/ Desktop Web platforms through code only.

You can now capture images and videos by using the Camera widget with a web browser.

*   Take a picture by using front and rear cameras
*   Record a video by using front and rear cameras

### Take a Picture by using Front and Rear Cameras

*   When triggered, the browser asks for the users' permission to access the camera. A placeholder image displays the preview of what is seen with the camera.
*   You can decide the size and the format of the captured image.
*   You can upload the captured image to a server or save the image to your device.
*   The camera methods such as, [openCamera](Camera_Methods.md#openCamera), [takePicture](Camera_Methods.md#takePict), and [closeCamera](Camera_Methods.md#closeCam), can be triggered on the launch of a form or can be mapped to any event on the form.

### Record a Video by Using Front and Rear Cameras

*   When triggered, the browser asks for the users' permission to access the camera. A placeholder image displays the preview of what is seen with the camera.
*   onClick events are present on the page to start and stop the video capturing process.
*   You have the ability to display the time elapsed stamp on the preview.
*   You can decide the size and the format of the video.
*   You can upload the captured video to a server or save the video to your device.
*   The camera methods, such as [startVideoCapture](Camera_Methods.md#startVid), and [stopVideoCapture](Camera_Methods.md#stopVide), can be triggered on the launch of a form or can be mapped to any event on the form.

The following table displays the browser support for the various methods in Camera widget.

  
| Browser Support | [openCamera](Camera_Methods.md#openCamera) | [closeCamera](Camera_Methods.md#closeCam) | [takePicture](Camera_Methods.md#takePict) | [startVideoCapture](Camera_Methods.md#startVid) | [stopVideoCapture](Camera_Methods.md#stopVide) |
| --- | --- | --- | --- | --- | --- |
| Chrome(74.0) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Firefox (66.0) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Edge (122.0.2365.52) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| IE (11.7) | ![](Resources/Images/RedX_18x18.png) | ![](Resources/Images/RedX_18x18.png) | ![](Resources/Images/RedX_18x18.png) | ![](Resources/Images/RedX_18x18.png) | ![](Resources/Images/RedX_18x18.png) |
| Opera (107.0.5045.36) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Mobile FireFox(66.0.2) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Mobile Chrome(74.0) (only using https) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Safari(15.4) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) |
| Safari iOS Mobile (only using https) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/RedX_18x18.png) | ![](Resources/Images/RedX_18x18.png) |
| Chrome for MAC (121.0.6167.184) | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png)| ![](Resources/Images/GreenCheck_24x24.png)| ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png)|
| Chrome for iOS | ![](Resources/Images/GreenCheck_24x24.png) | ![](Resources/Images/GreenCheck_24x24.png)| ![](Resources/Images/GreenCheck_24x24.png)| ![](Resources/Images/RedX_18x18.png)| ![](Resources/Images/RedX_18x18.png)|

Widgets are normally added to your application by using Volt MX Iris, but they can also be added through code. For general information on using widgets in Volt MX Iris, refer [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the Camera widget see the [Camera](../../../Iris/iris_user_guide/Content/Camera.md) topic in the Volt MX Iris User Guide.

> **_Note:_** From Volt MX IrisV8 SP4 onwards, the Camera widget's data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.

For a more hands-on approach on the functionality of Camera widget, import and preview the **Camera Feature** sample app by using Volt MX Iris.

[![](Resources/Images/Download_Button_10_230x35.png)](https://marketplace.hclvoltmx.com/items/camera-feature-app)

The Camera widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [UI Appearance](#ui-appearance)
*   [Animations](#animations)
*   [Capturing Features](#capturing-features)
*   [Data Management](#data-mangement)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](Camera_Events.md#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

 

| Properties | Description |
| --- | --- |
| [bottom](Camera_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Camera_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Camera_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](Camera_Properties.md#contentAlignment) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](Camera_Properties.md#height) | It determines the height of the widget and measured along the y-axis. |
| [left](Camera_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Camera_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Camera_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Camera_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Camera_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](Camera_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](Camera_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Camera_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Camera_Properties.md#zIndex) | Specifies the stack order of a widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](Camera_Properties.md#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](Camera_Properties.md#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](Camera_Properties.md#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](Camera_Properties.md#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](Camera_Properties.md#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](Camera_Properties.md#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](Camera_Properties.md#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](Camera_Properties.md#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](Camera_Properties.md#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](Camera_Properties.md#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](Camera_Properties.md#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](Camera_Properties.md#fontColor) | Specifies the font color of the widget. |
| [fontFamily](Camera_Properties.md#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](Camera_Properties.md#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](Camera_Properties.md#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](Camera_Properties.md#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](Camera_Properties.md#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](Camera_Properties.md#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](Camera_Properties.md#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](Camera_Properties.md#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](Camera_Properties.md#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](Camera_Properties.md#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](Camera_Properties.md#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](Camera_Properties.md#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [focusSkin](Camera_Properties.md#focusSki) | Specifies the look and feel of the widget when in focus. |
| [hoverSkin](Camera_Properties.md#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [poster](Camera_Properties.md#poster) | Specifies the placeholder image for Camera widget when the device camera is not open. |
| [opacity](Camera_Properties.md#opacity) | Specifies the opacity of the widget. |
| [skin](Camera_Properties.md#skin) |  |

#### Animations

| Methods | Description |
| --- | --- |
| [animate](Camera_Methods.md#animate_Method) | Applies an animation to the widget. |

#### Capturing Features

| Methods | Description |
| --- | --- |
| [closeCamera](Camera_Methods.md#closeCam) | Allows you to close the camera. |
| [getSupportedCameraSources](Camera_Methods.md#getSuppo) | Returns an array of supported camera sources. |
| [openCamera](Camera_Methods.md#openCamera) | Opens the camera preview. |
| [startVideoCapture](Camera_Methods.md#startVid) | Allows you to capture a video that will end as configured in the videoDuration property. |
| [stopVideoCapture](Camera_Methods.md#stopVide) | Allows you to stop a video that is being captured using startVideoCapture method. |
| [takePicture](Camera_Methods.md#takePict) | Allows you to capture the picture when the camera is in preview mode. |

 

| Properties | Description |
| --- | --- |
| [cameraOptions](Camera_Properties.md#cameraOp) | Specifies the camera options that can be used on a form. |
| [cameraSource](Camera_Properties.md#cameraSo) | Specifies the source of the camera, either front or rear. |
| [captureOrientations](Camera_Properties.md#captureO) | Specifies the orientation of the captured image. |
| [captureMode](Camera_Properties.md#captureM) | Specifies the capture mode of the camera. |
| [compressionLevel](Camera_Properties.md#compress) | Specifies the compression level or picture quality with which the captured image must be stored. |
| [enableOverlay](Camera_Properties.md#enableOv) | The camera is launched with capability of over-lay a Form UI over the camera view. |
| [enablePhotoCropFeature](Camera_Properties.md#enablePh) | Enables you to crop the captured image. |
| [enableZoom](Camera_Properties.md#enableZo) | Set this property as true to enable pinch to zoom of the camera preview in the overlay mode. |
| [focusMode](Camera_Properties.md#focusMod) | Specifies the focus mode for the camera and is respected when the enableOverlay is set to true. |
| [imageFormat](Camera_Properties.md#imageFor) | Specifies if the image must be stored as a PNG (Portable Network Graphics) or a JPEG (Joint Photographic Experts Group) image. |
| [maxSideOfTheImage](Camera_Properties.md#maxSideO) | Specifies the width of the camera picture/image. |
| [nativeUserInterface](Camera_Properties.md#nativeUs) | Specifies if the camera must have the native interface on camera view (an interface with the default platform controls for camera) or the user interface with custom options. |
| [overlayConfig](Camera_Properties.md#overlayC) | Specifies the overlay configuration parameters for overlaying a form. |
| [scaleFactor](Camera_Properties.md#scaleFac) | Specifies the ratio by which the captured image is reduced. |
| [supportedVideoQualityLevels](Camera_Properties.md#supporte) | Returns an array of possible quality levels for the given device for the configured camera source. |
| [videoStabilization](Camera_Properties.md#videoStabilization_) | Enables you to reduce the shaking of the camera while shooting a video. |
| [videoFormat](Camera_Properties.md#videoFormat_) | Specifies the video format of the captured video. |
| [videoDuration](Camera_Properties.md#videoDuration_) | Specifies the length of the captured video in seconds. |
| [videoQualityLevel](Camera_Properties.md#videoQualityLevel_) | Specifies the quality of the video. |

 

| Events | Description |
| --- | --- |
| [onCapture](Camera_Events.md#onCaptur) | Invoked when the user captures a picture. |
| [onCaptureFailed](Camera_Events.md#onCaptur2) | Invoked when the user has tapped on Don't Allow over permission alert and also when camera privacy is turned off under iPhone settings. |
| [onFailure](Camera_Events.md#onFailur) | Invoked when an error occurs using a camera widget. |
| [onImageSaveFailed](Camera_Events.md#onImageS) | Invoked when the user has performed some action over permission alert and also when image cannot be saved to photo album or due to data save error. |

#### Data Mangement

| Methods | Description |
| --- | --- |
| [clone](Camera_Methods.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Camera_Methods.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Camera_Methods.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Camera_Methods.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Camera_Methods.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onTouchEnd](Camera_Events.md#onTouchEnd) | Invoked by the platform when the user touch is released from the touch surface. |
| [onTouchMove](Camera_Events.md#onTouchMove) | Invoked by the platform when the touch moves on the touch surface continuously until movement ends. |
| [onTouchStart](Camera_Events.md#onTouchStart) | Invoked by the platform when the user touches the touch surface. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Camera_Methods.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Camera_Methods.md#removeGestureRecognizer) | Allows you to remove a child widget from a parent widget. |
| [setGestureRecognizer](Camera_Methods.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Camera_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Camera_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Camera_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [getBadge](Camera_Methods.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](Camera_Methods.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessMode](Camera_Properties.md#accessMo) | Specifies how the captured image must be stored. |
| [base64](Camera_Properties.md#base64) | Returns the base64-encoded string of the image raw bytes. |
| [cursorType](Camera_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [rawBytes](Camera_Properties.md#rawbytes) | Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the Camera. |

#### Configurations common to all widgets

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](Camera_Methods.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Camera_Methods.md#convertPointToWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [removeFromParent](Camera_Methods.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Camera_Methods.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Camera_Methods.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Camera_Methods.md#setVisibility) | Use this method to set the visibility of the widget. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Camera_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Camera_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](Camera_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](Camera_Properties.md#id) | id is a unique identifier of the Camera Widget consisting of alphanumeric characters. |
| [info](Camera_Properties.md) | A custom JSObject with the key-value pairs that a developer can use to store the context with the widget. |
| [isVisible](Camera_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](Camera_Properties.md#parent) | Helps you access the parent of the widget. |

 

Camera Widget Basics
--------------------

If you select the Camera widget, the phone camera is invoked to capture an image (which you can choose to accept or discard) and is stored as a PNG (Portable Network Graphics) image by default with the original size.

> **_Note:_** Camera widget is not supported for SPA platform.

The following are few examples where you can use a Camera widget:

*   Automobile Insurance - To capture the scene of an accident for claims
*   To capture VIN (Vehicle Identification Number)

### Creating a Camera Using a Constructor: voltmx.ui.Camera

```

var mycamera = new voltmx.ui.Camera(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored.

Example

```
//Defining the properties for a Camera.
var camBasic = {
    id: "camera1",
    skin: "camSkin",
    focusSkin: "camFSkin",
    text: "Camera",
    isVisible: true
};

var camLayout = {
    containerWeight: 100,
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    paddingInPixel: true,
    marginInPixel: true,
    hExpand: true,
    vExpand: true
};

var camPSP = {
    enableOverlay: true
};

//Creating the Camera.
var camera1 = new voltmx.ui.Camera(camBasic, camLayout, camPSP);

//Reading enableOverlay of Camera.
alert("Camera enableOverlay::" + camera1.enableOverlay);
```

> **_Note:_** For optimization, the raw bytes property can be read only once. Once it is read, the platform releases the handle. The camera image handle is provided to the action handler and if the action handler does not store the image handle, the image cannot be retrieved from the widget (the camera widget does not have the _getImageHandle_ method).

To delete the rawbytes, use the [releaseRawBytes](Camera_Methods.md#releaseR) method.

Common Issues

The following are the issues to avoid for a camera:

*   If you delete the rawbytes using the [releaseRawBytes](Camera_Methods.md#releaseR) method, you will not be able to access the captured image.
*   On iPhone, the size of the captured image varies from device to device and is not the same. You must take this factor into consideration when you are working with the image. To have a consistent size of the captured image across all iPhone devices, you can use the [maxSideOfTheImage](Camera_Properties.md#maxSideO) property to specify width and height of the captured image.

#### Important Considerations

The following are the important considerations of the camera widget across all platforms and individual platforms:

*   **iPhone**: The following are the important considerations:
    *   You can _down scale_ a captured image (using [maxSideOfTheImage](Camera_Properties.md#maxSideO) and the [scaleFactor](Camera_Properties.md#scaleFac) properties) but cannot _up scale_ a captured image.
    *   The click events on camera Overlay form works only if _hideControlBar_ property is set to true.
    *   On iOS devices, due to technical limitation, avoid _overlayForm_ option when _nativeUserInterface_ is set to true.
    *   Tap anywhere is not supported when _hideControlBar_ property is set to true.
    *   For overlay forms that require orientation works only if _hideControlBar_ property is set to true.
    *   cameraOptions should not be modified in camera preview mode.
    *   Only pre-show and post show events of the overlay form are respected.
    *   Flash mode always on (constants.FLASH\_MODE\_ALWAYS\_ON) is not supported. If set, it will change to Flash mode as on (constants.FLASH\_MODE\_ON).
*   **Android**: The following are the important considerations:
    
    *   Camera OverlayForm , displayOrientation is not respected in devices with OS versions < 3.0 , by default OverayForm is shown in Landscape mode.
    *   The captured picture orientation is not respected in OS versions < 3.0, by default the picture is captured in Landscape mode.
    
*   **Windows**: The following are the important considerations:
    
    *   The camera widget launches as a popup with a capture button.
    *   The overlay camera uses the form lifecycle, so events preshow and postshow now work for the overlay camera.
    *   The overlay camera does not support the Capture application menu. Instead, use the takePicture() API on button click or app menu tap.
    

Limitations of Camera widget in video capture mode:

*   The following iOS specific properties are not supported:

> *   captureOrientation
> *   compressionLevel
> *   transitionEffect

*   tapAnywhere property is not supported.
*   maxSideOfTheImage property is not supported.
*   captureButtonSkin and captureButtonText options are not supported in video capture mode.
*   imageFormat and scaleFactor properties are not supported in video capture mode.
*   On Android platform, accessMode property option constants.CAMERA\_ACCESS\_MODE\_INMEMORY is not supported in video mode.
*   On Android platform, accessMode property options constants.CAMERA\_ACCESS\_MODE\_PRIVATE and constants.CAMERA\_ACCESS\_MODE\_INMEMORY are not supported when enableOverlay is set to false.
*   For Android platform, form's displayOrientation option FORM\_DISPLAY\_ORIENTATION\_BOTH is not supported. By default the FORM\_DISPLAY\_ORIENTATION\_LandSCAPE option is set.
*   On Android platform reverse portrait and reverse landscape orientations for OverlayForm are not supported.

