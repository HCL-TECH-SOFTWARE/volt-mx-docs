

Overview
========

This section provides an overview of the VoltMX Foundry, PhoneGap, and Foundry CRM Sample application.

VoltMX Foundry
-----------------

VoltMX Foundry provides enterprise security and complex system integration services and allows developers to focus on building app experiences. Foundry delivers a powerful set of services to handle identity, integration, orchestration, data sync, and messaging. When these services are configured within VoltMX Foundry, they can easily be incorporated into a mobile application using any third-party app development tool with our SDKs or direct REST API interface.

VoltMX Foundry offers five major services:

Identity: Authenticate and authorize your application users including Salesforce, Active Directory, SAP, or other third-party identity providers that support Security Assertion Markup Language (SAML).

Integration: Securely connect your application to any back-end data using a variety of connectors for standard services such as REST, SOAP, and JSON end points and for enterprise connectors such as Salesforce and SAP. You can also build custom connectors using Java code to handle any atypical integration requirement.

Orchestration: Optimize application performance or create new services by building server-side composite services and workflows including the ability to execute custom business logic.

Sync: Enable applications to work offline by keeping a copy of relational data structures on the device. Securely synchronize changes between end-user devices and enterprise databases or web service-enabled systems.

Messaging: Engage with your users over cross-platform push notifications, SMS, and email. This service includes the ability to track the effectiveness of messaging campaigns. You can also collect user information and behavior analytics to enable you to better target messaging based on user segmentation rules and location defined by geo-boundaries or iBeacons.

PhoneGap
--------

PhoneGap is a free and open source framework that allows you to create mobile apps using standardized web APIs for the platforms you care about.  To ensure proper stewardship of the source of PhoneGap, and to maintain a transparent and open governance that was well documented and understood, Adobe/Nitobi donated the PhoneGap codebase to the Apache Software Foundation (ASF) and was renamed as Cordova. Currently PhoneGap is a distribution of Apache Cordova. Think of Apache Cordova as an engine that powers PhoneGap.

Foundry CRM Sample
-----------------------

The Foundry CRM sample application was developed using the PhoneGap/Cordova APIs and has the following functionality:

*   Ability to connect to Foundry instance and authenticate against the Salesforce APIs using the identity that has been configured in the Foundry.
*   Ability to invoke Foundry services that have been configured. These services in Foundry are configured based on the Salesforce objects and the operations that are exposed by these objects.

This document captures the details of:

*   Software installation and configuration that are needed to execute Foundry CRM sample application. The software programs whose install and configuration are discussed include Eclipse, Android Development Toolkit (ADT) plug\-in, Node.js and Cordova.
*   Process of creating a Salesforce account and loading the data that is needed to execute the demo application.
*   Creation of Foundry trial account.
*   Configuration of the Foundry CRM sample application on the Foundry Server by creating the identity and integration services.
*   Installation and configuration of Foundry CRM sample client application in Eclipse. 
*   Setup of the emulator and execution of the Foundry CRM sample client application in the emulator.

Below are the steps and the order we’ll cover in this QuickStart guide:

1.  Installing and configuring Node.js.
2.  Installing and configuring Cordova.
3.  Installing JDK 1.8.
4.  Installing the Android SDK.
5.  Installing Eclipse.
6.  Installing the Eclipse Android plugin.
7.  Configuring the backend integration using Foundry.
8.  Creating a SalesForce.com account.
9.  Configuring the Foundry Server.
10.  Installing the demo application.

Software Installation and Configuration
=======================================

This section captures the details of all the software that needs to be installed and configured to run the Foundry CRM Sample application.

Installing and Configuring Node.js
----------------------------------

1.  Type [https://nodejs.org/](https://nodejs.org/) in your browser to open the node.js install screen. Click **Install**.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000002.png)
    

2.  In the screen below, click **Run**.

3.  In the Welcome screen below, click **Next**.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000003.png)
    

1.  To accept the terms and conditions in the screen below, click **Next**.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000004.png)
    

5.  Change the location of the install in the **Destination Folder** screen below if required. By default the Node.js will install under the **Program Files** folder.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000005.png)
    

6.  In the **Custom Setup** screen below, choose all the features to be installed. Click **Next** to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000006.png)
    

