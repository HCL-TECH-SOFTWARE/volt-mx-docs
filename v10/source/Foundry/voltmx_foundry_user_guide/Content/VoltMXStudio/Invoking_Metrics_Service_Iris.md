                             

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Invoking a Metrics Service

Invoking a Metrics Service Object
=================================

When the JS SDK is initialized, it automatically collects various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The JS SDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the JS SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey. The developer can send various standard events such as form entry, touch events, service requests, gestures, and errors. The developer can also send custom events to capture any application specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

This section lists all `MetricsService` object APIs.

> **_Note:_** On SDK initialization, the Metrics Service is available with the variable name HCLMetricsService.

Configuring Application Events Reporting
----------------------------------------

The MetricsService class sets the configuration for APM event reporting.

\* @param reportingMode{string }specifies the event reporting mode which can be currently only set to "Buffer"

\* @param bufferAutoFlushCount{number }In case the reportingMode is set to Buffer, this property specifies the number of events to be buffered before flushing.

\* @param maxBufferCount{number }In case the reportingMode is set to Buffer, this property specifies the maximum number of events that can be buffered. Events exceeding the maxBufferCount will be ignored.

\* @Availability Applicable on All native Platforms (iOS, Android)

```
 //Sample code to set the configuration for application events.
HCLMetricsService.setEventConfig("Buffer", 50, 200);

```

### setBatchSize

The **setBatchSize** API allows a developer to specify the batch size to be set to flush events. Default batch size is 50.

#### Parameters:

*   @param batchSize {number}

```
//Sample code to set batch size to flush events
HCLMetricsService.setBatchSize(20);
```

