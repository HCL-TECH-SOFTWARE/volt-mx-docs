 

Volt Foundry Command Line Installer
=====================================

The Volt Foundry Command Line Installer (CLI) allows you to set up a custom Volt Foundry deployment in your enterprise. You can install Volt Foundry on your Windows and Linux machines using the Command Line Installer.

The Volt Foundry CLI aids and supplements the manual install process by providing easy-to-use command line tasks. You can use the Volt Foundry CLI if your organization’s policies, standards and software setup requirements need you to perform a custom manual deployment.

## Prerequisites

Following are the prerequisites to install and configure Volt Foundry Command Line Installer on your machine:

*   OpenJDK 11
*   Ant version 1.8.2 and later
*   An instance of your chosen Application Server and Database must be installed and configured
*   Download the Manual Install Artifacts from [Flexnet](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal).

### Supported Application Servers

*   JBoss (Standalone Mode, Domain Mode)
*   WebSphere Liberty Profile

### Supported Databases

*   Oracle
*   MySQL
*   MariaDB
*   Microsoft SQL Server

To find out which versions of Application Servers and Databases are supported by Volt Foundry CLI, refer to [Supported Application Servers and Databases Guide](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.html).

## Using the Volt Foundry Command Line Installer

1.  Download the **VoltFoundryInstaller-9.x.x.x_GA.zip** file and extract it.
2.  Modify the properties in the  `userInputs.properties`  file available in the **VoltFoundryInstaller** folder. You can also manage the advanced properties like modifying the log levels for each Foundry Component, sending Foundry usage data, and more from the  `userInputsAdvanced.properties`  file.
3.  From the current location in the command line prompt, run the execute command by specifying the appropriate task. For example: `execute migrate-db`.

## Inputs in the userInputs properties file

Following is the description of the inputs that are required to be provided in the userInputs.properties file to perform any supported installer actions:

1.  **Generic CLI inputs**: Following inputs are common and are required for any of the CLI tasks to be executed.

    *   **USER\_INSTALL\_DIR**: Specify the location of the User install directory. This is the location where the CLI generated artifacts are placed as a result of the task execution
        
    For example:
        
    *   **Windows** - USER\_INSTALL\_DIR= `C:/VoltMXFoundry_cli`
    *   **Linux** - USER\_INSTALL\_DIR= `/home/VoltMXFoundry_cli`
    *   **INSTALL\_LOG\_LOCATION**: Location for storage of the logs generated during the execution of a supported action. By default, this is set to the location of the user install directory. You can edit it to point to any other location on the system.

    <a id="application_server_basic_inputs"></a>
2.  **Application Server basic inputs**: Following inputs are required for the generation of application related artifacts.
    *   **SERVER\_CHOICE**: Application servers include JBoss (Standalone/Domain), and WebSphere Liberty profile.

        ` SERVER_CHOICE= < appServerType > `

        The possible values for <appServerType> are: JBoss or WebSphere.
        
        *   **JBossServerType**: In case JBoss is chosen as the application server, the mode in which JBoss is configured needs to be provided. The corresponding valid inputs are either standalone or domain.

    *   **FULLY\_QUALIFIED\_PUBLIC\_URL**: Refers to the URL by which Volt Foundry will be accessible post installation. This is an optional field. In case the URL is not provided, it will be derived from the HOST\_NAME, HTTP\_PORT/HTTPS\_PORT properties. This property must be specified in case your Volt Foundry environment setup consists of a load balancer/proxy.

        `FULLY\_QUALIFIED\_PUBLIC\_URL= <http(s)>://<Fully Qualified Domain Name>:<http(s)port>`

    
    *   **HOST\_NAME**: The host name or IP address of the application server.
        *   **HTTP\_PORT**: The HTTP port of the application server.
        *   **HTTPS\_PORT**: The HTTPS port of the application server.

    <a id="application_server_management_properties"></a>
3.  **Application Server management properties**: Following inputs
    are required for many of the tasks related to actions performed on the application server. For example, fetching of server groups, creation of data sources, and deployment of WARs. These details are also updated in the database and hence, are required to be provided during the execution of database migration scripts.
    *   **MASTER\_IP**: This is the application server host name for either JBoss standalone or WebSphere Liberty. In case of a clustered JBoss or Liberty setup, this would correspond to the domain controller host or the collective controller host respectively
    *   **MASTER\_PORT**: This is the native management port in case of JBoss. In case of WebSphere Liberty this would be the HTTPS port of the collective controller or server.
    *   **MASTER\_USER**: Application server administrative user.
    *   **MASTER\_PASSWORD**: Application server administrative user password.
    *   **USER\_INPUT\_SERVER\_GROUPS**: The value of this property is obtained by executing the `get-server-groups` task. It is only required for JBoss configured in domain mode. You must provide the user input groups separated by the pipe **|** delimiter.

    <a id="properties_related_to_the_volt_foundry_components"></a>
