---
layout: "documentation"
category: "engagement_api_guide"
---
                           

Event Message Request Payload with Audience Properties
======================================================

With the **Event Message Request Payload with Audience Properties** API, you can send event notifications with audience members properties through Push, SMS, Email, and Pass channels. The **Event Message Request Payload with Audience Properties** API triggers events with any of the audience members properties in Volt MX Foundry Messaging console.

Use Case
--------

A user can send the event messages with push notifications, emails, SMS or passes with audience members properties.

For each event message request **Event Message Request Payload with Audience Properties** API generates a response ID. You can retrieve information for push notification type through the generated Push ID. To get the information enter the generated ID under **Miscellaneous** > **Status** > **Message Queue** tab in Volt MX Foundry Messaging.

URL
---

The HTTP URL for **Event Message Request Payload with Audience Properties** API is:

{% highlight voltMx %}http://<host or ip>:<port>/api/v1/event/push
{% endhighlight %}

Method
------

POST

Header
------

The payload request header includes Content-Type for JSON as application/json;charset=UTF-8.The ****Event Message Request Payload with Audience Properties**** API applies the Gateway Filter for Authentication to authenticate the user credentials and allow access to the service.

Sample Request Payload
----------------------

Sample request payloads are sent in th JSON format.

### JSON

The following sample payload request includes audience members properties for sending event message request with PUSH, SMS, Email, and PASS channels:

{% highlight voltMx %}{
  "event": {
    "eventNamePairs": {
      
    },
    "eventid": "${event_id}",
    "message": {
      "audienceMembers": {
        "audienceMember": [
          {
            "property": "${property1}",
            "value": "${value1}"
          },
          {
            "property": "${property2}",
            "value": "${value2}"
          }
        ]
      },
      "content": {
        "mimeType": "text/plain",
        "priorityService": "false"
      }
    },
    "email": {
      "from": {
        "emailId": "xxx@xxx.com"
      },
      "audienceMembers": {
        "audienceMember": [
          {
            "property": "${property1}",
            "value": "${value1}"
          },
          {
            "property": "${property2}",
            "value": "${value2}"
          }
        ]
      },
      "content": {
        "priorityService": "false"
      }
    },
    "sms": {
      "audienceMembers": {
        "audienceMember": [
          {
            "property": "${property1}",
            "value": "${value1}"
          },
          {
            "property": "${property2}",
            "value": "${value2}"
          }
        ]
      },
      "content": {
        "mimeType": "text/plain",
        "priorityService": "false"
      }
    },
    "pass": {
      "audienceMembers": {
        "audienceMember": [
          {
            "property": "${property1}",
            "value": "${value1}"
          },
          {
            "property": "${property2}",
            "value": "${value2}"
          }
        ]
      },
      //ThefollowingpassTemplateValuesaresamplevalues."passTemplateValues": {
        "key": [
          {
            "name": "gate",
            "label": "GATE",
            "data": "23"
          },
          {
            "name": "depart",
            "label": "SAN FRANCISCO",
            "data": "SFO"
          },
          {
            "name": "arrive",
            "label": "NEW YORK",
            "data": "JFK"
          },
          {
            "name": "passenger",
            "label": "PASSENGER",
            "data": "John Appleseed"
          },
          {
            "name": "boardingTime",
            "label": "DEPART",
            "data": "2:25 PM"
          },
          {
            "name": "flightNewkey",
            "label": "FLIGHT",
            "data": "815"
          },
          {
            "name": "class",
            "label": "DESIG",
            "data": "Coach"
          },
          {
            "name": "date",
            "label": "DATE",
            "data": "7/21"
          },
          {
            "name": "passport",
            "label": "PASSPORT",
            "data": "Canadian/Canadien"
          }
        ]
      }
    }
  }
}
{% endhighlight %}

The following table displays JSON request properties with description.

  
| Properties | Description |
| --- | --- |
| ${event\_id} | This is the event ID |
| ${property1} | Audience member’s properties (static/dynamic, for example, email, and mobile number) |
| ${property2} | Audience member's properties (static/dynamic, for example, email, mobile number) |
| ${value1} | Audience member's value ( for example, email ID: aron.hale@gmail.com ) |
| ${value2} | Audience member's value ( for example, email ID: aron.hale@gmail.com ) |

Sample Responses
----------------

Sample response payloads are received in the JSON format.

### JSON

The following sample response payload returns request IDs for each request.

{% highlight voltMx %}{
  "event": {
    "smsResponse": {
      "response": {
        "message": "Request Queued. ",
        "id": "5769244567376011206"
      },
      "status": 200
    },
    "emailResponse": {
      "response": {
        "message": "Request Queued. ",
        "id": 2365011587565306649
      },
      "status": 200
    },
    "messageResponse": {
      "response": {
        "message": "Request Queued. ",
        "id": 7599706893432389638
      },
      "status": 200
    },
    "passResponse": {
      "response": {
        "message": "Request Queued. ",
        "id": 3402221074572385797
      },
      "status": 200
    }
  }
}
{% endhighlight %}
