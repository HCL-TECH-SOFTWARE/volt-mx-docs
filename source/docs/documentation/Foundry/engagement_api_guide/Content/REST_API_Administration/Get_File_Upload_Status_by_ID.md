---
layout: "documentation"
category: "engagement_api_guide"
---
                            

Get File Upload Status by ID
============================

The **Get File Upload Status by ID** API accepts the file ID as an input parameter and fetches the status of a file. This API is a secure API and the user will need to use a authentcation mechanism to invoke this API.

Use Case
--------

The file ID that is needed to invoke this API can be retrieved from the console of the engagement server.

To retrieve the file ID from console, click on Settings > Status > File Status list view > Select the required file ID under Upload ID column. Here file ID is referred as Upload ID.

URL
---

The HTTP URL for **Get File Upload Status by ID** API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/batchinfo/status/{id}
{% endhighlight %}

Method
------

GET

Output Parameters
-----------------

The following fields are output parameters:

  
| Output Parameter | Type | Description |
| --- | --- | --- |
| ID | long | The unique ID assigned to the file |
| dataType | string | The data type uploaded, for example as an audience member or bulk push |
| statusMessage | string | Displays the current status of uploaded files in text message format |
| importedDate | string | A date on which the files are uploaded |
| importedBy | string | A user who has imported the files |

Sample Response
---------------

{% highlight voltMx %}{
  "dataType" : "AUDIENCE_MEMBERS",
  "statusMessage" : "Successfully uploaded requests of count :10020",
  "importedDate" : "06/28/2016 05:49:23 AM GMT",
  "importedBy" : "admin",
  "id" : "5971883457542586123"
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of all file statuses |
| Status 400 | Invalid request ID. No request found with the provided ID |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
