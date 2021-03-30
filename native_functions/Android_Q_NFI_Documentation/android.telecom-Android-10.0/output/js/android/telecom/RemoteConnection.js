/**@class android.telecom.RemoteConnection
@extends java.lang.Object

 A connection provided to a {@link android.telecom.ConnectionService} by another {@code ConnectionService}
 running in a different process.

 @see ConnectionService#createRemoteOutgoingConnection(PhoneAccountHandle, ConnectionRequest)
 @see ConnectionService#createRemoteIncomingConnection(PhoneAccountHandle, ConnectionRequest)
*/
var RemoteConnection = {

/**Adds a callback to this {@code RemoteConnection}.
@param {Object {RemoteConnection.Callback}} callback A {@code Callback}.
*/
registerCallback : function(  ) {},

/**Adds a callback to this {@code RemoteConnection}.
@param {Object {RemoteConnection.Callback}} callback A {@code Callback}.
@param {Object {Handler}} handler A {@code Handler} which command and status changes will be delivered to.
*/
registerCallback : function(  ) {},

/**Removes a callback from this {@code RemoteConnection}.
@param {Object {RemoteConnection.Callback}} callback A {@code Callback}.
*/
unregisterCallback : function(  ) {},

/**Obtains the state of this {@code RemoteConnection}.
@return {Number} A state value, chosen from the {@code STATE_*} constants.
*/
getState : function(  ) {},

/**Obtains the reason why this {@code RemoteConnection} may have been disconnected.
@return {Object {android.telecom.DisconnectCause}} For a {@link Connection#STATE_DISCONNECTED} {@code RemoteConnection}, the
         disconnect cause expressed as a code chosen from among those declared in
         {@link DisconnectCause}.
*/
getDisconnectCause : function(  ) {},

/**Obtains the capabilities of this {@code RemoteConnection}.
@return {Number} A bitmask of the capabilities of the {@code RemoteConnection}, as defined in
         the {@code CAPABILITY_*} constants in class {@link Connection}.
*/
getConnectionCapabilities : function(  ) {},

/**Obtains the properties of this {@code RemoteConnection}.
@return {Number} A bitmask of the properties of the {@code RemoteConnection}, as defined in the
         {@code PROPERTY_*} constants in class {@link Connection}.
*/
getConnectionProperties : function(  ) {},

/**Determines if the audio mode of this {@code RemoteConnection} is VOIP.
@return {Boolean} {@code true} if the {@code RemoteConnection}'s current audio mode is VOIP.
*/
isVoipAudioMode : function(  ) {},

/**Obtains status hints pertaining to this {@code RemoteConnection}.
@return {Object {android.telecom.StatusHints}} The current {@link StatusHints} of this {@code RemoteConnection},
         or {@code null} if none have been set.
*/
getStatusHints : function(  ) {},

/**Obtains the address of this {@code RemoteConnection}.
@return {Object {android.net.Uri}} The address (e.g., phone number) to which the {@code RemoteConnection}
         is currently connected.
*/
getAddress : function(  ) {},

/**Obtains the presentation requirements for the address of this {@code RemoteConnection}.
@return {Number} The presentation requirements for the address. See
         {@link TelecomManager} for valid values.
*/
getAddressPresentation : function(  ) {},

/**Obtains the display name for this {@code RemoteConnection}'s caller.
@return {Object {java.lang.CharSequence}} The display name for the caller.
*/
getCallerDisplayName : function(  ) {},

/**Obtains the presentation requirements for this {@code RemoteConnection}'s
 caller's display name.
@return {Number} The presentation requirements for the caller display name. See
         {@link TelecomManager} for valid values.
*/
getCallerDisplayNamePresentation : function(  ) {},

/**Obtains the video state of this {@code RemoteConnection}.
@return {Number} The video state of the {@code RemoteConnection}. See {@link VideoProfile}.
*/
getVideoState : function(  ) {},

/**Obtains the video provider of this {@code RemoteConnection}.
@return {Object {android.telecom.RemoteConnection.VideoProvider}} The video provider associated with this {@code RemoteConnection}.
*/
getVideoProvider : function(  ) {},

/**Obtain the extras associated with this {@code RemoteConnection}.
@return {Object {android.os.Bundle}} The extras for this connection.
*/
getExtras : function(  ) {},

/**Determines whether this {@code RemoteConnection} is requesting ringback.
@return {Boolean} Whether the {@code RemoteConnection} is requesting that the framework play a
         ringback tone on its behalf.
*/
isRingbackRequested : function(  ) {},

/**Instructs this {@code RemoteConnection} to abort.
*/
abort : function(  ) {},

/**Instructs this {@link android.telecom.Connection#STATE_RINGING} {@code RemoteConnection} to answer.
*/
answer : function(  ) {},

/**Instructs this {@link android.telecom.Connection#STATE_RINGING} {@code RemoteConnection} to answer.
@param {Number} videoState The video state in which to answer the call.
@hide 
*/
answer : function(  ) {},

/**Instructs this {@link android.telecom.Connection#STATE_RINGING} {@code RemoteConnection} to reject.
*/
reject : function(  ) {},

/**Instructs this {@code RemoteConnection} to go on hold.
*/
hold : function(  ) {},

/**Instructs this {@link android.telecom.Connection#STATE_HOLDING} call to release from hold.
*/
unhold : function(  ) {},

/**Instructs this {@code RemoteConnection} to disconnect.
*/
disconnect : function(  ) {},

/**Instructs this {@code RemoteConnection} to play a dual-tone multi-frequency signaling
 (DTMF) tone.

 Any other currently playing DTMF tone in the specified call is immediately stopped.
@param {String} digit A character representing the DTMF digit for which to play the tone. This
         value must be one of {@code '0'} through {@code '9'}, {@code '*'} or {@code '#'}.
*/
playDtmfTone : function(  ) {},

/**Instructs this {@code RemoteConnection} to stop any dual-tone multi-frequency signaling
 (DTMF) tone currently playing.

 DTMF tones are played by calling {@link #playDtmfTone}(char). If no DTMF tone is
 currently playing, this method will do nothing.
*/
stopDtmfTone : function(  ) {},

/**Instructs this {@code RemoteConnection} to continue playing a post-dial DTMF string.

 A post-dial DTMF string is a string of digits following the first instance of either
 {@link android.telecom.TelecomManager#DTMF_CHARACTER_WAIT} or {@link android.telecom.TelecomManager#DTMF_CHARACTER_PAUSE}.
 These digits are immediately sent as DTMF tones to the recipient as soon as the
 connection is made.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_PAUSE} symbol, this
 {@code RemoteConnection} will temporarily pause playing the tones for a pre-defined period
 of time.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_WAIT} symbol, this
 {@code RemoteConnection} will pause playing the tones and notify callbacks via
 {@link android.telecom.Callback#onPostDialWait(RemoteConnection, String)}. At this point, the in-call app
 should display to the user an indication of this state and an affordance to continue
 the postdial sequence. When the user decides to continue the postdial sequence, the in-call
 app should invoke the {@link #postDialContinue}(boolean) method.
@param {Boolean} proceed Whether or not to continue with the post-dial sequence.
*/
postDialContinue : function(  ) {},

/**Instructs this {@link android.telecom.RemoteConnection} to pull itself to the local device.
 <p>
 See {@link android.telecom.Call#pullExternalandroid.telecom.Call()} for more information.
*/
pullExternalCall : function(  ) {},

/**Set the audio state of this {@code RemoteConnection}.
@param {Object {AudioState}} state The audio state of this {@code RemoteConnection}.
@hide 
@deprecated Use {@link #setCallAudioState(CallAudioState)} instead.
*/
setAudioState : function(  ) {},

/**Set the audio state of this {@code RemoteConnection}.
@param {Object {CallAudioState}} state The audio state of this {@code RemoteConnection}.
*/
setCallAudioState : function(  ) {},

/**Notifies this {@link android.telecom.RemoteConnection} that the user has requested an RTT session.
@param {Object {Connection.RttTextStream}} rttTextStream The object that should be used to send text to or receive text from
                      the in-call app.
@hide 
*/
startRtt : function(  ) {},

/**Notifies this {@link android.telecom.RemoteConnection} that it should terminate any existing RTT
 session. No response to Telecom is needed for this method.
@hide 
*/
stopRtt : function(  ) {},

/**Notifies this {@link android.telecom.RemoteConnection} of a response to a previous remotely-initiated RTT
 upgrade request sent via {@link android.telecom.Connection#sendRemoteRttRequest}.
 Acceptance of the request is indicated by the supplied {@link android.telecom.Connection.RttTextStream} being non-null,
 and rejection is indicated by {@code rttTextStream} being {@code null}
@param {Object {Connection.RttTextStream}} rttTextStream The object that should be used to send text to or receive text from
                      the in-call app.
@param rttTextStream The object that should be used to send text to or receive text from
                      the in-call app.
*/
sendRttUpgradeResponse : function(  ) {},

/**Obtain the {@code RemoteConnection}s with which this {@code RemoteConnection} may be
 successfully asked to create a conference with.
@return {Object {java.util.List}} The {@code RemoteConnection}s with which this {@code RemoteConnection} may be
         merged into a {@link RemoteConference}.
*/
getConferenceableConnections : function(  ) {},

/**Obtain the {@code RemoteConference} that this {@code RemoteConnection} may be a part
 of, or {@code null} if there is no such {@code RemoteConference}.
@return {Object {android.telecom.RemoteConference}} A {@code RemoteConference} or {@code null};
*/
getConference : function(  ) {},

/**/**
 Create a RemoteConnection represents a failure, and which will be in
 {@link android.telecom.Connection#STATE_DISCONNECTED}. Attempting to use it for anything will almost
 certainly result in bad things happening. Do not do this.
@return {Object {android.telecom.RemoteConnection}} a failed {@link RemoteConnection}
@hide 
*/
failure : function(  ) {},


};