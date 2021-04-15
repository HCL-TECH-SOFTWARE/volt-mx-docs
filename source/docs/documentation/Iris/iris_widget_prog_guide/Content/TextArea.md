---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               

You are here: Creating a TextArea Using a Constructor: voltmx.ui.TextArea2

TextArea Widget
===============

The TextArea widget allows you to enter multiple lines of text. It inherits all the properties of the TextBox widget.

Following are the key use cases of Text Area widget:

*   **Feedback:** User feedback can comprise multiple lines of text. Text Area widget is apt in all the scenarios where the feedback of user is taken.
    
*   **Comments Section:** Text Area widget is apt for the applications that support users’ comments. For instance, consider the following screen from the Resorts application. Here, users can provide comments on their requirements.
    
*   **Address Field:** Address generally comprises multiple lines. Text Area widget is used for the address field in the user profile.
    
*   **Text messages:** Text Area widget is used in all the social networking applications for sending messages.
    

> **_Note:_** In Windows platform, when a FlexForm has multiple TextArea/ TextBox widgets, and none of the widgets are in focus, the focus control of the form moves to the first focussable widget. This will also make the Form scroll up to the first widget.

Widgets are normally added to your application using Volt MX Iris, but can also be added from code. For general information on using widgets in Volt MX Iris, see [Designing an Application]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.html) in the [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

For general information on the TextArea2 widget see the []({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/TextArea2.html?Highlight=text_area)[TextArea2]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html) topic in the Volt MX Iris User Guide.

This widget supports drag and drop of text for iOS 11 on iPad.

The TextArea widget capabilities can be broadly categorized into the following:

*   [Layout](#layout)
*   [Data Management](#data-management)
*   [Animations](#animations)
*   [3D Touch](#3d-touch)
*   [User Input Handling](#user-input-handling)
*   [UI Appearance](#ui-appearance)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)
*   [Configurations Common To All Widgets](#configurations-common-to-all-widgets)

#### Layout

  
| Events | Description |
| --- | --- |
| [doLayout](TextArea_Events.html#doLayout) | Invoked for every widget when the widget position and dimensions are computed. |

  

| Properties | Description |
| --- | --- |
| [bottom](TextArea_Properties.html#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](TextArea_Properties.html#centerX) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](TextArea_Properties.html#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [contentAlignment](TextArea_Properties.html#contentAlignment) | Specifies the alignment of the text for a widget with respect to its boundaries. |
| [height](TextArea_Properties.html#height) | Determines the height of the widget and measured along the y-axis. |
| [left](TextArea_Properties.html#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](TextArea_Properties.html#minHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](TextArea_Properties.html#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](TextArea_Properties.html#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](TextArea_Properties.html#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [padding](TextArea_Properties.html#padding) | Defines the space between the content of the widget and the widget boundaries. |
| [paddingInPixel](TextArea_Properties.html#paddingInPixel) | Indicates if the padding is to be applied in pixels or in percentage. |
| [right](TextArea_Properties.html#right) | Determines the lower right corner of the widget and is measured from the right bounds of the parent container. |
| [top](TextArea_Properties.html#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](TextArea_Properties.html#width) | Determines the width of the widget and is measured along the x-axis. |
| [zIndex](TextArea_Properties.html#zIndex) | Specifies the stack order of a widget. |

 

#### Data Management

| Methods | Description |
| --- | --- |
| [clone](TextArea_Method.html#clone) | When this method is used on a container widget, then all the widgets inside the container are cloned. |

 

| Events | Description |
| --- | --- |
| [onBeginEditing](TextArea_Events.html#onBeginE) | This is an event callback that is invoked by the platform when the user clicks within the TextArea and is about to start editing. |
| [onDone](TextArea_Events.html#onDone) | This event is triggered when user is done with entering text in textarea and click or touch the Go or Enter option. |
| [onEndEditing](TextArea_Events.html#onEndEdi) | This is an event callback that is invoked by the platform. |
| [onTextChange](TextArea_Events.html#onTextCh) | This is an event callback triggered when text in the TextArea changes. |

 

| Properties | Description |
| --- | --- |
| [autoCapitalize](TextArea_Properties.html#autoCapitalize) | Specifies the character capitalization behavior. |
| [autoCorrect](TextArea_Properties.html#autoCorrect) | Determines whether auto-correction is enabled or disabled during typing. |
| [autoSuggestions](TextArea_Properties.html#autoSuggestions) | Used to enable or disable suggestions such as spell checker, predictive text and corrections in the application. |
| [closeButtonText](TextArea_Properties.html#closeButtonText) | Specifies the text to replace the "Done" button that appears in the Keypad (opens when you select a textbox). |
| [isSensitiveText](TextArea_Properties.html#isSensitiveText) | Used to secure the text entered in a TextArea widget. |
| [keyboardActionLabel](TextArea_Properties.html#keyboardActionLabel) | Specifies if the text to be displayed in action key of the keyboard. |
| [maxTextLength](TextArea_Properties.html#maxTextLength) | Specifies the maximum number of characters that the text field can accept. |
| [placeholder](TextArea_Properties.html#placeholder) | Specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format). |
| [restrictCharactersSet](TextArea_Properties.html#restrictCharactersSet) | Restricts users from entering a set of input characters from the soft keyboard in the TextArea widget. |
| [secureTextEntry](TextArea_Properties.html#secureText) | Specifies whether the text entered by the user will be secured using a mask character, such as asterisk or dot. |
| [text](TextArea_Properties.html#text) | Specifies a general or descriptive text for the TextArea widget. |
| [textInputMode](TextArea_Properties.html#textInputmode) | Specifies the type of input characters that a user can enter into the TextArea widget. |
| [toolTip](TextArea_Properties.html#toolTip) | Specifies the hint text when the cursor hovers over a widget, without clicking it. |
| [wrapText](TextArea_Properties.html#wrapText) | Allows you to specify whether text in the TextArea Widget should be wrapped or not. |

 

#### Animations

| Methods | Description |
| --- | --- |
| [animate](TextArea_Method.html#animate) | Applies an animation to the widget. |

 

| Properties | Description |
| --- | --- |
| [transform](TextArea_Properties.html#transfor) | Contains an animation transformation that can be used to animate the widget. |
| [widgetSwipeMove](TextArea_Properties.html#widgetSwipeMove) | Used to enable and configure the left or right swipe actions for a widget. |

 

#### 3D Touch

| Methods | Description |
| --- | --- |
| [registerForPeekandPop](TextArea_Method.html#register) | Registers a widget to enable 3D Touch peek and pop gestures. |
| [setOnPeek](TextArea_Method.html#setOnPek) | Sets and overrides the existing onPeekCallback for the widget. |
| [setOnPop](TextArea_Method.html#setOnPop) | Overrides the existing onPopCallback for the widget. |
| [unregisterForPeekandPop](TextArea_Method.html#unregist) | Unregisters a widget from 3D Touch peek and pop gestures. |

#### User Input Handling

| Methods | Description |
| --- | --- |
| [addGestureRecognizer](TextArea_Method.html#addGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |
| [removeGestureRecognizer](TextArea_Method.html#removeGestureRecognizer) | Allows you to remove the specified gesture recognizer for the specified widget. |
| [setGestureRecognizer](TextArea_Method.html#setGestureRecognizer) | Allows you to set a gesture recognizer for a specified gesture for a specified widget. |

 

| Events | Description |
| --- | --- |
| [onBackKeyPress](TextArea_Events.html#onBackKeyPress) | This event callback is invoked when the back button of an Android mobile device is clicked. |
| [onKeyBoardDidHide](TextArea_Events.html#onKeyboardDidHide) | This event callback is invoked when the soft keyboard of an Android device has been closed. |
| [onKeyboardDidShow](TextArea_Events.html#onKeyboardDidShow) | This event callback is invoked after the soft keyboard of an Android device appears. |
| [onKeyboardWillHide](TextArea_Events.html#onKeyboardWillHide) | This event callback is invoked when the soft keyboard of an Android device is about to close. |
| [onKeyboardWillShow](TextArea_Events.html#onKeyboardWillShow) | This event callback is invoked when the soft keyboard of an Android device is about to appear. |
| [onKeyDown](TextArea_Events.html#onKeyDow) | This event callback that is invoked by the platform when the user presses a key (on the keyboard). |
| [onKeyUp](TextArea_Events.html#onKeyUp) | This event callback that is invoked by the platform when the user releases a key (on the keyboard). |
| [onScrollWidgetPosition](TextArea_Events.html#onScrollWidgetPosition) | This event callback is invoked by the platform when the widget location position gets changed on scrolling. |

| Properties | Description |
| --- | --- |
| [isSelectable](TextArea_Properties.html#isSelectable) | Enables you to select the content inside the TextArea |
| [smartDashes](TextArea_Properties.html#smartDashes) | Allows you to insert hyphens without space in the text. |
| [smartInsertDelete](TextArea_Properties.html#smartInsertDelete) | Enables you to add a space when you copy and paste a text. |
| [smartQuotes](TextArea_Properties.html#smartQuotes) | Enables you to add curly quotes in the text. |
| [textCopyable](TextArea_Properties.html#textCopyable) | Enable or disable the cut, copy and, paste of the text. |

#### UI Appearance

| Properties | Description |
| --- | --- |
| [backgroundColor](TextArea_Properties.html#backgrou) | Specifies the background color of the widget in hex format. |
| [backgroundColorMultiStepGradient](TextArea_Properties.html#backgroundColorMultiStepGradient) | Specifies the multi-step gradient color for the background of the widget. |
| [backgroundColorTwoStepGradient](TextArea_Properties.html#backgroundColorTwoStepGradient) | Specifies the two-step gradient color for the background of the widget. |
| [backgroundImage](TextArea_Properties.html#backgroundImage) | Sets the image for the background of the widget. |
| [borderColor](TextArea_Properties.html#borderColor) | Specifies the border color of the widget. |
| [borderColorGradient](TextArea_Properties.html#borderColorGradient) | Specifies the multi-step gradient color for the border of the widget. |
| [borderStyle](TextArea_Properties.html#borderStyle) | Specifies the border style for the widget. |
| [borderWidth](TextArea_Properties.html#borderWidth) | Specifies the width of the border for the widget in pixels. |
| [cornerRadius](TextArea_Properties.html#cornerRadius) | Specifies the radius of the border for the widget. |
| [disabledStateSkinProperties](TextArea_Properties.html#disabledStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is disabled or blocked. |
| [focusStateSkinProperties](TextArea_Properties.html#focusStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is in focus. |
| [fontColor](TextArea_Properties.html#fontColor) | Specifies the font color of the widget. |
| [fontFamily](TextArea_Properties.html#fontFamily) | Specifies the font family for the font of the widget. |
| [fontSize](TextArea_Properties.html#fontSize) | Specifies the font size for the widget in percentage (%) units. |
| [fontStyle](TextArea_Properties.html#fontStyle) | Specifies the font style for the widget. |
| [fontWeight](TextArea_Properties.html#fontWeight) | Specifies the weight for the font of the widget. |
| [hoverStateSkinProperties](TextArea_Properties.html#hoverStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the cursor hovers on the widget. |
| [pressedStateSkinProperties](TextArea_Properties.html#pressedStateSkinProperties) | Specifies the skin properties that define the look and feel of the widget, when the widget is pressed or clicked. |
| [shadowColor](TextArea_Properties.html#shadowColor) | Specifies the color for the shadow of the widget. |
| [shadowOffset](TextArea_Properties.html#shadowOffset) | This property specifies the current coordinates of the shadow region in the widget. |
| [shadowRadius](TextArea_Properties.html#shadowRadius) | Specifies the radius for the blur value of the shadow. |
| [textShadowColor](TextArea_Properties.html#textShadowColor) | Specifies the color for the text shadow of the widget. |
| [textShadowOffset](TextArea_Properties.html#textShadowOffset) | This property specifies the current coordinates of the text shadow region in the widget. |
| [textShadowRadius](TextArea_Properties.html#textShadowRadius) | Specifies the radius for the blur value of the text shadow. |
| [focusSkin](TextArea_Properties.html#focusSkin) | Specifies the look and feel of the widget when in focus. |
| [hoverSkin](TextArea_Properties.html#hoverSkin) | Specifies the look and feel of a widget when the cursor hovers on the widget. |
| [keyboardAppearance](TextArea_Properties.html#keyboardAppearance) | Allows you to set the on screen keyboard to a dark or light color scheme. |
| [keyBoardStyle](TextArea_Properties.html#keyBoardStyle) | When you interact with a TextBox widget, a keyboard is displayed. |
| [nativeThumbLook](Switch_Properties.html#nativeThumbLook) | Provides the native thumb look of the Switch. |
| [opacity](TextArea_Properties.html#opacity) | Specifies the opacity of the widget. |
| [placeholderSkin](TextArea_Properties.html#placeholderSkin) | Specifies the skin to be applied to the placeholder text in the TextArea widget. |
| [skin](TextArea_Properties.html#skin) | Specifies a background skin for Switch widget. |
| [shadowDepth](TextArea_Properties.html#shadowDepth) | Defines the depth of the shadow effect applied to the TextArea Widget. |
| [shadowType](TextArea_Properties.html#shadowType) | Sets a type of the shadow effect to apply to the TextArea Widget. |
| [showCloseButton](TextArea_Properties.html#showCloseButton) | Specifies if the "Done" button that appears in the keypad (opens when you select text box) must be visible or not. |
| [showProgressIndicator](TextArea_Properties.html#showProgressIndicator) | Specifies if there must be an indication to the user that the widget content is being loaded. |

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](TextArea_Properties.html#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](TextArea_Properties.html#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](TextArea_Properties.html#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Properties | Description |
| --- | --- |
| [cursorType](TextArea_Properties.html#cursorType) | Specifies the type of the mouse pointer used. |
| [enableHapticFeedback](TextArea_Properties.html#enableHapticFeedback) | Allows you to enable or disable haptic feedback on the TextArea widget. |
| [inputAccessoryViewType](TextArea_Properties.html#inputAccessoryViewType) | The extra buttons (or controls) allow specific operations needed by your application, such as moving to the next or previous text field, making the keyboard disappear and so on. The area above the keyboard is known as Input Accessory View |
| [selectedIndex](TextArea_Properties.html#selectedIndex) | Accessible only from code and it specifies the option of the Switch that must be shown as selected when rendered. |

| Methods | Description |
| --- | --- |
| [getBadge](TextArea_Method.html#getBadge) | Enables you to read the badge value (if any) attached to the specified widget. |
| [setBadge](TextArea_Method.html#setBadge) | Enables you to set the badge value to the given widget at the upper, right corner of the widget. |

#### Configurations Common To All Widgets

| Properties | Description |
| --- | --- |
| [accessibilityConfig](TextArea_Properties.html#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [enable](TextArea_Properties.html#enable) | Allows you to make a widget visible but not actionable. |
| [enableCache](TextArea_Properties.html#enableCa) | Enables you to improve the performance of Positional Dimension Animations. |
| [id](TextArea_Properties.html#id) | A unique identifier of TextArea consisting of alpha numeric characters. |
| [info](TextArea_Properties.html#info) | A custom JSObject with the key value pairs that a developer can use to store the context with the widget. |
| [isVisible](TextArea_Properties.html#isVisible) | Controls the visibility of a widget on the form. |
| [parent](TextArea_Properties.html#parent) | Helps you access the parent of the widget. |

| Methods | Description |
| --- | --- |
| [convertPointFromWidget](TextArea_Method.html#convertPointFromWidget) | Allows you to convert the coordinate system from a widget to a point (receiver's coordinate system). |
| [convertPointToWidget](TextArea_Method.html#convertPointToWidget) | Allows you to convert the coordinate system from a point (receiver's coordinate system) to a widget. |
| [removeFromParent](TextArea_Method.html#removeFromParent) | Allows you to remove a child widget from a parent widget. |
| [setEnabled](TextArea_Method.html#setEnabled) | Specifies the widget that must be enabled or disabled. |
| [setFocus](TextArea_Method.html#setFocus) | Specifies the widget on which there must be focus. |
| [setVisibility](TextArea_Method.html#setVisibility) | Use this method to set the visibility of the widget. |

TextArea2 Widget Basics
-----------------------

TextArea is used to provide an editable field for the user to enter text which spans over multiple lines .

> **_Note:_** The TextArea widget inherits all the properties of the [TextBox](TextBox.html) widget.

### Creating a TextArea Using a Constructor: voltmx.ui.TextArea2

{% highlight voltMx %}
var setTextArea1 = new voltmx.ui.TextArea2 (basicConf, layoutConf, pspConf);
{% endhighlight %}

*   **basicConf** is an object with basic properties.
*   **layoutConf** is an object with layout properties.
*   **pspConf** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

{% highlight voltMx %}//Defining properties for TextArea.
var tAreaBasic = {
    id: "txtArea",
    skin: "txtSkin",
    focusSkin: "txtFSkin",
    text: "Text",
    maxTextLength: 20,
    isVisible: true,
    secureTextEntry: true,
    placeholder: "enter text"
};

var tAreaLayout = {
    padding: [5, 5, 5, 5],
    margin: [5, 5, 5, 5],
    containerWeight: 100,
    hExpand: true,
    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
};

var tAreaPSP = {
    keyboardActionLabel: constants.TEXTAREA_KEYBOARD_LABEL_SEND,
    pasteboardType: constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
    showProgressIndicator: true
};
//Creating the TextArea.
var txtArea = new voltmx.ui.TextArea2(tAreaBasic, tAreaLayout, tAreaPSP);

//Reading the widgetAlignment of the TextArea.	
alert("TextArea widgetAlignment ::" + txtArea.widgetAlignment);
{% endhighlight %}

### Customizing Appearance

You can customize the appearance of the TextArea widget using the following properties:

*   widgetAlignment: Specifies the alignment of the widget.
*   margin: Defines the space around the widget.
*   padding: Defines the space between the content of the widget and the widget boundaries.
*   skin: Specifies the skin.
*   focusSkin: Specifies the focus skin.

### Important Considerations

The following are the important considerations for the TextArea widget:

*   Editing on devices with small form factor takes place in a new screen.
*   Editing on devices with medium or large form factor takes place in the same screen.

