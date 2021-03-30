/**@class android.telecom.RemoteConference
@extends java.lang.Object

 A conference provided to a {@link android.telecom.ConnectionService} by another {@code ConnectionService} through
 {@link android.telecom.ConnectionService#conferenceRemoteConnections}. Once created, a {@code RemoteConference}
 can be used to control the conference call or monitor changes through
 {@link android.telecom.RemoteConnection.Callback}.

 @see ConnectionService#onRemoteConferenceAdded
*/
var RemoteConference = {

/**Returns the list of {@link android.telecom.RemoteConnection}s contained in this conference.
@return {Object {java.util.List}} A list of child connections.
*/
getConnections : function(  ) {},

/**Gets the state of the conference call. See {@link android.telecom.Connection} for valid values.
@return {Number} A constant representing the state the conference call is currently in.
*/
getState : function(  ) {},

/**Returns the capabilities of the conference. See {@code CAPABILITY_*} constants in class
 {@link android.telecom.Connection} for valid values.
@return {Number} A bitmask of the capabilities of the conference call.
*/
getConnectionCapabilities : function(  ) {},

/**Returns the properties of the conference. See {@code PROPERTY_*} constants in class
 {@link android.telecom.Connection} for valid values.
@return {Number} A bitmask of the properties of the conference call.
*/
getConnectionProperties : function(  ) {},

/**Obtain the extras associated with this {@code RemoteConnection}.
@return {Object {android.os.Bundle}} The extras for this connection.
*/
getExtras : function(  ) {},

/**Disconnects the conference call as well as the child {@link android.telecom.RemoteConnection}s.
*/
disconnect : function(  ) {},

/**Removes the specified {@link android.telecom.RemoteConnection} from the conference. This causes the
 {@link android.telecom.RemoteConnection} to become a standalone connection. This is a no-op if the
 {@link android.telecom.RemoteConnection} does not belong to this conference.
@param {Object {RemoteConnection}} connection The remote-connection to remove.
*/
separate : function(  ) {},

/**Merges all {@link android.telecom.RemoteConnection}s of this conference into a single call. This should be
 invoked only if the conference contains the capability
 {@link android.telecom.Connection#CAPABILITY_MERGE_CONFERENCE}, otherwise it is a no-op. The presence of said
 capability indicates that the connections of this conference, despite being part of the
 same conference object, are yet to have their audio streams merged; this is a common pattern
 for CDMA conference calls, but the capability is not used for GSM and SIP conference calls.
 Invoking this method will cause the unmerged child connections to merge their audio
 streams.
*/
merge : function(  ) {},

/**Swaps the active audio stream between the conference's child {@link android.telecom.RemoteConnection}s.
 This should be invoked only if the conference contains the capability
 {@link android.telecom.Connection#CAPABILITY_SWAP_CONFERENCE}, otherwise it is a no-op. This is only used by
 {@link android.telecom.ConnectionService}s that create conferences for connections that do not yet have
 their audio streams merged; this is a common pattern for CDMA conference calls, but the
 capability is not used for GSM and SIP conference calls. Invoking this method will change the
 active audio stream to a different child connection.
*/
swap : function(  ) {},

/**Puts the conference on hold.
*/
hold : function(  ) {},

/**Unholds the conference call.
*/
unhold : function(  ) {},

/**Returns the {@link android.telecom.DisconnectCause} for the conference if it is in the state
 {@link android.telecom.Connection#STATE_DISCONNECTED}. If the conference is not disconnected, this will
 return null.
@return {Object {android.telecom.DisconnectCause}} The disconnect cause.
*/
getDisconnectCause : function(  ) {},

/**Requests that the conference start playing the specified DTMF tone.
@param {String} digit The digit for which to play a DTMF tone.
*/
playDtmfTone : function(  ) {},

/**Stops the most recent request to play a DTMF tone.
@see #playDtmfTone
*/
stopDtmfTone : function(  ) {},

/**Request to change the conference's audio routing to the specified state. The specified state
 can include audio routing (Bluetooth, Speaker, etc) and muting state.
@see android.telecom.AudioState
@deprecated Use {@link #setCallAudioState(CallAudioState)} instead.
@hide 
*/
setAudioState : function(  ) {},

/**Request to change the conference's audio routing to the specified state. The specified state
 can include audio routing (Bluetooth, Speaker, etc) and muting state.
*/
setCallAudioState : function(  ) {},

/**Returns a list of independent connections that can me merged with this conference.
@return {Object {java.util.List}} A list of conferenceable connections.
*/
getConferenceableConnections : function(  ) {},

/**Register a callback through which to receive state updates for this conference.
@param {Object {RemoteConference.Callback}} callback The callback to notify of state changes.
*/
registerCallback : function(  ) {},

/**Registers a callback through which to receive state updates for this conference.
 Callbacks will be notified using the specified handler, if provided.
@param {Object {RemoteConference.Callback}} callback The callback to notify of state changes.
@param {Object {Handler}} handler The handler on which to execute the callbacks.
*/
registerCallback : function(  ) {},

/**Unregisters a previously registered callback.
@param {Object {RemoteConference.Callback}} callback The callback to unregister.
@param callback The callback to unregister.
*/
unregisterCallback : function(  ) {},


};