/**@class android.telecom.Connection.RttTextStream
@extends java.lang.Object

 Provides methods to read and write RTT data to/from the in-call app.
*/
var RttTextStream = {

/**Writes the string {@param input} into the text stream to the UI for this RTT call. Since
 RTT transmits text in real-time, this method should be called as often as text snippets
 are received from the remote user, even if it is only one character.
 <p>
 This method is not thread-safe -- calling it from multiple threads simultaneously may
 lead to interleaved text.
@param {String} input The message to send to the in-call app.
*/
write : function(  ) {},

/**Reads a string from the in-call app, blocking if there is no data available. Returns
 {@code null} if the RTT conversation has been terminated and there is no further data
 to read.
 <p>
 This method is not thread-safe -- calling it from multiple threads simultaneously may
 lead to interleaved text.
@return {String} A string containing text entered by the user, or {@code null} if the
 conversation has been terminated or if there was an error while reading.
*/
read : function(  ) {},

/**Non-blocking version of {@link #read}(). Returns {@code null} if there is nothing to
 be read.
@return {String} A string containing text entered by the user, or {@code null} if the user has
 not entered any new text yet.
*/
readImmediately : function(  ) {},

/**
@hide 
*/
getFdFromInCall : function(  ) {},

/**
@hide 
*/
getFdToInCall : function(  ) {},


};