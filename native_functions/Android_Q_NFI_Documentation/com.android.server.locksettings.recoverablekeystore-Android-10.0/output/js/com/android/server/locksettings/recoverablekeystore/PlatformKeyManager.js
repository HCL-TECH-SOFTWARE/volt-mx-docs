/**@class com.android.server.locksettings.recoverablekeystore.PlatformKeyManager
@extends java.lang.Object

 Manages creating and checking the validity of the platform key.

 <p>The platform key is used to wrap the material of recoverable keys before persisting them to
 disk. It is also used to decrypt the same keys on a screen unlock, before re-wrapping them with
 a recovery key and syncing them with remote storage.

 <p>Each platform key has two entries in AndroidKeyStore:

 <ul>
     <li>Encrypt entry - this entry enables the root user to at any time encrypt.
     <li>Decrypt entry - this entry enables the root user to decrypt only after recent user
       authentication, i.e., within 15 seconds after a screen unlock.
 </ul>

 <p>Both entries are enabled only for AES/GCM/NoPadding Cipher algorithm.

 @hide
*/
var PlatformKeyManager = {

/**A new instance operating on behalf of {@code userId}, storing its prefs in the location
 defined by {@code context}.
@param {Object {Context}} context This should be the context of the RecoverableKeyStoreLoader service.
@throws KeyStoreException if failed to initialize AndroidKeyStore.
@throws NoSuchAlgorithmException if AES is unavailable - should never happen.
@throws SecurityException if the caller does not have permission to write to /data/system.
@hide 
*/
getInstance : function(  ) {},

/**Returns the current generation ID of the platform key. This increments whenever a platform
 key has to be replaced. (e.g., because the user has removed and then re-added their lock
 screen). Returns -1 if no key has been generated yet.
@param {Number} userId The ID of the user to whose lock screen the platform key must be bound.
@hide 
*/
getGenerationId : function(  ) {},

/**Returns {@code true} if the platform key is available. A platform key won't be available if
 the user has not set up a lock screen.
@param {Number} userId The ID of the user to whose lock screen the platform key must be bound.
@hide 
*/
isAvailable : function(  ) {},

/**Removes the platform key from Android KeyStore.
 It is triggered when user disables lock screen.
@param {Number} userId The ID of the user to whose lock screen the platform key must be bound.
@param {Number} generationId Generation id.
@hide 
*/
invalidatePlatformKey : function(  ) {},

/**Returns the platform key used for encryption.
 Tries to regenerate key one time if it is permanently invalid.
@param {Number} userId The ID of the user to whose lock screen the platform key must be bound.
@throws KeyStoreException if there was an AndroidKeyStore error.
@throws UnrecoverableKeyException if the key could not be recovered.
@throws NoSuchAlgorithmException if AES is unavailable - should never occur.
@throws InsecureUserException if the user does not have a lock screen set.
@throws IOException if there was an issue with local database update.
@throws RemoteException if there was an issue communicating with {@link IGateKeeperService}.
@hide 
*/
getEncryptKey : function(  ) {},

/**Returns the platform key used for decryption. Only works after a recent screen unlock.
 Tries to regenerate key one time if it is permanently invalid.
@param {Number} userId The ID of the user to whose lock screen the platform key must be bound.
@throws KeyStoreException if there was an AndroidKeyStore error.
@throws UnrecoverableKeyException if the key could not be recovered.
@throws NoSuchAlgorithmException if AES is unavailable - should never occur.
@throws InsecureUserException if the user does not have a lock screen set.
@throws IOException if there was an issue with local database update.
@throws RemoteException if there was an issue communicating with {@link IGateKeeperService}.
@hide 
*/
getDecryptKey : function(  ) {},


};