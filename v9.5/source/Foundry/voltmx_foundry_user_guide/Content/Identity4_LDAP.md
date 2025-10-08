
User Guide: [Identity](Identity.md) > [Configure the Identity Service](ConfigureIdentiryService.md) > Open LDAP

## Open LDAP Identity Service

Open Lightweight Directory Access Protocol (LDAP/LDAPS) is an open-source application protocol that is used for single sign-on (SSO) where a user's password is shared among various apps. The following LDAP protocols are supported:

- LDAP without SSL - Credentials are not encrypted before sending them for authentication.
- LDAPS (with SSL) - Credentials are encrypted before sending them for authentication.

To bind connection with an open LDAP, you must provide the details supplied during the Active Directory LDAP configuration and the following information:

- Bind Credentials (bind username and bind password)
- Log-in attribute, federation ID, and object Class.

**To create an open LDAP authentication, follow these steps:**

1.  Under the **[Identity service designer](ConfigureIdentiryService.md#IdentitySDpage)** page, type a name for the service in the **Enter Service Name** text box.
2.  From the **Type of Identity** list, select **Open LDAP**.
3.  Under **Configure Open LDAP**, provide the following details:
    1.  In the **Domain Name** text field, enter a name.
    2.  In the **Ldap URL** field, enter the fully qualified LDAP URL. For example: `ldap://myldapserver.com:389`

        The default port number is 389. You can change the port, if required.

        For example:

        - The following URLs are the same and valid:  
          `ldap://myldapserver.com:389` and `ldap://myldapserver.com`.
        - The following URLs are not valid.` ldap://myldapserver.com:512` and `ldap://myldapserver.com`.

    3.  In the **Root Domain** field, enter the distinguished root domain name. For example: `dc=mycompany,dc=com`

        > **_Note:_**  An OpenLDAP administrator can provide you details, such as dc, uid, OU, objectClass, Login attribute.

    4.  In the **Bind Username**, enter the bind username. For example: `uid=user,dc=mycompany,dc=com`
    5.  In the **Bind Password,** enter the bind password.
    6.  In the **Login Attribute**, enter the log-in attribute.
    7.  In the **Federation ID**, enter the unique identifier of Active Directory.
    8.  In the **Object Class,** specify objectClass for the search filter during authentication.  

4.  After entering the above details, click on the **Test Login** button to verify the credentials. The **Test Login** dialog appears.

    1.  Enter the User ID and Password for back-end service.
    2.  Click **Sign In**.

    The test results are displayed in the **Identity Response** dialog.

5.  Click the **Advanced** to provide additional configuration of your service definition:  

    * Now you can enable or disable the integrity check for an identity service at the provider level. If the integrity is disabled at the provider level, then the provider is meant for server-to-server communication only. To disable the integrity check, In **Advanced**, select the **Restrict to Foundry Server to Server Authentication** check box. This setting blocks a traditional client app from using an identity service. It will only allow the identity service to be used from a Volt MX Foundry Server to authenticate and invoke services.
    * **Concurrent User Logins**: Select one of the following three options to configure concurrent user login sessions. For more information, refer to [Concurrent User Logins](ConcurrentUserLogins.md).  

        *   **Allow concurrent user sessions (no restrictions)**: When this option is selected, an app user with unique credentials is allowed to have multiple apps from different instances.
        *   **Allow only one active user session per app**: Logging into simultaneous instances of **the same app** is not supported. When this option is selected, an app user can log in to only one instance of client apps linked to a specific Foundry app which has the identity service linked.
        *   **Allow only one active user session across all apps**: Logging to simultaneous instances of **the same app or across apps** is not supported. When this option is selected, a unique app user can log in to only one instance of client apps linked to all Foundry apps using the identity service.

        > **_Important:_** Apps enabled for SSO will not work if the option is selected, Allow only one active user session across all apps.  
        
6.  Click **Save** to save the service. The system displays the **Identity** page. The new identity service is created for your app.

    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
