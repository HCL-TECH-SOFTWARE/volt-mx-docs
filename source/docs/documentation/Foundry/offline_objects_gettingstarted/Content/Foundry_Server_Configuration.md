---
layout: "documentation"
category: "offline_objects_gettingstarted"
---

Configuring Volt MX Foundry Server
=================================

Offline Objects supports the following modules:

*   **Service Driven Objects (SDO)**: Object services can interact with the backend through service-driven objects derived from Integration services, which wraps the backend end-points such as REST API.
*   **Line-of-Business (LOB) Adapters**: You can use Object Services to create data models from line-of-business (LOB) objects. You can access LOB objects by using Volt MX Foundry business adapters such as SAP, Salesforce, and RDBMS. These business adapters enable you to visually discover and select the entities exposed by the LOB system.

The following section explains how to configure Offline Objects by using [Service Driven Objects](#service-driven-objects) and [Line-of-Business Adapters](#line-of-business-adapters).

Service Driven Objects
----------------------

1.  Sign in to the [VoltMX Foundry Console](https://manage.hclvoltmx.com/console/).
2.  Create a new application by clicking **ADD NEW** in the applications' page. A new app is created, and the **Configure Services** page opens, by default.
3.  Under the Integration tab, either create a new Integration service or use an existing one. For more information about creating an integration service, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConfigureIntegrationService.html).
4.  Under the Objects tab, click **CONFIGURE NEW**. A New Object Service page appears.
5.  Type a name for your object service and select **Integration & Orchestration Services** from the Endpoint Type list.
6.  Select the Offline enabled check box. Upon selecting this check box, options to set [Conflict Resolution Policy](Conflict Resolution.html) and [Enable Upload Cache](Upload Cache.html) are enabled.
    
    ![](Resources/Images/SDO_661x410.png)
    
7.  Configure the [Conflict Resolution Policy](Conflict Resolution.html) and Enable Upload Cache features as required and save the service.
8.  To link your integration service to your object service, click **Generate** under the Data Models’ section. The **Generate App Data Model from Existing Services** tab appears.
    
    ![](Resources/Images/DataModel_640x220.png)
    
9.  Click **Add** and type your Object Name and select your Service Name and Operation Name from the list. Click Generate.
    
    ![](Resources/Images/Data_Model_639x211.png)
    
10.  The generated data model is created with the relevant fields and relationships.
11.  Configure the Fields, Relationships, and Change Tracking as required.
    
       > **_Note:_** Enable primary key for the fields.
    
12.  Save the changes and publish the app.
13.  Now, link your Foundry application to the client application.


Line-of-Business Adapters
-------------------------

1.  Sign in to the [VoltMX Foundry Console](https://manage.hclvoltmx.com/console/).
2.  Create a new application by clicking **ADD NEW** in the applications' page. A new app is created, and the **Configure Services** page opens, by default.
3.  Under the Objects tab, click **CONFIGURE NEW**. A New Object Service page appears.
4.  Type a name for your object service and select the required business adapter from the Endpoint Type list.
5.  Select the Offline enabled check box. Upon selecting this check box, options to set [Conflict Resolution Policy](Conflict Resolution.html) and [Enable Upload Cache](Upload Cache.html) are enabled. Configure these fields as required.
    
    ![](Resources/Images/Object_Services_645x369.png)
    
6.  Configure the fields of the selected business adapter. For example, **SAP**.
    
    ![](Resources/Images/BusinessAdapter_503x848.png)
    
7.  Click **Save and Configure** to configure the data models and add mappings.
8.  You can either create a new data model and add mappings or import the objects from the metadata of your backend provider.
    
    *   To create a new data model and add a mapping, click **Configure New** under the Data Model section. For more information about how to create a data model and add a mapping, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Stage_2.html#creating-objects-39-definition-and-map-to-back-end-objects-manually).
    *   To import objects from your backend, click **Generate** under the Data Model section. For more information about importing objects from the metadata of your backend provider, click [here]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ObjectsServices/Objectservices_Stage3.html).
    
    > **Note:**  
    *   Configure the Fields, Relationships, and Change Tracking as required.  
    *   Enable Primary Key for the fields.  
        
9.  Save the changes and publish the app.
10.  Now, link your Foundry application to the client application.
