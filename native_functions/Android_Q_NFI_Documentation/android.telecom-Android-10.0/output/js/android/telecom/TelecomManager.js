/**@class android.telecom.TelecomManager
@extends java.lang.Object

 Provides access to information about active calls and registration/call-management functionality.
 Apps can use methods in this class to determine the current call state.
 <p>
 Apps do not instantiate this class directly; instead, they retrieve a reference to an instance
 through {@link Context#getSystemService Context.getSystemService(Context.TELECOM_SERVICE)}.
 <p>
 Note that access to some telecom information is permission-protected. Your app cannot access the
 protected information or gain access to protected functionality unless it has the appropriate
 permissions declared in its manifest file. Where permissions apply, they are noted in the method
 descriptions.
*/
var TelecomManager = {

/** Activity action: Starts the UI for handing an incoming call. This intent starts the in-call
 UI by notifying the Telecom system that an incoming call exists for a specific call service
 (see {@link android.telecom.ConnectionService}). Telecom reads the Intent extras to find
 and bind to the appropriate {@link android.telecom.ConnectionService} which Telecom will
 ultimately use to control and get information about the call.
 <p>
 Input: get*Extra field {@link #EXTRA_PHONE_ACCOUNT_HANDLE} contains the component name of the
 {@link android.telecom.ConnectionService} that Telecom should bind to. Telecom will then
 ask the connection service for more information about the call prior to showing any UI.

 @deprecated Use {@link #addNewIncomingCall} instead.
*/
ACTION_INCOMING_CALL : "android.telecom.action.INCOMING_CALL",
/** Similar to {@link #ACTION_INCOMING_CALL}, but is used only by Telephony to add a new
 sim-initiated MO call for carrier testing.
 @deprecated Use {@link #addNewUnknownCall} instead.
 @hide
*/
ACTION_NEW_UNKNOWN_CALL : "android.telecom.action.NEW_UNKNOWN_CALL",
/** An {@link android.content.Intent} action sent by the telecom framework to start a
 configuration dialog for a registered {@link android.telecom.PhoneAccount}. There is no default dialog
 and each app that registers a {@link android.telecom.PhoneAccount} should provide one if desired.
 <p>
 A user can access the list of enabled {@link android.telecom.PhoneAccount}s through the Phone
 app's settings menu. For each entry, the settings app will add a click action. When
 triggered, the click-action will start this intent along with the extra
 {@link #EXTRA_PHONE_ACCOUNT_HANDLE} to indicate the {@link android.telecom.PhoneAccount} to configure. If the
 {@link android.telecom.PhoneAccount} package does not register an {@link android.app.Activity} for this
 intent, then it will not be sent.
*/
ACTION_CONFIGURE_PHONE_ACCOUNT : "android.telecom.action.CONFIGURE_PHONE_ACCOUNT",
/** The {@link android.content.Intent} action used to show the call accessibility settings page.
*/
ACTION_SHOW_CALL_ACCESSIBILITY_SETTINGS : "android.telecom.action.SHOW_CALL_ACCESSIBILITY_SETTINGS",
/** The {@link android.content.Intent} action used to show the call settings page.
*/
ACTION_SHOW_CALL_SETTINGS : "android.telecom.action.SHOW_CALL_SETTINGS",
/** The {@link android.content.Intent} action used to show the respond via SMS settings page.
*/
ACTION_SHOW_RESPOND_VIA_SMS_SETTINGS : "android.telecom.action.SHOW_RESPOND_VIA_SMS_SETTINGS",
/** The {@link android.content.Intent} action used to show the settings page used to configure
 {@link android.telecom.PhoneAccount} preferences.
*/
ACTION_CHANGE_PHONE_ACCOUNTS : "android.telecom.action.CHANGE_PHONE_ACCOUNTS",
/** {@link android.content.Intent} action used indicate that a new phone account was just
 registered.
 <p>
 The Intent {@link Intent#getExtras() extras} will contain {@link #EXTRA_PHONE_ACCOUNT_HANDLE}
 to indicate which {@link android.telecom.PhoneAccount} was registered.
 <p>
 Will only be sent to the default dialer app (see {@link #getDefaultDialerPackage}()).
*/
ACTION_PHONE_ACCOUNT_REGISTERED : "android.telecom.action.PHONE_ACCOUNT_REGISTERED",
/** {@link android.content.Intent} action used indicate that a phone account was just
 unregistered.
 <p>
 The Intent {@link Intent#getExtras() extras} will contain {@link #EXTRA_PHONE_ACCOUNT_HANDLE}
 to indicate which {@link android.telecom.PhoneAccount} was unregistered.
 <p>
 Will only be sent to the default dialer app (see {@link #getDefaultDialerPackage}()).
*/
ACTION_PHONE_ACCOUNT_UNREGISTERED : "android.telecom.action.PHONE_ACCOUNT_UNREGISTERED",
/** Activity action: Shows a dialog asking the user whether or not they want to replace the
 current default Dialer with the one specified in
 {@link #EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME}.

 Usage example:
 <pre>
 Intent intent = new Intent(TelecomManager.ACTION_CHANGE_DEFAULT_DIALER);
 intent.putExtra(TelecomManager.EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME,
         getActivity().getPackageName());
 startActivity(intent);
 </pre>
 <p>
 This is no longer supported since Q, please use
 {@link android.app.role.RoleManager#createRequestRoleIntent(String)} with
 {@link android.app.role.RoleManager#ROLE_DIALER} instead.
*/
ACTION_CHANGE_DEFAULT_DIALER : "android.telecom.action.CHANGE_DEFAULT_DIALER",
/** Broadcast intent action indicating that the current default dialer has changed.
 The string extra {@link #EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME} will contain the
 name of the package that the default dialer was changed to.

 @see #EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME
*/
ACTION_DEFAULT_DIALER_CHANGED : "android.telecom.action.DEFAULT_DIALER_CHANGED",
/** Extra value used to provide the package name for {@link #ACTION_CHANGE_DEFAULT_DIALER}.
*/
EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME : "android.telecom.extra.CHANGE_DEFAULT_DIALER_PACKAGE_NAME",
/** Broadcast intent action indicating that the current default call screening app has changed.

 The string extra {@link #EXTRA_DEFAULT_CALL_SCREENING_APP_COMPONENT_NAME} will contain the
 name of the Component of the previous or the new call screening app.

 The boolean extra {@link #EXTRA_IS_DEFAULT_CALL_SCREENING_APP} will indicate the component
 name in the String extra {@link #EXTRA_DEFAULT_CALL_SCREENING_APP_COMPONENT_NAME} is default
 call screening app or not.
*/
ACTION_DEFAULT_CALL_SCREENING_APP_CHANGED : "android.telecom.action.DEFAULT_CALL_SCREENING_APP_CHANGED",
/** Extra value used with {@link #ACTION_DEFAULT_CALL_SCREENING_APP_CHANGED} broadcast to
 indicate the ComponentName of the call screening app which has changed.
*/
EXTRA_DEFAULT_CALL_SCREENING_APP_COMPONENT_NAME : "android.telecom.extra.DEFAULT_CALL_SCREENING_APP_COMPONENT_NAME",
/** Extra value used with {@link #ACTION_DEFAULT_CALL_SCREENING_APP_CHANGED} broadcast to
 indicate whether an app is the default call screening app.
*/
EXTRA_IS_DEFAULT_CALL_SCREENING_APP : "android.telecom.extra.IS_DEFAULT_CALL_SCREENING_APP",
/** Optional extra for {@link android.content.Intent#ACTION_CALL} containing a boolean that
 determines whether the speakerphone should be automatically turned on for an outgoing call.
*/
EXTRA_START_CALL_WITH_SPEAKERPHONE : "android.telecom.extra.START_CALL_WITH_SPEAKERPHONE",
/** Optional extra for {@link android.content.Intent#ACTION_CALL} containing an integer that
 determines the desired video state for an outgoing call.
 Valid options:
 {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED}.
*/
EXTRA_START_CALL_WITH_VIDEO_STATE : "android.telecom.extra.START_CALL_WITH_VIDEO_STATE",
/** Optional extra for {@link #addNewIncomingCall(PhoneAccountHandle, Bundle)} containing an
 integer that determines the requested video state for an incoming call.
 Valid options:
 {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED}.
*/
EXTRA_INCOMING_VIDEO_STATE : "android.telecom.extra.INCOMING_VIDEO_STATE",
/** The extra used with an {@link android.content.Intent#ACTION_CALL} and
 {@link android.content.Intent#ACTION_DIAL} {@code Intent} to specify a
 {@link android.telecom.PhoneAccountHandle} to use when making the call.
 <p class="note">
 Retrieve with {@link android.content.Intent#getParcelableExtra(String)}.
*/
EXTRA_PHONE_ACCOUNT_HANDLE : "android.telecom.extra.PHONE_ACCOUNT_HANDLE",
/** Optional extra for {@link android.content.Intent#ACTION_CALL} containing a string call
 subject which will be associated with an outgoing call.  Should only be specified if the
 {@link android.telecom.PhoneAccount} supports the capability {@link android.telecom.PhoneAccount#CAPABILITY_CALL_SUBJECT}.
*/
EXTRA_CALL_SUBJECT : "android.telecom.extra.CALL_SUBJECT",
/** The extra used by a {@link android.telecom.ConnectionService} to provide the handle of the caller that
 has initiated a new incoming call.
*/
EXTRA_INCOMING_CALL_ADDRESS : "android.telecom.extra.INCOMING_CALL_ADDRESS",
/** Optional extra for {@link #ACTION_INCOMING_CALL} containing a {@link Bundle} which contains
 metadata about the call. This {@link Bundle} will be returned to the
 {@link android.telecom.ConnectionService}.
*/
EXTRA_INCOMING_CALL_EXTRAS : "android.telecom.extra.INCOMING_CALL_EXTRAS",
/** Optional extra for {@link #ACTION_INCOMING_CALL} containing a boolean to indicate that the
 call has an externally generated ringer. Used by the HfpClientConnectionService when In Band
 Ringtone is enabled to prevent two ringers from being generated.
 @hide
*/
EXTRA_CALL_EXTERNAL_RINGER : "android.telecom.extra.CALL_EXTERNAL_RINGER",
/** Optional extra for {@link android.content.Intent#ACTION_CALL} and
 {@link android.content.Intent#ACTION_DIAL} {@code Intent} containing a {@link Bundle}
 which contains metadata about the call. This {@link Bundle} will be saved into
 {@code Call.Details} and passed to the {@link android.telecom.ConnectionService} when placing the call.
*/
EXTRA_OUTGOING_CALL_EXTRAS : "android.telecom.extra.OUTGOING_CALL_EXTRAS",
/** An optional boolean extra on {@link android.content.Intent#ACTION_CALL_EMERGENCY} to tell
 whether the user's dial intent is emergency; this is required to specify when the dialed
 number is ambiguous, identified as both emergency number and any other non-emergency number;
 e.g. in some situation, 611 could be both an emergency number in a country and a
 non-emergency number of a carrier's customer service hotline.

 @hide
*/
EXTRA_IS_USER_INTENT_EMERGENCY_CALL : "android.telecom.extra.IS_USER_INTENT_EMERGENCY_CALL",
/** @hide
*/
EXTRA_UNKNOWN_CALL_HANDLE : "android.telecom.extra.UNKNOWN_CALL_HANDLE",
/** Optional extra for incoming and outgoing calls containing a long which specifies the time the
 call was created. This value is in milliseconds since boot.
 @hide
*/
EXTRA_CALL_CREATED_TIME_MILLIS : "android.telecom.extra.CALL_CREATED_TIME_MILLIS",
/** Optional extra for incoming and outgoing calls containing a long which specifies the time
 telecom began routing the call. This value is in milliseconds since boot.
 @hide
*/
EXTRA_CALL_TELECOM_ROUTING_START_TIME_MILLIS : "android.telecom.extra.CALL_TELECOM_ROUTING_START_TIME_MILLIS",
/** Optional extra for incoming and outgoing calls containing a long which specifies the time
 telecom finished routing the call. This value is in milliseconds since boot.
 @hide
*/
EXTRA_CALL_TELECOM_ROUTING_END_TIME_MILLIS : "android.telecom.extra.CALL_TELECOM_ROUTING_END_TIME_MILLIS",
/** Optional extra for {@link android.telephony.TelephonyManager#ACTION_PHONE_STATE_CHANGED}
 containing the disconnect code.
*/
EXTRA_CALL_DISCONNECT_CAUSE : "android.telecom.extra.CALL_DISCONNECT_CAUSE",
/** Optional extra for {@link android.telephony.TelephonyManager#ACTION_PHONE_STATE_CHANGED}
 containing the disconnect message.
*/
EXTRA_CALL_DISCONNECT_MESSAGE : "android.telecom.extra.CALL_DISCONNECT_MESSAGE",
/** Optional extra for {@link android.telephony.TelephonyManager#ACTION_PHONE_STATE_CHANGED}
 containing the component name of the associated connection service.
 @hide
*/
EXTRA_CONNECTION_SERVICE : "android.telecom.extra.CONNECTION_SERVICE",
/** Optional extra for communicating the call technology used by a
 {@link com.android.internal.telephony.Connection} to Telecom
 @hide
*/
EXTRA_CALL_TECHNOLOGY_TYPE : "android.telecom.extra.CALL_TECHNOLOGY_TYPE",
/** Optional extra for communicating the call network technology used by a
 {@link android.telecom.Connection} to Telecom and InCallUI.

 @see {@code NETWORK_TYPE_*} in {@link android.telephony.TelephonyManager}.
*/
EXTRA_CALL_NETWORK_TYPE : "android.telecom.extra.CALL_NETWORK_TYPE",
/** An optional {@link android.content.Intent#ACTION_CALL} intent extra denoting the
 package name of the app specifying an alternative gateway for the call.
 The value is a string.

 (The following comment corresponds to the all GATEWAY_* extras)
 An app which sends the {@link android.content.Intent#ACTION_CALL} intent can specify an
 alternative address to dial which is different from the one specified and displayed to
 the user. This alternative address is referred to as the gateway address.
*/
GATEWAY_PROVIDER_PACKAGE : "android.telecom.extra.GATEWAY_PROVIDER_PACKAGE",
/** An optional {@link android.content.Intent#ACTION_CALL} intent extra corresponding to the
 original address to dial for the call. This is used when an alternative gateway address is
 provided to recall the original address.
 The value is a {@link android.net.Uri}.

 (See {@link #GATEWAY_PROVIDER_PACKAGE} for details)
*/
GATEWAY_ORIGINAL_ADDRESS : "android.telecom.extra.GATEWAY_ORIGINAL_ADDRESS",
/** The number which the party on the other side of the line will see (and use to return the
 call).
 <p>
 {@link android.telecom.ConnectionService}s which interact with {@link android.telecom.RemoteConnection}s should only populate
 this if the {@link android.telephony.TelephonyManager#getLine1Number()} value, as that is the
 user's expected caller ID.
*/
EXTRA_CALL_BACK_NUMBER : "android.telecom.extra.CALL_BACK_NUMBER",
/** The number of milliseconds that Telecom should wait after disconnecting a call via the
 ACTION_NEW_OUTGOING_CALL broadcast, in order to wait for the app which cancelled the call
 to make a new one.
 @hide
*/
EXTRA_NEW_OUTGOING_CALL_CANCEL_TIMEOUT : "android.telecom.extra.NEW_OUTGOING_CALL_CANCEL_TIMEOUT",
/** Boolean extra specified to indicate that the intention of adding a call is to handover an
 existing call from the user's device to a different {@link android.telecom.PhoneAccount}.
 <p>
 Used when calling {@link #addNewIncomingCall(PhoneAccountHandle, Bundle)}
 to indicate to Telecom that the purpose of adding a new incoming call is to handover an
 existing call from the user's device to a different {@link android.telecom.PhoneAccount}.  This occurs on
 the receiving side of a handover.
 <p>
 Used when Telecom calls
 {@link android.telecom.ConnectionService#onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}
 to indicate that the purpose of Telecom requesting a new outgoing connection it to request
 a handover to this {@link android.telecom.ConnectionService} from an ongoing call on the user's device.  This
 occurs on the initiating side of a handover.
 <p>
 The phone number of the call used by Telecom to determine which call should be handed over.
 @hide
 @deprecated Use the public handover APIs.  See
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} for more information.
*/
EXTRA_IS_HANDOVER : "android.telecom.extra.IS_HANDOVER",
/** When {@code true} indicates that a request to create a new connection is for the purpose of
 a handover.  Note: This is used with the
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)} API as part of the
 internal communication mechanism with the {@link android.telecom.ConnectionService}.  It is
 not the same as the legacy {@link #EXTRA_IS_HANDOVER} extra.
 @hide
*/
EXTRA_IS_HANDOVER_CONNECTION : "android.telecom.extra.IS_HANDOVER_CONNECTION",
/** Parcelable extra used with {@link #EXTRA_IS_HANDOVER} to indicate the source
 {@link android.telecom.PhoneAccountHandle} when initiating a handover which {@link android.telecom.ConnectionService}
 the handover is from.
 @hide
*/
EXTRA_HANDOVER_FROM_PHONE_ACCOUNT : "android.telecom.extra.HANDOVER_FROM_PHONE_ACCOUNT",
/** Extra key specified in the {@link android.telecom.ConnectionRequest#getExtras()} when Telecom calls
 {@link android.telecom.ConnectionService#onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}
 to inform the {@link android.telecom.ConnectionService} what the initial {@link android.telecom.CallAudioState} of the
 {@link android.telecom.Connection} will be.
 @hide
*/
EXTRA_CALL_AUDIO_STATE : "android.telecom.extra.CALL_AUDIO_STATE",
/** A boolean extra, which when set on the {@link Intent#ACTION_CALL} intent or on the bundle
 passed into {@link #placeCall(Uri, Bundle)}, indicates that the call should be initiated with
 an RTT session open. See {@link android.telecom.Call.RttCall} for more information on RTT.
*/
EXTRA_START_CALL_WITH_RTT : "android.telecom.extra.START_CALL_WITH_RTT",
/** A boolean meta-data value indicating whether an {@link android.telecom.InCallService} implements an
 in-call user interface. Dialer implementations (see {@link #getDefaultDialerPackage}()) which
 would also like to replace the in-call interface should set this meta-data to {@code true} in
 the manifest registration of their {@link android.telecom.InCallService}.
*/
METADATA_IN_CALL_SERVICE_UI : "android.telecom.IN_CALL_SERVICE_UI",
/** A boolean meta-data value indicating whether an {@link android.telecom.InCallService} implements an
 in-call user interface to be used while the device is in car-mode (see
 {@link android.content.res.Configuration#UI_MODE_TYPE_CAR}).
*/
METADATA_IN_CALL_SERVICE_CAR_MODE_UI : "android.telecom.IN_CALL_SERVICE_CAR_MODE_UI",
/** A boolean meta-data value indicating whether an {@link android.telecom.InCallService} implements ringing.
 Dialer implementations (see {@link #getDefaultDialerPackage}()) which would also like to
 override the system provided ringing should set this meta-data to {@code true} in the
 manifest registration of their {@link android.telecom.InCallService}.
 <p>
 When {@code true}, it is the {@link android.telecom.InCallService}'s responsibility to play a ringtone for
 all incoming calls.
*/
METADATA_IN_CALL_SERVICE_RINGING : "android.telecom.IN_CALL_SERVICE_RINGING",
/** A boolean meta-data value indicating whether an {@link android.telecom.InCallService} wants to be informed of
 calls which have the {@link android.telecom.Call.Details#PROPERTY_IS_EXTERNAL_CALL} property.  An external
 call is one which a {@link android.telecom.ConnectionService} knows about, but is not connected to directly.
 Dialer implementations (see {@link #getDefaultDialerPackage}()) which would like to be
 informed of external calls should set this meta-data to {@code true} in the manifest
 registration of their {@link android.telecom.InCallService}.  By default, the {@link android.telecom.InCallService} will NOT
 be informed of external calls.
*/
METADATA_INCLUDE_EXTERNAL_CALLS : "android.telecom.INCLUDE_EXTERNAL_CALLS",
/** A boolean meta-data value indicating whether an {@link android.telecom.InCallService} wants to be informed of
 calls which have the {@link android.telecom.Call.Details#PROPERTY_SELF_MANAGED} property.  A self-managed
 call is one which originates from a self-managed {@link android.telecom.ConnectionService} which has chosen
 to implement its own call user interface.  An {@link android.telecom.InCallService} implementation which
 would like to be informed of external calls should set this meta-data to {@code true} in the
 manifest registration of their {@link android.telecom.InCallService}.  By default, the {@link android.telecom.InCallService}
 will NOT be informed about self-managed calls.
 <p>
 An {@link android.telecom.InCallService} which receives self-managed calls is free to view and control the
 state of calls in the self-managed {@link android.telecom.ConnectionService}.  An example use-case is
 exposing these calls to an automotive device via its companion app.
 <p>
 This meta-data can only be set for an {@link android.telecom.InCallService} which also sets
 {@link #METADATA_IN_CALL_SERVICE_UI}. Only the default phone/dialer app, or a car-mode
 {@link android.telecom.InCallService} can see self-managed calls.
 <p>
 See also {@link android.telecom.Connection#PROPERTY_SELF_MANAGED}.
*/
METADATA_INCLUDE_SELF_MANAGED_CALLS : "android.telecom.INCLUDE_SELF_MANAGED_CALLS",
/** The dual tone multi-frequency signaling character sent to indicate the dialing system should
 pause for a predefined period.
*/
DTMF_CHARACTER_PAUSE : "44",
/** The dual-tone multi-frequency signaling character sent to indicate the dialing system should
 wait for user confirmation before proceeding.
*/
DTMF_CHARACTER_WAIT : "59",
/** TTY (teletypewriter) mode is off.

 @hide
*/
TTY_MODE_OFF : "0",
/** TTY (teletypewriter) mode is on. The speaker is off and the microphone is muted. The user
 will communicate with the remote party by sending and receiving text messages.

 @hide
*/
TTY_MODE_FULL : "1",
/** TTY (teletypewriter) mode is in hearing carryover mode (HCO). The microphone is muted but the
 speaker is on. The user will communicate with the remote party by sending text messages and
 hearing an audible reply.

 @hide
*/
TTY_MODE_HCO : "2",
/** TTY (teletypewriter) mode is in voice carryover mode (VCO). The speaker is off but the
 microphone is still on. User will communicate with the remote party by speaking and receiving
 text message replies.

 @hide
*/
TTY_MODE_VCO : "3",
/** Broadcast intent action indicating that the current TTY mode has changed. An intent extra
 provides this state as an int.

 @see #EXTRA_CURRENT_TTY_MODE
 @hide
*/
ACTION_CURRENT_TTY_MODE_CHANGED : "android.telecom.action.CURRENT_TTY_MODE_CHANGED",
/** The lookup key for an int that indicates the current TTY mode.
 Valid modes are:
 - {@link #TTY_MODE_OFF}
 - {@link #TTY_MODE_FULL}
 - {@link #TTY_MODE_HCO}
 - {@link #TTY_MODE_VCO}

 @hide
*/
EXTRA_CURRENT_TTY_MODE : "android.telecom.intent.extra.CURRENT_TTY_MODE",
/** Broadcast intent action indicating that the TTY preferred operating mode has changed. An
 intent extra provides the new mode as an int.

 @see #EXTRA_TTY_PREFERRED_MODE
 @hide
*/
ACTION_TTY_PREFERRED_MODE_CHANGED : "android.telecom.action.TTY_PREFERRED_MODE_CHANGED",
/** The lookup key for an int that indicates preferred TTY mode. Valid modes are: -
 {@link #TTY_MODE_OFF} - {@link #TTY_MODE_FULL} - {@link #TTY_MODE_HCO} -
 {@link #TTY_MODE_VCO}

 @hide
*/
EXTRA_TTY_PREFERRED_MODE : "android.telecom.intent.extra.TTY_PREFERRED",
/** Broadcast intent action for letting custom component know to show the missed call
 notification. If no custom component exists then this is sent to the default dialer which
 should post a missed-call notification.
*/
ACTION_SHOW_MISSED_CALLS_NOTIFICATION : "android.telecom.action.SHOW_MISSED_CALLS_NOTIFICATION",
/** The number of calls associated with the notification. If the number is zero then the missed
 call notification should be dismissed.
*/
EXTRA_NOTIFICATION_COUNT : "android.telecom.extra.NOTIFICATION_COUNT",
/** The number associated with the missed calls. This number is only relevant
 when EXTRA_NOTIFICATION_COUNT is 1.
*/
EXTRA_NOTIFICATION_PHONE_NUMBER : "android.telecom.extra.NOTIFICATION_PHONE_NUMBER",
/** The intent to clear missed calls.
 @hide
*/
EXTRA_CLEAR_MISSED_CALLS_INTENT : "android.telecom.extra.CLEAR_MISSED_CALLS_INTENT",
/** The intent to call back a missed call.
 @hide
*/
EXTRA_CALL_BACK_INTENT : "android.telecom.extra.CALL_BACK_INTENT",
/** The dialer activity responsible for placing emergency calls from, for example, a locked
 keyguard.
 @hide
*/
EMERGENCY_DIALER_COMPONENT : "null",
/** The boolean indicated by this extra controls whether or not a call is eligible to undergo
 assisted dialing. This extra is stored under {@link #EXTRA_OUTGOING_CALL_EXTRAS}.
 @hide
*/
EXTRA_USE_ASSISTED_DIALING : "android.telecom.extra.USE_ASSISTED_DIALING",
/** Optional extra for {@link #placeCall(Uri, Bundle)} containing an integer that specifies
 the source where user initiated this call. This data is used in metrics.
 Valid source are:
 {@link android.telecom.ParcelableCallAnalytics#CALL_SOURCE_UNSPECIFIED},
 {@link android.telecom.ParcelableCallAnalytics#CALL_SOURCE_EMERGENCY_DIALPAD},
 {@link android.telecom.ParcelableCallAnalytics#CALL_SOURCE_EMERGENCY_SHORTCUT}.

 @hide
*/
EXTRA_CALL_SOURCE : "android.telecom.extra.CALL_SOURCE",
/** Indicates that the address or number of a call is allowed to be displayed for caller ID.
*/
PRESENTATION_ALLOWED : "1",
/** Indicates that the address or number of a call is blocked by the other party.
*/
PRESENTATION_RESTRICTED : "2",
/** Indicates that the address or number of a call is not specified or known by the carrier.
*/
PRESENTATION_UNKNOWN : "3",
/** Indicates that the address or number of a call belongs to a pay phone.
*/
PRESENTATION_PAYPHONE : "4",
/**
@hide 
*/
from : function(  ) {},

/**Return the {@link android.telecom.PhoneAccount} which will be used to place outgoing calls to addresses with
 the specified {@code uriScheme}. This {@link android.telecom.PhoneAccount} will always be a member of the
 list which is returned from invoking {@link #getCallCapablePhoneAccounts}(). The specific
 account returned depends on the following priorities:
 <ul>
 <li> If the user-selected default {@link android.telecom.PhoneAccount} supports the specified scheme, it will
 be returned.
 </li>
 <li> If there exists only one {@link android.telecom.PhoneAccount} that supports the specified scheme, it
 will be returned.
 </li>
 </ul>
 <p>
 If no {@link android.telecom.PhoneAccount} fits the criteria above, this method will return {@code null}.

 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@param {String} uriScheme The URI scheme.
@return {Object {android.telecom.PhoneAccountHandle}} The {@link PhoneAccountHandle} corresponding to the account to be used.
*/
getDefaultOutgoingPhoneAccount : function(  ) {},

/**Return the {@link android.telecom.PhoneAccount} which is the user-chosen default for making outgoing phone
 calls. This {@code PhoneAccount} will always be a member of the list which is returned from
 calling {@link #getCallCapablePhoneAccounts}()
 <p>
 Apps must be prepared for this method to return {@code null}, indicating that there currently
 exists no user-chosen default {@code PhoneAccount}.
 <p>
 The default dialer has access to use this method.
@return {Object {android.telecom.PhoneAccountHandle}} The user outgoing phone account selected by the user, or {@code null} if there is no
 user selected outgoing {@link PhoneAccountHandle}.
*/
getUserSelectedOutgoingPhoneAccount : function(  ) {},

/**Sets the user-chosen default {@link android.telecom.PhoneAccountHandle} for making outgoing phone calls.
@param {Object {PhoneAccountHandle}} accountHandle The {@link PhoneAccountHandle} which will be used by default for making
                      outgoing voice calls, or {@code null} if no default is specified (the
                      user will be asked each time a call is placed in this case).
@hide 
*/
setUserSelectedOutgoingPhoneAccount : function(  ) {},

/**Returns the current SIM call manager. Apps must be prepared for this method to return
 {@code null}, indicating that there currently exists no SIM call manager {@link android.telecom.PhoneAccount}
 for the default voice subscription.
@return {Object {android.telecom.PhoneAccountHandle}} The phone account handle of the current sim call manager for the default voice
 subscription.
@see SubscriptionManager#getDefaultVoiceSubscriptionId()
*/
getSimCallManager : function(  ) {},

/**Returns current SIM call manager for the Telephony Subscription ID specified. Apps must be
 prepared for this method to return {@code null}, indicating that there currently exists no
 SIM call manager {@link android.telecom.PhoneAccount} for the subscription specified.
@param {Number} subscriptionId The Telephony Subscription ID that the SIM call manager should be
                       queried for.
@return {Object {android.telecom.PhoneAccountHandle}} The phone account handle of the current sim call manager.
@see SubscriptionManager#getActiveSubscriptionInfoList()
@hide 
*/
getSimCallManagerForSubscription : function(  ) {},

/**Returns the current SIM call manager for the user-chosen default Telephony Subscription ID
 (see {@link SubscriptionManager#getDefaultSubscriptionId()}) and the specified user. Apps
 must be prepared for this method to return {@code null}, indicating that there currently
 exists no SIM call manager {@link android.telecom.PhoneAccount} for the default voice subscription.
@return {Object {android.telecom.PhoneAccountHandle}} The phone account handle of the current sim call manager.
@hide 
@deprecated Use {@link #getSimCallManager()}.
*/
getSimCallManager : function(  ) {},

/**Returns the current connection manager. Apps must be prepared for this method to return
 {@code null}, indicating that there currently exists no Connection Manager
 {@link android.telecom.PhoneAccount} for the default voice subscription.
@return {Object {android.telecom.PhoneAccountHandle}} The phone account handle of the current connection manager.
@hide 
*/
getConnectionManager : function(  ) {},

/**Returns a list of the {@link android.telecom.PhoneAccountHandle}s which can be used to make and receive phone
 calls which support the specified URI scheme.
 <P>
 For example, invoking with {@code "tel"} will find all {@link android.telecom.PhoneAccountHandle}s which
 support telephone calls (e.g. URIs such as {@code tel:555-555-1212}).  Invoking with
 {@code "sip"} will find all {@link android.telecom.PhoneAccountHandle}s which support SIP calls (e.g. URIs
 such as {@code sip:example@sipexample.com}).
@param {String} uriScheme The URI scheme.
@return {Object {java.util.List}} A list of {@code PhoneAccountHandle} objects supporting the URI scheme.
@hide 
*/
getPhoneAccountsSupportingScheme : function(  ) {},

/**Returns a list of {@link android.telecom.PhoneAccountHandle}s which can be used to make and receive phone
 calls. The returned list includes only those accounts which have been explicitly enabled
 by the user.

 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@see #EXTRA_PHONE_ACCOUNT_HANDLE
@return {Object {java.util.List}} A list of {@code PhoneAccountHandle} objects.
*/
getCallCapablePhoneAccounts : function(  ) {},

/**Returns a list of {@link android.telecom.PhoneAccountHandle}s for self-managed {@link android.telecom.ConnectionService}s.
 <p>
 Self-Managed {@link android.telecom.ConnectionService}s have a {@link android.telecom.PhoneAccount} with
 {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED}.
 <p>
 Requires permission {@link android.Manifest.permission#READ_PHONE_STATE}, or that the caller
 is the default dialer app.
 <p>
 A {@link SecurityException} will be thrown if a called is not the default dialer, or lacks
 the {@link android.Manifest.permission#READ_PHONE_STATE} permission.
@return {Object {java.util.List}} A list of {@code PhoneAccountHandle} objects.
*/
getSelfManagedPhoneAccounts : function(  ) {},

/**Returns a list of {@link android.telecom.PhoneAccountHandle}s including those which have not been enabled
 by the user.
@param {Boolean} includeDisabledAccounts When {@code true}, disabled phone accounts will be included,
                                when {@code false}, only
@return {Object {java.util.List}} A list of {@code PhoneAccountHandle} objects.
@hide 
*/
getCallCapablePhoneAccounts : function(  ) {},

/**Returns a list of all {@link android.telecom.PhoneAccount}s registered for the calling package.
@return {Object {java.util.List}} A list of {@code PhoneAccountHandle} objects.
@hide 
*/
getPhoneAccountsForPackage : function(  ) {},

/**Return the {@link android.telecom.PhoneAccount} for a specified {@link android.telecom.PhoneAccountHandle}. Object includes
 resources which can be used in a user interface.
@param {Object {PhoneAccountHandle}} account The {@link PhoneAccountHandle}.
@return {Object {android.telecom.PhoneAccount}} The {@link PhoneAccount} object.
*/
getPhoneAccount : function(  ) {},

/**Returns a count of all {@link android.telecom.PhoneAccount}s.
@return {Number} The count of {@link PhoneAccount}s.
@hide 
*/
getAllPhoneAccountsCount : function(  ) {},

/**Returns a list of all {@link android.telecom.PhoneAccount}s.
@return {Object {java.util.List}} All {@link PhoneAccount}s.
@hide 
*/
getAllPhoneAccounts : function(  ) {},

/**Returns a list of all {@link android.telecom.PhoneAccountHandle}s.
@return {Object {java.util.List}} All {@link PhoneAccountHandle}s.
@hide 
*/
getAllPhoneAccountHandles : function(  ) {},

/**Register a {@link android.telecom.PhoneAccount} for use by the system that will be stored in Device Encrypted
 storage. When registering {@link android.telecom.PhoneAccount}s, existing registrations will be overwritten
 if the {@link android.telecom.PhoneAccountHandle} matches that of a {@link android.telecom.PhoneAccount} which is already
 registered. Once registered, the {@link android.telecom.PhoneAccount} is listed to the user as an option
 when placing calls. The user may still need to enable the {@link android.telecom.PhoneAccount} within
 the phone app settings before the account is usable.
 <p>
 A {@link SecurityException} will be thrown if an app tries to register a
 {@link android.telecom.PhoneAccountHandle} where the package name specified within
 {@link android.telecom.PhoneAccountHandle#getComponentName()} does not match the package name of the app.
@param {Object {PhoneAccount}} account The complete {@link PhoneAccount}.
*/
registerPhoneAccount : function(  ) {},

/**Remove a {@link android.telecom.PhoneAccount} registration from the system.
@param {Object {PhoneAccountHandle}} accountHandle A {@link PhoneAccountHandle} for the {@link PhoneAccount} to unregister.
*/
unregisterPhoneAccount : function(  ) {},

/**Remove all Accounts that belong to the calling package from the system.
@hide 
*/
clearPhoneAccounts : function(  ) {},

/**Remove all Accounts that belong to the calling package from the system.
@deprecated Use {@link #clearPhoneAccounts()} instead.
@hide 
*/
clearAccounts : function(  ) {},

/**Remove all Accounts that belong to the specified package from the system.
@hide 
*/
clearAccountsForPackage : function(  ) {},

/**
@deprecated - Use {@link TelecomManager#getDefaultDialerPackage} to directly access
         the default dialer's package name instead.
@hide 
*/
getDefaultPhoneApp : function(  ) {},

/**Used to determine the currently selected default dialer package.
@return {String} package name for the default dialer package or null if no package has been
         selected as the default dialer.
*/
getDefaultDialerPackage : function(  ) {},

/**Used to set the default dialer package.
@param {String} packageName to set the default dialer to, or {@code null} if the system provided
                    dialer should be used instead.
@result {@code true} if the default dialer was successfully changed, {@code false} if
         the specified package does not correspond to an installed dialer, or is already
         the default dialer.

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE}
 Requires permission: {@link android.Manifest.permission#WRITE_SECURE_SETTINGS}
@hide 
@deprecated Use
 {@link android.app.role.RoleManager#addRoleHolderAsUser(String, String, int, UserHandle,
 Executor, java.util.function.Consumer)} instead.
@removed 
*/
setDefaultDialer : function(  ) {},

/**Determines the package name of the system-provided default phone app.
@return {String} package name for the system dialer package or {@code null} if no system dialer is
         preloaded.
*/
getSystemDialerPackage : function(  ) {},

/**Return whether a given phone number is the configured voicemail number for a
 particular phone account.

 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@param {Object {PhoneAccountHandle}} accountHandle The handle for the account to check the voicemail number against
@param {String} number The number to look up.
*/
isVoiceMailNumber : function(  ) {},

/**Return the voicemail number for a given phone account.

 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@param {Object {PhoneAccountHandle}} accountHandle The handle for the phone account.
@return {String} The voicemail number for the phone account, and {@code null} if one has not been
         configured.
*/
getVoiceMailNumber : function(  ) {},

/**Return the line 1 phone number for given phone account.

 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@param {Object {PhoneAccountHandle}} accountHandle The handle for the account retrieve a number for.
@return {String} A string representation of the line 1 phone number.
*/
getLine1Number : function(  ) {},

/**Returns whether there is an ongoing phone call (can be in dialing, ringing, active or holding
 states) originating from either a manager or self-managed {@link android.telecom.ConnectionService}.
 <p>
 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@return {Boolean} {@code true} if there is an ongoing call in either a managed or self-managed
      {@link ConnectionService}, {@code false} otherwise.
*/
isInCall : function(  ) {},

/**Returns whether there is an ongoing call originating from a managed
 {@link android.telecom.ConnectionService}.  An ongoing call can be in dialing, ringing, active or holding
 states.
 <p>
 If you also need to know if there are ongoing self-managed calls, use {@link #isInCall}()
 instead.
 <p>
 Requires permission: {@link android.Manifest.permission#READ_PHONE_STATE}
@return {Boolean} {@code true} if there is an ongoing call in a managed {@link ConnectionService},
      {@code false} otherwise.
*/
isInManagedCall : function(  ) {},

/**Returns one of the following constants that represents the current state of Telecom:

 {@link TelephonyManager#CALL_STATE_RINGING}
 {@link TelephonyManager#CALL_STATE_OFFHOOK}
 {@link TelephonyManager#CALL_STATE_IDLE}

 Note that this API does not require the
 {@link android.Manifest.permission#READ_PHONE_STATE} permission. This is intentional, to
 preserve the behavior of {@link TelephonyManager#getCallState()}, which also did not require
 the permission.

 Takes into consideration both managed and self-managed calls.
@hide 
*/
getCallState : function(  ) {},

/**Returns whether there currently exists is a ringing incoming-call.
@return {Boolean} {@code true} if there is a managed or self-managed ringing call.
@hide 
*/
isRinging : function(  ) {},

/**Ends the foreground call on the device.
 <p>
 If there is a ringing call, calling this method rejects the ringing call.  Otherwise the
 foreground call is ended.
 <p>
 Requires permission {@link android.Manifest.permission#ANSWER_PHONE_CALLS}.
 <p>
 Note: this method CANNOT be used to end ongoing emergency calls and will return {@code false}
 if an attempt is made to end an emergency call.
@return {Boolean} {@code true} if there is a call which will be rejected or terminated, {@code false}
 otherwise.
@deprecated Companion apps for wearable devices should use the {@link InCallService} API
 instead.  Apps performing call screening should use the {@link CallScreeningService} API
 instead.
*/
endCall : function(  ) {},

/**If there is a ringing incoming call, this method accepts the call on behalf of the user.

 If the incoming call is a video call, the call will be answered with the same video state as
 the incoming call requests.  This means, for example, that an incoming call requesting
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL} will be answered, accepting that state.

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE} or
 {@link android.Manifest.permission#ANSWER_PHONE_CALLS}
@deprecated Companion apps for wearable devices should use the {@link InCallService} API
 instead.
*/
acceptRingingCall : function(  ) {},

/**If there is a ringing incoming call, this method accepts the call on behalf of the user,
 with the specified video state.

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE} or
 {@link android.Manifest.permission#ANSWER_PHONE_CALLS}
@param {Number} videoState The desired video state to answer the call with.
@deprecated Companion apps for wearable devices should use the {@link InCallService} API
 instead.
*/
acceptRingingCall : function(  ) {},

/**Silences the ringer if a ringing call exists.
 <p>
 This method can only be relied upon to stop the ringtone for a call if the ringtone has
 already started playing.  It is intended to handle use-cases such as silencing a ringing call
 when the user presses the volume button during ringing.
 <p>
 If this method is called prior to when the ringtone begins playing, the ringtone will not be
 silenced.  As such it is not intended as a means to avoid playing of a ringtone.
 <p>
 A dialer app which wants to have more control over ringtone playing should declare
 {@link android.telecom.TelecomManager#METADATA_IN_CALL_SERVICE_RINGING} in the manifest entry for their
 {@link android.telecom.InCallService} implementation to indicate that the app wants to be responsible for
 playing the ringtone for all incoming calls.
 <p>
 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE} or that the
 app fills the dialer role (see {@link #getDefaultDialerPackage}()).
*/
silenceRinger : function(  ) {},

/**Returns whether TTY is supported on this device.
*/
isTtySupported : function(  ) {},

/**Returns the current TTY mode of the device. For TTY to be on the user must enable it in
 settings and have a wired headset plugged in.
 Valid modes are:
 - {@link android.telecom.TelecomManager#TTY_MODE_OFF}
 - {@link android.telecom.TelecomManager#TTY_MODE_FULL}
 - {@link android.telecom.TelecomManager#TTY_MODE_HCO}
 - {@link android.telecom.TelecomManager#TTY_MODE_VCO}
@hide 
*/
getCurrentTtyMode : function(  ) {},

/**Registers a new incoming call. A {@link android.telecom.ConnectionService} should invoke this method when it
 has an incoming call. For managed {@link android.telecom.ConnectionService}s, the specified
 {@link android.telecom.PhoneAccountHandle} must have been registered with {@link #registerPhoneAccount} and
 the user must have enabled the corresponding {@link android.telecom.PhoneAccount}.  This can be checked using
 {@link #getPhoneAccount}. Self-managed {@link android.telecom.ConnectionService}s must have
 {@link android.Manifest.permission#MANAGE_OWN_CALLS} to add a new incoming call.
 <p>
 The incoming call you are adding is assumed to have a video state of
 {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY}, unless the extra value
 {@link #EXTRA_INCOMING_VIDEO_STATE} is specified.
 <p>
 Once invoked, this method will cause the system to bind to the {@link android.telecom.ConnectionService}
 associated with the {@link android.telecom.PhoneAccountHandle} and request additional information about the
 call (See {@link android.telecom.ConnectionService#onCreateIncomingConnection}) before starting the incoming
 call UI.
 <p>
 For a managed {@link android.telecom.ConnectionService}, a {@link SecurityException} will be thrown if either
 the {@link android.telecom.PhoneAccountHandle} does not correspond to a registered {@link android.telecom.PhoneAccount} or
 the associated {@link android.telecom.PhoneAccount} is not currently enabled by the user.
 <p>
 For a self-managed {@link android.telecom.ConnectionService}, a {@link SecurityException} will be thrown if
 the {@link android.telecom.PhoneAccount} has {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED} and the calling app
 does not have {@link android.Manifest.permission#MANAGE_OWN_CALLS}.
@param {Object {PhoneAccountHandle}} phoneAccount A {@link PhoneAccountHandle} registered with
            {@link #registerPhoneAccount}.
@param {Object {Bundle}} extras A bundle that will be passed through to
            {@link ConnectionService#onCreateIncomingConnection}.
*/
addNewIncomingCall : function(  ) {},

/**Registers a new unknown call with Telecom. This can only be called by the system Telephony
 service. This is invoked when Telephony detects a new unknown connection that was neither
 a new incoming call, nor an user-initiated outgoing call.
@param {Object {PhoneAccountHandle}} phoneAccount A {@link PhoneAccountHandle} registered with
            {@link #registerPhoneAccount}.
@param {Object {Bundle}} extras A bundle that will be passed through to
            {@link ConnectionService#onCreateIncomingConnection}.
@hide 
*/
addNewUnknownCall : function(  ) {},

/**Processes the specified dial string as an MMI code.
 MMI codes are any sequence of characters entered into the dialpad that contain a "*" or "#".
 Some of these sequences launch special behavior through handled by Telephony.
 This method uses the default subscription.
 <p>
 Requires that the method-caller be set as the system dialer app.
 </p>

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE}
@param {String} dialString The digits to dial.
@return {Boolean} True if the digits were processed as an MMI code, false otherwise.
*/
handleMmi : function(  ) {},

/**Processes the specified dial string as an MMI code.
 MMI codes are any sequence of characters entered into the dialpad that contain a "*" or "#".
 Some of these sequences launch special behavior through handled by Telephony.
 <p>
 Requires that the method-caller be set as the system dialer app.
 </p>

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE}
@param {String} accountHandle The handle for the account the MMI code should apply to.
@param {Object {PhoneAccountHandle}} dialString The digits to dial.
@return {Boolean} True if the digits were processed as an MMI code, false otherwise.
*/
handleMmi : function(  ) {},

/**Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE}
@param {Object {PhoneAccountHandle}} accountHandle The handle for the account to derive an adn query URI for or
 {@code null} to return a URI which will use the default account.
@return {Object {android.net.Uri}} The URI (with the content:// scheme) specific to the specified {@link PhoneAccount}
 for the the content retrieve.
*/
getAdnUriForPhoneAccount : function(  ) {},

/**Removes the missed-call notification if one is present.
 <p>
 Requires that the method-caller be set as the system dialer app.
 </p>

 Requires permission: {@link android.Manifest.permission#MODIFY_PHONE_STATE}
*/
cancelMissedCallsNotification : function(  ) {},

/**Brings the in-call screen to the foreground if there is an ongoing call. If there is
 currently no ongoing call, then this method does nothing.
 <p>
 Requires that the method-caller be set as the system dialer app or have the
 {@link android.Manifest.permission#READ_PHONE_STATE} permission.
 </p>
@param {Boolean} showDialpad Brings up the in-call dialpad as part of showing the in-call screen.
*/
showInCallScreen : function(  ) {},

/**Places a new outgoing call to the provided address using the system telecom service with
 the specified extras.

 This method is equivalent to placing an outgoing call using {@link Intent#ACTION_CALL},
 except that the outgoing call will always be sent via the system telecom service. If
 method-caller is either the user selected default dialer app or preloaded system dialer
 app, then emergency calls will also be allowed.

 Placing a call via a managed {@link android.telecom.ConnectionService} requires permission:
 {@link android.Manifest.permission#CALL_PHONE}

 Usage example:
 <pre>
 Uri uri = Uri.fromParts("tel", "12345", null);
 Bundle extras = new Bundle();
 extras.putBoolean(TelecomManager.EXTRA_START_CALL_WITH_SPEAKERPHONE, true);
 telecomManager.placeCall(uri, extras);
 </pre>

 The following keys are supported in the supplied extras.
 <ul>
   <li>{@link #EXTRA_OUTGOING_CALL_EXTRAS}</li>
   <li>{@link #EXTRA_PHONE_ACCOUNT_HANDLE}</li>
   <li>{@link #EXTRA_START_CALL_WITH_SPEAKERPHONE}</li>
   <li>{@link #EXTRA_START_CALL_WITH_VIDEO_STATE}</li>
 </ul>
 <p>
 An app which implements the self-managed {@link android.telecom.ConnectionService} API uses
 {@link #placeCall(Uri, Bundle)} to inform Telecom of a new outgoing call.  A self-managed
 {@link android.telecom.ConnectionService} must include {@link #EXTRA_PHONE_ACCOUNT_HANDLE} to specify its
 associated {@link android.telecom.PhoneAccountHandle}.

 Self-managed {@link android.telecom.ConnectionService}s require permission
 {@link android.Manifest.permission#MANAGE_OWN_CALLS}.

 <p class="note"><strong>Note:</strong> If this method is used to place an emergency call, it
 is not guaranteed that the call will be placed on the {@link android.telecom.PhoneAccount} provided in
 the {@link #EXTRA_PHONE_ACCOUNT_HANDLE} extra (if specified) and may be placed on another
 {@link android.telecom.PhoneAccount} with the {@link android.telecom.PhoneAccount#CAPABILITY_PLACE_EMERGENCY_CALLS}
 capability, depending on external factors, such as network conditions and Modem/SIM status.
 </p>
@param {Object {Uri}} address The address to make the call to.
@param {Object {Bundle}} extras Bundle of extras to use with the call.
*/
placeCall : function(  ) {},

/**Enables and disables specified phone account.
@param {Object {PhoneAccountHandle}} handle Handle to the phone account.
@param {Boolean} isEnabled Enable state of the phone account.
@hide 
*/
enablePhoneAccount : function(  ) {},

/**Dumps telecom analytics for uploading.
@return {Object {android.telecom.TelecomAnalytics}} 
@hide 
*/
dumpAnalytics : function(  ) {},

/**Creates the {@link Intent} which can be used with {@link Context#startActivity(Intent)} to
 launch the activity to manage blocked numbers.
 <p> The activity will display the UI to manage blocked numbers only if
 {@link android.provider.BlockedNumberContract#canCurrentUserBlockNumbers(Context)} returns
 {@code true} for the current user.
*/
createManageBlockedNumbersIntent : function(  ) {},

/**Determines whether Telecom would permit an incoming call to be added via the
 {@link #addNewIncomingCall(PhoneAccountHandle, Bundle)} API for the specified
 {@link android.telecom.PhoneAccountHandle}.
 <p>
 A {@link android.telecom.ConnectionService} may not add a call for the specified {@link android.telecom.PhoneAccountHandle}
 in the following situations:
 <ul>
     <li>{@link android.telecom.PhoneAccount} does not have property
     {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED} set (i.e. it is a managed
     {@link android.telecom.ConnectionService}), and the active or held call limit has
     been reached.</li>
     <li>There is an ongoing emergency call.</li>
 </ul>
@param {Object {PhoneAccountHandle}} phoneAccountHandle The {@link PhoneAccountHandle} the call will be added for.
@return {Boolean} {@code true} if telecom will permit an incoming call to be added, {@code false}
      otherwise.
*/
isIncomingCallPermitted : function(  ) {},

/**Determines whether Telecom would permit an outgoing call to be placed via the
 {@link #placeCall(Uri, Bundle)} API for the specified {@link android.telecom.PhoneAccountHandle}.
 <p>
 A {@link android.telecom.ConnectionService} may not place a call for the specified {@link android.telecom.PhoneAccountHandle}
 in the following situations:
 <ul>
     <li>{@link android.telecom.PhoneAccount} does not have property
     {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED} set (i.e. it is a managed
     {@link android.telecom.ConnectionService}), and the active, held or ringing call limit has
     been reached.</li>
     <li>{@link android.telecom.PhoneAccount} has property {@link android.telecom.PhoneAccount#CAPABILITY_SELF_MANAGED} set
     (i.e. it is a self-managed {@link android.telecom.ConnectionService} and there is an ongoing call in
     another {@link android.telecom.ConnectionService}.</li>
     <li>There is an ongoing emergency call.</li>
 </ul>
@param {Object {PhoneAccountHandle}} phoneAccountHandle The {@link PhoneAccountHandle} the call will be added for.
@return {Boolean} {@code true} if telecom will permit an outgoing call to be placed, {@code false}
      otherwise.
*/
isOutgoingCallPermitted : function(  ) {},

/**Called by an app to indicate that it wishes to accept the handover of an ongoing call to a
 {@link android.telecom.PhoneAccountHandle} it defines.
 <p>
 A call handover is the process where an ongoing call is transferred from one app (i.e.
 {@link android.telecom.ConnectionService} to another app.  The user could, for example, choose to continue a
 mobile network call in a video calling app.  The mobile network call via the Telephony stack
 is referred to as the source of the handover, and the video calling app is referred to as the
 destination.
 <p>
 When considering a handover scenario the <em>initiating</em> device is where a user initiated
 the handover process (e.g. by calling {@link android.telecom.Call#handoverTo(
 PhoneAccountHandle, int, Bundle)}, and the other device is considered the <em>receiving</em>
 device.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
 <p>
 This method is called from the <em>receiving</em> side of a handover to indicate a desire to
 accept the handover of an ongoing call to another {@link android.telecom.ConnectionService} identified by
 {@link android.telecom.PhoneAccountHandle} destAcct. For managed {@link android.telecom.ConnectionService}s, the specified
 {@link android.telecom.PhoneAccountHandle} must have been registered with {@link #registerPhoneAccount} and
 the user must have enabled the corresponding {@link android.telecom.PhoneAccount}.  This can be checked using
 {@link #getPhoneAccount}. Self-managed {@link android.telecom.ConnectionService}s must have
 {@link android.Manifest.permission#MANAGE_OWN_CALLS} to handover a call to it.
 <p>
 Once invoked, this method will cause the system to bind to the {@link android.telecom.ConnectionService}
 associated with the {@link android.telecom.PhoneAccountHandle} destAcct and call
 (See {@link android.telecom.ConnectionService#onCreateIncomingHandoverConnection}).
 <p>
 For a managed {@link android.telecom.ConnectionService}, a {@link SecurityException} will be thrown if either
 the {@link android.telecom.PhoneAccountHandle} destAcct does not correspond to a registered
 {@link android.telecom.PhoneAccount} or the associated {@link android.telecom.PhoneAccount} is not currently enabled by the
 user.
 <p>
 For a self-managed {@link android.telecom.ConnectionService}, a {@link SecurityException} will be thrown if
 the calling app does not have {@link android.Manifest.permission#MANAGE_OWN_CALLS}.
@param {Object {Uri}} srcAddr The {@link android.net.Uri} of the ongoing call to handover to the caller’s
                {@link ConnectionService}.
@param {Number} videoState Video state after the handover.
@param {Object {PhoneAccountHandle}} destAcct The {@link PhoneAccountHandle} registered to the calling package.
*/
acceptHandover : function(  ) {},

/**Determines if there is an ongoing emergency call.  This can be either an outgoing emergency
 call, as identified by the dialed number, or because a call was identified by the network
 as an emergency call.
@return {Boolean} {@code true} if there is an ongoing emergency call, {@code false} otherwise.
@hide 
*/
isInEmergencyCall : function(  ) {},

/**Handles {@link Intent#ACTION_CALL} intents trampolined from UserCallActivity.
@param {Object {Intent}} intent The {@link Intent#ACTION_CALL} intent to handle.
@hide 
*/
handleCallIntent : function(  ) {},


};