> **_Note:_** App events (CMS or Crash reports) will be pushed to Volt MX Reports only when the events reach the batch\_size (buffer limit).Default batch\_size is 50. This can be overridden using the setBatchSize(batchSize) API.<br><br>To push the events to Volt MX Reports irrespective of the batch\_size, the **flushEvents()** API can be used. Use the **flushEvents()** API or the appropriate batch\_size to report the events or crash data more frequently to Volt MX Reports according the requirement.<br><br>For more information on error reports for the **setBatchSize(batchSize)** API and **flushEvents** API, refer to [Analytics Standard Report > Events and User Journey Reports > Application Error Details](../../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Events_and_User_journey_reports.md#application-error-detail).

### setUserID

The **setUserID** API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis like how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. The user ID allows the same user to be tracked across different devices as well.

*   @param setUserId {string }User ID to be passed

```
setUserID = function( /**string */ setUserId, ) {}
```
```
//Sample code to set up the user ID of application user
voltmx.setUserID("myUserID");
```

> **_Note:_**  The UserID related to metrics. The UserID length cannot be more than 100 characters.

> **_Note:_** **HCLMetricsService.setUserId** has been removed from apps built with Volt MX Iris Enterprise.

### sendEvent

The **sendEvent** API allows a developer to send event details from an application to a server for analytics and reporting purposes. The event data is added to a buffer and sent to the server as per configuration values set by the developer using setEventConfig API.

> **_Note:_**  From Volt MX V8 SP3 and latest plug-in versions of 7.2, 7.3, V8.2 and above, the sendEvent API will not capture the network calls to image URLs as part of `serviceRequest/serviceResponse` events. This is applicable for both manual invocation from an application code and for events captured automatically from the Project Settings.  

*   @param eventType {string }specifies the event type. Can be one of the following constants. FormEntry, FormExit, Touch, ServiceRequest, ServiceResponse, Gesture, Orientation, Error, Exception, Crash, Custom
*   @param eventSubType{string }specifies the sub type of event.
*   @param formID{string }widget ID of the form where event happened.
*   @param widgetID {string }widgetID of the widget on which the event happened.
*   @param flowTag {string }flowTag to added for this event
*   @param metaInfo {JSObject \[Key value pairs\]}event specific meta data
*   @Availability Applicable on All native Platforms (iOS, Android)

```
sendEvent = function( /**string */ eventType, /**string */ eventSubType, /**string */ formID, /**string */ widgetID, /**string */ flowTag, /**JSObject [Key value pairs]*/ metaInfo) {}
```
```
//Sample code to send reports
HCLMetricsService.sendEvent("FormEntry", "frmHome", "frmHome", "widgetID", "flowTag", {
    "key1": "value1"
});  

```

> **_Note:_** This API is required to be used only if the application developer chooses to send their own custom events. All event types chosen for automatic event tracking from the **Metrics APM** tab in application properties or set using the setEventTracking API will automatically be tracked.

### setFlowTag

The **setFlowTag** API sets an event flow tag to be associated with all new events that are reported by using thesendEvent API. The flow tag is used to ease searching event data in terms of application flows like loginflow, searchflow. The setFlowTag also helps in sorting and filtering data while building custom reports or running standard reports for the application events.

*   @param flowtag {string }Flow tag name
*   @Availability Applicable on All native Platforms (iOS, Android)

```
setFlowTag = function( /**string */ flowtag, ) {}
```
```
//Sample code for the setFlowTag API  
HCLMetricsService.setFlowTag("MyFlowTag");  

```

### setEventTracking

The **setEventTracking** API sets the event types to be tracked.

*   @param EventTypes {JSObject \[Array\]}An array of string constants which are valid event types This method must be called during the lifetime of the application to enable event tracking, otherwise the default behavior is not to track any events. An empty array or a null object as a parameter to this method results in not to track any of the events.
*   @Availability Applicable on All native Platforms (iOS, Android)

*   For example, while entering critical flow, the following is a sample code:
```
HCLMetricsService.setEventTracking(["FormEntry", "Error", "Crash", "FormExit", "ServiceResponse"]);
```
*   For example, while exiting critical flow, the following is a sample code:
```
HCLMetricsService.setEventTracking(["FormEntry", "Error", "Crash"]);
```
    
> **_Note:_** The events set by using the setEventTracking API override any setting set from the application Project Settings at build time. So, you must set critical events like Error and Crash while using the API.
    
> **_Note:_** Supported values for setEventTracking are\["FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash"\]
    

### getEventTracking

The **getEventTracking** API gets the list of all event types that are being tracked currently.

*   @Availability Applicable on All native Platforms (iOS, Android)

```
getEventTracking = function() {}
```
```
//Sample code for the getEventTracking API  
  
var events = HCLMetricsService.getEventTracking();
```

### clearFlowTag

The **clearFlowTag** API clears the currently set event flow tag.

*   @Availability Applicable on All native Platforms (iOS, Android)

```
clearFlowTag = function() {}
```
```
//Sample code for the clearFlowTag API  
HCLMetricsService.clearFlowTag();

```

### getFlowTag

The **getFlowTag** API gets the currently set event flow tag.

*   @Availability Applicable on All native Platforms (iOS, Android)

```
getFlowTag = function() {}
```
```
//Sample code for the getFlowTag API  
  
var flowtag = HCLMetricsService.getFlowTag();

```

### reportError

The **reportError** API enables an app to report an error event to metrics server.

*   @param errorCode{string } errorCode can be nil if not applicable.
*   @param errorType {string }errorType can be nil if not applicable.
*   @param errorMessage {string } errorMessage can be nil if not applicable.
*   @param errorDetails {string }errorDetails is a json string that can have key value pairs for the following keys errfile, errmethod, errline, errstacktrace, errcustommsg, errcrashreport, formID, widgetID, and flowTag.
*   @Availability Applicable on All native Platforms (iOS, Android)

```
reportError = function( /**string */ errorCode, /**string */ errorType, /**string */ errorMessage, /**string */ errorDetails, ) {}
```
```
//Sample code for the reportError API
HCLMetricsService.reportError("1234", "SpecificError", "custom error message", "{errfile:file.js}");
```

> **_Note:_**  This API is required to be used only if the application developer chooses to send their own error events. If Error event type is chosen for supported platforms via application properties or setEventTracking API, error tracking will automatically be done.

### reportHandledException

The **reportHandledException** API enables apps to report a handled exception event. Application developers can use this API to report handled exceptions in the application code.

*   @param exceptionCode {string }exceptionCode can be nil if not applicable.
*   @param exceptionType {string }string type of exception, such as Eval Error or syntax error. The exceptionType can be nil if not applicable.
*   @param exceptionMessage {string }exceptionMessage can be nil if not applicable.
*   @param exceptionDetails {string }exceptionDetails is a JSON string that can have key value pairs for the following keys exceptionfile, exceptionmethod, exceptionline, exceptionstacktrace, formID, widgetID, and flowTag.
*   @Availability Applicable on All native Platforms (iOS, Android)

```
reportHandledException = function( /**string */ exceptionCode, /**string */ exceptionType, /**string */ exceptionMessage, /**string */ exceptionDetails, ) {}
```
```
//Sample code to send exception to metrics server
HCLMetricsService.reportHandledException("1234", "SpecificException", "custom exception message", "{errfile:file.js}");
```

### flushEvents

The **flushEvents** API allows a developer to force events to be sent to the server. The entire current event buffer is loaded and sent to the server for processing.The flushEvents API is used as an override to send event data to a server before the value configured in seteventconfig for autoflushcount is reached.

*   @Availability Applicable on All native Platforms (iOS, Android)

```
flushEvents = function() {}
```
```
//Sample code for the flushEvents API
HCLMetricsService.flushEvents();

```

> **_Note:_** For more information on error reports for the flushEvents() API, refer to [Analytics Standard Report > Events and User Journey Reports > Application Error Details](../../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Events_and_User_journey_reports.md#Error_setBatchSize_FlushEvents) section.

### sendCustomMetrics

The **sendCustomMetrics** API allows the developer to send custom metrics from the application.

The custom metrics keys should already be registered in Volt MX Foundry Console for the application before data is sent from the application.

*   @param groupId{JSObject \[Array\]}
    
    formID length cannot be more than 250 characters.
    
*   @param data {data}data to be send
*   @Availability Applicable on All native Platforms (iOS, Android)

```
sendCustomMetrics = function( /**JSObject [Array]*/ groupId, /**data*/ data, ) {}
```
```
//Sample code for the sendCustomMetrics API
HCLMetricsService.sendCustomMetrics("formID", {
    "metric": "metricdata"
});
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

Global Error Handler
--------------------

The **uncaughtexceptionhandler** APIs are available only for iOS and Android native apps built from Volt MX Iris.

### setUncaughtExceptionHandler

This API allows a developer to register a callback function to be invoked for uncaught JS exception.

```
voltmx.lang.setUncaughtExceptionHandler("< Callback function for ErrorHandling >");
```
```
//Sample code for the setUncaughtExceptionHandler API
function myErrorHandler() {}
voltmx.lang.setUncaughtExceptionHandler(myErrorHandler);
```

### getUncaughtExceptionHandler

This API allows a developer to get the function that is currently registered for the uncaught JS exceptions.

```
//Sample code for the getUncaughtExceptionHandler API
voltmx.lang.getUncaughtExceptionHandler()
```

Event Details
-------------

For all event details, timestamp of event and session identifier values are automatically filled by MBaaS Client SDK, as part of the reportEvent, reportError and reportHandledException API calls. In case of automatically captured events, flowTag is also automatically filled with the currently set flowTag. The following are event specific details to be used while interfacing with MBaaS SDK while manually invoking sendEvent API to send event data.

### FormEntry

*   API to be used - sendEvent
*   evtType - FormEntry
*   FormID - the value of the ID property of the form widget
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
    Service ID - in case of service invoking Volt MX middleware  
    URL - in case of other requests  
    
*   metadata - null

### ServiceResponse

*   API to be used - sendEvent
*   evtType - ServiceResponse (constant, exposed by MBaaS SDK)
*   FormID - value of the ID property of the form widget currently displayed on the screen
*   WidgetID - null
*   evtSubType  
    Service ID - in case of service invoking Volt MX middleware  
    URL - in case of other requests  
    
*   metadata  
    JSON object (hash table) containing following key value pairs:
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
    JSON object (hash table) containing following key value pairs:
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
    JSON object (hash table) containing following key value pairs:
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
    JSON object (hash table) containing following key value pairs:
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
