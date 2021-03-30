/**@class com.android.providers.settings.SettingsHelper
@extends java.lang.Object

*/
var SettingsHelper = {

/**Sets the property via a call to the appropriate API, if any, and returns
 whether or not the setting should be saved to the database as well.
@param {Object {Context}} name the name of the setting
@param {Object {ContentResolver}} value the string value of the setting
@return {Object {void}} whether to continue with writing the value to the database. In
 some cases the data will be written by the call to the appropriate API,
 and in some cases the property value needs to be modified before setting.
*/
restoreValue : function(  ) {},

/**
*/
onBackupValue : function(  ) {},

/**Merging the locale came from backup server and current device locale.

 Merge works with following rules.
 - The backup locales are appended to the current locale with keeping order.
   e.g. current locale "en-US,zh-CN" and backup locale "ja-JP,ko-KR" are merged to
   "en-US,zh-CH,ja-JP,ko-KR".

 - Duplicated locales are dropped.
   e.g. current locale "en-US,zh-CN" and backup locale "ja-JP,zh-Hans-CN,en-US" are merged to
   "en-US,zh-CN,ja-JP".

 - Unsupported locales are dropped.
   e.g. current locale "en-US" and backup locale "ja-JP,zh-CN" but the supported locales
   are "en-US,zh-CN", the merged locale list is "en-US,zh-CN".

 - The final result locale list only contains the supported locales.
   e.g. current locale "en-US" and backup locale "zh-Hans-CN" and supported locales are
   "en-US,zh-CN", the merged locale list is "en-US,zh-CN".
@param {Object {LocaleList}} restore The locale list that came from backup server.
@param {Object {LocaleList}} current The device's locale setting.
@param {Object {java.lang.String[]}} supportedLocales The list of language tags supported by this device.
*/
resolveLocales : function(  ) {},


};