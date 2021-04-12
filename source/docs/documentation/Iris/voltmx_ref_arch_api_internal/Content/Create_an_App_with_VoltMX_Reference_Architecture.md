---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


Create an App with Volt MX Reference Architecture
=================================================

When you create an app with Volt MX Reference Architecture, you can start by building the app's data model in Volt MX Foundry Console. You can add various back-end services and operations that your front-end client app requires. You can then build your front-end client app with Volt MX Iris. Volt MX Iris provides you with a way to interface your front-end client app with your back-end Volt MX Foundry app, as described on Volt MX Iris [User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html) and in [VoltMX Foundry User Guide]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Introduction.html).

Build Your Front-End Client App
-------------------------------

After you have created your Object services by using Volt MX Foundry, you can build your front-end client app with Volt MX Iris.

You can connect your front-end client app to your back-end Volt MX Foundry app and the services it offers, and then generate the object model. To do so, on the **Data & Services** panel, click the hamburger menu near the **Refresh** button, and then click either **Create New App** or **Link to Existing App**.

![](Images/VoltMX_Foundry_Starter_181x246.png)

You can select the channels for which you want to build your app, such as Desktop, Mobile, Android Wear, or Tablet. The Reference Architecture Extensions feature is not available for the Apple Watch channel. You can then design the user interface of your app by using various widgets available on Volt MX Iris. For more information on channels, widgets, and API functions that are available on Volt MX Iris, refer [VoltMX Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html), [VoltMX Iris Widget Programmer's Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Overview.html), and [VoltMX Iris API Programmer's Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_api_dev_guide/content/introduction.html).

### Create a Volt MX Reference Architecture Project

You must follow these steps to create a Volt MX Reference Architecture project on Volt MX Iris:

1.  On Volt MX Iris, click **File**, and then click **New Project**. Volt MX Iris displays the **New Project** dialog box with the types of apps that you can create.
2.  Select the **Create Custom App** option, and click **Choose**. Volt MX Iris again displays the **New Project** dialog box with the available project types
3.  Select the **VoltMX Reference Architecture** project type.
4.  If you want Volt MX Iris to automatically create Reference Architecture Extensions in your project, select the **Reference Architecture Extensions** check box. You can enable this feature by setting the **enableMVCExtensions** flag to **true** in the appropriate file at the system location where you have installed Volt MX Iris:
    *   For Volt MX Iris: <installation folder>/install\_config.json  
        
5.  Type the name of your project in the **Project Name** field. You must follow these guidelines while specifying the name of your project:
    *   The name must always start with an alphabet.
    *   The name should contain only alphabets and digits.
    *   Special characters and reserved words are not allowed.
    *   The name must contain more than three characters.
6.  Click **Create**. Volt MX Iris creates the project with the **Reference Architecture Extensions** node available in Project Explorer.
7.  If you had not selected the **Reference Architecture Extensions** check box while creating your project, the **Reference Architecture Extensions** node will not be available in Project Explorer.

### Add an Application Group in Reference Architecture Extensions

You can add an application group in the Reference Architecture Extensions node by following these steps:

1.  Right-click the **Reference Architecture Extensions** node. A context menu appears.
2.  Click **New Group**. Volt MX Iris creates an app group named **AppGroup** (which you can rename if required) that contains three reference architecture extensions: **BusinessControllers**, **Config**, and **PresentationControllers**. You can create multiple app groups. And each app group you create will contain the same three reference architecture extensions mentioned earlier, but with different names.  
    You can learn more about app groups [here]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/OrganizingAppElementsInGroups.html).  
    

### Locking Feature in Reference Architecture Extensions

You can "lock" module files and Reference Architecture Extensions files in MVC 2.0 projects, i.e., make the files as read-only. This is to ensure that certain files are non-editable for customers, while internal users can make changes to them. For all other projects such as non-MVC and MVC projects, this feature is not supported.

You can specify the read-only files from the **projectProperties.json** file : In the projectProperties.json file, assign the **readOnly** key to all the files that you want to make as read-only.

*   The structure for the readOnly key in the projectProperties.json file is as follows:  
    **"readOnly": \[ \]**
*   You must add the file paths in the readOnly key according to their respective file types, as shown here:  
    **"readOnly": \[ "mvcextensions/AppGroup/BusinessControllers/BusinessController.js",**  
    **"mvcextensions/AppGroup/BusinessControllers/command\_CommandHandler.js",**  
    **"modules/Module.js", "modules/require/Module.js",**  
    **"modules/Watch/Module.swift" \]**

