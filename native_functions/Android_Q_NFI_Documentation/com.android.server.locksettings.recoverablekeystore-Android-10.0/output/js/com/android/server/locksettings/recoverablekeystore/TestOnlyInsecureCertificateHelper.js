/**@class com.android.server.locksettings.recoverablekeystore.TestOnlyInsecureCertificateHelper
@extends java.lang.Object

 The class provides helper methods to support end-to-end test with insecure certificate.
*/
var TestOnlyInsecureCertificateHelper = {

/**Returns a root certificate installed in the system for given alias.
 Returns default secure certificate if alias is empty or null.
 Can return insecure certificate for its alias.
*/
getRootCertificate : function(  ) {},

/**
*/
getDefaultCertificateAliasIfEmpty : function(  ) {},

/**
*/
isTestOnlyCertificateAlias : function(  ) {},

/**
*/
isValidRootCertificateAlias : function(  ) {},

/**Checks whether a password is in "Insecure mode"
@param {Number} credentialType the type of credential, e.g. pattern and password
@param {Object {byte[]}} credential the pattern or password
@return {Boolean} true, if the credential is in "Insecure mode"
*/
doesCredentialSupportInsecureMode : function(  ) {},

/**
*/
keepOnlyWhitelistedInsecureKeys : function(  ) {},


};