                           

You are here: Standard Events

Types of Application Events
===========================

There are two types of application events:

1.  [Standard Events](#standard-events)
2.  [Custom Events](#custom-events)

Standard Events
---------------

Volt MX  Foundry provides the following types of events for reporting:

*   FormEntry – Invoked when a form is entered in the application.
*   FormExit - Invoked when a form is exited in the application.
*   Touch – Touch event is extended to the below widgets along with button onclick.
    
    *   Widget: Flex Container/Scroll Container
        
        *   onClick
        *   onTouchStart (if registered)
        *   onTouchEnd (if registered)
    
    *   Widget: Segment
        *   onRowClick
    
    *   Widget: Button
        *   onClick
    
    *   Widget: Image
        *   onTouchStart (if registered)
        *   onTouchEnd (if registered)
    
    *   Widget: Switch
        *   onSlide
    
*   ServiceRequest – Invoked when a service call or network call is triggered from the application
*   ServiceResponse – Invoked when a service call or network call responds back.
*   Gesture – Invoked when a gesture recognizer for a widget has been set and one of the set gesture patterns  like double tap, right to left swipe, long press are done on the same.
*   Orientation – Invoked when device orientation is modified for app.
*   Error – Invoked when application ends up in an unhandled exception.
*   Exception – Invoked when application flow lands in a handled exception code block in app.
*   Crash – Invoked when application crashes and resumes after crash.
*   AppLoad – Invoked when the application is loaded and the first form is shown.
    
*   AppTransition - Invoked when the application transits either from foreground to background and vice versa.
    
    > **_Note:_** When an application goes background, the time spent in mili-seconds by that application in foreground will be captured by the AppTransition event.
    

Custom Events
-------------

Custom – Invoke for logical events in the application like login, check deposit  or any other event specific to the application that is used. Refer to [send custom events API](Tuning_Auto_Event_Capture.md#sendevent). For more details, refer to [VoltMX Iris for Reporting](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Installing_VoltMXJS_SDK.md#InvokingReporting)
