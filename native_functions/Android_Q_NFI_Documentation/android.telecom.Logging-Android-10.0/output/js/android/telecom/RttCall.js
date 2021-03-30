/**@class android.telecom.Call.RttCall
@extends java.lang.Object

 A class that holds the state that describes the state of the RTT channel to the remote
 party, if it is active.
*/
var RttCall = {

/** For metrics use. Default value in the proto.
 @hide
*/
RTT_MODE_INVALID : "0",
/** Indicates that there should be a bidirectional audio stream between the two parties
 on the call.
*/
RTT_MODE_FULL : "1",
/** Indicates that the local user should be able to hear the audio stream from the remote
 user, but not vice versa. Equivalent to muting the microphone.
*/
RTT_MODE_HCO : "2",
/** Indicates that the remote user should be able to hear the audio stream from the local
 user, but not vice versa. Equivalent to setting the volume to zero.
*/
RTT_MODE_VCO : "3",
/**Returns the current RTT audio mode.
@return {Number} Current RTT audio mode. One of {@link #RTT_MODE_FULL}, {@link #RTT_MODE_VCO}, or
 {@link #RTT_MODE_HCO}.
*/
getRttAudioMode : function(  ) {},

/**Sets the RTT audio mode. The requested mode change will be communicated through
 {@link android.telecom.Callback#onRttModeChanged(android.telecom.Call, int)}.
@param {Number} mode The desired RTT audio mode, one of {@link #RTT_MODE_FULL},
 {@link #RTT_MODE_VCO}, or {@link #RTT_MODE_HCO}.
*/
setRttMode : function(  ) {},

/**Writes the string {@param input} into the outgoing text stream for this RTT call. Since
 RTT transmits text in real-time, this method should be called once for each character
 the user enters into the device.

 This method is not thread-safe -- calling it from multiple threads simultaneously may
 lead to interleaved text.
@param {String} input The message to send to the remote user.
*/
write : function(  ) {},

/**Reads a string from the remote user, blocking if there is no data available. Returns
 {@code null} if the RTT conversation has been terminated and there is no further data
 to read.

 This method is not thread-safe -- calling it from multiple threads simultaneously may
 lead to interleaved text.
@return {String} A string containing text sent by the remote user, or {@code null} if the
 conversation has been terminated or if there was an error while reading.
*/
read : function(  ) {},

/**Non-blocking version of {@link #read}(). Returns {@code null} if there is nothing to
 be read.
@return {String} A string containing text entered by the user, or {@code null} if the user has
 not entered any new text yet.
*/
readImmediately : function(  ) {},

/**Closes the underlying file descriptors
@hide 
*/
close : function(  ) {},


};