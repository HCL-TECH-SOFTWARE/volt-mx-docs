  

Version Upgrade support for Foundry Apps and Services using MFCLI
================================================================

Overview
--------

A VoltMX Foundry application stored in the workspace comprises shared and non-shared services. Foundry supports versioning for integration services, orchestration services, and object services. Versioning is the process of assigning unique version numbers to unique states of software. Within a given version number category (major, minor), these numbers are generally assigned in increasing order and correspond to new developments in the software.

From VoltMX Foundry V9 SP3, MFCLI now the supports **Version Upgrade**. This feature helps you to update Foundry apps and services version.

MFCLI is enhanced with the `app-upgrade` and `service-upgrade` commands. Using these, you can upgrade a version of an app zip or a service zip to higher versions as required.  These commands are applicable only to those services which support versioning.

For more information on how to version a Foundry API, refer to [VoltMX Foundry API Versioning](API_Versioning.md)  
For more information on how to version a Foundry App, refer to [VoltMX Foundry Application Versioning](App_Versioning.md)

Prerequisites
-------------

*   Foundry Command Line Utility `v9.3.0.0`

**Upgrading a Foundry App**

The `app-upgrade` command generates upgraded app zip to the nearest major or minor version. All relevant services in the zip will also be upgraded to their nearest major or minor version.

When you upgrade a Foundry app, a new version of the app.zip is created in your local system. The new version is applied to the app and the linked services in it. You can specify a major or minor version for upgrading the selected app version.

**Use Case**: A Foundry app is implemented with several services according to a business requirement. Now, you want to upgrade the version of the app and all the associated services to a higher major or minor version. You can achieve this scenario by using the app-upgrade command.

The following table details a sample app with services, and the result of the app-upgrade command.


<table>

<tr>
    <th>Sample Foundry App has services with versions</th>
    <th>App-upgrade to a Major Version</th>
    <th>App-upgrade to a Minor Version</th>
</tr>
<tr>
    <td>
        <p>App v3.0</p>
        <ul>
            <li>IdentityService </li>
            <li>IntegrationServiceOne v3.0 </li>
            <li>IntegrationServiceTwo v4.1 </li>
            <li>ObjectServiceOne v6.0 </li>
        </ul>
    </td>
    <td>
        <p>App v4.0</p>
        <ul>
            <li>IdentityService</li>
            <li>IntegrationServiceOne v4.0</li>
            <li> IntegrationServiceTwo v5.0</li>
            <li> ObjectServiceOne v7.0</li>
        </ul>
    </td>
    <td>
        <p>App v3.1</p>
        <ul>
            <li>IdentityService</li>
            <li>IntegrationServiceOne v3.1</li>
            <li>IntegrationServiceTwo v4.2</li>
            <li>ObjectServiceOne v6.1</li>
        </ul>
    </td>
</tr>
</table>
 
Use the following command to upgrade the app.zip. An output app.zip file with the new version (upgrade app zip from the previous version of the app) is created.

For Cloud environment:

```
 java -jar mfcli.jar app-upgrade -u <user> -p <password> -t <account id> -clurl <cloud url> -r <output-directory> -a <app name> -v <app version> -ut <major/minor> -to <timeout in mins>  
```

For on-premise installation:

```
 java -jar mfcli.jar app-upgrade -u <user> -p <password> -au <Identity URL> -cu <Console URL> -r <output-directory> -a <app name> -v <app version> -ut <major/minor> -to <timeout in mins>
```

*   \-t, --account: 9 digit id of the VoltMX Cloud account (visible in top right corner in Console), for example, 100054321. Not relevant for an on-premise installation.
    
*   \* -a, --app: Name of the app which needs to be upgraded
    
*   \-clurl, --cloud-url: URL of cloud instance Default: <empty string>
    
*   \-cu, --console: URL of VoltMX Foundry Console (without context path), relevant for on-premise installation only. For example, `http://10.10.24.78:8081`.
    
*   \-r, --directory: Name of the directory to export to or import from. For example, C:\\\\src\\\\Sample. Either -f or -r has to be specified.
    
*   \-f, --file: Name of the file to export or import. For example, C:\\\\tmp\\\\Sample.zip. Either -f or -r has to be specified.
    
*   \-au, --identity: URL of VoltMX Foundry Identity Services (without context path), relevant for on-premise installation only. For example, `http://10.10.24.79:8080`.
    
*   \--mfa: If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file. Default: false
    
*   \-p, --password: Password for the VoltMX user. This could be plain text or, encrypted using 'encrypt' command. This is mandatory.
    
*   \-to, --timeout: Timeout for the export of the resource in minutes
    
