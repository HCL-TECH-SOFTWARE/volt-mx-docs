
# Update Geolocation of a Device

The **Update Geolocation of a Device** API is used to update the approximate location of the device based on inputs such as Ksid, latitude, location, and longitude.

## Use Case

The **Update Geolocation of a Device** API can display a map in the browser, based on the device's current location. Using the same technology, Flickr website shows what others upload to the website near to your location.

## **URL**

The HTTP URL for Update Geolocation of a Device API is:

```
http://<host>:<port>/api/v1/location
```

The Update Geolocation of a Device API is not a secure API.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                                                                                                                                                                                                 |
| --------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ksid            | Yes      | long   | Volt MX Subscription Identification number of the application.                                                                                                                                              |
| latitude        | Yes      | long   | The latitude of the geolocation. Latitude is a geographic coordinate that specifies the north–south position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees. |
| longitude       | Yes      | long   | The longitude of the geolocation. Longitude specifies the east–west position of a location on the earth's surface. Geographic coordinates are specified in decimal degrees.                                 |
| Locname         | Optional | string | The location name provided by the device.                                                                                                                                                                   |

## Sample Request

### JSON

```
{  
"ksid": 4931474178235588403,  
"latitude": "15.22",  
"locname": "locname",  
"longitude": "15.22"  
}

```

### XML

```
<?xml version="1.0" encoding="UTF-8"?>
<geolocation>
<locname>54345</locname>
<latitude>50</latitude>
<longitude>50</longitude>
<ksid>5976535997207701808</ksid>
</geolocation>
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| message          | string | Message associated with response status code |
| id               | long   | Unique transaction ID                        |

## Sample Responses

### JSON

```
{
"id" : "134",
"message" : "Updated Successfully"
}
```

### XML

```
<geoLocationResponse>
<statusCode>200</statusCode>
<description>Updated Successfully</description>
</geoLocationResponse>
```

## Response Status

| Code       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| Status 200 | Details updated successfully                                                   |
| Status 400 | Invalid subscriber or subscriber not foundInvalid longitude or latitude value. |
