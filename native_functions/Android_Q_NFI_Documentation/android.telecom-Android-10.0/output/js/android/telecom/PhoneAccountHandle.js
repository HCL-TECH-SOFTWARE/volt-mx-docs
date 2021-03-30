/**@class android.telecom.PhoneAccountHandle
 implements android.os.Parcelable

@extends java.lang.Object

 The unique identifier for a {@link android.telecom.PhoneAccount}. A {@code PhoneAccountHandle} is made of two
 parts:
 <ul>
  <li>The component name of the associated connection service.</li>
  <li>A string identifier that is unique across {@code PhoneAccountHandle}s with the same
      component name.</li>
 </ul>

 Note: This Class requires a non-null {@link ComponentName} and {@link UserHandle} to operate
 properly. Passing in invalid parameters will generate a log warning.

 See {@link android.telecom.PhoneAccount}, {@link android.telecom.TelecomManager}.
*/
var PhoneAccountHandle = {

/***/
CREATOR : "null",
/**The {@code ComponentName} of the connection service which is responsible for making phone
 calls using this {@code PhoneAccountHandle}.
@return {Object {android.content.ComponentName}} A suitable {@code ComponentName}.
*/
getComponentName : function(  ) {},

/**A string that uniquely distinguishes this particular {@code PhoneAccountHandle} from all the
 others supported by the connection service that created it.
 <p>
 A connection service must select identifiers that are stable for the lifetime of
 their users' relationship with their service, across many Android devices. For example, a
 good set of identifiers might be the email addresses with which with users registered for
 their accounts with a particular service. Depending on how a service chooses to operate,
 a bad set of identifiers might be an increasing series of integers
 ({@code 0}, {@code 1}, {@code 2}, ...) that are generated locally on each phone and could
 collide with values generated on other phones or after a data wipe of a given phone.

 Important: A non-unique identifier could cause non-deterministic call-log backup/restore
 behavior.
@return {String} A service-specific unique identifier for this {@code PhoneAccountHandle}.
*/
getId : function(  ) {},

/**
@return {Object {android.os.UserHandle}} the {@link UserHandle} to use when connecting to this PhoneAccount.
*/
getUserHandle : function(  ) {},

/**
*/
hashCode : function(  ) {},

/**
*/
toString : function(  ) {},

/**
*/
equals : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},

/**Determines if two {@link android.telecom.PhoneAccountHandle}s are from the same package.
@param {Object {PhoneAccountHandle}} a Phone account handle to check for same {@link ConnectionService} package.
@param {Object {PhoneAccountHandle}} b Other phone account handle to check for same {@link ConnectionService} package.
@return {Boolean} {@code true} if the two {@link PhoneAccountHandle}s passed in belong to the same
 {@link ConnectionService} / package, {@code false} otherwise.  Note: {@code null} phone
 account handles are considered equivalent to other {@code null} phone account handles.
@hide 
*/
areFromSamePackage : function(  ) {},


};