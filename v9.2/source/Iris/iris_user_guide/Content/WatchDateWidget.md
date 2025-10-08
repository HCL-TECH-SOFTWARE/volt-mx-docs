                           


Date Widget for Watch
=====================

The Date widget can display a date, a time of day, or both. It does not have an **Actions** tab.

Click any of the following to learn about the properties found on the tabs of the Date widget.

[Look Tab](#look-tab)

[Skin Tab](#skin-tab)

[Date Tab](#date-tab)

[Review Tab](#review-tab)

Look Tab
--------

On the **Look** tab, you define properties and behaviors related to a Date widget's appearance and position. The following sections describe each of its properties.

![](Resources/Images/WatchDateWdgtLookTab.png)

### ID

Denotes the name of a widget. When a widget is added to a form, a unique name is assigned to the widget. You can rename a widget by entering a new name in the **ID** text box.

> **_Note:_** You can also rename a widget from the Project Explorer by right-clicking a widget, and then clicking **Rename**.

### Visible

Controls whether or not the user of the app can see the widget.

*   To make a widget visible, click **On**.
*   To make a widget invisible, click **Off**.

### Render

Defines whether a widget appears on a specific platform. Currently, the Watch channel supports only the Apple Watch Native and HTML5 SPA platforms. Clicking the Render property's **Edit** button opens the **Render Platforms** dialog box.

![](Resources/Images/WatchRenderProperty.png)

Clear the check box of the platforms for which the widget should not be rendered.

**The Difference between Visible and Render**

*   When a Widget is _not_ rendered for a platform, it implies that the widget is hidden from that specific platform.
*   Whereas, when a widget is set as invisible, it implies that the widget is available, but is invisible. This feature is useful when you wanted to display a widget based on certain conditions.

### Widget Align

The Widget Align property specifies how a widget's boundaries are aligned with respect to its parent. The following alignment options are available:

**Content Alignment**

<table style="margin-left: 0;margin-right: auto;"><colgroup><col style="width: 69pt;"> <col style="width: 352pt;"></colgroup><tbody><tr><td><img src="Resources/Images/WatchHorizAlignmentLeft.png"></td><td>Aligns the left edge of the content with the left edge of the widget.</td></tr><tr><td><img src="Resources/Images/WatchHorizAlignmentCenter.png"></td><td>Aligns the horizontal center of the content with the horizontal center of the widget.</td></tr><tr><td><img src="Resources/Images/WatchHorizAlignmentRight.png"></td><td>Aligns the right edge of the content with the right edge of the widget.</td></tr></tbody></table>

**Widget Alignment**

<table style="margin-left: 0;margin-right: auto;"><colgroup><col style="width: 69pt;"> <col style="width: 352pt;"></colgroup><tbody><tr><td><img src="Resources/Images/WatchHorizAlignmentLeft.png"></td><td>Aligns the left edge of the widget with the left edge of its parent.</td></tr><tr><td><img src="Resources/Images/WatchHorizAlignmentCenter.png"></td><td>Aligns the horizontal center of the widget with the horizontal center of its parent.</td></tr><tr><td><img src="Resources/Images/WatchHorizAlignmentRight.png"></td><td>Aligns the right edge of the widget with the right edge of its parent.</td></tr><tr><td><img src="Resources/Images/WatchVertAlignmentTop.png"></td><td>Aligns the top edge of the widget with the top edge of its parent.</td></tr><tr><td><img src="Resources/Images/WatchVertAlignmentCenter.png"></td><td>Aligns the vertical center of the widget with the vertical center of its parent.</td></tr><tr><td><img src="Resources/Images/WatchVertAlignmentBottom.png"></td><td>Aligns the bottom edge of the widget with the bottom edge of its parent.</td></tr></tbody></table>

### Width

Width determines the width of the widget as measured along the x-axis.

Following are the options that can be used as units of width:

*   **%.** Specifies the values in percentage relative to the parent dimensions.
*   **Dp.** Specifies the values in terms of device independent pixels.
*   **Preferred.** When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

### Height

Height determines the height of the widget as measured along the y-axis (height of the parent). You can use any of the following options:

*   **%.** Specifies the values in percentage relative to the parent dimensions.
*   **Dp.** Specifies the values in terms of device independent pixels.
*   **Preferred.** When this option is specified, the layout uses preferred height of the widget as height and preferred size of the widget is determined by the widget and may varies between platforms.

Skin Tab
--------

A widget’s appearance is defined by the skin that is applied to it. Every widget has a skin, even if it’s just the Volt MX Iris default skin. Skins give you the ability to establish visual continuity in your app. On the **Skin** tab, you can select to use a specific skin for your widget. In addition, you can configure the widget's background and font.

In the Mobile, Tablet, and Desktop channels, a widget may have a number of states, such as Normal (when it's not being interacted with), Focus (e.g. when it's been tabbed to), or Pressed. However, the Watch channel has only one state: Normal.

![](Resources/Images/WatchDateWdgtSkinTab.png)

### General

Under the General section of the **Skin** tab, you can change the name of the skin currently applied (if it's not one of the default skins), or you can select from the other available date skins by clicking the magnifying glass icon next to the **Name** text box.

#### Platform

In channels that support multiple platforms, it's possible to fork a skin by clicking the Platform ellipsis button ![](Resources/Images/PropertyEllipsisButton.png), and then selecting the platforms that you want to fork the widget to. In the case of the Watch channel, currently the only platform available is Watch (Native). For more information, see [Forking](Forking.md).

### Fonts

Under the Fonts section of the **Skin** tab, you can set the following properties.

<table style="mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');margin-left: 0;margin-right: auto;" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 80px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 540px;"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Property</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1"><b>Description</b></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Color</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Sets the color that you want the font to be. You configure the hue you want by clicking the square color icon and dragging the cursor to the color of your choosing</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Opacity</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Sets the degree to which the background color is transparent or opaque. By default, the opacity is set to 100, making the background completely opaque with no transparency. However, if you want the background to have a degree of transparency, you can decrease its opacity. To do so, type a value between 0 and 100 in the <b>Opacity</b> text box, or drag the opacity slider to the degree of opacity that you want.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Size</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">You can set the font size by pixels (0 to 600) or as a percentage (0 to 600) of the baseline font size of 28 pixels.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Font Family</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Currently, the System font is the only font family supported by <span class="MyVariablesDocName2">VoltMX Iris</span> for the Date widget.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Weight</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">You can set the weight of the font either to Normal, which is the default, or Bold.</td></tr></tbody></table>

For more information, see [Understanding Skins and Themes](Customizing_the_Look_and_Feel_with_Skins.md).

Date Tab
--------

On this tab, you configure properties unique to the Date widget.

![](Resources/Images/WatchDateWdgtDateTab.png)

**Opacity.** Sets the degree to which the widget is transparent or opaque. By default, the opacity is set to 100, making the widget completely opaque with no transparency. However, if you want it to have a degree of transparency, you can decrease its opacity. To do so, type a value between 0 and 100 in the **Opacity** text box, or drag the opacity slider to the degree of opacity that you want.

**Lines.** Sets the maximum number of lines allowed for the label text. Text that does not fit on the specified number of lines is truncated.

**Min-Scale.** Sets the amount by which the font may be scaled to accommodate text. Values must be 100% or less. Specifying a value of 0 causes the Apple WatchKit to use the default scaling behavior, which allows the font to be scaled to no less than 80% of the original font size.

**Format.** Sets the manner in which the date and time is displayed. The following table outlines the available formats. These values are case-sensitive. You can mix and match these date and time values however you wish, such as `MM/dd/yyyy` or `yy-d-M`.

<table style="mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;border-left-style: solid;border-left-width: 2px;border-left-color: #a9a9a9;border-right-style: solid;border-right-width: 2px;border-right-color: #a9a9a9;border-top-style: solid;border-top-width: 2px;border-top-color: #a9a9a9;border-bottom-style: solid;border-bottom-width: 2px;border-bottom-color: #a9a9a9;margin-left: 0;margin-right: auto;" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 63px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 90px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 485px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 142px;"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Element</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Value</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Description</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1"><b>Example</b></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Day</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">ddd</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays days 1-9 with one digit and 10-31 with two digits.Displays all days with two digits, placing a zero in front of days 1-9.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1207&nbsp;&nbsp;&nbsp;&nbsp;12</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Month</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">MMM</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays months 1-9 with one digit and 10-12 with two digits.Displays all months with two digits, placing a zero in front of months 1-9.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1003&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Year</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">yy or YYyyyy or YYYY</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays the year using its last two digits.Displays the year as a four digit number.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">162016</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Hour</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">hHhhHH</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays in 12-hour time hours 1-9 with one digit and 10-12 with two digits.Displays in 24-hour time hours 1-9 with one digit and 10-12 with two digits.Displays in 12-hour time all hours with two digits, placing a zero in front of hours 1-9.Displays in 24-hour time all hours with two digits, placing a zero in front of hours 1-9.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">808</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Minute</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">mm</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays all minutes with two digits, placing a zero in front of minutes 1-9.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">21</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Seconds</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">ss</td><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Displays all seconds with two digits, placing a zero in front of seconds 1-9.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">03</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Other</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">avGZ</td><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Displays either AM or PM, depending on the value in the Preview.Indicates either Standard or Daylight Time, depending on the time of year.Indicates AD (anno Domini).Indicates the hour in Greenwich Mean Time.</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">PMEastern Standard TimeAD-0400</td></tr></tbody></table>

  
**Preview.** Used for entering a placeholder value to see how the date and time are rendered in the Date widget on the Iris Canvas.

Review Tab
----------

On this tab, you can add and review notes. With the Review Notes feature, you can capture feedback from users who are evaluating your app design. Such requirements capturing helps ensure that the design of your app successfully meets the requirements of potential users. The Review Notes feature supports rich text formatting such as font type and size, paragraph alignment, numbered and bulleted lists, block quotes, and even tables.

For more information, see [Capture Product Requirements with Review Notes](CapProdReqsWithNotes.md).
