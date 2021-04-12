---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                          


Logging Framework
=================

Logging mechanism is improved from **5.5.3 GA** onwards by providing below log levels and hierarchy follows as **TRACE**(6) > **DEBUG**(5) > **INFO**(4) > **WARN**(3) > **ERROR**(2) > **FATAL**(1) > **NONE**(0).

You can use the following API to set the log level:

Signature
---------

sync.log.setLogLevel(**level**, **logSuccessCallback**, **logFailureCallback**)

where level can be one of the following:

1.  voltmx.sync.log.TRACE: The level is the lowest log level. The level prints all Sync SDK logs.
2.  voltmx.sync.log.DEBUG: The level prints Sync SDK debug info, warnings, errors, and fatal logs.
3.  voltmx.sync.log.INFO: The level prints Sync SDK info, warnings, errors, and fatal logs.
4.  voltmx.sync.log.WARN: The level prints Sync SDK warnings, errors, and fatal logs.
5.  voltmx.sync.log.ERROR: The level prints Sync SDK errors, and fatal logs.
6.  voltmx.sync.log.FATAL: The level prints only Sync SDK fatal logs.
7.  voltmx.sync.log.NONE: The level does not print any Sync SDK logs.

Example:
--------

sync.log.setLogLevel(voltmx.sync.log.ERROR, logSuccessCallback, logFailureCallback)

You can use the following APIs to check the current log level:

1.  sync.log.isDebugEnabled()
    
2.  sync.log.isTraceEnabled()
    
3.  sync.log.isInfoEnabled()
    
4.  sync.log.isWarnEnabled()
    
5.  sync.log.isFatalEnabled()
    
6.  sync.log.isNoneEnabled()
    

These return a Boolean value, _true_ for Enabled and _false_ for Disabled.

For example, if the level is set to DEBUG, sync.log.isTraceEnabled() returns _false_ and the rest of the hierarchy functions return _true_.

> **_Note:_**  

1.  The value is set to voltmx.sync.log.DEBUG, by default.
2.  voltmx.sync.log.NONE disables all logs.

If log is set at TRACE level, then all the lower levels like DEBUG, INFO are also logged.
