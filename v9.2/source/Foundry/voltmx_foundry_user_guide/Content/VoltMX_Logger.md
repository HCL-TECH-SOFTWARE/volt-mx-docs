                              

User Guide: [SDKs](Foundry_SDKs.md) > [Volt MX Iris SDK](VoltMXStudio/Installing_VoltMXJS_SDK.md) > Using Log SDK


Volt MX Logger
==============

Introduction
------------

Volt MX Logger is introduced to persist logs based on six log levels:

*   Trace
*   Debug
*   Info
*   Warn
*   Error
*   Fatal

The logger feature provides three ways of providing logs to output: console, file and network. The logger feature is defined in the namespace voltmx.logger. Each log will be printed as per the below syntax:

```
 [LoggerInstanceName][AppID AppVersion][TimestampTimeZone][LogLevel][SessionID][ThreadInformation][DeviceId][DeviceOSInfo][FileName][ClassName][MethodName][LineNo]Message
```

Scope
-----

The Volt MX Logger feature is available for Volt MX Iris, Android, iOS, and Windows 10.

Properties
----------

voltmx.logger exposes the below properties:

### currentLogLevel

currentLogLevel sets the log level of the logger to any of the six mentioned levels. setting to a certain level will allow the logs of that level and above to be persisted. For instance, if the currentLogLevel is set to **Error**, only the error and fatal log statements are printed.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 221px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><b>JavaScript</b>: <span style="font-family: monospace;">voltmx.logger.currentLogLevel</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The below log levels may be set to the current log level: voltmx.logger.logLevel.ALL voltmx.logger.logLevel.NONE voltmx.logger.logLevel.TRACE voltmx.logger.logLevel.DEBUG voltmx.logger.logLevel.INFO voltmx.logger.logLevel.WARN voltmx.logger.logLevel.ERROR voltmx.logger.logLevel.FATAL</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.logLevel.NONE</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes (Read and Write)</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: bold;"><span style="font-weight: normal; font-family: monospace;">voltmx.logger.currentLogLevel = voltmx.logger.logLevel.DEBUG;</span></td></tr></tbody></table>

APIs
----

Multiple instances of the logger can be created using APIs. The console and the file can be activated as a part of the configuration, if required. The below APIs are introduced to create logger, activate persistors and generate the logs.

### createFilePersistor()

