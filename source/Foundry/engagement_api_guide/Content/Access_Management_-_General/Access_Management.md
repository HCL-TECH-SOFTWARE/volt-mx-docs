                           


Access Management
=================

The API used for access management is called the Get All Permissions API. It is a generic API that is applicable to Users and Groups.

Get All Permissions API
-----------------------

The **Get All Permissions** API provides 19 permissions to users and groups.

Use Case
--------

Permissions in Volt MX Foundry Engagement Services are rights that define the actions a user or a group can perform. For example, the permissions set for campaigns consist of the following actions: ALL, EXECUTE, and TERMINATE.

URL
---

The HTTP URL for **Get All Permissions** API is:

```

		http://<host>:<port>/api/v1/accessmgmt/permissions
```

Method
------

GET

Sample Response
---------------

```

			{
	"total": 19,
	"permissions": {
		"1": "ROLE_CREATE_ATTRIBUTES",
		"2": "ROLE_DASHBOARD_ALL",
		"3": "ROLE_APPLICATIONS_ALL",
		"4": "ROLE_DEVICES_ALL",
		"5": "ROLE_CAMPAIGNS_ALL",
		"6": "ROLE_CAMPAIGNS_EXECUTE",
		"7": "ROLE_CAMPAIGNS_TERMINATE",
		"8": "ROLE_EVENTS_ALL",
		"9": "ROLE_EVENTS_PUBLISH",
		"10": "ROLE_USERS_ALL",
		"11": "ROLE_SEGMENTS_ALL",
		"12": "ROLE_CONFIGURATIONS",
		"13": "ROLE_TEMPLATES_ALL",
		"14": "ROLE_LOGGING_ALL",
		"15": "ROLE_ADMIN_ACCESS",
		"16": "ROLE_ADHOC_PUSH",
		"17": "ROLE_ADHOC_EMAIL",
		"18": "ROLE_ADHOC_SMS",
		"19": "ROLE_ADHOC_PASS"
	}
}
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of permissions info |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
