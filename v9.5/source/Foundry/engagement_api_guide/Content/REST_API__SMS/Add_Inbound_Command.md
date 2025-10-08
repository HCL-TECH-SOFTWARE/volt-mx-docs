
# Add Inbound Command

The **Add Inbound Command** API helps you to add inbound commands, as part of two way SMS, in Engagement Services. An inbound command is mapped to an inbound number. To create an inbound command, you first need to create an inbound number.

## URL

The HTTP URL for the Add Inbound Command API is:

```
http://<<host>>:<<port>>/api/v1/twowaysms/<number-id>/command
```

> **_Note:_** Here, you need to provide the unique number ID assigned to an inbound number. For exasmple, http://xx.xx.xx.xx:8080/vpns/api/v1/twowaysms/1/command  
> Do not provide number code but provide the number ID.

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter     | Level – Two         | Required | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| replyForInvalidReq  |                     | Optional | string | Fault Message to be sent when incoming message has invalid parameters                                                                                                                                                                                                                                                                                                                                 |
| replyForFailedCases |                     | Optional | string | Default Message to be sent when incoming message processing fails.                                                                                                                                                                                                                                                                                                                                    |
| commandName         |                     | Yes      | string | Inbound command name is unique for the given inbound number like, Customer Care                                                                                                                                                                                                                                                                                                                       |
| command             |                     | Yes      | string | Command is unique for the given inbound number like 53515                                                                                                                                                                                                                                                                                                                                             |
| inboundParams       |                     | Yes      | string | Set inbound parameters that are associated with the command.                                                                                                                                                                                                                                                                                                                                          |
| description         |                     | Optional | string | Description of the command                                                                                                                                                                                                                                                                                                                                                                            |
| replyMessageFormat  |                     | Yes      | string | paramConfig is an array of paranName, paramPath paramPath is json path for the interested field                                                                                                                                                                                                                                                                                                       |
| smsClientAPIConfig  |                     | Yes      |        | An array of smsClientAPIConfig objects                                                                                                                                                                                                                                                                                                                                                                |
|                     | apiUrl              | Yes      | string | API URL details                                                                                                                                                                                                                                                                                                                                                                                       |
|                     | requestMethod       | Yes      | string | The request method such as POST                                                                                                                                                                                                                                                                                                                                                                       |
|                     | requestPayload      | Yes      | string | Request payload format                                                                                                                                                                                                                                                                                                                                                                                |
|                     | params              | Yes      | string | An array of params objects:(name value pair) - name-value                                                                                                                                                                                                                                                                                                                                             |
|                     | headers             | Yes      | string | An array of headers objects:(name value pair) - name-value                                                                                                                                                                                                                                                                                                                                            |
|                     | authenticationType  | Yes      | string | Allowed values are NONE > no authentication required for the configured API BASIC > The configured API supports basic authentication with the given username (required) and password (required) MOBILE\_ FOUNDRY > Volt MX Mobile foundry authentication thus expect mbassAuthUrl and App key and App Secret. if the service is strictly private, then expect username and password also as mandatory |
|                     | requestMethod       | Yes      | string | Allowed values are GET or POST                                                                                                                                                                                                                                                                                                                                                                        |
|                     | username            | Yes      | string | Name of the user                                                                                                                                                                                                                                                                                                                                                                                      |
|                     | password            | Yes      | string | Password of the user                                                                                                                                                                                                                                                                                                                                                                                  |
|                     | responseContentType | Yes      | string | Allowed values: application/json. The configured API should reply in json format. If the service does not reply in json format use voltmx middle ware                                                                                                                                                                                                                                                 |
| replyParamsConfig   |                     | Yes      |        | An array of replyParamsConfig objects                                                                                                                                                                                                                                                                                                                                                                 |
|                     | paramConfigs        | Yes      |        | An array of paramConfigs objects: - paranName- paramPath paramPath is json path for the interested field                                                                                                                                                                                                                                                                                              |

## Sample Request

```
{
"replyForInvalidReq": "INVALID",
"replyForFailedCases": "Please try  again after some time.",
"commandName": "BILL-71",
"command": "BILL",
"inboundParams": "month,year",
"description": "balance Enquiry",
"replyMessageFormat": "##text## for ##number## with ##amount##",
"smsClientAPIConfig": {
"apiUrl": "http://localhost:9080/ConfiguredSMSClient/receiver/keys",
"requestMethod": "POST",
"requestPayload": "month=##month##&amp;year=##year##",
"params": [
{
"name": "Month",
"value": "##month##"
},
{
"name": "UserName",
"value": "##First Name##"
}
],
"headers": [
{
"name": "H1",
"value": "H1Value"
},
{
"name": "H2",
"value": "H2Value"
}
],
"authenticationType": "BASIC",
"username": "admin",
"password": "admin",
"responseContentType": "application/json"
},
"replyParamsConfig": {
"paramConfigs": [
{
     "paramName": "text",
     "paramPath": "$.paramConfigs[0].value"
			},
			{
				"paramName": "number",
				"paramPath": "$.paramConfigs[1].value"
},
{
"paramName": "amount",
"paramPath": "$.paramConfigs[2].value"
}
]
}
}
```

## Sample Response

```
{
"id" : "36",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                                                                                                                                                                                                                |
| Status 400 | No SMS Number Found for this IDAn Inbound Command already exists with this Command Name or Command.Command is requiredOnly Audience Attribute or inbound parameters allowed as placeholders in request Payload. Only Audience Attribute or inbound parameters allowed as placeholders in request ParamsCommand cannot contain whitespaces |
| Status 401 | Unauthorized request                                                                                                                                                                                                                                                                                                                      |
| Status 500 | Server failure to process request                                                                                                                                                                                                                                                                                                         |
