                               

Application SSO
===============

### Overview of Application SSO

Single Sign-On (SSO) is a session and user authentication process that permits a mobile app user to enter one username and password in order to access multiple applications that use the same authentication provider. Volt MX Foundry provides an SSO mechanism that you can enable for mobile applications and identity services.

If you enable SSO for two mobile apps that use the same Volt MX Foundry Identity provider, after launching the first app and signing in, the user can launch the second app without having to re-enter authentication credentials. A user is authenticated in silent mode during the launch for the second application.

If you enable SSO for two mobile apps that use different Identity providers, and you enable SSO for the two different Identity providers, after the user signs in to each app, Volt MX Foundry establishes federation between the two Identity providers. After the user launches the first app and signs in, and then launches the second app and signs in, Volt MX Foundry establishes SSO between the two apps for the lifetime of the apps. The user can then enter their credentials once to use both apps.

To implement SSO on two Volt MX Foundry apps (App1 and App2) that use different identity services (provider1 and provider2), you must enable SSO on both apps and both identity services, and each app must use both identity services. For example, App1 must use provider2, and App2 must use provider1. To learn how to add an identity service to a Volt MX Foundry app, see [How to Use an Existing Identity Service](#UseExistingIdentity).

You can enable SSO for an application in API Management or in Configure Services of a Volt MX Foundry application. To learn how to enable SSO in API Management for a particular identity service, refer to [How to View Associated Apps](API_Management.md#how-to-view-associated-apps-in-apis). To learn how to enable SSO for an identity service that is used by a Volt MX Foundry application, refer to [How to Use Actions in Existing Identity Services](#ActionsinExistingIdentity).

> **_Note:_** The design is based on Single Sign-On and not on Single Sign-Out. If a user logs out from one app, the SSO session is terminated and the authenticated session in that app is terminated. The user will not be logged out of the other apps (which were simultaneously logged in), which are linked with SSO and can continue using it. The other apps that are using the SSO based service cannot log in without entering credentials using SSO. These apps can log in by entering credentials and reinitiating SSO.

#### Supported Platforms for SSO

  
| Platform | SDK Version |
| --- | --- |
| Android | 7.3 and higher versions |
| iOS | 7.3 and higher versions |
| Web | V8 SP4 and higher versions |

> **_Note:_** Support for multi-Login with SSO is available from V8 SP4 and higher versions.

### Use Case

The following describes use cases for adding SSO to Volt MX Foundry applications.

Same Username and Password, Same Identity Service

Tom has two mobile apps installed on a phone: a News app and a Weather app. Both apps consume Volt MX Foundry application services to get the data from the relevant back ends.

The company that provides the News and Weather apps decides to add authentication to the apps. The back-end developer uses Volt MX Foundry to create a new identity service from the user store. The back-end developer adds the identity service to the Volt MX Foundry applications for News and Weather.

The back-end developer enables SSO for both the News and Weather apps on Volt MX Foundry. The back-end developer has two ways to enable SSO for the Volt MX Foundry applications. The developer can view Identity providers in API Management and then add applications for the specific Identity provider, or he can open the Volt MX Foundry application and then enable SSO for the application.

The back-end developer re-publishes the News and Weather apps again. The back-end developer adds Tom to the user store. Client-side mobile app binaries are rebuilt after adding the necessary calls for authentication. Mobile apps are published to the store. Tom downloads the apps from the store and receives an email from the IT team regarding the username/password details.

Tom now launches the first app, for example the News app, on the Mobile device. He enters the user credentials and signs in, and views news items after successful authentication. Next, Tom launches the second app, for example the Weather app. The Weather app launches and Tom can view the weather information. Tom was not required to sign in to the Weather app. When Tom signed in to the first app, the identity service authenticated Tom for all mobile apps that have SSO enabled and that use the same identity service. When Tom launches other apps during the same session that use the same identity service, Tom does not have to sign in to the other apps.

Different Username and Password, Different Identity Services

Tom has two mobile apps installed on a phone: a News app and a Weather app. Both mobile apps use the same Volt MX Foundry app and consume Volt MX Foundry application services to get the data from the relevant back ends.

The company that provides the News and Weather apps decides to add authentication to the apps. The back-end developer uses Volt MX Foundry to create an identity service for the News app and then adds the identity service to the News app. The back-end developer creates a different identity service for the Weather app, and then adds the identity service to the Weather app.

The back-end developer enables SSO for both the News and Weather apps on Volt MX Foundry and enables SSO for the two different identity providers. Volt MX Foundry develops federation between all SSO-enabled identity providers that are used on in the same Volt MX Foundry account app. A Volt MX Foundry app must include all the identity services involved in SSO.

The back-end developer re-publishes the News and Weather apps again. The back-end developer adds Tom to the user store. Client-side mobile app binaries are rebuilt after adding the necessary calls for authentication. Mobile apps are published to the store. Tom downloads the apps from the store and receives an email from the IT team regarding his username/password details.

Tom now opens the News app on the Mobile phone, enters the user credentials for sign-in, and views News items after successful authentication. Next, Tom launches the Weather app for the first time and must sign in. The Weather app and shows the weather information. After Tom signs in to the Weather app, the identity service for the Weather app is linked (develops federation) with the identity service for the News app. In all subsequent sessions for the lifetime of the two apps, when Tom launches and signs in to one of these apps, Tom can launch the second app and is not required to sign in.

#### How SSO is Configured Between Applications

In the use case examples, the News app downloads an SSO token from Volt MX Foundry along with an App Session token. The client app stores the SSO token on the mobile device so that other apps can access the SSO token.

When a user starts the Weather app, it looks for the SSO token on the mobile device. If the Weather app finds the SSO token, the Weather app presents the SSO token to the Volt MX Foundry authentication service. If the Volt MX Foundry authentication service validates the token, it issues a new App Session token. The SSO token is primarily used to retrieve App tokens from Volt MX Foundry. Any subsequent app that uses the same Volt MX Foundry Identity service can consume the same SSO token and present it to the Volt MX Foundry authentication service to get the App Session token.

#### Sessions and SSO

Tom launches the News app and then also launches the Weather app that has SSO enabled. Tom closes the Weather app by mistake and relaunches it. The Weather app uses the SSO mechanism if the SSO token is still valid.

If the App Session token is valid, Tom does not have to enter the username and password to launch the Weather app. If the token is not valid, Tom must provide his sign-in credentials to launch the app.

After Tom launches the Weather app through the SSO mechanism, the News app session times out. Because the Weather app session is still active, Tom can launch News app and sign in with SSO, and is not required to enter a username and password.

Tom launches the News app and signs in, and then launches the Weather app through the SSO mechanism. Tom does not access the Weather app and News app for a time, and both apps timeout on the session. Tom launches either the News app or Weather app, and must sign in to the app that is launched. Tom then launches the second app and does not have to enter the username and password. The second app uses the SSO mechanism for sign-in.

For more details on App SSO use cases, refer to [Use Case Scenarios - App SSO](Application_SSO.md)
