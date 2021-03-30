/**@class com.android.server.locksettings.recoverablekeystore.certificate.CertUtils
@extends java.lang.Object

Utility functions related to parsing and validating public-key certificates. */
var CertUtils = {

/**Decodes a base64-encoded string.
@param {String} str the base64-encoded string
@return {Number} the decoding decoding result
@throws CertParsingException if the input string is not a properly base64-encoded string
*/
decodeBase64 : function(  ) {},

/**Validates a given {@code CertPath} against the trusted root certificate.
@param {Object {X509Certificate}} trustedRoot the trusted root certificate
@param {Object {CertPath}} certPath the certificate path to be validated
@throws CertValidationException if the given certificate path is invalid, e.g., is expired,
                                 or does not have a valid signature
*/
validateCertPath : function(  ) {},


};