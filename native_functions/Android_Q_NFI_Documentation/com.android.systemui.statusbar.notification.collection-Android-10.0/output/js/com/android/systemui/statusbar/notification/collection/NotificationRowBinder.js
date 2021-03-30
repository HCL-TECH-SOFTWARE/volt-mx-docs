/**@class com.android.systemui.statusbar.notification.collection.NotificationRowBinder
 Used by the {@link com.android.systemui.statusbar.notification.collection.NotificationEntryManager}. When notifications are added or updated, the binder
 is asked to (re)inflate and prepare their views. This inflation must occur off the main thread.
*/
var NotificationRowBinder = {

/**Called when a notification has been added or updated. The binder must asynchronously inflate
 and bind the views associated with the notification.

 TODO: The caller is notified when the inflation completes, but this is currently a very
 roundabout business. Add an explicit completion/failure callback to this method.
*/
inflateViews : function(  ) {},

/**Called when the ranking has been updated (but not add or remove has been done). The binder
 should inspect the old and new adjustments and re-inflate the entry's views if necessary
 (e.g. if something important changed).
*/
onNotificationRankingUpdated : function(  ) {},


};