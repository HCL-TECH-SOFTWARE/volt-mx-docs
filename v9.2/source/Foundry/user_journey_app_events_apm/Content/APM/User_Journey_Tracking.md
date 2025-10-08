                           

You are here: [Tracking User Journey](#tracking-user-journey) > Tracking Manually

Tracking User Journey
=====================

You can track the user journey in the following two ways:

1.  [Manually](#tracking-user-journey-manually)
2.  [Automatic Tracking (VoltMX Iris only)](#automatic-tracking-volt-mx-iris-only)

Tracking User Journey Manually
------------------------------

You can sent all events mentioned in [Types of Application Events](App_Event_Types.md) by invoking APIs.

Automatic Tracking (VoltMX Iris only)
--------------------------------------------

Volt MX  Iris allows automatic tracking for iOS native and android native apps for the following event types.

*   Form Entry – Invoked when a form in application is entered.
*   Form Exit - Invoked when a form is exited in the application.
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
    
*   Service Request – Invoked when a service call or network call is initiated from the application.
*   Service Response – Invoked when an HTTP response is received from the service request or network call in the application.
*   Gesture - Invoked when a gesture recognizer for a widget is set and one of the set gesture patterns like double tap, right to left swipe, long press are done on the same.
*   Orientation - Invoked when the device orientation is modified for an app, and the application form that user was in, is set to act on orientation change.
*   Error - When application ends up in an unhandled exception in JavaScript code that the global exception handler catches up.
*   Crash - Invoked when application crashes and resumes after crash.
*   AppLoad – Invoked when the application is loaded and the first form is shown.
*   AppTransition - Invoked when the application transits either from foreground to background and vice versa.
    
    > **_Note:_** When an application goes background, the time spent in mili-seconds by that application in foreground will be captured by the AppTransition event.
