
# Get Inbound Command

The **Get Inbound Command** API enables you to get details of an inbound command such as the BAL command which is already set up in the engagement server. An inbound command is mapped to an inbound number.

## URL

The HTTP URL for Get Inbound Command API is:

```
http://<<host>>:<<port>>/api/v1/twowaysms/<number-id>/command/<command-id>
```

> **_Note:_** <number-id>: Here, number ID refers to an ID that is used to map inbound number with internal data record.

> **_Note:_** Use Get All Commands API to get the <command-id>

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Level – Two         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                  |                     | long   | Unique ID assigned to the inbound command                                                                                                                                                                                                                                                                                                                                                             |
| replyForInvalidReq  |                     | string | This message will be sent as an SMS for invalid requests. For example: Sending greater or lesser parameters than configured, or when a third party returns a bad request.                                                                                                                                                                                                                             |
| replyForFailedCases |                     | string | This message will be sent as SMS for failed requests like sending more or less parameters than configured, or when third party returns a bad request                                                                                                                                                                                                                                                  |
| commandName         |                     | string | Inbound command name is unique for the given inbound number like BAL, BILL                                                                                                                                                                                                                                                                                                                            |
| command             |                     | string | Command is unique for the given inbound number like BAL, BILL                                                                                                                                                                                                                                                                                                                                         |
| inboundParams       |                     | string | Set inbound parameters                                                                                                                                                                                                                                                                                                                                                                                |
| description         |                     | string | Description of the command                                                                                                                                                                                                                                                                                                                                                                            |
| replyMessageFormat  |                     | string | paramConfig is an array of paramName, paramPath paramPath is json path for the interested field                                                                                                                                                                                                                                                                                                       |
| smsClientAPIConfig  |                     |        | An array of input parameters                                                                                                                                                                                                                                                                                                                                                                          |
|                     | apiUrl              | string | API URL details                                                                                                                                                                                                                                                                                                                                                                                       |
|                     | requestMethod       | string | The HTTP method, such as GET                                                                                                                                                                                                                                                                                                                                                                          |
|                     | requestPayload      | string | Request payload format                                                                                                                                                                                                                                                                                                                                                                                |
|                     | params              |        | An array of params objects:                                                                                                                                                                                                                                                                                                                                                                           |
|                     | headers             |        | An array of name value pair format for header                                                                                                                                                                                                                                                                                                                                                         |
|                     | authenticationType  | string | Allowed values are NONE > no authentication required for the configured API BASIC > The configured API supports basic authentication with the given username (required) and password (required) MOBILE\_ FOUNDRY > Volt MX Mobile foundry authentication thus expect mbassAuthUrl and App key and App Secret. if the service is strictly private, then expect username and password also as mandatory |
|                     | mbaasAuthUrl        | string | MBAAS URL                                                                                                                                                                                                                                                                                                                                                                                             |
|                     | username            | string | Name of the user                                                                                                                                                                                                                                                                                                                                                                                      |
|                     | password            | string | Password of the user                                                                                                                                                                                                                                                                                                                                                                                  |
|                     | appKey              | string | appKey configured in MBaaS service                                                                                                                                                                                                                                                                                                                                                                    |
|                     | appSecret           | string | appSecret configured in MBaaS service                                                                                                                                                                                                                                                                                                                                                                 |
|                     | responseContentType | string | Allowed values: application/json The configured API should reply in json format. If the service does not reply in json format use voltmx middle ware                                                                                                                                                                                                                                                  |
| replyParamsConfig   |                     |        | An array of replyParamsConfig objects                                                                                                                                                                                                                                                                                                                                                                 |
|                     | paramConfigs        |        | An array of paramConfigs objects- paranName (logical name for the response parameter) - paramPath ( JSON Path to extract value for the param )\- secured (boolean value: If value is true this content is hidden in Volt MX Foundry Engagement Services Console , else NO (There is no impact on the SMS sent to an audience member))                                                                 |
| createdBy           |                     | string | A user name that shows who created the inbound command                                                                                                                                                                                                                                                                                                                                                |
| createdDateStr      |                     | string | Date on which the inbound command is created                                                                                                                                                                                                                                                                                                                                                          |
| lastModifiedBy      |                     | string | A user name that shows who last modified the inbound command                                                                                                                                                                                                                                                                                                                                          |
| lastModifiedDateStr |                     | string | Date on which the inbound command was last modified                                                                                                                                                                                                                                                                                                                                                   |
| replyForFailedCases |                     | string | This message will be sent as SMS for invalid requests like sending more or less parameters than configured, or when third party returns a bad request                                                                                                                                                                                                                                                 |

## Sample Response

```
{
"id" : 24,
"replyForInvalidReq" : "Try again",
"commandName" : "Customer care",
"command" : "100",
"inboundParams" : "",
"description" : "customer care",
"replyMessageFormat" : "",
"smsClientAPIConfig" : {
"apiUrl" : "google.com",
"requestPayload" : "",
"headers" : [ ],
"params" : [ ],
"requestMethod" : "POST",
"authenticationType" : "BASIC",
"responseContentType" : "application/json",
"appKey" : "",
"appSecret" : "",
"username" : "admin",
"password" : "admin",
"mbaasAuthUrl" : ""
},
"replyParamsConfig" : {
"paramConfigs" : [ ]
},
"createdBy" : "admin",
"createdDateStr" : "08/25/2016 02:22:12 PM IST",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "08/25/2016 02:22:12 PM IST",
"replyForFailedCases" : ""
}
```

## Response Status

| Code       | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| Status 200 | Inbound Command JSON                                                                |
| Status 400 | Invalid Inbound Command ID provided or no valid Inbound Command found with given ID |
| Status 401 | Unauthorized request.                                                               |
| Status 500 | Server failure to process request                                                   |