7.  In the final screen below, click **Install**, completing the installation.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000007.png)
    

Installing and Configuring Cordova
----------------------------------

1.  Click the Start button (or the Windows icon in the task bar) and choose All Programs. Scroll down to choose **Node.js > Node.js** Command Prompt.

2.  In the command prompt window, shown below, type: `npm install –``g cordova`  to installs the Cordova libraries.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000008.png)
    

3.  Test to see if Cordova is installed by typing
    
    Cordova
    
    at the command prompt. The command window below should report the following:
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000009.png)
    

Installing JDK 1.8
==================

1.  Type [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) in your browser.
2.  Click on **Accept Licence Agreement” under** Java SE Development Kit 8u45,” shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000A.png)
    

3.  Next, in the screen below, click the Accept License Agreement option button, and click on jdk-8u45\-windows-x64.exe in the “**Download**” column to download the JDK for Windows 64 bit.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000B.png)
    

4.  In the screen below, click **Save** to save the file on your local machine.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000C.png)
    

5.  Click on the “`jdk-8u4``5``-windows-x64`” file from the install folder to begin the installation of the JDK.
6.  If prompted with screen, requesting to make changes to the computer, click **Yes**.
7.  Click **Next** in the screen below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000D.png)
    

8.  Choose the default destination folder as shown in the screen below and click **Next**.  
    Close the install screen when the installation is complete.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000E.png)
    

10.  You can check if the correct version of the JDK installed by opening a Windows Command Prompt window typing the command:
    
    Java –version
    
    shown in the screen below. The Java version should be 1.8.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300000F.png)
    

Installing the Android SDK
==========================

1.  Type [https://developer.android.com/sdk/index.html#Other](file:///C:/Users/kh1423/Desktop/6.0.4/AWS MF/CRM/FoundryCRMQuickStart_V2.0-Acceptedall.docx#Other) in your browser. Click on `installer_r24.3.3-windows.exe`
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000010.png)
    

2.  Next, agree to the terms and conditions and click on Download installer\_r24.3.3\-windows.exe
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000011.png)
    

3.  When prompted with a security warning, click on Run, and in the screen below, click Yes.

4.  Next the SDK installation wizard launches, shown below. Click Next to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000012.png)
    
    A screen that indicates the installed version of the JDK appears, shown below. The version of the JDK should be the same as the one that you installed earlier.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000013.png)
    

6.  Choose the Install just for me default option in the screen, shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000014.png)
    

7.  A screen appears that allows you to select the destination folder for the SDK install. Choose the default location. Click Next to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000015.png)
    

8.  In the screen that appears, choose the default Start menu folder. Click Install to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000016.png)
    

9.  The Setup Wizard screen appears. Click Finish.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000017.png)
    

10.  The Android SDK screen appears. Choose the following tools and API versions, shown below. Click on “**Install Packages**”.
    
    *   **Tools**: 
        *   Android SDK Tools – 24.1.2
            
        *   Android SDK Platform Tools – 22
            
        *   Android SDK Build Tools – 21.1.2
            
        *   Android SDK Build Tools – 20
            
        *   Android SDK Build Tools – 19.1
            
    *   Android **APIs**:
        *   Android 5.0.1 (API 21)
            
        *   Android 4.4W.2 (API 20)
            
        *   Android 4.4.2 (API 19)
            
        *   Android 4.1.2 (API 16)
            
    *   Extras:
        
        *   Android Support Library 22
            
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000018.png)
    

11.  In the **Choose Packages to Install** screen, click Accept to accept the licenses, and click Install.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000019.png)
    

Installing Eclipse
==================

1.  Type [http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/) in your browser and download the Eclipse Luna SR2 (4.4.2) (Eclipse IDE for Java Developers) – 64 bit as shown in the screen below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001A.png)
    

4.  In the screen below, click Save to save the zip file.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001B.png)
    

5.  After the file is saved, right-click on the file and click **Extract All**.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001C.png)
    

6.  A prompt to Select a Destination and Extract Files appears, shown below.  Extract the files into a folder.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001D.png)
    

7.  Once the files are extracted, a folder structure appears, shown below. Click on the round, indigo **Eclipse icon** to launch Eclipse.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001E.png)
    

Installing the Eclipse Android Plug-in
======================================

