---
layout: "documentation"
category: "undefined"
---
﻿   

Overview
========

VoltMX Foundry has multiple components, such as Identity, Integration, and Engagement Services. These features can be accessed through a common, centralized VoltMX Foundry Console. This document helps you install and configure VoltMX Foundry (Console, Identity Services, Integration Services, and Engagement Services) on Azure Cloud. For more information about VoltMX Foundry, refer to [VoltMX Foundry User Guide](./../../voltmx_foundry_user_guide/Content/Introduction.md).

VoltMX Foundry Containers on Azure Solution is designed to facilitate VoltMX Foundry on Azure for Non-Production and Production needs. This setup occurs with minimal manual intervention and leverages the following technologies:

*   **Docker** - To package different components as portable container images (with all the required binaries and libs)
*   **Kubernetes** - To orchestrate and maintain all these running containers. It will also have features like auto-scaling, secrets, deployment upgrades and rollbacks.
*   **Azure** - For provisioning of the underlying infrastructure.

From Foundry V9 SP1 onwards, the installation involves a separate dedicated cluster for Integration, which will be referred to as the **INT** cluster. Whereas, the rest of the Foundry components will be present in a single cluster which will be referred to as the **SHARED** cluster.

*   For versions V9 ServicePack 5 or later, containers for the Foundry components run on the Red Hat Universal Base Image (UBI).
*   For versions V9 ServicePack 4 or earlier, containers for the Foundry components run on a Debian image.

There are two installation modes, Production and Non-Production. The Production mode is equipped to handle Production level traffic and Non-Production mode is for testing purposes.

During the installation you would be prompted to choose between the installation of a Production instance or a Non-Production instance. In general, for a given Azure subscription an organization installs one Production instance and multiple Non-Production instances (for example, dev, qa, uat, etc.).

*   When you select a Non-Production instance, every time you run it to setup another environment such as qa, uat, etc., only the Integration (INT) cluster gets created again, while the rest of the Foundry components are shared for all the Non-Production instances within the subscription.
*   When you select a Production instance, each installation is treated as a fresh installation where both the Shared cluster and the Integration cluster will be created again.

