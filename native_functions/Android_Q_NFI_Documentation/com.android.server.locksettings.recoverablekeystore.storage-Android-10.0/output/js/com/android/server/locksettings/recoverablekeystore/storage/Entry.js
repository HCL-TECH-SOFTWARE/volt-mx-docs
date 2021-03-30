/**@class com.android.server.locksettings.recoverablekeystore.storage.RecoverySessionStorage.Entry
 implements javax.security.auth.Destroyable

@extends java.lang.Object

 Information about a recovery session.

 @hide
*/
var Entry = {

/**Returns the hash of the lock screen associated with the recovery attempt.
@hide 
*/
getLskfHash : function(  ) {},

/**Returns the key generated for this recovery attempt (used to decrypt data returned by
 the server).
@hide 
*/
getKeyClaimant : function(  ) {},

/**Returns the vault params associated with the session.
@hide 
*/
getVaultParams : function(  ) {},

/**Overwrites the memory for the lskf hash and key claimant.
@hide 
*/
destroy : function(  ) {},


};