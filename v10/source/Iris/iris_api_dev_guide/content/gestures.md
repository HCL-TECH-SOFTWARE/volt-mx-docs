                            

You are here: Gesture API

Gesture API
===========

A _gesture_ is a user's action associated with touch screens. Using Gesture API, you can determine how a gesture must be interpreted and the function that must be executed when a gesture is recognized. Gestures are supported for any widget in a flex layout. Currently, Volt MX Iris supports only Tap, Swipe, Longpress, Pan, Rotation, Pinch, and 3D Touch gesture types. 

The Gestures API uses `voltmx.application Namespace` and provides support for the following functions.

| Function | Description |
| --- | --- |
| [voltmx.application.addGestureRecognizerForAllForms](voltmx.application_functions_gestures.md#addGestRecogForAllForms) | Sets a gesture recognizer for all the forms. |
| [voltmx.application.removeGestureRecognizerForAllForms](voltmx.application_functions_gestures.md#voltmx.wid2) | Enables you to remove a specified gesture recognizer for all Forms. |

 

Configure a specified gesture recognizer for all the forms present in the project using the [voltmx.application.addGestureRecognizerForAllForms](voltmx.application_functions_gestures.md#addGestRecogForAllForms) function. In the function, define the type of the gesture to be recognized by using gestureType key-value pair. Define the configuration parameters needed to setup a gesture recognizer by using gestureConfigParams object. Further, define a function that must be executed once the gesture is recognized by using the OnGestureClosure function.

The configuration parameters used to set up a gesture recognizer are, gesture duration, number of taps, and the gesture type number. If you want to remove a specified gesture recognizer for all the forms in the project, use the [voltmx.application.removeGestureRecognizerForAllForms](voltmx.application_functions_gestures.md#voltmx.wid2) function.

> **_Note:_** Gestures are applicable only on mobile or tablet devices that have touch support. In tablet, longpress is only triggered when it is a touch event and not a mouse event.

Important Considerations
------------------------

*   Single tap matches with the _onClick_ functionality. If a box has an _onClick_ event defined, both gesture event and _onClick_ are triggered.
*   Number of taps is limited to one or two, only single tap or double tap are recognized.
*   Number of fingers is limited to one, only single finger is recognized.

To view the functionality of the Gesture API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/GestureAPI)

![](resources/prettify/onload.png)
