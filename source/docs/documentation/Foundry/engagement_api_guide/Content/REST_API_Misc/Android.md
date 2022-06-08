---
layout: "documentation"
category: "engagement_api_guide"
---

# Android

The **Android** API connects a device user to GCM HTTP connection server.

## URL

The HTTP URL for Android API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/connectiontest/android/appid
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                   |
| --------------- | -------- | ------------ | ----------------------------- |
| appId           | Yes      | alphanumeric | Unique ID assigned to the app |

## Sample Response

{% highlight voltMx %}{  
"message" : "AndroidGCM Cloud Connection Test Successful.",  
"id" : "ApplicationID"  
}

{% endhighlight %}

## Response Status

| Code       | Description                                 |
| ---------- | ------------------------------------------- |
| Status 200 | AndroidGCM cloud connection test successful |
| Status 401 | Unauthorized request                        |
| Status 500 | Server failure to process request           |
