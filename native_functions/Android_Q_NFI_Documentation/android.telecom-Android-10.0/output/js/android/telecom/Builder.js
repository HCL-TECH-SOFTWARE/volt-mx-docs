/**@class android.telecom.CallScreeningService.CallResponse.Builder
@extends java.lang.Object

*/
var Builder = {

/**Sets whether the incoming call should be blocked.
*/
setDisallowCall : function(  ) {},

/**Sets whether the incoming call should be disconnected as if the user had manually
 rejected it. This property should only be set to true if the call is disallowed.
*/
setRejectCall : function(  ) {},

/**Sets whether ringing should be silenced for the incoming call.  When set
 to {@code true}, the Telecom framework will not play a ringtone for the call.
 The call will, however, still be sent to the default dialer app if it is not blocked.
 A {@link android.telecom.CallScreeningService} can use this to ensure a potential nuisance call is
 still surfaced to the user, but in a less intrusive manner.

 Setting this to true only makes sense when the call has not been disallowed
 using {@link #setDisallowCall}(boolean).
*/
setSilenceCall : function(  ) {},

/**Sets whether the incoming call should not be displayed in the call log. This property
 should only be set to true if the call is disallowed.
 <p>
 Note: Calls will still be logged with type
 {@link android.provider.CallLog.Calls#BLOCKED_TYPE}, regardless of how this property
 is set.
*/
setSkipCallLog : function(  ) {},

/**Sets whether a missed call notification should not be shown for the incoming call.
 This property should only be set to true if the call is disallowed.
*/
setSkipNotification : function(  ) {},

/**
*/
build : function(  ) {},


};