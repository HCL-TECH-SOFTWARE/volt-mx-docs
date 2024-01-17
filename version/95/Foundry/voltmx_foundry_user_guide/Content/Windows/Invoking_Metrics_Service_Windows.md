                              

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > Metrics Service Object APIs

Invoking a Metrics Service Object
=================================

When the .NET SDK is initialized, it automatically collects various standard metrics from a client and the standard metrics will be accessible using the Standard Reports within Volt MX Foundry Console.

The .NET SDK also provides the ability for a developer to send additional custom metrics from a client app to Volt MX Foundry back-end to capture additional information. These custom data sets will be accessible using the Custom Reporting feature within Volt MX Foundry Console where a business analyst can design and share reports using a combination of standard and custom metrics.

Additionally, the .NET SDK provides an Events API that allows an app to track user actions within the app to gain insight into the user journey. The developer can send various standard events such as form entry, touch events, service requests, gestures and errors. The developer can also send custom events to capture any app specific scenarios or transactions. These events can be analyzed within Volt MX Foundry Console by using the Standard Reports or user defined Custom Reports. For more details, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

Create an instance of MetricsService
------------------------------------

You must initialize the MetricsService class before using any functionality related to analytics of the app built in .NET SDK.

```
 // Sample code to fetch the metrics service object. Kony.MetricsService metricsSvc;

try {
    metricsSvc = sdkObject.GetMetricsService();
} catch (Exception e) {
    Console.WriteLine("Invalid Service");
}
```

Metrics Service Object Methods
------------------------------

This section describes the methods of the Metrics Service.

### ClearFlowTag

The ClearFlowTag method clears the set flow tag.

#### Syntax

```
 ClearFlowTag();
```

#### **Parameters**

None

#### **Returns**

None

#### **Example**

```
 // Sample code for ClearFlowTag

var metricsServiceObj = servicesOjb.GetMetricsService();
metricsSericeObj.ClearFlowTag();		
```

### FlushEvents

The FlushEvents method allows a developer to send events collected in buffer form from the device to the server. The entire current event buffer is loaded and sent to the server for processing. The FlushEvents method is used as an override to send event data to the server before the configured value or a service call that flushes the buffer.

#### **Syntax**

```
 FlushEvents()
```

#### **Parameters**

None

#### **Returns**

None

#### Example

```
 //Sample code for FlushEvents
var metricsServiceObj = servicesObj.GetMetricsService();
metricsServiceObj.FlushEvents();
```

#### GetFlowTag

The GetFlowTag method gets the set flow tag.

**Syntax:**

```
 GetFlowTag(flowTag);
```

#### Parameters

None

#### **Returns**

None

#### Example

```
 
// Sample code for GetFlowTag

string getflowtag;
var metricsServiceObj = servicesOjb.GetMetricsService();
getflowtag = metricsSericeObj.GetFlowTag();						

```

### ReportError

The ReportError method enables an app to report an error event to metrics server.

#### **Syntax**

```
 ReportError(string errorCode, stsring errorType, string errorMessage, string errorDetails)
```

#### **Parameters**

> **errorCode** - string. Can be null if not applicable.
> 
> **errorType** - string. Can be null if not applicable.
> 
> **errorMessage** - string. Can be null if not applicable.
> 
> **errorDetails** - json string. This param is a json string that can have key-value pairs for the following keys: errfile, errmethod, errline, errstacktrace, errcustommsg, errcrashreport, formID, widgetID, and flowTag.

#### Example

```
 //Sample code for ReportError
var metricsServiceObj = servicesObj.GetMetricsService()
metricsServiceObj.ReportError("1234", "SpecificError", "custom error message", "{errfile:file.js}");		
```

### ReportHandledException

The ReportHandledException method enables apps to report a handled exception event.

#### **Syntax**

```
 ReportHandledException(string exceptionCode, string exceptionType, string ExceptionMessage, string exceptionDetails)
```

#### **Example**

