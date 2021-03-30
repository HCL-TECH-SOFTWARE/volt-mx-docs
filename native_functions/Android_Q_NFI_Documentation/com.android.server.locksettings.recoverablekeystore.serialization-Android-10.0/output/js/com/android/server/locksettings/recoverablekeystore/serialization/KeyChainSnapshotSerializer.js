/**@class com.android.server.locksettings.recoverablekeystore.serialization.KeyChainSnapshotSerializer
@extends java.lang.Object

 Serializes a {@link KeyChainSnapshot} instance to XML.
*/
var KeyChainSnapshotSerializer = {

/**Serializes {@code keyChainSnapshot} to XML, writing to {@code outputStream}.
@throws IOException if there was an IO error writing to the stream.
@throws CertificateEncodingException if the {@link CertPath} from
     {@link KeyChainSnapshot#getTrustedHardwareCertPath()} is not encoded correctly.
*/
serialize : function(  ) {},


};