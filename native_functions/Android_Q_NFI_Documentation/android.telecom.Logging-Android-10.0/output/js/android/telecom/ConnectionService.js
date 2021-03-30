/**@class android.telecom.ConnectionService
@extends android.app.Service

 An abstract service that should be implemented by any apps which either:
 <ol>
     <li>Can make phone calls (VoIP or otherwise) and want those calls to be integrated into the
     built-in phone app.  Referred to as a <b>system managed</b> {@link android.telecom.ConnectionService}.</li>
     <li>Are a standalone calling app and don't want their calls to be integrated into the
     built-in phone app.  Referred to as a <b>self managed</b> {@link android.telecom.ConnectionService}.</li>
 </ol>
 Once implemented, the {@link android.telecom.ConnectionService} needs to take the following steps so that Telecom
 will bind to it:
 <p>
 1. <i>Registration in AndroidManifest.xml</i>
 <br/>
 <pre>
 &lt;service android:name="com.example.package.MyConnectionService"
    android:label="@string/some_label_for_my_connection_service"
    android:permission="android.permission.BIND_TELECOM_CONNECTION_SERVICE"&gt;
  &lt;intent-filter&gt;
   &lt;action android:name="android.telecom.ConnectionService" /&gt;
  &lt;/intent-filter&gt;
 &lt;/service&gt;
 </pre>
 <p>
 2. <i> Registration of {@link android.telecom.PhoneAccount} with {@link android.telecom.TelecomManager}.</i>
 <br/>
 See {@link android.telecom.PhoneAccount} and {@link android.telecom.TelecomManager#registerPhoneAccount} for more information.
 <p>
 System managed {@link android.telecom.ConnectionService}s must be enabled by the user in the phone app settings
 before Telecom will bind to them.  Self-managed {@link android.telecom.ConnectionService}s must be granted the
 appropriate permission before Telecom will bind to them.
 <p>
 Once registered and enabled by the user in the phone app settings or granted permission, telecom
 will bind to a {@link android.telecom.ConnectionService} implementation when it wants that
 {@link android.telecom.ConnectionService} to place a call or the service has indicated that is has an incoming
 call through {@link android.telecom.TelecomManager#addNewIncomingCall}. The {@link android.telecom.ConnectionService} can then
 expect a call to {@link #onCreateIncomingConnection} or {@link #onCreateOutgoingConnection}
 wherein it should provide a new instance of a {@link android.telecom.Connection} object.  It is through this
 {@link android.telecom.Connection} object that telecom receives state updates and the {@link android.telecom.ConnectionService}
 receives call-commands such as answer, reject, hold and disconnect.
 <p>
 When there are no more live calls, telecom will unbind from the {@link android.telecom.ConnectionService}.
*/
var ConnectionService = {

/** The {@link Intent} that must be declared as handled by the service.
*/
SERVICE_INTERFACE : "android.telecom.ConnectionService",
/** Boolean extra used by Telecom to inform a {@link android.telecom.ConnectionService} that the purpose of it
 being asked to create a new outgoing {@link android.telecom.Connection} is to perform a handover of an
 ongoing call on the device from another {@link android.telecom.PhoneAccount}/{@link android.telecom.ConnectionService}.  Will
 be specified in the {@link android.telecom.ConnectionRequest#getExtras()} passed by Telecom when
 {@link #onCreateOutgoingConnection(PhoneAccountHandle, android.telecom.ConnectionRequest)} is called.
 <p>
 When your {@link android.telecom.ConnectionService} receives this extra, it should communicate the fact that
 this is a handover to the other device's matching {@link android.telecom.ConnectionService}.  That
 {@link android.telecom.ConnectionService} will continue the handover using
 {@link android.telecom.TelecomManager#addNewIncomingCall(PhoneAccountHandle, Bundle)}, specifying
 {@link android.telecom.TelecomManager#EXTRA_IS_HANDOVER}.  Telecom will match the phone numbers of the
 handover call on the other device with ongoing calls for {@link android.telecom.ConnectionService}s which
 support {@link android.telecom.PhoneAccount#EXTRA_SUPPORTS_HANDOVER_FROM}.
 @hide
*/
EXTRA_IS_HANDOVER : "android.telecom.extra.IS_HANDOVER",
/**{@inheritDoc}
*/
onBind : function(  ) {},

/**{@inheritDoc}
*/
onUnbind : function(  ) {},

/**Ask some other {@code ConnectionService} to create a {@code RemoteConnection} given an
 incoming request. This is used by {@code ConnectionService}s that are registered with
 {@link android.telecom.PhoneAccount#CAPABILITY_CONNECTION_MANAGER} and want to be able to manage
 SIM-based incoming calls.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount See description at
         {@link #onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
@param {Object {ConnectionRequest}} request Details about the incoming call.
@return {Object {android.telecom.RemoteConnection}} The {@code Connection} object to satisfy this call, or {@code null} to
         not handle the call.
*/
createRemoteIncomingConnection : function(  ) {},

/**Ask some other {@code ConnectionService} to create a {@code RemoteConnection} given an
 outgoing request. This is used by {@code ConnectionService}s that are registered with
 {@link android.telecom.PhoneAccount#CAPABILITY_CONNECTION_MANAGER} and want to be able to use the
 SIM-based {@code ConnectionService} to place its outgoing calls.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount See description at
         {@link #onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
@param {Object {ConnectionRequest}} request Details about the outgoing call.
@return {Object {android.telecom.RemoteConnection}} The {@code Connection} object to satisfy this call, or {@code null} to
         not handle the call.
*/
createRemoteOutgoingConnection : function(  ) {},

/**Indicates to the relevant {@code RemoteConnectionService} that the specified
 {@link android.telecom.RemoteConnection}s should be merged into a conference call.
 <p>
 If the conference request is successful, the method {@link #onRemoteConferenceAdded} will
 be invoked.
@param {Object {RemoteConnection}} remoteConnection1 The first of the remote connections to conference.
@param {Object {RemoteConnection}} remoteConnection2 The second of the remote connections to conference.
*/
conferenceRemoteConnections : function(  ) {},

/**Adds a new conference call. When a conference call is created either as a result of an
 explicit request via {@link #onConference} or otherwise, the connection service should supply
 an instance of {@link android.telecom.Conference} by invoking this method. A conference call provided by this
 method will persist until {@link android.telecom.Conference#destroy} is invoked on the conference instance.
@param {Object {Conference}} conference The new conference object.
*/
addConference : function(  ) {},

/**Adds a connection created by the {@link android.telecom.ConnectionService} and informs telecom of the new
 connection.
@param {Object {PhoneAccountHandle}} phoneAccountHandle The phone account handle for the connection.
@param {Object {Connection}} connection The connection to add.
*/
addExistingConnection : function(  ) {},

/**Call to inform Telecom that your {@link android.telecom.ConnectionService} has released call resources (e.g
 microphone, camera).

 <p>
 The {@link android.telecom.ConnectionService} will be disconnected when it failed to call this method within
 5 seconds after {@link #onConnectionServiceFocusLost}() is called.
@see ConnectionService#onConnectionServiceFocusLost()
*/
connectionServiceFocusReleased : function(  ) {},

/**Adds a connection created by the {@link android.telecom.ConnectionService} and informs telecom of the new
 connection.
@param {Object {PhoneAccountHandle}} phoneAccountHandle The phone account handle for the connection.
@param {Object {Connection}} connection The connection to add.
@param {Object {Conference}} conference The parent conference of the new connection.
@hide 
*/
addExistingConnection : function(  ) {},

/**Returns all the active {@code Connection}s for which this {@code ConnectionService}
 has taken responsibility.
@return {Object {java.util.Collection}} A collection of {@code Connection}s created by this {@code ConnectionService}.
*/
getAllConnections : function(  ) {},

/**Returns all the active {@code Conference}s for which this {@code ConnectionService}
 has taken responsibility.
@return {Object {java.util.Collection}} A collection of {@code Conference}s created by this {@code ConnectionService}.
*/
getAllConferences : function(  ) {},

/**Create a {@code Connection} given an incoming request. This is used to attach to existing
 incoming calls.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount See description at
         {@link #onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
@param {Object {ConnectionRequest}} request Details about the incoming call.
@return {Object {android.telecom.Connection}} The {@code Connection} object to satisfy this call, or {@code null} to
         not handle the call.
*/
onCreateIncomingConnection : function(  ) {},

/**Called after the {@link android.telecom.Connection} returned by
 {@link #onCreateIncomingConnection(PhoneAccountHandle, android.telecom.ConnectionRequest)}
 or {@link #onCreateOutgoingConnection(PhoneAccountHandle, android.telecom.ConnectionRequest)} has been
 added to the {@link android.telecom.ConnectionService} and sent to Telecom.
@param {Object {Connection}} connection the {@link Connection}.
@hide 
*/
onCreateConnectionComplete : function(  ) {},

/**Called by Telecom to inform the {@link android.telecom.ConnectionService} that its request to create a new
 incoming {@link android.telecom.Connection} was denied.
 <p>
 Used when a self-managed {@link android.telecom.ConnectionService} attempts to create a new incoming
 {@link android.telecom.Connection}, but Telecom has determined that the call cannot be allowed at this time.
 The {@link android.telecom.ConnectionService} is responsible for silently rejecting the new incoming
 {@link android.telecom.Connection}.
 <p>
 See {@link android.telecom.TelecomManager#isIncomingCallPermitted(PhoneAccountHandle)} for more information.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount See description at
         {@link #onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
@param {Object {ConnectionRequest}} request The incoming connection request.
*/
onCreateIncomingConnectionFailed : function(  ) {},

/**Called by Telecom to inform the {@link android.telecom.ConnectionService} that its request to create a new
 outgoing {@link android.telecom.Connection} was denied.
 <p>
 Used when a self-managed {@link android.telecom.ConnectionService} attempts to create a new outgoing
 {@link android.telecom.Connection}, but Telecom has determined that the call cannot be placed at this time.
 The {@link android.telecom.ConnectionService} is responisible for informing the user that the
 {@link android.telecom.Connection} cannot be made at this time.
 <p>
 See {@link android.telecom.TelecomManager#isOutgoingCallPermitted(PhoneAccountHandle)} for more information.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount See description at
         {@link #onCreateOutgoingConnection(PhoneAccountHandle, ConnectionRequest)}.
@param {Object {ConnectionRequest}} request The outgoing connection request.
*/
onCreateOutgoingConnectionFailed : function(  ) {},

/**Trigger recalculate functinality for conference calls. This is used when a Telephony
 Connection is part of a conference controller but is not yet added to Connection
 Service and hence cannot be added to the conference call.
@hide 
*/
triggerConferenceRecalculate : function(  ) {},

/**Create a {@code Connection} given an outgoing request. This is used to initiate new
 outgoing calls.
@param {Object {PhoneAccountHandle}} connectionManagerPhoneAccount The connection manager account to use for managing
         this call.
         <p>
         If this parameter is not {@code null}, it means that this {@code ConnectionService}
         has registered one or more {@code PhoneAccount}s having
         {@link PhoneAccount#CAPABILITY_CONNECTION_MANAGER}. This parameter will contain
         one of these {@code PhoneAccount}s, while the {@code request} will contain another
         (usually but not always distinct) {@code PhoneAccount} to be used for actually
         making the connection.
         <p>
         If this parameter is {@code null}, it means that this {@code ConnectionService} is
         being asked to make a direct connection. The
         {@link ConnectionRequest#getAccountHandle()} of parameter {@code request} will be
         a {@code PhoneAccount} registered by this {@code ConnectionService} to use for
         making the connection.
@param {Object {ConnectionRequest}} request Details about the outgoing call.
@return {Object {android.telecom.Connection}} The {@code Connection} object to satisfy this call, or the result of an invocation
         of {@link Connection#createFailedConnection(DisconnectCause)} to not handle the call.
*/
onCreateOutgoingConnection : function(  ) {},

/**Called by Telecom to request that a {@link android.telecom.ConnectionService} creates an instance of an
 outgoing handover {@link android.telecom.Connection}.
 <p>
 A call handover is the process where an ongoing call is transferred from one app (i.e.
 {@link android.telecom.ConnectionService} to another app.  The user could, for example, choose to continue a
 mobile network call in a video calling app.  The mobile network call via the Telephony stack
 is referred to as the source of the handover, and the video calling app is referred to as the
 destination.
 <p>
 When considering a handover scenario the <em>initiating</em> device is where a user initiated
 the handover process (e.g. by calling {@link android.telecom.Call#handoverTo(
 PhoneAccountHandle, int, Bundle)}, and the other device is considered the <em>receiving</em>
 device.
 <p>
 This method is called on the destination {@link android.telecom.ConnectionService} on <em>initiating</em>
 device when the user initiates a handover request from one app to another.  The user request
 originates in the {@link android.telecom.InCallService} via
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
 <p>
 Implementations of this method should return an instance of {@link android.telecom.Connection} which
 represents the handover.  If your app does not wish to accept a handover to it at this time,
 you can return {@code null}.  The code below shows an example of how this is done.
 <pre>
 {@code
 public Connection onCreateIncomingHandoverConnection(PhoneAccountHandle
     fromPhoneAccountHandle, ConnectionRequest request) {
   if (!isHandoverAvailable()) {
       return null;
   }
   MyConnection connection = new MyConnection();
   connection.setAddress(request.getAddress(), TelecomManager.PRESENTATION_ALLOWED);
   connection.setVideoState(request.getVideoState());
   return connection;
 }
 }
 </pre>
@param {Object {PhoneAccountHandle}} fromPhoneAccountHandle {@link PhoneAccountHandle} associated with the
                               ConnectionService which needs to handover the call.
@param {Object {ConnectionRequest}} request Details about the call to handover.
@return {Object {android.telecom.Connection}} {@link Connection} instance corresponding to the handover call.
*/
onCreateOutgoingHandoverConnection : function(  ) {},

/**Called by Telecom to request that a {@link android.telecom.ConnectionService} creates an instance of an
 incoming handover {@link android.telecom.Connection}.
 <p>
 A call handover is the process where an ongoing call is transferred from one app (i.e.
 {@link android.telecom.ConnectionService} to another app.  The user could, for example, choose to continue a
 mobile network call in a video calling app.  The mobile network call via the Telephony stack
 is referred to as the source of the handover, and the video calling app is referred to as the
 destination.
 <p>
 When considering a handover scenario the <em>initiating</em> device is where a user initiated
 the handover process (e.g. by calling {@link android.telecom.Call#handoverTo(
 PhoneAccountHandle, int, Bundle)}, and the other device is considered the <em>receiving</em>
 device.
 <p>
 This method is called on the destination app on the <em>receiving</em> device when the
 destination app calls {@link TelecomManager#acceptHandover(Uri, int, android.telecom.PhoneAccountHandle)} to
 accept an incoming handover from the <em>initiating</em> device.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}.
 <p>
 Implementations of this method should return an instance of {@link android.telecom.Connection} which
 represents the handover.  The code below shows an example of how this is done.
 <pre>
 {@code
 public Connection onCreateIncomingHandoverConnection(PhoneAccountHandle
     fromPhoneAccountHandle, ConnectionRequest request) {
   // Given that your app requested to accept the handover, you should not return null here.
   MyConnection connection = new MyConnection();
   connection.setAddress(request.getAddress(), TelecomManager.PRESENTATION_ALLOWED);
   connection.setVideoState(request.getVideoState());
   return connection;
 }
 }
 </pre>
@param {Object {PhoneAccountHandle}} fromPhoneAccountHandle {@link PhoneAccountHandle} associated with the
                               ConnectionService which needs to handover the call.
@param {Object {ConnectionRequest}} request Details about the call which needs to be handover.
@return {Object {android.telecom.Connection}} {@link Connection} instance corresponding to the handover call.
*/
onCreateIncomingHandoverConnection : function(  ) {},

/**Called by Telecom in response to a {@code TelecomManager#acceptHandover()}
 invocation which failed.
 <p>
 For a full discussion of the handover process and the APIs involved, see
 {@link android.telecom.Call#handoverTo(PhoneAccountHandle, int, Bundle)}
@param {Object {ConnectionRequest}} request Details about the call which failed to handover.
@param {Number} error Reason for handover failure.  Will be one of the
*/
onHandoverFailed : function(  ) {},

/**Create a {@code Connection} for a new unknown call. An unknown call is a call originating
 from the ConnectionService that was neither a user-initiated outgoing call, nor an incoming
 call created using
 {@code TelecomManager#addNewIncomingCall(PhoneAccountHandle, android.os.Bundle)}.
@hide 
*/
onCreateUnknownConnection : function(  ) {},

/**Conference two specified connections. Invoked when the user has made a request to merge the
 specified connections into a conference call. In response, the connection service should
 create an instance of {@link android.telecom.Conference} and pass it into {@link #addConference}.
@param {Object {Connection}} connection1 A connection to merge into a conference call.
@param {Object {Connection}} connection2 A connection to merge into a conference call.
*/
onConference : function(  ) {},

/**Called when a connection is added.
@hide 
*/
onConnectionAdded : function(  ) {},

/**Called when a connection is removed.
@hide 
*/
onConnectionRemoved : function(  ) {},

/**Called when a conference is added.
@hide 
*/
onConferenceAdded : function(  ) {},

/**Called when a conference is removed.
@hide 
*/
onConferenceRemoved : function(  ) {},

/**Indicates that a remote conference has been created for existing {@link android.telecom.RemoteConnection}s.
 When this method is invoked, this {@link android.telecom.ConnectionService} should create its own
 representation of the conference call and send it to telecom using {@link #addConference}.
 <p>
 This is only relevant to {@link android.telecom.ConnectionService}s which are registered with
 {@link android.telecom.PhoneAccount#CAPABILITY_CONNECTION_MANAGER}.
@param {Object {RemoteConference}} conference The remote conference call.
*/
onRemoteConferenceAdded : function(  ) {},

/**Called when an existing connection is added remotely.
@param {Object {RemoteConnection}} connection The existing connection which was added.
*/
onRemoteExistingConnectionAdded : function(  ) {},

/**Called when the {@link android.telecom.ConnectionService} has lost the call focus.
 The {@link android.telecom.ConnectionService} should release the call resources and invokes
 {@link android.telecom.ConnectionService#connectionServiceFocusReleased()} to inform telecom that it has
 released the call resources.
*/
onConnectionServiceFocusLost : function(  ) {},

/**Called when the {@link android.telecom.ConnectionService} has gained the call focus. The
 {@link android.telecom.ConnectionService} can acquire the call resources at this time.
*/
onConnectionServiceFocusGained : function(  ) {},

/**
@hide 
*/
containsConference : function(  ) {},


};