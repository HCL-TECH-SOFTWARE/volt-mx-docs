
# Get Apple WWRD Certificate

The **Get Apple WWRD Certificate** API is used to get Apple WWRD certificate.

## URL

The HTTP URL for **Get Apple WWRD Certificate** API is:

```
http://<<host>>:<<port>>/api/v1/passcerts/applewwrdc
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Sample Response

```
{
"issuerDN": {
"commonName": "Apple Root CA",
"orginationUnit": "Apple Certification Authority",
"orgination": "US",
"country": ""
},
"subjectDN": {
"subjectCN": "Apple Worldwide Developer Relations Certification Authority",
"subjectOU": "Apple Worldwide Developer Relations",
"subjectUID": ""
},
"startDateStr": "02/15/2008 12:26:35 AM GMT+05:30",
"expiryDateStr": "02/15/2016 12:26:35 AM GMT+05:30"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Pass cert                         |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
