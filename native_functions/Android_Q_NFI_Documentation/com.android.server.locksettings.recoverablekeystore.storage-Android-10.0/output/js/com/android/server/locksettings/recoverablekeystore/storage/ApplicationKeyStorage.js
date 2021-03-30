/**@class com.android.server.locksettings.recoverablekeystore.storage.ApplicationKeyStorage
@extends java.lang.Object

 Storage for Application keys in LockSettings service KeyStore namespace.

 <p> Uses KeyStore's grant mechanism to make keys usable by application process without
 revealing key material
*/
var ApplicationKeyStorage = {

/**
*/
getInstance : function(  ) {},

/**Returns grant alias, valid in Applications namespace.
*/
getGrantAlias : function(  ) {},

/**
*/
setSymmetricKeyEntry : function(  ) {},

/**
*/
deleteEntry : function(  ) {},


};