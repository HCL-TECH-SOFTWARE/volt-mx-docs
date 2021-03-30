/**@class android.telecom.Connection
@extends android.telecom.Conferenceable

 Represents a phone call or connection to a remote endpoint that carries voice and/or video
 traffic.
 <p>
 Implementations create a custom subclass of {@code Connection} and return it to the framework
 as the return value of
 {@link android.telecom.ConnectionService#onCreateIncomingConnection(PhoneAccountHandle, ConnectionRequest)}
 or
 {@link android.telecom.ConnectionService#onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
 Implementations are then responsible for updating the state of the {@code Connection}, and
 must call {@link #destroy}() to signal to the framework that the {@code Connection} is no
 longer used and associated resources may be recovered.
 <p>
 Subclasses of {@code Connection} override the {@code on*} methods to provide the the
 {@link android.telecom.ConnectionService}'s implementation of calling functionality.  The {@code on*} methods are
 called by Telecom to inform an instance of a {@code Connection} of actions specific to that
 {@code Connection} instance.
 <p>
 Basic call support requires overriding the following methods: {@link #onAnswer}(),
 {@link #onDisconnect}(), {@link #onReject}(), {@link #onAbort}()
 <p>
 Where a {@code Connection} has {@link #CAPABILITY_SUPPORT_HOLD}, the {@link #onHold}() and
 {@link #onUnhold}() methods should be overridden to provide hold support for the
 {@code Connection}.
 <p>
 Where a {@code Connection} supports a variation of video calling (e.g. the
 {@code CAPABILITY_SUPPORTS_VT_*} capability bits), {@link #onAnswer}(int) should be overridden
 to support answering a call as a video call.
 <p>
 Where a {@code Connection} has {@link #PROPERTY_IS_EXTERNAL_CALL} and
 {@link #CAPABILITY_CAN_PULL_CALL}, {@link #onPullExternalCall}() should be overridden to provide
 support for pulling the external call.
 <p>
 Where a {@code Connection} supports conference calling {@link #onSeparate}() should be
 overridden.
 <p>
 There are a number of other {@code on*} methods which a {@code Connection} can choose to
 implement, depending on whether it is concerned with the associated calls from Telecom.  If,
 for example, call events from a {@link android.telecom.InCallService} are handled,
 {@link #onCallEvent(String, Bundle)} should be overridden.  Another example is
 {@link #onExtrasChanged}(Bundle), which should be overridden if the {@code Connection} wishes to
 make use of extra information provided via the {@link android.telecom.Call#putExtras(Bundle)} and
 {@link android.telecom.Call#removeExtras(String...)} methods.
*/
var Connection = {

/** The connection is initializing. This is generally the first state for a {@code Connection}
 returned by a {@link android.telecom.ConnectionService}.
*/
STATE_INITIALIZING : "0",
/** The connection is new and not connected.
*/
STATE_NEW : "1",
/** An incoming connection is in the ringing state. During this state, the user's ringer or
 vibration feature will be activated.
*/
STATE_RINGING : "2",
/** An outgoing connection is in the dialing state. In this state the other party has not yet
 answered the call and the user traditionally hears a ringback tone.
*/
STATE_DIALING : "3",
/** A connection is active. Both parties are connected to the call and can actively communicate.
*/
STATE_ACTIVE : "4",
/** A connection is on hold.
*/
STATE_HOLDING : "5",
/** A connection has been disconnected. This is the final state once the user has been
 disconnected from a call either locally, remotely or by an error in the service.
*/
STATE_DISCONNECTED : "6",
/** The state of an external connection which is in the process of being pulled from a remote
 device to the local device.
 <p>
 A connection can only be in this state if the {@link #PROPERTY_IS_EXTERNAL_CALL} property and
 {@link #CAPABILITY_CAN_PULL_CALL} capability bits are set on the connection.
*/
STATE_PULLING_CALL : "7",
/** Connection can currently be put on hold or unheld. This is distinct from
 {@link #CAPABILITY_SUPPORT_HOLD} in that although a connection may support 'hold' most times,
 it does not at the moment support the function. This can be true while the call is in the
 state {@link #STATE_DIALING}, for example. During this condition, an in-call UI may
 display a disabled 'hold' button.
*/
CAPABILITY_HOLD : "1",
/**Connection supports the hold feature. */
CAPABILITY_SUPPORT_HOLD : "2",
/** Connections within a conference can be merged. A {@link android.telecom.ConnectionService} has the option to
 add a {@link android.telecom.Conference} before the child {@link android.telecom.Connection}s are merged. This is how
 CDMA-based {@link android.telecom.Connection}s are implemented. For these unmerged {@link android.telecom.Conference}s, this
 capability allows a merge button to be shown while the conference is in the foreground
 of the in-call UI.
 <p>
 This is only intended for use by a {@link android.telecom.Conference}.
*/
CAPABILITY_MERGE_CONFERENCE : "4",
/** Connections within a conference can be swapped between foreground and background.
 See {@link #CAPABILITY_MERGE_CONFERENCE} for additional information.
 <p>
 This is only intended for use by a {@link android.telecom.Conference}.
*/
CAPABILITY_SWAP_CONFERENCE : "8",
/** @hide
*/
CAPABILITY_UNUSED : "16",
/**Connection supports responding via text option. */
CAPABILITY_RESPOND_VIA_TEXT : "32",
/**Connection can be muted. */
CAPABILITY_MUTE : "64",
/** Connection supports conference management. This capability only applies to
 {@link android.telecom.Conference}s which can have {@link android.telecom.Connection}s as children.
*/
CAPABILITY_MANAGE_CONFERENCE : "128",
/** Local device supports receiving video.
*/
CAPABILITY_SUPPORTS_VT_LOCAL_RX : "256",
/** Local device supports transmitting video.
*/
CAPABILITY_SUPPORTS_VT_LOCAL_TX : "512",
/** Local device supports bidirectional video calling.
*/
CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL : "768",
/** Remote device supports receiving video.
*/
CAPABILITY_SUPPORTS_VT_REMOTE_RX : "1024",
/** Remote device supports transmitting video.
*/
CAPABILITY_SUPPORTS_VT_REMOTE_TX : "2048",
/** Remote device supports bidirectional video calling.
*/
CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL : "3072",
/** Connection is able to be separated from its parent {@code Conference}, if any.
*/
CAPABILITY_SEPARATE_FROM_CONFERENCE : "4096",
/** Connection is able to be individually disconnected when in a {@code Conference}.
*/
CAPABILITY_DISCONNECT_FROM_CONFERENCE : "8192",
/** Un-used.
 @hide
*/
CAPABILITY_UNUSED_2 : "16384",
/** Un-used.
 @hide
*/
CAPABILITY_UNUSED_3 : "32768",
/** Un-used.
 @hide
*/
CAPABILITY_UNUSED_4 : "65536",
/** Un-used.
 @hide
*/
CAPABILITY_UNUSED_5 : "131072",
/** Speed up audio setup for MT call.
 @hide
*/
CAPABILITY_SPEED_UP_MT_AUDIO : "262144",
/** Call can be upgraded to a video call.
 @deprecated Use {@link #CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL} and
 {@link #CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL} to indicate for a call whether or not
 video calling is supported.
*/
CAPABILITY_CAN_UPGRADE_TO_VIDEO : "524288",
/** For video calls, indicates whether the outgoing video for the call can be paused using
 the {@link android.telecom.VideoProfile#STATE_PAUSED} VideoState.
*/
CAPABILITY_CAN_PAUSE_VIDEO : "1048576",
/** For a conference, indicates the conference will not have child connections.
 <p>
 An example of a conference with child connections is a GSM conference call, where the radio
 retains connections to the individual participants of the conference.  Another example is an
 IMS conference call where conference event package functionality is supported; in this case
 the conference server ensures the radio is aware of the participants in the conference, which
 are represented by child connections.
 <p>
 An example of a conference with no child connections is an IMS conference call with no
 conference event package support.  Such a conference is represented by the radio as a single
 connection to the IMS conference server.
 <p>
 Indicating whether a conference has children or not is important to help user interfaces
 visually represent a conference.  A conference with no children, for example, will have the
 conference connection shown in the list of calls on a Bluetooth device, where if the
 conference has children, only the children will be shown in the list of calls on a Bluetooth
 device.
 @hide
*/
CAPABILITY_CONFERENCE_HAS_NO_CHILDREN : "2097152",
/** Indicates that the connection itself wants to handle any sort of reply response, rather than
 relying on SMS.
*/
CAPABILITY_CAN_SEND_RESPONSE_VIA_CONNECTION : "4194304",
/** When set, prevents a video call from being downgraded to an audio-only call.
 <p>
 Should be set when the VideoState has the {@link android.telecom.VideoProfile#STATE_TX_ENABLED} or
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED} bits set to indicate that the connection cannot be
 downgraded from a video call back to a VideoState of
 {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY}.
 <p>
 Intuitively, a call which can be downgraded to audio should also have local and remote
 video
 capabilities (see {@link #CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL} and
 {@link #CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL}).
*/
CAPABILITY_CANNOT_DOWNGRADE_VIDEO_TO_AUDIO : "8388608",
/** When set for an external connection, indicates that this {@code Connection} can be pulled
 from a remote device to the current device.
 <p>
 Should only be set on a {@code Connection} where {@link #PROPERTY_IS_EXTERNAL_CALL}
 is set.
*/
CAPABILITY_CAN_PULL_CALL : "16777216",
/**Call supports the deflect feature. */
CAPABILITY_SUPPORT_DEFLECT : "33554432",
/** Indicates that the current device callback number should be shown.

 @hide
*/
PROPERTY_EMERGENCY_CALLBACK_MODE : "1",
/** Whether the call is a generic conference, where we do not know the precise state of
 participants in the conference (eg. on CDMA).

 @hide
*/
PROPERTY_GENERIC_CONFERENCE : "2",
/** Connection is using high definition audio.
 @hide
*/
PROPERTY_HIGH_DEF_AUDIO : "4",
/** Connection is using WIFI.
 @hide
*/
PROPERTY_WIFI : "8",
/** When set, indicates that the {@code Connection} does not actually exist locally for the
 {@link android.telecom.ConnectionService}.
 <p>
 Consider, for example, a scenario where a user has two devices with the same phone number.
 When a user places a call on one devices, the telephony stack can represent that call on the
 other device by adding is to the {@link android.telecom.ConnectionService} with the
 {@link #PROPERTY_IS_EXTERNAL_CALL} capability set.
 <p>
 An {@link android.telecom.ConnectionService} should not assume that all {@link android.telecom.InCallService}s will handle
 external connections.  Only those {@link android.telecom.InCallService}s which have the
 {@link android.telecom.TelecomManager#METADATA_INCLUDE_EXTERNAL_CALLS} metadata set to {@code true} in its
 manifest will see external connections.
*/
PROPERTY_IS_EXTERNAL_CALL : "16",
/** Indicates that the connection has CDMA Enhanced Voice Privacy enabled.
*/
PROPERTY_HAS_CDMA_VOICE_PRIVACY : "32",
/** Indicates that the connection represents a downgraded IMS conference.
 @hide
*/
PROPERTY_IS_DOWNGRADED_CONFERENCE : "64",
/** Set by the framework to indicate that the {@link android.telecom.Connection} originated from a self-managed
 {@link android.telecom.ConnectionService}.
 <p>
 See {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED}.
*/
PROPERTY_SELF_MANAGED : "128",
/** Set by the framework to indicate that a connection has an active RTT session associated with
 it.
*/
PROPERTY_IS_RTT : "256",
/** Set by the framework to indicate that a connection is using assisted dialing.
 @hide
*/
PROPERTY_ASSISTED_DIALING_USED : "512",
/** Set by the framework to indicate that the network has identified a Connection as an emergency
 call.
 @hide
*/
PROPERTY_NETWORK_IDENTIFIED_EMERGENCY_CALL : "1024",
/** Set by the framework to indicate that a Conference or Connection is hosted by a device other
 than the current one.  Used in scenarios where the conference originator is the remote device
 and the current device is a participant of that conference.
 @hide
*/
PROPERTY_REMOTELY_HOSTED : "2048",
/** Connection extra key used to store the last forwarded number associated with the current
 connection.  Used to communicate to the user interface that the connection was forwarded via
 the specified number.
*/
EXTRA_LAST_FORWARDED_NUMBER : "android.telecom.extra.LAST_FORWARDED_NUMBER",
/** Connection extra key used to store a child number associated with the current connection.
 Used to communicate to the user interface that the connection was received via
 a child address (i.e. phone number) associated with the {@link android.telecom.PhoneAccount}'s primary
 address.
*/
EXTRA_CHILD_ADDRESS : "android.telecom.extra.CHILD_ADDRESS",
/** Connection extra key used to store the subject for an incoming call.  The user interface can
 query this extra and display its contents for incoming calls.  Will only be used if the
 {@link android.telecom.PhoneAccount} supports the capability {@link android.telecom.PhoneAccount#CAPABILITY_CALL_SUBJECT}.
*/
EXTRA_CALL_SUBJECT : "android.telecom.extra.CALL_SUBJECT",
/** Boolean connection extra key set on a {@link android.telecom.Connection} in
 {@link android.telecom.Connection#STATE_RINGING} state to indicate that answering the call will cause the
 current active foreground call to be dropped.
*/
EXTRA_ANSWERING_DROPS_FG_CALL : "android.telecom.extra.ANSWERING_DROPS_FG_CALL",
/** String connection extra key set on a {@link android.telecom.Connection} in {@link android.telecom.Connection#STATE_RINGING}
 state to indicate the name of the third-party app which is responsible for the current
 foreground call.
 <p>
 Used when {@link #EXTRA_ANSWERING_DROPS_FG_CALL} is true to ensure that the default Phone app
 is able to inform the user that answering the new incoming call will cause a call owned by
 another app to be dropped when the incoming call is answered.
*/
EXTRA_ANSWERING_DROPS_FG_CALL_APP_NAME : "android.telecom.extra.ANSWERING_DROPS_FG_CALL_APP_NAME",
/** Boolean connection extra key on a {@link android.telecom.Connection} which indicates that adding an
 additional call is disallowed.
 @hide
*/
EXTRA_DISABLE_ADD_CALL : "android.telecom.extra.DISABLE_ADD_CALL",
/** String connection extra key on a {@link android.telecom.Connection} or {@link android.telecom.Conference} which contains the
 original Connection ID associated with the connection.  Used in
 {@link android.telecom.RemoteConnectionService} to track the Connection ID which was originally assigned to a
 connection/conference added via
 {@link android.telecom.ConnectionService#addExistingConnection(PhoneAccountHandle, Connection)} and
 {@link android.telecom.ConnectionService#addConference(Conference)} APIs.  This is important to pass to
 Telecom for when it deals with RemoteConnections.  When the ConnectionManager wraps the
 {@link android.telecom.RemoteConnection} and {@link android.telecom.RemoteConference} and adds it to Telecom, there needs to
 be a way to ensure that we don't add the connection again as a duplicate.
 <p>
 For example, the TelephonyCS calls addExistingConnection for a Connection with ID
 {@code TelephonyCS@1}.  The ConnectionManager learns of this via
 {@link android.telecom.ConnectionService#onRemoteExistingConnectionAdded(RemoteConnection)}, and wraps this
 in a new {@link android.telecom.Connection} which it adds to Telecom via
 {@link android.telecom.ConnectionService#addExistingConnection(PhoneAccountHandle, Connection)}.  As part of
 this process, the wrapped RemoteConnection gets assigned a new ID (e.g. {@code ConnMan@1}).
 The TelephonyCS will ALSO try to add the existing connection to Telecom, except with the
 ID it originally referred to the connection as.  Thus Telecom needs to know that the
 Connection with ID {@code ConnMan@1} is really the same as {@code TelephonyCS@1}.
 @hide
*/
EXTRA_ORIGINAL_CONNECTION_ID : "android.telecom.extra.ORIGINAL_CONNECTION_ID",
/** Boolean connection extra key set on the extras passed to
 {@link android.telecom.Connection#sendandroid.telecom.ConnectionEvent} which indicates that audio is present
 on the RTT call when the extra value is true.
*/
EXTRA_IS_RTT_AUDIO_PRESENT : "android.telecom.extra.IS_RTT_AUDIO_PRESENT",
/** Connection event used to inform Telecom that it should play the on hold tone.  This is used
 to play a tone when the peer puts the current call on hold.  Sent to Telecom via
 {@link #sendConnectionEvent(String, Bundle)}.
 @hide
*/
EVENT_ON_HOLD_TONE_START : "android.telecom.event.ON_HOLD_TONE_START",
/** Connection event used to inform Telecom that it should stop the on hold tone.  This is used
 to stop a tone when the peer puts the current call on hold.  Sent to Telecom via
 {@link #sendConnectionEvent(String, Bundle)}.
 @hide
*/
EVENT_ON_HOLD_TONE_END : "android.telecom.event.ON_HOLD_TONE_END",
/** Connection event used to inform {@link android.telecom.InCallService}s when pulling of an external call has
 failed.  The user interface should inform the user of the error.
 <p>
 Expected to be used by the {@link android.telecom.ConnectionService} when the {@link android.telecom.Call#pullExternalandroid.telecom.Call()}
 API is called on a {@link android.telecom.Call} with the properties
 {@link android.telecom.Call.Details#PROPERTY_IS_EXTERNAL_CALL} and
 {@link android.telecom.Call.Details#CAPABILITY_CAN_PULL_CALL}, but the {@link android.telecom.ConnectionService} could not
 pull the external call due to an error condition.
 <p>
 Sent via {@link #sendConnectionEvent(String, Bundle)}.  The {@link Bundle} parameter is
 expected to be null when this connection event is used.
*/
EVENT_CALL_PULL_FAILED : "android.telecom.event.CALL_PULL_FAILED",
/** Connection event used to inform {@link android.telecom.InCallService}s when the merging of two calls has
 failed. The User Interface should use this message to inform the user of the error.
 <p>
 Sent via {@link #sendConnectionEvent(String, Bundle)}.  The {@link Bundle} parameter is
 expected to be null when this connection event is used.
*/
EVENT_CALL_MERGE_FAILED : "android.telecom.event.CALL_MERGE_FAILED",
/** Connection event used to inform Telecom when a hold operation on a call has failed.
 Not intended for use by the UI at this time.
 Sent via {@link #sendConnectionEvent(String, Bundle)}.  The {@link Bundle} parameter is
 expected to be null when this connection event is used.
 @hide
*/
EVENT_CALL_HOLD_FAILED : "android.telecom.event.CALL_HOLD_FAILED",
/** Connection event used to inform {@link android.telecom.InCallService}s when the process of merging a
 Connection into a conference has begun.
 <p>
 Sent via {@link #sendConnectionEvent(String, Bundle)}.  The {@link Bundle} parameter is
 expected to be null when this connection event is used.
 @hide
*/
EVENT_MERGE_START : "android.telecom.event.MERGE_START",
/** Connection event used to inform {@link android.telecom.InCallService}s when the process of merging a
 Connection into a conference has completed.
 <p>
 Sent via {@link #sendConnectionEvent(String, Bundle)}.  The {@link Bundle} parameter is
 expected to be null when this connection event is used.
 @hide
*/
EVENT_MERGE_COMPLETE : "android.telecom.event.MERGE_COMPLETE",
/** Connection event used to inform {@link android.telecom.InCallService}s when a call has been put on hold by
 the remote party.
 <p>
 This is different than the {@link android.telecom.Connection#STATE_HOLDING} state which indicates that the
 call is being held locally on the device.  When a capable {@link android.telecom.ConnectionService} receives
 signalling to indicate that the remote party has put the call on hold, it can send this
 connection event.
 @hide
*/
EVENT_CALL_REMOTELY_HELD : "android.telecom.event.CALL_REMOTELY_HELD",
/** Connection event used to inform {@link android.telecom.InCallService}s when a call which was remotely held
 (see {@link #EVENT_CALL_REMOTELY_HELD}) has been un-held by the remote party.
 <p>
 This is different than the {@link android.telecom.Connection#STATE_HOLDING} state which indicates that the
 call is being held locally on the device.  When a capable {@link android.telecom.ConnectionService} receives
 signalling to indicate that the remote party has taken the call off hold, it can send this
 connection event.
 @hide
*/
EVENT_CALL_REMOTELY_UNHELD : "android.telecom.event.CALL_REMOTELY_UNHELD",
/** Connection event used to inform an {@link android.telecom.InCallService} which initiated a call handover via
 {@link android.telecom.Call#EVENT_REQUEST_HANDOVER} that the handover from this {@link android.telecom.Connection} has
 successfully completed.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_HANDOVER_COMPLETE : "android.telecom.event.HANDOVER_COMPLETE",
/** Connection event used to inform an {@link android.telecom.InCallService} which initiated a call handover via
 {@link android.telecom.Call#EVENT_REQUEST_HANDOVER} that the handover from this {@link android.telecom.Connection} has failed
 to complete.
 @hide
 @deprecated Use {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} and its associated
 APIs instead.
*/
EVENT_HANDOVER_FAILED : "android.telecom.event.HANDOVER_FAILED",
/** String Connection extra key used to store SIP invite fields for an incoming call for IMS call
*/
EXTRA_SIP_INVITE : "android.telecom.extra.SIP_INVITE",
/** Connection event used to inform an {@link android.telecom.InCallService} that the RTT audio indication
 has changed.
*/
EVENT_RTT_AUDIO_INDICATION_CHANGED : "android.telecom.event.RTT_AUDIO_INDICATION_CHANGED",
/**Whether the given capabilities support the specified capability.
@param {Number} capabilities A capability bit field.
@param {Number} capability The capability to check capabilities for.
@return {Boolean} Whether the specified capability is supported.
@hide 
*/
can : function(  ) {},

/**Whether the capabilities of this {@code Connection} supports the specified capability.
@param {Number} capability The capability to check capabilities for.
@return {Boolean} Whether the specified capability is supported.
@hide 
*/
can : function(  ) {},

/**Removes the specified capability from the set of capabilities of this {@code Connection}.
@param {Number} capability The capability to remove from the set.
@hide 
*/
removeCapability : function(  ) {},

/**Adds the specified capability to the set of capabilities of this {@code Connection}.
@param {Number} capability The capability to add to the set.
@hide 
*/
addCapability : function(  ) {},

/**Renders a set of capability bits ({@code CAPABILITY_*}) as a human readable string.
@param {Number} capabilities A capability bit field.
@return {String} A human readable string representation.
*/
capabilitiesToString : function(  ) {},

/**Renders a set of capability bits ({@code CAPABILITY_*}) as a *short* human readable
 string.
@param {Number} capabilities A capability bit field.
@return {String} A human readable string representation.
@hide 
*/
capabilitiesToStringShort : function(  ) {},

/**Renders a set of property bits ({@code PROPERTY_*}) as a human readable string.
@param {Number} properties A property bit field.
@return {String} A human readable string representation.
*/
propertiesToString : function(  ) {},

/**Renders a set of property bits ({@code PROPERTY_*}) as a *short* human readable string.
@param {Number} properties A property bit field.
@return {String} A human readable string representation.
@hide 
*/
propertiesToStringShort : function(  ) {},

/**Returns the Telecom internal call ID associated with this connection.  Should only be used
 for debugging and tracing purposes.
@return {String} The Telecom call ID.
@hide 
*/
getTelecomCallId : function(  ) {},

/**
@return {Object {android.net.Uri}} The address (e.g., phone number) to which this Connection is currently communicating.
*/
getAddress : function(  ) {},

/**
@return {Number} The presentation requirements for the address.
         See {@link TelecomManager} for valid values.
*/
getAddressPresentation : function(  ) {},

/**
@return {String} The caller display name (CNAP).
*/
getCallerDisplayName : function(  ) {},

/**
@return {Number} The presentation requirements for the handle.
         See {@link TelecomManager} for valid values.
*/
getCallerDisplayNamePresentation : function(  ) {},

/**
@return {Number} The state of this Connection.
*/
getState : function(  ) {},

/**Returns the video state of the connection.
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED}.
@return {Number} The video state of the connection.
@hide 
*/
getVideoState : function(  ) {},

/**
@return {Object {android.telecom.AudioState}} The audio state of the connection, describing how its audio is currently
         being routed by the system. This is {@code null} if this Connection
         does not directly know about its audio state.
@deprecated Use {@link #getCallAudioState()} instead.
@hide 
*/
getAudioState : function(  ) {},

/**
@return {Object {android.telecom.CallAudioState}} The audio state of the connection, describing how its audio is currently
         being routed by the system. This is {@code null} if this Connection
         does not directly know about its audio state.
*/
getCallAudioState : function(  ) {},

/**
@return {Object {android.telecom.Conference}} The conference that this connection is a part of.  Null if it is not part of any
         conference.
*/
getConference : function(  ) {},

/**Returns whether this connection is requesting that the system play a ringback tone
 on its behalf.
*/
isRingbackRequested : function(  ) {},

/**
@return {Boolean} True if the connection's audio mode is VOIP.
*/
getAudioModeIsVoip : function(  ) {},

/**Retrieves the connection start time of the {@code Connnection}, if specified.  A value of
 {@link android.telecom.Conference#CONNECT_TIME_NOT_SPECIFIED} indicates that Telecom should determine the
 start time of the conference.
@return {Number} The time at which the {@code Connnection} was connected.
@hide 
*/
getConnectTimeMillis : function(  ) {},

/**Retrieves the connection start time of the {@link android.telecom.Connection}, if specified.  A value of
 {@link android.telecom.Conference#CONNECT_TIME_NOT_SPECIFIED} indicates that Telecom should determine the
 start time of the conference.

 Based on the value of {@link SystemClock#elapsedRealtime()}, which ensures that wall-clock
 changes do not impact the call duration.
@return {Number} The time at which the {@link Connection} was connected.
@hide 
*/
getConnectElapsedTimeMillis : function(  ) {},

/**Returns RIL voice radio technology used for current connection.
@return {Number} the RIL voice radio technology used for current connection,
         see {@code RIL_RADIO_TECHNOLOGY_*} in {@link android.telephony.ServiceState}.
@hide 
*/
getCallRadioTech : function(  ) {},

/**
@return {Object {android.telecom.StatusHints}} The status hints for this connection.
*/
getStatusHints : function(  ) {},

/**Returns the extras associated with this connection.
 <p>
 Extras should be updated using {@link #putExtras}(Bundle).
 <p>
 Telecom or an {@link android.telecom.InCallService} can also update the extras via
 {@link android.telecom.Call#putExtras(Bundle)}, and
 {@link android.telecom.Call#removeExtras(List)}.
 <p>
 The connection is notified of changes to the extras made by Telecom or an
 {@link android.telecom.InCallService} by {@link #onExtrasChanged}(Bundle).
@return {Object {android.os.Bundle}} The extras associated with this connection.
*/
getExtras : function(  ) {},

/**Assign a listener to be notified of state changes.
@param {Object {Connection.Listener}} l A listener.
@return {Object {android.telecom.Connection}} This Connection.
@hide 
*/
addConnectionListener : function(  ) {},

/**Remove a previously assigned listener that was being notified of state changes.
@param {Object {Connection.Listener}} l A Listener.
@return {Object {android.telecom.Connection}} This Connection.
@hide 
*/
removeConnectionListener : function(  ) {},

/**
@return {Object {android.telecom.DisconnectCause}} The {@link DisconnectCause} for this connection.
*/
getDisconnectCause : function(  ) {},

/**Sets the telecom call ID associated with this Connection.  The Telecom Call ID should be used
 ONLY for debugging purposes.
@param {String} callId The telecom call ID.
@hide 
*/
setTelecomCallId : function(  ) {},

/**
@param {Number} state An integer value of a {@code STATE_*} constant.
@return {String} A string representation of the value.
*/
stateToString : function(  ) {},

/**Returns the connection's capabilities, as a bit mask of the {@code CAPABILITY_*} constants.
*/
getConnectionCapabilities : function(  ) {},

/**Returns the connection's properties, as a bit mask of the {@code PROPERTY_*} constants.
*/
getConnectionProperties : function(  ) {},

/**Returns the connection's supported audio routes.
@hide 
*/
getSupportedAudioRoutes : function(  ) {},

/**Sets the value of the {@link #getAddress}() property.
@param {Object {Uri}} address The new address.
@param {Number} presentation The presentation requirements for the address.
        See {@link TelecomManager} for valid values.
*/
setAddress : function(  ) {},

/**Sets the caller display name (CNAP).
@param {String} callerDisplayName The new display name.
@param {Number} presentation The presentation requirements for the handle.
        See {@link TelecomManager} for valid values.
*/
setCallerDisplayName : function(  ) {},

/**Set the video state for the connection.
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED}.
@param {Number} videoState The new video state.
*/
setVideoState : function(  ) {},

/**Sets state to active (e.g., an ongoing connection where two or more parties can actively
 communicate).
*/
setActive : function(  ) {},

/**Sets state to ringing (e.g., an inbound ringing connection).
*/
setRinging : function(  ) {},

/**Sets state to initializing (this Connection is not yet ready to be used).
*/
setInitializing : function(  ) {},

/**Sets state to initialized (the Connection has been set up and is now ready to be used).
*/
setInitialized : function(  ) {},

/**Sets state to dialing (e.g., dialing an outbound connection).
*/
setDialing : function(  ) {},

/**Sets state to pulling (e.g. the connection is being pulled to the local device from another
 device).  Only applicable for {@link android.telecom.Connection}s with
 {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL} and {@link android.telecom.Connection#CAPABILITY_CAN_PULL_CALL}.
*/
setPulling : function(  ) {},

/**Sets state to be on hold.
*/
setOnHold : function(  ) {},

/**Sets the video connection provider.
@param {Object {Connection.VideoProvider}} videoProvider The video provider.
*/
setVideoProvider : function(  ) {},

/**
*/
getVideoProvider : function(  ) {},

/**Sets state to disconnected.
@param {Object {DisconnectCause}} disconnectCause The reason for the disconnection, as specified by
         {@link DisconnectCause}.
*/
setDisconnected : function(  ) {},

/**Informs listeners that this {@code Connection} is in a post-dial wait state. This is done
 when (a) the {@code Connection} is issuing a DTMF sequence; (b) it has encountered a "wait"
 character; and (c) it wishes to inform the In-Call app that it is waiting for the end-user
 to send an {@link #onPostDialContinue}(boolean) signal.
@param {String} remaining The DTMF character sequence remaining to be emitted once the
         {@link #onPostDialContinue(boolean)} is received, including any "wait" characters
         that remaining sequence may contain.
*/
setPostDialWait : function(  ) {},

/**Informs listeners that this {@code Connection} has processed a character in the post-dial
 started state. This is done when (a) the {@code Connection} is issuing a DTMF sequence;
 and (b) it wishes to signal Telecom to play the corresponding DTMF tone locally.
@param {String} nextChar The DTMF character that was just processed by the {@code Connection}.
*/
setNextPostDialChar : function(  ) {},

/**Requests that the framework play a ringback tone. This is to be invoked by implementations
 that do not play a ringback tone themselves in the connection's audio stream.
@param {Boolean} ringback Whether the ringback tone is to be played.
*/
setRingbackRequested : function(  ) {},

/**Sets the connection's capabilities as a bit mask of the {@code CAPABILITY_*} constants.
@param {Number} connectionCapabilities The new connection capabilities.
*/
setConnectionCapabilities : function(  ) {},

/**Sets the connection's properties as a bit mask of the {@code PROPERTY_*} constants.
@param {Number} connectionProperties The new connection properties.
*/
setConnectionProperties : function(  ) {},

/**Sets the supported audio routes.
@param {Number} supportedAudioRoutes the supported audio routes as a bitmask.
                             See {@link CallAudioState}
@hide 
*/
setSupportedAudioRoutes : function(  ) {},

/**Tears down the Connection object.
*/
destroy : function(  ) {},

/**Requests that the framework use VOIP audio mode for this connection.
@param {Boolean} isVoip True if the audio mode is VOIP.
*/
setAudioModeIsVoip : function(  ) {},

/**Sets the time at which a call became active on this Connection. This is set only
 when a conference call becomes active on this connection.
@param {Number} connectTimeMillis The connection time, in milliseconds.  Should be set using a value
                          obtained from {@link System#currentTimeMillis()}.
@hide 
*/
setConnectTimeMillis : function(  ) {},

/**Sets the time at which a call became active on this Connection. This is set only
 when a conference call becomes active on this connection.
@param {Number} connectElapsedTimeMillis The connection time, in milliseconds.  Stored in the format
                              {@link SystemClock#elapsedRealtime()}.
@hide 
*/
setConnectionStartElapsedRealTime : function(  ) {},

/**Sets RIL voice radio technology used for current connection.
@param {Number} vrat the RIL Voice Radio Technology used for current connection,
             see {@code RIL_RADIO_TECHNOLOGY_*} in {@link android.telephony.ServiceState}.
@hide 
*/
setCallRadioTech : function(  ) {},

/**Sets the label and icon status to display in the in-call UI.
@param {Object {StatusHints}} statusHints The status label and icon to set.
*/
setStatusHints : function(  ) {},

/**Sets the connections with which this connection can be conferenced.
@param {Object {java.util.List}} conferenceableConnections The set of connections this connection can conference with.
*/
setConferenceableConnections : function(  ) {},

/**Similar to {@link #setConferenceableConnections(java.util.List)}, sets a list of connections
 or conferences with which this connection can be conferenced.
@param {Object {java.util.List}} conferenceables The conferenceables.
*/
setConferenceables : function(  ) {},

/**
@hide Resets the cdma connection time.
*/
resetConnectionTime : function(  ) {},

/**Returns the connections or conferences with which this connection can be conferenced.
*/
getConferenceables : function(  ) {},

/**
@hide 
*/
setConnectionService : function(  ) {},

/**
@hide 
*/
unsetConnectionService : function(  ) {},

/**
@hide 
*/
getConnectionService : function(  ) {},

/**Sets the conference that this connection is a part of. This will fail if the connection is
 already part of a conference. {@link #resetConference} to un-set the conference first.
@param {Object {Conference}} conference The conference.
@return {Boolean} {@code true} if the conference was successfully set.
@hide 
*/
setConference : function(  ) {},

/**Resets the conference that this connection is a part of.
@hide 
*/
resetConference : function(  ) {},

/**Set some extras that can be associated with this {@code Connection}.
 <p>
 New or existing keys are replaced in the {@code Connection} extras.  Keys which are no longer
 in the new extras, but were present the last time {@code setExtras} was called are removed.
 <p>
 Alternatively you may use the {@link #putExtras}(Bundle), and
 {@link #removeExtras(String...)} methods to modify the extras.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these extras.
 Keys should be fully qualified (e.g., com.example.MY_EXTRA) to avoid conflicts.
@param {Object {Bundle}} extras The extras associated with this {@code Connection}.
*/
setExtras : function(  ) {},

/**Adds some extras to this {@code Connection}.  Existing keys are replaced and new ones are
 added.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these extras.
 Keys should be fully qualified (e.g., com.example.MY_EXTRA) to avoid conflicts.
@param {Object {Bundle}} extras The extras to add.
*/
putExtras : function(  ) {},

/**Adds a boolean extra to this {@code Connection}.
@param {String} key The extra key.
@param {Boolean} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds an integer extra to this {@code Connection}.
@param {String} key The extra key.
@param {Number} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds a string extra to this {@code Connection}.
@param {String} key The extra key.
@param {String} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Removes extras from this {@code Connection}.
@param {Object {java.util.List}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Removes extras from this {@code Connection}.
@param {Object {java.lang.String[]}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Sets the audio route (speaker, bluetooth, etc...).  When this request is honored, there will
 be change to the {@link #getCallAudioState}().
 <p>
 Used by self-managed {@link android.telecom.ConnectionService}s which wish to change the audio route for a
 self-managed {@link android.telecom.Connection} (see {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED}.)
 <p>
 See also {@link android.telecom.InCallService#setAudioRoute(int)}.
@param {Number} route The audio route to use (one of {@link CallAudioState#ROUTE_BLUETOOTH},
              {@link CallAudioState#ROUTE_EARPIECE}, {@link CallAudioState#ROUTE_SPEAKER}, or
              {@link CallAudioState#ROUTE_WIRED_HEADSET}).
*/
setAudioRoute : function(  ) {},

/**Request audio routing to a specific bluetooth device. Calling this method may result in
 the device routing audio to a different bluetooth device than the one specified if the
 bluetooth stack is unable to route audio to the requested device.
 A list of available devices can be obtained via
 {@link android.telecom.CallAudioState#getSupportedBluetoothDevices()}

 <p>
 Used by self-managed {@link android.telecom.ConnectionService}s which wish to use bluetooth audio for a
 self-managed {@link android.telecom.Connection} (see {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED}.)
 <p>
 See also {@link android.telecom.InCallService#requestBluetoothAudio(BluetoothDevice)}
@param {Object {BluetoothDevice}} bluetoothDevice The bluetooth device to connect to.
*/
requestBluetoothAudio : function(  ) {},

/**Informs listeners that a previously requested RTT session via
 {@link android.telecom.ConnectionRequest#isRequestingRtt()} or
 {@link #onStartRtt}(RttTextStream) has succeeded.
*/
sendRttInitiationSuccess : function(  ) {},

/**Informs listeners that a previously requested RTT session via
 {@link android.telecom.ConnectionRequest#isRequestingRtt()} or {@link #onStartRtt}(RttTextStream)
 has failed.
@param {Number} reason One of the reason codes defined in {@link RttModifyStatus}, with the
               exception of {@link RttModifyStatus#SESSION_MODIFY_REQUEST_SUCCESS}.
*/
sendRttInitiationFailure : function(  ) {},

/**Informs listeners that a currently active RTT session has been terminated by the remote
 side of the coll.
*/
sendRttSessionRemotelyTerminated : function(  ) {},

/**Informs listeners that the remote side of the call has requested an upgrade to include an
 RTT session in the call.
*/
sendRemoteRttRequest : function(  ) {},

/**Notifies this Connection that the {@link #getAudioState}() property has a new value.
@param {Object {AudioState}} state The new connection audio state.
@deprecated Use {@link #onCallAudioStateChanged(CallAudioState)} instead.
@hide 
*/
onAudioStateChanged : function(  ) {},

/**Notifies this Connection that the {@link #getCallAudioState}() property has a new value.
@param {Object {CallAudioState}} state The new connection audio state.
*/
onCallAudioStateChanged : function(  ) {},

/**Notifies this Connection of an internal state change. This method is called after the
 state is changed.
@param {Number} state The new state, one of the {@code STATE_*} constants.
*/
onStateChanged : function(  ) {},

/**Notifies this Connection of a request to play a DTMF tone.
@param {String} c A DTMF character.
*/
onPlayDtmfTone : function(  ) {},

/**Notifies this Connection of a request to stop any currently playing DTMF tones.
*/
onStopDtmfTone : function(  ) {},

/**Notifies this Connection of a request to disconnect.
*/
onDisconnect : function(  ) {},

/**Notifies this Connection of a request to disconnect a participant of the conference managed
 by the connection.
@param {Object {Uri}} endpoint the {@link Uri} of the participant to disconnect.
@hide 
*/
onDisconnectConferenceParticipant : function(  ) {},

/**Notifies this Connection of a request to separate from its parent conference.
*/
onSeparate : function(  ) {},

/**Notifies this Connection of a request to abort.
*/
onAbort : function(  ) {},

/**Notifies this Connection of a request to hold.
*/
onHold : function(  ) {},

/**Notifies this Connection of a request to exit a hold state.
*/
onUnhold : function(  ) {},

/**Notifies this Connection, which is in {@link #STATE_RINGING}, of
 a request to accept.
 <p>
 For managed {@link android.telecom.ConnectionService}s, this will be called when the user answers a call via
 the default dialer's {@link android.telecom.InCallService}.
 <p>
 Although a self-managed {@link android.telecom.ConnectionService} provides its own incoming call UI, the
 Telecom framework may request that the call is answered in the following circumstances:
 <ul>
     <li>The user chooses to answer an incoming call via a Bluetooth device.</li>
     <li>A car mode {@link android.telecom.InCallService} is in use which has declared
     {@link android.telecom.TelecomManager#METADATA_INCLUDE_SELF_MANAGED_CALLS} in its manifest.  Such an
     {@link android.telecom.InCallService} will be able to see calls from self-managed
     {@link android.telecom.ConnectionService}s, and will be able to display an incoming call UI on their
     behalf.</li>
 </ul>
@param {Number} videoState The video state in which to answer the connection.
*/
onAnswer : function(  ) {},

/**Notifies this Connection, which is in {@link #STATE_RINGING}, of
 a request to accept.
 <p>
 For managed {@link android.telecom.ConnectionService}s, this will be called when the user answers a call via
 the default dialer's {@link android.telecom.InCallService}.
 <p>
 Although a self-managed {@link android.telecom.ConnectionService} provides its own incoming call UI, the
 Telecom framework may request that the call is answered in the following circumstances:
 <ul>
     <li>The user chooses to answer an incoming call via a Bluetooth device.</li>
     <li>A car mode {@link android.telecom.InCallService} is in use which has declared
     {@link android.telecom.TelecomManager#METADATA_INCLUDE_SELF_MANAGED_CALLS} in its manifest.  Such an
     {@link android.telecom.InCallService} will be able to see calls from self-managed
     {@link android.telecom.ConnectionService}s, and will be able to display an incoming call UI on their
     behalf.</li>
 </ul>
*/
onAnswer : function(  ) {},

/**Notifies this Connection, which is in {@link #STATE_RINGING}, of
 a request to deflect.
*/
onDeflect : function(  ) {},

/**Notifies this Connection, which is in {@link #STATE_RINGING}, of
 a request to reject.
 <p>
 For managed {@link android.telecom.ConnectionService}s, this will be called when the user rejects a call via
 the default dialer's {@link android.telecom.InCallService}.
 <p>
 Although a self-managed {@link android.telecom.ConnectionService} provides its own incoming call UI, the
 Telecom framework may request that the call is rejected in the following circumstances:
 <ul>
     <li>The user chooses to reject an incoming call via a Bluetooth device.</li>
     <li>A car mode {@link android.telecom.InCallService} is in use which has declared
     {@link android.telecom.TelecomManager#METADATA_INCLUDE_SELF_MANAGED_CALLS} in its manifest.  Such an
     {@link android.telecom.InCallService} will be able to see calls from self-managed
     {@link android.telecom.ConnectionService}s, and will be able to display an incoming call UI on their
     behalf.</li>
 </ul>
*/
onReject : function(  ) {},

/**Notifies this Connection, which is in {@link #STATE_RINGING}, of
 a request to reject with a message.
*/
onReject : function(  ) {},

/**Notifies this Connection of a request to silence the ringer.
 <p>
 The ringer may be silenced by any of the following methods:
 <ul>
     <li>{@link android.telecom.TelecomManager#silenceRinger()}</li>
     <li>The user presses the volume-down button while a call is ringing.</li>
 </ul>
 <p>
 Self-managed {@link android.telecom.ConnectionService} implementations should override this method in their
 {@link android.telecom.Connection} implementation and implement logic to silence their app's ringtone.  If
 your app set the ringtone as part of the incoming call {@link Notification} (see
 {@link #onShowIncomingCallUi}()), it should re-post the notification now, except call
 {@link android.app.Notification.Builder#setOnlyAlertOnce(boolean)} with {@code true}.  This
 will ensure the ringtone sound associated with your {@link android.app.NotificationChannel}
 stops playing.
*/
onSilence : function(  ) {},

/**Notifies this Connection whether the user wishes to proceed with the post-dial DTMF codes.
*/
onPostDialContinue : function(  ) {},

/**Notifies this Connection of a request to pull an external call to the local device.
 <p>
 The {@link android.telecom.InCallService} issues a request to pull an external call to the local device via
 {@link android.telecom.Call#pullExternalandroid.telecom.Call()}.
 <p>
 For a Connection to be pulled, both the {@link android.telecom.Connection#CAPABILITY_CAN_PULL_CALL}
 capability and {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL} property bits must be set.
 <p>
 For more information on external calls, see {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL}.
*/
onPullExternalCall : function(  ) {},

/**Notifies this Connection of a {@link android.telecom.Call} event initiated from an {@link android.telecom.InCallService}.
 <p>
 The {@link android.telecom.InCallService} issues a Call event via {@link android.telecom.Call#sendandroid.telecom.CallEvent(String, Bundle)}.
 <p>
 Where possible, the Connection should make an attempt to handle {@link android.telecom.Call} events which
 are part of the {@code android.telecom.*} namespace.  The Connection should ignore any events
 it does not wish to handle.  Unexpected events should be handled gracefully, as it is
 possible that a {@link android.telecom.InCallService} has defined its own Call events which a Connection is
 not aware of.
 <p>
 See also {@link android.telecom.Call#sendandroid.telecom.CallEvent(String, Bundle)}.
@param {String} event The call event.
@param {Object {Bundle}} extras Extras associated with the call event.
*/
onCallEvent : function(  ) {},

/**Notifies this {@link android.telecom.Connection} that a handover has completed.
 <p>
 A handover is initiated with {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int,
 Bundle)} on the initiating side of the handover, and
 {@link TelecomManager#acceptHandover(Uri, int, android.telecom.PhoneAccountHandle)}.
*/
onHandoverComplete : function(  ) {},

/**Notifies this {@link android.telecom.Connection} of a change to the extras made outside the
 {@link android.telecom.ConnectionService}.
 <p>
 These extras changes can originate from Telecom itself, or from an {@link android.telecom.InCallService} via
 the {@link android.telecom.Call#putExtras(Bundle)} and
 {@link android.telecom.Call#removeExtras(List)}.
@param {Object {Bundle}} extras The new extras bundle.
*/
onExtrasChanged : function(  ) {},

/**Notifies this {@link android.telecom.Connection} that its {@link android.telecom.ConnectionService} is responsible for
 displaying its incoming call user interface for the {@link android.telecom.Connection}.
 <p>
 Will only be called for incoming calls added via a self-managed {@link android.telecom.ConnectionService}
 (see {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED}), where the {@link android.telecom.ConnectionService}
 should show its own incoming call user interface.
 <p>
 Where there are ongoing calls in other self-managed {@link android.telecom.ConnectionService}s, or in a
 regular {@link android.telecom.ConnectionService}, and it is not possible to hold these other calls, the
 Telecom framework will display its own incoming call user interface to allow the user to
 choose whether to answer the new incoming call and disconnect other ongoing calls, or to
 reject the new incoming call.
 <p>
 You should trigger the display of the incoming call user interface for your application by
 showing a {@link Notification} with a full-screen {@link Intent} specified.

 In your application code, you should create a {@link android.app.NotificationChannel} for
 incoming call notifications from your app:
 <pre><code>
 NotificationChannel channel = new NotificationChannel(YOUR_CHANNEL_ID, "Incoming Calls",
          NotificationManager.IMPORTANCE_MAX);
 // other channel setup stuff goes here.

 // We'll use the default system ringtone for our incoming call notification channel.  You can
 // use your own audio resource here.
 Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
 channel.setSound(ringtoneUri, new AudioAttributes.Builder()
          // Setting the AudioAttributes is important as it identifies the purpose of your
          // notification sound.
          .setUsage(AudioAttributes.USAGE_NOTIFICATION_RINGTONE)
          .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
      .build());

 NotificationManager mgr = getSystemService(NotificationManager.class);
 mgr.createNotificationChannel(channel);
 </code></pre>
 When it comes time to post a notification for your incoming call, ensure it uses your
 incoming call {@link android.app.NotificationChannel}.
 <pre><code>
     // Create an intent which triggers your fullscreen incoming call user interface.
     Intent intent = new Intent(Intent.ACTION_MAIN, null);
     intent.setFlags(Intent.FLAG_ACTIVITY_NO_USER_ACTION | Intent.FLAG_ACTIVITY_NEW_TASK);
     intent.setClass(context, YourIncomingCallActivity.class);
     PendingIntent pendingIntent = PendingIntent.getActivity(context, 1, intent, 0);

     // Build the notification as an ongoing high priority item; this ensures it will show as
     // a heads up notification which slides down over top of the current content.
     final Notification.Builder builder = new Notification.Builder(context);
     builder.setOngoing(true);
     builder.setPriority(Notification.PRIORITY_HIGH);

     // Set notification content intent to take user to fullscreen UI if user taps on the
     // notification body.
     builder.setContentIntent(pendingIntent);
     // Set full screen intent to trigger display of the fullscreen UI when the notification
     // manager deems it appropriate.
     builder.setFullScreenIntent(pendingIntent, true);

     // Setup notification content.
     builder.setSmallIcon( yourIconResourceId );
     builder.setContentTitle("Your notification title");
     builder.setContentText("Your notification content.");

     // Set notification as insistent to cause your ringtone to loop.
     Notification notification = builder.build();
     notification.flags |= Notification.FLAG_INSISTENT;

     // Use builder.addAction(..) to add buttons to answer or reject the call.
     NotificationManager notificationManager = mContext.getSystemService(
         NotificationManager.class);
     notificationManager.notify(YOUR_CHANNEL_ID, YOUR_TAG, YOUR_ID, notification);
 </code></pre>
*/
onShowIncomingCallUi : function(  ) {},

/**Notifies this {@link android.telecom.Connection} that the user has requested an RTT session.
 The connection service should call {@link #sendRttInitiationSuccess} or
 {@link #sendRttInitiationFailure} to inform Telecom of the success or failure of the
 request, respectively.
@param {Object {Connection.RttTextStream}} rttTextStream The object that should be used to send text to or receive text from
                      the in-call app.
*/
onStartRtt : function(  ) {},

/**Notifies this {@link android.telecom.Connection} that it should terminate any existing RTT communication
 channel. No response to Telecom is needed for this method.
*/
onStopRtt : function(  ) {},

/**Notifies this connection of a response to a previous remotely-initiated RTT upgrade
 request sent via {@link #sendRemoteRttRequest}. Acceptance of the request is
 indicated by the supplied {@link android.telecom.Connection.RttTextStream} being non-null, and rejection is
 indicated by {@code rttTextStream} being {@code null}
@param {Object {Connection.RttTextStream}} rttTextStream The object that should be used to send text to or receive text from
                      the in-call app.
*/
handleRttUpgradeResponse : function(  ) {},

/**Return a {@code Connection} which represents a failed connection attempt. The returned
 {@code Connection} will have a {@link android.telecom.DisconnectCause} and as specified,
 and a {@link #getState}() of {@link #STATE_DISCONNECTED}.
 <p>
 The returned {@code Connection} can be assumed to {@link #destroy}() itself when appropriate,
 so users of this method need not maintain a reference to its return value to destroy it.
@param {Object {DisconnectCause}} disconnectCause The disconnect cause, ({@see android.telecomm.DisconnectCause}).
@return {Object {android.telecom.Connection}} A {@code Connection} which indicates failure.
*/
createFailedConnection : function(  ) {},

/**Override to throw an {@link UnsupportedOperationException} if this {@code Connection} is
 not intended to be mutated, e.g., if it is a marker for failure. Only for framework use;
 this should never be un-@hide-den.
@hide 
*/
checkImmutable : function(  ) {},

/**Return a {@code Connection} which represents a canceled connection attempt. The returned
 {@code Connection} will have state {@link #STATE_DISCONNECTED}, and cannot be moved out of
 that state. This connection should not be used for anything, and no other
 {@code Connection}s should be attempted.
 <p>
 so users of this method need not maintain a reference to its return value to destroy it.
@return {Object {android.telecom.Connection}} A {@code Connection} which indicates that the underlying connection should
 be canceled.
*/
createCanceledConnection : function(  ) {},

/**Notifies listeners when phone account is changed. For example, when the PhoneAccount is
 changed due to an emergency call being redialed.
@param {Object {PhoneAccountHandle}} pHandle The new PhoneAccountHandle for this connection.
@hide 
*/
notifyPhoneAccountChanged : function(  ) {},

/**Sets the {@link android.telecom.PhoneAccountHandle} associated with this connection.
@hide 
*/
setPhoneAccountHandle : function(  ) {},

/**Returns the {@link android.telecom.PhoneAccountHandle} associated with this connection.
@hide 
*/
getPhoneAccountHandle : function(  ) {},

/**Sends an event associated with this {@code Connection} with associated event extras to the
 {@link android.telecom.InCallService}.
 <p>
 Connection events are used to communicate point in time information from a
 {@link android.telecom.ConnectionService} to a {@link android.telecom.InCallService} implementations.  An example of a
 custom connection event includes notifying the UI when a WIFI call has been handed over to
 LTE, which the InCall UI might use to inform the user that billing charges may apply.  The
 Android Telephony framework will send the {@link #EVENT_CALL_MERGE_FAILED} connection event
 when a call to {@link android.telecom.Call#mergeConference()} has failed to complete successfully.  A
 connection event could also be used to trigger UI in the {@link android.telecom.InCallService} which prompts
 the user to make a choice (e.g. whether they want to incur roaming costs for making a call),
 which is communicated back via {@link android.telecom.Call#sendandroid.telecom.CallEvent(String, Bundle)}.
 <p>
 Events are exposed to {@link android.telecom.InCallService} implementations via
 {@link android.telecom.Call.android.telecom.Callback#onConnectionEvent(android.telecom.Call, String, Bundle)}.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these events.
 The {@link android.telecom.ConnectionService} must assume that the In-Call UI could even chose to ignore
 some events altogether.
 <p>
 Events should be fully qualified (e.g. {@code com.example.event.MY_EVENT}) to avoid
 conflicts between {@link android.telecom.ConnectionService} implementations.  Further, custom
 {@link android.telecom.ConnectionService} implementations shall not re-purpose events in the
 {@code android.*} namespace, nor shall they define new event types in this namespace.  When
 defining a custom event type, ensure the contents of the extras {@link Bundle} is clearly
 defined.  Extra keys for this bundle should be named similar to the event type (e.g.
 {@code com.example.extra.MY_EXTRA}).
 <p>
  When defining events and the associated extras, it is important to keep their behavior
 consistent when the associated {@link android.telecom.ConnectionService} is updated.  Support for deprecated
 events/extras should me maintained to ensure backwards compatibility with older
 {@link android.telecom.InCallService} implementations which were built to support the older behavior.
@param {String} event The connection event.
@param {Object {Bundle}} extras Optional bundle containing extra information associated with the event.
*/
sendConnectionEvent : function(  ) {},

/**
@return {Number} The direction of the call.
@hide 
*/
getCallDirection : function(  ) {},

/**Sets the direction of this connection.
@param {Number} callDirection The direction of this connection.
@hide 
*/
setCallDirection : function(  ) {},


};