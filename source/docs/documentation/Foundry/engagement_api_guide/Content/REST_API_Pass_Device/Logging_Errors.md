---
layout: "documentation"
category: "engagement_api_guide"
---
                           


Logging Errors
==============

The **Logging Errors** API is used to register logging errors.

URL
---

The HTTP URL for Logging Errors API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/log
{% endhighlight %}

Method
------

POST

Sample Request
--------------

{% highlight voltMx %}{"logs": ["MyLog1", "MyLog2"]}
{% endhighlight %}

Sample Response
---------------

{% highlight voltMx %}{  
   "message": "Successfully updated the logs.",  
   "id": ""  
}  

{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Successfully updated logs |
| Status 400 | Invalid Request. Payload is incorrect. |
