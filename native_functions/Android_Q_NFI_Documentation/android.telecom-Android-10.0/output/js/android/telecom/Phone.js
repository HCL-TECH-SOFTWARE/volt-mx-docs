/**@class android.telecom.Phone
@extends java.lang.Object

 A unified virtual device providing a means of voice (and other) communication on a device.

 @hide
 @deprecated Use {@link android.telecom.InCallService} directly instead of using this class.
*/
var Phone = {

/**Adds a listener to this {@code Phone}.
@param {Object {Phone.Listener}} listener A {@code Listener} object.
*/
addListener : function(  ) {},

/**Removes a listener from this {@code Phone}.
@param {Object {Phone.Listener}} listener A {@code Listener} object.
*/
removeListener : function(  ) {},

/**Obtains the current list of {@code Call}s to be displayed by this in-call experience.
@return {Object {java.util.List}} A list of the relevant {@code Call}s.
*/
getCalls : function(  ) {},

/**Returns if the {@code Phone} can support additional calls.
@return {Boolean} Whether the phone supports adding more calls.
*/
canAddCall : function(  ) {},

/**Sets the microphone mute state. When this request is honored, there will be change to
 the {@link #getAudioState}().
@param {Boolean} state {@code true} if the microphone should be muted; {@code false} otherwise.
*/
setMuted : function(  ) {},

/**Sets the audio route (speaker, bluetooth, etc...).  When this request is honored, there will
 be change to the {@link #getAudioState}().
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

/**Turns the proximity sensor on. When this request is made, the proximity sensor will
 become active, and the touch screen and display will be turned off when the user's face
 is detected to be in close proximity to the screen. This operation is a no-op on devices
 that do not have a proximity sensor.
 <p>
 This API does not actually turn on the proximity sensor; apps should do this on their own if
 required.
@hide 
*/
setProximitySensorOn : function(  ) {},

/**Turns the proximity sensor off. When this request is made, the proximity sensor will
 become inactive, and no longer affect the touch screen and display. This operation is a
 no-op on devices that do not have a proximity sensor.
@param {Boolean} screenOnImmediately If true, the screen will be turned on immediately if it was
 previously off. Otherwise, the screen will only be turned on after the proximity sensor
 is no longer triggered.
 <p>
 This API does not actually turn of the proximity sensor; apps should do this on their own if
 required.
@hide 
*/
setProximitySensorOff : function(  ) {},

/**Obtains the current phone call audio state of the {@code Phone}.
@return {Object {android.telecom.AudioState}} An object encapsulating the audio state.
@deprecated Use {@link #getCallAudioState()} instead.
*/
getAudioState : function(  ) {},

/**Obtains the current phone call audio state of the {@code Phone}.
@return {Object {android.telecom.CallAudioState}} An object encapsulating the audio state.
*/
getCallAudioState : function(  ) {},


};