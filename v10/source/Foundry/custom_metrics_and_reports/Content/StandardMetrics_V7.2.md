                            
Standard Metrics V7.2
=====================

Fields

   
<details close markdown="block"><summary>Sessions</summary>
    
    1.  Session Application Name - Name of the application.
    2.  Session Application Type - The type of the application. For example, Native and SPA.
    3.  Session Channel - The type of application channel. For example, Mobile and Tablet.
    4.  Session Device Model - The model type of client device.
    5.  Session DeviceID - Unique ID of the device for the application.
    6.  Session Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    7.  Session OS Version - The OS Version of the client device.
    8.  Session Platform - Application platform. For example, iOS and Android.
    9.  Session City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    10.  Session Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    11.  Session Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    12.  Session Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    13.  Session TimeStamp\_Local – Timestamp of the session in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    14.  Session TimeStamp\_UTC – Timestamp of the session init in UTC.
    15.  Session Error Message
    16.  Session Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    17.  Session Volt MX Foundry (Foundry) app name – application name provided on creation of an app in Volt MX Foundry console.
    18.  Session Volt MX Foundry (Foundry) app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    19.  Session Remote IP
    20.  Session Integration service version header – Version of the integration service requested by application in the service request header.
    21.  Session Integration service version – Version of the integration service served by the application server for a service request.
    22.  Session SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    23.  Session SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    24.  Session Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    25.  Session User Agent - User agent of the client device from a network call.    
</details>

<details close markdown="block"><summary>Requests</summary>    
    1.  Request Application Name - Name of the application.
    2.  Request Application Type - The type of the application. For example, Native and SPA.
    3.  Request Channel - The type of application channel. For example, Mobile and Tablet.
    4.  Request Device Model - The model type of client device.
    5.  Request DeviceID - Unique ID of the device for the application.
    6.  Request OS Version - The OS version of the client device.
    7.  Request Platform - Application platform. For example, iOS and Android.
    8.  Request Service ID
    9.  Request TimeStamp\_Local – Timestamp of the request in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    10.  Request TimeStamp\_UTC – Timestamp of the request in UTC.
    11.  Request City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    12.  Request Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    13.  Request Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    14.  Request Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    15.  Request Error Message – Contains any request message that is added by platform code or app developer to provide more info on error events.
    16.  Request Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    17.  Request SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    18.  Request SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    19.  Request Volt MX Foundry (Foundry) app name– application name provided on creation of an app in Volt MX Foundry console.
    20.  Request Volt MX Foundry (Foundry) app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    21.  Request Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    22.  Request FormID
    23.  Request Integration service version header – Version of the integration service requested by application in the service request header.
    24.  Request Integration service version – Version of the integration service served by the application server for a service request.
    25.  Request Object name – Name of the object that is mapped in the service request. Applicable for services with object mapping.
    26.  Request Object method – Type of the object method. For example, PUT and POST. Applicable for services with object mapping.
    27.  Request Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    28.  Request Remote IP
    29.  Request User Agent - User agent of the client device a network call.    
</details>

