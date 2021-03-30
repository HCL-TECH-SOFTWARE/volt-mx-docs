/**@class com.android.server.locksettings.recoverablekeystore.PlatformEncryptionKey
@extends java.lang.Object

 Private key stored in AndroidKeyStore. Used to wrap recoverable keys before writing them to disk.

 <p>Identified by a generation ID, which increments whenever a new platform key is generated. A
 new key must be generated whenever the user disables their lock screen, as the decryption key is
 tied to lock-screen authentication.

 <p>One current platform key exists per profile on the device. (As each must be tied to a
 different user's lock screen.)

 @hide
*/
var PlatformEncryptionKey = {

/**Returns the generation ID of the key.
*/
getGenerationId : function(  ) {},

/**Returns the actual key, which can only be used to encrypt.
*/
getKey : function(  ) {},


};