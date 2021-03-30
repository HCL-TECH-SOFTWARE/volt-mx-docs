/**@class android.telecom.ConnectionRequest
 implements android.os.Parcelable

@extends java.lang.Object

 Simple data container encapsulating a request to some entity to
 create a new {@link android.telecom.Connection}.
*/
var ConnectionRequest = {

/***/
CREATOR : "null",
/**The account which should be used to place the call.
*/
getAccountHandle : function(  ) {},

/**The handle (e.g., phone number) to which the {@link android.telecom.Connection} is to connect.
*/
getAddress : function(  ) {},

/**Application-specific extra data. Used for passing back information from an incoming
 call {@code Intent}, and for any proprietary extensions arranged between a client
 and servant {@code ConnectionService} which agree on a vocabulary for such data.
*/
getExtras : function(  ) {},

/**Describes the video states supported by the client requesting the connection.
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED}.
@return {Number} The video state for the connection.
*/
getVideoState : function(  ) {},

/**Returns the internal Telecom ID associated with the connection request.
@return {String} The Telecom ID.
@hide 
*/
getTelecomCallId : function(  ) {},

/**For a self-managed {@link android.telecom.ConnectionService}, indicates for an incoming call whether the
 {@link android.telecom.ConnectionService} should show its own incoming call UI for an incoming call.
@return {Boolean} {@code true} if the {@link ConnectionService} should show its own incoming call UI.
 When {@code false}, Telecom shows the incoming call UI for the call.
@hide 
*/
shouldShowIncomingCallUi : function(  ) {},

/**Gets the {@link ParcelFileDescriptor} that is used to send RTT text from the connection
 service to the in-call UI. In order to obtain an
 {@link java.io.InputStream} from this {@link ParcelFileDescriptor}, use
 {@link android.os.ParcelFileDescriptor.AutoCloseInputStream}.
 Only text data encoded using UTF-8 should be written into this {@link ParcelFileDescriptor}.
@return {Object {android.os.ParcelFileDescriptor}} The {@link ParcelFileDescriptor} that should be used for communication.
 Do not un-hide -- only for use by Telephony
@hide 
*/
getRttPipeToInCall : function(  ) {},

/**Gets the {@link ParcelFileDescriptor} that is used to send RTT text from the in-call UI to
 the connection service. In order to obtain an
 {@link java.io.OutputStream} from this {@link ParcelFileDescriptor}, use
 {@link android.os.ParcelFileDescriptor.AutoCloseOutputStream}.
 The contents of this {@link ParcelFileDescriptor} will consist solely of text encoded in
 UTF-8.
@return {Object {android.os.ParcelFileDescriptor}} The {@link ParcelFileDescriptor} that should be used for communication
 Do not un-hide -- only for use by Telephony
@hide 
*/
getRttPipeFromInCall : function(  ) {},

/**Gets the {@link android.telecom.Connection.RttTextStream} object that should be used to
 send and receive RTT text to/from the in-call app.
@return {Object {android.telecom.Connection.RttTextStream}} An instance of {@link android.telecom.Connection.RttTextStream}, or {@code null}
 if this connection request is not requesting an RTT session upon connection establishment.
*/
getRttTextStream : function(  ) {},

/**Convenience method for determining whether the ConnectionRequest is requesting an RTT session
@return {Boolean} {@code true} if RTT is requested, {@code false} otherwise.
*/
isRequestingRtt : function(  ) {},

/**
*/
toString : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},


};