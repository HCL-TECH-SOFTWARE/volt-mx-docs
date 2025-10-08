                            

You are here: Offline Data Access API

Offline Data Access API
=======================

The Offline Data Access API allows you to store data onto the device store persistently (data is made available even after application or device restart). You can access this data even when the device is offline, i.e, the device is not connected to any wireless network (cellular or WiFi). The Offline Data Access API has the following API libraries:

**Local Storage API Library**
-----------------------------

Allows users to store and retrieve data in HTML pages from all the windows in the same domain even if the browser is restarted.

The data stored using the LocalStorage APIs is accessible only from the client-side as opposed to the data stored in cookies (accessible from both client-side and server-side).

> **_Note:_** From V9 SP2 onwards, the Local Storage APIs' data for a Volt MX Iris App Viewer child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms.
<!-- > **_Note:_** From V8 SP4 onwards, the Local Storage APIs' data for a Volt MX Iris App Viewer child app is stored in child app data and not under the parent app. This feature is applicable for iOS, Windows, and Android platforms. -->

The Local Storage API Library contains the `voltmx.store Namespace` and related functions:

  
| Function | Description |
| --- | --- |
| [voltmx.store.clear](voltmx.store_functions.md#volt-mx-store-clear) | Allows you to empty the database by clearing all the key-value pairs. If there are no key-value pairs, then the API does not do anything. |
| [voltmx.store.getItem](voltmx.store_functions.md#volt-mx-store-getitem) | Returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns **null** for JavaScript. |
| [voltmx.store.removeItem](voltmx.store_functions.md#volt-mx-store-removeitem) | Removes the item identified by the key, if it exists. If no item with that key exists, the method does not perform any action. |
| [voltmx.store.key](voltmx.store_functions.md#volt-mx-store-key) | Returns the name of the nth key in the list. If n is greater than the number of key/value pairs in the object, then this method returns **null** for JavaScript. |
| [voltmx.store.setItem](voltmx.store_functions.md#volt-mx-store-setitem) | Creates a structured clone of the given value. If this raises an exception then the list associated with the object is left unchanged. |
| [voltmx.store.length](voltmx.store_functions.md#volt-mx-store-length) | Returns the length of the local storage. |

 

To store data items in a key-value format in the Local Storage, use the [voltmx.store.setItem](voltmx.store_functions.md#volt-mx-store-setitem) function. Use the [voltmx.store.key](voltmx.store_functions.md#volt-mx-store-key) function to retrieve the name of an existing key. Using the [voltmx.store.length](voltmx.store_functions.md#volt-mx-store-length) function, you can find the amount of the local storage. To retrieve a stored value, use the [voltmx.store.getItem](voltmx.store_functions.md#volt-mx-store-getitem) function. Use the [voltmx.store.removeItem](voltmx.store_functions.md#volt-mx-store-removeitem) function to remove a data item from the local storage. To empty the database, use the [voltmx.store.clear](voltmx.store_functions.md#volt-mx-store-clear) function.

To view the functionality of the Data Access API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/DataAccessAPI)

 

Web SQL API Library
-------------------

Allows users to manipulate client-side databases using SQL. Use these APIs to store data in databases that can be queried using a variant of SQL.

The Web SQL API Library contains the `voltmx.db Namespace` and related functions:

| Function | Description |
| --- | --- |
| [voltmx.db.changeVersion](voltmx.db_functions.md#volt-mx-db-changeversion) | Allows scripts to automatically verify the version number and change it at the same time during a schema update. |
| [voltmx.db.closeDatabase](voltmx.db_functions.md#volt-mx-db-closedatabase) | Allows you to close the database handler of the specified version of a database. |
| [voltmx.db.executeSql](voltmx.db_functions.md#volt-mx-db-executesql) | Allows you to execute a specified SQL statement on the given database. This is an asynchronous API. |
| [voltmx.db.openDatabase](voltmx.db_functions.md#volt-mx-db-opendatabase) | Allows you to open the specified version of a database. This is an asynchronous API. |
| [voltmx.db.readTransaction](voltmx.db_functions.md#volt-mx-db-readtransaction) | Allows you to read a specified transaction. This API creates a _SQLTransaction_ object for read-only transactions. |
| [voltmx.db.sqlResultsetRowItem](voltmx.db_functions.md#volt-mx-db-sqlresultsetrowitem) | Returns the row available at the specified index. If there is no such row, then the API returns **null** for JavaScript. |
| [voltmx.db.transaction](voltmx.db_functions.md#volt-mx-db-transaction) | Allows you to execute the specified transaction on the given database. When you invoke this API, it returns immediately and asynchronously executes the transaction. |

 

Open a specific version of the database using the [voltmx.db.openDatabase](voltmx.db_functions.md#volt-mx-db-opendatabase) function. You can then create an SQLTransaction object using the [voltmx.db.transaction](voltmx.db_functions.md#volt-mx-db-transaction) function. Use the [voltmx.db.readTransaction](voltmx.db_functions.md#volt-mx-db-readtransaction) function to read a specific transaction. Execute an SQL statement using the [voltmx.db.executeSql](voltmx.db_functions.md#volt-mx-db-executesql) function. Use the [voltmx.db.sqlResultsetRowItem](voltmx.db_functions.md#volt-mx-db-sqlresultsetrowitem) function to retrieve the row available at a specific index. You can also verify if there is any schema update and then change the version of the database being used by using the [voltmx.db.changeVersion](voltmx.db_functions.md#volt-mx-db-changeversion) function.

> **_Important:_** WebSQL implementation utilizes the database engines bundled along with the underlying SDK (SQLite in most of the cases). Volt MX Iris Platform ensures that the WebSQL semantics are same across platforms, but the uniformity of SQL semantics across native platforms is not guaranteed. For example, the WebSQL APIs have no control over the way CONSTRAINTS are supported as per the SQL92 specification. For more information on SQLite refer [Appendix](sqllite.md).

> **_Important:_** WebSQL APIs are not supported on Internet Explorer and Firefox web browsers.

> **_Important:_** The framework does not store the password argument to **voltmx.db.openDatabase()** function, it is the responsibility of application developer to secure the password.

#### Limitations

This section describes the limitations of WebSQL APIs:

*   Table names and Column names are case-sensitive. For example, "Employee" and "employee" refer to two different tables. It is observed that table names and columns name are case-insensitive on Android platform, but case-sensitive on iPhone platform. For a cross platform uniform behavior, assume that the table names and column names are case-sensitive.
*   When using the binding "?" placeholders, ensure that the number of binding parameters and the number of values are the same. Else, the database can be inconsistent.
    
    For example, the following statement can cause the database to be inconsistent as the number of binding parameters are 6 and the number of values are 3:
    
    local stmt3 = "insert into EMP\_DETAILS values(?,?,?,?,?,?)"
    
```
voltmx.db.executeSql(tx,stmt3,{
    '1', '2', '3'
    }, successCallback,errorCallback);
```
*   Nested database transactions are not supported across platforms. Avoid starting a new transaction in the successcallback function of an existing transaction.
*   The error codes might vary between the platforms. This is due to the fact that underlying SDKs do not expose all the errors that can be mapped to HTML5 WebSQL Specification. The application should not build its business logic around these error codes. These error codes are only for diagnostic purpose.
*   Accessing _insertid_ key in the resultset rows leads to an error in SPA.
*   The WebSQL APIs are not supported on Internet Explorer and Firefox.

The actual database used for storing the data and its visibility to other applications is defined in the following table:

| Platform | Client Database Engine | Accessible to other applications |
| --- | --- | --- |
| iPhone/iPad | SQLite | The storage area is unique to the application. |
| Android/Android Tablet | SQLite | The storage area is unique to the application. |
| Windows | SQLite | The storage area is unique to the application. |
| Single Page Application (SPA) | SQLite | Determined by the browser implementation. |

  
The following table indicates the JavaScript datatypes and their corresponding SQLite datatypes:

<table style="caption-side: top;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">JavaScript Datatype</th><th class="TableStyle-Basic-BodyD-Column1-Body1">SQLite Datatype</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">string</td><td class="TableStyle-Basic-BodyD-Column1-Body1">TEXT</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">number</td><td class="TableStyle-Basic-BodyD-Column1-Body1">REAL</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">byte array (rawbytes)</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BLOB</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">boolean</td><td class="TableStyle-Basic-BodyD-Column1-Body1">BOOLEAN</td></tr></tbody></table>

![](resources/prettify/onload.png)
