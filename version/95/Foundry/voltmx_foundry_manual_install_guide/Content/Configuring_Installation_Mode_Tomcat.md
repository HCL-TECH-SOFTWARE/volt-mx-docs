                             

How to Install Tomcat Server
============================

> **_Note:_** By default Tomcat manager password in used by Volt MX Foundry for Web Application publish. To change the default Tomcat manager password, the new password needs to be replaced in the `password` value for user `manager` in `<tomcat-users>` tag in `tomcat-users.xml`.  
  
Now to replace the value in database, the password value should be encrypted. To encrypt the database password, follow these steps mentioned in the [Encrypt Passwords](Encrypt_Passwords.md) section.  
  
Once the password is encrypted, replace the encrypted value in the `prop_value` column in the row where prop\_value is `management_server_password` of `<DatabasePrefix>admindb<DatabaseSuffix>` database in the `server_configuration` table.

To download and install Tomcat, follow these steps:

1.  Download Apache Tomcat v9.0.33 from the following link.
    
    [https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.33/bin/](https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.33/bin/)
    
2.  Install the `apache-tomcat-9.x.x-windows-x64.exe` (Windows) or extract the `apache-tomcat-9.x.x.tar.gz` (Linux) file and place it in your local folder. Your Tomcat Server setup is ready now.
    
    > **_Important:_** Examples in this document refer the <User\_Install\_Directory> as your install folder. Ensure that you place JRE and Tomcat in the <User\_Install\_Directory> folder.
    

Configure Manager User for Tomcat
---------------------------------

Manager User for Tomcat is required for publishing application to middleware. Configure the manager user by adding the following entry under `<tomcat-user>` in the `tomcat-user.xml` file in `tomcat->conf` folder.

```
<user name="manager" password="m@n@g3r123" roles="admin-gui,manager-gui,manager-script,
manager-jmx,manager-status" />
<role rolename="admin-gui"/>
<role rolename="manager-gui"/>
<role rolename="manager-script"/>
<role rolename="manager-jmx"/>
<role rolename="manager-status"/>
<role rolename="manager"/>

```

Sample location to `tomcat-user.xml` file: `<\InstallerFolder>\<apache-tomca>\apache-tomcat-9.x.x\conf`
