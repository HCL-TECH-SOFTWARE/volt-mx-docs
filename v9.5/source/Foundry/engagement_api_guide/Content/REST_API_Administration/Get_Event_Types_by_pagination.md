
# Get Event Types by Pagination

The **Get Event Types by Pagination** API accepts start and pageSize as input parameters and returns all event types details like total number of events, and an array of event types. The pageSize represents the maximum number of the event types for which the details are to be returned. If the start is specified, the number of the event types that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six event types from position zero to five are returned.

## URL

The HTTP URL for **Get Event Types by Pagination** API is:

```
http://<host>:<port>/api/v1/admin/eventtypes?start=0&pageSize=10
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two | Type   | Description                               |
| ---------------- | --------- | ------ | ----------------------------------------- |
| total            |           | long   | Total number of event types               |
| eventTypes       |           |        | An array of event types                   |
|                  | id        | long   | Unique ID assigned to an event type       |
|                  | name      | string | The unique name assigned to an event type |

## Sample Response

```
{
"total" : 5,
"eventTypes" : [ {
"name" : "Business",
"id" : 1
}, {
"name" : "Finance",
"id" : 2
}, {
"name" : "Coupon",
"id" : 3
}, {
"name" : "Travel",
"id" : 4
}, {
"name" : "Entertainment",
"id" : 5
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of event types              |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
