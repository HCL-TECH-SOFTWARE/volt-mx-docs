                              

User Guide: [Manage Client App Assets](Manage_Client_App_Assets.md) > [Uploading Client Binaries](Upload_Client_Binaries.md) > Uploading Native Client Binaries

Uploading Native Client Binaries to Volt MX Foundry
--------------------------------------------------

> **_Note:_** Volt MX 9.2 does not support the building of Windows native applications. Please disregard all references to Windows in this topic.

To upload native client binaries to Volt MX Foundry, follow these steps:

1.  In Volt MX Foundry Console, in the **Applications** page, click **Custom Apps** > **ADD NEW** to create an app. For more details, refer to [How to Add Applications](Adding_Applications.md).
2.  In the app configuration page, click the **Manage Client App Assets** tab.
3.  For uploading native client binaries, click the required tabs for platforms such as iOS, Android, and Windows. By default, **iOS** tab is selected.
1.  Click **UPLOAD** for each the device type you want upload binaries.
2.  In the Upload dialog, drag the binary file or click **Browse** to locate the binary file.

The following native client binary file formats are supported for platforms.

*   For uploading binaries for iOS Phone and iOS Tablet, select a `.ipa`  file.
*   For uploading binaries for Android Phone and Android Tablet, select an `.apk`  file.
*   For uploading binaries for Windows Phone, select a `.appx` or  `.xap` file.

3.  In the **Display Name** field, specify the name of the application. This field is optional.
    
    > **_Note:_** If the display name is not specified for the app binary, the published app is displayed with the default Volt MX Foundry app name.
    
4.  In the **Version** field, enter the version for the binary file.
5.  Upload a .png file for your app icon. The .png file scale is 120X120x. Also, you can upload screen shots for your app.
6.  In the **Description** filed, enter the description for the binary file.
7.  Click **UPLOAD** in the dialog. The selected binary files for each platform are uploaded to Volt MX Foundry Console.  
    
    You can download and delete these binaries from the Console. To download the native client binary, click **Download**.  
    To delete the uploaded binary file, click the **Delete** button. In the **Delete Client Binary** dialog, click **DELETE** to confirm the deletion.
    

After you upload native client binaries in Volt MX Foundry Console, you can publish these binaries to an EAS Environment. For more details, refer to [Publishing Native Client Binaries from Volt MX Foundry to Volt MX EAS](EnterpriseAppStore.md#publishing-apps-to-eas-app-server).
