                          

VoltMX Sync
=========

Volt MX  Sync Framework is a comprehensive synchronization platform that enables developers to add synchronization capabilities to mobile applications. Volt MX Sync Framework solves the problem of how to synchronize any type of data in any relational database management store using any protocol over any topology. Fundamental to Volt MX Sync Framework is the ability to support offline and collaborative data between devices and the server.

New features
------------

The following are the key features introduced in **VoltMX Sync 5.6.2 GA**:

*   **MBaaS SDK**: In this release, Volt MX Sync will be provisioned through the MBaaS offering. MBaaS offers non-VoltMX developers an opportunity to leverage Volt MX Server-side services like Sync, Integration, and Messaging, without using Volt MX Client SDK/Framework. MBaaS SDK also offers a rich authentication and authorization backend that developers can leverage.
*   **Phonegap Support**: Phonegap developers can now develop applications based on Volt MX Sync for offline applications, without using Volt MX Studio and Volt MX Platform iOS/Android plug-ins.
*   **JBoss 6.2 Support**: Volt MX Sync now supports JBoss Application Server 6.2. The installer for Volt MX Sync comes packaged with JBoss 6.2. Upgrade from JBoss 5.1 to JBoss 6.2 is not certified with this release.

Fixed Issues
------------

List of issues Fixed in **VoltMX Sync 5.6.2 GA**:

  
| Defect ID | Description | Platform / Component |
| --- | --- | --- |
| DEF794 | Setting auto-commit to true, explicitly invokes the commit for the BAPI being executed and applicable only for a single BAPI transaction. This feature does not support committing of the transaction of multiple BAPIS as a single transaction. | Sync / SAP JCo |
| DEF795 | By default, IDE does not create the Config Param for holding SSO token. | Sync / SAP JCo |
| DEF796 | IDE provides the option to specify the “Peak Connection Limit” and “Pool Capacity” in the Advanced tab of Server Details. This information is sufficient for establishing the connection Pool for JCo. Additional Parameters to be added to Sync Config from the IDE are: SyncConfig file by specifying the necessary values. <ConfigParam Value="" Name="jco.destination.max\_get\_client\_time"/> <ConfigParam Value="" Name="jco.destination.expiration\_time"/> <ConfigParam Value="" Name=" jco.destination.expiration\_check\_period"/> | Sync / SAP JCo |
| DEF708 | The upload of data from the device to enterprise is supported only for one level of child record along with the parent. | Sync / SAP JCo |
| DEF792 | Dynamic Schema Changes do not work due to error in the script that comes along with the installer. | Sync / Dynamic Schema Changes |

Known Issues
------------

List of know issues in **VoltMX Sync 5.6.2 GA**:

  
| Issue/Defect ID | Description | Platform / Component |
| --- | --- | --- |
| DEF791 | Soft delete turned off with OTA causes delete error on Sync. | Sync |
| DEF782 | When we use 'shutdown.bat' we are observing severe errors. | Sync |
| DEF797 | Dynamic Schema Changes feature is supported only on OTA Sync strategy. | Sync |
| DEF625 | Edit Datasource does not work in WebSphere Application Server. | Sync |
| DEF819 | Generate application forms for mobile phones  results to Tablet and Desktop also | Sync |
| DEF881 | Buttons and hover activities are not working in Windows8+Chrome browser in the Analytics Dashboard screen.  Works fine in other browsers. | Sync |
| DEF896 | Error occurs even after rectifying an invalid record when uploaderrorpolicy set to continueonerror and dodownload is set to false | Sync |
| DEF902 | Warning message stating “derby.jar  does not point to a valid jar for a Class-Path reference” displayed on launching JBoss; no impact to Sync | Sync |
| DEF 909 | Format and Format Value fields need to be removed under  Rest JSON output parameter | Sync |
| DEF839 | Error 7019 \[errorCodeSQLStatement\] is returned when expected error 7010 \[errorCodeTransaction\] on Phonegap |   Sync |
| DEF841 | On using RemoveAfterUpload, if there is an erroneous record on the client when syncing, the erroneous record gets duplicated on the client after sync | Sync |
| DEF821 | “Syntax error after or around the end of ==>” error message is displayed in Tomcat console even though Sync is successful and there are no errors | Sync |
| DEF748 | Expression based filters are not supported for service based backends | Sync |
| DEF782 | “SEVERE: The web application \[/syncconsole\] created a ThreadLocal with key of type \[java.lang.ThreadLocal\] (value \[java.lang.ThreadLocal@7cd44938\]) and a value of type \[org.apache.xerces.parsers.SAXParser\]” error is displayed on Tomcat console but should not be displayed since there is no impact to Sync | Sync |
| DEF762 | Collections do not get imported when user tries to import Service input/output' parameters | Sync |
| DEF333 | Valid Update-- Invalid Update -- Sync – Rollback is not supported; however, sync is successful when the invalid data id replaced with valid data and synced again | Sync |
| DEF259 | OpenLdap authentication fails to authenticate  users under the root; other users are authenticated fine | Sync |
| DEF515 | Sales Force with persistence sync not downloading all the records | Sync |
| DEF540 | Updating a record with markforupload = true for a record created with markforupload false should throw error and record should not get updated | Sync |
| DEF843 | Phonegap : Sync with invalid records; sync again after correcting the invalid record – the corrected record does not get synced to the server. The below parameter needs to be added under all the 'ServiceOutput' of the services in the sync configuration xml for Salesforce to make this work. The below parameter needs to be added under all the 'ServiceOutput' of the services in the sync configuration xml for Salesforce to make this:<Param Datatype="string" Expression="//result/errors/message" Name="errmsg" Source="ATTRIBUTE"/>   | Sync |
| DEF591 | Inserting records having composite PK/FK is not supported. | Sync |
| DEF797 | Dynamic Schema Changes are supported only for OTA Sync. | Sync |
| DEF845 | BLOB objects are not supported in Sync scope for Phonegap. | Sync |
