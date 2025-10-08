
# Delete Inbound Number

The **Delete Inbound Number** API deletes an inbound number from Engagement Services. All the communication from this number stops immediately.

## URL

The HTTP URL for the Delete Inbound Number API is:

```
http://<host>>:<<port>>/api/v1/twowaysms/number/<number-id>/delete
```

> **_Note:_** <number-id>: Here, number ID refers to an ID that is used to map inbound number with internal data record.

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                    |
| --------------- | -------- | ---- | ---------------------------------------------- |
| number-id       | Yes      | long | Unique number ID assigned to an inbound number |

## Sample Response

```
{
"id" : "5",
"message" : "Inbound SMS Number deleted successfully"
}
```

## Response Status

| Code       | Description                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| Status 200 | Inbound SMS number deleted successfully                                                                                  |
| Status 400 | Invalid Inbound number ID provided or no valid Inbound Number found with given IDNumbers with commands cannot be deleted |
| Status 401 | Unauthorized request                                                                                                     |
| Status 500 | Server failure to process request                                                                                        |
