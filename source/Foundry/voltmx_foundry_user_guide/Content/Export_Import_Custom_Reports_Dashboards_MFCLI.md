                             

User Guide: [VoltMX Foundry Command Line Utility - Continuous Integration](CI_Foundry.md) > Export and Import Custom Reports and Custom Dashboards through MFCLI

Export and Import Custom Reports and Custom Dashboards through MFCLI
====================================================================

Export and Import operations of Custom Reports and Custom Dashboards are supported in Volt MX Foundry On-Premise and Volt MX Foundry Cloud environments from V8 SP4 onwards.

> **_Note:_** The export and import operations are applicable for only those Custom Reports and Custom Dashboards that are saved in the `shared` folder.

Export Operation
----------------

Exporting Custom Reports or Custom Dashboards that are created in an account gives a `.zip` file as an output.

The output of the export operation provides the following information:

*   Number of custom reports that were successfully exported.
*   Number of custom reports that failed to be exported.

### Export Custom Reports

You can export Custom Reports from the following environments:

*   [VoltMX Foundry Cloud Environment](#foundry-cloud-environment)
*   [VoltMX Foundry On-Premise Environment](#foundry-on-premise-environment)

#### Volt MX Foundry Cloud Environment

To export custom reports of the standard domain from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar export-reports -u <user> -p <password> -t <account id> -r <directory name>
```

Example

```
 java -jar mfcli.jar export-reports -u abc@voltmx.com -p abc123 -t 100054321 -r C:\tmp\Sample
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123` and `100054321` is the account ID. This command exports the custom reports as `StandardDomainReports_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of `StandardDomainReports` and the time stamp.

To export custom reports of the custom domain from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar export-reports -u <user> -p <password> -t <account id> -a <app name> [-v <app version>] -r <directory name> -e <environment name>
```

Example

```
 java -jar mfcli.jar export-reports -u abc@voltmx.com -p abc123 -t 100054321 -a MyApp -v 1.0 -r C:\tmp\Sample -e LocalDevEnv
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123` and `100054321` is the account ID. This command exports the custom reports of `MyApp` version `1.0` from `LocalDevEnv` environment as `MyApp_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of the application name and the time stamp.

#### Volt MX Foundry On-Premise Environment

To export custom reports of the standard domain from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar export-reports -u <user> -p <password> -au <Identity URL> -cu <Console URL> -r <directory name> 
```

Example

```
 java -jar mfcli.jar export-reports -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -r C:\tmp\Sample
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command exports the custom reports as `StandardDomainReports_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of `StandardDomainReports` and the time stamp.

To export custom reports of the custom domain from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar export-reports -u <user> -p <password> -au <Identity URL> -cu <Console URL>  -a <app name> [ -v <app version> ] -r <directory name> -e <environment name>
```

Example

```
 java -jar mfcli.jar export-reports -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -a MyApp -v 1.0 -r C:\tmp\Sample -e LocalDevEnv
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command exports the custom reports of `MyApp` version `1.0` as `MyApp_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of the application name and the time stamp.

### Export Custom Dashboards

You can export Custom Dashboards from the following environments:

*   [VoltMX Foundry Cloud Environment](#foundry-cloud-environment)
*   [VoltMX Foundry On-Premise Environment](#foundry-on-premise-environment)

#### Volt MX Foundry Cloud Environment

To export custom dashboards from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar export-dashboards -u <user> -p <password> -t <account id>  -r <directory name>
```

Example

```
 java -jar mfcli.jar export-dashboards -u abc@voltmx.com -p abc123 -t 100054321  -r C:\tmp\Sample
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`, and `100054321` is the account ID. This command exports the custom dashboards as `CustomDashboardReports_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of the `CustomDashboardsReports` and the time stamp.

#### Volt MX Foundry On-Premise Environment

To export custom dashboards from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar export-dashboards -u <user> -p <password> -au <Identity URL> -cu <Console URL>  -r <directory name>
```

Example

```
 java -jar mfcli.jar export-dashboards -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081  -r C:\tmp\Sample
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command exports the custom dashboards as `CustomDashboardReports_2018_12_28_15_00_10.zip` to `C:\tmp\Sample`.

> **_Note:_** The file name of the .zip file will be a concatenation of the `CustomDashboardsReports` and the time stamp.

Import Operation
----------------

Import Operation takes the `.zip` file as input, which is the output of the Custom Reports or Custom Dashboards export operation.

The output of the import operation provides the following information:

*   Number of custom reports that were successfully imported.
*   Number of custom reports that failed to be imported.
*   Number of skipped custom reports during import (the reports, that do not belong to the input parameter application).

> **_Important:_**  
\-The database type of the import and export operations must be same. If the database type differs, the operation will fail. For example, if the custom reports are exported from MySQL database, the custom reports must also be imported to MySQL database.  
\-The environment used for the import and export operations must be same. For example, if the custom reports are exported from Volt MX Foundry Cloud environment, the custom reports must also be imported to Volt MX Foundry Cloud environment.

### Prerequisites

You must meet the following prerequisites before importing Custom Reports and Custom Dashboards:

*   The application for which the custom reports have to be imported must be published prior to performing the import operation.
*   You must create Custom Metrics for an application after the app is published. The **name**, **type**, and **order** of the custom metrics must match the application from which the custom reports were exported.  
    
    For example, if `Application1`, from which the custom reports were exported has the following custom metrics:
    
    *   Metrics1: Long
        
    *   Metrics2: String
        
    *   Metrics3: Boolean
        
    *   Metrics4: String
        
    
    Then, before you import the custom reports into `Application2`, create the same custom metrics in `Application2` preserving the **name**, **type**, and **order** as used in `Application1`.
    
*   Import the custom reports respective to the custom dashboards, prior to importing the custom dashboards.

### Import Custom Reports

You can import Custom Reports from the following environments:

*   [VoltMX Foundry Cloud Environment](#foundry-cloud-environment)
*   [VoltMX Foundry On-Premise Environment](#foundry-on-premise-environment)

#### Volt MX Foundry Cloud Environment

To import custom reports of the standard domain from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar import-reports -u <user> -p <password> -t <account id> -f <file name>
```

Example

```
 java -jar mfcli.jar import-reports -u abc@voltmx.com -p abc123 -t 100054321 -f C:\sample\MyApp_2018_12_28_15_00_10.zip
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123` and `100054321` is the account ID. This command imports the custom reports from `C:\sample\MyApp_2018_12_28_15_00_10.zip`.

To import custom reports of the custom domain from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar import-reports -u <user> -p <password> -t <account id>  -a <app name> [ -v <app version> ] -f <file name> -e <environment name>
```

Example

```
 java -jar mfcli.jar import-reports -u abc@voltmx.com -p abc123 -t 100054321  -a MyApp -v 1.0 -f C:\sample\MyApp_2018_12_28_15_00_10.zip -e LocalDevEnv
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123` and `100054321` is the account ID. This command imports the custom reports of `MyApp` version `1.0` from `C:\sample\MyApp_2018_12_28_15_00_10.zip`.

#### Volt MX Foundry On-Premise Environment

To import custom reports of the standard domain from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar import-reports -u <user> -p <password> -au <Identity URL> -cu <Console URL> -f <file name>
```

Example

```
 java -jar mfcli.jar import-reports -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -f C:\sample\MyApp_2018_12_28_15_00_10.zip
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command imports the custom reports from `C:\sample\MyApp_2018_12_28_15_00_10.zip`.

To import custom reports of the custom domain from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar import-reports -u <user> -p <password> -au <Identity URL> -cu <Console URL>  -a <app name> [ -v <app version> ] -f <file name> -e <environment name>
```

Example

```
 java -jar mfcli.jar import-reports -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081  -a MyApp -v 1.0 -f C:\sample\MyApp_2018_12_28_15_00_10.zip -e LocalDevEnv
```

In this scenario, `abc@voltmx.com` is the user name with password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command imports the custom reports of `MyApp` version `1.0` from `C:\sample\MyApp_2018_12_28_15_00_10.zip`.

### Import Custom Dashboards

You can import Custom Dashboards from the following environments:

*   [](#foundry-on-premise-environment)[VoltMX Foundry Cloud Environment](#foundry-cloud-environment)
*   [VoltMX Foundry On-Premise Environment](#foundry-on-premise-environment)

#### Volt MX Foundry Cloud Environment

To import custom dashboards from Volt MX Foundry Cloud environment, run the following command.

```
 java -jar mfcli.jar import-dashboards -u <user> -p <password> -t <account id>  -f <file name>
```

Example

```
 java -jar fcli.jar import-dashboards -u abc@voltmx.com -p abc123 -t 100054321  -f C:\sample\CustomDashboardReports_2018_12_28_15_00_10.zip
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123` and `100054321` is the account ID. This command imports the custom dashboards from `C:\sample\CustomDashboardReports_2018_12_28_15_00_10.zip`.

#### Volt MX Foundry On-Premise Environment

To import custom dashboards from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar import-dashboards -u <user> -p <password> -au <Identity URL> -cu <Console URL>  -f <file name>
```

Example

```
 java -jar mfcli.jar import-dashboards -u abc@voltmx.com -p abc123 -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081  -f C:\sample\CustomDashboardReports_2018_12_28_15_00_10.zip
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command imports the custom dashboards from `C:\sample\CustomDashboardReports_2018_12_28_15_00_10.zip`.
