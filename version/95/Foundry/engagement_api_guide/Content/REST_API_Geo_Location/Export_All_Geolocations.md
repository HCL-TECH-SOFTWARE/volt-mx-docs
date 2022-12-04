
# Export All Geolocations

The **Export All Geolocations** API exports all geolocations in the engagement server to a .csv file.

## URL

The HTTP URL for **Export All Geolocations** API is:

```
http://<host>:<port>/api/v1/geolocations/export?exportAll=true
```

This API is protected and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

GET

## Output Parameters

If the export is successful, a .csv file containing the geolocation data is returned. Otherwise, an error message is returned.

The following fields are output parameters if the export fails.

| Output Parameter | Type   | Description                            |
| ---------------- | ------ | -------------------------------------- |
| message          | string | The error message if the export fails. |

## Response Status

| Code       | Description               |
| ---------- | ------------------------- |
| Status 200 | Successful export         |
| Status 401 | Unauthorized request      |
| Status 500 | Failed to export the data |
