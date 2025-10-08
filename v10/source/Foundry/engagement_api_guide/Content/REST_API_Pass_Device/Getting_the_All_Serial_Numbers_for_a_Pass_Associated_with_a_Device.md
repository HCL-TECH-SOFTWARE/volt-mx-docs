
# Getting the All Serial Numbers for a Pass Associated with a Device

The Getting the All Serial Numbers for a Pass Associated with a Device API fetches all the serial numbers for a specific pass associated with a device.

## URL

The HTTP URL for Getting the All Serial Numbers for a Pass Associated with a Device API is:

```
http://<<host>>:<<port>>/api/v1/devices/deviceLibraryIdentifier/registrations/passTypeIdentifier?passesUpdatedSince=tag
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter             | Type   | Description                           |
| ---------------------------- | ------ | ------------------------------------- |
| passesUpdatedSince=timeStamp | string | time stamp since the pass is updated. |

## Sample Response

```
{"lastUpdated":"1410171755358",  
"serialNumbers":["gT6zrHkaW","gT6zrHkaW","gT6zrHkaW","gT6zrHkaW","gT6zrHkaW"]}

```

## Response Status

| Code       | Description                                              |
| ---------- | -------------------------------------------------------- |
| Status 200 | Array of serial numbers                                  |
| Status 400 | Invalid request. Device is not registered with this pass |
