                           


Fetch All Messages Volt MX Foundry Engagement Services API
=========================================================

The **Fetch All Messages from Volt MX Foundry Engagement Services** API fetches all the push messages details.To retrieve details of all the push messages, you need to pass any one of the following input parameters in the request payload.

*   ksId
*   deviceId
*   appId
*   ufId
*   status
*   lastUpdatedDate

> **_Note:_** The parameters 'status' and 'lastUpdatedDate' have been added in the Volt MX Foundry V8 SP4 Fixpack 3 release.

URL
---

The HTTP URL for **Fetch All Messages from Volt MX Foundry Engagement Services** API is:

```
http://<host or ip>:<port>/api/v1/messages/fetch
```

Method
------

POST

Header
------

The payload request header includes Content-Type as application/json;charset=UTF-8.

Input Parameters
----------------

The following fields are the input parameters:

  
| Input Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| **ksid** | Yes | long | Volt MX Subscription ID is returned when you subscribe to the Volt MX Foundry Engagement Services. |
| **deviceId** | Yes | String | Device ID of the subscriber that was used when you subscribed to the Volt MX Foundry Engagement Services. |
| **appId** | Yes | long | Application ID in the Volt MX Foundry Engagement Services. |
| **ufid** | Yes | String | The User Friendly Identifier or UFID is used when you subscribe to the Volt MX Foundry Engagement Services. Based on your requirement, you can provide an UFID. It is alphanumeric, for example, xxx@voltmx.com or 2890XZCY. It can be used to map devices to the user using the value as a reconciliation key. |
| **status** | Yes | String | The status of the push message after it has been sent from the Engagement Services console. It should be either "Opened" or "Submitted". |
| **lastUpdatedDate** | Yes | String | The lastUpdatedDate is the date on which the message was last updated. It should only be in the following format, "YYYY-MM-DD". For example, the lastUpdatedDate can be "2019-05-13". |

Sample Request
--------------

### with ksId

```
{
     
 "ksid" :"4927837196689866160",
     
 "startElement":"0",
      
 "elementsPerPage":"20"
  
 }
```

### with appId and ufId

```
{
      
 "ufid": "thomas.smith@voltmx.com",
      
 "appId" :"20096-6548262167",
      
 "startElement":"0",
      
 "elementsPerPage":"20"
  
 }
```

### with ksid and ufid

```
{
      
 "ufid": "thomassmith@gmail.com",
      
 "ksid" :"9217144992113196746",
      
 "startElement":"0",
      
 "elementsPerPage":"20"
  
 }
```

### with deviceId and appId

```
{
      
 "deviceId": "223457",
      
 "appId" :"20096-6548262167",
      
 "startElement":"0",
      
 "elementsPerPage":"20"
  
 }
```

### with deviceId and ksid

```
{
     
 "deviceId": "923456XQYL",
     
 "ksid" :"9217144992113196746",
     
 "startElement":"0",
     
 "elementsPerPage":"20"
  
 }
```

Sample Responses
----------------

```
{
	  
 "totalMessages": 17,
	  
 "openedMessages": 2,
	  
 "messages": [{
	  
 "fetchId": "8730726796796876572",
	  
 "content": "Buy Books from Online Library",
	  
 "status": "Opened"
  
	}, {
  
		"fetchId": "8730564132072234972",
	  
	"content": "Now Available on eBay",
	  
	"status": "Opened"
	  
	}, {
	  
	"fetchId": "8730343249524239270",
	  
	"content": "sample rich push data",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "8730184974108753828",
	  
	"content": "sample rich push data",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "8689616362135506601",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9143081420051015760",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9143081301531260482",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9143056187523324660",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9143056051113229898",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9125925276853714728",
	  
	"content": "ShopcluesSummer Sale 2016 promotion temp...",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086262523026928421",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086262367207226326",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086215994124008341",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086215883663162402",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086190166284400476",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086165405274834586",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}, {
	  
	"fetchId": "9086165171770195685",
	  
	"content": "Not Applicable (Silent Push)",
	  
	"status": "Submitted"
  
	}],
  
	"submittedMessages": 15
  
}
```

Sample Request and Sample Response
----------------------------------

