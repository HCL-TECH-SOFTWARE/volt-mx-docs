
# Delete Inbound Command

The **Delete Inbound Command** API deletes an inbound command. All communication from this API stops immediately.

## URL

The HTTP URL for Delete Inbound Command API is:

```
http://<<host>>:<<port>>/api/v1/twowaysms/<number-id>/command/<command-id>/delete
```

> **_Note:_** Use the Get All command API to know the command ID, which needs to be passed in the URL. The ID received from Get All command is the command ID to be used in the URL.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                          |
| --------------- | -------- | ---- | ---------------------------------------------------- |
| number-id       | Yes      | long | The unique number ID assigned to an inbound command  |
| command-id      | Yes      | long | The unique command ID assigned to an inbound command |

## Sample Response

```
{
"id" : "2",
"message" : "Inbound SMS Command deleted successfully"
}
```

## Response Status

| Code       | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| Status 200 | Inbound SMS command deleted successfully                              |
| Status 400 | No SMS number found for this IDNo inbound SMS command found to delete |
| Status 401 | Unauthorized request                                                  |
| Status 500 | Server failure to process request                                     |
