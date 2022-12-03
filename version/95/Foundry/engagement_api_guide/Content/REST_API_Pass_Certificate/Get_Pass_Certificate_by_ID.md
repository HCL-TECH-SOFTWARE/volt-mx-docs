
# Get Pass Certificate by ID

The Get Pass Certificate by ID API fetches a pass certificate details by ID.

## URL

The HTTP URL for Get Pass Certificate by ID API is:

```
http://<<host>>:<<port>>/api/v1/passcerts/id
```

This service implements ‘Gateway Filter for Authentication’ to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two    | Type         | Description                                                                                             |
| ---------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| total            |                | long         | Total number of pass certificates                                                                       |
| certificates     |                |              | An array of certificates objects                                                                        |
|                  | id             | long         | Unique ID assigned to a pass certificate                                                                |
|                  | name           | string       | Pass certificate name                                                                                   |
|                  | certUrl        | string       | A valid URL to generate a Pass certificate                                                              |
|                  | password       | string       | Unique password assigned to a pass certificate                                                          |
|                  | fileName       | string       | Pass certificate name (in p12 format)                                                                   |
|                  | identifier     | string       | A Pass type identifier is used to identify a pass that can be generated using Apple developer’s account |
|                  | teamIdentifier | alphanumeric | Team Identifier is unique to a particular Apple developer account                                       |
|                  | expiryDateStr  | string       | Date on which the pass certificate will expire                                                          |
|                  | createdBy      | string       | A user name that shows who created the pass certificate                                                 |
|                  | createdDateStr | string       | Date on which the pass certificate is created                                                           |
|                  | updatedBy      | string       | A user name that shows who last modified the pass certificate                                           |
|                  | updatedDateStr | string       | Date on which the pass certificate is updated                                                           |
|                  | deleted        | boolean      | If pass certificate is deleted or not                                                                   |

## Sample Response

```
{
"id" : 2,
"name" : "Pass Certificate 41",
"certUrl" : "http://10.10.17.209:8080/vpns/api/v1/passcerts/downloadpasscertificate?id=2",
"password" : "voltmx123",
"fileName" : "passbook41.p12",
"identifier" : "pass.com.vms.passbook4",
"teamIdentifier" : "PM7352S8QE",
"expiryDateStr" : "09/02/2017 02:22:25 PM IST",
"createdBy" : "admin",
"createdDateStr" : "09/14/2016 05:35:29 PM IST",
"updatedBy" : "admin",
"updatedDateStr" : "09/14/2016 05:35:29 PM IST",
"deleted" : false
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Pass cert details                 |
| Status 400 | Bad request                       |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
