---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Get File Errors by Pagination
=============================

The **Get File Errors by Pagination** API accepts Start and pageSize as input parameters and returns all file errors details like total number of errors.

URL
---

The HTTP URL for Get File Errors by Pagination API is:

{% highlight voltMx %}http://<<host>>:<<port>>/api/v1/batchinfo/errors/{id}?start=0&pageSize=20
{% endhighlight %}

Method
------

GET

Input Parameters
----------------

The following fields are input parameters:

  
| Input Parameter | Type | Description |
| --- | --- | --- |
| start | long | Start index of the element |
| pageSize | long | Number of elements for a page |

Sample Response
---------------

{% highlight voltMx %}{
     "total": 1,
     "Errors": [
    {
         "id": 10023,
         "errorMessage": "Line 1,karthik,gaddam,raj.hikfg.sri@gmail.com,+919440153678,Email is being used for one of the audience members. Audience member already exists with this Mobile. "           
    }
  ]
}
{% endhighlight %}

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Array of error info |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |

<table class="TableStyle-RevisionTable" cellspacing="0" style="mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
