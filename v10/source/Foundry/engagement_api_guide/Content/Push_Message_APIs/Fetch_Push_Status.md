
# Fetch Push Status

The **Fetch Push Status** API fetches the list of push messages with statuses as per the input request given by the user.

## URL

The HTTP URL for Fetch Push Status API is:

```
http://<hostname/ip>:<port>/vpns/api/v1/status/push
```

This API implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                                                                                                                                                                                                                                                                                               |
| --------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| requestId       | Optional | string       | Request ID is generated as a push message response                                                                                                                                                                                                                                                        |
| appId           | Optional | long         | Application ID in Volt MX Foundry Engagement Services                                                                                                                                                                                                                                                     |
| ksid            | Optional | alphanumeric | Volt MX Subscription ID returned when you subscribe to Volt MX Foundry Engagement Services                                                                                                                                                                                                                |
| ufid            | Optional | string       | The User Friendly Identifier or UFID is used when you subscribe to Volt MX Foundry Engagement Services. Based on your requirement, you can provide an UFID. It is alphanumeric, for example xxx@voltmx.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key |
| osType          | Optional | string       | The current operating system, for example:iOS or Android                                                                                                                                                                                                                                                  |
| sentDate        | Optional | string       | The date on which the push message was sent                                                                                                                                                                                                                                                               |
| endDate         | Optional | string       | The date on which the push message ends                                                                                                                                                                                                                                                                   |
| startElement    | Optional | string       | Default Value is 0                                                                                                                                                                                                                                                                                        |
| elementsPerPage | Optional | string       | Default Value is 20                                                                                                                                                                                                                                                                                       |

## Sample Request

```
{
"requestId": "8340612061973476100",
"appId": "25016-9447884208",
"ksid": "9217144992113196746",
"ufid": "thomassmith@gmail.com",
"osType": "iPad",
"sentDate": "09/23/2016",
"endDate": "09/23/2016",
"startElement": "0",
"elementsPerPage": "20"
}
```

## Sample Response

```
{
"total" : 1,
"submitted" : 1,
"initial" : 0,
"rejected" : 0,
"notAttempted" : 0,
"cancelled" : 0,
"undelivered" : 0,
"opened" : 0,
"rows" : [ {
"pushId" : "9078822310396325159",
"ksid" : "9217144992113196746",
"sentDate" : "1474622506928",
"lastActivityDate" : "1474622507000",
"requestId" : "8340612061973476100",
"appId" : "25016-9447884208",
"osType" : "ipad",
"statusMessage" : "Message Sent to Apple Cloud",
"status" : "Submitted"
} ]
}
```

## Response Status

| Code       | Description                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Request queued                                                                                                         |
| Status 400 | Request ID should not contain alphabets or special charactersThe Request Contains Invalid keysPlease provide sent date |
| Status 401 | Unauthorized request                                                                                                   |
| Status 500 | Server failure to process request                                                                                      |
