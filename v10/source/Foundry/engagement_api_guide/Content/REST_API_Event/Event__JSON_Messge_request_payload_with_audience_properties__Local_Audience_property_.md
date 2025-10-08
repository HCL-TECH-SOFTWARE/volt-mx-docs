
# Event Message Request Payload with Audience Properties

**Event Message Request Payload with Audience Properties** API sends event notifications with audience members’ properties through Push, SMS, Email, and Pass channels. For each event message request **Event Message Request Payload with Audience Properties** API generates a response ID. You can retrieve information for each notification types through the generated response ID.

## URL

The HTTP URL for **Event Message Request Payload with Audience Properties** API is:

```
  
 http://<host or ip>:<port>/api/v1/events/push
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameters | Level – Two    | Level – Three | Level - Four       | Required | Type   | Description                                                        |
| ---------------- | -------------- | ------------- | ------------------ | -------- | ------ | ------------------------------------------------------------------ |
| event            |                |               |                    |          |        | An array of event objects                                          |
|                  | eventNamePairs |               |                    |          |        | An array of eventNamePairs for push message, email, SMS and passes |
|                  |                | message       |                    |          |        | An array of message objects                                        |
|                  |                |               | Email              | Yes      | string | An array of audience member property-value pairs for email message |
|                  |                |               | Mobile Number      | Yes      | string | An array of audience member property-value pairs for mobile number |
|                  |                | content       |                    |          |        | An array of content objects                                        |
|                  |                |               | mimeType           | Yes      | string |                                                                    |
|                  |                |               | priorityService    | Yes      | string |                                                                    |
|                  |                | email         |                    |          |        | An array of email objects                                          |
|                  |                |               | from               | Yes      | string | An array of from objects                                           |
|                  |                |               | audienceMembers    | Yes      | string | An array of audienceMembers properties and value pairs             |
|                  |                | sms           |                    |          |        | An array of audience member property-value pairs for SMS message   |
|                  |                |               | Email              | Yes      | string | An array of audience member property-value pairs for email message |
|                  |                |               | Mobile Number      | Yes      | string | An array of audience member property-value pairs for mobile number |
|                  |                | pass          |                    |          |        | An array of audience member property-value pairs for passes        |
|                  |                |               | Email              | Yes      | string | An array of audience member property-value pairs for email message |
|                  |                |               | Mobile Number      | Yes      | string | An array of audience member property-value pairs for mobile number |
|                  |                |               | passTemplateValues | Optional |        | An array of passTemplateValues objects                             |

## Sample Request

```
{
"event": {
"eventNamePairs": {

    	},
    	"eventid": "4931534310398459652",
    	"message": {
    		"audienceMembers": {
    			"audienceMember": [{
    				"property": "Email",
    				"value": "aron.hale@voltmx.com"
    			}, {
    				"property": "Mobile Number",
    				"value": "+1214322412312"
    			}]
    		},
    		"content": {
    			"mimeType": "text/plain",
    			"priorityService": "false"
    		}
    	},
    	"email": {
    		"from": {
    			"emailId": "aron.hale@voltmx.com"
    		},
    		"audienceMembers": {
    			"audienceMember": [{
    				"property": "Email",
    				"value":"aron.hale@voltmx.com"
    			}, {
    				"property": "Mobile Number",
    				"value": "+919087654890"
    			}]
    		},
    		"content": {
    			"priorityService": "false"
    		}
    	},
    	"sms": {
    		"audienceMembers": {
    			"audienceMember": [{
    				"property": "Email",
    				"value":"aron.hale@xxx.com"
    			}, {
    				"property": "Mobile Number",
    				"value": "+919380987654"
    			}]
    		},
    		"content": {
    			"mimeType": "text/plain",
    			"priorityService": "false"
    		}
    	},
    	"pass": {
    		"audienceMembers": {
    			"audienceMember": [{
    				"property": "Email",
    				"value":"aron.hale@xxx.com"
    			}, {
    				"property": "Mobile Number",
    				"value": "+919809872309"
    			}]
    		},
    		"passTemplateValues": {
    			"key": [{
    				"name": "gate",
    				"label": "GATE",
    				"data": "23"
    			}, {
    				"name": "depart",
    				"label": "SAN FRANCISCO",
    				"data": "SFO"
    			}, {
    				"name": "arrive",
    				"label": "NEW YORK",
    				"data": "JFK"
    			}, {
    				"name": "passenger",
    				"label": "PASSENGER",
    				"data": "John Appleseed"
    			}, {
    				"name": "boardingTime",
    				"label": "DEPART",
    				"data": "2:25 PM"
    			}, {
    				"name": "flightNewkey",
    				"label": "FLIGHT",
    				"data": "815"
    			}, {
    				"name": "class",
    				"label": "DESIG",
    				"data": "Coach"
    			}, {
    				"name": "date",
    				"label": "DATE",
    				"data": "7/21"
    			}, {
    				"name": "passport",
    				"label": "PASSPORT",
    				"data": "Canadian/Canadien"
    			}]
    		}
    	}
    }

```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two       | Level-Three | Level - Four | Type   | Description                         |
| ---------------- | --------------- | ----------- | ------------ | ------ | ----------------------------------- |
| event            |                 |             |              |        | An array of event objects           |
|                  | messageResponse |             |              |        | An array of messageResponse objects |
|                  |                 | response    |              |        | An array of response objects        |
|                  |                 |             | id           | long   | The unique id assigned to an event  |
|                  |                 |             | message      | string | Response status message             |
|                  |                 | status      |              | string | Response status code                |

> **_Note:_** The sample response includes similar arrays for smsResponse, emailResponse and passResponse respectively.

## Sample Response

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

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Request queued                    |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
