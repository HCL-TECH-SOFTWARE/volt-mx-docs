                            

Encrypt Passwords
=================

To encrypt a value, follow these steps:

1.  Create a Java class.
2.  Add `voltmxserver-utils.jar` to your class path.  
    
    Path for voltmxserver-utils.jar: `<USER_INSTALL_DIR>/VoltMXFoundry_Plugins/middleware/voltmxserver-utils.jar`
    
3.  Call the method `EncryptDecryptText.encryptText(<valueToEncrypt>)`. This will return encrypted value.
    
    > **_Important:_** Ensure that you encrypt the following placeholder values for Admin before executing [Flyway](FlywayNew.md) migration.  
      
    **For Admin:**  
      
    \-  VOLTMX\_SERVER\_TRUSTSTORE\_PASSWORD  
    \-  VOLTMX\_SERVER\_STORAGE\_DATABASE\_PASSWORD  
    
4.  Add dependency jars to the Library.
    *   `commons-io-2.4.jar` can be found at [https://mvnrepository.com/artifact/commons-io/commons-io/2.4](https://mvnrepository.com/artifact/commons-io/commons-io/2.4)
    *   `log4j-api-2.17.1.jar` can be found at [https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-api/2.17.1](https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-api/2.17.1)

To encrypt a Tomcat value, follow these steps:

1.  Create a Java class.
2.  Add `serverdeployer.jar` to your class path.  
    
    Path for voltmxserver-utils.jar: `<USER_INSTALL_DIR>/VoltMXFoundry_Plugins/middleware/serverdeployer.jar`
    
3.  Call the method `CryptoUtils.encrypt(<valueToEncrypt>`. This will return encrypted value.
4.  Add/Update the password field of the user in the `tomcat-users.xml` file, located in the tomcat\_Install\_dir/conf folder. Set the role name to manager.
    
    For example:
    
```
<user name="manager" password="7fd20649-e534-4915-b4c5-d8e1a2cbb579" roles="admin-gui,manager-gui,manager-script,manager-jmx,manager-status"/>  
    <role rolename="admin-gui"/>  
    <role rolename="manager-gui"/>  
    <role rolename="manager-script"/>  
    <role rolename="manager-jmx"/>  
    <role rolename="manager-status"/>  
    <role rolename="manager"/>
```
