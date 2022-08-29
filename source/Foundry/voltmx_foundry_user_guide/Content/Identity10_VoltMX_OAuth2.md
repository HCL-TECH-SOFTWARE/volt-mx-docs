                               

User Guide: [Identity](Identity.md) > [Configure the Identity Service](ConfigureIdentiryService.md) > Volt MX Foundry OAuth 2.0

Volt MX  Foundry OAuth 2.0 Identity Service
-----------------------------------------

Volt MX  Foundry identity supports OAuth 2.0 protocol for authenticating back-end identity providers that support `RFC6749`. For more details, refer to [https://tools.ietf.org.html/rfc6749](https://datatracker.ietf.org/doc.md/rfc6749)

With **VoltMX Foundry OAuth 2.0** identity service, a user can access some of the external OAuth service providers such as Salesforce, Google, Amazon, Microsoft, Instagram, Yahoo, and Box for authentication.

Based on the user's request made by using SDKs, the Volt MX Foundry OAuth 2.0 identity service selects the Web server authorization grant flow (3-legged OAuth) for performing user authentication.

*   **Example for 3-legged OAuth**: When a user logs into a Volt MX Foundry application by using the Google OAuth endpoint, the authorization service (for example, Google OAuth endpoint) redirects the user to Google login page. During this stage, the callback URL is also set. The user enters login details such as userID and password. After successful authentication, the user is logged into Google account. Based on the Volt MX Foundry OAuth 2.0 identity configuration, identity service filters the user profile data from Google and stores the details in the identity session.
    

User Profiles in Volt MX Foundry OAuth 2.0

Different service providers implement user profiles as per their own standards. Volt MX Foundry OAuth 2.0 identity service retrieves user attributes from a user profile and saves these attributes in VoltMX Foundry Identity Sessions after successful login response.

> **_Note:_** A profile endpoint provides the profile of the logged in user.

Volt MX  Foundry OAuth 2.0 helps users to configure authorization provider to access User Profile data in one of the following ways:

*   User profile data is provided as part of the response of GET on a fixed URL.
*   User profile data is provided as part of the response of GET on a URL, but the URL itself is not fixed. However, the URL is available either in the:
    *   Response of another call  
        or
    *   In the token response
*   User profile data is available as part of the token response.

Advantages of Volt MX Foundry OAuth 2.0 identity service

*   You can use the OAuth 2.0 identity service to retrieve and save user attributes in Volt MX Foundry identity sessions after a successful login response, and then use the attributes as client filters during Offline Sync calls.
    
    > **_Note:_**  If you enable synchronization capability in your app, Volt MX Foundry OAuth 2.0 identity service uses the user attributes retrieved from the user profile as client filters during Offline Sync calls.  
      
    For example, the logged in user's role (such as Manager or Employee of an organization) received as part of a User Profile after a successful OAuth login can be used as a client side filter for Offline Sync. For more details, see the [Synchronization > client side filters](Legacy_Sync.md#SyncClientsideFilters) topic.
    
    > **_Note:_** To configure Okta identity service, you can the same steps provided for the Auth 2.0 Identity Service section as well.
    

### How to Configure a Volt MX Foundry OAuth 2.0 Identity Service

To configure an identity service using Volt MX Foundry OAuth authentication mode, follow these steps:

1.  Under the **[**Identity** service designer](ConfigureIdentiryService.md#IdentitySDpage)** page, type a name for the service in the **Name** text box.
    
<details close markdown="block"><summary>Click to View image</summary>

   ![](Resources/Images/OAuth_322x629.png)
</details>
    
2.  From the **Type of Identity** list, select **OAuth2.0**.
    
    > **_Note:_** Fields marked with an asterisk are required.
    
3.  In the **Provider Details** text box, configure the following endpoints:
    1.  **Grant Type**: A new authorization grant type is defined by providing a grant type parameter in Volt MX Foundry Console. Select the required grant type from the drop-down menu. The following are the different grant types you can select:
        1.  **Authorization code**: An authorization code grant type is used if the client wants to request access to protected resources on behalf of another third-party user. When the client requests for the authorization, the authorization server redirects to the third party URL. The client enters the authorization code and gains access to the protected resources.  
              
            From V9 ServicePack 2, Foundry supports [rfc7636](https://datatracker.ietf.org/doc.md/rfc7636) for OAuth providers that use PKCE in the Authorization Code grant flow. For more information, refer to [PKCE Support in Foundry](#pkce-support-in-foundry).
            
        2.  **Password**: On selecting this grant type, the client needs to provide the **Token Endpoint**. The client provides their access credentials to access the URL provided in the Token Endpoint. These credentials are validated by the back-end server. If the credentials are valid, it redirects back to the Console.
            
        3.  **JWT Bearer**: When the JWT bearer grant type is selected, the provider picks the existing identity provider and pass the values as input to JWT bearer provider for the response. Apart from client specified parameters, the system picks the existing MF auth token and gets the relevant values from the session. The values are passed as input to the current JWT bearer provider login. The existing identity session is selected from the **Token Identity provider** drop-down menu.
            
        4.  **Extension**: When the extension grant type is selected, the system displays the **Extension Grant** text box to enter the grant type value. For extension grant type, the oAuth does not have any fixed value. The grant type value is dynamic, which is a client specified parameter.
            
        5.  **Client Credentials**: When the client credentials grant type is selected, the client can request an access token using only its client credentials when the client is requesting access to the protected resources under its control, or to those of another resource owner that has been previously set up with the authorization server.
    2.  **Authorize Endpoint**: Enter the URL that is provided by the endpoint service provider. For example, Salesforce or Google.  
        Sample authorize endpoint for Google: `https://accounts.google.com/o/oauth2/auth`
    3.  **Token Endpoint**: Enter the token URL that is provided by the endpoint service provider.  
        Sample token endpoint for Google: `https://accounts.google.com/o/oauth2/token`  
        
    4.  In the **Callback URL** text box, the system displays the default URL generated by an identity service. You need to configure the callback URL details on the authorization server against your app. You cannot modify these details.  
          
        Sample callback URL: `https://<accountID>.auth.voltmxcloud.com/OAuth2/Callback`
        
        > **_Note:_**  Provide domain as a service URL.  
          
        For example, configure your Google app to accept requests from authentication service by typing the `auth.voltmxcloud.com`  in the **App Domain** text field.  
          
        ![](Resources/Images/AppDomain_411x195.png)  
        
    5.  In the **Scope** text box, enter the list of permissions that a user needs to agree to while in the user log-in page of the OAuth 2.0 service provider - for example, Gmail. The list can contain more than one permission and depends on the authorization server. For a sample of full list of permissions, refer to [OAuth 2.0 standards](https://datatracker.ietf.org/doc.md/rfc6749).
        
        For example, if you configure the `email`   permission as scope, after you log in Google for the first time, Google displays the **Log in with Google** dialog with the configured permissions. Click **OK** to share your permissions (public profile and email) with Volt MX Foundry.
        
4.  Under **Client Details**, configure the following parameters. The client details are used by a service provider to identify which app the authorization service is trying to access:
    1.  In the **Client ID** text box, enter the client ID (for Google, app key) of the app instance that you created in service provider's developer console. For example, Google Developers Console.
    2.  In the **Client Secret** text box, enter the client secret (for Google, app secret key) of the app instance that you created in service provider's developer console. For example, Google Developers Console.
    3.  In the **Client Authentication Scheme**, select one of the following options to the client details as headers or form parameters:
        *   **Request Header**: To send client details as a header.
        *   **Form Param**: To send client details as form parameters.
5.  Under **User Profile Endpoint Details**, configure the following parameters to get the user profile from a service provider - for example, Google.  
    Different service providers implement user profiles as per their own standards. Volt MX Foundry OAuth 2.0 identity service retrieves user attributes from a user profile and saves these attributes in VoltMX Foundry identity sessions after a successful login response.
    
    > **_Note:_**     If you enable synchronization capability in your app, Volt MX Foundry OAuth 2.0 identity service uses the user attributes from the user profile as client filters during Offline Sync calls. For example, User Role (one of the attributes of the user profile) received as part of User Profile after a successful OAuth 2.0 login can be used as client side filter for Offline Sync. For more details, refer to [Synchronization > client side filters](Legacy_Sync.md#SyncClientsideFilters).
    
    1.  Volt MX Foundry OAuth 2.0 supports four types of user profile endpoint configurations. Select one of the following profile endpoint types from the **Profile Endpoint Type** drop-down list:
        *   If you want to skip profile configuration for the provider, you can select **None**.
        *   [Profile in response of URL](#Profile1)
        *   [Profile endpoint in response of URL](#Profile2)
        *   [Profile in Token response](#Profile3)
        *   [Profile endpoint in Token response](#Profile4).
    2.  Configure the following details based on the selected profile endpoint type:
        *   To configure the **Profile in response of URL** as profile endpoint type, follow these steps:
            1.  Enter the **URL** of the endpoint. 
            2.  Under **Resource Authentication Scheme**, select one of the following authentication schemes:
                *   **Request Header**: To send access token to profile endpoint as a header.
                *   **Form Param**: To send access token to profile endpoint as form parameters.
                *   **Query Parameter**: To send access token to profile endpoint as query.
            3.  Under **Profile Request Method**, click the **GET** or **POST** option.
        *   To configure the **Profile endpoint in response of URL** as profile endpoint type, follow these steps:
            1.  Enter the **URL** of the endpoint.
            2.  In the **Profile endpoint selector**, enter the profile endpoint selector.
            3.  Under **Resource Authentication Scheme**, select one of the following authentication schemes:
                *   **Request Header**: To send access token to profile endpoint as a header.
                *   **Form Param**: To send access token to profile endpoint as form parameters.
                *   **Query Parameter**: To send access token to profile endpoint as query.
            4.  Under **Profile Request Method**, click the **GET** or **POST** option.
        *   If you select the **Profile in Token response** as profile endpoint type, follow the steps from [User Attributes Selectors](#UserAttrSeltrs) section.
        *   To configure the **Profile endpoint in Token response** as profile endpoint type, follow these steps:
            1.  In the **Profile endpoint selector**, enter the profile endpoint selector.
            2.  Under **Resource Authentication Scheme**, select one of the following authentication schemes:
                *   **Request Header**: To send access token to profile endpoint as a header.
                *   **Form Param**: To send access token to profile endpoint as form parameters.
                *   **Query Parameter**: To send access token to profile endpoint as query.
            3.  Under **Profile Request Method**, click the **GET** or **POST** option.
6.  Under **User Attribute Selectors**, configure the following fields to extract the required information from the response:
    
    1.  **Federation ID**: Enter the federation ID of the user. The federation ID is a mandatory field and it is unique ID of the user at the service provider.
    2.  **First Name**: Enter the JSON path to extract the first name from the user profile information.
    3.  **Last Name**: Enter the JSON path to extract the last name from the user profile information.
    4.  **Email ID**: Enter the JSON path to extract the email ID from the user profile information.
    5.  **Phone**: Enter the JSON path to extract the phone number from the user profile information.
    6.  **Display Name**: Enter the JSON path to extract the display name from the user profile information.
    7.  **Custom User Attribute Selectors**: Enter custom attributes to add more attributes in addition to the ones defined above. For example, `groups=user.groups` to define a custom attribute with name `groups` and maps to `user.groups` JSON path in backend profile response.
        
    
    > **_Note:_**  The parameters in **User Attribute Selectors** are supported in JSON path format.
    
```

    // Sample profile response in JSON format  
      
    {
    	"id": "0001", // federation ID of the user
    	"name":
    		{
    			"first":"John", // first name of the user
    			"last":"Doe", // last name of the user
    			"display":"john.doe" // display name of the user
    		},
    	"email": // email ID of the user
    		[
    			"john.doe@gmail.com",
    			"john.doe@hotmail.com"			
    		],
    	"phone": "1234567890", // phone number of the user  
           "picture": "picture", //"https://my-company.com/profile/picture/1002"  
    } 
```
    
```

    // Sample profile attributes selectors for the above response  
      
    "federation id": "id"
    "first name":"name.first"
    "last name": "name.last"
    "display name":"name.display"
    "phone":"phone"
    "email":"email\[0\]" 
```

```
 
    // Sample custom attributes selectors for the above response  
      
    "federation id": "id"
    "first name":"name.first"
    "last name": "name.last"
    "display name":"name.display"
    "phone":"phone"
    "email":"email\[0\]"   
    "picture": "https://my-company.com/profile/picture/1002"
```
7.  **Redirect URL on successful authentication**:
    
    *   **Any URL**: Select this to use any URL on successful authentication.
    *   **Allowed URL list**: Select this to use a specific set of URLs on successful authentication.
        *   **URL**: In the URL text box, enter the allowed URLs.
            
8.  Under **Additional Parameters**, configure the following additional parameters. Some service providers require additional parameters based on their standards. These additional parameters' name-value pairs will be sent to a service provider along with `authorization request`, `token request`, or `profile request` as header, body, or query parameters.
    
    > **_Note:_**  You can add an entry by clicking the **Add** button if entries for the input and the output tabs do not exist.  
    To delete an entry, click the **Delete** button at the end of that entry.  
    To delete a group of entries, select the check boxes for the entries, and then click the **Delete** button under the **Additional Parameters** section.
    
    1.  Click **Add** to add an entry (row) and do the following:
    2.  Under the **KEY** field, click and enter the parameter name.
    3.  Under the **Source** field, click and select one of the following options from the drop-down list. By default, this field is set to **Constant**.
        1.  **Constant**: This mode allows you to configure the value to be sent as a part of the selected request.
            
            The value set as a part of the configuration is sent in the selected request.
            
        2.  **Identity Configuration**: In this mode, Volt MX Foundry picks up the value of the custom header from the identity configuration. The supported values are Client ID, Client Secret, Scope, and Grant Type.
        3.  **Client Specified**: In **Client Specified** mode, Volt MX Foundry picks up the value of the `value` from the client request.
            
            The value field in the configuration will be disabled. When the client tries to login, the request must contain the parameter in the request body.
            
        4.  **Identity Session**: In this mode, Volt MX Foundry picks up the value of the custom header from the identity session. The identity session contains the details of the identity providers logged into by the application. Identity session contains two different types of attributes for each provider: **Profile** and **Security**.
            
            For this mode to work, Volt MX Foundry should at least have two identity providers associated with it. The value in the provider configuration will be of the following pattern:<Provider Name>.<profile|security>.<Attribute Name>.
            
            Based on the above configuration, the value is picked up from the identity session.
            
    4.  Under the **VALUE** field, click and enter the parameter value.
    5.  Under the **LOGIN REQUEST** field, click and select one of the following options from the drop-down list. By default, this field is set to **None**.
        *   Header
        *   QueryParam
        *   FormParam
    6.  Under the **REFRESH TOKEN** field, click and select one of the following options from the drop-down list. By default, this field is set to **None**.
        *   Header
        *   QueryParam
        *   FormParam
    7.  Under the **PROFILE REQUEST** field, click and select one of the following options from the drop-down list. By default, this field is set to **None**.
        *   Header
        *   QueryParam
        *   FormParam
    8.  Under the **AUTHORIZE REQUEST** field, click and select the following options from the drop-down list. By default, this field is set to **None**.
        *   QueryParam
9.  After entering the above details, click on the **TEST LOGIN** button to verify the credentials.
    
    If you have not logged in to your the social identity service (for example: Gmail), the Console redirects you to the back-end identity provider’s log-in page. Enter your credentials as required.
    
    The test results are displayed in the **Identity Response** dialog.
    
10.  Click the **Advanced** to provide additional configuration of your service definition:
    
      <table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 910px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions="Default.V9SP2HFP"><td class="TableStyle-Basic-BodyD-Column1-Body1"><b>Enable Refresh Login</b>Select the Enable Refresh Login check box for extending an active app user login session through a oauth2 refresh token. OAuth2 efresh token obtained in OAuth2 token fetching API will be capable of supplying a new claims token in the event of expiry of currently held claims token.This is required because every time when a user opens the app, the user is forced to enter credentials to access the app. This can be avoided if you make use of OAuth2.0 Refresh Token Grant Type Flow. The Refresh Token Grant Type is a feature of OAuth2 services which enables exchange of backend <code class="codefirst">oauth2 refresh_token</code> for new bearer tokens (access_tokens).For example, you have selected the <b>Enable Refresh Login</b> check box in your Foundry app and built the client app. When a user logs into the app for the first time, the identity provider sends the <code class="codefirst">oauth2 refresh_token</code> in the response to the SDKs. <code class="codefirst">OAuth2 refresh_token</code> is stored by the SDKs in device data store, which is used for subsequent refresh logins.The <code class="codefirst">Refresh Token grant type /grant type (Refresh)</code> is used by clients (SDKs) to exchange a <code class="codefirst">refresh_token</code> for an <code class="codefirst">access_token</code> when the <b>access_token</b> has expired. So that, the app user is allowed to continue to have the app login session until the <code class="codefirst">refresh_token</code> expires.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>After the refresh_token expires, once user uses the refresh login API, the app login session is logged out automatically and the refresh will fail.<span style="background-color: #ffff00;">Maximum Session Duration for Refresh Login</span><b>Login + refresh login (in case of active sessions)</b>The active session gets expired if the user is not active within idle timeout or max session duration reached.In the scenario where the user does refresh login to an active session then the active session will be extended by maximum session duration.<b>logout + refresh login: </b>In this scenario, user is given a new session with maximum session duration.Based on the value set in for Maximum Session Duration, if the extended active login session reaches the value, the refresh login will not be possible, and the user must log in again. For example, In the following settings, if user wants to grant refresh login after 6.00 Hours, the refresh login will not be possible even though the backend refresh_token is valid for weeks. For more information, refer to <a href="ServiceConfig-Identiy-Apps.html#AppSessionMFApps" target="_blank">How to Configure App Session Settings</a>.<img src="Resources/Images/IdentitySessionideltime.png" style="mc-thumbnail-max-width: 600px;mc-thumbnail-max-height: auto;border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;"><b>Limitations</b>No validation to check whether same user who made a fresh login is trying for refresh a backend login. We You can do this by asking a user to set-up security pin while logging-in under refresh grant mode later.When a user does backend refresh login after an expiry of max-session limit, all other linked multi-login provider information is no longer valid and will be lost. Just the current provider will remain active.For more information on how to configure SDKs, refer to <a href="VoltMXStudio/Invoking_Identity_Service_Iris.html#RefreshLogin" target="_blank">Refresh Login API</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyD-Column1-Body1">Now you can enable or disable the integrity check for an identity service at the provider level. If the integrity is disabled at the provider level, then the provider is meant for server-to-server communication only. To disable the integrity check, In <b>Advanced</b>, select the <b>Restrict to Foundry Server to Server Authentication</b> check box. This setting blocks a traditional client app from using an identity service. It will only allow the identity service to be used from a <span class="MyVariablesVoltMX">VoltMX</span> Foundry Server to authenticate and invoke services.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyA-Column1-Body1"><b>Concurrent User Logins</b>: Select one of the following three options to configure concurrent user login sessions. For more information, refer to <a href="ConcurrentUserLogins.html" target="_blank">Concurrent User Logins</a>.</td></tr></tbody></table>
    
11.  After entering the above details, click **SAVE** to save the service. The system displays the **Identity** page. The Volt MX Foundry OAuth 2.0 identity service is configured.
    
   > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
    

### How to Test a Volt MX Foundry OAuth 2.0 Identity Service

If you configure an OAuth 2.0 identity service in Volt MX Foundry for a mobile app, the mobile app needs to use OAuth to authorize and authenticate users before they access any APIs. You can test the login for the OAuth identity provider in the OAuth Identity service definition tab. As a response to the login, you can view the identity response and the profile and token response that you get from the backend. Also, you can use the information from the backend profile response to help you configure the user profile under User Attribute Selectors.

The primary benefit of testing the login is that you will know if there is a problem with the URL or other configuration errors during the configuration of the OAuth 2.0 connector. You can use the details captured from the response to troubleshoot and resolve any problems with the OAuth 2.0 connector.

To test a Volt MX Foundry OAuth 2.0 identity service, do the following:

1.  In the Identity service configuration page, click **Test Login**.

A sign in screen for the OAuth 2.0 service appears. For example, the sign in screen for your Google account.

3.  Enter your credentials and click **Sign in**.

An alert indicates a successful login and a pane appears that has tabs for Backend Token Response, Backend Profile Response, Identity Response. If your sign in failed, the error message that appears provides information about the failure.

> **_Important:_** If a custom integration service (for example, MongoDB or RAML) is linked to an OAuth2 identity service, while testing an operation of the integration service from VoltMX Foundry Console, you must pass the `x-volt-mx-oauth2-access-token` as a header and `access_token` as a header value.  
  
Also, If a custom integration service (for example, MongoDB or RAML) is linked to an OAuth2 identity service, while testing an operation of the integration service from Admin Console, you must pass the `x-volt-mx-oauth2-access-token`  as a header and `access_token` as a header value.  
  
For example:  
  
![](Resources/Images/s-volt-mx-oauth2-access-integration__620x229.png)

> **_Note:_** For more information on how you can integrate Volt MX OAuth Provider, User Repository, and OAuth 2.0 Identity services to create a basic login form, refer to a Base Camp article: [Exploring Volt MX OAuth Provider](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083892).

### PKCE Support in Foundry

From V9 ServicePack2, Foundry supports PKCE in the **Authorization code** flow of OAuth 2.0.

For back-end providers that use PKCE, the Identity service acts as a passthrough, and the PKCE parameters are validated by the external providers such as Google, Linkedin, Microsoft, Amazon, Okta, Salesforce.

![](Resources/Images/PKCE_Services.png)

If the PKCE parameters from the back-end OAuth provider follow the [rfc7636](https://datatracker.ietf.org/doc.md/rfc7636) naming convention `(code_challenge, code_challenge_method, code_verifier)`, you don’t need any additional configuration and you can use the [VoltMX Iris SDK](VoltMXStudio/Invoking_Identity_Service_Iris.md#login-with-provider-type-as-oauth-saml) to invoke the identity service from your client app.

But, if the PKCE parameters from the back-end OAuth provider do not follow the [rfc7636](https://datatracker.ietf.org/doc.md/rfc7636) naming convention, you need to configure the PKCE parameters in the Additional Parameters of the Advanced section. For more information, refer to the following image.

> **_Important:_**

*   Make sure that the source for the parameters is **Client Specified**.
*   The [VoltMX Iris SDK](VoltMXStudio/Invoking_Identity_Service_Iris.md#login-with-provider-type-as-oauth-saml) only supports the rfc7636 naming convention for PKCE parameters. Therefore, if your OAuth provider uses custom parameters to implement PKCE, your client app must contain custom code to send the parameters to the back end by using the Additional Parameters in Foundry.
*   The Iris SDK continues to send the PKCE parameters with the rfc7636 naming convention, even if Additional Parameters are configured in Foundry. However, the additional parameters override the incoming request parameters from the SDK.

[![](Resources/Images/PKCE_Params_thumb_900_0.png)](Resources/Images/PKCE_Params.png)

> **_Note:_**

*   Foundry supports login without the PKCE parameters for backward compatibility with clients that do not support PKCE.
*   PKCE requires both the **Client ID** and **Client Secret** to be passed to the service.

#### Limitations

*   Foundry does not support PKCE for public clients (without the Client Secret).
*   The PKCE feature on the client device is only applicable for the Volt MX Iris SDK. For more information, refer to PKCE Support in Iris SDK.The PKCE feature on the client device is only applicable for the Volt MX Iris SDK. For more information, refer to PKCE Support in Iris SDK.
