
# Install Volt MX Iris

To install Volt MX Iris on your Mac computer, follow these steps:

You must have administrative rights on your computer to install Volt MX Iris.

1.  Navigate to the location of the downloaded installer file.
2.  Extract the contents of the zip file.
3.  Double-click the installer.  
    The Volt MX Iris installation window appears.
4.  Click **Next**.

    [![](Resources/Images/install_01_thumb_384_192.png)](Resources/Images/install_01.png)

    The **Select Installation Folder** pane appears

5.  Click **Choose** to select a folder on the drive where you want to install Volt MX Iris.  
    Click **Restore Default Folder** to reset the default installation folder.

    [![](Resources/Images/install_2.png)](Resources/Images/install_2.png)

    > **_Note:_** The Workspace folder contains all your Volt MX Iris projects.

6.  Click **Next**.  
    The **Select Workspace Folder** pane appears.
7.  Click **Choose** to select a folder on the drive to be used as Iris workspace.  
    Click **Restore Default Folder** to reset the default Iris workspace.

    [![](Resources/Images/install_3.png)](Resources/Images/install_3.png)

    > **_Note:_** The Workspace folder holds all your Iris projects.

8.  Click **Next**.  
    The **License Agreement** pane appears.
9.  Read the License Agreement carefully. If you accept the terms of the agreement, click the **I Accept the terms of the License Agreement** option, and then click **Install**.  
    The **Installing** Volt MX Iris page appears, and the installation begins.

    [![](Resources/Images/l7.2_Lic_agreement_thumb_0_288.png)](Resources/Images/l7.2_Lic_agreement.png)

10. After the installation is complete, the **Install Complete** window appears.

