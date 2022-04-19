---
layout: "documentation"
category: "engagement_api_guide"
---

# Update Apple WWRD Certificate

The **Update Apple WWRD Certificate** API updates Apple WWRD certificate.

## URL

The HTTP URL for Update Apple WWRD Certificate API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/passcerts/applewwrdc
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Sample Request

{% highlight voltMx %}appleCert: Certificate File
{% endhighlight %}

## Sample Response

{% highlight voltMx %}{  
   "message" : "Certificate Upload Successfully",  
   "id" : ""  
}

{% endhighlight %}

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Certificate uploaded successfully |
| Status 400 | Invalid pass certificate          |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
