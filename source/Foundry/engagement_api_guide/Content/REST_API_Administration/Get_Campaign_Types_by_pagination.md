
# Get Campaign Types by Pagination

The **Get Campaign Types by Pagination** API accepts start and pageSize as input parameters and returns all campaign types details like total number of campaign types, and an array of campaign types. The pageSize represents the maximum number of the campaign types for which the details are to be returned. If the start is specified, the number of the campaign types that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six campaign types from position zero to five are returned.

## URL

The HTTP URL for **Get Campaign Types by Pagination** API is:

```
http://<host>:<port>/api/v1/admin/campaigntypes?start=0&pageSize=10
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two | Type   | Description                                 |
| ---------------- | --------- | ------ | ------------------------------------------- |
| total            |           | long   | Total number of campaign types              |
| campaignTypes    |           |        | An array of campaign types                  |
|                  | name      | string | The unique name assigned to a campaign type |
|                  | id        | long   | Unique ID assigned to a campaign            |

## Sample Response

```
{
"total" : 8,
"campaignTypes" : [ {
"name" : "eBay",
"id" : 1
}, {
"name" : "snapdeal",
"id" : 2
}, {
"name" : "flipkart",
"id" : 3
}, {
"name" : "amazon",
"id" : 4
}, {
"name" : "Business",
"id" : 5
}, {
"name" : "Financial",
"id" : 6
}, {
"name" : "Sells",
"id" : 7
}, {
"name" : "Sports",
"id" : 8
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of campaign types           |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
