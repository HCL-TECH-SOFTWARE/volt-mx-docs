                           

You are here: [Tuning Auto Event Capture](#tuning-auto-event-capture) > setEventConfig

Tuning Auto Event Capture
=========================

You can achieve automatic event tracking and reporting without a single line of code by just choosing the events to capture from the application properties as shown in the [Enabling Auto Event Capture](Enabling_Auto_Event_Capture.md).

This section describes the means of enhancing the auto event capture using APIs to tune to the requirements of an application.

Tuning Auto Event Capture has the following:

1.  [Event Analytics APIs to Tune Performance](#event-analytics-apis-to-tune-performance)
2.  [Performance Considerations](#performance-considerations)

Event Analytics APIs to Tune Performance
----------------------------------------

Volt MX  Event analytics APIs buffer the event data before sending the data to the backend for reporting and analytics.

The below APIs allow the application developer to tune the auto event capture and allow for more readable data:

1.  [setEventConfig](#seteventconfig)
2.  [setEventTracking](#seteventtracking)
3.  [setUserID](#setuserid)
4.  [setFlowTag](#setflowtag)
5.  [sendEvent](#sendevent)
6.  [flushEvents](#flushevents)

### setEventConfig

setEventConfig ( “Buffer”,<bufferAutoFlushCount>, <maxBufferCount>) – This API allows to set the autoflushcount – count of events buffered on the client side before data is flushed to server side for reporting.

Maxbuffercount – maximum count of events that can be buffered on the client side before event data stops being accumulated. This count is applicable for scenario like application is offline and network call to send data to backend fails.

> **_Note:_** If the above API is not used to set configuration for application events, the default is autoflushcount\=15 and maxbuffercount\=1000.

### setEventTracking

setEventTracking  (<EventTypes >) – This API allows the developer to set the events to be automatically tracked dynamically at any point in the application.

The event types set in the application properties are used for automatic tracking but the developer can modify the events being tracked by using this API at any point in the application flow to allow- for example- tracking all events for a critical flow and tracking minimal events for regular flows in the application.

*   For example, while entering critical flow, the following is a sample code:
```
HCLMetricsService.setEventTracking(["FormEntry", "Error", "Crash", "FormExit", "ServiceResponse"]);
```
*   For example, while exiting critical flow, the following is a sample code:
```
HCLMetricsService.setEventTracking(["FormEntry", "Error", "Crash"]);
```

> **_Note:_** The events set by using the setEventTracking API override any setting set from the application Project Settings at build time. So, you must set critical events like Error and Crash while using the API.

### setUserID

setUserID (<userId>) – This API allows developer to configure user ID for the user using the application. This allows the business user to track actions done by particular users in the app.

This is useful to trace the journey of the user through the application.

*   It can be very helpful to identify users to target for a particular marketing campaign by checking their behaviors.
*   To track particular scenarios causing application crashes by being able to search the data with a particular userID.

### setFlowTag

setFlowTag (<flowtag>) – This API allows developer to configure a name for the application flow. This parameter is tracked with every event and provides a convenient way for searching application in terms of logical flows instead of raw events, while business user is trying to view the events data in standard or by building custom reports.

### sendEvent

sendEvent (<eventType> , <eventSubType>, <formID>, <widgetID>, <flowTag>, <metaInfo>) – This API allows adding events to the event buffer and can be used to send data for any event, including custom events.

The types of valid event are "FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash","Exception", "Custom","AppLoad","AppTransition".

### flushEvents 

flushEvents() – This API allows developer to be able to override the buffer config settings and force the events currently in buffer to be flushed to network before the flush count is reached.

This API can be used to trigger sending the event data immediately to the network after a critical flow in the application without having to wait for buffer to fill to flush count set in setEventConfig.

> **_Note:_**  Refer to the [VoltMX Iris APIs for metrics](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Installing_VoltMXJS_SDK.md#MetricsS) section of document for more details on API invocation and usage.

For APIs outside of Volt MX Iris context, refer to the below:

*   [Metrics Service APIs for iOS](../../../../Foundry/voltmx_foundry_user_guide/Content/iOS/Installing.md#MetricsS)
*   [Metrics Service APIs for Android](../../../../Foundry/voltmx_foundry_user_guide/Content/Android/Installing_Android_SDK.md#InvokingMEtrics)
*   [Metrics Service APIs for JavaScript](../../../../Foundry/voltmx_foundry_user_guide/Content/JS/Installing_JS_SDK.md#MetricsS)

Performance Considerations
--------------------------

Application developer needs to consider what level of detail for sending data from the application makes sense.

Having a low flushCount like 5 can lead to higher number of network calls for sending the application event data frequently.

Having a very high flushCount like 100 can lead to some event data being sent after a while as app waits for sufficient data to be collected before making a network call.

Data in event buffer is persisted across application sessions, so it is possible to see data from multiple sessions being sent to server at a time.

Recommended approach is to record only basic events for regular application flows and do detailed event gathering for critical flows by modifying the events being tracked and modify back to basic events when application is out of the critical flow using the setEventTracking API.  For more details, refer to [setEventTracking API in Volt MX Iris SDK](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Installing_VoltMXJS_SDK.md#MetricsS) section. (search for setEventTracking API)

Also if required to send event data immediately after a critical application flow, use the flushEvents API. For more details, refer to [flushEvents API in Volt MX Iris SDK](../../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Installing_VoltMXJS_SDK.md#MetricsS) section. (search for flushEvents API)

Since each batch being sent to backend is through the network and can have a network cost for the end customer using the application, this needs to be taken into perspective as well.

Autoevents capture and reporting runs in dedicated thread, and it doesn’t consume considerable heap. However the events present in eventbuffer will occupy application memory (few KBs for regular flushcount like 20). Its impact on application performance will be negligible.

However if application is offline and being used for a long time the events data can pile up on the client as it can’t make network call to send the data to server. So depending on the device capacity try to choose a judicious value for maxbuffercount.

The eventconfig should be set for the application taking the above factors into consideration and keeping the application and end customers into consideration.
