/**@class com.android.server.locksettings.recoverablekeystore.storage.RecoverableKeyStoreDb
@extends java.lang.Object

 Database of recoverable key information.

 @hide
*/
var RecoverableKeyStoreDb = {

/**A new instance, storing the database in the user directory of {@code context}.
@hide 
*/
newInstance : function(  ) {},

/**Inserts a key into the database.
@param {Number} userId The uid of the profile the application is running under.
@param {Number} uid Uid of the application to whom the key belongs.
@param {String} alias The alias of the key in the AndroidKeyStore.
@param {Object {WrappedKey}} wrappedKey The wrapped key.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
insertKey : function(  ) {},

/**Gets the key with {@code alias} for the app with {@code uid}.
@hide 
*/
getKey : function(  ) {},

/**Removes key with {@code alias} for app with {@code uid}.
@return {Boolean} {@code true} if deleted a row.
*/
removeKey : function(  ) {},

/**Returns all statuses for keys {@code uid} and {@code platformKeyGenerationId}.
@param {Number} uid of the application
@return {Object {java.util.Map}} Map from Aliases to status.
@hide 
*/
getStatusForAllKeys : function(  ) {},

/**Updates status for given key.
@param {Number} uid of the application
@param {String} alias of the key
@param {Number} status - new status
@return {Number} number of updated entries.
@hide 
*/
setRecoveryStatus : function(  ) {},

/**Returns all keys for the given {@code userId} {@code recoveryAgentUid}
 and {@code platformKeyGenerationId}.
@param {Number} userId User id of the profile to which all the keys are associated.
@param {Number} recoveryAgentUid Uid of the recovery agent which will perform the sync
@param {Number} platformKeyGenerationId The generation ID of the platform key that wrapped these keys.
     (i.e., this should be the most recent generation ID, as older platform keys are not
     usable.)
@hide 
*/
getAllKeys : function(  ) {},

/**Sets the {@code generationId} of the platform key for user {@code userId}.
@return {Number} The number of updated rows.
*/
setPlatformKeyGenerationId : function(  ) {},

/**Returns serial numbers associated with all known users.
 -1 is used for uninitialized serial numbers.

 See {@code UserHandle.getSerialNumberForUser}.
@return {Object {java.util.Map}} Map from userId to serial numbers.
*/
getUserSerialNumbers : function(  ) {},

/**Sets the {@code serialNumber} for the user {@code userId}.
@return {Number} The number of updated rows.
*/
setUserSerialNumber : function(  ) {},

/**Updates status of old keys to {@code RecoveryController.RECOVERY_STATUS_PERMANENT_FAILURE}.
*/
invalidateKeysForUser : function(  ) {},

/**Updates status of old keys to {@code RecoveryController.RECOVERY_STATUS_PERMANENT_FAILURE}.
*/
invalidateKeysForUserIdOnCustomScreenLock : function(  ) {},

/**Returns the generation ID associated with the platform key of the user with {@code userId}.
*/
getPlatformKeyGenerationId : function(  ) {},

/**Updates the public key of the recovery service into the database.
@param {Number} userId The uid of the profile the application is running under.
@param {Number} uid The uid of the application to whom the key belongs.
@param {Object {PublicKey}} publicKey The public key of the recovery service.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setRecoveryServicePublicKey : function(  ) {},

/**Returns the serial number of the XML file containing certificates of the recovery service.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initializes the local recovery components.
@param {String} rootAlias The root of trust alias.
@return {Number} The value that were previously set, or null if there's none.
@hide 
*/
getRecoveryServiceCertSerial : function(  ) {},

/**Records the serial number of the XML file containing certificates of the recovery service.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initializes the local recovery components.
@param {String} rootAlias The root of trust alias.
@param {Number} serial The serial number contained in the XML file for recovery service certificates.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setRecoveryServiceCertSerial : function(  ) {},

/**Returns the {@code CertPath} of the recovery service.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initializes the local recovery components.
@param {String} rootAlias The root of trust alias.
@return {Object {java.security.cert.CertPath}} The value that were previously set, or null if there's none.
@hide 
*/
getRecoveryServiceCertPath : function(  ) {},

/**Sets the {@code CertPath} of the recovery service.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initializes the local recovery components.
@param {String} rootAlias The root of trust alias.
@param {Object {CertPath}} certPath The certificate path of the recovery service.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setRecoveryServiceCertPath : function(  ) {},

/**Returns the list of recovery agents initialized for given {@code userId}
@param {Number} userId The userId of the profile the application is running under.
@return {Object {java.util.List}} The list of recovery agents
@hide 
*/
getRecoveryAgents : function(  ) {},

/**Returns the public key of the recovery service.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initializes the local recovery components.
@hide 
*/
getRecoveryServicePublicKey : function(  ) {},

/**Updates the list of user secret types used for end-to-end encryption.
 If no secret types are set, recovery snapshot will not be created.
 See {@code KeyChainProtectionParams}
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {Object {int[]}} secretTypes list of secret types
@return {Number} The primary key of the updated row, or -1 if failed.
@hide 
*/
setRecoverySecretTypes : function(  ) {},

/**Returns the list of secret types used for end-to-end encryption.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {Number} Secret types or empty array, if types were not set.
@hide 
*/
getRecoverySecretTypes : function(  ) {},

/**Active root of trust for the recovery agent.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {String} rootAlias The root of trust alias.
@return {Number} The primary key of the updated row, or -1 if failed.
@hide 
*/
setActiveRootOfTrust : function(  ) {},

/**Active root of trust for the recovery agent.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {String} Active root of trust alias of null if it was not set
@hide 
*/
getActiveRootOfTrust : function(  ) {},

/**Updates the counterId
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {Number} counterId The counterId.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setCounterId : function(  ) {},

/**Returns the counter id.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {Number} The counter id
@hide 
*/
getCounterId : function(  ) {},

/**Updates the server parameters given by the application initializing the local recovery
 components.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {Object {byte[]}} serverParams The server parameters.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setServerParams : function(  ) {},

/**Returns the server paramters that was previously set by the application who initialized the
 local recovery service components.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {Number} The server parameters that were previously set, or null if there's none.
@hide 
*/
getServerParams : function(  ) {},

/**Updates the snapshot version.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {Number} snapshotVersion The snapshot version
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setSnapshotVersion : function(  ) {},

/**Returns the snapshot version
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {Number} The server parameters that were previously set, or null if there's none.
@hide 
*/
getSnapshotVersion : function(  ) {},

/**Updates a flag indicating that a new snapshot should be created.
 It will be {@code false} until the first application key is added.
 After that, the flag will be set to true, if one of the following values is updated:
 <ul>
     <li> List of application keys
     <li> Server params.
     <li> Lock-screen secret.
     <li> Lock-screen secret type.
     <li> Trusted hardware certificate.
 </ul>
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application.
@param {Boolean} pending Should create snapshot flag.
@return {Number} The primary key of the inserted row, or -1 if failed.
@hide 
*/
setShouldCreateSnapshot : function(  ) {},

/**Returns {@code true} if new snapshot should be created.
 Returns {@code false} if the flag was never set.
@param {Number} userId The userId of the profile the application is running under.
@param {Number} uid The uid of the application who initialized the local recovery components.
@return {Boolean} should create snapshot flag
@hide 
*/
getShouldCreateSnapshot : function(  ) {},

/**Removes all entries for given {@code userId}.
*/
removeUserFromAllTables : function(  ) {},

/**Closes all open connections to the database.
*/
close : function(  ) {},


};