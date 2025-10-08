
# Create/Modify Basic Details

The **Create/Modify Basic Details** API updates the basic configuration of the engagement server.

## URL

The HTTP URL for **Create/ Modify Basic Details** API is:

```
http://<host>:<port>/api/v1/admin
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

PUT

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter           | Required | Type    | Description                                                                                                                                                                        |
| ------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| retriesPerNotification    | Yes      | long    | Number of retries for each notification                                                                                                                                            |
| reconciliationKey         | Yes      | string  | Reconciliation key                                                                                                                                                                 |
| campaignExecutionIntervel | Yes      | long    | Campaign's execution interval                                                                                                                                                      |
| preferredTimeZone         | Yes      | string  | Time zone                                                                                                                                                                          |
| apiAuthToken              | Optional | string  | Authentication token                                                                                                                                                               |
| corsRequired              | Yes      | boolean | If Cors allowed or not. XMLHttpRequest for \[URL\] required Cross Origin Resource Sharing (CORS). An XMLHttpRequest is made to a domain that is different than your page's domain. |
| allowedCorsDomains        | Optional | string  | A list of allowed cors domains. Allowed domains to allow CORS settings, e.g. \*.google.com                                                                                         |
| basicAuthRequired         | Yes      | boolean | Whether basic authentication is required                                                                                                                                           |
| identityAuth              | Optional | boolean | If identity authentication is required or not                                                                                                                                      |

## Sample Request

```
{
"retriesPerNotification": 9,
"reconciliationKey": "Email",
"campaignExecutionIntervel": 1,
"preferredTimeZone": "GMT+05:30",
"apiAuthToken": "",
"corsRequired":"true",
"allowedCorsDomains":"\*",
"basicAuthRequired": true,
"identityAuth": false
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                           |
| ---------------- | ------ | ------------------------------------- |
| id               | long   | A unique ID assigned to basic details |
| message          | string | Response status message               |

## Sample Response

```
{
"id" : "",
"message" : "Successfully Updated the details."
}
```

## Response Status

| Code       | Description                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Successfully updated the details                                                                                                                                                                                                                           |
| Status 400 | Value for reconcilationKey should be one of : \[Email, Mobile Number\]Value for reconciliationKey can not be empty.value for campaignExecutionIntervel can not be emptyValue for corsRequired can not be emptyValue for basicAuthRequired can not be empty |
| Status 401 | Unauthorized request                                                                                                                                                                                                                                       |
| Status 500 | Server failure to process request                                                                                                                                                                                                                          |
