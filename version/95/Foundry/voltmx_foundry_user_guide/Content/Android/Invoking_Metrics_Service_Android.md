                              

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > Metrics Service Object APIs

Invoking a Metrics Service
==========================

When the Android SDK is initialized, it will automatically collect various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The AndroidSDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the Android SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey.The developer can send various standard events such as form entry, touch events, service requests, gestures and errors. The developer can also send custom events to capture any app specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

This section lists all `MetricsService` object APIs.

Create an instance of MetricsService
------------------------------------

The **MetricsService** class sets the configuration for APM event reporting.

```
 //Sample code to create an instance of MetricService with variable name "getMetricsService"
mKonyClient = new KonyClient();
MetricsService metricsClient = null;
try {
    metricsClient = mKonyClient.getMetricsService();
} catch (KonyCMSException e) {
    e.printStackTrace();
```

### setUserID

The **setUserID** API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis like how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. The user ID allows the same user to be tracked across different devices as well.

```
 //Sample code to set up the user ID of application user
String mUserId = "<user-id>";
metricsClient.setUserId(mUserId);
```

> **_Note:_**  The UserId related to metrics. The UserId length cannot be more than 100 characters.

### sendEvent

The **sendEvent** API allows a developer to send event details from an application to server for analytics and reporting purposes. The event data is added to a buffer and sent to server as per configuration values set by the developer using setEventConfig API.

```
  //Sample code to send reports
String eventSubType = "<event-sub-type>";
String formID = "<form-id>";
String widgetID = "<widget-id>";
String flowTag = "<flow-tag>";
String metaData = "<meta-data>";
try {
    metricsClient.sendEvent(MetricsService.EventType.EVENT_TYPE_CUSTOM, eventSubType, formID, widgetID, flowTag, metaData);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

The following are the enums event types with values:

*   EVENT\_TYPE\_FORM\_ENTRY("FormEntry", 0)
*   EVENT\_TYPE\_FORM\_EXIT("FormExit", 1)
*   EVENT\_TYPE\_TOUCH("Touch", 2)
*   EVENT\_TYPE\_SERVICE\_REQUEST("ServiceRequest", 3)
*   EVENT\_TYPE\_SERVICE\_RESPONSE("ServiceResponse", 4)
*   EVENT\_TYPE\_GESTURE("Gesture", 5)
*   EVENT\_TYPE\_ORIENTATION("Orientation", 6)
*   EVENT\_TYPE\_ERROR("Error", 7)
*   EVENT\_TYPE\_EXCEPTION("Exception", 8)
*   EVENT\_TYPE\_CRASH("Crash", 9)
*   EVENT\_TYPE\_CUSTOM("Custom", 10)
*   EVENT\_TYPE\_SERVICECALL("ServiceCall", 11)
*   EVENT\_TYPE\_APPTRANSITION("AppTransition", 12)
*   EVENT\_TYPE\_APPLOAD("AppLoad", 13)
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

The **flushEvents** API allows a developer to force events to be sent to the server. The entire current event buffer is loaded and sent to the server for processing. The flushEvents API used as an override to send event data to server before the configured value or a service call that flushes the buffer.

```
 //Sample code to flushEvents  
  
metricsClient.flushEvents();
```

### getEventsInBuffer

The **getEventsInBuffer** returns a list of the buffered events.

```
 //Sample code to eventsInBuffer
Vector < Hashtable > bufferEvents = metricsClient.getEventsInBuffer();
```

### setFlowTag

The **setFlowTag** API sets an event flow tag to be associated with all new events that are reported by using the sendEvent API.The flow tag is used to ease searching event data in terms of application flows like loginflow, searchflow. The setFlowTag also helps sorting and filtering data while building custom reports or running standard reports for the application events.

```
 //Sample code to setFlowTagString myFowTag = "<flow-tag>";
