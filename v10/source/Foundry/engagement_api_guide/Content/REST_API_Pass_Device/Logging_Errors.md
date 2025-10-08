                           


Logging Errors
==============

The **Logging Errors** API is used to register logging errors.

URL
---

The HTTP URL for Logging Errors API is:

```
http://<<host>>:<<port>>/api/v1/log
```

Method
------

POST

Sample Request
--------------

```
{"logs": ["MyLog1", "MyLog2"]}
```

Sample Response
---------------

```
{  
   "message": "Successfully updated the logs.",  
   "id": ""  
}  

```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Successfully updated logs |
| Status 400 | Invalid Request. Payload is incorrect. |