1.  Launch Eclipse from the folder where Eclipse was installed by clicking the round, indigo **Eclipse icon**, shown below. If a prompt appears asking if you want to run the file, click Run.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300001F.png)
    

2.  Select the location of the workspace in the screen below. If needed, you can choose the default workspace that is prepopulated in the dialog. Click OK.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000020.png)
    

3.  After Eclipse is launched, click Help and choose **Install** New Software from the drop-down menu, shown below. This will allow you to choose the web site to download the plug in.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000021.png)
    

4.  Click Add … in the Available Software screen. The **Add Repository** window appears.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000022.png)
    

5.  In the **Add Repository** screen, type ADT Plugin in the Name field. For the Location field, type `https://dl-ssl.google.com/android/eclipse/` and Click OK.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000023.png)
    

6.  Select the Developer Tools check box to select all six items. Click Next to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000024.png)
    

7.  The **Install Details** screen appears, shown below. The screen lists all items that are to be installed. Click Next to continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000025.png)
    

8.  The **Review Licenses** screen appears. Review the licenses and accept the terms. Click Finish.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000026.png)
    

9.  If a security warning is displayed, click OK.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000027.png)
    

10.  Restart Eclipse if prompted.

11.  After Eclipse launches, click on `Windows -> Preferences -> Android`. The Preferences screen appears and indicates that the Eclipse Android plug-in is using the Android SDK that was installed earlier.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000028.png)
    

Configuring Back-end Integration Using Foundry
===================================================

This section captures the details of the Foundry trial account creation, Salesforce.com account creation, and configuration of the Foundry Server to invoke the Salesforce.com services.

Foundry Trial Account Creation
-----------------------------------

1.  If you do not have access to a VoltMX Foundry Messaging account on VoltMX Cloud, you can register for a free trial at [http://www.voltmx.com/trials](http://www.voltmx.com/trials). When the following screen appears, select **VoltMXFoundry + VoltMX Studio**.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000029.png)
    

2.  Once you click on the Start Your Trial button, you will see the screen below.  
    Please use your work email for immediate registration approval.
    
    Once you activate your account, you will have access to our Cloud Portal at [https://cloud.voltmx.com](https://cloud.voltmx.com/) that provides documentation, tutorials and support via VoltMX Community. You will also have access to our VoltMX Cloud Console at [https://manage.voltmx.com](https://manage.voltmx.com/) where you will manage your VoltMX Foundry services.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002A.png)
    

Creating a Salesforce.com Account
=================================

1.  Type [https://www.salesforce.com](https://www.salesforce.com/) in the browser. Click on Start Your Free Trial as shown in the screen below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002B.png)
    

2.  Enter all the information in the registration form shown in the screen below, and click Start Free Trial.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002C.png)
    
    After a successful registration, the following screen appears.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002D.png)
    

4.  Next, click on the **URL** that was sent to your email address used to register the account. A screen that prompts you to set up a new password appears.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002E.png)
    

5.  To invoke the Salesforce APIs, a security token is needed. Log in to your Salesforce account, and click on **My Settings**, shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300002F.png)
    

6.  Click on Reset My Security Token in the **Personal** section.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000030.png)
    

7.  Click on **Reset Security Token**. The token is then mailed to the email account that was used to create the Salesforce.com account. Save the security token information because it is needed to configure the client application of the demo.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000031.png)
    
    After the new token is created and emailed, the following screen is displayed.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000032.png)
    

Configuring Foundry Server
===============================

Before configuring Foundry, it is assumed that you have registered with the SalesForce.com account as mentioned in the earlier section.

1.  Type [manage.voltmx.com](http://manage.voltmx.com/) in your browser. Enter the user name and password for the cloud account that has been set up. Click Sign In.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000033.png)
    

2.  The following screen appears. Click Apps on the top left corner.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000034.png)
    

3.  The applications screen appears. Click on the Custom Apps icon.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000035.png)
    

4.  The following screen appears. Click on Configure new to configure the Identity Service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000036.png)
    

5.  Click on edit (pencil**)** icon as shown below to modify the name of the application.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000037.png)
    
    After the name of the application is changed, the following screen displays. In this sample, the name of the application is “FoundryCRMDemo.”
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000038.png)
    

