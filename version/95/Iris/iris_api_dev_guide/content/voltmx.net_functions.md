                            


voltmx.net Namespace
==================

The voltmx.net namespace, which is a part of the Network API, contains the following API elements.

Functions
---------

The voltmx.net namespace contains the following functions.


<details close markdown="block"><summary>voltmx.net.cancel</summary>

* * *

This API cancels only async network calls. Synchronous calls have a platform-specific cancellation mechanism provided by the platform (mechanism may vary from platform to platform).

### Syntax

```

voltmx.net.cancel(  
    connHandle);
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| connHandle | The handle to the asynchronous service. connHandle is returned by invokeserviceasync. |

### Example

```

function cancelService() {
    voltmx.net.cancel(connHandle);
}

```

### Return Values

None.

### Exceptions

1200 - Network Error.

### Remarks

Invalid parameters to this function are ignored.

### Platform Availability

Available on all platforms except Server-Side Mobile Web, Windows.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.clearCookies</summary>

* * *

Removes cookies from the client that are associated with the specified domain.

### Syntax

```

voltmx.net.clearCookies(  
    url,  
    cookieName)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| url | An optional string that specifies a valid URL of a domain from where the cookies were obtained. |
| cookieName | An optional array of strings that specifies the cookie names that are to be removed from the current application. |

 
### Example

```

voltmx.net.clearCookies("http://www.google.com");

```

### Return Values

None

### Remarks

In an application where service calls are made through Browser Widget or through native service calls, cookies are sent from the servers to maintain the session. These cookies are stored in the cookie store on the client side. Using this API you can remove the cookies of a particular domain obtained through all of HttpRequest, invokeServiceAsync and browser widget.

