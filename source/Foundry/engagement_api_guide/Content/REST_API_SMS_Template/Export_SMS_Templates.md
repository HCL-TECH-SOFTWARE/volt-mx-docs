
# Export SMS Templates

The **Export SMS Templates** API exports all or selected SMS templates to a zip file of compressed JSON files. The selected templates are identified by the template ID returned by the [Create SMS Template](Create_SMS_Template.md) API. For information about the structure of the JSON files see [JSON Files for Import and Export](../JSON_Files.md).

> **_Note:_** This API will export SMS Templates for both Text as well as Voice SMS.

## URL

To export selected SMS templates, the HTTP URL is:

```
http://<host>:<port>/api/v1/templates/sms/export?templateIds=1,2,5
```

To export all SMS templates, the HTTP URL is:

```
http://<host>:<port>/api/v1/templates/sms/export?exportAll=true
```

This API is secure and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

GET

## Header

The payload's request header includes Content-Type as application/x-www-form-urlencoded.

## Output Parameters

If the export is successful, a zip file of compressed JSON files is returned. Otherwise, an error code and message is returned.

The following fields are the output parameters if an error occurs.

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |

## Response Status

| Code       | Description               |
| ---------- | ------------------------- |
| Status 200 | Successful export         |
| Status 400 | Bad request               |
| Status 401 | Unauthorized request      |
| Status 500 | Failed to export the data |
