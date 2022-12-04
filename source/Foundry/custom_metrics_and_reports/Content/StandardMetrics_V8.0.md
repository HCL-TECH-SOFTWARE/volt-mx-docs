                            



Standard Metrics V8.0
=====================

**Fields**

*   <details close markdown="block"><summary>Sessions</summary>
    
    1.  Session Environment guid - GUID of the environment.
    2.  Session Application Name - Name of the application.
    3.  Session Application Type - Type of the application. For example, Native and SPA.
    4.  Session Channel - Channel of application. For example, Mobile and Tablet.
    5.  Session Device Model - The model type of client device.
    6.  Session DeviceID - Unique ID of the device for the application.
    7.  Session Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    8.  Session OS Version - Version of the client device's OS.
    9.  Session Platform - Application platform. For example, iOS, Android.
    10.  Session City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    11.  Session Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    12.  Session Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    13.  Session Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    14.  Session TimeStamp\_Local – Timestamp of the session in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    15.  Session TimeStamp\_UTC – Timestamp of session init in UTC.
    16.  Session Error Message – Error message.
    17.  Session Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    18.  Session Volt MX Foundry (Foundry) app name – application name provided on creation of an app in Volt MX Foundry console.
    19.  Session Volt MX Foundry (Foundry) app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    20.  Session Remote IP
    21.  Session Integration service version header – Version of the integration service requested by application in the service request header.
    22.  Session Integration service version – Version of the integration service served by the application server for a service request.
    23.  Session SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    24.  Session SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    25.  Session Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    26.  Session User Agent - User agent of the client device from a network call.
    27.  Session Application Version - Version of the application.
    28.  Session Session Category - Type of session whether interactive or non - interactive.
    
    </details>

*   <details close markdown="block"><summary>Requests</summary>
    
    1.  Request Environment guid - GUID of the environment.
    2.  Request Application Name - Name of the application.
    3.  Request Application Type - Type of the application. For example, Native and SPA.
    4.  Request Channel - Channel of application. For example, Mobile and Tablet.
    5.  Request Device Model - The model type of client device.
    6.  Request DeviceID - Unique ID of the device for the application.
    7.  Request OS Version - Version of the client device's OS.
    8.  Request Platform - Application platform. For example, iOS, Android.
    9.  Request Service ID
    10.  Request TimeStamp\_Local – Timestamp of an event in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    11.  Request TimeStamp\_UTC – Timestamp of an event in UTC.
    12.  Request City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    13.  Request Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    14.  Request Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    15.  Request Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    16.  Request Error Message – Contains any request message that is added by platform code or app developer to provide more info on error events.
    17.  Request Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    18.  Request SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    19.  Request SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    20.  Request Volt MX Foundry (Foundry) app name– application name provided on creation of an app in Volt MX Foundry console.
    21.  Request Volt MX Foundry (Foundry) app guid – application guid generated on the creation of an app in Volt MX Foundry console.
    22.  Request Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    23.  Request FormID
    24.  Request Integration service version header – Version of the integration service requested by application in the service request header.
    25.  Request Integration service version – Version of the integration service served by the application server for a service request.
    26.  Request Object name – Name of the object that is mapped in a service request. Applicable for services with object mapping.
    27.  Request Object method – Type of the object method. For example, PUT and POST. Applicable for services with object mapping.
    28.  Request Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    29.  Request Remote IP
    30.  Request User Agent - User agent of the client device from a network call.
    31.  Request Application Version - Version of the application.
    32.  Request Service Type - Type of Volt MX Foundry service of the application. The values include Integration, Object, and Orchestration.
    33.  Request Connection Type - The type of connector. For example, JSON and XML.
    34.  Request Request Type - Type of Request from the device. For example, Upload and Download.
    35.  Request Request Bytes - Transaction request data in bytes.
    36.  Request Response Bytes - Transaction response data in bytes.
    37.  Request Sync Error - If an error occurs during a sync service call, the value of Request Sync Error is true. Otherwise, it is false.
    38.  Request Sync Mode - Sync Mode of the application. The values include Online and Offline.
    39.  Request Session Category - Type of session whether interactive or non - interactive.
    
    </details>

