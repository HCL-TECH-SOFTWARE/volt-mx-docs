                           


Fetch Push Messages
===================

The **Fetch Push Messages** API accepts start and pageSize as input parameters and returns all the push message details including the user submitted platform specific properties.

Request URL
-----------

The HTTP URL for **Fetch Push Messages** API is:

```
http://<host>:<port>/api/v1/messages/fetch
```

Request Method
--------------

POST

Header
------

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

Input Parameters
----------------

Following fields are input parameters:

  
| Input Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| ksid | int | Required, refer to [combination table](#input-combination-table) | Volt MX Subscription ID returned when you subscribe to Engagement system. |
| ufId | String | Refer to [combination table](#input-combination-table) | The User Friendly Identifier or UFID is used when you subscribe to Volt MX Foundry Engagement Services. Based on your requirement, you can provide an UFID. It is alphanumeric, for example, xxx@voltmx.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key. |
| deviceId | String | Refer to [combination table](#input-combination-table) | Device ID of the subscriber that was used when you subscribed to the Volt MX Foundry Engagement Services. |
| appId | long | Refer to [combination table](#input-combination-table) | Application ID in the Volt MX Foundry Engagement Services. |
| status | String | Refer to [combination table](#input-combination-table) | The status of the push message after it has been sent from the Engagement Services console. It should be either "Opened" or "Submitted". |
| lastUpdatedDate | String | Refer to [combination table](#input-combination-table) | The lastUpdatedDate is the date on which the message was last updated. It should only be in the following format, "YYYY-MM-DD". For example, the lastUpdatedDate can be "2019-05-13". |
| startElement | int | Optional | Starting element is a non-negative integer such as 0,1,2,3. |
| elementsPerPage | int | Optional | Number of messages to be displayed per page. |
| customProperties | String | Optional | If set to true, it displays the custom parameters in the response payload. By default, the value is set to false. |

### Input combination table

  
| Input Parameter | Acceptable Combinations |
| --- | --- |
| ksid | ksid && ufId && status && lastUpdatedDate ksid && ufId && status ksid && ufId && lastUpdatedDate ksid && ufId ksid && status && lastUpdatedDate ksid && lastUpdatedDate ksid && status ksid |
| ufId | ufId && appId && status && lastUpdatedDate ufId && appId && status ufId && appId && lastUpdatedDate ufId && appId |
| deviceId | deviceId && appId && status && lastUpdatedDate deviceId && appId && status deviceId && appId && lastUpdatedDate deviceId && appId |
| appId | ufId && appId && status && lastUpdatedDate ufId && appId && status ufId && appId && lastUpdatedDate ufId && appId deviceId && appId && status && lastUpdatedDate deviceId && appId && status deviceId && appId && lastUpdatedDate deviceId && appId |
| status | ksid && status ksid && status && lastUpdatedDate deviceId && appId && status deviceId && appId && status && lastUpdatedDate ufId && appId && status ufId && appId && status && lastUpdatedDate |
| lastUpdatedDate | ksid && lastUpdatedDate ksid && status && lastUpdatedDate deviceId && appId && lastUpdatedDate deviceId && appId && status && lastUpdatedDate ufId && appId && lastUpdatedDate ufId && appId && status && lastUpdatedDate ksid && ufId && lastUpdatedDate ksid && ufId && status && lastUpdatedDate |

Sample Request
--------------

*   The **customProperties** value is set to false.

```
{
    "ksid": "6904010424759996333",
    "ufid": "vpnstest1@gmail.com",
    "status": "Submitted",
    "startElement": "0",
    "elementsPerPage": "1",
    "customProperties": "false"
}
```

*   The **customProperties** value is set to true.

```
{
    "ksid": "6904010424759996333",
    "ufid": "vpnstest1@gmail.com",
    "status": "Submitted",
    "startElement": "0",
    "elementsPerPage": "1",
    "customProperties": "true"
}
```

Output Parameters
-----------------

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| openedMessages | int | Number of Messages opened by the Subscriber |
| submittedMessages | int | Number of messages successfully delivered to the Subscriber and not opened. |
| totalMessages | int | Total number of messages successfully delivered to the Subscriber. |

Sample Responses
----------------

*   The **customProperties** value is set to false.

```
{
    "totalMessages": 139,
    "openedMessages": 0,
    "messages": [{
        "lastUpdatedDate": "2019-09-04 16:38:41.0",
        "fetchId": "7574887709474550603",
        "requestId": "6904650243133767653",
        "content": "Push Message Test for Custom Parameters",
        "status": "Submitted"
    }],
    "submittedMessages": 139
}
```

*   The **customProperties** value is set to true.

```
{
    "totalMessages": 139,
    "openedMessages": 0,
    "messages": [{
        "lastUpdatedDate": "2019-09-04 16:38:41.0",
        "fetchId": "7574887709474550603",
        "customProperties": {
            "title": "Push Test",
            "CustomProp2": "Value2",
            "CustomProp1": "Value1"
        },
        "requestId": "6904650243133767653",
        "content": "Push Message Test for Custom Parameters",
        "status": "Submitted"
    }],
    "submittedMessages": 139
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued. |
| Status 400 | xxxx is an invalid email address.Mandatory parameters not filled. |
| Status 401 | Unauthorized request. |
| Status 500 | Server failure to process request. |
