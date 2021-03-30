/**@class com.android.server.locksettings.recoverablekeystore.WrappedKey
@extends java.lang.Object

 A {@link javax.crypto.SecretKey} wrapped with AES/GCM/NoPadding.

 @hide
*/
var WrappedKey = {

/**Returns a wrapped form of {@code key}, using {@code wrappingKey} to encrypt the key material.
@throws InvalidKeyException if {@code wrappingKey} cannot be used to encrypt {@code key}, or
     if {@code key} does not expose its key material. See
     {@link android.security.keystore.AndroidKeyStoreKey} for an example of a key that does
     not expose its key material.
*/
fromSecretKey : function(  ) {},

/**Returns the nonce with which the key material was encrypted.
@hide 
*/
getNonce : function(  ) {},

/**Returns the encrypted key material.
@hide 
*/
getKeyMaterial : function(  ) {},

/**Returns the key metadata.
@hide 
*/
getKeyMetadata : function(  ) {},

/**Returns the generation ID of the platform key, with which this key was wrapped.
@hide 
*/
getPlatformKeyGenerationId : function(  ) {},

/**Returns recovery status of the key.
@hide 
*/
getRecoveryStatus : function(  ) {},

/**Unwraps the {@code wrappedKeys} with the {@code platformKey}.
@return {Object {java.util.Map}} The unwrapped keys, indexed by alias.
@throws NoSuchAlgorithmException if AES/GCM/NoPadding Cipher or AES key type is unavailable.
@throws BadPlatformKeyException if the {@code platformKey} has a different generation ID to
     any of the {@code wrappedKeys}.
@hide 
*/
unwrapKeys : function(  ) {},


};