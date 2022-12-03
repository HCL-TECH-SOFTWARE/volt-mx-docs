                            


Generating Firebase Cloud Messaging (FCM) Server Key and Sender ID for Android Devices
======================================================================================

The first step in the installation and configuration of the sample Engagement application on an Android device is the generation of the sender ID. Android devices use the sender ID to register with FCM and receive notifications.

1.  Open the Google developer's console window by logging into: [https://console.firebase.google.com/](https://console.firebase.google.com/)
    
    The **Google Developer’s** account **Sign in** page appears.
    
    ![](Resources/Images/newgcm1.png)
    
2.  Enter your Google credentials. Click **Sign in** to continue.
    
    The **Welcome to Firebase** page appears.
    
    ![](Resources/Images/newgcm2_579x204.png)
    
3.  Click **Create New Project**.
    
    The **Create a project** dialog box appears.
    
    ![](Resources/Images/newgcm3.png)
    
4.  Enter details for the following fields:
    
    *   **Project name**: Enter the project name. Based on the project name, the system generates the project ID. The project name is used in the Google console and the project ID identifies the project name.
    *   **Country/region**: Select the required country from the drop-down list.
    
    ![](Resources/Images/newgcm4.png)
    
5.  **Cancel**: Click **Cancel** to close the **Create a project** dialog box.
6.  Enter the required details. Click **Create Project** to continue.
    
    The **Welcome to Firebase! Get started here** page appears.
    
7.  Click the wheel icon next to the **Engagement Services Demo App** label in the left menu bar.
    
    ![](Resources/Images/wheelfirebase.png)
    
    The **Project settings** drop-down list appears.
    
    ![](Resources/Images/newgcm5_580x286.png)
    
8.  Click **Project Settings** from the drop-down list.
    
    The **Settings** page appears. Here you can view the **Project name**, **Public**\- **facing name**, **Project ID**, and the **Web API Key** for your reference.
    
    ![](Resources/Images/newgcm6_577x264.png)
    
    You can edit the **Project name** and the **Public**\-**facing name**.
    
9.  Under **Settings**, click the **Cloud Messaging** tab next to the **General** tab.  
    The **Project credentials** section appears. The **Project credentials** section displays the **Firebase Cloud Messaging** token, **Sender ID**, and the **Server key**.
    
    ![](Resources/Images/newgcm7_577x258.png)
    
10.  Copy the **Sender ID**. You use the **Sender ID** in the client-side application to register to FCM from the device.
11.  Copy the **Server Key**. You use the **Server Key** in the Engagement server while creating an application.
