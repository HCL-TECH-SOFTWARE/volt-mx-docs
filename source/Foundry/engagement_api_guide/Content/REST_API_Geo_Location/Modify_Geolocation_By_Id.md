
# Modify Geolocation by ID

The **Modify Geolocation by ID** API modifies the details of a geolocation using the provided geolocation ID.

## Use Case

Here are some sample scenarios where the Modify Geolocations by ID API can update the location details and customize user experience by taking their location into account.

- While seeking late night cab service, the cab service websites can locate where you are.
- News sites like cnn.com include customized local headlines and weather on their front page.
- Online shopping stores like bigbasket.com inform whether products are in stock at local retailers.
- Real estate sites like 99acres.com presents an average house prices in a particular area.

## URL

The HTTP URL for **Modify Geolocation by ID** API is:

```
http://<host>:<port>/api/v1/geolocations/{id}
```

This API is protected and implements Gateway Filter for Authentication to authenticate access of the API by a user.

## Method

PUT

## Header

The payload's request header includes Content-Type for JSON as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Yes      | string | Location name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| description     | Optional | string | Location description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| latitude        | Yes      | long   | Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinate specified in decimal degrees                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| longitude       | Yes      | long   | Longitude specifies the east–west position of a location on the earth's surface. Longitude. Geographic coordinate specified in decimal degrees                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| altitude        | Yes      | long   | The height of a location in relation to sea level or ground level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| miles           | Yes      | long   | Circumference with location area specified.-Max : 6378.1 miles- Min : 0.01 miles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| clientAction    | Optional | string | Possible values are: "Notify Engagement Server" - This is the default value. This means that the client application will need to update its location with the Engagement server when the geoboundary is entered. This could be used in a scenario where the Engagement server will need to send the notifications because of a location-based campaign that is set up. "Local Notification"- This value means that the client application must display a local notification when the geoboundary is entered. All the geoboundaries with this clientAction have a local notification message that is associated and this is the message that is displayed in the local notification. "Custom Client Logic" - This value is any java script code that needs to be executed by the client application. A geoboundary with this clientAction will have a java script code that is associated with it which can be executed on the client side if needed. |
| customLogic     | Optional | string | The java script code to be executed when clientAction is "Custom Client Logic".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| locationTags    | Optional | string | An array of tags associated with the location. These tags represent additional data that is associated with the geoboundaries. The tags can be used to filter the list of geoboundaries that are returned. For example, geoboundaries can be tagged with an application name and only those geoboundaries associated with the tag can be retrieved when needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| metadata        | Optional | array  | An array of key/value pairs that contain metadata about the geolocation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Sample Request

```
  
 {
"name":"Lexington Ave",
"description":"Best Luxury Hotels in New York City",
"latitude":15.23,
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

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |
| id               | long   | Unique transaction ID                        |

## Sample Response

```
{
"message" : "Details updated successfully",
"id" : "134"
}
```

## Response Status

| Code       | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                                                         |
| Status 400 | Invalid location ID provided or no location found with the IDName is requiredLatitude is required, Longitude is required, Location Miles is required |
| Status 401 | Unauthorized request                                                                                                                                 |
| Status 500 | Server failure to process request                                                                                                                    |
