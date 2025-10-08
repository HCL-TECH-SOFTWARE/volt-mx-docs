                             

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > Registering and Getting Messages from Volt MX Foundry Messaging

Invoking a Messaging Service
============================

The following are the methods you can use for a messaging service.

*   [Registering and Getting Messages from Volt MX Foundry Messaging](#registering-and-getting-messages-from-foundry-messaging)
*   [Unregistering from Messaging Service](#unregistering-from-messaging-service)
*   [Updating GeoLocation](#updating-geolocation)
*   [Fetching All messages in the Message Queue](#fetching-all-messages-in-the-message-queue)
    
*   [Fetching a complete message for long messages using message ID](#fetching-a-complete-message-for-long-messages-using-message-id)
    
*   [Mark a message as read](#mark-a-message-as-read)
    

Registering and Getting Messages from Volt MX Foundry Messaging
--------------------------------------------------------------

To register, use the following code snippet to call the method. To send a message to the registered device, go to Volt MX Foundry portal and send the message. You will receive a push notification message.

In the - (BOOL)application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*), launchOptions method registers for remote notification and calls the KNYClient Intialize method. For more details, refer [Initializing the Volt MX Foundry Client SDK](#Initiali)

In the - (void)application:(UIApplication \*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData \*) deviceToken method, call the following code to register and receive push notifications.

```
 KNYMessagingService * messaging = [KNYMessagingService sharedMessagingService];

//
// Register with Messaging Service:
//

// the device token received in app delegate method
// - (void)application:(UIApplication *)application 
didRegisterForRemoteNotificationsWithDeviceToken: (NSData * ) deviceToken
NSData * deviceToken;

[messaging registerInBackgroundWithDeviceToken: deviceToken
    alias: @"<alias>"
    completion: ^ (BOOL succeeded, NSError * error) {    
        if (succeeded) {         // ...
               } else {       // handle the failure case
                   // use the details in 'error'
        }
    }
];
```

> **_Note:_** Call these methods only after successful completion of -\[KNYClient initializeInBackgroundWithAppKey:appSecret:serviceURLString:completion\]. For more details, refer to [Init method](#NoteInit).  

Unregistering from Messaging Service
------------------------------------

This API stops receiving messages.

```
 [messaging unregisterInBackgroundUsingCompletionBlock: ^ (BOOL succeeded, NSError * error) {
    if (succeeded) {
        // ...
    } else {
        // handle the failure case
        // use the details in 'error'
    }
}];

```

Updating GeoLocation
--------------------

```
 
[messaging updateGeoLocationInBackgroundWithLatitude: 28.449595 // note: appropriate value must be used
    longitude: -81.481600 // note: appropriate value must be used
    locationName: @"Sand Lake Rd, Orlando, FL 32819" // note: appropriate value must be used
    completion: ^ (BOOL succeeded, NSError * error) {
        if (succeeded) {
            // ...
        } else {
            // handle the failure case
            // use the details in 'error'
        }
    }
];

```

Fetching All messages in the Message Queue
------------------------------------------

```
 
[messaging fetchAllMessagesInBackgroundWithStartIndex: 0 // note: appropriate value must be used
    pageSize: 10 // note: appropriate value must be used
    completion: ^ (NSDictionary * objects, NSError * error) {
        if (error == nil) {
            // use data in 'objects' returned by the operation
            // ...
        } else {
            // handle the failure case
            // use the details in 'error'
        }
    }
];
```

Fetching a complete message for long messages using message ID
--------------------------------------------------------------

```
 [messaging fetchMessageContentInBackgroundWithMessageId: @"<message-id>"
    completion: ^ (NSString * string, NSError * error) {
        if (error == nil) {
            // use message in 'string' returned by the operation
            // ...
        } else {
            // handle the failure case
            // use the details in 'error'
        }
    }
];

```

Mark a message as read
----------------------

```
 
[messaging markMessageReadInBackgroundWithMessageId: @"<message-id>"
    completion: ^ (BOOL succeeded, NSError * error) {
        if (succeeded) {
            // ...
        } else {
            // handle the failure case
            // use the details in 'error'
        }
    }
];
```
