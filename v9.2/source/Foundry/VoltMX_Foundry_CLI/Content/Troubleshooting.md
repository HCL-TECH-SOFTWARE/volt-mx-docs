
Troubleshooting and FAQs
========================

*   **Issue**
    
    When Identity service is selected as one of the components and `execute migrate-db` command is executed, the migrations for Identity are skipped.
    
    Workaround
    
    Subsequent execution of the `execute migrate-db` command will result in the execution of the Identity scripts.
    
*   **Issue**
    
    The following error occurs after executing `execute migrate-db` in Linux.
    
```
    Buildfile: /home/installer/CLI\_FINAL/build.xml
    migrate-db:
    BUILD FAILED
    /home/installer/CLI\_FINAL/build.xml:62: 
    The following error occurred while executing this line:
    /home/installer/CLI\_FINAL/resources/scripts/dbMigrations.xml:10: taskdef 
    A class needed by class com.voltmx.cli.server.
    InsertManagementDetails cannot be found: 
    Could not initialize class org.apache.logging.log4j.util.PropertiesUtil 
    using the classloader AntClassLoader
    
```
    
This issue is seen if the Apache ANT environment is not properly setup in Linux.
    
Workaround

  
1.  Download the bin release from [Apache Downloads](http://ant.apache.org/bindownload.cgi).
2.  Extract and copy the entire folder (apache-ant-1.9xxxxx) into the following folder location: `/opt/`.  
Following which the file structure will be `/opt/apache-ant-1.9xxxxxx/`.
3.  Create a Symlink: ln -s /opt/apache-ant-1.9.xxxxx /opt/ant
4.  Create another Symlink: ln -s /opt/ant/bin/ant /usr/bin/ant
5.  Set `ANT_HOME` into the Environment vi /etc/environment and add this line: ANT\_HOME=/opt/ant (without the trailing forward slash).
6.  Re-login to initiate the Environment.


*   **Issue**
    
    The deployment of WARs fails after executing the `create-data-sources` command when MySQL is the selected database.
    
    This issue is observed when `&amp;amp;` is appended in the data source connection URL instead of just `&amp;` as show in the following image:
    

 ![](Resources/Images/troubleshooting2.png)

    
Workaround
    
*   For **JBoss Pre-configured**: You must find and replace all occurrences of `&amp;amp;` with `&amp;` in the datasources configuration section of `standalone.xml`.
*   For **JBoss Domain**: You must find and replace all occurrences of `&amp;amp;` with `&amp;` in the datasources configuration section of `domain.xml`.