*   <details close markdown="block"><summary>Events</summary>
    
    1.  Events Environment guid - GUID of the environment.
    2.  Event Application Name - Name of the application.
    3.  Event Application Type - Type of the application. For example, Native and SPA.
    4.  Event Channel - Channel of application. For example, Mobile and Tablet.
    5.  Event Platform - Application platform. For example, iOS and Android.
    6.  Event Device Model - The model type of client device.
    7.  Event User ID- Unique ID of the user.
    8.  Event DeviceID - Unique ID of the device for the application.
    9.  Event User Agent - User agent of the client device from a network call.
    10.  Event Application Version - Version of the application.
    11.  Event Plugin Version IDE - Plugin versions of Volt MX Iris Enterprise used for building the app. This will be populated only for Crash event type.
    12.  Event Plugin Version Platform - Plugin version of the platform (such as iOS plugin) used for building the app. This will be populated only for Crash event type.
    13.  Event SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    14.  Event SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    15.  Event Type - The type of application event. For example, FormEntry and Gesture.
    16.  Event Sub Type - The event sub type of application event. Meaning of subtype depends on the event type. For FormEntry event subtype denotes form entered. For Gesture, it denotes the type of Gesture such as a double-click.
    17.  Event Form ID - Form ID of the form where the application event occurred.
    18.  Event Widget ID - Widget Id of the widget where the application event was triggered. Not applicable for events that do not involve a widget such as FormEntry and FormExit.
    19.  Event Flow Tag - Optional parameter that can be set by a developer via an API call to identify a flow. It helps in easy identification for data analysis.
    20.  Event Error Code - Error code if the event type is error and Exception code if the event type is an exception.
    21.  Event Error Message – Contains any event message that is added by platform code or app developer to provide more info on error events.
    22.  Event Error Crash Report – Crash Report from the device for event type Crash. Data is not symbolicated.
    23.  Event Custom Error Message – Contains any custom message that is added by platform code or app developer to provide more info on error events.
    24.  Event Error File – Application code file where an error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    25.  Event Error Method – Application function call where an error occurred. Applicable for event types Error/Exception if the same is available for the type of error/exception.
    26.  Event Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    27.  Event Error Type – Type of error. For example, Error, Exception, and Crash.
    28.  Event Is Error – true if the event type is error/crash and false if the event type is an exception. Not applicable for other event types.
    29.  Event Response Status Code – Output status of the service response from the Volt MX Foundry server.
    30.  Event Meta Data – Any metadata sent as part of the events data. Typically this is applicable for event type error, exception, crash, and custom.
    31.  Event TimeStamp\_Local - Timestamp when the service request was received in the timestamp set in a user's profile in the manage cloud portal.
    32.  Event TimeStamp\_UTC - Timestamp of request in UTC.
    33.  Event Network Type - Mobile Network vs WiFi (networktype) - indicates the type of network during the time of the crash. Valid values are `mobilenetwork` and `WiFi`.
    
    </details>

*   <details close markdown="block"><summary>Subrequests</summary>
    
    1.  Subrequest Environment guid - GUID of the environment.
    2.  Subrequest Application Name - Name of the application.
    3.  Subrequest Application Version - Version of the application.
    4.  Subrequest Application Type - Type of the application. For example, Native and SPA.
    5.  Subrequest Channel - Channel of application. For example, Mobile and Tablet.
    6.  Subrequest Device Model - Model of the client device.
    7.  Subrequest DeviceID - Unique ID of the device for the application.
    8.  Subrequest OS Version - Version of the client device's OS.
    9.  Subrequest Platform - Application platform. For example, iOS and Android.
    10.  Subrequest Parent Service ID
    11.  Subrequest Service ID
    12.  Subrequest TimeStamp\_Local – Timestamp of the request in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    13.  Subrequest TimeStamp\_UTC – Timestamp of the request in UTC.
    14.  Subrequest City - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    15.  Subrequest Country - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    16.  Subrequest Region - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    17.  Subrequest Zip - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    18.  Subrequest Error Message – Contains any request message that is added by either platform code or app developer to provide more information on error events.
    19.  Subrequest Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    20.  Subrequest SDK Type - If the app is built using Volt MX Foundry SDK, this field indicates the type of SDK such as iOS and PhoneGap.
    21.  Subrequest SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    22.  Subrequest Volt MX Foundry (Foundry) app name – Application name provided on creation of an app in Volt MX Foundry console.
    23.  Subrequest Volt MX Foundry (Foundry) app guid – Application guid generated on the creation of an app in Volt MX Foundry console.
    24.  Subrequest Parent Service Group - Parent service name of the service request for applications defined from Volt MX Foundry console.
    25.  Subrequest Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    26.  Subrequest FormID - Request FormID.
    27.  Subrequest Integration service version header – Version of the integration service requested by application in the service request header.
    28.  Subrequest Integration service version – Version of the integration service served by the application server for a service request.
    29.  Subrequest Object name – Name of the object that is mapped in the service request. It is applicable for services with object mapping.
    30.  Subrequest Object method – Type of the object method. For example, PUT and POST. It is applicable for services with object mapping.
    31.  Subrequest Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    32.  Subrequest Remote IP
    33.  Subrequest User Agent - User agent of the client device from a network call.
    34.  Subrequest Service Type - Type of Volt MX Foundry service of the application. The values include Integration, Orchestration, and Object.
    35.  Subrequest Connection Type - The type of connector. For example, JSON and XML.
    36.  Subrequest Request Type - Type of request from the device. For example, Upload and Download.
    37.  Subrequest Request Bytes - Transaction request data in bytes.
    38.  Subrequest Response Bytes - Transaction response data in bytes.
    39.  Subrequest Sync Error - If an error occurs during a sync service call, the value of Subrequest Sync Error is true. Otherwise, it is false.
    40.  Subrequest Sync Mode - Sync mode of the application. The values include Online and Offline.
    41.  Subrequest Session Category - Type of session whether interactive or non - interactive.
    
    </details>