If you specify the optional parameters url and cookieName, then all the cookies with the specified name related to that URL are removed from your application. The parameter url should be the complete URL. For example, [http://www.gooogle.com](http://www.gooogle.com/). If the URL is not valid, then this API will not remove the cookies. An exception is shown of type Volt MX Error with the error code as 1005 and error name/message as "invalid input url".

If the scheme of the URL is "https" then all the cookies of https as well as http will be removed. If the scheme of the URL is "http" then only the cookies stored for http will be removed. If the cookies are not present in the application cookie store in the provided array of cookieNames, then this API will not perform any action and does not raise an exception.

### Platform Availability

Available on iOS, Android, Windows, and SPA platforms.

### Limitations

*   Android
    *   The voltmx.net.clearCookies API does not remove the cookie from the Browser widget's cookie store; it replaces the cookie value with an empty string.
*   SPA
    *   You can remove the cookies related to a currently loaded domain in a web page.
    *   Cookies with the `httpOnly` flag cannot be removed. The secured cookies (https) cannot be removed when application is accessed with non-secured protocol.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.FormData</summary>

* * *

The FormData object represents an ordered collection of entries with name-value pairs. Call this function to create a FormData object.

### Syntax

```

voltmx.net.FormData();
```

### Example

```

var httpinputparams1 = new voltmx.net.FormData()
```

### Input Parameters

None.

### Return Values

Returns an object of type FormData.

### Platform Availability

Android, iOS, Windows, and SPA

* * *

</details>
<details close markdown="block"><summary>voltmx.net.getActiveNetworkType</summary>

* * *

Retrieves the currently-active network type.

### Syntax

```

_voltmx.net.getActiveNetworkType(_ _optionsConfig_ _);_
```

### Input Parameters

optionsConfig \[JSON Object\] - An optional JSON Object that contains the following parameters:

> **_Note:_** This parameter is only available on the Android platform.

  
| Parameter | Description |
| --- | --- |
| requestWithPermission \[Boolean\] | A Boolean parameter that is required to obtain information on a 2G or 4G network used.If you set the value of this parameter to **true**, the Android Framework invokes the callback function. If you set the value of this parameter to false (or do not specify a value for the parameter) the API returns the Network Type. |
| callback \[Function\] | A callback function that is invoked when the value of the [requestWithPermission](#requestWithPermission) parameter is set to **true**. The callback function is invoked with a JSON Object that contains the following parameters:**status**: A String value that contains the status information. The status parameter can have the following values:SUCCESSFAILEDPERMISSION\_DENIED**networkType**: An integer constant that specifies the network type on the device for data transport. You can specify any of the [Network Constants](#Network).**networkName**: A String value that contains the name of the mobile data network. The networkName parameter can have the following values:GPRSEDGECDMA1xRTTIDENUMTSEVDO\_0EVDO\_AHSDPAHSUPAHSPAEVDO\_BEHRPDHSPAPLTENRUNKNOWN> **_Note:_** When the networkType is NETWORK\_TYPE\_WIFI, the value of the networkName parameter is Null. |

### Example

```

function callbackFunction(network){  
  if(network.status != "FAILED"){  
    alert(JSON.stringify(network));  
  }  
  else{  
    alert("Failed to get network");  
  }  
}  
function checkActiveNetwork() {  
 var options = {  
      "requestWithPermission" : true,  
      "callback" : callbackFunction  
    };  
    return voltmx.net.getActiveNetworkType(options);  
}
```

### Return Values

If the device is offline, it will return null. Otherwise, it will return the appropriate connection type.

  
| Return Value | Description |
| --- | --- |
| constants.NETWORK\_TYPE\_2G | Indicates that a 2G network is used. |
| constants.NETWORK\_TYPE\_3G | Indicates that a 3G network is used. |
| constants.NETWORK\_TYPE\_4G | Indicates that a 4G network is used. |
| constants.NETWORK\_TYPE\_5G | Indicates that a 5G network is used. |
| constants.NETWORK\_TYPE\_WIFI | Indicates that Wi-Fi is used for network connection. |
| constants.NETWORK\_TYPE\_ETHERNET | Indicates that Ethernet is used for network connection. Available only on the Desktop Web and Android channels. |
| constants.NETWORK\_TYPE\_ANY | Indicates that the device has sufficient network coverage to send data over any supported data channels, especially on SPA , Mobile Web, and Desktop Web applications. |

 

For Android, if the value of the **requestWithPermission** parameter is `true`, the network information is passed to the callback function, and a null value is returned to the API. If the value of the **requestWithPermission** parameter is `false`, the appropriate connection type constant is returned.

For SPA and Desktop Web, it will always return constants.NETWORK\_TYPE\_ANY.

### Remarks

SPA and Desktop Web depend upon the navigator.onLine property to detect if the device is offline or online. The implementation of this property across browsers is uneven. For more information, refer to [Mozilla documentation for browser support](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine.onLine).

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.getCookies</summary>

* * *

Retrieves cookies associated with the specified domain.

### Syntax

```

voltmx.net.getCookies(  
    URL, cookieFormat)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| URL | The URL of the domain for which the cookie is retrieved. If the URL in the _URL_ parameter is not fully formed, this function returns `Null`. For details, see **Remarks** below. |
| cookieFormat (optional) | The format in which the cookies must be retrieved. > **_Note:_** This parameter is only available on the iOS platform. The cookieFormat parameter can have the following two values: **constants.COOKIES\_IN\_JSON**: Returns an array of cookies in JSON format. Sample JSON dictionary format: {  "Version": 1,  "Name":"appName",  "Value": "App01",  "ExpiresDate":'(null)', // in milli seconds "Domain": "app.example.com",  "Path": "/"  "HttpOnly"=TRUE;} **constants.COOKIES\_IN\_STRING**: Returns an array of cookies in String format. This is the default format in which cookies are retrieved. Sample String format: appName=App01; Version=1; Domain=app.example.com; HttpOnly=TRUE; Path=/ |

 
### Example

```

var cookies = voltmx.net.getCookies("http://www.google.com", constants.COOKIES_IN_STRING);  
for (index = 0; index < cookies.length; index++) {  
    cookie = cookies[index];  
    voltmx.print("Cookie is: " + cookie);   
}

```

### Return Values

Returns an array of cookies. For details, see **Remarks** below.


```

//For example  
SSID=Ap4P….GTEq; Domain=foo.com; Path=/; Expires=Wed, 13 Jan 2021 22:23:01 GMT; Secure; HttpOnly
```

### Remarks

In an application where service calls are made through Browser Widget or through native service calls, cookies are sent from the servers to maintain the session. These cookies are stored in cookie store on the client side. The voltmx.net.getCookies API enables access to the cookies for a particular domain. The URL is given as an input parameter to voltmx.net.getCookies API, then all cookies related to that domain are returned.

In the current application context, you can also access cookies for a particular domain stored in cookie store on the client side or device.

The voltmx.net.getCookies function returns all the cookies stored in local cookie store on the client side or device for that particular domain. The returned cookies can vary based on the domain (partial or full domain) and as well as the path.

The URL is passed as input and must be a fully formed, valid URL like `http://www.google.com`.

If the URL is invalid or not formed properly, `Null` is returned.

Each cookie that this function returns is a string that follows the format `key=value`. Each cookie string can also contain additional information following the Standard HTTP Cookie Format, such as Domain, Path, Expires, Secure, and HttpOnly. This function returns `Null` if there are no cookies for the domain.

If the scheme of the URL is `https`, then this function returns all the cookies of `https` cookies as well as the `http` cookies. If the scheme of the URL is `http`, then only the cookies stored for `http` are returned.

### Platform Availability

Android, iOS, Windows, and SPA

### Limitations

*   In Windows, the cookies stored in the Browser Widget cookie store are returned. Cookies stored through native service calls are not returned.
*   In SPA, the cookies related to a currently loaded domain in a web page are accessible.
*   In SPA, cookies with the `httpOnly` flag cannot be accessed.

* * *

</details>

<details close markdown="block"><summary>voltmx.net.getDomainVerificationUserState</summary>

* * *

Determines the verification status of the specified domain.

### Syntax

```
voltmx.net.getDomainVerificationUserState(domainString);
```

### Input Parameters

  
| Constant | Description |
| --- | --- |
| domainString | The domain for which the verification status is to be determined.|


 
### Example

```

var state = voltmx.net.getDomainVerificationUserState("google.com");
if (state == constants.DOMAIN_STATE_NONE) {
    // show the dialog to provide some context to user to navigate settings screen.
} else if (state == constants.DOMAIN_STATE_VERIFIED) {

}

```

### Return Values

A constant that determines the verification status of the specified domain. Following are the supported constants:

| Constant | Description |
| --- | --- |
| voltmx.constants.DOMAIN_STATE_VERIFIED | Indicates that the domain has passed the Android App Links verification.|
| voltmx.constants.DOMAIN_STATE_SELECTED | Indicates that the domain has not passed Android App Links verification. However, it indicates that the user has associated with an app.|
| voltmx.constants.DOMAIN_STATE_NONE | Indicates that the domain has neither passed the Android App Links verification nor has a user associated with an app.|


### Platform Availability

* Android

* * *

</details>
<details close markdown="block"><summary>voltmx.net.hasCapability</summary>

* * *

Determines whether the device has the specified capability.

### Syntax

```

voltmx.net.hasCapability(capability);
```

### Input Parameters

_capability_

A constant that specifies the availability of a capability on the device. You can specify any of the following.

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 33%;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Constant</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_CAPTIVE_PORTAL</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network was found to have a captive portal in place during the last time it was probed.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_CBS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has an ability to reach the CBS servers of the network carrier that is used for carrier-specific services.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_DUN</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the DUN or tethering gateway of the network carrier.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_EIMS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the Emergency IMS servers or other services of the network carrier used for network signaling during emergency calls.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_FOREGROUND</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is available for use by apps, and is not a network that is being kept up in the background to facilitate fast network switches.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_FOTA</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the FOTA portal of the network carrier that is used for over the air updates.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_IA</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the Initial Attach servers of the network carrier.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_IMS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the IMS servers of the network carrier that is used for network registration and signaling.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_INTERNET</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network must be able to reach the internet.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_MCX</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the Mission Critical servers of the network carrier.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_MMS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the MMSC of the network carrier that is used to send and receive MMS messages.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_CONGESTED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is not congested.When a network is congested, applications must defer network traffic that can be done at a later point in time, such as uploading analytics.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_METERED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is unmetered.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_RESTRICTED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is available for general use. This constant is set by default. If this constant is not set, applications must not attempt to communicate on this network. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This is simply informative and not enforcement - enforcement is handled via other means.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_ROAMING</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is not roaming.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_SUSPENDED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is currently not suspended. When a network is suspended, the IP addresses and any connections established on the network remain valid, but the network is temporarily unable to transfer data. This issue may be observed if a cellular network experiences a temporary loss of signal, such as while driving through a tunnel, etc. A network with this capability is not suspended, and so is expected to be able to transfer data.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_NOT_VPN</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network is not a VPN. This capability is set by default and must be explicitly cleared for VPN networks.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_RCS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the RCS servers of the network carrier, used for Rich Communication Services.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_SUPL</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach the SUPL server of the network carrier, used to retrieve GPS information.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_TEMPORARILY_NOT_METERED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This capability is set for networks that are generally metered, but are currently unmetered, For example, when the user may not be in a particular area. This capability can be changed at any time. When this constant is not specified, the application is responsible for stopping any data transfer that must not occur on a metered network.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_TRUSTED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the user has indicated implicit trust on this network. This constant is set by default. In general, this means that the network is a sim-selected carrier, a plugged-in ethernet, a paired Bluetooth device or a WiFi router that the user has requested connection to. Untrusted networks are probably limited to unknown WiFi access points.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_VALIDATED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network connection is successfully validate. For example, on a network with NET_CAPABILITY_INTERNET, it means that the Internet connectivity was successfully detected.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">constants.NET_CAPABILITY_WIFI_P2P</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Indicates that the network has the ability to reach a Wi-Fi direct peer.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">constants.NET_CAPABILITY_XCAP</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Indicates that the network has the ability to reach the XCAP servers of the network carrier, used for configuration and control.</td></tr></tbody></table>

 
### Example

```

voltmx.net.hasCapability(constants.NET_CAPABILITY_TEMPORARILY_NOT_METERED)
```

### Return Values

Boolean

### Exceptions

None

### Platform Availability

Available on Android platform.

* * *

</details>
<details markdown="block" id="HttpReq"><summary id="HttpRequ">voltmx.net.HttpRequest</summary>


* * *

Creates an [HttpRequest](httprequestobject.md) object.

### Syntax

```

voltmx.net.HttpRequest(requestOptions)
```

### Example

```

var httpRequestNew = new voltmx.net.HttpRequest({
       "timeoutIntervalForRequest": 60,
       "timeoutIntervalForResource": 600
   }
);
```

### Input Parameters

_requestOptions_ - An optional argument that can have the following parameters.

> **_Note:_** The requestOptions parameter is only available on the Android and iOS platforms.

  
| Parameter | Description |
| --- | --- |
| timeoutIntervalForRequest \[integer\] | An optional parameter that specifies the maximum connection time out value (in seconds) for the request to establish an HTTP connection. If the request is not established before the timeout interval is reached, a timeout error occurs. The timeoutIntervalForRequest parameter is only applicable for the Android and iOS platforms. On the Android platform, the default timeout value is zero, which means that the timeout is infinite. On the iOS platform, the timeoutIntervalForRequest parameter is only applicable for background network calls (when the [backgroundTransfer](httprequestobject_properties.md#backgroundTransfer) property is set to true). If the timeout value is not specified, the default timeout value of 60 seconds is set by the OS. |
| timeoutIntervalForResource \[integer\] | An optional parameter that specifies the maximum time out value (in seconds) for which the network must wait for a response from the server resource. If the resource is not retrieved before the timeout interval is reached, a timeout error occurs. The timeoutIntervalForResource parameter is only applicable for the Android and iOS platforms. On the Android platform, the default timeout value is zero, which means that the timeout is infinite. On the iOS platform, the timeoutIntervalForResource parameter is only applicable for background network calls (when the [backgroundTransfer](httprequestobject_properties.md#backgroundTransfer) property is set to true). If the timeout value is not specified, the default timeout value of 1 week (7 days) is set by the OS. |

 
### Return Values

None

### Remarks

The [HttpRequest](httprequestobject.md) Object supports an HTTP or HTTPS request to any resource on the network and fetches the response.

> **_Note:_** SNI (Server Name Indication ) is supported from Android 4.2 onwards. That is, from API level >=17. From Android 4.0 to 4.2 versions, the support of SNI depends on device capability. That is 14<= API Level <17.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.isNetworkAvailable</summary> 

* * *

This API enables you to check whether a network is available for data transport on a device.

### Syntax

```

voltmx.net.isNetworkAvailable(  
    networkType, optionsConfig)
```

### Input Parameters

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 20%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 80%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">networkType [Integer]</td><td class="TableStyle-Basic-BodyD-Column1-Body1">An integer constant that specifies the network type on the device for data transport. You can specify any of the <a href="#Network" class="selected">Network Constants</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.V9SP2-GA"><td class="TableStyle-Basic-BodyB-Column1-Body1">optionsConfig [JSON Object] - Optional</td><td class="TableStyle-Basic-BodyA-Column1-Body1">A JSON Object that contains the following parameter: <b>requestWithPermission</b>: A Boolean parameter that is required to obtain information on a 2G or 4G network used.If you set the value of this parameter to true when you place a request for mobile data networks, the system requests the <code class="codefirst">READ_PHONE_STATE</code> permission, and then processes the request. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is only available on the Android platform.</td></tr></tbody></table>

### Network Constants

  
| Constant | Description |
| --- | --- |
| constants.NETWORK\_TYPE\_2G | Indicates that a 2G network is used. |
| constants.NETWORK\_TYPE\_3G | Indicates that a 3G network is used. |
| constants.NETWORK\_TYPE\_4G | Indicates that a 4G network is used. |
| constants.NETWORK\_TYPE\_5G | Indicates that a 5G network is used. |
| constants.NETWORK\_TYPE\_WIFI | Indicates that Wi-Fi is used for network connection. |
| constants.NETWORK\_TYPE\_ETHERNET | Indicates that Ethernet is used for network connection. Available only on the Desktop Web and Android channels. |
| constants.NETWORK\_TYPE\_ANY | Indicates that the device has sufficient network coverage to send data over any supported data channels, especially on SPA , Mobile Web, and Desktop Web applications. |

 
### Example

```

function checkIfNetworkIsAvailable() {  
  
var options = {  
  "requestWithPermission" : true  
}  
return voltmx.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options);  
}

```

### Return Values

**_Boolean_**

Returns `true` if the specified data network is available, or `false` if not.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.loadClientCertificate</summary>

* * *

Sets a client certificate to be used for HTTPS client authentication.

### Syntax

```

voltmx.net.loadClientCertificate(  
    certParamsTable)
```

### Input Parameters

certParamsTable

A list of following key-value pairs required to load client certificate for client authentication in a mutually authenticated HTTPS connection.

  
| Key | Description |
| --- | --- |
| cert | Can be of type RawBytes or base64String. Specifies the certificate to be loaded. The certificate should be of type PKCS12 certificate encoding format, which holds both client certificate and private key. |
| pass | A string containing the password that is protecting the PKCS12 certificate. If PKCS12 certificate is not password protected, use an empty string; that is, “ ”. |

 
### Example

```

function loadCert() {  
  try {  
  var certFileName = voltmx.io.FileSystem.getCacheDirectoryPath() + "/" + clientCertFileName;  
  var certFile = new voltmx.io.File(certFileName);  
  var certStream = certFile.read()  
  
  var certParamTable = {  
  cert: certStream,  
  pass: "password"  
  };  
  var res = voltmx.net.loadClientCertificate(certParamTable);  
  voltmx.print("loadClientCertificate status = " + res)  
  } catch (e) {  
  alert(e);  
  }  
 }
```

### Return Values

This API returns a Boolean value whether the client certificate is loaded successfully or not.

### Remarks

The following functions use the client authentication feature:

    voltmx.net.invokeServiceAsync

    voltmx.net.send

If loading the client certificate succeeds, the previously-loaded certificate is replaced with new one.

If loading the client certificate fails, the previously-loaded certificate is retained as is.

Any certificate loaded using this function is automatically unloaded as soon as the application exits.

> **_Note:_** When you use the [voltmx.net.HttpRequest](#HttpRequ) API in sync mode, both server and client pinning do not work in the iOS platform.

### Exceptions

If the mandatory parameters are missing, following error codes occur.

100 - invalid type of parameters

101 - invalid number of arguments

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.net.mfintegrationsecureinvokerasync</summary> 

* * *

Invokes a Volt MX Foundry service asynchronously.

### Syntax

```

voltmx.net.mfintegrationsecureinvokerasync(  
    inputParams,  
    serviceName ,  
    operationName,  
    callbackFunction)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| inputParams | An object containing the Parameters for the Volt MX Foundry service. The format of this object is dependent on the input requirements of the Volt MX Foundry service being invoked. |
| serviceName | A string that holds the name of the service to invoke. |
| operationName | A string that specifies the name of the service's operation. |
| _callbackFunction_ | A callback function to handle the service's response. |

 
### Example

```

function callbackFunction(status, response) {
    //application specific code goes here.
}

var serviceName = "ServiceTwo";
var operationName = "HealthOperation";

// inputParams here is just a sample. Your Parameters will look different.
// The Parameters are dependent on the input information that your 
// Volt MX Foundry service's operation requires.
// <place-holder> is a placeholder for the atual values of your parameters.
var inputParams = {
    "q": "<place-holder>",
    "httpheaders": {
        "api-key": "<place-holder>"
    }
};
mfintegrationsecureinvokerasync(inputParams, serviceName, operationName, callbackFunction);
				
```

### Return Values

None.

### Remarks

Use this service to call a Volt MX Foundry service from your app. When the service sends a response to your app, the response is processed by the callback function that your app passes through the callbackFunction parameter of this function.

The format of the _inputParams_ object parameter is not specified here because its format depends entirely on the information that the Volt MX Foundry service's operation requires for input.

The function passed through the _callbackFunction_ parameter must match the following Syntax.

```

callbackFunction(status,response);
```

The callback function takes two parameters. The first, called _status_, is an integer that indicates the status of the response from the service's operation The value contained in the _status_ parameter depends on the service itself.

The second parameter to the callback function is called _response_. It is a JavaScript object that contains the response from the service's operation. The format of the object and the data it contains is dictated by the service's operation.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.removeAllCachedResponses</summary> 

* * *

Clears the default cache of an application by removing all responses received from URLs.

### Syntax

```

voltmx.net.removeAllCachedResponses()
```

### Example

```

voltmx.net.removeAllCachedResponses();
```

### Input Parameters

None.

### Return Values

None.

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.net.removeClientCertificate</summary>

* * *

Removes already loaded client certificate.

### Syntax

```

voltmx.net.removeClientCertificate()
```

### Example

```

function removeCert() {  
    voltmx.net.removeClientCertificate();  
}
```

### Input Parameters

None.

### Return Values

None.

### Exceptions

None.

### Platform Availability

*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.net.removeIntegrityCheck</summary>

* * *

Disables intregity checks for HTTP calls between the client and the server.

### Syntax

```

voltmx.net.removeIntegrityCheck()
```

### Example

```

voltmx.net.removeIntegrityCheck();
```

### Input Parameters

None.

### Return Values

None.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.set5GNetworkListener</summary>

* * *

Determines if the device has a 5G network connection to the app.

### Syntax

```

voltmx.net.set5GNetworkListener(callback);
```

### Input Parameters

_callback_ - The callback function that must be executed after the execution of the API call is complete.

  
| Constant | Description |
| --- | --- |
| constants.OVERRIDE\_NETWORK\_TYPE\_NR\_NSA\_MMWAVE | The override network type when the device is connected to the LTE network and has E-UTRA-NR Dual Connectivity(EN-DC) capability or is currently connected to the secondary 5G cellular network. |
| constants.OVERRIDE\_NETWORK\_TYPE\_NR\_NSA | The override network type when the device is connected to the LTE network and has E-UTRA-NR Dual Connectivity(EN-DC) capability or is currently connected to the secondary 5G cellular network. |
| constants.OVERRIDE\_NETWORK\_TYPE\_LTE\_ADVANCED\_PRO | The override network type when the device is connected to the advanced pro LTE cellular network. |
| constants.OVERRIDE\_NETWORK\_TYPE\_LTE\_CA | The override network type when the device is connected to the LTE cellular network and is using carrier aggregation. |
| constants.OVERRIDE\_NETWORK\_TYPE\_NONE | No configured network override. |

 
### Example

```

callbackFunction : function(networktype){  
  if(networktype = constants.OVERRIDE_NETWORK_TYPE_LTE_CA)
    alert("LTE_CA");  
}  
voltmx.net.set5GNetworkListener(callbackFunction);
```

### Return Values

Constant

### Exceptions

None

### Platform Availability

Available on Android platform.

> **_Note:_** You can unregister from the 5G Network Listener by invoking the voltmx.net.unregister5GNetworkListener() API.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.setCookies</summary>

* * *

Adds cookies in the main app cookie storage. If a cookie with the same name, domain, and path already exists in storage, this API replaces the specified cookie in the cookie storage.

### Syntax

```

voltmx.net.setCookies(url,cookiesList)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| url | A string that specifies a valid URL of a domain where the cookies are to be defined. If the url is empty, a specific cookie is stored based on the cookie acceptance policy. |
| cookiesList | An array of objects, that each contains details of a cookie in the dictionary format. Sample dictionary format:{  "Version": 1,  "Name":"appName",  "Value": "App01",  "ExpiresDate":'(null)', // in milli seconds  "Domain": "app.example.com",  "Path": "/" } |

 
### Example

```

function setCookiesFunc() {
    var lisOfCookies = [{
        "Name": "appName",
        "Value": "App01",
        "Domain": "app.example.com",
        "Path": "/"
    }]
    voltmx.net.setCookies("https://www.example.com", listOfCookies)
}
```

### Return Values

None

### Remarks

To successfully create a cookie, you must provide values for (at least) the **Path**, **Name**, **Value**, and the **Domain** keys. All the other valid keys must start with capital letters.

The parameter url must be the complete URL. For example, [http://www.gooogle.com](http://www.gooogle.com/).

### Platform Availability

Available on iOS platform.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.setIntegrityCheck</summary> 

* * *

Enables the addition of checksums to HTTP calls for HTTP integrity checking.

### Syntax

```

voltmx.net.setIntegrityCheck(  
    propertiesTable)
```

### Input Parameters

**_propertiesTable_**

A JavaScript object that contains the following key-value pairs.

  
| Key | Description |
| --- | --- |
| algo | A string that specifies the hashing algorithm to use for the checksum. The following values are supported:MD5SHA1SHA224 (Supported on Android API 21 and later) This is not supported for Windows. SHA256SHA384SHA512 |
| salt | A string containing an app-supplied random data value that is used as additional input to the hash function. The `salt` argument has a maximum string length of 1024 characters. If it is longer, the excess characters are truncated. Your app can pass an empty string for this argument if you feel that a salt value is not necessary. |
| headerName | A non-empty string that specifies the name of the header. The maximum length of this string is 64 characters. If more characters are passed, the `headerName` argument is truncated to 64 characters. |
| validateResp | A Boolean value that indicates whether the response should be validated. A value of `true` means that the response checksum needs to be validated, while `false` indicates that it does not. For important details, see the **Remarks** section below. |
| hostNameList | An optional array of strings that specify the URLs of servers. When the client app on the device communicates with the specified servers, it adds integrity checking headers to each HTTP request. For more information, see the **Remarks** section below. |

 
### Example

```

var propertiesTable {
    algo: “SHA256”,
    salt: “secret_123”,
    headerName: “X - Checksum”,
    validateResp: true,
    hostNamesList: [“mail.voltmx.com”, “cloud.voltmx.com”]

};

voltmx.net.setIntegrityCheck(propertiesTable);
```

### Return Values

None

### Exceptions

This function throws the following exceptions.

| Error Code | Description |
| --- | --- |
| 100 | Invalid argument or parameter name. |
| 101 | Missing argument or parameter, |
| 102 | Invalid number of arguments. |

### Remarks

Use this function to cause the Volt MX IrisAPI Framework to use checksums to validate HTTP messages passing between the client app and the servers.

The beginning and ending whitespace is automatically trimmed on all string arguments in the _propertiesTable_ parameter .

If the `validateResp` argument in the `propertiesTable` parameter is set to `true`, your app uses an [HttpRequest](httprequestobject.md) object to receive the response. When it does, it uses the [integrityStatus](httprequestobject_properties.md#integrityStatus) property of the HttpRequest object to check whether the integrity check is successful or not.

If the optional `hostNameList` argument is omitted from the `propertiesTable` parameter, then the integrity checking header is added to all outgoing HTTP and HTTPS calls. However, if the host names are specified in the `hostNameList` argument, then the integrity checking header is only added to calls to the specified hosts. Also, only basic validation is performed on the named hosts' parameters if the hostname strings are limited to the set \[a-z, A-Z, 0-9, -\]. In addition, the wildcard character, which is the asterisk (\*), can only be used as a prefix. For example, \*.voltmx.com is valid, but voltmx.\* is not. Finally, you must ensure that all of the host names you pass are valid. The `setIntegrityCheck` function does not validate the format of the host names for you. All host names must follow the standard delineated in the Wikipedia [Hostname](https://en.wikipedia.org/wiki/Hostname) topic.

### Platform Availability

*   Android
*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.net.setNetworkCallbacks</summary>

* * *

This function allows the developer to register for network status changes.

### Syntax

```

voltmx.net.setNetworkCallbacks(  
    callbackconfig)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| callbackconfig | A JSON object that contains a property called `statusChange`. statusChange: A callback function that is invoked when the device goes offline or online. This callback receives an input parameter that indicates whether the device was online or offline when this callback was invoked. |

### Example

```

var config = {};
config.statusChange = function(isOnLine) {
    if (isOnLine) {
        alert("Device is online");
    } else {
        alert("Device is offline");
    }
};
voltmx.net.setNetworkCallbacks(config);
```

### Return Values

None

### Remarks

This function allows the developer to register for network status changes. You can then change the user experience according to the network availability.

### Platform Availability

Available on all platforms except Windows and Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.unregister5GNetworkListener</summary>

* * *

Unregister from the 5G Network Listener.

### Syntax

```

voltmx.net.unregister5GNetworkListener();
```

### Input Parameters

None

### Example

```

voltmx.net.unregister5GNetworkListener();
```

### Return Values

None

### Exceptions

None

### Platform Availability

Available on Android platform.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.urlDecode</summary>

* * *

Converts a URL string from application/x-www-form-urlencoded format in the UTF-8 encoding.

### Syntax

```

voltmx.net.urlDecode(  
    queryParams,  
    exemptionString)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| queryParams | A string in application/x-www-form-urlencoded format in the UTF-8 to decode. |
| exemptionString | Optional. Specify the characters in the string that should be exempted from decoding. The parameter is used only on iOS . The Android and Windows platforms ignore this parameter. |

 
### Example with exemptionString parameter

```

var result = voltmx.net.urlDecode(“hello*_%40+world”); 
voltmx.print(result);  
  
//iOS output  
  hello*_%40+worl%64  
  
//Android output  
  hello*_%40+world
```

Example without exemptionString parameter

```

var result = voltmx.net.urlDecode(“hello*_%40+world”); 
voltmx.print(result);
					  
//Output for all platforms  
  “hello*_@ world”		
```

### Return Values

Returns a string containing the decoded URL.

### Platform Availability

*   Android
*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.net.urlEncode</summary>

* * *

Converts a URL string into application/x-www-form-urlencoded format using the UTF-8 encoding.

### Syntax

```

voltmx.net.urlEncode(  
    queryParams  
    exemptionString)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| queryParams | A string containing a URL to encode. |
| exemptionString | Optional. A string that specifies the characters in the string that should be exempted from encoding. The parameter is used only on iOS. The Android and Windows platforms ignore this parameter. |

 
### Example with exemptionString parameter

```

var exemptionString =  "helloworl-*_.";
var result = voltmx.net.urlEncode(“hello*_@ world”, exemptionString); 
voltmx.print(result);  
  
//iOS output  
  hello*_%40+worl%64  
  
//Android output  
  hello*_%40+world
```

### Example without exemptionString parameter

```

var result = voltmx.net.urlEncode(“hello*_@ world”); 
voltmx.print(result);
					  
//Output for all platforms  
  hello*_%40+world		
```

### Return Values

Returns the encoded string.

### Remarks

The string is encoded based on the following rules.

*   The following characters remain the unchanged.
    *  a-z
    *  A-Z
    *  0-9
    *  Period (**.**), hyphen (**\-**), asterisk (**\***), and underscore (**\_**)
*   The space character " " is converted to a plus symbol (**+**).
*   Other characters are unsafe and are first converted to one or more bytes using an encoding scheme. Each byte is represented as 3-character string, _%xy_, where _xy_ is the two-digit hexadecimal representation of the byte.

### Platform Availability

*   Android
*   iOS
*   Windows

* * *

![](resources/prettify/onload.png)
