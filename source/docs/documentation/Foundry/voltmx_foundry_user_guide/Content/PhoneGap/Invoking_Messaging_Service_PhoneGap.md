---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                             

User Guide: [SDKs](../Foundry_SDKs.html) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.html) > Register

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

{% highlight voltMx %} // Sample code to register to messaging service
voltmxSDKObject.getmessagingservice().register(osType, deviceId, pnsToken, email, successHandler,
    errorHandler);
{% endhighlight %}

Unregister
----------

{% highlight voltMx %} // Sample code to unregister from messaging service
voltmxSDKObject.getmessagingservice().unregister(successHandler, errorHandler);
{% endhighlight %}

Update GeoLocation
------------------

{% highlight voltMx %} // Sample code to update the geolocation
voltmxSDKObject.getmessagingservice().updateGeoLocation(latitude, longitude, locationName,
    successHandler, errorHandler);
{% endhighlight %}

Fetch All Messages
------------------

{% highlight voltMx %} // Sample code to fetch all messages
voltmxSDKObject.getmessagingservice().fetchAllMessages(
    startIndex, pageSize, successHandler, errorHandler);   

{% endhighlight %}

Mark Message as Read
--------------------

{% highlight voltMx %} // Sample code to mark messages as read
voltmxSDKObject.getmessagingservice().markMessageRead(fetchId, successHandler, errorHandler);
{% endhighlight %}

Fetch Message Content from Volt MX Foundry Messaging
---------------------------------------------------

{% highlight voltMx %} // Sample code to fetch message content from Volt MX Foundry Messaging

voltmxSDKObject.getmessagingservice().fetchMessageContent(fetchId, successHandler, errorHandler);
{% endhighlight %}
