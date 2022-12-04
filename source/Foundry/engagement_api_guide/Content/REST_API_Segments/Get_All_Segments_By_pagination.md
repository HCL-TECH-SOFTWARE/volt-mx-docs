
# Get All Segments by Pagination

With Segments a user can send messages to a portion of audience, who have common needs. The **Get All Segments by Pagination** API accepts Start and pageSize as input parameters and returns segments details. The PageSize represents the maximum number of the segments for which the details are to be returned. If the start is specified, the number of segments that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six segments from position zero to five are returned.

## URL

The HTTP URL for **Get All Segments by Pagination** API is:

```
http://<host>:<port>/api/v1/segments
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two           | Type   | Description                                                                                                                                  |
| ---------------- | ------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| total            |                     | long   | Total number of segments                                                                                                                     |
| segments         |                     |        | An array of segment parameters                                                                                                               |
|                  | id                  | long   | A unique ID assigned to the segment                                                                                                          |
|                  | name                | string | Segment name                                                                                                                                 |
|                  | owner               | string | A user name showing who created the segment                                                                                                  |
|                  | segmentDefinition   | string | Segment definition                                                                                                                           |
|                  | conditionType       | string | Condition type specifies the final segment construction from the selected segments attributes. Allowed condition types are: any all advanced |
|                  | lastModifiedBy      | string | A user name showing who last modified the segment                                                                                            |
|                  | lastModifiedDateStr | string | Date and time on which the segment was last modified                                                                                         |
|                  | createdBy           | string | A user name showing who created the segment                                                                                                  |
|                  | createdDateStr      | string | Date and time on which the segment was created                                                                                               |
|                  | segmentAudienceList |        | An array of segment audience parameters. It includes: attributeName attributeValue attributeOperator conditionNo                             |

## Sample Response

```
{
"total" : 5,
"segments" : [ {
"id" : 1,
"name" : "All Users",
"owner" : "admin",
"segmentDefinition" : "",
"conditionType" : "any",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/15/2016 02:01:15 PM IST",
"createdBy" : "admin",
"createdDateStr" : "06/15/2016 02:01:15 PM IST",
"segmentAudienceList" : [ ]
}, {
"id" : 2,
"name" : "sample segment",
"owner" : "admin",
"segmentDefinition" : "1",
"conditionType" : "advanced",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/21/2016 03:26:26 PM IST",
"createdBy" : "admin",
"createdDateStr" : "06/20/2016 03:53:20 PM IST",
"segmentAudienceList" : [ {
"attributeOperator" : "Contains",
"attributeValue" : "a",
"attributeName" : "firstName",
"conditionNo" : 1
}, {
"attributeOperator" : "Contains",
"attributeValue" : "a",
"attributeName" : "lastName",
"conditionNo" : 2
} ]
}, {
"id" : 3,
"name" : "eBaysegment",
"owner" : "admin",
"segmentDefinition" : "",
"conditionType" : "any",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/21/2016 03:23:57 PM IST",
"createdBy" : "admin",
"createdDateStr" : "06/21/2016 03:23:57 PM IST",
"segmentAudienceList" : [ {
"attributeOperator" : "Contains",
"attributeValue" : "a",
"attributeName" : "firstName",
"conditionNo" : 1
}, {
"attributeOperator" : "Contains",
"attributeValue" : "r",
"attributeName" : "lastName",
"conditionNo" : 2
} ]
}, {
"id" : 4,
"name" : "SnapDeal Segment",
"owner" : "admin",
"segmentDefinition" : "",
"conditionType" : "all",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/21/2016 03:24:30 PM IST",
"createdBy" : "admin",
"createdDateStr" : "06/21/2016 03:24:30 PM IST",
"segmentAudienceList" : [ {
"attributeOperator" : "Contains",
"attributeValue" : "gmail",
"attributeName" : "email",
"conditionNo" : 1
}, {
"attributeOperator" : "Contains",
"attributeValue" : "a",
"attributeName" : "firstName",
"conditionNo" : 2
} ]
}, {
"id" : 5,
"name" : "Flipkart Segment",
"owner" : "admin",
"segmentDefinition" : "",
"conditionType" : "all",
"lastModifiedBy" : "admin",
"lastModifiedDateStr" : "06/21/2016 03:25:01 PM IST",
"createdBy" : "admin",
"createdDateStr" : "06/21/2016 03:25:01 PM IST",
"segmentAudienceList" : [ {
"attributeOperator" : "Contains",
"attributeValue" : "yahoo",
"attributeName" : "email",
"conditionNo" : 1
}, {
"attributeOperator" : "Contains",
"attributeValue" : "9",
"attributeName" : "mobileNumber",
"conditionNo" : 2
} ]
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | List of segments details          |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