*   <details close markdown="block"><summary>Direct API Requests</summary>
    
    1.  API\_Request Environment guid - GUID of the environment.
    2.  API\_Request Application Name - Name of the application.
    3.  API\_Request Service ID
    4.  API\_Request TimeStamp\_Local – Timestamp of the request in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    5.  API\_Request TimeStamp\_UTC – Timestamp of the request in UTC.
    6.  API\_Request City - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    7.  API\_Request Country - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    8.  API\_Request Region - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    9.  API\_Request Zip - Obtained from IP for geolocation mapping. If this detail is not resolved from the IP address, this field is not populated.
    10.  API\_Request Error Message – Contains any request message that is added by platform code or app developer to provide more info on error events.
    11.  API\_Request Error Stack Trace – Stack trace of error. It is applicable for event types Error/Crash if the same is available for the type of error/Crash.
    12.  API\_Request SDK Type - If the app is built using Volt MX Foundry SDK, this field will indicate the type of SDK such as iOS and PhoneGap.
    13.  API\_Request SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    14.  API\_Request Volt MX Foundry (Foundry) app name– Application name provided on the creation of an app in Volt MX Foundry console.
    15.  API\_Request Volt MX Foundry (Foundry) app guid – Application guid generated on creation of an app in Volt MX Foundry console.
    16.  API\_Request Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    17.  API\_Request FormID - Request FormID.
    18.  API\_Request Integration service version header – Version of the integration service requested by application in the service request header.
    19.  API\_Request Integration service version – Version of the integration service served by the application server for a service request.
    20.  API\_Request Object name – Name of the object that is mapped in the service request. It is applicable for services with object mapping.
    21.  API\_Request Object method – Type of the object method. For example, PUT and POST. It is applicable for services with object mapping.
    22.  API\_Request Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    23.  API\_Request Remote IP
    24.  API\_Request User Agent - User agent of the client device from a network call.
    25.  API\_Request Service Type - Type of Volt MX Foundry service of the application. The values include Integration, Orchestration, and Object.
    26.  API\_Request Connection Type - The type of connector. For example, JSON and XML.
    27.  API\_Request Request Type - Type of request from the device. For example, Upload and Download.
    28.  API\_Request Request Bytes - Transaction request data in bytes.
    29.  API\_Request Response Bytes - Transaction response data in bytes.
    30.  API\_Request Sync Error - If any error occurs during a sync service call, the value of API\_Request Sync Error is true. Otherwise, it is false.
    31.  API\_Request Sync Mode - Sync mode of the application. The values include Online and Offline.
    32.  API\_Request Session Category - Type of session whether interactive or non - interactive.
    
    </details>

