

Command Line Licensing Tool
---------------------------

This utility enables you to activate or deactivate your license. This activation can be performed if you intend to reuse your license across the multiple instances within an environment. This licensing tool also enables you to view the system information and set a proxy on the machine.

To work with licensing tool, follow these steps:

1.  Download the file from the [http://developer.voltmx.com/VoltMXReleases](http://developer.voltmx.com/VoltMXReleases). The downloaded file is in archived format.
2.  Extract the file to the desired folder (licensingtool).
3.  Navigate to the extracted folder through the command prompt.
4.  Use `./license.bat` file to work on the Windows environment.
5.  Use `./license.sh` file to work on the Linux environment.

The licensing tool usage on Windows environment is as displayed below:

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

Enter the value as required.

While providing the path for the license, enter the complete path including the license file name.

If you have a proxy setup for your network, provide the proxy settings first using the option 6.
