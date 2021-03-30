/**@class com.android.server.locksettings.recoverablekeystore.KeySyncUtils
@extends java.lang.Object

 Utility functions for the flow where the RecoveryController syncs keys with remote storage.

 @hide
*/
var KeySyncUtils = {

/**Encrypts the recovery key using both the lock screen hash and the remote storage's public
 key.
@param {Object {PublicKey}} publicKey The public key of the remote storage.
@param {Object {byte[]}} lockScreenHash The user's lock screen hash.
@param {Object {byte[]}} vaultParams Additional parameters to send to the remote storage.
@param {Object {SecretKey}} recoveryKey The recovery key.
@return {Number} The encrypted bytes.
@throws NoSuchAlgorithmException if any SecureBox algorithm is unavailable.
@throws InvalidKeyException if the public key or the lock screen could not be used to encrypt
     the data.
@hide 
*/
thmEncryptRecoveryKey : function(  ) {},

/**Calculates the THM_KF hash of the lock screen hash.
@param {Object {byte[]}} lockScreenHash The lock screen hash.
@return {Number} The hash.
@throws NoSuchAlgorithmException if SHA-256 is unavailable (should never happen).
@hide 
*/
calculateThmKfHash : function(  ) {},

/**Returns a new random 256-bit AES recovery key.
@hide 
*/
generateRecoveryKey : function(  ) {},

/**Encrypts all of the given keys with the recovery key, using SecureBox.
@param {Object {SecretKey}} recoveryKey The recovery key.
@param {Object {java.util.Map}} keys The keys, indexed by their aliases.
@return {Object {java.util.Map}} The encrypted key material, indexed by aliases.
@throws NoSuchAlgorithmException if any of the SecureBox algorithms are unavailable.
@throws InvalidKeyException if the recovery key is not appropriate for encrypting the keys.
@hide 
*/
encryptKeysWithRecoveryKey : function(  ) {},

/**Returns a random 16-byte key claimant.
@hide 
*/
generateKeyClaimant : function(  ) {},

/**Encrypts a claim to recover a remote recovery key.
@param {Object {PublicKey}} publicKey The public key of the remote server.
@param {Object {byte[]}} vaultParams Associated vault parameters.
@param {Object {byte[]}} challenge The challenge issued by the server.
@param {Object {byte[]}} thmKfHash The THM hash of the lock screen.
@param {Object {byte[]}} keyClaimant The random key claimant.
@return {Number} The encrypted recovery claim, to be sent to the remote server.
@throws NoSuchAlgorithmException if any SecureBox algorithm is not present.
@throws InvalidKeyException if the {@code publicKey} could not be used to encrypt.
@hide 
*/
encryptRecoveryClaim : function(  ) {},

/**Decrypts response from recovery claim, returning the locally encrypted key.
@param {Object {byte[]}} keyClaimant The key claimant, used by the remote service to encrypt the response.
@param {Object {byte[]}} vaultParams Vault params associated with the claim.
@param {Object {byte[]}} encryptedResponse The encrypted response.
@return {Number} The locally encrypted recovery key.
@throws NoSuchAlgorithmException if any SecureBox algorithm is not present.
@throws InvalidKeyException if the {@code keyClaimant} could not be used to decrypt.
@throws AEADBadTagException if the message has been tampered with or was encrypted with a
     different key.
*/
decryptRecoveryClaimResponse : function(  ) {},

/**Decrypts a recovery key, after having retrieved it from a remote server.
@param {Object {byte[]}} lskfHash The lock screen hash associated with the key.
@param {Object {byte[]}} encryptedRecoveryKey The encrypted key.
@return {Number} The raw key material.
@throws NoSuchAlgorithmException if any SecureBox algorithm is unavailable.
@throws AEADBadTagException if the message has been tampered with or was encrypted with a
     different key.
*/
decryptRecoveryKey : function(  ) {},

/**Decrypts an application key, using the recovery key.
@param {Object {byte[]}} recoveryKey The recovery key - used to wrap all application keys.
@param {Object {byte[]}} encryptedApplicationKey The application key to unwrap.
@return {Number} The raw key material of the application key.
@throws NoSuchAlgorithmException if any SecureBox algorithm is unavailable.
@throws AEADBadTagException if the message has been tampered with or was encrypted with a
     different key.
*/
decryptApplicationKey : function(  ) {},

/**Deserializes a X509 public key.
@param {Object {byte[]}} key The bytes of the key.
@return {Object {java.security.PublicKey}} The key.
@throws InvalidKeySpecException if the bytes of the key are not a valid key.
*/
deserializePublicKey : function(  ) {},

/**Packs vault params into a binary format.
@param {Object {PublicKey}} thmPublicKey Public key of the trusted hardware module.
@param {Number} counterId ID referring to the specific counter in the hardware module.
@param {Number} maxAttempts Maximum allowed guesses before trusted hardware wipes key.
@param {Object {byte[]}} vaultHandle Handle of the Vault.
@return {Number} The binary vault params, ready for sync.
*/
packVaultParams : function(  ) {},


};