
User Guide: How to Create an Identity Service in API Management > APIs

# APIs - API Management

A Volt MX Foundry app comprises a group of services, [shared and non-shared services](Export-Import_Apps.md#Shared-NonSharedServices). With API Management, you can manage (create, edit, and delete) shared services (identity, integration, orchestration, objects, and logic for Node.js services) without linking or configuring them within an app. After configuring the services in the **APIs** page, you can edit, clone, view a sample code, and delete a service. When you create the services in the **APIs** page, the services are not linked to apps automatically. You can link the services across any apps created for that account in Foundry Console.The **APIs** page also allows you to view the list of apps or services that are using or referencing a given service. When you make changes to the services in the **APIs** page, the changes will be reflected in the services associated with other apps.


> **_Note:_**  You can edit a service. When you make a change to the service, the changes will be reflected in the services associated with other apps.<br>  
> You cannot delete a service if it is associated with an app or a service.

To create services through the APIs page, follow these steps:

1.  In the Volt MX Foundry Console, in the left-pane, click the **API Management** tab to display the services tabs such as **APIs**, **Custom Code**, and **Custom Data Adapters**. By default the **Identity** service tab is selected under the **APIs** tab.

    ![](Resources/Images/OnPrem/AppMgmtIdt_670x427.png)

    Under the **APIs** page, the **Identity**, **Integration**, **Orchestration**, and **Objects** tabs appear and display list the existing services (if any). Under the **APIs**, the **Identity**, **Integration**, **Orchestration**, and **Objects** views display the following columns:

    | Column                       | Description                                                                                                                                                                                                                                                                                                |
    | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | NAME                         | Displays the Name of the service.                                                                                                                                                                                                                                                                          |
    | URL                          | Displays the URL of the service.<br> **_Note:_** The URL column is displayed only for identity service.                                                                                                                                                                                                    |
    | ENDPOINT TYPE / SERVICE TYPE | Displays the type of the service. The TYPE column is displayed only for identity service.<br> **_Note:_**  The SERVICE TYPE column is displayed only for the Integration service. And the ENDPOINT TYPE column is displayed only for the Objects service.                                                  |
    | ASSOCIATED APPS              | Displays the **View** hyperlink. When you click the **View** link, the system displays the **Associated Apps** page. The **Associated Apps** page displays the number of apps associated with a particular service. For more details, refer to **[Associated Apps](#how-to-view-associated-apps-in-apis)** |
    | MODIFIED BY                  | Displays the name of the user.                                                                                                                                                                                                                                                                             |
    | MODIFIED ON                  | Displays the date and time of the modified service.                                                                                                                                                                                            
    
    After creating services in the **API Management**, you can edit, clone, view a sample code, and delete a service.  

    When you create services in the **API Management** page, these services are not linked to apps automatically. You can link or unlink services to an app only through the **[Existing Services](Identity.md)** dialog while you are adding apps.

2.  From the **APIs** page, follow these steps to create services:

    - [**Identity**](#identity-service)

    - [**Integration**](#integration-service)

    - [**Orchestration**](#orchestration-service)

    - [**Objects**](#object-service)

## Identity Service

Volt MX Foundry identity services help you secure your application by adding an authentication layer.

### How to Create an Identity Service in APIs

1.  In Volt MX Foundry Console, select **API Management** from the left navigation panel. The **Identity** page in the API tab appears by default. The **Identity** page appears and lists the existing identity services (if any). The fields for an identity service are displayed such as NAME, URL, TYPE, ASSOCIATED APPS, MODIFIED BY, and MODIFIED ON.
2.  Click **CONFIGURE NEW**. A new identity service is added.
3.  Configure the details for the identity service. For more details, refer to [Identity](Identity.md).

> **Note:**
>
> - You can perform different actions on an existing service such as edit and delete. For more details, refer to [Context Based Options](Identity14_Manage_Existing.md#UseExistingIdentity).
> - You can configure a default timeout for the apps globally in API Management. For more details, refer to [Service Configuration > Identity Timeout Settings](App_User_Session.md#AppSessionAPIMgmt).
> - Enabling cross-origin resource sharing (CORS) allows external web applications on domains to access the identity services in your Volt MX Foundry account. For more details, refer to [Identity Service Security Settings](App_User_Session.md#CORS).

## Integration Service

An Integration Service is an application component that represents the application interaction with an external system or data source.

### How to Create an Integration Service in APIs

1.  In Volt MX Foundry Console, select **API Management** from the left navigation panel.
2.  In the **[APIs](#apis--api-management)** page, click the **Integration** tab.  
    The **Integration** page appears and lists the existing integration services (if any). The fields for an integration service are displayed such as NAME, SERVICE TYPE, ASSOCIATED APPS, VERSION, MODIFIED BY, and MODIFIED ON.
3.  Click **CONFIGURE NEW**. A service definition tab is added.
4.  Configure the details for the integration service. For more details, refer to [Integration](Services.md).

    > **_Note:_**  After creating an integration service in the **APIs**, you can perform different actions on an existing service such as edit, clone, view a sample code, delete all versions of a service, manage versions of a service, and export an integration service. For more details, refer to [Context Based Options](#context-based-options).  
    > Services created under the **APIs** page are not linked to apps. You can link or unlink services to an app only through the **[Existing Services](Manage_Existing_Integration_Services.md#integration)** dialog while you are adding apps.

## Orchestration Service

An Orchestration service leverages the concept of combining multiple integration services into a single orchestration service to reduce the complexity and number of calls from the app to the backend.

### How to Create an Orchestration Service in APIs

1.  In Volt MX Foundry Console, select **API Management** from the left navigation panel.
2.  In the **[APIs](#apis--api-management)** page, click the **Orchestration** tab.  
    The **Orchestration** page appears and lists the existing orchestration services (if any). The fields for an orchestration service are displayed, such as NAME, ASSOCIATED APPS, VERSION, MODIFIED BY, and MODIFIED ON.
3.  Click **CONFIGURE NEW**. A service definition tab is added.
4.  Configure the details for the orchestration service. For more details, refer to [Orchestration](Orchestration.md).

    > **_Note:_**  After creating an orchestration service in the **APIs**, you can perform different actions on an existing service such as edit, clone, view a sample code, delete all versions of a service, manage versions of a service, and export an orchestration service. For more details, refer to [Context Based Options](#context-based-options).
    > Services created under the **APIs** page are not linked to apps. You can link or unlink services to an app only through the **[Existing Services](Orchestration.md#Reuse)** dialog while you are adding apps.




## Object Service

Volt MX Foundry Object Services enable model-driven application design and development by following a microservices architectural approach to create reusable components and link them to fit into your solution.

### How to Create an Object Service in APIs

1.  In the **[APIs](#apis--api-management)** page, click the **Objects** tab.  
    The **Objects** page appears and lists the existing objects services (if any). The fields for an object service are displayed, such as NAME, ENDPOINT TYPE, VERSION, MODIFIED BY, and MODIFIED ON.
2.  Click **CONFIGURE NEW**. A service definition tab is added.
3.  Configure the details for the object service. For more details, refer to [Objects](Objectservices.md).

    > **_Note:_**  After creating an object service in the **APIs**, you can perform different actions on an existing service such as edit, clone, clone app data model, sample code, unlink an object service or delete a specific version of a service. For more details, refer to [Context Based Options](#context-based-options).  
    > <br/>
    > Services created under the **APIs** page are not linked to apps. You can link or unlink services to an app only through the **[Existing Services](ObjectsServices/ObjectservicesActions.md#Reuse)** dialog while you are adding apps.


## <a name="Creating5"></a>Logic Service

Foundry logic services help you import and integrate Node.js services (APIs) directly into Foundry for developing server-side and networking applications.

### How to Integrate Node.js Services into Foundry Apps using API Management

1.  [How to Publish Node.js Package into Node.js Runtime Server in API Management](Logic_Publish_API_Management.md). This section details how to import a Node.js package into Foundry Console and publish the package to the Node.js Runtime Server.
2.  [How to Integrate Node.js Services into](Logic_in_Apps.md#NodeJSMFpublish). This section details how to integrate Node.js services to Foundry apps.

    For more details on how to <u>Publish Node.js Package into Node.js Runtime Server in API Management</u>, <u>prerequisites</u>, <u>use case</u>, <u>limitations</u>, and <u>Node.js package</u> structure, refer [Logic - API Management](Logic.md)


## How to View Associated Apps in APIs

After you link services (identity, integration, orchestration, and objects) created in the **APIs** page, you can view the list of apps that are associated to the services through the **Associated Apps** page. From the **Associated Apps** page, you can edit the app and unlink the app from the service.

To view associated apps, follow these steps:

1.  In the **[APIs](#apis--api-management)** page, click the service (identity, integration, orchestration, objects) tab to display the service details page.

    ![](Resources/Images/AssociatedAppsView_597x217.png)

2.  Click the **View** link under the **ASSOCIATED APPS** column to view the apps associated to the service. The **Associated Apps** dialog appears with the list of apps linked to the service for the current version. You can change the version of the service if required.

    ![](Resources/Images/AssociatedApps.png)

    From the **Associated Apps** page, you can perform operations such as edit the app and unlink the app from the service. For identity services, from the Associated Apps page you can also enable SSO for the application.

    - To edit the app through the **Associated Apps** page, hover your cursor over the required service, click the **Settings** button, and then click **Edit**.
    - To enable [SSO](Overview_AppSSO.md#AppSSOoverview) for the app through the Associated Apps page, hover your cursor over the required service, click the **Settings** button, and then click **Enable SSO**. You must republish the app for this new setting to take effect. For more information about SSO for applications, refer to [Application SSO](Overview_AppSSO.md#AppSSOoverview).
    - To unlink the app through the **Associated Apps** page, hover your cursor over the required service, click the **Settings** button, and then click **Unlink app**. When you click the **Unlink app** button, the app is disassociated from a particular service.

## Context Based Options

You can perform various actions on an existing service from the **API Management** page.

In the API Management page, click the contextual menu of the required service. It contains the following options:

- **Edit**: Opens a service in the console and allows you to edit the service definition and operations. After you edit a service, you need to republish all the apps that are using the service to apply the changes.

  > **_Note:_** If a service is a part of a published app, you can rename that service only after the app is unpublished.

- **Edit Configuration**: For objects services, opens the service in the console and allows you to edit the objects service definition and operations.
- **Clone**: Duplicates an existing service. Clone a service to create a different version of the service. Changes made to a cloned service will not affect the original service. The name of a cloned service indicates that it is a copy of an existing service.
- **Clone App Data Model**: For objects services, duplicates an existing app data model of an objects service. Clone a service to create a different version of the service. Changes made to a cloned service will not affect the original service. The name of a cloned service indicates that it is a copy of an existing service.
- **Publish Service**: Republishes a service. Refer [Publishing Individual Services](Publish_a_Service.md)
- **Sample Code**: Generates dynamic code for each SDK type based on the configuration of a service. You can use the code in your mobile app. For example, generate the sample code for an integration or orchestration service from Volt MX Foundry. Then use that code in the mobile app to invoke the orchestration service instance.
- **Delete all versions**: Deletes all versions of a service. You cannot delete a version of the service that is in use. A service in use is a service that is referenced by a Volt MX Foundry app or another service or a Sync scope.

1.  Click the **Delete all versions** button to display the **Delete Service** dialog.
2.  Click **DELETE**. If the current of the service is not linked to any apps, the versions is deleted. Otherwise, the Error warns you that you are trying to delete the current version of the service that cannot be unlinked or deleted as it is being used by the following apps or services or Sync scopes: \[App Name\]

    > **_Note:_** If a service is a part of a published app, you can delete that service only after you unlink the service from all the published app.

- **Manage versions**: Delete one or more versions of a service.

  1.  Click the **Manage versions** button to display the **Manage versions** dialog lists versions of the service.
  2.  Hover your cursor over the required version, and click the **Delete** button. When you click the **Delete** button, the **Delete Service** dialog appears.
  3.  To confirm the deletion of the version, click **DELETE**. If the current version of the service is not linked to any apps, the versions is deleted. Otherwise, the Error warns you that you are trying to delete the current version of the service that cannot be unlinked or deleted as it is being used by the following apps or services or Sync scopes: \[App Name\]

      > **_Important:_** You cannot remove the current version of a service from a service level.   
      > For example, If you are in the **Service Definition** tab of a service from **APIs** and try to delete a version of a service, you can delete all the versions of a service except the current version.

- **Audit Logs** helps you to capture all the user activities performed in a service. **Object Name**, **Object Type** and **Modified On** fields are prepopulated with the **Service Name**, **Services**, and **Last 7 Days** respectively.

  For more information on Audit Logs, refer to [Audit Logs](Settings_Cloud.md#audit-logs-cloud) documentation.

  > **_Note:_** This feature is applicable only for Integration, Orchestration, and Object Services.

- **Console Access Control**: Controls the access to the applications and services of apps.
- **Export as XML**: Exports an existing version of a service to an XML file.
- **Export**: Exports an existing version of a service to a zip file. You can import the service to an existing app in the Volt MX Foundry Console. For more information, refer [Exporting and Importing an Application](Export-Import_Apps.md).
- **Validate**: Validates the service definition of an objects service.
