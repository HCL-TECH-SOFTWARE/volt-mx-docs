---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                                


API Simplification
==================

APIs are simplified from three bucket constructors to a single bucket constructor so that you don’t have to remember multiple properties. Even if you pass one property, widget can be constructed with default properties. For example,

{% highlight voltMx %}var label1 = new voltmx.ui.Label({
    "text": "HelloWorld"
}); 
{% endhighlight %}

Following widgets support API simplification:

*   Form2
*   TextArea2
*   TextBox2
*   HBox
*   VBox
*   Button
*   CheckBox
*   Listbox
*   Label
*   RadioButton
*   SegmentedUI2
*   Browser
*   Camera
*   HorizontalImageStrip
*   ImageGallery2
*   Phone
*   PickerView
*   Switch
*   ScrollBox
*   Image2
*   Line
*   Link
*   RichText
*   Slider
*   Calendar
*   DataGrid
*   Map
*   TabPane
*   Video
*   ComboBox
*   Popup

Single Bucket Constructors Examples
-----------------------------------

Below are some of the examples of the constructor usage using few widgets. There is no change in the Read - Write values of the properties.

To create a label with default text:

{% highlight voltMx %}
//Create a label with default text.
var label1 = new voltmx.ui.Label();
{% endhighlight %}

To create a label with text as "HelloWorld" that overrides the default value:

{% highlight voltMx %}//Create a label with text HelloWorld.
var label1 = new voltmx.ui.Label({
    "text": "HelloWorld"
});
{% endhighlight %}

To create a label with text as "HelloWorld" and a skin defined with ID SkinLabel that overrides the default values:

{% highlight voltMx %}//Create a label with text HelloWorld and skin SkinLabel.
var label1 = new voltmx.ui.Label({
    "text": "HelloWorld",
    "skin": "SkinLabel"
});
{% endhighlight %}

To create a Form with title MyForm and the specific title bar configuration properties:

{% highlight voltMx %}//Create a Form with title MyForm and specific title bar configuration properties.
var frm1 = new voltmx.ui.Form2({
    "title": "MyForm",
    "titleBarConfig": {
        "renderTitleText": true,
        "titleBarLEftSideView": "button",
        "labelLeftSideView": "Back",
        "titleBarRightSideView": "button",
        "labelRightSideView": "Edit"
    }
});
{% endhighlight %}

Handling Widget IDs
-------------------

Every widget in an application requires a unique Widget ID. If you construct a widget using the single bucket constructor, the widget ID is not mandatory. Following are the implications, if you do not pass a widget ID while creating a widget:

*   The framework will create a unique widget ID
*   A JavaScript null value will be returned if you try to read the widget ID.
*   You will not be able to reference the widget through a form or another widget hierarchy.

To create a label with default text, but using the specified ID:

{% highlight voltMx %}
//Create a label with default text and specified ID.
var label1 = new voltmx.ui.Label({
    "id": "username"
});
{% endhighlight %}

To create a label with default text and unique platform generated internal ID:

{% highlight voltMx %}//Create a label with default text and unique platform generated internal ID.
var label1 = new voltmx.ui.Label();
voltmx.print(label1.id); // will print null
{% endhighlight %}

Default Skins and Skin Fallback
-------------------------------

When the widgets are created using single bucket constructor without the skins, then the default skin is applied to ensure that the widget look and feel is acceptable and also consistent across the platforms. f you do not apply any skin to the widget while creating it, at run time the below skins are applied to the widgets as default skins.

  
| Widget | Skin | Additional Skins |
| --- | --- | --- |
| Form2 | slForm | "titleBarSkin":"slTitleBar" |
| TextArea2 | slTextArea |   |
| TextBox2 | slTextBox |   |
| HBox | slHbox |   |
| Button | slButtonGlossBlue | "focusSkin": "slButtonGlossRed" |
| CheckBoxGroup | slCheckBoxGroup |   |
| ListBox | slListBox |   |
| Label | slLabelSk |   |
| RadioButton | slRadioButtonGroup |   |
| Camera | slCamera |   |
| ImageGallery2 | slImageGallery |   |
| Phone | slPhone |   |
| PickerView | slPickerView |   |
| Switch | slSwitch |   |
| ScrollBox | slScrollBox |   |
| Line | slLine |   |
| Link | slLine |   |
| RichText | slRichText |   |
| Calendar | slCalendar |   |
| Video | slVideo |   |
| ComboBox | slComboBox |   |
| Popup | slPopup |   |
| SegmentedUI2 |   | "rowSkin":"seg2Normal", "rowFocusSkin":"seg2Focus" "sectionHeaderSkin":"sliPhoneSegmentHeader" |
| HorizontalImageStrip2 | Borderskin |   |
| TabPane |   | "activeSkin":"tabCanvas","inactiveSkin": "tabCanvasInactive" |
| Slider |   | "leftSkin":"slSliderRightBlue", "rightSkin":"slSliderRightBlue" |
| DataGrid |   | "headerSkin":"slDataGridHead", "rowNormalSkin":"slDataGridRow", "rowFocusSkin":"slDataGridFocusedRow", "rowAlternateSkin":"slDataGridAtAltRow" |

