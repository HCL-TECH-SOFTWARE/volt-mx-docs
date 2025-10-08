                          

Volt MX  Application Design and Development Guidelines: Platform Specific Limitations

Platform Specific Limitations
=============================

This section lists the limitations, properties or the widgets not supported by platforms.

Desktop Web Limitations
-----------------------

This section lists the properties that are not supported by the Desktop Web platform.

*   ComboBox and ListBox, skin styles "Transparent" and "One Color" are supported in background color tab.
*   ComboBox and ListBox, browser does not support if the properties defined in font tab and border are different for **skin** and **focusSkin**.
*   On Firefox browser, TextBox and TextArea widgets does not support percentage (%) based padding, while other browsers does support.
*   For all widgets in Internet Explorer 7 and 8, transparency ( border/font) is not supported for skin.
*   On safari browser, ListBox and ComboBox widgets does not support padding.
*   Rounded Corners will not work for all widgets in Internet Explorer 8 because of border-radius property is not supported in Internet Explorer 8 and its lower versions.
*   Vertical split and Horizontal split will not work for all widgets in Internet Explorer 9 and its lower versions.
*   For non-modal popups (isModal = false), popup transparency (transparencyBehindThePopup) property is not applied as the background widgets are accessible to the user.
*   A valid calendar year selection range is from 1900 to 2099. If you select an year beyond the range shows an alert message (you can customize this error message).
*   In Internet Explorer 8 and below browsers do not support all geolocation APIs.
*   focusSkin applied to the container widgets ( like HBox, VBox, Segment ) is not inherited by the inner widgets in IE browsers (IE8, IE9, IE10). To overcome this apply focusSkin at every widget inside the container widget.
*   For ScrollBox and TabPane widgets, angle background Multi Step Gradient is not supported.
*   Desktop Web platform does not support browser (Internet Explorer 8 ) running in compatibility mode.
*   Vertical gradient and Horizontal gradient are supported for all widgets in Internet Explorer 8 and above versions.
*   Preview of map widget is not supported.
*   On Internet Explorer browsers, focusSkin applied to the widgets CheckBox and RadioButton will work on click of text, but not on icon.
*   For Browser widget, Desktop Web platform supports BROWSER\_REQUEST\_METHOD\_GET option only.
*   Video widget in print API is not supported in Firefox browser.
*   To apply focusSkin for dynamically created widgets, assign focsuSkin dynamically after creating the widget.
```
formid.widgetid.focusSkin = "skinname";
```
*   To apply hoverSkin for dynamically created widgets, assign hoverSkin dynamically after creating the widget.
```
formid.widgetid.hoverSkin = "skinname";
```
*   In Desktop Web platform, only left, right, and center alignment options can be applied to the content. This limitation is applicable for all widgets.
    
*   For Browser widget, resetting of URL does not work.
*   In Desktop Web platform, nested containers in a non-percentage HBOX are not supported.

SPA Limitations
---------------

This section lists the properties that are not supported by the SPA platform.

*   focusSkin is not supported in Windows NTH and Android devices.
*   For Horizontal Image strip, the stripview and slot view are not supported. If the images are of different size, It is mandatory to mention the width and height property. Else, the alignment of the images may get disturbed on the screen.
*   Only static maps are supported on Windows Phone 7.5 and BlackBerry NTH.
*   The widgets Slider, Chart2D3D, and PickerView widgets are not supported by both the Windows and BlackBerry NTH devices.
*   Opacity should not be applied to form background for Windows Phone 7.5 and may lead to erroneous results.
*   The property secureTextEntry for textarea is not supported in IE (desktop and mobile).
*   HBox position attribute is not supported in SPA (mobile and desktop). Instead use for header / footer to dock elements.
*   showLoadingScreen() should be preferred over blockedUI, as blockedUI cannot cater to multiple service calls which may be either chained or nested depending upon the application logic.
*   setContext for popup, dockable header / footer /appmenu is not supported on Windows Phone 7.5 since it doesn't support absolute positioned elements.
*   A valid calendar year selection range is from 1900 to 2099. If you select an year beyond the range shows an alert message (you can customize this error message).
*   On SPA (Windows 8 and Windows Tablet devices) platform, focusSkin applied to the widgets HBox, VBox, Calendar, ComboBox, ListBox, and SegmentedUI is not inherited by the inner widgets in IE browsers (IE8, IE9, IE10). To overcome this apply focusSkin at every widget inside the container widget.
*   Multi Step Gradient is not supported for all widgets on Windows Mango (IE9) devices.
*   ScrollBox does not support Blur radius option for skins on BB and BB NTH devices.
*   Preview of map widget is not supported.
*   On Windows device browsers, focusSkin applied to the widgets CheckBox and RadioButton will work on click of text, but not on icon.
*   For Browser widget, SPA platform supports BROWSER\_REQUEST\_METHOD\_GET option only.
*   For calendar widget, font color for input cannot be changed for Windows Phone 7.5 (Mango) platform.
*   On SPA platform, <script> tag is not supported.
*   To apply focusSkin for dynamically created widgets, assign focsuSkin dynamically after creating the widget.  
```
formid.widgetid.focusSkin = "skinname";
```
*   On SPA (iOS devices) platform, when accessibility is set for FlexContainer, the FlexContainer's child widgets will not be focused. Only the FlexContainer Widget will be focused.
*   In SPA platform, only left, right, and center alignment options can be applied to the content. This limitation is applicable for all widgets.
    