#### Remarks

1.  Rename and delete operations for the read-only files are not supported.
2.  If you rename or delete the main AppGroup in which read-only files exist, the file information within the **readOnly** key is not updated.
3.  If any file is open on the Iris Canvas when you add the file path to the readOnly key in the projectProperties.json file, you must refresh the project and re-open the file again to make it read-only.
4.  You cannot make the ModuleConfig.json file as read-only.

#### Business Controllers

Business Controller is the layer where all the business logic is executed. All the individual logic goes as a command, which is handled by a Command Handler. Busines Controller can run any commands through a command execution engine.

Business Controller consists of a **BusinessController.js** file in your Volt MX Reference Architecture project. You cannot rename or delete the **BusinessController.js** file.

You can open the **BusinessController.js** file to either view the default code or manually write new code. The **BusinessController.js** file contains the following generic code by default.

{% highlight voltMx %}define([], function () { 

    function BusinessController() { 

        voltmx.mvc.Business.Controller.call(this); 

    } 

    inheritsFrom(BusinessController, voltmx.mvc.Business.Controller); 

    BusinessController.prototype.initializeBusinessController = function() { 

    }; 

	BusinessController.prototype.execute = function(command) { 

		voltmx.mvc.Business.Controller.prototype.execute.call(this, command);

	};

    return BusinessController;

});
{% endhighlight %}

Business Controller for a particular module can either extend/inherit the BusinessController(voltmx.mvc.Business.Controller) or the BusinessDelegator(voltmx.mvc.Business.Delegator) depending on the design pattern that you want to follow for business logic handling. Business Controllers need to call the respective constructor of the parent class that they inherit from their parent constructor.

##### Creating a New Command for a Business Controller

You can create a new command for a Business Controller by following these steps:

1.  Right-click the **BusinessControllers** node and from the context menu that appears, click **Create New Command**. Volt MX Iris displays the **Create New Command** dialog box.
2.  Type the command ID and command name in the respective fields.  
    ![](Resources/Images/busCon_newcom.png)
3.  Click OK. Volt MX Iris creates the commandHandler.js file and displays it under the **BusinessControllers** node. You can create multiple Command Handlers for a Business Controller. If you specified the name of the command as 'Fetch,' Volt MX Iris names the commandHandler file as **Fetch\_commandHandler.js**. We will take Fetch\_commandHandler as an example in the topics mentioned later.

##### Performing Actions on the Command Handler

You can perform any of the following actions by right-clicking Fetch\_commandHandler that you created:

*   Click **Open** from the context menu to view or manually write new code in the Fetch\_commandHandler.js file.
*   Click **Rename** from the context menu to rename Fetch\_commandHandler.
*   Click **Delete** from the context menu to delete Fetch\_commandHandler. Volt MX Iris displays a dialog box asking if you want to delete the Command Handler. Click OK.
*   Click **Create New Command Extension** from the context menu to create a Command Extension for Fetch\_commandHandler. Volt MX Iris creates a new **Fetch\_commandHandlerExtension.js** file under the **BusinessControllers** node. You can create only one Command Extension for a Command Handler. You can either open the Fetch\_commandHandlerExtension.js file and view the default code/manually write new code or delete the Command Extension file. You cannot, however, rename the Command Extension file.

#### Presentation Controllers

Presentation Controllers contain the view logic to prepare the required content for display and to react to user inputs or events. Presentation Controllers also request for new data by telling their Business Controllers to execute a specific command.

Presentation Controller consists of a **PresentationController.js** file in your Volt MX Reference Architecture project. You cannot rename or delete the **PresentationController.js** file.

You can open the **PresentationController.js** file to either view the default code or manually write new code. The **PresentationController.js** file contains the following generic code by default.

