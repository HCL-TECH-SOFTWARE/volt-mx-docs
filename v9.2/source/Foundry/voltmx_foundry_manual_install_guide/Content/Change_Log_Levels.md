                            

How to Change Log Levels
------------------------

Volt MX  Foundry Console contains three components: portal, accounts, and workspace.

For console log files, by default log level value is set to `INFO`:

*   The following are the log file names for the console components:
    *   `mbaasportal.log (`for mbaas portal`)`
    *   `accountsService.log` (for accounts)
    *   and `workspaceService.log` (for workspace)

*   For Identity services, the log file is `authService.log`. The default log level for identity services is set to `INFO`:
    
*   For Integration services, the log file is `middleware.log`. The default log level for integration services is set to `INFO`:
    
*   For Engagement Services, the log file is `vms.log`. The default log level for Engagement Service is set to `INFO`:

To change log levels for `mbaasportal.log`, follow these steps:

1.  Go to `<VoltMXFoundry_Plugins>/mfconsole.war/WEB-INF/classes/` and open the `config.properties` file.
2.  Change the log level to the required value.
3.  Restart the server.

To change log levels for `accountsService.log`, follow these steps:

1.  Go to `accountsdb -> accounts_configurations table`, search for key VOLTMX\_ACCOUNTS\_LOG\_LEVEL.
2.  Change the log level to the required value.

To change log levels for `` `workspaceService.log` ``, follow these steps:

1.  Go to `` `<mfconsoledb -> property table` ``, search for key  `` `LOG_LEVEL` ``.
2.  Change the log level to the required value.

To change log levels for `` `authService.log` ``, follow these steps:

1.  Go to `<<VoltMXFoundry_Plugins>/authService.war/WEB-INF/classes/` and open the `authService.properties` file.
2.  Change the log level to the required value.
3.  Redeploy the `authService.war` file

To change log levels for ``` `` `middleware logs` `` ```, follow these steps:

1.  Go to `admin db > server_configuration table`, and search for `<VoltMX Foundry install diSERVER_LOG_LEVEL`
2.  Change the log level to the required value.

To change log levels for ``` `` `metrics.log` `` ```, follow these steps:

1.  Go to `reportsdb -> metrics_configuration`, search for key `VOLTMX_METRICS_LOG_LEVEL`.
2.  Change the log level to the required value.

> **_Note:_** After upgrading the Metrics server to the latest version, verify that the specified log location on the Console matches with the current log location.

To change log levels for ``` `` `Engagement Services logs` `` ```, follow these steps:

1.  Go to `<VoltMXFoundry_Plugins>/vpns.war/WEB-INF/` and open the  `` `vms-log4j2.xml` `` file.
2.  Change the log level to the required value.
3.  Restart the server.
