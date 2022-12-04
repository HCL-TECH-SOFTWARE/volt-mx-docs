
# Create Geolocation

The **Create Geolocation** API adds a geolocation.

## Use Case

The Create Geolocation API defines a high-level interface to a location information such as latitude and longitude. Based on your requirement, you can create required geolocations. The created geolocations can be used in following scenarios:

Applications like Facebook can gather location-based data and show advertisements appropriate for that geographic region. Search engines like Google have also included location-based search results for their users.

Apps related with public transport data create maps that help people to make better decisions while commuting in a city.

## URL

The HTTP URL for **Create Geolocation** API is:

```
http://<host>:<port>/api/v1/geolocations
```

This API implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Yes      | string | Name of the geolocation to be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| description     | Optional | string | Description of the geolocation to be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| latitude        | Yes      | long   | The latitude of the new geolocation. Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| longitude       | Yes      | long   | The longitude of the new geolocation. Longitude specifies the east–west position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| altitude        | Yes      | long   | The height of the location to be created, in relation to sea level or ground level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| miles           | Yes      | long   | The radius of the geolocation to be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| clientAction    | Optional | string | Possible values are: "Notify Engagement Server" - This is the default value. This means that the client application will need to update its location with the Engagement server when the geoboundary is entered. This could be used in a scenario where the Engagement server will need to send the notifications because of a location-based campaign that is set up. "Local Notification"- This value means that the client application must display a local notification when the geoboundary is entered. All the geoboundaries with this clientAction have a local notification message that is associated and this is the message that is displayed in the local notification. "Custom Client Logic" - This value is any java script code that needs to be executed by the client application. A geoboundary with this clientAction will have a java script code that is associated with it which can be executed on the client side if needed. |
| customLogic     | Optional | string | The java script code to be executed when clientAction is "Custom Client Logic".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| locationTags    | Optional | string | An array of tags associated with the location. These tags represent additional data that is associated with the geoboundaries. The tags can be used to filter the list of geoboundaries that are returned. For example, geoboundaries can be tagged with an application name and only those geoboundaries associated with the tag can be retrieved when needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| metadata        | Optional | array  | An array of key/value pairs that contain metadata about the new geolocation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Sample Request

```
{
"name":"Lexington Ave",
"description":"Best Luxury Hotels in New York City",
"latitude":15.22,
"longitude":15.22,
"altitude":20.1,
"miles":1.1
"clientAction":"customLogic/localNotification/notifyEngagementServer",
"customLogic": "sdasd",
"locationTags": ["tag1", "tag2", "tag3"],
"metadata": [{
"key": "metaData1",
"value": "metaValue1"
}, {
"key": "metaData2",
"value": "metaValue2"
}]  
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                             |
| ---------------- | ------ | --------------------------------------- |
| message          | string | Response status code                    |
| id               | long   | ID of the geolocation that was created. |

## Sample Response

```
{  
   "message" : "Details added successfully",  
   "id" : "1"  
)

```

## Response Status

| Code       | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                              |
| Status 400 | Name is requiredLatitude is required, Longitude is required, Location Miles is required |
| Status 401 | Unauthorized request                                                                    |
| Status 500 | Server failure to process request                                                       |
