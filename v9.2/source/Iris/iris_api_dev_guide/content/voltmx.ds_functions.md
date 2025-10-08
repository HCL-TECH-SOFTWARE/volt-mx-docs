                            


voltmx.ds Namespace
=================

The voltmx.ds namespace provides data storage functionality. It contains the following API elements.

Functions
---------

The voltmx.ds namespace contains the following functions.

voltmx.ds.read
------------

This API provides you an ability to read the data stored on the data store of the mobile device using the given name identifier. A reference to the data table is returned.

<b>Use Cases</b>

You can use this API when you want to:

*   fetch the data stored on the mobile device and re-use it.
*   know the data associated with a name identifier before you delete it.

<b>Syntax</b>

voltmx.ds.read([name,storeContext](#name3) )

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| name \[String\] - Mandatory | Specifies the unique name identifier that represents the data on the data store |
| storeContext \[String\] - Optional | Specifies the unique identifier that of the data store if the data store is shared between apps. The storeContext parameter is a dictionary that holds the following keys. **storeAsUserPreference** \[Boolean\]: Contains true to access the data in an app group. Otherwise, set to false. **voltmxAppGroupID** \[string\]: Holds a unique identifier that specifies the app group to be accessed. |

<b>Example</b>

```
voltmx.ds.read("friends");
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| Reference \[String\] | A reference to the table is returned |
| nil \[nil\] | nil is returned if no record is found |

<b>Error Codes</b>

The following error codes are returned:

*   704 Unknown error
*   705 Invalid parameters
*   706 Invalid parameter type. A non-string type specified as the name of the datastore

<b>Implementation Details</b>

If you use secure=true, while saving the data in ds.save, then the ds.read API fetches the correct values only if you are invoking the API on a form enabled for Secure Submit. Else, it will return nil.

<b>Platform Availability</b>

Available on all platforms.

* * *

voltmx.ds.remove
--------------

This API allows you to delete the data stored on the data store that corresponds to a specific name identifier.

<b>Syntax</b>

voltmx.ds.remove ([name, storeContext](#name4))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| name \[String\] - Mandatory | Specifies the name identifier using which the table was saved. |
| storeContext \[String\] - Optional | Specifies the unique identifier that of the data store if the data store is shared between apps. The storeContext parameter is a dictionary that holds the following keys.**storeAsUserPreference** \[Boolean\]: Contains true to access the data in an app group. Otherwise, set to false.**voltmxAppGroupID** \[string\]: Holds a unique identifier that specifies the app group to be accessed. |

<b>Example</b>

```
voltmx.ds.remove("friends"); 
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | true - if the table is deleted successfullyfalse - if the table is not deleted, or if no datastore exists with the key specified |

<b>Platform Availability</b>

Available on all platforms.

* * *

voltmx.ds.save
------------

This API allows you to save the given data using the specified name identifier in the data store of the mobile device. In case of Mobile Web applications, you have the option to specify where to store the data (cache/session/cookie).

<b>Use Cases</b>

You can use this API to store data on the mobile device that you may require even after quitting the application.

<b>Syntax</b>

voltmx.ds.save([inputtable](#inputtable), [name](#name2), [metainfo, storeContext](#metainfo))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| inputtable \[Array\] - Mandatory | Specifies the table that needs to be saved (array of values) |
| name \[String\] - Mandatory | Specifies the name identifier for the table. The data is stored on the data store with this name identifier. You must use this identifier if you want to retrieve data from the data store. |
| metainfo \[Table\] - Optional | Specifies a table with key-value pairs. These key-value pairs are useful for Mobile Web and indicate where to store the data. You have an option to store the data in the user session or cache or create a cookie to be placed on the device.
> > **_Important:_** The following points are applicable only to **metainfo \[Table\]** parameter:The parameter is mandatory for Server Side Mobile Web.Example code to use: `voltmx.ds.save(["John","Joe","Jack"],"friends",{dsmode:"session"})`

_secure_ means that the data stored on the device store is stored using a secure mode.> **_Note:_** secure is applicable only on Mobile Web and must be used in conjunction with dsmode="cookie". For example, {dsmode="cookie", secure="true"}.

You should provide a key value in the metainfo as key:

> "dsmode" value:"cache/session/cookie"

cache: Data is stored in the application context and shared across all users of the Web Applicationsession: Data is stored in the HTTP session created for a particular usercookie: Data is stored in client browser's cookie store.Based on the mode you specify here, the availability of the data after you quit the application varies.For example, `dsmode="session"`.

 |
| storeContext \[String\] - Optional | Specifies the unique identifier that of the data store if the data store is shared between apps. The storeContext parameter is a dictionary that holds the following keys.**storeAsUserPreference** \[Boolean\]: Contains true to access the data in an app group. Otherwise, set to false.**voltmxAppGroupID** \[string\]: Holds a unique identifier that specifies the app group to be accessed. |

<b>Example</b>

```
voltmx.ds.save(["John","Joe","Jack"],"friends",{dsmode:"session"});
```

<b>Return Values</b>

None.

<b>Error Codes</b>

The following error codes are returned:

*   700 Unknown error
*   701 Invalid parameters specified
*   702 Invalid parameter type.
*   703 Invalid parameter type. A non-string type specified as input
*   704 Unknown error
*   705 Invalid parameters
*   706 Invalid parameter type. A non-string type specified as the name of the datastore

<b>Implementation Details</b>

If you save some other data on the data store with the same name identifier used earlier, data is overridden.

<b>API Usage</b>

We recommend you not to store save sensitive data like passwords, account numbers, and so on using this API.

<b>Platform Availability</b>

Available on all platforms.

![](resources/prettify/onload.png)
