                         


Modify the Cloud Configuration of Volt MX Iris
====================================================

To take advantage of Volt MX Iris's full range of functionality, you need to have a Volt MX user account and sign in to it from within Volt MX Iris. Features related to being signed in to your Volt MX user account include cloud-based functional preview, publishing, and the Volt MX Foundry Console.

If you do not have a Volt MX user account, you can create one at the [VoltMX Cloud Registration site](https://manage.hclvoltmx.com/registration).

The features available via the Volt MX Foundry Console include:

*   Identity - To authenticate users from different types of identity providers.
*   Integration - To define and configuring services.
*   Orchestration - To leverage the concept of combining multiple integration services
*   Offline Synchronization - To configure sync services to your app for backend data, thus enabling offline functionality.
*   Engagement Services - To configure notifications.

> **_Important:_** If you are not able to get beyond the login page for the Volt MX Foundry Console, it may be that you set up Volt MX Foundry using a self-signed certificate that made it possible to install Volt MX Foundry, but which Windows and Google Chrome does not trust to allow you to log in. To resolve this, locate the certificate (you may need to contact your system administrator to do so), and then import it into the Windows Certificate Store, into the Trusted Root Certification Authorities folder. Or you can import the certificate into the Java trust store in Volt MX Iris, which is in the following location:  
`C:\VoltMXIrisEnterpriseX.X.X\VoltMX_Iris_Enterprise\jre\lib\security\cacerts`  
For more information on how to import a certificate into the Windows Store, see [Import or export certificates and private keys](http://windows.microsoft.com/en-us/windows/import-export-certificates-private-keys#1TC=windows-7) on the Microsoft web site.

Log In to Your Volt MX Account
------------------------------

To log in to your Volt MX account, do the following: 

1.  In the top right corner of the Volt MX Iris window, click **Login**. The Volt MX Account sign-in window opens.
2.  Enter the email and password credentials of your Volt MX user account, along with any other requirements tied to your custom authentication, and then click **Login**. Once you are signed in, Volt MX Iris has access to your Volt MX Foundry apps and services.
3.  To close the Volt MX Foundry Console and return to the panes, views, and tabs of the Volt MX Iris integrated development environment (IDE), from the Quick Launch Bar along the upper left edge of Volt MX Iris, click the Workspace icon ![](Resources/Images/S7Persp_QkLaunch01b_20x19.png). Since you are still logged in to your Volt MX account, Volt MX Iris continues to have access to your Volt MX Foundry services.
4.  With a Volt MX account, you can be a member of multiple clouds. When you log on to your Volt MX account, Volt MX Iris defaults to one of those clouds. Any cloud that you are working in has to have at least one Volt MX Foundry environment associated with it. If the cloud does not have a Volt MX Foundry environment, the cloud icon in the status bar contains a warning symbol.

![](Resources/Images/MFEnviroNotSet.png)

If you know that you have access to another cloud that has a Volt MX Foundry environment, you can select it instead. To do so, on the **File** menu, click **Settings**. Click the **VoltMX Foundry Details** tab, and then from the **Cloud Account** drop-down list, select a cloud that you know has a Volt MX Foundry environment. You can then select the environment you want from the **VoltMX Foundry Environment** drop-down list (if only one environment is available, Volt MX Iris defaults to it). Click **Finish**. The status bar indicates that you are attached to a cloud with a Volt MX Foundry environment. For more information, see [Environments](../../../Foundry/voltmx_foundry_user_guide/Content/Environments.md) in the _VoltMX Foundry Console User Guide_.

![](Resources/Images/MFEnviroSet.png)

Connect Volt MX Iris to a Volt MX Foundry On-Premise Environment
---------------------------------------------------------------------

From Volt MX Iris V9 onwards, you can connect to an On-Premise Volt MX Foundry environment from Volt MX Iris.

> **_Note:_** Ensure that there are no uppercase letters in the Hostname URL of the Volt MX Foundry environment. Volt MX Iris does not support the use of uppercase letters in the Hostname URLs.

To connect to a Volt MX Foundry On-Premise Environment, follow these steps: 

1.  In Volt MX Iris, from the **Edit** menu, click **Preferences**.
2.  From the left navigation pane, click **VoltMX Foundry**.
3.  In the **VoltMX Foundry URL** text box, enter the base URL of the Volt MX Foundry on-premise environment, and then click **Validate**.
4.  Once the Volt MX Foundry URL is validated, click **Done**.

When you change the Volt MX Foundry URL, you will be logged out of Volt MX Iris, and the Sign-in page of the Volt MX Foundry on-premise environment appears. You must sign in to Volt MX Iris using the credentials of your on-premise Volt MX Foundry environment.

> **_Note:_** While using an on-premise Volt MX Foundry environment, any cloud-related actions like **Build and Publish Native**, **Package**, and **Publish to EAS** (for Web apps) will not be available. The **Publish Live preview** option is also disabled.

> **_Note:_** If you want to connect to an On-Premise Volt MX Foundry environment with a Self-Signed Certificate, ensure that you perform at least one of the following actions:

*   Add the `process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;` entry in the `<install_dir>/config/default.js` file.
*   Add the `NODE_TLS_REJECT_UNAUTHORIZED = 0;` entry in the Environment variables of your System.

Log In by using Custom Authentication
-------------------------------------

If your company receives custom authentication support, you must configure Volt MX Iris to include the custom identity of your company.

To configure Volt MX Iris to use Custom Authentication, follow these steps:

1.  In Volt MX Iris, from the **Edit** menu, click **Preferences**.
2.  From the left navigation pane, click **VoltMX Foundry**.
3.  Select the **Enable External Authentication** check box.  
    The **External Login Path** text field is displayed.
4.  In the **External Login Path** text field , specify the name of the External Authentication Provider that Volt MX has assigned.  
    For example, if the URL of your custom identity provider is `https://manage.hclvoltmx.com/<CustomIdentity>`, specify <CustomIdentity> in the **External Login Path** field.
5.  Click **Done**.

Once you configure the Custom Identity Provider, the Login page changes to include the Enterprise Login option.

1.  On the **Login** page, click **Enterprise Login**. The **Enterprise Login** page appears.
2.  Specify the name of your company, and then click **Next**. The **Sign In** page appears.
3.  Type the credentials of your Custom OAuth Provider, and then click **Sign In**.

> **_Note:_** You can disable the Enterprise Login option by clearing the URL of the External Authentication Provider from the **External Login Path** field in **Preferences > Volt MX Foundry** tab.

For information on how to configure **External Authentication for your Volt MX Foundry cloud account**, refer [External User Authentication](../../../Foundry/voltmx_foundry_user_guide/Content/Settings_Cloud.md#Accounts-Cloud).
