                            


voltmx.db Namespace
=================

The voltmx.db namespace contains the following API elements.

Functions
---------

The voltmx.db namespace contains the following functions.

voltmx.db.changeVersion
---------------------

The _changeVersion_ method allows scripts to automatically verify the version number and change it at the same time during a schema update. This method creates an SQLTransactionSync object (executeSQL) for a read/write transaction. The database's actual version changes to newVersion only if the first argument (oldVersion) exactly matches the database's actual version, otherwise throws a SQLException.

When you invoke this API, it returns immediately and asynchronously reads the transaction.

<b>Syntax</b>

voltmx.db.changeVersion([dbaseObjectId](#dbaseObjectId25), [oldVersion, newVersion, SQLTransactionCallback, SQLTransactionErrorCallback, SQLTransactionVoidCallback](#dbaseObjectId1))

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| dbaseObjectId \[String\] - Mandatory | Specifies the unique ID of the database |
| oldVersion \[String\] - Mandatory | Specifies the older version of the database. |
| newVersion \[String\] - Mandatory | Specifies the newer version of the database. |
| SQLTransactionCallback \[Function\] - Mandatory | Specifies the callback function that contains the transactions. For example:function callback(dbId){//SQLTransaction contains implementation of executeSql method// invoke database.executesql method for sql trasaction} |
| SQLTransactionErrorCallback \[Function\] - Optional | Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database. For example:function errorCallback(SQLError){//code} |
| SQLVoidCallback \[Function\] - Optional | Specifies the callback that must be executed if the transaction is successful. For example:function successCallback(){//code} |

<b>Example</b>

```
changeVersion: function() {
    this.baseObjectId = voltmx.db.openDatabase("webSqlDB",
        "1.0",
        "Sample SQL Database",
        5 * 1024 * 1024);
    voltmx.db.changeVersion("1.0", "1.1", null, this.commonErrorCallback, this.commonErrorCallback);
    voltmx.print("");
}
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available on all platforms\* except SPA for desktop IE8, IE9, IE10 browsers. \*Dummy implementation on Mobile Web.

voltmx.db.closeDatabase
---------------------

This API allows you to close the database handler of the specified version of a database.

<b>Syntax</b>

voltmx.db.closeDatabase([dbaseObjectId](#closedbaseObjectId))

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| dbaseObjectId \[String\] - Mandatory | Specifies the unique ID of the database |

<b>Example</b>

```
//The following function invokes the closeDatabase API
function closeDatabase() {
    var dbName = "voltmxtestDB";
    var version = "1.0";
    var displayName = "demo web SQL Database";
    var estimatedSize = 5 * 1024 * 1024; //5*1024*1024 indicates 5 MB
    var databaseObjectId = voltmx.db.openDatabase(dbName, version, displayName, estimatedSize);
    //databaseObjectId contains the unique ID of the database	
    voltmx.db.closeDatabase(databaseObjectId);
}
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available on iOS platform.

voltmx.db.executeSql
------------------

This API allows you to execute a specified SQL statement on the given database. This is an asynchronous API.

> **_Important:_** The table names and column names are case sensitive.

<b>Syntax</b>

voltmx.db.executeSql([transactionId](#transactionId),[SQLStatement](#SQLStatement), [arguments](#arguments),[SQLStatementSuccessCallback](#SQLStatementSuccessCallback),[SQLStatementErrorCallback](#SQLStatementErrorCallback))

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| transactionId \[String\] - Mandatory | Specifies the unique ID of the transaction. |
| SQLStatement \[String\] - Mandatory | Specifies the SQL statement that must be executed. |
| arguments \[Object\] - Optional | Specifies the arguments for executing the SQL statement. If this parameter is not specified or is nil, then the statement is executed without any arguments.The supported argument types are:NULL in JavaScript REALTEXTBLOB.No type affinity is performed. |
| SQLStatementSuccessCallback \[Function\] - Optional | Specifies the callback function that must be executed when the execution of the SQL statement is a success. |
| SQLStatementErrorCallback \[Function\] - Optional | Specifies the callback function that must be executed when the execution of the SQL statement is a failure.This callback returns a boolean value._true_ - ends the execution of the transaction. _true_ is returned if there is no callback function specified as a parameter.> **_Important:_** When _true_ is returned, the transaction is rolled back._false_ - continues executing the transaction.The default return value is _false_ for this callback. |

<b>Example</b>

```
The below function inserts 3 rows into the 'employee_details' table.   
var insertTable = [
    ["Siberius", 10],
    ["Clark", 10],
    ["Richard", 20]
];
for (i = 1;
    ((insertTable) != null) & amp; & amp; i & lt; = insertTable.length; i++) {
    var v = insertTable[voltmx.decrement(i)];
    var sqlStatement = "INSERT INTO emp_details VALUES (" + (this.count + 1000) + ",\"" + v[voltmx.decrement(1)] + "\"," + v[voltmx.decrement(2)] + ")";
    this.count = this.count + 1;
    voltmx.db.executeSql(transactionID,
        sqlStatement,
        null,
        this.success_insertData,
        this.commonErrorCallback);
}
```

<b>Return Values</b>

None

<b>Error Codes</b>

The following table lists the error codes along with its corresponding error messages:

  
| Error Code | Error Message | Description |
| --- | --- | --- |
| 1 | UNKNOWN\_ERR | The statement failed for database reasons not covered by any other error code. |
| 2 | DATABASE\_ERR | The operation failed because the actual database version was not what it should be. For example, a statement found that the actual database version no longer matched the [expected version](http://www.w3.org/TR/webdatabase#concept-database-expected-version) of the `Database` or `DatabaseSync` object, or the `Database.changeVersion()` or `DatabaseSync.changeVersion()` methods were passed a version that doesn't match the actual database version. |
| 3 | TOO\_LARGE\_ERR | The statement failed because the data returned from the database was too large. The SQL "LIMIT" modifier might be useful to reduce the size of the result set. |
| 4 | QUOTA\_ERR | The statement failed because there was not enough remaining storage space, or the storage quota was reached and the user declined to give more space to the database. |
| 5 | SYNTAX\_ERR | The statement failed because of a syntax error, or the number of arguments did not match the number of ? placeholders in the statement, or the statement tried to use a statement that is not allowed, such as BEGIN, COMMIT, or ROLLBACK, or the statement tried to use a verb that could modify the database but the transaction was read-only. |
| 6 | CONSTRAINT\_ERR | An INSERT, UPDATE, or REPLACE statement failed due to a constraint failure. For example, because a row was being inserted and the value given for the primary key column duplicated the value of an existing row. |
| 7 | TIMEOUT\_ERR | A lock for the transaction could not be obtained in a reasonable time. |

For more information, refer [SQL Error Codes](http://www.w3.org/TR/webdatabase#dom-sqlexception-code-unknown)

<b>Platform Availability</b>

Available on all platforms\* except for SPA in Windows Phone 7.5 and windows Phone 8 browsers, for desktop IE8, IE9, IE10 browsers.\*Dummy Implementation on Mobile Web.

voltmx.db.openDatabase
--------------------

This API allows you to open the specified version of a database. This is an asynchronous API.

<!-- > **_Important:_** The passphrase parameter in this API is not supported in 6.5 plugins, so database encryption is not available in 6.5 plugins. -->

<b>Syntax</b>

voltmx.db.openDatabase([dbname](#name),[version](#version),[displayName](#displayName), [estimatedSize](#estimatedsize), [passphrase](#passphrase))

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| dbname \[String\] - Mandatory | Specifies the actual name of the database that you want to open. |
| version \[String\] - Mandatory | Specifies the version of the database that you want to open. |
| displayName \[String\] - Mandatory | Specifies the display name of the database that you want to open. |
| estimatedSize \[Number\] - Optional | Specifies the approximate size of the database in bytes.> **_Note:_** This parameter is applicable only on the SPA platform. |

<b>passphrase</b>

This is applicable for [iOS](#passphraseiOS) and [Android](#passphraseAndroid)

<b>iOS</b>

**passphrase\[Array\] - Optional**

        In iOS, this argument is used to specify Pragma statements (Array) to encrypt database.

**Usage**

*   To link the SQLCipher library, extract the KAR file with **\-sqlcipher** option. After the extraction, pass the **passphrase** for the SQL engine to encrypt the database.  

perl extract.pl /Users/PLATFROM/Downloads/voltmxappipad.KAR –sqlcipher

> **_Note:_** For more information on this parameter and Pragma statements, see [https://www.zetetic.net/sqlcipher/sqlcipher-api/](https://www.zetetic.net/sqlcipher/sqlcipher-api/).

**Android**

**passphrase \[String\] - Optional**

In Android, this argument is used to specify password (String) to encrypt database.

<!-- The developer needs to enable **Support SQL DB Encryption (FIPS)** option in **VoltMX Iris\> Application Properties > Native > Android** section in order to support database encryption using passphrase. -->
The developer needs to enable **Support SQL DB Encryption (FIPS)** option in **VoltMX Iris \> Project Settings > Native > Android** section in order to support database encryption using passphrase.


**Windows 10**

A free version of the sqlite library is available to support encryption. Therefore a license is not needed and you do not need to copy the zip files.

> **_Important:_**  
The database will not be encrypted in the following conditions:   
1. If **Support SQL DB Encryption (FIPS)** option is enabled and empty string is passed as passphrase.  
2. If **Support SQL DB Encryption (FIPS)** option is not enabled ,passphrase will be ignored and database is non encrypted.  
3. If passphrase is not passed.  

> **_Important:_** Encrypted and non-encrypted databases cannot be interchangeably opened using this API.

> **_Important:_** The other Web SQL APIs operate on encrypted DB seamlessly if the `databaseObjectId` passed to them is opened using `voltmx.db.openDatabase()` API with passphrase.

> **_Important:_** The framework does not store the passphrase argument to `voltmx.db.openDatabase()` API, it is responsibility of application developer to secure the password.

<b>Example</b>

```
//The below function will invoke openDatabase
function openDatabase() {
    var dbName = "voltmxtestDB";
    var version = "1.0";
    var displayName = "demo web SQL Database";
    var estimatedSize = 5 * 1024 * 1024; //5*1024*1024 indicates 5 MB

    //Note: Use only one of the following passphrases depending on platform 
    //Passphrase is string in case of android.
    var passphrase = "samplepassword";

    //Passphrase is pragma array in case of iOS.
    passphrase = ["PRAGMA key = 'old passphrase';"];

    var databaseObjectId = voltmx.db.openDatabase(dbName, version, displayName, estimatedSize, passphrase);
    //databaseObjectId contains the unique ID of the database
}
```

<b>Return Values</b>

  
| Return Value | Description |
| --- | --- |
| databaseObjectId \[userdata\] | Returns the unique ID of the database. The identifier is userdata ( platform specific instance) and is not specifically String. Developers must not rely on the type of the identifier. |

 

<b>Platform Availability</b>

Available on all platforms(dummy implementation on MobileWeb) except for SPA in desktop IE8, IE9, and IE10 browsers.

<b>Using the Pre Bundled Database</b>

**Bundling:** For information about how to bundle a database, refer to the Pre Bundling the Files.

**Accessing:** The [voltmx.io.FileSystem.getDatabaseDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatabasedirectorypath) API returns the path where voltmx.db.openDatabase API opens a specified database file.

You need to copy pre bundled database files using the [voltmx.io.FileSystem.copyBundledRawFileTo](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-copybundledrawfileto) API to the path returned by [voltmx.io.FileSystem.getDatabaseDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatabasedirectorypath) API and then you can read or edit a pre bundled database information using the voltmx.db.openDatabase API just by opening database using the file name.

```
//Example for copying and opening the pre bundled database  
//The destination file name can be different from the source.  
var destFilePath = voltmx.io.FileSystem.getDatabaseDirectoryPath()+”test.db”;  
var fileObj = null;  
try{  
    var file = new voltmx.io.File(destFilePath);  
    //copyBundledRawFileTo API overrides the destination file with new one.  
    //Hence check before copying  
    if(!file.exists()){  
      fileObj = voltmx.io.FileSystem.copyBundledRawFileTo(dbName, destFilePath);  
    }else{  
      fileObj = file;  
      alert("File is already available");  
      return;  
    }  
} catch(e) {  
    voltmx.print(“Exception “+e);  
  }  
  if(fileObj == null){  
    voltmx.print(“Copy failed”);  
  }else{  
    voltmx.print(“Copy Success”);  
  }  
//Opening the copied DB using openDatabase API  
dbObject = voltmx.db.openDatabase("test.db", "1.0", "Prebundled SQL Database", 5 * 1024 * 1024);
```

voltmx.db.readTransaction
-----------------------

This API allows you to read a specified transaction. This API creates a _SQLTransaction_ object for read-only transactions.

When you invoke this API, it returns immediately and asynchronously reads the transaction.

> **_Important:_** You can only read queries using this API. The _voltmx.db.readTransaction_ API results in a SYNTAX\_ERR in case of DML commands in the SQL statement. DML commands are not supported in this API.

> **_Important:_** The table names and column names are case sensitive.

<b>Syntax</b>

voltmx.db.readTransaction([dbaseObjectId](#dbaseObjectId1),[TransactionCallback](#TransactionCallback1),[TransactionErrorCallback](#TransactionErrorCallback1),  
[SuccessCallback](#SuccessCallback1))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| dbaseObjectId \[String\] - Mandatory | Specifies the unique ID of the database. |
| TransactionCallback \[Function\] - Mandatory | Specifies the callback function that contains the transactions.For example:function callback(dbId){//Code} |
| TransactionErrorCallback \[Function\] - Optional | Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.For example:function errorCallback(SQLError){//Code} |
| SuccessCallback \[Function\] - Optional | Specifies the callback that must be executed if the transaction is successful.For example:function successCallback(){//code} |

<b>Example</b>

```
//The below function specifies the callback function that contains the transactions.
function myTransactionCallback(dbId) {
    //SQLTransaction contains implementation of executeSql method
    // invokevoltmx.db.executeSql method for sql trasaction
}
//The below function specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.
function myTransactionErrorCallback(SQLError) {
    // proceed with the logic
}
//The below function specifies the callback that must be executed if the transaction is successful.
function mySuccessCallback() {
    // proceed with the logic
}
//The below function will invoke readTransaction 
function readTransaction() {
    var dbName = "voltmxtestDB";
    var version = "1.0";
    var displayName = "demo web SQL Database";
    var estimatedSize = 5 * 1024 * 1024; //5*1024*1024 indicates 5 MB
    var databaseObjectId = voltmx.db.openDatabase(dbName, version, displayName, estimatedSize);
    //databaseObjectId contains the unique ID of the database	
    voltmx.db.readTransaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);
}
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available on all platforms\* except for SPA for desktop IE8, IE9, IE10 browsers.\*Dummy Implementation on Mobile Web.

voltmx.db.sqlResultsetRowItem
---------------------------

This API returns the row available at the specified index. If there is no such row, then the API returns **null** for JavaScript.

> **_Important:_** The table names and column names are case sensitive.

<b>Syntax</b>

voltmx.db.sqlResultsetRowItem([transactionID](#transactionId),[SQLResultSet](#SQLResultSet),[index](#index))

<b>Input Parameters</b>

| Parameters | Description |
| --- | --- |
| transactionID \[String\] - Mandatory | Specifies the unique ID of the transaction. |
| SQLResultSet \[Array of JS Objects\] - Mandatory | Specifies the name of the SQL result set. |
| index \[Number\] - Mandatory | Specifies the index from which the row is to be retrieved. |

  

<b>Example</b>

```
//The below function specifies the callback function that must be executed when the execution of the SQL statement is a success also invokes sqlResultsetRowItem.
function sql_success(transactionId, resultset){
	//logic to process the resultset
	for (var i=0; i<resultset.length; i++){
		var rowItem =voltmx.db.sqlResultsetRowItem(transactionId,resultset, i);
		alert("empID:" + rowItem["empID"] + " empName:" + rowItem["empName"] + " depID:" + rowItem["depName"]);
	}
}

//The below function specifies the callback function that must be executed when the execution of the SQL statement is a failure.
 function sql_errorCallBack(err){
	alert("Error processing sql statement error code=" + err["code"]);
}

```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| rowitem \[Array of Objects\] | Returns the row item at the specified index |
| null/nil | Returns null/nil if there is no row available at the specified index |

 

<b>Platform Availability</b>

Available on all platforms\* except for SPA for desktop IE8, IE9, IE10 browsers.\*Dummy Implementation on Mobile Web.

voltmx.db.transaction
-------------------

This API allows you to execute the specified transaction on the given database. When you invoke this API, it returns immediately and asynchronously executes the transaction.

This is an asynchronous API. This API creates an `SQLTransaction` object.

> **_Important:_** The table names and column names are case sensitive.

<b>Syntax</b>

voltmx.db.transaction([dbaseObjectId](#dbaseObjectId),[transactionCallback](#TransactionCallback),[transactionErrorCallback](#TransactionErrorCallback),  
[successCallback](#SuccessCallback))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| dbaseObjectId \[String\] - Mandatory | Specifies the unique ID of the database |
| transactionCallback \[Function\] - Mandatory | Specifies the callback function that contains the transactions.For example:function callback(dbId){ //SQLTransaction contains implementation of executeSql method // invoke database.executesql method for sql trasaction } |
| transactionErrorCallback \[Function\] - Optional | Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.For example:function errorCallback(SQLError){//write code here} |
| successCallback \[Function\] - Optional | Specifies the callback that must be executed if the transaction is successful.For example:function successCallback(){//code here}When the transaction is successful, this callback is executed along with the callback function of the _voltmx.db.executeSql_ API. |

<b>Example</b>

```
//The below function specifies the callback function that contains the transactions.
function myTransactionCallback(dbId) {
    //SQLTransaction contains implementation of executeSql method
    // invokevoltmx.db.executeSql method for sql trasaction
}
//The below function specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.
function myTransactionErrorCallback(SQLError) {
    // proceed with the logic
}
//The below function specifies the callback that must be executed if the transaction is successful.
function mySuccessCallback() {
    // proceed with the logic
}
//The below function will invoke transaction 
function transaction() {
    var dbName = "voltmxtestDB";
    var version = "1.0";
    var displayName = "demo web SQL Database";
    var estimatedSize = 5 * 1024 * 1024; //5*1024*1024 indicates 5 MB
    var databaseObjectId = voltmx.db.openDatabase(dbName, version, displayName, estimatedSize);
    //databaseObjectId contains the unique ID of the database	

    voltmx.db.transaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);
}
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Available on all platforms\* except for SPA for desktop IE8, IE9, IE10 browsers.\*Dummy Implementation on Mobile Web.

![](resources/prettify/onload.png)
