                         
Uninstalling Volt MX Foundry
===========================

This section explains how to uninstall Volt MX Foundry.

To uninstall the Volt MX Foundry, follow these steps:

<ol>
<li>Go to your Volt MX Foundry installation location. (Default location: /VoltMX/VoltMX Foundry)</li>
<li>Run <code>./Uninstall</code> file.
<pre><code>
[root@localhost mfdemo]# ls
jboss jre VoltMX_Foundry_Console_Install_01_21_2015_05_10_47.log _VoltMX Foundry Console_installation logs Uninstall

[root@localhost mfdemo]# ./Uninstall
</pre></code>
The following console appears:
<pre><code>
=====================================
VoltMX Foundry (created with InstallAnywhere)
-------------------------------------

Preparing CONSOLE Mode Uninstallation...

=====================================
Uninstall VoltMX Foundry
-----------------------------------

Thanks for choosing VoltMX Foundry.

You are about to uninstall VoltMX Foundry. This will uninstall all components. It will also remove any file or folder created in VoltMX Foundry installation directory.

PRESS &lt;ENTER&gt; TO CONTINUE:
</pre></code>
</li>
<li>
Press <b>&lt;ENTER&gt;</b>. <br>
The Delete Database console displays the alert message asking if you want to delete the database.
<pre><code>
=====================================
Delete Database
---------------
Please select whether you want to delete all VoltMX Foundry data including the database or retain data. Note that you cannot recover the data after it has been deleted.

Do you want to delete the database?
->1- Delete all data
   2- Retain all data

ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <b>&lt;ENTER&gt;</b> TO ACCEPT THE DEFAULT::
</pre></code>
</li>
<li>
To remove database, type <b>1</b> and press <b>Enter</b>. Otherwise, to continue without removing the database, type <b>2</b> and press <b>Enter</b>. <br>
A progress console appears with the progress of Volt MX Foundry uninstallation.
<pre><code>
=====================================
Uninstalling...
---------------
...* *
*************************
*************************
*************************
************************
*************************

=====================================
Uninstall Complete
------------------

All items were successfully uninstalled.
</pre></code>
</li>
Volt MX Foundry is uninstalled.
</ol>