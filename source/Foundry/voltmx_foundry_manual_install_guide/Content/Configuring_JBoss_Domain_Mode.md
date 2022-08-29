                            


Configuring JBoss in Domain mode
================================

1.  Extract the  [com.zip](http://docs.voltmx.com/8_x_PDFs/com.zip)  file.
    
    The unzipped folder structure will be `com\mysql\main`.
    
2.  Stop the JBoss Application Server.
3.  Copy the extracted `com.zip` folder and place it in the  `{JBOSS_HOME}/modules/`  path, for the master machine.
4.  Copy the extracted `com.zip` folder and place it in the  `{JBOSS_HOME}/modules/`  path, for all the slave machines.

> **_Important:_** If there are more than one master/slaves machines, place the unzipped `com.zip` folder  (`com\mysql\main\)` into the `{JBOSS_HOME}/modules/` path.

6.  Open the domain.xml present in the `{JBOSS_HOME}/domain/configuration` folder
    
    The following tags are available in domain.xml.
    
```
<profile name="full-ha">  
    <subsystem xmlns="urn:jboss:domain:ee:4.0">
```
7.  add the following code to the domain.xml:
    
```
<global-modules>  
    <module name="com.mysql" slot="main"/>  
    </global-modules>
```
8.  Save the changes.
9.  Start the JBoss Server.
