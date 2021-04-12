---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")


Steps to create an .aar file
----------------------------

Prerequisites: Ensure that the gradle path in the environmental variables is supported by Android Studio.

1.  Launch Android Studio -> Create a new Android Studio Project -> Create new android library module.

1.  Open the source folder of FFI and copy the folder in which the FFI code is present.
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_601x291.png)
    

1.  Paste the copied folder in the created Android Studio Library module.
    
    PATH: <Android Studio Workspace>/<Project Folder><Library folder Name>/src/main/java 
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_1_601x291.png)
    

1.  Open the FFI source and copy the required libraries.
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_2_601x291.png)
    
2.  Paste the previously copied libs required by your project in the **Libs** folder in Android Studio.
    
    Path: <Android Studio Workspace>/<Project Folder><Library Folder>/libs
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_4.png)
    

1.  In the `build.gradle` file under the created library module, add the dependencies that are required for the project.
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_5.png)
    

1.  Clean and build the project in Android Studio.
    
    After building the project, a .aar file will be generated in the following path:
    
    <Android Workspace>/<Project Folder>/<Library Folder>/build/outputs/aar
    

### Integrating the generated .aar into Volt MX Iris

1.  Copy the .aar file from the following path:
    
    <Android Workspace>/<Project Folder>/<Library Folder>/build/outputs/aar
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_6.png)
    
2.  Paste it in the following path of the Volt MX project:
    
    <VoltMX Iris Workspace>/<Project Folder>/resources/customlibs/libs/android/
    
    ![](../Resources/Images/MADPUpgradeDoc/Steps_to_create_an_aar_file_7_601x297.png)
    
3.  Open the .aar file archive and remove the voltmxwidgets.jar file.