*   For Browser widget, resetting of URL does not work.
*   In SPA platform, nested containers in a non-percentage HBOX are not supported.

Windows Kiosk
-------------

This section lists the properties that are not supported by Windows 7 Kiosk platform.

*   The widgets ObjectSelector3D, Phone, PickerView, Switch, MenuItem and Video are not supported.
*   As of today (10th, July 2013) Windows 7 Kiosk applications run only on Windows 8 PRO and not on Windows 8 RT.
*   The application icon that is set from Application Properties > Common > Desktop icon size should be multiple of 8 pixel and less than 256 pixel. For example, the icon image should be of size 8x8 or 16x16 px, it should be not 16x17 px.
*   Windows/Kiosk platform does not support Segment Pageview.
*   In the Kiosk platform, the panning mode (touch) happens only when scrolling direction is in both horizontal and vertical. Because to this, the Scroll Indicators are enabled based on the scroll direction.

BlackBerry 10
-------------

This section lists the limitations and properties that are not supported by BlackBerry 10 platform.

*   BlackBerry platform does not support the following widgets:  
      
    *   PickerView
    *   TabPane
*   Gradient skins are not supported on any widgets.
*   The BlackBerry 10 supports application version only if the format is specified as x.x.x (For example, 2.3.6). The Build generation fails if you specify any other version format.
*   Only three options (WIDGET\_ALIGN\_TOP\_LEFT, WIDGET\_ALIGN\_CENTER, and WIDGET\_ALIGN\_BOTTOM\_RIGHT) of the widgetAlignment is supported by respective widgets.
*   The layout property _hExpand_ is always _true_ for respective widgets and there is no effect when you set as _false_.
*   You application crashes- when an event is invoked dynamically by assigning a JSObject. For example, the below code will not work.
```
form.button.onClick = callback method()   
    //The callback method is a JSObject
```
*   In segmentedUI, you cannot change _sectionHeaderTemplate_ and _rowTemplate_ dynamically. For example, the below code will not work.
```
form1.segment1.rowTemplate = template1
```
*   In calendar widget, if you use the method _setenabled_, the date gets cleared and _validStartDate_ is displayed. If _validStartDate_ is not set then current date is displayed.
*   The property _focusSkin_ is not supported for TextBox widget.
*   The font style with underline is not supported for TextBox widget.
*   Skin font style with underline is supported only for widgets RichText and Link.
*   All BlackBerry 10 supported widget events are not writable.
*   Following are the Map widget limitations:  
      
    *   From Volt MX Iris, you must set the permission for access\_location\_service as _true_. To set access\_location\_service, navigate to Application Properties > Native > BlackBerry10, select access\_location\_services and click **Add >** and then click **Finish**.
    *   Your device location service setting must be on. To set device location service in your device, navigate to Device Settings > Location Services > turn on the location services.
    *   BlackBerry Native maps are supported, but map key and provider not applicable.
    *   The Map widget is available in the United States and Canada regions. It will not work in Asia Pacific region.
    *   The Map widget works with BlackBerry 10 OS version 10.0.9.2709 and above.
    *   If the network is slow, then rendering of the map is not smooth. The fonts and the user interface (UI) may be affected.
    *   For devices earlier than 10.1, a developer- specified or custom pin image is not displayed. Only BlackBerry 10 provided images can be displayed.
    *   Rendering of Map may takes 2 to 3 minutes or sometimes more than 5 minutes depending on your network.
    *   Templates for Map widget are not supported.
    *   The default pin is always shown by the BlackBerry 10 device.
    *   When a Map is loading you cannot display any alert messages as "Map is loading".
    *   Your application may crash when you perform any action while loading a map.
    *   Zoom level is decided by altitude. Hence user has to provide zoom level in terms of 1000. The default zoomlevel is 10000.
    *   Events associated with respective widgets are not writable.
*   Following are the CheckBox widget limitations:  
      
    *   By default the _itemOrientation_ of a CheckBox widget is set to vertical. Unlike other platforms, the BlackBerry 10 platform does not support the horizontal orientation.
    *   When you define a skin for normal skin or focus skin, the options font style, font size, font color are applied to the text of the CheckBox. They are not applicable to CheckBox image.
*   Following are the Button widget limitations:  
      
    *   Word Wrapping and Padding properties are not supported for Native button. Image button supports Word Wrapping.
    *   Rounded corner for borders and background is not supported. You can achieve this behavior using Image button.
    *   When you define a skin for normal skin or focus skin, the options font style, font size, font color are applied to the text of the button in Image Button. They are not applicable to Native Button widget.
*   Following are the ComboBox widget limitations:  
      
    *   Word Wrapping and Padding properties are not supported.
    *   Rounded corner for borders and background is not supported.
    *   Overriding the down arrow is not supported.
*   Following are the RadioButton widget limitations:  
      
    *   Word Wrapping and Padding properties are not supported.
    *   Rounded corner for borders and background is not supported.
    *   Overriding the default _ticked_ and _unTicked_ images is not supported.
      
    
*   Following are the Calendar widget limitations:  
      
    *   Word Wrapping and Padding properties are not supported.
    *   Rounded corner for borders and background is not supported.
    *   Grid calendar view is not supported.
    *   Skin is not supported for calendar widget.