The createFilePersistor() API is used to create the configuration for the file persistor. This configuration can be used with the loggerConfig object (For more information, refer [addPersistor](#addpersistor) API).

> **_Note:_** In Iris Android, if you want activate file persistor and view the logs in the file, you need to add WRITE\_EXTERNAL\_STORAGE under **Permissions** tab.


<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0">
<colgroup>
<col class="TableStyle-Basic-Column-Column1" style="width: 184px;">
<col class="TableStyle-Basic-Column-Column1">
</colgroup>
<tbody>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Signature</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">
<span style="font-family: monospace;">JavaScript</span>: 
<span style="font-family: monospace;">createFilePersistor</span>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Parameters</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Return Type</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">The API return a 
<span style="font-family: monospace;">fileConfig</span> object. The below properties have been exposed on the file persistor. 
<ul>
<li>
<span style="font-family: monospace;">
<a href="#maxfilesize" target="_self" class="selected">maxFileSize</a>
</span>
</li>
<li>
<span style="font-family: monospace;">
<a href="#maxnumberoflogfiles" target="_self" class="selected">maxNumberOfLogFiles</a>
</span>
</li>
</ul>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>JavaScript Example</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">
<span style="font-family: monospace;">var persistor1 = new voltmx.logger.createFilePersistor();</span>
<span style="font-family: monospace;">persistor1.maxFileSize = 100;</span>
<span style="font-family: monospace;">persistor1.maxNumberOfLogFiles = 15;</span>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyB-Column1-Body1">
<b>Platform Availability</b>
</td>
<td class="TableStyle-Basic-BodyA-Column1-Body1">Available on IDE, Android, iOS, and Windows 10</td>
</tr>
</tbody>
</table>


<h4 id="maxfilesize"><code style="background-color:transparent;border:none;outline:none;resize:none;">maxFileSize</code></h4>

The maxFileSize API is used to define the maximum size of the files created in bytes.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 168px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Syntax</td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">maxFileSize</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Type</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Possible Values</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Positive Integer</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Default Value</td><td class="TableStyle-Basic-BodyD-Column1-Body1">10000</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Read or Write</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">JavaScript Example</td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var persistor1 = new voltmx.logger.createFilePersistor(); </span><span style="font-family: monospace;">persistor1.maxFileSize = 10000;</span></td></tr></tbody></table>

<h4 id="maxnumberoflogfiles"><code style="background-color:transparent;border:none;outline:none;resize:none;">maxNumberOfLogFiles</code></h4>

To define the maxNumberOfLogFiles the app can have at a maximum during any instant. The filePersistor is a rolling file appender i.e. the data of latest configured files is preserved.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 200px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Syntax</td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">maxNumberOfLogFiles</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Type</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Possible Values</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Non-zero, Positive Integer</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Default Value</td><td class="TableStyle-Basic-BodyD-Column1-Body1">10</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Read or Write</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">JavaScript Example</td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var persistor1 = new voltmx.logger.createFilePersistor(); persistor1.maxNumberOfLogFiles = 20;</span></td></tr></tbody></table>


<h3 id="createloggerconfig">createLoggerConfig()</h3> 

CreateLoggerConfig() is used to create the configuration object for the logger. This object is used in the [createNewLogger()](#createnewlogger-api) API. The object has various properties exposed to define our configuration. To apply the configuration, you need to use [setConfig()](#setconfig-api) API . When you pass the object through createNewLogger() API , configuration object is immediately applied .

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0">
<colgroup>
<col class="TableStyle-Basic-Column-Column1" style="width: 195px;">
<col class="TableStyle-Basic-Column-Column1">
</colgroup>
<tbody>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Signature</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">
<b>Javascript</b>: 
<span style="font-family: monospace;">createLoggerConfig</span>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Parameters</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>Return Type</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">The API returns a 
<span style="font-family: monospace;">loggerConfig</span> Object. All the properties are static and affect all the logger instances. The below properties have been exposed. 
<ul>
<li><a href="#byteslimit" target="_self" class="selected">bytesLimit</a></li>
<li><a href="#statementslimit" target="_self" class="selected">statementsLimit</a></li>
<li><a href="#timeformat" target="_self" class="selected">timeFormat</a></li>  
<li><a href="#timezone" target="_self" class="selected">timeZone</a></li>
<li><a href="#overrideconfig" target="_self" class="selected">overrideConfig</a></li>
<li><a href="#loglevel" target="_self" class="selected">logLevel</a></li>
<li><a href="#addpersistor" target="_self" class="selected">addPersistor</a></li>
</ul>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyE-Column1-Body1">
<b>JavaScript Example</b>
</td>
<td class="TableStyle-Basic-BodyD-Column1-Body1">
<b>Example 1</b>: 
<span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig();</span>
<b>Example 2</b>:
<span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig();</span>
<span style="font-family: monospace;">loggerConfig.bytesLimit = 10000;</span>
<span style="font-family: monospace;">loggerConfig.statementsLimit = 10;</span>
<span style="font-family: monospace;">loggerConfig.timeFormat = "dd-MM-yyyy HH.mm.ss.SSS";</span>
<span style="font-family: monospace;">loggerConfig.timeZone = "UTC";</span>
<span style="font-family: monospace;">loggerConfig.overrideConfig = true;</span>
<span style="font-family: monospace;">loggerConfig.logLevel= voltmx.logger.logLevel.INFO.value;</span>
</td>
</tr>
<tr class="TableStyle-Basic-Body-Body1">
<td class="TableStyle-Basic-BodyB-Column1-Body1">
<b>Platform Availability</b>
</td>
<td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and Windows 10</td>
</tr>
</tbody>
</table>

<h4 id="byteslimit"><code style="background-color:transparent;border:none;outline:none;resize:none;">bytesLimit</code></h4>

The console logs will be printed as soon as the logging methods are invoked. It is performance intensive to persist the logs one by one on the file. The bytesLimit can be used to accumulate the logs until the bytesLimit is reached and then flushed onto the file.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 170px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">bytesLimit</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Any positive integer</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">10000</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.bytesLimit = 20000;</span></td></tr></tbody></table>

<h4 id="statementslimit"><code style="background-color:transparent;border:none;outline:none;resize:none;">statementsLimit</code></h4>

The console logs will be printed as soon as the logging methods are invoked. It is performance intensive to persist the logs one by one on the file. The statementsLimit can be used to accumulate the logs until the specified number of statements are reached and then flushed onto the file.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 154px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">statementsLimit</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Number</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Any non-negative integer</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">20</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.statementsLimit = 30;</span></td></tr></tbody></table>

<h4 id="timeformat"><code style="background-color:transparent;border:none;outline:none;resize:none;">timeFormat</code></h4>

Each log is printed in a specified format. The format includes the timestamp. This property is used to specify the syntax of the timeFormat.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 185px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">timeFormat</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">String</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Any valid time format pattern</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">"dd-mm-yyyy HH.mm.ss.SSS"</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.timeFormat = "dd-MM-yyyy HH.mm.ss.SSS";</span></td></tr></tbody></table>

<h4 id="timezone"><code style="background-color:transparent;border:none;outline:none;resize:none;">timeZone</code></h4>

Each log is printed in a specified format. The format includes the timestamp. This property is used to specify the syntax of the timeZone.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 187px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">timeZone</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">String</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">UTC, LocalTime</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">UTC</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.timeZone = "UTC";</span></td></tr></tbody></table>

<h4 id="overrideconfig"><code style="background-color:transparent;border:none;outline:none;resize:none;">overrideConfig</code></h4>

All the properties are exposed by loggerConfig. Changing the property and using setConfig() API will affect all the logger instances created. overrideConfig is used to specify if the configuration should override the existing configuration.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 186px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">overrideConfig</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Bool</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">True or False</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">True</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.overrideConfig = false;</span></td></tr></tbody></table>

<h4 id="loglevel"><code style="background-color:transparent;border:none;outline:none;resize:none;">logLevel</code></h4>

The logLevel property works similar to currentLogLevel property. There are six log levels in the logLevel property.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 181px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">logLevel</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.logLevel.ALL </span><span style="font-family: monospace;">voltmx.logger.logLevel.NONE </span><span style="font-family: monospace;">voltmx.logger.logLevel.TRACE </span><span style="font-family: monospace;">voltmx.logger.logLevel.DEBUG </span><span style="font-family: monospace;">voltmx.logger.logLevel.INFO </span><span style="font-family: monospace;">voltmx.logger.logLevel.WARN </span><span style="font-family: monospace;">voltmx.logger.logLevel.ERROR </span><span style="font-family: monospace;">voltmx.logger.logLevel.FATAL</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Value</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.logLevel.NONE</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); loggerConfig.logLevel = voltmx.logger.logLevel.INFO.value;</span></td></tr></tbody></table>

<h4 id="addpersistor"><code style="background-color:transparent;border:none;outline:none;resize:none;">addPersistor</code></h4>

The property can be used to add file persistor through loggerConfig object.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 183px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Syntax</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">addPersistor</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Possible Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Object of type filePersistor</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Default Values</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Read or Write</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Only Write</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><span style="font-family: monospace;">var loggerConfig = new voltmx.logger.createLoggerConfig(); var filePers = new voltmx.logger.createFilePersistor();filePers.maxNumberOfLogFiles = 15; loggerConfig.addPersistor(filePers);</span></td></tr></tbody></table>

### createNewLogger() API

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 183px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">createNewLogger</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">This API takes three parameters: LoggerName, LoggerConfig<b>loggerName</b>: The <span style="font-family: monospace;">loggerName</span> is a string used to identify the instance of the <span style="font-family: monospace;">loggerObject</span>. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>This is a mandatory value. <b>loggerConfiguration</b>: The <span style="font-family: monospace;">loggerConfiguration</span> is the configuration object. For more information, refer <span style="font-family: monospace;"><a href="#createloggerconfig" target="_self" class="selected">createLoggerConfig()</a></span>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Returns a logger object on which various functions such as <span style="font-family: monospace;">trace()</span>, <span style="font-family: monospace;">debug()</span>, <span style="font-family: monospace;">info()</span>, <span style="font-family: monospace;">warn()</span>, <span style="font-family: monospace;">error()</span> and <span style="font-family: monospace;">fatal()</span> APIs are exposed.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">var lConfig = new voltmx.logger.createLoggerConfig(); var loggerObj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lConfig);</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and Windows 10</td></tr></tbody></table>

#### activatePersistors()

Unless we activate persistors, logs will not be pushed to the corresponding persistors. This is a mandatory step and no persistor is activated by default.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 184px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">activatePersistors</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter: persistor name. This parameter could be either a console or a file.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.activatePersistors(voltmx.logger.consolePersistor) </span><span style="font-family: monospace;">voltmx.logger.activatePersistors(voltmx.logger.filePersistor) </span><span style="font-family: monospace;">voltmx.logger.activatePersistors(voltmx.logger.consolePersistor | </span><span style="font-family: monospace;">voltmx.logger.filePersistor)</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

> **_Note:_** Console Persistor logs will not be available in Iris Windows 10 and Native Windows 10.

#### deactivatePersistors()

If you want to make sure the logs are not pushed to a corresponding persistor or any combination of them, use deactivatePersistors() API.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 185px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">deactivatePersistors</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter: persistor name. This parameter could be either a console or a file or any combination of these.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.deactivatePersistors(voltmx.logger.consolePersistor) </span><span style="font-family: monospace;">voltmx.logger.deactivatePersistors(voltmx.logger.filePersistor) </span><span style="font-family: monospace;">voltmx.logger.deactivatePersistors(voltmx.logger.consolePersistor | </span><span style="font-family: monospace;">voltmx.logger.filePersistor)</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### trace() API

The trace() API is used to trace log level messages.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 175px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">trace</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.trace("Message to be added in Trace");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### debug() API

The debug() API is used to log the debug level messages:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 176px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">debug</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.debug("Message to be added in Debug");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE ,Android , iOS and windows 10</td></tr></tbody></table>

### info() API

The info() API is used to log the info level messages.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 178px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">info</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.info("Message to be added in Info");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### error() API

The error() API is used to log the error messages:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 178px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">error</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.error("Message to be added in Error");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### warn() API

The warn() API is used to log the warning messages:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 178px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">warn</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.warn("Message to be added in Warn");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### fatal() API

The fatal() API is used to log the fatal messages:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 180px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">fatal</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The API takes one parameter – a string input log that must be persisted</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var lconfig = new voltmx.logger.createNewLoggerConfig(); loggerobj = new voltmx.logger.createNewLogger("AndroidLoggerDemo", lconfig); loggerobj.fatal("Message to be added in fatal");</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### flush() API

The flush() API is used to flush all the statements onto the activated persistors regardless whether the bytesLimit or statementsLimit are met.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 181px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Signature</td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">flush</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">voltmx.logger.flush();</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### setconfig() API

The setconfig() API is a convenience API used to set LoggerConfig (mentioned earlier). Since loggerConfig is a singleton, If you set the loggerConfig once, it is applied across all the logger objects.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 174px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">setConfig</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">loggerConfig</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">JavaScript Example</td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var logConfig = new voltmx.logger.createLoggerConfig(); </span><span style="font-family: monospace;">voltmx.logger.setConfig(logConfig);</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and windows 10</td></tr></tbody></table>

### setPersistConfig()

The setPersistConfig() API is used to change persistorConfig or set it to fresh, when it is not set through loggerConfig. As the persistors are singletons, they will have impact on all loggerObjects when set.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 192px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Signature</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">setPersistorConfig</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Parameters</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">persistor</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>Return Type</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">N/A</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>JavaScript Example</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="font-family: monospace;">Var filePers = new voltmx.logger.createFilePersistor(); filePers.maxNumberOfFiles = 1; voltmx.logger.setPersistorConfig(filePers);</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>Platform Availability</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">IDE, Android, iOS, and Windows 10</td></tr></tbody></table>

App Logger
----------

The default logger Instance created can be used to write log statements. If the user wants to create additional logger instances he is free to do so. The logger name used for appLogger is **voltmxLogger**.

### Usage

```
 voltmx.logger.appLogger.error("Message to be logged at error log level");
voltmx.logger.appLogger.debug("Message to be logged at error log level");
voltmx.logger.appLogger.trace("Message to be logged at error log level");
```

Usage Guidelines/Restrictions/Examples
--------------------------------------

```
 //Create Logger Configuration
var lConfig = new voltmx.logger.createLoggerConfig();
//Create FilePersistor
Var persistor1 = new voltmx.logger.createFilePersistor();
//Add Persistor to the loggerConfig  
lConfig.addPersistor(persistor1);
//Create Logger Object  
loggerObj = new voltmx.logger.createNewLogger("UserLogs", lConfig);
voltmx.logger.activatePersistors(voltmx.logger.consolePersistor);
voltmx.logger.activatePersistors(voltmx.logger.filePersistor);
voltmx.logger.currentLogLevel = voltmx.logger.logLevel.INFO;
//Print Statements  
for(var i=0;i<20;i++){
var msg = "statement" + i;
loggerObj.debug("Message in debug level" + msg);
loggerObj.trace("Message in trace level" + msg);
loggerObj.fatal("Message in Fatal level" + msg);
loggerObj.info("Message in Info level" + msg);
loggerObj.warn("Message in warn level" + msg);
loggerObj.error("Message in error level" + msg);
}
```

> **Note:**  
*   Unlike the file and console persistors, the network persistor is always enabled and can be managed from Volt MX Foundry Admin Console. Do not create/activate/deactivate the network persistor from the client application code. For more details on configuring Network Persistor, refer to the **Log Level by Client Filters** section in the [Standard Logs](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Standard_Logs.md) doc.  
*   To manage middleware logs, refer to [App Services > Logs](../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Logs.md).  
*   Running the logger on Android devices that run on Android Lollipop or earlier versions with less than 1GB RAM may cause memory issues. These memory issues are at the Android OS level and have been declared obsolete by Google. For more information, refer to the [Issue Tracker](https://issuetracker.google.com/issues/36967946).  
