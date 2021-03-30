/**@class com.android.server.locksettings.recoverablekeystore.KeyStoreProxyImpl
 implements com.android.server.locksettings.recoverablekeystore.KeyStoreProxy

@extends java.lang.Object

 Implementation of {@link com.android.server.locksettings.recoverablekeystore.KeyStoreProxy} that delegates all method calls to the {@link KeyStore}.
*/
var KeyStoreProxyImpl = {

/**
*/
containsAlias : function(  ) {},

/**
*/
getKey : function(  ) {},

/**
*/
setEntry : function(  ) {},

/**
*/
deleteEntry : function(  ) {},

/**Returns AndroidKeyStore-provided {@link KeyStore}, having already invoked
 {@link KeyStore#load(KeyStore.LoadStoreParameter)}.
@throws KeyStoreException if there was a problem getting or initializing the key store.
*/
getAndLoadAndroidKeyStore : function(  ) {},


};