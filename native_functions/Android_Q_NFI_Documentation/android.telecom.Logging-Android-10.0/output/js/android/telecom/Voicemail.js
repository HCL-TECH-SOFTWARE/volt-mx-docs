/**@class android.telecom.Voicemail
 implements android.os.Parcelable

@extends java.lang.Object

 Represents a single voicemail stored in the voicemail content provider.

 @hide
*/
var Voicemail = {

/***/
CREATOR : "null",
/**Create a {@link android.telecom.CallResponse.Builder} for a new {@link android.telecom.Voicemail} to be inserted.
 <p>
 The number and the timestamp are mandatory for insertion.
*/
createForInsertion : function(  ) {},

/**Create a {@link android.telecom.CallResponse.Builder} for a {@link android.telecom.Voicemail} to be updated (or deleted).
 <p>
 The id and source data fields are mandatory for update - id is necessary for updating the
 database and source data is necessary for updating the server.
*/
createForUpdate : function(  ) {},

/**The identifier of the voicemail in the content provider.
 <p>
 This may be missing in the case of a new {@link android.telecom.Voicemail} that we plan to insert into the
 content provider, since until it has been inserted we don't know what id it should have. If
 none is specified, we return -1.
*/
getId : function(  ) {},

/**The number of the person leaving the voicemail, empty string if unknown, null if not set.
*/
getNumber : function(  ) {},

/**The phone account associated with the voicemail, null if not set.
*/
getPhoneAccount : function(  ) {},

/**The timestamp the voicemail was received, in millis since the epoch, zero if not set.
*/
getTimestampMillis : function(  ) {},

/**Gets the duration of the voicemail in millis, or zero if the field is not set.
*/
getDuration : function(  ) {},

/**Returns the package name of the source that added this voicemail, or null if this field is
 not set.
*/
getSourcePackage : function(  ) {},

/**Returns the application-specific data type stored with the voicemail, or null if this field
 is not set.
 <p>
 Source data is typically used as an identifier to uniquely identify the voicemail against
 the voicemail server. This is likely to be something like the IMAP UID, or some other
 server-generated identifying string.
*/
getSourceData : function(  ) {},

/**Gets the Uri that can be used to refer to this voicemail, and to make it play.
 <p>
 Returns null if we don't know the Uri.
*/
getUri : function(  ) {},

/**Tells us if the voicemail message has been marked as read.
 <p>
 Always returns false if this field has not been set, i.e. if hasRead() returns false.
*/
isRead : function(  ) {},

/**Tells us if there is content stored at the Uri.
*/
hasContent : function(  ) {},

/**Returns the text transcription of this voicemail, or null if this field is not set.
*/
getTranscription : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},


};