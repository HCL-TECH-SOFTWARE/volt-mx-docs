/**@class android.telecom.Conference
@extends android.telecom.Conferenceable

 Represents a conference call which can contain any number of {@link android.telecom.Connection} objects.
*/
var Conference = {

/** Used to indicate that the conference connection time is not specified.  If not specified,
 Telecom will set the connect time.
*/
CONNECT_TIME_NOT_SPECIFIED : "0",
/**Returns the telecom internal call ID associated with this conference.
@return {String} The telecom call ID.
@hide 
*/
getTelecomCallId : function(  ) {},

/**Sets the telecom internal call ID associated with this conference.
@param {String} telecomCallId The telecom call ID.
@hide 
*/
setTelecomCallId : function(  ) {},

/**Returns the {@link android.telecom.PhoneAccountHandle} the conference call is being placed through.
@return {Object {android.telecom.PhoneAccountHandle}} A {@code PhoneAccountHandle} object representing the PhoneAccount of the conference.
*/
getPhoneAccountHandle : function(  ) {},

/**Returns the list of connections currently associated with the conference call.
@return {Object {java.util.List}} A list of {@code Connection} objects which represent the children of the conference.
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

/**Removes the specified capability from the set of capabilities of this {@code Conference}.
@param {Number} capability The capability to remove from the set.
@hide 
*/
removeCapability : function(  ) {},

/**Adds the specified capability to the set of capabilities of this {@code Conference}.
@param {Number} capability The capability to add to the set.
@hide 
*/
addCapability : function(  ) {},

/**
@return {Object {android.telecom.AudioState}} The audio state of the conference, describing how its audio is currently
         being routed by the system. This is {@code null} if this Conference
         does not directly know about its audio state.
@deprecated Use {@link #getCallAudioState()} instead.
@hide 
*/
getAudioState : function(  ) {},

/**
@return {Object {android.telecom.CallAudioState}} The audio state of the conference, describing how its audio is currently
         being routed by the system. This is {@code null} if this Conference
         does not directly know about its audio state.
*/
getCallAudioState : function(  ) {},

/**Returns VideoProvider of the primary call. This can be null.
*/
getVideoProvider : function(  ) {},

/**Returns video state of the primary call.
*/
getVideoState : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when the Conference and all it's {@link android.telecom.Connection}s should
 be disconnected.
*/
onDisconnect : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when the specified {@link android.telecom.Connection} should be separated
 from the conference call.
@param {Object {Connection}} connection The connection to separate.
*/
onSeparate : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when the specified {@link android.telecom.Connection} should merged with the
 conference call.
@param {Object {Connection}} connection The {@code Connection} to merge.
*/
onMerge : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when it should be put on hold.
*/
onHold : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when it should be moved from a held to active state.
*/
onUnhold : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when the child calls should be merged.  Only invoked if the
 conference contains the capability {@link android.telecom.Connection#CAPABILITY_MERGE_CONFERENCE}.
*/
onMerge : function(  ) {},

/**Notifies the {@link android.telecom.Conference} when the child calls should be swapped. Only invoked if the
 conference contains the capability {@link android.telecom.Connection#CAPABILITY_SWAP_CONFERENCE}.
*/
onSwap : function(  ) {},

/**Notifies the {@link android.telecom.Conference} of a request to play a DTMF tone.
@param {String} c A DTMF character.
*/
onPlayDtmfTone : function(  ) {},

/**Notifies the {@link android.telecom.Conference} of a request to stop any currently playing DTMF tones.
*/
onStopDtmfTone : function(  ) {},

/**Notifies the {@link android.telecom.Conference} that the {@link #getAudioState}() property has a new value.
@param {Object {AudioState}} state The new call audio state.
@deprecated Use {@link #onCallAudioStateChanged(CallAudioState)} instead.
@hide 
*/
onAudioStateChanged : function(  ) {},

/**Notifies the {@link android.telecom.Conference} that the {@link #getCallAudioState}() property has a new
 value.
@param {Object {CallAudioState}} state The new call audio state.
*/
onCallAudioStateChanged : function(  ) {},

/**Notifies the {@link android.telecom.Conference} that a {@link android.telecom.Connection} has been added to it.
@param {Object {Connection}} connection The newly added connection.
*/
onConnectionAdded : function(  ) {},

/**Sets state to be on hold.
*/
setOnHold : function(  ) {},

/**Sets state to be dialing.
*/
setDialing : function(  ) {},

/**Sets state to be active.
*/
setActive : function(  ) {},

/**Sets state to disconnected.
@param {Object {DisconnectCause}} disconnectCause The reason for the disconnection, as described by
     {@link android.telecom.DisconnectCause}.
*/
setDisconnected : function(  ) {},

/**
@return {Object {android.telecom.DisconnectCause}} The {@link DisconnectCause} for this connection.
*/
getDisconnectCause : function(  ) {},

/**Sets the capabilities of a conference. See {@code CAPABILITY_*} constants of class
 {@link android.telecom.Connection} for valid values.
@param {Number} connectionCapabilities A bitmask of the {@code Capabilities} of the conference call.
*/
setConnectionCapabilities : function(  ) {},

/**Sets the properties of a conference. See {@code PROPERTY_*} constants of class
 {@link android.telecom.Connection} for valid values.
@param {Number} connectionProperties A bitmask of the {@code Properties} of the conference call.
*/
setConnectionProperties : function(  ) {},

/**Adds the specified connection as a child of this conference.
@param {Object {Connection}} connection The connection to add.
@return {Boolean} True if the connection was successfully added.
*/
addConnection : function(  ) {},

/**Removes the specified connection as a child of this conference.
@param {Object {Connection}} connection The connection to remove.
*/
removeConnection : function(  ) {},

/**Sets the connections with which this connection can be conferenced.
@param {Object {java.util.List}} conferenceableConnections The set of connections this connection can conference with.
*/
setConferenceableConnections : function(  ) {},

/**Set the video state for the conference.
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED}.
@param {Object {Connection}} videoState The new video state.
*/
setVideoState : function(  ) {},

/**Sets the video connection provider.
@param {Object {Connection}} videoProvider The video provider.
*/
setVideoProvider : function(  ) {},

/**Returns the connections with which this connection can be conferenced.
*/
getConferenceableConnections : function(  ) {},

/**Tears down the conference object and any of its current connections.
*/
destroy : function(  ) {},

/**Add a listener to be notified of a state change.
@param {Object {Conference.Listener}} listener The new listener.
@return {Object {android.telecom.Conference}} This conference.
@hide 
*/
addListener : function(  ) {},

/**Removes the specified listener.
@param {Object {Conference.Listener}} listener The listener to remove.
@return {Object {android.telecom.Conference}} This conference.
@hide 
*/
removeListener : function(  ) {},

/**Retrieves the primary connection associated with the conference.  The primary connection is
 the connection from which the conference will retrieve its current state.
@return {Object {android.telecom.Connection}} The primary connection.
@hide 
*/
getPrimaryConnection : function(  ) {},

/**Updates RIL voice radio technology used for current conference after its creation.
@hide 
*/
updateCallRadioTechAfterCreation : function(  ) {},

/**
@hide 
@deprecated Use {@link #setConnectionTime}.
*/
setConnectTimeMillis : function(  ) {},

/**Sets the connection start time of the {@code Conference}.  This is used in the call log to
 indicate the date and time when the conference took place.
 <p>
 Should be specified in wall-clock time returned by {@link System#currentTimeMillis()}.
 <p>
 When setting the connection time, you should always set the connection elapsed time via
 {@link #setConnectionStartElapsedRealTime}(long) to ensure the duration is reflected.
@param {Number} connectionTimeMillis The connection time, in milliseconds, as returned by
                             {@link System#currentTimeMillis()}.
*/
setConnectionTime : function(  ) {},

/**Sets the start time of the {@link android.telecom.Conference} which is the basis for the determining the
 duration of the {@link android.telecom.Conference}.
 <p>
 You should use a value returned by {@link SystemClock#elapsedRealtime()} to ensure that time
 zone changes do not impact the conference duration.
 <p>
 When setting this, you should also set the connection time via
 {@link #setConnectionTime}(long).
@param {Number} connectionStartElapsedRealTime The connection time, as measured by
 {@link SystemClock#elapsedRealtime()}.
*/
setConnectionStartElapsedRealTime : function(  ) {},

/**
@hide 
@deprecated Use {@link #getConnectionTime}.
*/
getConnectTimeMillis : function(  ) {},

/**Retrieves the connection start time of the {@code Conference}, if specified.  A value of
 {@link #CONNECT_TIME_NOT_SPECIFIED} indicates that Telecom should determine the start time
 of the conference.
@return {Number} The time at which the {@code Conference} was connected.
*/
getConnectionTime : function(  ) {},

/**Retrieves the connection start time of the {@link android.telecom.Conference}, if specified.  A value of
 {@link #CONNECT_TIME_NOT_SPECIFIED} indicates that Telecom should determine the start time
 of the conference.

 This is based on the value of {@link SystemClock#elapsedRealtime()} to ensure that it is not
 impacted by wall clock changes (user initiated, network initiated, time zone change, etc).
@return {Number} The elapsed time at which the {@link Conference} was connected.
@hide 
*/
getConnectionStartElapsedRealTime : function(  ) {},

/**Sets RIL voice radio technology used for current conference.
@param {Number} vrat the RIL voice radio technology used for current conference,
             see {@code RIL_RADIO_TECHNOLOGY_*} in {@link android.telephony.ServiceState}.
@hide 
*/
setCallRadioTech : function(  ) {},

/**Returns RIL voice radio technology used for current conference.
@return {Number} the RIL voice radio technology used for current conference,
         see {@code RIL_RADIO_TECHNOLOGY_*} in {@link android.telephony.ServiceState}.
@hide 
*/
getCallRadioTech : function(  ) {},

/**
*/
toString : function(  ) {},

/**Sets the label and icon status to display in the InCall UI.
@param {Object {StatusHints}} statusHints The status label and icon to set.
*/
setStatusHints : function(  ) {},

/**
@return {Object {android.telecom.StatusHints}} The status hints for this conference.
*/
getStatusHints : function(  ) {},

/**Replaces all the extras associated with this {@code Conference}.
 <p>
 New or existing keys are replaced in the {@code Conference} extras.  Keys which are no longer
 in the new extras, but were present the last time {@code setExtras} was called are removed.
 <p>
 Alternatively you may use the {@link #putExtras}(Bundle), and
 {@link #removeExtras(String...)} methods to modify the extras.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these extras.
 Keys should be fully qualified (e.g., com.example.extras.MY_EXTRA) to avoid conflicts.
@param {Object {Bundle}} extras The extras associated with this {@code Conference}.
*/
setExtras : function(  ) {},

/**Adds some extras to this {@link android.telecom.Conference}.  Existing keys are replaced and new ones are
 added.
 <p>
 No assumptions should be made as to how an In-Call UI or service will handle these extras.
 Keys should be fully qualified (e.g., com.example.MY_EXTRA) to avoid conflicts.
@param {Object {Bundle}} extras The extras to add.
*/
putExtras : function(  ) {},

/**Adds a boolean extra to this {@link android.telecom.Conference}.
@param {String} key The extra key.
@param {Boolean} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds an integer extra to this {@link android.telecom.Conference}.
@param {String} key The extra key.
@param {Number} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Adds a string extra to this {@link android.telecom.Conference}.
@param {String} key The extra key.
@param {String} value The value.
@hide 
*/
putExtra : function(  ) {},

/**Removes extras from this {@link android.telecom.Conference}.
@param {Object {java.util.List}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Removes extras from this {@link android.telecom.Conference}.
@param {Object {java.lang.String[]}} keys The keys of the extras to remove.
*/
removeExtras : function(  ) {},

/**Returns the extras associated with this conference.
 <p>
 Extras should be updated using {@link #putExtras}(Bundle) and {@link #removeExtras}(List).
 <p>
 Telecom or an {@link android.telecom.InCallService} can also update the extras via
 {@link android.telecom.Call#putExtras(Bundle)}, and
 {@link android.telecom.Call#removeExtras(List)}.
 <p>
 The conference is notified of changes to the extras made by Telecom or an
 {@link android.telecom.InCallService} by {@link #onExtrasChanged}(Bundle).
@return {Object {android.os.Bundle}} The extras associated with this connection.
*/
getExtras : function(  ) {},

/**Notifies this {@link android.telecom.Conference} of a change to the extras made outside the
 {@link android.telecom.ConnectionService}.
 <p>
 These extras changes can originate from Telecom itself, or from an {@link android.telecom.InCallService} via
 {@link android.telecom.Call#putExtras(Bundle)}, and
 {@link android.telecom.Call#removeExtras(List)}.
@param {Object {Bundle}} extras The new extras bundle.
*/
onExtrasChanged : function(  ) {},

/**Set whether Telecom should treat this {@link android.telecom.Conference} as a conference call or if it
 should treat it as a single-party call.
 This method is used as part of a workaround regarding IMS conference calls and user
 expectation.  In IMS, once a conference is formed, the UE is connected to an IMS conference
 server.  If all participants of the conference drop out of the conference except for one, the
 UE is still connected to the IMS conference server.  At this point, the user logically
 assumes they're no longer in a conference, yet the underlying network actually is.
 To help provide a better user experiece, IMS conference calls can pretend to actually be a
 single-party call when the participant count drops to 1.  Although the dialer/phone app
 could perform this trickery, it makes sense to do this in Telephony since a fix there will
 ensure that bluetooth head units, auto and wearable apps all behave consistently.
@param {Boolean} isConference {@code true} if this {@link Conference} should be treated like a
      conference call, {@code false} if it should be treated like a single-party call.
@hide 
*/
setConferenceState : function(  ) {},

/**Sets the address of this {@link android.telecom.Conference}.  Used when {@link #setConferenceState}(boolean)
 is called to mark a conference temporarily as NOT a conference.
@param {Object {Uri}} address The new address.
@param {Number} presentation The presentation requirements for the address.
        See {@link TelecomManager} for valid values.
@hide 
*/
setAddress : function(  ) {},

/**Returns the "address" associated with the conference.  This is applicable in two cases:
 <ol>
     <li>When {@link #setConferenceState}(boolean) is used to mark a conference as
     temporarily "not a conference"; we need to present the correct address in the in-call
     UI.</li>
     <li>When the conference is not hosted on the current device, we need to know the address
     information for the purpose of showing the original address to the user, as well as for
     logging to the call log.</li>
 </ol>
@return {Object {android.net.Uri}} The address of the conference, or {@code null} if not applicable.
@hide 
*/
getAddress : function(  ) {},

/**Returns the address presentation associated with the conference.
 <p>
 This is applicable in two cases:
 <ol>
     <li>When {@link #setConferenceState}(boolean) is used to mark a conference as
     temporarily "not a conference"; we need to present the correct address in the in-call
     UI.</li>
     <li>When the conference is not hosted on the current device, we need to know the address
     information for the purpose of showing the original address to the user, as well as for
     logging to the call log.</li>
 </ol>
@return {Number} The address of the conference, or {@code null} if not applicable.
@hide 
*/
getAddressPresentation : function(  ) {},

/**
@return {String} The caller display name (CNAP).
@hide 
*/
getCallerDisplayName : function(  ) {},

/**
@return {Number} The presentation requirements for the handle.
         See {@link TelecomManager} for valid values.
@hide 
*/
getCallerDisplayNamePresentation : function(  ) {},

/**Sets the caller display name (CNAP) of this {@link android.telecom.Conference}.  Used when
 {@link #setConferenceState}(boolean) is called to mark a conference temporarily as NOT a
 conference.
@param {String} callerDisplayName The new display name.
@param {Number} presentation The presentation requirements for the handle.
        See {@link TelecomManager} for valid values.
@hide 
*/
setCallerDisplayName : function(  ) {},

/**See {@link android.telecom.Connection#sendandroid.telecom.ConnectionEvent(String, Bundle)}
@hide 
*/
sendConnectionEvent : function(  ) {},


};