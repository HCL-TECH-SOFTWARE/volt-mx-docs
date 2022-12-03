                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Register

Invoking a Messaging Service
============================

A developer should register with Google Cloud Messaging (GCM) for Android services to get a deviceToken that is used to register with Volt MX Foundry Messaging. Also a developer should fetch the **deviceId** and **userfriendlyId** to create an instance of messaging service.

You can use the following methods for a messaging service:

*   [Register](#register)
*   [Unregister](#unregister)
*   [Update GeoLocation](#update-geolocation)
*   [Fetch All Messages](#fetch-all-messages)
*   [Mark Message as Read](#mark-message-as-read)
*   [Fetch Message Content from Volt MX Foundry Messaging](#fetch-message-content-from-foundry-messaging)

Register
--------

```
 // Sample code to register to messaging service
voltmxSDKObject.getmessagingservice().register(osType, deviceId, pnsToken, email, successHandler,
    errorHandler);
```

Unregister
----------

```
 // Sample code to unregister from messaging service
voltmxSDKObject.getmessagingservice().unregister(successHandler, errorHandler);
```

Update GeoLocation
------------------

```
 // Sample code to update the geolocation
voltmxSDKObject.getmessagingservice().updateGeoLocation(latitude, longitude, locationName,
    successHandler, errorHandler);
```

Fetch All Messages
------------------

```
 // Sample code to fetch all messages
voltmxSDKObject.getmessagingservice().fetchAllMessages(
    startIndex, pageSize, successHandler, errorHandler);   

```

Mark Message as Read
--------------------

```
 // Sample code to mark messages as read
voltmxSDKObject.getmessagingservice().markMessageRead(fetchId, successHandler, errorHandler);
```

Fetch Message Content from Volt MX Foundry Messaging
---------------------------------------------------

```
 // Sample code to fetch message content from Volt MX Foundry Messaging

voltmxSDKObject.getmessagingservice().fetchMessageContent(fetchId, successHandler, errorHandler);
```
