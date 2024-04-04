  

Managing Credentials
====================

The following sections explain the different types of credentials that can be added to App Factory. You can add new credentials, edit existing credentials, and also delete existing credentials.

Adding New Credentials
----------------------

Adding New VoltMX Cloud Credentials

A Iris project connects to VoltMX Foundry to create and publish back-end services. To use VoltMX Foundry, you need to add the VoltMX Cloud credentials to your project.

To add VoltMX Cloud credentials to your project, follow these steps.

1.  From the **VoltMX Iris & Foundry** section in the **buildIrisApp** job, next to the **FOUNDRY\_CREDENTIALS\_ID** parameter, click **ADD**. A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.  
    
    ![](Resources/Images/Config_CloudCredentialsID.png)
    
    As HCL typically provides only one set of these credentials per customer, HCL recommends that you store this credential type in the **Jenkins** scope to share it across projects and to avoid creating unnecessary duplicates.  
    ![](Resources/Images/Foundry_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Username and Password**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/kind.PNG)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Add_Credentials.PNG)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">For Cloud credentials, select <b>Global</b>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Username</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Username of your VoltMX Cloud instance.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Password</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Password of your VoltMX Cloud instance.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  On the **buildIrisApp** job, from the FOUNDRY\_CREDENTIALS\_ID list, select the credentials that you added.

![](Resources/Images/Config_CredSelection.png)  


<a id="Adding_Foundry"></a>

Adding new VoltMX Foundry App Config

A VoltMX Foundry App configuration connects to the specified back-end services while building a Iris app. In the FOUNDRY\_APP\_CONFIG parameter, you can specify the details of your app such as the host URL, app name, environment, and app version. The details are used to fetch the app services document, binding the app to an environment, and publish the app to the environment.

To add a Foundry app configuration, follow these steps:

