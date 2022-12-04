 

Known Limitations
=================

| Description |
| --- |
| 
**Issue**: User is unable to download applications in a multi-node environment with memcache clustering.

**Workaround**: Remove memcache clustering and use single memcache. Navigate to your Apache Tomcat conf folder (for example, **apache-tomcat-7-7.0.4.2/conf**), open the **catalina.properties** file, and update the **MEMCACHE\_CLUSTER** variable value. You must update your **apache/bin/apachectl** file also, to point it to a single memcache. For installations on Windows platform, update **MEMCACHE\_CLUSTER** environment variable to point it to a single memcache.

 |
| 

**Issue**: In a multi-node environment, when you upgrade your current version to a new GA release, the installer fails to copy files from one node to another. Further, it can delete **catalina.properties** and **emm.war** files on the first node.

**Workaround**: You must manually copy **catalina.properties** and **emm.war** files from your Apache Tomcat conf folder (for example, **apache-tomcat-7-7.0.4.2/conf**) from one of the other nodes and place them in the first node. You must copy the **emm\_config** folder from the Android SDK folder to the other nodes.

 |
| **Issue**: In a multi-node environment, when you upgrade your current version to a new GA release, environment variables are not created or updated.

**Workaround**: You must manually create or update the environment variables in all nodes.

*   VOLTMXEMM\_DOCROOT\_URL = https://<host\_name>/emm/download
*   VOLTMXEMM\_VOLTMXSCR\_URL = https://<host\_name>/emm/voltmxscr
*   MEMCACHE\_CLUSTER = <host\_name>:<memcache\_port>

For example,

*   VOLTMXEMM\_DOCROOT\_URL = https://emm.hcl,net/emm/download
*   VOLTMXEMM\_VOLTMXSCR\_URL = https://emm.hcl,net/emm/voltmxscr
*   MEMCACHE\_CLUSTER = emm.hcl,net:11211

 |
| DEF8567: If a mandatory child app is removed when the EMM server is offline or a device is offline, a user will be prompted to reinstall the child app. For a non-mandatory app, the app will install silently. |
| DEF8871: While changing mode from EMM to MAM/MCM, the Terms and Conditions page shown has different look and UI when compared to same page shown on fresh enrollment. This is noticed on Windows native devices. |
| DEF9156: For the Chrome browser, the EMM Console has issues on every list page. . If the list page is scrollable, clicking on any drop-down list in the page refreshes the page and navigates the user to the last clicked row of page. The page should retain the clicked drop-down position. |
| DEF9166: The Android For Work profile is not removed from the device even when the device is purged. However, the Android For Work profile is removed if user control is removed on the device before purging. |
| DEF8691: When a user is the self-service console and an admin has changed one of the user’s device enrollment modes to value different from a current one, the user is not logged out of the self-service console. This behavior is different on devices where a user will be logged out and asked to log-in again to see the changed enrollment mode. |
