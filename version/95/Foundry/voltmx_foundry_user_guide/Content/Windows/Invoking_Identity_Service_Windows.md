                              

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > Login with provider type as Basic

Invoking an Identity Service
============================

Perform the following steps to invoke an identity service.

*   [Login with provider type as Basic](#login-with-provider-type-as-basic)
*   [Get Backend Token](#get-backend-token)
*   [User Profile](#get-user-profile)
*   [Get Provider Name](#get-provider-name)
*   [Get Provider Type](#get-provider-type)
*   [Logout](#logout)

> **_Note:_** The .NET SDK does not support the Custom Auth Identity Service.  
The .NET SDK does not support the OAuth/SAML Identity Service.

Login with provider type as Basic
---------------------------------

To login, first use the SDK class **GetIdentityService()** method to retrieve the IdentityService. Then log in with the **login()** method of the IdentityService class.

### GetIdentityService

The **GetIdentityService** method retrieves an IdentityService object with the specified provider name.

#### Signature

```
 IdentityService GetIdentityService(string providerName)
```

#### Input Parameters

providerName

The name of the provider.

#### Return Values

Returns an IdentityService instance.

#### Exceptions

System.Exception is thrown when not initialized or the service is not defined.

#### Example

```
 // Sample code to retrieve the IdentityService instance.Kony.IdentityService identity;
string providerName = < your - provider - name > ;
try {
    identity = sdkObject.GetIdentityService(providerName);
} catch (Exception e) {
    Console.WriteLine("Invalid Provider");
}
```

When you have an IdentityService object, use the Login method of the IdentityService class to login.

### Login

The **Login** method will login the user with the given credentials. This method may take several seconds to execute, so it is available as either a synchronous and asynchronous call.

> **_Note:_** The .NET SDK does not support multilogin, offfline login, or SSO.

#### Signature

Synchronous

```
 string Login(string userId, string password, Dictionary<string, string> headers, Dictionary<string, string> parameters)
```

Asynchronous

```
async Task < string > LoginAsync(string userId, string password, Dictionary < string, string > headers, Dictionary string,string> parameters)
```

#### Input Parameters

userId

The user name. This value cannot be null.

password

The user's password. This value cannot be null.

headers

HTTP Request header key value pairs. (Optional)

parameters

HTTP Request parameter key value pairs. (Optional)

#### Return Values

Returns the claims token value if the login is successful.

#### Remarks

If the provider is Volt MX, parameters **userID** and **password** must not be null or empty.

#### Exceptions

A Volt MX FoundryException is thrown if the provider is Volt MX and **userID** or **password** are empty or null.

#### Example

Synchronous

```
  // Sample code to login synchronously.
// sdkObject is the SDK object.
Kony.IdentityService identity;
string providerName = < your - provider - name > ;
string username = < username -
for -your - provider > ;
string password = < password -
for -your - provider > ;

try {
    identity = sdkObject.GetIdentityService(providerName);
    string claimsToken = identity.Login(username, password);
    Console.WriteLine("Login Success");
} catch (Exception e) {
    if (identity == null) {
        Console.WriteLine("Invalid provider");
    } else {
        Console.WriteLine("Login Failure");
    }
}
```

Asynchronous

```
  // Sample code to login asynchronously.// sdkObject is the SDK object.
Kony.IdentityService identity;
string providerName = < your - provider - name > ;
string username = < username -
for -your - provider > ;
string password = < password -
for -your - provider > ;

try {
    identity = sdkObject.GetIdentityService(providerName);
    string claimsToken = await identity.LoginAsync(username, password);
    Console.WriteLine("Login Success");
} catch (Exception e) {
    if (identity == null) {
        Console.WriteLine("Invalid provider");
    } else {
        Console.WriteLine("Login Failure");
    }
}
		
```

Get Backend Token
-----------------

Use the IdentityService class method **GetBackendToken()** to get the provider datasource token.

### GetBackendToken

The **GetBackendToken** method fetches the provider datasource token. This method may take several seconds to execute so it is available as both a synchronous and asynchronous call.

#### Signature

Synchronous

```
 ProviderToken GetBackendToken(bool fromServer, Dictionary<string, string> parameters)
```

Asynchronous

```
 async Task<ProviderToken> GetBackendTokenAsync(bool fromServer, Dictionary<string, string> parameters)
```

#### Input Parameters

fromServer

Flag to force fetch from server only.

parameters

HTTP request parameters.

#### Return Values

Returns a provider token object.

#### Remarks

If fromServer is **true**, the SDK fetches the token from the server. If fromServer is **false**, the SDK returns the token present in local storage.

#### Exceptions

Volt MX  FoundryException is thrown if the provider claims token is invalid.

#### Example

Synchronous

```
// Sample code to get backend token for provider synchronously.
string username = < username - for -logged - in -provider > ;
string password = < password - for -logged - in -provider > ;
bool fromServer = < true / false > ;
Dictionary < string, string > parameters = new Dictionary < string, string > ();
parameters.userid = username;
parameters.password = password;
Kony.ProviderToken backendToken;

try {
    backendToken = userstore.GetBackendToken(fromServer, parameters);
    Console.WriteLine("Backend Token fetched");
} catch (Exception e) {
    Console.WriteLine("Failed to get backend token");
}
```

Asynchronous

```
// Sample code to get backend token for provider asynchronously.
string username = < username - for -logged - in -provider > ;
string password = < password - or -logged - in -provider > ;
bool fromServer = < true / false > ;
Dictionary < string, string > parameters = new Dictionary < string, string > ();
parameters.userid = username;
parameters.password = password;
Kony.ProviderToken backendToken;

try {
    backendToken = await userstore.GetBackendTokenAsync(fromServer, parameters);
    Console.WriteLine("Backend Token fetched");
} catch (Exception e) {
    Console.WriteLine("Failed to get backend token");
}
		
```

Get User Profile
----------------

Use the IdentityService class method **GetProfile()** to get the user profile.

### GetProfile

The **GetProfile** method fetches the user profile. This method may take a few seconds to execute, so it is available as either a synchronous or asynchronous call.

#### Signature

Synchronous

```
 Profile GetProfile(bool fromServer)
```

Asynchronous

```
 async Task<Profile> GetProfileAsync(bool fromServer)
```

#### Input Parameters

fromServer

Flag to force fetch from server only. Default value is false.

#### Return Values

Returns a user profile object.

#### Remarks

If fromServer is **true**, the SDK fetches the profile from the server. If fromServer is **false**, the SDK returns the profile present in local storage.

#### Exceptions

Volt MX  Foundry Exception is thrown if the provider claims token is invalid.

#### Example

Synchronous

```
  // Sample code to get user profile details synchronously.
// identity is the IdentityService object.
bool fromServer = < true / false > ;
Kony.Profile profile = identity.GetProfile(fromServer);
if (profile == null) {
    Console.WriteLine("Unable to get profile");
}
```

Asynchronous

```
  // Sample code to get user profile details asynchronously.
// identity is the IdentityService object.
bool fromServer = < true / false > ;
Kony.Profile profile = await identity.GetProfileAsync(fromServer);
if (profile == null) {
    Console.WriteLine("Unable to get profile");
}			
```

Get Provider Name
-----------------

Use the IdentityService class **Name** property to get the authentication provider name.

### Name

```
 // Sample code to get provider name
// identity is the IdentityService object.
string providerName = identity.Name;
```

Get Provider Type
-----------------

Use the IdentityService class **Type** property to get the authentication provider type.

### Type

```
 // Sample code to get provider type
// identity is the IdentityService object.
string providerType = identity.Type;
```

Logout
------

Use the **Logout()** method of the IdentityService class to logout from the service.

### Logout

The **Logout** method is used to logout of the service. This method may take a few seconds to execute, so it is available as both a synchronous and asynchronous call.

#### Signature

Synchronous

```
 bool Logout()
```

Asynchronous

```
 async Task<bool> LogoutAsync()	
```

#### Input Parameters

None.

#### Return Values

Returns true if the logout is successful.

#### Exceptions

Volt MX  FoundryException is thrown when a web services call exception occurs.

#### Example

Synchronous

```
 // Sample code to logout from auth service synchronously.
// identity is the IdentityService object.
bool isLoggedOut;
try {
    isLoggedOut = identity.Logout();
} catch (Exception e) {
    Console.WriteLine("Unable to logout");
}
```

Asynchronous

```
 // Sample code to logout from auth service asynchronously.
// identity is the IdentityService object.
bool isLoggedOut;
try {
    isLoggedOut = await identity.LogoutAsync();
} catch (Exception e) {
    Console.WriteLine("Unable to logout");
}	
```
