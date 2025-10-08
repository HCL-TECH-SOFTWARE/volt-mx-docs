# <a name="How"></a>How to Change Log Levels

VoltMX Foundry Console contains three components: portal, accounts, and workspace.

For console log files, by default log level value is set to `INFO`:

*   The following are the log file names for the console components:
    *   `mbaasportal.log (`for mbaas portal`)`
    *   `accountsService.log` (for accounts)
    *   and `workspaceService.log` (for workspace)

*   For Identity services, the log file is `authService.log`. The default log level for identity services is set to `INFO`:

*   For Integration services, the log file is `middleware.log`. The default log level for integration services is set to `INFO`:

*   For Engagement Services, the log file is `kms.log`. The default log level for Engagement Service is set to `INFO`:
<!-- *   For Sync services, the log files are `datasource-payload.log`, `device-payload.log`, `syncconsole.log`, and `syncservice.log`. The default log level for Sync services is set to `ERROR`. -->

To change log levels for `mbaasportal.log`, follow these steps:

1.  Go to `<VoltMX Foundry install directory>/deployments/mfconsole.war/WEB-INF/classes/` and open the `config.properties` file.
2.  Change the log level to the required value.
3.  Restart the server.

To change log levels for `accountsService.log`, follow these steps:

1.  Go to `accountsdb -> accounts_configurations table`, search for key VOLTMX_ACCOUNTS_LOG_LEVEL.
2.  Change the log level to the required value.

To change log levels for ``workspaceService.log``, follow these steps:

1.  Go to ``<mfconsoledb -> property table``, search for key  ``LOG_LEVEL``.
2.  Change the log level to the required value.

To change log levels for ``authService.log``, follow these steps:

1.  Go to `<VoltMX Foundry install directory>/deployments/authService.war/WEB-INF/classes/` and open the `authService.properties` file.
2.  Change the log level to the required value.
3.  Redeploy the `authService.war` file

To change log levels for ```middleware logs```, follow these steps:

1.  Go to `admin db > server_configuration table`, and search for `<VOLTMX Foundry install diSERVER_LOG_LEVEL`
2.  Change the log level to the required value.

To change log levels for ```metrics.log```, follow these steps:

1.  Go to `reportsdb -> metrics_configuration`, search for key `VOLTMX_METRICS_LOG_LEVEL`.
2.  Change the log level to the required value.

To change log levels for ```Engagement Services logs```, follow these steps:

1.  Go to `<VoltMX Foundry install directory>/deployments/kpns.war/WEB-INF/` and open the  ``kms-log4j2.xml`` file.
2.  Change the log level to the required value.
3.  Restart the server.

<!-- To change log levels for ```Sync logs```, follow these steps:

1.  Go to `syncconsoledb -> configuration_master`, search for key `log.level`.

2.  Change the log level to the required value. -->