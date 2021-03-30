/**@class com.android.server.locksettings.recoverablekeystore.certificate.CertXml
@extends java.lang.Object

 Parses and holds the XML file containing the list of THM public-key certificates and related
 metadata.
*/
var CertXml = {

/**Gets the serial number of the XML file containing public-key certificates.
*/
getSerial : function(  ) {},

/**Chooses a random endpoint certificate from the XML file, validates the chosen certificate,
 and returns the certificate path including the chosen certificate if it is valid.
@param {Object {X509Certificate}} trustedRoot the trusted root certificate
@return {Object {java.security.cert.CertPath}} the certificate path including the chosen certificate if the certificate is valid
@throws CertValidationException if the chosen certificate cannot be validated based on the
                                 trusted root certificate
*/
getRandomEndpointCert : function(  ) {},

/**Parses a byte array as the content of the XML file containing a list of endpoint
 certificates.
@param {Object {byte[]}} bytes the bytes of the XML file
@return {Object {com.android.server.locksettings.recoverablekeystore.certificate.CertXml}} a {@code CertXml} instance that contains the parsing result
@throws CertParsingException if any parsing error occurs
*/
parse : function(  ) {},


};