
# Volt MX Release Notes

This topic lists new features, enhancements, and changes in Volt MX.
For detailed information about fixes and known issues in Volt MX, see the <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101445" target="_blank">Cumulative fix list for HCL Volt MX</a>.


[Volt Iris](#volt-iris)

- [V10 Servicepack 0 Fixpack 1](#v10-servicepack-0-fixpack-1)
- [V10 Servicepack 0 Fixpack 0](#v10-servicepack-0-fixpack-0)


[Volt Foundry](#volt-foundry)

- [V10 Servicepack 0 Fixpack 1](#v10-servicepack-0-fixpack-1-foundry)
- [V10 Servicepack 0 Fixpack 0](#v10-servicepack-0-fixpack-0-foundry)


## Volt Iris

### V10 Servicepack 0 Fixpack 1
September 22, 2025

* Updated internal libraries to comply with Android Play Store guidelines on the 16 KB pagefile size. See details [here](https://developer.ds.hcl-software.com/t/framework-update-16kb-page-size-support/171697). 
* Added support for skin forking for Figma to Volt Iris design conversion.

For detailed information about fixes and known issues in this release, see the <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101445" target="_blank">Cumulative fix list for HCL Volt MX</a>.


### V10 Servicepack 0 Fixpack 0
July 21, 2025

<details close markdown="block"><summary>Figma design import to Iris forms</summary>

Leverage the power of AI to translate a designer’s view to reality. This new feature will allow for cutting UI development time by half or more by converting designs in Figma directly into forms in Volt Iris.

Refer [here](Iris/iris_user_guide/Content/ImportFigmaForm.md) for more information

</details>


<details close markdown="block"><summary>Volt AI–RAG enhanced responses in Volt IQ</summary>

Your AI Assistant has now become even more powerful with conversational responses. Ask your Volt IQ assistant anything, even to generate code snippets for your use-case.

Refer [here](Iris/iris_user_guide/Content/Volt_IQ.md#volt-ai) for more information.

</details>


<details close markdown="block"><summary>Volt Iris UI/UX revamp</summary>

A redesign of the Volt Iris IDE with enhanced usability, wider accessibility and improved aesthetics in mind.

</details>


<details close markdown="block"><summary>Modernizing the widget library</summary>

Updated the default look and feel of the default widget library to improve usability and be aesthetically pleasing.

</details>


<details close markdown="block"><summary>Improved, modern templates for auto generated forms</summary>

Restyled the templates for forms that can be auto-generated in Volt Iris by dragging in a service definition from the Data panel.

</details>


<details close markdown="block"><summary>Improved error reporting in Action Editor</summary>

Added detailed and context-specific logging of errors in Action Editor flow sequences to facilitate easy troubleshooting and correction.

Refer [here](Iris/iris_user_guide/Content/working_with_Action_Editor.md) for more information.

</details>


<details close markdown="block"><summary>Native support for Volt Iris on Apple Silicon</summary>

Added native support for Volt Iris IDE on Apple Silicon architecture and removed dependency on Rosetta framework. Users can now pick between the x86 or the Silicon flavors of Volt Iris based on their Mac development environment.

</details>


<details close markdown="block"><summary>iOS Live Activity</summary>

Support added for Live Activities for iOS (OS 16.2+), enabling real-time updates on the Lock Screen and Dynamic Island, offering a less obtrusive alternative to traditional notifications. Start, update or end Live Activities locally from the app or remotely via push notifications.

With broadcast channels (iOS 18) timely, scalable, and seamless updates can be targeted to multiple users.

Refer [here](Iris/iOS_Live_Activities_in_Volt_MX_Iris/Content/Integrate_Live_Activities_with_an_iOS_App.md) for more information.

</details>

<details close markdown="block"><summary>Car Application development Support</summary>

Volt Iris now supports Car Application development, enabling seamless integration across Apple CarPlay and Android Auto.

This update opens up new possibilities for developers aiming to innovate in the automotive space

Refer [here](Iris/iris_car_app_developer_guide/Content/Introduction.md) for more information.


</details>

<details close markdown="block"><summary>Passkey support</summary>

Introducing Passkey APIs, enabling password-less authentication based on the WebAuthn standard. By replacing traditional passwords with secure public-key cryptography, passkeys significantly enhance the safety and simplicity of user authentication.

Refer [here](Iris/iris_api_dev_guide/content/Passkey_Functions.md) for more information.


</details>

For detailed information about fixes and known issues in this release, see the <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101445" target="_blank">Cumulative fix list for HCL Volt MX</a>.


<!--
| 10/28/2020 | 1.2 | Document updated for the release with [V9 SP1 FP 10](Iris/iris_rel_notes/Content/V9SP1.md#v9sp1-fixpack-10-features) release. |
| 08/24/2020 | 1.1 | Document updated for the V9 Service Pack 1 release with [New Features](Iris/iris_rel_notes/Content/V9SP1.md#new-features-and-enhancements-in-v9-service-pack-1) and [Known Issues](Iris/iris_rel_notes/Content/V9-SP1_Known_Issues.md#top). |
| 04/06/2020 | 1.0 | Document updated for the V9 release with [New Features](Iris/iris_rel_notes/Content/V9.md#new-features-and-enhancements-in-v9) and [Known Issues](Iris/iris_rel_notes/Content/V9_Known_Issues.md#limitations-and-known-issues-in-v9). |

FOUNDRY ENHANCEMENTS
The purpose of this fixpack is to address upgraded tomcat version from 9.0.45 to 9.0.62 to fix spring4shell vulnerabilities and upgraded log4j version to 2.17.1 to fix security vulnerabilities.

-->

## Volt Foundry

<a id=v10-servicepack-0-fixpack-1-foundry></a>

### V10 Servicepack 0 Fixpack 1

September 22, 2025

* Added support for ZenDB.
* Added support for configuring additional query parameters in Swagger adapter operations.
* Added support for CLI-based upgrades on WebSphere Liberty deployments.
* Implemented security hardening measures.

For detailed information about fixes and known issues in this release, see the <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101445" target="_blank">Cumulative fix list for HCL Volt MX</a>.




<a id=v10-servicepack-0-fixpack-0-foundry></a>

### V10 Servicepack 0 Fixpack 0

July 21, 2025


<details close markdown="block"><summary>Added Governance capability</summary>

Governance is a structured process that ensures business-critical operations that involve application runtimes (like deployments) pass through a controlled
review process that is secure, traceable and auditable.

Refer [here](Foundry/voltmx_foundry_user_guide/Content/Governance_for_Foundry.md?h=governance
) for more information.

</details>

* Upgraded Tomcat version to 9.0.105 in both the installer and the container.
* Security Hardening.

For detailed information about fixes and known issues in this release, see the <a href="https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0101445" target="_blank">Cumulative fix list for HCL Volt MX</a>.

