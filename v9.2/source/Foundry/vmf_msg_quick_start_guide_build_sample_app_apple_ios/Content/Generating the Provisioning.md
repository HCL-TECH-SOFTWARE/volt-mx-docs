                           

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/8_x_PDFs/messaging/voltmx_foundry_engagement_services_quick_start_guide_build_sample_app_apple_ios.pdf "VoltMX Foundry Engagement Services Quick Start Guide – Building a Sample App – Apple iOS")

Demo App QuickStart Guide (Building a Sample App – iOS): Generating the Provisioning Profile

Generating the Provisioning Profile
===================================

A provisioning profile is needed to identify the devices on which the developed application can be deployed. The following steps describe the creation of the provisioning profile for VMS demo application.

1.  Log in to your [developer.apple.com](http://developer.apple.com/) account with your credentials (user ID and password).
2.  Click **Sign In** to continue.
3.  On the **Developer Account** page, click **Certificates, IDs and Profiles** in the left pane to continue.
    
    The **Certificates, Identifiers and Profiles** page appears.
    
    ![](Resources/Images/Cetid&pr_591x565.png)
    
4.  Click **All** under the **Provisioning Profiles** header in the left pane to view all the existing profiles or create new profiles.
    
    ![](Resources/Images/iosprovpr_591x505.png)
    
5.  On the upper-right corner of the screen, click the plus sign next to the **iOS Provisioning Profiles** header to create a new profile.
    
    The **What type of provisioning profile do you need**? page appears.
    
    ![](Resources/Images/creatprovpro_592x562.bmp)
    
6.  Select the **iOS App Development** option under the **Development** section. Click **Continue**.
    
    ![](Resources/Images/iosappdev1_597x309.png)
    
7.  Select the **App ID** for which the profile is created from the drop-down list and click **Continue**.
    
    ![](Resources/Images/selappids_603x530.png)
    
8.  The **Select certificates** page appears. Select the required certificate from the list-view to include in the profile.
    
    > **_Note:_** To install the application on a device, the signed certificate should be included in the profile.
    
    ![](Resources/Images/selcerti_595x536.png)
    
9.  Click **Continue**.
10.  The **Select devices** page appears. Select the device on which you need to install the application.
    
     ![](Resources/Images/seldevice_596x527.png)
    
11.  Click **Continue.**
    
     The **Name this profile and generate** page appears.
    
12.  **Profile Name**: Enter the profile name and click **Continue** to create the provisioning profile for the selected certificate and the device.
    
      ![](Resources/Images/namethepro_601x524.png)
    
     The **Your provisioning profile is ready** page appears.
    
13.  Click **Download** to download the profile.
    
     ![](Resources/Images/youprprread_594x515.png)
    
14.  Click **Done**. The system displays the newly added provisioning profile in the list-view.
    
     ![](Resources/Images/prostep11_594x136.png)
