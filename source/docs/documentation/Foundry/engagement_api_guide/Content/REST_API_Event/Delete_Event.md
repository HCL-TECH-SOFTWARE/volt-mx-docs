---
layout: "documentation"
category: "engagement_api_guide"
---

# Delete Event

The **Delete Event** API deletes a deactivated event from Volt MX Foundry Engagement server. The service accepts the Event ID as an input parameter to delete an event.

## URL

The HTTP URL for **Delete Event** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/events/<id>/delete
{% endhighlight %}

> **_Note:_** <id>: Here, id refers to an id that is used to map an event with internal data record.

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                                                      |
| --------------- | -------- | ---- | -------------------------------------------------------------------------------- |
| Event ID        | Yes      | long | Here, id refers to an id that is used to map an event with internal data record. |

## Sample Response

{% highlight voltMx %}{
"id" : "2",
"message" : "Event deleted successfully"
}
{% endhighlight %}

> **_Note:_** Here, id displayed in sample response refers to an id that is used to map an event with internal data record.

## Response Status

| Code       | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Status 200 | Event deleted successfully                                                                              |
| Status 400 | Invalid event ID provided or no event found with given ID Only deactivated events are allowed to delete |
| Status 500 | Server failure to process request                                                                       |
