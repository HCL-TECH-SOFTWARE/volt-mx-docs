---
layout: "documentation"
category: "voltmxfoundry_on_azure"
---
                            


Overview
========

Volt MX  Foundry has multiple components, such as Identity, Integration, and Engagement Services. These features can be accessed through a common, centralized Volt MX Foundry Console. This document helps you install and configure Volt MX Foundry (Console, Identity Services, Integration Services, and Engagement Services) on Azure Cloud. For more information about Volt MX Foundry, refer to [VoltMX Foundry User Guide]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Introduction.html).

Volt MX  Foundry Containers on Azure Solution is designed to facilitate Volt MX Foundry on Azure for Non-Production and Production needs. This setup occurs with minimal manual intervention and leverages the following technologies:

*   **Docker** - To package different components as portable container images (with all the required binaries and libs)
*   **Kubernetes** - To orchestrate and maintain all these running containers. It will also have features like auto-scaling, secrets, deployment upgrades and rollbacks.
*   **Azure** - For provisioning of the underlying infrastructure.

From Foundry V9 SP1 onwards, the installation involves a separate dedicated cluster for Integration, which will be referred to as the **INT** cluster. Whereas, the rest of the Foundry components will be present in a single cluster which will be referred to as the **SHARED** cluster.

There are two installation modes, Production and Non-Production. The Production mode is equipped to handle Production level traffic and Non-Production mode is for testing purposes.

During the installation you would be prompted to choose between the installation of a Production instance or a Non-Production instance. In general, for a given Azure subscription an organization installs one Production instance and multiple Non-Production instances (for example, dev, qa, uat, etc.).

*   When you select a Non-Production instance, every time you run it to setup another environment such as qa, uat, etc., only the Integration (INT) cluster gets created again, while the rest of the Foundry components are shared for all the Non-Production instances within the subscription.
*   When you select a Production instance, each installation is treated as a fresh installation where both the Shared cluster and the Integration cluster will be created again.

