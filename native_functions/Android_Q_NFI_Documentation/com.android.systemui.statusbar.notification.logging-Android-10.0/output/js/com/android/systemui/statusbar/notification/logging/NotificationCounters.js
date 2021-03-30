/**@class com.android.systemui.statusbar.notification.logging.NotificationCounters
@extends java.lang.Object

 Constants for counter tags for Notification-related actions/views.
*/
var NotificationCounters = {

/**Counter tag for notification dismissal. */
NOTIFICATION_DISMISSED : "notification_dismissed",
/**Counter tag for when the blocking helper is shown to the user. */
BLOCKING_HELPER_SHOWN : "blocking_helper_shown",
/**Counter tag for when the blocking helper is dismissed via a miscellaneous interaction. */
BLOCKING_HELPER_DISMISSED : "blocking_helper_dismissed",
/**Counter tag for when the user hits 'stop notifications' in the blocking helper. */
BLOCKING_HELPER_STOP_NOTIFICATIONS : "blocking_helper_stop_notifications",
/**Counter tag for when the user hits 'deliver silently' in the blocking helper. */
BLOCKING_HELPER_DELIVER_SILENTLY : "blocking_helper_deliver_silently",
/**Counter tag for when the user hits 'show silently' in the blocking helper. */
BLOCKING_HELPER_TOGGLE_SILENT : "blocking_helper_toggle_silent",
/**Counter tag for when the user hits 'keep showing' in the blocking helper. */
BLOCKING_HELPER_KEEP_SHOWING : "blocking_helper_keep_showing",
/** Counter tag for when the user hits undo in context of the blocking helper - this can happen
 multiple times per view.
*/
BLOCKING_HELPER_UNDO : "blocking_helper_undo",
/**Counter tag for when the user hits the notification settings icon in the blocking helper. */
BLOCKING_HELPER_NOTIF_SETTINGS : "blocking_helper_notif_settings",

};