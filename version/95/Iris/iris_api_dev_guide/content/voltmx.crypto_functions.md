
voltmx.crypto Namespace
=====================

The voltmx.crypto namespace provides the following API elements.

Functions
---------

The voltmx.crypto namespace contains the following functions.


<details close markdown="block"><summary id = "asymmetricEncrypt">voltmx.crypto.asymmetricEncrypt</summary>

* * *

This API encrypts the input string and returns the encrypted text. This API is available from V9 SP2 onwards.
<!-- This API encrypts the input string and returns the encrypted text. This API is available from V8 SP3 onwards. -->

### Syntax

```

voltmx.crypto.asymmetricEncrypt(alias, inputstring, propertiesTable)
```


<h3>Input Parameters</h3> 

  
<!-- | Parameters | Description |
| --- | --- |
| alias \[String\] - Mandatory | You can generate the value of the alias parameter by using [generateAsymmetricKeyPair API.](#generateAsymmetricKeyPair) |
| inputstring\[String/ RawBytes\] - Mandatory | The input text to be encrypted. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| propertiesTable \[Object\] - Mandatory | The applicable values for this parameter are as follows: **transformation** (String): The cipher transformation to be used. Possible transformation values are as follows:For iOS
RSA:rawRSA:PKCS1RSA:OAEP:SHA1RSA:OAEP:SHA224RSA:OAEP:SHA256RSA:OAEP:SHA384RSA:OAEP:SHA512RSA:OAEP:SHA1:AESGCMRSA:OAEP:SHA224:AESGCMRSA:OAEP:SHA256:AESGCMRSA:OAEP:SHA384:AESGCMRSA:OAEP:SHA512:AESGCMFor Android and Windows"RSA/ECB/PKCS1Padding""RSA/ECB/OAEPWithSHA-1AndMGF1Padding""RSA/ECB/OAEPWithSHA-224AndMGF1Padding""RSA/ECB/OAEPWithSHA-256AndMGF1Padding""RSA/ECB/OAEPWithSHA-384AndMGF1Padding""RSA/ECB/OAEPWithSHA-512AndMGF1Padding""RSA/ECB/OAEPPadding""RSA/NONE/NoPadding""RSA/NONE/PKCS1Padding""RSA/NONE/OAEPWithSHA-1AndMGF1Padding""RSA/NONE/OAEPWithSHA-224AndMGF1Padding""RSA/NONE/OAEPWithSHA-256AndMGF1Padding""RSA/NONE/OAEPWithSHA-384AndMGF1Padding""RSA/NONE/OAEPWithSHA-512AndMGF1Padding""RSA/NONE/OAEPPadding" | -->

<table>
    <tr>
        <th>Parameters</th>        
        <th>Description</th>
    </tr>    
    <tr>
        <td>alias [String] - Mandatory</td>        
        <td>You can generate the value of the alias parameter by using <a href="#generateAsymmetricKeyPair">generateAsymmetricKeyPair API</a>.</td>
    </tr>        
    <tr>
        <td>inputstring[String/ RawBytes] - Mandatory</td>        
        <td>The input text to be encrypted.
        <blockquote><em><b>Note:</b></em> RawBytes are only accepted on the Android platform. The content type of the RawBytes must be <code>voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY</code> or <code>voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY</code>.</blockquote>
        </td>
    </tr>   
    <tr>
        <td>propertiesTable [Object] - Mandatory</td>        
        <td>The applicable values for this parameter are as follows: <br>
        <ul>
        <li><b>transformation</b>(String):The cipher transformation to be used. Possible transformation values are as follows:
        <ul>
            <li>For iOS
                <ul>
                    <li>RSA:raw</li>                    
                    <li>RSA:PKCS1</li>                    
                    <li>RSA:OAEP:SHA1</li>                    
                    <li>RSA:OAEP:SHA224</li>                    
                    <li>RSA:OAEP:SHA256</li>                    
                    <li>RSA:OAEP:SHA384</li>                    
                    <li>RSA:OAEP:SHA512</li>                    
                    <li>RSA:OAEP:SHA1:AESGCM</li>                    
                    <li>RSA:OAEP:SHA224:AESGCM</li>                    
                    <li>RSA:OAEP:SHA256:AESGCM</li>                    
                    <li>RSA:OAEP:SHA384:AESGCM</li>                    
                    <li>RSA:OAEP:SHA512:AESGCM</li>
                </ul>
            </li>            
            <li>For Android
                <ul>
                    <ul>
                    <li>"RSA/ECB/PKCS1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-1AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-224AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-256AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-384AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-512AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPPadding"</li>                    
                    <li>"RSA/NONE/NoPadding"</li>                    
                    <li>"RSA/NONE/PKCS1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-1AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-224AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-256AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-384AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-512AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPPadding"</li>
                </ul>
                </ul>
            </li>
        </ul>
        </li>
        </ul>
        </td>
    </tr>
</table>



### Example

```

asymmetricEncrypt: function() {
    var key = this.view.tbxasyencrypt.text;

    //#ifdef iphone
    encryptedobject = voltmx.crypto.asymmetricEncrypt("VoltMX", key, {
        "transformation": "RSA:OAEP:SHA1"
    });
    var encryptBase64foriOS = voltmx.convertToBase64(encryptedobject);
    alert("The Encrypted text is as follows " + encryptBase64foriOS);
    //#endif
    //#ifdef andorid
    encryptedobject = voltmx.crypto.asymmetricEncrypt("VoltMX", key, {
        "transformation": "RSA/ECB/PKCS1Padding"
    });
    var encryptBase64forAndroid = voltmx.convertToBase64(encryptedobject);
    alert("The Encrypted text is as follows " + encryptBase64forAndroid);
    //#endif
},
```

### Return Value

rawbytes \[Object\] - The rawbytes for the encrypted version of the input text.

### Limitations

* If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.
* RSA can only encrypt data to a maximum amount of your keysize (256 bytes) – padding)/header data.
* keytype is not considered for Android.
* transformation is not considered for Windows.
* This API throws exceptions.
* This API does not work on Android devices with API level earlier than 18.
* On Android devices with API level 18 to 22 (both inclusive), only PKCS1Padding is supported ("RSA/ECB/PKCS1Padding" works on all devices with API level 18 and later).
* Both PKCS1Padding and OAEPPadding are supported on Android devices with API level 23 and later.
* OAEPPadding transformations are not supported on all Android devices, as there is no documentation from Android for this limitation.
* For iOS, this API works on devices with iOS 10 or later.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary id="asymmetricDecrypt">voltmx.crypto.asymmetricDecrypt</summary>

