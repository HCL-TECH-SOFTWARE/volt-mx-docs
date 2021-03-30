/**@class com.android.server.locksettings.recoverablekeystore.storage.CleanupManager
@extends java.lang.Object

 Cleans up data when user is removed.
*/
var CleanupManager = {

/**Creates a new instance of the class.
 IMPORTANT: {@code verifyKnownUsers} must be called before the first data access.
*/
getInstance : function(  ) {},

/**Registers recovery agent in the system, if necessary.
*/
registerRecoveryAgent : function(  ) {},

/**Removes data if serial number for a user was changed.
*/
verifyKnownUsers : function(  ) {},


};