```
 //Sample code to send exception to metrics server
var metricsServiceObj = servicesObj.GetMetricsService()
metricsServiceObj.ReportHandledException("1234", "SpecificException", "custom exception message", "{errfile:file.js}");			
```

### SendCustomMetrics

The SendCustomMetrics method allows the developer to send custom metrics from the application. The custom metrics should already be registered in Volt MX Foundry Console for the application before data is sent from the application.

#### **Syntax**

```
 SendCustomMetrics(formId, reportingData);
```

#### **Parameters**

**formId** - string. Specifies the name of the form to which the custom metrics is to be sent. Cannot be more than 250 characters.

**reportingData**\- Dictionary<string, string> of key/value pairs. Key is the custom metric name and value is the value given for that specific instant. For example: Rating, Excellent.

#### **Example**

```
 //Sample code for SendCustomMetrics	
var metricsServiceObj = servicesObj.GetMetricsService();
Dictionary < object, object > reportingData = new Dictionary < object, object > ();
reportingData.Add("Rating", "Excellent");
metricsServiceObj.SendCustomMetrics(formId, reportingData);
```

### SendEvent

The SendEvent method allows a developer to send event details from an application to the server for analytics and reporting purposes. The event data is added to a buffer and sent to the server as per configuration values set by the developer using the SetEventConfig method.

#### Example

```
 //Sample code for SendCustomMetrics	
var metricsServiceObj = servicesObj.GetMetricsService();
Dictionary < object, object > reportingData = new Dictionary < object, object > ();
reportingData.Add("Rating", "Excellent");
metricsServiceObj.SendCustomMetrics(formId, reportingData);//Sample code to send reports 
var metricsServiceObj = servicesObj.GetMetricsService()
string eventSubType = "subTypeSample";
string formID = "sampleFormID";
string widgetID = "sampleWidgetID";
string flowTag = "sampleFlowTag";
JObject metaData = new JObject();
metaData.Add("formdur", "100");
try {
    metricsServiceObj.SendEvent(EventType.Custom, eventSubType, formID, widgetID, flowTag, metaData);
} catch () {}			
```

### SetEventConfig

The SetEventConfig method sets the event config param. Based on the **autoFlushCount** param, there will be an automatic flush from the device to the server.

#### **Syntax**

```
 SetEventConfig(eventConfigType, autoFlushCount, maxBufferCount);
```

#### **Parameters**

> **eventConfigType** - sets the current configuration type. Only buffer mode is supported.
> 
> **autoFlushCount** - the number of events to be buffered before a network call is triggered to post the event data to the server. Possible value is any positive integer. Default value is 15.
> 
> **maxBufferCount** - the maximum numnber of event buffers to store the events. Possible value is any positive integer. Default value is 1000.

#### **Example**

```
 // Sample code for SetEventConfig

int autoFlushCount = 20;
int maxBufferCount = 800;
try {
    metricsClient.SetEventConfig(EventConfigType.BUFFER, autoFlashCount, maxBufferCount);
} catch (Exception e) {}		
```

### SetFlowTag

The SetFlowTag method sets the flow tag.

#### **Syntax**

```
 SetFlowTag(flowTag);
```

#### **Parameters**

> **flowTag** - string that specifies the flow tag.

#### **Example**

```
 // Sample code for SetFlowTag

string flowtag = "SampleFlowTag";
var metricsServiceObj = servicesOjb.GetMetricsService();
metricsSericeObj.SetFlowTag(flowtag);		
```

### SetUserId

The SetUserId method sets the user ID.

#### **Syntax**

```
 SetUserId(userid);
```

#### **Parameters**

> **userid** - string that specifies the user ID.

#### **Example**

```
 // Sample code for SetUserId

string userid = "SampleUserID";
var metricsServiceObj = servicesObj.GetMetricsService();
metricsServiceObj.SetUserId(userid);		
```

For more details about custom metrics and reports, refer to [Custom Metrics and Reports Guide](../../../../Foundry/custom_metrics_and_reports/Content/Custom_Metrics_and_Reports_Guide.md).

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
