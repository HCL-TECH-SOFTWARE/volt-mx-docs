                            

Event Message Request Payload with Common Properties
====================================================

The **Event Message Request Payload with Common Properties** API enables you to send event notifications with audience member properties through Push, SMS, Email, and Pass channels. The ****Event Message Request Payload with Common Properties**** API triggers events with any audience member properties in Volt MX Foundry Engagement Services console.

Use Case
--------

For each event message request, the **Event Message Request Payload with Common Properties** API generates a response ID. You can retrieve information for a push notification type through the generated Push ID. To get the information, enter the generated ID under **Miscellaneous** > **Status** > **Message Queue** tab in Volt MX Foundry Engagement Services.

URL
---

The HTTP URL for Event Message Request Payload with Common Properties API is:

```
http://<host or ip>:<port>/service/eventpushmessage
```

Method
------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json.

The **Event Message Request Payload with Common Properties** API applies the Gateway Filter for Authentication to authenticate the user credentials and allow access to the service.

Sample Request Payload
----------------------

Sample request payloads are sent in the following formats:

*   [JSON](#json)
*   [XML](#xml)

### JSON

The following sample payload request includes audience member properties for sending an event message request with Push, SMS, Email and Pass channels:

```
{
  "event": {
    "eventNamePairs": {
      
    },
    "eventid": "${event_id}",
    "message": {
      "audienceMembers": {
        "property": "${property}",
        "audienceMember": [
          {
            "value": "${value1}"
          },
          {
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
        "emailId": "xxx@xxxx.com"
      },
      "audienceMembers": {
        "property": "${property}",
        "audienceMember": [
          {
            "value": "${value1}"
          },
          {
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
        "property": "${property}",
        "audienceMember": [
          {
            "value": "${value1}"
          },
          {
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
        "property": "${property}",
        "audienceMember": [
          {
            "value": "${value1}"
          },
          {
            "value": "${value2}"
          }
        ]
      },
      "passTemplateValues": {
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
```

  
| Properties | Description |
| --- | --- |
| ${event\_id} | This is the event id |
| ${property1} | Audience member’s properties (static/dynamic, for example, email, mobile number) |
| ${property2} | Audience member's properties (static/dynamic, for example, email, mobile number) |
| ${value1} | Audience member's value (for example, email ID: xxx@xxxx.com ) |
| ${value2} | Audience member's value (for example, email ID : xxx@xxxx.com) |

### XML

The following sample payload request includes audience members properties for sending event message request with Push, SMS, Email, and Pass channels:

```
            

<?xml version="1.0" encoding="UTF-8"?>

            

<event>

            

<eventid>${event_id}</eventid>

            

<eventNamePairs />

            

<message>

            

<audienceMembers property="${property}">

            

<audienceMember value="${value1}" />

            

<audienceMember value="${value2}" />

            

</audienceMembers>

            

<content>

            

<mimeType>text/plain</mimeType>

            

<priorityService>false</priorityService>

            

</content>

            

</message>

            

<email>

            

<from emailId="test@test.com" />

            

<audienceMembers property="${property}">

            

<audienceMember value="${value1}" />

            

<audienceMember value="${value2}" />

            

</audienceMembers>

            

<content>

            

<priorityService>false</priorityService>

            

</content>

            

</email>

            

<sms>

            

<audienceMembers property="${property}">

            

<audienceMember value="${value1}" />

            

<audienceMember value="${value2}" />

            

</audienceMembers>

            

<content>

            

<mimeType>text/plain</mimeType>

            

<priorityService>false</priorityService>

            

</content>

            

</sms>

            

<pass>

            

<audienceMembers property="${property}">

            

<audienceMember value="${value1}" />

            

<audienceMember value="${value2}" />

            

</audienceMembers>

            

<passTemplateValues>

            

<key name="gate" label="GATE" data="23" />

            

<key name="depart" label="SAN FRANCISCO" data="SFO" />

            

<key name="arrive" label="NEW YORK" data="JFK" />

            

<key name="passenger" label="PASSENGER" data="John Appleseed" />

            

<key name="boardingTime" label="DEPART" data="2:25 PM" />

            

<key name="flightNewkey" label="FLIGHT" data="815" />

            

<key name="class" label="DESIG" data="Coach" />

            

<key name="date" label="DATE" data="7/21" />

            

<key name="passport" label="PASSPORT" data="Canadian/Canadien" />

            

</passTemplateValues>

            

</pass>

            

</event>

        
```

Sample Responses
----------------

Sample response payloads are received in the following formats:

*   [JSON](#json)
*   [XML](#xml)

### JSON

The following sample response payload returns request IDs for each request.

```
{
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
```

### XML

The following sample response payload returns request IDs for each request.

```
            

<?xml version="1.0" encoding="UTF-8"?>

            

<event>

            

<messageResponse>

            

<code>200</code>

            

<description>Request Queued.</description>

            

<requestId>7599706892396396547</requestId>

            

<messages>

            

<message msgId="7599706892396396548" description="Queued" />

            

</messages>

            

</messageResponse>

            

<emailResponse>

            

<code>200</code>

            

<description>Request Queued.</description>

            

<requestId>2365628586553189762</requestId>

            

</emailResponse>

            

<smsResponse>

            

<code>200</code>

            

<description>Request Queued.</description>

            

<requestId>1227058458646255055</requestId>

            

</smsResponse>

            

<passResponse>

            

<code>200</code>

            

<description>Request Queued.</description>

            

<requestId>4014527877948457928</requestId>

            

</passResponse>

            

</event>

        
```
