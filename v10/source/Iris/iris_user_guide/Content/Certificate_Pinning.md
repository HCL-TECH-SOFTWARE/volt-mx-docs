                         


Certificate Pinning
===================

> **_Note:_** Volt MX 9.2 does not support the building of Windows native applications. Please disregard all references to Windows in this topic.

To check trust for communication between an app and a server, server certificates are bundled with the application. Pinning is a process of associating a host with their expected certificate or public key. Once a certificate or public key is known or seen for a host, the certificate or public key is associated or pinned to the host.

Pinning makes use of knowledge of the pre-existing relationship between the user and an organization or service to make the security-related decisions better. As the information is already on the server or service, you do not need to rely on generalized mechanisms meant to solve the key distribution problem. You do not need to turn to DNS for name/address mappings or CAs for bindings and status.

In this document, you will learn about the following topics: 

1.  [Get the Certificate that you want to Pin](#get-the-certificate-that-you-want-to-pin)
2.  [Enable Certificate Pinning in iOS](#enable-certificate-pinning-in-ios)
3.  [Enable Certificate Pinning in Android](#enable-certificate-pinning-in-android)


Get the Certificate that you want to Pin
----------------------------------------

To get the certificate that is to be pinned, follow any of these two procedures which are common for all platforms:

### Generate by using the VoltMXSSLPinningTool.jar Tool

Follow these steps to use the VoltMXSSLPinningTool.jar file:

1.  Download the zipped [VoltMXSSLPinningTool.zip](https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs/raw/master/VoltMXSSLPinningTool.zip) file to your local system, and then unzip it.

    > **_Note:_** You must run the VoltMXSSLPinningTool.jar file with Java 8 or later.

2.  Run the following command to save the entire certificate chain from leaf to root individual cert files in der format:  
    **java -jar VoltMXSSLPinningTool.jar --cert\_format DER --ssl\_host HOST\_NAME --ssl\_port PORT**  
    here, HOST\_NAME: The host name of your server.  
    PORT: HTTPS port on which your server is listening. It defaults to 443, if --ssl\_port option is not specified.
    

All the certificates are saved with their common name (CN) as the file names after replacing the non-alpha numeric characters with underscore ( \_ )

> **_Note:_** The Windows platform respects only .cer extension for certificates. So, you must change the extension of the generated certs from .der to .cer before performing pinning in the application.

You can get additional information on the supported command line arguments by using this command: **java -jar VoltMXSSLPinningTool.jar –help**

### Retrieve Certificates through openssl Command or Browser

Follow these steps to retrieve the certificate by using either the openssl command or by using any web browser:

*   Use the following openssl command to get the leaf certificate for a site.
    
    openssl s\_client -servername <HOST\_NAME> -showcerts -connect < HOST\_NAME >:<PORT> </dev/null 2>/dev/null|openssl x509 -outform PEM >mycertfile.pem  
    where, HOST\_NAME: The host name of your server.
    
    PORT: HTTPS port on which your server is listening. The port number is usually 443, unless configured differently.
    
    > **_Note:_** This command may return a different certificate when the server supports Server Name Indication (SNI).  
    So, while using with servers that support SNI, ensure that the openssl version is 1.1.1a or 1.0.2q or later, which has SNI extension enabled by default.
    
    > **_Note:_** You can verify the Open SSL version by using the following command: **openssl version**
    
*   Alternatively, you can retrieve the certificates by using browser by opening any HTTPS URL of the required domain in your web browser and export the certificate (leaf or any intermediate) by inspecting the certificates fetched from the HTTPS connection. Note that the certificate-exporting procedure may vary from browser to browser and from version to version of the same browser. You can consult the respective usage guides for the relevant procedure.
*   Use the following command to convert the certificate to .der format:
    
    *   For iOS and Android: **openssl x509 -outform der -in mycertfile.pem -out certificate.der**
    *   For Windows: **openssl x509 -outform der -in mycertfile.pem -out certificate.cer**
    
    > **_Note:_** Windows platform respects only .cer extension for certificates.  
    

> **_Note:_** The certificate that you choose for pinning impacts the level of security you achieve. The security level decreases as you navigate up the certificate chain from leaf to root certificate. You can pin either the leaf certificate in chain, or the intermediate CA certificate, or pin both the leaf and intermediate CA certificates simultaneously. Typically, the intermediate CA certificate is your organizational CA certificate.

Enable Certificate Pinning in iOS
---------------------------------

Follow these steps to enable Certificate Pinning in iOS:

1.  Bundle the certificate in the application.
    1.  Navigate to the application resources folder and create a **certs** folder in it.
    2.  **certs** folder need to be created in the following path:
        
        1.  \<workspace>/\<app>/resources/mobile/native/iphone/
            
        2.  \<workspace>/\<app>/resources/tablet/native/ipad/
            
    3.  Place server certificates inside the **certs** folder.
2.  Configure SSL Pinning.
    1.  In **infoplist\_configuration.json** file, add the entry **{ "allowbundledonly" = true }**. For more information on how to configure custom key value pairs in iOS platform, click [here](../../../Iris/iris_user_guide/Content/BuildAnAppForiOS.md#automatically-modify-info-plist-with-custom-key-value-pairs).

Enable Certificate Pinning in Android
-------------------------------------

Follow these steps to enable Certificate Pinning in Android:

1.  Navigate to the application resources folder.
2.  Copy the server certificate to the certs folder as shown. Create the folder hierarchy, if required.
    *   For mobile - \<workspace>/\<app>/resources/mobile/native/android/assets/certs/
        
    *   For tablet - \<workspace>/\<app>/resources/tablet/native/androidtab/assets/certs/
        
3.  In Volt MX Studio, right-click your application and go to **Properties > Native > Android**.
4.  From the **Network Trust Config** (or) **Allow Self Signed/Untrusted Certificates** drop-down list, select **Allow Pinned**.
5.  Build the application for Android platform.


