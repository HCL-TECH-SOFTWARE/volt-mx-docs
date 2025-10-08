                           

Bulk Message Upload
===================

The bulk message upload API is provided for clients who want to upload large batches of individual messages included in a CSV format. Once the .CSV file is uploaded successfully, the messages are queued into the Volt MX Foundry Messaging to start sending message notifications.

You can see the progress of uploaded messages in the **Message Queue** section.

Post data should have a key as **uploadFile** for the uploaded file.

CSV File Format
---------------

*   Bulk messages can be processed in one time.
*   CSV should have data in the following order:
    1.  APP\_ID
    2.  SUBSCRIBER\_KSID
    3.  MESSAGE\_DATA contains the message to be sent / pushed
*   The first line can be with or without a header line.

**Request URL**
---------------

The key values can be provided either in the URL or as part of the post data. URL is on priority.

[http://&lt;host or ip&gt;&lt;port&gt;/vpns/service/bulkmessage?DELIMITER=%7c&SOURCE\_FORMAT=APP\_ID%2cSUBSCRIBERS\_KSID%2cMESSAGE\_DATA&IGNORE\_ROW=false](http://10.10.19.74:8080/service/entrydata/status/$pushId)

The following table details the key-values.

  
| Key | Value |
| --- | --- |
| DELIMITER | %7c |
| SOURCE\_FORMAT | APP\_ID%2cSUBSCRIBERS\_KSID%2cMESSAGE\_DATA |
| IGNORE\_ROW | false |

> **_Note:_** The values of IGNORE\_ROW can be either true or false.

*   _True_ means there is a header in the CSV file.
*   _False_ means there is no header in the CSV file.

Request Method
--------------

HTTP POST

Input Parameters
----------------

Input parameters are appended at the end of the URL.

> **_Note:_** '**%7c'** is encoded value of '|' and **'%2c**' is of ',' Delimiters

*   APP\_ID: Application ID is a unique key used to identify the subscribed application.
*   SUBSCRIBER\_KSID: Volt MX Subscription Identification number of the application. For more details, refer to [Ksid](../../../../Foundry/vms_console_user_guide/Content/Apps/Modifying_Subscribers_List.md)
*   MESSAGE\_DATA contains the message to be sent / pushed

Sample CSV File Format with Delimiter as '|' symbol  

------------------------------------------------------

```
excel|11|Test Message.  
excel|12|Test Message.  
excel|21|Test Message.  
excel|32|Test Message.  
excel|22|Test Message.
```

Response Code
-------------

  
| Code | Description |
| --- | --- |
| 400 | Please choose a valid file to upload data. |
| 400 | Invalid content in the uploaded file @ line 1. |
| 200 | Messages queued successfully. |
