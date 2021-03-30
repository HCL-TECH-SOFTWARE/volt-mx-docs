/**@class com.android.server.locksettings.recoverablekeystore.RecoverySnapshotListenersStorage
@extends java.lang.Object

 In memory storage for listeners to be notified when new recovery snapshot is available. This
 class is thread-safe. It is used on two threads - the service thread and the thread that runs the
 {@link com.android.server.locksettings.recoverablekeystore.KeySyncTask}.

 @hide
*/
var RecoverySnapshotListenersStorage = {

/**Sets new listener for the recovery agent, identified by {@code uid}.
@param {Number} recoveryAgentUid uid of the recovery agent.
@param {Object {PendingIntent}} intent PendingIntent which will be triggered when new snapshot is available.
*/
setSnapshotListener : function(  ) {},

/**Returns {@code true} if a listener has been set for the recovery agent.
*/
hasListener : function(  ) {},

/**Notifies recovery agent that new snapshot is available. If a recovery agent has not yet
 registered a {@link PendingIntent}, remembers that a snapshot is pending for it, so that
 when it does register, that intent is immediately triggered.
@param {Number} recoveryAgentUid uid of recovery agent.
*/
recoverySnapshotAvailable : function(  ) {},


};