*   \* -ut, --upgrade-type: Type of upgrade, can be either 'major' or 'minor'
    
    *   `-ut major` generates an upgraded zip to the nearest major version. All services in zip will be upgraded to their nearest major version
        
    *   `-ut minor` generates an upgraded zip to the nearest minor version. All services in zip will be upgraded to their nearest minor version
        
*   \-u, --user: VoltMX user required for authentication, for example, abc@voltmx.com. This is mandatory.
    
*   \* -v, --version: Version of the app which needs to be upgraded
    

If the multiple versions of the same app are existing in the same account, the app-upgrade will assign the next available major or minor version.  
For example, Foundry app has versions v3.0, v4.0, and v5.0 configured in the same account, and when you try to update any of these versions to a major upgrade, the app is upgraded to the next higher version. In this case, App v6.0.  
  
If the same app has a Foundry service with versions v1.0, v2.0, and v3.0 in the same account, and when you try to use the app-upgrade command for a major upgrade, the service is upgraded to the next higher version. In this case, the Service v4.0.

**Upgrading a Foundry Service**

The `service-upgrade` command generates upgraded service zip to the nearest major or minor version. Relevant services in zip will be upgraded to their nearest major or minor version.

When you upgrade a Foundry service version, a new version of the service.zip is created in your local system. You can specify a major or minor version for upgrading the selected service version.

**Use Case**: Few Foundry services are implemented in a Foundry app. Now, you want to upgrade a specific service to a higher major or minor version. You can achieve this scenario by using the service-upgrade command.

For example, the following table details a sample service zip version, and the result of the service-upgrade command.

<table>
<tr class="TableStyle-TemenosTables-Head-Header1">
    <th>Sample Foundry Service Version</th>
    <th>Service-upgrade to a Major Version</th>
    <th>Service-upgrade to a Minor Version</th>
</tr>
<tr>
    <td>Service v1.1</td>
    <td>Service v2.0</td>
    <td>Service v1.2</td>
</tr>
</table>

Use the following command to upgrade the service.zip. An output zip file with new version (upgrade service zip from the previous version of the service) is created.

For Cloud environment:

```
 java -jar mfcli.jar service-upgrade -u <user> -p <password> -t <account id> -clurl <cloud url> -r <output-directory> -s <service name> -v <service version> -ut <major/minor> -to <timeout in mins>
```

For on-premise environment:

```
 java -jar mfcli.jar service-upgrade -u <user> -p <password> -au <Identity URL> -cu <Console URL> -r <output-directory> -s <service name> -v <service version> -ut <major/minor> -to <timeout in mins>
```

*   \-t, --account: 9 digit id of the VoltMX Cloud account (visible in top right corner in Console), for example, 100054321. Not relevant for an on-premise installation.
    
*   \* -a, --app: Name of the app which needs to be upgraded
    
*   \-clurl, --cloud-url: URL of cloud instance Default: <empty string>
    
*   \-cu, --console: URL of VoltMX Foundry Console (without context path), relevant for on-premise installation only. For example, `http://10.10.24.78:8081`.
    
*   \-r, --directory: Name of the directory to export to or import from. For example, C:\\\\src\\\\Sample. Either -f or -r has to be specified.
    
*   \-f, --file: Name of the file to export or import. For example, C:\\\\tmp\\\\Sample.zip. Either -f or -r has to be specified.
    
*   \-au, --identity: URL of VoltMX Foundry Identity Services (without context path), relevant for on-premise installation only. For example, `http://10.10.24.79:8080`.
    
*   \--mfa: If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file. Default: false
    
*   \-p, --password: Password for the VoltMX user. This could be plain text or, encrypted using 'encrypt' command. This is mandatory.
    
*   \* -s, --service: Name of the service which needs to be upgraded
*   \-to, --timeout: Timeout for the export of the resource in minutes
    
*   \* -ut, --upgrade-type: Type of upgrade, can be either 'major' or 'minor'
    
    *   `-ut major` generates an upgraded zip to the nearest major version. All services in zip will be upgraded to their nearest major version
        
    *   `-ut minor` generates an upgraded zip to the nearest minor version. All services in zip will be upgraded to their nearest minor version
        
*   \-u, --user: VoltMX user required for authentication, for example, `abc@voltmx.com`. This is mandatory.
    
*   \* -v, --version: Version of the app which needs to be upgraded
    

> **Note:** If the Foundry service has versions v1.0, v2.0, and v3.0 configured in the same account, and when you try to update any of these versions to a major upgrade, the service is upgraded to the next available higher version. In this case, the Service v4.0.
