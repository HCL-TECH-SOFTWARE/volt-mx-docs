                             

Invoking a Metrics Service
==========================

To use metrics service of Volt MX Foundry SDK, you must add `#import <CMS/CMS.h>` in the header of your files.

When the iOS SDK is initialized, it automatically collects various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The iOS SDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the iOS SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey.The developer can send various standard events such as form entry, touch events, service requests, gestures and errors. The developer can also send custom events to capture any app specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. 

<!-- For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md). -->


This section lists all `VMXMetricsService` object APIs.

Create an instance of VMXMetricsService
---------------------------------------

The VMXMetricsService class sets the configuration for APM event reporting.

```
 //Sample code to create an instance of metricService with variable name "sharedMetricsService"
VMXMetricsService * metricService = [VMXMetricsService sharedMetricsService];

```

### setUserID

The setUserID API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis like how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. This user ID allows the same user to be tracked across different devices as well.

```
 //Sample code to set up the user ID of application user
[metricService setUserId: @"userid"];
```

> **_Note:_**  The UserId related to metrics. The UserId length cannot be more than 100 characters.

### sendEvent

The sendEvent API allows a developer to send event details from an application to server for analytics and reporting purposes. The event data is added to a buffer and sent to server as per configuration values set by the developer using setEventConfig API.

```
 //Sample code to send reports
[metricService sendEvent: < eventtype > eventSubType: @"<value1>"
    formID: @"<value2>"
    widgetID: @"<value3>"
    flowTag: @"<value4>"
];

```

### sendEvent with meta data

The sendEvent API allows a developer to send event details from an application to server for analytics and reporting purposes. The event data is added to a buffer and sent to server as per configuration values set by the developer using setEventConfig API.  
The sendEvent API allows sending custom information for the event as metadata, which takes a dictionary type object.

```
 //Sample code to send reports with metadata
[metricService sendEvent: < eventtype > eventSubType: @"<value1>"
    formID: @"<value2>"
    widgetID: @"<value3>"
    flowTag: @"<value4>"
    metaData: @{
        any custom data which is a dict
    }
];

```

The following are the enums event types with values:

*   VMXEventTypeFormEntry = 0
*   VMXEventTypeFormExit = 1
*   VMXEventTypeTouch = 2
*   VMXEventTypeServiceRequest = 3
*   VMXEventTypeServiceResponse = 4
*   VMXEventTypeGesture = 5
*   VMXEventTypeOrientation = 6
*   VMXEventTypeError = 7
*   VMXEventTypeHandledException = 8
*   VMXEventTypeCrash = 9
*   VMXEventTypeCustom = 10
*   VMXEventTypeServiceCall = 11
    
*   VMXEventTypeAppTransition = 12
*   VMXEventTypeAppLoad = 13
*   > **_Note:_** The EventType is an ENUM.  
    The eventSubType, formId, widgetId, and flowTag fields can have max of 256 characters.
    

The following are the parameters for an event type:

*   eventType - string literal for formID can be null
*   eventSubType - string literal for eventSubType (max 256 characters)
*   formID - string literal for formID (max 256 characters)
*   widgetID - string literal for widgetID (max 256 characters)
*   flowTag - string literal to override flow tag (max 256 characters)
*   metaData - string literal that can be set by developer while setting a custom event for sending custom data as part of an event.
    

### flushEvents

The flushEvents API allows a developer to force events to be sent to the server. The entire current event buffer is loaded and sent to the server for processing. The flushEvents API is used as an override to send event data to server before the configured value or a service call that flushes the buffer.

```
 //Sample code to flushEvents
[metricService flushEvents];
```

### eventsInBuffer

The eventsInBuffer returns a list of the buffered events.

```
 //Sample code to eventsInBuffer
[metricService eventsInBuffer];
```

### setFlowTag

The setFlowTag API sets an event flow tag to be associated with all new events that are reported by using thesendEvent API.The flow tag is used to ease searching event data in terms of application flows like loginflow, searchflow. The setFlowTag also helps sorting and filtering data while building custom reports or running standard reports for the application events.

```
 //Sample code to setFlowTag
[metricService setFlowTag: @"value"];
```

### clearFlowTag

The clearFlowTag API clears the currently set event flow tag.

```
 //Sample code to clearFlowTag
[metricService setFlowTag: nil];
```

### getFlowTag

The getFlowTag API gets the currently set event flow tag.

```
 //Sample code to getFlowTag
[metricService flowTag];
```

### reportError

The reportError API enables an app to report an error event to metrics server.

```
 //Sample code to reportError
[metricService reportError: @"<report error>"
    errorType: @"<value1>"
    "errorMessage:@" < value2 > " errorDetails:@" < value3 > "];

```

#### Parameters:

