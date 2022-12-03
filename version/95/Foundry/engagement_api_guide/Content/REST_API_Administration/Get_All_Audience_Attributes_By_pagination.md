
# Get All Audience Attributes by Pagination

The **Get All Audience Attributes by Pagination** API accepts start and pageSize as input parameters and returns all audience attributes. The PageSize represents the maximum number of the audience attributes for which the details are to be returned. If the start is specified, the number of the audience attributes that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six audience attributes from position zero to five are returned.

## URL

The HTTP URL for **Get All Audience Attributes by Pagination** API is:

```
http://<host>:<port>/api/v1/admin/attributes?start=0&pageSize=10
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two                | Type    | Description                                                      |
| ---------------- | ------------------------ | ------- | ---------------------------------------------------------------- |
| total            |                          | long    | Total number of audience attributes                              |
| attributes       |                          |         | An array of audience attributes                                  |
|                  | id                       | long    | Unique ID assigned to an audience attribute                      |
|                  | attributeName            | string  | Audience attribute name such as: street address                  |
|                  | attributeType            | NA      | The selected attribute type as string, number, pick list or date |
|                  | allowedValues            | string  | Based on selected attribute type, allowed values are entered.    |
|                  | attributeRequired        | boolean | If the attribute is required or not                              |
|                  | allowedReconciliationKey | boolean | If the reconciliation key is required or not                     |
|                  | lastModifiedBy           | string  | A user name that shows who last modified the audience attributes |
|                  | lastModifiedDateStr      | string  | Date on which the audience attributes was last modified          |
|                  | createdDateStr           | string  | Date on which the audience attribute is created                  |
|                  | createdBy                | string  | A user name that shows who created the application               |

## Sample Response

> **_Note:_** Either of the following permissions is required to get a user's attributes:  
> ROLE_CONFIGURATIONS  
> ROLE_CREATE_ATTRIBUTES

```
{
"total" : 2,
"attributes" : [ {
"id" : 1,
"attributeName" : "Street Address",
"attributeType" : "String",
"allowedValues" : "",
"attributeRequired" : false,
"allowedReconciliationKey" : false,
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/30/2016 04:56:27 AM EDT",
"createdDateStr" : "06/30/2016 04:56:27 AM EDT",
"createdBy" : "admin"
}, {
"id" : 2,
"attributeName" : "Social Security No.",
"attributeType" : "Number",
"allowedValues" : "",
"attributeRequired" : false,
"allowedReconciliationKey" : false,
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "08/04/2016 10:49:32 AM EDT",
"createdDateStr" : "08/04/2016 10:49:32 AM EDT",
"createdBy" : "admin"
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of audience attributes      |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
