                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Metrics Service Object APIs

Invoking a Metrics Service Object
=================================

When the Cordova SDK is initialized, it automatically collects various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The Cordova SDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the Cordova SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey. The developer can send various standard events such as form entry, touch events, service requests, gestures and errors. The developer can also send custom events to capture any app specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

Metrics Service Object APIs
---------------------------

This section lists all the Metrics Service object APIs.

### clearFlowTag

The **clearFlowTag** method clears the previous event flow tag.

#### **Syntax**

```
 clearFlowTag()
```
```
 //Sample code for clearFlowTag
metricsServiceObj.clearFlowTag();		
```

### flushEvents

The **flushEvents** method allows a developer to force events to be sent to the server. The entire current event buffer is loaded and sent to the server for processing.The flushEvents API is used as an override to send event data to server before the value configured in seteventconfig for autoflushcount is reached.

#### **Syntax**

```
 flushEvents()
```
```
 //Sample code for flushEvents  
metricsServiceObj.flushEvents();		
```

### getEventsInBuffer

The **getEventsInBuffer** method returns a list of the buffered events.

#### **Syntax**

```
 getEventsInBuffer()
```
```
 //Sample code for getEventsInBuffer  
var events = metricsServiceObj.getEventsInBuffer();
```

### getFlowTag

The **getFlowTag** method gets the currently set event flow tag.

#### **Syntax**

```
 getFlowTag()
```
```
 //Sample code for getFlowTag  
string flowtag = metricsServiceObj.getFlowTag();		
```

### getSessionId

The **getSessionId** method gets the current session Id.

#### **Syntax**

```
 getSessionId()
```
```
 //Sample code for getSessionId  
var sessionId = metricsServiceObj.getSessionId();		
```

### getUserId

The **getUserId** method gets the Id of the current user.

#### **Syntax**

```
 getUserId()
```
```
 //Sample code for getUserId
var  userId = metricsServiceObj.getUserId();	
```

### reportError

The **reportError** method enables an app to report an error event to metrics server.

#### **Syntax**

```
 reportError(errorCode, errorType, errorMessage, errorDetails)
```

*   errorCode - string. The error code of the reported error. This param can be empty if not applicable.
*   errorType - string. The error type of the the reported error. This param can be empty if not applicable.
*   errorMessage - string. The error message of the reported error. This param can be empty if not applicable.
*   errorDetails - string. The error details of the reported error. This param is a json string that can have key-value pairs for the following keys: errfile, errmethod, errline, errstacktrace, formID, widgetID, and flowTag.

```
 //Sample code for reportError  
metricsServiceObj.reportError("1234", "SpecificError", "custom error message", "{errfile:file.js}");	
```

> **_Note:_**  This API is required to be used only if the application developer chooses to send their own error events. If Error event type is chosen for supported platforms via application properties or setEventTracking API, error tracking will automatically be done.

### reportHandledException

The **reportHandledException** method enables apps to report a handled exception event. Application developers can use this API to report handled exceptions in the application code.

#### Syntax

```
 reportHandledException(exceptionCode, exceptionType, exceptionMessage, exceptionDetails)
```

*   exceptionCode - string. The code for the reported exception. This param an be empty if not applicable.
*   exceptionType - string, The type of the reported exception, such as Eval Error or syntax error. This param can be empty if not applicable.
*   exceptionMessage - string. The message of the reported exception. This param can be empty if not applicable.
*   exceptionDetails - string. The details of the reported exception. This param is a JSON string that can have key-value pairs for the following keys: exceptioncode, exceptionfile, exceptionmethod, exceptionline, exceptionstacktrace, formID, widgetID, and flowTag.

```
 //Sample code to send an exception to metrics server  
metricsServiceObj.reportHandledException ("1234", "SpecificException", "custom exception message", "{errfile:file.js}");	
```

### sendCustomMetrics

The **sendCustomMetrics** method allows the developer to send custom metrics from the application. The custom metrics keys should already be registered in Volt MX Foundry Console for the application before data is sent from the application.

#### **Syntax**

