                            

Configure Java Transactions API (JTA) for Identity Services - Tomcat
====================================================================

### How to Configure JTA for Identity Services

1.  Open the `context.xml` file located under `<User install directory>\apache-tomcat-8.5.32\conf` folder depending on the database type.
2.  In the `context.xml` file, add the following code at the end of the file:
    
```
    <JarScanner scanManifest="false"/>  
    <Transaction auth="Container" factory="org.objectweb.jotm.UserTransactionFactory" jotm.timeout="60" name="UserTransaction" type="javax.transaction.UserTransaction"/>
```
3.  Save the `context.xml` file.