*   errorCode - string errorCode can be nil if not applicable.
*   errorType - string errorType can be nil if not applicable.
*   errorMessage - string errorMessage can be nil if not applicable.
*   errorDetails - string(JSON) errorDetails is a json string that can have key-value pairs for the following keys errfile, errmethod, errline, errstacktrace, errcustommsg, errcrashreport, formID, widgetID, and flowTag.

### reportHandledException

The reportHandledException API enables apps to report a handled exception event.

```
 //Sample code to send exception to metrics server
[metricService reportHandledException: @"<report error>"
    exceptionType: @"<value1>"
    exceptionMessage: @"<value2>"
    exceptionDetails: @"<value3>"
];
```

#### Parameters:

*   exceptionCode - string exceptionCode can be nil if not applicable.
*   exceptionType - string type of exception, such as Eval Error or syntax error. The exceptionType can be nil if not applicable.
*   exceptionMessage - string exceptionMessage can be nil if not applicable.
*   exceptionDetails - string(JSON) exceptionDetails is a JSON string that can have key-value pairs for the following keys exceptionfile, exceptionmethod, exceptionline, exceptionstacktrace, formID, widgetID, and flowTag.

### setEventConfig

The setEventConfig API takes the required values to set the event configuration values. When eventConfigType is - VMXEventConfigTypeBuffer eventBufferAutoFlushCount and eventBufferMaxCount are considered.

```
 //Sample code to setEventConfig

[metricService setEventConfig: < eventConfigType > eventBufferAutoFlushCount: 10 eventBufferMaxCount: 500];
```

#### Parameters:

*   eventConfigType - sets the current configuration type
    
    > **_Note:_**  Only buffer mode is supported for the eventConfigType currently.
    
*   eventBufferAutoFlushCount - number of events to be buffered before a network call is triggered to post the event data to the server Possible values any positive integer. Default value is 15.
*   eventBufferMaxCount - Maximum event buffer count to store the events possible values any positive integer. Default value os 1000.

### setBatchSize

The setBatchSize API allows a developer to specify the batch size to be set to flush events. Default batch size is 50.

```
 //Sample code to set batch size to flush events
[metricService setBatchSize: 20];
```

### sendCustomMetrics

The sendCustomMetrics API sends custom metrics event.

```
 //Sample code to send data to reporting service with group id as "formID"
[metricService sendCustomMetrics: @"formID"
    andData: @
        @"prodName": @"iPad 16 GB",
        @"prodPrice": @"450.0"];
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

#### Parameters:

*   groupId - formID length cannot be more than 250 characters.
*   data - data to be send

Event Details
-------------

For all event details, ts and SID values are automatically filled by MBaaS Client SDK, as part of the reportEvent, reportError and reportHandledException API calls. In case of automatically captured events, flowTag is also automatically filled with the currently set flowTag. Following are event specific details to be used while interfacing with MBaaS SDK.

### FormEntry

*   API to be used - sendEvent
*   evtType - FormEntry
*   FormID - value of the ID property of the form widget
*   WidgetID - null
*   evtSubType - Value of the ID property of the form widget
*   metadata - null

### FormExit

*   API to be used - sendEvent
*   evtType - FormExit
*   FormID - value of the ID property of the form widget
*   WidgetID - null
*   evtSubType - Value of the ID property of the form widget
*   metadata - Dictionary (hash table) that contains the following key value pairs:
    *   formdur - Duration spent in form in milliseconds. Optional.

### Touch

*   API to be used - sendEvent
*   evtType - Touch
*   FormID - value of the ID property of the form widget where the touch happened
*   WidgetID - value of the ID property of the widget on which the touch happened
*   evtSubType - value of this attribute depends upon where the touch happened. Button\_Click should be used when touch happens to be a click event on button widget). Touch event is extended to the below widgets along with button onclick.
    *   Flex Container/Scroll Container
        
        onClick
        
        onTouchStart (if registered)
        
        onTouchEnd (if registered)
        
    *   Segment
        
        onRowClick
        
    *   Button
        
        onClick (already in place, no new changes)
        
    *   Image
        
        onTouchStart (if registered)
        
        onTouchEnd (if registered)
        
    *   Switch
        
        onSlide
        
*   metadata - null

### ServiceRequest

*   API to be used - sendEvent
*   evtType - ServiceRequest (constant, exposed by MBaaS SDK)
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType  
    Service ID - in case of service invoking Volt MX middle ware  
    URL - in case of other requests  
    
*   metadata - null

### ServiceResponse

*   API to be used - sendEvent
*   evtType - ServiceResponse (constant, exposed by MBaaS SDK)
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType  
    Service ID - in case of service invoking Volt MX middle ware  
    URL - in case of other requests
*   metadata  
    Dictionary (hash table) contains the following key value pairs:
    *   opstatus - Optional  
        returned by Volt MX servers
    *   httpcode - HTTP status code
    *   resptime - time taken to get the response.

### Gesture

*   API to be used - sendEvent
*   evtType - Gesture (constant, exposed by MBaaS SDK)
*   FormID - value of the ID property of the form widget where the gesture happened
*   WidgetID - value of the ID property of the widget on which the gesture happened
*   evtSubType \[String\]  
    `GESTURETYPE_NUMBEROFINPUTS_DIRECTION`  
    For example, two finger left swipe – SWIPE\_2\_LEFT  
    
*   metadata - null

### Orientation

*   API to be used - sendEvent
*   evtType - Orientation (constant, exposed by MBaaS SDK)
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType \[String\] - any one of the below constants is used
    *   PORTRAIT\_TO\_LANDSCAPE
    *   LANDSCAPE\_TO\_PORTRAIT  
        
*   metadata - null

### Error

*   API to be used - sendEvent
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType  
    ErrorCode - Optional  
    
*   metadata  
    Dictionary (hash table) containing following key value pairs:
    
    *   **Error – JSON string with below parameters.**
        *   Error Code (errcode) (optional)
            
        *   Error Message (errmsg) (optional)
            
        *   Module name (errfile) (optional)
            
        *   Method name (errmethod) (optional)
            
        *   Line number (errline) (optional)
            
        *   Stack trace (errstacktrace) (optional)
            
        *   Custom error message (errcustommsg) (optional). To be used for sending custom error message or params that are not usually expected for a regular error message. For example, {"errmsg": “failure to parse integer”,"errfile": “accounthandler.js”, “errline”: “189”
            
    
    **Sample Error:**
    
```
{
        "errcode": 1028,
        "errmsg": "Nullpointerexception",
        "errstacktrace": "java.lang.NullPointerExceptionatMaze.getNumRandOccupants(Maze.java:118)atP4TestDriver.testMaze(P4TestDriver.java:995)atP4TestDriver.main(P4TestDriver.java: 116)at__SHELL8.run(__SHELL8.java: 7)atsun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethod)  atsun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java: 39)atsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java: 25)atjava.lang.reflect.Method.invoke(Method.java: 597)atbluej.runtime.ExecServer$3.run(ExecServer.java: 814)"
    }
