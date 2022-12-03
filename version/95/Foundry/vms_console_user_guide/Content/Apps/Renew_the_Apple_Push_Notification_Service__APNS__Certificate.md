                           


Renew the Apple Push Notification Service (APNS) Certificate
============================================================

The Apple Push Certificate cannot be renewed. You need to create a new push certificate for the existing bundle identifier. The Push notification certificate is not a part of the application build, therefore you need to create a new certificate and upload it on Volt MX Engagement Server.

**To renew the Apple Push Notification Service (APNS) certificate, follow these steps**:

1.  In the Keychain Access application on your Mac, under the Certificate Assistant menu, choose the **Request a Certificate From a Certificate Authority** option.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image001.png)
    
2.  Enter Email Address, your Name and in the Request is group, select the Saved to disk option and click **Continue**.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image002_579x270.png)
    
3.  Save the Certificate Signing Request (CSR) to your local machine. You must change the extension from .`certSigningRequest` to .csr,and click **Save**.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image003_578x275.png)
    
4.  Click **Done**. The CSR is generated.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image004_576x271.png)
    
5.  Login to `http://developer.apple.com` with valid credentials. Select **Accounts and Certificates**, **IDs & Profiles** under the **Overview** section from the left panel.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image005_578x230.png)
    
6.  Select **App IDs** under **Identifiers** from the left navigation pane and choose the **App Id** from the right panel.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image007_579x238.png)
    
7.  Click the **Edit** button.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image010_576x323.jpg)
    
8.  Based on your requirement, choose **Development SSL Certificate** or **Production SSL Certificate**.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image011_581x406.png)
    
9.  Upload the .csr file, and click **Generate**.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image013_573x276.png)
    
1.  Click **Download** to install and backup.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image014_578x278.png)
    
1.  Check your local **Download** folder for .cer file.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image015_577x279.png)
    
1.  Click **Add** to add the certificate to Keychain.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image016_579x283.png)
    
1.  Under Keychain, select the file and right click to **Export.**
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image017_578x280.png)
    
1.  Click Save to save the exported file in .`p12` format.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image018_580x282.png)
    
1.  Encrypt the exported item by providing a Password. Click **OK**
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image019_579x283.png)
    
1.  Enter local machine password to allow export from Keychain. Click **Allow**.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image020_578x277.png)
    
1.  Check your local machine for the generated CSR.
    
    ![](../Resources/Images/Overview/Apps/APNSrenewcert/image021_577x289.png)
    
1.  Browse the certificate `(.p12)` and provide a Certificate Password in the Volt MX Engagement Services Application Console. Click **Save.**
