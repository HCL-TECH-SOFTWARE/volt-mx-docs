/**@class com.android.server.locksettings.recoverablekeystore.RecoverableKeyGenerator
@extends java.lang.Object

 Generates/imports keys and stores them both in AndroidKeyStore and on disk, in wrapped form.

 <p>Generates/imports 256-bit AES keys, which can be used for encrypt and decrypt with AES-GCM.
 They are synced to disk wrapped by a platform key. This allows them to be exported to a remote
 service.

 @hide
*/
var RecoverableKeyGenerator = {

/**A new {@link com.android.server.locksettings.recoverablekeystore.RecoverableKeyGenerator} instance.
@throws NoSuchAlgorithmException if "AES" key generation or "AES/GCM/NoPadding" cipher is
     unavailable. Should never happen.
@hide 
*/
newInstance : function(  ) {},

/**Generates a 256-bit AES key with the given alias.

 <p>Stores in the AndroidKeyStore, as well as persisting in wrapped form to disk. It is
 persisted to disk so that it can be synced remotely, and then recovered on another device.
 The generated key allows encrypt/decrypt only using AES/GCM/NoPadding.
@param {Object {PlatformEncryptionKey}} platformKey The user's platform key, with which to wrap the generated key.
@param {Number} userId The user ID of the profile to which the calling app belongs.
@param {Number} uid The uid of the application that will own the key.
@param {String} alias The alias by which the key will be known in the recoverable key store.
@param {Object {byte[]}} metadata The optional metadata that will be authenticated (but unencrypted) together
     with the key material when the key is uploaded to cloud.
@throws RecoverableKeyStorageException if there is some error persisting the key either to
     the database.
@throws KeyStoreException if there is a KeyStore error wrapping the generated key.
@throws InvalidKeyException if the platform key cannot be used to wrap keys.
@hide 
*/
generateAndStoreKey : function(  ) {},

/**Imports an AES key with the given alias.

 <p>Stores in the AndroidKeyStore, as well as persisting in wrapped form to disk. It is
 persisted to disk so that it can be synced remotely, and then recovered on another device.
 The generated key allows encrypt/decrypt only using AES/GCM/NoPadding.
@param {Object {PlatformEncryptionKey}} platformKey The user's platform key, with which to wrap the generated key.
@param {Number} userId The user ID of the profile to which the calling app belongs.
@param {Number} uid The uid of the application that will own the key.
@param {String} alias The alias by which the key will be known in the recoverable key store.
@param {Object {byte[]}} keyBytes The raw bytes of the AES key to be imported.
@param {Object {byte[]}} metadata The optional metadata that will be authenticated (but unencrypted) together
     with the key material when the key is uploaded to cloud.
@throws RecoverableKeyStorageException if there is some error persisting the key either to
     the database.
@throws KeyStoreException if there is a KeyStore error wrapping the generated key.
@throws InvalidKeyException if the platform key cannot be used to wrap keys.
@hide 
*/
importKey : function(  ) {},


};