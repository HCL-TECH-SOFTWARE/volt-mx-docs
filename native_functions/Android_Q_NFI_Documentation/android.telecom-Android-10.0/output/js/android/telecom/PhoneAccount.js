/**@class android.telecom.PhoneAccount
 implements android.os.Parcelable

@extends java.lang.Object

 Represents a distinct method to place or receive a phone call. Apps which can place calls and
 want those calls to be integrated into the dialer and in-call UI should build an instance of
 this class and register it with the system using {@link android.telecom.TelecomManager}.
 <p>
 {@link android.telecom.TelecomManager} uses registered {@link android.telecom.PhoneAccount}s to present the user with
 alternative options when placing a phone call. When building a {@link android.telecom.PhoneAccount}, the app
 should supply a valid {@link android.telecom.PhoneAccountHandle} that references the connection service
 implementation Telecom will use to interact with the app.
*/
var PhoneAccount = {

/** {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which determines the
 sort order for {@link android.telecom.PhoneAccount}s from the same
 {@link android.telecom.ConnectionService}.
 @hide
*/
EXTRA_SORT_ORDER : "android.telecom.extra.SORT_ORDER",
/** {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which determines the
 maximum permitted length of a call subject specified via the
 {@link android.telecom.TelecomManager#EXTRA_CALL_SUBJECT} extra on an
 {@link android.content.Intent#ACTION_CALL} intent.  Ultimately a {@link android.telecom.ConnectionService} is
 responsible for enforcing the maximum call subject length when sending the message, however
 this extra is provided so that the user interface can proactively limit the length of the
 call subject as the user types it.
*/
EXTRA_CALL_SUBJECT_MAX_LENGTH : "android.telecom.extra.CALL_SUBJECT_MAX_LENGTH",
/** {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which determines the
 character encoding to be used when determining the length of messages.
 The user interface can use this when determining the number of characters the user may type
 in a call subject.  If empty-string, the call subject message size limit will be enforced on
 a 1:1 basis.  That is, each character will count towards the messages size limit as a single
 character.  If a character encoding is specified, the message size limit will be based on the
 number of bytes in the message per the specified encoding.  See
 {@link #EXTRA_CALL_SUBJECT_MAX_LENGTH} for more information on the call subject maximum
 length.
*/
EXTRA_CALL_SUBJECT_CHARACTER_ENCODING : "android.telecom.extra.CALL_SUBJECT_CHARACTER_ENCODING",
/** Indicating flag for phone account whether to use voip audio mode for voip calls
 @hide
*/
EXTRA_ALWAYS_USE_VOIP_AUDIO_MODE : "android.telecom.extra.ALWAYS_USE_VOIP_AUDIO_MODE",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which
 indicates whether this {@link android.telecom.PhoneAccount} is capable of supporting a request to handover a
 connection (see {@code android.telecom.Call#handoverTo()}) to this {@link android.telecom.PhoneAccount} from
 a {@link android.telecom.PhoneAccount} specifying {@link #EXTRA_SUPPORTS_HANDOVER_FROM}.
 <p>
 A handover request is initiated by the user from the default dialer app to indicate a desire
 to handover a call from one {@link android.telecom.PhoneAccount}/{@link android.telecom.ConnectionService} to another.
*/
EXTRA_SUPPORTS_HANDOVER_TO : "android.telecom.extra.SUPPORTS_HANDOVER_TO",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which
 indicates whether this {@link android.telecom.PhoneAccount} supports using a fallback if video calling is
 not available. This extra is for device level support, {@link android.telephony.CarrierConfigManager#KEY_ALLOW_VIDEO_CALLING_FALLBACK_BOOL} should also
 be checked to ensure it is not disabled by individual carrier.

 @hide
*/
EXTRA_SUPPORTS_VIDEO_CALLING_FALLBACK : "android.telecom.extra.SUPPORTS_VIDEO_CALLING_FALLBACK",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which
 indicates whether this {@link android.telecom.PhoneAccount} is capable of supporting a request to handover a
 connection from this {@link android.telecom.PhoneAccount} to another {@link android.telecom.PhoneAccount}.
 (see {@code android.telecom.Call#handoverTo()}) which specifies
 {@link #EXTRA_SUPPORTS_HANDOVER_TO}.
 <p>
 A handover request is initiated by the user from the default dialer app to indicate a desire
 to handover a call from one {@link android.telecom.PhoneAccount}/{@link android.telecom.ConnectionService} to another.
*/
EXTRA_SUPPORTS_HANDOVER_FROM : "android.telecom.extra.SUPPORTS_HANDOVER_FROM",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which
 indicates whether a Self-Managed {@link android.telecom.PhoneAccount} should log its calls to the call log.
 Self-Managed {@link android.telecom.PhoneAccount}s are responsible for their own notifications, so the system
 will not create a notification when a missed call is logged.
 <p>
 By default, Self-Managed {@link android.telecom.PhoneAccount}s do not log their calls to the call log.
 Setting this extra to {@code true} provides a means for them to log their calls.
 <p>
 Note: Only calls where the {@link android.telecom.Call.Details#getHandle()} {@link Uri#getScheme()} is
 {@link #SCHEME_SIP} or {@link #SCHEME_TEL} will be logged at the current time.
*/
EXTRA_LOG_SELF_MANAGED_CALLS : "android.telecom.extra.LOG_SELF_MANAGED_CALLS",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()}) which
 indicates whether calls for a {@link android.telecom.PhoneAccount} should generate a "call recording tone"
 when the user is recording audio on the device.
 <p>
 The call recording tone is played over the telephony audio stream so that the remote party
 has an audible indication that it is possible their call is being recorded using a call
 recording app on the device.
 <p>
 This extra only has an effect for calls placed via Telephony (e.g.
 {@link #CAPABILITY_SIM_SUBSCRIPTION}).
 <p>
 The call recording tone is a 1400 hz tone which repeats every 15 seconds while recording is
 in progress.
 @hide
*/
EXTRA_PLAY_CALL_RECORDING_TONE : "android.telecom.extra.PLAY_CALL_RECORDING_TONE",
/** Boolean {@link android.telecom.PhoneAccount} extras key (see {@link android.telecom.PhoneAccount#getExtras()} which
 indicates whether calls for a {@link android.telecom.PhoneAccount} should skip call filtering.
 <p>
 If not specified, this will default to false; all calls will undergo call filtering unless
 specifically exempted (e.g. {@link android.telecom.Connection#PROPERTY_EMERGENCY_CALLBACK_MODE}.) However,
 this may be used to skip call filtering when it has already been performed on another device.
 @hide
*/
EXTRA_SKIP_CALL_FILTERING : "android.telecom.extra.SKIP_CALL_FILTERING",
/** Flag indicating that this {@code PhoneAccount} can act as a connection manager for
 other connections. The {@link android.telecom.ConnectionService} associated with this {@code PhoneAccount}
 will be allowed to manage phone calls including using its own proprietary phone-call
 implementation (like VoIP calling) to make calls instead of the telephony stack.
 <p>
 When a user opts to place a call using the SIM-based telephony stack, the
 {@link android.telecom.ConnectionService} associated with this {@code PhoneAccount} will be attempted first
 if the user has explicitly selected it to be used as the default connection manager.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_CONNECTION_MANAGER : "1",
/** Flag indicating that this {@code PhoneAccount} can make phone calls in place of
 traditional SIM-based telephony calls. This account will be treated as a distinct method
 for placing calls alongside the traditional SIM-based telephony stack. This flag is
 distinct from {@link #CAPABILITY_CONNECTION_MANAGER} in that it is not allowed to manage
 or place calls from the built-in telephony stack.
 <p>
 See {@link #getCapabilities}
 <p>
*/
CAPABILITY_CALL_PROVIDER : "2",
/** Flag indicating that this {@code PhoneAccount} represents a built-in PSTN SIM
 subscription.
 <p>
 Only the Android framework can register a {@code PhoneAccount} having this capability.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_SIM_SUBSCRIPTION : "4",
/** Flag indicating that this {@code PhoneAccount} is currently able to place video calls.
 <p>
 See also {@link #CAPABILITY_SUPPORTS_VIDEO_CALLING} which indicates whether the
 {@code PhoneAccount} supports placing video calls.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_VIDEO_CALLING : "8",
/** Flag indicating that this {@code PhoneAccount} is capable of placing emergency calls.
 By default all PSTN {@code PhoneAccount}s are capable of placing emergency calls.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_PLACE_EMERGENCY_CALLS : "16",
/** Flag indicating that this {@code PhoneAccount} is capable of being used by all users. This
 should only be used by system apps (and will be ignored for all other apps trying to use it).
 <p>
 See {@link #getCapabilities}
 @hide
*/
CAPABILITY_MULTI_USER : "32",
/** Flag indicating that this {@code PhoneAccount} supports a subject for Calls.  This means a
 caller is able to specify a short subject line for an outgoing call.  A capable receiving
 device displays the call subject on the incoming call screen.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_CALL_SUBJECT : "64",
/** Flag indicating that this {@code PhoneAccount} should only be used for emergency calls.
 <p>
 See {@link #getCapabilities}
 @hide
*/
CAPABILITY_EMERGENCY_CALLS_ONLY : "128",
/** Flag indicating that for this {@code PhoneAccount}, the ability to make a video call to a
 number relies on presence.  Should only be set if the {@code PhoneAccount} also has
 {@link #CAPABILITY_VIDEO_CALLING}.
 <p>
 When set, the {@link android.telecom.ConnectionService} is responsible for toggling the
 {@link android.provider.ContactsContract.Data#CARRIER_PRESENCE_VT_CAPABLE} bit on the
 {@link android.provider.ContactsContract.Data#CARRIER_PRESENCE} column to indicate whether
 a contact's phone number supports video calling.
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_VIDEO_CALLING_RELIES_ON_PRESENCE : "256",
/** Flag indicating that for this {@link android.telecom.PhoneAccount}, emergency video calling is allowed.
 <p>
 When set, Telecom will allow emergency video calls to be placed.  When not set, Telecom will
 convert all outgoing video calls to emergency numbers to audio-only.
 @hide
*/
CAPABILITY_EMERGENCY_VIDEO_CALLING : "512",
/** Flag indicating that this {@link android.telecom.PhoneAccount} supports video calling.
 This is not an indication that the {@link android.telecom.PhoneAccount} is currently able to make a video
 call, but rather that it has the ability to make video calls (but not necessarily at this
 time).
 <p>
 Whether a {@link android.telecom.PhoneAccount} can make a video call is ultimately controlled by
 {@link #CAPABILITY_VIDEO_CALLING}, which indicates whether the {@link android.telecom.PhoneAccount} is
 currently capable of making a video call.  Consider a case where, for example, a
 {@link android.telecom.PhoneAccount} supports making video calls (e.g.
 {@link #CAPABILITY_SUPPORTS_VIDEO_CALLING}), but a current lack of network connectivity
 prevents video calls from being made (e.g. {@link #CAPABILITY_VIDEO_CALLING}).
 <p>
 See {@link #getCapabilities}
*/
CAPABILITY_SUPPORTS_VIDEO_CALLING : "1024",
/** Flag indicating that this {@link android.telecom.PhoneAccount} is responsible for managing its own
 {@link android.telecom.Connection}s.  This type of {@link android.telecom.PhoneAccount} is ideal for use with standalone
 calling apps which do not wish to use the default phone app for {@link android.telecom.Connection} UX,
 but which want to leverage the call and audio routing capabilities of the Telecom framework.
 <p>
 When set, {@link android.telecom.Connection}s created by the self-managed {@link android.telecom.ConnectionService} will not
 be surfaced to implementations of the {@link android.telecom.InCallService} API.  Thus it is the
 responsibility of a self-managed {@link android.telecom.ConnectionService} to provide a user interface for
 its {@link android.telecom.Connection}s.
 <p>
 Self-managed {@link android.telecom.Connection}s will, however, be displayed on connected Bluetooth devices.
*/
CAPABILITY_SELF_MANAGED : "2048",
/** Flag indicating that this {@link android.telecom.PhoneAccount} is capable of making a call with an
 RTT (Real-time text) session.
 When set, Telecom will attempt to open an RTT session on outgoing calls that specify
 that they should be placed with an RTT session , and the in-call app will be displayed
 with text entry fields for RTT. Likewise, the in-call app can request that an RTT
 session be opened during a call if this bit is set.
*/
CAPABILITY_RTT : "4096",
/** Flag indicating that this {@link android.telecom.PhoneAccount} is the preferred SIM subscription for
 emergency calls. A {@link android.telecom.PhoneAccount} that sets this capabilitiy must also
 set the {@link #CAPABILITY_SIM_SUBSCRIPTION} and {@link #CAPABILITY_PLACE_EMERGENCY_CALLS}
 capabilities. There should only be one emergency preferred {@link android.telecom.PhoneAccount}.
 <p>
 When set, Telecom will prefer this {@link android.telecom.PhoneAccount} over others for emergency calling,
 even if the emergency call was placed with a specific {@link android.telecom.PhoneAccount} set using the
 extra{@link android.telecom.TelecomManager#EXTRA_PHONE_ACCOUNT_HANDLE} in
 {@link Intent#ACTION_CALL_EMERGENCY} or {@link android.telecom.TelecomManager#placeCall(Uri, Bundle)}.

 @hide
*/
CAPABILITY_EMERGENCY_PREFERRED : "8192",
/** URI scheme for telephone number URIs.
*/
SCHEME_TEL : "tel",
/** URI scheme for voicemail URIs.
*/
SCHEME_VOICEMAIL : "voicemail",
/** URI scheme for SIP URIs.
*/
SCHEME_SIP : "sip",
/** Indicating no icon tint is set.
 @hide
*/
NO_ICON_TINT : "0",
/** Indicating no hightlight color is set.
*/
NO_HIGHLIGHT_COLOR : "0",
/** Indicating no resource ID is set.
*/
NO_RESOURCE_ID : "-1",
/***/
CREATOR : "null",
/**
*/
equals : function(  ) {},

/**
*/
hashCode : function(  ) {},

/**
*/
builder : function(  ) {},

/**Returns a builder initialized with the current {@link android.telecom.PhoneAccount} instance.
@return {Object {android.telecom.PhoneAccount.Builder}} The builder.
*/
toBuilder : function(  ) {},

/**The unique identifier of this {@code PhoneAccount}.
@return {Object {android.telecom.PhoneAccountHandle}} A {@code PhoneAccountHandle}.
*/
getAccountHandle : function(  ) {},

/**The address (e.g., a phone number) associated with this {@code PhoneAccount}. This
 represents the destination from which outgoing calls using this {@code PhoneAccount}
 will appear to come, if applicable, and the destination to which incoming calls using this
 {@code PhoneAccount} may be addressed.
@return {Object {android.net.Uri}} A address expressed as a {@code Uri}, for example, a phone number.
*/
getAddress : function(  ) {},

/**The raw callback number used for this {@code PhoneAccount}, as distinct from
 {@link #getAddress}(). For the majority of {@code PhoneAccount}s this should be registered
 as {@code null}.  It is used by the system for SIM-based {@code PhoneAccount} registration
 where {@link android.telephony.TelephonyManager#setLine1NumberForDisplay(String, String)}
 has been used to alter the callback number.
 <p>
@return {Object {android.net.Uri}} The subscription number, suitable for display to the user.
*/
getSubscriptionAddress : function(  ) {},

/**The capabilities of this {@code PhoneAccount}.
@return {Number} A bit field of flags describing this {@code PhoneAccount}'s capabilities.
*/
getCapabilities : function(  ) {},

/**Determines if this {@code PhoneAccount} has a capabilities specified by the passed in
 bit mask.
@param {Number} capability The capabilities to check.
@return {Boolean} {@code true} if the phone account has the capability.
*/
hasCapabilities : function(  ) {},

/**Determines if this {@code PhoneAccount} has routes specified by the passed in bit mask.
@param {Number} route The routes to check.
@return {Boolean} {@code true} if the phone account has the routes.
@hide 
*/
hasAudioRoutes : function(  ) {},

/**A short label describing a {@code PhoneAccount}.
@return {Object {java.lang.CharSequence}} A label for this {@code PhoneAccount}.
*/
getLabel : function(  ) {},

/**A short paragraph describing this {@code PhoneAccount}.
@return {Object {java.lang.CharSequence}} A description for this {@code PhoneAccount}.
*/
getShortDescription : function(  ) {},

/**The URI schemes supported by this {@code PhoneAccount}.
@return {Object {java.util.List}} The URI schemes.
*/
getSupportedUriSchemes : function(  ) {},

/**The extras associated with this {@code PhoneAccount}.
 <p>
 A {@link android.telecom.ConnectionService} may provide implementation specific information about the
 {@link android.telecom.PhoneAccount} via the extras.
@return {Object {android.os.Bundle}} The extras.
*/
getExtras : function(  ) {},

/**The audio routes supported by this {@code PhoneAccount}.
@hide 
*/
getSupportedAudioRoutes : function(  ) {},

/**The icon to represent this {@code PhoneAccount}.
@return {Object {android.graphics.drawable.Icon}} The icon.
*/
getIcon : function(  ) {},

/**Indicates whether the user has enabled this {@code PhoneAccount} or not. This value is only
 populated for {@code PhoneAccount}s returned by {@link android.telecom.TelecomManager#getPhoneAccount}.
@return {Boolean} {@code true} if the account is enabled by the user, {@code false} otherwise.
*/
isEnabled : function(  ) {},

/**A non-empty {@link String} representing the group that A {@link android.telecom.PhoneAccount} is in or an
 empty {@link String} if the {@link android.telecom.PhoneAccount} is not in a group. If this
 {@link android.telecom.PhoneAccount} is in a group, this new {@link android.telecom.PhoneAccount} will replace a registered
 {@link android.telecom.PhoneAccount} that is in the same group. When the {@link android.telecom.PhoneAccount} is replaced,
 its user defined defaults and enabled status will also pass to this new {@link android.telecom.PhoneAccount}.
 Only {@link android.telecom.PhoneAccount}s that share the same {@link android.telecom.ConnectionService} can be replaced.
@return {String} A non-empty String Id if this {@link PhoneAccount} belongs to a group.
@hide 
*/
getGroupId : function(  ) {},

/**Determines if the {@link android.telecom.PhoneAccount} supports calls to/from addresses with a specified URI
 scheme.
@param {String} uriScheme The URI scheme to check.
@return {Boolean} {@code true} if the {@code PhoneAccount} supports calls to/from addresses with the
 specified URI scheme.
*/
supportsUriScheme : function(  ) {},

/**A highlight color to use in displaying information about this {@code PhoneAccount}.
@return {Number} A hexadecimal color value.
*/
getHighlightColor : function(  ) {},

/**Sets the enabled state of the phone account.
@hide 
*/
setIsEnabled : function(  ) {},

/**
@return {Boolean} {@code true} if the {@link PhoneAccount} is self-managed, {@code false} otherwise.
@hide 
*/
isSelfManaged : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},

/**
*/
toString : function(  ) {},

/**Generates a string representation of a capabilities bitmask.
@return {String} String representation of the capabilities bitmask.
@hide 
*/
capabilitiesToString : function(  ) {},


};