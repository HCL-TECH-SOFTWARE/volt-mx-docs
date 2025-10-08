                           

Get Push Message Full Content
=============================

The **Get Push Message Full Content** API uses the pushID as an input parameter and returns the push message details.

**URL**
-------

The HTTP URL for **Get Push Message Full Content** API is:

```
http://<host>:<port>/api/v1/messages/content/$pushId
```

This API implements Gateway Filter for Authentication to authenticate access of the API by a user.

Method
------

GET

Output Parameters
-----------------

Following fields are the output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| content | string | The push message string |

Sample Responses
----------------

```
{"content":"Test Push with iphone platform specific props."}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Success response code |
