
# Delete Geolocation by ID

The **Delete Geolocation by ID** API deletes a geolocation from the Engagement server. The API accepts an ID of a single geolocation to delete as an input parameter. Only locations that are not associated with any segments can be deleted.

## URL

The HTTP URL for Delete Geolocation by ID API is:

```
http://<host>:<port>/api/v1/geolocations/{id}
```

This API is protected and implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

DELETE

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type | Description                             |
| --------------- | -------- | ---- | --------------------------------------- |
| Geolocation ID  | Yes      | long | The unique id assigned to a geolocation |

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |

## Sample Response

```
{
"id" : "",
"message" : "Location Deleted Successfully"
}
```

## Response Status

| Code       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| Status 200 | Location deleted successfully                                 |
| Status 400 | Invalid location ID provided or no location found with the ID |
| Status 401 | Unauthorized request                                          |
| Status 500 | Server failure to process request                             |
