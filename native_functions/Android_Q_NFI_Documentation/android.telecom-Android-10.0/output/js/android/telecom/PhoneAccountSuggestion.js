/**@class android.telecom.PhoneAccountSuggestion
 implements android.os.Parcelable

@extends java.lang.Object

*/
var PhoneAccountSuggestion = {

/** Indicates that this account is not suggested for use, but is still available.
*/
REASON_NONE : "0",
/** Indicates that the {@link android.telecom.PhoneAccountHandle} is suggested because the number we're calling
 is on the same carrier, and therefore may have lower rates.
*/
REASON_INTRA_CARRIER : "1",
/** Indicates that the {@link android.telecom.PhoneAccountHandle} is suggested because the user uses it
 frequently for the number that we are calling.
*/
REASON_FREQUENT : "2",
/** Indicates that the {@link android.telecom.PhoneAccountHandle} is suggested because the user explicitly
 specified that it be used for the number we are calling.
*/
REASON_USER_SET : "3",
/** Indicates that the {@link android.telecom.PhoneAccountHandle} is suggested for a reason not otherwise
 enumerated here.
*/
REASON_OTHER : "4",
/***/
CREATOR : "null",
/**
@return {Object {android.telecom.PhoneAccountHandle}} The {@link PhoneAccountHandle} for this suggestion.
*/
getPhoneAccountHandle : function(  ) {},

/**
@return {Number} The reason for this suggestion
*/
getReason : function(  ) {},

/**Suggests whether the dialer should automatically place the call using this account without
 user interaction. This may be set on multiple {@link android.telecom.PhoneAccountSuggestion}s, and the dialer
 is free to choose which one to use.
@return {Boolean} {@code true} if the hint is to auto-select, {@code false} otherwise.
*/
shouldAutoSelect : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},

/**
*/
equals : function(  ) {},

/**
*/
hashCode : function(  ) {},


};