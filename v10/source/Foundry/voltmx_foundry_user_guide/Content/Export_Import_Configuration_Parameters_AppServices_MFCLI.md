                              

User Guide: [VoltMX Foundry Command Line Utility - Continuous Integration](CI_Foundry.md) > Export Configurable Parameters for App Services through MFCLI - Cloud

Export and Import Configurable Parameters for App Services through MFCLI
========================================================================

Configurable Parameters provide an interface to define a set of key-value pairs at the server and the client level. You can access the configured server and client properties from the custom code. The configured properties are available to custom code such as preprocessor, postprocessor and, Java services at run time. Any updates made to the configured properties are reflected in the custom code.

> **_Note:_** For more information on how to configure Server Properties and Client App Properties in the App Services Console, refer to [Configurable Parameters](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Configurable_Parameters.md).

You can export and import your configuration parameters from one environment to another environment. When you export configuration parameters, the App Services Console downloads a .zip file or folder, which contains the parameters list in two .CSV files such as `clientAppProperties.csv` and `serverProperties.csv`. Each of these CSV files contains the key-value pairs list of the configurable parameters. Only by using MFCLI command, you can export or import configuration parameters in a folder format. You will use the .ZIP file or a folder to import the configurations parameter into another environment.

> **_Note:_** If the name of the keys in the imported file matches with the existing names, you will see a conflict message while importing with the list of keys that have the conflict. Click **Upload to overwrite the existing keys and values with the new keys and values** or click **Cancel to stop the upload**.

> **_Note:_** If the imported file contains same key name with different key values, the last key value takes precedence for that key name.

You can export and import your configuration parameters from one environment to another by either of the two methods:

*   **By using the App Services Console.** For more information, refer to the **Export the key-value pair list** and **Import the key-value pair list** sections in the [App Services Console > Configurable Parameters](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Configurable_Parameters.md).
*   **By using the MFCLI commands for continuous integration**. This support is available for Volt MX Foundry On-Premise and Volt MX Foundry Cloud environments from V8 SP4 onwards.  
    The following sections detail how to export and import Configurable Parameters by using MFCLI commands.

Export Operation for Configurable Parameters - App Services
-----------------------------------------------------------

The `export-config-properties` command exports the configurable parameters configured in App Services Console in a specified .zip file or directory.

### Export Configurable Parameters - App Services

You can export configurable parameters from the following environments:

