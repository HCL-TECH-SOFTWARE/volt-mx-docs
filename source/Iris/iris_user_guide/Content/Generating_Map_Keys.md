                         

You are here: Appendix C: Generating and Configuring Map API Keys

Generating and Configuring Map API Keys
=======================================

You will need Maps API Key for Maps to work in the applications you develop. You need to generate the Maps API key and specify it in the properties of the Map widget.

You need to configure the following map keys for your application:

*   [Application Level Map widget key](#application-level-map-widget-key)
*   [Google Map key for Android](#google-map-key-for-android) (exclusive key for Android platform).
*   [Bing Map key for Windows](#google-map-key-for-android)

Application Level Map Widget Key
--------------------------------

The map widget key needs to be generated based on a domain name. The key generated for a single domain can be used for all sub-domains, URLs on hosts in those domains, and all ports on those hosts. For more information about the domain to be used for generating a map APIs key, see [http://code.google.com/apis/maps/faq.html#keysystem](http://code.google.com/apis/maps/faq.html#keysystem).

The generated map key is configured at an application level. This map key is used by all the Map widgets within an application. This map key enables the application to display Google Maps through the Map widgets within the application.

To configure map widget key, do the following:

1.  Go to [https://code.google.com/apis/console](https://code.google.com/apis/console) and log in with your Google Account.
    1.  Click the Services link from the left-hand menu.
    2.  Activate the Google Maps API v3 service.
    3.  Note the API Key that you generate.
    4.  Click the API Access link from the left-hand menu. Your API key is available on the API Access page, in the Simple API Access section. Maps API applications use the Key for browser apps.
        
        By default, a key can be used on any site. We strongly recommend that you restrict the use of your key to domains that you administer, to prevent use on unauthorized sites. You can specify which domains are allowed to use your API key by clicking the Edit allowed referrers... link for your key.
        
2.  In Volt MX Iris, on the **Project** menu, click **Settings**.
3.  On the Application tab, in the Map Widget section, enter the API Key you generated in the **Static map widget key** text box.
4.  Enter the API Key you have generated in the **Static map widget key** field under **Map widget**.
5.  Click **Done**. A Build dialog box appears offering to rebuild your app for the platforms that you selected earlier in the **Build Generation** dialog box.
    
    > **_Note:_** When you add a Map widget to a form, the _map widget key_ you have entered automatically appears against the _Google Map Key_ property of the Map widget. The key generated once is applicable to all the Map widgets within an application.
    

This configured map widget key is applicable for all platforms except for Android. For Android you need to generate a specific map APIs key and use it in the properties. For more information, see [Google Map Key for Android](#google-map-key-for-android).

Google Map Key for Android
--------------------------

You need the Google Maps API key for Android in order to enable Maps in the applications you develop for Android platform. Maps API keys are linked to specific certificate/package pairs, rather than to users or applications.You only need one key for each certificate, no matter how many users you have for an application. Applications that use the same certificate can use the same API key. For generating maps API key for Android, you need to provide the fingerprint of the signed certificate. For more information see [Maps Documentation.](https://developers.google.com/maps/documentation/android/start?hl=en)

> **_Important:_** Version 1 of the Google Maps Android API as been officially deprecated as of December 3rd, 2012. This means that from March 3rd, 2013 you will no longer be able to request an API key for this version. No new features will be added to Google Maps Android API v1. However, apps using v1 will continue to work on devices. Existing and new developers are encouraged to use Google Maps Android API v2.

To obtain and configure Google Maps API Key v2 for Android, follow these steps:

1.  Follow steps for [Display your app's certificate information](https://developers.google.com/maps/documentation/android-api/signup#display_your_apps_certificate_information) and [get an API key from the developers console](https://developers.google.com/maps/documentation/android-api/signup#get_an_api_key_from_the_console_name).
2.  Ensure Google Maps Android API is enabled.
3.  Navigate to **Properties** > **Application** tab. Under **Map Widget**, add the key generated above in the **Android map widget key 2** field.
    
    > **_Important:_** Google Play services Revision 13 (Version Name 4.0.30 released on November 2013) and newer versions require Android 2.3 or higher.
    
4.  If you have Google Play Services older to v13, you do not have to perform this step.
    
    If you have downloaded Google Play Services v13 in Android SDK manager, follow either of the below options:
    
    *   To support Android v2.2 and above devices, do the following:
        1.  Download _Google Play services for Froyo_ from the Android SDK manager. The Google Play services for Froyo will be available for download only after checking **Obsolete** option in Android SDK manager.
        2.  Rename the folder "`google_play_services_froyo`" to "`google_play_services",` in the Android SDK ``path: `..\android-sdk-windows\extras\google\`.``
    *   To use the latest Google Play libraries (Rev 13 and above which supports only Android v2.3 and above devices), do the following:
        1.  In Volt MX Iris, On the **Project** menu, click **Settings**.
        2.  Click the **Native** tab, and then click the **Android** sub-tab.
        3.  Scroll down in the dialog box, and under Manifest Properties, click the **Tags** tab.
        4.  In the **Child tag entries under <application> tag** text box, add the following tag:
        
        **<meta-data android:name="com.google.android.gms.version" android:value="@integer/google\_play\_services\_version" />**.
        

Important Considerations:

*   Google Maps V2 does not work in an emulator.
*   Multiple Map widgets per Form is not supported for Map V1.(Supported for Map V2)
*   If MapV2 key is provided in IDE and if the application is installed on a device with Android Verison 2.2 and above (i.e voltmx.os.deviceInfo().APILevel >= 8 ) Google Maps Version 2 would be loaded by default. In rest all cases Google Maps Version 1 would be loaded.
*   If the developer uses Google Maps V2, the developer must meet the Google Play attribution requirements as specified at [https://developers.google.com/maps/documentation/android/intro#attribution\_requirements](https://developers.google.com/maps/documentation/android/intro#attribution_requirements) . The attribution text is available by using _voltmx.os.deviceInfo().googleplayServiceSoftwareLicence_ in JavaScript projects. This property returns the open source software license information for the Google Play services application, or null when either Google Play services is not available on this device or MapV2 Key is not added in application properties.
*   Map does not work on a popup.
*   Map preview launches only version 1 map
*   Map V2 works for Android 2.2 and above.
*   Clickable/Interactive widgets inside a Map callout template will become non-clickable when Android Map V2 version is used. This is the limitation of native Android Map V2 callout. As callouts are displayed as static image snapshot of callout template and only the entire callout is clickable. onSelection event callback is invoked when a callout is clicked.
*   You need to update the "Android SDK Tools"," Android SDK Platform-tools" to the latest revision using under SDK Manager (Min revision of Android SDK Tools required is >=15 for Android Google MapV2).
*   Android Google MapsV2 requires [OpenGL ES](https://developers.google.com/maps/documentation/android/start#requiring_opengl_es_version_2) version 2 to load.
*   You need to download the latest Google Play Services sdk using the SDK Manager. To do so, navigate to **Extras > Google Play Services**. Please refer to the links below for additional information on how Android Google Play and Google MapsV2 work
    *   [http://developer.android.com/google/play-services/index.html](http://developer.android.com/google/play-services/index.html)
    *   [http://developer.android.com/google/play-services/setup.html](http://developer.android.com/google/play-services/setup.html)
    *   [http://developer.android.com/google/play-services/maps.html](http://developer.android.com/google/play-services/maps.html)

Troubleshooting Android Build Failure with MapV2 Key
----------------------------------------------------

If the build fails for MapV2, verify the log if it contains the following messages.

```
"[exec-shell] BUILD FAILED
[exec-shell] ..\sdk\tools\ant\build.xml:601: Invalid file:
..\LibProjects\google-play-services_lib\build.xml"
"
[exec-shell] Error: The project either has no target set or the target is invalid.
[exec-shell] Please provide a --target to the 'android.bat update' command.
(or)
google-play-services_lib\build.xml[dependency] Ordered libraries:

```

Follow these steps to resolve the build issue:

1.  Verify if the target that is set in the `project.properties` file is already downloaded in the SDK Manager. The `project.properties` file is available at the following location:
    
    <SDK-PATH>\\extras\\google\\google\_play\_services\\libproject\\google-play-services\_lib\\project.properties.
    
2.  Check if the target is available in the SDK Manager by checking the **Obsolete** option, download the corresponding target API.
3.  If the target is not available in the SDK Manager, then change the `project.properties` file to point to an appropriate target in the SDK Manager.
    
    For example, if `project.properties` file contains `target=android-9` and it is not available in the SDK Manager, change the target as `target=android-8` or `target=android-10,` which ever target is available.
    

Alternative Procedure

1.  List the available targets in the system using the following command:
    
    android list targets
    
2.  Set appropriate target from the available targets to `<SDK-PATH>\extras\google\google_play_services\libproject\google-play-services_lib` using the following command:
    
    android update lib-project --target <appropriate target ID number from above command> --path <SDK-PATH>\\extras\\google\\google\_play\_services\\libproject\\google-play-services\_lib/
    

Bing Map Key for Windows
------------------------

To generate a Bing Map Key for Windows platforms, refer [http://msdn.microsoft.com/en-us/library/ff428642.aspx.](http://msdn.microsoft.com/en-us/library/ff428642.aspx)

Navigate to **Application>Properties** and enter the obtained key in the **Bing map widget key field**.
