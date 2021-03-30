/**@class com.android.server.locksettings.recoverablekeystore.PlatformDecryptionKey
@extends java.lang.Object

 Used to unwrap recoverable keys before syncing them with remote storage.

 <p>This is a private key stored in AndroidKeyStore. Has an associated generation ID, which is
 stored with wrapped keys, allowing us to ensure the wrapped key has the same version as the
 platform key.

 @hide
*/
var PlatformDecryptionKey = {

/**Returns the generation ID.
@hide 
*/
getGenerationId : function(  ) {},

/**Returns the actual key, which can be used to decrypt.
@hide 
*/
getKey : function(  ) {},


};