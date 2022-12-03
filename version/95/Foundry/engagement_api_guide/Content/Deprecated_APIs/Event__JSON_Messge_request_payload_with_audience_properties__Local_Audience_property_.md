
# Event Message Request Payload with Audience Properties

With the **Event Message Request Payload with Audience Properties** API, you can send event notifications with audience members properties through Push, SMS, Email, and Pass channels. The **Event Message Request Payload with Audience Properties** API triggers events with any of the audience members properties in Volt MX Foundry Engagement Services.

> **_Important:_** The Event Message Request Payload with Audience Properties API is maintained here to preserve backward compatibility.  
> We encourage you to use [Event Message Request Payload with Audience Properties API](../REST_API_Event/Event__JSON_Messge_request_payload_with_audience_properties__Local_Audience_property_.md)

## URL

The HTTP URL for **Event Message Request Payload with Audience Properties** API is:

```
  
 http://<host or ip>:<port>/service/eventpushmessage
```

The \***\*Event Message Request Payload with Audience Properties\*\*** API applies the Gateway Filter for Authentication to authenticate the user credentials and allow access to the service.

## Method

POST

## Header

The payload request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Sample Request

Sample request payloads are sent in the following formats:

- [JSON](#json)
- [XML](#xml)

### JSON

The following sample payload request includes audience members properties for sending event message request with PUSH, SMS, Email, and PASS channels:

```
{
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
```

The following table displays JSON request properties with description.

| Properties   | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| ${event_id}  | This is the event ID                                                                 |
| ${property1} | Audience member’s properties (static/dynamic, for example, email, and mobile number) |
| ${property2} | Audience member's properties (static/dynamic, for example, email, mobile number)     |
| ${value1}    | Audience member's value ( for example, email ID: aron.hale@gmail.com )               |
| ${value2}    | Audience member's value ( for example, email ID: aron.hale@gmail.com )               |

### XML

The following sample payload request includes audience members properties for sending event message request with PUSH, SMS, Email, and PASS channels:

```
<?xml version="1.0" encoding="UTF-8"?>
<event>
<eventid>${event_id}</eventid>
    <eventNamePairs />
    <message>
        <audienceMembers>
            <audienceMember property="${property1}" value="${value1}" />
            <audienceMember property="${property2}" value="${value2}" />
        </audienceMembers>
        <content>
            <mimeType>text/plain</mimeType>
            <priorityService>false</priorityService>
        </content>
    </message>
    <email>
        <from emailId="test@test.com" />
        <audienceMembers>
            <audienceMember property="${property1}" value="${value1}" />
            <audienceMember property="${property2}" value="${value2}" />
        </audienceMembers>
        <content>
            <priorityService>false</priorityService>
        </content>
    </email>
    <sms>
        <audienceMembers>
            <audienceMember property="${property1}" value="${value1}" />
            <audienceMember property="${property2}" value="${value2}" />
        </audienceMembers>
        <content>
            <mimeType>text/plain</mimeType>
            <priorityService>false</priorityService>
        </content>
    </sms>
    <pass>
        <audienceMembers>
            <audienceMember property="${property1}" value="${value1}" />
            <audienceMember property="${property2}" value="${value2}" />
</audienceMembers>

// The following passTemplateValues are sample values.

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

## Sample Responses

Sample response payloads are received in the following formats:

- [JSON](#json)
- [XML](#xml)

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
