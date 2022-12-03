                             

User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Metrics Service Object APIs

Invoking a Metrics Service Object
=================================

When the JS SDK is initialized, it automatically collects various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The JS SDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the JS SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey. The developer can send various standard events such as form entry, touch events, service requests, gestures and errors. The developer can also send custom events to capture any app specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

This section lists all `MetricsService` object APIs.

Create an instance of MetricsService
------------------------------------

```
 //Sample code to create an instance of Metrics service  
  
var metricsServiceObj = client.getMetricsService()

```

Configuring Application Events Reporting
----------------------------------------

The **setEventConfig** method allows to set the configuration for event reporting.

\* @param reportingMode{string }specifies the event reporting mode which can be currently only set to "Buffer"

\* @param bufferAutoFlushCount{number }In case the reportingMode is set to Buffer, this property specifies the number of events to be buffered before flushing.

\* @param maxBufferCount{number }In case the reportingMode is set to Buffer, this property specifies the maximum number of events that can be buffered. Events exceeding the maxBufferCount will be ignored.

```
 //Sample code to set the configuration for application events.  
  
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.setEventConfig("BUFFER", 50, 200);
```

### setUserID

The **setUserID** API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis like how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. The user ID allows the same user to be tracked across different devices as well.

*   @param setUserId {string }User ID to be passed

```
 //Sample code to set up the user ID of application user metrics  
  
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.setUserID("myUserID");
```

> **_Note:_**  The UserId related to metrics. The UserId length cannot be more than 100 characters.

### sendEvent

The **sendEvent** API allows a developer to send event details from an application to server for analytics and reporting purposes. The event data is added to a buffer and sent to server as per configuration values set by the developer using setEventConfig API.

*   @param eventType {string }specifies the event type. Can be one of the following constants. FormEntry, FormExit, Touch, ServiceRequest, ServiceResponse, Gesture, Orientation, Error, Exception, Crash, Custom
*   @param eventSubType{string }specifies the sub type of event.
*   @param formID{string }widget ID of the form where event happened.
*   @param widgetID {string }widgetID of the widget on which the event happened.
*   @param flowTag {string }flowTag to added for this event
*   @param metaInfo {JSObject \[Key value pairs\]}event specific meta data

```
 //Sample code to send reports metrics  
  
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.sendEvent("FormEntry", "frmHome", "frmHome", "widgetID", "flowTag",
{ "key1": "value1" }
);
```

### setFlowTag

The **setFlowTag** API sets an event flow tag to be associated with all new events that are reported by using thesendEvent API. The flow tag is used to ease searching event data in terms of application flows like loginflow, searchflow. The setFlowTag also helps sorting and filtering data while building custom reports or running standard reports for the application events.

*   @param flowtag {string }Flow tag name

```
 //Sample code to setFlowTagmetrics  
  
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.setFlowTag("Myflowtag")
```

### clearFlowTag

The **clearFlowTag** API clears the currently set event flow tag.

```
 //Sample code to clearFlowTag
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.clearFlowTag();
```

### getFlowTag

The **getFlowTag** API gets the currently set event flow tag.

```
 //Sample code to getFlowTag
var metricsServiceObj = client.getMetricsService()
var flowtag = metricsServiceObj.getFlowTag();
```

### reportError

The **reportError** API enables an app to report an error event to metrics server.

*   @param errorCode{string } errorCode can be nil if not applicable.
*   @param errorType {string }errorType can be nil if not applicable.
*   @param errorMessage {string } errorMessage can be nil if not applicable.
*   @param errorDetails {string }errorDetails is a json string that can have key value pairs for the following keys errfile, errmethod, errline, errstacktrace, errcustommsg, errcrashreport, formID, widgetID, and flowTag.

```
 //Sample code to reportError
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.reportError("1234", "SpecificError", "custom error message", "{errfile:file.js}");
```

### reportHandledException

The **reportHandledException** API enables apps to report a handled exception event.

*   @param exceptionCode {string }exceptionCode can be nil if not applicable.
*   @param exceptionType {string }string type of exception, such as Eval Error or syntax error. The exceptionType can be nil if not applicable.
*   @param exceptionMessage {string }exceptionMessage can be nil if not applicable.
*   @param exceptionDetails {string }exceptionDetails is a JSON string that can have key value pairs for the following keys exceptionfile, exceptionmethod, exceptionline, exceptionstacktrace, formID, widgetID, and flowTag.

```
 //Sample code to send exception to metrics server
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.reportHandledException("1234", "SpecificException", "custom exception message", "{errfile:file.js}");
```

### flushEvents

The **flushEvents** API allows a developer to force events to be sent to the server. The entire current event buffer is loaded and sent to the server for processing.The flushEvents API is used as an override to send event data to server before the configured value or a service call that flushes the buffer.

```
 //Sample code to flushEvents
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.flushEvents();
```

### sendCustomMetrics

The **sendCustomMetrics** API sends custom metrics event.

*   @param groupId {String}
*   @param data {data}data to be send

```
 //Sample code to sendCustomMetrics
var metricsServiceObj = client.getMetricsService()
metricsServiceObj.sendCustomMetrics("formID", {
    "metric": "metricdata"
});
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

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
    Dictionary (hash table) containing following key value pairs:
    *   opstatus - Optional  
        returned by Volt MX servers
    *   httpcode - HTTP status code
    *   resptime - time taken to get the reponse.

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
