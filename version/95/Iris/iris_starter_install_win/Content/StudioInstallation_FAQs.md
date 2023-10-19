<!-- 
[](Prerequisites.md)

- [Prerequisites](Prerequisites.md#prerequisites)
  - [System Requirements](Prerequisites.md#system-requirements)
  - [Download Volt MX Iris](Prerequisites.md#download)
- [Install Volt MX Iris](Installing VoltMX Iris.md#installing)
  - [Configuring Volt MX Iris to use a Proxy server](Installing VoltMX Iris.md#configuring-to-use-a-proxy-server)
    - [Basic Proxy](Installing VoltMX Iris.md#basic-proxy)
    - [NTLM Proxy](Installing VoltMX Iris.md#ntlm-proxy)
    - [Custom NTLM Proxy](Installing VoltMX Iris.md#custom-ntlm-proxy)
    - [White-list Essential Domains](Installing VoltMX Iris.md#white-list-essential-domains)
- [Post Installation Tasks](Launching VoltMX Iris.md#post-installation-tasks)
  - [Launching Volt MX Iris](Launching VoltMX Iris.md#launching)
- [Update Volt MX Iris](Upgrade.md)
- [FAQs](StudioInstallation_FAQs.md#appendix-frequently-asked-questions-faqs)

[](#)

- All Files

You are here: FAQs -->

# Frequently Asked Questions (FAQs)

This appendix explains a few Frequently Asked Questions (FAQs) and answers.

<details close markdown="block"><summary>Problems with Volt MX Iris installation</summary>
<p>In case there were problems with your installation, install complete page shows a warning and the logs location i.e. path to the installation directory.</p>
<ul>
<li>In case the installation is canceled, the logs are generated in either desktop or installation path.</li>
<li>If you cancel the installation before <b>Choose Install Folder</b> screen, the logs are generated in desktop.</li>
<li>If you cancel the installation after <b>Choose Install Folder</b> screen, the logs are generated in the installation folder.</li>
</ul>
</details>

<details close markdown="block"><summary>How to build and publish an app?</summary>
After installing Volt MX Iris you can refer to the [Getting Started](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/) page to understand how to create an application.

Once you have created your application, you can refer to [Building and Viewing an Application](../../../Iris/iris_user_guide/Content/BuildingAndViewAnApp.md).

If you have created an iOS application and want to publish it to the App Store, you can refer to [Build an iOS Application](../../../Iris/iris_user_guide/Content/BuildAnAppForiOS.md).

Certain prerequisites for building and publishing your iOS application to the App Store are:

<ul>
<li><a href="../../../Iris/iris_user_guide/Content/iOS_Automatic_Output_Generation.html#prerequisites">Configure Xcode on your Mac</a></li> 
<li><a href="../../../Iris/iris_user_guide/Content/iOS_Automatic_Output_Generation.html#ipa-generation">Connect your Mac with Iris</a></li> 
<li><a href="https://developer.apple.com/documentation/">Apple Enterprise Distribution Certificate (Release Mode only)</a>
<ul><li>Using this feature, you can add your Apple enterprise distribution certificate to the Volt MX Management server. To add the certificate, click <b>+Add</b> to select the certificate from its location and then click <b>Open</b>. The selected certificate with size in KB appears next to Enterprise Distribution Certificate label.</li></ul>
</li>  
<li><a href="https://developer.apple.com/documentation/">Apple Enterprise Provisioning Profile (Release Mode only)</a>
<ul><li>Using this feature, you can add your Apple enterprise store provisioning profile to the Volt MX Management server. Click <b>+Add</b> to select the profile from its location and then click <b>Open</b>. The selected profile with size in KB appears next to enterprise store provisioning profile.</li></ul>
</li>  
<li><a href="https://developer.apple.com/documentation/">Apple Application Manager (Launchpad app) Push Certificate (Release Mode only)</a>
<ul><li>Using this feature, you can add your Apple push certificate to the Volt MX Management server. Click <b>+Add</b> to select the certificate from its location and then click <b>Open</b>. The selected certificate with size in KB appears next to push certificate label.</li></ul>
</li>  
</ul>

<!-- - [Configure Xcode on your Mac](../../../Iris/iris_user_guide/Content/iOS_Automatic_Output_Generation.md#prerequisites)
- [Connect your Mac with Iris](../../../Iris/iris_user_guide/Content/iOS_Automatic_Output_Generation.md#ipa-generation)
- [Apple Enterprise Distribution Certificate (Release Mode only)](../../../7_0/voltmxlibrary/management/emm_quick_start_guide/Content/Creating_Apple_Certificates.md)
- [Apple Enterprise Provisioning Profile (Release Mode only)](../../../7_0/voltmxlibrary/management/emm_quick_start_guide/Content/Creating_the_Apple_Enterprise_Wild_Card_Provisioning_Certificate.md)
- [Apple Application Manager (Launchpad app) Push Certificate (Release Mode only)](../../../7_0/voltmxlibrary/management/emm_quick_start_guide/Content/Creating_the_Application_Manager**Launchpad_app**Push_Certificate.md) -->

If you have created an Android application and want to publish it to the Google Play Store, you can refer to [Build an Android Application](../../../Iris/iris_user_guide/Content/BuildAnAppForAndroid.md).

</details>

<!-- *   [Prerequisites](Prerequisites.md#prerequisites)
    *   [System Requirements](Prerequisites.md#system-requirements)
    *   [Download Volt MX Iris](Prerequisites.md#download)
*   [Install Volt MX Iris](Installing VoltMX Iris.md#installing)
    *   [Configuring Volt MX Iris to use a Proxy server](Installing VoltMX Iris.md#configuring-to-use-a-proxy-server)
*   [Post Installation Tasks](Launching VoltMX Iris.md#post-installation-tasks)
    *   [Launching Volt MX Iris](Launching VoltMX Iris.md#launching)
*   [Update Volt MX Iris](Upgrade.md)
*   [FAQs](#frequently-asked-questions-faqs) -->
