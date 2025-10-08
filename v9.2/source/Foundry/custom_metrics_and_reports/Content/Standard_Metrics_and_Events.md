                            



Standard Metrics and Events
---------------------------
   
<details close markdown="block"><summary>Fields</summary>
    
    1.  Application Name - Name of the application.
    2.  Application Type - The type of the application. For example, Native and SPA.
    3.  Channel - The type of application channel. For example, Mobile and Tablet.
    4.  Platform - Application platform. For example, iOS and Android.
    5.  Device Model - The model type of client device.
    6.  Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    7.  DeviceID - Unique ID of the device for the application.
    8.  User Agent - User agent of the client device from a network call.
    9.  OS Version - The OS version of the client device.
    10.  Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    11.  Service ID
    12.  City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    13.  Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    14.  Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    15.  Zip Code - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    16.  Event Application Name - Name of the application.
    17.  Event Application Type - Type of the application. For example, Native and SPA.
    18.  Event Channel - Channel of application. For example, Mobile and Tablet.
    19.  Event Platform - Application platform. For example, iOS and Android.
    20.  Event Device Model - The model type of client device.
    21.  Event User ID- Unique ID of the user.
    22.  Event DeviceID - Unique ID of the device for the application.
    23.  Event User Agent - User agent of the client device from a network call.
    24.  Event Application Version - Version of the application.
    25.  Plugin Version IDE - Plugin versions of Volt MX Iris Enterprise used for building the app. This will be populated only for Crash event type.
    26.  Plugin Version Platform - Plugin version of the platform (such as iOS plugin) used for building the app. This will be populated only for Crash event type.
    27.  SDK Type - If the app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    28.  SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    29.  Event Type - Type of application event. For example, FormEntry and Gesture.
    30.  Event Sub Type - Event sub type of application event. Meaning of subtype depends on the event type. For FormEntry event subtype denotes form entered. For Gesture, it denotes the type of Gesture such as a double-click.
    31.  Event Form ID - Form ID of the form where the application event occurred.
    32.  Event Widget ID - Widget Id of the widget where the application event was triggered. Not applicable for events that do not involve a widget such as FormEntry and FormExit.
    33.  Event Flow Tag - Optional parameter that can be set by the developer via an API call to identify a flow. Helps in easy identification for data analysis.
    34.  Error Code - Error code if the event type is error and Exception code if the event type is an exception.
    35.  Error Message
    36.  Error Crash Report – Crash Report from the device for event type Crash. Data is not symbolicated.
    37.  Custom Error Message – Contains any custom message that is added by platform code or app developer to provide more info on error events.
    38.  Error File – Application code file where the error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    39.  Error Method – Application function call where the error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    40.  Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    41.  Error Type – Type of error. For example, Error, Exception, and Crash.
    42.  Is Error – true if the event type is error/crash and false if the event type is an exception. Not applicable for other event types.
    43.  Response Status Code – Output status of the service response from the Volt MX Foundry server.
    44.  Events Meta Data – Any metadata sent as part of the events data. Typically this is applicable for event type error, exception, crash, and custom.
    45.  Event TimeStamp\_UTC - Timestamp of request in UTC.
    46.  Event TimeStamp\_Local - Timestamp when the service request was received in the timestamp set in a user's profile in the manage cloud portal.
    47.  Session TimeStamp\_UTC - Timestamp of the session in UTC.
    48.  Session TimeStamp\_Local - Timestamp when the service request was received in the timestamp set in a user's profile in the manage cloud portal.
    49.  Request TimeStamp\_UTC - Timestamp of request in UTC.
    50.  Request TimeStamp\_Local - Timestamp when the service request was received in the timestamp set in a user's profile in the manage cloud portal.
    51.  Request Volt MX Foundry app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    52.  Request Volt MX Foundry app name – application name provided on creation of an app in Volt MX Foundry console.
    53.  Session Volt MX Foundry app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    54.  Session Volt MX Foundry app name – application name provided on creation of an app in Volt MX Foundry console.
    55.  Object method – Type of the object method. For example, PUT and POST. Applicable for services with object mapping.
    56.  Object name – Name of the object that is mapped in the service request. Applicable for services with object mapping.
    57.  Integration service version header – Version of the integration service requested by application in the service request header.
    58.  Integration service version – Version of the integration service served by the application server for a service request.
    59.  Network Type - Mobile Network vs WiFi (networktype) - indicates the type of network during the time of the crash. Valid values are `mobilenetwork` and `WiFi`.
    
</details>

<details close markdown="block"><summary>Measures</summary>    
    1.  Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    2.  Total Duration
    3.  External Duration
    4.  PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    5.  PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    6.  Request Parse Duration - Request Parse Duration.
    7.  Error Line – Line number in application code file where the error occurred. Applicable for event types error/exception.
    8.  HTTP Response Code – HTTP code of the service response obtained by the device.
    9.  Response Time – Response time as viewed by the client device. That is the time since the service request is sent from device to server and response obtained back in the device.
    10.  Event Session Key – Unique session identifier for the session in which the application event occurred.
    11.  Middleware Session Key – Unique session identifier for application session data from the session init call.
    12.  Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    13.  Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    14.  Count – Sample custom field created to show the count of application. This is to function as a count(\*) for application session and service request calls.
    15.  Disk Memory Free - indicate free memory in the internal disk in MB.
    16.  Disk Memory Total - indicates total memory in the internal disk in MB.
    17.  Sd Memory Free - indicates free memory available in SD card in MB.
    18.  Sd Memory Total - indicates total memory available in SD card in MB.
    19.  Battery Charge Level - indicates battery level during the time of the crash. This will be a number indicator % available of battery.
    20.  Memory usage – RAM - indicates the memory used when the app crashes.
    21.  CPU usage - indicates the % of CPU being used at the time of the crash.
    22.  Form Duration - The amount of time spent in a particular form in milliseconds.
    23.  Count
</details>
    

> **Note:**  
*   Not all fields will have values for all scenarios. For example, the SD card is not relevant for iOS and those fields will be empty for iOS. Similarly, if some information is not obtained from a device during an error or crash, the same will reflect in the report.  
*   Similar data is sometimes made available for different types of data such as Events, Session, Service Requests, Error as data is stored in different tables for them and having different fields called out enables a more optimized query to run if only one type of network call is used in a custom report.  
*   All duration fields indicate time duration in milliseconds.  
*   To view only Custom Metrics service-related data for an application, add a pre-filter or filter while creating reports for Service ID equals "capturevoltmxcustommetrics."  