6.  Complete the fields in the Identity Configuration screen, shown below. The **clientId** and **clientSecret** that were retrieved by registering with Salesforce.com (as mentioned in the earlier Salesforce sign-up section) will need to be entered to invoke the APIs that are exposed by SalesForce.com. Click on Save when done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000039.png)
    
    After the identity service is successfully created, the following screen displays.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003A.png)
    

8.  Click on Integration under the Configure section. Click on **Configure New** to configure new integration services.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003B.png)
    

9.  Enter the information as shown below for the service definition of Account. The userID and password are retrieved after registering with Salesforce as discussed. Choose Use Existing Identity Provider for the AuthenticationType, and select the identity that has been created earlier from the dropdown. Click Save and Continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003C.png)
    

10.  Click on the **Integration** tab and then click Operation to select the object and operations to be added. Choose the **Account object** from the object drop-down list. Choose the Select All option from the **Operation** drop-down list.  Click on Add Operation and then Done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003D.png)
    

11.  The following screen appears after the operations are added. The next step is to test if the designated object is configured correctly. Click on getAccount under the **Name** column.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003E.png)
    

12.  Copy the string “SELECT name, type, BillingCity, BillingState, AnnualRevenue, website, Industry, phone, BillingStreet from Account where type!=null” in the Test Value field, shown below. Click Test. If the query runs successfully, the result of the query execution will appear on the right (shown below). Click Cancel to exit the screen and perform the configuration of a new service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003F.png)  
    

13.  Configure the service definition of Lead. Click on Configure New in the screen below that allows you to configure a new service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000040.png)
    

14.  Complete the fields in following screen. Click Save & Continue. MoblieFoundry displays a screen to choose the operations of the Lead object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000041.png)
    

15.  Select the **Lead** under the **Object** column and “**getLead**” as the operation. Click on **Add Operation** and Done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000042.png)
    

16.  Click on “**getLead**” under the Operation column. Copy “SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead” in the Test value column. Click Test.
    
    If the configuration is correct, the response will appear on the right.
    
    Click Cancel to display the screen that allows the creation of a new service definition.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000043.png)
    

17.  Click on **Integration** in the screen below to create the service definition of Opportunity.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000044.png)
    

18.  Complete the fields shown below. Click Save and Continue to display the screen to choose the operations for the Opportunity object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000045.png)
    

19.  In the screen below, choose the **Opportunity** object and “**getOppurtunity**” operation. Click Add Operation.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000046.png)
    

20.  In the screen below, click “**getOpportunity**.” which allows to test the **getOpportunity** operation by entering sample query.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000047.png)
    

21.  Enter “SELECT name, Amount, CloseDate, Type, LeadSource, StageName, ExpectedRevenue, Probability from Opportunity” in the Test Value. Click Test.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000048.png)
    

22.  If a response alert is displayed, click OK. If the configuration is correct, the results will appear on the right.Click Cancel to move to the next screen to create the service definition for “Contact” object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000049.png)
    

23.  Click on Configure New in the following screen to create the service definition for Contact, and display the following screen.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004A.png)
    

24.  Complete the following fields. Click Save and Continue to display a screen to choose the operations of “Contact” object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004B.png)
    

25.  Select the **Contact** object from the drop-down list, and choose **All Operations**. Click Add Operation to choose the operations needed for the Contact object. And display the screen with all the exposed operations of the Contact object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004C.png)
    

26.  Click getContact in the following screen to test the operation by executing a test query. 
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004D.png)
    

27.  Enter “SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact” in the “Test Value” column. Click Test. If the configuration is correct, the results display on the right in the screen below. Click Cancel when done.  The screen that allows you to publish the application displays. 
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004E.png)
    

28.  To publish the application, click Publish on the top menu. Select the Demo Environment, and click **Publish**. Once publication is successful, the “Not Published” text below will be updated with a green “Published” message.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004F.png)
    

29.  After the application is published, click the key symbol next to the environment name.  In our example, the environment name is “Demo Environment.” Record the **App Key**, **App Secret**, and **service URL**.  You will use those data later to configure the client application.

Installing the Demo Application
===============================

This section discusses the details of the download and configuration of the demo application. You will also learn how to install of the application on an emulator and an Android device.

Download and Configure the Demo Application

