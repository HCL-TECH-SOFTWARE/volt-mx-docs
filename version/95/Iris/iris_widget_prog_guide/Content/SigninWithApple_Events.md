                                


SigninWithApple Events
======================

SigninWithApple has the following events associated with it:

* * *

<details close markdown="block"><summary>onSuccessCallback Event</summary>

* * *

An event callback is invoked by the platform when the user performs a sucsessfull authentication action using the Apple ID on the SigninWithApple widget button.

* Once the user logs in with the Apple ID, we'll get a set of values that will help to store in the keychain.
	
	<table style="width: 100%;mc-table-style: url('Resources/Snippets/Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 234px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Values collected</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><b>Description</b></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">User</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Unique user-id</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">givenName</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Name of user</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">familyName</td><td class="TableStyle-Basic-BodyD-Column1-Body1">User family Name</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">identityToken</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The JSON Web Token (JWT) served to securely communicate user identity information to the app. The ID token, signed by Apple's ID provider, includes the following information: Issuer Identifier, Subject Identifier, Audience, Expiry Time and Issuance Time. Example: Email which is used for sign in</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">email</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The email used for sign in.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">authorizationCode</td><td class="TableStyle-Basic-BodyD-Column1-Body1">A short-lived, one-time valid token that provides proof of authorization for the server component of the app. The authorization code is connected to the specific transaction using the state attribute passed in the request for authorization. The application's server component will validate the code using the Apple identity service endpoint provided for this purpose.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">authorizedScopes</td><td class="TableStyle-Basic-BodyA-Column1-Body1">This value will include a list of scopes for which authorization has been provided by the user. These could contain a subset of the scopes requested on @see ASAuthorizationAppleIDRequest. This value should be queried by the application to identify which scopes have been returned as it may differ from those requested.</td></tr></tbody></table>

### Syntax

```

onSuccessCallback ()
```

### Type

Constant

### Read/Write

Read Only

### Example

### Platform Availability

* iOS 13 or later

* * *

</details>
<details close markdown="block"><summary>onFailureCallback Event</summary>

* * *

An event onFailureCallback is invoked by the platform when the user fails a authentication action using the Apple ID on the SigninWithApple widget button.

The following table lists the Error codes that are displayed on the VoltMX Iris.

<table style="width: 100%;mc-table-style: url('Resources/Snippets/Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 99px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 298px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Error Codes</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Failure Callback with enum Values</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">1000</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VoltMXSignInWithAppleAuthorizationErrorUnknown</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The authorization attempt failed for an unknown reason.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">1001</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VoltMXSignInWithAppleAuthorizationErrorCanceled</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The user canceled the authorization attempt.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">1002</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VoltMXSignInWithAppleAuthorizationErrorInvalidResponse</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The authorization request received an invalid response.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">1003</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VoltMXSignInWithAppleAuthorizationErrorNotHandled</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The authorization request wasn’t handled.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">1004</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VoltMXSignInWithAppleAuthorizationErrorFailed</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The authorization attempt failed.</td></tr></tbody></table>

### Syntax

```

onFailureCallback
```

### Type

Constant

### Read/Write

Read only- (Constructor level)

### Example

### Platform Availability

* iOS 13 or later.

* * *
</details>