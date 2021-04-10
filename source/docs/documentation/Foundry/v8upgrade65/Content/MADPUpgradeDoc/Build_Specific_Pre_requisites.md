---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")


### Build-specific Prerequisites

Due to several changes made in the underlying OEM build processes and tool chains used, numerous restrictions are imposed at build time, on what can be included within the application. This section outlines some of the most commonly observed changes and how these should be addressed prior to migrating to 7.x 

Android

The most significant change in Android is the migration to a new build mechanism with Gradle. The Gradle imposes several restrictions or checks that require you to change the following:

*   PNG-based image files should be only PNG format files. It it observed that many time users reated a .gif and saved it as a PNG file. Previous Android build tools were lenient on this but the Gradle flags this. Hence all PNG files must only be of PNG format.
*   The 9-patch drawable images must include 9-patch regions. The build fails if Gradle detects discrepancy in this. Refer to the [Converting an image to 9-patch image using Android tool](Conversion_of_an_image_to.html) on how to convert an image to a 9-patch image.
*   In Iris 7.3 onwards, there is support to provide Gradle entries from Iris as shown in . The entries need to be provided from Project Settings->Native->Android. Refer to the relevant screenshot.
*   If the application uses androidprecompiletask or postcompiletask (files would be present in <workspace folder>/<project name> folder) for Gradle-related entries in versions prior to 7.3, remove those entries and add the entries in **Project Settings**.
*   Gradle needs Android plugin, which gets downloaded when run for the first time. In this case, it automatically downloads Gradle Android plugin from the **jcenter** repository ([http://jcenter.bintray.com/com/android/tools/build/gradle/](http://jcenter.bintray.com/com/android/tools/build/gradle/%E2%80%9D))to your system so you must set necessary proxy for the command line option of Gradle to work.

**iOS**

*   XCode 8.0 and 64-bit are mandatory for building an application.
