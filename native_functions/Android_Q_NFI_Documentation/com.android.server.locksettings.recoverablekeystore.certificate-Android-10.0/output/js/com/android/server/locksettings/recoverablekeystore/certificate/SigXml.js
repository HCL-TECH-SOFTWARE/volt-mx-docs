/**@class com.android.server.locksettings.recoverablekeystore.certificate.SigXml
@extends java.lang.Object

 Parses and holds the XML file containing the signature of the XML file containing the list of THM
 public-key certificates.
*/
var SigXml = {

/**Verifies the signature contained in this XML file against a trusted root certificate and the
 binary content of another file. The signer's public-key certificate and possible intermediate
 CA certificates are included in this XML file, and will be validated against the trusted root
 certificate.
@param {Object {X509Certificate}} trustedRoot     the trusted root certificate
@param {Object {byte[]}} signedFileBytes the original file content that has been signed
@throws CertValidationException if the signature verification fails, or the signer's
                                 certificate contained in this XML file cannot be validated
                                 based on the trusted root certificate
*/
verifyFileSignature : function(  ) {},

/**Parses a byte array as the content of the XML file containing the signature and related
 certificates.
@param {Object {byte[]}} bytes the bytes of the XML file
@return {Object {com.android.server.locksettings.recoverablekeystore.certificate.SigXml}} a {@code SigXml} instance that contains the parsing result
@throws CertParsingException if any parsing error occurs
*/
parse : function(  ) {},


};