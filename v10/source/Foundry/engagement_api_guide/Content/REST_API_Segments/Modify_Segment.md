
# Modify Segment

The **Modify Segment** API modifies a segment details.

## URL

The HTTP URL for **Modify Segment** API is:

```
http://<host>:<port>/api/v1/segments/<id>/modify
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter     | Level – Two                                                                                                                                                  | Required | Type   | Description                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                |                                                                                                                                                              | Yes      | string | Unique name assigned to a segment                                                                                                                  |
| owner               |                                                                                                                                                              | Optional | string | Name of the user who created the segment                                                                                                           |
| conditionType       |                                                                                                                                                              | Yes      |        | Condition type specifies the final segment construction from the selected segments attributes. Allowed condition types are: - any - all - advanced |
| createdDateStr      |                                                                                                                                                              | Optional | string | Date and time on which the segment was created                                                                                                     |
| segmentDefinition   |                                                                                                                                                              | Optional |        | Segment definition includes Condition, Audience Member attributes and Operators                                                                    |
| segmentAudienceList |                                                                                                                                                              |          |        | An array of segment audience attributes                                                                                                            |
|                     | attributeName                                                                                                                                                | Yes      | string | Unique name assigned to an attribute                                                                                                               |
|                     | attributeValue                                                                                                                                               | Yes      | string | Unique value assigned to an attribute                                                                                                              |
|                     | attributeOperator                                                                                                                                            | Yes      | string | The attribute operator. The following table shows the possible operator values.                                                                    |
| Attribute Type      | Acceptable Operator Values                                                                                                                                   |
| ---                 | ---                                                                                                                                                          |
| String              | Contains, Equal, NotEqual                                                                                                                                    |
| Pick List           | Contains, Equal, NotEqual                                                                                                                                    |
| Number              | Contains, Equal, NotEqual, GreaterThan, LessThan                                                                                                             |
| Date                | Contains, Equal, NotEqual, GreaterThan, LessThan, GreaterThanCurrentDateMinus, GreaterThanCurrentDatePlus, LessThanCurrentDateMinus, LessThanCurrentDatePlus |

|
|   | conditionNo | Yes | long | Numeric identifier of the condition |

## Sample Request

```
{

    "name": "Amazon Campaign Segment 2016",
    "owner": "admin",
    "segmentDefinition": "",
    "conditionType": "all",
    "createdDateStr": "06/21/2016 03:25:01 PM IST",
    "segmentAudienceList": [{
    		"attributeOperator": "Contains",
    		"attributeValue": "yahoo",
    		"attributeName": "email",
    		"conditionNo": 1
    	}, {
    		"attributeOperator": "Contains",
    		"attributeValue": "9",
    		"attributeName": "mobileNumber",
    		"conditionNo": 2
    	},

    	{
    		"attributeName": "firstName",
    		"attributeValue": "a",
    		"attributeOperator": "Contains",
    		"conditionNo": 3
    	}, {
    		"attributeName": "lastName",
    		"attributeValue": "b",
    		"attributeOperator": "Contains",
    		"conditionNo": 4
    	}, {
    		"attributeName": "country",
    		"attributeValue": "India",
    		"attributeOperator": "Equal",
    		"conditionNo": 5
    	}
    ]

}
```

## Output Parameters

The following fields are output parameters:

## Sample Request

{ "name": "Amazon Campaign Segment 2016", "owner": "admin", "segmentDefinition": "", "conditionType": "all", "createdDateStr": "06/21/2016 03:25:01 PM IST", "segmentAudienceList": \[{ "attributeOperator": "Contains", "attributeValue": "yahoo", "attributeName": "email", "conditionNo": 1 }, { "attributeOperator": "Contains", "attributeValue": "9", "attributeName": "mobileNumber", "conditionNo": 2 }, { "attributeName": "firstName", "attributeValue": "a", "attributeOperator": "Contains", "conditionNo": 3 }, { "attributeName": "lastName", "attributeValue": "b", "attributeOperator": "Contains", "conditionNo": 4 }, { "attributeName": "country", "attributeValue": "India", "attributeOperator": "Equal", "conditionNo": 5 } \] }

## Output Parameters

The following fields are output parameters:

## Sample Request

```
{

    "name": "Amazon Campaign Segment 2016",
    "owner": "admin",
    "segmentDefinition": "",
    "conditionType": "all",
    "createdDateStr": "06/21/2016 03:25:01 PM IST",
    "segmentAudienceList": [{
    		"attributeOperator": "Contains",
    		"attributeValue": "yahoo",
    		"attributeName": "email",
    		"conditionNo": 1
    	}, {
    		"attributeOperator": "Contains",
    		"attributeValue": "9",
    		"attributeName": "mobileNumber",
    		"conditionNo": 2
    	},

    	{
    		"attributeName": "firstName",
    		"attributeValue": "a",
    		"attributeOperator": "Contains",
    		"conditionNo": 3
    	}, {
    		"attributeName": "lastName",
    		"attributeValue": "b",
    		"attributeOperator": "Contains",
    		"conditionNo": 4
    	}, {
    		"attributeName": "country",
    		"attributeValue": "India",
    		"attributeOperator": "Equal",
    		"conditionNo": 5
    	}
    ]

}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                     |
| ---------------- | ------ | ------------------------------- |
| id               | long   | Unique ID assigned to a segment |
| message          | string | Response status message         |

## Sample Response

```
{
"id" : "7",
"message" : "Details updated successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                                                                                                   |
| Status 400 | Segment name is requiredSegment condition type is requiredAudience attributeName is requiredAudience attributeOperator is requiredCondition number is required |
| Status 401 | Unauthorized request.                                                                                                                                          |
| Status 500 | Server failure to process request                                                                                                                              |
