---
layout: "documentation"
category: "engagement_api_guide"
---
                            


Bulk Message Upload
===================

The **Bulk Message Upload** API is provided for clients who want to upload large batches of individual messages included in a CSV format. Once the .CSV file is uploaded successfully, the messages are queued into the Volt MX Foundry Engagement Services to start sending message notifications.

Post data should have a key as **uploadFile** for the uploaded file.

> **_Important:_** The Bulk Message Upload API is maintained here to preserve backward compatibility. We encourage you to use [Bulk Push](../Push_Message_APIs/Bulk_Message_Upload.html)

CSV File Format
---------------

*   Bulk messages can be processed in one time.
*   CSV should have data in the following order:
    1.  APP\_ID
    2.  SUBSCRIBER\_KSID
    3.  MESSAGE\_DATA contains the message to be sent / pushed
*   The first line can be with or without a header line.

**URL**
-------

The key values can be provided either in the URL or as part of the post data. URL is on priority.

{% highlight voltMx %}http://<host or ip>:<port>/vpns/service/bulkmessage?DELIMITER=%7c&SOURCE_FORMAT=APP_ID%2cSUBSCRIBERS_KSID%2cMESSAGE_DATA&IGNORE_ROW=false
{% endhighlight %}

The following table details the key-values.

  
| Key | Value |
| --- | --- |
| DELIMITER | %7c |
| SOURCE\_FORMAT | APP\_ID%2cSUBSCRIBERS\_KSID%2cMESSAGE\_DATA |
| IGNORE\_ROW | false |

> **_Note:_** The values of IGNORE\_ROW can be either true or false.

*   _True_ means there is a header in the CSV file.
*   _False_ means there is no header in the CSV file.

Method
------

POST

Input Parameters
----------------

Input parameters are appended at the end of the URL.

> **_Note:_** '**%7c'** is encoded value of '|' and **'%2c**' is of ',' Delimiters

*   APP\_ID: Application ID is a unique key used to identify the subscribed application.
*   SUBSCRIBER\_KSID: Volt MX Subscription Identification number of the application. For more details, refer to Ksid
*   MESSAGE\_DATA contains the message to be sent / pushed

Sample CSV File Format with Delimiter as '|' symbol  

------------------------------------------------------

{% highlight voltMx %}excel|11|Test Message.  
excel|12|Test Message.  
excel|21|Test Message.  
excel|32|Test Message.  
excel|22|Test Message.
{% endhighlight %}

Response Code
-------------

  
| Code | Description |
| --- | --- |
| 400 | Choose a valid file to upload data |
| 400 | Invalid content in the uploaded file @ line 1 |
| 200 | Messages queued successfully |

<table class="TableStyle-RevisionTable" cellspacing="0" style="margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/RevisionTable.css');" data-mc-conditions="Default.HTML"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">7.1</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
