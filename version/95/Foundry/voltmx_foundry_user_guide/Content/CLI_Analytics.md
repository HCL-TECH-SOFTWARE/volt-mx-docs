
User Guide: Benefits of using MFCLI for Analytics

## Analytics for Third-party Client App Binaries

With Volt MX Foundry Analytics, you can add instrumentation to your existing mobile app binaries without having to modify the source code and recompiling them. The Volt MX Foundry analytics library is added to your existing app binary and resigned with your certificate. You can then distribute the analytics enabled app binary to users knowing the functionality of the app is unchanged, but now the app will send usage data to the Volt MX Foundry backend that can be analyzed using the reporting capabilities within the Volt MX Foundry Console.

The MFCLI utility is enhanced to enable analytics for _third-party client app binaries_. The user can enable analytics to their apps by using the MFCLI analytics commands such as the wrap, wrap-fetch, and wrap-delete.

The `wrap` command adds the analytics capability into the third-party client app binaries by adding the Volt MX Foundry SDK. It also downloads a copy of the analytics enabled app binary to the local system and makes a copy of the analytics enabled app binary available in the **VoltMX Foundry Console > Apps** page. The Volt MX Foundry Admin can distribute the analytics enabled app binary to the targeted users, and the targeted users can install the binary and start using it. The supported platforms for analytics enabled binary are `iOS` and `Android`. The supported platforms' channels are `ios_phone`, `ios_tablet`, `android_phone`, and `android_tablet`.

### Benefits of using MFCLI for Analytics

- Allows customers to get usage data on applications, for which they don't even have the source code.
- Saves the customer valuable time by injecting analytics into existing apps, without requiring a developer to write code to get the reporting functionality.
- It also allows users to distribute the analytics enabled app binary to the end-users either manually or using the console.
- Reports: The user can view the following standard reports from the analytics enabled app binary*:*

  - **Application Activity Reports**: This activity shows the application use based on application sessions per day, week, or month of a given date range.
  - **User Activity Reports**: This report provides a count of new users for an application in a given date range and helps explore that data through charts.
  - **Location Reports**: This activity shows user sessions based on geolocation per country on a map of the world.

    For more details on statistics, refer to [Standard Reports](../../../Foundry/standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.md).

### Usage

#### Prerequisites for Volt MX Analytics Enabled App Binary

The following binaries and certificates are required to wrap third-party client binaries for Analytics.

- **client-binary**. The client binary to wrap an Android Package Kit (APK) file for an Android application. A .ipa (iOS application archive) file for an iOS application.

  > **_Note:_**  By default Volt MX Foundry apps are enabled with analytics capability.

- **keystore**. The keystore file holds a certificate chain of which one will be used to sign the binary for distribution. For Android, this corresponds to the `.keystore` extension and for iOS, `.p12` files are expected. Keystore files may or may not use aliases to access certificates contained in the chain. Specifically, Android `.keystore` file requires aliases, while iOS `.p12` files do not.
- **keystore-passphrase.** The passphrase for opening/reading the keystore file as described above. This is applicable to both Android and iOS platforms.
- **provisioning-file.** The provisioning profile is specific to iOS platforms and is a `.mobileprovision` file containing a list of provisioned rights for the binary along with information about the distribution authority and the scope of targets, if applicable.
- **certificate-alias**. The alias by which the signing certificate is identified within the keystore chain, as described above. The certificate-alias applicable for Android only.
- **certificate-passphrase**. The passphrase that will be used to open/read the signing certificate specified by the alias above (if applicable) from the keystore file. This certificate contains signing information for the binary. This is necessary for the only Android platform since for iOS, the keystore passphrase suffices to open/read the certificate.
- **\* --environment**. This environment is a cloud environment name. On this environment, app services and Management services should be running.

#### Download Links

