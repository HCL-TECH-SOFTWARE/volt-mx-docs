/**@class com.android.providers.settings.SettingsHelperRestoreTest
@extends java.lang.Object

 Tests for {@link com.android.providers.settings.SettingsHelper#restoreValue(Context, ContentResolver, ContentValues, Uri,
 String, String, int)}. Specifically verifies that we restore critical accessibility settings only
 if the user has not already configured these in SUW.
*/
var SettingsHelperRestoreTest = {

/**
*/
setUp : function(  ) {},

/**Tests for {@link Settings.Secure#ACCESSIBILITY_DISPLAY_MAGNIFICATION_SCALE}.
*/
testRestoreAccessibilityDisplayMagnificationScale_alreadyConfigured_doesNotRestoreValue : function(  ) {},

/**
*/
testRestoreAccessibilityDisplayMagnificationScale_notAlreadyConfigured_restoresValue : function(  ) {},

/**Tests for {@link Settings.Secure#ACCESSIBILITY_DISPLAY_MAGNIFICATION_NAVBAR_ENABLED}.
*/
testRestoreAccessibilityDisplayMagnificationNavbarEnabled_alreadyConfigured_doesNotRestoreValue : function(  ) {},

/**
*/
testRestoreAccessibilityDisplayMagnificationNavbarEnabled_notAlreadyConfigured_restoresValue : function(  ) {},


};