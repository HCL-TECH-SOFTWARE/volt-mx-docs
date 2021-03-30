/**@class android.telecom.InCallService
@extends android.app.Service

 This service is implemented by an app that wishes to provide functionality for managing
 phone calls.
 <h2>Becoming the Default Phone App</h2>
 The default dialer/phone app is one which provides the in-call user interface while the device is
 in a call.  A device is bundled with a system provided default dialer/phone app.  The user may
 choose a single app to take over this role from the system app.  An app which wishes to fulfill
 one this role uses the {@code android.app.role.RoleManager} to request that they fill the role.
 <p>
 An app filling the role of the default phone app provides a user interface while the device is in
 a call, and the device is not in car mode.
 <p>
 Below is an example manifest registration for an {@code InCallService}. The meta-data
 {@link android.telecom.TelecomManager#METADATA_IN_CALL_SERVICE_UI} indicates that this particular
 {@code InCallService} implementation intends to replace the built-in in-call UI.
 The meta-data {@link android.telecom.TelecomManager#METADATA_IN_CALL_SERVICE_RINGING} indicates that this
 {@link android.telecom.InCallService} will play the ringtone for incoming calls.  See
 <a href="#incomingCallNotification">below</a> for more information on showing the incoming call
 UI and playing the ringtone in your app.
 <pre>
 {@code
 <service android:name="your.package.YourInCallServiceImplementation"
          android:permission="android.permission.BIND_INCALL_SERVICE">
      <meta-data android:name="android.telecom.IN_CALL_SERVICE_UI" android:value="true" />
      <meta-data android:name="android.telecom.IN_CALL_SERVICE_RINGING"
          android:value="true" />
      <intent-filter>
          <action android:name="android.telecom.InCallService"/>
      </intent-filter>
 </service>
 }
 </pre>
 <p>
 In addition to implementing the {@link android.telecom.InCallService} API, you must also declare an activity in
 your manifest which handles the {@link Intent#ACTION_DIAL} intent.  The example below illustrates
 how this is done:
 <pre>
 {@code
 <activity android:name="your.package.YourDialerActivity"
           android:label="@string/yourDialerActivityLabel">
      <intent-filter>
           <action android:name="android.intent.action.DIAL" />
           <category android:name="android.intent.category.DEFAULT" />
      </intent-filter>
 </activity>
 }
 </pre>
 <p>
 When a user installs your application and runs it for the first time, you should use the
 {@link android.app.role.RoleManager} to prompt the user to see if they would like your app to
 be the new default phone app.
 <p id="requestRole">
 The code below shows how your app can request to become the default phone/dialer app:
 <pre>
 {@code
 private static final int REQUEST_ID = 1;

 public void requestRole() {
     RoleManager roleManager = (RoleManager) getSystemService(ROLE_SERVICE);
     Intent intent = roleManager.createRequestRoleIntent(RoleManager.ROLE_DIALER);
     startActivityForResult(intent, REQUEST_ID);
 }

 &#64;Override
 public void onActivityResult(int requestCode, int resultCode, Intent data) {
     if (requestCode == REQUEST_ID) {
         if (resultCode == android.app.Activity.RESULT_OK) {
             // Your app is now the default dialer app
         } else {
             // Your app is not the default dialer app
         }
     }
 }
 </pre>
 <p id="incomingCallNotification">
 <h3>Showing the Incoming Call Notification</h3>
 When your app receives a new incoming call via {@link android.telecom.InCallService#onCallAdded(Call)}, it is
 responsible for displaying an incoming call UI for the incoming call.  It should do this using
 {@link android.app.NotificationManager} APIs to post a new incoming call notification.
 <p>
 Where your app declares the meta-data {@link android.telecom.TelecomManager#METADATA_IN_CALL_SERVICE_RINGING}, it
 is responsible for playing the ringtone for incoming calls.  Your app should create a
 {@link android.app.NotificationChannel} which specifies the desired ringtone.  For example:
 <pre><code>
 NotificationChannel channel = new NotificationChannel(YOUR_CHANNEL_ID, "Incoming Calls",
          NotificationManager.IMPORTANCE_MAX);
 // other channel setup stuff goes here.

 // We'll use the default system ringtone for our incoming call notification channel.  You can
 // use your own audio resource here.
 Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
 channel.setSound(ringtoneUri, new AudioAttributes.Builder()
          // Setting the AudioAttributes is important as it identifies the purpose of your
          // notification sound.
          .setUsage(AudioAttributes.USAGE_NOTIFICATION_RINGTONE)
          .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
      .build());

 NotificationManager mgr = getSystemService(NotificationManager.class);
 mgr.createNotificationChannel(channel);
 </code></pre>
 <p>
 When your app receives a new incoming call, it creates a {@link android.app.Notification} for the
 incoming call and associates it with your incoming call notification channel. You can specify a
 {@link android.app.PendingIntent} on the notification which will launch your full screen
 incoming call UI.  The notification manager framework will display your notification as a
 heads-up notification if the user is actively using the phone.  When the user is not using the
 phone, your full-screen incoming call UI is used instead.
 For example:
 <pre><code>{@code
 // Create an intent which triggers your fullscreen incoming call user interface.
 Intent intent = new Intent(Intent.ACTION_MAIN, null);
 intent.setFlags(Intent.FLAG_ACTIVITY_NO_USER_ACTION | Intent.FLAG_ACTIVITY_NEW_TASK);
 intent.setClass(context, YourIncomingCallActivity.class);
 PendingIntent pendingIntent = PendingIntent.getActivity(context, 1, intent, 0);

 // Build the notification as an ongoing high priority item; this ensures it will show as
 // a heads up notification which slides down over top of the current content.
 final Notification.Builder builder = new Notification.Builder(context);
 builder.setOngoing(true);
 builder.setPriority(Notification.PRIORITY_HIGH);

 // Set notification content intent to take user to the fullscreen UI if user taps on the
 // notification body.
 builder.setContentIntent(pendingIntent);
 // Set full screen intent to trigger display of the fullscreen UI when the notification
 // manager deems it appropriate.
 builder.setFullScreenIntent(pendingIntent, true);

 // Setup notification content.
 builder.setSmallIcon( yourIconResourceId );
 builder.setContentTitle("Your notification title");
 builder.setContentText("Your notification content.");

 // Use builder.addAction(..) to add buttons to answer or reject the call.

 NotificationManager notificationManager = mContext.getSystemService(
     NotificationManager.class);
 notificationManager.notify(YOUR_CHANNEL_ID, YOUR_TAG, YOUR_ID, builder.build());
 }</pre>
 <p>
*/
var InCallService = {

/** The {@link Intent} that must be declared as handled by the service.
*/
SERVICE_INTERFACE : "android.telecom.InCallService",
/**
*/
onBind : function(  ) {},

/**
*/
onUnbind : function(  ) {},

/**Obtain the {@code Phone} associated with this {@code InCallService}.
@return {Object {android.telecom.Phone}} The {@code Phone} object associated with this {@code InCallService}, or {@code null}
         if the {@code InCallService} is not in a state where it has an associated
         {@code Phone}.
@hide 
@deprecated Use direct methods on InCallService instead of {@link Phone}.
*/
getPhone : function(  ) {},

/**Obtains the current list of {@code Call}s to be displayed by this in-call service.
@return {Object {java.util.List}} A list of the relevant {@code Call}s.
*/
getCalls : function(  ) {},

/**Returns if the device can support additional calls.
@return {Boolean} Whether the phone supports adding more calls.
*/
canAddCall : function(  ) {},

/**Obtains the current phone call audio state.
@return {Object {android.telecom.AudioState}} An object encapsulating the audio state. Returns null if the service is not
         fully initialized.
@deprecated Use {@link #getCallAudioState()} instead.
@hide 
*/
getAudioState : function(  ) {},

/**Obtains the current phone call audio state.
@return {Object {android.telecom.CallAudioState}} An object encapsulating the audio state. Returns null if the service is not
         fully initialized.
*/
getCallAudioState : function(  ) {},

/**Sets the microphone mute state. When this request is honored, there will be change to
 the {@link #getCallAudioState}().
@param {Boolean} state {@code true} if the microphone should be muted; {@code false} otherwise.
*/
setMuted : function(  ) {},

/**Sets the audio route (speaker, bluetooth, etc...).  When this request is honored, there will
 be change to the {@link #getCallAudioState}().
@param {Number} route The audio route to use.
*/
setAudioRoute : function(  ) {},

/**Request audio routing to a specific bluetooth device. Calling this method may result in
 the device routing audio to a different bluetooth device than the one specified if the
 bluetooth stack is unable to route audio to the requested device.
 A list of available devices can be obtained via
 {@link android.telecom.CallAudioState#getSupportedBluetoothDevices()}
@param {Object {BluetoothDevice}} bluetoothDevice The bluetooth device to connect to.
*/
requestBluetoothAudio : function(  ) {},

/**Invoked when the {@code Phone} has been created. This is a signal to the in-call experience
 to start displaying in-call information to the user. Each instance of {@code InCallService}
 will have only one {@code Phone}, and this method will be called exactly once in the lifetime
 of the {@code InCallService}.
@param {Object {Phone}} phone The {@code Phone} object associated with this {@code InCallService}.
@hide 
@deprecated Use direct methods on InCallService instead of {@link Phone}.
*/
onPhoneCreated : function(  ) {},

/**Invoked when a {@code Phone} has been destroyed. This is a signal to the in-call experience
 to stop displaying in-call information to the user. This method will be called exactly once
 in the lifetime of the {@code InCallService}, and it will always be called after a previous
 call to {@link #onPhoneCreated}(Phone).
@param {Object {Phone}} phone The {@code Phone} object associated with this {@code InCallService}.
@hide 
@deprecated Use direct methods on InCallService instead of {@link Phone}.
*/
onPhoneDestroyed : function(  ) {},

/**Called when the audio state changes.
@param {Object {AudioState}} audioState The new {@link AudioState}.
@deprecated Use {@link #onCallAudioStateChanged(CallAudioState) instead}.
@hide 
*/
onAudioStateChanged : function(  ) {},

/**Called when the audio state changes.
@param {Object {CallAudioState}} audioState The new {@link CallAudioState}.
*/
onCallAudioStateChanged : function(  ) {},

/**Called to bring the in-call screen to the foreground. The in-call experience should
 respond immediately by coming to the foreground to inform the user of the state of
 ongoing {@code Call}s.
@param {Boolean} showDialpad If true, put up the dialpad when the screen is shown.
*/
onBringToForeground : function(  ) {},

/**Called when a {@code Call} has been added to this in-call session. The in-call user
 experience should add necessary state listeners to the specified {@code Call} and
 immediately start to show the user information about the existence
 and nature of this {@code Call}. Subsequent invocations of {@link #getCalls}() will
 include this {@code Call}.
@param {Object {Call}} call A newly added {@code Call}.
*/
onCallAdded : function(  ) {},

/**Called when a {@code Call} has been removed from this in-call session. The in-call user
 experience should remove any state listeners from the specified {@code Call} and
 immediately stop displaying any information about this {@code Call}.
 Subsequent invocations of {@link #getCalls}() will no longer include this {@code Call}.
@param {Object {Call}} call A newly removed {@code Call}.
*/
onCallRemoved : function(  ) {},

/**Called when the ability to add more calls changes.  If the phone cannot
 support more calls then {@code canAddCall} is set to {@code false}.  If it can, then it
 is set to {@code true}. This can be used to control the visibility of UI to add more calls.
@param {Boolean} canAddCall Indicates whether an additional call can be added.
*/
onCanAddCallChanged : function(  ) {},

/**Called to silence the ringer if a ringing call exists.
*/
onSilenceRinger : function(  ) {},

/**Unused; to handle connection events issued by a {@link android.telecom.ConnectionService}, implement the
 {@link android.telecom.Call.Callback#onConnectionEvent(Call, String, Bundle)} callback.
 <p>
 See {@link android.telecom.Connection#sendandroid.telecom.ConnectionEvent(String, Bundle)}.
@param {Object {Call}} call The call the event is associated with.
@param {String} event The event.
@param {Object {Bundle}} extras Any associated extras.
*/
onConnectionEvent : function(  ) {},


};