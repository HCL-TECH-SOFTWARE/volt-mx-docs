/**@class android.telecom.VideoProfile
 implements android.os.Parcelable

@extends java.lang.Object

 Represents attributes of video calls.
*/
var VideoProfile = {

/** "Unknown" video quality.
 @hide
*/
QUALITY_UNKNOWN : "0",
/** "High" video quality.
*/
QUALITY_HIGH : "1",
/** "Medium" video quality.
*/
QUALITY_MEDIUM : "2",
/** "Low" video quality.
*/
QUALITY_LOW : "3",
/** Use default video quality.
*/
QUALITY_DEFAULT : "4",
/** Used when answering or dialing a call to indicate that the call does not have a video
 component.
 <p>
 Should <b>not</b> be used in comparison checks to determine if a video state represents an
 audio-only call.
 <p>
 The following, for example, is not the correct way to check if a call is audio-only:
 <pre>
 {@code
 // This is the incorrect way to check for an audio-only call.
 if (videoState == VideoProfile.STATE_AUDIO_ONLY) {
      // Handle audio-only call.
 }
 }
 </pre>
 <p>
 Instead, use the {@link android.telecom.VideoProfile#isAudioOnly(int)} helper function to check if a
 video state represents an audio-only call:
 <pre>
 {@code
 // This is the correct way to check for an audio-only call.
 if (VideoProfile.isAudioOnly(videoState)) {
      // Handle audio-only call.
 }
 }
 </pre>
*/
STATE_AUDIO_ONLY : "0",
/** Video transmission is enabled.
*/
STATE_TX_ENABLED : "1",
/** Video reception is enabled.
*/
STATE_RX_ENABLED : "2",
/** Video signal is bi-directional.
*/
STATE_BIDIRECTIONAL : "3",
/** Video is paused.
*/
STATE_PAUSED : "4",
/** Responsible for creating VideoProfile objects from deserialized Parcels.
*/
CREATOR : "null",
/**The video state of the call.
 Valid values: {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY},
 {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL},
 {@link android.telecom.VideoProfile#STATE_TX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_RX_ENABLED},
 {@link android.telecom.VideoProfile#STATE_PAUSED}.
*/
getVideoState : function(  ) {},

/**The desired video quality for the call.
 Valid values: {@link android.telecom.VideoProfile#QUALITY_HIGH}, {@link android.telecom.VideoProfile#QUALITY_MEDIUM},
 {@link android.telecom.VideoProfile#QUALITY_LOW}, {@link android.telecom.VideoProfile#QUALITY_DEFAULT}.
*/
getQuality : function(  ) {},

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

/**
*/
toString : function(  ) {},

/**Generates a string representation of a video state.
@param {Number} videoState The video state.
@return {String} String representation of the video state.
*/
videoStateToString : function(  ) {},

/**Indicates whether the video state is audio only.
 <p>
 Note: Considers only whether either both the {@link #STATE_RX_ENABLED} or
 {@link #STATE_TX_ENABLED} bits are off, but not {@link #STATE_PAUSED}.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if the video state is audio only, {@code false} otherwise.
*/
isAudioOnly : function(  ) {},

/**Indicates whether video transmission or reception is enabled for a video state.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if video transmission or reception is enabled, {@code false} otherwise.
*/
isVideo : function(  ) {},

/**Indicates whether the video state has video transmission enabled.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if video transmission is enabled, {@code false} otherwise.
*/
isTransmissionEnabled : function(  ) {},

/**Indicates whether the video state has video reception enabled.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if video reception is enabled, {@code false} otherwise.
*/
isReceptionEnabled : function(  ) {},

/**Indicates whether the video state is bi-directional.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if the video is bi-directional, {@code false} otherwise.
*/
isBidirectional : function(  ) {},

/**Indicates whether the video state is paused.
@param {Number} videoState The video state.
@return {Boolean} {@code True} if the video is paused, {@code false} otherwise.
*/
isPaused : function(  ) {},


};