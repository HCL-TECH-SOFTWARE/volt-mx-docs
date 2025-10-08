
# Get All Permissions

The **Get All Permissions** API provides 18 permissions to users and groups.

## Use Case

Permissions in Volt MX Foundry Engagement Services are rights that define the actions a user or a group can perform. For example, the permissions set for campaigns consist of the following actions: ALL, EXECUTE, and TERMINATE.

## URL

The HTTP URL for **Get All Permissions** API is:

```
http://<host>:<port>/api/v1/accessmgmt/permissions
```

## Method

GET

## Sample Response

```
{
"total" : 18,
"permissions" : {
"1" : "DASHBOARD_ALL",
"2" : "APPLICATIONS_ALL",
"3" : "DEVICES_ALL",
"4" : "CAMPAIGNS_ALL",
"5" : "CAMPAIGNS_EXECUTE",
"6" : "CAMPAIGNS_TERMINATE",
"7" : "EVENTS_ALL",
"8" : "EVENTS_PUBLISH",
"9" : "USERS_ALL",
"10" : "SEGMENTS_ALL",
"11" : "CONFIGURATIONS",
"12" : "TEMPLATES_ALL",
"13" : "LOGGING_ALL",
"14" : "ADMIN_ACCESS",
"15" : "ADHOC_PUSH",
"16" : "ADHOC_EMAIL",
"17" : "ADHOC_SMS",
"18" : "ADHOC_PASS"
}
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of permissions info         |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
