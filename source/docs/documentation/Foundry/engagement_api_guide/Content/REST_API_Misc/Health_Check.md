---
layout: "documentation"
category: "engagement_api_guide"
---

# Health Check

The **Health Check** API returns status as passed or failed for all the findings such as Access to Database Server, Access to Cache, Access to Reporting Queue, Quartz jobs, and the Static Resources Location.

## URL

The HTTP URL for Health Check API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/healthcheck/json
{% endhighlight %}

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Sample Response

{% highlight voltMx %}{  
  "healthDetail": {  
  "Access to Database Server": "PASSED",  
  "Access to Cache": "PASSED",  
  "Access to Reporting Queue": "PASSED",  
  "Quartz jobs": "PASSED",  
  "Static Resources Location": "PASSED"  
   },  
   "healthCheck": "PASSED",  
   "version": "5.6-0.5"  
}

{% endhighlight %}

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Passed successfully               |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
