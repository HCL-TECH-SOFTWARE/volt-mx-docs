---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

Methods
=======

The HttpRequest object supports the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[abort Method](javascript:void(0);)

* * *

This cancels the network operation . If the abort is successful in canceling the send request, the readyState is set to UNSENT. Otherwise, the readyState is set to Done.

Syntax

httpRequestObject.abort()

Parameters

None.

Return Values

None.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}var request = new voltmx.net.httpRequest();
...
request.abort();


{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getAllResponseHeaders Method](javascript:void(0);)

* * *

This API returns all headers using the response for a given header, except the fields with names Set-Cookie or Set-Cookie2.

Syntax

httpRequestObject.getAllResponseHeaders()

Parameters

None.

Return Values

Returns an object containing the header field name and the value map object.

If the readyState is UNSENT, OPENED, or any of the failure case, null is returned.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}var request = new voltmx.net.HttpRequest();
print(request.getAllResponseHeaders());
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getResponseHeader Method](javascript:void(0);)

* * *

This API returns the header field value using the response for a given header, unless the header field name is Set-Cookie or Set-Cookie2.

Syntax

httpRequestObject.getResponseHeader(  
    headerfield)

Parameters

headerfield

A string that contains the name of the header field.

Return Values

Returns a string containing the header field value. If the readyState is UNSENT, OPENED, or any of a failure case, null is returned.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}var request = new voltmx.net.HttpRequest();
request.getResponseHeader("Date");
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[open Method](javascript:void(0);)

* * *

This method initializes the _http request_ object with a request method type (GET or POST) and the url. If this method is invoked after send(), it should terminate the current send() request.

Syntax

httpRequestObject.open(  
    requestMethod,  
    url,  
    async,  
    username,  
    password)

Parameters

requestMethod

A string that specifies the http request method. The possible values are:  

*   constants.HTTP\_METHOD\_GET
*   constants.HTTP\_METHOD\_POST
*   case-insensitive match to GET or POST string.

url

The request URL string with character encoded UTF-8.

async

An optional Boolean value used to set the request type as asynchronous or synchronous. Default value is `true` specifies and that the request is asynchronous.

> **_Note:_** This parameter is ignored for SPA and only supports asynchronous.

username

An optional string that is used to configure the user credentials for basic authentication.

password

An optional string that is used to pass the user password for basic authentication.

Return Values

None.

Exceptions

SyntaxError - if the requestMethod is not valid or url cannot be resolved.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}
var request = new voltmx.net.HttpRequest();
request.open(
	constants.HTTP_METHOD_GET, 
	"http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");	
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[send Method](javascript:void(0);)

* * *

This methods initiates a request.

Syntax

httpRequestObject.send([data](#data))

Parameters

data

An optional argument specifying the input parameter data along with a request. The parameter accepts following types:

The data parameter is ignored if the request type is GET or HEAD.  

*   [voltmx.net.FormData](formdataobject_methods.html#voltmx.net7)
*   [voltmx.types.RawBytes](voltmx.types_objects_rawbytes.html)
*   [JSON Object or String](httprequestobject.html#sending-a-json-object-and-string-data-as-a-request)

> **_Note:_** send() handles the redirection headers automatically, that is http status codes 301, 302, 303, or 307.

Return Values

None.

Exceptions

InvalidStateError - if this method is called before an open() API call and or after the send() API is called more than once.

Network or DNA errors generate an http status code such as 410 and raise the HEADERS\_RECEIVED state change event.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}
var request = new voltmx.net.HttpRequest();
...
request.send(); 

{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setRequestHeader Method](javascript:void(0);)

* * *

This appends a header to the list of _http request headers_.

Syntax

httpRequestObject.setRequestHeader([header](#header), [value](#value))

Parameters

header \[string\]- Mandatory

The header name.

value \[string\] - Mandatory

The value of the header.

Return Values

None.

Exceptions

InvalidStateError - if this method is called before the open() API call and or after the send() API call.

> **_Note:_** If this method is called twice on a header, then the values are appended by comma with a space delimiter.

Remarks

You must sanitize the data such as user input or http response before setting them as http header values. If the data is not sanitized it can lead to various types of header manipulation attacks such as an HTTP response splitting attack, cross-site scripting, browser hijacking, cookie manipulation, and cross-user defacement.

Platform Availability

Available on all platforms except Windows and SPA.

Example

{% highlight voltMx %}
var request = new voltmx.net.HttpRequest();
...
request.setRequestHeader("From","abc.xyz@voltmx.com");

{% endhighlight %}

* * *

![](resources/prettify/onload.png)
