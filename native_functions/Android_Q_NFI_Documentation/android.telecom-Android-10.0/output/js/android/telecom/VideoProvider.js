/**@class android.telecom.Connection.VideoProvider
@extends java.lang.Object

 Provides a means of controlling the video session associated with a {@link android.telecom.Connection}.
 <p>
 Implementations create a custom subclass of {@link android.telecom.Connection.VideoProvider} and the
 {@link android.telecom.ConnectionService} creates an instance sets it on the {@link android.telecom.Connection} using
 {@link android.telecom.Connection#setVideoProvider(VideoProvider)}.  Any connection which supports video
 should set the {@link android.telecom.Connection.VideoProvider}.
 <p>
 The {@link android.telecom.Connection.VideoProvider} serves two primary purposes: it provides a means for Telecom and
 {@link android.telecom.InCallService} implementations to issue requests related to the video session;
 it provides a means for the {@link android.telecom.ConnectionService} to report events and information
 related to the video session to Telecom and the {@link android.telecom.InCallService} implementations.
 <p>
 {@link android.telecom.InCallService} implementations interact with the {@link android.telecom.Connection.VideoProvider} via
 {@link android.telecom.InCallService.VideoCall}.
*/
var VideoProvider = {

/** Video is not being received (no protocol pause was issued).
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_RX_PAUSE : "1",
/** Video reception has resumed after a {@link #SESSION_EVENT_RX_PAUSE}.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_RX_RESUME : "2",
/** Video transmission has begun. This occurs after a negotiated start of video transmission
 when the underlying protocol has actually begun transmitting video to the remote party.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_TX_START : "3",
/** Video transmission has stopped. This occurs after a negotiated stop of video transmission
 when the underlying protocol has actually stopped transmitting video to the remote party.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_TX_STOP : "4",
/** A camera failure has occurred for the selected camera.  The {@link android.telecom.Connection.VideoProvider} can use
 this as a cue to inform the user the camera is not available.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_CAMERA_FAILURE : "5",
/** Issued after {@link #SESSION_EVENT_CAMERA_FAILURE} when the camera is once again ready
 for operation.  The {@link android.telecom.Connection.VideoProvider} can use this as a cue to inform the user that
 the camera has become available again.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_CAMERA_READY : "6",
/** Session event raised by Telecom when
 {@link android.telecom.InCallService.VideoCall#setCamera(String)} is called and the
 caller does not have the necessary {@link android.Manifest.permission#CAMERA} permission.
 @see #handleCallSessionEvent(int)
*/
SESSION_EVENT_CAMERA_PERMISSION_ERROR : "7",
/** Session modify request was successful.
 @see #receiveSessionModifyResponse(int, VideoProfile, VideoProfile)
*/
SESSION_MODIFY_REQUEST_SUCCESS : "1",
/** Session modify request failed.
 @see #receiveSessionModifyResponse(int, VideoProfile, VideoProfile)
*/
SESSION_MODIFY_REQUEST_FAIL : "2",
/** Session modify request ignored due to invalid parameters.
 @see #receiveSessionModifyResponse(int, VideoProfile, VideoProfile)
*/
SESSION_MODIFY_REQUEST_INVALID : "3",
/** Session modify request timed out.
 @see #receiveSessionModifyResponse(int, VideoProfile, VideoProfile)
*/
SESSION_MODIFY_REQUEST_TIMED_OUT : "4",
/** Session modify request rejected by remote user.
 @see #receiveSessionModifyResponse(int, VideoProfile, VideoProfile)
*/
SESSION_MODIFY_REQUEST_REJECTED_BY_REMOTE : "5",
/**Returns binder object which can be used across IPC methods.
@hide 
*/
getInterface : function(  ) {},

/**Sets the camera to be used for the outgoing video.
 <p>
 The {@link android.telecom.Connection.VideoProvider} should respond by communicating the capabilities of the chosen
 camera via
 {@link android.telecom.Connection.VideoProvider#changeCameraCapabilities(VideoProfile.CameraCapabilities)}.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setCamera(String)}.
@param {String} cameraId The id of the camera (use ids as reported by
 {@link CameraManager#getCameraIdList()}).
*/
onSetCamera : function(  ) {},

/**Sets the camera to be used for the outgoing video.
 <p>
 The {@link android.telecom.Connection.VideoProvider} should respond by communicating the capabilities of the chosen
 camera via
 {@link android.telecom.Connection.VideoProvider#changeCameraCapabilities(VideoProfile.CameraCapabilities)}.
 <p>
 This prototype is used internally to ensure that the calling package name, UID and PID
 are sent to Telecom so that can perform a camera permission check on the caller.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setCamera(String)}.
@param {String} cameraId The id of the camera (use ids as reported by
 {@link CameraManager#getCameraIdList()}).
@param {String} callingPackageName The AppOpps package name of the caller.
@param {Number} callingUid The UID of the caller.
@param {Number} callingPid The PID of the caller.
@param {Number} targetSdkVersion The target SDK version of the caller.
@hide 
*/
onSetCamera : function(  ) {},

/**Sets the surface to be used for displaying a preview of what the user's camera is
 currently capturing.  When video transmission is enabled, this is the video signal which
 is sent to the remote device.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setPreviewSurface(Surface)}.
@param {Object {Surface}} surface The {@link Surface}.
*/
onSetPreviewSurface : function(  ) {},

/**Sets the surface to be used for displaying the video received from the remote device.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setDisplaySurface(Surface)}.
@param {Object {Surface}} surface The {@link Surface}.
*/
onSetDisplaySurface : function(  ) {},

/**Sets the device orientation, in degrees.  Assumes that a standard portrait orientation of
 the device is 0 degrees.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setDeviceOrientation(int)}.
@param {Number} rotation The device orientation, in degrees.
*/
onSetDeviceOrientation : function(  ) {},

/**Sets camera zoom ratio.
 <p>
 Sent from the {@link android.telecom.InCallService} via {@link android.telecom.InCallService.VideoCall#setZoom(float)}.
@param {Number} value The camera zoom ratio.
*/
onSetZoom : function(  ) {},

/**Issues a request to modify the properties of the current video session.
 <p>
 Example scenarios include: requesting an audio-only call to be upgraded to a
 bi-directional video call, turning on or off the user's camera, sending a pause signal
 when the {@link android.telecom.InCallService} is no longer the foreground application.
 <p>
 If the {@link android.telecom.Connection.VideoProvider} determines a request to be invalid, it should call
 {@link #receiveSessionModifyResponse(int, android.telecom.VideoProfile, android.telecom.VideoProfile)} to report the
 invalid request back to the {@link android.telecom.InCallService}.
 <p>
 Where a request requires confirmation from the user of the peer device, the
 {@link android.telecom.Connection.VideoProvider} must communicate the request to the peer device and handle the
 user's response.  {@link #receiveSessionModifyResponse(int, android.telecom.VideoProfile, android.telecom.VideoProfile)}
 is used to inform the {@link android.telecom.InCallService} of the result of the request.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#sendSessionModifyRequest(VideoProfile)}.
@param {Object {VideoProfile}} fromProfile The video profile prior to the request.
@param {Object {VideoProfile}} toProfile The video profile with the requested changes made.
*/
onSendSessionModifyRequest : function(  ) {},

/**Provides a response to a request to change the current video session properties.
 <p>
 For example, if the peer requests and upgrade from an audio-only call to a bi-directional
 video call, could decline the request and keep the call as audio-only.
 In such a scenario, the {@code responseProfile} would have a video state of
 {@link android.telecom.VideoProfile#STATE_AUDIO_ONLY}.  If the user had decided to accept the request,
 the video state would be {@link android.telecom.VideoProfile#STATE_BIDIRECTIONAL}.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#sendSessionModifyResponse(VideoProfile)} in response to
 a {@link android.telecom.InCallService.VideoCall.Callback#onSessionModifyRequestReceived(VideoProfile)}
 callback.
@param {Object {VideoProfile}} responseProfile The response video profile.
*/
onSendSessionModifyResponse : function(  ) {},

/**Issues a request to the {@link android.telecom.Connection.VideoProvider} to retrieve the camera capabilities.
 <p>
 The {@link android.telecom.Connection.VideoProvider} should respond by communicating the capabilities of the chosen
 camera via
 {@link android.telecom.Connection.VideoProvider#changeCameraCapabilities(VideoProfile.CameraCapabilities)}.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#requestCameraCapabilities()}.
*/
onRequestCameraCapabilities : function(  ) {},

/**Issues a request to the {@link android.telecom.Connection.VideoProvider} to retrieve the current data usage for the
 video component of the current {@link android.telecom.Connection}.
 <p>
 The {@link android.telecom.Connection.VideoProvider} should respond by communicating current data usage, in bytes,
 via {@link android.telecom.Connection.VideoProvider#setCallDataUsage(long)}.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#requestCallDataUsage()}.
*/
onRequestConnectionDataUsage : function(  ) {},

/**Provides the {@link android.telecom.Connection.VideoProvider} with the {@link Uri} of an image to be displayed to
 the peer device when the video signal is paused.
 <p>
 Sent from the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall#setPauseImage(Uri)}.
@param {Object {Uri}} uri URI of image to display.
*/
onSetPauseImage : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the
 {@link android.telecom.Connection.VideoProvider} receives a session modification request.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onSessionModifyRequestReceived(VideoProfile)},