try {
    metricsClient.setFlowTag(myFowTag);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

### clearFlowTag

The **clearFlowTag** API clears the currently set event flow tag.

```
 //Sample code to clearFlowTag
metricsClient.clearFlowTag();

```

### getFlowTag

The getFlowTag API gets the currently set event flow tag.

```
 //Sample code to getFlowTag
String mFlowTag = metricsClient.getFlowTag();
```

### reportError

The **reportError** API enables an app to report an error event to metrics server.

```
  //Sample code to reportError
String errorcode = "<error-code>";
String errorType = "<error-type>";
String errorMessage = "<error-message>";
String errorDetails = "<error-details>";
try {
    metricsClient.reportError(errorcode, errorType, errorMessage, errorDetails);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

#### Parameters:

*   errorCode - string errorCode can be nil if not applicable.
*   errorType - string errorType can be nil if not applicable.
*   errorMessage - string errorMessage can be nil if not applicable.
*   errorDetails - string(JSON) errorDetails is a json string that can have key-value pairs for the following keys errfile, errmethod, errline, errstacktrace, errcustommsg, errcrashreport, formID, widgetID, and flowTag.

### reportHandledException

The **reportHandledException** API enables apps to report a handled exception event.

```
  //Sample code to send exception to metrics server
String exceptioncode = "<exception-code>";
String exceptionType = "<exception-type>";
String exceptionMessage = "<exception-message>";
String exceptionDetails = "<exception-details>";
try {
    metricsClient.reportHandledException(exceptioncode, exceptionType, exceptionMessage, exceptionDetails);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

#### Parameters:

*   exceptionCode - string exceptionCode can be nil if not applicable.
*   exceptionType - string type of exception, such as Eval Error or syntax error. The exceptionType can be nil if not applicable.
*   exceptionMessage - string exceptionMessage can be nil if not applicable.
*   exceptionDetails - string(JSON) exceptionDetails is a JSON string that can have key-value pairs for the following keys exceptionfile, exceptionmethod, exceptionline, exceptionstacktrace, formID, widgetID, and flowTag.

### setEventConfig

The **setEventConfig** API takes the required values to set the event configuration values. When eventConfigType is - CONF\_TYPE\_BUFFER event autoFlushCount and maxBufferCount are considered.  

```
  //Sample code to setEventConfig
int autoFlushCount = 20;
int maxBufferCount = 800;
try {
    metricsClient.setEventConfig(MetricsService.EventConfigType.CONF_TYPE_BUFFER, autoFlushCount, maxBufferCount);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

#### Parameters:

*   eventConfigType - sets the current configuration type
    
    > **_Note:_**  Only buffer mode is supported for the eventConfigType currently.
    
*   autoFlushCount - number of events to be buffered before a network call is triggered to post the event data to the server Possible values any positive integer. Default value is 15.
*   maxBufferCount - Maximum event buffer count to store the events possible values any positive integer. Default value os 1000.

### setBatchSize

The **setBatchSize** API allows a developer to specify the batch size to be set to flush events. Default batch size is 50.

```
 //Sample code to set batch size to flush eventsint batchSize = 20;
try {
    metricsClient.setBatchSize(batchSize);
} catch (KonyCMSException e) {
    e.printStackTrace();
}
```

### sendCustomMetrics

The **sendCustomMetrics** API sends custom metrics event.

```
 //Sample code to send data to reporting service with group id as "formID"
Hashtable mtable = new Hashtable();
mtable.put("<key>", "<Values>");
String key = "<metrics-key>";
metricsClient.sendCustomMetrics(formID, mtable);
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

#### Parameters:

*   groupId - formID length cannot be more than 250 characters.
*   data - data to be send

Event Details
-------------

For all event details, **ts** and **SID** values are automatically filled by MBaaS Client SDK, as part of the reportEvent, reportError and reportHandledException API calls. In case of automatically captured events, flowTag is also automatically filled with the currently set flowTag. Following are event specific details to be used while interfacing with MBaaS SDK.

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
*   evtSubType - value of this attribute depends upon where the touch happened. Button\_Click should be used when touch happens to be a click event on button widget)
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
    *   errcode - Optional
    *   errmsg - Optional
    *   errfile - Optional
    *   errmethod - Optional
    *   errstacktrace - Optional
    *   errcustommsg - Optional

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

### Custom

*   API to be used - sendEvent
*   evtType - Custom
*   FormID - any supplied form ID
*   WidgetID - any supplied widget ID
*   evtSubType - any supplied event subtype
*   metadata - string or a dictionary

### AppTransition

*   API to be used - sendEvent
*   evtType - AppTransition
*   FormID - Value of the ID property of the form widget where the touch happened
*   WidgetID - null
*   evtSubType \[String\] - any one of the below string constants will obtain:
    *   Background
    *   Foreground
    *   metadata
*   Dictionary (hash table) that contains the following key value pairs:  
    foredur - Duration spent in milliseconds.

### AppLoad

*   API to be used - sendEvent
*   evtType - AppLoad
*   FormID - value of the ID property of the form widget where the touch happened
*   WidgetID - null
*   evtSubType \[String\] – AppId which is the Application ID.
*   metadata
*   Dictionary (hash table) that contains the following key value pairs:  
    loaddur - Duration spent in milliseconds.
