                           

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/8_x_PDFs/messaging/voltmx_foundry_engagement_services_quick_start_guide_build_sample_app_apple_ios.pdf "VoltMX Foundry Engagement Services Quick Start Guide – Building a Sample App – Apple iOS")

Demo App QuickStart Guide (Building a Sample App – iOS): Generating an Apple Push Notification Service (APNS) Certificate

Generating an Apple Push Notification Service (APNS) Certificate
================================================================

The Apple Push Notification Service (APNS) certificate is needed for the iOS devices to register with Apple to receive notifications.

**To generate an Apple Push Notification Service (APNS) certificate, follow these steps**:

The first step to generate an Apple Push Notification Service (APNS) certificate is to generate a certificate request (CSR) file. The certificate request (CSR) file is used to request a development SSL certificate.

1.  To generate a `CSR file`, launch the **Keychain Access** application from the **LaunchPad**.
    

    ![](Resources/Images/image4_595x376.png)

    
2.  Select the **Keychain Access** > **Certificate Assistant** > **Request a Certificate From a Certificate Authority ...** to create a SSL certificate.
    

    ![](Resources/Images/image5_594x363.png)

    
    The **Certificate Assistant** window appears.
    
3.  Under the **Certificate Information** section enter the following details:
    *   **User Email Address**: Enter your email address.
    *   **Common Name**: Enter the common name.
    *   **Request is**: Select the option as **Saved to disk**.


    ![](Resources/Images/image6_555x400.png)

    
4.  Click **Continue** to proceed. The **Save As** dialog box appears.
5.  **Save As** dialog box: Change the file name extension in the **Save As** field to .`CSR` and click **Save**.
    

    ![](Resources/Images/image7_594x419.png)

    
6.  Click **Continue** to proceed. The **Conclusion** notification appears.
7.  Click **Done** to create the CSR request and save it on your computer.

    
    ![](Resources/Images/image8_591x421.png)

    
8.  Log on to the [developer.apple.com](http://developer.apple.com/) site with your Apple credentials. If you do not have an Apple developer’s account, register with Apple.
    

    ![](Resources/Images/1.png)

    
9.  Click **Sign In** to continue.

10. The next step is to create an App ID for push notifications. On the **Developer Account** page, click **Identifiers** under **Certificates, IDs and Profiles** in **Program resources**.


    ![](Resources/Images/2.png)


11. The **Certificates, Identifiers and Profiles** page appears. Click the **+** sign next to the **Identifiers** to create new App ID.
    
    ![](Resources/Images/3.png)


12. The **Register new Identifier** page appears. Select **App IDs** and click **Continue**


    ![](Resources/Images/4.png)


13. Select **App** and click **Continue**


    ![](Resources/Images/5.png)


14. **Register an App ID**: Enter the details for the following fields:
    *   **Description**: Enter the application name.
    *   **Bundle ID**:
        *   **Explicit**: Enter the bundle Id. Remember the bundle Id as it is used to configure the application in Iris.
        

    ![](Resources/Images/6.png)
        

15. Ensure that **Push Notifications** is checked under the **Capabilities** section. Click **Continue** to proceed.
    

    ![](Resources/Images/7.png)
    

    The new Identifer will get created.
    
16. The next few steps discuss the configuration of the **app ID** for push notifications. Search the newly created App ID in the search bar and Click on (HclOrderExecutionAppID) App ID to **Edit**.
    

    ![](Resources/Images/8.png)
    

17. In **Capabilities** section, Click on **Configuration** button next to the **Push Notifications**.
    
    ![](Resources/Images/9.png)

18. To create a development certificate, click **Create Certificate** in the **Development SSL Certificate** section. Click **Done**.
    
    ![](Resources/Images/10.png)
    
19. The **Create a New certificate** page appears. The next step involves choosing the **CSR** file that was generated earlier. Click **Choose File** to upload the .`CSR` file.
    
    ![](Resources/Images/11.png)
    
20. Click **Continue** after the `CSR` file is selected to complete the certificate creation.
    
21. The **Download Your Certificate** page appears. click **Download** to download the certificate.
    

    ![](Resources/Images/12.png)

    
22. Double click aps\_production.cer in the **Downloads** folder to add it to the **Keychain Access** application.
    
    ![](Resources/Images/image20_598x376.png)
    
23. To view the certificate in the **Keychain**, launch the **Keychain Assistant** and search by the certificates category. The push certificate is displayed.
    
    ![](Resources/Images/image21_597x353.png)
    
24. Right-click the certificate and click **Export Apple Production iOS Push Services:com.voltmx.vmsdemoapplication** from the drop-down list to export the certificate.
    

    ![](Resources/Images/image22_590x350.png)
    

25. Enter the file name and the location where the file is to be saved and click **Save**.
    

    ![](Resources/Images/image23.png)

    
26. Enter the password and click **OK** to continue.
    
    ![](Resources/Images/image24_406x274.png)
    
27. Enter your admin password for your computer and click **Allow**. This ensures that the certificate can be exported to the folder mentioned.
