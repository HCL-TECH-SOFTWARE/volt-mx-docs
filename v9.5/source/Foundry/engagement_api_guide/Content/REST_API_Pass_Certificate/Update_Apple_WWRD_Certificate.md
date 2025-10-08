
# Update Apple WWRD Certificate

The **Update Apple WWRD Certificate** API updates Apple WWRD certificate.

## URL

The HTTP URL for Update Apple WWRD Certificate API is:

```
http://<<host>>:<<port>>/api/v1/passcerts/applewwrdc
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Sample Request

```
appleCert: Certificate File
```

## Sample Response

```
{  
   "message" : "Certificate Upload Successfully",  
   "id" : ""  
}

```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Certificate uploaded successfully |
| Status 400 | Invalid pass certificate          |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
