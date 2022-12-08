 

Using Components
================

You can simplify and speed up development of mobile applications by using a variety of existing components as building blocks, allowing you to create sophisticated mobile applications without having to write all the code yourself. You can download a variety of components from and import them into your projects, or import reusable components that you create yourself.

For example, you can download the following free components developed by the VoltMX Marketplace Assets team, and drag and drop them into your applications:

*   **Sliding Menu**: Lets you hide the navigation beyond the edge of the screen, and reveal it only after a user’s action.
*   **Login**: Provides a standard log-in interface with the ability to enforce a minimum password and minimum user ID length, and local password encryption.
*   **Place Locator**: Provides a powerful map interface that allows you to search for points of interest near a specified location.
*   **Floating Action**: Represents and promotes the primary action in an application.
*   **Employee Directory**: Provides standard features associated with an employee directory.
*   **Amadeus**: Provides a data adapter that helps you rapidly build travel applications.

![](Resources/Images/CompMarketplaceComps.PNG)

![](Resources/Images/CompMarketplaceComps.PNG)

You can also import masters created in an earlier version of into a Free Form JavaScript project. You can continue to use the masters in your applications, or make them available as reusable components that can be published to by converting them to components. A master is similar to a component without a contract, except that a component includes a controller module.

For information about creating components, see [Creating a Component](C_CreatingComponent.md). For information on the types of projects you can create, see [Types of Projects](TypesOfProjects.md).

The following topics provide additional information about using components:

