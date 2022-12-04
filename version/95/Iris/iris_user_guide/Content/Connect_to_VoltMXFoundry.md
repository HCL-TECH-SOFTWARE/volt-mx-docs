                         

Connect to the Volt MX Foundry Console
=====================================

From Volt MX Iris you can access features of the Volt MX Foundry Console and use them in your application. These features include Identity, for authenticating users from different types of identity providers; Integration, for defining and configuring services; Orchestration, for leveraging the integration services you've created to create a composite service of concurrent, sequential, or looped integrated services; Synchronization, for configuring sync services to your app for backend data, thus enabling offline functionality; and Engagement Services, for configuring notifications.

For cloud customers this procedure assumes that you have a Volt MX user account. If you do not, you can create one at the [VoltMX Cloud Registration site](https://manage.hclvoltmx.com/registration). For on-prem customers, [Create a User in Volt MX Foundry Console](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Settings.md#how-to-create-a-user-in-foundry-console)


> **_Important:_** If you are not able to get beyond the login page for the Volt MX Foundry Console, it may be that you set up Volt MX Foundry using a self-signed certificate that made it possible to install Volt MX Foundry, but which Windows and Google Chrome does not trust to allow you to log in. To resolve this, locate the certificate (you may need to contact your system administrator to do so), and then import it into the Windows Certificate Store, into the Trusted Root Certification Authorities folder. Or you can import the certificate into the Java trust store in Volt MX Iris, which is in the following location:  
`C:\VoltMXIrisEnterpriseX.X.X\VoltMX_Iris_Enterprise\jre\lib\security\cacerts`  
For more information on how to import a certificate into the Windows Store, see [Import or export certificates and private keys](http://windows.microsoft.com/en-us/windows/import-export-certificates-private-keys#1TC=windows-7) on the Microsoft web site.

To connect to the Volt MX Foundry Console, do the following: 

1.  If you have not yet configured Volt MX Foundry in Volt MX Iris, on the **Window** menu, click **Preferences**.

2.  From the navigation pane on the left, double-click **VoltMX Iris** to display its options, and then click **VoltMX Foundry**.

3.  In the **VoltMX Foundry URL** text box, enter the base URL for your Volt MX Foundry account, and then click **Validate**.
<br> __For example:__ 

    * __Cloud customers__: [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/oauth/authorize?oauth_token=52cf12c2dda185aa1280bd8bd8aa0f360a3db666)

    * __On-prem customers__: Enter the base URL of the Volt Foundry on-premises environment

    * __Trial (demo) customers__: [https://manage.demo-hclvoltmx.com](https://manage.demo-hclvoltmx.com/oauth/authorize?oauth_token=a8366454f9ecbd67bb6515cd8cc53c2e9da06865)

4.  Once the Volt MX Foundry URL is validated, click **OK**.

5.  Now that Volt MX Foundry is configured in Volt MX Iris, and if you have not done so already, you need to log in to your Volt MX account so that you can access the Volt MX Foundry resources from Volt MX Iris. To do so, in the top right corner of the Volt MX Iris window, click **Login**. The Volt MX Account sign-in window opens.

6.  Enter your email and password credentials for your Volt MX user account, and then click **Sign in**. Once you are signed in, Volt MX Iris has access to your Volt MX Foundry apps and services.

7.  To close the Volt MX Foundry Console and return to the panes, views, and tabs of the Volt MX Iris integrated development environment (IDE), from the Quick Launch Bar along the upper left edge of Volt MX Iris, click the Workspace icon ![](Resources/Images/S7Persp_QkLaunch01b_20x19.png). Since you are still logged in to your Volt MX account, Volt MX Iris continues to have access to your Volt MX Foundry services.

8.  With a Volt MX account, you can be a member of multiple clouds. When you log on to your Volt MX account, Volt MX Iris defaults to one of those clouds. Any cloud that you are working in has to have at least one Volt MX Foundry environment associated with it. If the cloud does not have a Volt MX Foundry environment, the cloud icon in the status bar contains a warning symbol.

![](Resources/Images/MFEnviroNotSet.png)

If you know that you have access to another cloud that has a Volt MX Foundry environment, you can select it instead. To do so, on the **File** menu, click **Settings**. Click the **VoltMX Foundry Details** tab, and then from the **Cloud Account** drop-down list, select a cloud that you know has a Volt MX Foundry environment. You can then select the environment you want from the **VoltMX Foundry Environment** drop-down list (if only one environment is available, Volt MX Iris defaults to it). Click **Finish**. The status bar indicates that you are attached to a cloud with a Volt MX Foundry environment. For more information, see [Environments](../../../Foundry/voltmx_foundry_user_guide/Content/Environments.md) in the _VoltMX Foundry Console User Guide_.

![](Resources/Images/MFEnviroSet.png)
