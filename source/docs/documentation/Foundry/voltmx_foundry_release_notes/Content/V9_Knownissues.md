---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Known Issues in Volt MX Foundry V9
=================================

Analytics
---------

*   Download of a report in the excel format fails due to a colon (: ) in the name of the report.
    
    For more information about this feature, click [here]({{ site.baseurl }}/docs/documentation/Foundry/custom_metrics_and_reports/Content/Saving_Custom_Reports_and_Ad_Hoc_Views.html).
    

Engagement
----------

*   It is not possible to add a title for Rich Push Template even though the option to save Rich Push Template with title is provided.

Identity
--------

*   OAuth Provider type is not displayed under **Data Panel** > **Project Services**.
*   In the **Manage App Store Users** window, the **App Store** link navigates to the wrong link.
*   It is not possible to import more than 100 different groups via CSV import of users.

Volt MX  Foundry SDK
------------------

*   An invalid SSO error occurs and the login fails even after providing the correct user ID and password.

Console
-------

*   **Issue with GET verb mapping and its variant mappings for SDO Object Services**
    
    In case of SDO Object Services, in the GET verb mapping the user can also configure extra variant mappings like `getByPk`, `getbatch`, etc.
    
    In Foundry V7.x or Foundry V8.x:
    
    *   Any changes made in the GET verb mapping override the changes made in the individual variant verbs like `getByPk` and `getbatch`.
    *   While generating the service definition during publish, the mappings made in the variant verbs are ignored and are instead stamped with the mapping of the GET Verb.
    
    When you upgrade from Foundry V7.x or Foundry V8.x to Volt MX Foundry V9:
    
    *   Any changes made in the GET verb mapping do not override the changes made in the individual variant verbs like `getByPk` and `getbatch`.
    *   While generating the service definition during publish to runtime, the mappings made in the variant verbs are respected and are stamped.
    
    Check the following post the V9-GA upgrade:
    
    *   Verify the individual GET Variant mappings on the Visual Editor / XML definition and validate them.
    

Installer
---------

*   **Issue**
    
    On certain system display resolutions, the Windows Installer UI may get distorted and you may face difficulties in proceeding with the installation.
    
    **Workaround**
    
    You must lower the scaling factor and/or resolution of your system and restart the installer.
    

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
    

*   **Issue**: On a Volt MX Foundry environment installed on Apache Tomcat the attempt to publish a web application fails with a 403 error.
    
    This error occurs due to the increased strictness of the ordering of tags within the `tomcat-users.xml` file that comes with the Installer bundled Tomcat v9.0.33.
    
    **Workaround**
    
    Update the `tomcat-users.xml` file located at <TOMCAT\_HOME>/conf/ and ensure all the **<role>** tags precede the all the **<user>** tags.
    
    Example configuration:
    
    ![](Resources/Images/tomcaterror.png)
    

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