* * *

This API decrypts the input encrypted string. This API is available from V9 SP2 onwards.
<!-- This API decrypts the input encrypted string. This API is available from V8 SP3 onwards. -->

### Syntax

```

voltmx.crypto.asymmetricDecrypt(alias, encryptedContent, propertiesTable)
```

### Input Parameters

  
<!-- | Parameters | Description |
| --- | --- |
| alias \[String\] - Mandatory | You can generate the value of the alias parameter by using [generateAsymmetricKeyPair API.](#generateAsymmetricKeyPair) |
| encryptedContent \[Object\] - Mandatory | An object that contains the encrypted text to be decrypted. |
| propertiesTable \[Object\] - Mandatory | The applicable values for this parameter are as follows: **transformation (String)**: The cipher transformation to be used. Possible transformation values are as follows: For iOS RSA:raw RSA:PKCS1 RSA:OAEP:SHA1 RSA:OAEP:SHA224 RSA:OAEP:SHA256 RSA:OAEP:SHA384 RSA:OAEP:SHA512 RSA:OAEP:SHA1:AESGCM RSA:OAEP:SHA224:AESGCM RSA:OAEP:SHA256:AESGCM RSA:OAEP:SHA384:AESGCM RSA:OAEP:SHA512:AESGCM For Android and Windows"RSA/ECB/PKCS1Padding""RSA/ECB/OAEPWithSHA-1AndMGF1Padding""RSA/ECB/OAEPWithSHA-224AndMGF1Padding""RSA/ECB/OAEPWithSHA-256AndMGF1Padding""RSA/ECB/OAEPWithSHA-384AndMGF1Padding""RSA/ECB/OAEPWithSHA-512AndMGF1Padding""RSA/ECB/OAEPPadding""RSA/NONE/NoPadding""RSA/NONE/PKCS1Padding""RSA/NONE/OAEPWithSHA-1AndMGF1Padding""RSA/NONE/OAEPWithSHA-224AndMGF1Padding""RSA/NONE/OAEPWithSHA-256AndMGF1Padding""RSA/NONE/OAEPWithSHA-384AndMGF1Padding""RSA/NONE/OAEPWithSHA-512AndMGF1Padding""RSA/NONE/OAEPPadding" **decryptToRawBytes**: An optional Boolean value that specifies whether the input content must be decrypted to RawBytes. > **_Note:_** If you enable the decryptToRawBytes property, the decrypted text does not appear in the application memory in the String format. If the value is true, the encrypted input content is decrypted to RawBytes of the type voltmx.types.RawBytes.CONTENT\_TYPE\_BYTE\_ARRAY.If the value is false, the encrypted input content is decrypted to a String. > **_Note:_** This parameter is only available on the Android platform. | -->


<table>
    <tr>
        <th>Parameters</th>        
        <th>Description</th>
    </tr>    
    <tr>
        <td>alias [String] - Mandatory</td>        
        <td>You can generate the value of the alias parameter by using <a href="#generateAsymmetricKeyPair">generateAsymmetricKeyPair API</a>.</td>
    </tr>        
    <tr>
        <td>inputstring[String/ RawBytes] - Mandatory</td>        
        <td>An object that contains the encrypted text to be decrypted.
        </td>
    </tr>   
    <tr>
        <td>propertiesTable [Object] - Mandatory</td>        
        <td>The applicable values for this parameter are as follows: <br>
        <ul>
        <li><b>transformation</b>(String):The cipher transformation to be used. Possible transformation values are as follows:
        <ul>
            <li>For iOS
                <ul>
                    <li>RSA:raw</li>                    
                    <li>RSA:PKCS1</li>                    
                    <li>RSA:OAEP:SHA1</li>                    
                    <li>RSA:OAEP:SHA224</li>                    
                    <li>RSA:OAEP:SHA256</li>                    
                    <li>RSA:OAEP:SHA384</li>                    
                    <li>RSA:OAEP:SHA512</li>                    
                    <li>RSA:OAEP:SHA1:AESGCM</li>                    
                    <li>RSA:OAEP:SHA224:AESGCM</li>                    
                    <li>RSA:OAEP:SHA256:AESGCM</li>                    
                    <li>RSA:OAEP:SHA384:AESGCM</li>                    
                    <li>RSA:OAEP:SHA512:AESGCM</li>
                </ul>
            </li>            
            <li>For Android
                <ul>
                    <ul>
                    <li>"RSA/ECB/PKCS1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-1AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-224AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-256AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-384AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPWithSHA-512AndMGF1Padding"</li>                    
                    <li>"RSA/ECB/OAEPPadding"</li>                    
                    <li>"RSA/NONE/NoPadding"</li>                    
                    <li>"RSA/NONE/PKCS1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-1AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-224AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-256AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-384AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPWithSHA-512AndMGF1Padding"</li>                    
                    <li>"RSA/NONE/OAEPPadding"</li>
                </ul>
                </ul>
            </li>
            <li><b>decryptToRawBytes</b>: An optional Boolean value that specifies whether the input content must be decrypted to RawBytes.
            <blockquote><em><b>Note:</b></em> If you enable the decryptToRawBytes property, the decrypted text does not appear in the application memory in the String format.</blockquote>
            If the value is true, the encrypted input content is decrypted to RawBytes of the type voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY.<br>
            If the value is false, the encrypted input content is decrypted to a String.
            <blockquote><em><b>Note:</b></em> This parameter is only available on the Android platform.</blockquote>
            </li>
        </ul>
        </li>
        </ul>
        </td>
    </tr>
</table>





### Example

```

asymmetricDecrypt: function() {
    if (voltmx.os.deviceInfo().name == "iPhone") {
        var decryptedForiOS = voltmx.crypto.asymmetricDecrypt("VoltMX", encryptedobject, {
            "transformation": "RSA:OAEP:SHA1"
        });
        alert("The Decrypted Message is as follows " + decryptedForiOS);
    } else {
        var decryptedForAndroid = voltmx.crypto.asymmetricDecrypt("VoltMX", encryptedobject, {
            "transformation": "RSA/ECB/PKCS1Padding"
        });
        alert("The Decrypted Message is as follows " + decryptedForAndroid);
    }
},
```

### Return Value \[String\]

Returns the decrypted/cipher text.

### Limitations

* If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.
*   transformation is not considered for Windows.
*   keytype is not considered for Android
*   This API does not work on Android devices with API level earlier than 18.
*   On Android devices with API level 18 to 22 (both inclusive), only PKCS1Padding is supported ("RSA/ECB/PKCS1Padding" works on all devices with API level 18 and later).
*   Both PKCS1Padding and OAEPPadding are supported on Android devices with API level 23 and later.
*   OAEPPadding transformations are not supported on all Android devices, as there is no documentation from Android for this limitation.
*   For iOS, this API works on devices with iOS 10 or later.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary id="createHash">voltmx.crypto.createHash</summary>

* * *

This function provides your app with the ability to create a hash value in hexadecimal format for a given input string using a specified algorithm.

### Syntax

```

voltmx.crypto.createHash(  
    algo,  
    inputstring,options)
```

### Input Parameters
 
| Parameters | Description |
| --- | --- |
| algo \[String\] | The algorithm to be used for creating the hash value. For details, see the **Remarks** section below. |
| inputstring \[String/ RawBytes\] | The data to be hashed. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| options \[Dictionary\] - Optional | An optional parameter of type dictionary that contains key-value pairs. Following is a list of the supported keys: **returnBase64String**: When you set the value of this key as true, the API returns a base64encoded string. If the value is set as false (or not specified), the API returns a Hexadecimal String. |

### Example

```

createHash: function() {  
var algo="sha256";  
var inputstr="pleasecreatehash";  
 var options = {"returnBase64String":"true"};  
var myHashValue = voltmx.crypto.createHash(algo,inputstr,options);  
voltmx.print(“hash value ::”+myHashValue);  
},
```

### Return Values

This function returns a string containing the hash value of the _inputstring_ parameter created using the algorithm specified in the _algo_ parameter. This string is in hexadecimal format. The length of the string in bytes is as follows.

  
| Hashing Algorithm | Result Length (in bytes) | Result Length (in hexadecimal characters) |
| --- | --- | --- |
| sha1 | 20 | 40 |
| sha224 | 28 | 56 |
| sha256 | 32 | 64 |
| sha384 | 48 | 96 |
| sha512 | 64 | 128 |
| md2 | 16 | 32 |
| md4 | 16 | 32 |
| md5 | 16 | 32 |

### Exceptions

If an error occurs, this function throws on of the following errors.

| Error Code | Description |
| --- | --- |
| 2001 | An unsupported algorithm was specified for the _algo_ parameter. |
| 2002 | An invalid key strength was specified. |
| 2003 | A buffer of insufficient was provided for specified operation. |
| 2004 | A memory allocation failure occurred. |
| 2005 | The input data did not encode or encrypt properly. |
| 2006 | The specified name already exists. |
| 2007 | A key with the specified unique ID is not found. |

### Remarks

The `voltmx.crypto.createHash` function encrypts data by creating a hash of it. The first parameter to this function specifies the cipher. or the encryption algorithm, to use on the data. The _algo_ parameter can be one of the following values.

| Algorithm | Description |
| --- | --- |
| sha1 | Secure Hash Algorithm 1 (SHA-1) |
| sha224 | Secure Hash Algorithm 224 (SHA-224). |
| sha256 | Secure Hash Algorithm 224 (SHA-256). |
| sha384 | Secure Hash Algorithm 224 (SHA-384). |
| sha512 | Secure Hash Algorithm 224 (SHA-512). |
| md2 | Message-Digest Algorithm 2 (MD2). |
| md4 | Message-Digest Algorithm 4 (MD4). |
| md5 | Message-Digest Algorithm 5 (MD5). |

> **_Note:_** If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.

> **_Note:_** md5, sha1, sha256, sha384, and sha512 are supported for Windows.

### Platform Availability

    Available on all platforms.

* * *

</details>
<details close markdown="block"><summary id="createHMacHash">voltmx.crypto.createHMacHash</summary>

* * *

This function generates a hash-based message authentication code (HMAC) that verifies the data integrity and authenticity of the data.

### Syntax

```

voltmx.crypto.createHMacHash(  
    algo,  
    key,  
    message,options)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| algo \[String\] | The hashing algorithm. See the Remarks section below for more information. |
| key \[String/ RawBytes\] | The input key for the algorithm. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| message \[String/ RawBytes\] | The plain text message for which the hash is generated. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| options \[Dictionary\] - Optional | An optional parameter of type dictionary that contains key-value pairs. Following is a list of the supported keys: **returnBase64String**: When you set the value of this key as true, the API returns a base64encoded string. If the value is set as false (or not specified), the API returns a Hexadecimal String. |

### Example

```

createHMacHash: function() {  
    var algo = "sha1";  
    var message="test message to generate hash ";  
    var key=”key1”  
    var options = {"returnBase64String":"true"};  
    var myHashValue = voltmx.crypto.createHMacHash(algo, key, message,options);
    voltmx.print("myHashValue :" + myHashValue);  
},
```

### Return Values

This function returns a string that holds the hash value created using the specified algorithm for the given input string. This string is in a hexadecimal format. The length of the string in bytes is as follows.

  
| Hashing Algorithm | Result Length (in bytes) | Result Length (in hexadecimal characters) |
| --- | --- | --- |
| sha1 | 20 | 40 |
| sha224 | 28 | 56 |
| sha256 | 32 | 64 |
| sha384 | 48 | 96 |
| sha512 | 64 | 128 |
| md2 | 16 | 32 |
| md4 | 16 | 32 |
| md5 | 16 | 32 |

### Exceptions

This function throws the following exceptions.

| Error Code | Description |
| --- | --- |
| 100 | One or more input parameters are invalid. |
| 101 | An unsupported algorithm was specified for the _algo_ parameter. |
| 102 | An unknown error occurred. |
| 104 | The key strength was invalid. |
| 105 | A mandatory algorithm parameter is missing. |
| 109 | The specified item could not be found. |

### Remarks

The following table lists algorithms supported for each platform.

>   
> | Platform Name | Supported Algorithms |
> | --- | --- |
> | Android Default Implementation | MD5, SHA1, SHA224, SHA256, SHA384, SHA512 ( SHA224 supported only on API level 21 and above) |
> | Android OpenSSL Implementation (Bundle OpenSSL Library option is selected in Volt MX Iris) | MD5, SHA1, SHA224, SHA256, SHA384, SHA512 |
> | iOS | MD5,SHA1,SHA224,SHA256,SHA384,SHA512 |

> **_Note:_** If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.

> **_Note:_** From Volt MX IrisV9 release, the MD5 support is done through Java and not through the Bundle OpenSSL Library.

On Android, the _Bundle OpenSSL Library_ option is available in the **Application Properties > Native > Android** section. If this option is selected, OpenSSL library is bundled along with the application and use by this function. If the _Bundle OpenSSL Library_ option is not selected in Volt MX Iris, the default Java implementation offered by the underlying native Android platform is used.

If the device under testing does not support a the hashing algorithm your app selects, this function throws an exception.

### Platform Availability

    Available on iOS and Android.

* * *

</details>
<details close markdown="block"><summary id="createPBKDF2Key">voltmx.crypto.createPBKDF2Key</summary>

* * *

The `voltmx.crypto.createPBKDF2Key` function creates a Password-Based Key Derivation Function 2 (PBKDF2) key for protecting passwords and other similar tasks.

### Syntax

```

voltmx.crypto.createPBKDF2Key(  
    algo,  
    password,  
    salt,  
    iteration,  
    klen)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| algo \[String\] | The hashing algorithm used for creating the key. For a list of supported algorithms by platform, see the **Remarks** section below. |
| password \[String/ RawBytes\] | The master password from which a derived key is generated. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| salt \[String/ RawBytes\] | A random salt input string from a programmer. > **_Note:_** RawBytes are only accepted on the Android platform. The content type of the RawBytes must be `voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY` or `voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY`. |
| iteration | A number that specifies the desired number of iterations. Should be at least 10,000, as per NIST standards. |
| klen | An optional numeric parameter that specifies the desired length of the derived key in bits. If the key length is not specified, this value defaults to 256-bits. |

### Example

```

createPBKDF2KEY: function() {
    var algo = "SHA1";
    var password = this.view.txtPBKDF2Key.text;
    var PBKDF2Key = voltmx.crypto.createPBKDF2Key(algo, password, "salt", 10000, 256);
    this.view.lblPBKDF2Key.text = PBKDF2Key;
},
```

### Return Values

Returns the key created using the PBKDF2 algorithm.

### Exceptions

The following table shows the error codes for the exceptions that this function throws, as well as their descriptions .

| Error Code | Description |
| --- | --- |
| 100 | Invalid Input parameters |
| 101 | Unsupported algorithm |
| 102 | Unknown error |
| 104 | Invalid key strength |
| 105 | Sub algorithm parameter is mandatory |
| 109 | The specified item could not be found. |

### Remarks

voltmx.crypto.createPBKDF2Key API does not support md5 algorithm from Volt MX IrisV9 release.

If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.

The Password-Based Key Derivation Function 2 (PBKDF2) is a key derivation function that generates encryption keys of different lengths to protect passwords.

PBKDF2 applies a hash function (chosen by _algo_ parameter) to the input password or passphrase (specified in the _password_ parameter), along with a salt value and repeats the process as many times as is specified in the _iteration_ parameter to produce a derived key that is of the length given in the _klen_ parameter, if a value for _klen_ is provided. The resultant key is used as a cryptographic key in subsequent operations. The added computational work caused by a high number of iterations, or key stretching, makes it more difficult to crack a password. So when you specify the number of iterations, you need to balance security against app performance.

The following table lists algorithms supported for a specific platform. When your app calls the `voltmx.crypto.createPBKDF2Key` function, it must select one of the algorithms given in the table for the value of the _algo_ parameter.

> | Platform Name | Supported Algorithms |
> | --- | --- |
> | Android Default Implementation | SHA1 |
> | Android OpenSSL Implementation (Bundle Open SSL Library option is selected in Volt MX Iris) | SHA1, SHA224, SHA256, SHA384, SHA512 |
> | iOS | SHA1 , SHA224, SHA256, SHA384, SHA512 |
> | Windows | SHA1, SHA256, SHA384, SHA512, and MD5. |

In Android, the _Bundle OpenSSL Library_ option is available in **Application Properties > Native > Android** section. If this option is selected, the OpenSSL library is bundled along with the application.

*   If the _Bundle OpenSSL Library_ option is selected in Volt MX Iris, implementation in OpenSSL library is used.
*   If the _Bundle OpenSSL Library_ option is not selected in Volt MX Iris, default Java implementation offered by the native Android platform is used.

If the _klen_ parameter is provided to this function, you must make sure that this key length is supported by a corresponding encryption or decryption algorithm. For aes ciphers, the supported key lengths are 128, 192, or 256 bits. For tripledes ciphers, the possible key length is 192.

The PBKDF2 key that you create in a Responsive Web app cannot be used across other platforms.

### Platform Availability

Available in iOS, Android and Responsive Web.

* * *

</details>
<details close markdown="block"><summary id="decrypt">voltmx.crypto.decrypt</summary>

* * *

This function provides the ability to decrypt the encrypted text with the specified key and algorithm. The API returns the decrypted text.

### Syntax

```

voltmx.crypto.decrypt(  
    algo,  
    generatedkey,  
    encryptedRawbytes,  
    propertiesTable)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| algo | A string that specifies the decryption algorithm. For possible values, see the **Remarks** section below. |
| generatedkey | An object that holds the key to be used for decryption. |
| encryptedRawbytes | An object that contains the rawbytes of the encrypted text to be decrypted. |
| propertiesTable \[Table\] - Mandatory | A JavaScript object that contains key-value pairs necessary for decryption. For details, see the **Remarks** section below. |

### Example

```

decrypt: function() {
    try {
        var algo = "aes";
        var myEncryptedTextRa = "";

        var encryptDecryptKey = voltmx.crypto.newKey("passphrase", 128, {
            passphrasetext: ["inputstring1"],
            subalgo: "aes",
            passphrasehashalgo: "md5"
        });

        var prptobj = {
            padding: "pkcs5",
            mode: "cbc",
            initializationvector: "1234567890123456"
        };

        if (this.view.lblEncrypt.text === "" || this.view.lblEncrypt.text === null || this.view.lblEncrypt.text === "Please enter the text to encrypt") {
            this.view.lblDecrypt.text = "There is no encrypted text";
            return;
        }
        var str = this.view.lblEncrypt.text;
        //convertToRawBytes is not supported in SPA
        // 		if(voltmx.os.deviceInfo().name == "thinclient")
        // 		{
        // 			 myEncryptedTextRa = myEncryptedTextRaw;
        // 		}
        // 		else
        myEncryptedTextRa = voltmx.convertToRawBytes(str.substring(17));
        var myClearText = voltmx.crypto.decrypt(algo, encryptDecryptKey, myEncryptedTextRa, prptobj);

        this.view.lblDecrypt.text = "Decrypted text = " + myClearText.toString();

    } catch (err) {
        alert(typeof err);
        alert("Error in callbackDecryptAes : " + err);
    }
},
```

### Return Values

Returns a string chat holds the clear text decrypted from the encrypted rawbytes.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly.
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Remarks

The values that your app can use for the _algo_ parameter are as follows.

| Constant | Description |
| --- | --- |
| aes | Selects AES encryption. |
| tripledes | Selects Triple DES encryption. Not available on Windows platforms. |
| rsa | Selects RSA encryption. |


The JavaScript object in the _propertiesTable_ parameter must have the following format.

| Property | Description |
| --- | --- |
| decryptToRawBytes | **decryptToRawBytes**: An optional Boolean value that specifies whether the input content must be decrypted to RawBytes.> **_Note:_** If you enable the decryptToRawBytes property, the decrypted text does not appear in the application memory in the String format.If the value is true, the encrypted input content is decrypted to RawBytes of the type voltmx.types.RawBytes.CONTENT\_TYPE\_BYTE\_ARRAY.If the value is false, the encrypted input content is decrypted to a String.> **_Note:_** This parameter is only available on the Android platform. |
| initializationvector | A string that contains the initialization vector to use in performing the decryption. This property is applicable only if the algorithm is aes or tripledes. |
| mode | A string that specifies the encryption mode. |
| padding | A string that specifies the padding characters to use. If no padding characters are given and the length of the encrypted text block is less than the block size, the underlying platform throws a Bad Padding error. |

  

The `padding` property of the object that is passed into this function through the _propertiesTable_ parameter is used to pad the encrypted text so that the size of the encrypted text is the same as the block size used in the encryption/decryption algorithm selected in the _algo_ parameter to this function. The block size for the available algorithms is as follows.

| Property | Description |
| --- | --- |
| aes | 128 bits |
| tripledes | 64 bits |
| initializationvector | 1024 or 2048 bits |

  

For more information on padding, modes, and initialization vectors, see [Concepts](cryptography.md#concepts) in the [Cryptography API overviews](cryptography.md).

### Platform Availability

Available on all platforms except J2ME.

* * *

</details>
<details close markdown="block"><summary id="deleteKey">voltmx.crypto.deleteKey</summary>

* * *

This API provides you the ability to delete a key from the device store.

### Use Cases

You can delete the key from the device store if you are sure that you do not need that key anymore in the application.

### Syntax

```

voltmx.crypto.deleteKey([uniqueID](#uniqueID))
```

### Input Parameters

| Parameters |   |
| --- | --- |
| uniqueID \[String\] - Mandatory | Unique ID represents the key on the device store (this is the ID returned by voltmx.crypto.saveKey API). |

### Example

```

deleteKey: function() {
    voltmx.crypto.deleteKey(saveKey);
    this.view.lblKey.text = "The key is deleted";
},
```

### Return Values

None

### API Usage

You can use this API only to delete the keys that you have saved earlier on the device store,which is keys that have a unique ID associated with it.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly.
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Platform Availability

Available on all platforms.

> **_Note:_** You can use this API only to delete the keys that you have saved earlier on the device store, i.e., keys that have a unique ID associated with them.

* * *

</details>
<details close markdown="block"><summary id="encrypt">voltmx.crypto.encrypt</summary>

* * *

Converting data into an encoded format using a key is known as _encryption_. Encryption of data is done through symmetric cryptography. We support both symmetric and asymmetric encryption.

This API provides the ability to encrypt the input text with the specified key and algorithm. The rawbytes of the encrypted text are returned.

### Use Cases

You need to use encryption when you pass sensitive data like:

*   passwords
*   account numbers
*   account information
*   credit card information, and so on.

### Syntax

```

voltmx.crypto.encrypt([algo](#algo_encrypt), [generatedkey](#generatedkey), [inputstring](#inputstring_encrypt), [propertiesTable](#propertiesTable_encrypt))
```

### Input Parameters

<table style="margin-left: 0;margin-right: auto;"><colgroup><col> <col></colgroup><tbody><tr><td><a name="algo encrypt"></a>algo [String] - Mandatory</td><td>Specifies the algorithm using which the input string needs to be encrypted. Possible values are : aes tripledes rsa tripledes algorithm is not supported in Windows Platforms.</td></tr><tr><td><a name="generatedkey"></a>generatedkey [Object] - Mandatory</td><td>The key to be used for encryption. On Windows, this parameter is the name of the certificate that is included in the root directory of the Windows package, in “resources/common” <span class="MyVariablesMADP">Volt MX Iris</span>. On all other platforms, this API accepts the key generated using the voltmx.crypto.newKey and voltmx.crypto.createPBKDF2Key APIs. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The voltmx.crypto.createPBKDF2Key API is supported on iOS,&nbsp;Windows, and Android platforms.</td></tr><tr><td><a name="inputstring encrypt"></a>inputstring [String/ RawBytes] - Mandatory</td><td>Data that must be encrypted. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span><a name="RawBytes"></a>RawBytes are only accepted on the Android platform. The content type of the RawBytes must be <code class="codefirst">voltmx.types.RawBytes.CONTENT_TYPE_CHAR_ARRAY</code> or <code class="codefirst">voltmx.types.RawBytes.CONTENT_TYPE_BYTE_ARRAY</code>.</td></tr><tr><td><a name="propertiesTable encrypt"></a>propertiesTable [Table] - Mandatory</td><td><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is ignored in Windows. This Object contains the following key-value pairs: <b>padding</b> - a string that denotes the padding that needs to be applied. <b>mode</b> - a string that denotes the encryption mode. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This value is ignored for the rsa algorithm. <b>initializationvector</b> - a string that denotes the Initialization Vector to be used. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This parameter is applicable only if the subalgo is aes or tripledes.</td></tr></tbody></table>

### Examples  

```

Encrypt: function() {
    try {
        var algo = "aes";
        var inputstr = "";
        var encryptDecryptKey = voltmx.crypto.newKey("passphrase", 128, {
            passphrasetext: ["inputstring1"],
            subalgo: "aes",
            passphrasehashalgo: "md5"
        });

        if (this.view.textEncrypt.text === "" || this.view.textEncrypt.text === null) {
            this.view.lblEncrypt.text = "Please enter the text to encrypt";
            return;
        } else {
            inputstr = this.view.textEncrypt.text;
        }

        var prptobj = {
            padding: "pkcs5",
            mode: "cbc",
            initializationvector: "1234567890123456"
        };
        myEncryptedTextRaw = voltmx.crypto.encrypt(algo, encryptDecryptKey, inputstr, prptobj);
        var myEncryptedText = voltmx.convertToBase64(myEncryptedTextRaw);

        // 		if(voltmx.os.deviceInfo().name == "Windows 10")
        // 		{
        // 			this.view.lblEncrypt.text = "Encrypted text = "+myEncryptedTextRaw.toString();
        // 		}
        // 		else
        // 		{
        this.view.lblEncrypt.text = "Encrypted text = " + myEncryptedText.toString();
        // 		}

    } catch (err) {
        alert(typeof err);
        alert("Error in callbackEncryptAes : " + err);
    }
},
```

### Return Values

rawbytes \[Object\] - userdata

The rawbytes for the encrypted version of the input text.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly .
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary id="generateAsymmetricKeyPair">voltmx.crypto.generateAsymmetricKeyPair</summary>

* * *

This API is used to generate public and private keys for encryption and decryption processes. Typically, you can use the Public key to verify the digital signature and plain text data, whereas you can use the Private key to create a digital signature and to decrypt the text. This API is available from V9 SP2 onwards.
<!-- This API is used to generate public and private keys for encryption and decryption processes. Typically, you can use the Public key to verify the digital signature and plain text data, whereas you can use the Private key to create a digital signature and to decrypt the text. This API is available from V8 SP3 onwards. -->

### Syntax

```

voltmx.crypto.generateAsymmetricKeyPair(propertiesTable)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| propertiesTable \[Object\] - Mandatory | A key-value pair that you can use to generate asymmetric key pairs. The following input values are applicable for this parameter: **alias** (String) \[Mandatory\]: UTF-8 string. **keysize** (number): Size of the key that is to be generated by using this API. **cipher** \[String\]: The cipher algorithm to be used. The applicable value is RSA. **publicexponent** \[odd integer\]: The recommended value is 65337. **padding** \[bytes\]: For RSA algorithm, the possible padding modes are PKCS1, OAEP, and None. The recommended value is OAEP. The maximum byte lengths for the padding input value are as follows: PKCS1: < b - 11 OAEP: < b - 41 None: < b **mode** \[String\]: Block mode. The possible values are ECB and you can also pass an empty string to use the platform default mode. **digest** \[String\]: The hashing algorithm to be used. The possible values are SHA-1, SHA-256, SHA-224, SHA-384, and SHA-512. |

### Example

```

generateAsymmetricKeyPair: function() {
    var isGenerated = voltmx.crypto.generateAsymmetricKeyPair({
        "alias": "VoltMX",
        "algo": "RSA",
        "padding": "PKCS1Padding",
        "cipher": "RSA",
        "mode": "ECB",
        "digest": "",
        "keysize": "2048",
        "publicexponent": 3
    });
    alert("The Generated Key is " + isGenerated);
},
```

Return Value \[Boolean\]

Status of the key value generation.

### Limitations

* If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.
*   For iOS
    *   publicexponent, padding, digest, and mode are not considered for key generation.
    *   This API is supported on devices with iOS 10.0 or later.
*   For Android
    *   This API does not work on devices with API level earlier than 18.
    *   Supported publicexponent values: 3 and 65537.
        
    *   Possible digest values: SHA-1, SHA-224, SHA-256, SHA-384, SHA-512. If there is no digest required, use an empty string as the digest value.
        
    *   Possible mode value: ECB.
        
*   For Windows
    *   The 'None' padding is not supported.
        
    *   publicexponent and mode are not considered.
        
    *   SHA-224 is not supported.
        
    *   Typical key sizes are 512 bits, 1024 bits, 2048 bits, or 4096 bits.
        

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary id="generateSecureRandom">voltmx.crypto.generateSecureRandom</summary>

* * *

This API is used to generate cryptographically secure random numbers. This API is available from V9 SP2 onwards.
<!-- This API is used to generate cryptographically secure random numbers. This API is available from V8 SP3 onwards. -->

### Syntax

```

voltmx.crypto.generateSecureRandom(propertiesTable)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| propertiesTable \[Object\] - Mandatory | A key-value pair that you can use to send the type and size of the key, in order to generate secure random cryptographic numbers. |

*   **type** \[String\]: The possible values for the type key are 'bytes' and 'base64.'
*   **size** \[bytes\]: The length of the random key to be generated.

### Example

```

voltmx.crypto.generateSecureRandom({
    type:”bytes”, 
    size: < length >
});
```

Return Value \[Object\]

Secure random key of the bytes array or Base64 string of the specified length.

### Limitations

*   For Android
    *   This API does not work on devices with API level earlier than 18.
        

### Platform Availability

*   Android
*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary id="newKey">voltmx.crypto.newKey</summary>

* * *

This API allows you to create a key for cryptography using the specified algorithm. The key created using this API is used for encrypting clear text and decrypting the encrypted data.

Use Case

You can use this API to generate cryptographic keys when you want to transmit information in a secured manner over the private or public networks.

### Syntax

```

voltmx.crypto.newKey(algo, keystrength, propertiesTable);
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| algo \[String\] - Mandatory | Scheme using which the key is to be created. Possible values are: <br/> <b>.</b> _securerandom -_ uses a secure random number as the scheme to generate a key.<br/> This scheme always produces a unique key. <br/> <b>.</b> _random -_ uses a random number as the scheme to generate a key. This scheme always produces a unique key.<br/> **_Note:_** _random_ and _securerandom_ are supported only on iPhone.<br/> **_Note:_** There is no differentiation between _securerandom_ and _random_ on Android. <br/> <b>.</b> _passphrase_ - if this is the scheme, you need to pass the exact passphrase using which the key needs to be generated. The _passphrasetext_ (an array of strings) is passed in the _properties_ (JavaScript) parameter. The _passphrase_ scheme always produces the same key for the same passphrase text. <br/> **_Note:_** Only Passphrase is supported on SPA. |
| keystrength \[Number\] - Mandatory | Number of bits that indicate the key strength. If the _subalgo_ is:<br/> <b>.</b> _aes_ - possible value is 128, 192, 256.<br/> <b>.</b> _tripledes_ - possible value is 192.<br/> **_Note:_**<br/> <b>.</b> _tripledes_ Algorithm is not supported in Windows Platforms.<br/> <b>.</b> _tripledes_ - In Android and iOS, if the supplied key length is not equal to 192 an exception will be thrown with error message Invalid Keystrength and error code 104.<br/> <b>.</b> On iPhone platform, keystrength of 192 is supported only if the algorithm is _random_ or _securerandom_.You cannot apply a _passphrasehashlogo_ to the key when the algorithm is _random_ or _securerandom_. <br/> <b>.</b> As Android has deprecated support for various BouncyCastle implementations, the voltmx.crypto.newKey API that uses the tripledes algorithm with the keystrength of 192 is not supported on Android 12 devices. To use the voltmx.crypto.newKey API with the tripleDES algorithm and the keystrength of 192 on Android 12, enable the **useExternalBouncyCastleLibrary** property in the androidbuild.properties file.|
| propertiesTable \[Table\] - Mandatory | <b>.</b> _passphrasetext_ \[Array of Strings \]- the exact passphrase using which the key needs to be generated if the scheme is _passphrase_.<br/> **_Note:_** This value in the table is mandatory only if the scheme is _passphrase_.<br/> If the subalgo is aes, it contains a single string, whereas if the subalgo is tripledes, it contains three strings.<br/>For example:<br/> <b>.</b> for _aes_, passphrasetext = {"inputstring1"}<br/> <b>.</b> for _tripledes_, passphrasetext = \["TestStr1","TestStr2","TestStr3"\]<br/> **_Note:_** _passphrase_ should contain at least 3 characters (24 bytes), else the API throws an _illegalargument_ exception.<br/> **_Note:_** _tripledes_ - in Android, if the passphrase length is less than 24 bytes or greater than 24 bytes an exception will be thrown with error message Invalid Keystrength and error code 104. <br/> <b>.</b> _subalgo_ - represents the key algorithm that is used to create the key. This is a mandatory parameter (irrespective of the scheme). Possible values are: _aes_ and _tripledes_.<br/> <b>.</b> _passphrasehashlogo_ - hashing algorithm to be applied for the passphrase text. (applicable only on iPhone). <br/> **_Note:_** This value in the table is applicable only if the scheme is _passphrase_.<br/> Possible values for the hash algorithm are:<br/> <b>.</b> _md2_ (for key strength of 128)<br/> <b>.</b> _md4_ (for key strength of 128)<br/> <b>.</b> _md5_ (for key strength of 128)<br/> <b>.</b> _sha2_ (for key strength of 256) |

### Example

```

createNewKey: function() {
    newKey = voltmx.crypto.newKey("passphrase", 128, {
        passphrasetext: ["inputstring1"],
        subalgo: "aes",
        passphrasehashalgo: "md2"
    });
    this.view.lblKey.text = JSON.stringify(newKey);
},
```

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly .
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Return Values

The following are the return values for this API:

_key \[userdata\] - object_

The key that is created using the specified algorithm.

### API Usage

The recommended key strengths are as follows for this API:

*   _aes_ - 128
*   _tripledes_ - 192.

### Platform Availability

Available on all platforms except J2ME.

### Limitations

* If you build a Web or Native App with strict mode enabled, the SHA1, MD2, MD4, and MD5 hashing algorithms are not supported. If you use any of those algorithms in strict mode, you will receive an "Unsupported algorithm" error message.

* * *

</details>
<details close markdown="block"><summary id="readKey">voltmx.crypto.readKey</summary>

* * *

This API provides you the ability to read the key from the device store.

> **_Note:_** From V9 SP2 onwards, the readKey data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.
<!-- > **_Note:_** From V8 SP4 onwards, the readKey data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms. -->

> **_Note:_** Device store in case of iOS is Keychain. Keychain in iOS is the most secured place to store the crypto keys. saveKey and readKey APIs save and read from the Keychain. The Keychain can be shared between the applications provisioned and signed by the same certificate vendor.

> **_Important:_** To avoid accidental overwrite of one application content by the other application content, it is recommended to use the unique application specific identifier while saving and reading the crypto keys using saveKey and readKey APIs.

Use Cases

You can read the key from the device store if you want to use that key for encryption or decryption.

### Syntax

```

voltmx.crypto.readKey([uniqueID](#uniqueID_Read))
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| uniqueID \[String\] - Mandatory | Unique ID represents the key on the device store (this is the ID returned by voltmx.crypto.saveKey API). |

### Example

```

readKey: function() {
    var read = voltmx.crypto.readKey(saveKey);
    this.view.lblKey.text = JSON.stringify(read);
}
```

The **constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED** parameter is an optional parameter. It indicates when a keychain item is accessible.

The following values are supported:

*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED : The data in the keychain item can be accessed when a device is unlocked by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED\_THIS\_DEVICE\_ONLY: The data in the keychain item can be accessed only when a specific device is unlocked by the user
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS\_THIS\_DEVICE\_ONLY: The data in the keychain item can always be accessed regardless of whether a specific device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_PASSCODE\_SET\_THIS\_DEVICE\_ONLY: The data in the keychain can only be accessed when the device is unlocked. This is only available if a passcode is set on the device.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS: The data in the keychain item can always be accessed regardless of whether a device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK\_THIS\_DEVICE\_ONLY: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.

### Return Values

The following are the return values for this API:

key \[rawbytes - object\]

This key is generated using aes, tripledes, or RSA algorithms and saved on the device store.

### API Usage

You can use this API only to read the keys that you have saved earlier on the device store, i.e., keys that have a unique ID associated with them.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly.
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary id="retrieveAsymmetricPublicKey">voltmx.crypto.retrieveAsymmetricPublicKey</summary>

* * *

This API returns the public key for the alias that you provide. This API is available from V9 SP2 onwards.
<!-- This API returns the public key for the alias that you provide. This API is available from V8 SP3 onwards. -->

### Syntax

```

voltmx.crypto.retrieveAsymmetricPublicKey(alias)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| alias \[String\] | The alias value generated by using [generateAsymmetricKeyPair API.](#generateAsymmetricKeyPair) |

### Example

```

retrieveAsymmetricKey: function() {
    var key = voltmx.crypto.retrieveAsymmetricPublicKey("VoltMX");
    alert("The Asymmetric key is " + key);
}
```

Return Value \[String\]

Returns the public part of the asymmetric key-pair for the provided alias.

### Limitations

*   For iOS
    *   This API works on devices with iOS 10 or later.
*   For Android
    *   This API does not work on devices with API level earlier than 18.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *

</details>
<details close markdown="block"><summary id="retrievePublicKey">voltmx.crypto.retrievePublicKey</summary>

* * *

Public Key Infrastructure (PKI) is the mechanism to secure the public networks (like Internet) to safely and securely transmit data with the use of keys. PKI assumes the use of public key cryptography ([asymmetric cryptography](cryptography.md#AsymmCrypto)). PKI is the most common method to authenticate the message sender or encrypt the message. PKI consists of a Certificate Authority (CA) that issues and verifies digital certificates (trusted certificates). A certificate includes the public key or information about the public key.

> **_Note:_** Due to security reasons, Thin Client or Mobile Web applications cannot access public/private keys or certificates that are on the server.

This API provides the ability to extract the public key from a base64 string of encoded X509 certificate or a locally packaged X509 certificate.

### Syntax

```

voltmx.crypto.retrievePublicKey([algo](#algo_retrievepk), [inputsource](#inputsource_retrievepk), [islocalresource](#islocalresource_retrievepk))

```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| algo \[String\] - Mandatory | The algorithm used for the public key. Possible values are: RSA AES - Supported only on Windows platforms. |
| inputsource \[String\] - Mandatory | This parameter indicates the name of the input source certificate from which the key needs to be retrieved. > **_Note:_** The certificate must be present in the resources folder. > **_Note:_** In case of the Android platform, place the .cer file at the ../resources/mobile/native/android/assets/ location. |
| islocalresource \[Boolean\] - Mandatory | This flag defines how the inputsource string needs to be interpreted. islocalresource is **false** - represents that the input source is base64 string of X509 certificate. islocalresource is **true** - represents that the input source is name of the local resource for the certificate. For example, _public.cer_. |

### Example

```

var myKey = voltmx.crypto.retrievePublicKey("rsa", "public.cer", true);
```

### Return Values

publickey - userdata \[Object\]

The public key extracted from the certificate.

### Rules and Restrictions

*   Self-signed certificates are not supported on Android.
*   iOS supports only Distinguished Encoding Rules (DER) representation of an X.509 certificate, when input source is certificate.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly.
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

### Platform Availability

Available on all platforms except Windows, Service Side Mobile Web, Desktop Web, and SPA.

* * *

</details>
<details close markdown="block"><summary id="saveKey">voltmx.crypto.saveKey</summary>

* * *

This function allows your app to save a generated key on the device's storage.

> **_Note:_** From V9 SP2 onwards, the saveKey data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.
<!-- > **_Note:_** From V8 SP4 onwards, the saveKey data for a Volt MX App child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms. -->

### Syntax

```

voltmx.crypto.saveKey(  
    name,  
    key)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| name | A string that specifies a unique name with which you want to save the key on the device store. |
| key | An object that holds the key that you want to save on the device. |

### Example  

```

saveTheKey: function() {
    saveKey = voltmx.crypto.saveKey("SavedKey", newKey, constants.VOLTMX_KEYCHAIN_ITEM_ACCESSIBLE_WHEN_UNLOCKED);
    this.view.lblKey.text = "The Key is Saved";
},
```

The **constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED** parameter is an optional parameter. It indicates when a keychain item is accessible.

### The following values are supported:

*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED : The data in the keychain item can be accessed when a device is unlocked by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_UNLOCKED\_THIS\_DEVICE\_ONLY: The data in the keychain item can be accessed only when a specific device is unlocked by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS\_THIS\_DEVICE\_ONLY: The data in the keychain item can always be accessed regardless of whether a specific device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_WHEN\_PASSCODE\_SET\_THIS\_DEVICE\_ONLY: The data in the keychain can only be accessed when the device is unlocked. This is only available if a passcode is set on the device.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_ALWAYS: The data in the keychain item can always be accessed regardless of whether a device is locked.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.
*   constants.VOLTMX\_KEYCHAIN\_ITEM\_ACCESSIBLE\_AFTER\_FIRST\_UNLOCK\_THIS\_DEVICE\_ONLY: The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.

### Return Values

Returns a string containing a unique ID that represents the saved key on the device's storage. Your app can access the key from the device's storage using this unique ID. The unique ID is determined by the system. On some platforms it might be the same as the name in the name parameter. However, that is not the case on all platforms.

### Exceptions

**CryptoError:** Thrown by Crypto API.Various error conditions related to CryptoError will be covered through the following error codes.

| Constant | Description |
| --- | --- |
| 2001 | The encryption algorithm is unsupported on the device. |
| 2002 | An invalid key length was specified. |
| 2003 | Insufficient buffer space was provided for operation. |
| 2004 | There was a memory allocation failure. |
| 2005 | The input data did not encode or encrypt properly. |
| 2006 | The specified name already exists |
| 2007 | A key with the specified unique ID is not found. |

  

### Remarks

Your app can use this function to save the generated symmetric keys. If a key does not exist with the given name, this function creates a key. If a key exists with the given name, this function saves the key onto the device's storage.

The device store on iOS is the keychain. The keychain on iOS is the most secure place to store the cryptographic keys. saveKey and readKey APIs save to and read from the keychain. The keychain can be shared between applications that are provisioned and signed by the same certificate vendor.

In Android, the voltmx.crypto.saveKey saves the crypto key in the application's private file system. This crypto key is encrypted.

> **_Important:_** To avoid accidentally overwriting one application's keys by another application, Volt MX Iris recommends that your app use a unique application-specific identifier while saving and reading keys.

### Platform Availability

Available on all platforms.

* * *
</details>

![](resources/prettify/onload.png)
