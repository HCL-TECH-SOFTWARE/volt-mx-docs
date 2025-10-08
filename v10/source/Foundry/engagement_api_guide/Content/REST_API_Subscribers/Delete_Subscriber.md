
# Delete Subscriber

The **Delete Subscriber** API accepts a list of KSIDs in the request body of subscribers to be deleted. Before the subscriber is deleted, the subscriber must be in an "inactive" state, as only inactive subscriptions can be deleted. If an attempt is made to delete an active subscription, an error code is returned.

## URL

The HTTP URL for **Delete Subscriber** API is:

```
http://<host>:<port>/api/v1/subscribers/delete/ksids
```

This API is protected and the service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                     |
| --------------- | -------- | ---- | ----------------------------------------------- |
| KSIDs           | Yes      | long | An array of unique IDs assigned to subscribers. |

## Sample Request

```
{
"ksids":["121324343545454545"]
}

```

> **_Important:_** You can pass an array of KSIDs in the sample request to delete subscribers.

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description             |
| ---------------- | ------ | ----------------------- |
| id               | long   | Unique response id      |
| message          | string | Response status message |

## Sample Response

```
{
"id" : "",
"message" : "Subscribers deleted successfully"
}
```

## Response Status

| Code       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| Status 200 | Subscribers deleted successfully                                              |
| Status 400 | Please provide valid ksids with inactive statusPlease provide ksids to delete |
| Status 401 | Unauthorized request                                                          |
| Status 500 | Failed to delete the subscriber                                               |
