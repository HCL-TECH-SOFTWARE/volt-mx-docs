# Frequently Asked Questions

<details> <summary id="close">How can I check my App Factory product version?</summary>

To check the App Factory version, sign-in to your App Factory console, and then select <b>App Factory Version</b> from the left panel. The App Factory Version page opens, which displays the details such as the App Factory version and plugin versions.<br>

Alternatively, you can open this page by clicking the <b>VoltMx App Factory</b> link from the footer at the lower-right corner of the page.
</details>


<details> <summary id="close">Does upgrading my App Factory environment to the latest product version have any direct dependency with the Iris and Foundry versions that I am using today?</summary>

There is no direct dependency with the Iris and Foundry versions. If you upgrade your App Factory environment to the latest version, it will continue supporting and building with the Iris project version of the app, and will work with the Foundry details that were provided earlier.

</details>


<details> <summary id="close">Can I ask the App Factory support team to install my versions of tools, software, and Jenkins plugins?</summary>  

App Factory versions are tested on specific released versions of tools and plugins, so you cannot choose to upgrade any part of the configuration due to compatibility issues and security issues.<br>

However, if you notice any errors that are specific to a version of the tools that are being used in your App Factory instance, you can raise a request for assistance on the issue. You can also upgrade the tool version, if required, to resolve the issue.

</details>


<details> <summary id="close">What is the Xcode version that is being used in App Factory for iOS builds?</summary>

The following table lists the App Factory releases with the supported Xcode version, and the same versions are provisioned during installation or upgrade.

<table>
<tr>
<th>App Factory Release</th>
<th>Xcode Version Support</th>
</tr>
<tr>
<td>V8 ServicePack 4</td>
<td>Xcode 10</td>
</tr>
<tr>
<td>V9</td>
<td>Xcode 11</td>
</tr>
<tr>
<td>V8 ServicePack 2</td>
<td>Xcode 12</td>
</tr>
<tr>
<td>202401</td>
<td>Xcode 15</td>
</tr>
</table>
</details>

<details> <summary id="close">What kind of source control management tool is supported by App Factory?</summary>

App Factory supports most of the GIT based source code management tools such as GitHub, Bitbucket, and AWS Code Commit.

</details>



<details> <summary id="close">What kind of build trigger can I set with App Factory? </summary>

You can create two types of triggers by using App Factory.<br>
<ul>
<li>A cron-based trigger, which is called a Scheduler, to trigger timely builds for a project.</li>
<li>A push-based trigger, which is called a Watcher, to trigger builds whenever a commit is pushed to a respective branch.</li>
</ul>
</details>

<details> <summary id="close">How can I cross-check the Iris version that I used in my local development, and is it the same as my App Factory build? </summary>

You can check the details that are printed in the build console log at the build job for every channel.

For example: <code>[INFO] Current Project version: 9.2.0</code>

</details>

<details> <summary id="close">What is the reason for my App Factory build using a different Iris version compared to what I have used in my local development? Did I miss something? </summary>

This issue might occur if the application project is upgraded, but not pushed properly to the Git repository.<br>

After a project is upgraded or imported to a specific Iris version, build the app from Iris. If the build passes, you need to commit the <b>diff</b> of the workspace content code to your Git repository to trigger the build with App Factory.
</details>

<details> <summary id="close">Where do my Android builds occur on the App Factory build pool? </summary>

Android builds occur on a macOS agent that is hosted on a Cloud infrastructure.
</details>


<details> <summary id="close">My build failed for some reason, how do I inspect the exact issue? </summary>

To debug a build failure, you can check the logs of a build in a project by navigating through the respective service:
<code>&lt;project_name&gt; → &lt;service_name&gt; → Builds → &lt;build_job&gt; → &lt;build_number&gt;</code> → <b>Console Log</b>.<br>

For example: <code>TestProject → Iris → Builds → buildIrisApp → #19</code> → <b>Console Log</b>.<br>

You can also click <b>Full Log</b> on the Console Output page to see the whole log. You can search for ERROR statements to easily inspect the build.
</details>





<details> <summary id="close">In my Iris build failed scenario, what are the first key steps that I should validate before contacting the App Factory Support team? </summary>

1.  Go to the build job by navigating by navigating through the respective service:
<code>&lt;project_name&gt; → &lt;service_name&gt; → Builds → &lt;build_job&gt;</code>
    For example: <code>TestProject → Iris → Builds → buildIrisApp</code><br><br>  

2.  Click the build number of the failed build, and then click <b>Console Output</b> from the left panel.<br>

