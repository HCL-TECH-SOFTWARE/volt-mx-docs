/**@class android.telecom.StatusHints
 implements android.os.Parcelable

@extends java.lang.Object

 Contains status label and icon displayed in the in-call UI.
*/
var StatusHints = {

/***/
CREATOR : "null",
/**
@return {Object {android.content.ComponentName}} A package used to load the icon.
@hide 
*/
getPackageName : function(  ) {},

/**
@return {Object {java.lang.CharSequence}} The label displayed in the in-call UI.
*/
getLabel : function(  ) {},

/**The icon resource ID for the icon to show.
@return {Number} A resource ID.
@hide 
*/
getIconResId : function(  ) {},

/**
@return {Object {android.graphics.drawable.Drawable}} An icon displayed in the in-call UI.
@hide 
*/
getIcon : function(  ) {},

/**
@return {Object {android.graphics.drawable.Icon}} An icon depicting the status.
*/
getIcon : function(  ) {},

/**
@return {Object {android.os.Bundle}} Extra data used to display status.
*/
getExtras : function(  ) {},

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