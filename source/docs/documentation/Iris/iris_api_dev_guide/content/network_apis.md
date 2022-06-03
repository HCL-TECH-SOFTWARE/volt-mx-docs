---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Network API

Network API
===========

The Network API provides functions for network calls via HTTP or HTTPS. The Network API enables your app to request data from remote sources, such as your data servers, over the Internet. In also enables you to validate that the data requests and the responses have not been tampered with as they traveled between the client app and the server. The Network API comprises of the following modules:

*   [Network Calls](networkapi_networkcalls.html)
*   [Asynchronous Network Calls](networkapi_asynccalls.html)

The Network API uses the `voltmx.net Namespace` and the following API elements

  
| Function | Description |
| --- | --- |
| [voltmx.net.cancel](voltmx.net_functions.html#Cancel) | cancels only async network calls. Synchronous calls have a platform-specific cancellation mechanism provided by the platform |
| [voltmx.net.clearCookies](voltmx.net_functions.html#voltmx.net9) | Removes cookies from the client that are associated with the specified domain. |
| [voltmx.net.FormData](voltmx.net_functions.html#FormData) | Call this function to create a FormData object. |
| [voltmx.net.getActiveNetworkType](voltmx.net_functions.html#Fetching) | Retrieves the currently-active network type. |
| [voltmx.net.getCookies](voltmx.net_functions.html#voltmx.net8) | Retrieves cookies associated with the specified domain. |
| [voltmx.net.hasCapablity](voltmx.net_functions.html#hasCapability) | Determines whether the device has the specified capability. |
| [voltmx.net.HttpRequest](voltmx.net_functions.html#HttpRequ) | Creates an HttpRequest object. |
| [voltmx.net.isNetworkAvailable](voltmx.net_functions.html#Checking) | Enables you to check whether a network is available for data transport on a device. |
| [voltmx.net.loadClientCertificate](voltmx.net_functions.html#voltmx.net) | Sets a client certificate to be used for HTTPS client authentication. |
| [voltmx.net.mfintegrationsecureinvokerasync](voltmx.net_functions.html#mfintegrationsecureinvokerasync) | Invokes a Volt MX Foundry service asynchronously. |
| [voltmx.net.removeClientCertificate](voltmx.net_functions.html#voltmx.net2) | Removes already loaded client certificate. |
| [voltmx.net.removeAllCachedResponses](voltmx.net_functions.html#removeAllCachedResponses) | Clears the default cache of an application by removing all responses received from URLs. |
| [voltmx.net.removeIntegrityCheck](voltmx.net_functions.html#removeIntegrityCheck) | Disables intregity checks for HTTP calls between the client and the server. |
| [voltmx.net.set5GNetworkListener](voltmx.net_functions.html#setIntegrtityCheck) | Determines if the device has a 5G network connection to the app. |
| [voltmx.net.setCookies](voltmx.net_functions.html#setIntegrtityCheck) | Adds cookies, or replaces an existing cookie in the cookie storage. |
| [voltmx.net.setIntegrityCheck](voltmx.net_functions.html#setIntegrtityCheck) | Enables the addition of checksums to HTTP calls for HTTP integrity checking. |
| [voltmx.net.setNetworkCallbacks](voltmx.net_functions.html#Register) | Allows the developer to register for network status changes. |
| [voltmx.net.setResponse](voltmx.net_functions.html#setResponse) | Sets a callback function that handles network events. |
| [voltmx.net.unregister5GNetworkListener](voltmx.net_functions.html#urlDecode) | Unregister from the 5G Network Listener. |
| [voltmx.net.urlDecode](voltmx.net_functions.html#urlDecode) | Converts a URL string from application/x-www-form-urlencoded format in the UTF-8 encoding. |
| [voltmx.net.urlEncode](voltmx.net_functions.html#urlEncode) | Converts a URL string into application/x-www-form-urlencoded format using the UTF-8 encoding. |

To verify the identity of the server and establish a secure network connection through HTTPS, use the [voltmx.net.loadClientCertificate](voltmx.net_functions.html#voltmx.net) function. A client certificate for HTTPS client authentication is set. You can remove the client certificate by using the [voltmx.net.removeClientCertificate](voltmx.net_functions.html#voltmx.net2) function.

To start with establishling a connection using HTTP, create an Http request object by using the [voltmx.net.HttpRequest](voltmx.net_functions.html#HttpRequ) function. After creating an object, invoke a required Volt MX Foundry service by using the [voltmx.net.mfintegrationsecureinvokerasync](voltmx.net_functions.html#mfintegrationsecureinvokerasync) function. Then use the [voltmx.net.setIntegrityCheck](voltmx.net_functions.html#setIntegrtityCheck) function to validate HTTP messages passing between the client app and the servers. To disable the HTTP integrity checking, use the [voltmx.net.removeIntegrityCheck](voltmx.net_functions.html#removeIntegrityCheck) function.

Further, a URLs can be sent over the internet in ASCII format only. To convert a URL into valid ASCII format, use the [voltmx.net.urlEncode](voltmx.net_functions.html#urlEncode) function. Then use the [voltmx.net.urlDecode](voltmx.net_functions.html#urlDecode) function to convert the ASCII characters to readable format.

Please note that the `voltmx.net.invokeServiceAsync` and `voltmx.net.invokeservice` are deprecated and should not be used in new software. However, [documentation for them is still available](voltmx.net_deprecated.html) to help with the maintenance of legacy software.

> **_Note:_** From V9 SP2 onwards, for etag caching of Network APIs, the data in a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.
<!-- > **_Note:_** From V8 SP4 onwards, for etag caching of Network APIs, the data in a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms. -->

![](resources/prettify/onload.png)
