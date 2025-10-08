                            

You are here: Jasper Reports

Jasper Reports Server 7.1 Configuration 
=======================================

### Stop Jasper server

*	Place the database driver (mariadb-java-client-2.5.3.jar) into the lib folder.
*	Place the 
    
    `mariadb-java-client-2.5.3.jar in the : <jasperinstall-dir>/ jasperreports-server-7.1.0\apache tomcat\webapps\jasperserver-pro\WEB-INF\lib`

    Example: `C:\Jaspersoft\jasperreports-server-7.1.0\apache tomcat\webapps\jasperserver-pro\WEB-INF\lib`

*   Place the jar in the lib Folder

    ![](../Resources/Images/Standard_Reports/jasper7.1.png)

*	Modify the context.xml file in the location : 

    `<jasperinstall-dir>/ jasperreports-server-7.1.0\apache-tomcat\webapps\jasperserver-pro\META-INF\context.xml`

    Example: `C:\Jaspersoft\jasperreports-server-7.1.0\apache-tomcat\webapps\jasperserver-pro\META-INF\context.xml`

    Context.xml
    
    ```
    <Resource auth="Container" driverClassName="org.mariadb.jdbc.Driver" factory="com.jaspersoft.jasperserver.tomcat.jndi.JSBasicDataSourceFactory" maxActive="125" maxIdle="20" maxWait="360000" name="jdbc/onpremmysql" password="<password>" testOnBorrow="true" type="javax.sql.DataSource" url="jdbc:mysql://<Database Server IP: Database PORT>/<database_name>?serverTimezone=UTC" username="<username>" validationQuery="SELECT 1"/>
    <Resource auth="Container" driverClassName="org.mariadb.jdbc.Driver" factory="com.jaspersoft.jasperserver.tomcat.jndi.JSBasicDataSourceFactory" maxActive="125" maxIdle="20" maxWait="360000" name="jdbc/onpremaccounts" password="<password>" testOnBorrow="true" type="javax.sql.DataSource" url="jdbc:mysql://<Database Server IP: Database PORT>/<database_name>?serverTimezone=UTC" username="<username>" validationQuery="SELECT 1"/>
    ```

    Example:
    
    ```
    <Resource auth="Container" driverClassName="org.mariadb.jdbc.Driver" factory="com.jaspersoft.jasperserver.tomcat.jndi.JSBasicDataSourceFactory" maxActive="125" maxIdle="20" maxWait="360000" name="jdbc/onpremmysql" password="Password" testOnBorrow="true" type="javax.sql.DataSource" url="jdbc:mysql://10.115.192.111:3306/VoltMXmfreportsdb2022?serverTimezone=UTC" username="root" validationQuery="SELECT 1"/>
    <Resource auth="Container" driverClassName="org.mariadb.jdbc.Driver" factory="com.jaspersoft.jasperserver.tomcat.jndi.JSBasicDataSourceFactory" maxActive="125" maxIdle="20" maxWait="360000" name="jdbc/onpremaccounts" password="Password" testOnBorrow="true" type="javax.sql.DataSource" url="jdbc:mysql://10.115.192.111:3306/VoltMXmfaccountsdb2022?serverTimezone=UTC" username="root" validationQuery="SELECT 1"/>
    ```

### Start Jasper server

Refere [How to Set Up JNDI Data Sources - HCL Volt MX Documentation (hcltechsw.com)](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_analytics_reporting/Content/How_to_Set_Up_Java_Naming_and_Directory_Interface__JNDI__Data_Sources.html) for Jasper configuration with MySQL 5.7