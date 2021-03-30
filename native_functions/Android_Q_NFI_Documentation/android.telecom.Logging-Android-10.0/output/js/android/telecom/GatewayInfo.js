/**@class android.telecom.GatewayInfo
 implements android.os.Parcelable

@extends java.lang.Object

 Encapsulated gateway address information for outgoing call. When calls are made, the system
 provides a facility to specify two addresses for the call: one to display as the address being
 dialed and a separate (gateway) address to actually dial. Telecom provides this information to
 {@link android.telecom.ConnectionService}s when placing the call as an instance of {@code GatewayInfo}.
 <p>
 The data consists of an address to call, an address to display and the package name of the
 service. This data is used in two ways:
 <ol>
 <li> Call the appropriate gateway address.
 <li> Display information about how the call is being routed to the user.
 </ol>
*/
var GatewayInfo = {

/** The Parcelable interface.
 */
CREATOR : "null",
/**Package name of the gateway provider service that provided the gateway information.
 This can be used to identify the gateway address source and to load an appropriate icon when
 displaying gateway information in the in-call UI.
*/
getGatewayProviderPackageName : function(  ) {},

/**Returns the gateway address to dial when placing the call.
*/
getGatewayAddress : function(  ) {},

/**Returns the address that the user is trying to connect to via the gateway.
*/
getOriginalAddress : function(  ) {},

/**Indicates whether this {@code GatewayInfo} instance contains any data. A returned value of
 false indicates that no gateway number is being used for the call.
*/
isEmpty : function(  ) {},

/**{@inheritDoc}
*/
describeContents : function(  ) {},

/**{@inheritDoc}
*/
writeToParcel : function(  ) {},


};