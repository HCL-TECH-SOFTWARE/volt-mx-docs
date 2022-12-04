                          

Volt MX  Application Design and Development Guidelines: [Flex Layout Guidelines](Flex_Layout_Guidelines_Overview.md) > Animation & Flex Layout Limitations

Animation and Flex Layout Limitations
-------------------------------------

Following are the limitations applicable to iOS, Android, SPA, and Windows platforms using widget level animations: 

*   If width, height related parameters are explicitly given as negative values or resulted in negative values due to implicit calculations, then consistent cross platform behavior cannot be assured.
*   The dimensional properties only indicate the values that developers set, but the layout engine will determine final frames and the animation happens between the final computed values.
*   When widgets overlap, z-index specified along with the order in which the widgets added will determine the overlapping order.

*   Animation properties in the animation steps must not be skipped in the middle for cross platform consistent animations.
    *   For example, property ‘x’ is present in step 0 and not present in step 50 and again present in step 100 may lead to inconsistent results. However, property ‘x’ present in step 0, 50 and not being present in step 100 is perfectly fine.

*   Calling rotate(), scale(), and translate() multiple times will overwrite the previous values but not club or sum. For example, rotate(45); rotate(50) is not equal to rotate(105), instead, it will be rotate(50).

*   If scale, rotate, and translate are in a transform object, irrespective of the invocation order of operations, the method voltmx.ui.makeAffineTransform applies the transform in the following order:
    *   Scale
    *   Rotate
    *   Translate

*   Layout parameter animations:
    
    *   Properties in the animation definition are interpolated between steps for smooth animation. If a property is not present in the intermediate steps then the property is not carried forward but interpolated between steps where the property is present. This rule of interpolation is applicable iOS, SPA, and Windows platforms for all properties except for layout parameters.
    *   In iOS, SPA, and Windows platforms for every step, resultant frame is calculated from the layout properties mentioned for the step. If layout parameters are not mentioned for the step then layout parameters are carried forward from the previous steps.
    *   This essentially mean in case of iOS, SPA, and Windows platforms, if layout parameters are not mentioned at a given step or layout parameters are mentioned in such a way that it does not yield any frame changes compared to the previous step then there will not be any visible layout related animations occurring between the steps.
    
    *   Android platform follows property based animation where there is no carried forward of layout parameters. If a layout property is not mentioned in the intermediate steps, then the property is interpolated between the steps where ever the layout property is present.
*   Background color animation:
    *   The animation on background color works only when the backgroundColor property is set before applying an animation definition.
    *   Initial value of backgroundColor has to be specified explicitly. If not, platform will not deduce the values from the existing skin and will lead to undefined behavior.
    *   For the background color animations to work, the skin configured for the widget should not have background type as multi step gradient or image. It has to be single color background.
*   In iOS and Android platforms, matrix multiplication is used between the steps to arrive at the resultant transformation animation. This means in the final effect you may not see the effects of individual transform operations such as scale, rotate, and transform.
*   In iOS and Android platforms, the animation effect applied to the widget during the steps would be a cumulative effect of all the transformations applied together. The cumulative effect would be similar to matrix multiplication applied as per the defined order.  
    For example, for any widget when 0-90 degrees rotate animation is applied along with scale and translate animations, the 0-90 degrees rotation of the widget is not seen individually because of the cumulative animation properties applied.  
    For any widget, when scale (0, 0) animation is applied along with combination of translate and rotate animations will result in matrix multiplication as ‘0’. In this case, the rotation is not seen initially because of the multiplication results in zero.
*   In Desktop and SPA platforms, height and width transformation animation is not supported on the Switch widget. Also, Min/Max Height/Width animations cannot be applied on the Switch widget.
*   When FlexContainer is added dynamically to Box, Form or Popup with layoutType as voltmx.flex.VBOX\_LAYOUT, the height of the FlexContainer is calculated based on parent's width (i.e. Box, Form, and Popup).  
    For example, if FlexContainer is added to Popup and its height is defined as 100 percent, then FlexContainer Height is calculated based on Popup width. In this case FlexContainer height will be 100% of Popup's width.
    
