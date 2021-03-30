/**@class com.android.systemui.statusbar.notification.collection.NotificationEntry
@extends java.lang.Object

 Represents a notification that the system UI knows about

 Whenever the NotificationManager tells us about the existence of a new notification, we wrap it
 in a NotificationEntry. Thus, every notification has an associated NotificationEntry, even if
 that notification is never displayed to the user (for example, if it's filtered out for some
 reason).

 Entries store information about the current state of the notification. Essentially:
 anything that needs to persist or be modifiable even when the notification's views don't
 exist. Any other state should be stored on the views/view controllers themselves.

 At the moment, there are many things here that shouldn't be and vice-versa. Hopefully we can
 clean this up in the future.
*/
var NotificationEntry = {

/***/
key : "null",
/***/
notification : "null",
/***/
channel : "null",
/***/
lastAudiblyAlertedMs : "null",
/***/
noisy : "null",
/***/
ambient : "null",
/***/
importance : "null",
/***/
icon : "null",
/***/
expandedIcon : "null",
/***/
centeredIcon : "null",
/***/
autoRedacted : "null",
/***/
targetSdk : "null",
/***/
remoteInputText : "null",
/***/
snoozeCriteria : "null",
/***/
userSentiment : "null",
/**Smart Actions provided by the NotificationAssistantService. */
systemGeneratedSmartActions : "null",
/**Smart replies provided by the NotificationAssistantService. */
systemGeneratedSmartReplies : "null",
/** If {@link android.app.RemoteInput#getEditChoicesBeforeSending} is enabled, and the user is
 currently editing a choice (smart reply), then this field contains the information about the
 suggestion being edited. Otherwise <code>null</code>.
*/
editedSuggestionInfo : "null",
/***/
suppressedVisualEffects : "null",
/***/
suspended : "null",
/***/
remoteInputTextWhenReset : "null",
/***/
lastRemoteInputSent : "null",
/***/
mActiveAppOps : "null",
/***/
headsUpStatusBarText : "null",
/***/
headsUpStatusBarTextPublic : "null",
/** Whether or not this row represents a system notification. Note that if this is
 {@code null}, that means we were either unable to retrieve the info or have yet to
 retrieve the info.
*/
mIsSystemNotification : "null",
/** Whether this notification has been approved globally, at the app level, and at the channel
 level for bubbling.
*/
canBubble : "null",
/**
*/
populateFromRanking : function(  ) {},

/**
*/
setInterruption : function(  ) {},

/**
*/
hasInterrupted : function(  ) {},

/**
*/
isHighPriority : function(  ) {},

/**
*/
setIsHighPriority : function(  ) {},

/**
@return {Boolean} True if the notif should appear in the "top" or "important" section of notifications
 (as opposed to the "bottom" or "silent" section). This is usually the same as
 {@link #isHighPriority()}, but there are certain exceptions, such as media notifs.
*/
isTopBucket : function(  ) {},

/**
*/
setIsTopBucket : function(  ) {},

/**
*/
isBubble : function(  ) {},

/**
*/
setBubbleDismissed : function(  ) {},

/**
*/
isBubbleDismissed : function(  ) {},

/**Sets whether this notification should be shown in the shade when it is also displayed as a
 bubble.
*/
setShowInShadeWhenBubble : function(  ) {},

/**Whether this notification should be shown in the shade when it is also displayed as a
 bubble.
*/
showInShadeWhenBubble : function(  ) {},

/**Returns the data needed for a bubble for this notification, if it exists.
*/
getBubbleMetadata : function(  ) {},

/**Resets the notification entry to be re-used.
*/
reset : function(  ) {},

/**
*/
getRow : function(  ) {},

/**
*/
setRow : function(  ) {},

/**
*/
getChildren : function(  ) {},

/**
*/
notifyFullScreenIntentLaunched : function(  ) {},

/**
*/
hasJustLaunchedFullScreenIntent : function(  ) {},

/**
*/
hasJustSentRemoteInput : function(  ) {},

/**
*/
hasFinishedInitialization : function(  ) {},

/**Create the icons for a notification
@param {Object {Context}} context the context to create the icons with
@param {Object {StatusBarNotification}} sbn the notification
@throws InflationException Exception if required icons are not valid or specified
*/
createIcons : function(  ) {},

/**
*/
setIconTag : function(  ) {},

/**Update the notification icons.
@param {Object {Context}} context the context to create the icons with.
@param {Object {StatusBarNotification}} sbn the notification to read the icon from.
@throws InflationException Exception if required icons are not valid or specified
*/
updateIcons : function(  ) {},

/**
*/
getContrastedColor : function(  ) {},

/**Returns our best guess for the most relevant text summary of the latest update to this
 notification, based on its type. Returns null if there should not be an update message.
*/
getUpdateMessage : function(  ) {},

/**Abort all existing inflation tasks
*/
abortTask : function(  ) {},

/**
*/
setInflationTask : function(  ) {},

/**
*/
onInflationTaskFinished : function(  ) {},

/**
*/
getRunningTask : function(  ) {},

/**Set a throwable that is used for debugging
@param {Object {Throwable}} debugThrowable the throwable to save
*/
setDebugThrowable : function(  ) {},

/**
*/
getDebugThrowable : function(  ) {},

/**
*/
onRemoteInputInserted : function(  ) {},

/**
*/
setHasSentReply : function(  ) {},

/**
*/
isLastMessageFromReply : function(  ) {},

/**
*/
setInitializationTime : function(  ) {},

/**
*/
sendAccessibilityEvent : function(  ) {},

/**Used by NotificationMediaManager to determine... things
@return {Boolean} {@code true} if we are a media notification
*/
isMediaNotification : function(  ) {},

/**We are a top level child if our parent is the list of notifications duh
@return {Boolean} {@code true} if we're a top level notification
*/
isTopLevelChild : function(  ) {},

/**
*/
resetUserExpansion : function(  ) {},

/**
*/
freeContentViewWhenSafe : function(  ) {},

/**
*/
setAmbientPulsing : function(  ) {},

/**
*/
rowExists : function(  ) {},

/**
*/
isRowDismissed : function(  ) {},

/**
*/
isRowRemoved : function(  ) {},

/**
@return {Boolean} {@code true} if the row is null or removed
*/
isRemoved : function(  ) {},

/**
*/
isRowPinned : function(  ) {},

/**
*/
setRowPinned : function(  ) {},

/**
*/
isRowAnimatingAway : function(  ) {},

/**
*/
isRowHeadsUp : function(  ) {},

/**
*/
setHeadsUp : function(  ) {},

/**
*/
setAmbientGoingAway : function(  ) {},

/**
*/
mustStayOnScreen : function(  ) {},

/**
*/
setHeadsUpIsVisible : function(  ) {},

/**
*/
getHeadsUpAnimationView : function(  ) {},

/**
*/
setUserLocked : function(  ) {},

/**
*/
setUserExpanded : function(  ) {},

/**
*/
setGroupExpansionChanging : function(  ) {},

/**
*/
notifyHeightChanged : function(  ) {},

/**
*/
closeRemoteInput : function(  ) {},

/**
*/
areChildrenExpanded : function(  ) {},

/**
*/
keepInParent : function(  ) {},

/**
*/
isGroupNotFullyVisible : function(  ) {},

/**
*/
getGuts : function(  ) {},

/**
*/
removeRow : function(  ) {},

/**
*/
isSummaryWithChildren : function(  ) {},

/**
*/
setKeepInParent : function(  ) {},

/**
*/
onDensityOrFontScaleChanged : function(  ) {},

/**
*/
areGutsExposed : function(  ) {},

/**
*/
isChildInGroup : function(  ) {},

/**
@return {Boolean} Can the underlying notification be cleared? This can be different from whether the
         notification can be dismissed in case notifications are sensitive on the lockscreen.
@see #canViewBeDismissed()
*/
isClearable : function(  ) {},

/**
*/
canViewBeDismissed : function(  ) {},

/**Returns whether {@link Policy#SUPPRESSED_EFFECT_FULL_SCREEN_INTENT}
 is set for this entry.
*/
shouldSuppressFullScreenIntent : function(  ) {},

/**Returns whether {@link Policy#SUPPRESSED_EFFECT_PEEK}
 is set for this entry.
*/
shouldSuppressPeek : function(  ) {},

/**Returns whether {@link Policy#SUPPRESSED_EFFECT_STATUS_BAR}
 is set for this entry.
*/
shouldSuppressStatusBar : function(  ) {},

/**Returns whether {@link Policy#SUPPRESSED_EFFECT_AMBIENT}
 is set for this entry.
*/
shouldSuppressAmbient : function(  ) {},

/**Returns whether {@link Policy#SUPPRESSED_EFFECT_NOTIFICATION_LIST}
 is set for this entry.
*/
shouldSuppressNotificationList : function(  ) {},

/**Returns whether the notification is a foreground service. It shows that this is an ongoing
 bubble.
*/
isForegroundService : function(  ) {},


};