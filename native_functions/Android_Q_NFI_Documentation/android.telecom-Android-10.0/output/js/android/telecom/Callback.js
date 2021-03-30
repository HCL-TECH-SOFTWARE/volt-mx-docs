/**@class android.telecom.Call.Callback
@extends java.lang.Object

 Defines callbacks which inform the {@link android.telecom.InCallService} of changes to a {@link android.telecom.Call}.
 These callbacks can originate from the Telecom framework, or a {@link android.telecom.ConnectionService}
 implementation.
 <p>
 You can handle these callbacks by extending the {@link android.telecom.Callback} class and overriding the
 callbacks that your {@link android.telecom.InCallService} is interested in.  The callback methods include the
 {@link android.telecom.Call} for which the callback applies, allowing reuse of a single instance of your
 {@link android.telecom.Callback} implementation, if desired.
 <p>
 Use {@link android.telecom.Call#registerandroid.telecom.Callback(android.telecom.Callback)} to register your callback(s).  Ensure
 {@link android.telecom.Call#unregisterandroid.telecom.Callback(android.telecom.Callback)} is called when you no longer require callbacks
 (typically in {@link android.telecom.InCallService#onCallRemoved(Call)}).
 Note: Callbacks which occur before you call {@link android.telecom.Call#registerandroid.telecom.Callback(android.telecom.Callback)} will not
 reach your implementation of {@link android.telecom.Callback}, so it is important to register your callback
 as soon as your {@link android.telecom.InCallService} is notified of a new call via
 {@link android.telecom.InCallService#onCallAdded(Call)}.
*/
var Callback = {

/** Handover failure reason returned via {@link #onHandoverFailed(Call, int)} when the app
 to handover the call to rejects the handover request.
 <p>
 Will be returned when {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} is called
 and the destination {@link android.telecom.PhoneAccountHandle}'s {@link android.telecom.ConnectionService} returns a
 {@code null} {@link android.telecom.Connection} from
 {@link android.telecom.ConnectionService#onCreateOutgoingHandoverConnection(PhoneAccountHandle,
 ConnectionRequest)}.
 <p>
 For more information on call handovers, see
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)}.
*/
HANDOVER_FAILURE_DEST_APP_REJECTED : "1",
/** Handover failure reason returned via {@link #onHandoverFailed(Call, int)} when a handover
 is initiated but the source or destination app does not support handover.
 <p>
 Will be returned when a handover is requested via
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)} and the destination
 {@link android.telecom.PhoneAccountHandle} does not declare
 {@link android.telecom.PhoneAccount#EXTRA_SUPPORTS_HANDOVER_TO}.  May also be returned when a handover is
 requested at the {@link android.telecom.PhoneAccountHandle} for the current call (i.e. the source call's
 {@link android.telecom.Call.Details#getAccountHandle()}) does not declare
 {@link android.telecom.PhoneAccount#EXTRA_SUPPORTS_HANDOVER_FROM}.
 <p>
 For more information on call handovers, see
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)}.
*/
HANDOVER_FAILURE_NOT_SUPPORTED : "2",
/** Handover failure reason returned via {@link #onHandoverFailed(Call, int)} when the remote
 user rejects the handover request.
 <p>
 For more information on call handovers, see
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)}.
*/
HANDOVER_FAILURE_USER_REJECTED : "3",
/** Handover failure reason returned via {@link #onHandoverFailed(Call, int)} when there
 is ongoing emergency call.
 <p>
 This error code is returned when {@link #handoverTo(PhoneAccountHandle, int, Bundle)} is
 called on an emergency call, or if any other call is an emergency call.
 <p>
 Handovers are not permitted while there are ongoing emergency calls.
 <p>
 For more information on call handovers, see
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)}.
*/
HANDOVER_FAILURE_ONGOING_EMERGENCY_CALL : "4",
/** Handover failure reason returned via {@link #onHandoverFailed(Call, int)} when a handover
 fails for an unknown reason.
 <p>
 For more information on call handovers, see
 {@link #handoverTo(PhoneAccountHandle, int, Bundle)}.
*/
HANDOVER_FAILURE_UNKNOWN : "5",
/**Invoked when the state of this {@code Call} has changed. See {@link #getState}().
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Number} state The new state of the {@code Call}.
*/
onStateChanged : function(  ) {},

/**Invoked when the parent of this {@code Call} has changed. See {@link #getParent}().
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Object {Call}} parent The new parent of the {@code Call}.
*/
onParentChanged : function(  ) {},

/**Invoked when the children of this {@code Call} have changed. See {@link #getChildren}().
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Object {java.util.List}} children The new children of the {@code Call}.
*/
onChildrenChanged : function(  ) {},

/**Invoked when the details of this {@code Call} have changed. See {@link #getDetails}().
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Object {Call.Details}} details A {@code Details} object describing the {@code Call}.
*/
onDetailsChanged : function(  ) {},

/**Invoked when the text messages that can be used as responses to the incoming
 {@code Call} are loaded from the relevant database.
 See {@link #getCannedTextResponses}().
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Object {java.util.List}} cannedTextResponses The text messages useable as responses.
*/
onCannedTextResponsesLoaded : function(  ) {},

/**Invoked when the post-dial sequence in the outgoing {@code Call} has reached a pause
 character. This causes the post-dial signals to stop pending user confirmation. An
 implementation should present this choice to the user and invoke
 {@link #postDialContinue}(boolean) when the user makes the choice.
@param {Object {Call}} call The {@code Call} invoking this method.
@param {String} remainingPostDialSequence The post-dial characters that remain to be sent.
*/
onPostDialWait : function(  ) {},

/**Invoked when the {@code Call.VideoCall} of the {@code Call} has changed.
@param {Object {Call}} call The {@code Call} invoking this method.
@param {Object {InCallService.VideoCall}} videoCall The {@code Call.VideoCall} associated with the {@code Call}.
*/
onVideoCallChanged : function(  ) {},

/**Invoked when the {@code Call} is destroyed. Clients should refrain from cleaning
 up their UI for the {@code Call} in response to state transitions. Specifically,
 clients should not assume that a {@link #onStateChanged(Call, int)} with a state of
 {@link #STATE_DISCONNECTED} is the final notification the {@code Call} will send. Rather,
 clients should wait for this method to be invoked.
@param {Object {Call}} call The {@code Call} being destroyed.
*/
onCallDestroyed : function(  ) {},

/**Invoked upon changes to the set of {@code Call}s with which this {@code Call} can be
 conferenced.
@param {Object {Call}} call The {@code Call} being updated.
@param {Object {java.util.List}} conferenceableCalls The {@code Call}s with which this {@code Call} can be
          conferenced.
*/
onConferenceableCallsChanged : function(  ) {},

/**Invoked when a {@link android.telecom.Call} receives an event from its associated {@link android.telecom.Connection}.
 <p>
 Where possible, the Call should make an attempt to handle {@link android.telecom.Connection} events which
 are part of the {@code android.telecom.*} namespace.  The Call should ignore any events
 it does not wish to handle.  Unexpected events should be handled gracefully, as it is
 possible that a {@link android.telecom.ConnectionService} has defined its own Connection events which a
 Call is not aware of.
 <p>
 See {@link android.telecom.Connection#sendandroid.telecom.ConnectionEvent(String, Bundle)}.
@param {Object {Call}} call The {@code Call} receiving the event.
@param {String} event The event.
@param {Object {Bundle}} extras Extras associated with the connection event.
*/
onConnectionEvent : function(  ) {},

/**Invoked when the RTT mode changes for this call.
@param {Object {Call}} call The call whose RTT mode has changed.
@param {Number} mode the new RTT mode, one of
 {@link RttCall#RTT_MODE_FULL}, {@link RttCall#RTT_MODE_HCO},
             or {@link RttCall#RTT_MODE_VCO}
*/
onRttModeChanged : function(  ) {},

/**Invoked when the call's RTT status changes, either from off to on or from on to off.
@param {Object {Call}} call The call whose RTT status has changed.
@param {Boolean} enabled whether RTT is now enabled or disabled
@param {Object {Call.RttCall}} rttCall the {@link RttCall} object to use for reading and writing if RTT is now
                on, null otherwise.
*/
onRttStatusChanged : function(  ) {},

/**Invoked when the remote end of the connection has requested that an RTT communication
 channel be opened. A response to this should be sent via {@link #respondToRttRequest}
 with the same ID that this method is invoked with.
@param {Object {Call}} call The call which the RTT request was placed on
@param {Number} id The ID of the request.
*/
onRttRequest : function(  ) {},

/**Invoked when the RTT session failed to initiate for some reason, including rejection
 by the remote party.
@param {Object {Call}} call The call which the RTT initiation failure occurred on.
@param {Number} reason One of the status codes defined in
               {@link android.telecom.Connection.RttModifyStatus}, with the exception of
               {@link android.telecom.Connection.RttModifyStatus#SESSION_MODIFY_REQUEST_SUCCESS}.
*/
onRttInitiationFailure : function(  ) {},

/**Invoked when Call handover from one {@link android.telecom.PhoneAccount} to other {@link android.telecom.PhoneAccount}
 has completed successfully.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
@param {Object {Call}} call The call which had initiated handover.
*/
onHandoverComplete : function(  ) {},

/**Invoked when Call handover from one {@link android.telecom.PhoneAccount} to other {@link android.telecom.PhoneAccount}
 has failed.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
@param {Object {Call}} call The call which had initiated handover.
@param {Number} failureReason Error reason for failure.
*/
onHandoverFailed : function(  ) {},


};