1.  From the **VoltMX Iris & Foundry** section in the **buildIrisApp** job, next to the **FOUNDRY\_APP\_CONFIG** parameter, click **ADD**. A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.  
    
    ![](Resources/Images/FoundryAppConfig_AddCredentials.png)
    
    As HCL typically provides only one set of these credentials per customer, HCL recommends that you store this credential type in the **Jenkins** scope to share it across projects and to avoid creating unnecessary duplicates.  
    ![](Resources/Images/Foundry_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Foundry App Configuration**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
    ![](Resources/Images/FoundryAppConfig_Params.png)
    
4.  Configure the parameters that appear on the **Add Credentials** window. For more information about the parameters, refer to the following table.
    
    <table style="mc-table-style: url('Resources/TableStyles/Basic.css');width: 80%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 20%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Environment Name</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the VoltMX Foundry name to which you want to publish the Foundry app.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Application Name</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the name of the Foundry app that you want to bind to the project.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Application Version</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the version of the Foundry app that you want to bind to the project.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Foundry Host Environment</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the location of the Foundry server on which the cloud environment is hosted.</p><p>Contains the following options:</p><ul><li><b>manage.voltmx.com</b>/<b>manage.hcl.com</b><br>This check box specifies that the Foundry environment is hosted on the HCL AWS Cloud.<br>When you select this check box, the <b>Account ID</b>&nbsp;parameter appears.</li><li><b>On-Premise/Cloud</b><br>This check box specifies that the Foundry environment is hosted on-premises or on other clouds (such as Azure).<br>When you select this check box, the <b>Console URL</b> and <b>Identity URL</b> parameters appear.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Account ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the account ID of the cloud on which the Foundry environment is hosted.</p><p>The default account ID&nbsp;for this field is for the cloud that is linked to your App Factory environment. If you want link the project to a different cloud, type the account ID in the text box.</p><p>This parameter is applicable only if <b>manage.voltmx.com</b>/<b>manage.hcl.com</b> is selected as the <b>Foundry Host Environment</b>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Console URL</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the IP address (or the DNS) and port of the Foundry Console server. For example: <code class="codefirst">http://1.2.10.20:8080</code></p><p>This parameter is applicable only if <b>On-Premise/Cloud</b> is selected as the <b>Foundry Host Environment</b>.</p><div class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><p>The Foundry Console server must be accessible from the App Factory build environment.</p><ul><li>If the Foundry Console is behind a firewall, make sure that the IP address is white-listed.</li><li>If the Foundry Console is on a local on-premise setup, make sure that you enable public IP.</li></ul></div></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Identity URL</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the IP address (or the DNS) and port of the Foundry identity server. For example: <code class="codefirst">http://1.3.10.30:8080</code></p><p>This parameter is applicable only if <b>On-Premise/Cloud</b> is selected as the <b>Foundry Host Environment</b>.</p><div class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><p>The Foundry identity server must be accessible within the App Factory build environment.</p><ul><li>If the Foundry identity server is behind a firewall, make sure that the IP address is white-listed.</li><li>If the Foundry identity server is on a local on-premise setup, make sure that you enable public IP.</li></ul></div></td></tr></tbody></table>
    
5.  Validate the details that you entered for the parameters, and then click **ADD**.
6.  On the **buildIrisApp** job, from the FOUNDRY\_APP\_CONFIG list, select the credentials that you added.

Adding a Sonar Token

A Sonar token is used to sign-in to your SonarQube cloud. To add a Sonar token as credentials, follow these steps:

1.  From the **SonarQube** section in the **Iris Project Settings**, next to the **Login Token** setting, click **ADD**. A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As development teams typically use the same SonarQube server, HCL recommends that you store this credential type in the **Jenkins** scope to share it across projects and to avoid creating unnecessary duplicates.  
    ![](Resources/Images/projectSettings_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Sonar Token**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
4.  Configure the parameters that appear on the **Add Credentials** window. For more information about the parameters, refer to the following table.
    
    <table style="mc-table-style: url('Resources/TableStyles/Basic.css');width: 80%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 20%;"><col class="TableStyle-Basic-Column-Column1" style="width: 60%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Sonar Token</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the authentication token that is used to login to the SonarQube server.</p></td></tr></tbody></table>
    
5.  After you configure all the parameters, click **Add**.
6.  In the **Project Settings**, from the **Login Token** list, select the credentials that you added.

Adding New Source Control Repository Credentials

App Factory signs-in to your repository to check-out and build the Iris project. To build a Iris app, you need to add the source code repository credentials to your project.

If your repository is protected with 2FA ](two-factor authentication) in GitHub, you need to add the GitHub credentials to your project. For more information, refer to [GitHub 2FA](Prerequisites.md#GitHub_2FA).

To add source code repository credentials, follow these steps.

1.  In the **Source Control** section of the **Iris Project Settings** or **Foundry Project Settings**, next to the **SCM Credentials** setting, click **ADD**. A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically use the different GitHub accounts for different projects, HCL recommends that you store this credential type at the project level scope to keep it local to the project.  
    ![](Resources/Images/projectSettings_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Username and Password**.![](Resources/Images/kind.PNG)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Source_code_2.png)  
    
    <table style="width: 80%;mc-table-style: url]('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Username</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the user name of your SCM credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">If your repository is protected with 2FA (two-factor authentication) on GitHub, then the <b>Username</b> is your <b>GitHub user name</b>. For more information, refer to <a href="Prerequisites.html#GitHub_2FA" target="_blank">GitHub 2FA</a>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Password</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the password of your SCM credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">If your repository is protected with 2FA ](two-factor authentication) on GitHub, then the <b>Password</b> is the <b>GitHub personal access token</b>. For more information, refer to <a href="Prerequisites.html#GitHub_2FA" target="_blank">GitHub 2FA</a>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **Source Control** section in the Project Settings, from the SCM Credentials list, select the credentials that you added.  
    ![](Resources/Images/Source_code_3.png)

Add SSH Key Credentials

If the source code URL for your project is an SSH URL, you need to add the SSH key credentials that act as the source code repository credentials for the project.

You need to generate and add the SSH key to your GitHub account before you add the key in App Factory. For more information, refer to [Generating a New SSH key](https://help.github.com/en/enterprise/2.17/user/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [Adding the New SSH key to your GitHub Account](https://help.github.com/en/enterprise/2.17/user/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

To add new SSH key credentials to your project, follow these steps.

1.  In the **Source Control** section of the **Iris Project Settings** or **Foundry Project Settings**, next to the **SCM Credentials** setting, click **ADD**. A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically use the different GitHub accounts for different projects, HCL recommends that you store this credential type at the project level scope to avoid potential security concerns.  
    ![](Resources/Images/projectSettings_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **SSH Username with private key**.  
    ![](Resources/Images/kind_ssh.PNG)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/SSH-Add.PNG)  
    
    <table style="width: 80%;mc-table-style: url]('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Username</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the user name that is used to identify the SSH key. This parameter is optional.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">If your repository is protected with 2FA (two-factor authentication) on GitHub, then the <b>Username</b> is your <b>GitHub user name</b>. For more information, refer to <a href="Prerequisites.html#GitHub_2FA" target="_blank">GitHub 2FA</a>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Private Key</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Private Key that is related to the Public Key that is linked to GitHub.</p><p>To configure a Private Key, select <b>Enter Directly</b>, and then click <b>Add</b>.</p><p>Select the <b>Enter Directly</b> option and click <b>Add</b> to provide the Private key of the related Public Key which is linked in GitHub.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Passphrase</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the passphrase that is configured while generating the SSH key.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  From the **Source Control** section in the Project Settings, from the **SCM Credentials** list, select the credentials that you added.  
    ![](Resources/Images/Source_code_3.png)

Adding New Database Credentials

App Factory signs-in to your database to run scripts and commands. To run SQL or Flyway scripts on your database, you need to add the database credentials to your project.

To add the database credentials, follow these steps.

1.  While configuring parameters for the **Flyway** job, next to the **DB\_CREDENTIALS** parameter, click **ADD**.  
    A drop-down list appears.
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically have unique database credentials, HCL recommends that you store this credential type at the project level scope to avoid potential security concerns.  
    ![](Resources/Images/Flyway_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Username and Password**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/kind.PNG)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>DB_URL</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the URL at which the database is hosted. The URL must be in the JDBC format.</p><p>For example:<br><code class="codefirst" style="font-size: 11pt;">jdbc:mysql://host1:3060</code><br><code class="codefirst" style="font-size: 11pt;">jdbc:mysql://host1:3060/sampledb</code></p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>DB_USERNAME</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the username that is used to access your database.</p><p>Make sure that the user has permissions to write and update schemas.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>DB_PASSWORD</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the password that is used to access your database.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.

To validate the credentials, click **TEST CONNECTION**.

7.  In the Flyway job, from the **DB\_CREDENTIALS** list, select the credentials that you added.

Adding New Apple ID credentials

From January 2021, Apple has started to enforce 2FA to authenticate with username and password, which makes it impractical to use for automation. Therefore, App Factory has deprecated support for signing iOS binaries with the Apple Account signing method. You must upgrade your App Factory project and either use the [API Key](#Adding_Apple_API_Key) or the [Upload Certificate](#Adding_Signing_Certificate) signing method.

App Factory uses credentials of the Apple Developer account to generate signing certificates for iOS apps. If you want to generate certificates by using your Apple Developer account, you need to add the Apple ID credentials to your project.

To add Apple ID credentials to your project, follow these steps.

1.  While configuring parameters for the **buildIrisApp** job, next to the **APPLE\_ID** parameter, click **ADD**.  
    A drop-down list appears.  
    ![](Resources/Images/Apple_ID_1.png)
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically have unique Apple ID credentials, HCL recommends that you store this credential type at the project level scope to avoid potential security concerns.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Username and Password**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/kind.PNG)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Add_Credentials.PNG)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Username</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the user name of your Apple Developer account.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Password</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the password of your Apple Developer account.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **buildIrisApp** job, from the APPLE\_ID list, select the credentials that you added.  
    ![](Resources/Images/Apple_ID_3.png)

<a name="Adding_Apple_API_Key"></a>Adding an App Store Connect API Key

App Factory uses the App Store Connect API Key of the Apple Developer account to generate signing certificates for iOS apps. If you want to generate certificates by using your Apple Developer account, you need to add the API Key to your project.

For more information about the App Store Connect API, refer to [Creating API Keys for App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api) and [Generating Tokens for API Requests](https://developer.apple.com/documentation/appstoreconnectapi/generating_tokens_for_api_requests).

To add the Apple API Key to your project, follow these steps.

1.  While configuring the **Project Settings**, in the iOS section, next to the **API Key** parameter, click **ADD**.  
    A drop-down list appears.  
    ![](Resources/Images/Apple_API_Key.png)
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically use unique API Keys, HCL recommends that you store this credential type at the project level scope to avoid potential security concerns.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Apple App Store Connect API**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Apple_API_Key_2.png)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Issuer ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Issuer ID that you receive from <a href="https://appstoreconnect.apple.com/" target="_blank">App Store Connect</a>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Key ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Key ID that you receive after creating an API Key on <a href="https://appstoreconnect.apple.com/" target="_blank">App Store Connect</a>.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">API&nbsp;Key File</td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the API key file that you downloaded from <a href="https://appstoreconnect.apple.com/" target="_blank">App Store Connect</a>.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.

6.  In the **iOS** section of the **Iris Project Settings**, from the API Key list, select the credentials that you added. 

    ![Apple_API_Key_Cred.png](Resources/Images/Apple_API_Key_Cred.png)


Adding a new signing certificate

App Factory uses certificates to sign the iOS binaries (`.ipa`). If you want to upload the signing certificates manually, you need to add the certificates to your project.

Make sure that you convert the signing certificates to the P12 format before uploading them to App Factory.

To add signing certificates to your project, follow these steps.

1.  While configuring parameters for the **buildIrisApp** job, next to the **APPLE\_SIGNING\_CERTIFICATES** parameter, click **ADD**. A drop-down list appears.  
    ![](Resources/Images/Apple_Signing_Cert.png)
2.  From the drop-down list, select the scope at which you want to add the new credentials.
    
    As developers typically have unique signing certificates, HCL recommends that you store this credential type at the project level scope to avoid potential security concerns.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Apple Signing Certificates**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/Apple_Signing_Cert_kind.png)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Apple_Signing_Certs_data.png)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Provision Certificate</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the certificate that is used to sign the iOS binaries (<code class="file_names" style="font-size: 11pt;">.ipa</code>).</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Password</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the password for the Provision Certificate that you uploaded.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Mobile Provisioning Profile</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the provisioning profiles that are used to install the app on specific devices.</p><p>You can select and upload a <b>Single Profile</b> or <b>Multiple Profiles</b>.</p><ul><li><b>Single Profile</b><br>You need to upload a mobile provision file</li><li><b>Multiple Profiles</b><br>You need to upload a zip archive that contains multiple mobile provision files</li></ul><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">Wild card provisioning profiles are not supported.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **buildIrisApp** job, from the APPLE\_SIGNING\_CERTIFICATES list, select the credentials that you added.  
    ![](Resources/Images/Apple_Signing_Cert_Added.png)

