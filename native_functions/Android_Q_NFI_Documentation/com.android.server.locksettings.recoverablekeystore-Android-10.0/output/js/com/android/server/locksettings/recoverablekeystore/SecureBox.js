/**@class com.android.server.locksettings.recoverablekeystore.SecureBox
@extends java.lang.Object

 Implementation of the SecureBox v2 crypto functions.

 <p>Securebox v2 provides a simple interface to perform encryptions by using any of the following
 credential types:

 <ul>
   <li>A public key owned by the recipient,
   <li>A secret shared between the sender and the recipient, or
   <li>Both a recipient's public key and a shared secret.
 </ul>

 @hide
*/
var SecureBox = {

/**Randomly generates a public-key pair that can be used for the functions {@link #encrypt} and
 {@link #decrypt}.
@return {Object {java.security.KeyPair}} the randomly generated public-key pair
@throws NoSuchAlgorithmException if the underlying crypto algorithm is not supported
@hide 
*/
genKeyPair : function(  ) {},

/**Encrypts {@code payload} by using {@code theirPublicKey} and/or {@code sharedSecret}. At
 least one of {@code theirPublicKey} and {@code sharedSecret} must be non-null, and an empty
 {@code sharedSecret} is equivalent to null.

 <p>Note that {@code header} will be authenticated (but not encrypted) together with {@code
 payload}, and the same {@code header} has to be provided for {@link #decrypt}.
@param {Object {PublicKey}} theirPublicKey the recipient's public key, or null if the payload is to be encrypted
     only with the shared secret
@param {Object {byte[]}} sharedSecret the secret shared between the sender and the recipient, or null if the
     payload is to be encrypted only with the recipient's public key
@param {Object {byte[]}} header the data that will be authenticated with {@code payload} but not encrypted, or
     null if the data is empty
@param {Object {byte[]}} payload the data to be encrypted, or null if the data is empty
@return {Number} the encrypted payload
@throws NoSuchAlgorithmException if any underlying crypto algorithm is not supported
@throws InvalidKeyException if the provided key is invalid for underlying crypto algorithms
@hide 
*/
encrypt : function(  ) {},

/**Decrypts {@code encryptedPayload} by using {@code ourPrivateKey} and/or {@code sharedSecret}.
 At least one of {@code ourPrivateKey} and {@code sharedSecret} must be non-null, and an empty
 {@code sharedSecret} is equivalent to null.

 <p>Note that {@code header} should be the same data used for {@link #encrypt}, which is
 authenticated (but not encrypted) together with {@code payload}; otherwise, an {@code
 AEADBadTagException} will be thrown.
@param {Object {PrivateKey}} ourPrivateKey the recipient's private key, or null if the payload was encrypted only
     with the shared secret
@param {Object {byte[]}} sharedSecret the secret shared between the sender and the recipient, or null if the
     payload was encrypted only with the recipient's public key
@param {Object {byte[]}} header the data that was authenticated with the original payload but not encrypted, or
     null if the data is empty
@param {Object {byte[]}} encryptedPayload the data to be decrypted
@return {Number} the original payload that was encrypted
@throws NoSuchAlgorithmException if any underlying crypto algorithm is not supported
@throws InvalidKeyException if the provided key is invalid for underlying crypto algorithms
@throws AEADBadTagException if the authentication tag contained in {@code encryptedPayload}
     cannot be validated, or if the payload is not a valid SecureBox V2 payload.
@hide 
*/
decrypt : function(  ) {},


};