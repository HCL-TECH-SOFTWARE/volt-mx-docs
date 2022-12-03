 

Issues Fixed in 4.3
===================

 
| Defect ID | Defect Description |
| --- | --- |
| 80859 | An application wrapped by VoltMX Management is unable to open an external email client. This issue is fixed. |
| 80351 | The user is unable to open an app that is wrapped with VoltMX Management. This issue is fixed. |

Issues Fixed in 4.2.5
=====================

 
| Defect ID | Defect Description |
| --- | --- |
| 80859 | An application wrapped by VoltMX Management is unable to open an external email client. This issue is fixed. |
| 80351 | The user is unable to open an app that is wrapped with VoltMX Management. |
| 
79148

(OnPremise)

 | In the Enterprise store, when a user tries to search for the MyApps page, private security keys display in the results. This issue is fixed. |
| 

75311

(OnPremise)

 | During penetration tests, the user is able to view private key through EMM API. This issue is fixed. |
| 

75916

(OnPremise)

 | During penetration tests, the user is able to gain unauthorized access to Intelligent EMM (iEMM) APIs. This issue is fixed. |
| 

75914

(OnPremise)

 | During penetration tests, the user is able to gain unauthorized access to retrieve and launch the MyCollections application. This issue is fixed. |
| 

76881

(OnPremise)

 | During penetration tests, the user discovered that there is no restriction set for broadcast receivers. Using this vulnerability, a rogue application can intercept the broadcast. This issue is fixed. |
| 75879 | User encountered an access denied error when the user tried to access an application through the enterprise store. Further, a policy ](restricted domains policy) violation error appears when the app tries to load.md content. This issue is fixed. |
| 76031 | When a child app has an authentication mechanism enabled, (for example Okta) the user is unable to log in to the child app. This issue is fixed. |
| MF-2398 | While using Foundry Identity service of type Oauth (for example, Okta, GoogleOauth) for authentication in the enterprise appstore, if user clicks on Forgot Password button and then gets back to the Login page to log in, user is unable to login into the Enterprise store. Kill the Enterprise store app from the system tray and restart the app. This issue is fixed. |
| MF-2760 | For iOS devices, you cannot use 2-way SSL in isolation from Foundry Identity service settings. You must configure **Enable Reverse Proxy Basic Auth** feature in the **Authentication Settings** page. Admin must also configure Foundry Identity as authentication mode for enterprise store from the Authentication settings page. This issue is fixed. |
| MF-2765 | 2-way SSL feature does not work for Enterprise Store and child apps for Apple iPad. This issue is fixed. |
| MF-2045 | When a child app is wrapped, existing **entitlement.plist** file is overwritten. This issue is fixed. |
| MF-2714 | User is unable to localize Android N Device policy error messages. This issue is fixed. |
| MF-2703 | For OpenID 2.0 authentication, SSO does not work for child apps. This issue is fixed. |
| MF-2563 | While using Foundry Identity service of type Oauth (for example, Okta, GoogleOauth) for authentication in the enterprise appstore, if a user is deactivated, the user is not navigated to the Oauth login page. The user is navigated to an intermediate login page. This issue is fixed. |
| MF-2807 | 

Wrapping and signing will fail for windows phone applications which contain **xap** or **app** in the apps file name. For example, if the windows phone application is named as **hrapp.xap** or **hrxap.xap** Wrapping and signing for the application fails. If you rename the file and ensure that app and xap are not part of the new name, app submission will be successful. This issue is fixed.

 |
| DEF9718 | For Windows 8.1 phones in MAM/MCM mode, sometimes the **Login** button in the enterprise store app does not appear till you tap the footer of the page. This issue is fixed. |

Issues Fixed in 4.2
===================

 
| Defect ID | Defect Description |
| --- | --- |
| 71096 | For iOS and Windows devices, Wi-Fi passwords with 64 characters length was not supported. This issue is fixed. |

