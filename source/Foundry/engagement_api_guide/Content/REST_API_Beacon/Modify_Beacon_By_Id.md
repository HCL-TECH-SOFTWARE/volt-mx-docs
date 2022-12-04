
# Modify Beacon by ID

The **Modify Beacon by ID** API modifies the details of a beacon.

## URL

The HTTP URL for **Modify Beacon by ID** API is:

```
http://<<host>>:<<port>>/api/v1/beacon/{id}
```

This service implements Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

PUT

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type         | Description                                                                                                                                                                                               |
| --------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Yes      | string       | The unique name assigned to a beacon                                                                                                                                                                      |
| details         | Optional | string       | Description of the beacon                                                                                                                                                                                 |
| uuid            | Yes      | alphanumeric | Universally Unique Identifier Number (UUID) assigned to the Beacon. UUID contains 32 hexadecimal digits, split into 5 groups, and separated by dashes, for example, f7826da6-4fa2-4e98-8024- bc5b71e0893e |
| major           | Optional | long         | Major ID is a major identifier of a Bluetooth beacon                                                                                                                                                      |
| minor           | Optional | long         | Minor ID is a minor identifier of a Bluetooth beacon                                                                                                                                                      |

## Sample Request

```
  
 {
"name": "BeaconCreateName",
"details": "BeaconCreateDetails",
"uuid": "Beacon-Create-UUID",
"major": "123",
"minor": "234"
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

"message" : "Details updated successfully",

"id" : "beaconId"

}

```

## Response Status

| Code       | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| Status 200 | Details updated successfully                                                        |
| Status 400 | Invalid request. Request method not allowedAuthentication fail, Invalid credentials |
| Status 401 | Unauthorized request.                                                               |
| Status 500 | Server failure to process request.                                                  |
