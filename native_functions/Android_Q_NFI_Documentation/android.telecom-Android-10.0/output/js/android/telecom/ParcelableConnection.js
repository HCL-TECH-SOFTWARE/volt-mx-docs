/**@class android.telecom.ParcelableConnection
 implements android.os.Parcelable

@extends java.lang.Object

 Information about a connection that is used between Telecom and the ConnectionService.
 This is used to send initial Connection information to Telecom when the connection is
 first created.
 @hide
*/
var ParcelableConnection = {

/***/
CREATOR : "null",
/**
*/
getPhoneAccount : function(  ) {},

/**
*/
getState : function(  ) {},

/**Returns the current connection capabilities bit-mask.  Connection capabilities are defined as
 {@code CAPABILITY_*} constants in {@link android.telecom.Connection}.
@return {Number} Bit-mask containing capabilities of the connection.
*/
getConnectionCapabilities : function(  ) {},

/**Returns the current connection properties bit-mask.  Connection properties are defined as
 {@code PROPERTY_*} constants in {@link android.telecom.Connection}.
@return {Number} Bit-mask containing properties of the connection.
*/
getConnectionProperties : function(  ) {},

/**
*/
getSupportedAudioRoutes : function(  ) {},

/**
*/
getHandle : function(  ) {},

/**
*/
getHandlePresentation : function(  ) {},

/**
*/
getCallerDisplayName : function(  ) {},

/**
*/
getCallerDisplayNamePresentation : function(  ) {},

/**
*/
getVideoProvider : function(  ) {},

/**
*/
getVideoState : function(  ) {},

/**
*/
isRingbackRequested : function(  ) {},

/**
*/
getIsVoipAudioMode : function(  ) {},

/**
*/
getConnectTimeMillis : function(  ) {},

/**
*/
getConnectElapsedTimeMillis : function(  ) {},

/**
*/
getStatusHints : function(  ) {},

/**
*/
getDisconnectCause : function(  ) {},

/**
*/
getConferenceableConnectionIds : function(  ) {},

/**
*/
getExtras : function(  ) {},

/**
*/
getParentCallId : function(  ) {},

/**
*/
getCallDirection : function(  ) {},

/**
*/
toString : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**Writes ParcelableConnection object into a Parcel.
*/
writeToParcel : function(  ) {},


};