                               


Platform Specific Limitations
=============================

This section lists the limitations, properties or the widgets not supported by platforms.

iOS Limitations
---------------

Following are the limitations of iOS platform:

### Flex Layout

*   Touch events will not work for the part of the widget that is outside the parent’s boundaries when clipBounds property of the parent is set to false.
*   Dimensions of Switch and PickerView widgets are dictated by underlying SDK and might differ from the values specified through width and height properties.
*   Widget shadows won’t work as of now. Place the widget inside a FlexContainer and configure shadows for the FlexContainer instead. Also clipBounds property of the flex container should be set to false.
*   Scrolling events of FlexScrollContainer will not work if a scrollable widgets like SegmentedUI or Map with scrolling, in the same direction as FlexScrollContainer is present.
*   For contentSize property, both width and height must be specified. Otherwise it will lead into undefined behaviors.
*   Touch events will not work if the touch is started on the part of the widget, which is outside the parent’s boundaries when the clipBounds is false.
*   If two widgets are overlapping, then if the widget with higher zIndex has not registered for any touch/click events then below widget will not get the events even in the overlapped region.
*   Switch widget will have constant width and height.
*   Multiple, simultaneous innovations of the removeAt or removeSectionAt methods results in undefined behavior.

### Gesture Limitations Using Flex Layout

*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

Android Limitations
-------------------

Following are the limitations of Android platform:

### Flex Layout

*   If the height is given to a segment in the constructor itself, then groupCells property will not work for segment inside FlexContainer.
*   clipBounds property for Map and Browser widgets will not work during animation, because the rendering happens in native openGL using GPU.
*   zIndex property will not work for TabPane and DataGrid widgets.
*   Android OS native theme skinning comes with some transparent pixels in the background image. Due to which even if left and top are specified as zero (0) without applying any skin, you will observe some gap from the parent containers left and top for the below widgets:
    *   Button
    *   Check box
    *   Label
    *   Radio Group
    *   RichText
    *   Slider
    *   TextBox
    *   Camera
    *   Phone
*   Slider widget placed inside horizontal scroll container (FlexScrollContainer or ScrollBox), then you will not be able to slide because of double scrolling issue.
*   skin set to group widgets is applied to each individual item. Thus it appears as if the widget has not occupied the given height though it actually occupies. This can be verified by placing any other widget below it.
*   Whenever a Text-Area/Text-Box widget gets focus, Android OS tries to bring Text-Area/Text-Box into visible region. Bringing the widget into the visible region depends on the container scroll direction. That is, if the scroll direction is horizontal, the Text-Area/Text-Box is brought into visible region by scrolling in horizontal direction, similarly with vertical direction also.
    
    For instance, there is an HBox container widget with 150 percent width. An Image Widget is placed in this container widget, which occupies 80 percent of container’s width. A TextBox Widget is added in the container widget, beside the Image Widget. As the Image Widget occupies 80 percent of the container, the TextBox Widget goes beyond the screen width horizontally and is not visible. When this TextBox is in focus, Android OS brings the TextBox into visible region by scrolling in horizontal direction.
    
*   By default, TextBox/TextArea widget added to the Flex Form gets focus when this form gets rendered.
    
*   As the number of Flex containers with auto grow increase in a form, it will lead to poor performance in rendering the UI. In this case, the UI goes through a several measure cycles to arrive at the exact dimensions and positioning of a widget on the screen.
    
*   If you use a deep layout hierarchy, it leads to poor UI rendering. This is Android native behavior. Volt MX Iris recommends that you use a flat layout hierarchy.
    

### Gesture Limitations Using Flex Layout

*   onTouchStart, onTouchMove, and onTouchEnd events will not work on Map, Browser, and group widgets.
*   For contentSize property both width and height must be specified. Otherwise, it will lead into undefined behaviors.
*   Scroll container can be scrolled only till the end of the content and over scrolling is not possible. Thus, if the x and y values are given to setContentOffset exceed the actual scrollable content, then it will scroll only till the end of the content. For example, if the total content width is 150% and the content off set given to x is 100% then it will scroll only 50% to get the remaining content into the view port.
*   Touch events will not work for the part of the widget which is outside the parent’s boundaries when the clipBounds is false.
*   In devices with Android OS Version less than 4.2, zIndex is respected in drawing order only. But touch events are propagated in the order of widget indices present in the parent. Thus, even though a widget has a higher zIndex it will not receive touch events if it is not the last widget among the siblings.
*   If two widgets are overlapping, then if the widget with higher zIndex has not registered for any touch/click events then the widgets present below it, will get the events in the overlapped region also.
*   During horizontal scroll, if the direction is changed to vertical (in more than 45 Degrees) without raising the finger then the events will be consumed by any other widget in the parent hierarchy which can scroll vertically.
*   If the Form has enableScrolling as true, then if any child widgets registered for touch events or gestures, will not receive the desired events as the Form consumes events in vertical direction. But same will work in horizontal direction.
*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