Make sure that the signing certificates and provisioning profiles have not expired. Otherwise, the build fails and an error occurs.

Adding New Android\_KeyStore Credentials

The keystore file stores the key that is used to sign the Android binary. To build a Visualize app for Android, you need to add an Android\_Keystore file and an Android\_KeyStore password to your project.

Make sure that you add Android\_Keystore password credentials for every Android\_Keystore file.

#### Creating a New Android\_KeyStore File

1.  While configuring the build parameters for the **buildIrisApp** job, next to ANDROID\_KEYSTORE\_FILE, click **ADD**. A drop-down list appears.  
    ![](Resources/Images/Android_KeyStore_1.png)
2.  From the drop-down list, select the scope at which you want to add the credentials.
    
    If you use the same keystore for multiple apps, you can add the keystore file at the **Jenkins** scope to use it across different projects. If you use different keystores for different apps, you can add the keystore file at the project level scope.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Secret File**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/Android_KeyStore_2.png)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Android_KeyStore_3.png)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>File</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the Keystore file that is used to sign the Android binaries.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **buildIrisApp** job, from the ANDROID\_KEYSTORE\_FILE list, select the credentials that you added.

#### Creating a New Android\_KeyStore Password

1.  While configuring the build parameters for the **buildIrisApp** job, next to ANDROID\_KEYSTORE\_PASSWORD, click **ADD**. A drop-down list appears.  
    ![](Resources/Images/Android_KeyStore_Password1.png)
