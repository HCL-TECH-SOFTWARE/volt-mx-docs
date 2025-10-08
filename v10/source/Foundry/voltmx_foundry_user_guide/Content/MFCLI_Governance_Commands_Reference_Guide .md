# MFCLI Governance Commands Reference Guide (Volt MX Foundry)

This document provides a complete reference for using MFCLI for governance to automate and manage Volt MX Foundry operations in both **on-premise** and **cloud** environments.


## General Notes

* For **on-premise**
    * You **must** provide `-au` (Auth Service URL) and `-cu` (Console URL).

* For **cloud**:
    * You **must** provide `-t` (tenant ID) and optionally `--cloud-url` if using a specific environment like `qa-`, `sit-`, etc.

## 1. createPublishRequest

Creates a new publish request for an application. Run this command post diff command. requestType should be same for diff and create publish request commands.

### Required Parameters

* `-u`, `--username`: Login username
* `-p`, `--password`: Password
* `-e`, `--environment`: Target environment name
* `-a`, `--app`: Application name
* `-r`, `--requestType`: Type of publish request (e.g., publish). Only PUBLISH, CONFIGUREANDPUBLISH, REPUBLISH are supported.
* `-d`, `--description`: Description of the publish request
* `-au`, `--auth-url`: On-premise only. Auth service base URL
* `-cu`, `--console-url`: On-premise only.Console base URL
* `-t`, `--account`: Cloud only.Tenant account ID

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)
* `--webAppVersion`: Web app zip version
* `--publishMicroApps`: Publish micro apps (true/false)
* `-k`, `--appkey`: Primary App Key
* `-s`, `--appsecret`: Primary App Secret
* `-sk`, `--secappkey`: Secondary App Key
* `-ss`, `--secappsecret`: Secondary App Secret
* `--skipwebapp`: Skip web app publish
* `--incremental`: Incremental publish (true/false)
* `--skipSwaggerFiles`: Skip Swagger files
* `--skipEngagementPublish`: Skip engagement service publish
* `--subType`: App subtype (e.g., easdesignapp)
* ` --snapshotName`: Snapshot name 

>**Note** :<br> When using request type `REPUBLISH`, the `--snapshotName` parameter is mandatory.<br>Snapshot names can be obtained using the `explore-snapshots` command.

### Sample (On-Premise)

```sh
java -jar mfcli.jar createPublishRequest -u admin -p pass -e Dev -a MyApp -r publish -d "First Publish" -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar createPublishRequest -u admin -p pass -e Dev -a MyApp -r publish -d "First Publish" -t 100000001
```

### Example Responses

* Success

```json
{ "message": "Publish request created successfully", "httpStatusCode": 201 }
```

* Pending Exists

```json
{ "message": "Pending publish request changes awaiting deployment", "httpStatusCode": 409 }
```

* Invalid or Failed Diff

```json
{ "message": "Unable to fetch diff details", "httpStatusCode": 400 }
```

* Unexpected Error

```json
{ "message": "Failed to create publish request", "httpStatusCode": 500 }
```

## 2. publishRequestStatus

Checks the current status of a publish request.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-au`, `--auth-url`: On-premise only
* `-cu`, `--console-url`: On-premise only
* `-t`, `--account`: Cloud only

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)

### Sample (On-Premise)

```sh
java -jar mfcli.jar publishRequestStatus -u admin -p pass -e Dev -a MyApp -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar publishRequestStatus -u admin -p pass -e Dev -a MyApp -t 100000001
```

### Example Responses

* 200 OK (Approved and Published):

```json
{
  "publishRequestStatus": "APPROVED",
  "appPublishStatus": "PUBLISHED"
}
```

* Pending and Approved:

```json
{
  "publishRequestStatus": "APPROVED",
  "appPublishStatus": "PENDING"
}
```
* Declined request:
```json
{
  "publishRequestStatus": "DECLINED",
  "appPublishStatus": "DONE"
}
```

* Cancelled Request:

```json
{
  "publishRequestStatus": "CANCELLED",
  "appPublishStatus": "DONE"
}
```

* No Request Exists:

```json
{
  "publishRequestStatus": null,
  "appPublishStatus": null
}
```

## 3. appUpdateStatus

Checks whether the app has unpublished updates.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-au`, `--auth-url`: On-premise only
* `-cu`, `--console-url`: On-premise only
* `-t`, `--account`: Cloud only

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)

### Sample (On-Premise)

```sh
java -jar mfcli.jar appUpdateStatus -u admin -p pass -e Dev -a MyApp -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar appUpdateStatus -u admin -p pass -e Dev -a MyApp -t 100000001
```

### Example Responses

* Has updates

```json
{
  "isUpdated": true
}
```

* No updates

```json
{
  "isUpdated": false
}
```

## 4. governanceStatus

Checks if governance is enabled for the environment.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-au`, `--auth-url`: On-premise only
* `-cu`, `--console-url`: On-premise only
* `-t`, `--account`: Cloud only

### Sample (On-Premise)

```sh
java -jar mfcli.jar governanceStatus -u admin -p pass -e Dev -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar governanceStatus -u admin -p pass -e Dev -t 100000001
```

### Example Responses

* Governance Enabled

```json
{
  "Governance Enabled": "true"
}
```

* Governance Disabled

```json
{
  "Governance Enabled": "false"
}
```

## 5. publishDiff

Fetches differences between current app and last published snapshot.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-r`, `--requestType`: Request type (e.g., publish)
* `-au`, `--auth-url`: On-premise only
* `-cu`, `--console-url`: On-premise only
* `-t`, `--account`: Cloud only

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)
* `-ic`, `--ignore-conflicts`: Ignore conflicts (true/false)

