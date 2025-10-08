
# Import Message Templates

The **Import Message Templates** API imports message templates from a zip file of compressed JSON files. For information about the structure of the JSON files see [JSON Files for Import and Export](../JSON_Files.md).

## URL

The HTTP URL for **Import Message Templates** API is:

```
http://<host>:<port>/api/v1/templates/push/import
```

This API is secure and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

## Method

POST

Because this API uploads a file, you must use the "multipart/form-data" encoding format. You must also provide the following request headers with the request.

- file (which points to the name of the file that is uploaded)
- **importType**: The possible values for **importType** are:
  - **insert** - This option reads the data in the zip file and attempts to perform an insert. If the insert fails, an error is thrown.
  - **upsert** - This option reads the data in the zip file and attempts to perform an update of each record. If the update fails, the record is inserted.
  - **delsert** - This option deletes all existing data and performs an insert of the data in the zip file. It is strongly recommended that you back up your data before choosing this option.

## Header

To invoke this API, the following requested headers with the corresponding values must be passed.

Content-Disposition: form-data; file: MessageTemplates.zip  
Content-Type: application/x-zip.compressed

The payload's request header includes Content-Type as multipart/form-data.

## Input Parameters

The required headers are:

Content-Disposition: form-data; file: MessageTemplates.zip  
Content-Type: application/x-zip.compressed

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level Two | Type   | Description                           |
| ---------------- | --------- | ------ | ------------------------------------- |
| message          |           | string | Message associated with response code |
| id               |           | long   | File upload ID                        |

Call the [Get File Upload Status by ID](../REST_API_Administration/Get_File_Upload_Status_by_ID.md) API using the returned ID as the input parameter to verify the status of the import. This API will also provide additional error information if the import failed.

## Sample Response

```

{
"message":"File uploaded successfully. Import is in progress.",
"id" : "4855568447645532159"
}
```

## Response Status

| Code       | Description                              |
| ---------- | ---------------------------------------- |
| Status 200 | Successful upload of file for processing |
| Status 400 | Bad request                              |
| Status 401 | Unauthorized request                     |
| Status 500 | Failed to import the data                |
