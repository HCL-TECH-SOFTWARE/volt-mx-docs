/**@class android.telecom.ParcelableCall
 implements android.os.Parcelable

@extends java.lang.Object

 Information about a call that is used between InCallService and Telecom.
 @hide
*/
var ParcelableCall = {

/**Responsible for creating ParcelableCall objects for deserialized Parcels. */
CREATOR : "null",
/**The unique ID of the call.
*/
getId : function(  ) {},

/**The current state of the call.
*/
getState : function(  ) {},

/**Reason for disconnection, as described by {@link android.telecomm.DisconnectCause}. Valid
 when call state is {@link android.telecom.CallState#DISCONNECTED}.
*/
getDisconnectCause : function(  ) {},

/**The set of possible text message responses when this call is incoming.
*/
getCannedSmsResponses : function(  ) {},

/**
*/
getCapabilities : function(  ) {},

/**Bitmask of properties of the call.
*/
getProperties : function(  ) {},

/**Bitmask of supported routes of the call
*/
getSupportedAudioRoutes : function(  ) {},

/**The time that the call switched to the active state.
*/
getConnectTimeMillis : function(  ) {},

/**The endpoint to which the call is connected.
*/
getHandle : function(  ) {},

/**The presentation requirements for the handle. See {@link android.telecom.TelecomManager} for valid values.
*/
getHandlePresentation : function(  ) {},

/**The endpoint to which the call is connected.
*/
getCallerDisplayName : function(  ) {},

/**The presentation requirements for the caller display name.
 See {@link android.telecom.TelecomManager} for valid values.
*/
getCallerDisplayNamePresentation : function(  ) {},

/**Gateway information for the call.
*/
getGatewayInfo : function(  ) {},

/**PhoneAccountHandle information for the call.
*/
getAccountHandle : function(  ) {},

/**Returns an object for remotely communicating through the video call provider's binder.
@param {String} callingPackageName the package name of the calling InCallService.
@param {Number} targetSdkVersion the target SDK version of the calling InCallService.
@return {Object {android.telecom.VideoCallImpl}} The video call.
*/
getVideoCallImpl : function(  ) {},

/**
*/
getIsRttCallChanged : function(  ) {},

/**RTT communication channel information
@return {Object {android.telecom.ParcelableRttCall}} The ParcelableRttCall
*/
getParcelableRttCall : function(  ) {},

/**The conference call to which this call is conferenced. Null if not conferenced.
*/
getParentCallId : function(  ) {},

/**The child call-IDs if this call is a conference call. Returns an empty list if this is not
 a conference call or if the conference call contains no children.
*/
getChildCallIds : function(  ) {},

/**
*/
getConferenceableCallIds : function(  ) {},

/**The status label and icon.
@return {Object {android.telecom.StatusHints}} Status hints.
*/
getStatusHints : function(  ) {},

/**The video state.
@return {Number} The video state of the call.
*/
getVideoState : function(  ) {},

/**Any extras associated with this call.
@return {Object {android.os.Bundle}} a bundle of extras
*/
getExtras : function(  ) {},

/**Extras passed in as part of the original call intent.
@return {Object {android.os.Bundle}} The intent extras.
*/
getIntentExtras : function(  ) {},

/**Indicates to the receiver of the {@link android.telecom.ParcelableCall} whether a change has occurred in the
 {@link android.telecom.InCallService.VideoCall} associated with this call.  Since
 {@link #getVideoCall}() creates a new {@link android.telecom.InCallService.VideoCallImpl}, it is useful to know whether
 the provider has changed (which can influence whether it is accessed).
@return {Boolean} {@code true} if the video call changed, {@code false} otherwise.
*/
isVideoCallProviderChanged : function(  ) {},

/**
@return {Number} The time the call was created, in milliseconds since the epoch.
*/
getCreationTimeMillis : function(  ) {},

/**Indicates whether the call is an incoming or outgoing call.
*/
getCallDirection : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**Writes ParcelableCall object into a Parcel.
*/
writeToParcel : function(  ) {},

/**
*/
toString : function(  ) {},


};