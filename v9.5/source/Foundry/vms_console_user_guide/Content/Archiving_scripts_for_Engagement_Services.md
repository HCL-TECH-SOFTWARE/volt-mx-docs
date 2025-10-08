                           

You are here: Purging Script for Engagement Services

Purging Script for Engagement Services
======================================

When the amount of data in the MySQL database grows very large, the purging script deletes push messages data beyond a specific date.

Salient Features
----------------

All salient features are with reference to MySQL database tables:

*   Data of the following tables will be purged:
    *   `MessageRequest`
    *   `MessageEntry`
    *   `Messageentry_status`
    *   `DeviceSpecificProps`
*   The `daysToKeep` parameter is specified while running the procedure `proc_purge_push_msg_tables` that is created through running the provided SQL script file. For example, if `daysToKeep` is specified as 90 days, the procedure will delete all push messages data beyond 90 days from the current date.
*   Replace {VMS\_SCHEMA} with the VMS schema name in the below given queries. For example, if your Volt MX Engagement Service schema name is 'voltmxvpnsdb1', replace ${VMS\_SCHEMA} with voltmxvpnsdb1
*   Post execution, you can check the status from the `archive_audit` table. The `archive_audit` table displays information, such as number of rows purged from the tables, and the execution time.

To run the Purge Script for MySQL database, follow these steps:

1.  Run `MYSQL_PROC_PURGE_PUSH_MESSAGE_TABLES_ONLINE.sql` script on the VMS schema.
2.  Call the procedure `proc_purge_push_msg_tables`. Replace `X` with the `daysToKeep`.
    
    `CALL ${VMS_SCHEMA}.proc_purge_push_msg_tables(X);`
    
3.  Execute the **Optimize Table** on the affected tables.
    
    `OPTIMIZE TABLE ${VMS_SCHEMA}.MessageRequest;`
    
    OPTIMIZE TABLE ${VMS\_SCHEMA}.MessageEntry;
    
    OPTIMIZE TABLE ${VMS\_SCHEMA}.messageentry\_status;
    
    OPTIMIZE TABLE ${VMS\_SCHEMA}.DeviceSpecificProps;
