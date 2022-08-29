                          


AndroidX Behavioral Changes
===========================

**AndroidX** is the new and enhanced version of the [Android Support Library](https://developer.android.com/topic/libraries/support-library/index). [Android Pie](Android_Pie_Behavioral_Changes.md) is the final release for `android.support`; all new feature releases will be available in `androidx-packaged`.

In this document, we will explain about Volt MX Iris's AndroidX-supported plugins and the Jetifier flags that are automatically added in the `gradle.properties` file. Furthermore, we will discuss about the various issues that arise while you try to migrate your project to AndroidX and how to resolve these issues.

This document contains the following sections:

*   [Automatic addition of Jetifier flags in the gradle properties file](#automatic-addition-of-jetifier-flags-in-gradle-properties-file)
*   [Issues while migrating to AndroidX and their resolutions](#issues-while-migrating-to-androidx-and-their-resolutions)
*   [Convert android.support references by using Jetifier tool](#convert-androidsupport-references-by-using-jetifier-tool)

Automatic Addition of Jetifier Flags in gradle properties File
----------------------------------------------------------------

From V9 SP2, Volt MX has released AndroidX-supported plugins. As part of these plugins, the following Jetifier flags are specified in the `gradle.properties` file:

*   `android.useAndroidX=true`: The Android plugin uses the appropriate AndroidX library, instead of using a Support Library.
*   `android.enableJetifier=true`: The Android plugin automatically migrates existing third-party libraries (such as, JAR and AAR) to use AndroidX by rewriting their binaries.
    

> **_Important:_** After both these flags have been set, if the native Android project contains any references to the Android Support Library in its sources files and manifest entries, the command-line build will fail due to an Android Tools issue.

> **_Note:_** With Android Studio 3.2 and later, you can migrate an existing project to AndroidX by selecting **Refactor** > **Migrate to AndroidX** from the menu bar. This action converts all `android.support` references to `androidx`. For more information about how to migrate an existing project to AndroidX, click [here](https://developer.android.com/jetpack/androidx/migrate).

Issues while Migrating to AndroidX and their Resolutions
--------------------------------------------------------

While consuming VoltMX's AndroidX-supported plugins and migrating your project to AndroidX, you must manually replace any `android.support` references in the following scenarios:

*   **The plugins of a Cordova project or a React Native project that use** `android.support` **libraries.**  
    **Resolution**: In this scenario, you can use the following Cordova and ReactNative project folders and click the **Migrate to AndroidX** option in Android Studio to convert all `android.support` references to `androidx`:
    
    *   **Cordova**: Volt MX has provided you the control of the cordova `android` build folder (which gets generated during build time) to make the necessary changes. You can [manually customize the Cordova-generated Android project](CreateCordovaApplications.md#manually-customize-the-cordova-generated-android-project), [bundle this customized project](Native_App_Properties.md#bundle-a-customized-cordova-generated-android-project), and then check in the modified cordova `android` build folder. For more information about the details of this resolution, click [here](CreateCordovaApplications.md#ManuallyCustomizetheCordova-GeneratedAndroidProject).
    *   **ReactNative**: Because you already have control of the react-native `android` project folder, you can directly integrate the AndroidX-migrated project. This folder gets integrated into the Volt MX Iris project as a library project during build time.
*   **For** `android.support` **references in NFIs and Android manifest tag entries added through** Volt MX Iris**.**  
    **Resolution**: You must manually change all `android.support` references, and then build the application again. For more information about how to convert `android.support` references by using the Jetifier tool, click here(#convert-references-by-using-jetifier-tool). For more information about the mapping of namespaces from `android.support` to `androidx`, click [here](https://developer.android.com/jetpack/androidx/migrate/class-mappings).
    

Convert android.support References by using Jetifier Tool
-----------------------------------------------------------

1.  Search the JavaScript files, Android Manifest tag entries, and XML files for the occurrence of the `android.support` string.
2.  The Jetifier tool only accepts a .JAVA or .XML file as input. In accordance with this, copy all the `android.support` strings that you find to one file. For example, `supportstrings.java`.
3.  Click [here](https://developer.android.com/studio/command-line/jetifier) to download the Jetifier zip file from the **Install jetifier** section, and then extract it.

> **_Note:_** Your must install Java version 1.8 in your system to run the Jetifier standalone tool.

  4.  Go to the extracted folder > `bin` folder, and then run the 
      following command to get `androidx` equivalent references of `android.support` in the output file.  
       **\-i**: The input file with `android.support` references.  
       **\-o**: The output file where the equivalent `androidx` references are to be saved.

 ```
         jetifier-standalone -i <source-library> -o <output-library>

```

  5.  You can now use the contents of the `androidxstrings.java` 
       file to replace all the `android.support` references.
