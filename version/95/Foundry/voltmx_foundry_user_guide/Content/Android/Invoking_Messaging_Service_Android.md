                              

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > Register

Invoking a Messaging Service
============================

A developer should register with Google Cloud Messaging (GCM) for Android services to get the deviceToken that is used to register with Messaging. Also a developer should fetch the **deviceId** and **userfriendlyId** to create an instance of messaging service.

The following are the methods you can use for a messaging service.

*   [Register](#register)
*   [Unregister](#unregister)
*   [Update GeoLocation](#update-geolocation)
*   [Fetch All Messages](#fetch-all-messages)
*   [Mark Message as Read](#mark-message-as-read)
*   [Get Message Content](#get-message-content)

Register
--------

Import the following Libraries:

*   com.google.android.gms.common.ConnectionResult
*   com.google.android.gms.common.GooglePlayServicesUtil
*   com.google.android.gms.gcm.GoogleCloudMessaging
*   com.voltmx.sdk.callback.MessagingCallback
*   com.voltmx.sdk.common.MessagingServiceException
*   com.voltmx.sdk.services.messaging.MessagingService
*   com.voltmx.sdk.client.VoltMXFactory
*   com.voltmx.sdk.common.VoltMXException

### Sample Code

```
  // Sample code to register to messaging 

Context context = getApplicationContext();
String SENDER_ID = < your - project - number - from - google > ;
GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
String gcmRegistrationId = gcm.register(SENDER_ID);
String deviceId = Secure.getString(context.getContentResolver(), Secure.ANDROID_ID);
String ufid = < your - ufid > ;

try {
    messagingClient = new KonyClient().getMessagingService();
} catch (KonyException exception) {
    Log.d("Exception", exception.getMessage());
}
messagingClient.registerInBackground(gcmRegistrationID, UFID, deviceID, new MessagingCallback() {
    @Override
    public void onSuccess(boolean result) {
        Log.d("Registration", "success");
    }

    @Override
    public void onFailure(MessagingServiceException exception) {
        Log.d("Registration Failure", exception.getErrorMessage());
    }
});
```

Unregister
----------

Import the following Libraries:

*   com.voltmx.sdk.callback.MessagingCallback
*   com.voltmx.sdk.common.MessagingServiceException
*   com.voltmx.sdk.services.messaging.MessagingService

### Sample Code

```
 // Sample code to unregister from messaging service
messagingClient.unregisterInBackground(new MessagingCallback() {
    @Override
    public void onSuccess(boolean result) {
        Log.d("Un Registration", "Success");
    }

    @Override
    public void onFailure(MessagingServiceException exception) {
        Log.d("Un Registration Failure" + exception.getErrorMessage());
    }
});
```

Update GeoLocation
------------------

Import the following Libraries:

*   import com.voltmx.sdk.callback.MessagingCallback
*   import com.voltmx.sdk.common.MessagingServiceException
*   import com.voltmx.sdk.services.messaging.MessagingService

### Sample Code

```
  // Sample code to update the geolocation
Double latitude = < latitude - value > ;
Double longitude = < longitude - value > ;
String locationName = < location - name > ;
messagingClient.updateGeoLocationInBackground(latitude, longitude, locationName,
    new MessagingCallback() {
        @Override
        public void onSuccess(boolean result) {
            Log.d("Location Update", "Successful");
        });
}

@Override
public void onFailure(MessagingServiceException exception) {
    Log.d("Location Update Faliure", exception.getErrorCode());
});
}
});
```

Fetch All Messages
------------------

Import the following Libraries:

*   com.voltmx.sdk.callback.MessageContentCallback
*   com.voltmx.sdk.common.MessagingServiceException
*   com.voltmx.sdk.services.messaging.MessagingService

### Sample Code

```
  // Sample code to get all messagesint startIndex = 0;
int pageSize = 1000;
messagingClient.fetchAllMessagesInBackground(startIndex, pageSize, new MessageContentCallback() {
    @Override
    public void onSuccess(JSONObject response) {
        Log.d("Fetched Messages", response.toString());
    }

    @Override
    public void onFailure(MessagingServiceException exception) {
        Log.d("Failed to fetch Messages", exception.getMessage());
    }
});
```

> **_Note:_** The Fetch all messages method returns only part of a message. To get full content of the message, use the [Get Message Content](#get-message-content) method.

Mark Message as Read
--------------------

Import the following Libraries:

*   com.voltmx.sdk.callback.MessageContentCallback
*   com.voltmx.sdk.common.MessagingServiceException
*   com.voltmx.sdk.services.messaging.MessagingService

### Sample Code

```
 // Sample code to mark messages as read
String messageid = < fetch - id - of - the - message > ;
messagingClient.markMessageReadInBackground(messageid, new MessageContentCallback() {
    @Override
    public void onSuccess(boolean result) {
        Log.d("Message", "marked");
    }

    @Override
    public void onFailure(MessagingServiceException exception) {      
        Log.d("Failed to mark message as read", exception.getErrorMessage());
    }
});
```

Get Message Content
-------------------

Import the following Libraries:

*   com.voltmx.sdk.callback.MessageContentCallback
*   com.voltmx.sdk.common.MessagingServiceException
*   com.voltmx.sdk.services.messaging.MessagingService

### Sample Code

```
  // Sample code to fetch message content from  Messaging 
String messageid = < fetch - id - of - the - message > ;
messagingClient.fetchMessageContentInBackground(messageid, new MessageContentCallback() {
    @Override
    public void onSuccess(JSONObject response) {
        Log.d("Message Content", response.toString());
    }

    @Override
    public void onFailure(MessagingServiceException exception) {     
        Log.d("Failed to fetch Message Content", exception.getErrorMessage());
    }
});
```
