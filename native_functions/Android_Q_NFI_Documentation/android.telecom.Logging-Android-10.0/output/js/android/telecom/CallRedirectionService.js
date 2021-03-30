/**@class android.telecom.CallRedirectionService
@extends android.app.Service

 This service can be implemented to interact between Telecom and its implementor
 for making outgoing call with optional redirection/cancellation purposes.

 <p>
 Below is an example manifest registration for a {@code CallRedirectionService}.
 <pre>
 {@code
 <service android:name="your.package.YourCallRedirectionServiceImplementation"
          android:permission="android.permission.BIND_REDIRECTION_SERVICE">
      <intent-filter>
          <action android:name="android.telecom.CallRedirectionService"/>
      </intent-filter>
 </service>
 }
 </pre>
*/
var CallRedirectionService = {

/** The {@link Intent} that must be declared as handled by the service.
*/
SERVICE_INTERFACE : "android.telecom.CallRedirectionService",
/**Telecom calls this method once upon binding to a {@link android.telecom.CallRedirectionService} to inform
 it of a new outgoing call which is being placed. Telecom does not request to redirect
 emergency calls and does not request to redirect calls with gateway information.

 <p>Telecom will cancel the call if Telecom does not receive a response in 5 seconds from
 the implemented {@link android.telecom.CallRedirectionService} set by users.

 <p>The implemented {@link android.telecom.CallRedirectionService} can call {@link #placeCallUnmodified}(),
 {@link #redirectCall(Uri, android.telecom.PhoneAccountHandle, boolean)}, and {@link #cancelCall}() only
 from here. Calls to these methods are assumed by the Telecom framework to be the response
 for the phone call for which {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)} was
 invoked by Telecom. The Telecom framework will only invoke
 {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)} once each time it binds to a
 {@link android.telecom.CallRedirectionService}.
@param {Object {Uri}} handle the phone number dialed by the user, represented in E.164 format if possible
@param {Object {PhoneAccountHandle}} initialPhoneAccount the {@link PhoneAccountHandle} on which the call will be placed.
@param {Boolean} allowInteractiveResponse a boolean to tell if the implemented
                                 {@link CallRedirectionService} should allow interactive
                                 responses with users. Will be {@code false} if, for example
                                 the device is in car mode and the user would not be able to
                                 interact with their device.
*/
onPlaceCall : function(  ) {},

/**The implemented {@link android.telecom.CallRedirectionService} calls this method to response a request
 received via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)} to inform Telecom that
 no changes are required to the outgoing call, and that the call should be placed as-is.

 <p>This can only be called from implemented
 {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}. The response corresponds to the
 latest request via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}.
*/
placeCallUnmodified : function(  ) {},

/**The implemented {@link android.telecom.CallRedirectionService} calls this method to response a request
 received via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)} to inform Telecom that
 changes are required to the phone number or/and {@link android.telecom.PhoneAccountHandle} for the outgoing
 call. Telecom will cancel the call if the implemented {@link android.telecom.CallRedirectionService}
 replies Telecom a handle for an emergency number.

 <p>This can only be called from implemented
 {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}. The response corresponds to the
 latest request via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}.
@param {Object {Uri}} gatewayUri the gateway uri for call redirection.
@param {Object {PhoneAccountHandle}} targetPhoneAccount the {@link PhoneAccountHandle} to use when placing the call.
@param {Boolean} confirmFirst Telecom will ask users to confirm the redirection via a yes/no dialog
                     if the confirmFirst is true, and if the redirection request of this
                     response was sent with a true flag of allowInteractiveResponse via
                     {@link #onPlaceCall(Uri, PhoneAccountHandle, boolean)}
*/
redirectCall : function(  ) {},

/**The implemented {@link android.telecom.CallRedirectionService} calls this method to response a request
 received via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)} to inform Telecom that
 an outgoing call should be canceled entirely.

 <p>This can only be called from implemented
 {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}. The response corresponds to the
 latest request via {@link #onPlaceCall(Uri, android.telecom.PhoneAccountHandle, boolean)}.
*/
cancelCall : function(  ) {},

/**
*/
onBind : function(  ) {},

/**
*/
onUnbind : function(  ) {},


};