```
 sendCustomMetrics(reportingGroupID, metrics)
```

*   reportingGroupID - string. The reporting group ID.
*   metrics - object. Specifies the metrics being reported.

```
 //Sample code to sendCustomMetrics  
metricsServiceObj.sendCustomMetrics("formID", {"metrics":"metricdata"});		
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

### sendEvent

The **sendEvent** method allows a developer to send event details from an application to the server for analytics and reporting purposes. The event data is added to a buffer and sent to the server as per configuration values set by the developer using setEventConfig API.

#### Syntax

```
 sendEvent(evttype, evtSubType, formID, widgetID, flowTag, metaData)
```

*   evttype - string. Specifies the event type for the reported event. Can be one of the following constants: FormEntry, FormExit, Touch, ServiceRequest, ServiceResponse, Gesture, Orientation, Error, Exception, Crash, Custom
*   evtSubType - string. String literal for eventSubType (max 256 chars).
*   formID - string. String literal for formID (max 256 chars ) that specifies the widget ID of the form where event happened.
*   widgetID - string. String literal that identifies the widget on which the event happened (max 256 chars).
*   flowTag - string. String literal to override flow tag (max 256 chars).
*   metaData - string. Specifies event-specific metadata.

```
 //Sample code to send reports   
metricsServiceObj.sendEvent("FormEntry", "frmHome", "frmHome", null, {"key1":"value1"});  

```

> **_Note:_** This API is required to be used only if the application developer chooses to send their own custom events. All event types chosen for automatic event tracking from the **Metrics APM** tab in application properties or set using the **setEventTracking** API will automatically be tracked.

### setEventConfig

The **setEventConfig** method sets the event configuration values.

#### **Syntax**

```
 setEventConfig(confType, eventBufferAutoFlushCount, eventBufferMaxCount)
```

*   confType - string. Specifies the current configuration type. This value can only be "Buffer" .
*   bufferAutoFlushCount - number. This value can be any positive integer. The default value is 15. This param specifies the number of events to be buffered before flushing.
*   maxBufferCount - number. This value can be any positive integer. The default value is 1000. This param specifies the maximum number of events that can be buffered. Events exceeding the maxBufferCount will be ignored.

```
 //Sample code to set the configuration for application events.  
metricsServiceObj.setEventConfig("Buffer", 50, 200);		
```

### setFlowTag

The **setFlowTag** method sets an event flow tag to be associated with all new events that are reported by using the **sendEvent** API. The flow tag is used to ease searching event data in terms of application flows like loginflow, searchflow. The setFlowTag method also helps in sorting and filtering data while building custom reports or running standard reports for the application events.

#### **Syntax**

```
 setFlowTag(flowTag)
```

*   flow Tag - string, Specifies the flow tag for reporting events.

```
 //Sample code to setFlowTag  
metricsServiceObj.setFlowTag("MyFlowTag");
```

### setSessionId

The **setSessionId** method sets the Id of the session.

#### **Syntax**

```
 setSessionId(sessionId)
```

*   sessionId - string, Specifies the Id of the session.

```
 //Sample code to setFlowTag  
metricsServiceObj.setSessionId("MySessionId");
```

### setUserId

The **setUserId** API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis, such as how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. The user ID allows the same user to be tracked across different devices as well.

#### Syntax:

```
 setUserId(userId)
```

*   userId - string. Specifies the user ID.

```
 //Sample code to set up the user ID of application user  
metricsServiceObj.setUserId("myUserID");
```

> **_Note:_**  The userId related to metrics. The userId length cannot be more than 100 characters.

> **_Note:_** **HCLMetricsService.setUserId** has been removed from apps built with Volt MX Iris Enterprise.

Event Details
-------------

For all event details, timestamp of event and session identifier values are automatically filled by MBaaS Client SDK, as part of the reportEvent, reportError and reportHandledException API calls. In case of automatically captured events, flowTag is also automatically filled with the currently set flowTag. The following are event specific details to be used while interfacing with MBaaS SDK while manually invoking sendEvent API to send event data.

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
    JSON object (hash table) containing following key value pairs:
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
