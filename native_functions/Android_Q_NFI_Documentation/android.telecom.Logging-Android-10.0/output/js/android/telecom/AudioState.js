/**@class android.telecom.AudioState
 implements android.os.Parcelable

@extends java.lang.Object

  Encapsulates the telecom audio state, including the current audio routing, supported audio
  routing and mute.
  @deprecated - use {@link android.telecom.CallAudioState} instead.
  @hide
*/
var AudioState = {

/**Direct the audio stream through the device's earpiece. */
ROUTE_EARPIECE : "1",
/**Direct the audio stream through Bluetooth. */
ROUTE_BLUETOOTH : "2",
/**Direct the audio stream through a wired headset. */
ROUTE_WIRED_HEADSET : "4",
/**Direct the audio stream through the device's speakerphone. */
ROUTE_SPEAKER : "8",
/** Direct the audio stream through the device's earpiece or wired headset if one is
 connected.
*/
ROUTE_WIRED_OR_EARPIECE : "5",
/** Responsible for creating AudioState objects for deserialized Parcels.
*/
CREATOR : "null",
/**
*/
equals : function(  ) {},

/**
*/
toString : function(  ) {},

/**
*/
audioRouteToString : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**Writes AudioState object into a serializeable Parcel.
*/
writeToParcel : function(  ) {},

/**
@return {Boolean} {@code true} if the call is muted, false otherwise.
*/
isMuted : function(  ) {},

/**
@return {Number} The current audio route being used.
*/
getRoute : function(  ) {},

/**
@return {Number} Bit mask of all routes supported by this call.
*/
getSupportedRouteMask : function(  ) {},


};