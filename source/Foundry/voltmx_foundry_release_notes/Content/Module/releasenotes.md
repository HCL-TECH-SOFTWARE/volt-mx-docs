                          

Foundry Console and Identity 7.0
-------------------------------------

With this release, we have introduced a unified Foundry experience for the design and development of your mobile applications. This helps you install Foundry Console, Identity, Integration Services, Engagement Services, and Sync Services manually for secured environments and Tomcat multi-node installation; and design your mobile back-end services for authenticating a user and then accessing integration and orchestration services.

### New Features 7.0

*   Object Services using XML, SOAP, JSON and JAVA Integration/Orchestration Services as back end
*   Object Services SKY as back end
*   Support for versioning of integration and orchestration services
*   Foundry Console Users and Roles for Services
*   JARs associated with a service as opposed to an operation
*   Angular JS updated from 1.2.2 to 1.4.4
*   Support for API Proxy for Integration Services
*   Support for composite foreign key in Sync
*   Support for Sync to DB
*   Support for JPush notification
*   Support for JS pre/post processor
*   Support for constant and expression scope for HTTP headers
*   Support for propagating cookies flown from device to back end

### New Features for SDK/Metrics

*   SDK support for Object Services on Volt MX Iris and PhoneGap
*   Binary Support available for Object Services in online/offline mode on Volt MX Iris and PhoneGap

*   Parent Child Relationship support.

### Foundry Installer for 7.0

*   Volt MX Foundry Installer for Linux environment: [](http://download.voltmx.com/installer/mobilefoundry/beta-70/latest/VoltMXFoundrySetup.tar.gz)[http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads)
*   Volt MX Foundry Installer for Windows environment: [](http://download.voltmx.com/installer/mobilefoundry/beta-70/latest/VoltMXFoundrySetup.zip)[http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads)
*   Volt MX Foundry Artifacts: [http://community.hclvoltmx.com/downloads/manual](http://community.hclvoltmx.com/downloads/manual)
    
    Download VoltMXFoundry installers (for release 7.0 GA) from [http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads) and extract the file. To download Volt MX Foundry installer from the community portal, follow these steps:
    
    1.  Log in to [http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads). You can obtain a user name and password from your sales representative or partner.
    2.  Navigate to the **VoltMX Foundry** section and click the **VoltMX v7.0 GA version** tab.
    3.  Select the specific release from the **Version** drop-down list and then click on the specific release-related files you want to download. For example, if you want to download **VoltMX Foundry 7.0.0 GA** installer, click the **VoltMX v7.0 GA tab**, select the **7.0.0 GA version** from the drop-down list, and then click the **Download** button.

### Foundry Documentation for 7.0

*   Volt MX Foundry Installation Guide Windows: [VoltMX Foundry Installation Guide Windows](../../../../Foundry/voltmx_foundry_windows_install_guide/Content/Introduction.md)
*   Volt MX Foundry\_Installation Guide Linux: [VoltMX Foundry\_Installation Guide Linux](../../../../Foundry/voltmx_foundry_linux_install_guide/Content/Introduction.md)
*   Volt MX Foundry User Guide: [VoltMX Foundry User Guide](../../../../Foundry/voltmx_foundry_user_guide/Content/Introduction.md)
*   Volt MX Foundry Manual Install Guide: [VoltMX Foundry Manual Install Guide](../../../../Foundry/mf_manual_install.md)

### Foundry Native SDKs

*   [http://download.voltmx.com/sdk/latest/voltmx-ios-sdk.zip](http://download.voltmx.com/sdk/latest/voltmx-ios-sdk.zip)
*   [http://download.voltmx.com/sdk/latest/voltmx-android-sdk.zip](http://download.voltmx.com/sdk/latest/voltmx-android-sdk.zip)
*   [http://download.voltmx.com/sdk/latest/voltmx-ide-sdk.zip](http://download.voltmx.com/sdk/latest/voltmx-ide-sdk.zip)
*   [http://download.voltmx.com/sdk/latest/voltmx-phonegap-sdk.zip](http://download.voltmx.com/sdk/latest/voltmx-phonegap-sdk.zip)
*   [http://download.voltmx.com/sdk/latest/voltmx-plainJS-sdk.zip](http://download.voltmx.com/sdk/latest/voltmx-plainJS-sdk.zip)

  

### Issues Fixed in Foundry Console and Identity

*   Upgrade from Foundry V 6.5 to V 7.0 through Installer is supported.
*   SSL termination with JBoss cluster is supported.

### Known Issues

*   Persistent Sync is not supported for Object Services.

*   When Volt MX Foundry Messaging is installed on WebLogic, the Messaging service fails to start with Oracle database.  
    
    **Workaround  
    **
    
    For the Messaging service to work with Oracle DB, set the following parameter in the `setDomainEnv.sh` or `cmd` and run the `setDomainEnv.sh` before starting the WebLogic server.
    
    `-Dhibernate.dialect=org.hibernate.dialect.Oracle10gDialect`
    

*   When Foundry is installed on WebSphere with Java 1.6, performing create, remove, update, and delete (CRUD) operations on Object Services through runtime results in an error.
    
    **Workaround**
    
    Upgrade to Java for WebSphere version 1.7.
    
*   Sometimes, even after showing 100 percent installation progress, Foundry Installer takes around 20 more minutes to complete installation on Windows.
*   JBoss intermittently fails to start after installation. For JBoss to work properly, start JBoss server manually.

*   Desktop Web and SPA apps are not supported on WebSphere configuration.
*   Query with two AND filters is not supported in Object Services with SAP.

For SDK:

*   MBaaS6813 -Use of SDK is not supported with API proxy (pass through) services.
*   MBaaS6980 - SDK does not refresh back-end claims token when refreshing Identity claims token.
    
*   MBaaS7245 - Binary download of more than 10 MB may fail intermittently because of timeout issues.
    
*   MBaaS7272 – Windows 8 and 10 tablets send channel as “mobile” in metrics IST calls.
    

For Sync SDK:

*   MBaaS6201 - Relationship mapping is not supported from Foundry for create operation. You must edit sync configuration manually.
*   MBaaS5010 – Error reporting for failures, in child object’s operations, is not supported.
*   MBaaS5116 - Different operations in the same batch are not supported for hierarchical upload.
*   MBaaS5911 – There is no client-side support to add a cookie.
*   MBaaS5205 - An offline application with high-load requirements is not supported on Android M.
    
*   In iOS 9, the "allow self-signed certificate" flag has to be set to `YES` in order to hit the HTTPS syncconsole