```

### HandledException

*   API to be used - sendEvent
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType  
    ExceptionCode - Optional  
    
*   metadata  
    Dictionary (hash table) containing following key value pairs:
    
    *   exceptioncode - Optional
    *   exceptionev - Optional
    *   exceptionmsg - Optional
    *   exceptionfile - Optional
    *   exceptionmethod - Optional
    *   exceptionstacktrace - Optional
    *   exceptioncustommsg - Optional
    
    **Sample HandledException**
    
```
{
        "exceptioncode": 1028,
        "exceptionmsg": "Nullpointerexception",
        "exceptionstacktrace": "java.lang.NullPointerExceptionatMaze.getNumRandOccupants(Maze.java:118)atP4TestDriver.testMaze(P4TestDriver.java:995)atP4TestDriver.main(P4TestDriver.java:116)at__SHELL8.run(__SHELL8.java:7) atsun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethod)atsun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)atsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)atjava.lang.reflect.Method.invoke(Method.java:597)atbluej.runtime.ExecServer$3.run(ExecServer.java: 814)"
    }
```

### Crash

*   API to be used - sendEvent
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType \[String\]  
    
*   metadata  
    Dictionary (hash table) containing following key value pairs:
    
    *   errcode - Optional
    *   errmsg - Optional
    *   errfile - Optional
    *   errmethod - Optional
    *   errline - Optional
    *   errstacktrace - Optional
    *   errcrashreport - Optional
    *   Plugin version - platform (pluginverplat) (optional). To be used for sending the platform plugin version of the application binary Ex: iOS-6.0.4.GA
        
    *   Plugin versions – IDE (pluginveride) (optional). To be used for comma separated list of name/value pairs representing information of all studio plugins like ide, codegen. Ex: ide:6.0.3.GA, codegen:6.0.3.1.GA.
        
    *   Session ID (sessionid) (optional). Session ID in which the crash occurred. This is usually the previous session’s ID as crash data cannot be set in the same session that it crashed.
        
    
    **Sample Crash**
    
```
{
        "errcode": 1028,
        "errmsg": "Nullpointerexception",
        "errstacktrace": "java.lang.NullPointerExceptionatMaze.getNumRandOccupants(Maze.java:118)atP4TestDriver.testMaze(P4TestDriver.java:995)atP4TestDriver.main(P4TestDriver.java:116)at__SHELL8.run(__SHELL8.java:7) atsun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethod)atsun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)atsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)atjava.lang.reflect.Method.invoke(Method.java:597)atbluej.runtime.ExecServer$3.run(ExecServer.java: 814)"
    }
```

### Custom

*   API to be used - sendEvent
*   evtType - Custom
*   FormID - any supplied form ID
*   WidgetID - any supplied widget ID
*   evtSubType - any supplied event subtype
*   metadata - string or a dictionary

