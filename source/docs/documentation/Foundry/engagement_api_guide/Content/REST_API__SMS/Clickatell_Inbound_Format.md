---
layout: "documentation"
category: "engagement_api_guide"
---
                           

Clickatell Inbound Format
=========================

Use Case
--------

URL
---

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/messages/sms/inbound/provider
{% endhighlight %}

Method
------

POST

Input Parameters
----------------

Sample Request Payload for Clickatell Inbound Format
----------------------------------------------------

### JSON Schema for Payload

{% highlight voltMx %}api_id=3523864&from=919676026708&timestamp=2015-02-04+09%3A30%3A36&text=Test+clicks+tell+103+2-4-2015&charset=ISO-8859-1&udh=&moMsgId=d2b66016178dda7c3b4a701056797755&to=447860024227
{% endhighlight %}

Sample Response Payload for Clickatell Inbound Format
-----------------------------------------------------

### JSON Schema for Payload

{% highlight voltMx %}

{

   "message" : "Request Queued",

   "id" : "123456789123456789"

}


{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Always |
