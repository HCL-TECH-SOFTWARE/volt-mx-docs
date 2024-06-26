Installing Volt MX Iris Starter - Silent Mode
================================================

Volt MX  Iris Starter can also be installed through Unattended/Silent Installation process.

This section of the document provides you with the instructions for installing and configuring Volt MX Iris Starter.

Make sure that you have the required hardware and access to the supporting software as mentioned in the Prerequisites section.

Make sure you have proper administrative rights to install Volt MX Iris Starter on your computer.

You also need a user where Volt MX Iris Starter will be installed.

The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

**To install Volt MX Iris Starter in Unattended/Silent mode, follow these steps:**

1.  Download **VoltMX Iris Starter** installer file from [http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads). The installer is downloaded as `ViInstaller_PC.zip` file to your computer.
2.  Extract the contents of the zip file.
3.  Open a DOS window (Command Prompt), and navigate to the location where the installer is located.
4.  Open the `installer.properties` file and provide inputs for the required properties. You can follow the comments in the `installer.properties` file for more details.
5.  Save the `installer.properties` file.
    
    Make sure that the Installer and the properties file are located in the same folder.
    
6.  At the prompt, type `ViInstaller_PC.exe -i silent`, and press **Enter** to install Volt MX Iris Starter.

> **_Note:_** If the properties file has another name, for example **silent\_installer.properties**, type the following in the command prompt and press Enter to install Volt MX Iris Starter:  
`ViInstaller_PC.exe -i silent -f "silent_installer.properties"`