> **_Note:_** In case of a Non-Production setup the information about the shared resources which are required for installing the new environments is stored as [installation metadata](Frequently_Asked_Questions__FAQs_.html#installation-metadata) in Azure Cosmos DB and Azure Key Vault.

 Salient Features

The Volt MX Foundry Containers on Azure Solution has the following features:

*   Creates a multi-layer architecture along with the Application Gateway in a Virtual Network making it secure.
*   Supports options to configure a custom DNS name, SSL cert support for secure communication, and includes Jumpbox for DevOps activities.

Overview for the Production and Non-Production Installations
------------------------------------------------------------

### Non-Production Mode

In a given Azure subscription, when you try to install a Non-Production instance, a complete Volt MX Foundry is created with both the clusters (Shared and Integration) for the first Non-Production installation. Subsequently, every time you run it to setup another non-production instance such as dev, qa, uat, etc., only the Integration (INT) cluster gets created again, while the rest of the Foundry components are shared for all the Non-Production instances within the same subscription. This integration instance is registered with the existing Foundry console created as part of the first installation.

### Production Mode

When you setup an Production account each installation is treated as a fresh installation where both the Shared cluster and the Integration cluster will be created for every install.

Prerequisites
-------------

1.  **Azure Account** - The setup script creates all the resources in this account. In your Azure subscription, your account should have the following permissions.
    
    
    <details close markdown="block"><summary>Azure Subscription Permissions</summary>
    
    *   Your account must have the role of an **[Owner](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#owner)**.
    *   If your account has the role of a **Contributor**, you do not have adequate permissions. Contact your Azure Account Administrator for getting the required permissions.
    
    Steps to check the permissions of your Azure subscription:  
    
    a.  In the Azure Portal, select your account from the upper right corner, and select **My permissions**.  
        ![](Resources/Images/AzureAcc_3.png)  

    b.  From the drop-down list, select **Subscription**. Select **Click here to view complete access details for this subscription.  
        ![](Resources/Images/AzureAcc_4.png)**  
        
    c.  View the roles assigned to you. In the following image, the user has the role of the **Owner**, which means that the user has adequate permissions.  
        ![](Resources/Images/AzureAcc_5_521x199.png)
    
    </details>

    <details close markdown="block"><summary>Azure Active Directory Permissions</summary>
    
    To check your Azure AD permissions:
    
    a.  Select **Azure Active Directory**.  
        ![](Resources/Images/AzureAcc_1.png)  

    b.  In Azure Active Directory, select **Overview** and look at your user information. You should have the role of a **Global Administrator** to proceed further. If you do not have this role, contact your administrator to assign this role to you.  
        ![](Resources/Images/AzureAcc_2_525x185.png)  
    </details>

2.  **Prerequisite packages** - The Volt MX Foundry Containers on Azure Solution does not need any additional software to be pre-installed, as the prerequisite packages are downloaded as a part of the setup scripts.

    **The packages that are installed as part of the install scripts are: azure-cli, kubectl, jq, and sponge.**

    > **_Note:_** To make sure that the script is able to download all the necessary software, you might need to open outbound connections to the respective sites. For more information, refer to the [Appendices](Appendices.html#appendices) section of this document.


3.  <b><text id="Generate">Generate an SSH Public Key</text></b> – Using the SSH protocol, you can connect and authenticate to remote servers and services. Volt MX Foundry setup expects an SSH key pair for authentication. The SSH public key is used for creating the Azure Virtual Machine, and for installing the Volt MX Foundry Setup. You need to specify the SSH Public Key in the properties file.
    
    On Ubuntu terminal, use the `ssh-keygen` command to generate SSH public and private key files that are created by default in the `~/.ssh` directory. This command can be executed from your local (Ubuntu) machine:
    
    `ssh-keygen -t rsa -b 2048` - This command is used to generate the SSH key pair using RSA encryption and a bit length of 2048. Name this key to be generated as **id\_rsa**.
    
    You must create and configure a key pair as you need to provide them in the [Configuration](#SSH) settings.
    
    > **_Note:_** The SSH keys need to be placed in **sshkeys** folder.
    
    > **_Note:_** You must leave the passphrase empty while generating the SSH key. VM logins are protected by other features such as the Google Authenticator.
    
4.  **Domain Name**\- You can have a Domain Name for the solution, which you can purchase from any third-party organizations, such as GoDaddy, and a proper DNS which you need to map to the public DNS of the Application Gateway. Refer to the [Appendices](Appendices.html#appendices) section, for more details.
5.  **SSL certs**\- To secure the communication, acquire the SSL certs (Azure Application Gateway requires certificates in .pfx format) and provide them during the Installation process. These SSL certs must be associated with the Domain Name that the user has procured. Refer to the [Appendices](Appendices.html#appendices) section on SSL cert pfx format conversion.
    *   Place the SSL certificate (in a **.pfx** file format) in the ssl-cert folder, and then provide the **Server Domain Name** and **AppGateway SSL Cert Password**.
    *   For enabling HTTPS on the back-end of appgateway, perform the following steps:
        1.  The SSL certificates with the cert data and key data should be in separate files (both in a **.pem** file format).
        2.  Save the Cert file as `ingress.pem`.
        3.  Save the Key file as `ingress_key.pem`.
        4.  Place both ingress.pem and ingress\_key.pem files in the **certs** folder of the installation directory.

    > **_Note:_** It is recommended to use CA signed SSL cert to avoid any errors.

    > **_Note:_** To execute the installation scripts, you must use Bash version 4 or later.

    > **_Note:_** In case you are using [Marketing Catalog Microservice](#marketing-catalog-microservice) or [Campaign Microservice](#campaign-microservice) you can refer to their prerequisites mentioned ahead in the document.

VM Setup
--------

You need an Azure Virtual Machine to download the artifacts, and execute the setup scripts from the VM to install Volt MX Foundry on Azure.  
Follow these steps to create a VM through Azure Portal:

<details close markdown="block"><summary>Click here to view the steps</summary>

1.  Login to the Azure Portal with the same account you configured for the role of the **Global Administrator.** Navigate to the **Virtual Machines** Tab.  
    Click on `+Add` button and select the Ubuntu Server image.  
    ![](Resources/Images/VM_Login_547x271.png)
2.  Select **Ubuntu Server 16.04 LTS** image and click on **Create**.  
    ![](Resources/Images/Ubuntu16.04_532x343.png)
3.  Proceed with the remaining steps in the wizard and provide the **SSH Public Key** where needed.  
    ![](Resources/Images/SSH_Ubuntu.PNG)

</details>

Pre-Installation Tasks
----------------------

Steps to Install Volt MX Foundry on MS Azure:

<details close markdown="block"><summary>Click here to view the steps</summary>

1.  Fetch the **Public IP** of the Virtual Machine from Azure Portal.  
    ![](Resources/Images/VM_AzPortal_582x174.png)  
    Login to the VM by executing the following command in the Terminal:  
    `$ ssh azureuser@<public-ip> -i ~/.ssh/id_rsa`
2.  Switch to the root user, install the **unzip** package for extracting contents, and download the `voltmx-foundry-containers-azure.zip` file:  
    **$ sudo -s**  
    **$ apt-get install unzip** 
    **$ curl -o voltmx-foundry-containers-azure.zip -L**[voltmx-foundry-containers-azure_9.2.0.1_GA.zip](https://download.hcl-cloud.com/onpremise/mobilefoundry/docker/9.2.0.1/VoltMXFoundryContainersAzure-9.2.0.1_GA.zip)
3.  Unzip the downloaded artifacts:  
    **$ unzip voltmx-foundry-containers-azure.zip -d \<directory-name\>**
    **The structure of the document will be as shown below:**  
    ![](Resources/Images/Folder_structure_567x157.png)

</details>

Configuration
-------------

Edit the input parameters in the following file based on the type of solution you want to create.

*   **\<Installation Directory\>/conf/enterprise.properties**  
    For more information, refer to the [sample.properties (zip)](sample.zip) file.

There are two types of input properties:

*   **User Defined Parameters**: These are the mandatory inputs for which you must specify values.
*   **Advanced Properties**: These are either populated by default or populated by the script during installation. Therefore, these generally do not need to be updated by you. These are available in the [sample.properties (zip)](sample.zip) file.

### List of properties under the User Defined Section

You need to provide the following parameters during Installation:

> **_Note:_** None of the values for parameters in the properties file should contain quotes.  


<table>
<tr>
<th>PARAMETER</th>
<th>DESCRIPTION</th>
<th>EXAMPLE</th>
</tr>
<tr>
<th>SHARED_SERVER_DOMAIN_NAME</th>
<td>This is the domain name property for Foundry Console component. This is not required if shared cluster is already created in previous installations.</td>
<td><code>kfazure-console.hcl.net</code></td>
</tr>
<tr>
<th>INTEGRATION_SERVER_DOMAIN_NAME</th>
<td>This is the domain name property for Foundry Integration component.</td>
<td><code>kfazure-integration.hcl.net</code></td>
</tr>
<tr>
<th>VMS_DOMAIN_NAME</th>
<td>This is the domain name property for Foundry Engagement Service Component. This is not required in case of Production because Engagement will also use SHARED_SERVER_DOMAIN_NAME incase of production.</td>
<td><code>kfazure-engagement.hcl.net</code></td>
</tr>
<tr>
<th>AZURE_SUBSCRIPTION_ID</th>
<td>This is the Azure subscription ID. Steps to know this are in the <a href="#subId">next section</a>.</td>
<td>da28307f-55ae-42de-995a-fcc6608d1bd4</td>
</tr>
<tr>
<th>AZURE_LOCATION</th>
<td>The region in which the AKS cluster should be created. For more details refer to, <a href="Appendices.html#features-and-supported-regions">Features and Supported Regions</a>.</td>
<td>eastus</td>
</tr>
<tr>
<th>SERVICE_PRINCIPAL_CLIENT_ID</th>
<td>Application ID of the service principal created for the Azure installation.</td>
<td>716f6434-1315-4acb-3184-d9a23efa3613</td>
</tr>
<tr>
<th>SERVICE_PRINCIPAL_CLIENT_SECRET</th>
<td>Password of the Service Principal.</td>
<td>34a10627-308d-4697-9ea2-e379f8e33bb0</td>
</tr>
<tr>
<th>SERVICE_PRINCIPAL_OBJECT_ID</th>
<td>Service principal object ID. Steps to know this are in the <a href="#servicePObj">next section</a>.</td>
<td>c3afcb93-46ed-21c4-98e0-7bb639297f21</td>
</tr>
<tr>
<th>TENANT_ID</th>
<td>Tenant ID of the Azure account. Steps to know this are in the <a href="#tenantID">next section</a>.</td>
<td>a5a1f617-3b00-1e81-8190-c4a5136ba396</td>
</tr>
<tr>
<th>SSH_PUBLIC_KEY</th>
<td>This is required for creation of the AKS. Steps to create SSH key is provided in the <a href="#Generate">pre-requisites section</a>. <blockquote><em><b>Note: </b></em>You cannot use the same SSH key for all the Non-Production installations within a subscription.</blockquote></td>
<td>ssh-rsa SAAWB3NzaC1yc2…</td>
</tr>
<tr>
<th>SHARED_AZURE_RESOURCE_GROUP</th>
<td>Specify name of resource group to be created for the cluster of SHARED components (Console, Identity, and Engagement). Enter a name which does not conflict with any of the existing resource groups. This is not required for Non-Production if the shared cluster is already installed for the same subscription.</td>
<td>FoundrySharedXYZ</td>
</tr>
<tr>
<th>INTEGRATION_AZURE_RESOURCE_GROUP</th>
<td>Specify name of resource group to be created for the Integration (INT) cluster. This will be the resource group where AKS cluster for Foundry Integration is created. Enter a name which does not conflict with any existing resource group. This is mandatory for all installations.</td>
<td>FoundryIntXYZ</td>
</tr>
<tr>
<th>DATABASE_TYPE</th>
<td>Specify the database type you want to use for hosting Volt MX Foundry on Azure.The Volt MX Foundry Containers on Azure Solution supports the MS SQL and MySQL Server Databases.</td>
<td>mysql</td>
</tr>
<tr>
<th>SHARED_DATABASE_USER_NAME</th>
<td>Specify a username for the database used by the Foundry console, identity and engagement components. This is not required in Non-Production installation if a shared cluster is already created in the previous installation.</td>
<td>dbclient</td>
</tr>
<tr>
<th>SHARED_DATABASE_PASSWORD</th>
<td>Specify a password for the database used by the shared Foundry components. <blockquote><em><b>Note: </b></em>The following special character &#36;&#44; &#42;&#44; &amp;&#44; &#33;&#44; &#40;&#44; &#41;&#44; &#92; are not supported in DB password.</blockquote></td>
<td>Test#/123</td>
</tr>
<tr>
<th>INTEGRATION_DATABASE_USER_NAME</th>
<td>Specify a username for your INT database</td>
<td>dbclient</td>
</tr>
<tr>
<th>INTEGRATION_DATABASE_PASSWORD</th>
<td>Specify a database password for your integration database.
<blockquote><em><b>Note: </b></em> If you are using Volt MX Foundry 9.0.0.1 GA docker images, you must specify the same value for SHARED_DATABASE_PASSWORD and INTEGRATION_DATABASE_PASSWORD.<br/>Integration docker image does not support multiple passwords.<br/>You can use different passwords for your databases from Volt MX Foundry V9.0.1.0 GA onwards.<br/>The following special character &#36;&#44; &#42;&#44; &amp;&#44; &#33;&#44; &#40;&#44; &#41;&#44; &#92; are not supported in DB password.</blockquote></td>
<td>FabR^c123</td>
</tr>
<tr>
<th>APPGATEWAY_SSL_CERT_PASSWORD</th>
<td>Password of the SSL PFX certificate.This is the Password is used for getting the <b>pfx</b> key for the SSL offloading.</td>
<td>Test@1234</td>
</tr>
<tr>
<th>Automatic Registration Details:</th>
<td>Auto registration inputs are not required to be provided for Non-Production if the Shared cluster is already created in a previous installation.</td>
<td></td>
</tr>
<tr>
<th>AUTO_REGISTRATION_USER_ID</th>
<td>The email ID used for Volt MX Foundry Registration. After the installation is complete, you can add more users from the Foundry console.</td>
<td>micheal.doe@xyz.com</td>
</tr>
<tr>
<th>AUTO_REGISTRATION_PASSWORD</th>
<td>The password used for Volt MX Foundry Registration.</td>
<td>Test@5264!</td>
</tr>
<tr>
<th>AUTO_REGISTRATION_FIRST_NAME</th>
<td>The first name used for Volt MX Foundry Registration.</td>
<td>Micheal</td>
</tr>
<tr>
<th>AUTO_REGISTRATION_LAST_NAME</th>
<td>The last name used for Volt MX Foundry Registration.</td>
<td>Doe</td>
</tr>
<tr>
<th>AZURE_CDN_ENABLED</th>
<td>Specify whether to install CDN for the apps component or not. If you have chosen a region where CDN Profile is not supported, CDN will not be configured. For more details refer to, <a href="Appendices.html#features-and-supported-regions">Features and Supported Regions</a>.</td>
<td>true Supported values include: true or false.</td>
</tr>
<tr>
<th>ALERT_NOTIFICATION_ENABLED</th>
<td>Specify whether to enable notification for Alerts. For example sending an alert when the CPU Usage crosses 90% on integration pod, etc.</td>
<td>true Supported values include: true or false.</td>
</tr>
<tr>
<th>AZURE_ACTION_GROUP_NAME</th>
<td>Specify name of the action group.</td>
<td>admin</td>
</tr>
<tr>
<th>USER_EMAIL_ID</th>
<td>Specify the default email ID to which alert notification should be sent.</td>
<td>micheal.doe@xyz.com</td>
</tr>
<tr>
<th>ARRAY_TO_WHITELIST_IPS_TO_ACCESS_FILE_SHARE</th>
<td>Specify the public Foundry IP of the machine where the installation script would be running. To specify multiple IPs use space separated values like (“w1.x1.y1.z1” “w2.x2.y2.z2” “w3.x3.y3.z3”).</td>
<td>(“103.140.124.130”)</td>
</tr>
<tr>
<th>COMMON_RESOURCE_GROUP</th>
<td>Specify the name of the resource group where few subscription level shared resources would be created. This needs to be a separate value for Production and for Non-Production. This is the resource group under which PCI related function app gets created.</td>
<td>VoltMXInfra</td>
</tr>
<tr>
<th>MARKETING_CATALOG_MS</th>
<td>Specify whether to enable Marketing Catalog Microservice or not.</td>
<td>false Supported values include: true or false.</td>
</tr>
<tr>
<th>MARKETING_CATALOG_RESOURCE_GROUP</th>
<td>Specify the name of the resource group where the marketing catalog microservice resources would be created.</td>
<td>marketingcatalog-ms</td>
</tr>
<tr>
<th>MONGO_PATH</th>
<td>Enter the path where Mongo Shell is installed.</td>
<td><code>/opt/mongodb-linux-x86_64-ubuntu1804-4.2.10/bin</code></td>
</tr>
<tr>
<th>MONGO_CONNECTION</th>
<td>Enter the connection string for Mongo Shell from Altas.</td>
<td>mongodb+srv://mongo-cluster-1.jonig.mongodb.net</td>
</tr>
<tr>
<th>MONGO_USER_NAME</th>
<td>Enter the Mongo Database user name which has been created earlier by you.</td>
<td>mongodbuser</td>
</tr>
<tr>
<th>MONGO_PASSWORD</th>
<td>Enter the Mongo Database password which has been given by you while creating the mongodb user.</td>
<td>Root@123</td>
</tr>
<tr>
<th>MONGODB_DBNAME</th>
<td>Enter the preferred Database name.</td>
<td>marketingcatalogdb</td>
</tr>
<tr>
<th>MONGODB_CONNECTIONSTR</th>
<td>Provide mongo DB connection string.<br/><blockquote><em><b>Note: </b></em>Ensure that you are providing URL encoded mongodb username and password values if they contain special characters like &#92;&#44; &#42;&#44; &#64;&#44; &#58;&#44; &#63;&#44; &#46; etc&#46;</blockquote><em>It can be formed using the following string: mongodb://&lt; MONGO\_USER\_NAME&gt;&#58;&lt; MONGO\_PASSWORD&gt; @&lt;cluster-shard-0&gt;&#58;&lt;port-number&gt;,&lt;cluster-shard-1&gt;&#58;&lt;port-number&gt; &#44; &lt;cluster-shard-2&gt;&#58;&lt;port-number&gt;/&lt; MONGODB\_DBNAME&gt;?ssl=true&amp;replicaSet= &lt;value&gt; &amp;authSource=admin&amp;retryWrites=true&amp;w=majority</em></td>
<td>mongodb://mongodbuser:Root%40123@mongo-cluster-1-shard-00-01.jonig.mongodb.net:27017,mongo-cluster-1-shard-00-02.jonig.mongodb.net:27017,mongo-cluster-1-shard-00-00.jonig.mongodb.net:27017/marketingcatalogdb?ssl=true&amp;replicaSet=atlas-qxcm8s-shard-0&amp;authSource=admin&amp;retryWrites=true&amp;w=majority</td>
</tr>
<tr>
<th>EVENT_HUB_NAME_SPACE</th>
<td>Enter the preferred Event hub namespace.</td>
<td>marketingcatalogkafkaapp</td>
</tr>
<tr>
<th>CAMPAIGN_MS</th>
<td>Specify whether to enable Campaign Microservice or not.</td>
<td>false Supported values include: true or false.</td>
</tr>
<tr>
<th>CAMPAIGN_RESOURCE_GROUP</th>
<td>Specify the name of the resource group where campaign microservice resources would be created.</td>
<td>nas-ssl-campaign</td>
</tr>
<tr>
<th>CAMPAIGN_DB_SERVER_NAME</th>
<td>Specify the server name for your MySQL Database.</td>
<td>sqlcampaigndb</td>
</tr>
<tr>
<th>CAMPAIGN_DB_USER_NAME</th>
<td>Enter the preferred Database username.</td>
<td>campaign</td>
</tr>
<tr>
<th>CAMPAIGN_DB_PASSWORD</th>
<td>Enter the preferred Database password. It should be a String containing a minimum of 8 characters and combination of alpha-numeric and non-alpha-numeric characters.</td>
<td>root@123</td>
</tr>
<tr>
<th>ARRAY_TO_WHITELIST_IPS_TO_ACCESS_CAMPAIGN_DB</th>
<td>Specify the outbound public IP of the machine where the installation script would be running. To specify multiple IPs you can use space separated values like (“w1.x1.y1.z1” “w2.x2.y2.z2” “w3.x3.y3.z3”).</td>
<td>(“103.140.124.130”)</td>
</tr>
<tr>
<th>New Relic Monitoring details:</th>
<td>New Relic Monitoring for AKS Cluster. Enable New Relic monitoring for Infrastructure monitoring. Make sure a proper new relic subscription is available before enabling this feature.</td>
<td></td>
</tr>
<tr>
<th>NEW_RELIC_INFRA_MONITORING_ENABLED</th>
<td>Set to true if you have a new relic license key and if new relic infra monitoring needs to be enabled. This would monitor the node level performance metrics such as CPU, memory, etc.</td>
<td>true Supported values include: true or false.</td>
</tr>
<tr>
<th>NEW_RELIC_APP_PERF_MONITORING_ENABLED</th>
<td>Set to true if you have a new relic license and if pod level monitoring needs to be enabled. This would monitor the pod level metrics.</td>
<td>true Supported values include: true or false.</td>
</tr>
<tr>
<th>NEW_RELIC_LICENSE_KEY</th>
<td>Specify the new relic license key.</td>
<td>9e3f3112fb39c130a75c407ab0b4ba153f30NRAL</td>
</tr>
<tr>
<th>AKS_NODE_COUNT</th>
<td>Specify the number of worker nodes in the cluster. This is the minimum number of nodes to be created in the Shared AKS agent pool.</td>
<td>2</td>
</tr>
<tr>
<th>AKS_MAX_NODE_COUNT</th>
<td>Specify the maximum number of worker nodes that can be provisioned by Autoscaling. The max number of nodes for the Shared AKS to create in case load increases.</td>
<td>6</td>
</tr>
<tr>
<th>SHARED_AKS_NODE_SIZE_NON_PROD</th>
<td>This is for a Non Production instance. Type of the Azure instance created for Shared cluster in which Foundry components console, identity, engagement pods will be created. Refer to the <a href="https://docs.microsoft.com/en-us/azure/aks/use-multiple-node-pools">Azure documentation</a> for instance sizes and codes.</td>
<td>Standard_D4_v3</td>
</tr>
<tr>
<th>SHARED_AKS_NODE_SIZE_PROD</th>
<td>This is for a Production instance. Type of the Azure instance created for Shared cluster in which Foundry components console, identity, engagement pods will be created. Refer to the <a href="https://docs.microsoft.com/en-us/azure/aks/use-multiple-node-pools">Azure documentation</a> for instance sizes and codes.</td>
<td>Standard_D4_v3</td>
</tr>
<tr>
<th>INTEGRATION_AKS_NODE_SIZE</th>
<td>Type of the Azure instance to be created for Integration Cluster.</td>
<td>Standard_B2MS</td>
</tr>
<tr>
<th>AKS_MASTER_NODE_COUNT</th>
<td>This is the AKS Master Node Count. Specify the number of Master nodes to create.</td>
<td>1</td>
</tr>
<tr>
<th>INTEGRATION_AKS_NODE_COUNT</th>
<td>The minimum number of nodes to be created in the Integration AKS agent/node pool.</td>
<td>2</td>
</tr>
<tr>
<th>INTEGRATION_AKS_MAX_NODE_COUNT</th>
<td>The maximum number of nodes to be created in the Integration AKS agent/node pool.</td>
<td>6</td>
</tr>
</table>


<a name="userProperties"></a>    
<details open markdown="block"><summary>Click here to view details of the User Defined Properties <strong>(Azure Subscription ID, Azure Service Principal ID Name, Azure Service Principal ID Secret, Service Principal Object ID, and Tenant ID)</strong></summary>
<p></p>
<p>Azure Subscription ID is a GUID that uniquely identifies your subscription to use Azure services. The Application needs the Service Principal to access or configure resources through the Azure Resource Manager (ARM) in the Azure Stack.</p>
<p>You must have an Azure account with the permissions of a <b>Global Administrator</b> and the role of a <b>User</b>. Without these privileges, it is not possible to create the AKS clusters (or other resources).</p>
<p>The following section describes fetching <b>Azure Subscription ID</b>, generating <b>Azure Service Principal ID Name, Azure Service Principal ID Secret, Service Principal Object ID</b>, and <b>Tenant ID</b>.</p>
<ol type = "i">
<li id="subId">Steps to get the <b>Subscription ID</b>:</li>
<ul type="square">
<li>Navigate to http://portal.azure.com/.</li>
<li>Navigate to Browse.</li>
<li>In the search box, begin to type subscription.</li>
<li>Select Subscriptions from the search results.</li>
<p></p>
<img src="Resources/Images/ASP_1_459x653.png">
<br/>
<p>Find the appropriate subscription to check your Azure subscription GUID.</p>
<img src="Resources/Images/ASP_2_463x131.png">
<br/>
</ul>
<li>Steps to generate <b>Azure Service Principal</b> with Contributor role at subscription level: </li>
<p></p>
<p>Login to Azure Portal and click on <b>Cloud Shell</b> as shown:</p>
<img src="Resources/Images/Execute_1_542x106.png">
<br/>
<ol type = "a">
<li>Execute:</li>
<pre><code style="display:block;background-color:#eee;">$ az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/&lt;subscription_id&gt;"</code></pre>
<br/>
<img src="Resources/Images/Execute_3_478x135.png">
<br/>
<p>After executing the above command, a json response will be displayed on the command prompt.</p>
<pre><code style="display:block;background-color:#eee;">{
"appId": "APP_ID",
"displayName": "ServicePrincipalName",
"name": "http://ServicePrincipalName",
"password": ...,
"tenant": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
}</code></pre>
<br/>
<p>In the properties file of the <b>conf</b> directory:</p>
<ul type="square">
<li>SERVICE_PRINCIPAL_CLIENT_ID is the value of the appId.</li>
<li>SERVICE_PRINCIPAL_CLIENT_SECRET is the value of the password.</li>
</ul>
<blockquote><em>Note: </em>The values of the SERVICE_PRINCIPAL_CLIENT_ID and SERVICE_PRINCIPAL_CLIENT_SECRET should not contain any quotation marks. For example:
<ul>
<li>SERVICE_PRINCIPAL_CLIENT_ID = a5afa829-525c-436c-ca4f-f442027cfd2e</li>
<li>SERVICE_PRINCIPAL_CLIENT_SECRET = cx4q44eq-fq7a-450v-zf41-4049183d1eb8</li>
</ul>
</blockquote>
</ol>
<li id="servicePObj">Steps to generate the <b>Service Principal Object ID</b>:</li>
<p>Login to Azure Portal and click on <b>Power Shell</b>.</p>
<p></p>
<ol type="a">
<li>Execute:</li>
<pre><code style="display:block;background-color=#eee;">$(Get-AzureADServicePrincipal -Filter "AppId eq ‘&lt;Service_principle_client_ID&gt;’").ObjectId
</code></pre>
<br/>
<img src="Resources/Images/objectid.PNG">
<br/>
</ol>
<li id="tenantID">Steps to know your <b>Tenant ID</b>:</li>
<ol type="i">
<li>Go to Portal.azure.com > Azure Active Directory.</li>
<li>In the Overview section you can find the Tenant ID.</li>
<img src="Resources/Images/tenant_id.png">
<br/>
</ol>
</ol>
</details>

<br/>

<h2 id="installation">Installation</h2>
<p style="font-weight:bold;">
Steps to Install Volt MX Foundry on MS Azure
</p>
<ol>
<li value="1">Create an Ubuntu VM or you can use an existing VM. For more details, refer to <a href="#vm-setup">VM Setup.</a></li>
<li>Extract the downloaded installation zip on that VM. For more details, refer to <a href="#pre-installation-tasks">Pre-Installation Tasks</a>.
<p><img src="Resources/Images/installfolder.png"></p>
</li>
<li>Modify/Enter the required properties in the <b>&lt;Installation Directory&gt;/conf/enterprise.properties</b> file. For more details, refer to <a href="#configuration">Configuration.</a></li>
<li>Run the installation using command bash <b>install-foundry.sh</b>.
<p><img src="Resources/Images/new_install1.png"></p>
</li>
<li>Choose between a <b>Non-Production</b> or a Production installation mode. In the following prompt a Non-Production mode has been chosen. You can choose Production mode and follow a similar flow to complete the installation.</li>
<li>Specify a label for the Non-Production installation environment. A label is just a simple string such as dev, qa, uat etc., this will also be appended to the Azure resources created for this environment to identify them easily.
<p><img src="Resources/Images/new_install2.png"></p>
<blockquote>
<em><b>Note: </b> </em>This step is specific to Non-Production mode.
</blockquote>
</li>
<li>The installation begins and towards the end of the installation the following prompt will be displayed.
<p><img src="Resources/Images/new_install3.png"></p>
</li>
<li>Once the domains are mapped to the IPs/CNAME as shown in the prompt, validate the mappings and continue the installation by re-running <b>install-foundry.sh</b>. The CDN configuration will be done and the following prompt will be displayed to complete the manual steps of CDN configuration.
<p><img src="Resources/Images/CdnSuccessful.png"></p>
<blockquote>
<em><b>Note: </b> </em>You must ensure that the domain mapping must reflect with correct mapping from the script client box using <b>nslookup</b>.
</blockquote>
</li>
<li>As shown in the prompt, follow the steps in <a href="VoltMX_Foundry_on_Azure.html#setting-up-azure-content-delivery-network-cdn">Setting up Azure Content Delivery Network (CDN)</a> to perform a custom domain HTTPS configuration.</li>
<li>Re-run the installation by running the <b>install-foundry.sh</b> again to complete the post-installation tasks.</li>
<li>Re-run the installation by running the install-foundry.sh again to complete the post-installation tasks.</li>
<li>At the end of the installation, the following message is displayed which contains the Foundry Console URL. Copy and paste the displayed link on to a browser. Press Enter. The Foundry Console is displayed.</li>
<p><img src="Resources/Images/new_install4.png"></p>
</ol>


Post Installation
-----------------

After the installation and CDN configuration is complete, you can access the Foundry Console using the link displayed on the screen.

1.  Take a backup and keep the installation logs from <b>&lt;Installation Directory&gt;/logs directory</b>.
2.  Copy and paste the displayed link on to a browser. Press Enter. The Foundry Console is displayed.
3.  Login with the registration credentials provided in the properties file and navigate across various pages. Following is a screenshot of the Environments tab from an Azure test setup after installing 3 environments, namely DEV, UAT2, and QA4.
    
    ![](Resources/Images/Environment_Page.png)
    

You can now publish apps and check the runtime services.

Configuring Iris to Connect to Volt MX Foundry on Azure
------------------------------------------------------------

For details about connecting to Volt MX Foundry Console through Iris, refer to [Connecting to Volt MX Foundry]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Connect_to_VoltMXFoundry.html).

Updating the Azure Kubernetes Service Cluster configuration
-----------------------------------------------------------

You need to have the current config files if you want to update the AKS cluster configuration. Once the installation is complete, take a backup of the unzipped directory where you installed the `voltmx-foundry-containers-azure.zip` to perform further updates to the AKS clusters.

> **_Important:_** If you do not have a backup of the unzipped directory, updating the AKS cluster is difficult.

Setting up Azure Content Delivery Network (CDN)
-----------------------------------------------

A Content Delivery Network (CDN) is a distributed network of servers that can efficiently deliver web content to users. To minimize latency, CDNs store cached content on edge servers in Point-Of-Presence (POP) locations that are close to end users.

Azure Content Delivery Network (CDN) offers a global solution for developers to rapidly deliver high-bandwidth content to users by caching the content at strategically placed physical nodes across the world.

> **_Note:_** Azure CDN SKU for AKS cluster is set to Premium Verizon, which supports configuration of cache rules for Volt MX Foundry Apps.

<h3>Enable CDN on Azure AKS cluster</h3>
<details close markdown="block"><summary>Follow these steps to enable CDN in your AKS cluster .</summary>
<ol value="1">
  <li>Set the value of <code>AZURE_CDN_ENABLED</code> to true in the properties file (trail.properties /enterprise.properties).
  <p><img src="Resources/Images/ClamAV/CDN1.png"></p>
  </li>
  <li>Set the CDN Endpoint:
  <ul><li>FOR SSL ENABLED CLOUD (IS_SSL_ENABLED = true), after creating the CDN endpoint, map the CDN endpoint to a custom domain name.
  <p></p>
  <p><img src="Resources/Images/ClamAV/CDN2.png"></p>
    </li>
      <li>FOR SSL DISABLED CLOUD (IS_SSL_ENABLED = false), no mapping of server domain name is required.</li>
    </ul>
  </li>
</ol>  
</details>

<p>Once you create the CDN profile and endpoint, follow these steps to manually configure the CDN settings in the Azure portal:</p>

<details close markdown="block"><summary>Click here for the steps.</summary>
  <ol>
    <li>Open the Azure portal (<a href="http://portal.azure.com/">portal.azure.com</a>) and login using your Microsoft account credentials.
    <p><img src="Resources/Images/ClamAV/CDN3_600x317.png"></p>
    </li>
    <li>Select <b>Resource groups</b> from the left navigation pane.
    <p><img src="Resources/Images/ClamAV/CDN4_597x272.png"></p>
    <p></p>
    <p>All existing resource groups appear.</p>
    <p>Select the resource group in which the AKS Cluster is created.</p>
    <p><img src="Resources/Images/ClamAV/CDN5_600x274.png"></p>
    </li>
    <li>If the cloud is SSL enabled, open <b>CDN Endpoint</b> from the list of resources in the Azure Resource Group.
          <p><img src="Resources/Images/ClamAV/CDN6_596x250.png"></p>
    </li>
    <li>Click <b>Custom Domain.</b>The Custom Domain page appears.
          <p><img src="Resources/Images/ClamAV/CDN7_601x252.png"></p>
    </li>
    <li>Select ON to enable HTTPS for custom domain.
      <p><img src="Resources/Images/ClamAV/CDN8.png"></p>
    </li>    
  </ol>
</details>

<h3>Configuring Caching Rules</h3>
<ol>
  <li>Go to <b>CDN profile</b> from the list of resources available in the Azure Resource Group (having the created AKS cluster).
    <p><img src="Resources/Images/ClamAV/CDN9.png"></p>
  </li>
  <li>Click <b>Manage</b> from the top navigation bar.
    <p><img src="Resources/Images/ClamAV/CDN10_599x251.png"></p>
  </li>
  <li>Configure all the rules in the <b>CDN Manage Console</b>.
    <p><img src="Resources/Images/ClamAV/CDN11_599x270.png"></p>
  </li>
 <li>From the <b>HTTP Large</b> list, select <code>cache settings -> query string caching</code>.
    <p><img src="Resources/Images/ClamAV/CDN12_599x251.png"></p>
 </li>
 <li>Select <b>no-cache</b> as the <b>query string caching</b> and click <b>Update</b>.
    <p><img src="Resources/Images/ClamAV/CDN13.png"></p>
  </li>
  <li>From the <b>HTTP Large</b> list, select <b>Rules Engine</b>.
    <p><img src="Resources/Images/ClamAV/CDN14_591x112.png"></p>
  </li>
   <li>Configure all the required rules.
    <p><img src="Resources/Images/ClamAV/CDN15.png"></p>
     <ul>
       <li>Rule 1</li>
        <p><img src="Resources/Images/ClamAV/rule1.png"></p>
        <li>Rule 2</li>
        <p><img src="Resources/Images/ClamAV/rule2.png"></p>        
        <li>Rule 3</li>
        <p><img src="Resources/Images/ClamAV/rule3.png"></p>        
        <li>Rule 4</li>
        <p><img src="Resources/Images/ClamAV/rule4.png"></p>        
        <li>Rule 5</li>
        <p><img src="Resources/Images/ClamAV/rule5.png"></p>
        <li>Rule 6</li>
        <p><img src="Resources/Images/ClamAV/rule6.png"></p>
        <li>Rule 7</li>
        <p><img src="Resources/Images/ClamAV/rule7.png"></p>        
        <li>Rule 8</li>
        <p><img src="Resources/Images/ClamAV/rule8.png"></p>        
        <li>Rule 9</li>
        <p><img src="Resources/Images/ClamAV/rule9.png"></p>        
        <li>Rules Order</li>
        <p><img src="Resources/Images/ClamAV/rules_order.png"></p>
     </ul>
  </li>
</ol>


Configuring Clam AntiVirus for Azure Virtual Machines
-----------------------------------------------------

Clam AntiVirus (ClamAV) is an open-source anti-virus software toolkit. You can choose to install ClamAV on Azure Virtual Machines in the kubernetes cluster. ClamAV is designed to be an on-demand scanner, and will only run when invoked to run.

A cron job is configured to run ClamAV on Azure Virtual Machines based on the frequency specified in the properties file. ClamAV scans all the files in the virtual machine and pushes the logs (**clamscan.log** and **freshclam.log**) present in **/var/log/clamav** directory to the **clamavlogs** container in the **storage account** of the Azure Resource Group in which the AKS cluster is created.

Provide the following inputs in the properties file to enable ClamAV.

### Install ClamAV on Azure Virtual Machine

Follow these steps to install ClamAV on your Azure Virtual Machine:

1.  Set the value of `INSTALL_CLAMAV` to `true` in the properties file (trail.properties /enterprise.properties).
2.  Place your SSH private key and SSH public key in the `sshkeys` folder with names **id\_rsa** and **id\_rsa.pub** respectively.
3.  Set the frequency of the cron job to start the ClamAV scan and push the generated logs to the storage account.


<blockquote><em><b>Note:</b></em> Use the following format to set the values for the frequencies of `clamscan_cron_schedule` and `clamscanlogpush_cron_schedule` in the properties file (trail.properties /enterprise.properties).<pre><code style="display:block;background-color:#eee">  *  *  *  *  *
  |  |  |  |  |
  |  |  |  |  |
  |  |  |  |  +---- Day of the Week   (range: 1-7, 1 standing for Monday)
  |  |  |  +------ Month of the Year (range: 1-12)
  |  |  +-------- Day of the Month  (range: 1-31)
  |  +---------- Hour (range: 0-23)
  +------------ Minute (range: 0-59)
 * = any value</code></pre>
<p>For example, if you configure the crontab timing as 00 16 * * *, this indicates that the crontab runs every day at 16:00:00 (UTC).</p>
<ul>
<li>You must maintain a minimum gap of 02:30 hrs. between the <code>clamscan_cron_schedule</code> and <code>clamscanlogpush_cron_schedule</code>.</li>
<li>All cron job timings follow UTC timezone.</li>
</ul>
</blockquote>

### Access ClamAV logfiles in the Virtual Machine

Follow these steps to access the ClamAV logs in the Virtual Machine.

*   Log on to Jumpbox using the following ssh command:  
    `ssh devops@<Jumpbox_Public_IP_Address>`
*   Log on to the Virtual Machine from Jumpbox using the following SSH command:  
    `ssh -i id_rsa azureuser@<Virtual_Machine_IP_Address>`
*   Using the following command, go to `/var/log/clamav` directory:  
    `cd /var/log/clamav`

This directory contains the `clamscan.log` and `freshclam.log` files that are generated by ClamAV after scanning the Virtual Machine.

Another cron job is configured to push the generated logs into the Azure Storage Account.

<h3>Edit the cron job</h3>
<ul>
  <li>Use the following command to view existing cron jobs on the VM.<br/>
  <p><code>crontab -l</code></p>
  <br/>
  <p>
  <img src="Resources/Images/ClamAV/CLAMAV1.png">
  </p>
  </li>
  <li>Use the <code>crontab -e</code> command to open the crontab list in edit mode.</li>
</ul>
    

### Edit the ClamAV conf file

The `freshclam.conf` file configures the ClamAV Database Updater.

*   Go to the `etc/clamav/` directory.
*   Open the `freshclam.conf` file in any editor to make any required changes to the conf file.


<h3>Accessing Logs in the Azure Storage Account</h3>
<p>All the logs generated by CLAMAV are pushed to the Azure Storage Account.</p>
<ol>
  <li>Log on to the Azure portal (<a href="http://portal.azure.com/">portal.azure.com</a>) using your Microsoft account credentials.
  <p><img src="Resources/Images/ClamAV/CLAMAV2.png"></p>
  </li>
  <li>Select <b>Resource Groups</b> from the left navigation pane.
  <p><img src="Resources/Images/ClamAV/CLAMAV3.png"></p>
  <p>All existing resource groups appear.</p>  
  <p>Select the resource group in which the AKS Cluster is created.</p> 
  <p><img src="Resources/Images/ClamAV/CLAMAV4.png"></p>
  </li>
  <li>Select the storage account from the list of resources available in the resource group.</li>
  <li>Click <b>Blobs</b> to see all the containers available in the storage account.
  <p><img src="Resources/Images/ClamAV/CLAMAV5.png"></p>
  </li>
  <li>Select the <b>clamavlogs</b> container from the list of containers available in the storage account.
  <p><img src="Resources/Images/ClamAV/CLAMAV6.png"></p>
  <p>This shows all the log files pushed by ClamAV from the virtual machine.</p>
  </li>
  <li>Click <b>Download</b> to view the logs in the file.
  <p><img src="Resources/Images/ClamAV/CLAMAV7.png"></p>
  </li>
  <li>Unzip the downloaded .zip file and extract the content.
  <p>You can now view all the logs that are pushed by CLAMAV from virtual machine.</p>
  </li>
</ol>
    

Configuring OSSEC Intrusion Detection
-------------------------------------

OSSEC is an open source Host-based Intrusion Detection System (HIDS). It has a powerful correlation and analysis engine, and can perform integrating log analysis, file integrity checking, Windows registry monitoring, centralized policy enforcement, rootkit detection, real-time alerting, and active response.

OSSEC runs as a daemon process. It notifies through alert logs when intrusion attacks occur. These alert logs are pushed to the **osseclogs** container in the storage account in the Azure Resource Group in which AKS cluster is created.

Provide the following inputs in the properties file to enable OSSEC.


<h3>OSSEC Installation steps</h3>
<ol>
  <li>Enable the <code>INSTALL_OSSEC</code> flag in the properties file (trial.properties /enterprise.properties):
    <p><img src="Resources/Images/ClamAV/OSSEC1.png"></p>
  </li>
    <li>As OSSEC is a daemon process, it continuously detects intrusion activities and stores alerts in <code>alerts.log</code> file. A cron job is configured to push the alerts from <code>/var/ossec/logs/alerts/alerts.log</code> to the Azure Storage Account.
    <blockquote>
      <em><b>Note: </b></em>Configure the cronjob osseclogpush_cron_schedule in the properties file (trail.properties /enterprise.properties) to set the frequency value of the cron job. Configure the Crontab timing in the following format: <pre><code style="display:block;background-color:#eee">  *  *  *  *  *
  |  |  |  |  |
  |  |  |  |  |
  |  |  |  |  +---- Day of the Week   (range: 1-7, 1 standing for Monday)
  |  |  |  +------ Month of the Year (range: 1-12)
  |  |  +-------- Day of the Month  (range: 1-31)
  |  +---------- Hour (range: 0-23)
  +------------ Minute (range: 0-59)
 * = any value</code></pre>
      <p>For example, if you configure the crontab timing as 00 16 * * *, this indicates that the crontab runs every day at 16:00:00 (UTC).</p>
      <ul>
        <li>You can modify the default values of the cron job, if required.</li>
        <li>All cron job timings follow UTC timezone.</li>
      </ul>
    </blockquote>
  </li>
  <li>Place your SSH private key in the sshkeys folder with name id_rsa.</li>
</ol>


### Access log files of OSSEC in Virtual Machine

Follow these steps to access OSSEC logs in the Virtual Machine.

1.  Use the following SSH command to log on to Jumpbox
    
    `$ ssh devops@<Jumpbox_Public_IP_Address>`
    
2.  Use the following SSH command, to log on to the Virtual Machine from the Jumpbox
    
    `$ ssh -i id_rsa azureuser@IPaddress of Virtual Machine`
    
3.  Execute the following command to login as a root user.
    
    `$ sudo su`
    
4.  You can view the **syslogs** at `/var/log/syslog`.
    
    `$cd /var/log/`
    
    `$cat syslog`
    
5.  Logs created by OSSEC daemons are stored in the sub directories of `/var/ossec/logs`.
    
    *   You can view the OSSEC logs at `/var/ossec/logs/ossec.log`
        
       `$cd /var/ossec/logs/`
        
       `$cat ossec.log`
        
    *   You can view the OSSEC alerts at `/var/ossec/logs/alerts/alerts.log`.
        
       `$cd /var/ossec/logs/alerts/`
        
       `$cat alerts.log`
        

<h3>Edit cron jobs</h3>
<ul>
  <li>To view the existing cron jobs use the following command on VM.<br/>
  <p><code>crontab -l</code></p>
  <br/>
  <p>
  <img src="Resources/Images/ClamAV/OSSEC2.png">
  </p>
  </li>
  <li>Use the <code>crontab -e</code> command to open the crontab list in edit mode.</li>
</ul>
    

<h3>Accessing Logs in Azure Storage Account</h3>
<p>All the logs generated by OSSEC are pushed to the Azure Storage Account.</p>
<ol>
  <li>Log on to the Azure portal <a href="http://portal.azure.com/">(portal.azure.com)</a> using your Microsoft account credentials.  
    <p>
    <img src="Resources/Images/ClamAV/OSSEC3.png">
    </p>
  </li>  
  <li>Select Resource groups from the left navigation pane.
    <p>
    <img src="Resources/Images/ClamAV/OSSEC4.png">
    </p>
    <p>All existing resource groups appear.</p>
    <p>Select the resource group in which the AKS Cluster is created.</p>
    <img src="Resources/Images/ClamAV/OSSEC5.png">
  </li>  
  <li>Select the storage account from the list of resources available in the resource group.</li>  
  <li>Click <b>Blobs</b> to see all the containers available in the storage account.
    <p>
    <img src="Resources/Images/ClamAV/OSSEC6.png">
    </p>
  </li>  
  <li>Select the <b>osseclogs</b> container from the list of containers available in the storage account.
    <p>
    <img src="Resources/Images/ClamAV/OSSEC7.png">
    </p>    
    <p>The page displays the log files pushed by OSSEC from Virtual Machine.</p>
  </li>
  <li>Click <b>Download</b> to view the logs file.
    <p>
    <img src="Resources/Images/ClamAV/OSSEC8.png">
    </p>    
    <p>You can now view all the logs that are pushed by OSSEC from the virtual machine.</p>
    <blockquote>
      <em><b>Note: </b></em>Follow these steps to edit the <code>preloaded-vars.conf</code> file to give customized inputs (other than defaults) to install OSSEC.
      <ol>
        <li>Login to the specific Virtual Machine (node) using SSH keys in the terminal.</li>
        <li>Go to the <code>/home/azureuser/ossec-hids-2.9.0/etc/</code> directory by using following command.
          <code>$ cd /home/azureuser/ossec-hids-2.9.0/etc/</code>
        </li>
        <li>Open the <code>preloaded-vars.conf</code> file and edit as required.</li>
      </ol>
    </blockquote>    
    <blockquote>
      <em><b>Note: </b></em>Follow these steps to edit the ossec.conf file and change the existing configurations of OSSEC.      <ol>
        <li>Login to the specific Virtual Machine (node) using SSH keys in the terminal.</li>
        <li>Go to the /var/ossec/etc directory using following command.
          <code>$ cd /var/ossec/etc</code>
        </li>
        <li>Open the <b>ossec.conf</b> file and edit as required.</li>
      </ol>
    </blockquote>
  </li>
</ol>
    

Marketing Catalog Microservice
------------------------------

The Marketing Catalog Microservice is a comprehensive source of system-independent data of product details and marketing content crossing all the banks products, and capable of consuming products and services outside of the bank. Examples include products offered by FinTechs (such as payment devices) or real banking products that can be sold and marketed on behalf of other banks. Banks can choose to ingest the product details from the existing core or Product management system. This can be created and managed in the Marketing Catalog microservice.

### Prerequisites

*   Run the installation on a fresh virtual machine.
    
    > **_Important:_** If in case you execute the file on an existing virtual machine you must ensure the Java is not installed on it or pointing it to Java 8 is mandatory.
    
*   Create a cluster in your Atlas account and **Allow access from anywhere** in the IP access list which is present under Network Access. Then, create a database user for your cluster and connect it to your cluster. Refer to [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) for the exact procedure that needs to be followed to execute this step.
    
    > **_Important:_** You must ensure allowing access from anywhere in the IP access list of the cluster. To do so you must login to your cluster and under Network Access go to IP Access List and then click on **Edit** and select **Allow access from anywhere** then save.
    
    ![](Resources/Images/NetworkAccess.png)
    
*   Install mongo shell of the same version as that of the cluster version. If your cluster version is 4.2.10 as shown in the following image then you must install mongo shell of version 4.2.10.

![](Resources/Images/marketingmicroservice.png)

### Deployment

*   If you want to create the marketing catalog microservice resources along with the end to end installation of Volt MX Foundry on Azure cloud you must do the following:
    1.  Provide the required inputs in the `conf/enterprise.properties` file.
    2.  Execute the `install-foundry.sh` file.
*   If you want to create only the marketing catalog microservice resources then do the following:
    1.  Copy the `marketing_catalogs` folder from VoltMXFoundryContainersAzure-\_/lib/microservices/ path.
    2.  Provide the required inputs in the `conf/ marketing_catalog_ms.properties` file.
    3.  Execute the `install_marketing_catalog_ms.sh` file present under the `marketing_catalogs` folder.

Campaign Microservice
---------------------

The Campaign microservice allows the branch user to create and store Campaign definition details.

### Prerequisite

*   Run the installation on a fresh virtual machine.

> **_Important:_** If in case you execute the file on an existing virtual machine you must ensure the Java is not installed on it or pointing it to Java 8 is mandatory.

### Deployment

*   If you want to create Campaign microservice resources along with the end to end installation of Volt MX Foundry on Azure cloud you must do the following:
    1.  Provide the required inputs in the `conf/enterprise.properties` file.
    2.  Execute the `install-foundry.sh` file.
*   If you want to create only the Campaign microservice resources then do the following:
    1.  Copy the `campaigns` folder from VoltMXFoundryContainersAzure-\_/lib/microservices/ path.
    2.  Provide the required inputs in the `conf/campaign_ms.properties` file.
    3.  Execute the `install_campaign_ms.sh` file present under `campaigns` folder.
