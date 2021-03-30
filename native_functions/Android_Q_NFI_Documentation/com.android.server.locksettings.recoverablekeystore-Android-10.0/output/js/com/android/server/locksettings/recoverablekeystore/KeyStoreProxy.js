/**@class com.android.server.locksettings.recoverablekeystore.KeyStoreProxy
 Proxies {@link java.security.KeyStore}. As all of its methods are final, it cannot otherwise be
 mocked for tests.

 @hide
*/
var KeyStoreProxy = {

/**
@see KeyStore#containsAlias(String)
*/
containsAlias : function(  ) {},

/**
@see KeyStore#getKey(String, char[])
*/
getKey : function(  ) {},

/**
@see KeyStore#setEntry(String, KeyStore.Entry, KeyStore.ProtectionParameter)
*/
setEntry : function(  ) {},

/**
@see KeyStore#deleteEntry(String)
*/
deleteEntry : function(  ) {},


};