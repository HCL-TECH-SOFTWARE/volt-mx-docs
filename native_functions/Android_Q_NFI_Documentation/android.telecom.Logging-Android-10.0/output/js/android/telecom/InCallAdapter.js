/**@class android.telecom.InCallAdapter
@extends java.lang.Object

 Receives commands from {@link android.telecom.InCallService} implementations which should be executed by
 Telecom. When Telecom binds to a {@link android.telecom.InCallService}, an instance of this class is given to
 the in-call service through which it can manipulate live (active, dialing, ringing) calls. When
 the in-call service is notified of new calls, it can use the
 given call IDs to execute commands such as {@link #answerCall} for incoming calls or
 {@link #disconnectCall} for active calls the user would like to end. Some commands are only
 appropriate for calls in certain states; please consult each method for such limitations.
 <p>
 The adapter will stop functioning when there are no more calls.

 @hide
*/
var InCallAdapter = {

/**Instructs Telecom to answer the specified call.
@param {String} callId The identifier of the call to answer.
@param {Number} videoState The video state in which to answer the call.
*/
answerCall : function(  ) {},

/**Instructs Telecom to deflect the specified call.
@param {String} callId The identifier of the call to deflect.
@param {Object {Uri}} address The address to deflect.
*/
deflectCall : function(  ) {},

/**Instructs Telecom to reject the specified call.
@param {String} callId The identifier of the call to reject.
@param {Boolean} rejectWithMessage Whether to reject with a text message.
@param {String} textMessage An optional text message with which to respond.
*/
rejectCall : function(  ) {},

/**Instructs Telecom to disconnect the specified call.
@param {String} callId The identifier of the call to disconnect.
*/
disconnectCall : function(  ) {},

/**Instructs Telecom to put the specified call on hold.
@param {String} callId The identifier of the call to put on hold.
*/
holdCall : function(  ) {},

/**Instructs Telecom to release the specified call from hold.
@param {String} callId The identifier of the call to release from hold.
*/
unholdCall : function(  ) {},

/**Mute the microphone.
@param {Boolean} shouldMute True if the microphone should be muted.
*/
mute : function(  ) {},

/**Sets the audio route (speaker, bluetooth, etc...). See {@link android.telecom.CallAudioState}.
@param {Number} route The audio route to use.
*/
setAudioRoute : function(  ) {},

/**Request audio routing to a specific bluetooth device. Calling this method may result in
 the device routing audio to a different bluetooth device than the one specified. A list of
 available devices can be obtained via {@link android.telecom.CallAudioState#getSupportedBluetoothDevices()}
@param {String} bluetoothAddress The address of the bluetooth device to connect to, as returned by
 {@link BluetoothDevice#getAddress()}, or {@code null} if no device is preferred.
*/
requestBluetoothAudio : function(  ) {},

/**Instructs Telecom to play a dual-tone multi-frequency signaling (DTMF) tone in a call.

 Any other currently playing DTMF tone in the specified call is immediately stopped.
@param {String} callId The unique ID of the call in which the tone will be played.
@param {String} digit A character representing the DTMF digit for which to play the tone. This
         value must be one of {@code '0'} through {@code '9'}, {@code '*'} or {@code '#'}.
*/
playDtmfTone : function(  ) {},

/**Instructs Telecom to stop any dual-tone multi-frequency signaling (DTMF) tone currently
 playing.

 DTMF tones are played by calling {@link #playDtmfTone(String,char)}. If no DTMF tone is
 currently playing, this method will do nothing.
@param {String} callId The unique ID of the call in which any currently playing tone will be stopped.
*/
stopDtmfTone : function(  ) {},

/**Instructs Telecom to continue playing a post-dial DTMF string.

 A post-dial DTMF string is a string of digits entered after a phone number, when dialed,
 that are immediately sent as DTMF tones to the recipient as soon as the connection is made.
 While these tones are playing, Telecom will notify the {@link android.telecom.InCallService} that the call
 is in the post dial state.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_PAUSE} symbol, Telecom
 will temporarily pause playing the tones for a pre-defined period of time.

 If the DTMF string contains a {@link android.telecom.TelecomManager#DTMF_CHARACTER_WAIT} symbol, Telecom
 will pause playing the tones and notify the {@link android.telecom.InCallService} that the call is in the
 post dial wait state. When the user decides to continue the postdial sequence, the
 {@link android.telecom.InCallService} should invoke the {@link #postDialContinue(String,boolean)} method.
@param {String} callId The unique ID of the call for which postdial string playing should continue.
@param {Boolean} proceed Whether or not to continue with the post-dial sequence.
*/
postDialContinue : function(  ) {},

/**Instructs Telecom to add a PhoneAccountHandle to the specified call.
@param {String} callId The identifier of the call.
@param {Object {PhoneAccountHandle}} accountHandle The PhoneAccountHandle through which to place the call.
@param {Boolean} setDefault {@code True} if this account should be set as the default for calls.
*/
phoneAccountSelected : function(  ) {},

/**Instructs Telecom to conference the specified call.
@param {String} callId The unique ID of the call.
@hide 
*/
conference : function(  ) {},

/**Instructs Telecom to split the specified call from any conference call with which it may be
 connected.
@param {String} callId The unique ID of the call.
@hide 
*/
splitFromConference : function(  ) {},

/**Instructs Telecom to merge child calls of the specified conference call.
*/
mergeConference : function(  ) {},

/**Instructs Telecom to swap the child calls of the specified conference call.
*/
swapConference : function(  ) {},

/**Instructs Telecom to pull an external call to the local device.
@param {String} callId The callId to pull.
*/
pullExternalCall : function(  ) {},

/**Intructs Telecom to send a call event.
@param {String} callId The callId to send the event for.
@param {String} event The event.
@param {Number} targetSdkVer Target sdk version of the app calling this api
@param {Object {Bundle}} extras Extras associated with the event.
*/
sendCallEvent : function(  ) {},

/**Intructs Telecom to add extras to a call.
@param {String} callId The callId to add the extras to.
@param {Object {Bundle}} extras The extras.
*/
putExtras : function(  ) {},

/**Intructs Telecom to add an extra to a call.
@param {String} callId The callId to add the extras to.
@param {String} key The extra key.
@param {Boolean} value The extra value.
*/
putExtra : function(  ) {},

/**Intructs Telecom to add an extra to a call.
@param {String} callId The callId to add the extras to.
@param {String} key The extra key.
@param {Number} value The extra value.
*/
putExtra : function(  ) {},

/**Intructs Telecom to add an extra to a call.
@param {String} callId The callId to add the extras to.
@param {String} key The extra key.
@param {String} value The extra value.
*/
putExtra : function(  ) {},

/**Intructs Telecom to remove extras from a call.
@param {String} callId The callId to remove the extras from.
@param {Object {java.util.List}} keys The extra keys to remove.
*/
removeExtras : function(  ) {},

/**Instructs Telecom to turn the proximity sensor on.
*/
turnProximitySensorOn : function(  ) {},

/**Instructs Telecom to turn the proximity sensor off.
@param {Boolean} screenOnImmediately If true, the screen will be turned on immediately if it was
 previously off. Otherwise, the screen will only be turned on after the proximity sensor
 is no longer triggered.
*/
turnProximitySensorOff : function(  ) {},

/**Sends an RTT upgrade request to the remote end of the connection.
*/
sendRttRequest : function(  ) {},

/**Responds to an RTT upgrade request initiated from the remote end.
@param {String} id the ID of the request as specified by Telecom
@param {Number} accept Whether the request should be accepted.
*/
respondToRttRequest : function(  ) {},

/**Instructs Telecom to shut down the RTT communication channel.
*/
stopRtt : function(  ) {},

/**Sets the RTT audio mode.
@param {String} mode the desired RTT audio mode
*/
setRttMode : function(  ) {},

/**Initiates a handover of this {@link android.telecom.Call} to the {@link android.telecom.ConnectionService} identified
 by destAcct.
@param {String} callId The callId of the Call which calls this function.
@param {Object {PhoneAccountHandle}} destAcct ConnectionService to which the call should be handed over.
@param {Number} videoState The video state desired after the handover.
@param {Object {Bundle}} extras Extra information to be passed to ConnectionService
*/
handoverTo : function(  ) {},


};