                            

You are here: Keychain API

Keychain API
============

Keychain services help you to securely store passwords, keys, certificates, and notes for one or more users. The Keychain API provides your app a mechanism to store chunks of user data (such as passwords) in an encrypted database. This credential information is saved in the device's keychain, and your app can retrieve and/ or remove the data if required.

The Keychain API uses `voltmx.keychain Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.keychain.remove](voltmx.keychain_functions.md#remove) | Deletes the credential information from the device's keychain. |
| [voltmx.keychain.retrieve](voltmx.keychain_functions.md#retrieve) | Retrieves the specified credential information from the device's keychain. |
| [voltmx.keychain.save](voltmx.keychain_functions.md#save) | Saves credential information in the device's keychain. |

 

To save users' credential information in the device's keychain, use the [voltmx.keychain.save](voltmx.keychain_functions.md#save) function. Then retrieve the saved information by using the [voltmx.keychain.retrieve](voltmx.keychain_functions.md#retrieve) function to log users on to your app's back-end services. This enables users to log in easily. The keychain data should be of type String; for storing any other type of data, you can use base64 encoded string. To delete any information, use the [voltmx.keychain.remove](voltmx.keychain_functions.md#remove) function.

### Keychain Functionality Across Various Platforms

**iOS**

Every iOS device has a single keychain that is available to all apps. In iOS, the keychain is automatically unlocked when the device is unlocked, so all applications always have access to their own unique keychain item data when used by the relevant user. Developers can store the data by passing a dictionary of securedata string, secure account name, and an identifier in order to identify the item in the keychain.

For more information on Keychain API for iOS, click [here](https://developer.apple.com/documentation/security/keychain_services).

Android

In Android, items saved in one app cannot be retrieved from another app. Developers need to store the data by passing a dictionary of securedata string and an identifier in order to identify the item in the keychain. This securedata string should be less than or equal to 245 characters.

> **_Important:_** Even though the namespace used is voltmx.keychain, for Android, the underlying implementation is Keystore APIs.

For more information on Keychain API for Android, click [here](https://developer.android.com/reference/android/security/KeyChain).

To view the functionality of the Keychain API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/KonyDocs/Sampleapps/tree/master/KeychainAPI)

![](resources/prettify/onload.png)
