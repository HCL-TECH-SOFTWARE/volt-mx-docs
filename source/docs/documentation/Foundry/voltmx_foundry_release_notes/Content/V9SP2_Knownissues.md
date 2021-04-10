---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Known Issues in Volt MX Foundry V9 SP2
=====================================

Installer
---------

*   **Issue**
    
    For on-premise installations that use Tomcat Server and MySQL Database, when you upgrade from Foundry 7.3 to Volt MX Foundry V9 ServicePack 2, the following error occurs for the Identity component:
    
    {% highlight voltMx %}Error - SQL State: 42000  
    Error Code: 1253  
    Message: COLLATION 'utf8_unicode_ci' is not valid for CHARACTER SET 'latin1'
    {% endhighlight %}
    
    **Workaround**
    
    Add the following lines to the MySQL config.cnf file, and then restart MySQL.
    
    {% highlight voltMx %}character-set-server = utf8  
    collation-server = utf8_unicode_ci
    {% endhighlight %}

*   **Issue**
    
    While the execution of a Service Task in a Workflow Service, the service task fails with the following error:
    
    {% highlight voltMx %}com.voltmx.component.service.common.ServiceComponentException: Service call unsuccessful. Possible input parameter mismatch in service configuration : Property access failed in MVEL script causing exception [Error: could not access property (firstName) in: java.lang.String].
    {% endhighlight %}
    
    **Workaround**
    
    To avoid this issue, perform the following step:
    
    1.  Navigate to the installed application server folder and open the system file.
        
        For example,
        
        *   For **Tomcat**
            *   Windows : `catalina.bat`
            *   Linux: `catalina.sh`
        *   For **JBoss**
            *   Linux: `standalone.sh`
            *    Windows: `standalone.bat`
        *   For **JBoss Multinode**
            *   `domain.sh`
        *   For **WebSphere Liberty**
            *   `jvm.options`
    2.  Add the `mvel2.compiler.allow_override_all_prophandling=true` as follows:{% highlight voltMx %}\-D property. (-Dmvel2.compiler.allow_override_all_prophandling=true )
        {% endhighlight %}
    3.  Restart the application server.

*   **Issue**
    
    On certain system display resolutions, the Windows Installer UI may get distorted and you may face difficulties in proceeding with the installation.
    
    **Workaround**
    
    You must lower the scaling factor and/or resolution of your system and restart the installer.
    
*   **Issue**
    
    Upgrading a Foundry installation on WebSphere Basic profile to IBM Liberty profile is currently unsupported.
    
*   **Issue**
    
    Upgrade from 8.2.1.3 GA to V9.x gets reverted.
    
    Workaround
    
    Before the upgrade, execute the following SQL statement from admin database
    
    For **MySQL**  
    \------------ delete from <admindb>.schema\_version where script = 'V62.1\_\_voltmxadmin-mysql-8.2.0.0.sql';  
      
    For **SQLServer**  
    \--------------- delete from <admindb>.schema\_version where script = 'V62.1\_\_voltmxadmin-sqlserver-8.2.0.0.sql';  
      
    For **Oracle** ---------- delete from <admindb>.schema\_version where script = 'V62.1\_\_voltmxadmin-oracle-8.2.0.0.sql';  
    

*   **Issue**: While upgrading from Foundry 7.3 to Volt MX Foundry V9 and then upgrading to a version after V9, the upgrade fails due to the following error:"java.sql.SQLSyntaxErrorException: Table 'prefixidglobaldbsuffix.schema\_version' doesn't exist".
    
    **Workaround**
    
    To avoid this issue, perform the following step:
    
    *   Delete the idglobaldb schema before upgrading to the version later than V9.

*   **Issue**: When you setup Volt MX Foundry (On-Premises) on WebSphere Liberty Profile using the Command Line Installer (CLI) the publish of the Storage application fails. The failure occurs when you enter the database type input in upper or mixed casing. The storage database type is a case-sensitive field which accepts only lowercase inputs. For example: oracle, mysql, mssql and mariadb.
    
    **Workaround**
    
    Change the database name in the following sets of schemas and tables:
    
    *   **Schema**: ADMINDB
        
        **Table**: SERVER\_CONFIGURATION
        
        **Field / value**: storage\_database\_type = oracle / mysql / mssql / mariadb
        
    *   **Schema**: ACCOUNTS
        
        **Table**: FEATURES
        
        **Field / value**: {"storagedatabasetype":"oracle / mysql / mssql / mariadb","serverdatabasetype":"oracle / mysql / mssql / mariadb"}
        

*   **Issue**: The publishing of a Storage application fails on an environment that uses the SQLServer with Windows authentication.
    
    **Workaround**
    
    In the `server_configuration` table of the Integration database(admindb) insert the key `VOLTMX_SERVER_IS_WINDOWS_AUTHENTICATION_ENABLED` with value set to **true**. Restart the application server.
    

*   **Issue**: While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V9.x with the selected database as MSSQL, the upgrade fails due to the following errors that occur due to the Flyway tool version upgraded from 3.x to 4.x:
    
    *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_ir\_idx"
    *   Failed to DROP INDEX "<auth\_schema>"."schema\_version\_vr\_idx"
    
    **Workaround**
    
    To avoid this issue, perform the following steps:
    
    Remove the version\_rank column from the schema\_version table in the authglobaldb by following queries before the upgrade.
    
    {% highlight voltMx %}DROP INDEX schema_version_ir_idx ON dbo.schema_version
    GO
    DROP INDEX schema_version_vr_idx ON dbo.schema_version
    GO
    ALTER TABLE dbo.schema_version DROP CONSTRAINT schema_version_pk
    GO
    ALTER TABLE dbo.schema_version DROP COLUMN version_rank
    GO
    ALTER TABLE dbo.schema_version ADD CONSTRAINT schema_version_pk PRIMARY KEY CLUSTERED (installed_rank)
    GO
    ALTER TABLE dbo.schema_version ALTER COLUMN version nvarchar(50) NULL
    GO
    
    {% endhighlight %}
