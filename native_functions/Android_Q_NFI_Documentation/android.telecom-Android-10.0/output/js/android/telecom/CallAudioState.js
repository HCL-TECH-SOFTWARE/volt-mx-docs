/**@class android.telecom.CallAudioState
 implements android.os.Parcelable

@extends java.lang.Object

  Encapsulates the telecom audio state, including the current audio routing, supported audio
  routing and mute.
*/
var CallAudioState = {

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
/** Bit mask of all possible audio routes.

 @hide
*/
ROUTE_ALL : "15",
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
@return {Boolean} {@code true} if the call is muted, {@code false} otherwise.
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

/**
@return {Object {android.bluetooth.BluetoothDevice}} The {@link BluetoothDevice} through which audio is being routed.
         Will not be {@code null} if {@link #getRoute()} returns {@link #ROUTE_BLUETOOTH}.
*/
getActiveBluetoothDevice : function(  ) {},

/**
@return {Object {java.util.Collection}} {@link List} of {@link BluetoothDevice}s that can be used for this call.
*/
getSupportedBluetoothDevices : function(  ) {},

/**Converts the provided audio route into a human readable string representation.
@param {Number} route to convert into a string.
@return {String} String representation of the provided audio route.
*/
audioRouteToString : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**Writes AudioState object into a serializeable Parcel.
*/
writeToParcel : function(  ) {},


};