3.  Check the console log for any error that directly or indirectly falls under the configuration issue.<br>
This includes validating parameters that were entered for a build and any service misconfiguration that is directly indicated.<br>

4.  In the section that contains the failed build number, you can view the logs from the Logs link in the description.<br>
    <em><b>Note:</em></b> This link will be available in the build description of the parent build that triggered a particular child build. Therefore, VoltMx recommends always rebuilding the parent build.<br>

5.  At least one local build must be performed on Iris by using the same source of the application for which the App Factory build failed. Make sure that you cross-verify the commit IDs on the repository and the local source.<br>

6.  In case the Iris build passes, you can share the Iris logs and app binary for debugging while raising an App Factory support ticket.
</details>


<details> <summary id="close">What is MustHaves logs and how do I get it? </summary>

MustHaves is a zip archive file that contains a set of log files, which are useful for debugging or analyzing build failures. These files are collected during the build process, and if the build was not completely successful, the files are shared as a downloadable link in the build history section with the label <b>Logs</b>.<br>

It generally contains the following set of files: <code>App FactoryVersionInfo.txt, environmentInfo.txt, ParamInputs.txt, irisbuildlog.log</code>. It also contains information about the respective channel and the test-related build logs.<br>

The download links are provided if the build fails after being triggered from the buildIrisApp or buildFoundryApp page.
</details>


<details> <summary id="close">My Cloud account password resets every 90 days as a security policy, how can I reflect my new password in the App Factory build parameter credentials? </summary>

As per password reset policy, if you update your cloud login credentials, you need to update the same App Factory credentials that were created for the parameter <code>Foundry_CREDENTIALS_ID</code>.<br>

To update the credentials, navigate to the App Factory project and click the <b>Credential</b> link on the left panel. You can search and select the credentials from the list, click <b>Update</b> from the left panel, provide the new password, and then save the credentials. The builds that use this credential will use the updated password.
</details>



<details> <summary id="close">I carry out some manual Xcode steps during the ipa build process in my local development Mac box, will App Factory do this automatically? What should I do to get similar steps carried out in App Factory builds? </summary>

The iOS platform build takes care of standard Xcode build settings by default. If you want to execute custom steps or out of the box steps, you can do so by writing and uploading a custom hook script.<br>

<em><b>Note:</em></b> The hook script (automation code) must be written on your own and validated on a local Mac device before hooking it into the App Factory build pipelines.

</details>


<details> <summary id="close">When I triggered a build, I did not receive an email. What can cause this issue? </summary>

Make sure you have added the recipients address correctly in App Factory. For projects that use version V9SP2 or later, you can verify the recipients address in the <b>Project Settings</b>. For projects that use versions earlier than V9SP2, you must add the recipients address in the <b>RECEPIENTS_LIST</b> parameter of the respective job.<br><br>

App Factory only sends failure notifications from the channel level jobs to give you direct logs of the failed job for debugging. Therefore, make sure that if your build was successful, you triggered it from the main build job, such as <code>buildIrisApp</code>. You can also check your spam for an email from noreply@voltmx.com.<br><br>

If you are sure that there is an issue with the mail delivery system of your App Factory instance, you can raise a support ticket to the CloudL2 Operations team.
</details>



<details> <summary id="close">Why am I not able to download binaries from the artifacts list that is generated and shared in the App Factory build email? </summary>

The artifacts link that is shared through the build email is active for a limited period of time. If you are trying to download the build artifacts from a long time ago (such as one year ago), you are likely to see errors.
</details>



<details> <summary id="close">Does App Factory handle database migration for an app? </summary>

You can use the <b>Database</b> service to perform database migrations with the Flyway tool support provided by App Factory. To do so, navigate to your App Factory Project → <b>Database</b> → <b>Flyway</b>, and then select <b>Build with Parameters</b> to trigger a fresh build.
</details>



<details> <summary id="close">Which flavor (edition) of Flyway is supported by App Factory? </summary>

App Factory supports the community edition for Flyway. For more information about the free community version of the tool, visit the <a href="https://www.red-gate.com/products/flyway/editions">Flyway website</a>.
</details>


<details> <summary id="close">Which Databases are supported by App Factory for Flyway? </summary>

App Factory currently supports MySQL Databases for Flyway.
</details>



## Build on Push (Triggers) related FAQs

<details> <summary id="close">What should I do if I don’t see the settings for my GitHub or Bitbucket Repository? </summary>

To create a webhook, you need to have access to the <b>Settings</b> option of repository. If you don’t see the settings, you need to get admin permissions for the repository.
</details>