[Download a Component from](#download-a-component-from)

[Import a Component into Your Project](#import-a-component-into-your-project)

[Add a Component to a Collection](#add-a-component-to-a-collection)

[View Details and Documentation for a Component](#view-details-and-documentation-for-a-component)

[Add a Component to a Form](#add-a-component-to-a-form)

[Import a Master into Your Project](#import-a-master-into-your-project)

[Export a Component](#export-a-component)

[Publish a Component to](#publish-a-component-to)

[Work With a Private Section of](#work-with-a-private-section-of)

Download a Component from
-------------------------

VoltMX Marketplace gives you access to a rich assortment of components. You can download a component, and then import it into your project.

To download a component from :

1.  Select **Browse** from the **Marketplace** menu, or navigate to the [](http://community.voltmx.com/marketplace)website in your web browser.

![](Resources/Images/CompUsingMarketplace.PNG)

![](Resources/Images/CompUsingMarketplace.PNG)

4.  Select the component you want to download to open a web page that describes the component.

![](Resources/Images/CompPlaceLocator.PNG)

![](Resources/Images/CompPlaceLocator.PNG)

7.  Click the **Login to Download** button to log in to your VoltMX account and download the component.
8.  Click **Save** to download the component to the default download location on your computer, or **Save As** to download it to a different location.

Import a Component into Your Project
------------------------------------

You can import components into your project from a number of sources:

*   Components you download from .
*   Components you create and export to your computer, network, or the cloud.
*   Components others create and export to your computer, network, or the cloud.

To import a component into your project:

1.  Click the **Templates** tab in Project Explorer.

![](Resources/Images/CompTemplatesTab.PNG)

3.  Hover over **Components**, click its context menu arrow, and then select **Import Component**. displays the **Import Component** dialog box.

![](Resources/Images/CompImportComp.PNG)

5.  Click **Browse** to navigate to the location of the component, select the component, and then click **Import**. adds the component and its associated widgets and modules to your project.

![](Resources/Images/CompImportComp2.PNG)

Once you have imported a component into your project, you can easily add the component to a form. For more information, see [Add a Component to a Form](#add-a-component-to-a-form).

If the component requires configuration of service parameters, prompts you to provide them.

If the component imported has the service definitions, a pop-up is displayed

You can also save the component to a collection. For more information, see [Add a Component to a Collection](#add-a-component-to-a-collection).

**If your component requires configuration of VoltMX Foundry service parameters, follow these steps:**

1.  Import the component zip file to the Iris.
2.  Select the component from **Templates**\>> under **Components** section.
    
    All the configurable parameters are fetched and displayed in the properties window on the right pane.
    
    ![](Resources/Images/UDW in Iris/Configurable Parameters.png)
    
3.  Enter the values for the configurable parameters under the **Service Parameters** section.
4.  Click **Import Changes**.
    
    The provided values are reflected in the VoltMX Foundry Console.
    
    If the package has no configurable parameters, you must configure the parameters from the MF workspace and provide the values.
    

If your component requires configuration of VoltMX Foundry service parameters, you may need to login to Marketplace with your credentials to access the component.  
For more information, refer the corresponding documentation for the component you are using in Marketplace.

Add a Component to a Collection
-------------------------------

To help you organize your components, you can group them in a collection within the Library Explorer. You can organize related components, or organize them however you like, in multiple collections within a library. You can then easily drag and drop the component from the Collections pane of Library Explorer onto a form in any of your mobile application projects.

![](Resources/Images/CompCollection.PNG)

To add a component to a collection:

1.  Click the Templates tab in either the Project Explorer or the Library Explorer.
2.  If it is not expanded already, expand the Components node.

![](Resources/Images/CompTemplateTab.PNG)

4.  Click the context menu arrow of the component you want to add to a collection, and hover over **Add to Collection**. Then hover over the library that contains the collection, and click the collection where you want to save the component. If the library or collection does not exist, you can create the library or collection.

If the component uses any services, prompts you to select the services that you want to include with the component. creates a trial account and includes any required services.

You can also add a master created in earlier versions of to a collection.

View Details and Documentation for a Component
----------------------------------------------

Components downloaded from VoltMX Marketplace often include documentation supplied by the component creator. For example, the Rating Prompt component developed by the VoltMX team includes a summary of key details about the component, along with a more complete description of the component and how to use it.

![](Resources/Images/ComponentDetails.PNG)

![](Resources/Images/ComponentDoc.PNG)

You can view this documentation, if it exists, from within Library Explorer in the collection where you saved the component.

To view details and documentation about a component:

1.  In Library Explorer, navigate to the library and collection where you saved the component.
2.  Right-click the component name and select **Details**. opens a viewing pane and displays the documentation.

To switch between details and documentation view, click **Details** or **Documentation**.

Add a Component to a Form
-------------------------

You can add a component to a form in a project in virtually any form scenario, including using components within another component. You can then drag and drop the component into your application to create sophisticated, full-featured mobile applications without writing all of the code.

For example, rather than creating a log-in form from scratch for each of your mobile applications, you can download the Login component from . You can add the Login component to a collection of components, and then add it to a form.

To add a component to a form:

1.  On the Project tab of the Project Explorer, locate and open the form where you want to add the component. The form displays on the Iris Canvas and has the focus.
2.  If you have added the component to a collection, open the library and collection that contains the component in Library Explorer. Then drag and drop the component onto the form.

If the component is added to the project and appears on the **Templates** tab, you can also do one of the following:

*   Click the context menu arrow of the component you want to use, and then click **Insert Into**. An instance of the component is placed on the form you originally selected.
*   Drag the component from the **Templates** tab to the Iris Canvas, and drop the component onto the form.

The instance appears in the Project Explorer as blue text with a different icon, making it easy to identify as a component instance.

### VoltMX Foundry Integrated UDW in Iris

If the component uses any dependencies, including .jar files, service definitions, connectors, or NodeJS files, you must login to your cloud account before drag and drop.

When you consume the exported (or) saved component that has VoltMX Foundry service definitions, a pop-up is displayed with two options:

*   Replace
*   Skip

![](Resources/Images/UDW in Iris/importconflict.png)

**Replace**: Select the option to replace the existing service with the modified service.

**Skip**: Select the option to use the original service. The newly added component uses the existing service.

### Configuring VoltMX Foundry Integration in Iris Starter

If you are an Enterprise user using Iris Starter and like to access your own cloud account, configure the following in your default.js file available in VoltMX Iris/Config folder.

Enter your cloud accountId and environmentName in the below code:

```
mf: {
        planFilter: 'paas',
        clitimeout: 7 \* 60 \* 1000, //7 minutes
        clijar: path.resolve(\_\_dirname, '..', 'lib', 'mf', mfcli.jar'),
        **accountId**: '', //optional config: account id which has mf runtime
        **environmentNam**e: '', //optional config: mf environment name when multple instances are available
        usemfa: false, //use multi-factor authentication
        clipropfile: '' //MF CLI properties file
    },

```

When you import/create a component that has Foundry services, you need to login to your cloud account before the drag and drop of the component to the form.

If the component uses dependencies, you must login to your cloud account before drag and drop.

If you are not logged in to the cloud account, then the common functional preview without the services will be displayed.

Import a Master into Your Project
---------------------------------

You can also use a master created in an earlier version of in your mobile application by importing the master into a Free Form JavaScript project. For information on the types of projects you can create, see [Types of Projects](TypesOfProjects.md).

To import a master:

1.  On the **File** menu, hover over **Import**. Then select **Masters**.
2.  Click **Browse** to navigate to the location of the master, select the master, and then click **Open**. adds the master to the Masters node on the Templates tab in Project Explorer. If a Masters node does not exist, creates one.

You can then drag and drop the master onto a form just as you would drag and drop a component.

Export a Component
------------------

Just as you can import a component into your project, you can export a component to your computer, network, or the cloud. You can then import the component into another project or share it with others.

To prevent your component from being modified by users, you may want to lock the component. This prevents users from viewing or modifying the component's source code. For more information about locking a component, see [Creating a Component](C_CreatingComponent.md).

Locales are not exported with a component. For more information about locales, see [Appendix A • Internationalizing ](i18n) Application Content](Internationalization.md).

To export a component:

1.  If you have added the component to a collection, open the library and collection that contains the component in Library Explorer. Then select the component.

If the component has been added to the project and appears on the **Templates** tab, select the component there.

3.  Right-click the component, and then select **Export**. displays the **Save As** dialog box.
4.  Navigate to the location where you want to export the component, and then click **Save**. exports the component to that location.

If the component uses any VoltMX Foundry dependencies, including .jar files, service definitions, connectors, or node.js files, a pop-up is displayed with the list services used in the component.

![](Resources/Images/UDW in Iris/fetchingservices1.png)

Select the required services by clicking the checkbox and click **Package** to export (or) to add it to the library.

**If you create a component that requires configuration of VoltMX Foundry service parameters, follow these steps:**

1.  Extract the exported component package file to your local file system.
2.  Go to **Components** folder and extract the services.zip package.
3.  Create a Parameters.json file with all the configurable parameters.
    
    The JSON file includes the information about all the configurable parameters for the services included in the component.
    
4.  Place the Parameters.json file in the Services folder of the services package.
    
    Here is a sample JSON file with the default parameters:
    
```
\[ 
    { 
                "name": database\_url, 
     
                "displayName": <Display name of the parameter to show in Properties Window>, 
     
                "defaultValue": <Mandatory if property is readOnly, Optional otherwise>, 
     
                "type": <Type of the parameter. Can be one of String/Integer/Double>, 
     
                "serviceName": <Name of the MF service>, 
     
                "serviceType": <Type of the MF service. Can be one of identity/integration/object/orchestration >, 
    "readOnly": true/false 
    }, 
    { 
    <configurable param 2> 
    } 
    \] 
```
5.  Update the corresponding file located in component\_package/component/services/services/services/service\_type/meta.json with the placeholders. Example, endpoint file for service RDBMS123 is updated as:
```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> 
    <endpoint dataAdapterId="1" encryptSecureInfo="false" name="default" type="CustomDataAdapter"> 
        <apiThrottling/> 
        <config> 
            <entry> 
            <entry> 
                <key>jdbcUrl</key> 
                <value>${database\_url }</value> 
            </entry> 
                <key>jdbcClass</key> 
                <value>com.mysql.jdbc.Driver</value> 
            </entry> 
        </config> 
    </endpoint> 
```
6.  Zip the services folder and the component folder and import the package to Iris. For more information on configuring the parameters in Iris, refer [Configuring VoltMX Foundry service parameters in Iris](#Configure_Services_Params).

Publish a Component to
----------------------

To publish a component to , first add it to a collection in your project. For more information on adding a component to a collection, see [Add a Component to a Collection](#add-a-component-to-a-collection).

You can only publish a component with a contract to . For more information about components with a contract, see [Components Overview](C_ComponentsOverview.md) and [Creating a Component](C_CreatingComponent.md).

To publish a component to :

1.  Open the collection that contains the component that you want you publish.
2.  Right-click the component that you want to publish, and then select **Publish**.
3.  Supply log-in information to your VoltMX account, if necessary, and provide the necessary information to .

Work With a Private Section of
------------------------------

If you are an enterprise customer whose organization uses a private section of , you can download a component from that private section or upload a component to that private section using your organization's cloud account. First, configure or to use the cloud account.

To work with a private section of in :

1.  Close .
2.  Open the _default.js_ file in the _config_ directory of your installation.
3.  Add the following to the _default.js_ file:

mp:

{ privateMPAccountId: _<MyAccountId>_ }

_<MyAccountId>_ is the account identifier of your cloud account. The account identifyer is displayed in the top-right corner of your cloud console on _manage.voltmx.com_.

7.  Save and close the _default.js_ file, and then reopen .

To work with a private section of in :

1.  Click **Project Settings** on the **Quick Launch Bar** or in **Project Explorer** to open the **Project Settings** dialog box, and then click the **VoltMX Foundry** tab.
2.  In the **Cloud Account** box, select your cloud account.

To download a component, see [Download a Component from VoltMX Marketplace](#download-a-component-from). To upload a component, see [Publish a Component to VoltMX Marketplace](#publish-a-component-to).

<table style="margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/RevisionTable.css');" madcap:conditions="Default.md5 Only" class="TableStyle-RevisionTable" cellspacing="0"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">8.0</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">SHS</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">SHS</td></tr></tbody></table>
