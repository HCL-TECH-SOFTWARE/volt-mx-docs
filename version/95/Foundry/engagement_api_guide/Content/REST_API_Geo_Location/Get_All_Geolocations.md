
# Get All Geolocations

The **Get All Geolocations** API accepts Start and pageSize as input parameters and returns an array of geolocations. The pageSize represents the maximum number of geolocations for which the details are to be returned. If Start is specified, the number of the geolocations that are returned are from start position to pageSize value. For example: if the Start value is zero and pageSize is five, then five geolocations from positions zero to four are returned. The Start default value is 0; the pageSize default is 20. To get all geolocations, set pageSize to the total number of geolocations.

## Use Case

You can use this API if you want to develop a social networking application that allows you to see exactly where your friends are, so that you can decide if you want to visit them.

## URL

The HTTP URL for **Get All Geolocations** API is:

```
http://<host>:<port>/api/v1/geolocations?start=0&pageSize=10
```

This is an authenticated API. It implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level -Two          | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                     | long   | Total location descriptions returned                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| locations        |                     | array  | An array of location objects details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                  | id                  | long   | Unique ID assigned to geolocation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                  | name                | string | Location name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                  | description         | string | Location description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                  | latitude            | long   | The latitude value of the location that is returned. Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | longitude           | long   | The longitude value of the location that is returned. Longitude specifies the east–west position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                  | altitude            | long   | The altitude of the location that is returned. Altitude is the height of a location, in meters, in relation to sea level or ground level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | miles               | long   | The radius of the geolocation that is returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | lastModifiedBy      | string | User name showing who last modified the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                  | createdBy           | string | User name showing who created the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  | clientAction        | string | Possible values are: "Notify Engagement Server" - This is the default value. This means that the client application will need to update its location with the Engagement server when the geoboundary is entered. This could be used in a scenario where the Engagement server will need to send the notifications because of a location-based campaign that is set up. "Local Notification"- This value means that the client application must display a local notification when the geoboundary is entered. All the geoboundaries with this clientAction have a local notification message that is associated and this is the message that is displayed in the local notification. "Custom Client Logic" - This value is any java script code that needs to be executed by the client application. A geoboundary with this clientAction will have a java script code that is associated with it which can be executed on the client side if needed. |
|                  | message             | string | The message displayed when clientAction is "Local Notification".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                  | lastModifiedDateStr | string | Date the location was last modified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                  | createdDateStr      | string | Date and time location was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | locationTags        | array  | An array of tags associated with the location. These tags represent additional data that is associated with the geoboundaries. The tags can be used to filter the list of geoboundaries that are returned. For example, geoboundaries can be tagged with an application name and only those geoboundaries associated with the tag can be retrieved when needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | metadata            | array  | An array of key/value pairs that contain metadata of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Sample Response

```
{
"total" : 2,
"locations" : [ {
"id" : 1,
"name" : "New York",
"description" : "New York City Shopping Area",
"latitude" : 40.7324,
"longitude" : -73.8248,
"altitude" : "",
"miles" : 50.0,
"lastModifiedBy" : "admin",
"createdBy" : "admin",
"clientAction": "localNotification",
"message": "Sample local notification message",
"lastModifiedDateStr" : "06/21/2016 05:59:06 PM IST",
"createdDateStr" : "06/21/2016 05:21:49 PM IST"
"locationTags": [
"Tag1", "Tag2", "Tag3"
],
"metadata": [
{
"key": "key1",
"value": "value1"
}
]  
 }, {
"id" : 2,
"name" : "Santa Maria",
"description" : "Santa Maria, Colombia (north)",
"latitude" : 10.7324,
"longitude" : -73.8248,
"altitude" : 80.0,
"miles" : 50.0,
"lastModifiedBy" : "admin",
"createdBy" : "admin",
"clientAction": "localNotification",
"message": "Sample local notification message",
"lastModifiedDateStr" : "06/21/2016 05:56:38 PM IST",
"createdDateStr" : "06/21/2016 05:56:38 PM IST"
"locationTags": [
"Tag1", "Tag2", "Tag3"
],
"metadata": [
{
"key": "key1",
"value": "value1"
}
]  
 } ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of geolocations             |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
