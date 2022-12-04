
# Get All Commands

The **Get All Commands** API enables you to get details of all the command mapped to an inbound number, such as BAL command is used to fetch balance amount details of an user's account.

## URL

The HTTP URL for **Get All Command** API is:

```
http://<host>:<port>/api/v1/twowaysms/<number-id>/command?start=0&pageSize=20
```

> **_Note:_** <number-id>: Here, number ID refers to an ID that is used to map inbound number with internal data record.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Level – Two        | Level – Three       | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------ | ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total               |                    |                     | long   | Displays the total number of inbound commands                                                                                                                                                                                                                                                                                                                                                         |
| inboundSMSCommands  |                    |                     |        | An array of inboundSMSCommands objects                                                                                                                                                                                                                                                                                                                                                                |
|                     | id                 |                     | long   | Unique ID assigned to the inbound command                                                                                                                                                                                                                                                                                                                                                             |
|                     | replyForInvalidReq |                     | string | This message will be sent as SMS for invalid requests like sending more or less parameters than configured, or when third party returns a bad request                                                                                                                                                                                                                                                 |
|                     | commandName        |                     | string | Inbound command name is unique for the given inbound number like BAL, BILL                                                                                                                                                                                                                                                                                                                            |
|                     | command            |                     | string | Command is unique for the given inbound number like BAL, BILL                                                                                                                                                                                                                                                                                                                                         |
|                     | inboundParams      |                     | string | Set inbound parameters                                                                                                                                                                                                                                                                                                                                                                                |
|                     | description        |                     | string | Description of the command                                                                                                                                                                                                                                                                                                                                                                            |
|                     | replyMessageFormat |                     | string | paramConfig is an array of paranName, paramPath paramPath is json path for the interested field                                                                                                                                                                                                                                                                                                       |
|                     | smsClientAPIConfig |                     |        | An array of input parameters                                                                                                                                                                                                                                                                                                                                                                          |
|                     |                    | apiUrl              | string | API URL details                                                                                                                                                                                                                                                                                                                                                                                       |
|                     |                    | requestPayload      | string | Request payload format                                                                                                                                                                                                                                                                                                                                                                                |
|                     |                    | requestMethod       | string | The http method, such as GET                                                                                                                                                                                                                                                                                                                                                                          |
|                     |                    | headers             |        | An array of name value pair format for header                                                                                                                                                                                                                                                                                                                                                         |
|                     |                    | params              |        | An array of params objects:                                                                                                                                                                                                                                                                                                                                                                           |
|                     |                    | responseContentType | string | Allowed values: application/json The configured API should reply in json format. If the service does not reply in json format use voltmx middle ware                                                                                                                                                                                                                                                  |
|                     |                    | authenticationType  | string | Allowed values are NONE > no authentication required for the configured API BASIC > The configured API supports basic authentication with the given username (required) and password (required) MOBILE\_ FOUNDRY > Volt MX Mobile foundry authentication thus expect mbassAuthUrl and App key and App Secret. if the service is strictly private, then expect username and password also as mandatory |
|                     |                    | mbaasAuthUrl        | string | MBAAS URL                                                                                                                                                                                                                                                                                                                                                                                             |
|                     |                    | username            | string | Name of the user                                                                                                                                                                                                                                                                                                                                                                                      |
|                     |                    | password            | string | Password of the user                                                                                                                                                                                                                                                                                                                                                                                  |
|                     |                    | appKey              | string | appKey configured in MBaaS service                                                                                                                                                                                                                                                                                                                                                                    |
|                     |                    | appSecret           | string | appSecret configured in MBaaS service                                                                                                                                                                                                                                                                                                                                                                 |
|                     | replyParamsConfig  |                     |        | An array of replyParamsConfig objects                                                                                                                                                                                                                                                                                                                                                                 |
|                     |                    | paramConfigs        |        | An array of paramConfigs objects- paranName (logical name for the response parameter) - paramPath ( JSON Path to extract value for the param )\- secured (boolean value: If value is true this content is hidden in Volt MX Foundry Engagement Services Console , else NO (There is no impact on the SMS sent to an audience member))                                                                 |
| createdBy           |                    |                     | string | A user name that shows who created the inbound command                                                                                                                                                                                                                                                                                                                                                |
| createdDateStr      |                    |                     | string | Date on which the inbound command is created                                                                                                                                                                                                                                                                                                                                                          |
| lastModifiedBy      |                    |                     | string | A user name that shows who last modified the inbound command                                                                                                                                                                                                                                                                                                                                          |
| lastModifiedDateStr |                    |                     | string | Date on which the inbound command was last modified                                                                                                                                                                                                                                                                                                                                                   |
| replyForFailedCases |                    |                     | string | This message will be sent as SMS for invalid requests like sending more or less parameters than configured, or when third party returns a bad request                                                                                                                                                                                                                                                 |
| total               |                    |                     | long   | Total number of commands                                                                                                                                                                                                                                                                                                                                                                              |

## Sample Response

