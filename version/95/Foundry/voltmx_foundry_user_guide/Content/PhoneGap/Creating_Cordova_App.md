                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Creating a Cordova App

Creating a Cordova App
======================

  To create an application and build it using the Cordova command-line interface (CLI), follow these steps:

1. Run the following command in the command prompt:  
   ```
   npm install –g cordova
   ```

2. Now run the following command:  
   ```
   Cordova create AndroidPhoneGapApp com.voltmx MyApp  
   ```  
   In this command, `AndroidPhoneGapApp` is the name of the
   project folder, `com.voltmx` is the namespace, and
   `MyApp` is the name of the project or application. The order of parameters is fixed.
   > **_Note:_** If you do not specify **com.voltmx** and  **MyApp** parameters, by default the namespace will as "com.
   hello" and creation of the project will require more time.   
   The default app name is HelloCordova after the app gets installed.
    
3. Run the following command to navigate to the project
   folder.  
   ```
   cd AndroidPhoneGapApp
   ```
4. Run the following command to add the Android platform.  
   ```
   cordova platform add android
   ```
   (You can add other platforms such as iOS and BlackBerry.)
    
5. Run the following command to install the plug-in device -
   such as UUID. This step is mandatory.  
   ```
   cordova plugin add cordova-plugin-device
   ```
6. Run the following command to install the plug-in,
   **InAppBrowser**. For example, if you use Oauth/SAML provider for authentication, this plug-in is required. This step is mandatory.  
   ```
   cordova plugin add cordova-plugin-inappbrowser
   ```
7. Run the following command to get the console logs. This step
   is optional.  
   ```
   cordova plugin add cordova-plugin-console
   ``` 
   > **_Note:_** This plugin has been deprecated. For more information, click [here](https://www.npmjs.com/package/cordova-plugin-console).
    
8. Copy the `com.voltmx.sdk` from `voltmx-phonegap-sdk-sdk`, and
   paste `com.voltmx.sdk` into the app root folder.

9. Run the following command to add Volt MX Foundry plug-in into
   your applications:
   ```
   cordova plugin add com.voltmx.sdk  
   ```

10. Add the buttons or required widgets in the `index.html`
    file, and map them to the required functions by including the respective `JS Scripts`. Use Script tag, and include the required  `.js`  files.

11. Run the following command to deploy your app:  
   *   on Android platform:  
       ```
       cordova emulate android  
       or  
       cordova run android
       ```
   *   on iOS platform:  
       ```
       cordova build ios
       ``` 
After running this command, the system generates the xcode project under the `platform/ios` folder. Open the xcode and run the ios phonegap app.
