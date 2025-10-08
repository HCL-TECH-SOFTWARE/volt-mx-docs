                           

Inbound Status API
==================

The Inbound Status API let you know the current status of inbound APIs. The status gets refreshes after every 20 secnds.

URL
---

The HTTP URL for Inbound Status API is:

```
http://<<host>>:<<port>>/api/v1/twowaysms/<requestId>
```

Method
------

GET

Output Parameters
-----------------

Following fields are output parameters:

Sample Request
--------------

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request Queued |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |

<table class="TableStyle-Basic" cellspacing="0" style="mc-table-style: url]('../Resources/TableStyles/Basic.css');" data-mc-conditions="Default.md"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Rev</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Author</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">7.1</td><td class="TableStyle-Basic-BodyB-Column1-Body1">AU</td><td class="TableStyle-Basic-BodyA-Column1-Body1">AU</td></tr></tbody></table>
