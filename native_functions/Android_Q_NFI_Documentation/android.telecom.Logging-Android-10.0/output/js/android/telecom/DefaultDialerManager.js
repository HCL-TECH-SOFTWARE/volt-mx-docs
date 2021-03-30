/**@class android.telecom.DefaultDialerManager
@extends java.lang.Object

 Class for managing the default dialer application that will receive incoming calls, and be
 allowed to make emergency outgoing calls.

 @hide
*/
var DefaultDialerManager = {

/**Sets the specified package name as the default dialer application for the current user.
 The caller of this method needs to have permission to write to secure settings and
 manage users on the device.
@return {Boolean} {@code true} if the default dialer application was successfully changed,
         {@code false} otherwise.
@hide 
*/
setDefaultDialerApplication : function(  ) {},

/**Sets the specified package name as the default dialer application for the specified user.
 The caller of this method needs to have permission to write to secure settings and
 manage users on the device.
@return {Boolean} {@code true} if the default dialer application was successfully changed,
         {@code false} otherwise.
@hide 
*/
setDefaultDialerApplication : function(  ) {},

/**Returns the installed dialer application for the current user that will be used to receive
 incoming calls, and is allowed to make emergency calls.

 The application will be returned in order of preference:
 1) User selected phone application (if still installed)
 2) Pre-installed system dialer (if not disabled)
 3) Null

 The caller of this method needs to have permission to manage users on the device.
@hide 
*/
getDefaultDialerApplication : function(  ) {},

/**Returns the installed dialer application for the specified user that will be used to receive
 incoming calls, and is allowed to make emergency calls.

 The application will be returned in order of preference:
 1) User selected phone application (if still installed)
 2) Pre-installed system dialer (if not disabled)
 3) Null

 The caller of this method needs to have permission to manage users on the device.
@hide 
*/
getDefaultDialerApplication : function(  ) {},

/**Returns a list of installed and available dialer applications.

 In order to appear in the list, a dialer application must implement an intent-filter with
 the DIAL intent for the following schemes:

 1) Empty scheme
 2) tel Uri scheme
@hide 
*/
getInstalledDialerApplications : function(  ) {},

/**
*/
getInstalledDialerApplications : function(  ) {},

/**Determines if the package name belongs to the user-selected default dialer or the preloaded
 system dialer, and thus should be allowed to perform certain privileged operations.
@param {Object {Context}} context A valid context.
@param {String} packageName of the package to check for.
@return {Boolean} {@code true} if the provided package name corresponds to the user-selected default
         dialer or the preloaded system dialer, {@code false} otherwise.
@hide 
*/
isDefaultOrSystemDialer : function(  ) {},


};