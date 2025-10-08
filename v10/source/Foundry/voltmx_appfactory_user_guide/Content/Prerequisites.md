                          

Getting Started
===============

To use App Factory, there are a few requirements that must be met. The [prerequisites](#prerequisites) are needed to access App Factory, create projects, run tests, and build apps. The [additional requirements](#additional-requirements) are needed for specific platforms, or to add credentials for specific SCM providers. For more information, you can refer to the following sections.

Prerequisites
-------------


<details close markdown="block"><summary>VoltMX Cloud Account</summary>

The Volt MX Cloud provides an interface to manage your back-end services (VoltMX Foundry), manage run-time environments, and manage assets for your web apps. A Volt MX Cloud account is required to build and publish apps to the run time. You can sign up for a cloud account at the Volt MX Portal ([https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/)).

</details>
<details close markdown="block"><summary>HCL App Factory Environment</summary>

To access the App Factory Console, you need access to an App Factory environment. An App Factory Admin can provide the necessary permissions to access the App Factory environment. The App Factory Console and Testing Console links are available under the **Environments** tab on the Volt MX Foundry Console.

</details>
<details close markdown="block"><summary>VoltMX Foundry Environment</summary>

A Volt MX Foundry environment is required to execute, build, and publish apps from App Factory. All users of the App Factory Cloud need to have access to a Volt MX Foundry environment. A Volt MX Admin can provide the necessary permissions to all users to access the Volt MX Foundry environment.

</details>
<details close markdown="block"><summary>Iris project in source control</summary>

A Iris project (app) is a collection of forms, widgets, actions, and JavaScript files. For more information, refer to [Designing an Application in Iris](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md). To build and run a Iris app in App Factory, you need to version the Iris project in your SCM.

The repository that you use must contain at least one Iris project. Typically, the project is put directly at the root of the repository, but you can also put the project in a sub-folder. The repository can contain multiple Iris apps in organized sub-directories. For more information, refer to [Versioning a Iris project in SCM](IrisProjectVersioning.md).

</details>
<details close markdown="block"><summary>Test Scripts in source control</summary>

To run tests on your Iris project, you must version the test files in your SCM. You can run tests for Native apps and for Web apps. For example: if you want to run Appium tests for your DesktopWeb project, put the Appium test files at the `<root>/test/TestNG/DesktopWeb` folder of your project.

App Factory supports a Maven build management system for the tests, therefore, make sure that you put a Maven config file (pom.xml) with the test project. You can compile the tests by using the `mvn compile` target.

App Factory supports **TestNG** and **Jasmine** to test Iris projects. For more information, refer to [Testing an app - TestNG](TestingAnApp.md) and [Testing an app - Jasmine](TestingAnAppJasmine.md).

</details>
<details close markdown="block"><summary>Foundry project in source control</summary>

A Foundry app is a collection of configuration files for services and their assets. If you want to build and publish a Foundry app from App Factory, you need to version a Foundry project in your SCM.

The repository can contain multiple Foundry apps and dependent assets in organized sub-directories. For more information, refer to [Versioning a Foundry project in SCM](FoundryProjectVersioning.md).

</details>
<details close markdown="block"><summary>Email address</summary>

App Factory sends email notifications after every build or test set is performed. An email address must be provided before you set up the App Factory infrastructure to change all the configurations automatically.

</details>


Additional Requirements
-----------------------


<details close markdown="block"><summary id="git">GitHub 2FA</summary>

If you use GitHub as the Git vendor for your SCM, you need to set up two-factor authentication for GitHub.

To use App Factory with GitHub 2FA (two-factor authentication), follow these steps:

1.  Configure 2FA on GitHub. For more information, refer to [Configuring two-factor authentication](https://help.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication).
2.  Create personal access tokens. For more information, refer to [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
3.  Add the credentials to your project by using your GitHub username and the personal access tokens.  
    For more information, refer to [Adding New Source Code Repository Credentials](ManagingCredentials.md#Adding_SourceCode).

</details>
<details close markdown="block"><summary id="Apple">Apple Signing Certificates (Apple Developer Account or Apple Manual Certs)</summary>

To build apps for iOS, App Factory requires certificates that sign the iOS binaries. You can specify [Apple Developer](https://developer.apple.com/) credentials to generate the certificates, or manually upload the certificates. Based on the type of profile for the app, you also need to generate different profiles. For more information, refer to [Distribution methods](http://help.apple.com/xcode/mac/9.0#/dev31de635e5) in Xcode help.

To provide the certificates, you can follow either of the following ways:

*   **Apple Developer Account Credentials**

Apple Developer Account Credentials consist of the username and password of your Apple Developer account. App Factory uses the Apple ID credentials during the build process to generate a provisioning certificate and profile for the app.

*   **Apple Manual Certificates**

You can upload existing Apple certificates and profiles instead of sharing the Apple ID credentials. To use your existing Apple certificates and profile, follow these steps:

1.  Generate the proper provisioning certificate and profile from the Apple developer portal.
2.  Download the certificates and manually upload them to App Factory from the Build Parameters screen.

For information about uploading the certificates to App Factory, refer to [APPLE\_SIGNING\_CERTIFICATES.](BuildingAnApp.md)

> **_Note:_** If your certificates expire, you need to generate and re-upload them manually.

</details>
<details close markdown="block"><summary>Signature data for Android</summary>

To build and publish Android apps to production, App Factory needs to sign the Android binaries (APK files). Signature data (such as **key store file**, **key store password**, and **key password**) is required to sign APK files. For more information, refer to **Sign Your App** in the Android Studio help.

</details>
<details close markdown="block"><summary>Protected Keys</summary>

To build your app in protected mode and enable extra security, you need to upload the protected keys to your project. You can add the keys in the build parameters while building the app in Protected Mode. For more information, refer to [Protected Build](BuildingAnApp.md#Protected).

To build an app in protected mode, you need the following keys.

*   Private Key: You need to generate the Private Key for your apps.
*   Public Key: To obtain a Public Key, you need to generate a `public_key.pem` file and send it to the Volt MX Security team. Based on the platform, the Volt MX Security will send you the following files:
    
    *   For **Native** platforms, the security team will provide a `public_key.dat` file that is encrypted with the `public_key.pem` file.
    *   For **Web** platforms, the security team will provide a `securejs.properties` file that contains a Consumer Key, a Consumer Secret, and an Encryption Key. The Encryption Key is encrypted with the `public_key.pem` file.
    
    For more information on obtaining the appropriate public key, refer to [RSA Key Pair Generation, Encryption, and Usage](../../../Iris/iris_user_guide/Content/ApplicationSecurity.md#Key).
    
*   Fin Keys: The Fin Keys have been deprecated from V8 ServicePack 2.

</details>
<details close markdown="block"><summary>Web Protected Keys</summary>

To build your web app in protected mode and enable extra security, you need to obtain and upload the web protection keys to your project. You can add the keys in the build parameters while building the app in Protected Mode.

To build a web app in protected mode, you need to add keys to two parameters.

*   For information about adding Protected Keys for Web, refer to [Protected Build](BuildingAnApp.md#Protected).
*   For information about adding Obfuscation Properties (SecureJS Properties), refer to [Web Protection Parameters](BuildingAnApp.md#web-protection-parameters).

</details>
<details close markdown="block"><summary>Flyway</summary>

To run migrations by using the Flyway feature in App Factory, you must have a Relational Database System which is accessible over a public network or a VPN tunnel. You can achieve this connectivity by working with the Volt MX DevOps team while procuring an App Factory instance, or by raising a request with the Volt MX Support team. For information about the supported databases, refer to the FAQs Section.

To run Flyway jobs on your database, App Factory requires your database credentials, which you can add while configuring a Flyway job. The user must have Read and Write permissions for the relevant database. For more information, refer to [Flyway related parameters](RunningFlywayJobs.md#Flyway).
</details>