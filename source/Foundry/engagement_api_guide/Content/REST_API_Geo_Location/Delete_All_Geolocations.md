
# Delete All Geolocations

The **Delete All Geolocations** API deletes all geolocations present in the Engagement server. Only locations that are not associated with any segments will be deleted. If there are geoboundaries in the engagement server that are associated with segments, they will not be deleted.

## URL

The HTTP URL for **Create Geolocation** API is:

```
http://<host>:<port>/api/v1/geolocations/delete?deleteAll=true
```

This API is protected and implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                   |
| ---------------- | ------ | --------------------------------------------- |
| message          | string | Message associated with response status code. |
| id               | long   | Unique ID associated with this transaction.   |

## Sample Response

```
{  
   "message" : "Location(s) which are not assigned to Segments are deleted successfully.",  
   "id" : "1"  
)

```

## Response Status

| Code       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| Status 200 | Location(s) which are not assigned to Segments are deleted successfully.       |
| Status 400 | Only Location(s) which are not assigned to Segments are allowed to be deleted. |
| Status 401 | Unauthorized request.                                                          |
| Status 500 | Failed to delete Location(s).                                                  |
