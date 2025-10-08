                            


voltmx.keychain Namespace
=======================

The voltmx.keychain namespace consists of functions that enable your app to access a device's keychain.

Functions
---------

<details close markdown="block"><summary>voltmx.keychain.remove</summary>

* * *

Deletes the credential information from the device's keychain. It deletes secure data from the keychain with the provided identifier.

### Syntax
```

voltmx.keychain.remove(  
    identifier);
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| identifier | A JavaScript Dictionary object containing a key-value pair that specifies the identifier of the credential information to remove. The only supported key is 'identifier.' Its value must be a string that contains the credentialInfo's unique identifier. |

### Example

```

//Use the below function to remove sensitive data from your device keychain
  remove: function() {
    var cred = {
        "identifier": "Apple"
    };
    voltmx.keychain.remove(cred);
    alert("The details are removed");
}
```

### Return Values

If the credential information is successfully removed, 0 is the return value. If the credentials were not removed or not found, the appropriate error code is the return value.

**Android-specific Error/Success Codes**

| Error/Success Code | Error/Success Message |
| --- | --- |
| 0 | SUCESSCODE |
| \-50 | INVALID\_PARAM\_ERRORCODE |
| \-25311 | SIZE\_NOT\_ALLOWED\_ERRORCODE |
| \-25300 | ITEM\_NOT\_FOUND\_ERRORCODE |
| \-36 | IO\_ERRORCODE |
| \-4 | API\_NOT\_IMPLEMENTED\_ERRORCODE |

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.keychain.retrieve</summary>

* * *

Retrieves the specified credential information from the device's keychain.

### Syntax
```

voltmx.keychain.retrieve(  
    identifier);
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| identifier | A JavaScript Dictionary object containing a key-value pair that specifies the identifier of the credential information to retrieve. They only supported key is "identifier". Its value must be a string that contains the credential info's unique identifier. |

### Example

```

//Use the below function to retrieve sensitive data from your device keychain   
 retrieve: function() {
    var cred = {
        "identifier": "Apple"
    };
    var credDetails = voltmx.keychain.retrieve(cred);
    alert("The details retreived are " + JSON.stringify(credDetails));
},
```

### Return Values

If successful, a JavaScript Dictionary object containing the retrieved secure data is returned. If the retrieval process fails, an appropriate error code is returned. If the data does not exist in the devuce, an empty dictionary is returned.

**Android-specific Error/Success Codes**

| Error/Success Code | Error/Success Message |
| --- | --- |
| 0 | SUCESSCODE |
| \-50 | INVALID\_PARAM\_ERRORCODE |
| \-25311 | SIZE\_NOT\_ALLOWED\_ERRORCODE |
| \-25300 | ITEM\_NOT\_FOUND\_ERRORCODE |
| \-36 | IO\_ERRORCODE |
| \-4 | API\_NOT\_IMPLEMENTED\_ERRORCODE |

### Platform Availability

*   iOS
*   Android

* * *

</details>
<details close markdown="block"><summary>voltmx.keychain.save</summary> 

* * *

Saves credential information in the device's keychain.

### Syntax
```

voltmx.keychain.save(  
    credentialInfo);
```

### Input Parameters

**credentialInfo**

A JavaScript Dictionary object that contains a key-value pair that specifies the identifier of the credential information to save. They following keys are supported.

| Key | Value |
| --- | --- |
| identifier | A mandatory key that holds a string that uniquely identifies the credential information. |
| secureaccount | An iOS-specific mandatory key that contains a string that specifies the account information to store in the keychain. |
| secureAccessControl | An iOS-specific optional key that contains information about how a keychain item can be used. |
| securedata | A mandatory key which stores a string that contains the secure data to store in the keychain. |
| encryptionPaddingType [ optional ]  | Android specific parameter to set the padding scheme with which the key can be used when encrypting/decrypting. Attempts to use the key with any other padding scheme then it will be fallback to default scheme of type “PKCSPADDING”.  <br>The possible values are as follows:<li>Constants.PKCSPADDING</li><li>Constants.OEAPPADDING</li><b>Note:</b><br> 1. It is always recommended to use the latest algorithms provided in the constants.<br> 2. If user wants to migrate to latest algorithms, user has to first retrieve the older values and migrate to the latest ones. |

