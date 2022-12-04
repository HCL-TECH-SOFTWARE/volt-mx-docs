                              


TextArea Events
===============

TextArea widget has the following events associated with it:

* * *


<details close markdown="block"><summary>doLayout Event</summary>

* * *

This event is invoked for every widget when the widget position and dimensions are computed.

### Syntax
```

doLayout()
```

### Read/Write

Read + Write

### Remarks

This event is invoked for all the widgets placed inside flex containers. This event is invoked in the order in which the widgets are added to the widget hierarchy and expect the frame property of the widget is calculated and available for use within this event.

This event is used to set the layout properties of child widgets in the relation to self and peer widgets whose layout is not yet performed.

The number of times this event invoked may vary per platform. It is not recommended to write business logic assuming that this function is invoked only once when there is a change in positional or dimensional properties. This event will not trigger when transformations are applied though widget is moved or scaled or rotated from its original location.

### Example

```

//Sample code to set doLayout event callback to a button widget.
/*This code changes the top property of button2 and makes it appear below button1.*/
myForm.button1.doLayout=doLayoutButton1;


function doLayoutButton1(){
      
    myForm.button2.top = myForm.button1.frame.height;
}
```

### Platform Availability

*   iOS, Android, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>onBackKeyPress Event</summary>

* * *

* * *

This is event callback is invoked by the Android platform when the soft- keyboard is open and the back button of the device is clicked.

This event is not be triggered when you use gestures in the mobile device for back navigation.

### Syntax
```

onBackKeyPress()
```

### Read/Write

Read + Write

### Example

```

/*This event is triggered in both TextBox and TextArea widgets for Android platform.*/

/*This example demonstrates how to assign callback to onBackKeyPress event myTxtBox TextBox widget in frmTextBox FlexForm. Use the onBackKeyPress event in TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.onBackKeyPress= onBackKeyPressCallback;

function onBackKeyPressCallback(wdgRef) {
 // handle the event here
 // wdgRef returns the handle of the widget.
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>onBeginEditing Event</summary>

* * *

This is an event callback that is invoked by the platform when the user clicks within the TextArea and is about to start editing.

### Syntax
```

onBeginEditing()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the onBeginEditing event callback to a TextArea widget.

frmTxtArea.myTxtArea.onBeginEditing=onBeginEditingCallback;

function onBeginEditingCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   iOS and Android

* * *

</details>
<details close markdown="block"><summary>onDone Event</summary>

* * *

This event is triggered when user is done with entering text in textarea and click or touch the _Go_ or _Enter_ option.

### Syntax
```

onDone()
```

### Read/Write

Read + Write

### Remarks

In Desktop Web platform, this event is fired when the enter key is pressed when the textarea has focus.

### Example

```

//Sample code to set the onDone event callback to a TextArea widget.

frmTxtArea.myTxtArea.onDone=onDoneCallback;

function onDoneCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms except SPA

* * *

</details>
<details close markdown="block"><summary>onEndEditing Event</summary>

* * *

This is an event callback that is invoked by the platform.

### Syntax
```

onEndEditing()
```

### Read/Write

Read + Write

### Remarks

This is event is invoked when the user performs one of the below actions:

*   Click on any other focusable widget (for example, another TextBox)
*   Click on the **Done** button on the **Next Previous** bar.
*   Click on the **Done** button on the keypad.

When you click on the **Done** button of the keypad the following events take place in a sequence:

*   onendediting
*   ondone

### Example

```

//Sample code to set the onEndEditing event callback to a TextArea widget.

frmTxtArea.myTxtArea.onEndEditing=onEndEditingCallback;

function onEndEditingCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   iOS and Android

* * *

</details>
<details close markdown="block"><summary>onKeyboardDidHide Event</summary>

* * *

* * *

This is event callback is invoked by the Android platform when the soft keyboard has been closed.

### Syntax
```

onKeyboardDidHide()
```

### Read/Write

Read + Write

### Example

```

/*This event is triggered in both TextBox and TextArea widgets for Android platform.*/

/*This example demonstrates how to assign callback to onKeyBoardDidHide event myTxtBox TextBox widget in frmTextBox FlexForm. Use the onKeyBoardDidHide event in TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.onKeyboardDidHide = keyboardCallbacksDidHide;

function keyboardCallbacksDidHide(wdgRef) {
 // handle the event here
 // wdgRef returns the handle of the widget.
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>onKeyboardDidShow Event</summary>

* * *

* * *

This is event callback is invoked by the Android platform when the soft keyboard has been just brought into view.

### Syntax
```

onKeyboardDidShow()
```

### Read/Write

Read + Write

### Limitation

*   In Android platform, when you close the soft keyboard using back button, and then re-select the text by long-press in TextArea and TextBox widget, the `onKeyBoardDidShow` event is not triggered.

### Example

```

/*This event is triggered in both TextBox and TextArea widgets for Android platform.*/

