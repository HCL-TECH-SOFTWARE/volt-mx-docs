
# Create Audience Attribute

The **Create Audience Attribute** API adds the audience attributes that needs to be associated with an audience.

## URL

The HTTP URL for **Create Audience Attribute** API is:

```
http://<host>:<port>/api/v1/admin/attributes
```

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are the input parameters:

| Input Parameter          | Required | Type    | Description                                  |
| ------------------------ | -------- | ------- | -------------------------------------------- |
|  attributeName           | Yes      | string  | The unique name assigned to an attribute     |
|  attributeType           | Yes      | string  | The type of an attribute                     |
| allowedValues            | Optional | string  | Values assigned to an attribute              |
|  attributeRequired       | Optional | boolean | If the attribute is required or not          |
| allowedReconciliationKey | Optional | boolean | If the reconciliation key is required or not |

## Sample Request

```
{  
  "attributeName" : "PhoneNumber",  
  "attributeType" : "Number",  
  "allowedValues" : "",  
  "attributeRequired" : false,  
  "allowedReconciliationKey" : false  
}

```

> **_Note:_** The following permissions are required to create a user attribute:  
> ROLE_CONFIGURATIONS  
> ROLE_CREATE_ATTRIBUTES

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                   |
| ---------------- | ------ | --------------------------------------------- |
| id               | long   | A unique ID assigned to an audience attribute |
| message          | string | Response status message                       |

## Sample Response

```
{
"id" : "3",
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                                     |
| Status 400 | Invalid Request. Request Method not allowedAttribute already exists with this nameInvalid Attribute Type. Allowed values are : String, Number, Pick List, Date |
| Status 401 | Unauthorized request                                                                                                                                           |
| Status 500 | Server failure to process request                                                                                                                              |