@param {Object {VideoProfile}} videoProfile The requested video profile.
@see #onSendSessionModifyRequest(VideoProfile, VideoProfile)
*/
receiveSessionModifyRequest : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the
 {@link android.telecom.Connection.VideoProvider} receives a response to a session modification request.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onSessionModifyResponseReceived(int,
 VideoProfile, VideoProfile)}.
@param {Number} status Status of the session modify request.  Valid values are
               {@link VideoProvider#SESSION_MODIFY_REQUEST_SUCCESS},
               {@link VideoProvider#SESSION_MODIFY_REQUEST_FAIL},
               {@link VideoProvider#SESSION_MODIFY_REQUEST_INVALID},
               {@link VideoProvider#SESSION_MODIFY_REQUEST_TIMED_OUT},
               {@link VideoProvider#SESSION_MODIFY_REQUEST_REJECTED_BY_REMOTE}
@param {Object {VideoProfile}} requestedProfile The original request which was sent to the peer device.
@param {Object {VideoProfile}} responseProfile The actual profile changes agreed to by the peer device.
@see #onSendSessionModifyRequest(VideoProfile, VideoProfile)
*/
receiveSessionModifyResponse : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the
 {@link android.telecom.Connection.VideoProvider} reports a call session event.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onCallSessionEvent(int)}.
@param {Number} event The event.  Valid values are: {@link VideoProvider#SESSION_EVENT_RX_PAUSE},
      {@link VideoProvider#SESSION_EVENT_RX_RESUME},
      {@link VideoProvider#SESSION_EVENT_TX_START},
      {@link VideoProvider#SESSION_EVENT_TX_STOP},
      {@link VideoProvider#SESSION_EVENT_CAMERA_FAILURE},
      {@link VideoProvider#SESSION_EVENT_CAMERA_READY},
      {@link VideoProvider#SESSION_EVENT_CAMERA_FAILURE}.
*/
handleCallSessionEvent : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the dimensions of the
 peer's video have changed.
 <p>
 This could occur if, for example, the peer rotates their device, changing the aspect
 ratio of the video, or if the user switches between the back and front cameras.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onPeerDimensionsChanged(int, int)}.
@param {Number} width  The updated peer video width.
@param {Number} height The updated peer video height.
*/
changePeerDimensions : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the data usage of the
 video associated with the current {@link android.telecom.Connection} has changed.
 <p>
 This could be in response to a preview request via
 {@link #onRequestConnectionDataUsage}(), or as a periodic update by the
 {@link android.telecom.Connection.VideoProvider}.  Where periodic updates of data usage are provided, they should be
 provided at most for every 1 MB of data transferred and no more than once every 10 sec.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onCallDataUsageChanged(long)}.
@param {Number} dataUsage The updated data usage (in bytes).  Reported as the cumulative bytes
                  used since the start of the call.
*/
setCallDataUsage : function(  ) {},

/**
@param {Number} dataUsage The updated data usage (in byes).
@param dataUsage The updated data usage (in byes).
@deprecated - Use {@link #setCallDataUsage(long)} instead.
@hide 
*/
changeCallDataUsage : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the capabilities of
 the current camera have changed.
 <p>
 The {@link android.telecom.Connection.VideoProvider} should call this in response to
 {@link android.telecom.Connection.VideoProvider#onRequestCameraCapabilities()}, or when the current camera is
 changed via {@link android.telecom.Connection.VideoProvider#onSetCamera(String)}.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onCameraCapabilitiesChanged(
 VideoProfile.CameraCapabilities)}.
@param {Object {VideoProfile.CameraCapabilities}} cameraCapabilities The new camera capabilities.
*/
changeCameraCapabilities : function(  ) {},

/**Used to inform listening {@link android.telecom.InCallService} implementations when the video quality
 of the call has changed.
 <p>
 Received by the {@link android.telecom.InCallService} via
 {@link android.telecom.InCallService.VideoCall.Callback#onVideoQualityChanged(int)}.
@param {Number} videoQuality The updated video quality.  Valid values:
      {@link VideoProfile#QUALITY_HIGH},
      {@link VideoProfile#QUALITY_MEDIUM},
      {@link VideoProfile#QUALITY_LOW},
      {@link VideoProfile#QUALITY_DEFAULT}.
*/
changeVideoQuality : function(  ) {},

/**Returns a string representation of a call session event.
@param {Number} event A call session event passed to {@link #handleCallSessionEvent(int)}.
@return {String} String representation of the call session event.
@hide 
*/
sessionEventToString : function(  ) {},


};