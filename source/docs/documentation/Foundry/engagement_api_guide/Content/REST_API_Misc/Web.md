---
layout: "documentation"
category: "engagement_api_guide"
---

# Web

The **Web** API connects a device user to FCM HTTP connection server.

## URL

The HTTP URL for Web API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/connectiontest/web/fcm/appid
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
"id" : "ApplicationID"  
"message" : "WebFCM Cloud Connection Test Successful.",  
}

{% endhighlight %}

## Response Status

| Code       | Description                             |
| ---------- | --------------------------------------- |
| Status 200 | WebFCM cloud connection test successful |
| Status 401 | Unauthorized request                    |
| Status 500 | Server failure to process request       |
