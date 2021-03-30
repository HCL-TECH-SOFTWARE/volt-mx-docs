/**@class android.telecom.ConferenceParticipant
 implements android.os.Parcelable

@extends java.lang.Object

 Parcelable representation of a participant's state in a conference call.
 @hide
*/
var ConferenceParticipant = {

/** Responsible for creating {@code ConferenceParticipant} objects for deserialized Parcels.
*/
CREATOR : "null",
/**
*/
describeContents : function(  ) {},

/**Determines the number presentation for a conference participant.  Per RFC5767, if the host
 name contains {@code anonymous.invalid} we can assume that there is no valid caller ID
 information for the caller, otherwise we'll assume that the URI can be shown.
@return {Number} The number presentation.
*/
getParticipantPresentation : function(  ) {},

/**Writes the {@code ConferenceParticipant} to a parcel.
@param {Object {Parcel}} dest The Parcel in which the object should be written.
@param {Number} flags Additional flags about how the object should be written.
*/
writeToParcel : function(  ) {},

/**Builds a string representation of this instance.
@return {String} String representing the conference participant.
*/
toString : function(  ) {},

/**The conference participant's handle (e.g., phone number).
*/
getHandle : function(  ) {},

/**The display name for the participant.
*/
getDisplayName : function(  ) {},

/**The enpoint Uri which uniquely identifies this conference participant.  E.g. for an IMS
 conference call, this is the endpoint URI for the participant on the IMS conference server.
*/
getEndpoint : function(  ) {},

/**The state of the participant in the conference.
@see android.telecom.Connection
*/
getState : function(  ) {},

/**The connect time of the participant to the conference.
*/
getConnectTime : function(  ) {},

/**
*/
setConnectTime : function(  ) {},

/**The connect elapsed time of the participant to the conference.
*/
getConnectElapsedTime : function(  ) {},

/**
*/
setConnectElapsedTime : function(  ) {},

/**
@return {Number} The direction of the call (incoming/outgoing).
*/
getCallDirection : function(  ) {},

/**Sets the direction of the call.
@param {Number} callDirection Whether the call is incoming or outgoing.
*/
setCallDirection : function(  ) {},

/**Attempts to build a tel: style URI from a conference participant.
 Conference event package data contains SIP URIs, so we try to extract the phone number and
 format into a typical tel: style URI.
@param {Object {Uri}} address The conference participant's address.
@param {String} countryIso The country ISO of the current subscription; used when formatting the
                   participant phone number to E.164 format.
@return {Object {android.net.Uri}} The participant's address URI.
@hide 
*/
getParticipantAddress : function(  ) {},


};