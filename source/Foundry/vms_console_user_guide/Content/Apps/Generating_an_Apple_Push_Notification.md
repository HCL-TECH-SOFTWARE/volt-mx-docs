                           


Generating an Apple Push Notification Service (APNS) Certificate
================================================================

The APNS certificate is needed for the iOS devices to register with Apple to receive notifications. To generate the APNS certificate, follow these steps:

Creation of Signing Identities
------------------------------

The three different Signing Identities are:

*   [App ID](#creation-of-app-id)
*   [Certificate](#creation-of-push-apns-certificate)
*   [Provisioning Profile](#creation-of-provisioning-profile)

### Creation of App ID

1.  Login to [developer.apple.com](https://developer.apple.com/) and click on Certificates, Identifiers & Profiles
    
    ![](../Resources/Images/Overview/Apps/APNS/apns1.png)
    
2.   Click on **App IDs** section.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns2.png)
    
3.  Click on the **+** icon which appears on the right-side of the page. Fill in the App ID Description and App ID Suffix.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns3.png)
    
    ![](../Resources/Images/Overview/Apps/APNS/apns4.png)
    
    Here you can choose an **Explicit App ID**, which supports app specific capabilities or a **Wildcard App ID**, which doesn’t support app specific capabilities. A single Wildcard App ID can be used for different apps.
    
4.   If your choice is **Explicit App ID**, then the **App Services** section will be displayed. You can select app specific capabilities here.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns5.png)
    
5.   Click continue, this step will generate an **App ID** as shown.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns6.png)
    

### Creation of Push APNS certificate

1.  Once an App ID is created, to enable push notifications you must have a related Development or Production APNS on your Mac machine.
2.  You can now edit the App ID. You can create Push certificates for both, Development or/and Production APNS as shown below. In the following image, the app ID is enabled for both Development and Production push certificates.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns7.png)
    
3.  To create the certificate click **Create Certificate...**. This will redirect you to the following page.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns8.png)
    
4.  Follow the instructions given in the **About Certificate Signing Request (CSR)** page.
    
    Go to Keychain Access > Certificate Assistant and click **Request a Certificate from a Certificate Authority...**.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns9.png)
    
5.  Enter the email address and the common name in the screen below and select the option **Saved to disk**. Click **Continue**.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns10.png)
    
6.  In the screen below, change the file name extension in **Save As** to CSR. Click **Continue**.![](../Resources/Images/Overview/Apps/image_7_595x419.png)
7.  Once it is saved, log on to [developer.apple.com](https://developer.apple.com/) with your Developer account (Apple user ID). Click on Choose File.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns11.png)
    
8.  Choose the CSR file, which is saved on your machine then click Continue. This will generate the certificate as follows.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns12.png)
    
9.  Click **Download** to save it in your keychain.

### Creation of Team Certificate

1.  Go to the Certificates section and click the **+** symbol.
2.  You must create the team certificate for iOS development or for App store submission. Select the required option, then click on continue.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns13.png)
    
3.  The remaining certificate creation process is the same as described earlier for [Push APNS certificate creation](#creation-of-push-apns-certificate).
4.  Once certificate is created it looks as follows in the Apple developer account.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns14.png)
    

### Creation of Provisioning Profile

1.  Click on the Provisioning profile (Development/Distribution) and the click on **+**.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns15.png)
    
2.  Select the type of the provisioning profile required as per your usecase. Then click continue.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns16.png)
    
3.  Select the **App ID** for which you want to create the profile, then click continue.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns17.png)
    
4.  Select the appropriate **team certificate**, then click continue.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns18.png)
    
5.  If you are using an **Adhoc profile** then you must select the devices that are already added in your devices list. This is to register the devices with the current profile.
    
    > **_Note:_** This step is required only for adhoc profile creation.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns19.png)
    
6.  Click on continue. Give the **Profile name** and proceed further.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns20.png)
    
7.  Click on **Generate** and you can now download the profile.
    
    ![](../Resources/Images/Overview/Apps/APNS/apns21.png)
