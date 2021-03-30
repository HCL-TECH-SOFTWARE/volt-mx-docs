/**@class com.android.server.locksettings.recoverablekeystore.storage.RecoverySnapshotStorage
@extends java.lang.Object

 Storage for recovery snapshots. Stores snapshots in memory, backed by disk storage.

 <p>Recovery snapshots are generated after a successful screen unlock. They are only generated if
 the recoverable keystore has been mutated since the previous snapshot. This class stores only the
 latest snapshot for each recovery agent.

 <p>This class is thread-safe. It is used both on the service thread and the
 {@link com.android.server.locksettings.recoverablekeystore.KeySyncTask} thread.
*/
var RecoverySnapshotStorage = {

/**A new instance, storing snapshots in /data/system/recoverablekeystore/snapshots.

 <p>NOTE: calling this multiple times DOES NOT return the same instance, so will NOT be backed
 by the same in-memory store.
*/
newInstance : function(  ) {},

/**Sets the latest {@code snapshot} for the recovery agent {@code uid}.
*/
put : function(  ) {},

/**Returns the latest snapshot for the recovery agent {@code uid}, or null if none exists.
*/
get : function(  ) {},

/**Removes any (if any) snapshot associated with recovery agent {@code uid}.
*/
remove : function(  ) {},


};