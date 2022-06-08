---
layout: "documentation"
category: "engagement_api_guide"
---

# Get the Image by ID

The Get Image by ID API is used to fetch the images by specific ID.

## URL

The HTTP URL for Get the image by ID API is:

{% highlight voltMx %}http://<<host>>:<<port>>/service/noauthServices/noauth/assets/<id>
{% endhighlight %}

## Method

GET

## Sample Response

{% highlight voltMx %}The image byte
{% endhighlight %}

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 |                                   |
| Status 400 |                                   |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
