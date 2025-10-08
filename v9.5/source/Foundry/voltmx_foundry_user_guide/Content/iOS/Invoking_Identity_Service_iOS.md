                             

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > Login with provider type as Basic

Invoking an Identity Service
============================

The following are the methods you can use for an identity service.

*   [Login with provider type as Basic](#login-with-provider-type-as-basic)
*   [Login with provider type as OAuth/SAML](#login-with-provider-type-as-oauth-saml)
*   [Custom OAuth Login](#custom-oauth-login)
*   [Get Backend Token](#get-backend-token)
*   [Logout](#logout)
*   [Login Status](#login-status)

Login with provider type as Basic
---------------------------------

```
 // Sample code to log in using basic type provider
KNYIdentityService * identityService = [
    [KNYIdentityService alloc]
    initWithIdentityName: @"<identity-name>"
];

[identityService loginInBackgroundWithUsername: @"<user-name>"
    password: @"<password>"
    completion: ^ (BOOL succeeded, NSError * error) {
        if (succeeded) {
            // handle the success case here
        } else {
            // handle the failure case here
            // use the details in 'error'
        }
    }
];
```

> **_Note:_** Call these methods only after successful completion of -\[KNYClient initializeInBackgroundWithAppKey:appSecret:serviceURLString:completion\]. For more details, refer to [Init method](#NoteInit).  

> **_Important:_** When you select Volt MX User Repository as the identity type, the system does not allow you to provide an identity name.  
To use Volt MX User Repository as authentication service, ensure that the value for `initWithIdentityName`: method must be set as `userstore` in the KNYIdentityService class. If you set it with any other value (for example, Volt MX User Repository, User Store or Cloud Repository), the system throws an error.

Login with provider type as OAuth/SAML
--------------------------------------

```
// Sample code to log in using Oauth/SAML type provider
KNYIdentityService * identityService = [
    [KNYIdentityService alloc] initWithIdentityName: @"&lt;identity-name&gt;"
];

UIView * loginView = nil;
// Setup the view such that is visible in the app.
// The following call will add a WKWebView as subview to the 'loginView' and remove after the authentication
[identityService loginWithParentView: loginView completion: ^ (BOOL succeeded, NSError * error) {
    if (succeeded) {
        // handle the success case here
    } else {
        // handle the failure case here
        // use the details in 'error'
    }
}];
```

> **_Important:_** This is a synchronous method, and it displays a WKWebView. This method must be invoked from your iOS application's main thread only.

Custom OAuth Login
------------------

```
 // Sample code to Custom OAuth / Custom login
KNYIdentityService *identityService = 
[
    [KNYIdentityService alloc]
    initWithIdentityName: @"<identity-name>"
];

[identityService loginInBackgroundWithcustomParams: @{
        "username": @"username"
    }
    completion: ^ (BOOL succeeded, NSError * error) {
        if (succeeded) {
            // handle the success case here
        } else {
            // handle the failure case here
            // use the details in 'error'
        }
    }
];
```

Get Backend Token
-----------------

```
 // Sample code to get backend token for provider 
NSDictionary * backendToken = [identityService backendToken];
```

Logout
------

```
 // Sample code to logout from auth service
if (identityService) {
    [identityService logoutInBackgroundUsingCompletionBlock: ^ (BOOL succeeded,
        NSError * errorL) {
        if (succeeded)
        //code if logout is successful
          
        else
        //code if logout fails
    }];
}
```

Login Status
------------

```
 // Sample code to get login status
BOOL status = [identityService isLoggedIn];
If(status)
// code if logged in
else
//code if not logged in
```
