---
title: Volt MX Release Notes 
layout: documentation
has_children: false
order: 1
---

# Volt MX Release Notes

This topic lists new features, enhancements, and changes in Volt MX.
Note: For detailed information about fixes and known issues in 	Volt MX, see the [Cumulative fix list for HCL Volt MX](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0094476).

[Volt Iris](#volt-iris)
- [V9 Servicepack 2 Fixpack 37](#v9-servicepack-2-fixpack-37)
- [Earlier Iris releases](#earlier-iris-releases)

[Volt Foundry](#volt-foundry)
- [V9 Servicepack 2 Fixpack 1 Hotfix 6](#v9-servicepack-2-fixpack-1-hotfix-6)
- [Earlier Foundry releases](#earlier-foundry-releases)

## Volt Iris

### V9 Servicepack 2 Fixpack 37

#### Iris Enhancements

- Support to add third-party framework dependencies (in the .framework and .tbd file formats) has been added in the Iris iOS plugin.
- Support for cross-application testing has been introduced in the Jasmine Test Framework for Responsive Web Apps.
- Support for the tagName key has been added in the accessibilityConfig property for the Label and Segment widgets in a Responsive Web app. By using the tagName property, you can define the HTML tags for the content of the Label and Segment widgets.
- Support to open the login page in the same browser window has been added to the OAuth Identity services. When you upgrade to Iris V9 ServicePack 2 Fixpack 37, ensure that you upgrade the Foundry Integration Server artifacts to 9.2.1.6 or later to use the updated APIs.
- Support for NFI version 3.0 has been added in the iOS plugins of Iris for compatibility with the XCFramework.
- Iris is now supported on Mac machines that use M1 processors.
- Support for generating the third-party native bindings and outputs for the XCFramework has been added in Iris.
- Support for the Playback feature has been added for the voltmx.automation.playback.isLoadingScreenVisible and voltmx.automation.playback.waitForLoadingScreenToDismiss APIs in the Jasmine Test Automation Framework of Iris.
- Support for Cross Application Testing has been added in the Jasmine Test Automation Framework of Iris.
- Support for the Record and Playback features has been added for the Tap and Swipe gestures in the Jasmine Test Automation Framework of Iris.
- Support for the Record and Playback features has been added for the Action Sheet and Navigation Bar items through the voltmx.automation.actionSheet.click and voltmx.automation.navigationBar.click APIs.
- Support to provide an array or a JSON object as an input for the voltmx.store.getItem and voltmx.store.setItem APIs has been added in Iris.
- Improved the encryption level for datastore entries from 128 bit to 256 bit.
- Iris introduces support for the voltmx.automation.getCurrentForm and voltmx.automation.getWidgetsByFilter APIs. The voltmx.automation.getCurrentForm returns the Form ID of the current form and the voltmx.automation.getWidgetsByFilter API retrieves the paths of the child widgets of the specified container widget, based on the filters applied.

#### Miscellaneous Iris changes

- Support for the voltmx.application.setAppHeaders and voltmx.application.setAppFooters APIs has been deprecated from all the platforms on Iris.

#### Earlier Iris releases

| **Date** | **Description of Modifications/Release** |
| --- | --- |
| 10/29/2021 | Document updated for [V9 SP2 FP 5](Iris/iris_rel_notes/Content/V9SP2FP5.html) |
| 10/13/2021 | Document updated for [V9 SP2 FP 4](Iris/iris_rel_notes/Content/V9SP2FP4.html) |
| 08/18/2021 | Document updated for [V9.2](Iris/iris_rel_notes/Content/V92.html). |
| 12/21/2020 | Document updated for the V9 Service Pack 2 release with [New Features](Iris/iris_rel_notes/Content/V9SP2.html#new-features-and-enhancements-in-v9-service-pack-2) and [Known Issues](Iris/iris_rel_notes/Content/V9SP2_Known_Issues.html#top). |

<!--
| 10/28/2020 | 1.2 | Document updated for the release with [V9 SP1 FP 10](Iris/iris_rel_notes/Content/V9SP1.html#v9sp1-fixpack-10-features) release. |
| 08/24/2020 | 1.1 | Document updated for the V9 Service Pack 1 release with [New Features](Iris/iris_rel_notes/Content/V9SP1.html#new-features-and-enhancements-in-v9-service-pack-1) and [Known Issues](Iris/iris_rel_notes/Content/V9-SP1_Known_Issues.html#top). |
| 04/06/2020 | 1.0 | Document updated for the V9 release with [New Features](Iris/iris_rel_notes/Content/V9.html#new-features-and-enhancements-in-v9) and [Known Issues](Iris/iris_rel_notes/Content/V9_Known_Issues.html#limitations-and-known-issues-in-v9). |
-->

## Volt Foundry

### V9 Servicepack 2 Fixpack 1 Hotfix 6

#### Foundry Enhancements

Identity
- Added support for Login Failure Tracking in the Custom Identity Service. This is an optional setting that can be used to add preventive measures and provide additional security against malicious traffic. For more information, refer to Volt MX Custom Identity Service.

Installer
- Support for CORS has been added to the apps.war file.
- Enabled UTF-8 support for Foundry Object Services.
- Removed the dependency of the MobileFabricException class from the transaction API.
- Added support for Oracle CLOB and NCLOB data types.

Integration Services
- Support to remove the environment name from pre-signed URL generation has been added to cloud fsa.
- Support for versions other than the default version of v37.0 has been added to the Salesforce adapter.
- Support for the SameSite security attribute has been added to the cookies that are generated by the App Services.
- Support for CORS has been added to the apps.war file.
- Added support to use an existing identity provider for the Red Hat PAM adapter.
- Added new APIs to the Red Hat PAM Adapter.
- Support for the SameSite security attribute has been added to the cookies that are generated by the App Services.
- Support for versions other than the default version of v37.0 has been added to the Salesforce adapter.

Single Container Solution
- Support for https has been added to the Single Container Solution for HCL Foundry.

#### Earlier Foundry releases

| **Date** | **Description of Releases and Updates** |
| --- | --- |
| 10/29/2021 | Document published for [Volt Foundry V9 SP2 HF2](Foundry/voltmx_foundry_release_notes/Content/V9SP2HF2.html). |
| 02/03/2021 | Document published for [Volt Foundry Fix Pack V9.2.1](Foundry/voltmx_foundry_release_notes/Content/V9.2.1_New_Features.html). |
| 08/18/2021 | Document published for [Volt Foundry V9.2](Foundry/voltmx_foundry_release_notes/Content/V92.html). |

<!--| 12/18/2020 | 2.6 | Document published for [VoltMX Foundry Identity Service Hotfix V9.1.0.4](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.1.0.4.html). |
| 10/17/2020 | 2.5 | Document published for [VoltMX Foundry Identity Service Hotfix V9.1.0.3](Foundry/voltmx_foundry_release_notes/Content/IdentityHotFix9.1.0.3.html). |
| 11/10/2020 | 2.4 | Document published for [VoltMX Foundry Integration Service Hotfix V9.0.1.1](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.0.1.1.html). |
| 11/09/2020 | 2.3 | Document published for the following releases: <br><br>[VoltMX Foundry Integration Service Hotfix V9.1.0.3](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.1.0.3.html) <br><br>[VoltMX Foundry Integration Service Hotfix V9.0.0.6](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.0.0.6.html) |
| 10/23/2020 | 2.2 | Document published for [VoltMX Foundry Installer Hotfix 9.1.0.3 (On-Premises)](Foundry/voltmx_foundry_release_notes/Content/InstallerHotFix9.1.0.3.html). |
| 09/22/2020 | 2.1 | Document published for [](V9SP1_Main.html)[VoltMX Foundry Integration Service Hotfix V9.1.0.1](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.1.0.1.html). |
| 08/24/2020 | 2.0 | Document published for [VoltMX Foundry V9 Service Pack 1](Foundry/voltmx_foundry_release_notes/Content/V9SP1_Main.html). |
| 07/13/2020 | 1.6 | Document published for [VoltMX Foundry Installer Fix Pack 9.0.1](Foundry/voltmx_foundry_release_notes/Content/V9.0.1_New_Features.html). |
| 06/22/2020 | 1.5 | Document published for [VoltMX Foundry Integration Service Hotfix V9.0.0.5](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.0.0.5.html). |
| 05/21/2020 | 1.4 | Document published for [VoltMX Foundry Installer Hotfix 9.0.0.2 (On-Premises)](Foundry/voltmx_foundry_release_notes/Content/InstallerHotFix9.0.0.2.html). |
| 05/07/2020 | 1.3 | Document published for [VoltMX Foundry Integration Service Hotfic V9.0.0.4](Foundry/voltmx_foundry_release_notes/Content/IntegrationHotFix9.0.0.4.html). |
| 04/27/2020 | 1.2 | Document published to append [VoltMX Foundry V9 Known Issues on Console](Foundry/voltmx_foundry_release_notes/Content/V9_Knownissues.html#console). |
| 04/20/2020 | 1.1 | Document published for [VoltMX Foundry V9.0.0.1 on MS Azure](Foundry/voltmx_foundry_release_notes/Content/Azure9.0.0.1GA.html) release. |
| 04/06/2020 | 1.0 | Document published for [V9 GA](Foundry/voltmx_foundry_release_notes/Content/V9_Main.html) release. |
-->

