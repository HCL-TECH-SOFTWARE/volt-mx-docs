                            

You are here: Standard Volt MX API

Standard Volt MX API
=================

The Standard Volt MX API provides a set of functions as part of the voltmx Namespace that can retrieve and modify data from files, print data in the log files, and run tasks on worker threads. The Standard Volt MX Iris API also contains functions and constants of the voltmx.nosql API to connect to a database and modify the data.

The Standard Volt MX Iris APIs use the `voltmx Namespace` and the following API elements.

[VoltMX Iris APIs](voltmx_functions.md#volt-mx-namespace)

  
| Function | Description |
| --- | --- |
| [voltmx.convertToBase64](voltmx_functions.md#convertt) | Converts rawbytes (returned by the camera or the encryption API) to a base64 encoded string. |
| [voltmx.convertToRawBytes](voltmx_functions.md#convertr) | Provides your app with the ability to read rawbytes from a base 64 encoded string. |
| [voltmx.evaluateJavaScriptInNativeContext](voltmx_functions.md#evaluateJavaScript) | Enables a web app JavaScript module, which is running in the Browser widget, to execute JavaScript code in the Volt MX Iris native context. |
| [voltmx.getError](voltmx_functions.md#getError) | Retrieves an error object from a handle to the error object. |
| [voltmx.props.getProperty](voltmx_functions.md#props.ge) | Used to access parameters from an external properties file. |
| [voltmx.print](voltmx_functions.md#print) | Prints debugging output. |
| [voltmx.runOnMainThread](voltmx_functions.md#voltmx.run) | Helps you run the JavaScript code on the main thread. It is an asynchronous API. |
| [voltmx.runOnWorkerThread](voltmx_functions.md#voltmx.run2) | Provides apps with multithreding capabilities. |
| [voltmx.type](voltmx_functions.md#type) | Retrieves the data type of the specified input. |

 

Convert rawbytes returned by the camera or encryption APIs to a base64 encoded string using the [voltmx.convertToBase64](voltmx_functions.md#convertt) function. To provide your app with the ability to read rawbytes, use the [voltmx.convertToRawBytes](voltmx_functions.md#convertr) function. Use the [voltmx.getError](voltmx_functions.md#getError) function to retrieve an error object from the try/catch blocks. Using the [voltmx.props.getProperty](voltmx_functions.md#props.ge) function, you can access parameters from an external properties file. Print the debugging output using the [voltmx.print](voltmx_functions.md#print) function, and retrieve data types of inputs using the [voltmx.type](voltmx_functions.md#type) function. To run a JavaScript code on the Main Thread, use the [voltmx.runOnMainThread](voltmx_functions.md#voltmx.run) function. To provide multithreading capabilities to an app, use the [voltmx.runOnWorkerThread](voltmx_functions.md#voltmx.run2) function.

[voltmx.nosql APIs](voltmx_functions.md#volt-mx-nosql-apis)

| Function | Description |
| --- | --- |
| [voltmx.nosql.addRecords](voltmx_functions.md#voltmx.nosql.addRecords) | Replaces a record if the primary key matches, else the record is added. |
| [voltmx.nosql.addOrReplaceRecords](voltmx_functions.md#voltmx.nosql.addOrReplaceRecords) | Replaces a record if the primary key matches, else the record is added. |
| [voltmx.nosql.clearTable](voltmx_functions.md#voltmx.nosql.clearTable) | Clears the existing data in a table in the callback of [openTransaction API](#voltmx.nosql.openDatabase). |
| [voltmx.nosql.closeDatabase](voltmx_functions.md#voltmx.nosql.closeDatabase) | Closes the database connection. |
| [voltmx.nosql.createIndices](voltmx_functions.md#createIndices) | Creates indices for the specified table in the database. |
| [voltmx.nosql.createTable](voltmx_functions.md#voltmx.nosql.createTable) | Creates a table (object store) in the indexed database. |
| [voltmx.nosql.databaseExists](voltmx_functions.md#voltmx.nosql.databaseExists) | Specifies whether the required database exists or not. |
| [voltmx.nosql.deleteDatabase](voltmx_functions.md#voltmx.nosql.deleteDatabase) | Deletes an existing database. |
| [voltmx.nosql.deleteIndices](voltmx_functions.md#deleteIndices) | Deletes indices for the specified table in the database. |
| [voltmx.nosql.deleteRecords](voltmx_functions.md#voltmx.nosql.deleteRecords) | Deletes the rows that match the specified condition. |
| [voltmx.nosql.deleteTable](voltmx_functions.md#voltmx.nosql.deleteTable) | Deletes a table in the database. |
| [voltmx.nosql.fetchRecords](voltmx_functions.md#voltmx.nosql.fetchRecords) | Reads the rows of a table. |
| [voltmx.nosql.getPrimaryKeys](voltmx_functions.md#voltmx.nosql.getPrimaryKeys) | Fetches the primary key of the required table. |
| [voltmx.nosql.getTables](voltmx_functions.md#voltmx.nosql.getTables) | Returns the list of tables in the selected database. |
| [voltmx.nosql.openDatabase](voltmx_functions.md#voltmx.nosql.openDatabase) | Opens an existing database; if the database does not exist, however, the API creates the database and then opens it. |
| [voltmx.nosql.openTransaction](voltmx_functions.md#voltmx.nosql.openTransaction) | Opens a transaction in which you can execute any of the insert, update, or delete operations. |
| [voltmx.nosql.replaceRecords](voltmx_functions.md#voltmx.nosql.replaceRecords) | Replaces the records that match the provided condition. The API also updates the full record with a new set of columns. |
| [voltmx.nosql.tableExists](voltmx_functions.md#voltmx.nosql.tableExists) | Returns the appropriate Boolean value depending if the required table exists or not. |
| [voltmx.nosql.updateRecords](voltmx_functions.md#voltmx.nosql.updateRecords) | Updates rows and specific columns that match the provided condition. |

 

Further, you can check whether a required database exists using the [voltmx.nosql.databaseExists](voltmx_functions.md#voltmx.nosql.databaseExists) function. Use the [voltmx.nosql.openDatabase](voltmx_functions.md#voltmx.nosql.openDatabase) function to open an existing database, or create a new database and open it. Once the database is open, use the [voltmx.nosql.openTransaction](voltmx_functions.md#voltmx.nosql.openTransaction) function to open a transaction and execute operations. To close the connection to a database, use the [voltmx.nosql.closeDatabase](voltmx_functions.md#voltmx.nosql.closeDatabase) function. Delete existing databases using the [voltmx.nosql.deleteDatabase](voltmx_functions.md#voltmx.nosql.deleteDatabase) function.

To check whether a table exists in the database, use the [voltmx.nosql.tableExists](voltmx_functions.md#voltmx.nosql.tableExists) function. Use the voltmx.nosql.createTable function to create a table in an indexed database. Retrieve the primary key of a table using the [voltmx.nosql.getPrimaryKeys](voltmx_functions.md#voltmx.nosql.getPrimaryKeys) function. To retrieve a list of tables present in the database, use the [voltmx.nosql.getTables](voltmx_functions.md#voltmx.nosql.getTables) function. To delete existing data in a table, use the [voltmx.nosql.clearTable](voltmx_functions.md#voltmx.nosql.clearTable) function, and delete a table in the database using the [voltmx.nosql.deleteTable](voltmx_functions.md#voltmx.nosql.deleteTable) function.

Add a record in a table using the [voltmx.nosql.addRecords](voltmx_functions.md#voltmx.nosql.addRecords) function. To replace records matching a specific condition, use the [voltmx.nosql.replaceRecords](voltmx_functions.md#voltmx.nosql.replaceRecords) function. Replace a record matching the primary key using the [voltmx.nosql.addOrReplaceRecords](voltmx_functions.md#voltmx.nosql.addOrReplaceRecords) function. To view the rows of a table, use the [voltmx.nosql.fetchRecords](voltmx_functions.md#voltmx.nosql.fetchRecords) function. Update the rows and columns of a table using the [voltmx.nosql.updateRecords](voltmx_functions.md#voltmx.nosql.updateRecords) function. Use the [voltmx.nosql.deleteRecords](voltmx_functions.md#voltmx.nosql.deleteRecords) function to delete the rows matching a specific condition.

> **_Note:_** The **setAppHeaders**, **setAppFooters**, **appreset**, **readfrombase64** APIs have been deprecated and must not be used to develop new software. However, [documentation for them is provided](unsupportedapis.md#StandardAPI) to help in the maintenance of legacy software.

To view the functionality of the Standard Volt MX Iris API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/StandardKonyAPI)

![](resources/prettify/onload.png)
