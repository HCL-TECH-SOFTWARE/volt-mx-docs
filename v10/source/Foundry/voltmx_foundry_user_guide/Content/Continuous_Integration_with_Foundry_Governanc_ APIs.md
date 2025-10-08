# Continuous Integration with Volt MX Foundry Governance APIs

## Overview

In this section, you can learn about the Governance capabilities exposed by Volt MX Foundry for automation via APIs. These APIs help automate the process of raising a publish request, approving/declining, and deploying publish requests, without using the Volt MX Foundry Console.

## Ways to Automate Publishing through Governance APIs

*   **Using Volt MX Foundry Console (UI-based)**
*   **Using to invoke Governance APIs directly**

>**Note:** All Governance APIs are secured and require authentication via the `X-VoltMX-Authorization` header.

## Supported Governance APIs for CI/CD Automation

| Use Case | API Description |
| --- | --- |
| [Check App Update Status](#check-app-update-status) | Check if an app has changes since the last publish |
| [Create Publish Request](#create-publish-request) | Submit a publish request for governance approval |
| [Fetch Publish Request](#fetch-publish-request) | View publish request status or history |
| [Update Publish Request (Approve / Decline / Cancel)](#update-publish-request-(approve-/-decline-/-cancel)) | Approve, Reject, or Cancel a publish request |
| [Create Unpublish Request](#create-unpublish-request) | Initiate a publish request for unpublishing an app |
| [Calculate App Changelist](#calculate-app-changelist) | Compare app artifacts for governance review |
| [Deploy Approved Publish Request](#deploy-approved-publish-request) | Deploy after governance approval |
| [Fetch Publish Status](#fetch-publish-status) | Retrieve current publish state |
| [Check Open Requests](#check-open-requests) | Verify pending or approved publish requests exist |

## Example APIs

### Check App Update Status

**Endpoint:**

```
GET https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/apps/{app_id}/appupdatestatus?environment_id={envId}

```

**Validations:**

- App ID and Environment ID must be valid.
- Governance must be enabled for the environment.
- Returns `isUpdated: true` only if metadata shows changes since the last publish.

**Sample Response:**

```json
{ "isUpdated": true }

```

### Create Publish Request

**Endpoint:**

```
POST https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests

```

**Validations:**

- Only one active request (PENDING/APPROVED) is allowed per app/environment.
- Cannot raise if another publish/unpublish is in progress.
- Governance must be enabled else returns `403`.
- App ID and Environment ID must be valid.
- Changelist must exist between for the current app and environment.
- Permissions validated for the user.

**Sample Request Payload:**

```json
{
    "account_guid": "678a26b4-2f25-4c88-8bcc-de37aaab0213",
    "app_id": "155b08fa-e2f2-4303-aeb7-7667d549e3ae",
    "env_guid": "bab3aa5b-cf17-40e7-88ab-83373f7652e1",
    "authService_url": "https://100000012.auth.sit-hclvoltmx.net",
    "accounts_base_url": "https://api.sit-hclvoltmx.com/api/v1_0/",
    "is_cloud": true,
    "requestType": "PUBLISH",
    "publish_lock": true,
    "metadata": {},
    "description": "Request from CI",
    "save_profile": false
}

```

### Fetch Publish Request

**Endpoint:**

```
GET https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests?status=pending

```

**Validations:**

- App ID and workspace ID must be valid.
- Query params `request_id` or `status` are optional but if present must be valid.
- Governance must be enabled else returns `403`.

### Update Publish Request (Approve / Decline / Cancel)

**Endpoint:**

```
PATCH https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/{request_id}

```

**Validations:**

- `APPROVED` and `DECLINED` require comments.
- `CANCELLED` does not require comments.
- Only the author can `CANCEL` their request.
- Once the publish is complete, cancellation is no longer permitted.
- Approvers/Admins can `APPROVE` or `DECLINE`.
- Governance must be enabled.
- App ID and Environment ID must be valid.

**Sample Request (Approve):**

```json
{
    "status": "APPROVED",
    "comments": "Looks good",
    "authService_url": "https://100000012.auth.sit-hclvoltmx.net",
    "accounts_base_url": "https://api.sit-hclvoltmx.com/api/v1_0/",
    "is_cloud": "true",
    "account_guid": "678a26b4-2f25-4c88-8bcc-de37aaab0213",
    "app_id": "155b08fa-e2f2-4303-aeb7-7667d549e3ae",
    "env_guid": "bab3aa5b-cf17-40e7-88ab-83373f7652e1",
    "requestType": "PUBLISH"
}

```

### Create Unpublish Request

**Endpoint:**

```
POST https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/remove

```

**Validations:**

- Only one active publish/unpublish request allowed per app/environment.
- Governance must be enabled.
- App ID and Environment ID must be valid.
- Permissions validated for the user.

### Calculate App Changelist

**Endpoint:**

```
POST https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/diff

```

**Validations:**

- App ID and Environment ID must be valid.
- Governance must be enabled.
- No pending requests allowed for changelist generation.

### Deploy Approved Publish Request

**Endpoint:**

```
POST https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/publish

```

**Validations:**

- Governance must be enabled.
- An approved request must exist.
- Only an Author or governance access role can deploy an App
- No conflicting publish/unpublish allowed.

### Fetch Publish Status

**Endpoint:**

```
GET https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/publishstatus?appId={app_id}&envId={env_id}

```

**Validations:**

- App ID and Environment ID must be valid.
- Governance must be enabled.
- Returns publish status only if app exists for the environment.

**Sample Response:**

```json
{
    "is_author": true,
    "request_id": "0c11b2f3-6b28-4925-96eb-2edb8276e0ac",
    "appPublishStaus": "PENDING",
    "comment": "comment added",
    "status": "APPROVED",
    "is_approver": true,
    "request_type": "PUBLISH",
    "modified_on": "2025-05-14 13:09:33.0"
}

```

### Check Open Requests

**Endpoint:**

```
GET https://100000012.workspace.sit-hclvoltmx.net/api/v1/ws/100000012/publishrequests/open?env_id={env_guid}

```

**Validations:**

- Environment ID must be valid.
- Counts requests in `PENDING` or `APPROVED` state.

**Sample Response:**

```json
{
    "openRequestsExist": true,
    "count": 3,
    "message": "Open publish requests with PENDING or APPROVED status found."
}

```