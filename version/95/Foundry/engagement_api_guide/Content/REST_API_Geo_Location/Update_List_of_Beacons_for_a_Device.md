                           

Update List of Beacons for a Device
===================================

The Update List of Beacons for a Device API is used to update the list of beacons for a device.

Use Case
--------

When a user needs to update the list of beacons for a device, the user can use Update List of Beacons for a Device API.

URL
---

The HTTP URL for Update List of Beacons for a Device API is:

```
http://<<host>>:<<port>>/api/v1/beaconupdate
```

Method
------

POST

Header
------

The payload's request header includes "Content-Type" for JSON as “application/json;charset=UTF-8".

Sample Payload
--------------

##### JSON schema for Payload

```
{  
"ksid" : "",  
"ufid" : "ferrari431@gmail.com",  
"appid" : "AppForAll",  
"beacons" : {  
"beacon" : {  
"uuid" : "fn54",  
"major" : "429",  
"minor" : "121"  
}  
}  
}  

```

Sample Response
---------------

##### JSON

```
{  
"message" : "Updated Successfully"  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Beacons Updated successfully |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |
