                            


Long Running Network Tasks
==========================

`voltmx.net.HttpRequest` now supports long running network tasks which run to completion even when the app is pushed to Background or Suspended state, these are also known as background transfers and are available from iOS7.

Background transfers can be scheduled while the app is in foreground or while the app is in background (with the help of background fetch jobs in background state).

Background transfers can be enabled by setting the property ‘backgroundTransfer’ to ‘true’ on the HTTP request object returned by voltmx.net.HttpRequest.

‘‘<HttpRequestObject>.backgroundTransfer’ has to be set to ‘true’ before open() API is invoked on the HTTP request after its creation.

It is always advisable to set “<HttpRequestObject>.backgroundTransfer” to ‘true’ immediately after creation of HttpRequest object.

### Signature

var httpclient = new voltmx.net.HttpRequest(  
   {  
       "timeoutIntervalForRequest": 60,  
       "timeoutIntervalForResource": 600  
   });  
httpclient.backgroundTransfer = true;

### Input Parameters

Http request object returned by voltmx.net.HttpRequest supports the following additional properties to enable running network tasks to run even when the App is in background state.

backgroundTransfer \[Boolean\]

Lets the HTTP request to know that Background transfers need to be supported. The default value of this property is false.

> **_Note:_** This property is only available for the iOS platform.

timeoutIntervalForRequest \[Number\]

Define a time-interval for request how long a task (upload or download) should wait for new data to arrive. If the new data arrives within the specified interval, the timer associated with this property resets. If the new data does not arrive within the specified interval, it triggers timeout.

> **_Note:_** This parameter is available for the iOS and Android platforms.

The default value of this property is 60 (in seconds).

> **_Note:_** Any upload or download tasks created by a background session are automatically retried if the original request fails due to a timeout. To configure how long an upload or download task should be allowed to be retried or transferred, use the timeoutIntervalForResource property.

timeoutIntervalForResource \[Number\]

Define a time-interval for resource how long to wait for entire resource to arrive. The resource timer starts when the request is initiated and counts until either the request completes or this timeout interval is reached, whichever comes first.

The default value of this property is 1 week (7 days).

> **_Note:_** This parameter is available for the iOS and Android platforms.

### JavaScript Example

```
var logPrefix = "bg_transfer_test_case_1 :- ";
    send_request();
    
    function send_request() {
        var request = new voltmx.net.HttpRequest();
        request.onReadyStateChange = callbackHandler;

        //BGtransfer
        request.backgroundTransfer = true;

        //session
        var req_session = request.getSession();
        voltmx.print(logPrefix + " request.getSession() : " + req_session);
        //url
        var url = "https://developer.apple.com/library/ios/documentation/iphone/conceptual/iphoneosprogrammingguide/iphoneappprogrammingguide.pdf";
        voltmx.print(logPrefix + "URL : " + url);
        request.open(constants.HTTP_METHOD_GET, url);
        request.send();
    };
    
    function callbackHandler(request) {
        voltmx.print(logPrefix + " : ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        voltmx.print(logPrefix + " : Scope :- request.status : " + request.status);
        voltmx.print(logPrefix + " : Scope :- request.statusText : " + request.statusText);
        voltmx.print(logPrefix + " : Scope :- request.responseType : " + request.responseType);
        voltmx.print(logPrefix + " : Scope :- request.response : " + request.response);
        voltmx.print(logPrefix + " : Scope :- request.getAllResponseHeaders() : ");
        voltmx.print(request.getAllResponseHeaders());
        voltmx.print(logPrefix + " : ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    };

```

### Platform Availability

Available for the iOS and Android platforms.

suspend
-------

Temporarily suspends a background transfer task, while suspended, it produces no network traffic and is not subject to timeouts.

A suspended background transfer task if resumable can be resumed using resume() API. If the task cannot be resumed the transfer task will start afresh.

This API is applicable only if `<HttpRequestObject>.backgroundTransfer = true` for a HTTPrequest.

### Signature

<<HttpRequestObject>>.suspend

### Input Parameters

None

### Return Values

None

### JavaScript Example

```
var request = new voltmx.net.HttpRequest();

        //BGtransfer
        request.backgroundTransfer = true;

		//url
        var url = "https://developer.apple.com/library/ios/documentation/iphone/conceptual/iphoneosprogrammingguide/iphoneappprogrammingguide.pdf";
        voltmx.print(logPrefix + "URL : " + url);

        request.open(constants.HTTP_METHOD_GET, url);
        request.send();

		//suspend task
	request.suspend();

```

### Platform Availability

Available in iOS Platform.

resume
------

*   A resumable suspended task can be resumed using this API. If the task cannot be resumed the transfer task will start afresh.
*   This API is applicable only if `<HttpRequestObject>.backgroundTransfer = true` for a HTTPrequest.

### Signature

<<HttpRequestObject>>.resume()

### Input Parameters

None

### Return Values

None

### JavaScript Example

```
var request = new voltmx.net.HttpRequest();

        //BGtransfer
        request.backgroundTransfer = true;

		//url
        var url = "https://developer.apple.com/library/ios/documentation/iphone/conceptual/iphoneosprogrammingguide/iphoneappprogrammingguide.pdf";
        voltmx.print(logPrefix + "URL : " + url);

        request.open(constants.HTTP_METHOD_GET, url);
        request.send();

		//suspend task
	request.suspend();		

	//resume task
	request.resume();

```

### Platform Availability

Available on iOS Platform.

getTaskState
------------

*   Returns the current state of the transfer task: active, suspended, in the process of being canceled, or completed
*   This API is applicable only if `<HttpRequestObject>.backgroundTransfer = true` for a HTTPrequest.

### Signature

var taskState = <<HttpRequestObject>>. getTaskState()

### Input Parameters

None

### Return Values

taskState: <constant>

*   constants.SESSION\_TASK\_STATE\_RUNNING
*   constants.SESSION\_TASK\_STATE\_SUSPENDED
*   constants.SESSION\_TASK\_STATE\_CANCELING
*   constants.SESSION\_TASK\_STATE\_COMPLETED

### JavaScript Example

```
var request = new voltmx.net.HttpRequest();

        //BGtransfer
        request.backgroundTransfer = true;

		//url
        var url = "https://developer.apple.com/library/ios/documentation/iphone/conceptual/iphoneosprogrammingguide/iphoneappprogrammingguide.pdf";
        voltmx.print(logPrefix + "URL : " + url);

        request.open(constants.HTTP_METHOD_GET, url);
        request.send();


	//getTaskStat()
            var tastState = request_object.getTaskState();
            if (tastState == constants.SESSION_TASK_STATE_RUNNING) {
                voltmx.print("tastState == constants.SESSION_TASK_STATE_RUNNING");
            } else if (tastState == constants.SESSION_TASK_STATE_SUSPENDED) {
                voltmx.print("tastState == constants.SESSION_TASK_STATE_SUSPENDED");
            } else if (tastState == constants.SESSION_TASK_STATE_CANCELING) {
                voltmx.print("tastState == constants.SESSION_TASK_STATE_CANCELING");
            } else if (tastState == constants.SESSION_TASK_STATE_COMPLETED) {
                voltmx.print("tastState == constants.SESSION_TASK_STATE_COMPLETED");
            }

```

### Platform Availability

Available in iOS Platform.

![](resources/prettify/onload.png)
