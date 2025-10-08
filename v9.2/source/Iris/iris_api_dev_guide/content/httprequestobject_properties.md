                            

Properties
==========

The HttpRequest object contains the following properties.


<details close markdown="block"><summary>backgroundTransfer Property</summary> 

* * *

Enables HTTP request calls in the background.  
This property is only available on the iOS platform.

### Syntax

```

httpClient.backgroundTransfer
```


### Type

Boolean

### Read/Write

Read only

### Remarks

The default value for the backgroundTransfer property is **false**.

>**_Note:_** The iOS platform internally retries to keep the request connected until it reaches the timeoutIntervalForResource value, which may cause duplicate transactions to occur on the system. Hence, HCL recommends that you use the backgroundTransfer property only for GET calls.

* * *

</details>
<details close markdown="block"><summary>integrityStatus Property</summary> 

* * *

Contains the status of the integrity check, if integrity checking is enabled.

### Syntax

```

integrityStatus
```

### Type

Constant. Can be one of the following values.  

| Constant | Description |
| --- | --- |
| constants.HTTP\_INTEGRITY\_CHECK\_FAILED | The integrity check has failed. |
| constants.HTTP\_INTEGRITY\_CHECK\_NOT\_DONE | The response has not yet been received, or integrity checking is not enabled, so the `integrityStatus` property has not yet been populated. |
| constants.HTTP\_INTEGRITY\_CHECK\_SUCCESSFUL | The integrity check was successful. |

### Read/Write

Read only

### Remarks

If the `validateResp` argument in the `propertiesTable` parameter of the [voltmx.net.setIntegrtityCheck](voltmx.net_functions.md#setIntegrtityCheck) function is set to `true`, then integrity checking is performed on the HTTP responses that your client app exchanges with the server app. For more information on integrity checking, please see [HTTP Integrity Checking](networkapi_httpintegritychecking.md#http-integrity-checking).

* * *

</details>
<details close markdown="block"><summary>readyState Property</summary> 

* * *

Holds the current status of the HttpRequest object

### Syntax

```

readyState
```

### Type

Number

### Read/Write

Read only

### Remarks

The possible values of the readyState property are as follows.

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 70px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Constant</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Value</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_READY_STATE_UNSENT</td><td class="TableStyle-Basic-BodyE-Column1-Body1">0</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The object has been constructed.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_READY_STATE_OPENED</td><td class="TableStyle-Basic-BodyE-Column1-Body1">1</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The open method has been successfully invoked.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_READY_STATE_HEADERS_RECEIVED</td><td class="TableStyle-Basic-BodyE-Column1-Body1">2</td><td class="TableStyle-Basic-BodyD-Column1-Body1">All redirects have been followed and all HTTP headers of the final response have been received.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.HTTP_READY_STATE_LOADING</td><td class="TableStyle-Basic-BodyE-Column1-Body1">3</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The response data has been received.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">constants.HTTP_READY_STATE_DONE</td><td class="TableStyle-Basic-BodyB-Column1-Body1">4</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The data transfer has been completed or something went wrong during transfer.</td></tr></tbody></table>

* * *

</details>
<details close markdown="block"><summary>response Property</summary> 

* * *

Contains the HTTP response.

### Syntax

```

httpRequest.response
```

### Type

String

### Read/Write

Read only

### Remarks

After the response has been received, this property contains the response body. The type of the value depends on the value of the _responseType_ property.

If _responseType_ is `constants.HTTP_RESPONSE_TYPE_TEXT`, then the response value is a response string.

If _responseType_ is `constants.HTTP_RESPONSE_TYPE_JSON`, then the response value is a whatever is returned by the Json.parse() function when it is passed the response content.

If _responseType_ is `constants.HTTP_RESPONSE_TYPE_DOCUMENT`, then the response value is an XML string.

If _responseType_ is `constants.HTTP_RESPONSE_TYPE_RAWDATA`, then the response value is a platform-specific handle representing the raw data of binary content of type voltmx.types.RawBytes.

> **_Note:_** For JSON type, if JSON parse fails, null is returned. For DOCUMENT type, native platforms do not perform any validations on the response.

In the case where an exception is thrown, this property contains empty string.

* * *

</details>
<details close markdown="block"><summary>responseType Property</summary> 

* * *

Contains the type of the HTTP response.

### Syntax

```

httpRequest.responseType
```

### Type

String

### Read/Write

Read only

### Remarks

Holds the response type when the response arrives. By default, it is empty string until the response is received. The possible values are:

*   constants.HTTP\_RESPONSE\_TYPE\_TEXT
*   constants.HTTP\_RESPONSE\_TYPE\_JSON
*   constants.HTTP\_RESPONSE\_TYPE\_DOCUMENT
*   constants.HTTP\_RESPONSE\_TYPE\_RAWDATA

> **_Note:_** The RAWDATA type is not supported by SPA .

* * *

</details>
<details close markdown="block"><summary>status Property</summary> 

* * *

Holds the HTTP status code.

### Syntax

```

httpRequest.status
```

### Type

Number

### Read/Write

Read only

### Remarks

Contains the HTTP status code, which is 0 if the status of the request is not sent; that is, the **send** function is still not invoked on this object.

* * *

</details>
<details close markdown="block"><summary>statusText Property</summary>

* * *

Holds a text message describing the status of the HTTP request.

### Syntax

```

httpRequest.statusText
```

### Type

String

### Read/Write

Read only

### Remarks

Contains the HTTP reason phrase of the status line, which is an empty string, if the status of the request is not sent; that is, the **send** function is still not invoked on this object. The reason phrase for a given status code is based on the http specification (RFC 2616). However, these phrases are only recommendations and may vary with other equivalent phrases by individual platform implementations.

* * *

</details>
<details close markdown="block"><summary>timeout Property</summary> 

* * *

Controls the HTTP request timeout value.

### Syntax

```

httpRequest.timeout
```

### Type

Number

### Read/Write

Read + Write

### Remarks

The time in milliseconds a request can take before being terminated. By default, the value is zero, which means that there is no timeout set, or that the timeout is set to infinite. This timeout represents the connection timeout and the response timeout from the server.

> **_Note:_** On the iOS platform, the default value for the timeout property is 60 seconds. Further, the timeout property is only applicable for requests in the foreground, i.e, the **backgroundTransfer** parameter is not enabled in the HTTP request object.

* * *

![](resources/prettify/onload.png)
</details>