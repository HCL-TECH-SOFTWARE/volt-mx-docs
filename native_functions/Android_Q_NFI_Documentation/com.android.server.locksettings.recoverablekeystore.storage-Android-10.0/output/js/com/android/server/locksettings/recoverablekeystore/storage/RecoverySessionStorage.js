/**@class com.android.server.locksettings.recoverablekeystore.storage.RecoverySessionStorage
 implements javax.security.auth.Destroyable

@extends java.lang.Object

 Stores pending recovery sessions in memory. We do not write these to disk, as it contains hashes
 of the user's lock screen.

 @hide
*/
var RecoverySessionStorage = {

/**Returns the session for the given user with the given id.
@param {Number} uid The uid of the recovery agent who created the session.
@param {String} sessionId The unique identifier for the session.
@return {Object {com.android.server.locksettings.recoverablekeystore.storage.RecoverySessionStorage.Entry}} The session info.
@hide 
*/
get : function(  ) {},

/**Adds a pending session for the given user.
@param {Number} uid The uid of the recovery agent who created the session.
@param {Object {RecoverySessionStorage.Entry}} entry The session info.
@hide 
*/
add : function(  ) {},

/**Deletes the session with {@code sessionId} created by app with {@code uid}.
*/
remove : function(  ) {},

/**Removes all sessions associated with the given recovery agent uid.
@param {Number} uid The uid of the recovery agent whose sessions to remove.
@hide 
*/
remove : function(  ) {},

/**Returns the total count of pending sessions.
@hide 
*/
size : function(  ) {},

/**Wipes the memory of any sensitive information (i.e., lock screen hashes and key claimants).
@hide 
*/
destroy : function(  ) {},


};