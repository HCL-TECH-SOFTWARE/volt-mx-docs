                              

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > Login with provider type as Basic

Invoking an Identity Service
============================

The following are the methods you can use for an identity service.

*   [Login with provider type as Basic](#login-with-provider-type-as-basic)
*   [Login with provider type as OAuth/SAML](#login-with-provider-type-as-oauth-saml)
*   [Custom OAuth or Custom Login](#custom-oauth-custom-login)
*   [Get Backend Token](#get-backend-token)
*   [User Profile](#user-profile)
*   [Logout](#logout)

Login with provider type as Basic
---------------------------------

Import the following Libraries:

*   com.voltmx.sdk.callback.LoginCallback
*   com.voltmx.sdk.client.VoltMXFactory
*   com.voltmx.sdk.client.VoltMXUser
*   com.voltmx.sdk.common.IdentityServiceException
*   com.voltmx.sdk.common.VoltMXException
*   com.voltmx.sdk.services.identity.IdentityService

### Sample Code

```
 // Sample code to log in using basic type provider
String providerName = "<your-provider-name>";
String username = "<username-for-your-provider>";
String password = "<password-for-your-provider>";

KonyClient myClient = new KonyClient();
IdentityService authClient = null;
try {
    authClient = myClient.getIdentityService(providerName);
} catch (KonyException exception) {
    Log.d("Failure", exception.getMessage());
}
authClient.loginInBackground(username, password, new LoginCallback() {
    @Override
    public void onSuccess(KonyUser user) {
        Log.d("Login", "Success");       
    }
    @Override       public void onFailure(IdentityServiceException identityServiceException) {
        Log.d("Login Failure", identityServiceException.getErrorMessage());
    }
});
```

> **_Important:_** When you select Volt MX User Repository as the identity type, the system does not allow you to provide identity name.  
  
To use Volt MX User Repository as authentication service, ensure that the value for `providerName` must be set as `userstore`. If you set it with any other value (for example, Volt MX User Repository, User Store or Cloud Repository), the system throws an error.

Login with provider type as OAuth/SAML
--------------------------------------

Import the following Libraries:

*   com.voltmx.sdk.callback.WebViewCallback
*   com.voltmx.sdk.client.VoltMXFactory
*   com.voltmx.sdk.client.VoltMXUser
*   com.voltmx.sdk.common.IdentityServiceException
*   com.voltmx.sdk.common.VoltMXException
*   com.voltmx.sdk.services.identity.IdentityService

### Sample Code

```
 // Sample code to log in using Oauth/SAML type provider
String providerName = "<your-provider-name>";
String loginOptions = {};
Context context = getApplicationContext();
Webview webview = (WebView) findViewById(R.id.webview);
KonyClient myClient = new KonyClient();
IdentityService authClient = null;
try {
    authClient = myClient.getIdentityService(providerName);
} catch (KonyException exception) {
    Log.d("Failure", exception.getMessage());
}
authClient.loginInBackground(context, webview, new WebViewCallback() {
    @Override
    public void onSuccess(KonyUser user) {
        Log.d("Login", "Success");       
    }
    @Override   
    public void onFailure(IdentityServiceException identityServiceException) {   
        Log.d("Login Failure", identityServiceException.getErrorMessage());
    }
});

```

Custom OAuth / Custom Login
---------------------------

### Sample Code

```
 //Sample code for custom Auth or Custom Login

String servname = "<your-provider-name>";
Hashtable < String, String > customTable = new Hashtable < String, String > ();
customTable.put("userid", "<username-for-your-provider>");
customTable.put("custom1", "<custom-value-one>");
customTable.put("password", "<password-for-your-provider>");
customTable.put("custom2", "<custom-value-two>");
customTable.put("custom5", "<custom-value-five>");
customTable.put("custom3", "<custom-value-three>");
customTable.put("custom4", "<custom-value-four>");
authClient.loginInBackground(customTable, new LoginCallback() {
    @Override
    public void onFailure(IdentityServiceException identityServiceException) {
        Log.d("Login Failure", identityServiceException.getErrorMessage());
    }
    @Override
    public void onSuccess(KonyUser user) {
        Log.d("Login", "Success");
    }
});
```

Get Backend Token
-----------------

Import the following Libraries:

com.voltmx.sdk.services.identity.IdentityService

### Sample Code

```
 
// Sample code to get backend token for provider 
String backendtoken = authClient.getBackendToken().toString();
```

> **_Note:_** This method returns a valid token only after login is successful.

User Profile
------------

Import the following Libraries:

*   com.voltmx.sdk.client.VoltMXUser
*   com.voltmx.sdk.services.identity.IdentityService

### Sample Code

```
 
// Sample code to get user profile details
KonyUser user = < object - returned - in -login - success - callback > ;
String firstName = user.getFirstName();
String lastName = user.getLastName();
String email = user.getEmail();
String userid = user.getUserId();
```

> **_Note:_** VoltMXUser object is returned after login is successful. The operations on the VoltMXUser object are given above.

Logout
------

Import the following Libraries:

*   com.voltmx.sdk.common.IdentityServiceException
*   com.voltmx.sdk.services.identity.IdentityService
*   com.voltmx.sdk.callback.LogoutCallback

### Sample Code

```
 // Sample code to logout from auth service
authClient.logoutInBackground(new LogoutCallback {
    @Override
    public void onSuccess(boolean result) {
        Log.d("Logout", "Successful");
    }
    @Override
    public void onFailure(IdentityServiceException exception) {
        Log.d("Logout failed", exception.getErrorMessage());
    }
});
```
