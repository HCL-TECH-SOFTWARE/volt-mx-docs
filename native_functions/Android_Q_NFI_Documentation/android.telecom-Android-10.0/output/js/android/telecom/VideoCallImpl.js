/**@class android.telecom.VideoCallImpl
@extends android.telecom.InCallService.VideoCall

 Implementation of a Video Call, which allows InCallUi to communicate commands to the underlying
 {@link android.telecom.Connection.VideoProvider}, and direct callbacks from the
 {@link android.telecom.Connection.VideoProvider} to the appropriate {@link android.telecom.InCallService.VideoCall.Listener}.

 {@hide}
*/
var VideoCallImpl = {

/**
*/
setTargetSdkVersion : function(  ) {},

/**
*/
destroy : function(  ) {},

/**{@inheritDoc}
*/
registerCallback : function(  ) {},

/**{@inheritDoc}
*/
registerCallback : function(  ) {},

/**{@inheritDoc}
*/
unregisterCallback : function(  ) {},

/**{@inheritDoc}
*/
setCamera : function(  ) {},

/**{@inheritDoc}
*/
setPreviewSurface : function(  ) {},

/**{@inheritDoc}
*/
setDisplaySurface : function(  ) {},

/**{@inheritDoc}
*/
setDeviceOrientation : function(  ) {},

/**{@inheritDoc}
*/
setZoom : function(  ) {},

/**Sends a session modification request to the video provider.
 <p>
 The {@link android.telecom.InCallService} will create the {@code requestProfile} based on the current
 video state (i.e. {@link android.telecom.Call.Details#getVideoState()}).  It is, however, possible that the
 video state maintained by the {@link android.telecom.InCallService} could get out of sync with what is known
 by the {@link android.telecom.Connection.VideoProvider}.  To remove ambiguity, the
 {@link android.telecom.InCallService.VideoCallImpl} passes along the pre-modify video profile to the {@code VideoProvider}
 to ensure it has full context of the requested change.
@param {Object {VideoProfile}} requestProfile The requested video profile.
*/
sendSessionModifyRequest : function(  ) {},

/**{@inheritDoc}
*/
sendSessionModifyResponse : function(  ) {},

/**{@inheritDoc}
*/
requestCameraCapabilities : function(  ) {},

/**{@inheritDoc}
*/
requestCallDataUsage : function(  ) {},

/**{@inheritDoc}
*/
setPauseImage : function(  ) {},

/**Sets the video state for the current video call.
@param {Number} videoState the new video state.
*/
setVideoState : function(  ) {},


};