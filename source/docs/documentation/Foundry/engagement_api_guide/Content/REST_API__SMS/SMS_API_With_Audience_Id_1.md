---
layout: "documentation"
category: "engagement_api_guide"
---

# Send SMS API using Audience ID or an Array of Segment

The **Send SMS API using Audience ID or an Array of Segment** accepts either **audience ID** or a **segment array** as an input parameters and sends SMS messages.

## URL

The HTTP URL for the Send SMS API using Audience ID or an Array of Segment is:

{% highlight voltMx %}http://<host or ip>:<port>/api/v1/message/sms
{% endhighlight %}

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

Based on the content format, the payload's request header includes Content-Type for:

- XML is text/xml;charset=UTF-8
- JSON is application/json;charset=UTF-8

## Input Parameters

The following fields are input parameters:

| Input Parameter   | Level – Two | Level – Three | Level – Four    | Required            | Type    | Description                                                    |
| ----------------- | ----------- | ------------- | --------------- | ------------------- | ------- | -------------------------------------------------------------- |
| smsServiceRequest |             |               |                 |                     |         | An array of smsServiceRequest objects                          |
|                   | messages    |               |                 |                     |         | An array of messages objects                                   |
|                   |             | message       |                 |                     |         | An array of message objects                                    |
|                   |             |               | startTimestamp  | Optional            | string  | Time relative to a starting point                              |
|                   |             |               | expiryTimestamp | Optional            | string  | Time relative to an ending point                               |
|                   |             |               | priorityService | Required            | boolean | If priority service or not                                     |
|                   |             |               | recipients      | id (Optional)       |         | An array of recipients objects: -id                            |
|                   |             |               | segment         | criteria (Required) |         | An array of segment objects: criteria                          |
|                   |             |               | content         | Optional            | string  | SMS description                                                |
|                   |             |               | channel         | Optional            | string  | Used to define type of SMS. For example Voice SMS or Text SMS. |

## Sample Request

### XML

{% highlight voltMx %}

<smsServiceRequest>

<messages>

<message>

<startTimestamp>0</startTimestamp>

<expiryTimestamp>0</expiryTimestamp>

<priorityService>true</priorityService>

<recipients>

<recipient id="1"/>

<segment criteria="##1##"/>

</recipients>

<content>sample sms message</content>

</message>

</messages>

</smsServiceRequest>

{% endhighlight %}

### XML for Voice

{% highlight voltMx %}

<smsServiceRequest>

<messages>

<message>

<channel>voicesms</channel>

<startTimestamp>0</startTimestamp>

<expiryTimestamp>0</expiryTimestamp>

<priorityService>true</priorityService>

<recipients>

<recipient id="1"/>

<segment criteria="##1##"/>

</recipients>

<content>sample sms message</content>

</message>

</messages>

</smsServiceRequest>

{% endhighlight %}

### JSON

#### Sample Request with Audience ID

{% highlight voltMx %}{
"smsServiceRequest": {
"messages": {
"message": {
"startTimestamp": "0",
"expiryTimestamp": "0",
"priorityService": "true",
"recipients": {
"recipient": {
"id": "1"
},
"segment": {
"criteria": "##4##"
}
},
"content": "sample sms message",
}
}
}
}
{% endhighlight %}

#### Sample Request with an array of Segment

{% highlight voltMx %}{
"smsServiceRequest": {
"messages": {
"message": {
"startTimestamp": "0",
"expiryTimestamp": "0",
"priorityService": "true",
"recipients": {

    				"segment": {
    					"criteria": "##4##"
    				}
    			},
    			"content": "sample sms message",			}
    	}
    }

}
{% endhighlight %}

#### Sample Request with Audience ID for Voice SMS

{% highlight voltMx %}{
"smsServiceRequest": {
"messages": {
"message": {
"startTimestamp": "0",
"expiryTimestamp": "0",
"priorityService": "true",
"recipients": {
"recipient": {
"id": "1"
},
"segment": {
"criteria": "##4##"
}
},
"content": "sample sms message",
},
"channel": "voicesms",
}

    }

}
}
{% endhighlight %}

## Sample Response

### XML

{% highlight voltMx %}

<smsResponse>

<code>200</code>

<description>Request Queued. </description>

<id>requestId</id>

</smsResponse>

{% endhighlight %}

### JSON

{% highlight voltMx %}{"id":"4714177579502718932","message":"Request Queued. "}
{% endhighlight %}

## Response Status

| Code       | Description                                                                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                                                                                           |
| Status 400 | Either recipient list or segment criteria is allowed, not both @ messageFailed to parse the input requestInvalid request format, Error messages :\[invalid segment criteria @ message :1 |
| Status 401 | Unauthorized request                                                                                                                                                                     |
| Status 500 | Server failure to process request                                                                                                                                                        |
