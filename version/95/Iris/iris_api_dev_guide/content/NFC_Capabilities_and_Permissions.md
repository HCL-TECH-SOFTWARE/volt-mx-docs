                            
NFC Capabilities and Permissions
=============================

  
The following configuration needs to be set up for IRIS application to use NFC Tag API’s.<br>
<b>IOS</b>

IOS Requires Near Field Communication Tag Reader Session Formats Entitlement, find [here](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Adding_iOS_app_Capabilities.html) how we can add iOS capabilities. For more info check apple documents [here](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_nfc_readersession_formats?language=objc). Add below configuration to enable NFC for your iris project:

`"com.apple.developer.nfc.readersession.formats": ["TAG"]`

IOS also needs usage description in info.plist. Add the description with key NFCReaderUsageDescription.

<b>Android</b>

<b>To enable the NFC function for Android below permission must be added through Iris</b><br>
<b>< uses-permission android:name="android.permission.NFC"/ ></b>

>**Note:** If this permission is not added, NFC functionality for Android will not be enabled.

Depending on the application functionality, you may need to configure the intent filters if your application must listen to any data scanned from the NFC tag.

Detailed description related to Android manifest configuration is available [here](https://github01.hclpnp.com/pages/phoenix-temenos/volt-mx-doc-opnsrc/95/docs/documentation/Iris/iris_api_dev_guide/content/Android_NFC_Manifest_Configuration.html)

You can also check the official Android link for NFC [here](https://developer.android.com/develop/connectivity/nfc/nfc#manifest).
