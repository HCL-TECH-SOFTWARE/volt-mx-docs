
# Cancel Email

The **Cancel Email** API accepts the Email Request ID as an input parameter and cancels an email message. You can cancel only those email messages that are scheduled later.

## URL

The HTTP URL for **Cancel Email** API is:

For **POST** method:

```
http://<host or ip>:<port>/api/v1/email/{emailRequest ID}/cancel
```

For **DELETE** method:

```
http://<localhost or ip>:<8080>/api/v1/email/{emailRequest ID}
```

> **_Note:_** You can view email request ID under Settings > Status >Email Queue> Request ID

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

Based on a requirement, a user can use POST or DELETE method.

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                        |
| --------------- | -------- | ---- | -------------------------------------------------- |
| id              | Yes      | long | The unique request ID assigned to an email message |

## Sample Response

```
{
"id" : "",
"message" : "Cancelled 4 Email entries of the EmailRequest with ID : 7131002087805116277"
}
```

## Response Status

| Code       | Description                                             |
| ---------- | ------------------------------------------------------- |
| Status 200 | Cancelled xxx email entries of the emailRequest with ID |
| Status 400 | No cancellable messages found                           |
| Status 401 | Unauthorized request                                    |
| Status 500 | Server failure to process request                       |
