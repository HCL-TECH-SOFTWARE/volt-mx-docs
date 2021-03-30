/**@class android.telecom.Call.Details
@extends java.lang.Object

*/
var Details = {

/** Indicates that the call is neither and incoming nor an outgoing call.  This can be the
 case for calls reported directly by a {@link android.telecom.ConnectionService} in special cases such as
 call handovers.
*/
DIRECTION_UNKNOWN : "-1",
/** Indicates that the call is an incoming call.
*/
DIRECTION_INCOMING : "0",
/** Indicates that the call is an outgoing call.
*/
DIRECTION_OUTGOING : "1",
/**Call can currently be put on hold or unheld. */
CAPABILITY_HOLD : "1",
/**Call supports the hold feature. */
CAPABILITY_SUPPORT_HOLD : "2",
/** Calls within a conference can be merged. A {@link android.telecom.ConnectionService} has the option to
 add a {@link android.telecom.Conference} call before the child {@link android.telecom.Connection}s are merged. This is how
 CDMA-based {@link android.telecom.Connection}s are implemented. For these unmerged {@link android.telecom.Conference}s, this
 capability allows a merge button to be shown while the conference call is in the foreground
 of the in-call UI.
 <p>
 This is only intended for use by a {@link android.telecom.Conference}.
*/
CAPABILITY_MERGE_CONFERENCE : "4",
/** Calls within a conference can be swapped between foreground and background.
 See {@link #CAPABILITY_MERGE_CONFERENCE} for additional information.
 <p>
 This is only intended for use by a {@link android.telecom.Conference}.
*/
CAPABILITY_SWAP_CONFERENCE : "8",
/** @hide
*/
CAPABILITY_UNUSED_1 : "16",
/**Call supports responding via text option. */
CAPABILITY_RESPOND_VIA_TEXT : "32",
/**Call can be muted. */
CAPABILITY_MUTE : "64",
/** Call supports conference call management. This capability only applies to {@link android.telecom.Conference}
 calls which can have {@link android.telecom.Connection}s as children.
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
/** Call is able to be separated from its parent {@code Conference}, if any.
*/
CAPABILITY_SEPARATE_FROM_CONFERENCE : "4096",
/** Call is able to be individually disconnected when in a {@code Conference}.
*/
CAPABILITY_DISCONNECT_FROM_CONFERENCE : "8192",
/** Speed up audio setup for MT call.
 @hide
*/
CAPABILITY_SPEED_UP_MT_AUDIO : "262144",
/** Call can be upgraded to a video call.
 @hide
 @deprecated Use {@link #CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL} and
 {@link #CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL} to indicate for a call
 whether or not video calling is supported.
*/
CAPABILITY_CAN_UPGRADE_TO_VIDEO : "524288",
/** For video calls, indicates whether the outgoing video for the call can be paused using
 the {@link android.telecom.VideoProfile#STATE_PAUSED} VideoState.
*/
CAPABILITY_CAN_PAUSE_VIDEO : "1048576",
/** Call sends responses through connection.
 @hide
*/
CAPABILITY_CAN_SEND_RESPONSE_VIA_CONNECTION : "2097152",
/** When set, prevents a video {@code Call} from being downgraded to an audio-only call.
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
CAPABILITY_CANNOT_DOWNGRADE_VIDEO_TO_AUDIO : "4194304",
/** When set for an external call, indicates that this {@code Call} can be pulled from a
 remote device to the current device.
 <p>
 Should only be set on a {@code Call} where {@link #PROPERTY_IS_EXTERNAL_CALL} is set.
 <p>
 An {@link android.telecom.InCallService} will only see calls with this capability if it has the
 {@link android.telecom.TelecomManager#METADATA_INCLUDE_EXTERNAL_CALLS} metadata set to {@code true}
 in its manifest.
 <p>
 See {@link android.telecom.Connection#CAPABILITY_CAN_PULL_CALL} and
 {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL}.
*/
CAPABILITY_CAN_PULL_CALL : "8388608",
/**Call supports the deflect feature. */
CAPABILITY_SUPPORT_DEFLECT : "16777216",
/** Whether the call is currently a conference.
*/
PROPERTY_CONFERENCE : "1",
/** Whether the call is a generic conference, where we do not know the precise state of
 participants in the conference (eg. on CDMA).
*/
PROPERTY_GENERIC_CONFERENCE : "2",
/** Whether the call is made while the device is in emergency callback mode.
*/
PROPERTY_EMERGENCY_CALLBACK_MODE : "4",
/** Connection is using WIFI.
*/
PROPERTY_WIFI : "8",
/** When set, the UI should indicate to the user that a call is using high definition
 audio.
 <p>
 The underlying {@link android.telecom.ConnectionService} is responsible for reporting this
 property.  It is important to note that this property is not intended to report the
 actual audio codec being used for a Call, but whether the call should be indicated
 to the user as high definition.
 <p>
 The Android Telephony stack reports this property for calls based on a number
 of factors, including which audio codec is used and whether a call is using an HD
 codec end-to-end.  Some mobile operators choose to suppress display of an HD indication,
 and in these cases this property will not be set for a call even if the underlying audio
 codec is in fact "high definition".
*/
PROPERTY_HIGH_DEF_AUDIO : "16",
/** Whether the call is associated with the work profile.
*/
PROPERTY_ENTERPRISE_CALL : "32",
/** When set, indicates that this {@code Call} does not actually exist locally for the
 {@link android.telecom.ConnectionService}.
 <p>
 Consider, for example, a scenario where a user has two phones with the same phone number.
 When a user places a call on one device, the telephony stack can represent that call on
 the other device by adding it to the {@link android.telecom.ConnectionService} with the
 {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL} property set.
 <p>
 An {@link android.telecom.InCallService} will only see calls with this property if it has the
 {@link android.telecom.TelecomManager#METADATA_INCLUDE_EXTERNAL_CALLS} metadata set to {@code true}
 in its manifest.
 <p>
 See {@link android.telecom.Connection#PROPERTY_IS_EXTERNAL_CALL}.
*/
PROPERTY_IS_EXTERNAL_CALL : "64",
/** Indicates that the call has CDMA Enhanced Voice Privacy enabled.
*/
PROPERTY_HAS_CDMA_VOICE_PRIVACY : "128",
/** Indicates that the call is from a self-managed {@link android.telecom.ConnectionService}.
 <p>
 See also {@link android.telecom.Connection#PROPERTY_SELF_MANAGED}
*/
PROPERTY_SELF_MANAGED : "256",
/** Indicates the call used Assisted Dialing.
 See also {@link android.telecom.Connection#PROPERTY_ASSISTED_DIALING_USED}
 @hide
*/
PROPERTY_ASSISTED_DIALING_USED : "512",
/** Indicates that the call is an RTT call. Use {@link #getRttCall}() to get the
 {@link android.telecom.Call.RttCall} object that is used to send and receive text.
*/
PROPERTY_RTT : "1024",
/** Indicates that the call has been identified as the network as an emergency call. This
 property may be set for both incoming and outgoing calls which the network identifies as
 emergency calls.
*/
PROPERTY_NETWORK_IDENTIFIED_EMERGENCY_CALL : "2048",
/** Indicates that the call is using VoIP audio mode.
 <p>
 When this property is set, the {@link android.media.AudioManager} audio mode for this
 call will be {@link android.media.AudioManager#MODE_IN_COMMUNICATION}.  When this
 property is not set, the audio mode for this call will be
 {@link android.media.AudioManager#MODE_IN_CALL}.
 <p>
 This property reflects changes made using {@link android.telecom.Connection#setAudioModeIsVoip(boolean)}.
 <p>
 You can use this property to determine whether an un-answered incoming call or a held
 call will use VoIP audio mode (if the call does not currently have focus, the system
 audio mode may not reflect the mode the call will use).
*/
PROPERTY_VOIP_AUDIO_MODE : "4096",
/**Whether the supplied capabilities  supports the specified capability.
@param {Number} capabilities A bit field of capabilities.
@param {Number} capability The capability to check capabilities for.
@return {Boolean} Whether the specified capability is supported.
*/
can : function(  ) {},

/**Whether the capabilities of this {@code Details} supports the specified capability.
@param {Number} capability The capability to check capabilities for.
@return {Boolean} Whether the specified capability is supported.
*/
can : function(  ) {},

/**Render a set of capability bits ({@code CAPABILITY_*}) as a human readable string.
@param {Number} capabilities A capability bit field.
@return {String} A human readable string representation.
*/
capabilitiesToString : function(  ) {},

/**Whether the supplied properties includes the specified property.
@param {Number} properties A bit field of properties.
@param {Number} property The property to check properties for.
@return {Boolean} Whether the specified property is supported.
*/
hasProperty : function(  ) {},

/**Whether the properties of this {@code Details} includes the specified property.
@param {Number} property The property to check properties for.
@return {Boolean} Whether the specified property is supported.
*/
hasProperty : function(  ) {},

/**Render a set of property bits ({@code PROPERTY_*}) as a human readable string.
@param {Number} properties A property bit field.
@return {String} A human readable string representation.
*/
propertiesToString : function(  ) {},

/**{@hide}
*/
getTelecomCallId : function(  ) {},

/**
@return {Object {android.net.Uri}} The handle (e.g., phone number) to which the {@code Call} is currently
 connected.
*/
getHandle : function(  ) {},

/**
@return {Number} The presentation requirements for the handle. See
 {@link TelecomManager} for valid values.
*/
getHandlePresentation : function(  ) {},

/**The display name for the caller.
 <p>
 This is the name as reported by the {@link android.telecom.ConnectionService} associated with this call.
@return {String} The display name for the caller.
*/
getCallerDisplayName : function(  ) {},

/**
@return {Number} The presentation requirements for the caller display name. See
 {@link TelecomManager} for valid values.
*/
getCallerDisplayNamePresentation : function(  ) {},

/**
@return {Object {android.telecom.PhoneAccountHandle}} The {@code PhoneAccountHandle} whereby the {@code Call} is currently being
 routed.
*/
getAccountHandle : function(  ) {},

/**
@return {Number} A bitmask of the capabilities of the {@code Call}, as defined by the various
         {@code CAPABILITY_*} constants in this class.
*/
getCallCapabilities : function(  ) {},

/**
@return {Number} A bitmask of the properties of the {@code Call}, as defined by the various
         {@code PROPERTY_*} constants in this class.
*/
getCallProperties : function(  ) {},

/**
@return {Number} a bitmask of the audio routes available for the call.
@hide 
*/
getSupportedAudioRoutes : function(  ) {},

/**
@return {Object {android.telecom.DisconnectCause}} For a {@link #STATE_DISCONNECTED} {@code Call}, the disconnect cause expressed
 by {@link android.telecom.DisconnectCause}.
*/
getDisconnectCause : function(  ) {},

/**Returns the time the {@link android.telecom.Call} connected (i.e. became active).  This information is
 updated periodically, but user interfaces should not rely on this to display the "call
 time clock".  For the time when the call was first added to Telecom, see
 {@link #getCreationTimeMillis}().
@return {Number} The time the {@link Call} connected in milliseconds since the epoch.
*/
getConnectTimeMillis : function(  ) {},

/**
@return {Object {android.telecom.GatewayInfo}} Information about any calling gateway the {@code Call} may be using.
*/
getGatewayInfo : function(  ) {},

/**
@return {Number} The video state of the {@code Call}.
*/
getVideoState : function(  ) {},

/**
@return {Object {android.telecom.StatusHints}} The current {@link android.telecom.StatusHints}, or {@code null} if none
 have been set.
*/
getStatusHints : function(  ) {},

/**
@return {Object {android.os.Bundle}} The extras associated with this call.
*/
getExtras : function(  ) {},

/**
@return {Object {android.os.Bundle}} The extras used with the original intent to place this call.
*/
getIntentExtras : function(  ) {},

/**Returns the time when the call was first created and added to Telecom.  This is the same
 time that is logged as the start time in the Call Log (see
 {@link android.provider.CallLog.Calls#DATE}).  To determine when the call was connected
 (became active), see {@link #getConnectTimeMillis}().
@return {Number} The creation time of the call, in millis since the epoch.
*/
getCreationTimeMillis : function(  ) {},

/**Indicates whether the call is an incoming or outgoing call.
@return {Number} The call's direction.
*/
getCallDirection : function(  ) {},

/**
*/
equals : function(  ) {},

/**
*/
hashCode : function(  ) {},

/**{@hide}
*/
createFromParcelableCall : function(  ) {},

/**
*/
toString : function(  ) {},


};