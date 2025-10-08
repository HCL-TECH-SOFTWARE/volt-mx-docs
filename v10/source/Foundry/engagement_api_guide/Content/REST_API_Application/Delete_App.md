
# Delete App

The **Delete App** API deletes an unpublished application from Volt MX Foundry Engagement server, if the application is not in use by campaigns or events. The service accepts the app ID as an input parameter to delete an app.

## URL

The HTTP URL for **Delete App** API is:

```
http://<host>:<port>/api/v1/applications/<id>/delete
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

> **_Note:_** <id>: While creating an app, a unique ID is assigned to an application. Provide the unique identifier for the app in REST URL.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                               |
| --------------- | -------- | ---- | ----------------------------------------- |
| Application ID  | Yes      | long | The unique id assigned to the application |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                      |
| ---------------- | ------ | -------------------------------- |
| id               | long   | Unique app ID assigned to an app |
| message          | string | Response status message          |

## Sample Response

```
{
"id" : "21164-8416795398",
"message" : "Application Deleted successfully"
}
```

## Response Status

| Code       | Description                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Status 200 | Application deleted successfully                                                                               |
| Status 400 | Only unpublished applications can be deletedInvalid appID provided or no application found with provided appID |
| Status 401 | Unauthorized request                                                                                           |
| Status 500 | Server failure to process request                                                                              |
