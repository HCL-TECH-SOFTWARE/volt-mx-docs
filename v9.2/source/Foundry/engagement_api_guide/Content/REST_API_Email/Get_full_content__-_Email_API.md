
# Get Full Content

The **Get Full Content** API accepts the fetch id as an input parameter and returns the sent email message details.

## URL

The HTTP URL for **Get Full Content** API is:

```
http://<host or ip>:<port>/api/v1/email/content/{fetchId}
```

> **_Important:_** You can view fetch ID under Settings > Status > Email Queue > List view > Mail ID  
> Here fetch ID is referred as mail ID.

> **_Note:_** This is not a secure API and no credentials are needed to invoke this API.

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                                     |
| --------------- | -------- | ---- | ----------------------------------------------- |
| fetchId         | Yes      | long | The unique fetchId assigned to an email message |

## Sample Response

```
  
 {
"content": "Happy Weekend Sale<br>

<div style=\"padding:5px 0px\">
<a style=\"color:rgb(153,153,153)\" 
href=\"http://localhost:8080/vpns/api/v1/noauthServices/noauth/email/unsubsribeReq?email=vivek.sharma@gmail.com&id=7129463178642024412\" target=\"_blank\">unsubscribe from this list</a><br>"
}
```

## Response Status

| Code       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| Status 200 | Email content                                                 |
| Status 400 | Invalid email push id. No emails found with the given push ID |
| Status 401 | Unauthorized request                                          |
| Status 500 | Server failure to process request                             |
