                            



Standard Metrics
----------------

  
<details close markdown="block"><summary>Fields</summary>
    
    1.  Error Message
    2.  Error Stack Trace – Stack trace of error. Applicable for event types Error/Crash if the same is available for the type of error/Crash.
    3.  HTTP Response Code – HTTP code of the service response obtained by the device.
    4.  Response Status Code – Output status of the service response from the Volt MX Foundry server.
    5.  SDK Type - If an app is built using Volt MX Foundry SDK this will indicate the type of SDK such as iOS and PhoneGap.
    6.  SDK Version - Version of the Volt MX Foundry SDK used in the client binary.
    7.  Volt MX Foundry app guid – application guid generated on creation of an app in Volt MX Foundry console.
    8.  Volt MX Foundry app name – application name provided on the creation of an app in Volt MX Foundry console.
    9.  Service Group - Integration service name of the service request for applications defined from Volt MX Foundry console.
    10.  Form ID - Form ID of the form where the application event occurred.
    11.  Integration service version header – Version of the integration service requested by application in the service request header.
    12.  Integration service version – Version of the integration service served by the application server for a service request.
    13.  Object mapping duration (request) – Time taken to map the object detail into service request by Volt MX app services.
    14.  Object mapping duration (response) – Time taken to map the object detail into service response by Volt MX app services.
    15.  Object method – Type of the object method. For example, PUT and POST. Applicable for services with object mapping.
    16.  Object name – Name of the object that is mapped in the service request. Applicable for services with object mapping.
    17.  Application Name - Name of the application
    18.  Application Type - Type of the application. For example, Native and SPA.
    19.  Channel - Channel of application. For example, Mobile and Tablet.
    20.  Device Model - The model type of client device.
    21.  DeviceID - Unique ID of the device for the application.
    22.  Volt MX User ID - User ID of the end user using the app. Value has to be set using the setUserID API in the application.
    23.  OS Version - Version of the client device's OS.
    24.  Platform - Application platform. For example, iOS and Android.
    25.  Service ID
    26.  Session TimeStamp\_UTC – Timestamp of session init in UTC.
    27.  Session TimeStamp\_Local – Timestamp of the session in the local time zone. The local time zone is set in the user’s profile in Volt MX Foundry console.
    28.  City - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    29.  Country - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    30.  Region - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    31.  Zip - Obtained from IP for geolocation mapping. This field is not populated if this detail cannot be resolved from the IP address.
    
</details>

<details close markdown="block"><summary>Measures</summary>
    
    1.  Internal Duration - Time spent by the service call in Volt MX App Services for internal processing.
    2.  Total Duration
    3.  External Duration
    4.  PostProcessor Duration - Time spent by the service call in Volt MX app services in custom post-processing logic in the service.
    5.  PreProcessor Duration - Time spent by the service call in Volt MX app services in custom pre-processing logic in the service.
    6.  Request Parse Duration
</details>
    

> **Note:**  
*   Not all fields will have values for all scenarios. For example, the SD card is not relevant for iOS and those fields will be empty for iOS. Similarly, if some information is not obtained from a device during an error or crash, the same will reflect in the report.  
*   Similar data is sometimes made available for different types of data such as Events, Session, Service Requests, Error as data is stored in different tables for them and having different fields called out enables a more optimized query to run if only one type of network call is used in a custom report.  
*   All duration fields indicate time duration in milliseconds.  
*   To view only Custom Metrics service-related data for an application, add a pre-filter or filter while creating reports for Service ID equals "capturevoltmxcustommetrics."  