### Example Responses

* No Diff

```json
{
  "diff": []
}
```

* With Diff

```json
{
  "diff": [
    {
      "filename": "services/IntegrationService.json",
      "status": "added"
    },
    {
      "filename": "services/IntegrationService/operations.json",
      "status": "modified"
    }
  ]
}
```

* Conflict or Failure

```json
{ "message": "Unable to fetch diff details", "httpStatusCode": 400 }
```

## Common Errors

| Code | Message                        |
| ---- | ------------------------------ |
| 400  | Missing required parameters    |
| 403  | Governance not enabled         |
| 409  | Pending publish request exists |
| 500  | Internal server error          |


## 5. updatePublishRequest

Updates the status of an existing publish request.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-s`, `--status`: New status (approved, declined, or cancelled)
* `-au`, `--auth-url`: On-premise only.Auth service base URL
* `-cu`, `--console-url`: On-premise only.Console base URL
* `-t`, `--account`: Cloud only. Tenant account ID

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)
* `-c`, `--comments`: Comments (required for approve/decline actions)

### Sample (On-Premise) - Approve/Decline

```sh
java -jar mfcli.jar updatePublishRequest -u admin -p pass -e Dev -a MyApp -s approved -c "Changes look good" -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (On-Premise) - Cancel

```sh
java -jar mfcli.jar updatePublishRequest -u admin -p pass -e Dev -a MyApp -s cancelled -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar updatePublishRequest -u admin -p pass -e Dev -a MyApp -s approved -c "Changes look good" -t 100000001
```

>**Note**:<li> When a user raises a publish request, Admin, Owner, or Approver can either approve or decline it with comments.</li><li> Only the author (requester) can cancel a publish request, and this can only be done while the request is in pending state or after approval but before successful deployment.</li>

## 6. fetchAllPublishRequests

Retrieves a list of publish requests filtered by status.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-s`, `--status`: Filter by status (pending or reviewed)
* `-au`, `--auth-url`: On-premise only. Auth service base URL
* `-cu`, `--console-url`: On-premise only. Console base URL
* `-t`, `--account`: Cloud only. Tenant account ID

### Sample (On-Premise)

```sh
java -jar mfcli.jar fetchAllPublishRequest -u admin -p pass -e Dev -s pending -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar fetchAllPublishRequest -u admin -p pass -e Dev -s reviewed -t 100000001
```

>**Note**: Admin, Approver, or Owner can retrieve lists of publish requests in:</li><li> pending state (requests awaiting to be approved or declined)</li><li> reviewed state (already approved, declined, or cancelled)</li>

## 7. fetchPublishRequest

Retrieves details of a specific publish request for an application.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-au`, `--auth-url`: On-premise only. Auth service base URL
* `-cu`, `--console-url`: On-premise only. Console base URL
* `-t`, `--account`: Cloud only. Tenant account ID

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)

### Sample (On-Premise)

```sh
java -jar mfcli.jar fetchPublishRequest -u admin -p pass -e Dev -a MyApp -au http://localhost:8080 -cu http://localhost:8099
```

### Sample (Cloud)

```sh
java -jar mfcli.jar fetchPublishRequest -u admin -p pass -e Dev -a MyApp -t 100000001
```

>**Note**:<li> Retrieves details of a publish request based on app name.</li><li> Internally, this retrieves the corresponding request ID, which is then used to display relevant information for that app.</li>

## 8. unpublish

Unpublishes an application from a specific environment.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-au`, `--auth-url`: On-premise only.Auth service base URL
* `-cu`, `--console-url`: On-premise only. Console base URL
* `-t`, `--account`: Cloud only. Tenant account ID

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)

### Sample (On-Premise)

```sh
java -jar mfcli.jar unpublishRequest -u admin@hcl.com -p Admin@123 -e LocalDevEnv -a App1 -v 1.0 -d <description> -au https://voltmxfoundry.ocpsno.fnxlabs.com/ -cu https://voltmxfoundry.ocpsno.fnxlabs.com/
```

### Sample (Cloud)

```sh
java -jar mfcli.jar unpublishRequest -u admin@hcl.com -p Admin@123 -e LocalDevEnv -a App1 -v 1.0 -d <description> -t 100000001
```

### Notes

* Raised Unpublish Request for  the specified application from the target environment.

## 9. deploy

Deploys an application to a specific environment.

### Required Parameters

* `-u`, `--username`: Username
* `-p`, `--password`: Password
* `-e`, `--environment`: Environment name
* `-a`, `--app`: Application name
* `-au`, `--auth-url`: On-premise only. Auth service base URL
* `-cu`, `--console-url`: On-premise only. Console base URL
* `-t`, `--account`: Cloud only. Tenant account ID

### Optional Parameters

* `-v`, `--version`: App version (default: 1.0)

### Sample (On-Premise)

```sh
java -jar mfcli.jar deploy -u admin@hcl.com -p Admin01~ -e LocalDevEnv -a App5 -v 1.0 -au http://blmyclddw11751.nonprod.hclpnp.com:8081/ -cu http://blmyclddw11751.nonprod.hclpnp.com:8081
```

### Sample (Cloud)

```sh
java -jar mfcli.jar deploy -u admin@hcl.com -p Admin01~ -e LocalDevEnv -a App5 -v 1.0 -t 100000001
```
>**Notes**<li> Deploys the specified application to the target environment.</li><li> This command is used to deploy an application after it has been approved through the governance workflow, if governance is enabled.</li><li> For environments with governance enabled, this command should be executed after a publish request has been approved.</li>