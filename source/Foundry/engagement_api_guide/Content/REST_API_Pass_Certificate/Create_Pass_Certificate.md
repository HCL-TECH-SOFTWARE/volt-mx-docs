
# Create Pass Certificate

The **Create Pass Certificate** API adds pass certificates.

## URL

The HTTP URL for Create Pass Certificate API is:

```
http://<<host>>:<<port>>/e api/v1/passcerts
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
"message": "Details added successfully",

    "id": "id"

}
```

## Response Status

| Code       | Description                                    |
| ---------- | ---------------------------------------------- |
| Status 200 | Details added successfully                     |
| Status 400 | The current request is not a multipart request |
| Status 401 | Unauthorized request                           |
| Status 500 | Server failure to process request              |
