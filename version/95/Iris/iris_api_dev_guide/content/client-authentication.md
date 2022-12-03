                            

You are here: Client Authentication API

Client Authentication
=====================

The Client Authentication API provides your apps with the ability to authenticate clients that want to access an HTTPS servers. Client authentication is required in cases where HTTPS servers ( optionally) request the client to authenticate itself using a Digital Certificate before establishing SSL connection.

To authenticate the client itself to HTTPS server, you need to load the required client certificate into the application. Once the certificate is loaded, the client can perform all HTTPS communications using the service invoker and HTTP request APIs till the application is alive.

The loaded client certificate is sent to a server for authentication in the SSL Handshake phase only when the server challenges the client to authenticate itself. If the server does not challenge the client to authenticate, the certificate is not shared with server.

The client certificate must be of PKCS12 certificate type (encoding format), which includes both private key and certificate of the client. The PKCS12 encoded client certificates must be loaded in the following data-type formats which can be obtained from various sources such as File System, HTTP Connection and so on .

*   RawBytes \[Userdata\]
*   base64String \[String\]

Optionally, you can also pre bundle the required client certificates within an application. In the Android platform, if a certificate is pre bundled in the `` `Assets` ``or `` `res\raw` `` folders, you may need to write an FFI to copy the certificate from the `Assets` or `res\raw` folders to application file system such as cache directory ([voltmx.io.FileSystem.getCacheDirectoryPath()](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getcachedirectorypath)). In the iOS platform, you can place the certificate as an image file. In both the platforms, use the [voltmx.io](inputoutput_api.md) APIs to read the certificate in RawBytes format and load the certificate using the [loadClientCertificate](voltmx.net_functions.md#voltmx.net) API.

The same certificate may not work to authenticate in multiple servers. In such cases, you can overwrite previously set certificate with new one before establishing communication with another server by calling [loadClientCertificate](voltmx.net_functions.md#voltmx.net) API with new certificate.

In the Android platform, a single .pkcs12 file can contain multiple client certificates and helps to pick the appropriate client certificate automatically for a server during the SSL handshake to enable the communication.

![](resources/prettify/onload.png)