4.  **Properties related to the Volt Foundry components**: Following 
    inputs are required for any action which is related to a Foundry component. For example, the generation of WARs or the execution of database scripts.

    a.  **Volt Foundry Component selection properties**: The following properties must be set to either true or false. If ALL\_COMPONENTS\_ENABLED is set to true, the rest of the inputs can be left empty. If ALL\_COMPONENTS\_ENABLED is set to false then at least one of the following input properties must be set to true.

    *   ALL\_COMPONENTS\_ENABLED
    *   INTEGRATION\_ENABLED
    *   IDENTITY\_ENABLED
    *   MESSAGING\_ENABLED
    *   CONSOLE\_ENABLED
    *   APIPORTAL\_ENABLED

    b.  **Properties specific to a Volt Foundry component**:

    *   **VOLTMX\_FOUNDRY\_CONSOLE\_URL**: This is an optional property that needs to be specified only if API Portal as a component is enabled, and if you want to use a pre-existing Foundry console. For example: http:/foundry.hcl.com:9080/mfconsole.

    <a id="database_properties"></a>
    
    c.  **Database Properties**:

    *   DB\_CHOICE : Choice of Database. Valid inputs include MySQL,
        MariaDB, Oracle, and SQLServer.
    *   PREFIX : The prefix of the database schema. The entered value
        is prefixed to the schema created.
    *   SUFFIX : The suffix of the database schema. The entered value
        is appended to the schema created.
    *   DB\_IP : This input corresponds to the database IP address or
        host name.
    *   DB\_PORT : The host port of the database.
    *   DB\_USER : The database user.
            
        **_Note:_** In case of Oracle, you must provide a user which has the permission for creating users for each of the selected Volt Foundry components. The password for all child users would be same as the parent user password.
            
    *   **DB\_PASS**: The database user password.
        
    d.  **Properties specific to the selected database**:
    
    *   **Oracle specific properties**: These input properties include the Oracle service ID and the Oracle tablespace names. In case the tablespace names are left empty, the default tablespace is used. Following are the various Oracle specific input properties.
    *   ORACLE\_SERVICEID
    *   DATA\_TABLESPACE
    *   INDEX\_TABLESPACE
    *   LOB\_TABLESPACE

## Supported Installer Actions

The Volt Foundry Command Line Installer supports the following actions:

