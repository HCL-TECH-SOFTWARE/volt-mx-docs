---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Event Payload
=============

The **Event Payload** API fetches the event payload details. The event payload information is useful when you wish to distribute an event.

URL
---

The HTTP URL for **Event Payload** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/events/<id>/payload
{% endhighlight %}

> **_Note:_** ID: This is an event identification number. The event ID is a system generated number added in Volt MX Foundry Engagement Services, when you add a new event. You can view an event ID under Engagement Services Console > Engagement > Events > Events list view > under Event Name column.

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

GET

Inputput Parameters
-------------------

The following fields are input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| id | Yes | long | The unique ID assigned to an event. |

Sample Response
---------------

{% highlight voltMx %}{
  "event": {
    "eventid": "4934057895904149238",
    "sms": {
      "recipients": {
        "recipient": [
          {
            "mobile": "xxxx",
            "id": "xxxx"
          }
        ]
      },
      "content": {
        "mimeType": "text/plain",
        "priorityService": "false"
      }
    },
    "message": {
      "subscribers": {
        "subscriber": [
          {
            "ksid": "xxxx",
            "ufid": "xxxx",
            "deviceId": "xxxx"
          }
        ]
      },
      "content": {
        "mimeType": "text/plain",
        "priorityService": "false"
      }
    },
    "email": {
      "recipients": {
        "recipient": [
          {
            "emailId": "xxxx",
            "id": "xxxx"
          }
        ]
      },
      "from": {
        "emailId": "xxxx"
      },
      "content": {
        "priorityService": "false",
        "eventNamePairs": {
          "key": [
            {
              "name": "Email",
              "content": "xxxx"
            }
          ]
        }
      }
    }
  }
}
{% endhighlight %}

Sample Response with Channel Priority
-------------------------------------

{% highlight voltMx %}{
	"event": {
		"eventid": "7852693993223347071",
		"channelPriorities": [{
				"messageChannel": "PUSH"
			},
			{
				"messageChannel": "Email"
			},
			{
				"messageChannel": "SMS"
			}
		],
		"sms": {
			"content": {
				"mimeType": "text/plain",
				"priorityService": "false"
			}
		},
		"audienceMembers": [{
			"property": "xxxx",
			"value": "xxxx"
		}],
		"message": {
			"content": {
				"mimeType": "text/plain",
				"priorityService": "false"
			}
		},
		"email": {
			"from": {
				"emailId": "xxxx"
			},
			"content": {
				"priorityService": "false"
			}
		}
	}
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Event payload done successfully |
| Status 401 | Unauthorized request |
| Status 500 | Server Failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">8.0</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">AU</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
