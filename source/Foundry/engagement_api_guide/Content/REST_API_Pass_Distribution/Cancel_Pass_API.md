
# Cancel Pass API

The **Cancel Pass API** API cancels the required passes.

## URL

The HTTP URL for Cancel Pass API is:

```
http://<<host>>:<<port>>/api/v1/pass/cancel/{id}
```

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                      |
| --------------- | -------- | ---- | -------------------------------- |
| id              | Yes      | long | The unique id assigned to a pass |

## Sample Response

```
{  
   id : ""  
   message : "Request cancelled Successfully"  
)

```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Request cancelled successfully    |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