11. The pane provides a QR code to download the Volt MX Iris App. Scan the QR code to download the app.

    > **_Note:_** The QR code is developed using a third party library, QRCode.js (version 0.0.1 & [license](https://github.com/davidshimjs/qrcodejs/blob/master/LICENSE)). This is not bundled with the app. This library is bundled with Volt MX Iris Installer.

12. You can choose to select **Launch Volt MX Iris** and click **Done**. Volt MX Iris sends anonymous usage data to Volt MX. The intent is to use this data to help Volt MX better understand how the application is being used. To turn off anonymous usage data collection in Iris, deselect the necessary check box under **Iris**\>**Preferences**\>**General**.

[![](Resources/Images/qr_install_thumb_384_192.png)](Resources/Images/qr_install.png)


## Configuring Volt MX Iris to Use a Proxy Server

> **_Note:_** If your computer is not configured behind a proxy server, you can skip this section and move onto the next section: [Launching Volt MX Iris](Launching VoltMX Iris.md).

When your system is a part of an internal network and connects to the internet using a proxy server, you need to modify the Volt MX Iris configuration settings to bypass proxy server and access internet.

You can use one of the following methods to configure Volt MX Iris to use a proxy server:

- [Basic Proxy](#basic-proxy): Provides steps to configure your basic proxy settings to allow Iris access the Internet.
- [NTLM Proxy](#ntlm-proxy): Provides steps to configure your proxy settings to allow Iris access internet.
- [Custom NTLM Proxy](#custom-ntlm-proxy): Provides steps to customize and configure proxy settings to allow Iris access internet.

## Basic Proxy

For enabling Iris to use a Basic proxy, follow these steps:

1.  In Volt MX Iris, click **Edit** > **Preferences**.  
    The **Iris Preferences** window appears.  
    ![](Resources/Images/Preference Option_248x319.png)
2.  Click the **Proxy** tab.
3.  Under the **Proxy Settings** section, select the **Enable Proxy** check box.
    ![](Resources/Images/Proxy_Prefer.png)
4.  From the **Proxy Type** list, select the type of the Proxy Service that you want to configure, either Basic or NTLM.

    > **_Note:_** You can only configure a BASIC Proxy.

5.  In the **Proxy Host** text box, enter the value of the proxyHost.
6.  In the **Proxy Port** text box, enter the value of the proxyPort.
7.  In the **Proxy Username** text box, enter the username to sign in to the Proxy Server.
8.  In the **Proxy Password** text box, enter the password to sign in to the Proxy Server.
9.  In the **No Proxy Hostnames** text box, enter the URL of the domain that must bypass the Proxy server. You can also provide a list of URLs separated by commas.
10. After you provide all the inputs, click **Validate** to verify the connection.  
    Once all the details are validated, the Done button is enabled.
11. Click **Done**.

## [](#ntlm-proxy)NTLM Proxy

To configure Iris to use an NTLM proxy, follow these steps:

1.  Navigate to the **VoltMX Iris** installation folder > **Config** folder (ex. Applications/VoltMXIris/Config).
2.  Open the _proxy_config.js_ file.
3.  Edit the following details between the comments : "USER EDITABLE SECTION START" and "USER EDITABLE SECTION END": <pre><code style="display:block;background-color=#eee;">//USER EDITABLE SECTION START 
    &frasl;&#8270;
    In case of NTLM custom config only PROXY_TYPE and CNTLM_PORT ProxyConfig parameters
    are required. Rest can be left undefined.Custom CNTLM config can also be generated by
    using cntlmconf.sh on mac  
    e.g.  
    ./cntlmconf.sh -u NTLMUSER -d DOMAIN -s PROXY-IP:PROXY-PORT
    &#8270;&frasl; 
    //To enable proxy, change the following value to <em>true</em>.  
    var ENABLE_PROXY = false;

    //Provide Proxy IP address.  
    var PROXY_IP = 'XXX.XXX.XXX.XXX';

    //Provide NTLM Domain address.  
    var NTLM_DOMAIN = XXXXXXX.com';

    //Provide NTLM server port number.  
    var PROXY_PORT = 8080;

    &frasl;&#8270;
    Provide your username.
    Note: Do not provide the domain name in the username. For example, if your username
    is <u>user@domain.com</u>, enter the username as <u>user</u>.
    &#8270;&frasl;  
    var PROXY_USER = 'XXXXXX';

    //Provide your password.  
    var PROXY_PWD = 'XXXXXX';

    //If the type of proxy used is basic, replace NTLM_PROXY with BASIC_PROXY.  
    var PROXY_TYPE = PTYPE.NTLM_PROXY;

    //USER EDITABLE SECTION END
    </code></pre>

4.  Save the _proxy_config.js_ file.

## Custom NTLM Proxy

<p>To configure Iris to use a custom NTLM proxy, follow these steps:</p>
<ol>
<li>Navigate to the <b>Volt MX Iris</b> installation folder > <b>Config</b> folder (ex. Applications/Iris/Config).</li>  
<li>Open the <em>proxy_config.js</em> file.</li>  
<li>Edit the following details between the <b>USER EDITABLE SECTION START</b> and <b>USER EDITABLE SECTION END</b>.<pre><code style="display:block;background-color=#eee;">//USER EDITABLE SECTION START
 /*
In case of NTLM custom config only PROXY_TYPE and CNTLM_PORT ProxyConfig 
paramaters are required. Rest can be left undefined.
Custom CNTLM config can also be generated by using cntlmconf.sh on 
mac
 e.g.
./cntlmconf.sh -u NTLMUSER -d DOMAIN -s PROXY-IP:PROXY-PORT

\*/
//To enable proxy, change the following value to true.
var ENABLE_PROXY = false;

//Type Proxy IP address.
var PROXY_IP = 'XXX.XXX.XXX.XXX';

//Type NTLM Domain name.
var NTLM_DOMAIN = 'XXXXXXX.com';

//Type NTLM server port number.
var PROXY_PORT = 8080;

//Type your Username. Note: If your user name is user@domain.com,
then enter the username as useronly. Domain name is not required.
var PROXY_USER = 'XXXXXX';

//Type your password.
var PROXY_PWD = 'XXXXXX';

//If the type of proxy used is basic, replace NTLM_PROXY with BASIC_PROXY.
var PROXY_TYPE = PTYPE.NTLM_PROXY;
//Change the value to false
var GENERATE_NTLM_CONF = false;
//USER EDITABLE SECTION END</code></pre></li>

<li>Save and close the <em>proxy_config.js</em> file.</li>  
<li>Navigate to the <b>Iris</b> installation folder > <b>nw</b> folder> <b>nw-mac</b> folder (ex. Applications/VoltMXIris/nw/nw_mac).
<blockquote><b><em>Note: </em></b>For some NTLM v1 and v2 configurations, the default generated <b>cntlm.conf</b> file may not work. In such cases, you need to customize your proxy settings.</blockquote></li>  
<li>Open the <b>cntlm.conf</b> file.</li>  
<li>Modify the following parameters:
<pre><code style="display:block;background-color:#eee;">//Type user name
Username    my_proxy_user;
//Type Domain name
Domain my_proxy_domain.com;
//Type the Proxy address:portnumber
Proxy my_proxy_server:8080;</code></pre></li>  
<li>Save and close the <em>cntlm.conf</em> file.</li>  
<li>To generate the profile, follow these steps:
<ol type="a">
<li>Open a Command Prompt window in the current folder.</li>
<li>Execute <em>cntlm.exe -c cntlm.conf -I -M http://xxxx.com</em>.</li>      
<li>Type your NTLM password, if requested, to generate a profile.</li>      
<li>Copy the generated profile.</li>
</ol>
</li>  
<li>Reopen the cntlm.conf file.</li>
<li>Append the profile details (copied from step 9). A portion of the cntlm.conf file after appending the parameters is shown:
<pre><code style="display:block;background-color:#eee;">Username    my_proxy_user
Domain      my_proxy_domain.com
Proxy       my_proxy_server:8080
NoProxy     localhost, 127.0.0.*, 10.*, 192.168.*
Gateway     no
Listen      3128
Auth            NTLMv2
PassNTLMv2      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</code></pre></li>   
<li>Save the <em>cntlm.conf</em> file.</li>  
<li>Move the <em>cntlm.conf</em> file to User Profile folder /user name/Iris/irisdata (for example, /Users/Iris/irisdata).</li>
</ol>

## White-list Essential Domains

Ensure that you contact your system administrator and white-list the following domain URLs:

- https://api.hclvoltmx.com
- https://manage.hclvoltmx.com
- https://manage.demo-hclvoltmx.com
- https://visualization.hclvoltmx.com
- https://accounts.auth.hclvoltmx.com
- https://download.hclvoltmx.com
- https://community.hclvoltmx.com
- https://cloud-metrics.hclvoltmx.net
- https://opensource.hcltechsw.com
- https://hcl-tech-software.github.io
- https://hclvoltmx-prototypetransit.s3.amazonaws.com


