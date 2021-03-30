/**@class android.telecom.CallScreeningService
@extends android.app.Service

 This service can be implemented by the default dialer (see
 {@link android.telecom.TelecomManager#getDefaultDialerPackage()}) or a third party app to allow or disallow
 incoming calls before they are shown to a user. A {@link android.telecom.CallScreeningService} can also see
 outgoing calls for the purpose of providing caller ID services for those calls.
 <p>
 Below is an example manifest registration for a {@code CallScreeningService}.
 <pre>
 {@code
 <service android:name="your.package.YourCallScreeningServiceImplementation"
          android:permission="android.permission.BIND_SCREENING_SERVICE">
      <intent-filter>
          <action android:name="android.telecom.CallScreeningService"/>
      </intent-filter>
 </service>
 }
 </pre>
 <p>
 A CallScreeningService performs two functions:
 <ol>
     <li>Call blocking/screening - the service can choose which calls will ring on the user's
     device, and which will be silently sent to voicemail.</li>
     <li>Call identification - services which provide call identification functionality can
     display a user-interface of their choosing which contains identifying information for a call.
     </li>
 </ol>
 <p>
 <h2>Becoming the {@link android.telecom.CallScreeningService}</h2>
 Telecom will bind to a single app chosen by the user which implements the
 {@link android.telecom.CallScreeningService} API when there are new incoming and outgoing calls.
 <p>
 The code snippet below illustrates how your app can request that it fills the call screening
 role.
 <pre>
 {@code
 private static final int REQUEST_ID = 1;

 public void requestRole() {
     RoleManager roleManager = (RoleManager) getSystemService(ROLE_SERVICE);
     Intent intent = roleManager.createRequestRoleIntent("android.app.role.CALL_SCREENING");
     startActivityForResult(intent, REQUEST_ID);
 }

 &#64;Override
 public void onActivityResult(int requestCode, int resultCode, Intent data) {
     if (requestCode == REQUEST_ID) {
         if (resultCode == android.app.Activity.RESULT_OK) {
             // Your app is now the call screening app
         } else {
             // Your app is not the call screening app
         }
     }
 }
 </pre>
*/
var CallScreeningService = {

/** The {@link Intent} that must be declared as handled by the service.
*/
SERVICE_INTERFACE : "android.telecom.CallScreeningService",
/**
*/
onBind : function(  ) {},

/**
*/
onUnbind : function(  ) {},

/**Called when a new incoming or outgoing call is added which is not in the user's contact list.
 <p>
 A {@link android.telecom.CallScreeningService} must indicate whether an incoming call is allowed or not by
 calling
 {@link android.telecom.CallScreeningService#respondToCall(Call.Details, android.telecom.CallScreeningService.CallResponse)}.
 Your app can tell if a call is an incoming call by checking to see if
 {@link android.telecom.Call.Details#getandroid.telecom.CallDirection()} is {@link android.telecom.Call.Details#DIRECTION_INCOMING}.
 <p>
 Note: The {@link android.telecom.Call.Details} instance provided to a call screening service will only have
 the following properties set.  The rest of the {@link android.telecom.Call.Details} properties will be set to
 their default value or {@code null}.
 <ul>
     <li>{@link android.telecom.Call.Details#getandroid.telecom.CallDirection()}</li>
     <li>{@link android.telecom.Call.Details#getConnectTimeMillis()}</li>
     <li>{@link android.telecom.Call.Details#getCreationTimeMillis()}</li>
     <li>{@link android.telecom.Call.Details#getHandle()}</li>
     <li>{@link android.telecom.Call.Details#getHandlePresentation()}</li>
 </ul>
 <p>
 Only calls where the {@link android.telecom.Call.Details#getHandle() handle} {@link Uri#getScheme() scheme}
 is {@link android.telecom.PhoneAccount#SCHEME_TEL} are passed for call
 screening.  Further, only calls which are not in the user's contacts are passed for
 screening.  For outgoing calls, no post-dial digits are passed.
@param {Object {Call.Details}} callDetails Information about a new call, see {@link Call.Details}.
*/
onScreenCall : function(  ) {},

/**Responds to the given incoming call, either allowing it, silencing it or disallowing it.
 <p>
 The {@link android.telecom.CallScreeningService} calls this method to inform the system whether the call
 should be silently blocked or not. In the event that it should not be blocked, it may
 also be requested to ring silently.
 <p>
 Calls to this method are ignored unless the {@link android.telecom.Call.Details#getandroid.telecom.CallDirection()} is
 {@link android.telecom.Call.Details#DIRECTION_INCOMING}.
@param {Object {Call.Details}} callDetails The call to allow.
                    <p>
                    Must be the same {@link Call.Details call} which was provided to the
                    {@link CallScreeningService} via {@link #onScreenCall(Call.Details)}.
@param {Object {CallScreeningService.CallResponse}} response The {@link CallScreeningService.CallResponse} which contains information
 about how to respond to a call.
*/
respondToCall : function(  ) {},


};