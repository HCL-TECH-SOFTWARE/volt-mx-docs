---
layout: "documentation"
category: "v8upgrade65"
---
                           

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")

You are here: Upgrade Readiness: Tool and Information

Upgrade Readiness: Tool and Information
=======================================

KURT stands for Volt MX Upgrade Readiness Tool and is a diagnostic utility that quickly scans a customer project and looks for well understood problems right at the beginning of an upgrade process and makes recommendations on how to get these rectified. In minutes, you can know about potential problems, unlike earlier where you encounter issues gradually after initiating the upgrade process.

Click any of the following for detailed information:

*   [Validating Image Resources](#validating-image-resources)
*   [Duplicate Support - V4 JAR](#duplicate-support-v4-jar)
*   [Validating androidprecompiletask.xml Dependencies](#validating-androidprecompiletask-xml-dependencies)
*   [Validating Android Custom Widgets](#validating-android-custom-widgets)
*   [Validating iOS Custom Widgets](#validating-ios-custom-widgets)
*   [Validating controllerdef.xml File for Custom-Connectors](#validating-controllerdef-xml-file-for-custom-connectors)
*   [Validating servicedef.xml File](#validating-servicedef-xml-file)
*   [Deprecated APIs](#deprecated-apis)
*   [API Level Changes](#api-level-changes)
*   [JAR Version Conflict](#jar-version-conflict)

Validating Image Resources
--------------------------

Projects that are built using ANT script on pre 7.x version of Volt MX Iris do not have any restrictions on Image file formats (like 9.png/png). Renaming jpeg images to png leads to successful ANT builds.

Migrating pre-7.x projects to 7.x and above versions will cause few issues because the latest Iris versions use Gradle script to build projects and also have strict restrictions on Image file formats.

In this test case, KURT validates the image resources and displays a report which contains details about the images which will cause build error during migration. The validation brings down the time spent for migrating a project.

Duplicate Support - V4 JAR
--------------------------

In pre-7.x Iris versions, few Android FFIs need "android-support-v4.jar". The JAR file is added to custom libraries folder in the Iris Project.

In Iris 7.x and later versions, the platform is pre-packaged with the JAR file. Migrating pre-7.x projects to 7.x and later versions can cause duplication if the JAR is already added by the user. In such cases, the user-added JAR must be removed.

Validating androidprecompiletask.xml Dependencies
-------------------------------------------------

In the androidprecompiletask.xml file, the user-defined dependencies mus be identified.

To identify user-defined dependencies, follow these steps (recommended by VoltMX):

1.  Click on **Project Settings**. The Project Settings pane appears.
2.  Click on **Native** tab.
3.  Under **Native** Tab, click on **Android** sub-tab.
4.  Under the Android tab, click on **Gradle Entries** sub-tab in **Manifest Properties & Gradle Build Entries** section. The **Gradle Entries** tab displays the required information.

KURT identifies the existence of gradleSetup folder in the project and recommends you to remove the folder. The dependencies must be added within Iris by following the above procedure.

Validating Android Custom Widgets
---------------------------------

Custom widgets are created by combining the widgets available in Volt MX Iris to serve a particular use case.

The Custom widgets which are created using pre-7.x version Iris may not work as expected after upgrading to the latest version. KURT informs you about such issues before the upgrade.

Validating iOS Custom Widgets
-----------------------------

Custom widgets are created by combining the widgets available in Volt MX Iris to serve a particular use case.

The Custom widgets which are created using pre-7.x version Iris may not work as expected after upgrading to the latest version. KURT informs you about such issues before the upgrade.

Validating controllerdef.xml File for Custom-Connectors
-------------------------------------------------------

The controllerdef.xml file located inside the middleware boot-config folder consists all the default connectors and their respective classes which must be invoked while invoking the specific connector. These connectors are provided by the platform. In few cases, modifying and changing the connectors may cause problems after the upgrade.

KURT informs you of these issues prior to the upgrade which helps in debugging the issue.

Validating servicedef.xml File
------------------------------

The servicedef.xml file is the core file for Volt MX Foundry from which it picks the services and the corresponding classes/actions.

The common problems faced with the servicedef.xml file are:

*   Existence of Duplicate Service Ids
*   Non-existence of services in the servicedef file which is referred by the composite services
*   Non-existence of classes of java services which are mentioned in the servicedef file as Java services
*   Validating user-defined config params (if any)

KURT identifies and reports these discrepancies before the upgrade

Deprecated APIs
---------------

Some of the APIs which are available in previous versions of Volt MX Iris are deprecated in the latest Iris versions. Volt MX recommends replacing deprecated APIs with equivalent APIs.

API Level Changes
-----------------

API signature is changed for some of the datastore APIs. So if you use any datastore API to save rawbytes, KURT prompts you to recheck the API signature and redo it again.

JAR Version Conflict
--------------------

The Iris project may contain some JARs which are code specific/ dependent JARs. In few cases, even Volt MX Foundry server uses same JARs. In such cases, you must either remove the JAR or make sure that both of the JARs are on the same version or else the version of the JAR must be higher than of the server.
