                          

New Features in V8 SP1
======================


<details close markdown="block"><summary>Console</summary>

*   Added support for API Management features of Volt MX Foundry in on-premises version. Users can create Developer Portals and add oAuth servers on the Active Directory and UserStore identity services in their on-premises instances.
*   Added support for testing services with Pre and Post processors from Volt MX Foundry Console. Users can view detailed logs of steps involved in the service invocation.
    
*   Users can download documentation of Object Services from Volt MX Foundry Console.
    
*   Added support for using HTTP Verbs other than POST to access Volt MX Foundry APIs. API Management users can define their front-end APIs with required HTTP verbs.
    
*   Added support for accessing App Factory Testing Console from Volt MX Foundry Console.
*   Added support to republish individual Integration and Object services and application from API Management View.
    

</details>
<details close markdown="block"><summary>Offline Objects</summary>

*   Offline Objects API calls now send metrics data for reporting.
*   Error (or) Exception handling is significantly enhanced in Offline Objects. Errors from native layers are percolated to JavaScript layer for an app developer to handle in client code. In addition to application errors, Sync errors are also percolated to the app developer.
    
*   Data Upload from client to server using Offline Objects can now be batched, based on the number of records that are uploaded.
    
*   Offline Objects now support encryption of the SQLite database used for storing the data offline in device using FIPS compliant SQLCipher library.
    
*   Offline Objects now support cascade delete feature. Child objects are deleted to avoid creating orphan records on the client.
    

</details>
<details close markdown="block"><summary>Integration</summary>

*   **Configurable Parameters**
    
    Admin Console now supports defining parameters at the account level. Users can define the property key (or) value pairs at the client and the server level. The defined properties are used in pre and post-processor, other custom code, or in an application at the device.
    
    *   **Server Configuration**: The defined server properties are available to use in pre and post processors and in other custom code using Volt MX Server.
    *   **Client Configuration**: A rest API will be provided to access the client configured properties in the next release. These properties can be used in SDK and the application.
    
    For more information on configuring parameters in Admin Console, refer [Configurable Parameters](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Configurable_Parameters.md)
    
*   **Download Swagger Definition of Services**
    
    Admin Console provides an ability to download OpenAPI (Swagger) definition of services. The definition can be used as a Swagger adapter within the Volt MX Foundry or as a Swagger input for any other system (or) service.
    
    For information on the process downloading, refer [Downloading a Swagger API file](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Integration_Services.md).
    

</details>
<details close markdown="block"><summary>Installer</summary>

*   App Server components upgrade using the installer is not supported anymore. Volt MX suggests that you can upgrade your Volt MX Foundry by installing it afresh with connecting to an existing database.
*   Added support for API Developer Portal is added. An interface to expose APIs and enable Volt MX Foundry users to develop third-party apps.
