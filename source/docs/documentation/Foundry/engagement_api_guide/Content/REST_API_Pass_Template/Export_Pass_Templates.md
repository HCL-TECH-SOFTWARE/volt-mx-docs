---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Export Pass Templates
=====================

The **Export Pass Templates** API exports all or selected pass templates to a zip file of compressed JSON files. The selected pass templates are identified by the template ID which is returned by the [Create Pass Template](Create_Pass_Template.html) API. For information about the structure of the JSON files see [JSON Files for Import and Export](../JSON_Files.html).

URL
---

To export selected pass templates, the HTTP URL is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/pass/export?templateIds=1,2,5
{% endhighlight %}

To export all pass templates, the HTTP URL is:

{% highlight voltMx %}http://<host>:<port>/api/v1/templates/pass/export?exportAll=true
{% endhighlight %}

This API is secure and implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the API by a user.

Method
------

GET

Header
------

The payload's request header includes Content-Type as application/x-www-form-urlencoded.

Output Parameters
-----------------

If the export is successful, a zip file of compressed JSON files is returned. Otherwise, an error message is returned.

The following fields are output parameters when an error occurs.

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| message | string | Message associated with response status code |

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Successful export. |
| Status 400 | Bad request |
| Status 401 | Unauthorized request |
| Status 500 | Failed to export the data |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.3</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">SS</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">SS</td></tr></tbody></table>
