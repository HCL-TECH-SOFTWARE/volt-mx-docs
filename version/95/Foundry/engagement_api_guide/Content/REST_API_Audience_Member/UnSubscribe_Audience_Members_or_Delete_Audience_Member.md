
# Unsubscribe Users or Delete Users

The **Unsubscribe Users or Delete Users** API accepts the KSID as an input parameter and deletes a user from Engagement server.

## URL

The HTTP URL for Unsubscribe Users or Delete Users API is:

```
http://<<host>>:<<port>>/api/v1/subscribeaudience/XXXXXX
```

This API implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

DELETE

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                                   |
| --------------- | -------- | ---- | ------------------------------------------------------------- |
| ksid            | Yes      | long | Volt MX Subscription Identification number of the application |

## Sample Response

```
{
"id" : "5979294531974952062",
"message" : "Audience Member deleted successfully"
}
```

## Response Status

| Code       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| Status 200 | Audience member deleted successfully                                           |
| Status 400 | No Audience Member found mapping to the given KSID or Audience Registration ID |
| Status 500 | Server failure to process request                                              |
