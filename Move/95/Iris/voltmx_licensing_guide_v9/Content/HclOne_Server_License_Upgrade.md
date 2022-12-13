

VoltMX Server License Upgrade
---------------------------

After acquiring the upgraded license, you need to update the `license path` in the `middleware.properties` file appropriately.

**To upgrade the license, execute the following steps:**

1.  Download the `middleware` binary from the following location: [http://developer.voltmx.com/DeveloperPortal](http://developer.voltmx.com/DeveloperPortal)
2.  From the binary, open `middleware.properties` file.
3.  Change the `license` file path to the upgraded license file.
4.  Start the VoltMX Server.The license will be automatically upgraded.

This license is generated based on First Name (customer.firstname), Last Name (customer.lastname), and Email ID (customer.email) fields. If these fields are null, the license is generated with null values for the respective fields.

After the VoltMX Server license is upgraded, a confirmation message appears on the server logs as **Verified the license successfully.**

After the VoltMX Server license is upgraded, a confirmation message appears on the middleware log in INFO mode as **INFO common.LicenseCheckTask - Time Based License verified.**

If the VoltMX Server license is not upgraded, a confirmation message appears on the server logs as **FATAL: Unable to verify the license. Please check the license or contact your System Administrator.**
