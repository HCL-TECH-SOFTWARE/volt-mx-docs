
# Modify Pass Certificate by ID

The Modify Pass Certificate by ID API modifies the details of an pass certificate.

## URL

The HTTP URL for Modify Pass Certificate by ID API is:

```
http://<<host>>:<<port>>/api/v1/passcerts/id
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

POST

## Sample Request

```


FORM params:

passCert: .p12 file

passCertPassPhrase: password

certName: certificate Name

```

## Sample Response

```
{  
"message": "Details updated successfully",
   "id": "id"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Details updated successfully      |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
