                           

Generating an Apple Push Notification Service (APNS) Certificate
================================================================

The APNS certificate is needed for the iOS devices to register with Apple to receive notifications. To generate the APNS certificate, follow these steps:

1.  The first step to generate an Apple Push Notification Service (APNS) certificate is to generate a certificate request (CSR) file. The certificate request (CSR) file is used to request a development SSL certificate. To generate a CSR file, launch the **Keychain Access** application from the LaunchPad.
    
    ![](../Resources/Images/Overview/Apps/image_4_595x376.png)
    
2.  Select the **Keychain Access** > **Certificate Assistant** > **Request a Certificate From a Certificate Authority** to create an SSL certificate.![](../Resources/Images/Overview/Apps/image_5_575x352.png)
3.  Enter the email address and the common name in the screen below and select the option **Saved to disk**. Click **Continue**.![](../Resources/Images/Overview/Apps/image_6_578x417.png)
4.  In the screen below, change the file name extension in **Save As** to CSR. Click **Continue**.![](../Resources/Images/Overview/Apps/image_7_595x419.png)
5.  Click **Done** to create the CSR request and save it on your computer.![](../Resources/Images/Overview/Apps/image_8_591x421.png)
6.  Log on to the [developer.apple.com](http://developer.apple.com/) site with your Apple user ID. If you don’t have an Apple developer account, go ahead now and register with Apple.
    
    ![](../Resources/Images/Overview/Apps/Image_1.png)
    
7.  Click **Sign In** to continue.
8.  The next step is to craete an app ID for push notifications. On Developer Account page, click **Certificates, IDs and Profiles** in the left pane to continue. The **Certificates, Identifiers and Profiles** page appears.
    
    ![](../Resources/Images/Overview/Apps/Cetid_pr_589x562.png)
    
9.  Click **App IDs** under **Identifiers** in the left pane to add a new App Id. The **iOS App IDs** page appears with a list view of existing App IDs.
    
    ![](../Resources/Images/Overview/Apps/iosappids_594x599.png)
    
10.  Click plus sign next to the label **iOS App IDs**.The **Register iOS App IDs** page appears.
11.  **Register iOS App IDS**: Enter the application name for the description and a bundle Id. Remember the bundle Id as it will be used to configure the application in Iris.
    
    ![](../Resources/Images/Overview/Apps/03000006_589x733.png)
    
12.  Ensure that **Push Notifications** is checked under the **App Services** section. Click **Continue**.
    
    ![](../Resources/Images/Overview/Apps/03000007.png)
    
13.  The screen below is the confirmation screen with all the details of the App Id that will be created. Click **Register** to continue.
    
    ![](../Resources/Images/Overview/Apps/image_11_578x817.png)
    
14.  The system displays the message that App Id is confirmed. Click **Done.**
    
    ![](../Resources/Images/Overview/Apps/image_10_488x691.png)
    
15.  The next few steps discuss the configuration of the **app ID** for push notifications. Select the app ID that was created.![](../Resources/Images/Overview/Apps/image_12_593x422.png)
16.  Click the application name (VMSDemoApplication in the example below) and click **Edit** to edit the information of the application Id chosen.
    
    ![](../Resources/Images/Overview/Apps/image_13_594x455.png)
    
17.  In **App ID Suffix** >**App Services** section, select **Push Notifications** option to create the development and production certificates. Click **Continue**.
    
    ![](../Resources/Images/Overview/Apps/image_14_470x263.png)
    
18.  To create a development certificate, click **Create Certificate** in the Development SSL Certificate section. Then, click **Done**.
    
    ![](../Resources/Images/Overview/Apps/image_15_591x558.png)
    
19.  The screen below describes the steps to create the Certificate Signing Request (CSR) but as these steps are already complete, click **Continue** to move to next step.
    
    ![](../Resources/Images/Overview/Apps/image_16_594x440.png)
    
20.  The next step involves choosing the **CSR** file that was generated earlier. Click **Choose File** option to upload the created request.
    
    ![](../Resources/Images/Overview/Apps/image_17_592x427.png)
    
21.  Click **Generate** after the CSR file is selected to complete the certificate creation.
    
    ![](../Resources/Images/Overview/Apps/image_18_602x430.png)
    
22.  Click **Done** on the display screen that shows that the certificate is created successfully.
    
    ![](../Resources/Images/Overview/Apps/image_19_597x423.png)
    
23.  Select com.voltmx.vmsapplicationdemo in the iOS Certificates and click **Download** to download the certificate.
24.  Double click aps\_production.cer in the **Downloads** folder to add it to the Keychain Access application.
    
    ![](../Resources/Images/Overview/Apps/image_20_598x376.png)
    
25.  To view the certificate in the **Keychain**, launch the **Keychain Assistant** and filter by certificates category. The push certificate is displayed.
    
    ![](../Resources/Images/Overview/Apps/image_21_597x353.png)
    
26.  Right-click the certificate and click **Export Apple Production iOS Push Services:com.voltmx.vmsdemoapplication** to export the certificate.
    
    ![](../Resources/Images/Overview/Apps/image_22_590x350.png)
    
27.  Enter the file name and the location where the file is to be saved and click **Save**.
    
    ![](../Resources/Images/Overview/Apps/image_23.png)
    
28.  Enter the password and click **OK** to continue.
    
    ![](../Resources/Images/Overview/Apps/image_24_406x274.png)
    
29.  Enter your admin password for your computer and click **Allow**. This will cause the certificate to be exported to the folder mentioned.
