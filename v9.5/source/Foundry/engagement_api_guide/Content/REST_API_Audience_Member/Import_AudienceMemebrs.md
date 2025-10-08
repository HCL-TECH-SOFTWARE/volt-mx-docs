                           

Import Users
============

The **Import Users** API imports a list of users in CSV format.

URL
---

The HTTP URL for **Import Users** API is:

```
http://<host>:<port>/vpns/api/v1/audience/import?DELIMITER=COMMA
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

Method
------

POST

Input Parameters
----------------

Following fields are the input parameters for Import Audience Members API:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| CSV File | The CSV format | The CSV file should contain a header row that contains column names like ‘email’, ‘first name’, ‘last name’. |

Sample Request Payload
----------------------

```
CSV file
```

Sample Response Payload
-----------------------

```


{

   "message" : "File uploaded successfully, import is in progress",

   "id" : " "

}


```

Response Status
---------------

The following table displays the standard status response messages:

  
| Code | Description |
| --- | --- |
| Status 200 | Details updated successfully |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