{% highlight voltMx %}define([], function() {

    function PresentationController() {
        voltmx.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(PresentationController, voltmx.mvc.Presentation.BasePresenter);

    PresentationController.prototype.initializePresentationController = function() {
        
    };

    return PresentationController;
});
{% endhighlight %}

##### Creating a Channel-specific Presentation Controller

You can create a channel-specific (Mobile, Tablet, Desktop, and Android Wear) Presentation Controller. This feature is not available for the Apple Watch channel. You can add only one Presentation Controller for any specific channel.

To do so, follow these steps:

1.  Right-click the **PresentationControllers** node. A context menu appears.
2.  Hover the cursor of your mouse on **New Controller**. Volt MX Iris displays the list of available channels.
3.  Select the required channel. If you select the **Mobile** option, Volt MX Iris creates a **PresentationController\_Mobile.js** file under the **PresentationControllers** node. You can either open the **PresentationController\_Mobile.js** file and view the default code/manually write new code or delete the Presentation Controller file. You cannot, however, rename the Presentation Controller file.  
    

##### Create an Extension for a Presentation Controller

You can create an extension for the **PresentationController.js** file or any of the channel-specific Presentation Controllers, if created.

To do so, follow these steps:

1.  Right-click the **PresentationControllers** node. A context menu appears.
2.  Hover the cursor of your mouse on **Create New Extension**. Volt MX Iris displays the list of available Presentation Controllers.
3.  Select the required Presentation Controller, whether the **PresentationController.js** file or any of the channel-specific Presentation Controllers that you created. Volt MX Iris creates an **Extension.js** file under the **PresentationControllers** node. You can create multiple Extensions for multiple Presentation Controllers.
4.  You can either open the **Extension.js** file and view the default code/manually write new code, rename, or delete the file.

#### Config

The **Config** node consists of the **ModuleConfig.js** file. Whatever actions you perform on the Business Controllers and Presentation Controllers, Volt MX Iris updates the corresponding information in the **ModuleConfig.js** file.

For any channel, if you add an app group with the same name as the app group under the Reference Architecture Extensions node, Volt MX Iris automatically updates the necessary details in the **ModuleConfig.js** file.

### Build the App's User Interface

Your client app's user interface displays one or more screens, also called views. Views can be forms, templates, or masters. Every view must have at least one of these. More typically, a view requires multiple forms, templates, or masters. The process of creating views is described in the [VoltMX Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Adding_Forms_to_a_New_Application.html).

After creating at least one screen for your app using forms, you can add widgets to the forms. Widgets provide your app with the user interface elements that it needs. These include buttons, menus, text labels, calendars, and more. They also give your app access to the functionality of the user's device through the use of a camera widget, a phone, widget, and so forth. The process of populating your app's forms with widgets is presented in the [VoltMX Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/PopulatingWidgets.html).

### Add Functionality to Your App

Each time you add forms to your app, Volt MX Iris automatically adds a controller for each form and creates a folder in your project to put it in. You'll find the controllers for your forms in the project tree under the channel that you're developing the app for. So if you add a form called frmMain to your project and you're developing the app for Android and iOS, you'll find folders for the frmMainController in the Android and iOS branches of the project tree. Whenever you change the names of your forms and templates, Volt MX Iris automatically renames the controllers associated with them.

Likewise, when you add templates to your apps, Volt MX Iris adds the corresponding controller for each template. Renaming your template automatically renames its controller.

To add functionality to your app, you add your custom JavaScript code to the controllers in your app. The controller for a form or template is the only object that has access to the form or template. Only the controller can performs actions on it.

Your app may also contain models, one for each backend data source. The data sources can be local on the device or remote servers that are accessed across the network. If you need to, you can add custom code to your app's models to enhance or customize the model's functionality.

In addition, you can add actions to your forms just as you would with any other Volt MX Iris app. When you do, Volt MX Iris automatically creates an action controller for your actions. However, this is an autogenerated file and you should not make any changes to it. If you do, they will be overwritten the next time the file is regenerated.

Build Your App's Data Model
---------------------------

The steps required to build the data model of your app are as follows:

*   [Build a VoltMX Foundry app](#build-a-app)
*   [Configure Identity Services](#configure-identity-services)
*   [Create an Object Service](#create-an-object-service)
*   [Configure the Data Model](#configure-the-data-model)

### Build a VoltMX Foundry App

To integrate your front-end client app with the back-end services that you want the app to access through Volt MX Foundry, you must first create a Volt MX Foundry app by using Volt MX Foundry Console. For more details on how to do so, refer [VoltMX Foundry documentation]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/homepage.html).

In this walkthrough, we will create a simple service that integrates with SAP data in the back end. Although your data may reside in a different backend storage system, the basic workflow for building your app's data model will be very similar to what's shown here. In this walkthrough, we will assume that you have already created your Volt MX Foundry app.

For our example, the Volt MX Foundry app is called Work Order. The Work Order Volt MX Foundry app gets its data from SAP. In the Volt MX Foundry console, the results will resemble the following illustration.

![](Resources/Images/NewMFApp_572x310.png)

### Configure Identity Services

1.  Select the app you just created. In this example, it's the Work Order app.
2.  Click the **Configure Services** tab.
3.  Choose **Identity Services**.
4.  Click the **Configure New** button.
5.  Set the identity's name.
6.  Select the **Type of Identity**. In this example, it will be Volt MX SAP Gateway.
7.  Set the address and port of the gateway server.
8.  Supply the remaining information such as the login credentials and so forth. You screen will resemble the following.  
    ![](Resources/Images/CfgId_602x324.png)

### Create an Object Service

Next, you create an object service that will provide your front-end client app with access to the data in the data store. In this example, the client app on the device or desktop will access the work order data in the SAP database.

1.  In the **Configure Services** tab in the Volt MX Foundry console, click **Objects**.
2.  Select the **Configure New** button.
3.  Set the name and endpoint type. In this example, the endpoint type is SAP.
4.  Select **Existing Identity Provider** and enter the name of the identity service you create in Step 2. This example uses the name identitysap.
5.  Fill in the other information such as User ID, Password, and so forth.  
    ![](Resources/Images/CfgObjects_560x272.png)
6.  Click the **Save & Configure** button.

### Configure the Data Model

At this point, you need to configure the data model your service will use.

1.  Continuing from #6 in Step 3, click the **Generate** button.
2.  In dialog box that appears, select the object service you want to use. The Volt MX Foundry console then displays a list of objects offered by the selected object service.
3.  Choose the object or objects that you want your client app to have access to. In this example, we will select only one object, as shown in the following figure.  
    ![](Resources/Images/SAPObject_632x415.png)
4.  Click **Next**.
5.  In the dialog box that appears, click **Generate**. Your data model is now generated automatically by the system.
6.  Click the **Publish** button to publish your Volt MX Foundry data service app.

Generate Controllers and Extensions
-----------------------------------

Collectively, the views, controllers, models, and model extensions are known as Reference Architecture artifacts. The Volt MX Foundry channel is not available on Volt MX Iris.

You can generate Reference Architecture models and model extensions by following these steps:

1.  Right-click the Volt MX Foundry node in the **Project** pane of Volt MX Iris Classic. A context menu appears.
2.  Click either the **Use Existing App** or the **Create New App**option. Volt MX Iris displays a **Sign In** dialog box requesting you to log on to Volt MX Foundry.
3.  Sign in to Volt MX Foundry by entering your login credentials. After you successfully sign in, Volt MX Foundry displays the list of created apps .
4.  Click **Associate** for the required app. Volt MX Foundry displays the details of the app.
5.  Click **Workspace** at the upper left corner of the screen. You are navigated back to Volt MX Iris.
6.  Right-click the Volt MX Foundry node and from the context menu that appears, click **Generate Object Model**. Volt MX Iris generates the object model and creates the **Models** node in the **Project** pane.
7.  a. For new projects, Volt MX Iris displays the generated object models for all project types (non-MVC, MVC, and MVC 2.0) under the **Models** node. To enable this hierarchical folder-structure, you must navigate to Project Properties of your app, create a new flag named **enableMVCExtensions**, and set the flag as **true**. All files are read-only and the structure of the **Model** folder is as follows:  
    Models  
    \>>>><Service-name>  
    \>>>>>>>>>>>>>>><Object-name>  
    \>>>>>>>>>>>>>>>>>>>>>>>>><Model.js  
    \>>>>>>>>>>>>>>>>>>>>>>>>><MF\_Config>  
    \>>>>>>>>>>>>>>>>>>>>>>>>><Repository.js>  
      
    b. For existing projects, where models already exist under the previous folder structure (**Modules** for non-MVC and **Models** for MVC), Volt MX Iris follows the older format and flat folder-structure even if you re-generate the models.

A Sample FormController
-----------------------

The following sample code shows the partial implementation of a `FormController` object. Note that the implementation is in RequireJS format, which is mandatory for Volt MX Reference Architecture applications.

{% highlight voltMx %}define(
{
    onIPRecievedFromIPControl: function (masterController1, newtext) 
    {
        if (null != newtext) 
        {
            alert(newtext);
        }
    },

    AS_Button_6c7c9d022bcc4a61a603aa3c89110efe: function (eventobject) 
    {
        this.view.defaultAnimationEnabled = false;
        this.view.master1.onIPAddressSet = this.onIPRecievedFromIPControl;
        this.view.master1.IPAddress = "212.212.100.110";
    }
});		
{% endhighlight %}

> **_Note:_** In an MVC project, a top-level FlexContainer is added by default when you create a new template.