2.  From the drop-down list, select the scope at which you want to add the credentials.
    
    If you use the same keystore for multiple apps, you can add the keystore file at the **Jenkins** scope to use it across different projects. If you use different keystores for different apps, you can add the keystore file at the project level scope.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Secret Text**.
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
      
    ![](Resources/Images/Android_KeyStore_Password2.png)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/ANDROID_KEYSTORE_PASSWORD3.png)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Secret</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies password for the Keystore file that you uploaded.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **buildIrisApp** job, from the ANDROID\_KEYSTORE\_PASSWORD list, select the credentials that you added.

<a id="Encryption_Keys"></a>
Adding Keys for Protected Mode Build

App Factory provides an option to build protected binaries for both Android and iOS platform by using VoltMX Iris. To build an app in protected mode, you need to add keys to your project.

To add protected mode keys to your project, follow these steps.

1.  While configuring the build parameters for the **buildIrisApp** job, from the **Protected Build** section, next to PROTECTED\_KEYS, click **ADD**. A drop-down list appears.  
    ![](Resources/Images/Protected_Build.png)
2.  From the drop-down list, select the scope at which you want to add the credentials.
    
    As teams typically use one set of protected mode keys across multiple apps, HCL recommends that you store this credential type in the **Jenkins** scope to share it across projects and to avoid creating unnecessary duplicates.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