From V8 SP4 FP3 onwards, the sample requests and sample responses of the Fetch All Messages API are as follows:

  
| Parameters | Sample Request | Sample Response |
| --- | --- | --- |
| **ksid**, **lastUpdatedDate**, **status** | { "ksid" : "7379833618946531218", "status":"Submitted", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" } \], "submittedMessages":1 } |
| **ksid**, **lastUpdatedDate** | { "ksid" : "7379833618946531218", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-30 17:02:23.0", "fetchId":"7400720953009028239", "requestId":"7380074027968639788", "content":"hello1 push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:55:29.0", "fetchId":"7399099677592420077", "requestId":"7379972704743169522", "content":"asd push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:54:16.0", "fetchId":"7398789907226898641", "requestId":"7379953299214466978", "content":"adfa", "status":"Opened" } \], "submittedMessages":1 } |
| **ksid**, **status** | { "ksid" : "7379833618946531218", "status":"Submitted", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":5, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-29 16:55:50.0", "fetchId":"7399236766007028520", "requestId":"7379981291220350901", "content":"hello push", "status":"Submitted" } \], "submittedMessages":2 } |
| **ksid**, **ufid**, **status**, **lastUpdatedDate** | { "ksid" : "7379833618946531218", "ufid" : "xxxx@voltmx.com", "status":"Submitted", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" } \], "submittedMessages":1 } |
| **ksid**, **ufid**, **lastUpdatedDate** | { "ksid" : "7379833618946531218", "ufid" : "xxxx@voltmx.com", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-30 17:02:23.0", "fetchId":"7400720953009028239", "requestId":"7380074027968639788", "content":"hello1 push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:55:29.0", "fetchId":"7399099677592420077", "requestId":"7379972704743169522", "content":"asd push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:54:16.0", "fetchId":"7398789907226898641", "requestId":"7379953299214466978", "content":"adfa", "status":"Opened" } \], "submittedMessages":1 } |
| **ksid**, **ufid**, **status** | { "ksid" : "7379833618946531218", "ufid" : "xxxx@voltmx.com", "status":"Submitted", "startElement":"0", "elementsPerPage":"20"} | { "totalMessages": 5, "openedMessages": 3, "messages": \[ { "lastUpdatedDate": "2019-04-30 18:41:28.0", "fetchId": "7425189778225194356", "requestId": "5966731998123851489", "content": "kethan afsdfasd", "status": "Submitted" }, { "lastUpdatedDate": "2019-04-29 16:55:50.0", "fetchId": "7399236766007028520", "requestId": "7379981291220350901", "content": "hello push", "status": "Submitted" } \], "submittedMessages": 2 } |
| **ufid**, **appId**, **status**, **lastUpdatedDate** | { "ufid" : "xxxx@voltmx.com", "appId": "xxxxapp", "status":"Submitted", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" } \], "submittedMessages":1} |
| **ufid**, **appId**, **lastUpdatedDate** | { "ufid" : "xxxx@voltmx.com", "appId": "xxxxapp", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-30 17:02:23.0", "fetchId":"7400720953009028239", "requestId":"7380074027968639788", "content":"hello1 push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:55:29.0", "fetchId":"7399099677592420077", "requestId":"7379972704743169522", "content":"asd push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:54:16.0", "fetchId":"7398789907226898641", "requestId":"7379953299214466978", "content":"adfa", "status":"Opened" } \], "submittedMessages":1 } |
| **ufid**, **appId**, **status** | { "ufid" : "xxxx@voltmx.com", "appId": "xxxxapp" "status":"Submitted", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":5, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-29 16:55:50.0", "fetchId":"7399236766007028520", "requestId":"7379981291220350901", "content":"hello push", "status":"Submitted" } \], "submittedMessages":2 } |
| **deviceId**, **appId**, **status**, **lastUpdatedDate** | { "deviceId": "223457", "appId": "xxxxapp", "status":"Submitted", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" } \], "submittedMessages":1 } |
| **deviceId**, **appId**, **status** | { "deviceId": "223457", "appId": "xxxxapp", "status":"Submitted", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":5, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-29 16:55:50.0", "fetchId":"7399236766007028520", "requestId":"7379981291220350901", "content":"hello push", "status":"Submitted" } \], "submittedMessages":2 } |
| **deviceId**, **appId**, **lastUpdatedDate** | { "deviceId": "223457", "appId": "xxxxapp", "lastUpdatedDate" : "2019-04-30", "startElement":"0", "elementsPerPage":"20" } | { "totalMessages":4, "openedMessages":3, "messages":\[ { "lastUpdatedDate":"2019-04-30 18:41:28.0", "fetchId":"7425189778225194356", "requestId":"5966731998123851489", "content":"kethan afsdfasd", "status":"Submitted" }, { "lastUpdatedDate":"2019-04-30 17:02:23.0", "fetchId":"7400720953009028239", "requestId":"7380074027968639788", "content":"hello1 push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:55:29.0", "fetchId":"7399099677592420077", "requestId":"7379972704743169522", "content":"asd push", "status":"Opened" }, { "lastUpdatedDate":"2019-04-30 16:54:16.0", "fetchId":"7398789907226898641", "requestId":"7379953299214466978", "content":"adfa", "status":"Opened" } \], "submittedMessages":1 } |

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Request queued |
| Status 400 | Invalid request format |
| Status 401 | Unauthorized request |
| Status 500 | Server failure to process request |