```
{
"inboundSMSCommands": [{
"id": 24,
"replyForInvalidReq": "Try again",
"commandName": "Customer care",
"command": "53515",
"inboundParams": "",
"description": "customer care",
"replyMessageFormat": "",
"smsClientAPIConfig": {
"apiUrl": "google.com",
"requestPayload": "",
"headers": [],
"params": [],
"requestMethod": "POST",
"authenticationType": "BASIC",
"responseContentType": "application/json",
"appKey": "",
"appSecret": "",
"username": "admin",
"password": "admin",
"mbaasAuthUrl": ""
},
"replyParamsConfig": {
"paramConfigs": []
},
"createdBy": "admin",
"createdDateStr": "08/25/2016 02:22:12 PM IST",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "09/30/2016 01:43:12 PM IST",
"replyForFailedCases": ""
}, {
"id": 25,
"replyForInvalidReq": "INVALID",
"commandName": "BILL-719",
"command": "54123",
"inboundParams": "month,year",
"description": "balance Enquiry",
"replyMessageFormat": "##text## for ##number## with ##amount##",
"smsClientAPIConfig": {
"apiUrl": "http://localhost:9080/ConfiguredSMSClient/receiver/keys",
"requestPayload": "month=##month##&year=##year##",
"headers": [{
"name": "H1",
"value": "H1Value"
}, {
"name": "H2",
"value": "H2Value"
}],
"params": [{
"name": "UserName",
"value": "##First Name##"
}, {
"name": "Month",
"value": "##month##"
}],
"requestMethod": "POST",
"authenticationType": "BASIC",
"responseContentType": "application/json",
"appKey": "",
"appSecret": "",
"username": "admin",
"password": "admin",
"mbaasAuthUrl": ""
},
"replyParamsConfig": {
"paramConfigs": [{
"paramName": "number",
"paramPath": "$.paramConfigs[1].value",
				"secured": false
			}, {
				"paramName": "text",
				"paramPath": "$.paramConfigs[0].value",
"secured": false
}, {
"paramName": "amount",
"paramPath": "$.paramConfigs[2].value",
				"secured": false
			}]
		},
		"createdBy": "admin",
		"createdDateStr": "09/27/2016 09:49:41 PM IST",
		"lastModifiedBy": "admin",
		"lastModifiedDateStr": "09/30/2016 12:35:54 PM IST",
		"replyForFailedCases": "Try  again after some time."
	}, {
		"id": 27,
		"replyForInvalidReq": "INVALID",
		"commandName": "BILL-71",
		"command": "BILL",
		"inboundParams": "month,year",
		"description": "balance Enquiry",
		"replyMessageFormat": "##text## for ##number## with ##amount##",
		"smsClientAPIConfig": {
			"apiUrl": "http://localhost:9080/ConfiguredSMSClient/receiver/keys",
			"requestPayload": "month=##month##&amp;year=##year##",
			"headers": [{
				"name": "H1",
				"value": "H1Value"
			}, {
				"name": "H2",
				"value": "H2Value"
			}],
			"params": [{
				"name": "UserName",
				"value": "##First Name##"
			}, {
				"name": "Month",
				"value": "##month##"
			}],
			"requestMethod": "POST",
			"authenticationType": "BASIC",
			"responseContentType": "application/json",
			"appKey": "",
			"appSecret": "",
			"username": "admin",
			"password": "admin",
			"mbaasAuthUrl": ""
		},
		"replyParamsConfig": {
			"paramConfigs": [{
				"paramName": "number",
				"paramPath": "$.paramConfigs[1].value",
"secured": false
}, {
"paramName": "text",
"paramPath": "$.paramConfigs[0].value",
				"secured": false
			}, {
				"paramName": "amount",
				"paramPath": "$.paramConfigs[2].value",
"secured": false
}]
},
"createdBy": "admin",
"createdDateStr": "09/30/2016 01:13:54 PM IST",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "09/30/2016 01:13:54 PM IST",
"replyForFailedCases": "Please try again after some time."
}, {
"id": 29,
"replyForInvalidReq": "INVALID",
"commandName": "UNSUBSCRIBE",
"command": "55555",
"inboundParams": "month,year",
"description": "balance Enquiry",
"replyMessageFormat": "##text## for ##number## with ##amount##",
"smsClientAPIConfig": {
"apiUrl": "http://localhost:9080/ConfiguredSMSClient/receiver/keys",
"requestPayload": "month=##month##&amp;year=##year##",
"headers": [{
"name": "H1",
"value": "H1Value"
}, {
"name": "H2",
"value": "H2Value"
}],
"params": [{
"name": "Year",
"value": "##year##"
}, {
"name": "Month",
"value": "##month##"
}],
"requestMethod": "POST",
"authenticationType": "BASIC",
"responseContentType": "application/json",
"appKey": "",
"appSecret": "",
"username": "admin",
"password": "admin",
"mbaasAuthUrl": ""
},
"replyParamsConfig": {
"paramConfigs": [{
"paramName": "number",
"paramPath": "$.paramConfigs[1].value",
				"secured": false
			}, {
				"paramName": "text",
				"paramPath": "$.paramConfigs[0].value",
"secured": false
}, {
"paramName": "amount",
"paramPath": "$.paramConfigs[2].value",
"secured": false
}]
},
"createdBy": "admin",
"createdDateStr": "09/30/2016 01:59:46 PM IST",
"lastModifiedBy": "admin",
"lastModifiedDateStr": "09/30/2016 01:59:46 PM IST",
"replyForFailedCases": "Please try again after some time."
}],
"total": 4
}
```

## Response Status

| Code       | Description                           |
| ---------- | ------------------------------------- |
| Status 200 | Inbound commands JSON                 |
| Status 400 | No SMS commands found for this number |
| Status 401 | Unauthorized request                  |
| Status 500 | Server failure to process request     |