<details close markdown="block"><summary>Events</summary>    
    1.  Event Application Name - Name of the application.
    2.  Event Application Type - The type of the application. For example, Native and SPA.
    3.  Event Channel - The type of application channel. For example, Mobile and Tablet.
    4.  Event Platform - Application platform. For example, iOS and Android.
    5.  Event Device Model - The model type of client device.
    6.  Event User ID- Unique ID of the user.
    7.  Event DeviceID - Unique ID of the device for the application.
    8.  Event User Agent - User agent of the client device from a network call.
    9.  Event Application Version - Version of the application.
    10.  Event Plugin Version IDE - Plugin versions of Volt MX Iris Enterprise used for building the app. This will be populated only for Crash event type.
    11.  Event Plugin Version Platform - Plugin version of the platform (such as iOS plugin) used for building the app. This will be populated only for Crash event type.
    12.  Event SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    13.  Event SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    14.  Event Type - Type of application event. For example, FormEntry and Gesture.
    15.  Event Sub Type - Event sub type of application event. Meaning of subtype depends on the event type. For FormEntry event subtype denotes form entered. For Gesture, it denotes the type of Gesture such as a double-click.
    16.  Event Form ID - Form ID of the form where the application event occurred.
    17.  Event Widget ID - Widget Id of the widget where the application event was triggered. Not applicable for events that do not involve a widget such as FormEntry and FormExit.
    18.  Event Flow Tag - Optional parameter that can be set by the developer via an API call to identify a flow. Helps in easy identification for data analysis.
    19.  Event Error Code - Error code if the event type is error and Exception code if the event type is an exception.
    20.  Event Error Message – Contains any event message that is added by platform code or app developer to provide more info on error events.
    21.  Event Error Crash Report – Crash Report from the device for event type Crash. Data is not symbolicated.
    22.  Event Custom Error Message – Contains any custom message that is added by platform code or app developer to provide more info on error events.
    23.  Event Error File – Application code file where the error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    24.  Event Error Method – Application function call where the error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    25.  Event Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    26.  Event Error Type – Type of error. For example, Error, Exception, and Crash.
    27.  Event Is Error – true if the event type is error/crash and false if the event type is an exception. Not applicable for other event types.
    28.  Event Response Status Code – Output status of the service response from the Volt MX Foundry server.
    29.  Event Meta Data – Any metadata sent as part of the events data. Typically this is applicable for event type error, exception, crash, and custom.
    30.  Event TimeStamp\_Local - Timestamp when the service request was received in the timestamp set in a user's profile in the manage cloud portal.
    31.  Event TimeStamp\_UTC - Timestamp of request in UTC.
    32.  Event Network Type - Mobile Network vs WiFi (networktype) - indicates the type of network during the time of the crash. Valid values are `mobilenetwork` and `WiFi`.    
</details>

<details close markdown="block"><summary>Sessions</summary>    
    1.  Session HTTP Response Code
    2.  Session Response Status Code
    3.  Session Session Key
    4.  Session Total Duration
</details>

<details close markdown="block"><summary>Requests</summary>    
    1.  Request HTTP Response Code – HTTP code of the service response obtained by the device.
    2.  Request Response Status Code – Output status of the service response from the Volt MX Foundry server.
    3.  Request Session Key – Unique session identifier for application session data from session init call.
    4.  Request Total Duration \- Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    5.  Request Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    6.  Request PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    7.  Request PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    8.  Request Parse Duration - Time spent by the service call in Volt MX app services in parsing the response from an external source.
    9.  Request External Duration - Time spent by the service call in Volt MX App Services for an external call from Volt MX Server to the backend.
    10.  Request Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    11.  Request Response Status Code
    12.  Request HTTP Response Code – HTTP code of the service response obtained by the device.
    13.  Request Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    14.  Request Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    15.  Request Request\_Key
    16.  Request session\_key    
</details>

<details close markdown="block"><summary>Events</summary>    
    1.  Event Error Line – Line number in application code file where the error occurred. Applicable for event types error/exception.
    2.  Event HTTP Response Code – HTTP code of the service response obtained by the device.
    3.  Event Response Time – Response time as viewed by the client device. That is the time since the service request is sent from device to server and response obtained back in the device.
    4.  Event Session Key - Unique session identifier for the session in which the application event occurred.
    5.  Event Request Key
    6.  Event Disk Memory Free - indicate free memory in the internal disk in MB.
    7.  Event Disk Memory Total - indicates total memory in the internal disk in MB.
    8.  Event Sd Memory Free - indicates free memory available in SD card in MB.
    9.  Event Sd Memory Total - indicates battery level during the time of the crash. This will be a number indicator % available of battery.
    10.  Event Battery Charge Level - indicates battery level during the time of the crash. This will be a number indicator % available of battery.
    11.  Event Memory Usage – RAM - indicates the memory used when the app crashes.
    12.  Event CPU Usage - indicates the % of CPU being used at the time of the crash.
    13.  Event Form Duration - The amount of time spent in a particular Form in milliseconds.
</details>    

> **Note:**  
*   Not all fields will have values for all scenarios. For example, the SD card is not relevant for iOS and those fields will be empty for iOS. Similarly, if some information is not obtained from a device during an error or crash, the same will reflect in the report.  
*   Similar data is sometimes made available for different types of data such as Events, Session, Service Requests, Error as data is stored in different tables for them and having different fields called out enables a more optimized query to run if only one type of network call is used in a custom report.  
*   All duration fields indicate time duration in milliseconds. 
*   To view only Custom Metrics service-related data for an application, add a pre-filter or filter while creating reports for Service ID equals "capturevoltmxcustommetrics."  


