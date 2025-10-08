                              

User Guide: [Identity](Identity.md) > [Configure the Identity Service](ConfigureIdentiryService.md) > Salesforce

Salesforce Identity Service
---------------------------

Volt MX  Foundry allows your users to authenticate using Salesforce credentials.

> **_Note:_**  NTLM authentication is not supported by Salesforce identity service.

To configure Salesforce authentication, follow one of these methods:

*   [Configuring a New Salesforce service](#configuring-a-new-salesforce-service)
*   [Using an Existing Salesforce Service](#Use)

### Configuring a New Salesforce Service

The process of configuring your Salesforce service depends on the authentication mode. Volt MX Foundry supports the following authentication modes:

*   [OAuth2.0:](#oauth-2-0) In this mode, a user is directed to a secure login page of Salesforce portal. After validating the credentials, the user is directed to Volt MX Foundry page with an authorization code.
*   [Username and Password](#username-password): In this mode, users provide the Salesforce credentials. Volt MX Foundry, in turn, communicates these details to Salesforce. On successful authorization, Salesforce authorizes Volt MX Foundry to allow the users access the application.
    
    > **_Note:_** For basic authentication on an untrusted network, Salesforce requires you to type the password followed by the security token in the **Password** box. For example, if your password is "password" and your security token is "xxxx," then the password submitted to Salesforce is "passwordxxxx." This type of authentication helps in ensuring that the integrity of your credentials is not compromised.  
    If you forget your security token, you can reset it by following the steps mentioned in the link: [https://help.salesforce.com/HTViewHelpDoc?id=user\_security\_token.html&language=en\_US](https://help.salesforce.com/HTViewHelpDoc?id=user_security_token.md&amp;language=en_US)  
    

#### OAuth 2.0

To create a Salesforce service using **OAuth 2.0** authentication mode, follow these steps:

1.  Under the **[**Identity** service designer](ConfigureIdentiryService.md#IdentitySDpage)** page, type a name for the service in the **Enter Service Name** text box.
2.  From the **Type of Identity** list, select **Salesforce**.
3.  From the **Auth Mode** list, select **OAuth (Recommended)**.
    
    > **_Note:_** **Salesforce URL** and **Callback URL** are pre-populated. In your Salesforce connected app, you need to type this Callback URL.
    
4.  In the **SalesForce Client ID** box, type the client ID provided by Salesforce after you have registered your application.
5.  In the **Sales Force Client Secret** box, type the client secret provided by Salesforce after you have registered your application.
6.  After entering the above details, click on the **Test Login** button to verify the credentials. The test results are displayed in the **Identity Response** dialog.
    
7.  Click the **Advanced** to provide additional configuration of your service definition:
    *   Now you can enable or disable the integrity check for an identity service at the provider level. If the integrity is disabled at the provider level, then the provider is meant for server-to-server communication only. To disable the integrity check, In **Advanced**, select the **Restrict to Foundry Server to Server Authentication** check box. This setting blocks a traditional client app from using an identity service. It will only allow the identity service to be used from a Volt MX Foundry Server to authenticate and invoke services.
    *   **Concurrent User Logins**: Select one of the following three options to configure concurrent user login sessions. For more information, refer to [Concurrent User Logins](ConcurrentUserLogins.md).
8.  Click **Save**.
    
    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
    

#### Username/Password

To create a Salesforce service using **Username/Password** auth mode, follow these steps:

1.  Under the **[**Identity** service designer](Identity.md#IdentitySDpage)** page, type a name for the service in the **Enter Service Name** text box.
2.  From the **Type of Identity** list, select **Salesforce**.
3.  From the **Auth Mode** list, select **Username/Password**.
    
    > **_Note:_** **Salesforce URL** and **Callback URL** are pre-populated. In your Salesforce connected app, you need to type this Callback URL.
    
4.  In the **Salesforce Client ID** box, type the client ID that is provided by Salesforce after you have registered your application.
5.  In the **Salesforce ClientSecret** box, type the client secret that is provided by Salesforce after you have registered your application.
6.  Click the **Advanced** to provide additional configuration of your service definition:
    *   Now you can enable or disable the integrity check for an identity service at the provider level. If the integrity is disabled at the provider level, then the provider is meant for server-to-server communication only. To disable the integrity check, In **Advanced**, select the **Restrict to Foundry Server to Server Authentication** check box. This setting blocks a traditional client app from using an identity service. It will only allow the identity service to be used from a Volt MX Foundry Server to authenticate and invoke services.
    *   **Concurrent User Logins**: Select one of the following three options to configure concurrent user login sessions. For more information, refer to [Concurrent User Logins](ConcurrentUserLogins.md).
        *   **Allow concurrent user sessions (no restrictions)**: When this option is selected, an app user with unique credentials is allowed to have multiple apps from different instances.
        *   **Allow only one active user session per app**: Logging into simultaneous instances of **the same app** is not supported. When this option is selected, an app user can log in to only one instance of client apps linked to a specific Foundry app which has the identity service linked.  
            
        *   **Allow only one active user session across all apps**: Logging to simultaneous instances of **the same app or across apps** is not supported. When this option is selected, a unique app user can log in to only one instance of client apps linked to all Foundry apps using the identity service.  
            
            > **_Important:_** Apps enabled for SSO will not work if the option is selected, Allow only one active user session across all apps.
            
7.  After entering the above details, click on the **Test Login** button to verify the credentials. The **Test Login** dialog appears.
    
    1.  Enter the User ID and Password for Salesforce backend.
    2.  Click **Sign In**.
    
    The test results are displayed in the **Identity Response** dialog.
    
8.  Click **Save**.

> **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
