                          

Fetch All Messages from Volt MX Foundry Messaging
================================================

The API is used to get message content from the server based on the input parameters.

Request URL
-----------

```
[http://<host or ip>:<port>/service/entrydata/fetchmessages](http://10.10.19.74:8080/service/entrydata/fetchmessages?userId=$ufid&amp;startElement=$start&amp;elementsPerPage=$perpage)
```

Request Method
--------------

HTTP POST

Input Parameters
----------------

This service takes input parameters in JSON formats.

1.  With KSID  
      
```
{ "ksid": "VoltMXSubscriberID",  
      "startElement": "0",   
      "elementsPerPage": "10" }
```
    *   **ksid**: Volt MX Subscription ID returned when you subscribe to Volt MX Foundry Messaging system.
    *   startElement: Starting element is a non-negative integer such as 0,1,2,3.
    *   elementsPerPage: Number of messages to be displayed per page.
2.  With DEVICEID and APPID
```
{ "deviceId": "123456",  
       "appId" : "VoltMX Foundry Messaging_APPLICATION_ID",  
      "startElement": "0",   
      "elementsPerPage": "10" }
```
    *   **deviceId**: Device ID of the Subscriber which was used when you subscribe to Volt MX Foundry Messaging system.
    *   **appId**: Application ID in Volt MX Foundry Messaging system.
    *   startElement: Starting element is a non-negative integer such as 0,1,2,3.
    *   elementsPerPage: Number of messages to be displayed per page.
3.  With UFID and APPID
```
{ "ufid": "xxx@gmail.com",  
       "appId": "VoltMX Foundry Messaging_APPLICATION_ID",  
      "startElement": "0",   
      "elementsPerPage": "10" }
```
    
    *   **ufid**: UFID of the subscriber which was used when you subscribe to Volt MX Foundry Messaging system.
    *   **appId**: Application ID in Volt MX Foundry Messaging system.
    *   startElement: Starting element is a non-negative integer such as 0,1,2,3.
    *   elementsPerPage: Number of messages to be displayed per page.
    
    > **_Important:_** If the **Auth** t**oken** for **subscription** APItext box is enabled in the **Administration** \> **General** tab > **Security**, you need to append the authToken element in the JSON request for all the three formats.
    
    Sample JSON with authToken
    
```
{ "ksid": "VoltMXSubscriberID",  
      "startElement": "0",   
      "elementsPerPage": "10",  
      "authToken":  "xxxxxx"}
```

Response
--------

Success response code is "_200_".

Response will be a JSON with all Push messages sent to the Subscriber. Sample response is:

```
{"openedMessages":0,"submittedMessages":1,"totalMessages":1,"messages":[{"content":"This is a test push.","status":"Submitted","fetchid":"7530271640775557121"}]}
```

*   **openedMessages**: Number of Messages opened by Subscriber.
*   **submittedMessages**: Number of messages successfully delivered to Subscriber and not opened.
*   **totalMessages**: Total Number of messages successfully delivered to Subscriber.