*   [Export Configurable Parameters from VoltMX Foundry Cloud Environment](#ReportsExport_1)
*   [Export Configurable Parameters from Volt MX Foundry On-Premise Environment](#ReportsExport_2)

#### Export Configurable Parameters from Volt MX Foundry Cloud Environment

To export configurable parameters from Volt MX Foundry Cloud environment, run the following command.

```
java -jar mfcli.jar export-config-properties -u <user> -p <password> -t <account id> [-f <file name> | -r <directory name>] -e <environmentName>
```

> **_Note:_** To export the Configurable Parameters to a zip file, use the `[-f "zipfilename.zip]` parameter in the command.  
  
To export the Configurable Parameters to directory, use the `[-r <directory name>]` parameter in the command.

Example

```
java -jar mfcli.jar export-config-properties -u abc@voltmx.com -p password -t 100054321 -f "C:\\tmp\\Sample.zip" -e "TestEnv"
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123` and `100054321` is the account ID. This command exports the configurable parameters to `C:\\tmp\\Sample.zip`.

#### Export Configurable Parameters from Volt MX Foundry On-Premise Environment

To export configurable Parameters from Volt MX Foundry On-Premise environment, run the following command.

```
 java -jar mfcli.jar export-config-properties -u <user> -p <password> -au <Identity URL> -cu <Console URL> [-f <file name> | -r <directory name>] -e <environmentName>
```

> **_Note:_** To export the Configurable Parameters to a zip file, use the `[-f "zipfilename.zip]` parameter in the command.  
  
To export the Configurable Parameters to directory, use the `[-r <directory name>]` parameter in the command.

Example

```
java -jar mfcli.jar export-config-properties -u abc@voltmx.com -p password -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -f "C:\\tmp\\Sample.zip" -e "TestEnv"
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command exports the configurable parameters to `C:\tmp\Sample.zip`.

Import Operation for Configurable Parameters - App Services
-----------------------------------------------------------

The `import-config-properties` command takes a `ZIP` file as input to import the configurable parameters from the `ZIP` to the App Services Console. A `ZIP` file is an output of the `export-config-properties` command.

### Import Configurable Parameters - App Services

You can import Configurable Parameters from the following environments:

*   [Import Configurable Parameters to VoltMX Foundry Cloud Environment](#ImportReports_1)
*   [Import Configurable Parameters to Volt MX Foundry On-Premise Environment](#ImportReports_2)
*   [Delete Configurable Parameters from Volt MX Foundry Environment](#Delete)

#### Import Configurable Parameters to Volt MX Foundry Cloud Environment

To import Configurable Parameters to Volt MX Foundry Cloud environment, run the following command.

```
java -jar mfcli.jar import-config-properties -u <user> -p <password> -t <account id> [-f <file name> | -r <directory name>]  -e <environmentName>
```

> **_Note:_** To import the Configurable Parameters from a zip file, use the `[-f "zipfilename.zip]`parameter in the command.  
  
To import the Configurable Parameters from a directory, use the `[-r <directory name>]` parameter in the command.

Example

```
java -jar mfcli.jar import-config-properties -u abc@voltmx.com -p abc123 -t 100054321 -f "C:\\tmp\\Sample.zip" -e "TestEnv"
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123` and `100054321` is the account ID. This command imports the Configurable Parameters from `C:\\tmp\\Sample.zip` to the environment.

#### Import Configurable Parameters to Volt MX Foundry On-Premise Environment

To import Configurable Parameters to Volt MX Foundry On-Premise environment, run the following command.

```
java -jar mfcli.jar import-config-properties -u <user> -p <password> -au <Identity URL> -cu <Console URL> [-f <file name> | -r <directory name>] -e <environmentName>
```

> **_Note:_** To import the Configurable Parameters from a zip file, use the `[-f "zipfilename.zip]`parameter in the command.  
  
To import the Configurable Parameters from a directory, use the `[-r <directory name>]` parameter in the command.

Example

```
java -jar mfcli.jar import-config-properties -u abc@voltmx.com -p abc123 -au http://10.10.25.18:8080 -cu http://10.10.25.18:8081 -f "C:\\tmp\\Sample.zip" -e "TestEnv"
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command imports the Configurable Parameters from `C:\\tmp\\Sample.zip` to the environment.

Delete Operation for Configurable Parameters - App Services
-----------------------------------------------------------

#### Delete Configurable Parameters from Volt MX Foundry Cloud Environment

To delete Configurable Parameters from Volt MX Foundry Cloud environment, run the following command.

```
java -jar mfcli.jar import-config-properties -u <user> -p <password> -t <account id> [-f <file name> | -r <directory name> -e <environmentName> -delete
```

Example

```
java -jar mfcli.jar import-config-properties -u abc@voltmx.com -p abc123 -t 100054321 -f "C:\\tmp\\Sample.zip" -e "TestEnv" -delete
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123` and `100054321` is the account ID. This command deletes the Configurable Parameters specified in the `C:\\tmp\\Sample.zip` file from the "TestEnv" environment.

#### Delete Configurable Parameters from Volt MX Foundry On-Premise Environment

To delete Configurable Parameters from Volt MX Foundry On-Premise environment, run the following command.

```
java -jar mfcli.jar import-config-properties -u <user> -p <password> -au <Identity URL> -cu <Console URL> [-f <file name> | -r <directory name>] -e <environmentName> -delete
```

Example

```
java -jar mfcli.jar import-config-properties -u abc@voltmx.com -p abc123 -au http://10.10.25.18:8080 -cu http://10.10.25.18:8081 -f "C:\\tmp\\Sample.zip" -e "TestEnv" -delete
```

In this scenario, `abc@voltmx.com` is the user name with the password as `abc123`. The Identity (Auth) Services and Console are running on `http://10.10.25.18:8080` and `http://10.10.25.18:8081`. This command deletes the Configurable Parameters specified in the `C:\\tmp\\Sample.zip` file from the "TestEnv" environment.
