                             


Logging
=======

Logging screen displays a list of all the services related actions initiated within the console by users, for example, if you have performed push notifications for an API, the system displays details about this action in the Logging screen.

Logging feature allows you to effectively get feedback about all the activities of the packages currently available in Volt MX Foundry Engagement Services and the actions taken against problems that occurred. You can select any one of the levels to categorize the log details as Debug or Error, and then save the log details to take actions outside Volt MX Foundry Engagement Services by a technical personnel.

> **_Note:_** The Logging section is applicable for Volt MX Foundry Engagement Services on-premises version only.

> **_Important:_** As a user, you must have the following permissions to access Logging screen and perform different tasks based on the role.  
  
    - ROLE\_LOGGING\_ALL

In the Configuration screen, click the **Logging** tab. The system displays the **Logging** screen.

![](../Resources/Images/Settings/Configuration/auditrail/logging_637x317.png)

The Logging list-view displays the following details:

  
| Logging Columns | Description |
| --- | --- |
| Logger | The Logger column displays the details of the loggers. |
| Levels | To know more about levels , see [Levels](#levels) |

Levels
------

By default, the log-level is set to Info. The other available log-levels are Trace, Debug , Warn, Error, Fatal and Of

![](../Resources/Images/Settings/Configuration/auditrail/loglevels_637x115.png)

To select the required log level, follow these steps:

1.  Select the required log-level from the drop-down list.
2.  Click the **Save** button to save the updated log levels.
3.  System displays the confirmation message that log level is updated. The updated log-level appears in the list-view.
    
    > **_Important:_** The Logging option is not available for the cloud users.
