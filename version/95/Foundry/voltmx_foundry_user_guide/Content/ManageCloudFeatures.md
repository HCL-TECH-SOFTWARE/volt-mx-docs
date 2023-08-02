                               

Manage Access Features in Cloud Environment
-------------------------------------------

You can manage environment access for all the existing users in a particular account cloud by using the **Manage Access** page from the Environments page.

For example, when you are invited to an account, you are given access to Build Client App feature. So the Foundry users are limited to only build apps in Iris. Later you want to customize the features access to publish apps as well. In this case, you need to enable App Services feature to this user. As a result, Foundry users of this environment can build and publish apps.

> **_Note:_** For more information on the environment permissions, refer to [Feature Level Access Permissions - Foundry Cloud](#RolesPermissions-FoundryCloud)**.**

### Managing Cloud Features

1.  From the left pane in your Volt MX Foundry Console, click **Environments**. This displays the list of environments assigned to specific users in your Volt MX Foundry Cloud account.
2.  Click the **More Options** button of an environment.
    
    > **_Note:_**  The **More Options** button in the **Environments** page is available only if you have the Admin access.
    
    ![](Resources/Images/Clouds_settings.png)
    
3.  Click **Manage Access**. The dialog box displays the following details.
    
    <table style="mc-table-style: url]('Resources/TableStyles/Basic.css');width: 649px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">NAME</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Displays the clouds created for the specific account.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">EMAIL</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Displays the user email of this Cloud user.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">ACCESS</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Displays the feature access details available for this account.<ol style="list-style-type: lower-roman;">Under the <b>ACCESS</b> permissions column, click the required tab, for example, <b>No Access</b>, <b>Full Access</b>, and <b>Custom Access</b>.</ol><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>For more information on the feature level access permissions, refer to <a href="Settings_Cloud.html#RolesPermissions-FoundryCloud">Feature Level Access Permissions - Foundry Cloud</a><b>.</b><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The <b>Custom Access</b> permission is supported only for <span class="MyVariablesVoltMX">VoltMX</span>&nbsp;Foundry clouds.<ol style="list-style-type: lower-roman;" data-mc-continue="true">Select the required permissions for the <span class="MyVariablesVoltMX">VoltMX</span> Foundry Clouds:</ol>No Access<span style="font-weight: normal;">All features of this cloud are disabled for the selected user.</span><img src="Resources/Images/FoundryCloudNoAccess_475x49.png" style="border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;width: 475;height: 49;">Full AccessAccess to all features of this cloud are enabled for the selected user. Each of these features is enabled with a tick mark.<img src="Resources/Images/FoundryCloudFullAccess_474x51.png" style="border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;width: 474;height: 51;">Custom Access - <span style="font-weight: normal;">Supports from <span class="MyVariablesVoltMX">VoltMX</span> Foundry V9 onwards only for <span class="MyVariablesVoltMX">VoltMX</span> Foundry Clouds.</span><span style="font-weight: normal;">You can select all the features or specific ones of a cloud by using the <b>Custom Access</b> permission.</span></td></tr></tbody></table>
    
4.  Click **SAVE** to save the changes in the Cloud environment.