3.  In the **Add Credentials** window, from the **Kind** list, select **Protected Mode Build Keys**.  
    
    The **Domain** field displays **Global Credentials (Unrestricted)**.
    
      
    ![](Resources/Images/Protected_Build_Drop-down.png)
4.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    ![](Resources/Images/Protected_Mode_Buid_Keys.png)  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, slave connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Public Key</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the public key that is used for encryption and to protect the app.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Private Key</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the private key that is used for encryption and to protect the app.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Fin Keys</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the fin keys that you want to use for the app.</p><p>Fin Keys must be uploaded in a zip archive. The key files must be at the root of the zip archive, which must not have any sub-folder within the zip.</p><p><img src="Resources/Images/protected_keys.png" style="border-left-style: solid;border-left-width: 1px;border-left-color: #dcdcdc;border-right-style: solid;border-right-width: 1px;border-right-color: #dcdcdc;border-top-style: solid;border-top-width: 1px;border-top-color: #dcdcdc;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;width: 575px;height: 206px;"></p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>">For versions V8 ServicePack 3 or later. uploading Fin Keys is optional.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the details about the credentials. This is an optional field.</p><p>HCL recommends that you provide a unique description so that you can easily distinguish the credentials while triggering a build.</p></td></tr></tbody></table>
    
5.  After you configure the parameters, click **Add**.
6.  In the **buildIrisApp** job, from the PROTECTED\_KEYS list, select the credentials that you added.  
    ![](Resources/Images/Selected_Keys.png)


<a id="Secure_JS"></a>  

Adding Secure JS properties

App Factory provides an option to protect web applications as part of the automated build by obfuscating their Javascript logic. To build a web app in protected mode, follow these steps.

1.  In the **VoltMX Iris & Foundry** section of the **buildIrisApp** job, from the **BUILD\_MODE** list, select **release-protected**.  
    ![](Resources/Images/obfuscation_credentials_releaseProtect.png)
