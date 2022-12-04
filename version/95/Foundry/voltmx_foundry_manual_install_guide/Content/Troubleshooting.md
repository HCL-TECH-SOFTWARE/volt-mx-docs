                             

FAQs and Troubleshooting
========================

<ul type="disc">
<li>
<p><b>Issue</b>: When you setup Volt MX Foundry (On-Premises) on WebSphere Liberty Profile using the Command Line Installer (CLI) the Storage DB feature fails. The failure occurs because the storage database type is a case-sensitive field which accepts only lowercase inputs. For example: oracle, mysql, mssql and mariadb. Whereas the CLI sets the database name in uppercase.</p> 
<br/>
<p><b>Workaround</b>: Change the database name in the following sets of schemas and tables:</p>
<ul type="circle">
<li>
<p><b>Schema</b>: ADMINDB</p><br/>
<p><b>Table</b>: SERVER_CONFIGURATION</p><br/>
<p><b>Field / value</b>: storage_database_type = oracle / mysql / mssql / mariadb</p><br/>
</li>      
<li>
<p><b>Schema</b>: ACCOUNTS</p><br/>
<p><b>Table</b>: FEATURES</p><br/>
<p><b>Field / value</b>: {"storagedatabasetype":"oracle / mysql / mssql / mariadb","serverdatabasetype":"oracle / mysql / mssql / mariadb"}</p><br/>
</li>
</ul>
</li>
<li>
<p><b>Issue</b>: The upgrade installation is rolling back with Validate failed from 8.2.1.3</p> 
<br/>
<p><b>Workaround</b>: Before Upgrade, execute below SQL statement from admin database</p>
<pre><code style="display:block;background-clor:#eee;"><u>For <b>MySQL</b></u>
delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-mysql-8.2.0.0.sql';

<u>For <b>SQLServer</b></u>
delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-sqlserver-8.2.0.0.sql';

<u>For <b>Oracle</b></u>
delete from &lt;admindb&gt;.schema_version where script = 'V62.1__voltmxadmin-oracle-8.2.0.0.sql';</code></pre>
</li>
<li>
<p><b>Issue</b>: If you upgrade the integration service or install on new server using the existing database but with a different server details like fully qualified URL port, and when you publish an app, the app publish fails.</p> 
<br/>
<p><b>Workaround</b>: You must update management server details in the <code>server_configuration</code> table in admin database.</p>
</li>
<li>
<p><b>Issue</b>: If your service provider's certificate is not configured, the system displays an error - "peer not authenticated."</p>
<br/>
<p><b>Workaround</b>: For trusted certification issues, refer to <a href="Post-Installation_Tasks.html#configuring-secure-sockets-layer-ssl-certificate">Service Provider's Certificate Issues.</a></p>
</li>     
<li>
<p><b>Issue</b>: During design time of your app, the system throws errors due to several reasons.</p> 
<p>For example:</p>
<pre><code style="display:block;background-clor:#eee;">Caused by: com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: The size of BLOB/TEXT data inserted in one transaction is greater than 10% of redo log size. Increase the redo log size using innodb_log_file_size.
</code></pre>
<p></p>
<p><b>Workaround</b>: Increase the innodb_log_file_size. For more details, refer to <a href="Database_Prerequsites.html#increase-innodb_log_file_size-in-myini-file-for-engagement-services">Increase innodb_log_file_size in the my.ini file.</a></p>
</li>
<li>
<p><b>Issue</b>: When customer wants to install Volt MX Foundry with Oracle as database type, the system throws the error: <code>Invalid Data Type SDO_GEOMENTRY</code></p> 
<br/>
<p><b>Workaround</b>: Install Oracle locator, which is required for Volt MX Foundry installation. For more details, refer to <a href="Pre-installation_Tasks_JBoss.html#create-locator-component-for-oracle-database">Pre-installation Tasks > Create Locator Component for Oracle Database</a></p>
</li>
<li>
<p><b>Issue</b>: Admin health-check fails as access to reporting and storage Database is failing on JBoss with MariaDB.</p>
<br/>
<p><b>Workaround</b>: </p> 
<ol>
<li>Add the MySQL Connector jar in the  <code>admin.war/WEB-INF/lib</code> folder.</li>
<li>Add the MySQL Connector jar in the <code>services.war</code> for the Runtime RDBMS and storage services to work.</li>
</ol>
<blockquote>
<em><b>Note: </b></em>This is applicable for JBoss multi-node and pre-configured JBoss, but not for the bundled JBoss.
</blockquote>
</li>
<li>
<p><b>Issue</b>: After entering Database details the DB connection fails with the following error:</p> 
<br/>
<p><img src="Resources/Images/error_troubleshooting.png"/></p><br/>
<p></p>
<p><b>Workaround</b>: The password used for the Database must not contain exclamation marks (!).</p> 
</li>    
<li>
<p><b>Issue</b>: On Oracle Database, the following error occurs while upgrading the Volt MX Foundry Installer to version 8.2 or above from earlier versions:</p> 
<pre><code style="display:block;background-clor:#eee;">Invalid Column Type 16</code></pre>
<p></p>
<p><b>Workaround</b>: Update the <code>authService.properties</code> with Oracle10gDialect as follows:</p> 
<pre><code style="display:block;background-clor:#eee;">hibernate.dialect=org.hibernate.dialect.Oracle10gDialect</code></pre>
</li>   
<li>
<p><b>Issue</b>: If you are using any lower versions of MySQL 5.7 such as v5.7.12 or lower during installation, you may encounter an error due to which the installation rolls back. This error occurs due to a bug in the MySQL database.</p> 
<p>For more information, refer <a href="https://bugs.mysql.com/bug.php?id=79286">MySQL Bugs</a></p>
<p>Following are the error details:</p>
<ul type="disc">
<li><b>Error</b>: Migration V810_27_01__DeleteDuplicateAcsUserIdProviderGuidRowsAddUniqueConstraint.sql failed</li>
<li><b>SQL State</b>: HY000</li>
<li><b>Error Code</b>: 1093</li>
<li><b>Error Message</b>: You can't specify target table 'users' for update in FROM clause</li>
<li><b>Location</b>: &lt;Location where the installation is done&gt;</li>
</ul>
<p></p>
<p><b>Workaround</b>: To resolve this issue, refer <a href="Database_Prerequsites.html#applicable-for-identity-services">Prerequisites for Volt MX Foundry with MySQL- Applicable for Identity Services.</a></p> 
</li>
</ul>



