                         


How to Download and Import a Package into the JasperReports Server
------------------------------------------------------------------

To generate reports, the package .zip files must be downloaded and imported into the JasperReports Server. A package (.zip) contains the Jasper Reports source code for respective databases, such as MySQL, Oracle, MSSQL, and DB2.

### How to Download Package Files

Currently Volt MX supports JasperReports Server 6.0 and 6.2 and 7.1. Download the following appropriate package for your JasperReports Server.

> **_Important:_** New features in V6.0 are not supported with Volt MX Foundry V8 SP3 or latest.

To download a package, follow these steps:

1.  For current version reports, log in to [](http://developer.voltmx.com/VoltMXReleases)[http://community.hclvoltmx.com/downloads/manual](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_MX_Util_v9.2.x&orgId=HCL). You can obtain a user name and password from your sales representative or partner.

    *   To download older version reports, log in to [https://community.hclvoltmx.com/downloads/archive/manual]( https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/downloadPackageVersions.action?datatype=archive&lineId=HCL+Volt+MX)
        
2.  Click the **VoltMX Foundry** tab.
3.  From the **VoltMX Metrics-Jasper Reports** list, select the specific release and then click **Download**. The jasper-reports zip is downloaded to you local system
    
    For example, if you want to download `VoltMX Metrics-Jasper Reports 7.0.1`, click the **VoltMX Foundry** > tab, select the `7.0.1` version from the **VoltMX Metrics-Jasper Reports** drop-down list, and then click the **Download** button. The jasper-reports zip is downloaded to you local system.
    
4.  Extract the downloaded zip files. The jasper-reports zip folder contains supported database repositories (for MySQL, Oracle, MS SQL, and DB2) for JasperReports Server V6.0 or V6.2 or V7.1.

### How to Run Database Scripts to Import Packages

To import a package to the JasperReports Server, follow these steps:

> **_Important:_** Ensure that the user must have read/write execute permissions to the JasperReports Server install folder.

#### Windows

1.  In the Jasper installed system, open the Windows command prompt.
2.  Go to the `<path of the extracted package>` of the required database.
    
3.  Run the `voltmx_imports.bat` script followed by the JasperServer location as the input.
```
`voltmxreports_import.bat` ``<jasperinstall-dir>
    
    `C:/Jaspersoft/jasperreports-server-<6.0> or <6.2.0> or <7.1.0>` ``
```

#### Linux

1.  Open the Linux terminal.
2.  Go to the `<path of the extracted package>` of the required database.
    
3.  Run the `voltmxreports_import.sh` script followed by the JasperServer location as the input.
```
voltmxreports_import.sh <jasperinstall-dir>
    
    /usr/jaspersoft
```
