
# Create Segment

The **Create Segment** API adds segments into Engagement server.

## URL

The HTTP URL for **Create Segment** API is:

```
http://<host>:<port>/api/v1/segments
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

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
|                     | attributeName                                                                                                                                                | Yes      | string | Attribute names such as email, first name, last name, country, state and location                                                                  |
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

    "name": "Amazon Campaign Segment",
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

## Sample Request that shows all attributeOperator values

```
 {
"name" : "Sample Segment",
"segmentDefinition" : "1 OR 2 OR 3 AND 4 OR (NOT 5) AND 6 AND 7",
"conditionType" : "advanced",
"segmentAudienceList" : [ {
"attributeName" : "Beacon",
"audienceBeacon" : {
"id" : "1"
},
"attributeOperator" : "Contains",
"conditionNo" : 1
}, {
"attributeName" : "Location",
"audienceLocation" : {
"id" : "1"
},
"attributeOperator" : "Contains",
"conditionNo" : 2
}, {
"attributeName" : "firstName",
"attributeOperator" : "Equal",
"conditionNo" : 3,
"attributeValue" : "John"
}, {
"attributeName" : "Email",
"attributeOperator" : "Contains",
"conditionNo" : 4,
"attributeValue" : "@gmail.com"
}, {
"attributeName" : "Country",
"attributeOperator" : "NotEqual",
"conditionNo" : 5,
"attributeValue" : "India"
}, {
"attributeName" : "Salary",
"attributeOperator" : "GreaterThan",
"conditionNo" : 6,
"attributeValue" : "2000000"
}, {
"attributeName" : "Age",
"attributeOperator" : "GreaterThan",
"conditionNo" : 7,
"attributeValue" : "2000000"
}, {
"attributeName" : "Date of Birth",
"attributeOperator" : "LessThan",
"conditionNo" : 8,
"attributeValue" : "12/31/1999"
}, {
"attributeName" : "Date of Birth",
"attributeOperator" : "LessThanCurrentDateMinus",
"conditionNo" : 9,
"attributeValue" : "30"
}, {
"attributeName" : "MovieShowDate",
"attributeOperator" : "GreaterThanCurrentDatePlus",
"conditionNo" : 10,
"attributeValue" : "7"
}, {
"attributeName" : "LastActivityDate",
"attributeOperator" : "GreaterThanCurrentDateMinus",
"conditionNo" : 11,
"attributeValue" : "7"
}, {
"attributeName" : "Journey Date",
"attributeOperator" : "LessThanCurrentDatePlus",
"conditionNo" : 12,
"attributeValue" : "7"
} ]
}