2.  From the **Web Protection** section in the **buildIrisApp** job, next to the **OBFUSCATION\_PROPERTIES** parameter, click **ADD**. A drop-down list appears.
3.  From the drop-down list, select the scope at which you want to add the new credentials.  
    
    ![](Resources/Images/obfuscation_addCredentials.png)
    
    As HCL typically provides only one set of these credentials per customer, HCL recommends that you store this credential type in the **Jenkins** scope to share it across projects and to avoid creating unnecessary duplicates.  
    ![](Resources/Images/Iris_credentials_Jenkins.png)
    
4.  In the **Add Credentials** window, from the **Kind** list, select **Secure JS Properties**.  
    
    In the Domain field, make sure that the **Global Credentials (Unrestricted)** domain is selected.
    
    ![](Resources/Images/obfuscation_credentialFields.png)
    
5.  Configure the parameters that appear on the Add Credentials window. For more information about the parameters, refer to the following table.  
    
    <table style="width: 80%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 30%;"><col class="TableStyle-Basic-Column-Column1" style="width: 50%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Scope</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the level at which the credentials are used. Contains the following options:</p><ul><li><b>System</b>: The credentials are available to the associated object. Credentials with a System scope are used for email, authentication, agent connection, and scenarios in which the Jenkins instance uses the credentials.</li><li><b>Global</b>: The credentials are available to the associated object and also to the child objects. The credentials with a global scope are typically used for the additional requirements of a job.</li></ul></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>ID</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the unique identifier that jobs and other configurations use to identify the credentials.</p><p class="Note" madcap:autonum="<b><i><span style=&quot;color: #0a9c4a;&quot; class=&quot;mcFormatColor&quot;>Note: </span></i></b>"><br>HCL strongly recommends that you specify an ID that you can easily recognize.<br>If this field is left blank, an ID is automatically generated, which you may not be able to recognize later.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Description</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>An optional free text field.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Consumer Key</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the consumer identifier that is used to invoke protection API calls (on your behalf) to obfuscate your web app.</p><p>This is the value of the <code class="file_names" style="font-weight: bold; font-size: 11pt;">ci</code> property in the <code class="file_names" style="font-size: 11pt;">securejs.properties</code> file that you must request from the Support team.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><p>Consumer Secret</p></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><p>Specifies the consumer secret that is used to invoke protection API calls (on your behalf) to obfuscate your web app.</p><p>This is the value of the <code class="file_names" style="font-weight: bold; font-size: 11pt;">cs</code> property in the <code class="file_names" style="font-size: 11pt;">securejs.properties</code> file that you must request from the Support team.</p></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>Encryption Key</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p>Specifies the base64-encoded symmetric encryption key, which is itself encrypted with your RSA public key.</p><p>This is the value of the <code class="file_names" style="font-size: 11pt; font-weight: bold;">id</code> property in the <code class="file_names" style="font-size: 11pt;">securejs.properties</code> file that you must request from the Support team.</p></td></tr></tbody></table>
    
6.  After you configure the parameters, click **Add**. In the **buildIrisApp** job, from the OBFUSCATION\_PROPERTIES list, select the credentials that you added.  
    ![](Resources/Images/obfuscation_credentials_myCreds.png)

Deleting Credentials
--------------------

1.  On the left pane of the **App Factory Console**, click **Credentials** . A list of credentials appears.  
    ![](Resources/Images/Delete_1.png)
2.  Select the credentials that you want to delete. The details page of the credentials appears.
    
    ![](Resources/Images/Credentails_List.png)  
    
3.  On the left pane, click **Delete**. A confirmation message is displayed.
    
    ![](Resources/Images/Delete_Button.png)
    
4.  On the confirmation message, click **Yes**.
    
    ![](Resources/Images/Delete_Confr.png)
    

The following credentials are system driven credentials. Do not delete these credentials.

*   jenkins\_github\_ssh-certificates
*   jenkins\_github\_ssh-voltmx-common
*   jenkins\_github\_ssh-voltmx-jenkins-job-DSL

![](Resources/Images/ssh.PNG)