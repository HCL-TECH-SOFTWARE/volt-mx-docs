                            

Methods
=======

The HttpRequest object supports the following methods.


<details close markdown="block"><summary>abort Method</summary>

* * *

This cancels the network operation . If the abort is successful in canceling the send request, the readyState is set to UNSENT. Otherwise, the readyState is set to Done.

<b>Syntax</b>

```

httpRequestObject.abort();
```

<b>Parameters</b>

None.

<b>Return Values</b>

None.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```
var request = new voltmx.net.httpRequest();
...
request.abort();


```

* * *

</details>
<details close markdown="block"><summary>getAllResponseHeaders Method</summary>

* * *

This API returns all headers using the response for a given header, except the fields with names Set-Cookie or Set-Cookie2.

<b>Syntax</b>

```

httpRequestObject.getAllResponseHeaders();
```

<b>Parameters</b>

None.

<b>Return Values</b>

Returns an object containing the header field name and the value map object.

If the readyState is UNSENT, OPENED, or any of the failure case, null is returned.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```
var request = new voltmx.net.HttpRequest();
print(request.getAllResponseHeaders());
```

* * *

</details>
<details close markdown="block"><summary>getResponseHeader Method</summary>

* * *

This API returns the header field value using the response for a given header, unless the header field name is Set-Cookie or Set-Cookie2.

<b>Syntax</b>

```

httpRequestObject.getResponseHeader(  
    headerfield);
```


<b>Parameters</b>

headerfield

A string that contains the name of the header field.

<b>Return Values</b>

Returns a string containing the header field value. If the readyState is UNSENT, OPENED, or any of a failure case, null is returned.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```
var request = new voltmx.net.HttpRequest();
request.getResponseHeader("Date");
```

* * *

</details>
<details close markdown="block"><summary>open Method</summary>

* * *

This method initializes the _http request_ object with a request method type (GET or POST) and the url. If this method is invoked after send(), it should terminate the current send() request.

<b>Syntax</b>

```

httpRequestObject.open(  
    requestMethod,  
    url,  
    async,  
    username,  
    password);
```

<b>Parameters</b>

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

<b>Return Values</b>

None.

<b>Exceptions</b>

Syntax Error - if the requestMethod is not valid or url cannot be resolved.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```

var request = new voltmx.net.HttpRequest();
request.open(
	constants.HTTP_METHOD_GET, 
	"http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");	
```

* * *

</details>
<details close markdown="block"><summary>send Method</summary>

* * *

This methods initiates a request.

<b>Syntax</b>

```

httpRequestObject.send([data](#data))
```



<b>Parameters</b>

data

An optional argument specifying the input parameter data along with a request. The parameter accepts following types:

The data parameter is ignored if the request type is GET or HEAD.  

*   [voltmx.net.FormData](formdataobject_methods.md#voltmx.net7)
*   [voltmx.types.RawBytes](voltmx.types_objects_rawbytes.md)
*   [JSON Object or String](httprequestobject.md#sending-a-json-object-and-string-data-as-a-request)

> **_Note:_** send() handles the redirection headers automatically, that is http status codes 301, 302, 303, or 307.

<b>Return Values</b>

None.

<b>Exceptions</b>

InvalidStateError - if this method is called before an open() API call and or after the send() API is called more than once.

Network or DNA errors generate an http status code such as 410 and raise the HEADERS\_RECEIVED state change event.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```

var request = new voltmx.net.HttpRequest();
...
request.send(); 

```

* * *

</details>
<details close markdown="block"><summary>setRequestHeader Method</summary>

* * *

This appends a header to the list of _http request headers_.

<b>Syntax</b>

```

httpRequestObject.setRequestHeader([header](#header), [value](#value))
```

<b>Parameters</b>

header \[string\]- Mandatory

The header name.

value \[string\] - Mandatory

The value of the header.

<b>Return Values</b>

None.

<b>Exceptions</b>

InvalidStateError - if this method is called before the open() API call and or after the send() API call.

> **_Note:_** If this method is called twice on a header, then the values are appended by comma with a space delimiter.

<b>Remarks</b>

You must sanitize the data such as user input or http response before setting them as http header values. If the data is not sanitized it can lead to various types of header manipulation attacks such as an HTTP response splitting attack, cross-site scripting, browser hijacking, cookie manipulation, and cross-user defacement.

<b>Platform Availability</b>

Available on all platforms except Windows and SPA.

<b>Example</b>

```

var request = new voltmx.net.HttpRequest();
...
request.setRequestHeader("From","abc.xyz@voltmx.com");

```

* * *

</details>

![](resources/prettify/onload.png)
