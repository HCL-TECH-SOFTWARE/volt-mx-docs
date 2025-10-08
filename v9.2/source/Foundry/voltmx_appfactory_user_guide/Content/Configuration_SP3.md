                          

Configuration
-------------

To run a build flow navigate to the **buildIrisApp** job under new App Factory project folder, select **Build with Parameters** button in the menu on the left side of the screen. If it is the first time you perform a build, you need to configure the build job. For future builds, the App Factory stores the settings from the previous build to make configurations of the future builds easy. The following steps and screenshots show how to access the **Build with Parameters** for the job.

1.  Open an app project folder and navigate to **Iris/Builds/buildIrisApp**.

![](Resources/Images/Iris_Builds.png)

3.  You can execute **Build with parameters** on the job in the following ways.
    
    *   On the right of job list, you can select the icon which represents **Build with Parameters** action.
    *   You can open drop-down menu at the **buildIrisApp** job and choose **Build with Parameters** action from the list.
    *   You can open the **buildIrisApp** job and execute **Build with Parameters** action on the left panel of the job.
    
    ![](Resources/Images/BuildWithParameters.png)
    
4.  At the third the user can open the **buildIrisApp** job and execute **Build with Parameters** action at the left panel of the job.

![](Resources/Images/Config_BuildWithParameters.png)

The **buildIrisApp** job allows you to choose multiple channels to build, what environment you want to deploy to and the mode to build the application. Before running the build, you need to provide all required parameters that are listed and choose required channels to build.

There are several groups of parameters that are required to run Facade job. The parameters are as following:

