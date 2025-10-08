                               

You are here: Creating a Video Using a Constructor: voltmx.ui.Video

Video Widget
============

The Video widget helps to play the video files captured using the device's camera, videos from the app resources, and from the servers/ websites by streaming data within a form. The Video widget can be added only to the FlexContainer, FlexScrollContainer, and FlexForm.

Following are a few real-time use cases of Video widget:

*   **Advertisements and Promotions:** Promotional videos are played multiple times in gaming applications, news applications, and websites.
    
*   **Greetings:** Videos like new greetings, Christmas greetings are played in a browser or an application.
    
*   **Instructional purposes:** Instructional videos are created primarily for educational purposes.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the Video widget see the [Video](../../../Iris/iris_user_guide/Content/Video.md) topic in the Volt MX Iris User Guide.

This widget supports drag and drop of videos for iOS 11 on iPad.

The Video widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Video Controls](#video-controls)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [Animations](#animations)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

 

| Properties | Description |
| --- | --- |
| [anchorPoint](Video_Basic_Properties.md#anchorPo) | Specifies the anchor point of the widget bounds rectangle using the widget's coordinate space. |
| [bottom](Video_Basic_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](Video_Basic_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](Video_Basic_Properties.md#centerY) | This property determines the center of a widget measured from the top bounds of the parent container. |
| [containerWeight](Video_Basic_Properties.md#containe) | Specifies percentage of width to be allocated by its parent widget. |
| [height](Video_Basic_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](Video_Basic_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](Video_Basic_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](Video_Basic_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](Video_Basic_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](Video_Basic_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [right](Video_Basic_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](Video_Basic_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](Video_Basic_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](Video_Basic_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

| Events | Description |
| --- | --- |
| [doLayout](Video_Events.md#doLayout) | Used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed. |

  

#### Video Controls

| Methods | Description |
| --- | --- |
| [getBufferPercentage](Video_Method.md#getBuff) | Returns the amount of the video buffered or played so far in percentage (0-100). |
| [getCurrentPosition](Video_Method.md#getPos) | Returns the playing time of the current position of the video. |
| [getDuration](Video_Method.md#getDur) | Returns the duration of the video playing currently. |
| [isPlaying](Video_Method.md#isPlay) | Returns whether or not the video is playing. |
| [pause](Video_Method.md#pause) | Pauses the video that is playing. |
| [play](Video_Method.md#play) | Plays the video. |
| [resume](Video_Method.md#resume) | Resumes play of a video that is paused. |
| [seekTo](Video_Method.md#seekTo) | Plays the video from a specific time. |
| [setSource](Video_Method.md#setSrc) | Allows you to modify the video source. |
| [setTracks](Video_Method.md#setTracks) | Allows you to assign or modify video captions. |
| [stop](Video_Method.md#stop) | Stops the video that is playing. |

 

| Properties | Description |
| --- | --- |
| [controls](Video_Basic_Properties.md#controls) | Specifies whether to display the video controls or not. |
| [enableCaptions](Video_Basic_Properties.md#enableCaptions) | Specifies the visibility of captions for a video that is playing. |
| [tracks](Video_Basic_Properties.md#tracks) | Specifies the tracks or captions of a playing video. |
| [videoGravity](Video_Basic_Properties.md#videoGravityProperty) | Specifies how to render a video content inside the widget. |
| [volume](Video_Basic_Properties.md#volume) | Specifies the current volume of the audio of the video. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](Video_Method.md#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](Video_Method.md#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](Video_Method.md#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](Video_Method.md#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Video_Method.md#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](Video_Method.md#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](Video_Method.md#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Video_Events.md#onScrollWidgetPosition) | Invoked by the platform when the widget location position gets changed on scrolling. |

#### Animations

| Methods | Description |
| --- | --- |
| [animate](Video_Method.md#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](Video_Basic_Properties.md#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](Video_Basic_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [margin](Video_Basic_Properties.md#margin) | Defines the space around a widget. |
| [opacity](Video_Basic_Properties.md#opacity) | Specifies the opacity of the widget. |
| [padding](Video_Basic_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [poster](Video_Basic_Properties.md#poster) | You can specify an image which is to be displayed as a poster or as a starting image for the video. |
| [skin](Video_Basic_Properties.md#skin) | Specifies the look and feel of the video. |
| [widgetAlignment](Video_Basic_Properties.md#widgetAl) | Indicates how a widget is to be anchored with respect to its parent. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Video_Basic_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Video_Basic_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Video_Basic_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties |   |
| --- | --- |
| [cursorType](Video_Basic_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [source](Video_Basic_Properties.md#source) | Specifies the URLs of a video that is to be streamed, the path of the video from the local asset, and the video captured from the camera. |
| [text](Video_Basic_Properties.md#text) | Specifies a general or descriptive text for the Video widget. |

| Method | Description |
| --- | --- |
| [getBadge](Video_Method.md#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](Video_Method.md#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

| Events | Description |
| --- | --- |
| [onCompletion](Video_Events.md#onCompletion) | Invoked when playback is completed. |
| [onError](Video_Events.md#onError) | Invoked when an error occurred in setup or playback. |
| [onPrepared](Video_Events.md#onPrepared) | Invoked when the media file is loaded and ready to play. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Video_Basic_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Video_Basic_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [id](Video_Basic_Properties.md#id) | id is a unique identifier of a Video consisting of alpha numeric characters. |
| [info](Video_Basic_Properties.md#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](Video_Basic_Properties.md#isVisible) | Controls the visibility of the Video widget on the form. |
| [parent](Video_Basic_Properties.md#parent) | Helps you access the parent of the widget. |

| Method | Description |
| --- | --- |
| [convertPointFromWidget](Video_Method.md#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](Video_Method.md#convertPointToWidget) | Allows you to convert the coordinate system from a point to widget. |
| [removeFromParent](Video_Method.md#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](Video_Method.md#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](Video_Method.md#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](Video_Method.md#setVisibility) | Set the visibility of the widget. |

Video Widget Basics
-------------------

### Creating a Video Using a Constructor: voltmx.ui.Video

```

var video = new voltmx.ui.Video (config);
```

Example

```
//Defining the properties for Video with source
var video1 = new voltmx.ui.Video({
    "id": "video1",
    skin: "vSkin",
    "controls": false,
    "width": "100%",
    "height": "100%",
    "zIndex": 3,
    "source": {
        "mp4": "http://www.quirksmode.org.html5/videos/big_buck_bunny.mp4",
        "mov": videofilepath,
        "rawBytes": camera1.rawBytes
    },
    "poster": null,
    "onPrepared": onPreparedCallBack
});
```

### Limitations

*   The Video Widget does not work in the DEBUG mode. It works only in the RELEASE mode.

iOS

The following are the important considerations for the iOS platform:

*   If you add Video widgets to your apps using the [voltmx.ui.video](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#Video) API (dynamically), at least one Video widget must be added from the default library on a form in your application. If all Video widgets are added to the app using the voltmx.ui.video API, videos will not play on the app.

SPA

The following are the important considerations for the SPA platform:

*   When the form contains dockable components such as [](Form_Basic_Properties.md#headers-property)[headers](Form_Basic_Properties.md#Header)[](Form_Basic_Properties.md#Header), [footers](Form_Basic_Properties.md#Footer), or an [Appmenu](Form_Basic_Properties.md#Show), scrolling the video widget on iPhone or iPad does not scroll the form. This is due to a limitation that iPhone video controls do not respond to (custom) touch events when media controls are present.To avoid this, apply left or right margins to the either side of the video widget to enable scrolling of the form as well.
*   If you have two videos in a form, you can only play one at a time.

Supported devices and video formats for SPA platform.

| Category and Device | OS | Browser | Video Format](WebM, OGG, MP4, OGV) | .md Mandatory Attributes Height/Width | Comments |
| --- | --- | --- | --- | --- | --- |
| Samsung Galaxy S2 - amsung I9100 | Android 2.3.3 | Native Android Webkit | MP4 | na |   |
| Samsung Galaxy S2 - Samsung I9100 | Android 4.0.4 | Native Android Webkit | MP4 | na |   |
| Samsung Galaxy S2 - amsung I9100 | Android 4.0.4 | Native Android Webkit | MP4 | na |   |
| iPhone - iPhone | iOS 4.2.1 | Safari | MP4 | na |   |
| iPhone - iPhone | iOS 6.1.3 | Safari | MP4 | na |   |

