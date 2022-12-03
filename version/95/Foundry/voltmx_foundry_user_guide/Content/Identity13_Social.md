                               

User Guide: [Identity](Identity.md) > [Configure the Identity Service](ConfigureIdentiryService.md) > Social Identity Providers

Social Identity Providers
-------------------------

Volt MX  Foundry provides a set of preconfigured OAuth 2.0 services under Social Identity. With Social identity services, a user can access resources through Volt MX Foundry applications. The Social Identity provides various popular services that include Google, Instagram, Microsoft, BOX, Facebook, LinkedIn, Amazon, and Yahoo.

### How to Configure a Social Identity Service

**To configure Google identity service, follow these steps:**

1.  Under the [Identity service designer](ConfigureIdentiryService.md) page, type a name for the service in the Enter Service Name text box.
2.  From the **Type of Identity list**, select **Google** under the **Social Identity**.
    
    > **_Note:_** Fields marked with an asterisk are mandatory.
    
3.  In the **Authorize Endpoint** text box, the default URL (https://accounts.google.com/o/oauth2/auth) is displayed. You can modify these details.
4.  In the **Token Endpoint** text box, the default URL (https://www.googleapis.com/oauth2/v3/token) is displayed. You can modify these details.
5.  In the **Callback URL** text box, the default URL is displayed. You cannot modify these details (https://<accountID>.auth.voltmxcloud.com/OAuth2/Callback).

> **_Important:_** Configure your Google app to accept requests from authentication service by typing the auth.voltmxcloud.com in the App Domain text field.

1.  In the **Scope** text box, the default list of permissions is provided. The list can be modified. The list can contain more than one permission. The list must contain valid permissions separated with a space.
2.  In the **Client Id** text box, enter the app key of the app instance that you created on Google.
3.  In the **Client Secret** text box, enter the app secret key of the app instance that you created on Google.
4.  After entering the above details, click on the **TEST LOGIN** button to verify the credentials.
    
    If you have not logged in to your the social identity service (for example: Gmail), the Console redirects you to the back-end identity provider’s log-in page. Enter your credentials as required.
    
    The test results are displayed in the **Identity Response** dialog.
    
5.  After entering the details in the **Client Secret** field, click **Save** to save the service. The system displays the Identity page. The Google identity provider is configured.

> **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