In case of a Non-Production setup the information about the shared resources which are required for installing the new environments is stored as [installation metadata](Frequently Asked Questions (FAQs).html#Installa) in Azure Cosmos DB and Azure Key Vault.

Salient Features

The VoltMX Foundry Containers on Azure Solution has the following features:

*   Creates a multi-layer architecture along with the Application Gateway in a Virtual Network making it secure.
*   Supports options to configure a custom DNS name, SSL cert support for secure communication, and includes Jumpbox for DevOps activities.

Overview for the Production and Non-Production Installations
------------------------------------------------------------

### Non-Production Mode

In a given Azure subscription, when you try to install a Non-Production instance, a complete VoltMX Foundry is created with both the clusters (Shared and Integration) for the first Non-Production installation. Subsequently, every time you run it to setup another non-production instance such as dev, qa, uat, etc., only the Integration (INT) cluster gets created again, while the rest of the Foundry components are shared for all the Non-Production instances within the same subscription. This integration instance is registered with the existing Foundry console created as part of the first installation.

### Production Mode

When you setup an Production account each installation is treated as a fresh installation where both the Shared cluster and the Integration cluster will be created for every install.

Prerequisites
-------------

1.  **Azure Account** - The setup script creates all the resources in this account. In your Azure subscription, your account should have the following permissions.
    
    **Azure Subscription Permissions**
    
    *   Your account must have the role of an **[Owner](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#owner)**.
    *   If your account has the role of a **Contributor**, you do not have adequate permissions. Contact your Azure Account Administrator for getting the required permissions.
    
    Steps to check the permissions of your Azure subscription:  
    
    1.  In the Azure Portal, select your account from the upper right corner, and select **My permissions**.  
        ![](Resources/Images/AzureAcc_3.png)
    2.  From the drop-down list, select **Subscription**. Select **Click here to view complete access details for this subscription.  
        ![](Resources/Images/AzureAcc_4.png)**
    3.  View the roles assigned to you. In the following image, the user has the role of the **Owner**, which means that the user has adequate permissions.  
        ![](Resources/Images/AzureAcc_5.png)
    
    **Azure Active Directory Permissions**
    
    To check your Azure AD permissions:
    
    1.  Select **Azure Active Directory**.  
        ![](Resources/Images/AzureAcc_1.png)
    2.  In Azure Active Directory, select **Overview** and look at your user information. You should have the role of a **Global Administrator** to proceed further. If you do not have this role, contact your administrator to assign this role to you.  
        ![](Resources/Images/AzureAcc_2.png)
    
2.  **Prerequisite packages** - The VoltMX Foundry Containers on Azure Solution does not need any additional software to be pre-installed, as the prerequisite packages are downloaded as a part of the setup scripts.

**The packages that are installed as part of the install scripts are: azure-cli, kubectl, jq, and sponge.**

To make sure that the script is able to download all the necessary software, you might need to open outbound connections to the respective sites. For more information, refer to the [Appendices](Appendices.md#Appendic) section of this document.

7.  **Generate an SSH Public Key** – Using the SSH protocol, you can connect and authenticate to remote servers and services. VoltMX Foundry setup expects an SSH key pair for authentication. The SSH public key is used for creating the Azure Virtual Machine, and for installing the VoltMX Foundry Setup. You need to specify the SSH Public Key in the properties file.
    
    On Ubuntu terminal, use the `ssh-keygen` command to generate SSH public and private key files that are created by default in the `~/.ssh` directory. This command can be executed from your local (Ubuntu) machine:
    
    `ssh-keygen -t rsa -b 2048` - This command is used to generate the SSH key pair using RSA encryption and a bit length of 2048. Name this key to be generated as **id\_rsa**.
    
    You must create and configure a key pair as you need to provide them in the [Configuration](#SSH) settings.
    
    The SSH keys need to be placed in **sshkeys** folder.
    
    You must leave the passphrase empty while generating the SSH key. VM logins are protected by other features such as the Google Authenticator.
    
8.  **Domain Name**\- You can have a Domain Name for the solution, which you can purchase from any third-party organizations, such as GoDaddy, and a proper DNS which you need to map to the public DNS of the Application Gateway. Refer to the [Appendices](Appendices.md#Appendic) section, for more details.
9.  **SSL certs**\- To secure the communication, acquire the SSL certs (Azure Application Gateway requires certificates in .pfx format) and provide them during the Installation process. These SSL certs must be associated with the Domain Name that the user has procured. Refer to the [Appendices](Appendices.md#Appendic) section on SSL cert pfx format conversion.
    *   Place the SSL certificate (in a **.pfx** file format) in the ssl-cert folder, and then provide the **Server Domain Name** and **AppGateway SSL Cert Password**.
    *   For enabling HTTPS on the back-end of appgateway, perform the following steps:
        1.  The SSL certificates with the cert data and key data should be in separate files (both in a **.pem** file format).
        2.  Save the Cert file as `ingress.pem`.
        3.  Save the Key file as `ingress_key.pem`.
        4.  Place both ingress.pem and ingress\_key.pem files in the **certs** folder of the installation directory.

It is recommended to use CA signed SSL cert to avoid any errors.

To execute the installation scripts, you must use Bash version 4 or later.

In case you are using [Marketing Catalog Microservice](#marketing-catalog-microservice) or [Campaign Microservice](#campaign-microservice) you can refer to their prerequisites mentioned ahead in the document.

VM Setup
--------

You need an Azure Virtual Machine to download the artifacts, and execute the setup scripts from the VM to install VoltMX Foundry on Azure.  
Follow these steps to create a VM through Azure Portal:

Click here to view the steps

1.  Login to the Azure Portal with the same account you configured for the role of the **Global Administrator.** Navigate to the **Virtual Machines** Tab.  
    Click on `+Add` button and select the Ubuntu Server image.  
    ![](Resources/Images/VM_Login.png)
2.  Select **Ubuntu Server 16.04 LTS** image and click on **Create**.  
    ![](Resources/Images/Ubuntu16.04.png)
3.  Proceed with the remaining steps in the wizard and provide the **SSH Public Key** where needed.  
    ![](Resources/Images/SSH_Ubuntu.PNG)

Pre-Installation Tasks
----------------------

Steps to Install VoltMX Foundry on MS Azure:

Click here to view the steps

1.  Fetch the **Public IP** of the Virtual Machine from Azure Portal.  
    ![](Resources/Images/VM_AzPortal.png)  
    Login to the VM by executing the following command in the Terminal:  
    `$ ssh azureuser@<public-ip> -i ~/.ssh/id_rsa`
2.  Switch to the root user, install the **unzip** package for extracting contents, and download the `voltmx-foundry-containers-azure.zip` file:<br>
    `$ sudo -s `<br>  
    `$ apt-get install unzip`   
    `$ curl -o voltmx-foundry-containers-azure.zip -L voltmx-foundry-containers-azure_9.2.0.1_GA.zip` 

3.  Unzip the downloaded artifacts:  
    **$ unzip voltmx-foundry-containers-azure.zip -d <directory-name>  
    **The structure of the document will be as shown below:  
    ![](Resources/Images/Folder_structure.PNG)

Configuration
-------------

Edit the input parameters in the following file based on the type of solution you want to create.

*   **<Installation Directory\>/conf/enterprise.properties** for Enterprise solution.  
    For more information, refer to the [sample.properties (zip)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs/raw/master/voltmxlibrary/foundry/zip/user_guide/sample.zip) file.

There are two types of input properties:

*   **User Defined Parameters**: These are the mandatory inputs for which you must specify values.
*   **Advanced Properties**: These are either populated by default or populated by the script during installation. Therefore, these generally do not need to be updated by you. These are available in the [sample.properties (zip)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs/raw/master/voltmxlibrary/foundry/zip/user_guide/sample.zip) file.

### List of properties under the User Defined Section

You need to provide the following parameters during Installation:

None of the values for parameters in the properties file should contain quotes.

  
| PARAMETER | DESCRIPTION | EXAMPLE |
| --- | --- | --- |
| AZURE\_SUBSCRIPTION\_ID| This is the Azure subscription ID. Steps to know this are in the [next section](#Appendices.md).|da28307f-55ae-42de-995a-fcc6608d1bd4|
| AZURE\_LOCATION| The region in which the AKS cluster should be created. For more details refer to, [Features and Supported Regions](Appendices.md#Features).| eastus|
| SERVICE\_PRINCIPAL\_CLIENT\_ID| Application ID of the service principal created for the Azure installation.| 716f6434-1315-4acb-3184-d9a23efa3613|
| SERVICE\_PRINCIPAL\_CLIENT\_SECRET| Password of the Service Principal.| 34a10627-308d-4697-9ea2-e379f8e33bb0|
| SERVICE\_PRINCIPAL\_OBJECT\_ID| Service principal object ID. Steps to know this are in the [next section](#servicePObj).| c3afcb93-46ed-21c4-98e0-7bb639297f21|
| TENANT\_ID| Tenant ID of the Azure account. Steps to know this are in the [next section](#tenantID).| a5a1f617-3b00-1e81-8190-c4a5136ba396|
| SSH\_PUBLIC\_KEY| This is required for creation of the AKS. Steps to create SSH key is provided in the [pre-requisites section](#Generate).You cannot use the same SSH key for all the Non-Production installations within a subscription.| ssh-rsa SAAWB3NzaC1yc2...|
| DATABASE\_TYPE| Specify the database type you want to use for hosting VoltMX Foundry on Azure.The VoltMX Foundry Containers on Azure Solution supports the MS SQL and MySQL Server Databases.| mysql|
| INTEGRATION\_DATABASE\_USER\_NAME| Specify a username for your INT database. This is required only if the selected database is of the type **sqlserver**. This is not required in Non-Production installation if a shared cluster is already created in the previous installation.| dbclient|
| INTEGRATION\_DATABASE\_PASSWORD| Specify a database password for your integration database. This is required only if the selected database is of the type **sqlserver**. This is not required in Non-Production installation if a shared cluster is already created in the previous installation. If you are using VoltMX Foundry 9.0.0.1 GA docker images, you must specify the same value for SHARED\_DATABASE\_PASSWORD and INTEGRATION\_DATABASE\_PASSWORD. Integration docker image does not support multiple passwords.You can use different passwords for your databases from VoltMX Foundry V9.0.1.0 GA onwards. The following special character $, \*, &, !, (, ), \\ are not supported in DB password.| VolT^MX123|
| ENVIRONMENT\_DB\_USER| Specify a username for your environment database. This is required only if the selected database is of the type **mysql** and the installation type is Non-Production.| dbclient|
| ENVIRONMENT\_DB\_PASSWORD| Specify a password for your environment database. This is required only if the selected database is of the type **mysql** and the installation type is Non-Production.| VolT^MX123|
| ENABLE\_REDIS\_SSL| Specifies whether an SSL connection must be enabled between the Authentication Service and REDIS.| trueSupported values are **true** and **false**.|
| APPGATEWAY\_SSL\_CERT\_PASSWORD| Password of the SSL PFX certificate.This is the Password is used for getting the **pfx** key for the SSL offloading.| Test@1234|
| Automatic Registration Details:| Auto registration inputs are not required to be provided for Non-Production if the Shared cluster is already created in a previous installation.| |
| AUTO\_REGISTRATION\_USER\_ID| The email ID used for VoltMX Foundry Registration. After the installation is complete, you can add more users from the Foundry console.| micheal.doe@xyz.com|
| AUTO\_REGISTRATION\_PASSWORD| The password used for VoltMX Foundry Registration.| Test@5264!|
| AUTO\_REGISTRATION\_FIRST\_NAME| The first name used for VoltMX Foundry Registration.| Micheal|
| AUTO\_REGISTRATION\_LAST\_NAME| The last name used for VoltMX Foundry Registration.| Doe|
| AZURE\_CDN\_ENABLED| Specify whether to install CDN for the apps component or not. If you have chosen a region where CDN Profile is not supported, CDN will not be configured. For more details refer to, [Features and Supported Regions](Appendices.md#Features).| true Supported values include: true or false.|
| ALERT\_NOTIFICATION\_ENABLED| Specify whether to enable notification for Alerts. For example sending an alert when the CPU Usage crosses 90% on integration pod, etc.| true Supported values include: true or false.|
| AZURE\_ACTION\_GROUP\_NAME| Specify name of the action group.| admin|
| USER\_EMAIL\_ID| Specify the default email ID to which alert notification should be sent.| micheal.doe@xyz.com|
| ARRAY\_TO\_WHITELIST\_IPS\_<br>TO\_ACCESS\_FILE\_SHARE| Specify the public Foundry IP of the machine where the installation script would be running. To specify multiple IPs use space separated values like ("w1.x1.y1.z1" "w2.x2.y2.z2" "w3.x3.y3.z3").| ("103.140.124.130")|
| COMMON\_RESOURCE\_GROUP| Specify the name of the resource group where few subscription level shared resources would be created. This needs to be a separate value for Production and for Non-Production. This is the resource group under which PCI related function app gets created.| VoltMXInfra|
| MARKETING\_CATALOG\_MS| Specify whether to enable Marketing Catalog Microservice or not.| false Supported values include: true or false.|
| MARKETING\_CATALOG\_RESOURCE\_GROUP| Specify the name of the resource group where the marketing catalog microservice resources would be created.| marketingcatalog-ms|
| MONGO\_PATH| Enter the path where Mongo Shell is installed.| /opt/mongodb-linux-x86\_64-ubuntu1804-4.2.10/bin|
| MONGO\_CONNECTION| Enter the connection string for Mongo Shell from Altas.| mongodb+srv://mongo-cluster-1.jonig.mongodb.net|
| MONGO\_USER\_NAME| Enter the Mongo Database user name which has been created earlier by you.| mongodbuser|
| MONGO\_PASSWORD| Enter the Mongo Database password which has been given by you while creating the mongodb user.| Root@123|
| MONGODB\_DBNAME| Enter the preferred Database name.| marketingcatalogdb|
| MONGODB\_CONNECTIONSTR| Provide mongo DB connection string.| Ensure that you are providing URL encoded mongodb username and password values if they contain special characters like \*,@,:,?,. etc. It can be formed by using the following string:<br>mongodb:/<MONGO_USER_NAME\>:<MONGO_PASSWORD\>@<cluster-shard-0\>:<port-number\>,<br><cluster-shard-1\>:<port-number\>,<br>  <cluster-shard-2\>:<port-number\>/ <br>  <MONGODB\_DBNAME\>?ssl=true&replicaSet=<value\>  <br>&authSource=admin  <br>&retryWrites=true  <br>&w=majority <br>mongodb://mongodbuser:Root%40123@   <br>mongo-cluster-1-shard-00-01.jonig.mongodb.net:27017,   <br>mongo-cluster-1-shard-00-02.jonig.mongodb.net:27017,   <br>mongo-cluster-1-shard-00-00.jonig.mongodb.net:27017/   <br>marketingcatalogdb?ssl=true&amp;   <br>replicaSet=atlas-qxcm8s-shard-0&amp;   <br>authSource=admin&amp;   <br>retryWrites=true&amp;   <br>w=majority <br>|
| EVENT\_HUB\_NAME\_SPACE| Enter the preferred Event hub namespace.| marketingcatalogkafkaapp|
| CAMPAIGN\_MS
| Specify whether to enable Campaign Microservice or not.| false Supported values include: true or false.|
| CAMPAIGN\_RESOURCE\_GROUP| Specify the name of the resource group where campaign microservice resources would be created.| nas-ssl-campaign|
| CAMPAIGN\_DB\_SERVER\_NAME| Specify the server name for your MySQL Database.| sqlcampaigndb|
| CAMPAIGN\_DB\_USER\_NAME| Enter the preferred Database username.| campaign|
| CAMPAIGN\_DB\_PASSWORD| Enter the preferred Database password.It should be a String containing a minimum of 8 characters and combination of alpha-numeric and non-alpha-numeric characters.| root@123|
| ARRAY\_TO\_WHITELIST\_IPS\_<br>TO\_ACCESS\_CAMPAIGN\_DB| Specify the outbound public IP of the machine where the installation script would be running. To specify multiple IPs you can use space separated values like ("w1.x1.y1.z1" "w2.x2.y2.z2" "w3.x3.y3.z3").| ("103.140.124.130")|
| New Relic Monitoring details:| New Relic Monitoring for AKS Cluster. Enable New Relic monitoring for Infrastructure monitoring. Make sure a proper new relic subscription is available before enabling this feature.| |
| NEW\_RELIC\_INFRA\_MONITORING\_ENABLED| Set to true if you have a new relic license key and if new relic infra monitoring needs to be enabled.This would monitor the node level performance metrics such as CPU, memory, etc.| true Supported values include: true or false.|
| NEW\_RELIC\_APP\_PERF\_MONITORING\_ENABLED| Set to true if you have a new relic license and if pod level monitoring needs to be enabled.This would monitor the pod level metrics.| true Supported values include: true or false.|
| NEW\_RELIC\_LICENSE\_KEY| Specify the new relic license key.| 9e3f3112fb39c130a75c407ab0b4ba153f30NRAL|
| AKS\_NODE\_COUNT| Specify the number of worker nodes in the cluster.This is the minimum number of nodes to be created in the Shared AKS agent pool.| 2|
| AKS\_MAX\_NODE\_COUNT| Specify the maximum number of worker nodes that can be provisioned by Autoscaling.The max number of nodes for the Shared AKS to create in case load increases.| 6|
| AKS\_MASTER\_NODE\_COUNT| This is the AKS Master Node Count. Specify the number of Master nodes to create.| 1|
| INTEGRATION\_AKS\_NODE\_COUNT| The minimum number of nodes to be created in the Integration AKS agent/node pool.| 2|
| INTEGRATION\_AKS\_MAX\_NODE\_COUNT| The maximum number of nodes to be created in the Integration AKS agent/node pool.| 6|


**User Defined Properties**

*   **Azure Subscription ID**, **Azure Service Principal ID Name**, **Azure Service Principal ID Secret**, **Service Principal Object ID**, and **Tenant ID** - Azure Subscription ID is a GUID that uniquely identifies your subscription to use Azure services. The Application needs the Service Principal to access or configure resources through the Azure Resource Manager (ARM) in the Azure Stack.  
    You must have an Azure account with the permissions of a **Global Administrator** and the role of a **User**. Without these privileges, it is not possible to create the AKS clusters (or other resources).  
    The following section describes fetching **Azure Subscription ID**, generating **Azure Service Principal ID Name**, **Azure Service Principal ID Secret**, **Service Principal Object ID**, and **Tenant ID**.

*  Click here for steps to get the Subscription ID
    
    *   Navigate to [http://portal.azure.com/](http://portal.azure.com/).
    *   Navigate to Browse.
    *   In the search box, begin to type subscription.
    *   Select Subscriptions from the search results.  
        ![](Resources/Images/ASP_1.png)
    
    Find the appropriate subscription to check your Azure subscription GUID.  
    ![](Resources/Images/ASP_2.png)
    
*  Click here for step to generate **Azure Service Principal** with Contributor role at subscription level
    
    Login to Azure Portal and click on **Cloud Shell** as shown:
    
    ![](Resources/Images/Execute_1.png)
    

    *   Execute:  
        `$ az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<subscription_id>/resourceGroups/<resource_group_name>"`
        ![](Resources/Images/Execute_3.png)
        After executing the above command, a json response will be displayed on the command prompt.

        <pre><code>{
        "appId": "APP\_ID",  
        "displayName": "ServicePrincipalName",  
        "name": "http://ServicePrincipalName",  
        "password": ...,  
        "tenant": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  
            }</code></pre>

    *   In the properties file of the **conf** directory:

        *   SERVICE\_PRINCIPAL\_CLIENT\_ID is the value of the appId.
        *   SERVICE\_PRINCIPAL\_CLIENT\_SECRET is the value of the password.
            The values of the SERVICE\_PRINCIPAL\_CLIENT\_ID and SERVICE\_PRINCIPAL\_CLIENT\_SECRET should not contain any quotation marks. For example:
        *   SERVICE\_PRINCIPAL\_CLIENT\_ID = a5afa829-525c-436c-ca4f-f442027cfd2e
        *   SERVICE\_PRINCIPAL\_CLIENT\_SECRET = cx4q44eq-fq7a-450v-zf41-4049183d1eb8
    
    *  Generating **Service Principal Object ID**  
        Login to Azure Portal and click on **Power Shell**. 

        *   Execute:  
            `$(Get-AzureADServicePrincipal -Filter "AppId eq ‘<Service_principle_client_ID>’").ObjectId`
            ![](Resources/Images/objectid.PNG)
        
    *  **Tenant ID** - Following are the steps to know your Tenant ID:
        *  Go to Portal.azure.com > Azure Active Directory.
        *  In the Overview section you can find the Tenant ID.
           ![](Resources/Images/tenant_id.png)
    

<!-- *   **Azure Location** - Azure location is the location of the Azure Resource group.

Azure AKS is supported in various Azure locations. For more information about Azure locations, refer to [Products available by region](https://azure.microsoft.com/en-gb/global-infrastructure/services?products=kubernetes-service&regions=all).

*   **SSH\_PUBLIC\_KEY** - You need this to configure all the Linux machines with the SSH RSA public key string.
    *   **ID\_RSA\_PASSPHRASE** - The passphrase of the SSH key.
        
        It is advised to avoid having a passphrase for the SSH key.
        
        You must use a single set of SSH keys (id\_rsa.pub and id\_rsa) for the entire subscription to use a single common resource group for PCI. If a new set of SSH keys is being used for cloud creation then you must create a new common resource group for PCI. To create a new common resource group for PCI you must change the default value of the variable **COMMON\_RESOURCE\_GROUP** in the properties file.
        
        For information on how to Generate an SSH public key, click [here](VoltMX Foundry on Azure.html#Generate).
        
*   **VNET\_ADDRESS\_SPACE**: Provide custom address space of virtual network, if required.
*   **AKS\_SUBNET\_ADDRESS\_SPACE**: If custom address space of virtual network is configured, then set the value of AKS subnet address space.
*   **APP\_GATEWAY\_SUBNET\_ADDRESS\_SPACE**: If custom address space of virtual network is configured, then set the value of azure application gateway subnet address space.
*   **JUMPBOX\_SUBNET\_ADDRESS\_SPACE**: If custom address space of virtual network is configured, then set the value of jumpbox subnet address space.
*   **DNS\_SERVICE\_IP**: If custom address space of virtual network is configured, then set the IP address value of the DNS service.
*   **SERVICE\_CIDR**: If custom address space of virtual network is configured, then set the IP address value of the Kubernetes internal service.
    
    If custom address space of virtual network is configured then make sure AKS\_SUBNET\_ADDRESS\_SPACE, APP\_GATEWAY\_SUBNET\_ADDRESS\_SPACE, JUMPBOX\_SUBNET\_ADDRESS\_SPACE, DNS\_SERVICE\_IP, SERVICE\_CIDR IP address do not overlap and at the same time exist in the virtual network address space.
    
*   **IS\_DB\_SSL\_ENABLED**: Flag for enabling or disabling SSL connection to access MySQL DB.
    
    If IS\_DB\_SSL\_ENABLED is set to true then IS\_SSL\_ENABLED should also be set to true.
    
*   **IS\_SSL\_ENABLED** – Flag to enable or disable SSL on VoltMX Foundry setup. This flag is set to **true** by default. If you do not require SSL, set this parameter to **false**.
    *   Place the SSL certificate (in a **.pfx** file format) in the ssl-cert folder, and then provide the **Server Domain Name** and **AppGateway SSL Cert Password**.
*   **AZURE\_LOG\_ANALYTICS\_ENABLED** – Flag to enable Azure Operations Management Suite (OMS) Log analytics solution.
*   **AZURE\_LOG\_ANALYTICS\_SERVICE\_TIER** - Service tier for Azure log analytics. The allowed values are **Free**, **Standalone**, and **PerNode**. The **Free** Tier is applicable only if you created your Azure account before 02-April-2018. This tier has a 500MB limit on the amount of data collected daily and also has a 7-day limit on data retention. If you created your Azure Account after 02-April-2018, you only have the **Standalone** or **PerNode** options. If you use the **Free** tier, the installation throws an error. For information about the pricing of the **Standalone** and **PerNode** options, refer to the [Azure pricing for Log Analytics](https://azure.microsoft.com/en-in/pricing/details/log-analytics/).
*   **AZURE\_LOG\_ANALYTICS\_DATA\_RETENTION\_PERIOD** – This is the data retention period for the logs in log analytics solution (minimum data retention period: 7, maximum data retention period : 738). This value is required if log analytics is enabled. For **Free** tier, data retention period is not allowed for more than 7 days. For **Standalone** and **PerNode** tiers, data is retained at no charge for the first 31 days. There is no daily limit for data upload for **Standalone** or **PerNode** tiers.
*   **DB\_SKUTIER**: For MySQL DB, the Skutier can be **Basic**, **GeneralPurpose**, or **MemoryOptimized** tier. The default is set to GeneralPurpose.
*   **DB\_SKUCAPACITY**: Specify the vCore capacity. If Skutier is Basic, the possible values include 1,2. If Skutier is GeneralPurpose the possible values include 2, 4, 8, 16, 32 or 64. If Skutier is MemoryOptimized the possible values include 2, 4, 8, 16, 32.
*   **DB\_SKUFAMILY**: Specify the Computer Generation. If Skutier is Basic the possible values include Gen4, Gen5. If Skutier is GeneralPurpose the possible values include Gen4, Gen5. If Skutier is MemoryOptimized the possible values include Gen5.
*   **DB\_SKUNAME** = Specify the Skutier name in the following format: **TierPrefix\_family\_capacity**. For example, B\_Gen5\_1, GP\_Gen5\_16, MO\_Gen5\_32.
*   **DB\_SKUSIZEMB**: Specify the max provisioned storage size required for the server in megabytes. For example, 5120.
*   **MYSQL\_VERSION**: Specify the MySQL version. Currently supported MySQL versions are 5.6, and 5.7.
*   **DB\_BACKUP\_RETENTION\_DAYS**: Specify the desired backup retention period in days. If PCI is enabled choose the value as 31 days. If PCI is disabled choose the value as 15 days.
*   **DB\_GEO\_REDUNDANT\_BACKUP**: To configure the Geo-Redundancy backup for DB snapshots, set the value to **Enabled**. The default value is set as Disabled.

The DB\_SKUTIER, DB\_SKUCAPACITY, DB\_SKUFAMILY, DB\_SKUNAME, DB\_SKUSIZEMB, MYSQL\_VERSION, DB\_BACKUP\_RETENTION\_DAYS, and DB\_GEO\_REDUNDANT\_BACKUP properties are specific to the **MySQL Database**.

*   **DATABASE\_PORT**: Specify the Database Port. For MySQL it is 3306. For MS SQL it is 1433.
*   **AZURE\_AUTH\_REDIS\_CACHE\_NAME**: Name for the cache. Name can only contain letters, numbers, and hyphens. The first and last characters must each be a letter or a number. Consecutive hyphens are not allowed.
*   **AZURE\_AUTH\_REDIS\_SKU\_TYPE**: The possible values are **Basic**, **Standard**, **Premium**.
*   **AZURE\_AUTH\_REDIS\_SKU\_FAMILY**: The possible values are: '**C**', '**P**'; where C = Basic/Standard, and P = Premium.
*   **AZURE\_AUTH\_REDIS\_SKU\_CAPACITY** : The possible value for this can only be a numeric value. For the C (Basic/Standard) family: (0, 1, 2, 3, 4, 5, 6). For the P (Premium) family: (1, 2, 3, 4).
*   **AZURE\_AUTH\_REDIS\_CACHE\_EVICTION\_POLICY**: The available Eviction policies are **volatile-lru**, **allkeys-lru**, **volatile-random**, **allkeys-random**, **volatile-ttl**, and **noeviction**. The default value is set to volatile-lru.
*   **AZURE\_SERVER\_REDIS\_CACHE\_NAME**: Name for the cache. Name can only contain letters, numbers, and hyphens. The first and last characters must each be a letter or a number. Consecutive hyphens are not allowed. For example: kfrediscacheserver.
*   **AZURE\_SERVER\_REDIS\_SKU\_TYPE**: The possible values are **Basic**, **Standard**, **Premium**.
*   **AZURE\_SERVER\_REDIS\_SKU\_FAMILY**: The possible values are: '**C**', '**P**'; where C = Basic/Standard, and P = Premium.
*   **AZURE\_SERVER\_REDIS\_SKU\_CAPACITY**: The possible value for this can only be a numeric value. For the C (Basic/Standard) family: (0, 1, 2, 3, 4, 5, 6). For the P (Premium) family: (1, 2, 3, 4).
*   **AZURE\_SERVER\_REDIS\_CACHE\_EVICTION\_POLICY**: The available Eviction policies are **volatile-lru**, **allkeys-lru**, **volatile-random**, **allkeys-random**, **volatile-ttl**, and **noeviction**. The default value is set to volatile-lru.
*   **AZURE\_SERVER\_REDIS\_CONNECTION\_MINIMUM\_IDLE\_SIZE**: The value for Minimum idle Redis connection amount. The default value is set to 5.
*   **AZURE\_SERVER\_REDIS\_IDLE\_CONNECTION\_TIMEOUT\_IN\_MILLISECONDS**: The value for Redis Idle connection timeout. Default value is set to 10000.
*   **AZURE\_SERVER\_REDIS\_CONNECTION\_POOL\_SIZE**: This is the maximum pool size for Redis connection. Default value is set to 64.
*   **AZURE\_SERVER\_REDIS\_CONNECTION\_TIMEOUT**: The value for Redis connection timeout in milliseconds. Default value is set to 10000.
*   **JUMPBOX\_ENABLED** - Flag to create Jumpbox as a part of the VoltMX Foundry setup. Set this to false if you do not require Jumpbox. Refer to [Appendices](#Appendic) for more details on how to connect to the Azure Kubernetes through Jumpbox.
    
    After completion of installation, you  must whitelist the URLs that the DevOps would use to Log-in.
    
*   **AKS\_MULTI\_AZ\_ENABLED**: Specify either true or false to enable or disable the deployment of AKS across multiple availability zones. Azure supports this feature only in [specific regions](https://docs.microsoft.com/en-us/azure/aks/availability-zones). If a region does not support AKS across multiple availability zones, setting this value to true has no effect.
*   **NUM\_INGRESS\_PODS**: Specify the number of ingress pods, if required. The default and recommended value is 2.

For the **INTEGRATION** Component:

*   **NUM\_INTEGRATION\_PODS**: The number of minimum pods. For example, the values can be set to: 1, 2, etc.
*   **INTEGRATION\_POD\_MAX\_REPLICAS**: The maximum number of pods to be scaled. Provide an integer value.
*   **INTEGRATION\_POD\_CPU\_USAGE\_THRESHOLD**: The scaling of pods will be triggered if CPU utilization value in percentage crosses the user given threshold value. For example, the values can be set to: 80, 90, etc.
*   **INTEGRATION\_POD\_CPU\_USAGE\_REQUESTS**: For pod placement, AKS looks for a node that has enough CPU to handle the pod requests. For example, the values can be set to: 300m, 400m, etc.
*   **INTEGRATION\_POD\_MEMORY\_USAGE\_THRESHOLD**: The memory utilization threshold in percentage that is required to trigger scaling. For example, the values can be set to: 80, 90, etc.
*   **INTEGRATION\_POD\_MEMORY\_USAGE\_REQUESTS**: For pod placement AKS looks for a node that has enough memory according to the requests configuration. For example, the values can be set to: 1G, 2G, etc.
*   **INTEGRATION\_POD\_MEMORY\_USAGE\_LIMIT**: The maximum amount of memory that can be allocated to a pod in the node. For example, the values can be set to: 3.2G, 3.5G, etc.

For the **ENGAGEMENT** Component:

*   **NUM\_ENGAGEMENT\_PODS**: The number of minimum pods. For example, the values can be set to: 1, 2, etc.
*   **ENGAGEMENT\_POD\_MAX\_REPLICAS**: The maximum number of pods to be scaled. For example, the values can be set to: 1, 2, etc.
*   **ENGAGEMENT\_POD\_CPU\_USAGE\_THRESHOLD**: The scaling of pods will be triggered if CPU/memory utilization value in percentage crosses the user given threshold value. For example, the values can be set to: 80, 90, etc.
*   **ENGAGEMENT\_POD\_CPU\_USAGE\_REQUESTS**: For pod placement, AKS looks for a node that has a CPU that can handle the pods, according to the requests. For example, the values can be set to: 300m, 400m, etc.
*   **ENGAGEMENT\_POD\_MEMORY\_USAGE\_THRESHOLD**: The memory utilization threshold in percentage that is required to trigger scaling. For example, the values can be set to: 80, 90, etc.
*   **ENGAGEMENT\_POD\_MEMORY\_USAGE\_REQUESTS**: For pod placement AKS looks for a node that has enough memory according to the requests configuration. For example, the values can be set to: 1G, 2G, etc.
*   **ENGAGEMENT\_POD\_MEMORY\_USAGE\_LIMIT**: The maximum amount of memory that can be allocated to a pod in the node. For example, the values can be set to: 3.2G, 3.5G, etc.

For the **IDENTITY** component:

*   **NUM\_IDENTITY\_PODS**: The number of minimum pods. For example, the values can be set to: 1, 2, etc.
*   **IDENTITY\_POD\_MAX\_REPLICAS**: The maximum number of pods to be scaled. For example, the values can be set to: 1, 2, etc.
*   **IDENTITY\_POD\_CPU\_USAGE\_THRESHOLD**: The scaling of pods will be triggered if CPU/memory utilization value in percentage crosses the user given threshold value. For example, the values can be set to: 80, 90, etc.
*   **IDENTITY\_POD\_CPU\_USAGE\_REQUESTS**: For pod placement, AKS looks for a node that has a CPU that can handle the pods, according to the requests. For example, the values can be set to: 300m, 400m, etc.
*   **IDENTITY\_POD\_MEMORY\_USAGE\_THRESHOLD**: The memory utilization threshold in percentage that is required to trigger scaling. For example, the values can be set to: 80, 90, etc.
*   **IDENTITY\_POD\_MEMORY\_USAGE\_REQUESTS**: For pod placement AKS looks for a node that has enough memory according to the requests configuration. For example, the values can be set to: 1G, 2G, etc.
*   **IDENTITY\_POD\_MEMORY\_USAGE\_LIMIT**: The maximum amount of memory that can be allocated to a pod in the node. For example, the values can be set to: 3.2G, 3.5G, etc.

For the **CONSOLE** component:

*   **NUM\_CONSOLE\_PODS**: The number of minimum pods. For example, the values can be set to: 1, 2, etc.
*   **CONSOLE\_POD\_MAX\_REPLICAS**: The maximum number of pods to be scaled. For example, the values can be set to: 1, 2, etc.
*   **CONSOLE\_POD\_CPU\_USAGE\_THRESHOLD**: The scaling of pods will be triggered if CPU/memory utilization value in percentage crosses the user given threshold value. For example, the values can be set to: 80, 90, etc.
*   **CONSOLE\_POD\_CPU\_USAGE\_REQUESTS**: For pod placement, AKS looks for a node that has a CPU that can handle the pods, according to the requests. For example, the values can be set to: 300m, 400m, etc.
*   **CONSOLE\_POD\_MEMORY\_USAGE\_THRESHOLD**: The memory utilization threshold in percentage that is required to trigger scaling. For example, the values can be set to: 80, 90, etc.
*   **CONSOLE\_POD\_MEMORY\_USAGE\_REQUESTS**: For pod placement AKS looks for a node that has enough memory according to the requests configuration. For example, the values can be set to: 1G, 2G, etc.
*   **CONSOLE\_POD\_MEMORY\_USAGE\_LIMIT**: The maximum amount of memory that can be allocated to a pod in the node. For example, the values can be set to: 3.2G, 3.5G, etc.

For the **APIPORTAL** component:

*   **NUM\_API\_PORTAL\_PODS**: The number of minimum pods. For example, the values can be set to: 1, 2, etc.
*   **APIPORTAL\_POD\_MAX\_REPLICAS**: The maximum number of pods to be scaled. For example, the values can be set to: 1, 2, etc.
*   **APIPORTAL\_POD\_CPU\_USAGE\_THRESHOLD**: The scaling of pods will be triggered if CPU/memory utilization value in percentage crosses the user given threshold value. For example, the values can be set to: 80, 90, etc.
*   **APIPORTAL\_POD\_CPU\_USAGE\_REQUESTS**: For pod placement, AKS looks for a node that has a CPU that can handle the pods, according to the requests. For example, the values can be set to: 300m, 400m, etc.
*   **APIPORTAL\_POD\_MEMORY\_USAGE\_THRESHOLD**: The memory utilization threshold in percentage that is required to trigger scaling. For example, the values can be set to: 80, 90, etc.
*   **APIPORTAL\_POD\_MEMORY\_USAGE\_REQUESTS**: For pod placement AKS looks for a node that has enough memory according to the requests configuration. For example, the values can be set to: 1G, 2G, etc.
*   **APIPORTAL\_POD\_MEMORY\_USAGE\_LIMIT**: The maximum amount of memory that can be allocated to a pod in the node. For example, the values can be set to: 3.2G, 3.5G, etc.
*   **AZURE\_FILE\_SHARE\_SECRET**: The name for the Kubernetes secret used by integration pods to access Azure file share. The default value is azure-file-share-secret.
*   **MOUNT\_PATH**: Enter the Mount path of the Integration pods required to store data. The default value is set to `/mnt/shared`.
*   **AZURE\_FILE\_SHARE\_ENABLED**: The flag to enable or disable Azure file share on the VoltMX Foundry setup. This flag is set to true by default.
*   **AZURE\_FILE\_SHARE\_STORAGE\_ACCOUNT**: The Azure storage account name must be between 3 and 24 characters in length and must contain alpha-numeric characters in lowercase. The default value is set to voltmxfs.
*   **AZURE\_FILE\_SHARE\_DIRECTORY\_NAME**: The Azure file share directory name must be between 1 and 255 characters in length and must not contain the following special characters **\\/:|<>\*?**. The default value is set to voltmx.
*   **STORAGE\_ACCOUNT\_KIND**: Enter the value for the kind of Storage account. The possible values include StorageV2 and FileStorage. The default value is set to StorageV2 as FileStorage Storage account does not support Zone Redundant Storage(ZRS).
*   **STORAGE\_ACCOUNT\_REPLICATION\_TYPE**: If Storage Account kind is StorageV2, possible values include Standard\_LRS, Standard\_GRS, Standard\_RAGRS, Standard\_ZRS, Premium\_LRS, Premium\_ZRS, Standard\_GZRS, and Standard\_RAGZRS. If Storage Account kind is FileStorage, possible values include Premium\_LRS. Default value is set to Standard\_ZRS.

Only few regions support Standard\_ZRS. Therefore, you must ensure that the region entered in the AZURE\_LOCATION param supports Standard\_ZRS.

*   **ACCESS\_TIER**: Only the Standard performance has access tiers. The possible values for access tiers include Hot and Cool. The default value is set to Cool.
*   **AZURE\_FILE\_SHARE\_NAME**: The file share name must be between 3 and 63 characters in length and can use numbers, lower-case letters, and hyphens only. The default value is voltmxfileshare.
*   **AZURE\_FILE\_SHARE\_QUOTA**: The maximum size of the share in Gigabytes. You can edit the value later in Azure portal. If performance is Standard then its value must be greater than 0, and less than or equal to 5120(5 Terabytes). If performance is Premium then its value must be greater than 0, and less than or equal to 102400(100 Terabytes). The default value is set to 1024.

![](Resources/Images/AzureFileSharequota.png)

*   **AZURE\_FILE\_SHARE\_BACK\_UP\_VAULT**: The Recovery Services vault name must be between 2 and 50 characters in length, must start with a letter, and should consist only of letters, numbers, and hyphens. The default value is VoltMXRecoveryServiceVault.
*   **AZURE\_STORAGE\_ACCOUNT\_NAME**: The Azure storage account name must be between 3 and 24 characters in length, must contain only lowercase alphabets. The default value is voltmx.

The default values for all the above parameters are given in the properties file. -->

Installation
------------

Steps to Install VoltMX Foundry on MS Azure

1.  Create an Ubuntu VM or you can use an existing VM. For more details, refer to [VM Setup](#vm-setup).
2.  Extract the downloaded installation zip on that VM. For more details, refer to [Pre-Installation Tasks](#pre-installation-tasks).

    ![](Resources/Images/installfolder.png)

4.  Modify/Enter the required properties in the **<Installation Directory\>/conf/enterprise.properties** file. For more details, refer to [Configuration](#configuration).
5.  Run the installation using command bash **install-foundry.sh**.

    ![](Resources/Images/new_install1.png)

7.  Choose between a Non-Production or a Production installation mode. In the following prompt a **Non-Production** mode has been chosen. You can choose Production mode and follow a similar flow to complete the installation.
8.  Specify a label for the Non-Production installation environment. A label is just a simple string such as dev, qa, uat etc., this will also be appended to the Azure resources created for this environment to identify them easily.
    
    ![](Resources/Images/new_install2.png)
    
    This step is specific to Non-Production mode.
    
9.  The installation begins and towards the end of the installation the following prompt will be displayed.

    ![](Resources/Images/new_install3_edited.png)

11.  Once the domains are mapped to the IPs/CNAME as shown in the prompt, validate the mappings and continue the installation by re-running **install-foundry.sh**. The CDN configuration will be done and the following prompt will be displayed to complete the manual steps of CDN configuration.
    
     ![](Resources/Images/CdnSuccessful.png)
    
     You must ensure that the domain mapping must reflect with correct mapping from the script client box using **nslookup**.
    
12.  As shown in the prompt, follow the steps in [Setting up Azure Content Delivery Network (CDN)](VoltMX_Foundry_on_Azure.md#Setup) to perform a custom domain HTTPS configuration.
13.  Re-run the installation by running the **install-foundry.sh** again to complete the post-installation tasks.
14.  At the end of the installation, the following message is displayed which contains the Foundry Console URL. Copy and paste the displayed link on to a browser. Press Enter. The Foundry Console is displayed.

     ![](Resources/Images/new_install4.png)


Post Installation
-----------------

After the installation and CDN configuration is complete, you can access the Foundry Console using the link displayed on the screen.

1.  Take a backup and keep the installation logs from **<Installation Directory>/logs directory**.
2.  Copy and paste the displayed link on to a browser. Press Enter. The Foundry Console is displayed.
3.  Login with the registration credentials provided in the properties file and navigate across various pages. Following is a screenshot of the Environments tab from an Azure test setup after installing 3 environments, namely DEV, UAT2, and QA4.
    
    ![](Resources/Images/Environment_Page.png)
    

You can now publish apps and check the runtime services.


Configuring Iris to Connect to VoltMX Foundry on Azure
------------------------------------------------------------

For details about connecting to VoltMX Foundry Console through Iris, refer to [Connecting to VoltMX Foundry](./../../../Iris/iris_user_guide/Content/Connect_to_VoltMXFoundry.md).

Multiple Node Pools in Azure Kubernetes Service
-----------------------------------------------

In Azure Kubernetes Service (AKS), nodes that have the same configuration are grouped into node pools, which contain virtual machines that run your apps. To support apps that have different computing or storage requirements, you can use multiple node pools in a single cluster. This feature enables higher control over how you can create and manage multiple node pools.

Currently, the Foundry installation uses an AKS cluster with a single node pool to deploy applications. This single node pool contains all the application components such as **identity**, **integration**, **console**, **vpns**, and the **api portal**. For multiple environments, Foundry creates multiple AKS clusters with all the resources.

To optimize the effort of operating and maintaining multiple clusters, Foundry on Azure now uses the multi node pool architecture. In this architecture, multiple node pools are created in a single AKS Cluster. This AKS cluster contains a node pool named `Shared`, which contains components that are shared by all environments, such as **console**, **identity**, and the **api portal**. In addition to the shared components, every node pool in the cluster contains the **vpns** and **integration** components. An Ingress controller is configured to implement host-based routing to the respective node pool.

Updating the Azure Kubernetes Service Cluster configuration
-----------------------------------------------------------

You need to have the current config files if you want to update the AKS cluster configuration. Once the installation is complete, take a backup of the unzipped directory where you installed the `voltmx-foundry-containers-azure.zip` to perform further updates to the AKS clusters.

If you do not have a backup of the unzipped directory, updating the AKS cluster is difficult.

<a id="Setup"></a>

Setting up Azure Content Delivery Network (CDN)
-----------------------------------------------

A Content Delivery Network (CDN) is a distributed network of servers that can efficiently deliver web content to users. To minimize latency, CDNs store cached content on edge servers in Point-Of-Presence (POP) locations that are close to end users.

Azure Content Delivery Network (CDN) offers a global solution for developers to rapidly deliver high-bandwidth content to users by caching the content at strategically placed physical nodes across the world.

Azure CDN SKU for AKS cluster is set to Premium Verizon, which supports configuration of cache rules for VoltMX Foundry Apps.

### Enable CDN on Azure AKS cluster

Follow these steps to enable CDN in your AKS cluster .

1.  Set the value of `AZURE_CDN_ENABLED` to **true** in the properties file (trail.properties /enterprise.properties).
    
    ![](Resources/Images/ClamAV/CDN1.png)
    
2.  Set the CDN Endpoint:
    *   FOR SSL ENABLED CLOUD (`IS_SSL_ENABLED = true`), after creating the CDN endpoint, map the CDN endpoint to a custom domain name.
        
        ![](Resources/Images/ClamAV/CDN2.png)
        
    *   FOR SSL DISABLED CLOUD (IS\_SSL\_ENABLED = false), no mapping of server domain name is required.
        

    Once you create the CDN profile and endpoint, follow these steps to manually configure the CDN settings in the Azure portal:

1.  Open the Azure portal ([portal.azure.com](http://portal.azure.com/)) and login using your Microsoft account credentials.
    
    ![](Resources/Images/ClamAV/CDN3.png)
    
2.  Select **Resource groups** from the left navigation pane.
    
    ![](Resources/Images/ClamAV/CDN4.png)
    
    All existing resource groups appear.  
    Select the resource group in which the AKS Cluster is created.
    
    ![](Resources/Images/ClamAV/CDN5.png)
    
3.  If the cloud is SSL enabled, open **CDN Endpoint** from the list of resources in the Azure Resource Group.
    
    ![](Resources/Images/ClamAV/CDN6.png)
    
4.  Click **Custom Domain**.The Custom Domain page appears.
    
    ![](Resources/Images/ClamAV/CDN7.png)
    
5.  Select ON to enable HTTPS for custom domain.
    
    ![](Resources/Images/ClamAV/CDN8.png)
    

### Configuring Caching Rules

1.  Go to **CDN profile** from the list of resources available in the Azure Resource Group (having the created AKS cluster).  
    ![](Resources/Images/ClamAV/CDN9.png)
2.  Click **Manage** from the top navigation bar.
    
    ![](Resources/Images/ClamAV/CDN10.png)
    
3.  Configure all the rules in the **CDN Manage Console**.
    
    ![](Resources/Images/ClamAV/CDN11.png)
    
4.  From the **HTTP Large** list, select `cache settings -> query string caching` .  
    ![](Resources/Images/ClamAV/CDN12.png)
5.  Select **no-cache** as the **query string caching** and click **Update**.  
    ![](Resources/Images/ClamAV/CDN13.png)
6.  From the **HTTP Large** list, select **Rules Engine**.  
    ![](Resources/Images/ClamAV/CDN14.png)
7.  Configure all the required rules.  
    ![](Resources/Images/ClamAV/CDN15.png)
    *   Rule 1  
        ![](Resources/Images/ClamAV/rule1.png)
    *   Rule 2  
        ![](Resources/Images/ClamAV/rule2.png)
    *   Rule 3  
        ![](Resources/Images/ClamAV/rule3.png)
    *   Rule 4  
        ![](Resources/Images/ClamAV/rule4.png)
    *   Rule 5  
        ![](Resources/Images/ClamAV/rule5.png)
    *   Rule 6  
        ![](Resources/Images/ClamAV/rule6.png)
    *   Rule 7  
        ![](Resources/Images/ClamAV/rule7.png)
    *   Rule 8  
        ![](Resources/Images/ClamAV/rule8.png)
    *   Rule 9  
        ![](Resources/Images/ClamAV/rule9.png)
    *   Rules Order![](Resources/Images/ClamAV/rules_order.png)

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

    Use the following format to set the values for the frequencies of `clamscan_cron_schedule` and `clamscanlogpush_cron_schedule` in the properties file (trail.properties /enterprise.properties). 
<pre><code>
*  *  *  *  *
|  |  |  |  |
|  |  |  |  |
|  |  |  | +---- Day of the Week   (range: 1-7, 1 standing for Monday)
|  |  | +------ Month of the Year (range: 1-12)
|  | +-------- Day of the Month  (range: 1-31)
| +---------- Hour (range: 0-23)
+------------ Minute (range: 0-59)
* = any value
</code></pre>

For example, if you configure the crontab timing as 00 16 \* \* \*, this indicates that the crontab runs every day at 16:00:00 (UTC).

*   You must maintain a minimum gap of 02:30 hrs. between the `clamscan_cron_schedule` and `clamscanlogpush_cron_schedule`.
*   All cron job timings follow UTC timezone.


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

### Edit the cron job

*   Use the following command to view existing cron jobs on the VM.  
    `crontab -l`
    
    ![](Resources/Images/ClamAV/CLAMAV1.png)
    
*   Use the `crontab -e` command to open the crontab list in edit mode.  
    

### Edit the ClamAV conf file

The `freshclam.conf` file configures the ClamAV Database Updater.

*   Go to the `etc/clamav/` directory.
*   Open the `freshclam.conf` file in any editor to make any required changes to the conf file.

### Accessing Logs in the Azure Storage Account

All the logs generated by CLAMAV are pushed to the Azure Storage Account.

1.  Log on to the Azure portal (`[portal.azure.com](http://portal.azure.com/)`) using your Microsoft account credentials.
    
    ![](Resources/Images/ClamAV/CLAMAV2.png)
    
2.  Select **Resource Groups** from the left navigation pane.
    
    ![](Resources/Images/ClamAV/CLAMAV3.png)
    

    All existing resource groups appear.  
    Select the resource group in which the AKS Cluster is created.

    ![](Resources/Images/ClamAV/CLAMAV4.png)

6.  Select the storage account from the list of resources available in the resource group.
7.  Click **Blobs** to see all the containers available in the storage account.
    
    ![](Resources/Images/ClamAV/CLAMAV5.png)
    
8.  Select the **clamavlogs** container from the list of containers available in the storage account.
    
    ![](Resources/Images/ClamAV/CLAMAV6.png)
    
    This shows all the log files pushed by ClamAV from the virtual machine.
    
9.  Click **Download** to view the logs in the file.
    
    ![](Resources/Images/ClamAV/CLAMAV7.png)
    
10.  Unzip the downloaded .zip file and extract the content.
    
    You can now view all the logs that are pushed by CLAMAV from virtual machine.
    

Configuring OSSEC Intrusion Detection
-------------------------------------

OSSEC is an open source Host-based Intrusion Detection System (HIDS). It has a powerful correlation and analysis engine, and can perform integrating log analysis, file integrity checking, Windows registry monitoring, centralized policy enforcement, rootkit detection, real-time alerting, and active response.

OSSEC runs as a daemon process. It notifies through alert logs when intrusion attacks occur. These alert logs are pushed to the **osseclogs** container in the storage account in the Azure Resource Group in which AKS cluster is created.

Provide the following inputs in the properties file to enable OSSEC.

<!-- ### Generating SSH Keys

Using the SSH protocol, you can connect and authenticate to remote servers and services.

On Ubuntu terminal, use `$cd ~/.ssh` command to set `~/.ssh` as the current directory to generate the SSH public and private key files.

Use the `ssh-keygen -t rsa -b 2048` to generate the SSH key pair using RSA encryption and a bit length of 2048.

Name the key to be generated as id\_rsa. -->

### OSSEC Installation steps

1.  Enable the `INSTALL_OSSEC` flag in the properties file (trial.properties /enterprise.properties):
    
    ![](Resources/Images/ClamAV/OSSEC1.png)
    
2.  As OSSEC is a daemon process, it continuously detects intrusion activities and stores alerts in `alerts.log` file. A cron job is configured to push the alerts from `/var/ossec/logs/alerts/alerts.log` to the Azure Storage Account.

    Configure the `cronjob osseclogpush_cron_schedule` in the properties file (trail.properties /enterprise.properties) to set the frequency value of the cron job. Configure the Crontab timing in the following format: 

     <pre><code>
        *  *  *  *  *
        |  |  |  |  |
        |  |  |  |  |
        |  |  |  | +---- Day of the Week   (range: 1-7, 1 standing for Monday)
        |  |  | +------ Month of the Year (range: 1-12)
        |  | +-------- Day of the Month  (range: 1-31)
        | +---------- Hour (range: 0-23)
        +------------ Minute (range: 0-59)
        \* = any value
     </code></pre>   

    For example, if you configure the crontab timing as 00 16 \* \* \*, this indicates that the crontab runs every day at 16:00:00 (UTC).

    *   You can modify the default values of the cron job, if required.
    *   All cron job timings follow UTC timezone.

3.  Place your SSH private key in the sshkeys folder with name id\_rsa.

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
        

### Edit cron jobs

*   To view the existing cron jobs use the following command on VM.
    
    $ crontab -l
    
    ![](Resources/Images/ClamAV/OSSEC2.png)
    
*   Use the `crontab -e` command to open the crontab list in edit mode.  
    

### Accessing Logs in Azure Storage Account

All the logs generated by OSSEC are pushed to the Azure Storage Account.

1.  Log on to the Azure portal (`[portal.azure.com](http://portal.azure.com/)`) using your Microsoft account credentials..
    
    ![](Resources/Images/ClamAV/OSSEC3.png)
    
2.  Select **Resource groups** from the left navigation pane.
    
    ![](Resources/Images/ClamAV/OSSEC4.png)
    
    All existing resource groups appear.  
    Select the resource group in which the AKS Cluster is created.
    
    ![](Resources/Images/ClamAV/OSSEC5.png)
    
3.  Select the storage account from the list of resources available in the resource group.
4.  Click **Blobs** to see all the containers available in the storage account.
    
    ![](Resources/Images/ClamAV/OSSEC6.png)
    
5.  Select the **osseclogs** container from the list of containers available in the storage account.
    
    ![](Resources/Images/ClamAV/OSSEC7.png)
    
    The page displays the log files pushed by OSSEC from Virtual Machine.
    
6.  Click **Download** to view the logs file.
    
    ![](Resources/Images/ClamAV/OSSEC8.png)
    
    You can now view all the logs that are pushed by OSSEC from the virtual machine.
    
    Follow these steps to edit the `preloaded-vars.conf` file to give customized inputs (other than defaults) to install OSSEC.
    
    1.  Login to the specific Virtual Machine (node) using SSH keys in the terminal.
    2.  Go to the `/home/azureuser/ossec-hids-2.9.0/etc/` directory by using following command.
        
        `$ cd /home/azureuser/ossec-hids-2.9.0/etc/`
        
    3.  Open the `preloaded-vars.conf` file and edit as required.
    
    Follow these steps to edit the `ossec.conf file` and change the existing configurations of OSSEC.
    
    1.  Login to the specific Virtual Machine (node) using SSH keys in the terminal.
    2.  Go to the `/var/ossec/etc` directory using following command.
        
        `$ cd /var/ossec/etc`
        
    3.  Open the **ossec.conf** file and edit as required.
    

Marketing Catalog Microservice
------------------------------

The Marketing Catalog Microservice is a comprehensive source of system-independent data of product details and marketing content crossing all the banks products, and capable of consuming products and services outside of the bank. Examples include products offered by FinTechs (such as payment devices) or real banking products that can be sold and marketed on behalf of other banks. Banks can choose to ingest the product details from the existing core or Product management system. This can be created and managed in the Marketing Catalog microservice.

### Prerequisites

*   Run the installation on a fresh virtual machine.
    
    If in case you execute the file on an existing virtual machine you must ensure the Java is not installed on it or pointing it to Java 8 is mandatory.
    
*   Create a cluster in your Atlas account and **Allow access from anywhere** in the IP access list which is present under Network Access. Then, create a database user for your cluster and connect it to your cluster. Refer to [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) for the exact procedure that needs to be followed to execute this step.
    
    You must ensure allowing access from anywhere in the IP access list of the cluster. To do so you must login to your cluster and under Network Access go to IP Access List and then click on **Edit** and select **Allow access from anywhere** then save.
    
    ![](Resources/Images/NetworkAccess.png)
    
*   Install mongo shell of the same version as that of the cluster version. If your cluster version is 4.2.10 as shown in the following image then you must install mongo shell of version 4.2.10.

    ![](Resources/Images/marketingmicroservice.png)

### Deployment

*   If you want to create the marketing catalog microservice resources along with the end to end installation of VoltMX Foundry on Azure cloud you must do the following:
    1.  Provide the required inputs in the `conf/enterprise.properties` file.
    2.  Execute the `install-foundry.sh` file.
*   If you want to create only the marketing catalog microservice resources then do the following:
    1.  Copy the `marketing_catalogs` folder from `VoltMXFoundryContainersAzure-_/lib/microservices/` path.
    2.  Provide the required inputs in the `conf/ marketing_catalog_ms.properties` file.
    3.  Execute the `install_marketing_catalog_ms.sh` file present under the `marketing_catalogs` folder.

<!-- You must ensure adding your IP address to the IP access list of the Atlas cluster before deployment of Marketing catalog microservice. -->

Campaign Microservice
---------------------

The Campaign microservice allows the branch user to create and store Campaign definition details.

### Prerequisite

*   Run the installation on a fresh virtual machine.

If in case you execute the file on an existing virtual machine you must ensure the Java is not installed on it or pointing it to Java 8 is mandatory.

### Deployment

*   If you want to create Campaign microservice resources along with the end to end installation of VoltMX Foundry on Azure cloud you must do the following:
    1.  Provide the required inputs in the `conf/enterprise.properties` file.
    2.  Execute the `install-foundry.sh` file.
*   If you want to create only the Campaign microservice resources then do the following:
    1.  Copy the `campaigns` folder from `VoltMXFoundryContainersAzure-_/lib/microservices/` path.
    2.  Provide the required inputs in the `conf/campaign_ms.properties` file.
    3.  Execute the `install_campaign_ms.sh` file present under `campaigns` folder.
