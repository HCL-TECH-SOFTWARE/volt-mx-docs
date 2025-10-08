
You are here: Cryptography API

# Cryptography API

Cryptography is the process of securing the information. It can be defined as the conversion of data into scrambled text to conceal its readability and meaning, and deciphering it using a key. This data can be sent across safely over public and private networks.

When your app has to transmit sensitive or critical information over the network (private or public), it needs to encrypt the information to ensure information security. A decryption mechanism is used to convert the encrypted text into a readable format.

There are two types of cryptography:

- **Symmetric Cryptography:** A single key is generated. The same key is used in encryption and decryption.
- **Asymmetric or Public Key Cryptography:** A public key and a private key are generated. The public key is used for encryption and the private key is used for decryption. The public key is available in a trusted certificate, whereas the private key is confidential and not shared. Encryption is done on the device and decryption on the server (that has access to the private key). As the private key is not exposed, we support only encryption using asymmetric cryptography.

The Cryptography API enables your app to provide information and services in a secure way. It uses the `voltmx.crypto Namespace` and the following API elements.

| Function                                                                                              | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [voltmx.crypto.asymmetricEncrypt](voltmx.crypto_functions.md#asymmetricEncrypt)                     | Encrypts the input string and returns the encrypted text. This API is available from V9 SP2 onwards.                                                              |
| [voltmx.crypto.asymmetricDecrypt](voltmx.crypto_functions.md#asymmetricDecrypt)                     | Decrypts the input encrypted string. This API is available from V9 SP2 onwards.                                                                                   |
| [voltmx.crypto.createHash](voltmx.crypto_functions.md#createHash)                                   | Provides your app with the ability to create a hash value in hexadecimal format for a given input string using a specified algorithm.                             |
| [voltmx.crypto.createHMacHash](voltmx.crypto_functions.md#voltmx.cry2)                              | Generates a hash-based message authentication code (HMAC) that verifies the data integrity and authenticity of the data.                                          |
| [voltmx.crypto.createPBKDF2Key](voltmx.crypto_functions.md#voltmx.cry)                              | Creates a Password-Based Key Derivation Function 2 (PBKDF2) key for protecting passwords and other similar tasks.                                                 |
| [voltmx.crypto.decrypt](voltmx.crypto_functions.md#decrypt)                                         | Provides the ability to decrypt the encrypted text with the specified key and algorithm. The API returns the decrypted text.                                      |
| [voltmx.crypto.deleteKey](voltmx.crypto_functions.md#deleteKey)                                     | Provides you the ability to delete a key from the device store.                                                                                                   |
| [voltmx.crypto.encrypt](voltmx.crypto_functions.md#encrypt)                                         | Provides the ability to encrypt the input text with the specified key and algorithm. The rawbytes of the encrypted text are returned.                             |
| [voltmx.crypto.generateAsymmetricKeyPair](voltmx.crypto_functions.md#generateAsymmetricKeyPair)     | Generates public and private keys for encryption and decryption processes.                                                                                        |
| [voltmx.crypto.generateSecureRandom](voltmx.crypto_functions.md#generateSecureRandom)               | Generates cryptographically secure random numbers. This API is available from V9 SP2 onwards.                                                                     |
| [voltmx.crypto.newKey](voltmx.crypto_functions.md#crypto.newkey)                                    | Creates a key for cryptography using the specified algorithm. The key created using this API is used for encrypting clear text and decrypting the encrypted data. |
| [voltmx.crypto.readKey](voltmx.crypto_functions.md#readKey)                                         | Provides you the ability to read the key from the device store.                                                                                                   |
| [voltmx.crypto.retrieveAsymmetricPublicKey](voltmx.crypto_functions.md#retrieveAsymmetricPublicKey) | Returns the public key for the alias that you provide. This API is available from V9 SP2 onwards.                                                                 |
| [voltmx.crypto.retrievePublicKey](voltmx.crypto_functions.md#retrievePublicKey)                     | Provides the ability to extract the public key from a base64 string of encoded X509 certificate or a locally packaged X509 certificate.                           |
| [voltmx.crypto.saveKey](voltmx.crypto_functions.md#saveKey)                                         | Enables your app to save a generated key on the device's storage.                                                                                                 |

The Cryptography API enables your app to provide information and services in a secure way.

For symmetric cryptography, create a new key by using the [voltmx.crypto.newKey](voltmx.crypto_functions.md#crypto.newkey) function, then save the key to the device’s local storage using the [voltmx.crypto.saveKey](voltmx.crypto_functions.md#saveKey) function. To read the key, use the [voltmx.crypto.readKey](voltmx.crypto_functions.md#readKey) function. With the generated key, you can now encode the input data by using the voltmx.crypto.encrypt function. Then, to decrypt the encoded data, use the [voltmx.crypto.decrypt](voltmx.crypto_functions.md#decrypt) function. If you want to delete any key from the device store, use the [voltmx.crypto.deleteKey](voltmx.crypto_functions.md#deleteKey) function.

For asymmetric cryptography, generate public and private keys using the [voltmx.crypto.generateAsymmetricKeyPair](voltmx.crypto_functions.md#generateAsymmetricKeyPair) function. Retrieve the generated keys by using the [voltmx.crypto.retrieveAsymmetricPublicKey](voltmx.crypto_functions.md#retrieveAsymmetricPublicKey) or [voltmx.crypto.retrievePublicKey](voltmx.crypto_functions.md#retrievePublicKey) functions. With the generated public key, you can now encode the input data using the [voltmx.crypto.asymmetricEncrypt](voltmx.crypto_functions.md#asymmetricEncrypt) function. Then, to decrypt the encoded data, use the [voltmx.crypto.asymmetricDecrypt](voltmx.crypto_functions.md#asymmetricDecrypt) function.

Hashing is a one-way encryption process unlike the cryptography. The generated hash value cannot be decrypted. For Hashing, generate a Password-Based Key Derivation Function 2 (PBKDF2) key using the [voltmx.crypto.createPBKDF2Key](voltmx.crypto_functions.md#voltmx.cry)function. With the generated key, you can encrypt the input text using the [voltmx.crypto.createHash](voltmx.crypto_functions.md#createHash)function. Once the hash value is generated, you can check the authenticity of the data using the [voltmx.crypto.createHMacHash](voltmx.crypto_functions.md#voltmx.cry2) function.

<!-- <div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/miyT0n35xUo" allowfullscreen=""></iframe></div>   -->

<p>
<iframe width="854" height="480" src="https://www.youtube.com/embed/miyT0n35xUo" frameborder="0" allowfullscreen>
</iframe>
</p>

<h2>Concepts</h2>

To understand how the Volt MX Iris Cryptography API works, you must be familiar with some basic concepts.

### Ciphers

Apps encrypt and decrypt data using _ciphers_. A cipher is an algorithm for performing encryption and decryption. The Volt MX Iris Cryptography API supports _block ciphers_.A block cipher is a symmetric key cipher that operates on fixed-length groups of bits called blocks. For example, a block cipher encryption algorithm takes a 128-bit block of plain text as input, and produces an output of a corresponding 128-bit block of cipher text. The process of transformation is governed by a secret key. Decryption is a similar process. The decryption algorithm takes a 128-bit block (in this example) of cipher text along with the secret key, and yields the original 128-bit block of plain text.

Block cipher algorithms like DES require their input to be an exact multiple of the block size. If the plain text to be encrypted is not an exact multiple, your app must add padding before encrypting the data.

The following table describes the supported padding for different cipher algorithms:

| Algorithm     | Platform               | Possible Padding                                   |
| ------------- | ---------------------- | -------------------------------------------------- |
| AES/TripleDES | iPhone                 | pkcs7(default)                                     |
|               | Android/Android Tablet | none,pkcs1,pkcs5(default)                          |
|               | SPA                    | ISO10126, ISO97971, zeropaddding, nopadding, pkcs7 |
| RSA           | iPhone                 | none,pkcs1(default)                                |
|               | Android/Android Tablet | none,pkcs5,pkcs1(default)                          |
|               | Windows                | pkcs1                                              |

RSA is an algorithm for public-key cryptography. It is the first algorithm known for both signing and encryption. This algorithm involves a public key and a private key. The public key can be known to everyone and is used for encrypting messages. Messages encrypted with the public key can only be decrypted using the private key.

### Modes

Ciphers are controlled by specific encryption _modes_. The mode specifies how the data will be encrypted and decrypted . The Volt MX Iris Cryptography API supports the following standard modes.

> - Electronic Codebook (ECB) mode
> - Cipher Block Chaining (CBC) mode
> - Cipher Feedback (CFB) mode
> - Output Feedback (OFB) mode
> - ECB and CBC are valid modes for the Block ciphers

Because these are standard modes, you can find extensive information on the Internet about them if you are not familiar with them.

The following table describes the supported modes for various ciphers.

> | Algorithm     | Platform               | Possible Modes          |
> | ------------- | ---------------------- | ----------------------- |
> | AES/TripleDES | iPhone                 | ecb,cbc(default)        |
> |               | Android                | ecb,cbc(default)        |
> |               | SPA                    | ecb, cfb, ofb, cbc, ctr |
> | RSA           | iPhone                 | ecb(default)            |
> |               | Android/Android Tablet | ecb(default)            |

### Initialization Vectors

The initialization vector (IV) adds randomness to the cipher text. As a result, if the same message is encrypted twice with the same key, the resulting cipher texts will be different, as long as your app uses different initialization vectors.

The length in bytes of the IV should be the same as the block size of the algorithm (AES and TripleDES). For AES the IV has to be 16 bytes (128 bits). For TripleDES the IV has to be 8 bytes (64 bits).

## Supported Algorithms

The Volt MX Iris Cryptography API provides the following algorithms.

### Symmetric Algorithms

For symmetric encryption and decryption, your app can use the following algorithms.

| Algorithm   | Supported Key Strengths (in bits) | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _aes_       | 128, 192, and 256                 | Advanced Encryption Standard (AES).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _tripledes_ | Triple Data Encryption Standard   | Triple Data Encryption Standard. This algorithm uses two keys for encryption and one key for decryption. The algorithm works as follows:<br><br>`encryptedtext = EK3(DK2(EK1(text to be encrypted)))`<br><br>The text is encrypted with _key1_, decrypted with _key2_, and then again encrypted with _key3_. Decryption is the reverse:<br><br>`decryptedtext = DK3(EK2(DK1(text to be decrypted)))`<br><br>_tripledes_ applies the DES cipher algorithm three times to each data block.<br><br>The following are the three different combinations of using this algorithm:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;• **Option 1**: K1, K2, and K3 are different (all three keys are independent)<br>&nbsp;&nbsp;&nbsp;&nbsp;• **Option 2**: K1 and K2 are different; K3=K1 (two keys are independent)<br>&nbsp;&nbsp;&nbsp;&nbsp;• **Option 3**: K1=K2=K3 (all three keys are identical)<br><br>**_Note:_** Volt MX Iris recommends using _Option 1_ as it is more secure than the other two options. |

### Asymmetric Algorithms

For asymmetric encryption, the Volt MX Iris Cryptography API supports the RSA algorithm, which is the industry standard. The key length for RSA must be 1024 bits or more.

### Platform Limitations

SPA does not support the RSA algorithm.

To view the functionality of the Cryptography API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/CryptographyAPI)

![](resources/prettify/onload.png)
