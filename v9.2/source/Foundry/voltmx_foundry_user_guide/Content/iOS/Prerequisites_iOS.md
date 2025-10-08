                             

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > Prerequisites

Prerequisites
=============

*   Mavericks OS X or Mountain Lion OS X
*   Xcode 5.1
*   If you are using an untrusted self-signed (SSL) certificate with Volt MX Foundry installation, enable the \[KNYClient acceptSelfSignedCertificates\]; API, by default native apps do not allow untrusted SSL certificates for HTTPS connection. For more details, refer to [SSL API](#self-signed_(SSL)).
    
*   If you are developing an iOS app extension using the `KonySDK.xcframework`, add the following frameworks in your app extension project build phases:
    
    *   SDKCommons.framework
    *   Binary.framework
    *   CMS.framework
    *   voltmxLogger.framework
    
    After adding these frameworks, add the `KNYSharedContainerIdentifier` key to the extension app `info.plist`.
