
# Export Events

The **Export Events** API exports all or selected events to a zip file of condensed JSON files. Selected events are identified by the event ID which was returned by the [Create Event](Create_Event.md) API. For information about the structure of the JSON files see [JSON Files for Import and Export](../JSON_Files.md).

> **_Note:_**  Events can be created using templates. When an event is created using a template, the data is copied from the template and stored as part of the event.

## URL

To export selected events, the HTTP URL is:

```
http://<host>:<port>/api/v1/events/export?eventIds=1,2,5
```

To export all events, the HTTP URL is:

```
http://<host>:<port>/api/v1/events/export?exportAll=true
```

This API is secure and implements Gateway Filter for Authentication/BasicAthentication to authenticate access of the API by a user.

## Method

GET

## Header

The payload's request header includes Content-Type as application/x-www-form-urlencoded.

## Output Parameters

If the export is successful, a zip file of compressed JSON files is returned. Otherwise an error message is returned.

The following fields are the output parameters if an error occurs.

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |
| id               | string | ""                                           |

> **_Note:_** If an error occurs, the id field is empty.

## Sample Response

If an error occurs, the response will include the error message but no IDs are listed, as in the following example.

```
{  
   "message" : "No data found to export",  
 "id": ""  
}
```

## Response Status

| Code       | Description               |
| ---------- | ------------------------- |
| Status 200 | Successful export         |
| Status 400 | Bad request               |
| Status 401 | Unauthorized request      |
| Status 500 | Failed to export the data |