### encryptionPaddingType possible values: 

| Constant Value  | Description  |
| --- | --- |
| Constants.OEAPPADDING  | RSA Optimal Asymmetric Encryption Padding (OAEP) scheme.  |
| Constants.PKCSPADDING | RSA PKCS#1 v1.5 padding scheme for encryption. |




### Example 1 (for iOS)

```

//Use the below function to save sensitive data  to your device keychain
  save: function() {
    var cred = {
        "securedata": JSON.stringify(this.view.tbxData.text),
        "secureaccount": "John",
        "identifier": "Apple",
    };
    voltmx.keychain.save(cred);
    alert("The details are successfully stored");
},
```

Here, **identifier** and **securedata** are **mandatory** parameters.

**secureaccount** is a **mandatory iOS-specific** key, whereas **accessibility** and **secureAccessControl** are **optional iOS-specific** parameters.

The **accessibility** parameter defines how you can access a keychain item. The constant values for the **accessibility** key are as follows:

*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED : The data in the keychain item can be accessed when a device is unlocked by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED\_THIS\_DEVICE\_ONLY: The data in the keychain item can be accessed only when a specific device is unlocked by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS\_THIS\_DEVICE\_ONLY: The data in the keychain item can always be accessed regardless of whether a specific device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_PASSCODE\_SET\_THIS\_DEVICE\_ONLY: The data in the keychain can only be accessed when the device is unlocked. This is only available if a passcode is set on the device.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS: The data in the keychain item can always be accessed regardless of whether a device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK\_THIS\_DEVICE\_ONLY: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.

The **secureAccessControl** parameter contains information about how a keychain item can be used. The constant values for the **secureAccessControl** key are as follows:

*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_USER\_PRESENCE. The Touch ID feature does not have to be available or enrolled to use this constant. The keychain item is still accessible by Touch ID even if fingerprint authentication for any finger(s) is added or removed.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_TOUCHID\_ANY: Constraint: The Touch ID feature must be available and at least one finger must be enrolled, otherwise voltmx.keychain.save throws an exception. The keychain item is still accessible by Touch ID even if fingerprint authentication for any finger(s) is added or removed.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_TOUCHID\_CURRENT\_SET: Constraint: The Touch ID feature must be available and at least one finger must be enrolled, otherwise voltmx.keychain.save throws an exception. When fingerprint authentication for any finger(s) is added or removed, the keychain item becomes invalid.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_DEVICE\_PASSCODE: Constraint: The Device passcode feature must be available and created by the user.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_OR: Constraint logic operation: When using more than one constraint, at least one of the constraints must be satisfied.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_AND: Constraint logic operation: When using more than one constraint, all constraints must be satisfied.
*   constants.VOLTMX\_KEYCHAIN\_ACCESS\_CONTROL\_APPLICATION\_PASSWORD: The application-provided password to generate the data encryption key. This is not a constraint, but an additional item encryption mechanism.

### Example 2 (for Android)

```

var cred = {
    "securedata": "Appleseed",
    "identifier": "Apple"
};
voltmx.keychain.save(cred);
```

Here, **identifier** and **securedata** are **mandatory** parameters. The 'securedata' string must be less than or equal to 245 characters. Also, items saved in one Android app cannot be retrieved from another app.

### Return Values

Returns an error dictionary containing an error number and error message.

**Android-specific Error/Success Codes**

| Error/Success Code | Error/Success Message |
| --- | --- |
| 0 | SUCESSCODE |
| \-50 | INVALID\_PARAM\_ERRORCODE |
| \-25311 | SIZE\_NOT\_ALLOWED\_ERRORCODE |
| \-25300 | ITEM\_NOT\_FOUND\_ERRORCODE |
| \-36 | IO\_ERRORCODE |
| \-4 | API\_NOT\_IMPLEMENTED\_ERRORCODE |

### Platform Availability

*   iOS
*   Android

* * *

Usage
-----

To store the required credential information in the device's keychain, you must call the [voltmx.keychain.save](#save) function. Your app can access the saved credential information by calling the [voltmx.keychain.retrieve](#retrieve) function. If you want to remove any information that is no longer required, you need to call the [voltmx.keychain.remove](#remove) function.

</details>
![](resources/prettify/onload.png)
