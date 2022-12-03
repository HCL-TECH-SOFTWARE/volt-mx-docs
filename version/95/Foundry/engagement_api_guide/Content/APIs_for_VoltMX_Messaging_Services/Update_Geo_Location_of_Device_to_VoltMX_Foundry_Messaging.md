                          

Update Geo Location of Device to Volt MX Foundry Messaging
=========================================================

This API is used to update the approximate position of the device based on inputs such as Ksid, latitude, location, and longitude.

**Request URL**
---------------

[http://<host or ip>:<port>/service/geolocupdate](http://10.10.19.74:8080/service/geolocupdate)

Request Method
--------------

HTTP POST

**Request Type**
----------------

application/json;charset=UTF-8

**Request Format**
------------------

```
request format:  
{  
"ksid": "$ksid",  
"latitude": "$lat",  
"locname": "$locname",  
"longitude": "$lon"  
}
```


*   Ksid: Volt MX Subscription Identification number of the application. For more details, refer to [Ksid](../../../../Foundry/vms_console_user_guide/Content/Apps/Modifying_Subscribers_List.md).
*   **Latitude**: Latitude is a geographic coordinate, in decimal degrees, that specifies the north-south position of a point on the Earth's surface.
*   Locname: The device is identified with the location name.
*   **Longitude**: Longitude is a geographic coordinate, in decimal degrees, that specifies the east-west position of a point on the Earth's surface.

Response Code
-------------

Success response code is "_200_".
