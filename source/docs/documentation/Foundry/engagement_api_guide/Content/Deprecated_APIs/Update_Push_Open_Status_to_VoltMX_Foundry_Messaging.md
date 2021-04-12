---
layout: "documentation"
category: "engagement_api_guide"
---
                          

Update Push Open Status to Volt MX Foundry Messaging
===================================================

This API is used to send acknowledgment to Volt MX Foundry Messaging when a message viewed properly.

**Request URL**
---------------

{% highlight voltMx %}[http://<host or ip>:<port>/service/entrydata/status/$pushId](http://10.10.19.74:8080/service/entrydata/status/$pushId)
{% endhighlight %}

Request Method
--------------

HTTP POST

Input Parameters
----------------

[PushID](../Status/Message Queue tab.html) is appended at the end of the URL.

Response Code
-------------

Success response code is "_200_".
