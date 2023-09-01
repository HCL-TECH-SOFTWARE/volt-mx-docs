                         


How to Download and Import a Package into the JasperReports Server
------------------------------------------------------------------

To generate reports, the package .zip files must be downloaded and imported into the JasperReports Server. A package (.zip) contains the Jasper Reports source code for respective databases, such as MySQL, Oracle, MSSQL, and DB2.

### How to Download Package Files


To download a package, follow these steps:

1.  For current version reports, log in to https://hclsoftware.flexnetoperations.com/
Download Selected Files - FlexNet Operations End-User Portal: 
(https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_MX_Util_v9.5.x&orgId=HCL&fromRecentFile=false&fromRecentPkg=false&fromDL=false)


    *   To download older version reports, log in to [https://community.hclvoltmx.com/downloads/archive/manual]( https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/downloadPackageVersions.action?datatype=archive&lineId=HCL+Volt+MX)

    Click the Download button. The jasper-reports zip is downloaded to your local system.

    Extract the downloaded zip files. The jasper-reports zip folder contains supported database repositories (for MySQL, Oracle, MS SQL, and DB2) for JasperReports Server V7.1.


### How to Run Database Scripts to Import Packages

To import a package to the JasperReports Server, follow these steps:

> **_Important:_** Ensure that the user must have read/write execute permissions to the JasperReports Server install folder.

<b>Windows:</b>
<ol>
<li>In the Jasper installed system, open the Windows command prompt.</li>
<li>Go to the &lt;path of the extracted package&gt; of the required database.</li>
<li>Run the voltmx_imports.bat script followed by the JasperServer location as the input.</li>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">
VoltMXreports_import.bat&lt;jasperinstall-dir&gt;
C:/Jaspersoft/jasperreports-server-&lt;7.9.2&gt; or &lt;7.1.0&gt;
</code></pre>
</ol>

<b>Linux:</b>
<ol>
<li>Open the Linux terminal.</li>
<li>Go to the &lt;path of the extracted package&gt; of the required database.</li>
<li>Run the voltmxreports_import.sh script followed by the JasperServer location as the input.</li>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">
voltmxreports_import.sh&lt;jasperinstall-dir&gt;
/usr/jaspersoft
</code></pre>
</ol>
