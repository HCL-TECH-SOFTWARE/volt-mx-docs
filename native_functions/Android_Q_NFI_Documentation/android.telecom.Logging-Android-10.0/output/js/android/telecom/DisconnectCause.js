/**@class android.telecom.DisconnectCause
 implements android.os.Parcelable

@extends java.lang.Object

 Describes the cause of a disconnected call. This always includes a code describing the generic
 cause of the disconnect. Optionally, it may include a label and/or description to display to the
 user. It is the responsibility of the {@link android.telecom.ConnectionService} to provide localized versions of
 the label and description. It also may contain a reason for the disconnect, which is intended for
 logging and not for display to the user.
*/
var DisconnectCause = {

/**Disconnected because of an unknown or unspecified reason. */
UNKNOWN : "null",
/**Disconnected because there was an error, such as a problem with the network. */
ERROR : "null",
/**Disconnected because of a local user-initiated action, such as hanging up. */
LOCAL : "null",
/** Disconnected because of a remote user-initiated action, such as the other party hanging up
 up.
*/
REMOTE : "null",
/**Disconnected because it has been canceled. */
CANCELED : "null",
/**Disconnected because there was no response to an incoming call. */
MISSED : "null",
/**Disconnected because the user rejected an incoming call. */
REJECTED : "null",
/**Disconnected because the other party was busy. */
BUSY : "null",
/** Disconnected because of a restriction on placing the call, such as dialing in airplane
 mode.
*/
RESTRICTED : "null",
/**Disconnected for reason not described by other disconnect codes. */
OTHER : "null",
/** Disconnected because the connection manager did not support the call. The call will be tried
 again without a connection manager. See {@link android.telecom.PhoneAccount#CAPABILITY_CONNECTION_MANAGER}.
*/
CONNECTION_MANAGER_NOT_SUPPORTED : "null",
/** Disconnected because the user did not locally answer the incoming call, but it was answered
 on another device where the call was ringing.
*/
ANSWERED_ELSEWHERE : "null",
/** Disconnected because the call was pulled from the current device to another device.
*/
CALL_PULLED : "null",
/** Reason code (returned via {@link #getReason}()) which indicates that a call could not be
 completed because the cellular radio is off or out of service, the device is connected to
 a wifi network, but the user has not enabled wifi calling.
 @hide
*/
REASON_WIFI_ON_BUT_WFC_OFF : "REASON_WIFI_ON_BUT_WFC_OFF",
/** Reason code (returned via {@link #getReason}()), which indicates that the video telephony
 call was disconnected because IMS access is blocked.
 @hide
*/
REASON_IMS_ACCESS_BLOCKED : "REASON_IMS_ACCESS_BLOCKED",
/** Reason code, which indicates that the conference call is simulating single party conference.
 @hide
*/
REASON_EMULATING_SINGLE_CALL : "EMULATING_SINGLE_CALL",
/***/
CREATOR : "null",
/**Returns the code for the reason for this disconnect.
@return {Number} The disconnect code.
*/
getCode : function(  ) {},

/**Returns a short label which explains the reason for the disconnect cause and is for display
 in the user interface. If not null, it is expected that the In-Call UI should display this
 text where it would normally display the call state ("Dialing", "Disconnected") and is
 therefore expected to be relatively small. The {@link android.telecom.ConnectionService } is responsible for
 providing and localizing this label. If there is no string provided, returns null.
@return {Object {java.lang.CharSequence}} The disconnect label.
*/
getLabel : function(  ) {},

/**Returns a description which explains the reason for the disconnect cause and is for display
 in the user interface. This optional text is generally a longer and more descriptive version
 of {@link #getLabel}, however it can exist even if {@link #getLabel} is empty. The In-Call UI
 should display this relatively prominently; the traditional implementation displays this as
 an alert dialog. The {@link android.telecom.ConnectionService} is responsible for providing and localizing
 this message. If there is no string provided, returns null.
@return {Object {java.lang.CharSequence}} The disconnect description.
*/
getDescription : function(  ) {},

/**Returns an explanation of the reason for the disconnect. This is not intended for display to
 the user and is used mainly for logging.
@return {String} The disconnect reason.
*/
getReason : function(  ) {},

/**Returns the tone to play when disconnected.
@return {Number} the tone as defined in {@link ToneGenerator} to play when disconnected.
*/
getTone : function(  ) {},

/**
*/
writeToParcel : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
hashCode : function(  ) {},

/**
*/
equals : function(  ) {},

/**
*/
toString : function(  ) {},


};