1.  **Source control related**
    *   **PROJECT\_SOURCE\_CODE\_BRANCH** - branch required to point Git client to the branch you push your application code. Git is supported only.
    *   **PROJECT\_SOURCE\_CODE\_REPOSITORY\_CREDENTIALS\_ID** is required for access to repository where your Iris project is stored.
        
        > **_Important:_** Provide Git credentials depending on git URL format. If https link is provided, then user credentials (Username and password) are sufficient. In case of ssh link - ssh key needs to be added.
        
    
    ![](Resources/Images/source_control.png)
    
    > **_Note:_** If your repository is protected with 2fa in GitHub, add the credentials using **secret text** method. For steps, refer [Adding New Source Code Repository Credentials.](ManagingCredentials.md#Adding_SourceCode)
    
2.  **VoltMX Iris & Volt MX Foundry related parameters**:
    *   **BUILD\_MODE** allows Debug, Release, or Release-Protected mode. Debug build mode adds debug information at binaries that increase their size and allows debug problematic code.
        
        ![](Resources/Images/Build_Mode_598x86.png)
        
        > **_Note:_** If you are building your project for automated testing, you must build your project in **Release** or **Release-protected** mode.  
          
        If you build in **Debug** mode, the landing screen in the generated app will be VoltMX's debugger screen (which your test automation scripts will most likely not be prepared to navigate away from).  
          
        If you choose to build your Iris project in **Release** mode, this mode will not enable additional security and build the application in release unprotected mode.  
          
        If you choose to build your Iris project in **Release-protected** mode, this mode enables additional security with encryption keys. This is the value you enter in build UI mode at **Project Settings**\>> **Native**\>> **iPhone/iPad/Watch or Android** >> **Protected Mode** in Iris.  
        For more information about the protected mode, refer Iris User Guide.
        
        > **_Important:_** Set the Android KeyStore options for Release build mode. Refer to description of Android related parameters.
        
    *   **CLOUD\_CREDENTIALS\_ID** - Volt MX Cloud credentials
    *   **FOUNDRY\_APP\_CONFIG** - Volt MX Foundry app name, environment name, app key, secret, service URL credentials type parameter, that is used to insert corresponding list of values into the Iris app. This is to use these values to initialize the client SDK and point to the right Volt MX Foundry app in the right cloud Environment.
    *   **DEFAULT\_LOCALE** - Example: EN
    
    ![](Resources/Images/iris_fab_601x200.png)
    
3.  Parameters used for enabling corresponding channel build. Click the checkbox provided across the channel to enable the channel build.
    *   **ANDROID\_UNIVERSAL\_NATIVE**
    *   **ANDROID\_MOBILE\_NATIVE**
    *   **ANDROID\_TABLET\_NATIVE**
    *   **IOS\_UNIVERSAL\_NATIVE**
    *   **IOS\_MOBILE\_NATIVE**
    *   **IOS\_TABLET\_NATIVE**
        
        > **_Important:_** App ID must be registered prior to the build of any Apple artifacts! Please refer to: [Maintaining Identifiers, Devices, and Profiles](http://developer.apple.com/).
        
    *   **ANDROID\_MOBILE\_SPA**
    *   **ANDROID\_TABLET\_SPA**
    *   **IOS\_MOBILE\_SPA**
    *   **IOS\_TABLET\_SPA**
    *   **DESKTOP\_WEB**
    
    ![](Resources/Images/target_channels_600x413.png)
    
4.  Android related parameters:
    *   **ANDROID\_UNIVERSAL\_APP\_ID** - Provide the Universal app (Mobile and Tablet) unique application ID, to identify your app on the device and in Google Play Store. Universal app ID is the value you enter in build UI mode at **Project Settings**\>> **Native**\>> **Android**\>> **Package Name**.
        
        **Example**: `com.voltmxappfactory.KitchenSink`
        
    *   **ANDROID\_MOBILE\_APP\_ID**\- Provide the unique application ID of your mobile app, to identify your app on the device and in Google Play Store. Unique application ID is the value you enter in a build UI mode at **Project Settings** >> **Native** >> **Android** >> **Package** **Name**.
        
        **Example**: `com.voltmxappfactory.KitchenSink`
        
    *   **ANDROID\_TABLET\_APP\_ID** - Provide the unique application ID of your tablet app, to identify your app on the device and in Google Play Store. Unique application ID is the value you enter in a build UI mode at **Project Settings** >> **Native** >> **Android** >> **Package Name**.
        
        **Example**: `com.voltmxappfactory.KitchenSink`
        
    *   **ANDROID\_APP\_VERSION** - A version of the Android application used to enter in build UI mode at **Project Settings** >> **Application** >> **Version**.
        
        **Example**: 1.0.1
        
    *   **ANDROID\_VERSION\_CODE** - App internal version number is used to determine the recent versions (higher numbers indicating the more recent versions). You enter the app internal version number in build UI mode at **Project Settings** >> **Native** >> **Android** >> **Version Code**.
        
        **Example**: An integer value such as 1.
        
    *   **GOOGLE\_MAPS\_KEY\_ID** - To us the Google Maps Android API, you must provide Google API key [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)
    *   **ANDROID\_KEYSTORE\_FILE** - The keystore file which stores the key that is used to sign in the Android binary. Allowed formats include .keystore, .jks.
        
        For more information, refer official Android documentation after signing.
        
        > **_Note:_** **ANDROID\_KEYSTORE\_FILE** is an optional field for Android debug mode builds.
        
    *   **ANDROID\_KEYSTORE\_PASSWORD** - The password for the keystore file selected.
        
        For more information, refer official Android documentation after signing.
        
        > **_Note:_** **ANDROID\_KEYSTORE\_PASSWORD** is an optional field for Android debug mode builds.
        
    *   **ANDROID\_KEY\_PASSWORD** - The password to the key in the keystore file used to sign in to Android library.
        
        For more information, refer official Android documentation after signing.
        
        > **_Note:_** **ANDROID\_KEY\_PASSWORD** is an optional field for Android debug mode builds.
        
    *   **ANDROID\_KEY\_ALIAS** - The alias of signing key inside the keystore. For references, click **Sign Your App** in Android Studio help.
        
        > **_Note:_** **ANDROID\_KEY\_ALIAS** is an optional field for Android debug mode builds.
        
    
    ![](Resources/Images/android_related_parameters_600x435.png)
    
5.  Apple related parameters:
    *   **APPLE\_ID** - credentials at [https://developer.apple.com](https://developer.apple.com/). The account is used to generate certificate and for signing iOS app.
    *   **APPLE\_SIGNING\_CERTIFICATES** - Upload an Apple Signing Certificate to App Factory to sign your app for iOS native channels.
        
        ![](Resources/Images/Apple_Signing_Certs_609x45.png)
        
        **Adding a new signing certificate**: To add a new signing certificate, follow these steps:
        
        1.  Click **Add** drop-down list that displays the list of **Credential Providers** across **APPLE\_SIGNING\_CERTIFICATES**.
        2.  Select a **Credential Provider** from the list.
            
            The **Add Credentials** window displays. Enter the following details to add a new signing certificate:
            
            *   **Domain**: Displays the domain name as **Global Credentials (Unrestricted)**.
            *   Choose **Kind** as **Apple Signing Certificates** from the drop-down list.
                
                ![](Resources/Images/Apple_Signing_Cert_kind_456x116.png)
                
            *   **Scope**: Determines where the signing certificate is used. The Global credential is available to the object on which the credential is associated and on all the child objects of the object. Typically, you must use the global-scoped credentials for jobs.
            *   Enter **ID**. It is an internal unique ID used to identify the credentials from jobs and other configuration.
            *   Enter **Description** for the signing certificate.
            *   Upload the **Provision Certificate** to sign the IPA.
            *   Enter a password for the uploaded provision certificate.
            *   Upload a **Mobile Provisioning Profile**.
                *   For single profile, upload a mobile provision file.
                *   For multiple profiles, you must upload a zip that contains multiple mobile provision profiles.
            *   Click **Add**. The new signing certificate is added in **buildIrisApp** project.
                
                ![](Resources/Images/Apple_Signing_Certs_data_502x300.png)
                
        3.  Click **APPLE\_SIGNING\_CERTIFICATES** drop-down list to find the new certificate.
            
            ![](Resources/Images/Apple_Signing_Cert_Drop-down.png)
            
        4.  Select the certificate.
            
            ![](Resources/Images/Apple_Signing_Cert_Added_527x38.png)
            
        
        > **_Note:_** **APPLE\_ID** or **APPLE\_SIGNING\_CERTIFICATES** only one of the two parameters is mandatory.
        
        > **_Note:_** Currently, App Factory is not supporting wild card provisioning profiles.
        
        > **_Important:_** Ensure the uploaded certificate (or) profile has not expired. If the uploaded certificate (or) profile expires, the build fails and system throws an error.
        
    *   **APPLE\_DEVELOPER\_TEAM\_ID** - You must provide a parameter when your Apple ID is a part of multiple development teams. You can skip the parameter if you are enrolled in the **Apple Developer Program** as an individual. You can get a value for Apple Developer Team ID by signing in to the [developer.apple.com/account](https://developer.apple.com/account) and under **Membership** select **Team ID**.
        
        > **_Note:_** If your first build of a project on App Factory has a value for APPLE\_DEVELOPER\_TEAM\_ID, you need to enter the value for this field in each build.  
        If the field is empty for the first build of the project, it has to remain the same for all the upcoming builds.
        
    *   **IOS\_UNIVERSAL\_APP\_ID** - A bundle ID for Universal application (Mobile and Tablet), used to provision devices and by the operating system when the app is distributed to customers. Universal app ID is the value you enter in build UI mode at **Project Settings**\>> **Native** >> **iPhone/iPad/Watch**\>> **Bundle Identifier**.
        
        **Example**: `com.voltmxappfactory.KitchenSink`
        
    *   **IOS\_MOBILE\_APP\_ID** - A bundle ID for mobile application is used to provision devices and operating system when the app is distributed to customers. The value for iOS\_MOBILE\_APP\_ID is entered in build UI mode at **Project Settings** >> **Native** >> **iPhone/iPad/Watch** >> **Bundle Identifier**.
        
        **Example**: `com.voltmxappfactory.KitchenSink`
        
    *   **IOS\_TABLET\_APP\_ID** - A bundle ID for a tablet application is used to provision devices and operating system when the app is distributed to the customers. The value for iOS\_TABLET\_APP\_ID is entered in build UI mode at **Project Settings** >> **Native** >> **iPhone/iPad/Watch** >> **Bundle Identifier**.  
        **Example**: `com.voltmxappfactory.KitchenSink`
    *   **IOS\_APP\_VERSION** - A version of the iOS application used to enter in build UI mode at **Project Settings** >> **Application** >> **Version**.
        
        **Example**: 1.0.1
        
    *   **IOS\_BUNDLE\_VERSION** - A version of the application used to enter in build UI mode at **Project Settings**\>> **Native**\>**iPhone/iPad/Watch**\>>**Bundle Version**.
        
        **Example**: 1.0.1
        
    *   **IOS\_DISTRIBUTION\_TYPE**\- Apple developer profile is required for signing IPAs for Apple channels build. Check Distribution methods in Xcode help for the references.
        
        The purpose of distributing the build of your app to iOS Native channels is:
        
        *   **Development**: If you are building your app for testing and/or debugging.
        *   **Adhoc**: If you are building your app for QA and/or UAT.
        *   **Enterprise**: If you are building a release to distribute your app internally and your company is enrolled in Apple's Developer Enterprise Program, you must build your app in release mode.
        *   **App Store**: If you are building a release to distribute your app in public through an Apple App Store. You must build the app in release mode.
        
        If you are building your app to test using App Factory's DeviceFarm integration, you can select any of the above options.
        
        > **_Note:_** Both Development and Adhoc will allow you to install and run devices (you physically control) registered in your Apple Developer account. Adhoc will allow you to test using Apple's production level app services such as Push Notifications and so on.
        
        *   **APPLE\_WATCH\_EXTENSION**: Click the checkbox to build iOS app with Watch extension. If the checkbox is enabled, App Factory also builds iOS binary compatible for Apple watch.
        
        ![](Resources/Images/ios_related_parameters_600x525.png)
        
        > **_Note:_** Apple watch extension build can be triggered along with iOS build only.
        
6.  **Protected Build:**
    
    **PROTECTED\_KEYS** is used to enable additional security in application. This field is mandatory for release-protected mode build.
    
    ![](Resources/Images/Protected_Build_606x99.png)
    
    **Adding New Keys to the application**:
    
    HCL App Factory provides an option to build protected binaries for both Android and iOS platform using the Volt MX Iris tool. The Volt MX Iris tool allows you to add protected mode build support from App Factory.
    
    Perform the following steps to add a new build keys for the **buildIrisApp** job.
    
    1.  Click **Add** drop-down list displayed across PROTECTED\_KEYS.
        
        The drop-down list displays the list of **Credential Providers**.
        
    2.  Select a **Credential Provider** from the list.
        
        The **Add Credentials** window displays.
        
        ![](Resources/Images/Protected_Mode_Buid_Keys_612x310.png)
        
        Enter the following details to add a new protected keys.
        
        *   **Domain**: Displays the domain name as **Global Credentials (Unrestricted)**.
        *   Choose **Kind** as **VoltMX Protected Mode Build Keys** from the drop-down list.
            
            ![](Resources/Images/Protected_Build_Drop-down_516x132.png)
            
        *   **Scope**: Determines where the build keys are used. The Global credential is available to the object on which the credential is associated and on all the child objects of the object. Typically, you must use the global-scoped credentials for jobs.
        *   Enter **ID**. It is an internal unique ID used to identify the credentials from jobs and other configuration.
        *   Enter **Description**.
        *   Upload **Public Key**, **Private Key**, and **Fin Keys** files.
            
            > **_Note:_** Fin Keys must be provided as a zip file. It should not have any sub-folder within the zip.
            
            ![](Resources/Images/protected_keys_575x206.png)
            
        *   Click **Add**. The new **VoltMX Protected buildIrisAppMode Build Keys** is added in project.
    3.  Click PROTECTED\_KEYS drop-down list.
        
        You can find the new build keys in the drop-down list.
        
    4.  Select the new build keys.
        
        ![](Resources/Images/Selected_Keys_545x46.png)
        
7.  **DesktopWeb and SPA related parameters**
    *   **PUBLISH\_FOUNDRY\_APP** enabled if user want to publish the App to Volt MX Cloud.
        
        > **_Note:_** If you are building both DesktopWeb and SPA channels and the checkbox is selected, a combined archive is generated and published to the selected Volt MX Foundry environment.
        
    *   **WEB\_APP\_VERSION**: App version of the Web (DesktopWeb and SPA) application. The app version value is entered in the Build UI mode at **Project Settings**\>> **Application**\>> **Version**.
        
        **Example**: Version 1.0.1
        
        ![](Resources/Images/DesktopWeb_SPA_588x209.png)
        
    *   **FORCE\_WEB\_APP\_BUILD\_COMPATABILITY\_MODE**: Enable the checkbox to build the web app package using the older (war) extension. It is the value that you generally enter in the Build UI mode at **Project Settings**\>> **Application**\>> **Force Web App Build Compatibility Mode**.
        
        > **_Important:_** .war extension is not supported with multi-tenant environment in Volt MX Foundry.
        
        > **_Note:_** Newer extension (zip) is only supported with V8 service pack 2 on Volt MX Cloud. If your app is using a lower set of plugins, keep the checkbox enabled.
        
8.  **Custom Hooks** - This field is only applicable for Custom Hooks.
    
    **RUN\_CUSTOM\_HOOKS** click the checkbox for Custom Hooks execution.
    
    > **_Note:_** You can uncheck the check box to skip App Factory Custom Hooks execution.
    
9.  **Native** **Testing related Parameters** - The fields are applicable only if you wish to fire automated tests on native app generated by this build. 
    *   **AVAILABLE\_TEST\_POOLS** enables tests on selected device pool.
        
        ![](Resources/Images/testing_678x102.png)
        
    *   **RUN\_IN\_CUSTOM\_TEST\_ENVIRONMENT** click the checkbox to execute tests in Device Farm Custom Test Environment.
    *   **APPIUM\_VERSION** Enter the appium version to run your tests. For more information on supported versions of Appium on AWS DeviceFarm, refer Running a Test in App Factory.
        
        > **_Note:_** The parameter is valid only if RUN\_IN\_CUSTOM\_TEST\_ENVIRONMENT is selected.
        
10.  **Web Testing related Parameters:** The fields are applicable only if you wish to fire automated tests on web app generated by this build.
    *   **RUN\_DESKTOPWEB\_TESTS\_ARGUMENTS** allows you to pass arguments in Maven command to the DesktopWeb tests.
        
        **Example**: If you pass \-Dsurefire.suiteXmlFiles=resources/Testng.xml, the argument will trigger the tests present in resources/Testng.xml file. If you do not pass TestNG file, Testng.xml is selected as a default file.
        
    *   **AVAILABLE\_BROWSERS** allows you to select the browser to run the DesktopWeb tests.
        
        > **_Note:_** Currently, App Factory supports only Google Chrome version 68.0.3419.0 for DesktopWeb testing.
        
    *   **RUN\_DESKTOPWEB\_TESTS** - select the checkbox to execute DesktopWeb tests.
        
        ![](Resources/Images/Testing_001_656x246.png)
        
        > **_Important:_** **Prerequisites for testing:**  
        Appium tests must be placed under <project folder>/test/testNG folder.  
        Selenium tests (DesktopWeb tests) must be placed under <project folder>/test/testNG/DesktopWeb.
        
11.  **Notifications** - The following field is used to configure settings specific to notifications.
    
    **RECIPIENTS\_LIST** is comma-separated list of recipients e-mails.
