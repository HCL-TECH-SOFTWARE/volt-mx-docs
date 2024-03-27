                          

Project Settings
================

Every project in App Factory contains a **Project Settings** page, which contains configurations such as Source Control parameters, Quality (SonarQube) related settings, and Notification related parameters.

To access the Project Settings page, open your App Factory project, and then select **Project Settings** from the left panel. The Project Settings link is available at every folder level of your project. The settings are only applicable for the selected project. You need to configure the project settings before you run a build. You can edit the settings at any time by opening the **Project Settings** page.

For more information about the project settings, refer to the following sections:

*   [Iris Project Settings](#iris-project-settings)
*   [Foundry Project Settings](#foundry-project-settings)
*   [Microservice Project Settings](#microservice-project-settings)

<blockquote><em><b>Note: </em></b>
<ul>
<li>Parameters that are marked with an asterisk (*) are mandatory.</li>
<li>To view additional information about a setting, click the help icon (question mark) for the setting.<br>
<img src="Resources/Images/ProjectSettings_Help_thumb_600_0.png">
</li>
</ul>
</blockquote>

<a id="Iris_SCM"></a>

Iris Project Settings
----------------------


<details close markdown="block"><summary>Source Control</summary>

> **_Note:_** Make sure that you configure the mandatory parameters (marked with an asterisk) before you run the [buildIrisApp job](BuildingAnApp.md).

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');width: 70%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 25%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 45%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>SCM Vendor *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the Git&nbsp;vendor that hosts your repository. Select the option that matches your Git server. App Factory supports <b>GitHub</b>, <b>Bitbucket</b>, and <b>AWS CodeCommit</b>. If your Git vendor is not in the list, or if you're using a bare-bones Git server, select <b>Other</b>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Repository URL *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the Git repository URL based on the location of the Iris project. The URL can be an HTTPS URL or an SSH URL. The format for an HTTPS URL is <code class="codefirst" style="font-size: 11pt;">https://git-vendor.com/username/reponame.git</code> The format for SSH&nbsp;URL is<code class="codefirst" style="font-size: 11pt;">git@git-vendor.com:username/reponame.git</code> Typically, a repository URL can be found by clicking a <b>Code</b> or <b>Clone</b> button.<br><blockquote><em><b>Note: </b></em>If you are using <b>Azure DevOps</b> as your Git vendor, the format of the Repository URL must adhere to the following syntax.<ul><li>HTTPS URL syntax:<br><code>https://dev.azure.com/organization-name/project-name/_git/repo-name</code></li><li>SSH URL syntax:<br><code>git@ssh.dev.azure.com:v3/organization-name/project-name/repo-name</code></li></ul></blockquote></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>SCM&nbsp;Credentials *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the SCM credentials that App Factory uses to fetch the Iris project from the repository.<div class="Important" data-mc-autonum="<b><i><span style=&quot;color: #ff6600;&quot; class=&quot;mcFormatColor&quot;>Important: </span></i></b>"><span class="autonumber"><span><b><i><span style="color: #ff6600;" class="mcFormatColor">Important: </span></i></b></span></span>You must provide the Git credentials based on the Git clone URL format. If the Git clone URL has an <b>https</b> protocol type, you need to add the Username and Password for the Git account. For more information, refer to <a href="ManagingCredentials.html#Adding" target="_blank">Adding New Source Code Repository Credentials</a>. If the Git clone URL has the <b>ssh</b> protocol type, you need to add the SSH keys credentials. For more information, refer to <a href="ManagingCredentials.html#Add" target="_blank">Add SSH Key Credentials</a>.</div><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>If your repository is protected with 2FA ](two-factor authentication) in GitHub, you need to add the GitHub credentials to your project. For more information, refer to <a href="Prerequisites.html#GitHub_2FA" target="_blank">GitHub 2FA</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Project Path</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the path from the root that contains the Iris project.<blockquote><em><b>Note: </b></em>To include Micro Apps in the build job, make sure that you provide the path to the Base App.</blockquote> If your project is at the root of the repository, leave the field blank. Otherwise, type the path relative to the root of the repository, for example, <code class="codefirst" style="font-size: 11pt;">path/to/FooApp</code>.<br>The depth of the sub-folder is not limited, but Windows has a limitation of 256 characters for the relative path.</td></tr></tbody></table>

</details>


<details><summary>iOS</summary>
<blockquote><em><b>Note: </b></em>The iOS settings are only available in V9 ServicePack 3 or later.</blockquote>
<table style="width:100%">
<tr>
<th style="width:30%">Parameter</th>
<th>Description</th>
</tr>
<tr>
<td><b>Signing Method *</b></td>
<td>Specifies the method by which App Factory must sign the iOS app binary. Contains the following options:<br><ul><li><b>API Key</b>
If you select API key, you need to add and select the required API Key credentials. For more information, refer to <a href="ManagingCredentials.md">Adding an App Store Connect API Key.</a></li><li><b>Manual Certificates</b>
If you select Manual Certificates, you need to upload the signing certificates in the P12 format. For more information, refer to <a href="ManagingCredentials.md">Adding a new signing certificate.</a></li></ul></td>
</tr>
</table>
</details>

<details><summary>Android</summary>
<blockquote><em><b>Note: </b></em>The Android settings are only available in V9 ServicePack 3 or later.</blockquote>
For more information about these parameters, refer to <a href="https://developer.android.com/training/articles/keystore">Android keystore system</a> and <a href="https://developer.android.com/studio/publish/app-signing">Sign your app</a>.
<blockquote><em><b>Note: </b></em>These parameters are applicable for building the app in the release mode or release-protected mode. If you want to build your app in the debug mode, you can skip these parameters.</blockquote>
<table style="width:100%">
<tr>
<th style="width:30%">Parameter</th>
<th>Description</th>
</tr>
<tr>
<td><b>Keystore File</b></td>
<td>Specifies the keystore file that is used to sign the Android binary. The supported file formats are <code>.keystore</code> and <code>.jks</code>.</td>
<tr>
<td><b>Keystore Password</b></td>
<td>Specifies the password for the file that is selected in the <b>Keystore File</b> parameter.</td>
</tr>
<tr>
<td><b>Key Password</b></td>
<td>Specifies the password to the key that is used to sign-in to the Android library.</td>
</tr>
<tr>
<td><b>Key Alias</b></td>
<td>Specifies the alias of the signing key in the keystore.</td>
</tr>
</table>
</details>







<details close markdown="block"><summary>Internationalization</summary>

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');width: 70%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 25%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 45%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Default Locale</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the ISO 693-1 language code for the default locale of the app. For example: <b>en</b> The specified language is used when the client app is launched.</td></tr></tbody></table>

</details>


<details close markdown="block"><summary>Quality</summary>
<details close markdown="block"><summary>SonarQube</summary>

SonarQube is an open-source platform that provides features to maintain code quality and security.

> **_Note:_** App Factory supports SonarQube only for the Iris code of your project.

As an admin, you can also restrict users from modifying the settings. You can exclude auto-generated files from the code analysis, and also choose to abort the build process if the quality threshold is not achieved.

> **_Important:_** App Factory does not support analysis of Java code for Iris projects. Make sure that you use the **Sources** and **Exclusions** parameters to exclude Java code. Otherwise, the analysis fails.

For more information about the SonarQube settings, refer to the following table.

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');width: 70%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 25%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 45%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Enable SonarQube Analysis</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Enables or disables the SonarQube analysis for your App Factory project.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Scanner Version</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the version of the Sonar Scanner that you want to use for code analysis.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Server URL</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the URL of the SonarQube server that you want to use for code analysis. Make sure that the Server URL is accessible from the App Factory Cloud Environment.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Login Token</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the Sonar token (authentication token) that is used to sign-in to the SonarQube server. For information on how to add Sonar token credentials, refer to <a href="ManagingCredentials.html#Sonar" target="_blank">Adding New Credentials → Sonar Token</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Iris Project Key</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the ID of the Iris project. The ID is passed as the <b>projectKey</b> parameter to the SonarQube server. Make sure that you use the same project key for every run of code analysis. Otherwise, the results for the same app will be shown separately for every project key. HCL recommends that you use the name of your Iris app as the project key.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Base Directory</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the path to the Iris project. If your Iris project is at the root of your repository, leave this field blank. Otherwise, specify the path to the sub-directory that contains the project, for example, <code class="codefirst" style="font-size: 11pt;">path/to/FooApp</code>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Sources</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the directories that contain the source files that must be analyzed. You can use this field to specify additional modules that are not part of the standard Iris project structure. You can specify multiple directories by separated them with commas. For example: <code class="codefirst" style="font-size: 11pt;">controllers, modules, userwidgets</code> Absolute paths and paths that are outside the source code are ignored during the SonarQube run.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Exclusions</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the files that must be excluded from the code analysis. You need to use glob patterns or shell patterns to specify the files. You can specify multiple exclusions by separating them with commas. For example: <code class="codefirst" style="font-size: 11pt;">**/*.java, **/*.json, jssrc/**, actions/**, models/**, **/*ControllerActions.js, node_modules/**</code> HCL recommends that you exclude auto-generated code and third-party libraries from the SonarQube analysis.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Additional Analysis Properties</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies a list of additional parameters (-D parameters) that are sent to the SonarQube server. You can specify multiple parameters by separating them with a blank space. For example: <code class="codefirst" style="font-size: 11pt;">-Dsonar.organization=exploring -Dsonar.c.file.suffixes=- -Dsonar.cpp.file.suffixes=-</code></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Abort if quality gateway is not met</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies whether the build must fail if the SonarQube quality threshold is not met in the code analysis.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Debug mode</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies whether the SonarQube scanner must run in debug mode for the code analysis.</td></tr></tbody></table>

</details>
</details>




<details><summary>Models</summary>
<table style="width:100%">
<tr>
<th style="width:30%">Parameter</th>
<th>Description</th>
</tr>
<tr>
<td><b>Clean and Regenerate</b></td>
<td>Specifies whether App Factory must delete and regenerate the client-side object models. The models are used while invoking Object services, and are located in the <code>/models</code> folder of the project.<br>
This setting is enabled by default.</td>
</tr>
</table>
</details>



<details close markdown="block"><summary id="Notifications_Iris">Notifications</summary>

<table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Recipients</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the list of recipients that receive the email notifications from the Iris build pipeline. You can specify multiple email addresses by separating them with a comma.</td></tr></tbody></table>
</details>

Foundry Project Settings
-----------------------
<details close markdown="block"><summary>Source Control</summary>

> **_Note:_** Make sure that you configure the mandatory parameters (marked with an asterisk) before you run the [buildFoundryApp job](BuildingFoundryApp.md).

<table style="mc-table-style: url]('Resources/TableStyles/Basic.css');width: 70%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 25%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 45%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>SCM Vendor *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the Git&nbsp;vendor that hosts your repository. Select one of the options that match your git server. App Factory supports <b>GitHub</b>, <b>Bitbucket</b>, and <b>AWS CodeCommit</b>. If your Git vendor is not in the list, or if you're using a bare-bones Git server, select <b>Other</b>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Repository URL *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the Git repository URL based on the location of the Foundry project. The URL can be an HTTPS URL or an SSH URL. The format for an HTTPS URL is <code class="codefirst" style="font-size: 11pt;">https://git-vendor.com/username/reponame.git</code> The format for SSH&nbsp;URL is<code class="codefirst" style="font-size: 11pt;">git@git-vendor.com:username/reponame.git</code> Typically, a repository URL can be found by clicking a <b>Code</b> or <b>Clone</b> button.<br><blockquote><em><b>Note: </b></em>If you are using <b>Azure DevOps</b> as your Git vendor, the format of the Repository URL must adhere to the following syntax.<ul><li>HTTPS URL syntax:<br><code>https://dev.azure.com/organization-name/project-name/_git/repo-name</code></li><li>SSH URL syntax:<br><code>git@ssh.dev.azure.com:v3/organization-name/project-name/repo-name</code></li></ul></blockquote></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>SCM&nbsp;Credentials *</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the SCM credentials that App Factory uses to fetch the Foundry project from the repository.<div class="Important" data-mc-autonum="<b><i><span style=&quot;color: #ff6600;&quot; class=&quot;mcFormatColor&quot;>Important: </span></i></b>"><span class="autonumber"><span><b><i><span style="color: #ff6600;" class="mcFormatColor">Important: </span></i></b></span></span>You must provide the Git credentials based on the Git clone URL format. If the Git clone URL has an <b>https</b> protocol type, you need to add the Username and Password for the Git account. For more information, refer to <a href="ManagingCredentials.html#Adding" target="_blank">Adding New Source Code Repository Credentials</a>. If the Git clone URL has the <b>ssh</b> protocol type, you need to add the SSH keys credentials. For more information, refer to <a href="ManagingCredentials.html#Add" target="_blank">Add SSH Key Credentials</a>.</div><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>If your repository is protected with 2FA ](two-factor authentication) in GitHub, you need to add the GitHub credentials to your project. For more information, refer to <a href="Prerequisites.html#GitHub_2FA" target="_blank">GitHub 2FA</a>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Project Path</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the path from the root that contains the Foundry project. If your project is at the root of the repository, leave the field blank. Otherwise, type the path relative to the root of the repository, for example, <code class="codefirst" style="font-size: 11pt;">path/to/FooApp</code>. The depth of the sub-folder is not limited, but Windows has a limitation of 256 characters for the relative path.</td></tr></tbody></table>

</details>
<details close markdown="block"><summary id = "Notifications_Foundry">Notifications</summary>

<table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Recipients</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the list of recipients that receive the email notifications from the Foundry build pipeline. You can specify multiple email addresses by separating them with a comma.</td></tr></tbody></table>

</details>


Microservice Project Settings
-----------------------

<details><summary>Source Control</summary>
<em><b>Note: </em></b>Make sure that you configure the mandatory parameters (marked with an asterisk) before you run the <a href="ConfigureMS_Job.md">ConfigureMS job</a>.

<table style="width:100%">
<tr>
<th style="width:30%">Parameter</th>
<th>Description</th>
</tr>
<tr>
<td><b>SCM Vendor *</b></td>
<td>Specifies the Git vendor that hosts your repository. Select one of the options that match your git server.<br>App Factory supports <b>GitHub, Bitbucket</b>, and <b>AWS CodeCommit</b>.<br>If your Git vendor is not in the list, or if you're using a bare-bones Git server, select <b>Other</b>.</td>
</tr>

<tr>
<td><b>Repository URL *</b></td>
<td>Specifies the Git repository URL based on the location of the Foundry project. The URL can be an HTTPS URL or an SSH URL.<br>The format for an HTTPS URL is<br><code>https://git-vendor.com/username/reponame.git</code><br>The format for SSH URL is<br><code>git@git-vendor.com:username/reponame.git</code><br>Typically, a repository URL can be found by clicking a <b>Code</b> or <b>Clone</b> button.<br><blockquote><em><b>Note: </b></em>If you are using <b>Azure DevOps</b> as your Git vendor, the format of the Repository URL must adhere to the following syntax.<ul><li>HTTPS URL syntax:<br><code>https://dev.azure.com/organization-name/project-name/_git/repo-name</code></li><li>SSH URL syntax:<br><code>git@ssh.dev.azure.com:v3/organization-name/project-name/repo-name</code></li></ul></blockquote></td>
</tr>

<tr>
<td><b>SCM Credentials *</b></td>
<td>Specifies the SCM credentials that App Factory uses to fetch the Microservice config files from the repository.<br><blockquote><em><b>Note: </b></em>You must provide the Git credentials based on the Git clone URL format.<ul><li>If the Git clone URL has an https protocol type, you need to add the Username and Password for the Git account. For more information, refer to <a href="ManagingCredentials.md">Adding New Source Code Repository Credentials.</a></li><li>If the Git clone URL has the ssh protocol type, you need to add the SSH keys credentials. For more information, refer to <a href="ManagingCredentials.md#adding-new-credentials">Add SSH Key Credentials</a>.</li></ul></blockquote><blockquote><em><b>Note: </b></em>If your repository is protected with 2FA (two-factor authentication) in GitHub, you need to add the GitHub credentials to your project. For more information, refer to <a href="Prerequisites.md#git">GitHub 2FA</a>.</blockquote></td>
</tr>

<tr>
<td><b>Project Path</b></td>
<td>Specifies the path from the root that contains the Microservice config files.<br>If your project is at the root of the repository, leave the field blank. Otherwise, type the path relative to the root of the repository, for example, <code>path/to/FooApp</code>.<br>The depth of the sub-folder is not limited, but Windows has a limitation of 256 characters for the relative path.</td>
</tr>
</table>
</details>

<details><summary>Notifications</summary>
<table style="width:100%">
<tr>
<th style="width:30%">Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>Recipients</td>
<td>Specifies the list of recipients that receive the email notifications from the Microservices build pipeline.<br>You can specify multiple email addresses by separating them with a comma.</td>
</tr>
</table>
</details>