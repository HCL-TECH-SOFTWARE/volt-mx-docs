---
layout: "documentation"
category: "engagement_api_guide"
---
                            

Get All Permissions
===================

The **Get All Permissions** API provides 18 permissions to users and groups.

Use Case
--------

Permissions in Volt MX Foundry Engagement Services are rights that define the actions a user or a group can perform. For example, the permissions set for campaigns consist of the following actions: ALL, EXECUTE, and TERMINATE.

URL
---

The HTTP URL for **Get All Permissions** API is:

{% highlight voltMx %}http://<host>:<port>/api/v1/accessmgmt/permissions
{% endhighlight %}

Method
------

GET

Sample Response
---------------

{% highlight voltMx %}{
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
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of permissions info |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
