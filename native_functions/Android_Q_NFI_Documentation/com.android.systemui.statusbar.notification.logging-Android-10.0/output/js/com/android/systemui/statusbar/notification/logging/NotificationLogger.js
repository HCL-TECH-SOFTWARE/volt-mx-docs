/**@class com.android.systemui.statusbar.notification.logging.NotificationLogger
 implements com.android.systemui.plugins.statusbar.StatusBarStateController.StateListener

@extends java.lang.Object

 Handles notification logging, in particular, logging which notifications are visible and which
 are not.
*/
var NotificationLogger = {

/**Returns the location of the notification referenced by the given {@link NotificationEntry}.
*/
getNotificationLocation : function(  ) {},

/**
*/
setUpWithContainer : function(  ) {},

/**
*/
setHeadsUpManager : function(  ) {},

/**
*/
stopNotificationLogging : function(  ) {},

/**
*/
startNotificationLogging : function(  ) {},

/**
*/
getVisibilityReporter : function(  ) {},

/**
*/
onStateChanged : function(  ) {},

/**
*/
onDozingChanged : function(  ) {},

/**Called when the notification is expanded / collapsed.
*/
onExpansionChanged : function(  ) {},


};