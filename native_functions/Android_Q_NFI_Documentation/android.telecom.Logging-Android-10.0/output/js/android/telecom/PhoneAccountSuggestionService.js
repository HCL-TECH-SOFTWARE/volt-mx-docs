/**@class android.telecom.PhoneAccountSuggestionService
@extends android.app.Service

 Base class for service that allows system apps to suggest phone accounts for outgoing calls.

 Phone account suggestions allow OEMs to intelligently select phone accounts based on knowledge
 about the user's past behavior, carrier billing patterns, or other factors unknown to the AOSP
 Telecom system.
 OEMs who wish to provide a phone account suggestion service on their device should implement this
 service in an app that resides in the /system/priv-app/ directory on their device. For security
 reasons, the service's entry {@code AndroidManifest.xml} file must declare the
 {@link android.Manifest.permission.BIND_PHONE_ACCOUNT_SUGGESTION_SERVICE} permission:
 <pre>
 {@code
 <service android:name="your.package.YourServiceName"
          android:permission="android.permission.BIND_PHONE_ACCOUNT_SUGGESTION_SERVICE">
      <intent-filter>
          <action android:name="android.telecom.PhoneAccountSuggestionService"/>
      </intent-filter>
 </service>
 }
 </pre>
 Only one system app on each device may implement this service. If multiple system apps implement
 this service, none of them will be queried for suggestions.
 @hide
*/
var PhoneAccountSuggestionService = {

/** The {@link Intent} that must be declared in the {@code intent-filter} element of the
 service's manifest entry.
*/
SERVICE_INTERFACE : "android.telecom.PhoneAccountSuggestionService",
/**
*/
onBind : function(  ) {},

/**The system calls this method during the outgoing call flow if it needs account suggestions.

 The implementer of this service must override this method to implement its account suggestion
 logic. After preparing the suggestions, the implementation of the service must call
 {@link #suggestPhoneAccounts(String, List)} to deliver the suggestions back to the system.

 Note that the system will suspend the outgoing call process after it calls this method until
 this service calls {@link #suggestPhoneAccounts}.
@param {String} number The phone number to provide suggestions for.
*/
onAccountSuggestionRequest : function(  ) {},

/**The implementation of this service calls this method to deliver suggestions to the system.

 The implementation of this service must call this method after receiving a call to
 {@link #onAccountSuggestionRequest}(String). If no suggestions are available, pass an empty
 list as the {@code suggestions} argument.
@param {String} number The phone number to provide suggestions for.
@param {Object {java.util.List}} suggestions The list of suggestions.
*/
suggestPhoneAccounts : function(  ) {},


};