

Installing the Demo Application
===============================

This section discusses the details of the download and configuration of the demo application. You will also learn how to install of the application on an emulator and an Android device.

Download and Configure the Demo Application

1.  Type [https://github.com/voltmx/VoltMX Foundry\_Demo\_PhoneGap](https://github.com/voltmx/VoltMXFoundry_Demo_PhoneGap) in your browser. Click on Download Zip on the right of the screen, shown below. A zip of the application installs.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000050.png)
    

2.  Set the path to the ant bin folder as ant will be used later by Cordova to build the platform folder needed for Android. This path can be set by typing the following in the Windows Command Prompt window where the other Cordova commands will be run. In the current install, the path is set as below:
    
    set PATH=%PATH%;C:\\EclipseInstall\\eclipse-java-luna-SR2-win32-x86\_64\\eclipse\\plugins\\org.apache.ant\_1.9.2.v201404171502\\bin
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000051.png)
    

3.  Type the command: “`echo %PATH%`” to check if the path is set correctly. The path in the window below shows that the set path command in the previous step was executed correctly.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000052.png)
    

4.  Unzip the **Demo\_PhoneGap** file you downloaded earlier. Open the **config.js** file that is located in the `voltmx/www/``js` folder.
5.  Change the Default Username  and Default Password to match the username and password that was set up in Salesforce.
    
    The AppKey, AppSecret and ServiceURL will be the same as what you saved when the application is published. The IdentityService, AccountIntegrationService LeadIntegrationService, ContactIntegrationService and OpportunityIntegrationService will contain the names of the services as configured in the VoltMX Foundry console.
    
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
