/**@class com.android.server.locksettings.recoverablekeystore.RecoverableKeyStoreManager
@extends java.lang.Object

 Class with {@link RecoveryController} API implementation and internal methods to interact
 with {@code LockSettingsService}.

 @hide
*/
var RecoverableKeyStoreManager = {

/**Returns a new or existing instance.
@hide 
*/
getInstance : function(  ) {},

/**Initializes the recovery service with the two files {@code recoveryServiceCertFile} and
 {@code recoveryServiceSigFile}.
@param {String} rootCertificateAlias the alias for the root certificate that is used for validating
     the recovery service certificates.
@param {Object {byte[]}} recoveryServiceCertFile the content of the XML file containing a list of certificates
     for the recovery service.
@param {Object {byte[]}} recoveryServiceSigFile the content of the XML file containing the public-key signature
     over the entire content of {@code recoveryServiceCertFile}.
*/
initRecoveryServiceWithSigFile : function(  ) {},

/**Gets all data necessary to recover application keys on new device.
@return {Object {android.security.keystore.recovery.KeyChainSnapshot}} KeyChain Snapshot.
@throws ServiceSpecificException if no snapshot is pending.
@hide 
*/
getKeyChainSnapshot : function(  ) {},

/**
*/
setSnapshotCreatedPendingIntent : function(  ) {},

/**Set the server params for the user's key chain. This is used to uniquely identify a key
 chain. Along with the counter ID, it is used to uniquely identify an instance of a vault.
*/
setServerParams : function(  ) {},

/**Sets the recovery status of key with {@code alias} to {@code status}.
*/
setRecoveryStatus : function(  ) {},

/**Returns recovery statuses for all keys belonging to the calling uid.
@return {Object {java.util.Map}} {@link Map} from key alias to recovery status. Recovery status is one of
     {@link RecoveryController#RECOVERY_STATUS_SYNCED},
     {@link RecoveryController#RECOVERY_STATUS_SYNC_IN_PROGRESS} or
     {@link RecoveryController#RECOVERY_STATUS_PERMANENT_FAILURE}.
*/
getRecoveryStatus : function(  ) {},

/**Sets recovery secrets list used by all recovery agents for given {@code userId}
@hide 
*/
setRecoverySecretTypes : function(  ) {},

/**Gets secret types necessary to create Recovery Data.
@return {Number} secret types
@hide 
*/
getRecoverySecretTypes : function(  ) {},

/**Initializes recovery session given the certificate path of the recovery service.
@param {String} sessionId A unique ID to identify the recovery session.
@param {String} verifierCertPath The certificate path of the recovery service.
@param {Object {RecoveryCertPath}} vaultParams Additional params associated with vault.
@param {Object {byte[]}} vaultChallenge Challenge issued by vault service.
@param {Object {byte[]}} secrets Lock-screen hashes. For now only a single secret is supported.
@return {Number} Encrypted bytes of recovery claim. This can then be issued to the vault service.
@hide 
*/
startRecoverySessionWithCertPath : function(  ) {},

/**Invoked by a recovery agent after a successful recovery claim is sent to the remote vault
 service.
@param {String} sessionId The session ID used to generate the claim. See
     {@link #startRecoverySession(String, byte[], byte[], byte[], List)}.
@param {Object {byte[]}} encryptedRecoveryKey The encrypted recovery key blob returned by the remote vault
     service.
@param {Object {java.util.List}} applicationKeys The encrypted key blobs returned by the remote vault service. These
     were wrapped with the recovery key.
@throws RemoteException if an error occurred recovering the keys.
*/
recoverKeyChainSnapshot : function(  ) {},

/**Destroys the session with the given {@code sessionId}.
*/
closeSession : function(  ) {},

/**
*/
removeKey : function(  ) {},

/**Generates a key named {@code alias} in caller's namespace.
 The key is stored in system service keystore namespace.
@param {String} alias the alias provided by caller as a reference to the key.
@return {String} grant alias, which caller can use to access the key.
@throws RemoteException if certain internal errors occur.
@deprecated Use {@link #generateKeyWithMetadata(String, byte[])} instead.
*/
generateKey : function(  ) {},

/**Generates a key named {@code alias} with the {@code metadata} in caller's namespace.
 The key is stored in system service keystore namespace.
@param {String} alias the alias provided by caller as a reference to the key.
@param {Object {byte[]}} metadata the optional metadata blob that will authenticated (but unencrypted) together
         with the key material when the key is uploaded to cloud.
@return {String} grant alias, which caller can use to access the key.
@throws RemoteException if certain internal errors occur.
*/
generateKeyWithMetadata : function(  ) {},

/**Imports a 256-bit AES-GCM key named {@code alias}. The key is stored in system service
 keystore namespace.
@param {String} alias the alias provided by caller as a reference to the key.
@param {Object {byte[]}} keyBytes the raw bytes of the 256-bit AES key.
@return {String} grant alias, which caller can use to access the key.
@throws RemoteException if the given key is invalid or some internal errors occur.
@deprecated Use {{@link #importKeyWithMetadata(String, byte[], byte[])}} instead.
@hide 
*/
importKey : function(  ) {},

/**Imports a 256-bit AES-GCM key named {@code alias} with the given {@code metadata}. The key is
 stored in system service keystore namespace.
@param {String} alias the alias provided by caller as a reference to the key.
@param {Object {byte[]}} keyBytes the raw bytes of the 256-bit AES key.
@param {Object {byte[]}} metadata the metadata to be authenticated (but unencrypted) together with the key.
@return {String} grant alias, which caller can use to access the key.
@throws RemoteException if the given key is invalid or some internal errors occur.
@hide 
*/
importKeyWithMetadata : function(  ) {},

/**Gets a key named {@code alias} in caller's namespace.
@return {String} grant alias, which caller can use to access the key.
*/
getKey : function(  ) {},

/**This function can only be used inside LockSettingsService.
@param {Number} storedHashType from {@code CredentialHash}
@param {Object {byte[]}} credential - unencrypted byte array. Password length should be at most 16 symbols
     {@code mPasswordMaxLength}
@param {Number} userId for user who just unlocked the device.
@hide 
*/
lockScreenSecretAvailable : function(  ) {},

/**This function can only be used inside LockSettingsService.
@param {Number} storedHashType from {@code CredentialHash}
@param {Object {byte[]}} credential - unencrypted byte array
@param {Number} userId for the user whose lock screen credentials were changed.
@hide 
*/
lockScreenSecretChanged : function(  ) {},


};