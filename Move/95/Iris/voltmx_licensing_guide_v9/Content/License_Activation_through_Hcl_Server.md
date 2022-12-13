             

VoltMX Foundry
-----------------

VoltMX Foundry needs licenses for the following components:

*   VoltMX Foundry Integration
*   VoltMX Foundry Engagement Services
*   VoltMX Foundry Sync

After acquiring the license for the desired Foundry product, activate the product by updating the `license` file path appropriately in the `middleware.properties` file.

The license expiry information will be emailed to the configured administrator's email account without interrupting the services. The warning email notifications are triggered before 30 days of license expiry at an interval of every 24 hours.

Based on component requirement, the license file will be given to you with one of the following names.

 
| Component | License File Name |
| --- | --- |
| VoltMX Foundry Integration | middleware.lic |
| VoltMX Foundry Engagement Services | middleware.lic |
| VoltMX Foundry Sync | 
sync.lic

 |

### Activating the VoltMX Foundry License

#### Manual Activation

**To activate the VoltMX Foundry license manually, follow these steps:**

1.  Download Foundry from the [DeveloperPortal](http://community.voltmx.com/downloads) and install it.
2.  From your Foundry install location, go to middleware home folder, and then open the `middleware.properties` file.
    
    For example:
    
    *   In Foundry Integration and Foundry Engagement Services, the path for middleware.properties file is : `C:\VoltMXFoundry\middleware_home\middleware\middleware-bootconfig\middleware.properties`
    *   In Foundry Sync, the path for middleware.properties file is: `C:\VoltMXFoundry\sync\middleware\middleware-bootconfig\middleware.properties`
3.  Change the `license` file path appropriately.
```
#License Parameters
    #pubkey.file.path=<Complete path of the Public Key>
    #license.file.path=<Complete path of the license file>
```
    
    In case of VoltMX Foundry Sync, change the `license` file path appropriately.
    
4.  Start the VoltMX Foundry. The license will be automatically activated on the first usage of the VoltMX Foundry.

The license will deactivated based on the expiry date.

This license is generated based on First Name (customer.firstname), Last Name (customer.lastname), and Email ID (customer.email) fields. If these fields are null, the license is generated with null values for the respective fields.

License related messages are captured in the log as described below:

*   **Server Log message for successful activation**: After the VoltMX Foundry license is activated, a confirmation message appears on the server logs as **Verified the license successfully.**
*   **Middleware Log message for successful activation**: After the VoltMX Foundry license is activated, a confirmation message appears on the middleware log in INFO mode as **INFO common.LicenseCheckTask Successfully verified.**
*   **Server Log message for unsuccessful activation**: If the VoltMX Foundry license is not activated, a confirmation message appears on the server logs as **FATAL: Unable to verify the license. Please check the license or contact your System Administrator.** This does not prevent the middleware from functioning, but needs to be resolved immediately.
