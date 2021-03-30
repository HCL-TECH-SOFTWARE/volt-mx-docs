/**@class com.android.systemui.statusbar.notification.collection.NotificationData
@extends java.lang.Object

 The list of currently displaying notifications.
*/
var NotificationData = {

/**
*/
setHeadsUpManager : function(  ) {},

/**Returns the sorted list of active notifications (depending on {@link com.android.systemui.statusbar.notification.collection.NotificationData.KeyguardEnvironment}

 <p>
 This call doesn't update the list of active notifications. Call {@link #filterAndSort}()
 when the environment changes.
 <p>
 Don't hold on to or modify the returned list.
*/
getActiveNotifications : function(  ) {},

/**
*/
getNotificationsForCurrentUser : function(  ) {},

/**
*/
get : function(  ) {},

/**
*/
add : function(  ) {},

/**
*/
remove : function(  ) {},

/**Updates the given notification entry with the provided ranking.
*/
update : function(  ) {},

/**
*/
updateRanking : function(  ) {},

/**
*/
updateAppOp : function(  ) {},

/**Returns true if this notification should be displayed in the high-priority notifications
 section
*/
isHighPriority : function(  ) {},

/**
*/
isAmbient : function(  ) {},

/**
*/
getVisibilityOverride : function(  ) {},

/**
*/
getImportance : function(  ) {},

/**
*/
getOverrideGroupKey : function(  ) {},

/**
*/
getSnoozeCriteria : function(  ) {},

/**
*/
getChannel : function(  ) {},

/**
*/
getRank : function(  ) {},

/**
*/
shouldHide : function(  ) {},

/**
*/
filterAndSort : function(  ) {},

/**
*/
dump : function(  ) {},


};