*   <details close markdown="block"><summary>Direct API Subrequests</summary>
    
    1.  API\_SubRequest Environment guid - GUID of the environment.
    2.  API\_SubRequest Application Name - Name of the application.
    3.  API\_SubRequest Parent Service ID
    4.  API\_SubRequest Service ID
    5.  API\_SubRequest TimeStamp\_Local – Timestamp of the request in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    6.  API\_SubRequest TimeStamp\_UTC – Timestamp of the request in UTC.
    7.  API\_SubRequest City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    8.  API\_SubRequest Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    9.  API\_SubRequest Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    10.  API\_SubRequest Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    11.  API\_SubRequest Error Message – Contains any request message that is added by platform code or app developer to provide more info on error events.
    12.  API\_SubRequest Error Stack Trace – Stack trace of error. It is applicable for event types Error/Crash if the same is available for the type of error/Crash.
    13.  API\_SubRequest SDK Type - If the app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    14.  API\_SubRequest SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    15.  API\_SubRequest Volt MX Foundry (Foundry) app name – Application name provided on creation of an app in Volt MX Foundry console.
    16.  API\_SubRequest Volt MX Foundry (Foundry) app guid – Application guid generated on the creation of an app in Volt MX Foundry console.
    17.  API\_SubRequest Parent Service Group - Parent service name of the service request for applications defined from Volt MX Foundry console.
    18.  API\_SubRequest Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    19.  API\_SubRequest FormID - Request FormID.
    20.  API\_SubRequest Integration service version header – Version of the integration service requested by application in the service request header.
    21.  API\_SubRequest Integration service version – Version of the integration service served by the application server for a service request.
    22.  API\_SubRequest Object name – Name of the object that is mapped in the service request. It is applicable for services with object mapping.
    23.  API\_SubRequest Object method – Type of the object method. For example, PUT and POST. It is applicable for services with object mapping.
    24.  API\_SubRequest Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    25.  API\_SubRequest Remote IP
    26.  API\_SubRequest User Agent - Type of Volt MX Foundry service of the application. The values include Integration, Orchestration, and Object.
    27.  API\_SubRequest Service Type
    28.  API\_SubRequest Connection Type - The type of connector. For example, JSON and XML.
    29.  API\_SubRequest Request Type - Type of request from the device. For example, Upload and Download.
    30.  API\_SubRequest Request Bytes - Transaction request data in bytes.
    31.  API\_SubRequest Response Bytes - Transaction response data in bytes.
    32.  API\_SubRequest Sync Error - If any error occurs during a sync service call, the value of API\_SubRequest Sync Error is true. Otherwise, it is false.
    33.  API\_SubRequest Sync Mode - Sync mode of the application. The values include Online and Offline.
    34.  API\_SubRequest Session Category - Type of session whether interactive or non - interactive.
    
    </details>

**Measures**

*   <details close markdown="block"><summary>Sessions</summary>
    
    1.  Session HTTP Response Code
    2.  Session Response Status Code
    3.  Session Session Key
    4.  Session Total Duration
    
    </details>

*   <details close markdown="block"><summary>Requests</summary>
    
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
    17.  Request Total Records Synced - Total number of records that are either downloaded or uploaded during a sync service call.
    18.  Request Request Data Processing Duration - Time taken to parse the data and convert to JSON for a request.
    19.  Request Response Data Processing Duration -Time taken to parse the data and convert to JSON for a response.
    20.  Request Custom-Conflict Duration - Time taken to execute built-in interceptor logic for conflicts in milliseconds.
    21.  Request Conflict Count - Number of conflicts occurred during a sync service call.
    
    </details>

*   <details close markdown="block"><summary>Events</summary>
    
    1.  Event Error Line – Line number in application code file where the error occurred. Applicable for event types error/exception.
    2.  Event HTTP Response Code – HTTP code of the service response obtained by the device.
    3.  Event Response Time – Response time as viewed by the client device. That is the time since service the request is sent from device to server and response obtained back in the device.
    4.  Event Session Key - Unique session identifier for the session in which the application event occurred.
    5.  Event Request Key
    6.  Event Disk Memory Free - indicate free memory in the internal disk in MB.
    7.  Event Disk Memory Total - indicates total memory in the internal disk in MB.
    8.  Event Sd Memory Free - indicates free memory available in SD card in MB.
    9.  Event Sd Memory Total - indicates battery level during the time of the crash. This will be a number indicator % available of battery.
    10.  Event Battery Charge Level - indicates battery level during the time of the crash. This will be a number indicator % available of battery.
    11.  Event Memory Usage – RAM - indicates the memory used when the app crashes.
    12.  Event CPU Usage - indicates the % of CPU being used at the time of the crash.
    13.  Event Form Duration - The amount of time spent in a particular form in milliseconds.
    14.  Event Load Duration - The amount of time taken in milliseconds for an app to load.
    15.  Event Fore Duration - The amount of time in milliseconds spent by an app in the foreground.
    
    </details>

