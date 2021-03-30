/**@class android.telecom.VideoProfile.CameraCapabilities
 implements android.os.Parcelable

@extends java.lang.Object

 Represents the camera capabilities important to a Video Telephony provider.
*/
var CameraCapabilities = {

/** Responsible for creating CallCameraCapabilities objects from deserialized Parcels.
*/
CREATOR : "null",
/**Describe the kinds of special objects contained in this Parcelable's
 marshalled representation.
@return {Number} a bitmask indicating the set of special object types marshalled
 by the Parcelable.
*/
describeContents : function(  ) {},

/**Flatten this object in to a Parcel.
@param {Object {Parcel}} dest  The Parcel in which the object should be written.
@param {Number} flags Additional flags about how the object should be written.
              May be 0 or {@link #PARCELABLE_WRITE_RETURN_VALUE}.
*/
writeToParcel : function(  ) {},

/**The width of the camera video in pixels.
*/
getWidth : function(  ) {},

/**The height of the camera video in pixels.
*/
getHeight : function(  ) {},

/**Returns {@code true} is zoom is supported, {@code false} otherwise.
*/
isZoomSupported : function(  ) {},

/**Returns the maximum zoom supported by the camera.
*/
getMaxZoom : function(  ) {},


};