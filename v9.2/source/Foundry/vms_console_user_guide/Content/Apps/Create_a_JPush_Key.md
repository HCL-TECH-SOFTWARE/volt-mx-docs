                           

Creating a JPush App Key and Master S
=====================================

JPush is a push notification service that performs push notifications to Android, iOS and Windows Phone apps in geographies where Google services are not allowed. Currently the Engagement Server supports the push notifications via Jpush for Android devices only.

To create a JPush Key, follow these steps:

1.  In a browser, enter the URL of JPush website `https://jpush.cn`
2.  Click **Learn More** to enter the portal.
    
    The **JPush** homepage appears.
    
    ![](../Resources/Images/Overview/Apps/JPush/1.PNG)
    
3.  Click **Learn More** to create your account with **JPush**.
    
    The **Register** Page appears.
    
4.  To register with **JPush**, enter details for the following fields:
    
    *   **User Name**: Enter the user name to register with JPush. The user name should include between five to 20 characters.
        
        > **_Note:_** Do not include special characters in a user name. You can use a combination of letters, numbers and underscores.
        
    *   **Password**: Enter a password to create your account.
    *   **Confirm Password**: Re-enter the password to confirm it.
    
    ![](../Resources/Images/Overview/Apps/JPush/2.png)
    
5.  Click **I agree, Register now**.
    
    The **Register** page appears.
    
6.  After entering your prelimanary details to register, enter additional details for the following fields:
    
    *   **User Name**: Enter the user name that you have already entered in the Register page.
    *   **Organization**: Enter name of the organization, where the user works.
    *   **Email**: Enter the personal email address of the user.
    *   **Phone Number**: Enter the correct contact number of the user.
    *   **Push:** Enter the push message.
    *   **Security Code**: Enter the displayed security code to confirm the authenticity of the user.
    *   Click the **Complete Registration** button to continue.
    
    ![](../Resources/Images/Overview/Apps/JPush/3.PNG)
    
7.  The JPush page appears with the confirmation message that the authentication message is sent to the registered email address. Access your email account and open the email sent throuh JPush to authenticate your user account.
    
    ![](../Resources/Images/Overview/Apps/JPush/7.png)
    
8.  Click **Login** to continue.
    
    The **Log in** window appears.
    
9.  Enter details for the following fields:
    
    *   **User ID**: Enter your user id.
    *   **Password**: Enter your password.
    *   **Confirmation Code**: Enter the confirmation code to ascertain that this is not a spam robot action to enter the system.
    
    ![](../Resources/Images/Overview/Apps/JPush/8.png)
    
10.  Click **Log In** to continue.
    
    The **Application** page appears.
    
11.  To create your application, enter details for the following fields:
    
    *   **Application Information**:
        *   **Application Name**: Enter a name for the application.
        *   **Application Icons**: if you wiish to provide a icon for the application, then click chhose File to browse the icon from its location. The selected icon name appears adjacent to the Choose File button.
    *   **Android**:
        *   **Application Name**: Enter the application package name like com.example.BankingApp
    *   **iOS:**
        *   **iOS Development Certificate**: Click **Choose File** to select the iOS development certificate from its location.
            
        *   **Development**:
            
        *   **Development Certificate Password**: Enter the password for development certificate.
        *   **iOS Production Certificate**: Click **Choose File** to select the iOS production certificate from its location.
            
        *   **Production Certification Password**: Enter the password for production certificate.
    *   **WinPhone**
        *   **Enable WinPhone**: Select the check box, if you wish to eanble WinPhone.
    
    ![](../Resources/Images/App/JPush_Key/JPush - creating application -with fields.png)
    
12.  Click **Create my application** to continue.
    
    The **Application Information** page appears.
    
13.  Note down the **Appkey** and **Master Secret** for your reference.
    
    ![](../Resources/Images/App/JPush_Key/modify the application.png)
    
14.  To view master Secret click **View and Copy**.
    
    ![](../Resources/Images/App/JPush_Key/Master Secret key.png)
    
15.  Enter JPush credentials (Appkey and Master Secret) and click Save.
