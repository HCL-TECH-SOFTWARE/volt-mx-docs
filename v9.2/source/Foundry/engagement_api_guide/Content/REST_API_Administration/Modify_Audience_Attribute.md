
# Modify Audience Attribute

The **Modify Audience Attribute** API updates the attributes of an audience.

## URL

The HTTP URL for **Modify Audience Attribute** API is:

```
http://<host>:<port>/api/v1/admin/attributes/<id>/modify
```

This is a secure API and this service implements Gateway Filter for Authentication to authenticate access of the service by a user..

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter          | Required | Type    | Description                                  |
| ------------------------ | -------- | ------- | -------------------------------------------- |
| attributeName            | Yes      | string  | The unique name assigned to an attribute     |
| attributeType            | Yes      | string  | The type of an attribute                     |
| allowedValues            | Optional | string  | Values assigned to an attribute              |
| attributeRequired        | Optional | boolean | If the attribute is required or not          |
| allowedReconciliationKey | Optional | boolean | If the reconciliation key is required or not |

## Sample Request

```
{
"attributeName" : "County Zip code",
"attributeType" : "Number",
"allowedValues" : "",
"attributeRequired" : "",
"allowedReconciliationKey" :""
}
```

> **_Note:_** The following permissions are required to modify a user attribute:  
> ROLE_CONFIGURATIONS  
> ROLE_CREATE_ATTRIBUTES

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                                   |
| ---------------- | ------ | --------------------------------------------- |
| id               | long   | A unique ID assigned to an audience attribute |
| message          | string | Response status message                       |

## Sample Response

> **_Note:_** The returned id is the identifier in the database.

```
{
"id" : "4",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                 |
| Status 400 | Invalid attribute type. Allowed values are : String, Number, Pick List, Date |
| Status 401 | Unauthorized request                                                         |
| Status 500 | Server failure to process request                                            |