*   <details close markdown="block"><summary>Subrequests</summary>
    
    1.  Subrequest HTTP Response Code – HTTP code of the service response obtained by the device.
    2.  Subrequest Response Status Code – Output status of the service response from the Volt MX Foundry server.
    3.  Subrequest Session Key – Unique session identifier for application session data from session init call.
    4.  Subrequest Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    5.  Subrequest Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    6.  Subrequest PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    7.  Subrequest PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    8.  Subrequest Parse Duration - Time spent by the service call in Volt MX app services in parsing the response from an external source.
    9.  Subrequest External Duration - Time spent by the service call in Volt MX App Services for an external call from Volt MX Server to the backend.
    10.  Subrequest Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    11.  Subrequest Response Status Code
    12.  Subrequest HTTP Response Code – HTTP code of the service response obtained by the device.
    13.  Subrequest Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    14.  Subrequest Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    15.  Subrequest Request\_Key
    16.  Subrequest Total Records Synced - Total number of records that are either downloaded or uploaded during a sync service call.
    17.  Subrequest Request Data Processing Duration - Time taken to parse the data and convert to JSON for a request.
    18.  Subrequest Response Data Processing Duration - Time taken to parse the data and convert to JSON for a response.
    19.  Subrequest Custom-Conflict Duration - Time taken to execute built-in interceptor logic for conflicts in milliseconds.
    20.  Subrequest Conflict Count - Number of conflicts occurred during a sync service call.
    
    </details>

*   <details close markdown="block"><summary>Direct API Requests</summary>
    
    1.  API\_Request HTTP Response Code – HTTP code of the service response obtained by the device.
    2.  API\_Request Response Status Code – Output status of the service response from the Volt MX Foundry server.
    3.  API\_Request Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    4.  API\_Request Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    5.  API\_Request PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    6.  API\_Request PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    7.  API\_Request Parse Duration - Time spent by the service call in Volt MX app services in parsing the response from an external source.
    8.  API\_Request External Duration - Time spent by the service call in Volt MX App Services for an external call from Volt MX Server to the backend.
    9.  API\_Request Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    10.  API\_Request Response Status Code
    11.  API\_Request HTTP Response Code – HTTP code of the service response obtained by the device.
    12.  API\_Request Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    13.  API\_Request Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    14.  API\_Request Request\_Key
    15.  API\_Request Total Records Synced - Total number of records that are either downloaded or uploaded during a sync service call.
    16.  API\_Request Request Data Processing Duration - Time taken to parse the data and convert to JSON for a request.
    17.  API\_Request Response Data Processing Duration - Time taken to parse the data and convert to JSON for a response.
    18.  API\_Request Custom-Conflict Duration - Time taken to execute built-in interceptor logic for conflicts in milliseconds.
    19.  API\_Request Conflict Count - Number of conflicts occurred during a sync service call.
    
    </details>

*   <details close markdown="block"><summary>Direct API Subrequests</summary>
    
    1.  API\_SubRequest HTTP Response Code – HTTP code of the service response obtained by the device.
    2.  API\_SubRequest Response Status Code – Output status of the service response from the Volt MX Foundry server.
    3.  API\_SubRequest Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    4.  API\_SubRequest Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    5.  API\_SubRequest PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    6.  API\_SubRequest PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    7.  API\_SubRequest Parse Duration - Time spent by the service call in Volt MX app services in parsing the response from an external source.
    8.  API\_SubRequest External Duration - Time spent by the service call in Volt MX App Services for an external call from Volt MX Server to the backend.
    9.  API\_SubRequest Total Duration - Total time spent in Volt MX app services server for the service call, from the time request was received by the server until the response was sent back to the device. Total duration is equal to the sum of all the duration fields.
    10.  API\_SubRequest Response Status Code
    11.  API\_SubRequest HTTP Response Code – HTTP code of the service response obtained by the device.
    12.  API\_SubRequest Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    13.  API\_SubRequest Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    14.  API\_SubRequest Request\_Key
    15.  API\_SubRequest Total Records Synced - Total number of records that are either downloaded or uploaded during a sync service call.
    16.  API\_SubRequest Request Data Processing Duration - Time taken to parse the data and convert to JSON for a request.
    17.  API\_SubRequest Response Data Processing Duration - Time taken to parse the data and convert to JSON for a response.
    18.  API\_SubRequest Custom-Conflict Duration - Time taken to execute built-in interceptor logic for conflicts in milliseconds.
    19.  API\_SubRequest Conflict Count - Number of conflicts occurred during a sync service call.
    
    </details>

> **Note:**  
*   Not all fields will have values for all scenarios. For example, SD card is not relevant for iOS and those fields will be empty for iOS. Similarly, if some information is not obtained from a device during an error or crash, the same will reflect in the report.  
*   Similar data is sometimes made available for different types of data such as Events, Session, Service Requests, Error as data is stored in different tables for them and having different fields called out enables a more optimized query to run if only one type of network call is used in a custom report.  
*   All duration fields indicate time duration in milliseconds.      
*   To view only Custom Metrics service-related data for an application, add a pre-filter or filter while creating reports for Service ID equals "capturevoltmxcustommetrics".  

