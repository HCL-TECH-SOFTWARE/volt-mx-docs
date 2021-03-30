/**@class android.telecom.InCallService.VideoCall
@extends java.lang.Object

 Used to issue commands to the {@link android.telecom.Connection.VideoProvider} associated with a
 {@link android.telecom.Call}.
*/
var VideoCall = {

/**
@hide 
*/
destroy : function(  ) {},

/**Registers a callback to receive commands and state changes for video calls.
@param {Object {InCallService.VideoCall.Callback}} callback The video call callback.
*/
registerCallback : function(  ) {},

/**Registers a callback to receive commands and state changes for video calls.
@param {Object {InCallService.VideoCall.Callback}} callback The video call callback.
@param {Object {Handler}} handler A handler which commands and status changes will be delivered to.
*/
registerCallback : function(  ) {},

/**Clears the video call callback set via {@link #registerCallback}.
@param {Object {InCallService.VideoCall.Callback}} callback The video call callback to clear.
*/
unregisterCallback : function(  ) {},

/**Sets the camera to be used for the outgoing video.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetCamera(String)}.
@param {String} cameraId The id of the camera (use ids as reported by
 {@link CameraManager#getCameraIdList()}).
*/
setCamera : function(  ) {},

/**Sets the surface to be used for displaying a preview of what the user's camera is
 currently capturing.  When video transmission is enabled, this is the video signal which
 is sent to the remote device.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetPreviewSurface(Surface)}.
@param {Object {Surface}} surface The {@link Surface}.
*/
setPreviewSurface : function(  ) {},

/**Sets the surface to be used for displaying the video received from the remote device.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetDisplaySurface(Surface)}.
@param {Object {Surface}} surface The {@link Surface}.
*/
setDisplaySurface : function(  ) {},

/**Sets the device orientation, in degrees.  Assumes that a standard portrait orientation of
 the device is 0 degrees.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetDeviceOrientation(int)}.
@param {Number} rotation The device orientation, in degrees.
*/
setDeviceOrientation : function(  ) {},

/**Sets camera zoom ratio.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetZoom(float)}.
@param {Number} value The camera zoom ratio.
*/
setZoom : function(  ) {},

/**Issues a request to modify the properties of the current video session.
 <p>
 Example scenarios include: requesting an audio-only call to be upgraded to a
 bi-directional video call, turning on or off the user's camera, sending a pause signal
 when the {@link android.telecom.InCallService} is no longer the foreground application.
 <p>
 Handled by
 {@link Connection.VideoProvider#onSendSessionModifyRequest(android.telecom.VideoProfile, android.telecom.VideoProfile)}.
@param {Object {VideoProfile}} requestProfile The requested call video properties.
*/
sendSessionModifyRequest : function(  ) {},

/**Provides a response to a request to change the current call video session
 properties.  This should be called in response to a request the {@link android.telecom.InCallService} has
 received via {@link android.telecom.InCallService.VideoCall.Callback#onSessionModifyRequestReceived}.
 <p>
 Handled by
 {@link android.telecom.Connection.VideoProvider#onSendSessionModifyResponse(VideoProfile)}.
@param {Object {VideoProfile}} responseProfile The response call video properties.
*/
sendSessionModifyResponse : function(  ) {},

/**Issues a request to the {@link android.telecom.Connection.VideoProvider} to retrieve the capabilities
 of the current camera.  The current camera is selected using
 {@link android.telecom.InCallService.VideoCall#setCamera(String)}.
 <p>
 Camera capabilities are reported to the caller via
 {@link android.telecom.InCallService.VideoCall.Callback#onCameraCapabilitiesChanged(VideoProfile.CameraCapabilities)}.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onRequestCameraCapabilities()}.
*/
requestCameraCapabilities : function(  ) {},

/**Issues a request to the {@link android.telecom.Connection.VideoProvider} to retrieve the cumulative data
 usage for the video component of the current call (in bytes).  Data usage is reported
 to the caller via {@link android.telecom.InCallService.VideoCall.Callback#onCallDataUsageChanged}.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onRequestandroid.telecom.ConnectionDataUsage()}.
*/
requestCallDataUsage : function(  ) {},

/**Provides the {@link android.telecom.Connection.VideoProvider} with the {@link Uri} of an image to be
 displayed to the peer device when the video signal is paused.
 <p>
 Handled by {@link android.telecom.Connection.VideoProvider#onSetPauseImage(Uri)}.
@param {Object {Uri}} uri URI of image to display.
*/
setPauseImage : function(  ) {},


};