1.  Type [https://github.com/voltmx/VoltMXFoundry\_Demo\_PhoneGap](https://github.com/voltmx/VoltMXFoundry_Demo_PhoneGap) in your browser. Click on Download Zip on the right of the screen, shown below. A zip of the application installs.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000050.png)
    

2.  Set the path to the ant bin folder as ant will be used later by Cordova to build the platform folder needed for Android. This path can be set by typing the following in the Windows Command Prompt window where the other Cordova commands will be run. In the current install, the path is set as below:
    
    set PATH=%PATH%;C:\\EclipseInstall\\eclipse-java-luna-SR2-win32-x86\_64\\eclipse\\plugins\\org.apache.ant\_1.9.2.v201404171502\\bin
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000051.png)
    

3.  Type the command: “`echo %PATH%`” to check if the path is set correctly. The path in the window below shows that the set path command in the previous step was executed correctly.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000052.png)
    

4.  Unzip the **Demo\_PhoneGap** file you downloaded earlier. Open the **config.js** file that is located in the `voltmx/www/``js` folder.
5.  Change the Default Username  and Default Password to match the username and password that was set up in Salesforce.
    
    The AppKey, AppSecret and ServiceURL will be the same as what you saved when the application is published. The IdentityService, AccountIntegrationService LeadIntegrationService, ContactIntegrationService and OpportunityIntegrationService will contain the names of the services as configured in the Foundry console.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000053.png)
    

6.  Open a Windows Command Prompt window. Navigate to the project folder. In the current application (the project folder is voltmx).
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000054.png)
    

7.  Delete the platforms and plug-ins folders.

8.  Add the required plug-ins by typing “cordova plugin add org.apache.cordova.device” and “cordova plugin add com.voltmx.sdk.” These commands are to be run from the voltmx folder, shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000055.png)
    

9.  Add the Android folder under the platforms by typing “cordova platform add [android@3.7.1](mailto:android@3.7.1)” shown in the following screen. Click on the Eclipse **icon** in the Eclipse install folder as explained in earlier steps.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000056.png)
    

10.  After launching Eclipse, click on **File - > Import** to display an import screen. Choose Existing Android Code into Workspace. Click Next.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000057.png)
    

11.  From the **Import Projects** screen, browse to the folder where the project was unzipped to earlier.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000058.png)
    

12.  Select the K**ony** folder, and click OK.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000059.png)
    

13.  The Import Projects screen appears with the two projects to be imported. Click Finish.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005A.png)
    

14.  After the project is imported, open the `MainActivity.java` file under the src folder. Replace the code in MainActivity.java with the code below. Save the file.
```
package com.popcorn.voltmx;
    import android.os.Bundle;
    import org.apache.cordova.\*;
    import com.voltmx.sdk.VoltMXCordovaHelper;
    public class MainActivity extends CordovaActivity
    
    {
    
        @Override
    
        public void onCreate(Bundle savedInstanceState)
    
        {
    
            super.onCreate(savedInstanceState);
    
            super.init();
    
            // Set by <content src="index.html" /> in config.xml
    
            super.loadUrl(Config . getStartUrl());
    
            VoltMXCordovaHelper.init(appView, this);
    
        }
    
    }
    
```
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005B.png)
    

15.  Next the application will be installed on an emulator that has to be configured. Click on **Window -> Android Virtual Device Manager** in Eclipse as shown in the screen below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005C.png)
    

16.  In the Android Virtual Device Manager screen, click Create. To display all the Android Virtual Devices that are already configured. You can create new AVDs if needed.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005D.png)
    

17.  Enter the AVD name and the details, as shown below, by selecting options from the drop-down boxes. Click OK to create the new AVD.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005E.png)
    

18.  Choose the AVD that was created in the earlier step and click Start. A launch screen displays.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300005F.png)
    

19.  Click Launch to launch a new AVD instance.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000060.png)
    

20.  Deploy the application in the simulator by right-clicking on VoltMX, project and choosing **Run As -> Android** **Application**. This launches the application in the emulator and the log\-in screen of the application, shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000061.png)
    

21.  Click **Sign In**. The Dashboard screen appears as below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000062.png)
    

22.  Click Contacts to display a list of all contacts.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000063.png)
    

23.  Click a specific contact to display related details, shown below.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000064.png)
