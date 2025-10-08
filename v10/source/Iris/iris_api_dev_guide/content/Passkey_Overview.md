# Overview

A passkey is a password-less login credential built on the WebAuthn standard, replacing traditional passwords. Passkeys are a safer and easier replacement for passwords. Users can sign in to apps and websites using a biometric sensor (such as a fingerprint or facial recognition), PIN, or pattern. This provides a seamless sign-in experience, freeing your users from having to remember usernames or passwords.

Passkeys rely on WebAuthn (Web Authentication), a standard jointly developed by the FIDO Alliance and the World Wide Web Consortium (W3C). WebAuthn uses public-key cryptography to authenticate the user. The website or app that the user is signing into can see and store the public key, but never the private key. The private key is kept secret and safe. And because the key is unique and tied to the website or app, passkeys are un-phishable, adding further security.

Credential Manager APIs allow users to create passkeys and store them on device.

For more information about Passkey, see the <a href="https://fidoalliance.org/passkeys/" target="_blank">official guide</a>.

For more detailed specifications, see <a href="https://www.w3.org/TR/webauthn-3/" target="_blank">WebAuthn Passkey tech-spec</a>.


>**Note**: VoltMX IRIS supports public-key type passkeys only. 

>**Note**: For a seamless user experience, it's important to show other available authentication options if passkey auth fails.