/*This example demonstrates how to assign callback to onKeyBoardDidShow event myTxtBox TextBox widget in frmTextBox FlexForm. Use the onKeyBoardDidShow event in TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.onKeyboardDidShow = keyboardCallbacksDidShow;

function keyboardCallbacksDidShow(wdgRef) {
 // handle the event here
 // wdgRef returns the handle of the widget.
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>onKeyboardWillHide Event</summary>

* * *

* * *

This is event callback is invoked by the Android platform when the soft keyboard is about to be hidden.

### Syntax
```

onKeyboardWillHide()
```

### Read/Write

Read + Write

### Example

```

/*This event is triggered in both TextBox and TextArea widgets for Android platform.*/

/*This example demonstrates how to assign callback to onKeyBoardWillHide event myTxtBox TextBox widget in frmTextBox FlexForm. Use the onKeyBoardWillHide event in TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.onKeyboardWillHide = keyboardCallbacksWillHide;

function keyboardCallbacksWillHide(wdgRef) {
 // handle the event here
 // wdgRef returns the handle of the widget.
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>onKeyboardWillShow Event</summary>

* * *

* * *

This is event callback is invoked by the Android platform when the soft keyboard is about to be displayed.

### Syntax
```

onKeyboardWillShow()
```

### Read/Write

Read + Write

### Limitation

*   In Android platform, when you close the soft keyboard using back button, and then re-select the text by long-press in TextArea and TextBox widget, the `onKeyBoardWillShow` event is not triggered.

### Example

```

/*This event is triggered in both TextBox and TextArea widgets for Android platform.*/

/*This example demonstrates how to assign callback to onKeyBoardWillShow event myTxtBox TextBox widget in frmTextBox FlexForm. Use the onKeyBoardWillShow event in TextArea widget in a similar manner.*/
frmTextBox.myTxtBox.onKeyboardWillShow = keyboardCallbacksWillShow;

function keyboardCallbacksWillShow(wdgRef) {
 // handle the event here
 // wdgRef returns the handle of the widget.
}
```

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>onKeyDown Event</summary>

* * *

This is an event callback that is invoked by the platform when the user presses a key (on the keyboard).

### Syntax
```

onKeyDown()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the onKeyDown event callback to a TextArea widget.

frmTxtArea.myTxtArea.onKeyDown=onKeyDownCallback;

function onKeyDownCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Desktop Web and SPA

* * *

</details>
<details close markdown="block"><summary>onKeyUp Event</summary>

* * *

This is an event callback that is invoked by the platform when the user releases a key (on the keyboard).

### Syntax
```

onKeyUp()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the onKeyUp event callback to a TextArea widget.

frmTxtArea.myTxtArea.onKeyUp=onKeyUpCallback;

function onKeyUpCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Desktop Web and SPA

* * *

</details>
<details close markdown="block"><summary>onScrollWidgetPosition Event</summary>

* * *

This event callback is invoked by the platform when the widget location position gets changed on scrolling. The onScrollWidgetPosition event returns the positional coordinates of the widget's location with respect to the screen (screenX and screenY) and the parent container (frameX and frameY). This event is invoked asynchronously, and is not available for FlexForm widget.

### Syntax
```

onScrollWidgetPosition()
```

### Read/Write

Read + Write

### Example

```

var LabelWdg = new voltmx.ui.Label(basicConf, layoutConf, pspConf);
form.add(LabelWdg);
LabelWdg.onScrollWidgetPosition = onScrollWidgetPositionCallBack;

function onScrollWidgetPositionCallBack(wdg, screenX, screenY, frameX, frameY) { //wdg : Widget that is registered for onScrollWidgetPosition.
    /*screenX : Position of widget with respect to 
the screen's X - coordinates (after downsizing the navigation bar and status bar).*/
    /*screenY : Position of widget with respect to the screen's Y - 
coordinates (after downsizing the navigation bar and status bar).*/
    //frameX : Position of widget with respect to parent container's X- coordinates.
    //frameY : Position of widget with respect to parent container's Y- coordinates.
}
```

### Platform Availability

*   Not Accessible from IDE
*   Android, iOS, SPA, and Windows

* * *

</details>
<details close markdown="block"><summary>onTextChange Event</summary>

* * *

This is an event callback triggered when text in the TextArea changes.

### Syntax
```

onTextChange()
```

### Read/Write

Read + Write

### Remarks

This event is not fired when the text is changed programmatically.

On the Desktop Web and SPA platforms, this event is fired when the focus is out of the text area.

### Example

```

//Sample code to set the onTextChange event callback to a TextArea widget.

frmTxtArea.myTxtArea.onTextChange=onTextChangeCallback;

function onTextChangeCallback(txtArea){
      //Write your logic here.
}
```

### Platform Availability

*   Available in the IDE
*   Available on all platforms.

* * *
</details>

