
# Update Geo Location of Device to Volt MX Foundry Engagement Services

The **Update Geo Location of Device to Volt MX Foundry Engagement Services**  API is used to update the approximate position of the device based on inputs such as Ksid, latitude, location, and longitude.

> **_Important:_** The Update Geo Location of Device to Volt MX Foundry Engagement Services API is maintained here to preserve backward compatibility.  
> We encourage you to use [Update Geo Location of a Device](../REST_API_Geo_Location/Update_Geolocation_of_Device_to_VoltMX_Foundry_Messaging.md)

## **URL**

The HTTP URL for Update Geo Location of Device to Volt MX Foundry Engagement Services API is:

```
http://<host or ip>:<port>/service/geolocupdate
```

## Method

POST

## Content Type

application/json;charset=UTF-8

## **Sample Request**

```
request format:  
{  
"ksid": "$ksid",  
"latitude": "$lat",  
"locname": "$locname",  
"longitude": "$lon"  
}
```

- Ksid: Volt MX Subscription Identification number of the application. For more details, refer to [Ksid](../../../../Foundry/vms_console_user_guide/Content/Apps/Modifying_Subscribers_List.md).
- **Latitude**: Latitude is a geographic coordinate, in decimal degrees, that specifies the north-south position of a point on the Earth's surface.
- Locname: The device is identified with the location name.
- **Longitude**: Longitude is a geographic coordinate, in decimal degrees, that specifies the east-west position of a point on the Earth's surface.

## Response Code

Success response code is _200._
