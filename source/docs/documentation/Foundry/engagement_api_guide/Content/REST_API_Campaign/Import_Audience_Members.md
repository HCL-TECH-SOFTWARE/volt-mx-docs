---
layout: "documentation"
category: "engagement_api_guide"
---
                           

Import Audience Members
=======================

Import audience members using CSV formatted data. Returns an audience import id when successful.

Use Case
--------

URL
---

{% highlight voltMx %}http://<host>:<port>/api/v1/audience/import
{% endhighlight %}

Method
------

POST

Input Parameters
----------------

Sample Response Payload for Import Audience Member API
------------------------------------------------------

### JSON Schema for Payload

{% highlight voltMx %}

{

  "message" : "File uploaded successfully, import is in progress",

  "id" : " "

}


{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details Added successfully. |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |
