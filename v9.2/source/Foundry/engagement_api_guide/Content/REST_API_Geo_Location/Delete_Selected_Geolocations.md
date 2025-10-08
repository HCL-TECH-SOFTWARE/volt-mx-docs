
# Delete Selected Geolocations

The **Delete Selected Geolocations** API deletes the specified geolocations from the Engagement server. The API accepts an array of geolocation IDs as an input parameter and deletes the specified geolocations. Only locations that are not associated with any segments will be deleted. If there are locations in the engagement server that are associated with segments, they will not be deleted.

## URL

The HTTP URL for Delete Selected Geolocations API is:

```
http://<host>:<port>/api/v1/geolocations/delete
```

This API is protected and implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type  | Description                                |
| --------------- | -------- | ----- | ------------------------------------------ |
| locationids     | Yes      | array | An array of IDs of geolocations to delete. |

## Sample Request

```
{
"locationIds":[56,62,31]
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |
| id               | long   | Unique transaction ID                        |

## Sample Response

```
{
"message" : "Location(s) which are not assigned to Segments are deleted successfully",
"id" : "2"
}
```

## Response Status

| Code       | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| Status 200 | Location(s) which are not assigned to Segments are deleted successfully.        |
| Status 400 | Only Locations(s) which are not assigned to Segments are allowed to be deleted. |
| Status 401 | Unauthorized request.                                                           |
| Status 500 | Failed to delete Location(s).                                                   |
