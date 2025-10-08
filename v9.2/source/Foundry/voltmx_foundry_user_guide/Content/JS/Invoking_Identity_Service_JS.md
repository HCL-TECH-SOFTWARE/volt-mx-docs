
User Guide: [SDKs](../Foundry_SDKs.md) > [JavaScript SDK](Installing_JS_SDK.md) > Login with provider type as Basic

# Invoking an Identity Service

You can use the following methods for an identity service.

- [Login with provider type as Basic](#login-with-provider-type-as-basic)
- [Login with provider type as OAuth/SAML](#login-with-provider-type-as-oauth-saml)
- [Login with provider type as OAuth 2.0 with Deep link URL](#login-with-provider-type-as-oauth-2-0-with-deep-link-url)
- [Get Backend Token](#get-backend-token)
- [User Profile](#user-profile)
- [Get Provider Name](#get-provider-name)
- [Get Provider Type](#get-provider-type)
- [Logout](#logout)

## Login with provider type as Basic

```
 // Sample code to authenticate to Volt MX Foundry Client

var authClient = null;
var providerName = < your - provider - name > ;
var username = < uername - for -your - provider > ;
var password = < password - for -your - provider > ;
try {
authClient = client.getIdentityService(providerName);
} catch (exception) {
console.log("Exception" + exception.message);
}
authClient.login({
"userid": username,
"password": password
}, function(response) {
console.log("Login success" + JSON.stringify(response));
}, function(error) {
console.log("Login failure" + JSON.stringify(error));
});
```

> **_Note:_** The client is the voltmx.sdk(); object.

> **_Important:_** When you select Volt MX User Repository as the identity type, the system does not allow you to provide an identity name.  
> To use Volt MX User Repository as authentication service, ensure that the value for `providerName` is set as `userstore`. If you set it with any other value (for example, Volt MX User Repository, User Store or Cloud Repository), the system throws an error.

## Login with provider type as OAuth/SAML

```
 // Sample code to authenticate to Volt MX Foundry Client
var authClient = null;
var providerName = < your - provider - name > ;
try {
authClient = client.getIdentityService(providerName);
} catch (exception) {
console.log("Exception" + exception.message);
}
authClient.login({},
function(response) {
console.log("Login success" + JSON.stringify(response));
}, function(error) {
console.log("Login failure" + JSON.stringify(error));
}
);
```

> **_Note:_** The client is the voltmx.sdk(); object.

## Login with provider type as OAuth 2.0 with Deep link URL

```
// Sample code to authenticate to Volt MX Foundry Client

var authClient = null;
var providerName = <your-provider-name>;
var username = <username-for-your-provider>;
var password = <password-for-your-provider>;
var options = {};
options["noPopup"] = true; // This parameter in options will open the login url in the same window. It will not open any pop up.
options["success_url"] = http: //mynativeapplication; // This is a deeplink url, where the control will be redirected after login.

try {
//The client is the voltmx.sdk();
authClient = client.getIdentityService(providerName);
} catch (exception) {
console.log("Exception" + exception.message);
}
authClient.login(options,
function(response) {
console.log("Login success" + JSON.stringify(response));
}, function(error) {
console.log("Login failure" + JSON.stringify(error));
}
);
```

The sample above shows various parameters similar to the parameters of the [Login with provider type as OAuth/SAML](#login-with-provider-type-as-oauth-saml). The following two optional parameters are added further.

- **noPopup**: This parameter opens the login URL in the same window. It will not open any pop up.
- **success_url**: After the log in is successful, control is redirected to the URL (deep link URL).

Deep link URL is the URL that is registered to the application. After redirection, the client calls the method **handleDeeplinkCallback**. (A global function)

**Method signature**: `function handleDeeplinkCallback(params, successcallback, failurecallback)`

```
 // windown.onload gets called upon page reload, client can choose which method should be called after the deeplink redirection. In this sample onload gets called after redirection.

window.onload = function() {
// Getting the current url to retrieve the query params.
var url = window.location.href;
var hashes = url.split("?")[1];
var queryParams = {};

    if (hashes) {
        var hash = hashes.split('&');

        for (var i = 0; i < hash.length; i++) {
            var params = hash[i].split("=");
            queryParams[params[0]] = params[1];
        }

        handleDeeplinkCallback(queryParams, function success(resp) {
            alert("Client login success");
        }, function failure(resp) {
            alert("Client login failure");
        });
    }

};
```

For more information on deep links, click [here](../../../../Iris/iris_user_guide/Content/Introduction.md).

## Get Backend Token

```
// Sample code to get backend token for provider
var userid = < username_for_logged_in_provider > ;
var password = < password_for_logged_in_provider > ;
var forceFromServer = true / false;
authClient.getBackendToken(forceFromServer, {
"userid": userid,
"password": password  
}, function(response) {
console.log("Backend token is :" + JSON.stringify(response));  
}, function(error) {    
console.log("Failed to get backend token : " + JSON.stringify(error));
});
```

> **_Note:_** If forceFromServer is true, then the SDK fetches the token from the server. If forceFromServer is false, then the SDK gives you the token present in localStorage. Please note that only few backend providers such as Salesforce support refresh. If a backend provider does not support refresh, passing `forceRefreshFromServer=true` would result in empty response from this API.

> **_Note:_** The authClient is the IdentityService object.

## User Profile

```
 // Sample code to get user profile details
var forceFromServer = true / false;
authClient.getProfile(forceFromServer,
function(response) {
console.log("User profile is :" + JSON.stringify(response));
}, function(error) {
console.log("Failed to fetch profile : " + JSON.stringify(error));
}
);
```

> **_Note:_** If forceFromServer is true, then the SDK fetches the token from the server. If forceFromServer is false, then the SDK gives you the token present in localStorage.

> **_Note:_** The authClient is the IdentityService object.

## Get Provider Name

```
 // Sample code to get provider name
Var providerName = authClient.getProviderName();
```

> **_Note:_** The authClient is the IdentityService object.

## Get Provider Type

```
 // Sample code to get provider type
Var providerType = authClient.getProviderType();
```

> **_Note:_** The authClient is the IdentityService object.

## Logout

```
 // Sample code to logout from auth serviceauthClient .logout(
function(response) {
console.log("Logout success" + JSON.stringify(response));
},
function(error) {
console.log("Logout failure" + JSON.stringify(error));
}
);
```

> **_Note:_** The authClient is the IdentityService object for the loggedIn provider.
