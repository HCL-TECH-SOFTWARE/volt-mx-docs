Prerequisites
=============

*   Ventura or Sonoma
*   Xcode 15 or later
*   If you are using an untrusted self-signed (SSL) certificate with Volt Foundry installation, enable the \[KNYClient acceptSelfSignedCertificates\]; API. By default, native apps do not allow untrusted SSL certificates for HTTPS connection. For more details, refer to [SSL API](#self-signed_(SSL)).
    
*   If you are developing an iOS app extension using the `KonySDK.xcframework`, add the following frameworks in your app extension project build phases:
    
    *   Binary.xcframework
	*   CMS.xcframework
	*   KonyLogger.xcframework
	*   KonySDK.xcframework
	*   KonySyncV2.xcframework
	*   SDKCommons.xcframework
	*   SQLCipher.xcframework
	*   Task.xcframework

    
    After adding these frameworks, add the `KNYSharedContainerIdentifier` key to the extension app `info.plist`.
