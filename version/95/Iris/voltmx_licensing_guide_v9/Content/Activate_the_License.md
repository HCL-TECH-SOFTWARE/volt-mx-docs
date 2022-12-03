 

Activating License
------------------

The file name of the license file that is provided to you may have the following nomenclature based on the product you purchased.

   
| VoltMX Studio | VoltMX Server | VoltMX Sync Services | VoltMX Management |
| --- | --- | --- | --- |
| ide. lic | middleware.lic | sync.lic | mam.lic |
|   | server.lic |   | emm.lic |
|   | platform.lic |   |   |
|   | serverb2e.lic |   |   |
|   | serverb2c.lic |   |   |
|   | platformb2e.lic |   |   |
|   | platformb2c.lic |   |   |

To activate license with the licensing tool, follow these steps:

1.  Download the file from the [http://developer.voltmx.com/VoltMXReleases](http://developer.voltmx.com/VoltMXReleases). The downloaded file is in archived format.
2.  Extract the file to the desired folder (licensingtool).
3.  Navigate to the extracted folder through the command prompt.
4.  Use `./license.bat` file to work on the Windows environment or use `./license.sh` file to work on the Linux environment. After the tool is initiated, the _Licensing Tool_ view appears.
```
Licensing Tool ...  
    \------------------  
    1\. Show system information  
    2\. VoltMX Studio licensing  
    3\. VoltMX Server licensing  
    4\. VoltMX Sync licensing  
    5\. VoltMX MAM licensing  
    6\. Set HTTP Proxy  
    0\. Exit  
    Select an option (0-6): 1
```
5.  Type **1** and press **Enter**. The _Host Info_ view is displayed.
```
Host Info...  
    \------------  
    Java Version  : 1.6.0\_21  
    Username      : XYZ  
    MAC Address   : d8.d3.85.24.b7.66.  
    HTTP Proxy    : Not Set  
    HTTP Proxy user/pass: Not Set  
    Press Enter To Continue ...
```
6.  Verify the information and then press **Enter**. The _Licensing Tool_ view appears again.
```
Licensing Tool ...  
    \------------------  
    1\. Show system information  
    2\. VoltMX Studio licensing  
    3\. VoltMX Server licensing  
    4\. VoltMX Sync licensing  
    5\. VoltMX MAM licensing  
    6\. Set HTTP Proxy  
    0\. Exit  
    Select an option (0-6): 2
```
7.  Type **2** and then press **Enter**. The _VoltMX Studio Licensing_ view appears.
```
VoltMX Studio Licensing ...  
    \----------------------------  
    Found license, but it is no longer valid. Do you want to see more details?(1 for   
    yes/0 for no):0  
    1\. Activate a new license  
    2\. Deactivate the license  
    3\. Show info about a specific license  
    0\. Go back  
    Select an option (0-3): 1  
    
```
8.  Type **1** and then press **Enter**. The license details view appears.
```
Enter the license file location: C:\\Users\\admin\\Desktop\\licensing\\ide.lic  
    Enter user details ...  
    First name: peter  
    Last name: jones  
    Email: peter.jones@voltmx.com  
    log4j:WARN No appenders could be found for logger (org.apache.axis.i18n.ProjectResourceBundle).  
    log4j:WARN Please initialize the log4j system properly.  
    License activation succeeded. License is ok
```
9.  Enter the **License file location**.
10.  Enter user details, such as **First name**, **Last name**, and **Email**.
11.  Press **Enter**. The valid license is activated.
```
VoltMX Studio Licensing ...  
    \----------------------------  
    You have a valid license.  
    License version: .lic  
    License state: ok  
    License type: commercial  
    License username: kh1155  
    License start date: Mon Nov 19 00:01:00 IST 2012  
    License end date: Wed Dec 19 23:59:59 IST 2012  
    Do you want to see more details (1 for yes/0 for no):0
```
