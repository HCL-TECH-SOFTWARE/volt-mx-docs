                              

User Guide: [Identity](Identity.md) > [Configure the Identity Service](ConfigureIdentiryService.md) > Siteminder

SiteMinder Identity Service
---------------------------

After a developer configures a SiteMinder instance in Volt MX Foundry Console, the SiteMinder instance handles authentication and authorization of users. When a SiteMinder user logs in Volt MX Foundry app, the system directs the user to the SiteMinder log-in page. After a SiteMinder user logs into the SiteMinder instance, the user will be redirected to Volt MX Foundry Console. Volt MX Foundry auth service will verify whether SiteMinder headers and cookies exist before granting access to Volt MX Foundry design-time components. Volt MX Foundry components include the Volt MX Foundry Console, Volt MX Foundry Engagement, Volt MX Foundry Sync, and Volt MX Foundry Integration Server.

> **_Note:_** SiteMinder Identity service support is available only for Volt MX Foundry On-premises.

To configure a SiteMinder service, follow these steps:

1.  Under the [Identity service designer](ConfigureIdentiryService.md#IdentitySDpage) page, type a name for the service in the **Enter Service Name** text box.
2.  From the **Type of Identity** list, select **SiteMinder**.
    
3.  In the **Siteminder Session Cookie Name** field, enter a cookie name.
4.  Under **User Attribute Selectors from Request Header**, provide the following details:
    
    1.  In the **Federation ID** field, enter a valid ID.
    2.  In the **Email ID** field, enter a valid Email ID.
    3.  In the **First Name** field, enter your first name.
    4.  In the **Last Name** field, enter your last name.
5.  Under **User Group Endpoint Details**, in the **URL** field, enter a valid URL.  
    For example, **http://localhost:xxxx/customidp/login**
6.  Click **Save**to finish configuration of the identity provider.
    
    > **_Note:_** You can view the service in the Data Panel feature of Volt MX Iris. By using the Data Panel, you can link back-end data services to your application UI elements seamlessly with low-code to no code. For more information on Data Panel, click [here](../../../Iris/iris_user_guide/Content/DataPanel.md#top).
