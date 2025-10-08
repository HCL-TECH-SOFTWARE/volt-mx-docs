                           

Distribute Event
================

The **Distribute Event** API distributes event passess to the receipents.

A user can get the Destribute Event push payload from UI (Events > Edit Event > Message > View API Payload) or can use Get Payload API.

URL
---

The HTTP URL for **Distribute Event** API is:

```
http://<host>:<port>/api/v1/events/push
```

The Distribute Event API supports all kinds of authentication.

Method
------

POST

Header
------

The payload's request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

Following fields are input parameters:

  
| Input Parameter | Second Level | Type | Description |
| --- | --- | --- | --- |
| event |   |   | An array of event parameters |
|   | eventid | int | The unique ID assigned to an event. |
|   | pass |   | An array pf pass parameters |
|   | email |   | An array pf email parameters |
|   | sms |   | An array of SMS parameters |
|   | message |   | An array of message parameters |

Sample Request
--------------

```
{
    "event": {
        "eventid": "8047794987112528856",
        "pass": {
            "recipients": {
                "recipient": [
                    {
                        "id": "26"
                    }
                ]
            },
            "passTemplateValues": {
                "key": [
                    {
                        "data": "JnRR",
                        "name": "gate",
                        "label": "GATE"
                    },
                    {
                        "data": "rnSV",
                        "name": "depart",
                        "label": "SAN FRANCISCO"
                    },
                    {
                        "data": "eGok",
                        "name": "passenger",
                        "label": "PASSENGER"
                    },
                    {
                        "data": "rLWn",
                        "name": "boardingTime",
                        "label": "DEPART"
                    },
                    {
                        "data": "wmLd",
                        "name": "flightNewkey",
                        "label": "FLIGHT"
                    },
                    {
                        "data": "LWqy",
                        "name": "class",
                        "label": "DESIG"
                    },
                    {
                        "data": "ZpJb",
                        "name": "date",
                        "label": "DATE"
                    },
                    {
                        "data": "hMDD",
                        "name": "passport",
                        "label": "PASSPORT"
                    }
                ]
            }
        },
        "sms": {
            "recipients": {
                "recipient": [
                    {
                        "mobile": "xxxx",
                        "id": "26"
                    }
                ]
            },
            "content": {
                "mimeType": "text/plain",
                "priorityService": "false",
                "eventNamePairs": {
                    "key": [
                        {
                            "name": "name",
                            "content": "vms"
                        }
                    ]
                }
            }
        },
        "message": {
            "subscribers": {
                "subscriber": [
                    {
                        "ksid": "8193643335426784095",
                        "ufid": "xxxx",
                        "deviceId": "xxxx"
                    }
                ]
            },
            "content": {
                "mimeType": "text/plain",
                "priorityService": "false",
                "eventNamePairs": {
                    "key": [
                        {
                            "name": "name",
                            "content": "vmspush"
                        }
                    ]
                }
            }
        },
        "email": {
            "recipients": {
                "recipient": [
                    {
                        "id": "23"
                    }
                ]
            },
            "from": {
                
            },
            "content": {
                "priorityService": "false",
                "eventNamePairs": {
                    "key": [
                        {
                            "name": "name",
                            "content": "vmsemail"
                        }
                    ]
                }
            }
        }
    }
}
```

Output Parameters
-----------------

Sample Responses
----------------

```
{
    "event": {
        "emailResponse": {
            "response": {
                "id": "9042882750727475102",
                "message": "Request Queued. "
            },
            "status": 200
        },
        "messageResponse": {
            "response": {
                "id": "9042882675431161377",
                "message": "Request Queued. "
            },
            "status": 200
        },
        "smsResponse": {
            "response": {
                "id": "9042882733367360258",
                "message": "Request Queued. "
            },
            "status": 200
        },
        "passResponse": {
            "response": {
                "id": "9042882756480070870",
                "message": "Request Queued. "
            },
            "status": 200
        }
    }
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