Desktop Web Limitations
-----------------------

This section lists the properties that are not supported by the Desktop Web platform.

1.  ComboBox and ListBox, skin styles "Transparent" and "One Color" are supported in background color tab.
2.  ComboBox and ListBox, browser does not support if the properties defined in font tab and border are different for **skin** and **focusSkin**.
3.  On Firefox browser, TextBox and TextArea widgets does not support percentage (%) based padding, while other browsers does support.
4.  For all widgets in Internet Explorer 7 and 8, transparency ( border/font) is not supported for skin.
5.  On safari browser, ListBox and ComboBox widgets does not support padding.
6.  Rounded Corners will not work for all widgets in Internet Explorer 8 because of border-radius property is not supported in Internet Explorer 8 and its lower versions.
7.  Vertical split and Horizontal split will not work for all widgets in Internet Explorer 9 and its lower versions.
8.  For non-modal popups (isModal = false), popup transparency (transparencyBehindThePopup) property is not applied as the background widgets are accessible to the user.
9.  A valid calendar year selection range is from 1900 to 2099. If you select an year beyond the range shows an alert message (you can customize this error message).
10.  In Internet Explorer 8 and below browsers do not support all geolocation APIs.
11.  focusSkin applied to the container widgets ( like HBox, VBox, Segment ) is not inherited by the inner widgets in IE browsers (IE8, IE9, IE10). To overcome this apply focusSkin at every widget inside the container widget.
12.  For ScrollBox and TabPane widgets, angle background Multi Step Gradient is not supported.
13.  Desktop Web platform does not support browser (Internet Explorer 8 ) running in compatibility mode.
14.  Vertical gradient and Horizontal gradient are supported for all widgets in Internet Explorer 8 and above versions.
15.  Preview of map widget is not supported.
16.  On Internet Explorer browsers, focusSkin applied to the widgets CheckBox and RadioButton will work on click of text, but not on icon.
17.  For Browser widget, Desktop Web platform supports BROWSER\_REQUEST\_METHOD\_GET option only.
18.  Video widget in print API is not supported in Firefox browser.
19.  To apply focusSkin for dynamically created widgets or cloned widgets, assign focusSkin dynamically after adding the widget to the form hierarchy.
```
formid.widgetid.focusSkin = "skinname";
```
20.  To apply hoverSkin for dynamically created widgets or cloned widgets, assign hoverSkin dynamically after adding the widget to the form hierarchy.
```
formid.widgetid.hoverSkin = "skinname";
```
21.  In Desktop Web platform, only left, right, and center alignment options can be applied to the content. This limitation is applicable for all widgets.
    
22.  For Browser widget, resetting of URL does not work.
23.  In Desktop Web platform, nested containers in a non-percentage HBOX are not supported.

SPA Limitations
---------------

This section lists the properties that are not supported by the SPA platform.

*   focusSkin is not supported in Android devices.
*   For Horizontal Image strip, the stripview and slot view are not supported. If the images are of different size, It is mandatory to mention the width and height property. Else, the alignment of the images may get disturbed on the screen.
*   The property secureTextEntry for textarea is not supported in IE (desktop and mobile).
*   HBox position attribute is not supported in SPA (mobile and desktop). Instead use for header / footer to dock elements.
*   showLoadingScreen() should be preferred over blockedUI, as blockedUI cannot cater to multiple service calls which may be either chained or nested depending upon the application logic.
*   A valid calendar year selection range is from 1900 to 2099. If you select an year beyond the range shows an alert message (you can customize this error message).
*   On SPA (Windows devices) platform, focusSkin applied to the widgets Calendar, ListBox, and SegmentedUI is not inherited by the inner widgets in IE browsers (IE8, IE9, IE10). To overcome this apply focusSkin at every widget inside the container widget.
*   Preview of map widget is not supported.
*   On Windows device browsers, focusSkin applied to the widgets CheckBox and RadioButton will work on click of text, but not on icon.
*   For Browser widget, SPA platform supports BROWSER\_REQUEST\_METHOD\_GET option only.
*   On SPA platform, <script> tag is not supported.