Hostname/Port changes for Tomcat Application Server
---------------------------------------------------

Volt MX  Foundry On-Premises Installer provides a script to change the Hostname or Port of the installed Volt MX Foundry instance. In your installed Tomcat Application Server, you must also perform the following changes:

In `//tomcat/webapps/apiportal/WEB-INF/classes/config.properties`, replace the existing URL with the new URL in the following fields:

*   `VOLTMX_ACCOUNT_API_BASE_URL=`
*   `VOLTMX_DEVELOPER_PORTAL_BASE_URL=`

In `//tomcat/webapps/mfconsole/WEB-INF/classes/config.properties`, replace the existing URL with the new URL in the `VOLTMX_ACCOUNT_API_BASE_URL=` field.

In `//tomcat/conf/server.xml`, replace the port number with the new port number in the `<Connector server="VoltMX" port=` field.

In `//tomcat/webapps/accounts/WEB-INF/classes/accounts.properties`, replace the port number with the new port number in the following fields:

*   `VOLTMX_INTEGRATION_SERVICE_PORT=`
*   `VOLTMX_MESSAGING_SERVICE_PORT=`

How to Configure JBoss Cluster
------------------------------

*   Refer to [https://access.redhat.com/solutions/218053](https://access.redhat.com/solutions/218053) to setup EAP in Domain mode.
*   Refer to [https://docs.jboss.org/mod\_cluster/1.1.0.html/Quick\_Start\_Guide.html](https://docs.modcluster.io/#jboss-as) to configure the mod\_cluster.
    *   Refer to [https://access.redhat.com/solutions/2332111](https://access.redhat.com/solutions/2332111) to integrate the mod\_cluster with JBoss.


<h2 id="how-to-configure-volt-mx-foundry-behind-a-reverse-proxy">How to Configure Volt MX Foundry Behind a Reverse Proxy</h2>
<p>If you want to access everything via a proxy URL, including Volt MX Foundry Console (for example, design time for your app developers) and authService, and integration services (for example, runtime from users using your apps), follow these steps:</p>
<ol>
<li>Install Volt MX Foundry with internal details like your internal IP and HTTP port.</li>
<li>After installation, stop Volt MX Foundry Console (without configuring authservice details) and update the below properties files:
<ol type="a">
<li>In the <code>accounts.war/WEB-INF/classes</code>  folder, open the <code>accounts.properties</code>  file and update the below properties with a public URL instead of the private URL. By default, the private URL is set during installation:
<p><code>WAAS_BASE_URL=&lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/workspace</code></p>
<p>Examples of proxy URLs:</p>
<ol>
<li><code>WAAS_BASE_URL=http://test.voltmx.com/workspace</code></li>
<li><code>WAAS_BASE_URL=https://test.voltmx.com:8443/workspace</code></li>
<li><code>WAAS_BASE_URL=http://test.voltmx.com:8080/workspace</code></li>
</ol>
</li>
<li>Following are the changes to be made in the war for each App Server:
<ol>
<li><b>Tomcat</b>: In <code>mfconsole.war/WEB-INF/classes</code>, open the <code>config.properties</code> file, and update the <code>VOLTMX_ACCOUNT_API_BASE_URL= &lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/accounts/api/v1_0/</code>property with a public URL instead of the private URL that was generated during installation.</li>
<li><b>JBoss - Standalone (Bundled JBoss)</b>: In <code>Standalone/deployments/mfconsole.war</code>, open the config.properties file, and update the <code>VOLTMX_ACCOUNT_API_BASE_URL=&lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/accounts/api/v1_0/</code> property with a public URL instead of the private URL that was generated during installation.</li>
<li><b>JBoss - Pre-configured and Domain mode</b>: Take a backup of the existing war. Undeploy <code>mfconsole.war</code>. In <code>mfconsole.war/WEB-INF/classes</code>, open the <code>config.properties</code> file, update the <code>VOLTMX_ACCOUNT_API_BASE_URL=&lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/accounts/api/v1_0/</code> property with a public URL instead of the private URL that was generated during installation, and re-deploy the war file.</li>
</ol>
</li>
</ol>
</li>
<li>Start Volt MX Foundry Console.</li>  
<li>Launch your Volt MX Foundry Console in the browser by using <code>&lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/mfconsole</code>. The auth setup page appears.</li>
<li>Enter the auth URL with public URL like <code>&lt;PUBLIC_URL_OF_YOUR_APACHE&gt;/authService</code>. If you provide an internal IP here, appconfig will show internal IPs.</li>
<li>Also after log in to Volt MX Foundry Console, while registering server, provide the <code>PUBLIC_URL</code> to register integration server. Now all the URLs will have the public hostnames.
<p>If you want to give public access only to runtime services like authservice and integration services you can skip step 2 and step 3 from the above procedure. This will make sure service document will have all public URLs</p>
<blockquote><em><b>Note</b></em>: Proxy configuration should have preserver host directive for Volt MX Foundry to work correctly after start up.<br/><br/>
For example, in case of apache proxy, use <code>ProxyPreserveHost On</code> and in case of NGINX, use <code>proxy_set_header Host $host;</code>(For more information, refer <a href="https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy#passing-request-headers">Passing request headers</a>)</blockquote>
</li>
</ol>
    

How to Configure Frontend HTTPS to Tomcat HTTP Redirection
----------------------------------------------------------

If you are installing Volt MX Foundry on Tomcat on HTTP and wants to route requests via HTTPS apache or load balancer, add a connector in the `tomcat/server.xml` with the following attributes:

proxyName="<ProxyHost>" proxyPort="<ProxyPort>" scheme="https" secure="true"

**Example**:

<pre><code style="display:block;background-clor:#eee;">&lt;Connector server="VoltMXTEST" port="8080" protocol="HTTP/1.1" proxyName="mbaastest10.hcl.net" proxyPort="443" scheme="https" secure="true" maxHttpHeaderSize="8192" maxThreads="150" enableLookups="false" acceptCount="25" disableUploadTimeout="true" tcpNoDelay="true" compression="on" compressableMimeType="text/css,text/javascript,text.html" connectionTimeout="20000" URIEncoding="UTF-8"/&gt;</code></pre>


How to Change Log Levels
------------------------

Refer to [How to Change Log Levels](Change_Log_Levels.md).

Also, refer to [Accessing Logs in Volt MX Foundry On-Premise Install](https://support.hcltechsw.com/csm?sys_kb_id=bb2c354e1bd3ac98534c4159cc4bcb43&id=kb_article_view&sysparm_rank=4&sysparm_tsqueryId=cc87f66f1b52f010a2f48661cd4bcb3f).
