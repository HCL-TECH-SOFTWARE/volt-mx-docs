---
layout: "documentation"
category: "engagement_api_guide"
---
                           


Update User using a New Patch
=============================

The **Update User using a New Patch API** updates only the required user attributes. The Admin does not require the complete payload to update a user’s details.

URL
---

The HTTP URL for Update User using a New Patch is:

{% highlight voltMx %}
            api/v1/audience/modify?id=<id>
{% endhighlight %}

OR

{% highlight voltMx %}
            api/v1/audience/modify?emailId=<emailId>
{% endhighlight %}

> **_Note:_** <id>: While creating a user, a unique ID is assigned. Provide the unique identifier for the user in REST URL. You can also provide the email ID of the user in the REST URL

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

PATCH

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| id | Optional, if **email ID** isn't provided. | string | The user ID for which the details are updated. |
| emailId | Optional, if **id** isn't provided. | string | The email ID for which the details are updated. |

Sample Request
--------------

{% highlight voltMx %}
		{
          "emailId":"aron.hale@gmail.com"
		} 

{% endhighlight %}

Output Parameters
-----------------

The following fields are output parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| id | long | Unique ID assigned to a user |
| message | string | Response status message |

Sample Response
---------------

{% highlight voltMx %}{
   "message" : "Details updated successfully",
   "id" : "1"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | User already exists with this mobile numberThe request contains invalid attributesUser already exists with this email |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