*   3D transformations will not result into any kind of layout changes after the animation is complete.
*   When both 3D and 2D transforms are used together, which ever is applied latest will override the older transform.  
    

Following are the limitations for Animations, Gestures, and Flex Layout on the respective platforms.

*   [iOS Limitations](#ios-limitations)
*   [Android Limitations](#android-limitations)
*   [Windows Limitations](#windows-limitations)
*   [SPA Limitations](#spa-limitations)

iOS Limitations
---------------

Following are the limitations of iOS platform:

### Flex Layout

*   Touch events will not work for the part of the widget that is outside the parent’s boundaries when clipBounds property of the parent is set to false.
*   Dimensions of Switch and PickerView widgets are dictated by underlying SDK and might differ from the values specified through width and height properties.
*   Widget shadows won’t work as of now. We recommend you to place the widget inside a FlexContainer and configure shadows for the FlexContainer instead. Also clipBounds property of the flex container should be set to false.
*   Scrolling events of FlexScrollContainer will not work if a scrollable widgets like SegmentedUI or Map with scrolling, in the same direction as FlexScrollContainer is present.
*   For contentSize property, both width and height must be specified. Otherwise it will lead into undefined behaviors.
*   Touch events will not work if the touch is started on the part of the widget, which is outside the parent’s boundaries when the clipBounds is false.
*   If two widgets are overlapping, then if the widget with higher zIndex has not registered for any touch/click events then below widget will not get the events even in the overlapped region.
*   Switch widget will have constant width and height.

### Animation Limitations Using Flex Layout

*   6.0 specific animation APIs are applicable only to flex widgets.
*   The animations on the CheckBox and PickerView width and height will not work.
*   If the widget has multi colored focus or non-focus skin (gradients, multi-step gradients, Vertical split), then backgroundColor animations will not work.
*   In Horizontal/Vertical flow flex layout no two widgets can have explicit animations. They can be mutually exclusive. If they are explicitly called on all/multiple widgets, the behavior is undefined.  
      
    
    *   For example, say there are two buttons button1 and button2 inside a flex layout container with layoutType as Horizontal flow.
    
    *   In this scenario, the user cannot call button1.animate(…) followed by button2.animate(…). You have to call animate API only on either button1 or button2. The rest of the widgets will get implicit animations.
*   If an animation duration is zero (0), then a flicker may appear.
*   If an animation has layout properties combined with non-layout properties, then a small flicker may appear before the animations.
*   Browser widget with non integer width or height values, may result in a black line appearing at the corners.
*   API Level 6000 flag is generated by Volt MX Iris is mandatory for the animations to work in Volt MX Iris 6.0.
*   The keyframe animation is not supported for headers and footers.
*   3D animations are not supported for Header and Footer in the iOS platform.
*   For Switch Widget, height and width animations are not supported on iOS platform.

### Gesture Limitations Using Flex Layout

*   Badge APIs on the widgets will not work when widgets are placed in FlexForm. Badge functionality can be achieved using zIndex property.
*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

### Segment Animation Limitations

*   For the AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   For the onRowDisplay method, VISIBLE animations will be called only when a row is brought to visible region due to the ADD/REMOVE operation on the Segment widget.
*   Calling the removeAt/removeSection At methods multiple times simultaneously unexpected behavior results. Because of this, the onRowDisplay method may be called in inconsistent order.
*   Z-index is low for the row added earlier and high for the row added later during the animation.

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
    

### Gesture Limitations Using Flex Layout

*   onTouchStart, onTouchMove, and onTouchEnd events will not work on Map, Browser, and group widgets.
*   For contentSize property both width and height must be specified. Otherwise, it will lead into undefined behaviors.
*   Scroll container can be scrolled only till the end of the content and over scrolling is not possible. Thus, if the x and y values are given to setContentOffset exceed the actual scrollable content, then it will scroll only till the end of the content. For example, if the total content width is 150% and the content off set given to x is 100% then it will scroll only 50% to get the remaining content into the view port.
*   Touch events will not work for the part of the widget which is outside the parent’s boundaries when the clipBounds is false.
*   In devices with Android OS Version less than 4.2, zIndex is respected in drawing order only. But touch events are propagated in the order of widget indices present in the parent. Thus, even though a widget has a higher zIndex it will not receive touch events if it is not the last widget among the siblings.
*   If two widgets are overlapping, then if the wi22kdget with higher zIndex has not registered for any touch/click events then the widgets present below it, will get the events in the overlapped region also.
*   During horizontal scroll, if the direction is changed to vertical (in more than 45 Degrees) without raising the finger then the events will be consumed by any other widget in the parent hierarchy which can scroll vertically.
*   If the Form has enableScrolling as true, then if any child widgets registered for touch events or gestures, will not receive the desired events as the Form consumes events in vertical direction. But same will work in horizontal direction.
*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

### Animation Limitations Using Flex Layout

*   6.0 specific animation APIs are applicable only to flex widgets.
*   Animations will not be smooth if high resolution images are used as part of the skin or source to image widgets.
*   It is suggested to use 9 patch images (drawables) wherever images are being used. I.e. as part of skins or source to image widget.
*   Animations will not be smooth if there are a hierarchy of views.
*   For achieving best animations results, refer to the below link:
    
    [http://developer.android.com/guide/topics/graphics/hardware-accel.html#tips](http://developer.android.com/guide/topics/graphics/hardware-accel.html#tips)
    
*   In the Android platform, you cannot apply both 2D and 3D transformations to the widgets simultaneously.

### Segment Animation Limitations

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   Orientation change when an animation is playing would end the animation and operation immediately.
    
*   Animation and operations may end immediately if setting or calling any method, which leads to a complete refresh of Segment. For example, changing `widgetdatamap` while animation is playing cancels the animation.
    

Windows Limitations
-------------------

Following are the limitations of Windows platform:

### Flex Layout

*   Setting the enableScrolling property to false on the FlexScrollContainer will not retain the scroll position. The vertical and horizontal offset will be reset to 0,0 respectively. This is an underlying OS limitation.
*   ScrollToWidget and ScrollToOffSet APIs will not work when enableScrolling is set to false or scrollDirection is set to None. This is an underlying OS limitation.
*   Setting the clipBounds property to false on flexcontainer with Free form layout may not work if flex container has borderwidth. It automatically clips.
*   convertPointFromWidget and convertPointToWidget APIs are not supposed to be called in doLayout of any widget since this might cause application hang due to thread conflicts.
*   OnScrolling event will be triggered with huge delays. Hence any UI updates in onScrolling may not yield to smooth UI changes.
*   Calling forceLayout() on a container triggers doLayout() on grandchild widgets which has a change in location or size but not on all grandchildren widgets.
*   Though opacity is set to complete transparent, all events are consumed on the same widget and not the widget which is behind the original widget. Complete opaque doesn’t mean that events to pass through it.
*   Any widget goes out of Flex container which has clipBounds set to true, may appear with its text but not with skin. This is an OS limitation.
*   When complex forms have to be designed, it is suggested to turn off visibility for the widgets which are outside the view port or not required. Enable the visibility when required. This causes application to load faster.
*   Switch widget will have constant width and height.
*   Windows platform does not support FlexContainer's clipBounds property for Browser and Map Widgets.
*   Segment widget with autogrowMode is not supported inside the FlexContainer with autogrowMode.
*   If the scrolling direction for ScrollContainer is defined as both horizontal and vertical, the ContentOffset property is respected to both X and Y coordinates. If the scroll direction is defined as vertical, it is respected only to Y coordinate but not to X coordinate, and vice versa.
*   In Tablet with Windows 8.1 platform, when Clip Bounds is enabled for a FlexContainer with corner radius, the area after the radius is not clipped. The child widget of the FlexContainer is still shown in rectangle shape.  
    ![](Resources/Images/ClipBounds_Windows_Limitation.PNG)

### Gesture Limitations Using Flex Layout

*   Gesture conflicts should be avoided in application code such as Scroll Container in another scroll container with the same scroll direction enabled. For example, Slider, TabPane (Pivot and Panorama), Switch like scrollable widgets inside horizontal flex scroll container.
*   Touch events will not work on ScrollBox and Segmented UI (table view with scrolling enabled).
*   When both Tap and Double Tap gestures are set, both will trigger for each double tap. Tap is not ignored.
*   Do not assign low level touch events on clickable widgets to achieve click behavior.
*   Do not assign both low level touch events and gestures (which may conflict with touch events) on same widget.
*   Map and Browser widgets are not supposed to be kept in Scroll container as it may lead to gesture conflict. Any such gesture conflict may cause application rejection from Microsoft Store.
*   onTouchMove event on any widget is executed asynchronously. Hence drag may not be smooth.
*   AddgestureRecognizer will add the event every time it is called, hence same event may trigger several times if event is registered multiple times.
*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

### Animation Limitations Using Flex Layout

*   % values for translate() in transform will not work. The Values passed as “100dp”, “100px”, “50%”, “90” will not work. The valid value will be like 90 etc.
*   Calling rotate(), scale() and translate() multiple times will overwrite the previous values but not club or sum. Ex: rotate(45); rotate(50) is not equal to rotate(105), instead, it will be rotate(50).
*   Skew effect observed in iOS and SPA will not happen for some animations (ex: scale in combination with rotate) in Windows 8.1 and Windows Phone 8/8.1.
*   If scale, rotate, and translate are in transform object, the sequence applied in Windows Phone 8/8.1 and Windows 8.1 will be as follows irrespective of the order mentioned in transform.
    
    *   Scale
    *   Rotate
    *   Translate
*   Animation results may not be matching with other platforms when 2 dimensional or 2 positional properties are mentioned in step configuration for one widget when the values are given in percentage. Same is the case when parent and child are animated.
*   Animation may start little slower in all windows channels when more steps are provided with more percentage values.
*   Slight flickering of child widgets may happen when a child has % relationship with parent container and parent container is animating.
*   Animation smoothness of any container depends on:
    
    *   Number of direct children
    *   Number of children with more levels of hierarchy
    *   Number of children with % relationship
    *   Images and their size.
*   Windows always suggests to use transformation for animations instead of animating layout properties (Positional and dimensional).

### Segment Animation Limitations

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   onRowDisplay method may not be supported on Windows 10.

SPA Limitations
---------------

Following are the limitations of SPA platform:

### Flex Layout

*   Setting enableScrolling property to false on Flex scroll container will not retain the scroll position and vertical and horizontal offset will be reset to 0,0 respectively. But if APILevel is 6000 then this will not reset to 0,0 respectively.  
    
*   onZoomStart, onZoomEnd, onZooming, and onDecelerationStarted are not supported in SPA.
*   zoomToRect and setZoomScale APIS are not supported in SPA.
*   doLayout is synchronous event in SPA unlike richclients.
*   In Windows SPA onScrolling events will be triggered with more gaps in touch points, because of this scrolling may not be smooth.
*   Though opacity is set to complete transparent, all events are consumed on the same widget and not the widget which is behind the original widget. Complete opaque doesn’t mean that events to pass through it.
*   Calling forceLayout() on a container triggers doLayout() on grandchild widgets which has a change in location or size but not on all grandchildren widgets.
*   When complex forms have to be designed, it is suggested to turn off visibility for the widgets which are outside the view port or not required widgets. Enable the visibility when required. This causes application to load faster.
*   Scroll events will not propagate in segmented UI, TabPane and other scrollable widgets which has containerHeight property set.
*   DataGrid height is not fixed in SPA, it goes by its content.
*   After text/data change in any widgets, widget dimension will get updated only after forceLayout() api on parent container or in next layout cycle.
*   In SPA, implicit forceLayout will not happen at the end of the closure, developer has to call forceLayout to get changes reflected.
*   Implicit forceLayout will happen in case of visibility change or changes in widget hierarchy (add/remove of widgets).
*   Scrolling events are not fired after the touch release till FlexScrollContainer is decelerating. onScrollEnd event will be fired only after deceleration is complete.
*   Shadow in focus skin for a widget will not work if widget is placed in FlexContainer or FlexScrollContainer.
*   When you set contentOffset that is less than containerWidth/containerHeight, then offset point will come to view port, but will not add any extra space to get the offset point to top right corner of container.

### Gesture Limitations Using Flex Layout

*   Gesture conflicts should be avoided in application code such as Scroll Container in another scroll container with same scroll direction enabled.
*   Touch events will not propagate in segmented UI, datagrid and other widgets which has containerHeight property set, as this will conflict with touch events to handle scroll in these widgets.
*   Pan, pinch & zoom are supported in iPhone SPA (IOS 7 and above) only, but not in other SPA platforms.
*   When both Tap and Double Tap gestures are set, both will trigger for each double tap. Tap is fired twice (one for each tap) on double tap.
*   It is not advised to assign both low level touch events and gestures (which may conflict with touch events) on same widget.
*   Map is not supposed to be kept in Scroll container since it might lead to gesture conflict.
*   onTouchMove event on any widget is executed asynchronously. If there is complex operations in onTouchMove event then drag may not be smooth.
*   addGestureRecognizer will add the event every time it is called hence same event may trigger several times if event is registered multiple times.
*   In SPA Windows long press event is not supported.
*   For Switch widget on safari browser will have constant width and height. In case of SPA Android and SPA Windows Switch will have constant height, but width may vary. Any additional width and height, which is more than required may leave the empty space on the right, bottom, and or left, top side of the switch widget.
*   The events onTouchStart, onTouchEnd, and onTouchMove may not work or yield desired results when registered on scrollable widgets such as FlexScrollContainer, Map, SegmentedUI,TabPane, TextArea, and Browser. These widgets internally uses the lower level touch events to get the scrolling behavior and may conflict with the externally registered touch events. On other non scrollable widgets these lower level events get fired along with the existing events as per the widget behavior. For example, onClick on Button widget get fired along with touch events if touch events are registered with the Button.

### Animation Limitations Using Flex Layout

*   Default unit for input values in translate() API is dp. Other units are not supported.
*   Animation may start little slower in all windows channels when more steps are provided with more percentage values.
*   Slight flickering of child widgets may happen when child has % relationship with parent container and parent container is animating.
*   Animation smoothness of any container depends on:
    
    *   Number of direct children
    *   Number of children with more levels of hierarchy
    *   Number of children with % relations ship
    *   Images and their size.
*   If the widget skin contain gradient/multi gradient/image background then single color animation is not happening in SPA IPhone and SPA windows.
*   In SPA windows, if opacity is changed from 1 to 0 in animation, at the end of animation, widget may blink and start the next iteration. This is native Internet Explorer limitation.
*   If we apply animation on widget which is already animating then it cancels the previous animation, but widget model may not get updated with the final step configuration, even if fill mode is forward/both.
    
*   In the middle of the animation if you do the browser back, animation end event will not fire and widget model not update based on the animation fill mode.
*   Animations on Image widget may not be accurate. It depend on image size, image load time.
*   Positional and Dimensional properties are frame based animations. Whereas transform, background, opacity are Definition based animations. We are not deducing these properties from widget.
*   For a Map widget, if you perform animation with width or height related properties, then map widget may not get the new or updated map from google.
*   when you apply animation with combination of Rotate and Scale with Ease-In time function, the widget would flicker in IE browser.
*   In SPA, when rotate animation is more than 180 degrees for all widgets, the direction may vary with different combinations of Scale and/or Translate values in IE browser.
*   In Mac computers, full-page animation on Safari browser may not be as smooth as Chrome browser and there may be some flickering effect.
    
*   In the SPA platform, the rotate3D animation may differ in IE(10/11) browser when compared to Chrome, Firefox, and Safari browsers for few scenarios & axis-combinations. Start and end frames remain same across all browsers but the rotate animation path differ for IE browsers. Few such cases are rotate3D(150, 0,1,0), rotate3D(150,1,1,1), and rotate3D(210,1,0,1).
    

### Segment Animation Limitations

*   For AutoGrow Segment, animations will get applied even for the rows which are not in the visible area. This is applicable for all methods.
*   Calling the removeAt/removeSection At methods multiple times simultaneously unexpected behavior results. Because of this, the onRowDisplay method may be called in inconsistent order.
