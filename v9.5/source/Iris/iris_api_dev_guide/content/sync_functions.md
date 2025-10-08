                            


sync Namespace
==============

The sync Namespace implements the Sync API. It contains the following API elements.

Functions
---------

The sync Namespace contains the following functions.

sync.getPendingAcknowledgement
------------------------------

This API is used to fetch pending acknowledgment for all objects.

<h3>Syntax</h3>

sync.getPendingAcknowledgement ([successCallback](#successCallback2), [errorCallback](#errorCallback2))

<h3>Input Parameters</h3>

  
| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

<h3>Example</h3>

```
function SyncGetPendingAcknowledgement()
sync.getPendingAcknowledgement(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Sync Pending Acknowledgement Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Sync Pending Acknowledgement Failed", nil, "error", "Ok", "", "Error", nil)
end

```

<h3>Platform Availability</h3>

Available on all platforms.

sync.getPendingUpload
---------------------

This API fetches all the rows for all objects those are pending for upload.

<h3>Syntax</h3>

sync.getPendingUpload [(successCallback](#successCallback3), [errorCallback](#errorCallback3))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

<h3>Example</h3>

```
function SyncGetPendingUpload()
sync.getPendingUpload(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Sync Pending Upload Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Sync Pending Upload Failed", nil, "error", "Ok", "", "Error", nil)
end

```

<h3>Platform Availability</h3>

Available on all platforms.

sync.init
---------

This API is used to initialize the creation of device database for sync.

<h3>Syntax</h3>

sync.init ([initSuccessCallback](#initSuccessCallback) , [initFailCallback](#initFailCallback))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| initSuccessCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| initFailCallback \[function\] - Optional | Specifies the function which will get invoked on failure. |

<h3>Example</h3>

```
function SyncInit()
sync.init(initSuccessCallback ,initFailCallback)
end

function initSuccessCallback(res)
window.Alert("Sync Initialized", nil, "info", "Ok", "", "", nil)
end

function initFailCallback(err)
window.Alert("Sync Failed", nil, "error", "Ok", "", "Error", nil)
end

```

<h3>Platform Availability</h3>

Available on all platforms

sync.reset
----------

This API is used to reset the device database to initial state. This API will remove all data from the database.

<h3>Syntax</h3>

sync.reset ([successCallback](#successCallback), [errorCallback](#errorCallback))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

<h3>Example</h3>

```
function SyncReset()
sync.reset(successCallback ,errorFailCallback)
end

function successCallback(res)
window.Alert("Sync Reset Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Sync Reset Failed", nil, "error", "Ok", "", "Error", nil)
end

```

<h3>Platform Availability</h3>

Available on all platforms.

sync.rollbackPendingLocalChanges
--------------------------------

This API is used to roll back the application level pending changes which are not synchronized.

<h3>Syntax</h3>

sync.rollbackPendingLocalChanges ([successCallback](#successCallback1), [errorCallback](#errorCallback1))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

<h3>Example</h3>

```
function SyncRollbackPendingChanges()
sync.rollbackPendingLocalChanges(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Sync Rollback Pending Changes Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Sync Rollback Pending Changes Failed", nil, "error", "Ok", "", "Error", nil)
end

```

<h3>Platform Availability</h3>

Available on all platforms.

sync.startSession
-----------------

This API is used to start the sync process and download the data from the Enterprise Data Source to the device database.

<h3>Syntax</h3>

sync.startSession([config](#config))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| config \[table\] - Mandatory | Specifies the table to set the configuration parameters. |

 

<h3>Example</h3>

```
function startSyncSession(config)
local config = {}
config.onsyncstart = onsyncstartDemo
config.onuploadstart = onuploadstartDemo
config.onuploadsuccess = onuploadsuccessDemo
config.ondownloadstart = ondowloadstartDemo
config.ondownloadsuccess = ondownloadsuccessDemo
config.onbatchstored = onbatchstoredDemo
config.onbatchprocessingstart = onbatchprocessingstartDemo
config.onbatchprocessingsuccess = onbatchprocessingsuccessDemo
config.onsyncsuccess = onsyncsuccessDemo
config.onsyncerror = onsyncerrorDemo
config.onscopestart = onscopestartDemo
config.onscopeerror = onscopeerrorDemo
config.onscopesuccess = onscopesuccessDemo
// where onXXXXDemo is function which will be called on these callbacks
// the below values can be passed by the developer
config.userid = "syncadmin";
config.password = "SyncAdmin123";
config.appid = "APPIDNorthwind";
config.serverhost = "10.10.5.63";
config.serverport = 8080;
config.sessiontasks = {
    Scope1 = {
        doupload = true, dodownload = false
    }, Scope2 = {
        doupload = true, dodownload = false
    }
}
sync.startSession(config) //starting sync session
end
```

<h3>Platform Availability</h3>

Available on all platforms.

<!-- ![](resources/prettify/onload.png) -->
