

Creating License File
---------------------

You need to host the License Generation Tool on a server, before you can proceed with creating the License.

To create a license, follow these steps:

1.  Launch the License Generating Tool.
2.  Enter the name of the Client for whom the License is being generated under Client Name (CAPITAL LETTERS).
3.  Enter the application id under App ID.
4.  For time-based License, enter the following details:
    
    1.  Click to open the calendar.
    2.  Select License Start Date and License Expiry Date.
    
    VoltMX Studio License is only time-based. Session-based License is not applicable for VoltMX Studio.
    
5.  Enter the location where you want to save the license file under **File Location Directory** (Eg: `E:\Licenses\`). The License Generation Tool encrypts the created license file with the private and public keys available in the specified folder. If the private and public keys are not available, the License Generation Tool cerates the keys for encryption.
    
    Ensure that you place the private and public encryption keys in the same folder as the license file, for uniformity and convenience.
    
6.  Click **Create License**. The license file gets created in the location you have specified in the above step.
    
    The license file that is created is a text file. The License File follows the naming convention of <Client Name>\_<AppID>\_LicenseFile.txt. For example, CITIBANK\_cbAPAC\_LicenseFile.txt.
