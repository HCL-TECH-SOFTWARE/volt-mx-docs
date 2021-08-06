---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Known Issues in Volt MX Foundry V9 SP1
=====================================

Installer
---------

<ul>
<li>
<p><b>Issue:</b> While the execution of a Service Task in a Workflow Service, the service task fails with the following error:</p>
<figure class="highlight">
<pre><code class="language-voltmx" data-lang="voltmx">com.voltmx.component.service.common.ServiceComponentException: Service call unsuccessful. Possible input parameter mismatch in service configuration : Property access failed in MVEL script causing exception [Error: could not access property (firstName) in: java.lang.String].
</code></pre>
</figure>
<p><b>Workaround:</b></p>
<p>To avoid this issue, perform the following step:</p>
<ol>
<li>
<p>Navigate to the installed application server folder and open the system file.</p>
<p>For example,</p>
<ul>
<li>For <b>Tomcat</b></li>
<ul>
<li>Windows : <code>catalina.bat</code></li>
<li>Linux: <code>catalina.sh</code></li>
</ul>
</ul>
<ul>
<li>For <b>JBoss</b></li>
<ul>
<li>Linux: <code>standalone.sh</code></li>
<li>Windows : <code>standalone.bat</code></li>
</ul>
</ul>
<ul>
<li>For <b>JBoss Multinode</b></li>
<ul>
<li><code>domain.sh</code></li>
</ul>
</ul>
<ul>
<li>For <b>WebSphere Liberty</b></li>
<ul>
<li><code>jvm.options</code></li>
</ul>
</ul>
</li>
<li>
<p>Add the mvel2.compiler.allow_override_all_prophandling=true as follows:</p>
<figure class="highlight">
<pre><code class="language-voltmx" data-lang="voltmx">-D property. (-Dmvel2.compiler.allow_override_all_prophandling=true ) </code></pre>
</figure>
</li>
<li>
<p>Restart the application server.</p>
</li>
</ol>
</li>
<li>
<p><b>Issue:</b> On certain system display resolutions, the Windows Installer UI may get distorted and you may face difficulties in proceeding with the installation.</p>
<br/>
<p><b>Workaround:</b> You must lower the scaling factor and/or resolution of your system and restart the installer.</p>
<br/>
</li>
<li>
<p><b>Issue:</b> Upgrading a Foundry installation on WebSphere Basic profile to IBM Liberty profile is currently unsupported.</p>
<br/>
</li>
<li>
<p><b>Issue:</b> Upgrade from 8.2.1.3 GA to V9.x gets reverted.</p>
<br/>
<p><b>Workaround:</b> Before the upgrade, execute the following SQL statement from admin database</p>
<br/>
<p>For <b>MySQL</b></p>
<p>———— delete from &lt; admindb&gt;.schema_version where script = ‘V62.1__voltmxadmin-mysql-8.2.0.0.sql’;</p>
<br/>
<p>For <b>SQLServer</b></p>
<p>———— delete from &lt; admindb&gt;.schema_version where script = ‘V62.1__voltmxadmin-sqlserver-8.2.0.0.sql’;</p>
<br/>
<p>For <b>Oracle</b></p>
<p>———— delete from &lt; admindb&gt;.schema_version where script = ‘V62.1__voltmxadmin-oracle-8.2.0.0.sql’;</p>
<br/>
</li>
<li>
<p><b>Issue:</b> While upgrading from Foundry 7.3 to Volt MX Foundry V9 and then upgrading to a version after V9, the upgrade fails due to the following error:”java.sql.SQLSyntaxErrorException: Table ‘prefixidglobaldbsuffix.schema_version’ doesn’t exist”.</p>
<br/>
<p><b>Workaround:</b> To avoid this issue, perform the following step:</p>
<ul>
<li>Delete the idglobaldb schema before upgrading to the version later than V9.</li>
</ul>
</li>
<li>
<p><b>Issue:</b> When you setup Volt MX Foundry (On-Premises) on WebSphere Liberty Profile using the Command Line Installer (CLI) the publish of the Storage application fails. The failure occurs when you enter the database type input in upper or mixed casing. The storage database type is a case-sensitive field which accepts only lowercase inputs. For example: oracle, mysql, mssql and mariadb.</p>
<br/>
<p><b>Workaround:</b> Change the database name in the following sets of schemas and tables:</p>
<ul>
<li><b>Schema:</b> ADMINDB <b>Table</b>: SERVER_CONFIGURATION <b>Field / value</b>: storage_database_type = oracle / mysql / mssql / mariadb</li>
<li><b>Schema:</b> ACCOUNTS <b>Table</b>: FEATURES <b>Field / value</b>: {“storagedatabasetype”:”oracle / mysql / mssql / mariadb”,”serverdatabasetype”:”oracle / mysql / mssql / mariadb”}</li>
</ul>
</li>
<li>
<p><b>Issue:</b> The publishing of a Storage application fails on an environment that uses the SQLServer with Windows authentication.</p>
<br/>
<p><b>Workaround:</b> In the <code>server_configuration</code> table of the Integration database(admindb) insert the key <code>VOLTMX_SERVER_IS_WINDOWS_AUTHENTICATION_ENABLED</code> with value set to <b>true</b>. Restart the application server.</p>
<br/>
</li>
<li>
<p><b>Issue:</b> While upgrading Identity from Foundry 7.0/7.1 to Volt MX Foundry V9.x with the selected database as MSSQL, the upgrade fails due to the following errors that occur due to the Flyway tool version upgraded from 3.x to 4.x:</p>
<ul>
<li>Failed to DROP INDEX “”.”schema_version_ir_idx”</li>
<li>Failed to DROP INDEX “”.”schema_version_vr_idx”</li>
</ul>
<p><b>Workaround:</b> To avoid this issue, perform the following steps:</p>
<p>Remove the version_rank column from the schema_version table in the authglobaldb by following queries before the upgrade.</p>
<figure class="highlight">
<pre><code class="language-voltmx" data-lang="voltmx">DROP INDEX schema_version_ir_idx ON dbo.schema_version
GO
DROP INDEX schema_version_vr_idx ON dbo.schema_version
GO
ALTER TABLE dbo.schema_version DROP CONSTRAINT schema_version_pk
GO
ALTER TABLE dbo.schema_version DROP COLUMN version_rank
GO
ALTER TABLE dbo.schema_version ADD CONSTRAINT schema_version_pk PRIMARY KEY CLUSTERED (installed_rank)
GO
ALTER TABLE dbo.schema_version ALTER COLUMN version nvarchar(50) NULL
GO  
</code></pre>
</figure>
</li>
</ul>