                             

Required Setup Files
--------------------

Download `VoltMXFoundry_Plugins` (WAR files and DB scripts).

If you want to install Volt MX Foundry manually due to your business rules and policies, please contact
[Customer Support](https://support.hcltechsw.com/csm) for approval and to obtain access to the Volt MX Foundry manual install artifacts. Manual installs not approved by HCL will not be supported.

### Required Setup Files - Volt MX Foundry Console, Accounts, and Workspace

Path for WAR Files: `\VoltMXFoundry_Plugins\war`

  
| Files Types | File Name | Location |
| --- | --- | --- |
| **WAR** | mbaasportal.war | \\VoltMXFoundry\_Plugins\\war |
|^^| accountsAPI.war | \\VoltMXFoundry\_Plugins\\war |
|^^| workspaceService.war | \\VoltMXFoundry\_Plugins\\war |
| **DB Scripts and Migrations Scripts** for Volt MX Workspace Service | waasdbmigrations.zip migrations-waas-oracle.zip migrations-waas-db2.zip migrations-waas-sqlserver.zip | \\VoltMXFoundry\_Plugins\\scripts |
| **DB Scripts and Migrations Scripts** for Volt MX Accounts Service | accountsdbmigration.zip migrations-accounts-db2.zip migrations-accounts-oracle.zip migrations-accounts-sqlserver.zip | \\VoltMXFoundry\_Plugins\\scripts |

### Required Setup Files - Identity Services

  
| Files Types | File Name | Location |
| --- | --- | --- |
| **WAR** | authService.war | \\VoltMXFoundry\_Plugins\\war |
| **DB Scripts and Migrations Scripts** for Volt MX Identity Service | migrations.jar VoltMXFoundry\_Plugins\\scripts\\javamigrations-auth\\com\\voltmx\\auth\\migrations\\mysql\\ VoltMXFoundry\_Plugins\\scripts\\javamigrations-auth\\com\\voltmx\\auth\\migrations\\oracle VoltMXFoundry\_Plugins\\scripts\\javamigrations-auth\\com\\voltmx\\auth\\migrations\\sqlserver | \\VoltMXFoundry\_Plugins\\scripts\\javamigrations-auth |

### Required Setup Files - Integration Services

Path for WAR files: `\VoltMXFoundry_Plugins\middleware`

  
| Files Types | File Name | Location |
| --- | --- | --- |
| WAR | middleware.war | \\VoltMXFoundry\_Plugins\\middleware |
|^^| services.war |
|^^| admin.war |
|^^| apps.war |
| **DB Scripts and Migrations Scripts** for Volt MX Integration Services | install.zip admindb\_mysql.zip admindb\_oracle.zip admindb\_sqlserver.zip reportsdb\_db2.zip reportsdb\_mssql.zip reportsdb\_mysql.zip reportsdb\_oracle.zip | \\VoltMXFoundry\_Plugins\\middleware |

### Required Setup Files - Engagement Services

The vms-x.x.x.x files are downloaded in a zip format. HCL provides the following files for Volt MX Foundry Engagement Services:

Path for VMS files: `\VoltMXFoundry_Plugins\vpns`

  
| Files Types | File Name | Location |
| --- | --- | --- |
| **WAR** | vpns.war | \\VoltMXFoundry\_Plugins\\vpns |
| **DB Scripts and Migrations Scripts** | mssql-vpns-migrations.zip mysql-vpns-migrations.zip oracle-vpns-migrations.zip | \\VoltMXFoundry\_Plugins\\scripts |
| **Resources, JARs, TARs** | sharedlib.tar vpns-resources.zip | \\VoltMXFoundry\_Plugins\\vpns |

*   `vpns.wa`r file that is deployed on the application server.
*   vpns-resources.tar\- An extracted  `vpns-resources.tar`  archive contains the following files:
    *   `schema` \- This folder contains the XML schema definitions for subscription and messaging.
    *   `configResource.properties` - An XML file containing the configuration properties.
    *   `vms-log4j2.properties` - This file is used to control the application logging.
    *   `database.properties` - This file is used to control the security of the application and for User Management configuration.
*   Database scripts - There are folders for the following database scripts for creating and dropping the schema.
    
    | Database | Script File Name |
    | --- | --- |
    | MySQL | `mysql.tar` |
    | Oracle | `oracle.tar` |
    | Microsoft SQL | `sqlserver.tar` |
    
    Copy  `configResource.properties`, `database.properties`  and  vms-log4j2.properties   to  `/data/vpns-config`  folder.
    

### Database JARs

Download the following jars required for your database.


  
| Database | JARs |
| --- | --- |
| MySQL | mysql-connector-x-8.x.x.jar |
| Oracle | ojdbc6\_g.jar |
| MS SQL | mssql-jdbc-7.0.0.jre8 |