Issues Fixed in 4.1
===================

 
| Defect ID | Defect Description |
| --- | --- |
| 71096 |   |
| DEF55376 | The password reset button inside the enterprise store app is partially visible when you turn a device to the landscape mode and then back to the portrait mode. This issue is fixed. |
| DEF56410 | Upgrade issue: After password reset by an administrator, if a user does not log into the enterprise store app, the user is again prompted to reset the password. This issue is fixed. |
| DEF56953 | For devices with Android OS 5.x onwards, data passed using URL schema from one app to another in Android intents fails. This occurs for child apps where the setting for direct launch is configured to no (Direct Launch = NO). For devices on Android OS 4.4.x, this issue does not exist. |
| DEF57203 | The manage user groups pop-up is going outside the available screen space, and buttons are not visible. This issue is fixed. |
| DEF57202 DEF59127 DEF60108 DEF60407 | For Android child apps, app wrapping fails. Wrapping is successful for iOS child apps, and apps publish successfully. This issue is fixed. |
| DEF59798 | When an enterprise store app is offline, if the app receives push notifications, the app crashes. This issue is fixed. |
| DEF61029 | In the management console, if the company name contains special characters, enterprise store app log-in fails for iOS devices. This issue is fixed. |
| DEF61154 | From enterprise store app, VoltMX Engagement service registration fails in Android 5.0 devices. This issue is fixed. |
| DEF9558 | On a device, irrespective of the locale, values for the Heartbeat period and Enrollment status appears in English. This issue is fixed. |
| DEF9593 | When you delete a locale file with a particular name and data, create a new locale file with the same name but different data, the new data is not pushed to the device. Instead of downloading the data as a new locale, the locale is treated as the old one and the locale data is updated on the device. This issue is fixed. |
| DEF9620 | In the enterprise store, when you try to reset the password but enter a wrong password in the current password field, you are re-directed to the log-in page. The error message "Unable to connect to the server" appears. When you enter the correct password, you do not see any error. This issue is fixed. |
| DEF9630 | When a deactivated user tries to log in to the enterprise store, even when the device locale is other than English, error messages appear in English. This issue is fixed. |
| DEF9631 | On an iPad, where the device locale is other than English, on enterprise store, the text **Apps not available** is not localized. The same text on iPhone is localized. This issue is fixed. |
| DEF9634 | For iOS devices, irrespective of the device locale, a push message for device wipe appears in English. This issue is fixed. |
| DEF9636 | You cannot add an inactive user for enrollment. This issue is fixed. |
| DEF9639 | For a few locales (for example, Telugu), when the enterprise store is not installed on a device, the launch button on the enterprise store appears as open. When you click on it, the app crashes. You can install the app from the app details screen. This issue is fixed. |
| DEF9643 | For a device without a SIM card, the Device Info tab still displays AirTel as the carrier. This issue is fixed. |
| DEF8466 | The Remove App data feature works on the enterprise store only when the enterprise store runs in the foreground. This issue is fixed. |
| 59834 | In the Application Settings page, users are unable to configure iOS certificates. This issue is fixed. |
| 59127 | When a user tries to add a new app to VoltMX Management cloud, during the wrapping process, an error appears. This issue is fixed. |
| 56657 | After upgrading to VoltMX Management Suite 4.0, calling the device api com.voltmx.iemm.device.requestToUserCustomAttributes throws an error. This issue is fixed. |
| 56409 | All Android users are getting a message: Unable to fetch policy. This issue is fixed. |
| DEF9434 | In the cloud Foundry console, a user is unable to publish iOS assets from the console into VoltMX Management. This issue is fixed. |
| DEF9435 | In the Foundry console, if the uploaded iOS binary file does not have a bundle ID, when a user tries to publish the iOS app in VoltMX Management suite, valid failure reason does not appear. This issue is fixed. |
| DEF8947 | An administrator can change the enrollment mode even when a previous enrollment mode change is in progress. The issue is fixed. |
| DEF8767 | For an iOS device, when the enrollment mode is modified, the app does not log out automatically. The issue is fixed. |
| DEF8738 | When a device is offline, if the device's enrollment mode is modified, changes do not reflect on the device. The issue is fixed. |
| DEF8999 | For a SAFE-enabled device when terms and conditions are modified, a notification is sent to the device about enabling SAFE. The device screen becomes unresponsive. The issue is fixed. |
| DEF9001 | For an enterprise store, during the first log-in, if terms and conditions are not accepted, any new changes to terms and conditions do not reflect on the log-in screen. The issue is fixed. |
| DEF8804 | Whenever a policy targeted on a device is republished, all required apps are again installed on the device. The issue is fixed. |
| DEF9034 | When a suspended iOS device is resumed (by clicking Resume Device in the Device Details page), the device still does not get any push notifications. The issue is fixed. |
| DEF9018 | For SAFE-enabled devices, the Android For Work enterprise store does not work. The issue is fixed. |
| DEF8998 | When a user is browsing SharePoint online 2013 content in the enterprise store, a session timeout message appears, and the session ends. The issue is fixed. |
| DEF8995 | When a user enters data in the terms and conditions page, the data is saved as blank. During device enrollment, users get a blank terms and conditions page. The issue is fixed. |
| 
DEF8494

DEF8495

DEF8496

DEF8497

 | For MAM-only license installer, the following issues are fixed:   
\- When you select Android wrapping, the EMM server does not request SCEP details. The SCEP For Android Option does not turn on when you modify SCEP details in the catalina.properties file.  
\- In the System Status page, the Health Check tab is missing.  
\- The **Delete SCEP cert on Device** feature does not work.  
\- SCEP enrollment fails if a user does not migrate from Seed to Encryption keys.  
 |
| 

DEF8493

DEF8500

 | The Reset Password Feature is modified to fix the following issues:  
\- When a user not registered with a device logs in from a device, the user is asked to reset the password.  
\- When a user cancels during the enrollment process, the Reset Password on the first log-in feature does not work as expected. |
| DEF8459 | For iOS devices, the App Usage Report displays data related to previous installations. The issue is fixed. |
| DEF8475 | The App Network Usage report displays details of Windows devices. The report is applicable only for Android devices. The issue is fixed. |
| DEF8333 | Limited admin users must not be asked to reset the password on first log-in. The issue is fixed. |
| DEF8504 | In VoltMX Management cloud environment, the App Usage Report does not work as expected. The issue is fixed. |
