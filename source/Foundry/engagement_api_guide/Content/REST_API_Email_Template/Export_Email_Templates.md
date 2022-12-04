
# Export Email Templates

The **Export Email Templates** API exports all or selected email templates to a zip file of compressed JSON files. The selected email template IDs are identified by the template ID which was returned by the [Create Email Template](Create_Email_Template.md) API. For information about the structure of the JSON files see [JSON Files for Import and Export](../JSON_Files.md).

## URL

To export selected email templates, the HTTP URL is:

```
http://<host>:<port>/api/v1/templates/email/export?templateIds=1,2,5
```

To export all email templates, the HTTP URL is:

```
http://<host>:<port>/api/v1/templates/email/export?exportAll=true
```

This API is secure and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

GET

## Header

The payload's request header includes Content-Type as application/x-www-form-urlencoded.

## Output Parameters

If the export is successful, a zip file of compressed JSON files is returned. Otherwise, an error message is returned.

The following fields are the output parameters when an error occurs.

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
