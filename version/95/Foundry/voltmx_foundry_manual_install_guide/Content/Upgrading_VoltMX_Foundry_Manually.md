                             

Upgrading Volt Foundry Manually
=================================

Additional steps for Foundry upgrade to V9 GA and later
------------------------------------------------------

The Identity provider and user information which resides in the Identity schema should be moved to the Workspace schema. Perform the following steps to execute a successful data migration from Identity to Workspace:

1.  Perform a backup of your schemas.
2.  Upgrade the Identity schema to Volt Foundry V9 or later.
3.  Upgrade the Workspace schema to version 899.00 by setting the `flyway.target` parameter in the `flyway.conf` to the target version. For example, set `flyway.target=899.00` while executing flyway scripts. The Workspace schema must be at v899.00 for the data migration step to be completed successfully. Once the data migration step has been completed, the schema upgrade resumes to Volt Foundry V9 or later.
4.  Execute a command line jar which takes a config.yml file as the input.
    
    **Sample config.yml file**
    
```
workspace:
        database:
            url: jdbc:mariadb://10.10.24.147:3309/<prefix>mfconsoledb<suffix>
            username: testUser
            password: testPassword
    //master_key corresponds to the value of WAAS_ENCRYPTION_KEY present in workspace.properties file workspace.war 
        master_key: 7309478f-2d02-4ce6-bb29-d1ad2b376502               
    auth:
        database:
            driver: org.mariadb.jdbc.Driver
    //jdbc url 
            url: jdbc:mariadb://10.10.24.147:3309/<prefix>idconfigdb<suffix>
            username: testUser
            password: testPassword
    //master_key corresponds to the value of master_key property present in authservice.key file in authService.war 
        master_key: 14d59362-5c03-4ff8-a6cd-8a4ecceb6cfb               
        master_key_alg: aes
        master_key_size: 128
    migration:
        batch_size: 5000
    hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
    
```

Database specific inputs as follows:

  
| Database Type | JDBC URL format | Database Driver | Hibernate dialect |
| --- | --- | --- | --- |
| MySQL | jdbc:mysql://<host>: <port>/<schema\_name> | com.mysql.cj.jdbc.Driver | org.hibernate.dialect. MySQLDialect |
| MariaDB | jdbc:mariadb ://<host>: <port>/<schema\_name> | org.mariadb.jdbc.Driver | org.hibernate.dialect. MySQLDialect |
| Oracle DB | jdbc:oracle:thin:@<host>: <port>/<serviceName> | oracle.jdbc.driver.OracleDriver | org.hibernate.dialect. Oracle10gDialect |
| MS SQL Server | jdbc:sqlserver:mbaastest18.hcl.net: <port>;databasename=<schema\_name> | com.microsoft.sqlserver.jdbc. SQLServerDriver | org.hibernate.dialect. SQLServerDialect |

1.  Begin the data migration from the identity schema to the workspace schema by executing the following command:
```
java -jar <Data migration jar location>/authDataMigration.jar migrate -e onprem -c <Data migration config file location>/config.yml
```
2.  Check the status of data migration by executing the following command:
```
java -jar <Data migration jar location>/authDataMigration.jar check-status -e onprem -c <Data migration config file location>/config.yml
```
3.  Resume the Console schema upgrade to the latest version by commenting the flyway.target parameter or leaving it blank in the flyway.conf file while executing the flyway scripts.

Upgrading Volt Foundry manually through different application servers
-----------------------------------------------------------------------

*   [Upgrading Integration Services](Upgrading_VoltMX_Integration.md)
*   [Upgrading Engagement Services](Upgrading_VoltMX_Engagement.md)
