                               

You are here: Creating a Switch Widget Using a Constructor: voltmx.ui.Switch

Switch Widget
=============

The Switch widget is identical to the Switch Control (an on-off switch that is not customizable) in iPhone, and presents two mutually exclusive choices or states.

The Switch widget displays the current state. You must slide the control to select the other value.

Following are the real-time use cases of Switch widget:

*   **Remember password:** You can use a switch for a binary yes or no choice. For instance, consider a login page, you are given a choice to select the remember me option. You can slide the Switch if you want the browser to remember your password.
    
*   **Configuring settings:** Switch is extensively used in configuring settings in a device. For instance, selecting features like auto-rotate, and airplane mode.
    
*   **Enable/disable functionalities:** To enable or disable various functionalities in applications such as permissions for location, access camera, and access internet.
    
*   **Filters:** Switches are used in applying filters. For instance, in social networking apps, you can choose the subjects of your choice such as nature, technology, health, etc, and your feed would primarily consist of the selected subjects.
    
*   **Coupons/Credits:** Applying Coupons/Credits in shopping websites.
    

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

For general information on the Switch widget see the [Switch](../../../Iris/iris_user_guide/Content/Switch.md) topic in the Volt MX Iris User Guide.

The Switch widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Internationalization](#internationalization)
*   [Data Management](#data-management)
*   [User Input Handling](#user-input-handling)
*   [Animations](#animations)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Properties | Description |
| --- | --- |
| [bottom](SlidingContainer_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](SlidingContainer_Properties.md#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](SlidingContainer_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](SlidingContainer_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](SlidingContainer_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](SlidingContainer_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](SlidingContainer_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](SlidingContainer_Properties.md#maxHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](SlidingContainer_Properties.md#maxWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](Switch_Properties.md#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](Switch_Properties.md#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](SlidingContainer_Properties.md#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](SlidingContainer_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](SlidingContainer_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](SlidingContainer_Properties.md#zIndex) | Specifies the stack order of a widget. |

 

#### Internationalization

| Properties | Description |
| --- | --- |
| [Left Text i18n Key](Switch_Properties.md#Left_Text_i18n_Key) | Specifies the key to be used for internationalization of the string specified in the leftSideText property. |
| [Right Text i18n Key](Switch_Properties.md#Right_Text_i18n_Key) | Specifies the key to be used for internationalization of the string specified in the rightSideText property. |

 

#### Data Management

 

| Methods | Description |
| --- | --- |
| [clone](Switch_Method.md#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

#### User Input Handling

| Events | Description |
| --- | --- |
| [onScrollWidgetPosition](Switch_Events.md#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |
| [onSlide](Switch_Events.md#onSlide) | An event callback that is invoked by the platform when there is a change in the default selected value. |
| [onTouchEnd](Switch_Events.md#onTouchEnd) | An event callback is invoked by the platform when the user touch is released from the touch surface. |
| [onTouchStart](Switch_Events.md#onTouchStart) | An event callback is invoked by the platform when the user touches the touch surface. |
| [onTouchMove](Switch_Events.md#onTouchMove) | An event callback is invoked by the platform when the touch moves on the touch surface continuously until movement ends. |

 

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](Switch_Method.md#addGestureRecognizer) | This API allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](Switch_Method.md#animate_Method) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [widgetSwipeMove](Switch_Properties.md#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [blur](Switch_Properties.md#blur) | You can enable or disable a blur-effect for a widget(for example, a FlexContainer) |
| [HeaderSkin](Switch_Properties.md#HeaderSkin) | Specifies the skin to be applied to the header of the switch. |
| [nativeThumbLook](Switch_Properties.md#nativeThumbLook) | Provides the native thumb look of the Switch. |
| [opacity](Switch_Properties.md#opacity) | Specifies the opacity of the widget. |
| [skin](Switch_Properties.md#skin) | Specifies a background skin for Switch widget. |
| [SwitchColor](Switch_Properties.md#Switch) | Specifies the foreground color( sliding bar) to the Switch. |
| [viewType](Switch_Properties.md#viewType) | Specifies the appearance of the switch -- either the Windows 10 style or the Windows 8 style. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Switch_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Switch_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Switch_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](Switch_Properties.md#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](Switch_Properties.md#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the Switch widget. |
| [Header](Switch_Properties.md#Header) | Specifies the header text to the switch. |
| [leftSideText](Switch_Properties.md#leftSideText) | Specifies the text to be displayed on the left portion of the Switch. |
| [rightSideText](Switch_Properties.md#rightSideText) | Specifies the text to be displayed on the right portion of the Switch. |
| [selectedIndex](Switch_Properties.md#selectedIndex) | Accessible only from code and it specifies the option of the Switch that must be shown as selected when rendered. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Switch_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](Switch_Properties.md#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](Switch_Properties.md#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [isVisible](Switch_Properties.md#isVisibl) | Controls the visibility of a widget on the form. |
| [parent](Switch_Properties.md#parent) | Helps you access the parent of the widget. |

Switch Widget Basics
--------------------

> **_Note:_** The Switch Widget is supported on iOS, Android, and SPA.

You can use a Switch Widget to present a user two simple, diametrically opposed choices that determine the state or choice of something.

### Creating a Switch Widget Using a Constructor: voltmx.ui.Switch

```

var myswitch = new voltmx.ui.Switch(basicConf, layoutConf, pspConf);
```

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects. Otherwise, the configuration properties are ignored.

Example

```
//The below function is the callback function for onSliderCallback event. 
function onSliderCallbck(swtch) {
    /*write your logic here*/
}

//Defining the properties for Switch.
var swtchBasic = {
    id: "swtch",
    info: {
        key: "switch"
    },
    leftSideText: "on",
    rightSideText: "off",
    skin: "swchSkin",
    selectedIndex: 0,
    isVisible: true,
    onSlide: onSliderCallbck
};

var swtchLayout = {
    margin: [5, 5, 5, 5],
    marginInPixel: false,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT,
    containerWeight: 99
};

//Creating the Switch.
var swtch = new voltmx.ui.Switch(swtchBasic, swtchLayout, {})

//Reading the id of the Switch
alert("Switch id is ::" + swtch.id);
```

### Customizing Appearances

You can customize the appearance of Switch widget. Most of the dimensions of Switch widget were previously unchangeable and even if users provided a different set of values, the values were not considered. Instead, the Switch widget is rendered with the set of configured values. Now, however, you can the dimensions of the Switch with new properties and new skins that have been introduced.

You can only customize Switch widgets in the Desktop Web platform.

##### How it Works

The following set of properties and skins are exposed so that you can customize the Switch widget. You can set the default values for those newly exposed values in the Switch section of the Property window as a platform-specific property.

**Properties Exposed**

*   thumbWidth: Enables you to set the width of the knob that is placed on top of the track of the switch. The value can either be in Dp, px, or %. It is a Read+Write property.
*   thumbHeight: Enables you to set the height of the knob that is placed on top of the track of the switch. The value can either be in Dp, px, or %. It is a Read+Write property.
*   trackWidth : Enables you to set the width of the base of the switch. The value can either be in Dp, px, or %. It is a Read+Write property.
*   trackHeight: Enables you to set the height of the base of the switch. The value can either be in Dp, px, or %. It is a Read+Write property.

Skins

You can use the existing normal skin for the track of the Switch and then expose another similar skin type tab for thumb in the Property window. You can set the four properties mentioned earlier in the Switch tab, where the properties will be present as a platform-specific property.

*   Track skin: Existing default skin.
*   Thumb skin : Replicates the normal skin.
*   Switch icon: You can use the background image option to set an image on both the track and the thumb with the options of left and right image.
*   Switch label: Similar to the four properties mentioned earlier, the value of thumbText property is Set Text for Thumb. You can leave this empty if the label is not required. You can change the text on the thumb on toggle, if required.

Alignment

The Switch is middle -left aligned with respect to the FlexContainer.

Note: If the width or height of the track/thumb exceeds the flex properties, the Switch widget is shown with the exceeded dimensions. The Switch widget is not clipped in this case.

IDE/Codegen Requirements

*   Addition to Switch tab in Project window: There is one check box for custom switch under the Desktop Web platform option. Once you select that option, all the four properties ( thumbHeight, thumbWidth, trackHeight, and trackWidth) appear with the default values auto-populated. You then have to set all the four values according to the requirement. (for example, custom CSS option). In addition, another property (thumbText) appears.
*   New additions to the existing skin ( to be used for the track of the switch): N/A
*   Addition of a new skin for thumb similar to normal skin: N/A

Backward Compatibility

*   If an existing project is upgraded, then the Switch remains the same unless you set the four properties (trackWidth, trackHeight, thumbWidth, thumbHeight) by selecting the custom CSS check box in the Switch tab of the Property window.
    
*   Custom switch only appears when all the four properties are set, otherwise the conventional switch is rendered.
    

Default Behavior

*   If you do not set the value of some of the four properties (atleast one should be set to enable custom switch render), default values are populated for those properties.
    
*   If you are creating a Switch dynamically, you must create both the skins and specify them dynamically. Otherwise, for the skin, default values are applied respectively to both track and thumb.
    
*   The properties that you specify have more priority than the ones that are specified in skins, by default.
    

### Important Considerations

The following are the important considerations for the Switch widget:

*   For a good user experience, use a predictable pair of values so that the users do not have to slide the Switch to know the other value.
*   You can also consider using the Switch Widget to change the state of other UI elements in the view. Depending upon the choice that the user makes, changes in the UI must take place.  
    For example, in an Airline application booking screen, based on the Switch Widget selection as "One Way" or "Round Trip", the required UI elements must change.
*   One color or two colors in iPhone specific forked skin are supported only on iOS 5.0 and above. These properties are not respected in versions older than iOS 5.0.
*   Following are the changes and behavior of the Switch Widget in iOS7 and above:
    *   Right background color has no effect.
    *   Size of the switch is fixed as 51 x 31 px. The hExpand property has no effect.
    *   The properties leftSideText and rightSideText have no effect.
    *   If the skin is not applied, you will get the look and feel of a native Switch. If the skin is applied, you will not get the native look.
      
    
*   Following are the limitations of Switch Widget in Android platform:
    *   The height of the Switch Widget cannot be changed. The height remains the same as that of the native Android Switch Widget.
    *   You cannot set images to the leftSideText and rightSideText of the track and to the thumb as well.
    *   The width of the Switch Widget wraps to the length of the both 'leftSideText' and 'rightSideText'. However, if the text is too long then the widget gets moved out of the screen boundaries. This is the native Android behavior.
    *   The leftSideText and rightSideText are not supported in all OS versions. If the native switch widget in the apps-> settings supports text then Koyn Switch also supports the Text display.
    *   The leftSideColor and rightSideColor are being supported from API Level 16 (OS 4.1).
    *   The hExpand property is not supported in the Android platform.
    *   The paddings are applied on the entire Switch Widget but not on the text being displayed.
    *   Android platform does not support skin properties such as Shadow and Tint Color.
    *   If the border is applied, then the thumb covers the top and bottom side border. This is the native Android behavior.
    *   You must set the target SDK to OS 4.0 or higher as the Switch Widget is being supported from OS 4.0 or higher versions.
    *   In OS versions below 4.0, you cannot create the Switch Widget because exceptions could result.
    *   In OS 5.0 and above , if ThumbColor is customized, then you must set leftSideText and rightSideText as well. The ideal recommendation is to configure all the colors of the skin.
    *   Font size is not supported. This is the native Android behavior.
    *   When you set or update the leftSideText or rightSideText, the canges will be relected when you revisit the form.
      
    