Volt MX Foundry Command Line Utility can be downloaded from [VoltMX download center](http://community.hclvoltmx.com/downloads).

#### MFCLI Commands for Analytics of Third-Party Apps (App Binaries)

The following are the analytics commands to wrap third-party apps' binaries.

##### Wrap Command

The `wrap` command helps the user to enable analytics into third-party client app binaries. When the user runs the wrap command through MFCLI, it uses the client app binary and app's platform specific certificates from the local system for wrapping. During the wrap process, the wrap command uses the client app certificates to inject analytics attributes into the client app binary.

For example, analytics attributes such as Volt MX Foundry-SDK, App Key and App Secret, and App Service URL. At the end of the successful wrapping, the app client binary gets bundled with the analytics attributes and downloaded to the MFCLI admin's directory. Now the client app binary is enabled with the analytics capability.

> **_Important:_** The analytics wrapping feature is supported with versions older than `SDK-GA-8.0.0`. If you use `SDK-GA-8.0.0` or higher versions of Volt MX Foundry SDK for analytics wrapping, the app will not work as expected after wrapping.<br>  
> HCL recommends that you use any of the Volt MX Foundry SDK versions less than or equal to `SDK-GA-7.3.0.17` for analytics wrapping available from Volt MX Download portal.  
> While executing the `wrap` command from MFCLI, admin must pass the optional field value `--sdk-version “x.x[.x][.x]”`. Otherwise MFCLI consume the latest version of SDK by default.<br>  
> For example, if you want to specify the SDK version SDK-GA-7.3.0.17 for wrap command, pass the value as in this format: `--sdk-version “7.3.0.17”`

**The following is a sample command to wrap an app binary to manage.hclvoltmx.com**

```
 java -jar mfcli.jar wrap -u <user> -p <password> -t <account id> -a <app name> -e <environment name> -cb <client binary file> -plat <client binary platform> -ks <keystore file> -kpp <keystore passphrase> -cpp <certificate passphrase> -ca <certificate alias>

java -jar mfcli.jar wrap -u abc@voltmx.com -p password -t 100054321 -a MyApp -e MyEnv -cb C:\temp\apk1.apk -plat android_phone -ks C:\temp\MykeystoreFile.keystore -kpp MyKeystorePassphrase -cpp MyCertificatePassphrase -ca MyCertificateAlias

```

##### Wrap-fetch Command

The wrap-fetch command helps the user to download an analytics enabled app binary.

**The following is a sample command to wrap-fetch an analytics enabled app binary from manage.hclvoltmx.com**

```
 java -jar mfcli.jar wrap-fetch -u <user> -p <password> -t <account id> -a <app name> -e <environment name> -pl <platform Name> --binary-version <app Binary Version>

java -jar mfcli.jar wrap-fetch -u abc@voltmx.com -p password -t 100054321 -a MyAppName -e My Env -plat android_phone --binary-version 1.0.0
```

##### Wrap-delete Command

The wrap-delete command helps the admin to delete the analytics enabled app binary. This command is applicable for Volt MX Cloud only.

An admin cannot delete an analytics enabled app binary from Volt MX Foundry Console if the binary is published on a **Web client** environment or **Native client** environment. Because the Console does not have an option to up-publish analytics enabled apps from the console.

**The following is a sample command to delete an analytics enabled app binary from Volt MX Cloud**

```
java -jar mfcli.jar wrap-delete -u <user> -p <password> -t <account id> -a <app name>
java -jar mfcli.jar wrap-delete -u abc@voltmx.com -p password -t 100054321 -a MyAppName

```

> **_Note:_**     When analytics enabled app binaries are published to Web client environments (app server), the app's published details are not displayed in the **App Publish** page in Console.

Therefore in MFCLI, a new command (wrap-delete) is added. The wrap-delete first unpublishes the analytics enabled app from all Web published environments and then deletes it from the console. If the analytics enabled app is published to any native client environments, when you try to delete the app, the following error appears:

<pre><code style="display:block;background-color:#eee;">C:\Users\Desktop\mfcli73GA\java -jar mfcli.jar wrap-delete -u abc@voltmx.com -p pwd -t 100000008 -a SampleAnalytics --cloud-type "sit2-"
Deleting analytics app [SampleApp] from Volt MX Foundry...
  Verifying app details...
  Verifying native client binary published info...
  App binary is published as native client on : https://gwlib.emm.sit2-voltmxcloud.com
<mark>ERROR: The app binary with analytics is published on the above Volt MX Management environments. Please unpublish and delete the app from all Volt MX Management environments before wrap-delete.</mark>
</code></pre>

> **_Note:_**  To delete the analytics enabled app that is published on a native client environment, the admin must need to delete the app from that particular Management environment/native client environment. Once the app is deleted from all dependent native-client environments, the admin can re-run the wrap-delete command from MFCLI for deleting the app.

If the analytics app is not targeted to any of the Volt MX Management Environment, the wrap-delete command un-publishes and deletes the app from Volt MX Foundry Console without any error, shown below:

```

C:\Users\Desktop\mfcli73GA\java -jar mfcli.jar wrap-delete -u abc@voltmx.com -p pwd -t 100000008 -a SampleAnalytics --cloud-type "sit2-"  
Deleting analytics app [SampleApp] from Volt MX Foundry...
Verifying app details...
Verifying native client binary published info...
Verifying web client published info...
Deleting analytics app [SampleApp] from Volt MX Cloud...  
Successfully completed!

```

#### Attributes for Wrap, Wrap-fetch, and Wrap-delete Commands in MFCLI

The following are the attributes and commands for the wrap, wrap-fetch, and wrap-delete from the MFCLI.

> **_Note:_** Fields marked with an asterisk sign are mandatory.

| Arguments                       | Platform                                                                                                                                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \-t, --account                  | Nine-digit ID of the Volt MX Cloud account (visible in top right corner in Console) - for example, 100054321. Not relevant for an On-premise installation.                                              |
| \* -a, --app                    | Name of the app to be published as part of the wrapping.                                                                                                                                                |
| \-k, --appkey                   | App Key to be used for the app. If the app key does not exist, the CLI/system generates it. This value makes sense only on a fresh publish and is ignored on a republish. Default: <empty string>       |
| \-s, --appsecret                | App Secret to be used for the app. If the app secret does not exist, the CLI/system generates it. This value makes sense only on a fresh publish and is ignored on a republish. Default: <empty string> |
| \--binary-version               | The version of the client binary is in the format of x.x.x (for example 1.0.0). Default: 1.0.0                                                                                                          |
| \-ca, --certificate-alias       | The certificate alias for verifying the Android certificate.                                                                                                                                            |
| \-cpp, --certificate-passphrase | The certificate passphrase for reading the Android certificate.                                                                                                                                         |
| \* -cb, --client-binary (.apk)  | Name of the client binary to wrap.                                                                                                                                                                      |
| \--description                  | Description of client binary. Default: Client binary for analytics wrapping.                                                                                                                            |
| \* -e, --environment            | Name of the environment to publish to as part of wrapping.                                                                                                                                              |
| \* -ks, --keystore              | The keystore file for a certificate to use for wrapping.                                                                                                                                                |
| \* -kpp, --keystore-passphrase  | The passphrase for reading the keystore file.                                                                                                                                                           |
| \* -p, --password               | Password for the Volt MX user. This could be plain text or, encrypted using 'encrypt' command                                                                                                           |
| \* -plat, --platform            | The platform for the client binary. Possible Values: \[android_phone, android_tablet\]                                                                                                                  |
| \-pf, --provisioning-file       | iOS mobile provisioning file (for example, mobileprovision file)                                                                                                                                        |
| \--sdk-version                  | Volt MX Foundry SDK version to use for wrapping. Default: latest                                                                                                                                        |
| \* -u, --user                   | Volt MX user required for authentication - for example, abc@hcl.com                                                                                                                                     |

#### Use Cases of Analytics through MFCLI

##### Use Cases for the Wrap Command

This section helps the user better understand the utility for Analytics.

For example, company MoBoCo has a native app binary for Android- for example, MoBoAnalytics.apk. The source code for the app is not available, but MoBoCo wants to enable analytics into the app binary and to reduce the effort to recode analytics logic. Finally, publishes the analytics enabled app binary to an enterprise distribution/app management environment, and end-users can install this app.

<p>In this example, a user needs to perform the following two steps:</p>
<ol>
  <li>
    <p>Wrap the client binary with analytics attributes using respective platform certificates. </p>
    <p>To wrap the app binary, run the following command from MFCLI.</p>
    <pre><code style="display:block;background-color:#eee;">java -jar mfcli.jar wrap -u &lt;user&gt; -p &lt;password&gt; -t &lt;account id&gt; -a &lt;app name&gt; -e &lt;environment name&gt; -cb &lt;client binary file&gt; -plat &lt;client binary platform&gt; -ks &lt;keystore file&gt; -kpp &lt;keystore passphrase&gt; -cpp &lt;certificate passphrase&gt; -ca &lt;certificate alias&gt;</code></pre>
    <p>The Volt MX Foundry app is created with the given name by the user. The analytics enabled app binary is stored in the Volt MX Foundry workspace. Volt MX Foundry Admin can access the analytics enabled app binary in <strong>VoltMX Foundry Console &gt; Apps</strong> page - for example, <code>SampleAnalyticsWrapApp</code>. Now, the analytics enabled app binary can be distributed to users.</p>
  </li>
  <li>
    <p>Make the analytics enabled app binary available to users in one of the ways mentioned below:</p>
    <ul>
      <li>To distribute the analytics enabled app binary to users enrolled with Management Server, Volt MX Foundry Admin can use the <a href="../Content/Publish_Native_Client.html">VoltMX Foundry Console &gt; Publish &gt; Native Client</a>  feature to publish the analytics app to Volt MX Management environment as <code>Sign Only</code>. After successful publish of the analytics enabled app binary, the app gets published to the environment. Now, the targeted users can download and install the analytics enabled app on their devices using the Enterprise Store.</li>
      <li>To distribute the analytics enabled app binary to users manually, a Volt MX Foundry Admin can share the analytics enabled app binary to the user. After that, the user installs the analytics enabled app binary on devices. For example, an Android user can use an enterprise specific distribution system to install the app on devices.</li>
    </ul>
  </li>
  <li>View the reports based on the usage of the apps. The Volt MX Foundry admin can view the statistics through the <strong>VoltMX Foundry Console > Reports</strong> tab. Currently, <a href= "../../standard_metrics_reports_guide/Content/VoltMX_Analytics_-_Standard_Reports/Application_activity_Reports.html">Standard Reports</a> are supported for the analytics enabled app binary.</li>
</ol>

##### Use cases for the Wrap-fetch Command

- While the wrapping process was in progress, and if the user had skipped the wrap process wait time. The user can get the analytics enabled app binary. For example, while the wrap command is in progress and is taking longer time than expected, the user intentionally exits from the MFCLI. Later the user wants to get the wrapped client binary for the submitted app version and platform.
- To get the analytics enabled app binary from the workspace - for example, if the user deleted or lost the analytics enabled app binary from the local system.
- To get the analytics enabled app binary while the wrap was in progress and if the Volt MX Foundry Admin gets disconnected from wrap process due to an unexpected error.

##### Use cases for the Wrap-delete Command

- When you no longer require to collect statistics of the analytics enabled app binary from devices, you can delete the app from Volt MX Cloud. When the app is deleted from Volt MX Cloud, the previous statistics are no longer available in the console. And no further statistics are captured even if the app is running on devices.

### Limitations of MFCLI for Analytics

- Apps with the same bundle ID cannot be created in Volt MX Management Server. For example, the user has published a native app binary in Volt MX Management Server. When the user wraps the same app through the **MFCLI > wrap** command, and tries to publish the same binary (with bundle ID) through the **VoltMX Foundry Console > Publish > Native Client**  feature to the same Management Server, the system throws publish error.
- The analytics enabled app exists in Volt MX Foundry in the **Published** state with Volt MX Foundry SDK wrapped into it. The binary is installed on devices. Now, if a Volt MX Foundry Admin unpublished the analytics enabled app from the environment, the statistics of the app usage cannot be reported.
