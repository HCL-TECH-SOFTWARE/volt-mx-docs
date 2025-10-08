                         


How to Download and Import a Package into the JasperReports Server
------------------------------------------------------------------

To generate reports, the package .zip files must be downloaded and imported into the JasperReports Server. A package (.zip) contains the Jasper Reports source code for respective databases, such as MySQL, Oracle, MSSQL.

### How to Download Package Files


To download a package, follow these steps:

*  For current and older version reports, check the Volt MX Utilities on [MHS Portal](https://my.hcl-software.com/downloads/voltmx/utilities)

    Click the relevant version and then **Download** button. The jasper-reports zip is downloaded to your local system.

    Extract the downloaded zip files. The jasper-reports zip folder contains supported database repositories (for MySQL, Oracle, MS SQL) for JasperReports Server V8.2.0


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
C:/Jaspersoft/jasperreports-server-&lt;8.2.0&gt;
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
