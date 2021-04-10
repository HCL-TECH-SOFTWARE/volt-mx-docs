---
layout: "documentation"
category: "v8upgradepre65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgradepre65.pdf "VoltMX Foundry UpgradeHUB Guide")

You are here: For Business Needs

Upgrade FAQs
============

The section provides you with answers to the questions about how to upgrade to latest Volt MX products. The FAQs are classified into:

*   [MADP](#madp)
*   [VoltMX Foundry](Foundry.html)

MADP
----

**The following section provides answers to frequently asked questions about upgrading to latest Volt MX MADP product:**

### For Business Needs

1.  **If a user has a valid license of Volt MX older studio version, will it work for 7.x?**

**Answer:** Yes, the license is valid. The user is not required to pay extra for Volt MX Foundry or Iris license.

For Iris, if a user has a valid agreement or order form, and is still an active customer, Volt MX can reissue the Iris physical license file that can be used to activate any version.

For Volt MX Foundry, from version 7.2 onwards, activation with license file is not possible. If Volt MX sends the order form and/or agreement copy to the Cloud operations team, they will create a Cloud account and enable the products listed on the order form. They can setup Visualization Cloud and Volt MX Foundry Clouds. So, approaching Cloud Ops is a one stop solution.

5.  **Can Volt MX Studio 7.0 work with Volt MX Server 6.5.2?**

**Answer**: We are not supporting General Volt MX Server with 7.0 Iris. It is mandatory to have the same version of Foundry.

7.  **Is platform porting supported in 7.x version?**

**Answer**: No, we do not have the support for platform forking in 7.x version.

9.  **Will my old studio app work with new MF server 7.x?**
    
    **Answer**: Yes
    
10.  **Will Volt MX Iris Enterprise 7.0 work with Volt MX Foundry 7.1/7.2/7.3?**
    
    **Answer**: Yes, Volt MX Iris Enterprise 7.0 works with Volt MX Foundry 7.1/7.2/7.3.
    

### For Developers

1.  **Is form forking supported in 7.0 version?**

**Answer**: No, form forking is not supported in 7.x versions.

3.  **Is there any native support for Blackberry OS?**

**Answer**: No, there is no native support available for BB 10.

5.  **What kind of support is available for BB10 upgrade?**

**Answer**: You can use the BB10 hybrid option or you can convert from APK to BAR.

7.  **How can we convert a native Blackberry app to hybrid app?**

**Answer**: You need to rebuild it for Hybrid or Android (and then follow APK-BAR conversion process). 

9.  **If I have my MF app on a lower version Cloud  server and am upgrading it to a higher version, will the App Key, App Secret and Service URL change?**

**Answer**: No, it will remain the same.

11.  **Is support provided for thin clients?**

**Answer**: No, it is not available.

13.  **What kind of support is available if we are using thin client ?**

**Answer**: You have to move to SPA.

15.  **What are the supported versions of OS on Iris?**

**Answer**: Android, iOS, Windows, and Blackberry 10.

[http://docs.voltmx.com/voltmxlibrary/general/voltmxlatform\_supported\_devices\_os\_browsers/Content/Supported\_OS\_NativeApps.html%3FTocPath%3D\_\_\_\_\_2]({{ site.baseurl }}/docs/documentation/Foundry/voltmxplatform_supported_devices_os_browsers/Content/Supported_OS_NativeApps.html)

18.  **Do we have an option to revert the plugins once we upgrade to Iris Enterprise?**

**Answer**: As of now, this option is not available. This is in the road map.

20.  **While building an application on Iris Enterprise, we are getting "Could not resolve** com.android.tools.build:gradle:1.3.1" **error and the build is failing for Android. We are able to build successfully for iPhone, though.**

**Answer**:Follow the Gradle instructions provided in the following link for Android,

[http://docs.voltmx.com/voltmxlibrary/iris/iris\_user\_guide/Content/SUG\_Android.html#Gradle2]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUG_Android.html#Gradle2)

The error that you faced occurs due to the following reasons:

*   No internet connection
*   The system being used is behind a proxy

If the system is behind a proxy, then the application developer has to follow the procedure to include the settings provided in the earlier link.

26.  **The Android build is failing with a different error message "Execution failed for task ':mergeDebugResources'**  
    \>\\build\\luaandroid\\dist\\DBID\\res\\values\\netconfig.xml: Error: Unsupported type 'net'"

**Answer**: The application is packing internal Android resource files as a part of the application. In this case, the application must be packing netconfig.xml, which can be found in resources>res>values. This is an internal file used by Android fwk and there are changes done to this due to Gradle migration.

To fix this issue, change the contents of the file by replacing the tag “net” to “string”.

29.  **Is custom CSS supported in 7.0 version?**

**Answer**: Custom CSS is not available in 7.0 version. We have introduced this support in 7.1.1 version of Iris Enterprise.

31.  **Are there any client side changes or migration recommendations to have a smooth 7.0 setup?**

**Answer**: No need of any changes at client side, Volt MX Iris will take care of this issue while importing the project.

**Example**: Custom Libraries, Custom Fonts, etc.

34.  **During migration, can we change from Box layout to Flex Layout?**

**Answer**: We do not have any utility tool or mechanism to convert Box Layout to Flex Layout during migration.

36.  **What is the future upgrade process for MF once we have on-prem MF?**

**Answer**: You can take the latest installer and run it. While running the installer, you need to choose the **Upgrade** option instead of **New Installation**. Once the upgrade is successful, you need to republish the existing apps.

38.  **Will my App Key and App Secret change every time I publish?**

**Answer**: Your App Key and App Secret do not change with each publish. They would change only when you unpublish and publish the application.

40.  **Which version of Blackberry is supported?**

**Answer**: BB10. It is supported as hybrid but not native BB10. You can also go for **APK to BAR** conversion to support the BB10 channel.

42.  **For iOS, can I configure the plist.info entries from Iris project?**

**Answer**: info.plist entries can be provided from the Iris project workspace. You can provide the plist entries in infoplist\_configuration.json \[This would help avoiding the manual configuration in Xcode everytime\].

The file is located at the following location,

<workspace>\\<project name>\\resources\\common\\infoplist\_configuration.json

46.  While **running the app on iOS,** https **calls are not working**.

**Answer**:

*   From Xcode, open info.plist file.
*   Add a key called NSAppTransportSecurity as a dictionary.
*   Add a sub key called NSAllowsArbitraryLoads as Boolean and set its value to YES.
