
# Find Nearest Location (Geoboundaries Retrieval in a Radius)

The **Find Nearest Location** API retrieves the list of the geoboundaries in a radius of interest (radius in which all the existing geoboundaries are to be returned) and any tags that are associated with the geoboundaries.

## Use Case

The user first subscribes to the engagement server by calling the [Create / Modify Subscriber API](../REST_API_Subscribers/Create_New_Subscriber.md). The URL for this API is:

```
http://<host>:<port>/api/v1/subscribers
```

For example, this API could return ksid 5187099766488049525.

Next, you need to use **Update Geolocation of the subscriber** API. This API updates the geolocation of a subscriber with the provided ksid. The URL is as follows:

```
http://<host>:<port>/api/v1/location
```

Once you correlate the ksid of the subscriber with the location, you need to pass the ksid (same as regId or registrationId in the URL below), the radius of interest, page size, and any associated tags in the URL as input parameters. If the value of the radius and page size are not provided, the default radius used by the API is 20 miles and the default page size used by the API is 20.

## URL

The HTTP URL for Find Nearest Location API is:

```
http://<host>:<port>/api/v1/geolocations/nearest/{regId}?radius=20&pageSize=20&tags=tag1,tag2,tag3
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| refreshBoundary  |              |        | A refreshBoundary object that represent a virtual geoboundary. When the device crosses the geoboundary, it will need to invoke the Nearest Location API to retrieve the new set of geoboundaries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                  | distance     | long   | The virtual radius of the refreshBoundary. This value is the distance in miles between the user and any point on the circumference.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | latitude     | long   | The latitude value of the center of the refreshBoundary. Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | longitude    | long   | The longitude value of the center of the refreshBoundary. Longitude specifies the east–west position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| locations        |              |        | An array of locations objects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                  | id           | long   | The specific location ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | latitude     | long   | The latitude value of the center of the geoboundary. Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | longitude    | long   | The longitude value of the center of the geoboundary. Longitude specifies the east–west position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | distance     | long   | The distance between the user and the closest point of circumference of the geoboundary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                  | clientAction | string | Possible values are: "Notify Engagement Server" - This is the default value. This means that the client application will need to update its location with the Engagement server when the geoboundary is entered. This could be used in a scenario where the Engagement server will need to send the notifications because of a location-based campaign that is set up. "Local Notification"- This value means that the client application must display a local notification when the geoboundary is entered. All the geoboundaries with this clientAction have a local notification message that is associated and this is the message that is displayed in the local notification. "Custom Client Logic" - This value is any java script code that needs to be executed by the client application. A geoboundary with this clientAction will have a java script code that is associated with it which can be executed on the client side if needed. |
|                  | message      | string | The message displayed when clientAction is "Local Notification".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                  | tags         | string | An array of tags associated with the location. These tags represent additional data that is associated with the geoboundaries. The tags can be used to filter the list of geoboundaries that are returned. For example, geoboundaries can be tagged with an application name and only those geoboundaries associated with the tag can be retrieved when needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | customLogic  | string | The java script code to be executed when the clientAction is "Custom Client Logic".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | locationName | string | The name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | description  | string | Description of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                  | radius       | long   | The specified radius of the geolocation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                  | metadata     | array  | Array of key/value pairs that contain metadata about the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Sample Response

```
{  
"refreshBoundary":  
{ "distance": 0.20417458666360158, "latitude": 17.4483, "longitude": 78.3707 }  
,  
"locations": [  
{  
"id": 1,  
"latitude": 17.4478,  
"longitude": 78.3714,  
"distance": 0.057562165562404836,  
"clientAction": "notifyEngagementServer",  
"message": "",  
"customLogic": "",  
"locationName": "voltmx",  
"description": "",  
"radius": 10,  
"metaData": {},  
"locationTags": [
"tag3"
]  
},  
{  
"id": 2,  
"latitude": 17.4484,  
"longitude": 78.3738,  
"distance": 0.20417458666360158,  
"clientAction": "notifyEngagementServer",  
"message": "",  
"customLogic": "",  
"locationName": "Dell",  
"description": "",  
"radius": 0.5,  
"metaData": {},  
"locationTags": [
"tag1"
]  
},  
{  
"id": 3,  
"latitude": 17.4706,  
"longitude": 78.3837,  
"distance": 1.7606183628649363,  
"clientAction": "notifyEngagementServer",  
"message": "",  
"customLogic": "",  
"locationName": "Hitech city MMTS",  
"description": "",  
"radius": 0.5,  
"metaData": {},  
"locationTags": [
"tag2"
]  
}  
]  
}
```

## Response Status

| Code       | Description                             |
| ---------- | --------------------------------------- |
| Status 200 | Nearest location details                |
| Status 400 | No subscriber found with the given ksid |
| Status 401 | Unauthorized request                    |
| Status 500 | Server failure to process request       |
