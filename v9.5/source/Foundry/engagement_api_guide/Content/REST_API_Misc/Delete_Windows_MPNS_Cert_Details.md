
# Delete Windows MPNS Cert Details

The **Delete Windows MPNS Certificate** deletes Windows MPNS certificate.

## URL

The HTTP URL for Delete Windows MPNS Certificate API is:

```
http://<host>:<port>/api/v1/applications/removewindowscert?appId={appId}
```

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                   |
| --------------- | -------- | ------------ | ----------------------------- |
| appId           | Yes      | alphanumeric | Unique ID assigned to the app |

## Sample Response

```
{
 "message" : Deleted the Windows MPNS certificate successfully",
 "id" : "appid"
}
```

## Response Status

| Code       | Description                                       |
| ---------- | ------------------------------------------------- |
| Status 200 | Deleted the Windows MPNS certificate successfully |
| Status 401 | Unauthorized request                              |
| Status 500 | Server failure to process request                 |
