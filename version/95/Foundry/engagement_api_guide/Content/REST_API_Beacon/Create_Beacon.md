
# Create Beacon

The **Create Beacon** API adds beacons into Engagement Services.

## URL

The HTTP URL for **Create Beacon** API is:

```
http://<<host>>:<<port>>/api/v1/beacon/add
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                                                                                                                                                                                               |
| --------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Yes      | string       | The unique name assigned to a beacon                                                                                                                                                                      |
| details         | Optional | string       | Description of the beacon                                                                                                                                                                                 |
| uuid            | Optional | alphanumeric | Universally Unique Identifier Number (UUID) assigned to the Beacon. UUID contains 32 hexadecimal digits, split into 5 groups, and separated by dashes, for example, f7826da6-4fa2-4e98-8024- bc5b71e0893e |
| major           | Optional | long         | Major ID is a major identifier of a Bluetooth beacon                                                                                                                                                      |
| minor           | Optional | long         | Minor ID is a minor identifier of a Bluetooth beacon                                                                                                                                                      |

## Sample Request

```
{
"name": "BeaconCreateName",
"details": "BeaconCreateDetails",
"uuid": "Beacon-Create-UUID",
"major": 500,
"minor": 100
}
```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| id               | int    | Unique ID assigned to a beacon |
| message          | string | Response status message        |

## Sample Response

```


{
"id" : "3",
"message" : "Beacon Created Successfully"
}

```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Beacon created successfully       |
| Status 400 | Name is required                  |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