*   [Generate Application Server Artifacts](#generate-application-server-artifacts)
*   [Get Server Groups for Remote Application Servers (Only for JBoss)](#get-server-groups-for-remote-application-server-only-for-jboss-domain-mode)
*   [Create or Upgrade Database Schema for selected components](#create-or-upgrade-database-schema-for-selected-components)
*   [Deploy WARs/EARs in Remote Application Servers (Only for JBoss)](#deploy-wars-ears-in-remote-application-servers-only-for-jboss)
*   [Create Data Sources (Only for JBoss)](#create-data-sources-only-for-jboss)
*   [Configure Shared libraries](#configure-shared-libraries)

Following is the recommended sequence of installer actions.

**For JBoss**:

1.  Generation of application server artifacts.
2.  Fetching the user input server groups and updating them in the `userInputs.properties` file.
3.  Execution of the database migration scripts.
4.  Creation of data sources.
5.  Deployment of the generated WAR/EAR files to the application server.

**For WebSphere Liberty**:

The only supported tasks are execution of database migration scripts ](migrate-db) and generation of application server artifacts (generate-wars). Refer to the [Installer documentation](../../voltmx_foundry_manual_install_guide/Content/Foundry_in_WebSphere_Liberty.md) for details on how to setup a complete Volt Foundry environment in WebSphere Application Server Liberty.

### Generate Application Server Artifacts

Complete the following actions to generate the application server artifacts:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)

<a id="update_userinputs_properties"></a>
#### Update userInputs.properties

1.  Specify the following properties to generate the artifacts:
    *   [Application Server basic inputs](#application_server_basic_inputs)
    *   [Properties related to the Volt Foundry components](#properties_related_to_the_volt_foundry_components)
    *   [Database Properties](#database_properties)

#### Execute Command Line Tasks

Execute the following command line task for **JBoss**/**WebSphere**: `generate-wars`

Application Server artifacts are generated in the `<USER_INSTALL_DIR>/deployments` folder.

In case WebSphere Liberty profile is chosen as the application server, EAR artifacts are also generated in the deployments folder along with the WAR artifacts.

The **middleware home** specific to Foundry Integration is also generated and is located in the `<USER_INSTALL_DIR>/middleware_home` folder. This is required only in cases when the user would prefer an external middleware home folder and specify the location of same using a -D system property.


![](Resources/Images/generate-wars.png)


### Get Server Groups for Remote Application Server (Only for JBoss domain mode)

Complete the following actions to get Server Groups for JBoss setup in domain mode:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)

#### Update userInputs.properties

*   [Application Server basic inputs](#application_server_basic_inputs)
*   [Application Server management properties](#application_server_management_properties)

#### Execute Command Line Tasks

Execute the command line task `get-server-groups` to fetch the server groups associated with the Application Server. The output of this command is used as the value of the `USER_INPUT_SERVER_GROUPS` input property for the `deploy-wars-remote` and `create-data-sources` tasks.

![](Resources/Images/Get-ServerGroups.png)

### Create or Upgrade Database Schema for selected components

Complete the following actions to create or upgrade the Database Schema for the selected components:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)

#### Update userInputs.properties

Provide the following properties as inputs:

*   [Database Properties](#database_properties)
*   [Properties related to the Volt Foundry components](#properties_related_to_the_volt_foundry_components)
*   [Application Server management properties](#application_server_management_properties)

#### Execute Command Line Tasks

Execute the `migrate-db` task as follows:

*   For **Windows**: `execute migrate-db`
*   For **Linux**: `. ./execute migrate-db`

![](Resources/Images/migrate-db.png)

### Deploy WARs/EARs in Remote Application Servers (Only for JBoss)

Complete the following actions to deploy WAR/EAR files in the Remote Application Servers:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)

#### Update userInputs.properties

*   [Application Server basic inputs](#application_server_basic_inputs)
*   [Application Server management properties](#application_server_management_properties)

#### Execute Command Line Tasks

The WARs generated by the **generate-wars** command must be present in the deployments folder.

Execute the task `deploy-wars-remote` CLI installer as follows:

*   For **Windows**: `execute deploy-wars-remote`
*   For **Linux**: `. ./execute deploy-wars-remote`

![](Resources/Images/deploy-wars-remote.png)

### Create Data Sources (Only for JBoss)

Complete the following actions to Create Data Sources for Remote Application Servers:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)

#### Update userInputs.properties

Provide the following properties as inputs:

*   [Application Server basic inputs](#application_server_basic_inputs)
*   [Application Server management properties](#application_server_management_properties)
*   [Properties related to the Volt Foundry components](#properties_related_to_the_volt_foundry_components)
*   [Database Properties](#database_properties)

#### Execute Command Line Tasks

Creation of data sources requires the prior creation of database schemas. This can be done by [executing the migrate-db command](#execute-command-line-tasks).

After the successful execution of `migrate-db`, create the data sources by using the `execute create-data-sources` command.


![](Resources/Images/dataSourceCreation.png)



### Configure Shared libraries

Complete the following actions to configure Shared libraries for WebSphere:

*   [Update `userInputs.properties`](#update-userinputs-properties)
*   [Execute Command Line Tasks](#execute-command-line-tasks)


#### Update userInputs.properties

1.  The Remote App Server input details should be provided as follows:
    *   SERVER\_CHOICE
    *   HOST\_NAME
    *   MASTER\_PORT
    *   MASTER\_USER
    *   MASTER\_PASSWORD
2.  Select the components for which you want to configure shared libraries. To do so, set the following properties to **true** or **false**:
    
    *   Identity - `IDENTITY_ENABLED`
    *   Engagement - `MESSAGING_ENABLED`
    *   Console - `CONSOLE_ENABLED`
    *   Integration - `INTEGRATION_ENABLED`
    *   API Portal - `APIPORTAL_ENABLED`
    
    If you want to configure shared libraries for all the components, set `ALL_COMPONENTS_ENABLED` to **true**.
    

#### Execute Command Line Tasks

To configure shared libraries, execute the `ant configure-shared-libraries` command.

![](Resources/Images/ConfigureSharedLibraries.png)
