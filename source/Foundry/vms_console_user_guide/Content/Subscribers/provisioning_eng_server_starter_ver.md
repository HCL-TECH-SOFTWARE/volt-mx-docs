                           

You are here: Provisioning Engagement Server in starter version of Volt MX Foundry

Provisioning Engagement server in Starter Version of Volt MX Foundry
===================================================================

From Volt MX Foundry release V8 onwards, when a new user signs up for a starter version of Volt MX Foundry, Volt MX Engagement server allows only limited number of users and subscribers. At present the user creation limit is set to 100 users and device limit is set to 200 devices.

User limits
-----------

1.  When a customer tries to create a new user beyond permissible limit, the Engagement server console displays an error message:
```
The limited number of allowed users already exist. Delete an existing user before adding a new user or contact sales@voltmx.com on how to upgrade your service.
```
2.  The Engagement server displays the same error message mentioned above, when a user tries to create a new user either from the User Interface or through the Import Users API.

Device Limit
------------

1.  When a customer tries to create a new device beyond permissible limit, the Engagement server console displays an error message:
```
The limited number of allowed devices already exist. Please delete an existing device before adding a new device or contact sales@voltmx.com on how to upgrade your service.
```
