
# Get All File Upload Statuses

The **Get All File Update Statuses** API accepts start and pageSize as input parameters and returns all uploaded files details like total number of uploaded files and arrays of uploaded files statuses. This includes the user import files and the bulk push files. The pageSize represents the maximum number of uploaded files for which the details are to be returned. If the start is specified, the number of uploaded files that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six uploaded file details from position zero to five are returned. The statuses are not ordered by the date when the file was uploaded.

## URL

The HTTP URL for **Get All File Upload Statuses** API is:

```
http://<<host>>:<<port>>/api/v1/batchinfo/status?start=0&pageSize=20
```

This service implements the Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two     | Type   | Description                                                              |
| ---------------- | ------------- | ------ | ------------------------------------------------------------------------ |
| total            |               | long   | Total number of file statuses                                            |
| statuses         |               |        | An array of file statuses                                                |
|                  | dataType      | string | The data type uploaded, for example, as audience member or bulk push     |
|                  | statusMessage | string | Displays the current status of uploaded files in the text message format |
|                  | importedDate  | string | A date on which the files are imported                                   |
|                  | importedBy    | string | A user who has imported the files                                        |
|                  | id            | long   | A unique ID assigned to the file                                         |

## Sample Response

```
{
"total" : 11,
"statuses" : [ {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Uploaded file has got errors",
"importedDate" : "06/28/2016 05:49:23 AM GMT",
"importedBy" : "admin",
"id" : "5971883457542586123"
}, {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Uploaded file has got errors",
"importedDate" : "06/28/2016 06:16:56 AM GMT",
"importedBy" : "admin",
"id" : "5975270039821547419"
}, {
"dataType" : "BULK_PUSH",
"statusMessage" : "Invalid Value in the Source format.",
"importedDate" : "08/10/2016 10:59:03 AM GMT",
"importedBy" : "admin",
"id" : "6284799310563122587"
}, {
"dataType" : "BULK_PUSH",
"statusMessage" : "Invalid Value in the Source format.",
"importedDate" : "08/10/2016 11:07:27 AM GMT",
"importedBy" : "admin",
"id" : "6285057112367431490"
}, {
"dataType" : "BULK_PUSH",
"statusMessage" : "Messages queued sucessfully",
"importedDate" : "08/10/2016 11:11:26 AM GMT",
"importedBy" : "admin",
"id" : "6285179689234791312"
}, {
"dataType" : "BULK_PUSH",
"statusMessage" : "Messages queued sucessfully",
"importedDate" : "08/10/2016 11:15:14 AM GMT",
"importedBy" : "admin",
"id" : "6285296283815377408"
}, {
"dataType" : "BULK_PUSH",
"statusMessage" : "Messages queued sucessfully",
"importedDate" : "08/11/2016 04:39:30 AM GMT",
"importedBy" : "admin",
"id" : "6317380334681882621"
}, {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Uploaded file has got errors",
"importedDate" : "06/30/2016 09:17:30 AM GMT",
"importedBy" : "admin",
"id" : "8043372982699667240"
}, {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Uploaded file has got errors",
"importedDate" : "06/30/2016 09:26:03 AM GMT",
"importedBy" : "admin",
"id" : "8043504152865934374"
}, {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Header containing user attribute list is missing or few of the required attributes are missing in the uploaded file. Also, check if the file delimiter and selected delimiter type are matching",
"importedDate" : "06/30/2016 10:19:40 AM GMT",
"importedBy" : "admin",
"id" : "8044327860974288423"
}, {
"dataType" : "AUDIENCE_MEMBERS",
"statusMessage" : "Header containing user attribute list is missing or few of the required attributes are missing in the uploaded file. Also, check if the file delimiter and selected delimiter type are matching",
"importedDate" : "06/30/2016 10:21:13 AM GMT",
"importedBy" : "admin",
"id" : "8044351617443412818"
} ]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of all file statuses        |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
