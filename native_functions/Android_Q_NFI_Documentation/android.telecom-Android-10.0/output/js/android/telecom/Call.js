/**@class android.telecom.Call
@extends java.lang.Object

 Represents an ongoing phone call that the in-call app should present to the user.
*/
var Call = {

/** The state of a {@code Call} when newly created.
*/
STATE_NEW : "0",
/** The state of an outgoing {@code Call} when dialing the remote number, but not yet connected.
*/
STATE_DIALING : "1",
/** The state of an incoming {@code Call} when ringing locally, but not yet connected.
*/
STATE_RINGING : "2",
/** The state of a {@code Call} when in a holding state.
*/
STATE_HOLDING : "3",
/** The state of a {@code Call} when actively supporting conversation.
*/
STATE_ACTIVE : "4",
/** The state of a {@code Call} when no further voice or other communication is being
 transmitted, the remote side has been or will inevitably be informed that the {@code Call}
 is no longer active, and the local data transport has or inevitably will release resources
 associated with this {@code Call}.
*/
STATE_DISCONNECTED : "7",
/** The state of an outgoing {@code Call} when waiting on user to select a
 {@link android.telecom.PhoneAccount} through which to place the call.
*/
STATE_SELECT_PHONE_ACCOUNT : "8",
/** @hide
 @deprecated use STATE_SELECT_PHONE_ACCOUNT.
*/
STATE_PRE_DIAL_WAIT : "8",
/** The initial state of an outgoing {@code Call}.
 Common transitions are to {@link #STATE_DIALING} state for a successful call or
 {@link #STATE_DISCONNECTED} if it failed.
*/
STATE_CONNECTING : "9",
/** The state of a {@code Call} when the user has initiated a disconnection of the call, but the
 call has not yet been disconnected by the underlying {@code ConnectionService}.  The next
 state of the call is (potentially) {@link #STATE_DISCONNECTED}.
*/
STATE_DISCONNECTING : "10",
/** The state of an external call which is in the process of being pulled from a remote device to
 the local device.
 <p>
 A call can only be in this state if the {@link android.telecom.Call.Details#PROPERTY_IS_EXTERNAL_CALL} property
 and {@link android.telecom.Call.Details#CAPABILITY_CAN_PULL_CALL} capability are set on the call.
 <p>
 An {@link android.telecom.InCallService} will only see this state if it has the
 {@link android.telecom.TelecomManager#METADATA_INCLUDE_EXTERNAL_CALLS} metadata set to {@code true} in its
 manifest.
*/
STATE_PULLING_CALL : "11",
/** The key to retrieve the optional {@code PhoneAccount}s Telecom can bundle with its Call
 extras. Used to pass the phone accounts to display on the front end to the user in order to
 select phone accounts to (for example) place a call.
 @deprecated Use the list from {@link #EXTRA_SUGGESTED_PHONE_ACCOUNTS} instead.
*/
AVAILABLE_PHONE_ACCOUNTS : "selectPhoneAccountAccounts",
/** Key for extra used to pass along a list of {@link android.telecom.PhoneAccountSuggestion}s to the in-call
 UI when a call enters the {@link #STATE_SELECT_PHONE_ACCOUNT} state. The list included here
 will have the same length and be in the same order as the list passed with
 {@link #AVAILABLE_PHONE_ACCOUNTS}.
*/
EXTRA_SUGGESTED_PHONE_ACCOUNTS : "android.telecom.extra.SUGGESTED_PHONE_ACCOUNTS",
/** Extra key used to indicate the time (in milliseconds since midnight, January 1, 1970 UTC)
 when the last outgoing emergency call was made.  This is used to identify potential emergency
 callbacks.
*/
EXTRA_LAST_EMERGENCY_CALLBACK_TIME_MILLIS : "android.telecom.extra.LAST_EMERGENCY_CALLBACK_TIME_MILLIS",
/** Extra key used to indicate whether a {@link android.telecom.CallScreeningService} has requested to silence
 the ringtone for a call.  If the {@link android.telecom.InCallService} declares
 {@link android.telecom.TelecomManager#METADATA_IN_CALL_SERVICE_RINGING} in its manifest, it should not
 play a ringtone for an incoming call with this extra key set.
*/
EXTRA_SILENT_RINGING_REQUESTED : "android.telecom.extra.SILENT_RINGING_REQUESTED",
/** Call event sent from a {@link android.telecom.Call} via {@link #sendCallEvent(String, Bundle)} to inform
 Telecom that the user has requested that the current {@link android.telecom.Call} should be handed over
 to another {@link android.telecom.ConnectionService}.
 <p>
 The caller must specify the {@link #EXTRA_HANDOVER_PHONE_ACCOUNT_HANDLE} to indicate to
 Telecom which {@link android.telecom.PhoneAccountHandle} the {@link android.telecom.Call} should be handed over to.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_REQUEST_HANDOVER : "android.telecom.event.REQUEST_HANDOVER",
/** Extra key used with the {@link #EVENT_REQUEST_HANDOVER} call event.  Specifies the
 {@link android.telecom.PhoneAccountHandle} to which a call should be handed over to.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EXTRA_HANDOVER_PHONE_ACCOUNT_HANDLE : "android.telecom.extra.HANDOVER_PHONE_ACCOUNT_HANDLE",
/** Integer extra key used with the {@link #EVENT_REQUEST_HANDOVER} call event.  Specifies the
 video state of the call when it is handed over to the new {@link android.telecom.PhoneAccount}.
 <p>
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL}, {@link android.telecom.VideoProfile#STATE_RX_ENABLED}, and
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED}.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EXTRA_HANDOVER_VIDEO_STATE : "android.telecom.extra.HANDOVER_VIDEO_STATE",
/** Extra key used with the {@link #EVENT_REQUEST_HANDOVER} call event.  Used by the
 {@link android.telecom.InCallService} initiating a handover to provide a {@link Bundle} with extra
 information to the handover {@link android.telecom.ConnectionService} specified by
 {@link #EXTRA_HANDOVER_PHONE_ACCOUNT_HANDLE}.
 <p>
 This {@link Bundle} is not interpreted by Telecom, but passed as-is to the
 {@link android.telecom.ConnectionService} via the request extras when
 {@link android.telecom.ConnectionService#onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}
 is called to initate the handover.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EXTRA_HANDOVER_EXTRAS : "android.telecom.extra.HANDOVER_EXTRAS",
/** Call event sent from Telecom to the handover {@link android.telecom.ConnectionService} via
 {@link android.telecom.Connection#onCallEvent(String, Bundle)} to inform a {@link android.telecom.Connection} that a handover
 to the {@link android.telecom.ConnectionService} has completed successfully.
 <p>
 A handover is initiated with the {@link #EVENT_REQUEST_HANDOVER} call event.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_HANDOVER_COMPLETE : "android.telecom.event.HANDOVER_COMPLETE",
/** Call event sent from Telecom to the handover destination {@link android.telecom.ConnectionService} via
 {@link android.telecom.Connection#onCallEvent(String, Bundle)} to inform the handover destination that the
 source connection has disconnected.  The {@link Bundle} parameter for the call event will be
 {@code null}.
 <p>
 A handover is initiated with the {@link #EVENT_REQUEST_HANDOVER} call event.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_HANDOVER_SOURCE_DISCONNECTED : "android.telecom.event.HANDOVER_SOURCE_DISCONNECTED",
/** Call event sent from Telecom to the handover {@link android.telecom.ConnectionService} via
 {@link android.telecom.Connection#onCallEvent(String, Bundle)} to inform a {@link android.telecom.Connection} that a handover
 to the {@link android.telecom.ConnectionService} has failed.
 <p>
 A handover is initiated with the {@link #EVENT_REQUEST_HANDOVER} call event.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_HANDOVER_FAILED : "android.telecom.event.HANDOVER_FAILED",
/**Obtains the post-dial sequence remaining to be emitted by this {@code Call}, if any.
@return {String} The remaining post-dial sequence, or {@code null} if there is no post-dial sequence
 remaining or this {@code Call} is not in a post-dial state.
*/
getRemainingPostDialSequence : function(  ) {},

/**Instructs this {@link #STATE_RINGING} {@code Call} to answer.
@param {Number} videoState The video state in which to answer the call.
*/
answer : function(  ) {},

/**Instructs this {@link #STATE_RINGING} {@code Call} to deflect.
@param {Object {Uri}} address The address to which the call will be deflected.
*/
deflect : function(  ) {},

/**Instructs this {@link #STATE_RINGING} {@code Call} to reject.
@param {Boolean} rejectWithMessage Whether to reject with a text message.
@param {String} textMessage An optional text message with which to respond.
*/
reject : function(  ) {},

/**Instructs this {@code Call} to disconnect.
*/
disconnect : function(  ) {},

/**Instructs this {@code Call} to go on hold.
*/
hold : function(  ) {},

/**Instructs this {@link #STATE_HOLDING} call to release from hold.
*/
unhold : function(  ) {},

/**Instructs this {@code Call} to play a dual-tone multi-frequency signaling (DTMF) tone.

 Any other currently playing DTMF tone in the specified call is immediately stopped.
@param {String} digit A character representing the DTMF digit for which to play the tone. This
         value must be one of {@code '0'} through {@code '9'}, {@code '*'} or {@code '#'}.
*/
playDtmfTone : function(  ) {},

/**Instructs this {@code Call} to stop any dual-tone multi-frequency signaling (DTMF) tone
 currently playing.

 DTMF tones are played by calling {@link #playDtmfTone}(char). If no DTMF tone is
 currently playing, this method will do nothing.
*/
stopDtmfTone : function(  ) {},

/**Instructs this {@code Call} to continue playing a post-dial DTMF string.

 A post-dial DTMF string is a string of digits entered after a phone number, when dialed,
 that are immediately sent as DTMF tones to the recipient as soon as the connection is made.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_PAUSE} symbol, this
 {@code Call} will temporarily pause playing the tones for a pre-defined period of time.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_WAIT} symbol, this
 {@code Call} will pause playing the tones and notify callbacks via
 {@link android.telecom.Callback#onPostDialWait(android.telecom.Call, String)}. At this point, the in-call app
 should display to the user an indication of this state and an affordance to continue
 the postdial sequence. When the user decides to continue the postdial sequence, the in-call
 app should invoke the {@link #postDialContinue}(boolean) method.
@param {Boolean} proceed Whether or not to continue with the post-dial sequence.
*/
postDialContinue : function(  ) {},

/**Notifies this {@code Call} that an account has been selected and to proceed with placing
 an outgoing call. Optionally sets this account as the default account.
*/
phoneAccountSelected : function(  ) {},

/**Instructs this {@code Call} to enter a conference.
@param {Object {Call}} callToConferenceWith The other call with which to conference.
*/
conference : function(  ) {},

/**Instructs this {@code Call} to split from any conference call with which it may be
 connected.
*/
splitFromConference : function(  ) {},

/**Merges the calls within this conference. See {@link android.telecom.Call.Details#CAPABILITY_MERGE_CONFERENCE}.
*/
mergeConference : function(  ) {},

/**Swaps the calls within this conference. See {@link android.telecom.Call.Details#CAPABILITY_SWAP_CONFERENCE}.
*/
swapConference : function(  ) {},

/**Initiates a request to the {@link android.telecom.ConnectionService} to pull an external call to the local
 device.
 <p>
 Calls to this method are ignored if the call does not have the
 {@link android.telecom.Call.Details#PROPERTY_IS_EXTERNAL_CALL} property set.
 <p>
 An {@link android.telecom.InCallService} will only see calls which support this method if it has the
 {@link android.telecom.TelecomManager#METADATA_INCLUDE_EXTERNAL_CALLS} metadata set to {@code true}
 in its manifest.
*/
pullExternalCall : function(  ) {},

/**Sends a {@code Call} event from this {@code Call} to the associated {@link android.telecom.Connection} in
 the {@link android.telecom.ConnectionService}.
 <p>
 Call events are used to communicate point in time information from an {@link android.telecom.InCallService}
 to a {@link android.telecom.ConnectionService}.  A {@link android.telecom.ConnectionService} implementation could define
 events which enable the {@link android.telecom.InCallService}, for example, toggle a unique feature of the
 {@link android.telecom.ConnectionService}.
 <p>
 A {@link android.telecom.ConnectionService} can communicate to the {@link android.telecom.InCallService} using
 {@link android.telecom.Connection#sendandroid.telecom.ConnectionEvent(String, Bundle)}.
 <p>
 Events are exposed to {@link android.telecom.ConnectionService} implementations via
 {@link android.telecom.Connection#onCallEvent(String, Bundle)}.
 <p>
 No assumptions should be made as to how a {@link android.telecom.ConnectionService} will handle these events.
 The {@link android.telecom.InCallService} must assume that the {@link android.telecom.ConnectionService} could chose to
 ignore some events altogether.
 <p>
 Events should be fully qualified (e.g., {@code com.example.event.MY_EVENT}) to avoid
 conflicts between {@link android.telecom.InCallService} implementations.  Further, {@link android.telecom.InCallService}
 implementations shall not re-purpose events in the {@code android.*} namespace, nor shall
 they define their own event types in this namespace.  When defining a custom event type,
 ensure the contents of the extras {@link Bundle} is clearly defined.  Extra keys for this
 bundle should be named similar to the event type (e.g. {@code com.example.extra.MY_EXTRA}).
 <p>
 When defining events and the associated extras, it is important to keep their behavior
 consistent when the associated {@link android.telecom.InCallService} is updated.  Support for deprecated
 events/extras should me maintained to ensure backwards compatibility with older
 {@link android.telecom.ConnectionService} implementations which were built to support the older behavior.
@param {String} event The connection event.
@param {Object {Bundle}} extras Bundle containing extra information associated with the event.
*/
sendCallEvent : function(  ) {},

/**Sends an RTT upgrade request to the remote end of the connection. Success is not
 guaranteed, and notification of success will be via the
 {@link android.telecom.Callback#onRttStatusChanged(android.telecom.Call, boolean, Rttandroid.telecom.Call)} callback.
*/
sendRttRequest : function(  ) {},

/**Responds to an RTT request received via the {@link android.telecom.Callback#onRttRequest(android.telecom.Call, int)} )}
 callback.
 The ID used here should be the same as the ID that was received via the callback.
@param {Number} id The request ID received via {@link Callback#onRttRequest(Call, int)}
@param {Boolean} accept {@code true} if the RTT request should be accepted, {@code false} otherwise.
*/
respondToRttRequest : function(  ) {},

/**Initiates a handover of this {@link android.telecom.Call} to the {@link android.telecom.ConnectionService} identified
 by {@code toHandle}.  The videoState specified indicates the desired video state after the
 handover.
 <p>
 A call handover is the process where an ongoing call is transferred from one app (i.e.
 {@link android.telecom.ConnectionService} to another app.  The user could, for example, choose to continue a
 mobile network call in a video calling app.  The mobile network call via the Telephony stack
 is referred to as the source of the handover, and the video calling app is referred to as the
 destination.
 <p>
 When considering a handover scenario the device this method is called on is considered the
 <em>initiating</em> device (since the user initiates the handover from this device), and the
 other device is considered the <em>receiving</em> device.
 <p>
 When this method is called on the <em>initiating</em> device, the Telecom framework will bind
 to the {@link android.telecom.ConnectionService} defined by the {@code toHandle} {@link android.telecom.PhoneAccountHandle}
 and invoke
 {@link android.telecom.ConnectionService#onCreateOutgoingHandoverConnection(PhoneAccountHandle,
 ConnectionRequest)} to inform the destination app that a request has been made to handover a
 call to it.  The app returns an instance of {@link android.telecom.Connection} to represent the handover call
 At this point the app should display UI to indicate to the user that a call
 handover is in process.
 <p>
 The destination app is responsible for communicating the handover request from the
 <em>initiating</em> device to the <em>receiving</em> device.
 <p>
 When the app on the <em>receiving</em> device receives the handover request, it calls
 {@link TelecomManager#acceptHandover(Uri, int, android.telecom.PhoneAccountHandle)} to continue the handover
 process from the <em>initiating</em> device to the <em>receiving</em> device.  At this point
 the destination app on the <em>receiving</em> device should show UI to allow the user to
 choose whether they want to continue their call in the destination app.
 <p>
 When the destination app on the <em>receiving</em> device calls
 {@link TelecomManager#acceptHandover(Uri, int, android.telecom.PhoneAccountHandle)}, Telecom will bind to its
 {@link android.telecom.ConnectionService} and call
 {@link android.telecom.ConnectionService#onCreateIncomingHandoverConnection(PhoneAccountHandle,
 ConnectionRequest)} to inform it of the handover request.  The app returns an instance of
 {@link android.telecom.Connection} to represent the handover call.
 <p>
 If the user of the <em>receiving</em> device accepts the handover, the app calls
 {@link android.telecom.Connection#setActive()} to complete the handover process; Telecom will disconnect the
 original call.  If the user rejects the handover, the app calls
 {@link android.telecom.Connection#setDisconnected(DisconnectCause)} and specifies a {@link android.telecom.DisconnectCause}
 of {@link android.telecom.DisconnectCause#CANCELED} to indicate that the handover has been cancelled.
 <p>
 Telecom will only allow handovers from {@link android.telecom.PhoneAccount}s which declare
 {@link android.telecom.PhoneAccount#EXTRA_SUPPORTS_HANDOVER_FROM}.  Similarly, the {@link android.telecom.PhoneAccount}
 specified by {@code toHandle} must declare {@link android.telecom.PhoneAccount#EXTRA_SUPPORTS_HANDOVER_TO}.
 <p>
 Errors in the handover process are reported to the {@link android.telecom.InCallService} via
 {@link android.telecom.Callback#onHandoverFailed(android.telecom.Call, int)}.  Errors in the handover process are reported to
 the involved {@link android.telecom.ConnectionService}s via
 {@link android.telecom.ConnectionService#onHandoverFailed(ConnectionRequest, int)}.
@param {Object {PhoneAccountHandle}} toHandle {@link PhoneAccountHandle} of the {@link ConnectionService} to handover
                 this call to.
@param {Number} videoState Indicates the video state desired after the handover (see the
               {@code STATE_*} constants defined in {@link VideoProfile}).
@param {Object {Bundle}} extras Bundle containing extra information to be passed to the
               {@link ConnectionService}
*/
handoverTo : function(  ) {},

/**Terminate the RTT session on this call. The resulting state change will be notified via
 the {@link android.telecom.Callback#onRttStatusChanged(android.telecom.Call, boolean, Rttandroid.telecom.Call)} callback.
*/
stopRtt : function(  ) {},

/**Adds some extras to this {@link android.telecom.Call}.  Existing keys are replaced and new ones are
 added.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these
 extras.  Keys should be fully qualified (e.g., com.example.MY_EXTRA) to avoid conflicts.
@param {Object {Bundle}} extras The extras to add.
*/
putExtras : function(  ) {},

/**Adds a boolean extra to this {@link android.telecom.Call}.
@param {String} key The extra key.
@param {Boolean} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds an integer extra to this {@link android.telecom.Call}.
@param {String} key The extra key.
@param {Number} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds a string extra to this {@link android.telecom.Call}.
@param {String} key The extra key.
@param {String} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Removes extras from this {@link android.telecom.Call}.
@param {Object {java.util.List}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Removes extras from this {@link android.telecom.Call}.
@param {Object {java.lang.String[]}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Obtains the parent of this {@code Call} in a conference, if any.
@return {Object {android.telecom.Call}} The parent {@code Call}, or {@code null} if this {@code Call} is not a
 child of any conference {@code Call}s.
*/
getParent : function(  ) {},

/**Obtains the children of this conference {@code Call}, if any.
@return {Object {java.util.List}} The children of this {@code Call} if this {@code Call} is a conference, or an empty
 {@code List} otherwise.
*/
getChildren : function(  ) {},

/**Returns the list of {@code Call}s with which this {@code Call} is allowed to conference.
@return {Object {java.util.List}} The list of conferenceable {@code Call}s.
*/
getConferenceableCalls : function(  ) {},

/**Obtains the state of this {@code Call}.
@return {Number} A state value, chosen from the {@code STATE_*} constants.
*/
getState : function(  ) {},

/**Obtains a list of canned, pre-configured message responses to present to the user as
 ways of rejecting this {@code Call} using via a text message.
@see #reject(boolean, String)
@return {Object {java.util.List}} A list of canned text message responses.
*/
getCannedTextResponses : function(  ) {},

/**Obtains an object that can be used to display video from this {@code Call}.
@return {Object {android.telecom.InCallService.VideoCall}} An {@code Call.VideoCall}.
*/
getVideoCall : function(  ) {},

/**Obtains an object containing call details.
@return {Object {android.telecom.Call.Details}} A {@link Details} object. Depending on the state of the {@code Call}, the
 result may be {@code null}.
*/
getDetails : function(  ) {},

/**Returns this call's RttCall object. The {@link android.telecom.Call.RttCall} instance is used to send and
 receive RTT text data, as well as to change the RTT mode.
@return {Object {android.telecom.Call.RttCall}} A {@link Call.RttCall}. {@code null} if there is no active RTT connection.
*/
getRttCall : function(  ) {},

/**Returns whether this call has an active RTT connection.
@return {Boolean} true if there is a connection, false otherwise.
*/
isRttActive : function(  ) {},

/**Registers a callback to this {@code Call}.
@param {Object {Call.Callback}} callback A {@code Callback}.
*/
registerCallback : function(  ) {},

/**Registers a callback to this {@code Call}.
@param {Object {Call.Callback}} callback A {@code Callback}.
@param {Object {Handler}} handler A handler which command and status changes will be delivered to.
*/
registerCallback : function(  ) {},

/**Unregisters a callback from this {@code Call}.
@param {Object {Call.Callback}} callback A {@code Callback}.
*/
unregisterCallback : function(  ) {},

/**
*/
toString : function(  ) {},

/**Adds a listener to this {@code Call}.
@param {Object {Call.Listener}} listener A {@code Listener}.
@deprecated Use {@link #registerCallback} instead.
@hide 
*/
addListener : function(  ) {},

/**Removes a listener from this {@code Call}.
@param {Object {Call.Listener}} listener A {@code Listener}.
@deprecated Use {@link #unregisterCallback} instead.
@hide 
*/
removeListener : function(  ) {},


};