---
layout: "documentation"
category: "voltmx_sync_console_user_guide"
---
                           


Functional Flow
---------------

The following depicts the functional flow of Volt MX Foundry Sync Console:

1.  Open Volt MX Foundry Sync Console.
    
2.  **[Login](Login.html)** as Volt MX Foundry Sync Administrator.
3.  Go to **[User Management](User_Management.html)** tab > **[Users](User_Management.html#user)** > [Create a user](User_Management.html#adding-a-user).
    
4.  Go to **[User Management](User_Management.html)** tab > **[Groups](User_Management.html#group)** > [Create a group](User_Management.html#creating-a-group).
    
5.  Go back to **[User Management](User_Management.html)** tab > **[Users](User_Management.html#user)** > [Assign the created group to the user](User_Management.html#assigning-a-user-to-a-group).
    
6.  Go back to **[User Management](User_Management.html)** tab > [](User_Management.html#user)**[User](User_Management.html#User)s** > [Assign the registered device to the user](User_Management.html#assigning-a-device-to-a-user).
    
7.  Go to **[Configurations](Config.html)**\> [Sync Configurations](Sync_Configuration.html) tab > to upload `SyncConfig.xml` file for adding an application.
    
8.  Go to **[User Management](User_Management.html)** tab > **[Groups](User_Management.html#group)** > [Assign the Application to the group](User_Management.html#assigning-an-application-to-a-group).
    
9.  Go to **[User Management](User_Management.html)** tab > **[**Authentication**](User_Management.html#authentication)** > [Add Authentication](User_Management.html#Creating__an_Authentication_Profile).
10.  Go to **Configurations**\> **[Sync Configuration](Sync_Configuration.html)** tab > [Assign Authentication to the Application](Sync_Configuration.html#assign-authentication-profile-to-application)
11.  Go to **[Monitoring](Monitoring.html)** tab to view:
    
    1.  **[Synchronization](Monitoring.html#viewing-synchronization)** tab: The time taken for each service like Upload, Download and Authenticate with respect to combination of User, Device and Application.
        
    2.  **[**Synchronization Performance**](Monitoring.html#synchronization-performance)** tab: The average time taken for each service like Upload, Download and Authenticate with respect to combination of User, Device and Application.
        
    3.  **[Merge Service](Monitoring.html#merging-service)** tab: The status of the records that were merged into data source based on the conflict resolution policy (Server Wins / Client Wins) defined in `SyncConfig.xml` file.
        
    4.  **[**Replica Service**](Monitoring.html#replica-service)** tab: The records downloaded while performing synchronization from the data source to client are stored in Replica database (Server side) when persistent sync is used as sync strategy. These records appear on this tab.
        
    5.  **[Upload Queue](Monitoring.html#upload-queue)** tab: The records uploaded while performing synchronization from the client to data source are stored in Upload Queue database (Server side) when persistent sync is used as sync strategy. These records appear on this tab.
        
    6.  **[Conflicts](Monitoring.html#conflicts)** tab: The records uploaded from client may conflict with the server records, these conflicts appear on this tab. You can view Client Record, Server Record and Merged Record. The Merge is based on the conflict resolution policy (Server Wins / Client Wins) defined in `SyncConfig.xml` file.
        
    7.  **[Security Audit](Monitoring.html#security-audit)** tab: The changes that the client makes are updated at Enterprise Data Source server.
        
    8.  **[Change Replay](Monitoring.html#change-replay)** tab: The series of actions like insert, update that the client performs on a particular record are replayed at data source end. These series of actions per request appear on this tab.
        
12.  Go to **[Config](Config.html#top)** tab to view configuration details of the system where the application is deployed.
    
13.  Go to **[Schedule Jobs](Scheduled_Jobs.html)** tab >
    
    1.  **[Schedule Jobs](Scheduled_Jobs.html#view-the-scheduled-jobs)** - To view all the default jobs mapped to your application.
        
    2.  **[Jobs History](Scheduled_Jobs.html#view-the-job-history)** - To view Jobs history details
        
14.  Go to **[Logs](Logs.html)** tab >
    
    1.  **[Trace Log](Logs.html#trace-log)** - To view Request and response data between the clients and Enterprise Data source Server for a particular Application, User, Device, and Time combination.
        
    2.  **[**Sync Services Log**](Logs.html#volt-mx-foundry-sync-services-log)** - To view the various levels of Volt MX Foundry Sync Server Services and Volt MX Foundry Sync Management Console log data like DEBUG, INFO, and ERROR on UI.
        
    3.  **[Sync Console Log](Logs.html#volt-mx-foundry-sync-console-log)** - To view the various levels of sync Management Console log data like DEBUG, INFO, and ERROR on UI.
        
15.  Go to **[Analytics Dashboard](Analytics_Dashboard.html)** tab - To view the system performance based on various criteria for a selected duration of time interval. The Reports that you can view are:
    
    1.  Upload versus Replica
        
    2.  Sync Errors versus Conflicts
        
    3.  Avg Download Response Time
        
    4.  Avg Upload Response Time
