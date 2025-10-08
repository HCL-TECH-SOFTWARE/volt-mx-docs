                             

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > Initializing the iOS Client SDK

Initializing the iOS Client SDK
===============================

To use any Volt MX Foundry SDK functions, you must add  `#import <KonySDK/KNYSDK.h>` in the header of your files. You must use the following code snippet to initialize the SDK Client before using any services. Do this in your _AppDelegate's application:didFinishLaunchingWithOptions:_ method.

```
//Sample code to initialize Volt MX Foundry Client
KNYClient * client = [KNYClient sharedClient];
[client initializeInBackgroundWithAppKey: @"<app-key>"
    appSecret: @"<app-secret>"
    serviceURLString: @"<service-url>"
    completion: ^ (BOOL succeeded, NSError * error) {
        if (succeeded) {
            // handle the success case here
        } else {
            // handle the failure case here
            // use the details in 'error'
        }
    }
];

```

> **_Note:_** Only upon successful completion of -\[KNYClient initializeInBackgroundWithAppKey:appSecret:serviceURLString:completion\] method, you can call the other methods in the SDK such as Identity Service, Integration Service, Messaging Service, and Reporting Service.  
  
As -\[ KNYClient initializeInBackgroundWithAppKey:appSecret:serviceURLString:completion\] method is asynchronous call, you must wait until the background process to be completed before you call the other methods in the SDK. If you attempt to call any other methods in the SDK before the initialization method completion, the system will not allow you to call the methods and throws exception.  

If you are using an untrusted self-signed (SSL) certificate with Foundry installation, by default native apps do not allow untrusted SSL certificates for HTTPS connection.  
  
To make your native apps work with untrusted SSL certificates, call the following API:  
  
`[KNYClient acceptSelfSignedCertificates];`

> **_Note:_** Once a user calls the \[KNYClient acceptSelfSignedCertificates\]; API, a native application will accept SSL certificates throughout the app life cycle. A user cannot disable the API from a native app running on a device.

When SDK is initialized, the Volt MX SDK registers a session and sends its information to the Volt MX Foundry Server. If the device is offline, or the server is not reachable, the session information persists on the device until it can successfully send the information to the Volt MX Foundry server.

For more information on application session, refer [Standard Report Docs](../../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.md).

> **_Note:_** The sessions created by native Foundry SDKs are interactive.
