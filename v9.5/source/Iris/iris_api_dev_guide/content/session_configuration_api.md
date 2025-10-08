                            


Session Configuration API
=========================

getSession
----------

*   By default, if a new background transfer task is created using `voltmx.net.HttpRequest` \[‘<HttpRequestObject>.backgroundTransfer = true’\] a new session is created and this new task is associated with it.
*   <HttpRequestObject> now exposes a new method ‘getSession()’ using which the Session identifier associated with the HttpRequest can be obtained.
*   Multiple background tasks can be associated with the same Session by passing the Session identifier returned by `<HttpRequestObject>.getSession()` to any new ‘voltmx.net.HttpRequest’ created there after.
*   getSession() API is applicable only if `<HttpRequestObject>.backgroundTransfer = true` for a HTTPrequest.
*   When ever a new `voltmx.net.HttpRequest` is created by passing a session identifier then by default backgroundTransfer property will be enabled \[‘<HttpRequestObject>.backgroundTransfer = true’\].

> **_Note:_** A session object life is dependent on the life of any of the request objects or request object it is associated with. Which means to be certain that a session is alive, any of the request objects or request object with which it is associated should be alive.

### Signature

var session\_identifier = <<HttpRequestObject>>.getSession()  
//To associate new HTTP Requests created with the same session  
<New HttpRequestObject2> = new voltmx.net.HttpRequest(<session\_identifier >);

### Input Parameters

None

### Return Values

Session identifier for the Session associated with the HttpRequest instance.

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

		//request session identifier
            var request_session = request.getSession();


	//To associate new HTTP Requests created with the same session
//request 2
	 var request_2 = new voltmx.net.HttpRequest(request_session);

//request 3
	 var request_3 = new voltmx.net.HttpRequest(request_session);

```![](resources/prettify/onload.png)