```

## Output Parameters

The following fields are output parameters:

## Sample Request

{ "name": "Amazon Campaign Segment", "owner": "admin", "segmentDefinition": "", "conditionType": "all", "createdDateStr": "06/21/2016 03:25:01 PM IST", "segmentAudienceList": \[{ "attributeOperator": "Contains", "attributeValue": "yahoo", "attributeName": "email", "conditionNo": 1 }, { "attributeOperator": "Contains", "attributeValue": "9", "attributeName": "mobileNumber", "conditionNo": 2 }, { "attributeName": "firstName", "attributeValue": "a", "attributeOperator": "Contains", "conditionNo": 3 }, { "attributeName": "lastName", "attributeValue": "b", "attributeOperator": "Contains", "conditionNo": 4 }, { "attributeName": "country", "attributeValue": "India", "attributeOperator": "Equal", "conditionNo": 5 } \] }

## Sample Request that shows all attributeOperator values

{ "name" : "Sample Segment", "segmentDefinition" : "1 OR 2 OR 3 AND 4 OR (NOT 5) AND 6 AND 7", "conditionType" : "advanced", "segmentAudienceList" : \[ { "attributeName" : "Beacon", "audienceBeacon" : { "id" : "1" }, "attributeOperator" : "Contains", "conditionNo" : 1 }, { "attributeName" : "Location", "audienceLocation" : { "id" : "1" }, "attributeOperator" : "Contains", "conditionNo" : 2 }, { "attributeName" : "firstName", "attributeOperator" : "Equal", "conditionNo" : 3, "attributeValue" : "John" }, { "attributeName" : "Email", "attributeOperator" : "Contains", "conditionNo" : 4, "attributeValue" : "@gmail.com" }, { "attributeName" : "Country", "attributeOperator" : "NotEqual", "conditionNo" : 5, "attributeValue" : "India" }, { "attributeName" : "Salary", "attributeOperator" : "GreaterThan", "conditionNo" : 6, "attributeValue" : "2000000" }, { "attributeName" : "Age", "attributeOperator" : "GreaterThan", "conditionNo" : 7, "attributeValue" : "2000000" }, { "attributeName" : "Date of Birth", "attributeOperator" : "LessThan", "conditionNo" : 8, "attributeValue" : "12/31/1999" }, { "attributeName" : "Date of Birth", "attributeOperator" : "LessThanCurrentDateMinus", "conditionNo" : 9, "attributeValue" : "30" }, { "attributeName" : "MovieShowDate", "attributeOperator" : "GreaterThanCurrentDatePlus", "conditionNo" : 10, "attributeValue" : "7" }, { "attributeName" : "LastActivityDate", "attributeOperator" : "GreaterThanCurrentDateMinus", "conditionNo" : 11, "attributeValue" : "7" }, { "attributeName" : "Journey Date", "attributeOperator" : "LessThanCurrentDatePlus", "conditionNo" : 12, "attributeValue" : "7" } \] }

## Output Parameters

The following fields are output parameters:

## Sample Request

```
{

    "name": "Amazon Campaign Segment",
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

## Sample Request that shows all attributeOperator values

```
 {
"name" : "Sample Segment",
"segmentDefinition" : "1 OR 2 OR 3 AND 4 OR (NOT 5) AND 6 AND 7",
"conditionType" : "advanced",
"segmentAudienceList" : [ {
"attributeName" : "Beacon",
"audienceBeacon" : {
"id" : "1"
},
"attributeOperator" : "Contains",
"conditionNo" : 1
}, {
"attributeName" : "Location",
"audienceLocation" : {
"id" : "1"
},
"attributeOperator" : "Contains",
"conditionNo" : 2
}, {
"attributeName" : "firstName",
"attributeOperator" : "Equal",
"conditionNo" : 3,
"attributeValue" : "John"
}, {
"attributeName" : "Email",
"attributeOperator" : "Contains",
"conditionNo" : 4,
"attributeValue" : "@gmail.com"
}, {
"attributeName" : "Country",
"attributeOperator" : "NotEqual",
"conditionNo" : 5,
"attributeValue" : "India"
}, {
"attributeName" : "Salary",
"attributeOperator" : "GreaterThan",
"conditionNo" : 6,
"attributeValue" : "2000000"
}, {
"attributeName" : "Age",
"attributeOperator" : "GreaterThan",
"conditionNo" : 7,
"attributeValue" : "2000000"
}, {
"attributeName" : "Date of Birth",
"attributeOperator" : "LessThan",
"conditionNo" : 8,
"attributeValue" : "12/31/1999"
}, {
"attributeName" : "Date of Birth",
"attributeOperator" : "LessThanCurrentDateMinus",
"conditionNo" : 9,
"attributeValue" : "30"
}, {
"attributeName" : "MovieShowDate",
"attributeOperator" : "GreaterThanCurrentDatePlus",
"conditionNo" : 10,
"attributeValue" : "7"
}, {
"attributeName" : "LastActivityDate",
"attributeOperator" : "GreaterThanCurrentDateMinus",
"conditionNo" : 11,
"attributeValue" : "7"
}, {
"attributeName" : "Journey Date",
"attributeOperator" : "LessThanCurrentDatePlus",
"conditionNo" : 12,
"attributeValue" : "7"
} ]
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
"message" : "Details added successfully"
}
```

## Response Status

| Code       | Description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Details added successfully                                                                                                                                     |
| Status 400 | Segment name is requiredSegment condition type is requiredAudience attributeName is requiredAudience attributeOperator is requiredCondition number is required |
| Status 401 | Unauthorized request                                                                                                                                           |
| Status 500 | Server failure to process request                                                                                                                              |
