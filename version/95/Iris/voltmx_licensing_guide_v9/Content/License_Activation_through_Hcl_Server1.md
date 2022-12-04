

VoltMX Server
-----------

After acquiring the license, activate the product by updating the `license` file path appropriately in the `middleware.properties` file.

The license expiry information will be emailed to the configured administrator's email account without interrupting the services. The warning email notifications are triggered before 30 days of license expiry at an interval of every 24 hours.

Based on your requirement we will provide you the license file with one of the following names.

*   middleware.lic
*   server.lic
*   platform.lic
*   serverb2e.lic
*   serverb2c.lic
*   platformb2e.lic
*   platformb2c.lic

### Activating the VoltMX Server License

**To activate the VoltMX Server license, follow these steps:**

1.  Download the `middleware` binary from the [DeveloperPortal](http://developer.voltmx.com/DeveloperPortal).
2.  From the binary, open `middleware.properties` file.
3.  Change the `license` file path appropriately.
4.  Start the VoltMX Server. The license will be automatically activated on the first usage of the VoltMX Server based on primary MAC ID of the host.

*   In license validation on WebSphere, VoltMX supports only Oracle JDK. Middleware license does not get validated on WebSphere if the server has IBM JDK. This is an expected behavior for license validation on WebSphere. This behavior is present in Middleware 5.0 and higher versions.
*   This license is generated based on First Name (customer.firstname), Last Name (customer.lastname), and Email ID (customer.email) fields. If these fields are null, the license is generated with null values for the respective fields.

License related messages are captured in the log as described below:

*   **Server Log message for successful activation**: After the VoltMX Server license is activated, a confirmation message appears on the server logs as **Verified the license successfully.**
*   **Middleware Log message for successful activation**: After the VoltMX Server license is activated, a confirmation message appears on the middleware log in INFO mode as **INFO common.LicenseCheckTask Successfully verified.**
*   **Server Log message for unsuccessful activation**: If the VoltMX Server license is not activated, a confirmation message appears on the server logs as **FATAL: Unable to verify the license. Please check the license or contact your System Administrator.** This does not prevent the middleware from functioning, but needs to be resolved immediately.
