                         


Installing Volt MX Foundry - Silent-mode
=======================================

Volt MX  Foundry can also be installed through Unattended/Silent Installation process.

> **_Note:_**  If a user installs Volt MX Foundry Console on a partition different from the user's home directory, the user must have read/write execute permissions.

This section of the document provides you with the instructions for installing and configuring Volt MX Foundry Console.

> **_Important:_**  Ensure that you have the required hardware and access to the supporting software as mentioned in the [Prerequisites](Prerequisites.md) section and performed the steps as mentioned in the [Pre-installation Tasks](Pre-installation_Tasks.md) section.

Make sure you have proper administrative rights to install Volt MX Foundry on your computer.

You also need a user where Volt MX Foundry will be installed.

The **<Install Location>** directory contains the log files logging each invocation of the installer. To make problem identification easier, provide these log files to Volt MX when reporting an issue.

To install Volt MX Foundry Unattended/Silent Installation, follow these steps:

1.  Download `VoltMXFoundrySetup.zip` file from [](http://developer.voltmx.com/VoltMXReleases)[https://hclsoftware.flexnetoperations.com](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.2.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=true&fromDL=false), and extract the file.
2.  Open a DOS window (Command Prompt), and navigate to the location where the installer is located.
3.  Open the `installer.properties` file and provide inputs for the required properties. You can follow the comments in the .properties file for more details.
4.  Save the `installer.properties` file.
5.  At the prompt, type `VoltMXFoundryInstaller-9.x.x.x_GA.exe -i silent -f installer.properties`, and press **Enter**.

> **_Note:_** If the file name is installer.properties and is in the same location as VoltMXFoundryInstaller-8.x.x.x.GA.exe file, then the option -f is not required in the silent installation. But if the file name is changed to other than installer.properties, then you must use -f option irrespective of file location.
